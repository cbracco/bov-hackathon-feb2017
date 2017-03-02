/**
 * SCROLLSPY
 * @author Chris Bracco
 */

var scrollSpy = (function () {
  // STRICT MODE
  'use strict';

  //
  // PUBLIC METHODS
  //
  function init () {
    var sections = {};
    var section = document.querySelectorAll('.js-scrollspy-section');
    var i = 0;

    Array.prototype.forEach.call(section, function (event) {
      sections[event.id] = event.offsetTop;
    });

    document.addEventListener('scroll', function (event) {
      var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      for (i in sections) {
        if (sections[i] <= scrollPos) {
          document.querySelector('.js-scrollspy-link.is-current').classList.remove('is-current');
          document.querySelector('.js-scrollspy-link[href*=' + i + ']').classList.add('is-current');
        }
      }
    }, false);
  }

  return {
    init: init
  }
})();
