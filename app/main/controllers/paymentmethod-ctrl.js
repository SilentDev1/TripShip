'use strict';

angular.module('main')

.controller('PaymentMethodCtrl', function($scope, $state) {
  // default value
  $scope.choice = 'A';

  // change payment method
  $scope.changeMethod = function () {
    // add your code here

    // return to main state
    $state.go('main.home');
  };
});
