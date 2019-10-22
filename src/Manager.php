<?php
/**
 * Rootstrap Sequences
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

/**
 * Creates a new Rootstrap_Custom_Sections object.
 *
 * @since  1.0.0
 * @access public
 */
class Manager implements Bootable {

    /**
     * Store instance
     */
    private static $instance = null;

    /**
     * Stores Resources Path
     *
     * @since 1.0.0
     * @var array
     */
    private $resources;

    /**
     * Get instance.
     *
     * Instantiate new instance if one has not already been created.
     *
     * @since 1.0.0
     * @return object
     */
    public static function instance(){
        if(self::$instance == null) {
            self::$instance = new RootstrapSequences();
        }
        return self::$instance;
    }

    /**
     * Load resources.
     *
     * @since 1.0.0
     * @return object
     */
    public function boot() {
        // Store resources path
        $this->resources = vendor_path() . '/rootstrap-sequences/dist';
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
    public function customControl($manager) {
        require_once './controls/class-sequence-control.php';
    }

    /**
     * Create sequences
     *
     * @since 1.0.0
     * @return void
     */
    public function sequences($manager) {
        // Filter for registering sequences
        $sequences = apply_filters( 'rootstrap/sequences', [] );
        // Create Sequences
        foreach( $sequences as $args ) {
            $new_sequence = new Sequence($manager, $args);
        }
    }

    /**
     * Enqueue scripts and styles.
     *
     *  If filters are applied defining file locations, load scripts and styles.
     *
     * @since 1.0.0
     */
    public function customizeResources() {
        wp_enqueue_script( 'rootstrap-customize-customize-controls', $this->resources . '/js/customize-controls.min.js', ['customize-controls'], null, true );
        wp_enqueue_style( 'rootstrap-customize-customize-controls', $this->resources . '/css/customize-controls.min.css' );
    }
}
