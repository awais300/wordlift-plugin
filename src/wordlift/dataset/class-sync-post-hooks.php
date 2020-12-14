<?php

namespace Wordlift\Dataset;

use Wordlift\Object_Type_Enum;

class Sync_Post_Hooks {

	/**
	 * @var int Post id
	 */
	public $post_id;

	/**
	 * @var \Wordlift_Log_Service
	 */
	private $log;

	/**
	 * @var Sync_Service
	 */
	private $sync_service;

	/**
	 * @var Sync_Object_Adapter_Factory
	 */
	private $sync_object_factory;

	/**
	 * Sync_Post_Hooks constructor.
	 *
	 * @param Sync_Service $sync_service
	 * @param Sync_Object_Adapter_Factory $sync_object_factory
	 */
	function __construct( $sync_service, $sync_object_factory ) {

		$this->log = \Wordlift_Log_Service::get_logger( get_class() );

		$this->sync_service        = $sync_service;
		$this->sync_object_factory = $sync_object_factory;

		$this->register_hooks();
	}

	private function register_hooks() {
		/**
		 * Register hooks for post and meta.
		 */
		add_action( 'save_post', array( $this, 'save_post' ) );
		add_action( 'added_post_meta', array( $this, 'changed_post_meta' ), 10, 4 );
		add_action( 'updated_post_meta', array( $this, 'changed_post_meta' ), 10, 4 );
		add_action( 'deleted_post_meta', array( $this, 'changed_post_meta' ), 10, 4 );
		add_action( 'delete_post', array( $this, 'delete_post' ) );
		/**
		 * @todo: Might need to change this
		 */
		add_action( 'shutdown', array( $this, 'shutdown' ) );

	}

	public function shutdown() {

	}

	public function save_post( $post_id ) {

		$this->post_id = $post_id;

	}

	public function changed_post_meta( $meta_id, $post_id, $meta_key, $_meta_value ) {
		$this->post_id = $post_id;
	}

	private function sync( $post_id ) {

		try {
			$post = get_post( $post_id );
			$this->sync_service->sync_many( array(
				$this->sync_object_factory->create( Object_Type_Enum::POST, $post_id ),
				$this->sync_object_factory->create( Object_Type_Enum::USER, $post->post_author )
			) );
		} catch ( \Exception $e ) {
			$this->log->error( "An error occurred while trying to sync post $post_id: " . $e->getMessage(), $e );
		}

	}

	public function delete_post( $post_id ) {

		try {
			$this->sync_service->delete_one( Object_Type_Enum::POST, $post_id );
		} catch ( \Exception $e ) {
			$this->log->error( "An error occurred while trying to delete post $post_id: " . $e->getMessage(), $e );
		}

	}

}