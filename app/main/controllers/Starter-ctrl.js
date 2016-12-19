'use strict';

angular.module('starter.controllers', [])

// Home controller
.controller('HomeCtrl', function($scope, $state, $ionicPopup) {
  // map height
  $scope.mapHeight = 480;

  // show - hide booking form
  $scope.showForm = false;

  // show - hide modal bg
  $scope.showModalBg = false;

  // toggle form
  $scope.toggleForm = function() {
    $scope.showForm = !$scope.showForm;
    $scope.showModalBg = ($scope.showForm === true);
  };

  // list package.
  $scope.vehicles = [
    {
      name: 'XLarge',
      icon: 'ion-alert-circled',
      active: true
    },
    {
      name: 'Large',
      icon: 'ion-ios-monitor',
      active: false
    },
    {
      name: 'Medium',
      icon: 'ion-ios-box',
      active: false
    },
    {
      name: 'Small',
      icon: 'ion-email',
      active: false
    }
  ];

  // Note to driver
  $scope.note = '';

  // Promo code
  $scope.promo = '';

  // toggle active vehicle
  $scope.toggleVehicle = function(index) {
    for (var i = 0; i < $scope.vehicles.length; i++) {
      $scope.vehicles[i].active = (i === index);
    }
  };



  function initialize() {
    // set up begining position
    var myLatlng = new google.maps.LatLng(42.978240, -71.453531);

    // set option for map
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    };
    // init map
    var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);

    // assign to stop
    $scope.map = map;


    // get ion-view height
    var viewHeight = window.screen.height - 44; // minus nav bar
    // get info block height
    var infoHeight = document.getElementsByClassName('booking-info')[0].scrollHeight;
    // get booking form height
    var bookingHeight = document.getElementsByClassName('booking-form')[0].scrollHeight;
    // set map height = view height - info block height + booking form height

    $scope.mapHeight = viewHeight - infoHeight + bookingHeight;

  }


  // load map when the ui is loaded
  $scope.init = function() {
    initialize();
  };


  // Show note popup when click to 'Notes to driver'
  $scope.showNotePopup = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'main/templates/popup-note.html',
      title: 'Notes to driver',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-balanced',
          onTap: function(e) {
            if (!$scope.data.note) {
              //don't allow the user to close unless he enters note
              e.preventDefault();
            } else {
              return $scope.data.note;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      $scope.note = res;
    });
  };

  // Show promote code popup when click to 'Promote Code'
  $scope.showPromoPopup = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'main/templates/popup-promo.html',
      title: 'Promo code',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-balanced',
          onTap: function(e) {
            if (!$scope.data.promo) {
              //don't allow the user to close unless he enters note
              e.preventDefault();
            } else {
              return $scope.data.promo;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      $scope.promo = res;
    });
  };

  // go to next view when the 'Book' button is clicked
  $scope.book = function() {
    // hide booking form
    $scope.toggleForm();

    // go to finding state
    $state.go('finding');
    //$state.go('tracking');
  };
});
