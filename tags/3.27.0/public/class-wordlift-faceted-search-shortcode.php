<?php
/**
 * Shortcodes: Faceted Search Shortcode.
 *
 * @since      3.0.0
 * @package    Wordlift
 * @subpackage Wordlift/public
 */

/**
 * Define the {@link Wordlift_Faceted_Search_Shortcode} class which provides the
 * `wl_faceted_search` implementation.
 *
 * @since      3.20.0
 * @package    Wordlift
 * @subpackage Wordlift/public
 */
class Wordlift_Faceted_Search_Shortcode extends Wordlift_Shortcode {

	/**
	 * {@inheritdoc}
	 */
	const SHORTCODE = 'wl_faceted_search';

	public function __construct() {
		parent::__construct();
		$this->register_block_type();
	}

	/**
	 * {@inheritdoc}
	 */
	public function render( $atts ) {

		return Wordlift_AMP_Service::is_amp_endpoint() ? $this->amp_shortcode( $atts )
			: $this->web_shortcode( $atts );
	}

	private function register_block_type() {

		$scope = $this;

		add_action( 'init', function () use ( $scope ) {
			if ( ! function_exists( 'register_block_type' ) ) {
				// Gutenberg is not active.
				return;
			}

			register_block_type( 'wordlift/faceted-search', array(
				'editor_script'   => 'wl-block-editor',
				'render_callback' => function ( $attributes ) use ( $scope ) {
					$attr_code = '';
					foreach ( $attributes as $key => $value ) {
						$attr_code .= $key . '="' . htmlentities( $value ) . '" ';
					}

					return '[' . $scope::SHORTCODE . ' ' . $attr_code . ']';
				},
				'attributes'      => array(
					'title'       => array(
						'type'    => 'string',
						'default' => __( 'Related articles', 'wordlift' ),
					),
					'template_id' => array(
						'type' => 'string',
						'default' => '',
					),
					'post_id'     => array(
						'type'    => 'number',
						'default' => '',
					),
					'uniqid'      => array(
						'type'    => 'string',
						'default' => '',
					),
					'limit'       => array(
						'type'    => 'number',
						'default' => apply_filters( 'wl_faceted_search_default_limit', 4 ),
					),
					'preview'     => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'preview_src' => array(
						'type'    => 'string',
						'default' => WP_CONTENT_URL . '/plugins/wordlift/images/block-previews/faceted-search.png',
					),
				),
			) );
		} );
	}

	/**
	 * Shared function used by web_shortcode and amp_shortcode
	 * Bootstrap logic for attributes extraction and boolean filtering
	 *
	 * @since      3.20.0
	 *
	 * @param array $atts Shortcode attributes.
	 *
	 * @return array $shortcode_atts
	 */
	private function make_shortcode_atts( $atts ) {

		// Extract attributes and set default values.
		$shortcode_atts = shortcode_atts( array(
			'title'       => __( 'Related articles', 'wordlift' ),
			'limit'       => apply_filters( 'wl_faceted_search_default_limit', 4 ),
			'post_id'     => '',
			'template_id' => '',
			'uniqid'      => uniqid( 'wl-faceted-widget-' ),
		), $atts );

		return $shortcode_atts;
	}

	/**
	 * Function in charge of diplaying the [wl-faceted-search] in web mode.
	 *
	 * @since 3.20.0
	 *
	 * @param array $atts Shortcode attributes.
	 *
	 * @return string Shortcode HTML for web
	 */
	private function web_shortcode( $atts ) {

		// attributes extraction and boolean filtering
		$shortcode_atts = $this->make_shortcode_atts( $atts );

		// avoid building the widget when no post_id is specified and there is a list of posts.
		if ( empty( $shortcode_atts['post_id'] ) && ! is_singular() ) {
			return;
		}

		$post        = ! empty( $shortcode_atts['post_id'] ) ? get_post( intval( sanitize_text_field( $shortcode_atts['post_id'] ) ) ) : get_post();
		$title       = esc_attr( sanitize_text_field( $shortcode_atts['title'] ) );
		$template_id = esc_attr( sanitize_text_field( $shortcode_atts['template_id'] ) );
		$limit       = esc_attr( sanitize_text_field( $shortcode_atts['limit'] ) );
		$faceted_id  = ! empty( $shortcode_atts['uniqid'] ) ? esc_attr( sanitize_text_field( $shortcode_atts['uniqid'] ) ) : uniqid( 'wl-faceted-widget-' );

		$permalink_structure = get_option( 'permalink_structure' );
		$delimiter           = empty( $permalink_structure ) ? '&' : '?';
		$rest_url            = $post ? rest_url( WL_REST_ROUTE_DEFAULT_NAMESPACE . '/faceted-search' . $delimiter . build_query( array(
				'post_id' => $post->ID,
				'limit'   => $limit
			) ) ) : false;

		// avoid building the widget when no valid $rest_url
		if ( ! $rest_url ) {
			return;
		}

		wp_enqueue_script( 'wordlift-cloud' );
		$json_faceted_id = wp_json_encode( $faceted_id );


		return <<<HTML
			<!-- Faceted {$faceted_id} -->
			<script type="application/javascript">
				window.wlFaceteds = window.wlFaceteds || []; wlFaceteds.push({$json_faceted_id});
			</script>
			<div id="{$faceted_id}" 
				 class="wl-faceted" 
				 data-rest-url="{$rest_url}" 
				 data-title="{$title}" 
				 data-template-id="{$template_id}"></div>
			<!-- /Faceted {$faceted_id} -->
HTML;
	}

	/**
	 * Function in charge of diplaying the [wl-faceted-search] in amp mode.
	 *
	 * @since 3.20.0
	 *
	 * @param array $atts Shortcode attributes.
	 *
	 * @return string Shortcode HTML for amp
	 */
	private function amp_shortcode( $atts ) {

		// attributes extraction and boolean filtering
		$shortcode_atts = $this->make_shortcode_atts( $atts );

		// avoid building the widget when no post_id is specified and there is a list of posts.
		if ( empty( $shortcode_atts['post_id'] ) && ! is_singular() ) {
			return;
		}

		$post        = ! empty( $shortcode_atts['post_id'] ) ? get_post( intval( sanitize_text_field( $shortcode_atts['post_id'] ) ) ) : get_post();
		$title       = esc_attr( sanitize_text_field( $shortcode_atts['title'] ) );
		$template_id = esc_attr( sanitize_text_field( $shortcode_atts['template_id'] ) );
		$limit       = esc_attr( sanitize_text_field( $shortcode_atts['limit'] ) );
		$faceted_id  = ! empty( $shortcode_atts['uniqid'] ) ? esc_attr( sanitize_text_field( $shortcode_atts['uniqid'] ) ) : uniqid( 'wl-faceted-widget-' );

		$permalink_structure = get_option( 'permalink_structure' );
		$delimiter           = empty( $permalink_structure ) ? '&' : '?';
		$rest_url            = $post ? rest_url( WL_REST_ROUTE_DEFAULT_NAMESPACE . '/faceted-search' . $delimiter . build_query( array(
				'amp',
				'post_id' => $post->ID,
				'limit'   => $limit
			) ) ) : false;

		$rest_url = $post ? rest_url( sprintf( "wordlift/v1/faceted-search?amp&post_id=%s&limit=%s", $post->ID, $limit ) ) : false;

		// avoid building the widget when no valid $rest_url
		if ( ! $rest_url ) {
			return;
		}

		// Use a protocol-relative URL as amp-list spec says that URL's protocol must be HTTPS.
		// This is a hackish way, but this works for http and https URLs
		$rest_url = str_replace( array( 'http:', 'https:' ), '', $rest_url );

		if ( empty( $template_id ) ) {
			$template_id = "template-" . $faceted_id;
			wp_enqueue_style( 'wordlift-amp-custom', plugin_dir_url( dirname( __FILE__ ) ) . '/css/wordlift-amp-custom.min.css' );
		}

		return <<<HTML
		<div id="{$faceted_id}" class="wl-amp-faceted">
			<h2 class="wl-headline">{$title}</h2>
			<amp-state id="referencedPosts">
				<script type="application/json">
					[]
				</script>
			</amp-state>
			<amp-state id="activeEntities">
				<script type="application/json">
					[]
				</script>
			</amp-state>
			<amp-state id="allPostsEntities" src="{$rest_url}"></amp-state>
			<section class="chips">
				<amp-list 
					height="32"
					layout="fixed-height"
					src="{$rest_url}"
					[src]="allPostsEntities.entities.sort((a, b) => activeEntities.includes(a.id) ? -1 : 1)"
					items="entities">
					<template type="amp-mustache">
						<span [class]="activeEntities.includes('{{id}}') ? 'chip active' : 'chip'" on="tap:AMP.setState({
							referencedPosts: referencedPosts.includes({{referencedPosts}}) ? referencedPosts.filter(item => item != {{referencedPosts}}) : referencedPosts.concat({{referencedPosts}}),
							activeEntities: activeEntities.includes('{{id}}') ? activeEntities.filter(item => item != '{{id}}') : activeEntities.concat('{{id}}')
						})">{{label}}</span>
					</template>	
				</amp-list>
			</section>
			<section class="cards">
				<amp-list 
					height="250"
					layout="fixed-height"
					src="{$rest_url}"
					[src]="{values: allPostsEntities.posts[0].values.sort((a, b) => referencedPosts.includes(a.ID) ? -1 : 1)}"
					template="{$template_id}"
					items="posts">
					<template type="amp-mustache" id="template-{$faceted_id}">
						<amp-carousel 
						  media="(min-width: 380px)"
						  height="200"
					      layout="fixed-height"
					      type="carousel">
					      {{#values}}
							<article class="card" style="width: 25%">
								<a href="{{permalink}}">
									<amp-img
				                        width="16"
				                        height="9"
										layout="responsive"
				                        src="{{thumbnail}}"></amp-img>
									<div class="card-content">
										<header class="title">{{post_title}}</header>
									</div>
								</a>
							</article>
						  {{/values}}
						</amp-carousel>
						<amp-carousel 
						  media="(max-width: 380px)"
						  height="250"
					      layout="fixed-height"
					      type="slides">
					      {{#values}}
							<article class="card" style="width: 100%">
								<a href="{{permalink}}">
									<amp-img
				                        width="16"
				                        height="9"
										layout="responsive"
				                        src="{{thumbnail}}"></amp-img>
									<div class="card-content">
										<header class="title">{{post_title}}</header>
									</div>
								</a>
							</article>
						  {{/values}}
						</amp-carousel>
					</template>
				</amp-list>
			</section>
		</div>
HTML;
	}

}
