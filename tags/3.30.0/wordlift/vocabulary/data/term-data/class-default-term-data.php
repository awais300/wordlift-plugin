<?php
/**
 * @since 3.30.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * This class constructs the term data structure from the analysis service.
 */

namespace Wordlift\Vocabulary\Data\Term_Data;

class Default_Term_Data implements Term_Data {

	/**
	 * @var array An array of entities bound to the term.
	 */
	private $entities;
	/**
	 * @var \WP_Term
	 */
	private $term;

	public function __construct( $term, $entities ) {
		$this->term     = $term;
		$this->entities = $entities;
	}

	public function get_data() {

		return array(
			'tagId'          => $this->term->term_id,
			'tagName'        => $this->term->name,
			'tagDescription' => $this->term->description,
			'tagLink'        => get_edit_tag_link( $this->term->term_id, 'post_tag' ),
			'tagPostCount'   => $this->term->count,
			'entities'       => $this->entities,
		);
	}
}