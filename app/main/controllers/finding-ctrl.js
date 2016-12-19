'use strict';
angular.module('main')

.controller('FindingCtrl', function($scope, Drivers, $state) {
  // get list of drivers
  $scope.drivers = Drivers.all();

  // start on load
  $scope.init = function() {
    setTimeout(function() {
      $state.go('driver');
    }, 1000);
  };
});
