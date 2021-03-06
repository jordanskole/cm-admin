(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .filter('capitalize', capitalize);

  /** @ngInject */
  function capitalize () {
    return function(input) {
          return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
  }

})();
