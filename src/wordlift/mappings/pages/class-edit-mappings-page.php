<?php
/**
 * Pages: Sync Mappings page.
 *
 * Display the sync mappings page.
 *
 * @since 3.24.0
 * @package Wordlift
 * @subpackage Wordlift\Mappings\Pages
 */

namespace Wordlift\Mappings\Pages;

use Wordlift;
use Wordlift_Admin_Page;
use Wordlift\Scripts\Scripts_Helper;
use Wordlift_Mapping_REST_Controller;
use Mappings_Transform_Functions_Registry;

/**
 * Define the Wordlift_Admin_Edit_Mappings class.
 *
 * @since 3.24.0
 */
class Edit_Mappings_Page extends Wordlift_Admin_Page {

	/**
	 * The base class {@link Wordlift_Admin_Page} will add the admin page to the WordLift menu.
	 *
	 * We don't want this page to be in the menu though. Therefore we override the `parent_slug` so that WordPress won't
	 * show it there.
	 *
	 * @return null return null to avoid this page to be displayed in WordLift's menu.
	 */
	protected function get_parent_slug() {
		return null;
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_page_title() {

		return __( 'Edit Mappings', 'wordlift' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_menu_title() {

		return __( 'Edit Mappings', 'wordlift' );
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_menu_slug() {

		return 'wl_edit_mapping';
	}

	/**
	 * {@inheritdoc}
	 */
	public function get_partial_name() {

		return 'wordlift-admin-mappings-edit.php';
	}

	/**
	 * {@inheritdoc}
	 */
	public function enqueue_scripts() {

		// Enqueue the script.
		Scripts_Helper::enqueue_based_on_wordpress_version(
			'wl-mappings-edit',
			plugin_dir_url( dirname( dirname( dirname( __FILE__ ) ) ) ) . 'js/dist/mappings-edit',
			array( 'react', 'react-dom', 'wp-polyfill' ),
			true
		);

		// Enqueue the style.
		wp_enqueue_style(
			'wl-mappings-edit',
			plugin_dir_url( dirname( dirname( dirname( __FILE__ ) ) ) ) . 'js/dist/mappings-edit.css',
			Wordlift::get_instance()->get_version()
		);

		// Load the UI dependencies.
		self::load_ui_dependencies();

	}

	/**
	 * Returns field name options based on the chosen field type.
	 *
	 * @return array Array of the options.
	 */
	public static function get_all_field_name_options() {

		$options = array(
			// @@todo rename as Fixed Text.
			array(
				'field_type' => 'text',
				'value'      => '',
				'label'      => __( 'Fixed Text', 'wordlift' ),
			),
			// @@todo maybe it makes sense to move this one as well to Wordlift/Mappings/Custom_Fields_Mappings.
			array(
				'field_type' => 'custom_field',
				'value'      => '',
				'label'      => __( 'Custom Field', 'wordlift' ),
			),
		);

		/**
		 * Allow 3rd parties to add field types.
		 *
		 * @param array An array of Field Types.
		 *
		 * @return array An array of Field Types.
		 *
		 * @since 3.25.0
		 */
		return apply_filters( 'wl_mappings_field_types', $options );
	}

	/**
	 * Load dependencies required for js client.
	 */
	public static function load_ui_dependencies() {
		// Create ui settings array to be used by js client.
		$edit_mapping_settings                               = array();
		$edit_mapping_settings['rest_url']                   = get_rest_url(
			null,
			WL_REST_ROUTE_DEFAULT_NAMESPACE . Wordlift_Mapping_REST_Controller::MAPPINGS_NAMESPACE
		);
		$edit_mapping_settings['page']                       = 'wl_edit_mapping';
		$edit_mapping_settings['wl_edit_mapping_rest_nonce'] = wp_create_nonce( 'wp_rest' );

		// @@todo what's this? add comments.
		if ( isset( $_REQUEST['_wl_edit_mapping_nonce'] )
		     && wp_verify_nonce( $_REQUEST['_wl_edit_mapping_nonce'], 'wl-edit-mapping-nonce' ) ) {
			// We're using `INPUT_GET` here because this is a link from the UI, i.e. no POST.
			$edit_mapping_settings['wl_edit_mapping_id'] = intval( filter_input( INPUT_GET, 'wl_edit_mapping_id', FILTER_VALIDATE_INT ) );
		}

		$edit_mapping_settings['wl_add_mapping_text']     = __( 'Add Mapping', 'wordlift' );
		$edit_mapping_settings['wl_edit_mapping_text']    = __( 'Edit Mapping', 'wordlift' );
		$edit_mapping_settings['wl_edit_mapping_no_item'] = __( 'Unable to find the mapping item', 'wordlift' );

		// @@todo initialize this class in class-admin-wordlift.php, a class should not be responsible for initializing
		// other classes (pass the instance in the constructor).
		$transform_function_registry = new Mappings_Transform_Functions_Registry();

		$edit_mapping_settings['wl_transform_function_options'] = $transform_function_registry->get_options();

		$all_field_name_options = self::get_all_field_name_options();

		$all_field_types_options = array_map( function ( $item ) {
			return array(
				'label' => $item['label'],
				'value' => $item['field_type'],
			);
		}, $all_field_name_options );

		$edit_mapping_settings['wl_field_type_options'] = $all_field_types_options;

		// Add wl_edit_field_name_options.
		$edit_mapping_settings['wl_field_name_options'] = $all_field_name_options;

		$edit_mapping_settings['wl_logic_field_options'] = array(
			array(
				'label' => __( 'is equal to', 'wordlift' ),
				'value' => '===',
			),
			array(
				'label' => __( 'is not equal to', 'wordlift' ),
				'value' => '!==',
			),
		);

		list(
			$edit_mapping_settings['wl_rule_field_one_options'],
			$edit_mapping_settings['wl_rule_field_two_options']
			) = self::get_post_taxonomies_and_terms();

		wp_localize_script( 'wl-mappings-edit', 'wl_edit_mappings_config', $edit_mapping_settings );
	}

	/**
	 * Returns post type, post category, or any other post taxonomies
	 * @return array An array of select options
	 */
	// @@todo change this to a rest end-point.
	private static function get_post_taxonomies_and_terms() {
		$taxonomy_options = array();
		$term_options     = array();
		$taxonomies       = get_object_taxonomies( 'post', 'objects' );

		foreach ( $taxonomies as $taxonomy ) {
			array_push(
				$taxonomy_options,
				array(
					'label' => $taxonomy->label,
					'value' => $taxonomy->name,
				)
			);

			$terms = get_terms(
				$taxonomy->name,
				array(
					'hide_empty' => false,
				)
			);

			foreach ( $terms as $term ) {
				array_push(
					$term_options,
					array(
						'label'    => $term->name,
						'value'    => $term->term_id,
						'taxonomy' => $taxonomy->name,
					)
				);
			}
		}
		list( $post_type_option, $post_type_option_values ) = self::get_post_type_key_and_value();
		array_push( $taxonomy_options, $post_type_option );
		$term_options = array_merge( $term_options, $post_type_option_values );

		return array( $taxonomy_options, $term_options );
	}

	/**
	 * Return post type option and post type option values.
	 *
	 * @return array Array of post_type_option and post_type_option_values.
	 */
	private static function get_post_type_key_and_value() {
		$post_type_option_name   = array(
			'label' => __( 'Post type', 'wordlift' ),
			'value' => __( 'post_type', 'wordlift' ),
		);
		$post_type_option_values = array();
		$post_types              = get_post_types(
			array(),
			'objects'
		);
		foreach ( $post_types as $post_type ) {
			array_push(
				$post_type_option_values,
				array(
					'label'    => $post_type->label,
					'value'    => $post_type->name,
					'taxonomy' => 'post_type',
				)
			);
		}

		return array( $post_type_option_name, $post_type_option_values );
	}

}
