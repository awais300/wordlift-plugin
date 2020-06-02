<?php

/**
 * Define the {@link Mappings_Validator} class.
 *
 * Validates the mapping for single post and return the  * schema.org properties mapped to ACF, custom field or text
 * to be used for JSON-LD output.
 *
 * @since      3.25.0
 * @package    Wordlift
 * @subpackage Wordlift/includes/sync-mappings
 */

namespace Wordlift\Mappings;

use Wordlift\Mappings\Validators\Rule_Groups_Validator;

final class Mappings_Validator {
	const TRASH_CATEGORY = 'trash';
	const ACTIVE_CATEGORY = 'active';

	/**
	 * The {@link Mappings_DBO} instance to test.
	 *
	 * @since  3.25.0
	 * @access private
	 * @var Mappings_DBO $dbo The {@link Mappings_DBO} instance to test.
	 */
	private $dbo;

	/**
	 * @var Rule_Groups_Validator
	 */
	private $rule_groups_validator;

	/**
	 * Constructor for Wordlift_Mapping_Validator.
	 *
	 * @param Mappings_DBO $dbo The {@link Mappings_DBO} instance.
	 * @param Rule_Groups_Validator $rule_groups_validator
	 */
	public function __construct( $dbo, $rule_groups_validator ) {

		$this->dbo                   = $dbo;
		$this->rule_groups_validator = $rule_groups_validator;

	}

	/**
	 * Validates two values based on the passed logic
	 * a single rule passes the user defined logic.
	 *
	 * @param string $key The key which every object has mapped to our value.
	 * @param array $items The array of items.
	 * @param string $status The value which the items should have.
	 *
	 * @return array
	 */
	private static function get_item_by_status( $key, $items, $status ) {
		return array_filter(
			$items,
			function ( $item ) use ( $key, $status ) {
				return $item[ $key ] === (string) $status;
			}
		);
	}

	/**
	 * Validates a post id with the list of active mapping items and check if
	 * a mapping can be applied.
	 *
	 * @param int $post_id The post id.
	 *
	 * @return array
	 */
	public function validate( $post_id ) {
		// Reset the valid property items before making the validation.
		$properties = array();

		// Get active mappings.
		$mappings = $this->dbo->get_active_mappings();

		// Get all active rule groups for the mapping items.
		foreach ( $mappings as $mapping ) {
			$rule_groups = $this->dbo->get_rule_groups_by_mapping( (int) $mapping['mapping_id'] );

			$should_apply_mapping = $this->rule_groups_validator->is_valid( $post_id, $rule_groups );

			if ( $should_apply_mapping ) {
				$mapping_item_properties = $this->dbo->get_properties( $mapping['mapping_id'] );
				$properties              = array_merge( $properties, $mapping_item_properties );
			}
		}

		return self::get_item_by_status(
			'property_status',
			$properties,
			self::ACTIVE_CATEGORY
		);
	}

}
