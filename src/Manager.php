<?php
/**
 * Rootstrap Sequences Manager
 *
 * This class handles all functionality for the extension.
 *
 * @package   Rootstrap\Customize
 * @author    Sky Shabatura
 * @copyright Copyright (c) 2019, Sky Shabatura
 * @link      https://github.com/skyshab/rootstrap
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace Rootstrap\Sequences;

use Hybrid\Contracts\Bootable;
use WP_Customize_Manager;
use function Rootstrap\vendor_path;

/**
 * Rootstrap Sequences Manager Class.
 *
 * @since  1.0.0
 * @access public
 */
class Manager implements Bootable {

    /**
     * Load resources.
     *
     * @since 1.0.0
     * @return object
     */
    public function boot() {

        // Add custom control
        add_action( 'rootstrap/customize-register', [ $this, 'customControl' ] );

        // Register tabs
        add_action( 'rootstrap/customize-register/after', [ $this, 'sequences' ] );

        // Load customize control resources
        add_action( 'customize_controls_enqueue_scripts', [ $this, 'customizeResources' ] );
    }

    /**
     * Load file that contains our customizer control for sequences.
     *
     * @since 1.0.0
     * @return void
     */
    public function customControl( WP_Customize_Manager $manager) {
        require_once 'controls/class-sequence-control.php';
    }

    /**
     * Create sequences
     *
     * @since 1.0.0
     * @return void
     */
    public function sequences( WP_Customize_Manager $manager) {

        // Filter for registering sequences
        $sequences = apply_filters( 'rootstrap/sequences', [] );

        // Create Sequences
        foreach( $sequences as $args ) {
            $sequence = new Sequence($manager, $args);
        }
    }

    /**
     * Enqueue scripts and styles.
     *
     * If filters are applied defining file locations, load scripts and styles.
     *
     * @since 1.0.0
     * @return void
     */
    public function customizeResources() {
        $resources = vendor_path() . '/skyshab/rootstrap-sequences/dist';
        wp_enqueue_script( 'rootstrap-customize-customize-controls', $resources . '/js/customize-controls.js', ['customize-controls'], null, true );
        wp_enqueue_style( 'rootstrap-customize-customize-controls', $resources . '/css/customize-controls.css' );
    }
}
