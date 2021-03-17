<?php

namespace Wordlift\Vocabulary;

use Wordlift\Api\Default_Api_Service;
use Wordlift\Api\User_Agent;
use Wordlift\Vocabulary\Api\Background_Analysis_Endpoint;
use Wordlift\Vocabulary\Api\Entity_Rest_Endpoint;
use Wordlift\Vocabulary\Api\Reconcile_Progress_Endpoint;
use Wordlift\Vocabulary\Api\Tag_Rest_Endpoint;
use Wordlift\Vocabulary\Hooks\Tag_Created_Hook;
use Wordlift\Vocabulary\Jsonld\Post_Jsonld;
use Wordlift\Vocabulary\Pages\Reconcile;

class Vocabulary_Loader {

	public function init_vocabulary() {

		$configuration_service = \Wordlift_Configuration_Service::get_instance();

		$api_service = new Default_Api_Service(
			apply_filters( 'wl_api_base_url', 'https://api.wordlift.io' ),
			60,
			User_Agent::get_user_agent(),
			$configuration_service->get_key()
		);

		$cache_service     = new Options_Cache( "wordlift-cmkg" );
		$analysis_service  = new Analysis_Service( $api_service, $cache_service );
		$tag_rest_endpoint = new Tag_Rest_Endpoint( $analysis_service );
		$tag_rest_endpoint->register_routes();

		$entity_rest_endpoint = new Entity_Rest_Endpoint();
		$entity_rest_endpoint->register_routes();

		$post_jsonld = new Post_Jsonld();
		$post_jsonld->enhance_post_jsonld();

		new Reconcile();

		$analysis_background_service = new Analysis_Background_Service( $analysis_service );

		new Tag_Created_Hook( $analysis_background_service );

		new Background_Analysis_Endpoint( $analysis_background_service, $cache_service );

		$reconcile_progress_endpoint = new Reconcile_Progress_Endpoint();
		$reconcile_progress_endpoint->register_routes();

	}

}


