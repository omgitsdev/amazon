console.log('items-controller.js loaded')

app.controller('ItemsController',['$location','$scope','$resource', function($location, $scope, $resource) {
  var Item = $resource('/items/:id', {id: '@id'});

  $scope.items = Item.query();

  $scope.test = "hello world"
}]);
