<?php
/**
 * Test the {@link Jsonld_Article_Wrapper}.
 *
 * The {@link Jsonld_Article_Wrapper} wraps entities inside an Article markup.
 *
 * @see https://github.com/insideout10/wordlift-plugin/issues/1241
 */

use Wordlift\Jsonld\Jsonld_Article_Wrapper;
use Wordlift\Jsonld\Jsonld_Context_Enum;

/**
 * Test the {@link Wordlift_Entity_Post_To_Jsonld_Converter} class.
 *
 * @since   3.28.0
 * @package Wordlift
 * @group jsonld
 */
class Wordlift_Jsonld_Article_Wrapper extends Wordlift_Unit_Test_Case {

	/**
	 * @var Jsonld_Article_Wrapper
	 */
	private $jsonld_article_wrapper;

	private $post_to_jsonld_converter;
	private $jsonld_service;

	/**
	 * {@inheritdoc}
	 */
	public function setUp() {
		parent::setUp();

		// Disable sending SPARQL queries, since we don't need it.
		Wordlift_Unit_Test_Case::turn_off_entity_push();

		$wordlift = new Wordlift_Test();

		$this->post_to_jsonld_converter = $this->getMockBuilder( 'Wordlift_Post_To_Jsonld_Converter' )
		                                       ->disableOriginalConstructor()
		                                       ->getMock();
		$this->jsonld_service           = $this->getMockBuilder( 'Wordlift_Jsonld_Service' )
		                                       ->disableOriginalConstructor()
		                                       ->getMock();

		$this->jsonld_article_wrapper = new Jsonld_Article_Wrapper(
			$this->post_to_jsonld_converter,
			$this->jsonld_service
		);
	}

	public function test_exit_early_when_context_isnt_page() {

		$jsonld = array( 'lorem' );

		$this->assertEquals( $jsonld,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld, 1, Jsonld_Context_Enum::FAQ ) );
		$this->assertEquals( $jsonld,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld, 1, Jsonld_Context_Enum::REST ) );
		$this->assertEquals( $jsonld,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld, 1, Jsonld_Context_Enum::CAROUSEL ) );
		$this->assertEquals( $jsonld,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld, 1, Jsonld_Context_Enum::UNKNOWN ) );
		$this->assertEquals( $jsonld,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld, 1, null ) );

	}

	public function test_exit_early_if_not_an_array() {

		$this->assertEquals( 123,
			$this->jsonld_article_wrapper->after_get_jsonld( 123, 1, Jsonld_Context_Enum::PAGE ) );

	}

	public function test_exit_early_if_array_empty() {

		$jsonld = array();
		$this->assertEquals( $jsonld,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld, 1, Jsonld_Context_Enum::PAGE ) );

	}

	public function test_exit_early_if_jsonld_doesnt_satisfy_requirements() {

		$jsonld_1 = array( array( 'aProperty' => 'aValue' ) );
		$this->assertEquals( $jsonld_1,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld_1, 1, Jsonld_Context_Enum::PAGE ) );

		$jsonld_2 = array( array( '@id' => 'aValue' ) );
		$this->assertEquals( $jsonld_2,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld_2, 1, Jsonld_Context_Enum::PAGE ) );

	}


	public function test_exit_early_if_article() {

		$jsonld_1 = array(
			array(
				'@id'   => 'aValue',
				'@type' => 'AnalysisNewsArticle'
			)
		);
		$this->assertEquals( $jsonld_1,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld_1, 1, Jsonld_Context_Enum::PAGE ) );

		$jsonld_2 = array(
			array(
				'@id'   => 'aValue',
				'@type' => array(
					'Backgro)undNewsArticle',
					'OpinionNewsArticle'
				)
			)
		);
		$this->assertEquals( $jsonld_2,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld_2, 1, Jsonld_Context_Enum::PAGE ) );

		$jsonld_3 = array(
			array(
				'@id'   => 'aValue',
				'@type' => 'Thing'
			)
		);
		$this->assertNotEquals( $jsonld_3,
			$this->jsonld_article_wrapper->after_get_jsonld( $jsonld_3, 1, Jsonld_Context_Enum::PAGE ) );

	}

	public function test_thing_wrapped_in_article() {

		$thing_jsonld   = json_decode( file_get_contents( __DIR__ . '/assets/test_jsonld_article_wrapper_1.json' ), true );
		$article_jsonld = json_decode( file_get_contents( __DIR__ . '/assets/test_jsonld_article_wrapper_2.json' ), true );

		$this->post_to_jsonld_converter->method( 'convert' )
		                               ->with( $this->equalTo( 123 ) )
		                               ->willReturn( $article_jsonld );
		$this->post_to_jsonld_converter->expects( $this->once() )
		                               ->method( 'convert' )
		                               ->with( $this->equalTo( 123 ) );

		$jsonld = $this->jsonld_article_wrapper->after_get_jsonld( array( $thing_jsonld ), 123, Jsonld_Context_Enum::PAGE );

		$this->assertTrue( is_array( $jsonld ) );
		$this->assertCount( 2, $jsonld );

		$this->assertArrayHasKey( '@context', $jsonld[0] );
		$this->assertEquals( 'http://schema.org', $jsonld[0]['@context'] );

		$this->assertArrayHasKey( '@type', $jsonld[0] );
		$this->assertEquals( 'Article', $jsonld[0]['@type'] );

		$this->assertArrayHasKey( 'headline', $jsonld[0] );
		$this->assertEquals( 'Search engine results page (SERP)', $jsonld[0]['headline'] );

		$this->assertArrayHasKey( 'url', $jsonld[0] );

		$this->assertArrayHasKey( 'description', $jsonld[0] );

		$this->assertArrayHasKey( 'image', $jsonld[0] );

		$this->assertArrayHasKey( 'mainEntityOfPage', $jsonld[0] );
		$this->assertArrayHasKey( 'url', $jsonld[0] );

		$this->assertArrayHasKey( 'author', $jsonld[0] );
		$this->assertArrayHasKey( '@type', $jsonld[0]['author'] );
		$this->assertEquals( 'Person', $jsonld[0]['author']['@type'] );
		$this->assertArrayHasKey( 'name', $jsonld[0]['author'] );
		$this->assertEquals( 'John Smith', $jsonld[0]['author']['name'] );
		$this->assertArrayHasKey( 'givenName', $jsonld[0]['author'] );
		$this->assertEquals( 'John', $jsonld[0]['author']['givenName'] );
		$this->assertArrayHasKey( 'familyName', $jsonld[0]['author'] );
		$this->assertEquals( 'Smith', $jsonld[0]['author']['familyName'] );

		$this->assertArrayHasKey( 'datePublished', $jsonld[0] );
		$this->assertEquals( '2020-01-02', $jsonld[0]['datePublished'] );
		$this->assertArrayHasKey( 'dateModified', $jsonld[0] );
		$this->assertEquals( '2020-01-03', $jsonld[0]['dateModified'] );

		$this->assertArrayHasKey( 'publisher', $jsonld[0] );
		$this->assertArrayHasKey( '@type', $jsonld[0]['publisher'] );
		$this->assertEquals( 'Organization', $jsonld[0]['publisher']['@type'] );
		$this->assertArrayHasKey( 'name', $jsonld[0]['publisher'] );
		$this->assertEquals( 'WordLift', $jsonld[0]['publisher']['name'] );
		$this->assertArrayHasKey( 'logo', $jsonld[0]['publisher'] );

		$this->assertArrayHasKey( 'about', $jsonld[0] );
		$this->assertArrayHasKey( '@id', $jsonld[0]['about'] );
		$this->assertEquals( 'http://data.wordlift.io/wl0216/entity/search_engine_results_page_serp', $jsonld[0]['about']['@id'] );

		$this->assertArrayHasKey( '@type', $jsonld[1] );
		$this->assertEquals( 'Thing', $jsonld[1]['@type'] );

	}

	public function test_article_as_is() {

		$article_jsonld = json_decode( file_get_contents( __DIR__ . '/assets/test_jsonld_article_wrapper_2.json' ), true );

		$this->assertEquals( array( $article_jsonld ), $this->jsonld_article_wrapper->after_get_jsonld( array( $article_jsonld ), 123, Jsonld_Context_Enum::PAGE ) );

	}

}
