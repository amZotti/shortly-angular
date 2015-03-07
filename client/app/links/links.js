angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  console.log('accessing links controller');

  Links.getLinks().success(function(data) {
    $scope.data = data;
  });

  console.log(Links.getLinks);
  $scope.postLink = Links.postLink;

});
