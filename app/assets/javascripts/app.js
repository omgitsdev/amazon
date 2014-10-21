console.log('app.js loaded')

var app = angular.module('amazonApp', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/items", {
      templateUrl: "assets/templates/items.html",
      controller: "ItemsController"
    })
    .otherwise({
      redirectTo: "/"
    })
});
