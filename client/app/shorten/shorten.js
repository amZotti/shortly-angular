angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {

  $scope.link = {};

  $scope.addLink = function() {
    console.log($location);
    $http.post('/api/links', {url: $location}).success(function(data) {
      $scope.link[$location] = data;
    });
  };
});
