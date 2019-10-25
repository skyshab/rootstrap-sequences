/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/customize-controls.js":
/*!*****************************************!*\
  !*** ./assets/js/customize-controls.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Scripts for working with customizer control actions\n *\n * @package   Rootstrap\n * @author    Sky Shabatura\n * @copyright Copyright (c) 2019, Sky Shabatura\n * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html\n */\n\n/**\n * Rootstrap Customize Class\n */\nvar RootstrapSequences =\n/*#__PURE__*/\nfunction () {\n  function RootstrapSequences() {\n    _classCallCheck(this, RootstrapSequences);\n\n    // define api attribute\n    this.api = wp.customize; // if wp.customize is not defined, return\n\n    if (!this.api) return false; // initialize tab functionality\n\n    this.initializeSequences();\n  }\n  /**\n   * Add click handler to tabs and sequence navigation\n   */\n\n\n  _createClass(RootstrapSequences, [{\n    key: \"initializeSequences\",\n    value: function initializeSequences() {\n      var api = this.api;\n      document.querySelectorAll('.rootstrap-sequence').forEach(function (link) {\n        var section = link.dataset.section;\n\n        if (api.section(section)) {\n          link.addEventListener(\"click\", function () {\n            api.section(section).active(true);\n            api.section(section).focus();\n          });\n        }\n      });\n    }\n  }]);\n\n  return RootstrapSequences;\n}();\n/**\n * Create our Rootstrap Instance on customize ready\n */\n\n\nwp.customize.bind('ready', function () {\n  var rootstrapSequences = new RootstrapSequences();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9taXplLWNvbnRyb2xzLmpzPzQwNzMiXSwibmFtZXMiOlsiUm9vdHN0cmFwU2VxdWVuY2VzIiwiYXBpIiwid3AiLCJjdXN0b21pemUiLCJpbml0aWFsaXplU2VxdWVuY2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJzZWN0aW9uIiwiZGF0YXNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY3RpdmUiLCJmb2N1cyIsImJpbmQiLCJyb290c3RyYXBTZXF1ZW5jZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTs7O0lBR01BLGtCOzs7QUFFRixnQ0FBYztBQUFBOztBQUNWO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQyxFQUFFLENBQUNDLFNBQWQsQ0FGVSxDQUlWOztBQUNBLFFBQUksQ0FBRSxLQUFLRixHQUFYLEVBQWlCLE9BQU8sS0FBUCxDQUxQLENBT1Y7O0FBQ0EsU0FBS0csbUJBQUw7QUFDSDtBQUVEOzs7Ozs7OzBDQUdzQjtBQUNsQixVQUFNSCxHQUFHLEdBQUcsS0FBS0EsR0FBakI7QUFDQUksY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixxQkFBMUIsRUFBaURDLE9BQWpELENBQTBELFVBQUFDLElBQUksRUFBSTtBQUM5RCxZQUFNQyxPQUFPLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxDQUFhRCxPQUE3Qjs7QUFDQSxZQUFJUixHQUFHLENBQUNRLE9BQUosQ0FBYUEsT0FBYixDQUFKLEVBQTZCO0FBQ3pCRCxjQUFJLENBQUNHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDakNWLGVBQUcsQ0FBQ1EsT0FBSixDQUFhQSxPQUFiLEVBQXVCRyxNQUF2QixDQUE4QixJQUE5QjtBQUNBWCxlQUFHLENBQUNRLE9BQUosQ0FBYUEsT0FBYixFQUF1QkksS0FBdkI7QUFDSCxXQUhEO0FBSUg7QUFDSixPQVJEO0FBU0g7Ozs7O0FBSUw7Ozs7O0FBR0FYLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhVyxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLFlBQU07QUFDN0IsTUFBTUMsa0JBQWtCLEdBQUcsSUFBSWYsa0JBQUosRUFBM0I7QUFDSCxDQUZEIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2N1c3RvbWl6ZS1jb250cm9scy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2NyaXB0cyBmb3Igd29ya2luZyB3aXRoIGN1c3RvbWl6ZXIgY29udHJvbCBhY3Rpb25zXG4gKlxuICogQHBhY2thZ2UgICBSb290c3RyYXBcbiAqIEBhdXRob3IgICAgU2t5IFNoYWJhdHVyYVxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKGMpIDIwMTksIFNreSBTaGFiYXR1cmFcbiAqIEBsaWNlbnNlICAgaHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL29sZC1saWNlbnNlcy9ncGwtMi4wLmh0bWxcbiAqL1xuXG4vKipcbiAqIFJvb3RzdHJhcCBDdXN0b21pemUgQ2xhc3NcbiAqL1xuY2xhc3MgUm9vdHN0cmFwU2VxdWVuY2VzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBkZWZpbmUgYXBpIGF0dHJpYnV0ZVxuICAgICAgICB0aGlzLmFwaSA9IHdwLmN1c3RvbWl6ZTtcblxuICAgICAgICAvLyBpZiB3cC5jdXN0b21pemUgaXMgbm90IGRlZmluZWQsIHJldHVyblxuICAgICAgICBpZiggISB0aGlzLmFwaSApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIHRhYiBmdW5jdGlvbmFsaXR5XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNlcXVlbmNlcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBjbGljayBoYW5kbGVyIHRvIHRhYnMgYW5kIHNlcXVlbmNlIG5hdmlnYXRpb25cbiAgICAgKi9cbiAgICBpbml0aWFsaXplU2VxdWVuY2VzKCkge1xuICAgICAgICBjb25zdCBhcGkgPSB0aGlzLmFwaTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvb3RzdHJhcC1zZXF1ZW5jZScpLmZvckVhY2goIGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGxpbmsuZGF0YXNldC5zZWN0aW9uO1xuICAgICAgICAgICAgaWYoIGFwaS5zZWN0aW9uKCBzZWN0aW9uICkgKSB7XG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcGkuc2VjdGlvbiggc2VjdGlvbiApLmFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYXBpLnNlY3Rpb24oIHNlY3Rpb24gKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBDcmVhdGUgb3VyIFJvb3RzdHJhcCBJbnN0YW5jZSBvbiBjdXN0b21pemUgcmVhZHlcbiAqL1xud3AuY3VzdG9taXplLmJpbmQoJ3JlYWR5JywgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3RzdHJhcFNlcXVlbmNlcyA9IG5ldyBSb290c3RyYXBTZXF1ZW5jZXMoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/customize-controls.js\n");

/***/ }),

/***/ "./assets/scss/customize-controls.scss":
/*!*********************************************!*\
  !*** ./assets/scss/customize-controls.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9jdXN0b21pemUtY29udHJvbHMuc2Nzcz9jZjc0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vYXNzZXRzL3Njc3MvY3VzdG9taXplLWNvbnRyb2xzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/scss/customize-controls.scss\n");

/***/ }),

/***/ 0:
/*!*************************************************************************************!*\
  !*** multi ./assets/js/customize-controls.js ./assets/scss/customize-controls.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sky/Repos/skyshab/rootstrap-sequences/assets/js/customize-controls.js */"./assets/js/customize-controls.js");
module.exports = __webpack_require__(/*! /Users/sky/Repos/skyshab/rootstrap-sequences/assets/scss/customize-controls.scss */"./assets/scss/customize-controls.scss");


/***/ })

/******/ });