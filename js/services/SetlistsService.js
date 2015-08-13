(function() {
  function SetlistsService($q, $rootScope, $http) {
    // doesn't angular do this and return automatically, meaning that this is not needed?
    // doing this and not doing it is the difference between a 'service' service and a 'factory' service, right? Look that up, I picked it up in an article.
    var self = this;
    this.setlists = {};

    this.getAllSetLists = function() {
      var defer = $q.defer();

      $http.get($rootScope.restBaseUrl + 'setlists/setlists.json')
      .success(function(res, status, headers, config) {
        self.setlists = res;
        defer.resolve(res);
      })
      .error(function(err, status) {
        defer.reject(err);
      });

      return defer.promise;
    }

    //return self;
  }

  angular
  .module('gigMateApp')
  .service('SetlistsService', ['$q', '$rootScope', '$http', SetlistsService]);
})();
