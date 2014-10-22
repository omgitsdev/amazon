console.log('checkout-controller.js loaded');
app.controller('CheckoutController',['$location','$scope','Item','Cart','Order', function($location, $scope, Item, Cart, Order) {
  $scope.test = "Hello World"
  $scope.items = Cart.contents;

  $scope.submitOrder = function(name) {
    cost = Cart.cartCost();
    var order = new Order({person: name, cost: cost});
    order.$save();
    $location.path('/items');
  }
}]);
