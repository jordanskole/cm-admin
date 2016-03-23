(function() {
  'use strict';

  angular
    .module('cmAdmin')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController ($log, $state, Auth) {

    var vm = this;

    vm.loginWithPassword = function () {
      Auth.$authWithPassword(vm.user)
      .then(function (authData) {
        // _slaask.identify(authData.password.email, {
        //    user_id: authData.uid,
        //    email: authData.password.email,
        // });
        $log.log(authData);
        $state.go('li');
      })
      .catch( function (error) {
        $log.error('Error: ' + error);
      });
    }


  }

})();
