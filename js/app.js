var gigMateApp = angular.module('gigMateApp', []);

gigMateApp
  .run(function($rootScope) {
    $rootScope.restBaseUrl = '';
  });
