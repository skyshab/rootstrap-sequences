<?php
/**
 * Sequence class.
 *
 * This class creates a sequence object.
 *
 * @package   Rootstrap
 * @author    Sky Shabatura
 * @copyright Copyright (c) 2019, Sky Shabatura
 * @link      https://github.com/skyshab/rootstrap
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Rootstrap\Sequences;

use Sequence_Control;
use WP_Customize_Manager;

/**
 * Creates a new sequence object.
 *
 * @since  1.0.0
 * @access public
 */
class Sequence {

    /**
     * Stores WP_Customize_Manager instance.
     *
     * @since  1.0.0
     * @access protected
     * @var    object
     */
    public $customize;

    /**
     * Sections array.
     *
     * @since  1.0.0
     * @access private
     * @var    array
     */
    public $sections;

    /**
     * Sections title.
     *
     * @since  1.0.0
     * @access private
     * @var    string
     */
    private $title;

    /**
     * Reverse.
     *
     * @since  1.0.0
     * @access private
     * @var    bool
     */
    private $reverse;

        /**
     * Previous label.
     *
     * @since  1.0.0
     * @access public
     * @var    string
     */
    public $previous;

    /**
     * Next label.
     *
     * @since  1.0.0
     * @access public
     * @var    string
     */
    public $next;

    /**
     * Register a new Sections Group object.
     *
     * @since  1.0.0
     * @access public
     * @param  object   $wp_customize
     * @param  array    $args
     * @return void
     */
    public function __construct( WP_Customize_Manager $manager, array $args = [] ) {

        // store the customizer object
        $this->customize = $manager;

        // set the object properties
        foreach( $args as $property => $value ) {
            if( property_exists( $this, $property ) )
                $this->$property = $value;
        }

        // if reverse order is specified, flip the sections
        if( $this->reverse ) $this->sections = array_reverse( $this->sections );

        // add control for hiding section sections
        $this->section_hider();

        // build the sections
        $this->section_loop();
    }

    /**
     * Loop through sections
     *
     * @since  1.0.0
     * @access public
     * @return void
     */
    private function section_loop() {

        if( !$this->sections ) return;

        foreach( $this->sections as $id => $args ) {

            // get the section
            $section = $this->customize->get_section( $id );

            if( !$section ) continue;

            // if hide flag enabled, set priority
            if( $this->is_section_hidden( $id ) )
                $section->priority = 1000;

            if( $this->title )
                $section->title = $this->title;

            // if device is set, add custom section type
            $device = ( isset( $args['device'] ) ) ? $args['device'] : false;

            if( $device )
                $section->type = sprintf( 'rootstrap-device--%s', $device );

            // create setting and control
            $this->control( $id );
        }
    }

    /**
     * Add sequence control
     *
     * @since  1.0.0
     * @access public
     * @return void
     */
    public function control( $id ) {

        $setting = sprintf( 'sequence-nav-%s', $id );

        // Setting: Taproot Branding Screen Nav
        $this->customize->add_setting( $setting, [
            'sanitize_callback' => 'sanitize_text_field',
        ]);

        $prev_section = $this->previous_section( $id );
        $prev_label = $this->previous;
        $next_section = $this->next_section( $id );
        $next_label = $this->next;
        $prev_device = false;
        $next_device = false;

        $section_prev = ( isset( $this->sections[$id]['prev'] ) ) ? $this->sections[$id]['prev'] : false;

        if( $section_prev ) {

            if( isset( $section_prev['link'] ) )
                $prev_section = $section_prev['link'];

            if( isset( $section_prev['label'] ) )
                $prev_label = $section_prev['label'];

            $prev_device = ( isset( $section_prev['device'] ) ) ?: false;
        }

        $section_next = ( isset( $this->sections[$id]['next'] ) ) ? $this->sections[$id]['next'] : false;

        if( $section_next ) {

            if( isset( $section_next['link'] ) )
                $next_section = $section_next['link'];

            if( isset( $section_next['label'] ) )
                $next_label = $section_next['label'];

            $next_device = ( isset( $section_next['device'] ) ) ?: false;
        }

        $this->customize->add_control(
            new Sequence_Control( $this->customize, $setting, [
                'section' => $id,
                'prev' => [
                    'section' => $prev_section,
                    'label' => $prev_label,
                    'device' => $prev_device
                ],
                'next' => [
                    'section' => $next_section,
                    'label' => $next_label,
                    'device' => $next_device
                ],
                'priority' => -20,
            ]
        ));
    }

    /**
     * Get panel
     *
     * @since  1.0.0
     * @access public
     * @return string
     */
    private function get_panel() {
        $section = $this->customize->get_section( key( $this->sections ) );

        if ( $section && $section->panel ) {
            return $section->panel;
        }
        return false;
    }

    /**
     * Get Sections List
     *
     * @since  1.0.0
     * @access private
     * @return array
     */
    private function get_sections_list() {
        return array_keys( $this->sections );
    }

    /**
     * Get the section immediately before specified section
     *
     * @since 1.0.0
     * @param string             $current
     * @return string
     */
    private function previous_section( $current ) {
        $sections = $this->get_sections_list();
        $index = array_search( $current, $sections );
        return ( isset( $sections[$index - 1] ) ) ? $sections[$index - 1] : false;
    }

    /**
     * Get the section immediately after specified section
     *
     * @since 1.0.0
     * @param string             $current
     * @return string
     */
    private function next_section( $current ) {
        $sections = $this->get_sections_list();
        $index = array_search( $current, $sections );
        return ( isset( $sections[$index + 1] ) ) ? $sections[$index + 1] : false;
    }

    /**
     * Add the section hider
     *
     * @since  1.0.0
     * @access public
     * @return string
     */
    private function section_hider() {
        $id = sprintf( 'rootstrap-section-hider-%s', $this->get_panel() );
        $this->customize->add_section( $id, [
            'priority' => 999,
            'panel' => $this->get_panel(),
        ]);
    }

    /**
     * Is section hidden?
     *
     * @since  1.0.0
     * @access public
     * @param  array    $args
     * @return bool
     */
    private function is_section_hidden( $id ) {
        $section = $this->sections[$id];
        return ( isset( $section['hide'] ) && $section['hide'] ) ? true : false;
    }
}
