/**
 * Scripts for working with customizer control actions
 *
 * @package   Rootstrap
 * @author    Sky Shabatura
 * @copyright Copyright (c) 2019, Sky Shabatura
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

/**
 * Rootstrap Customize Class
 */
class RootstrapSequences {

    constructor() {
        // define api attribute
        this.api = wp.customize;

        // if wp.customize is not defined, return
        if( ! this.api ) return false;

        // initialize tab functionality
        this.initializeSequences();
    }

    /**
     * Add click handler to tabs and sequence navigation
     */
    initializeSequences() {
        const api = this.api;
        document.querySelectorAll('.rootstrap-sequence').forEach( link => {
            const section = link.dataset.section;
            if( api.section( section ) ) {
                link.addEventListener("click", () => {
                    api.section( section ).active(true);
                    api.section( section ).focus();
                });
            }
        });
    }
}


/**
 * Create our Rootstrap Instance on customize ready
 */
wp.customize.bind('ready', () => {
    const rootstrapSequences = new RootstrapSequences();
});
