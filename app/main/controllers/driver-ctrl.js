'use strict';

angular.module('main')
// Driver controller
.controller('DriverCtrl', function($scope, Drivers, $state) {
  // get driver profile
  // change driver id here
  $scope.driver = Drivers.get(1);

  // go to tracking screen
  $scope.track = function () {


    // go to tracking state
    $state.go('tracking');
  };
});
