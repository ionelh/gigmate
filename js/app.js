(function() {
  angular
  .module('gigMateApp', [])
  // TODO not sure what this .run syntax does, but I've read that for this kind of data that you need to persist accross your app, constants are a better practice:
  /*
  angular.constant('UserData', {
    firstName: '',
    lastName: ''
  });
  */
  // then you just populate this at login or whatever, and inject 'UserData' in controllers and services just like any other dependency.
  .run(function($rootScope) {
    $rootScope.restBaseUrl = '';
  });
})();
