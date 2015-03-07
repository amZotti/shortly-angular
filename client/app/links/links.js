angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  console.log('accessing links controller');
  $scope.data = Links.getLinks();
});
