console.log('app.js loaded')

var app = angular.module('amazonApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "assets/templates/items.html",
      controller: "ItemsController"
    })
    .when('/checkout', {
      templateUrl: "assets/templates/checkout.html",
      controller: "CheckoutController"
    })
    .otherwise({
      redirectTo: "/"
    })
});


// USE ASSET PATH METHOD
