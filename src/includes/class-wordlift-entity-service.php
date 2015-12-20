<?php

/**
 * Provide entity-related services.
 *
 * @since 3.1.0
 */
class Wordlift_Entity_Service {

	/**
	 * The Log service.
	 *
	 * @since 3.2.0
	 * @access private
	 * @var \Wordlift_Log_Service $log_service The Log service.
	 */
	private $log_service;

	/**
	 * The UI service.
	 *
	 * @since 3.2.0
	 * @access private
	 * @var \Wordlift_UI_Service $ui_service The UI service.
	 */
	private $ui_service;

	/**
	 * The Schema service.
	 *
	 * @since 3.3.0
	 * @access private
	 * @var \Wordlift_Schema_Service $schema_service The Schema service.
	 */
	private $schema_service;
	/**
	 * The entity post type name.
	 *
	 * @since 3.1.0
	 */
	const TYPE_NAME = 'entity';

	/**
	 * Entity rating meta key.
	 *
	 * @since 3.3.0
	 */
	const RATING_META_KEY = '_wl_entity_rating';

	/**
	 * Max rating.
	 *
	 * @since 3.3.0
	 */
	const RATING_MAX = 7;
	/**
	 * The alternative label meta key.
	 *
	 * @since 3.2.0
	 */
	const ALTERNATIVE_LABEL_META_KEY = '_wl_alt_label';

	/**
	 * The alternative label input template.
	 *
	 * @since 3.2.0
	 */
	// TODO: this should be moved to a class that deals with HTML code.
	const ALTERNATIVE_LABEL_INPUT_TEMPLATE = '<div class="wl-alternative-label">
                <label class="screen-reader-text" id="wl-alternative-label-prompt-text" for="wl-alternative-label">Enter alternative label here</label>
                <input name="wl_alternative_label[]" size="30" value="%s" id="wl-alternative-label" type="text">
                <button class="button wl-delete-button">%s</button>
                </div>';

	/**
	 * A singleton instance of the Entity service.
	 *
	 * @since 3.2.0
	 * @access private
	 * @var \Wordlift_Entity_Service $instance A singleton instance of the Entity service.
	 */
	private static $instance;

	/**
	 * Create a Wordlift_Entity_Service instance.
	 *
	 * @since 3.2.0
	 *
	 * @param \Wordlift_UI_Service $ui_service The UI service.
	 */
	public function __construct( $ui_service, $schema_service ) {

		$this->log_service = Wordlift_Log_Service::get_logger( 'Wordlift_Entity_Service' );

		// Set the UI service.
		$this->ui_service = $ui_service;

		// Set the Schema service.
		$this->schema_service = $schema_service;

		// Set the singleton instance.
		self::$instance = $this;

	}

	/**
	 * Get the singleton instance of the Entity service.
	 *
	 * @since 3.2.0
	 * @return \Wordlift_Entity_Service The singleton instance of the Entity service.
	 */
	public static function get_instance() {

		return self::$instance;
	}

	/**
	 * Get the entities related to the last 50 posts published on this blog (we're keeping a long function name due to
	 * its specific function).
	 *
	 * @since 3.1.0
	 *
	 * @return array An array of post IDs.
	 */
	public function get_all_related_to_last_50_published_posts() {

		// Global timeline. Get entities from the latest posts.
		$latest_posts_ids = get_posts( array(
			'numberposts' => 50,
			'fields'      => 'ids', //only get post IDs
			'post_type'   => 'post',
			'post_status' => 'publish'
		) );

		if ( empty( $latest_posts_ids ) ) {
			// There are no posts.
			return array();
		}

		// Collect entities related to latest posts
		$entity_ids = array();
		foreach ( $latest_posts_ids as $id ) {
			$entity_ids = array_merge( $entity_ids, wl_core_get_related_entity_ids( $id, array(
				'status' => 'publish'
			) ) );
		}

		return $entity_ids;
	}

	/**
	 * Determines whether a post is an entity or not.
	 *
	 * @since 3.1.0
	 *
	 * @param int $post_id A post id.
	 *
	 * @return true if the post is an entity otherwise false.
	 */
	public function is_entity( $post_id ) {

		return ( self::TYPE_NAME === get_post_type( $post_id ) );
	}

	/**
	 * Find entity posts by the entity URI. Entity as searched by their entity URI or same as.
	 *
	 * @since 3.2.0
	 *
	 * @param string $uri The entity URI.
	 *
	 * @return WP_Post|null A WP_Post instance or null if not found.
	 */
	public function get_entity_post_by_uri( $uri ) {

		$query = new WP_Query( array(
				'posts_per_page' => 1,
				'post_status'    => 'any',
				'post_type'      => self::TYPE_NAME,
				'meta_query'     => array(
					'relation' => 'OR',
					array(
						'key'     => Wordlift_Schema_Service::FIELD_SAME_AS,
						'value'   => $uri,
						'compare' => '='
					),
					array(
						'key'     => WL_ENTITY_URL_META_NAME,
						'value'   => $uri,
						'compare' => '='
					)
				)
			)
		);

		// Get the matching entity posts.
		$posts = $query->get_posts();

		// Return null if no post is found.
		if ( 0 === count( $posts ) ) {
			return null;
		}

		// Return the found post.
		return $posts[0];
	}

	/**
	 * Fires once a post has been saved.
	 *
	 * @since 3.2.0
	 *
	 * @param int $post_id Post ID.
	 * @param WP_Post $post Post object.
	 * @param bool $update Whether this is an existing post being updated or not.
	 */
	public function save_post( $post_id, $post, $update ) {

		// If it's not an entity, return.
		if ( ! $this->is_entity( $post_id ) ) {
			return;
		}

		// Get the alt labels from the request (or empty array).
		$alt_labels = isset( $_REQUEST['wl_alternative_label'] ) ? $_REQUEST['wl_alternative_label'] : array();

		// Set the alternative labels.
		$this->set_alternative_labels( $post_id, $alt_labels );

	}

	/**
	 * Set the alternative labels.
	 *
	 * @since 3.2.0
	 *
	 * @param int $post_id The post id.
	 * @param array $alt_labels An array of labels.
	 */
	public function set_alternative_labels( $post_id, $alt_labels ) {
		
		// Force $alt_labels to be an array
		if( !is_array( $alt_labels ) ) {
			$alt_labels = array( $alt_labels );
		}

		$this->log_service->debug( "Setting alternative labels [ post id :: $post_id ][ alt labels :: " . implode( ',', $alt_labels ) . " ]" );

		// Delete all the existing alternate labels.
		delete_post_meta( $post_id, self::ALTERNATIVE_LABEL_META_KEY );
		
		// Set the alternative labels.
		foreach ( $alt_labels as $alt_label ) {
			if ( ! empty( $alt_label ) ) {
				add_post_meta( $post_id, self::ALTERNATIVE_LABEL_META_KEY, $alt_label );
			}
		}

	}

	/**
	 * Retrieve the alternate labels.
	 *
	 * @since 3.2.0
	 *
	 * @param int $post_id Post id.
	 *
	 * @return mixed An array  of alternative labels.
	 */
	public function get_alternative_labels( $post_id ) {

		return get_post_meta( $post_id, self::ALTERNATIVE_LABEL_META_KEY );
	}

	/**
	 * Fires before the permalink field in the edit form (this event is available in WP from 4.1.0).
	 *
	 * @since 3.2.0
	 *
	 * @param WP_Post $post Post object.
	 */
	public function edit_form_before_permalink( $post ) {

		// If it's not an entity, return.
		if ( ! $this->is_entity( $post->ID ) ) {
			return;
		}

		// Print the input template.
		$this->ui_service->print_template( 'wl-tmpl-alternative-label-input', $this->get_alternative_label_input() );

		// Print all the currently set alternative labels.
		foreach ( $this->get_alternative_labels( $post->ID ) as $alt_label ) {

			echo $this->get_alternative_label_input( $alt_label );

		};

		// Print the button.
		$this->ui_service->print_button( 'wl-add-alternative-labels-button', __( 'Add more titles', 'wordlift' ) );

	}

	/**
	 * Add admin notices for the current entity depending on the current rating.
	 *
	 * @since 3.3.0
	 *
	 * @param WP_Post $post Post object.
	 */
	public function in_admin_header() {

		// If you're not in the entity post edit page, return.
		if ( self::TYPE_NAME !== get_current_screen()->id ) {
			return;
		}
		// Retrieve the current global post
		global $post;
		// If it's not an entity, return.
		if ( ! $this->is_entity( $post->ID ) ) {
			return;
		}
		// Retrieve an updated rating for the current entity
		$rating = $this->calculate_rating_for( $post->ID );
		// If there is at least 1 warning
		if ( isset( $rating[ 'warnings' ] ) && count( $rating[ 'warnings' ] > 0 ) ) {
			Wordlift_Notice_Service::get_instance()->add_error( $rating[ 'warnings' ] );
		}
		
	}

	/**
	 * Calculate rating for a given entity
	 * Rating depends from following criteria
	 *
	 * 1. Is the current entity related to at least 1 post?
	 * 2. Is the current entity content post not empty?
	 * 3. Is the current entity related to at least 1 entity?
	 * 4. Is the entity published? 
	 * 5. There is a a thumbnail associated to the entity?
	 * 6. Has the entity a sameas defined?
	 * 7. Are all schema.org required metadata compiled?
	 *
	 * Each positive check means +1 in terms of rating score
	 *
	 * @since 3.3.0
	 *
	 * @param int $post_id The entity post id.
	 *
	 * @return int An array representing the rating obj.
	 */
	public function calculate_rating_for( $post_id ) {
		
		// If it's not an entity, return.
		if ( ! $this->is_entity( $post_id ) ) {
			return;
		}
		// Retrieve the post object
		$post = get_post( $post_id );
		// Rating value
		$rating = 0;
		// Store warning messages
		$warnings = array();

		// Is the current entity related to at least 1 post?
		( count( wl_core_get_related_post_ids( $post->ID ) ) > 0 ) ?
			$rating++ : 
			array_push( $warnings, __( 'There are no related posts for the current entity. Use your entities to classify your posts.', 'wordlift' ) );
		
		// Is the post content not empty?
		( ! empty( $post->post_content ) ) ?
			$rating++ :
			array_push( $warnings, __( 'This entity has not description. Be sure to provide a custom description for each entity.', 'wordlift' ) );
		
		// Is the current entity related to at least 1 entity?
		// Was the current entity already disambiguated?
		( count( wl_core_get_related_entity_ids( $post->ID ) ) > 0 ) ?
			$rating++ :
			array_push( $warnings, __( 'There are no related entities for the current entity. Work deeper on your entity description.', 'wordlift' ) );
		
		// Is the entity published?
		( 'publish' === get_post_status( $post->ID ) ) ?
			$rating++ :
			array_push( $warnings, __( 'This entity is not published. It will not appear within analysis results.', 'wordlift' ) );
		
		// Has a thumbnail?
		( has_post_thumbnail( $post->ID ) ) ?
			$rating++ :
			array_push( $warnings, __( 'This entity has no featured image yet.', 'wordlift' ) );
		
		// Get all post meta keys for the current post		
		global $wpdb;
		$query = $wpdb->prepare( 
			"SELECT DISTINCT(meta_key) FROM $wpdb->postmeta  WHERE post_id = %d", $post->ID 
		);
		
		// Check intersection between available meta keys 
		// and expected ones arrays to detect missing values
		$available_meta_keys = $wpdb->get_col( $query );
		// If each expected key is contained in available keys array ...
		( in_array( Wordlift_Schema_Service::FIELD_SAME_AS, $available_meta_keys ) ) ?
			$rating++ :
			array_push( $warnings, __( 'There are no sameAs configured for this entity. SameAs is important to link your data with external existing ones.', 'wordlift' ) );
		
		$schema = wl_entity_type_taxonomy_get_type( $post_id );
		$expected_meta_keys = array_keys( $schema[ 'custom_fields' ] );

		$intersection = array_intersect( $expected_meta_keys, $available_meta_keys );
		// If each expected key is contained in available keys array ...
		( count( $intersection ) === count( $expected_meta_keys ) ) ?
			$rating++ :
			array_push( $warnings, __( 'Schema.org metadata for this entity are not completed. A complete schema.org markup makes your data meaningful for search engines.', 'wordlift' ) );
		
		// MAX : $rating = 3 : x 
		// See http://php.net/manual/en/function.round.php
		$final_rating = round( ( $rating * 3 ) / self::RATING_MAX, 0, PHP_ROUND_HALF_UP );
		if ( 0 == $final_rating ) {
			$final_rating = 1;
		}
		return array( 
			'score' 	=> $final_rating,
			'warnings' 	=> $warnings, 
		);

	}

	/**
	 * Get the alternative label input HTML code.
	 *
	 * @since 3.2.0
	 *
	 * @param string $value The input value.
	 *
	 * @return string The input HTML code.
	 */
	private function get_alternative_label_input( $value = '' ) {

		return sprintf( self::ALTERNATIVE_LABEL_INPUT_TEMPLATE, esc_attr( $value ), __( 'Delete', 'wordlift' ) );
	}
}
