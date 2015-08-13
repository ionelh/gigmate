(function() {
  angular
  .module('gigMateApp', ['ngRoute'])
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
  })
  .config(function($routeProvider) {
    $routeProvider
      // TODO To remove
      .when('/foo', {
        template: '<h1>This is the template for /foo</h1>',
        controller: 'FooCtrl'
      })
      .when('/setlists', {
        templateUrl: 'templates/setlists.html',
        controller: 'GigMateCtrl'
      })
      .otherwise({
        redirectTo: '/setlists'
      })
      ;
  })
  // TODO To remove
  .controller('FooCtrl', function($scope, $routeParams){
    console.dir($routeParams);
  })
  ;
})();
