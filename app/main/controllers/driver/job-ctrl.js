// Just using this page as example to fill in can deleted once we have something in place
// To do, pop up for driver when a new request come in

'use strict';

angular.module('main')

// Job Modal controller
.controller('JobModalController', function($scope, Jobs) {
  // job select remaining time
  $scope.remainingTime = 20;

  // get job detail from service and show on modal
  $scope.job = Jobs.get(1);

  // calculate remaining time
  function countDown() {
    $scope.remainingTime = 20;

    // countdown time
    var interval = setInterval(function() {
      $scope.remainingTime--;
      // apply scope
      $scope.$apply();

      // if time is over
      if ($scope.remainingTime === 0) {
        // stop interval
        clearInterval(interval);

        // close modal
        $scope.closeModal();

      }
    }, 1000);

  }

  // start countdown
  countDown();
});
