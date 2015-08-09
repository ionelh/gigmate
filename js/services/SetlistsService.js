gigMateApp
  .service('SetlistsService', function($q, $rootScope, $http) {
    // doesn't angular do this and return automatically, meaning that this is not needed?
    // doing this and not doing it is the difference between a 'service' service and a 'factory' service, right? Look that up!
    var setlist = this;
    setlist.setlists = {};

    setlist.getAllSetLists = function() {
      var defer = $q.defer();

      $http.get($rootScope.restBaseUrl + 'setlists/setlists.json')
      .success(function(res, status, headers, config) {
        setlist.setlists = res;
        defer.resolve(res);
      })
      .error(function(err, status) {
        defer.reject(err);
      });

      return defer.promise;
    }

    return setlist;
  });
