<?php
/**
 * This file provides the test for the Mappings feature.
 *
 * @since 3.25.0
 * @package Wordlift
 * @subpackage Wordlift/tests
 */

use Wordlift\Mappings\Mappings_Validator;

/**
 * Class Wordlift_Mappings_Test
 *
 * @group mappings
 */
class Wordlift_Mappings_Test extends WP_UnitTestCase {

	private $jsonld_service;

	/**
	 * The {@link Mappings_Validator} instance to test.
	 *
	 * @since  3.25.0
	 * @access private
	 * @var Mappings_Validator $validator The {@link Mappings_Validator} instance to test.
	 */
	private $validator;

	/**
	 * The {@link Wordlift_Mapping_DBO} instance to test.
	 *
	 * @since  3.25.0
	 * @access private
	 * @var Wordlift_Mapping_DBO $dbo The {@link Wordlift_Mapping_DBO} instance to test.
	 */
	private $dbo;

	function setUp() {
		parent::setUp(); // TODO: Change the autogenerated stub
		// Initialize dependencies for the test.
		$this->dbo            = new Wordlift_Mapping_DBO();
		$this->validator      = new Mappings_Validator();
		$this->jsonld_service = Wordlift_Jsonld_Service::get_instance();
	}


	private function create_new_mapping_item( $taxonomy, $taxonomy_value, $properties ) {
		$mapping_id = $this->dbo->insert_mapping_item( 'foo' );
		// Create a rule group.
		$rule_group_id = $this->dbo->insert_rule_group( $mapping_id );

		$rule_id = $this->dbo->insert_or_update_rule_item(
			array(
				'rule_field_one'   => $taxonomy,
				'rule_logic_field' => '===',
				'rule_field_two'   => $taxonomy_value,
				'rule_group_id'    => $rule_group_id,
			)
		);
		foreach ( $properties as $property ) {
			$property['mapping_id'] = $mapping_id;
			$this->dbo->insert_or_update_property( $property );
		}
	}

	/**
	 * Test when the mapping is valid
	 */

	/** Test when the mapping is valid, check if it is mapping correctly on JSON-LD data, this test
	 * actually tests whether it is using wl_post_jsonld hook */
	public function test_provided_valid_mapping_check_for_correct_jsonld() {
		// Create a post.
		$post_id    = $this->factory()->post->create();
		$result_1   = wp_add_object_terms( $post_id, 'how-to', 'category' );
		$properties = array(
			array(
				'property_name'      => '@type',
				'field_type'         => 'text',
				'field_name'         => 'HowTo',
				'transform_function' => 'none',
				'property_status'    => Mappings_Validator::ACTIVE_CATEGORY,
			),
		);
		$this->create_new_mapping_item( 'category', (int) $result_1[0], $properties );
		// Get the json ld data for this post.
		$jsonlds       = $this->jsonld_service->get_jsonld( false, $post_id );
		$target_jsonld = end( $jsonlds );
		$this->assertTrue( is_array( $target_jsonld ), "JSON-LD must be an array:\n" . var_export( $target_jsonld, true ) );
		$this->assertArrayHasKey( '@type', $target_jsonld, "JSON-LD is missing @type:\n" . var_export( $target_jsonld, true ) );
		$this->assertEquals( 'HowTo', $target_jsonld['@type'], "@type is incorrect: " . $target_jsonld['@type'] );
	}

	/** Test when the mapping is valid, check if it is mapping correctly on JSON-LD data, this test
	 * actually tests whether it is using wl_entity_jsonld hook */
	public function test_provided_valid_mapping_check_for_correct_entity_jsonld() {
		// Create a post.
		$post_id = wp_insert_post(
			array(
				'post_title' => 'foo'
			)
		);

		wp_add_object_terms( $post_id, 'foo', Wordlift_Entity_Type_Taxonomy_Service::TAXONOMY_NAME );
		$result_1   = wp_add_object_terms( $post_id, 'how-to', 'category' );
		$properties = array(
			array(
				'property_name'      => '@type',
				'field_type'         => 'text',
				'field_name'         => 'HowTo',
				'transform_function' => 'none',
				'property_status'    => Mappings_Validator::ACTIVE_CATEGORY,
			),
		);
		$this->create_new_mapping_item( 'category', (int) $result_1[0], $properties );
		// Get the json ld data for this post.
		$jsonlds       = $this->jsonld_service->get_jsonld( false, $post_id );
		$target_jsonld = end( $jsonlds );
		$this->assertArrayHasKey( '@type', $target_jsonld );
		$this->assertEquals( 'HowTo', $target_jsonld['@type'] );
	}
}