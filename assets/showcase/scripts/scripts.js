/**
 * `position: sticky` Polyfill
 * Provides `position: sticky` support for IE9+
 * @link https://github.com/wilddeer/stickyfill
 */
var positionSticky = (function (Stickyfill) {
  // Strict mode
  'use strict';
  // Public methods
  function init (selector) {
    var stickyElements = document.querySelectorAll(selector);
    for (var i = stickyElements.length - 1; i >= 0; i--) {
        Stickyfill.add(stickyElements[i]);
    }
  }
  // Expose public APIs
  return {
    init: init
  }
})(Stickyfill);
