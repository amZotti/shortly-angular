angular.module('shortly.links', [])
.controller('LinksController', function ($scope, $http, Links) {
  Links.getLinks().success(function(data) {
    $scope.data = data;
  });
});
