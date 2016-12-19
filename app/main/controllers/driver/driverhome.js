'use strict';

angular.module('main')

  // Home controller
  .controller('HomeCtrl', function($scope, Driver, $timeout, $ionicPopup, $ionicModal, $state) {
    // get driver info from model and set to the view
    $scope.driver = Driver.get();

    // generate array from number
    $scope.range = function(n) {
      return new Array(n);
    };

    // Declare modal
    $ionicModal.fromTemplateUrl('main/templates/driver/modal_job.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    // select this job
    $scope.selectJob = function () {
      // close modal first
      $scope.closeModal();

      // show confirm box
      $ionicPopup.confirm({
        title: 'Accpet Delivery?',
        buttons: [
          {
            text: 'No'
          },
          {
            text: 'Yes',
            type: 'button-balanced',
            onTap: function() {
              // go to pickup page
              $state.go('app.pickup');
            }
          }
        ]
      });
    };

    // this is just for testing. Showing how a order will come in. Once we have something in place, we can remove.
    //Show popup when app switch over to driver
    $timeout(function () {
      showJob();
    }, 2000);

    function showJob() {

      $scope.openModal();
    }
  });
