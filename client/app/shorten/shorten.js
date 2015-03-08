angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {

  $scope.link = {};

  $scope.addLink = function(link) {
    Links.postLink($scope.link).then(function() {
      $location.path('/links');
    });
  };
});
