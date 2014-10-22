console.log('items-controller.js loaded');
app.controller('ItemsController',['$location','$scope','Item', 'Cart', function($location, $scope, Item, Cart) {
  $scope.items = Item.query();
  $scope.addToCart = function (item) {
    if(item.quantity > 0){
      item.quantity--;
      Cart.addItem(item);
    }
  };

  $scope.checkout = function() {
    $location.path("/checkout");
  };
}]);
