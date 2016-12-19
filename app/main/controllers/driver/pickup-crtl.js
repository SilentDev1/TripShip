'use strict';

angular.module('main')

// Pickup controller
.controller('PickupCtrl', function($scope, Jobs, $state, $ionicPopup, $ionicHistory) {
  // hide back butotn in next view
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  // get job detail from service and show on modal
  $scope.job = Jobs.get(1);

  // pick up
  $scope.pickup = function() {
    $state.go('app.pick_off');
  };

  // show payment popup
  $scope.showPayment = function() {
    $ionicPopup.show({
      templateUrl: 'main/templates/driver/popup_payment.html',
      title: 'Total',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Confirm',
          type: 'button-balanced',
          onTap: function() {
            $scope.confirmPayment();
          }
        }
      ]
    });
  };


  // confirm payment
  $scope.confirmPayment = function() {
    // come back home page
    $state.go('app.home');
  };

});
