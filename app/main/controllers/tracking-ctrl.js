'use strict';

angular.module('main')
// Tracking controller
.controller('TrackingCtrl', function($scope, Drivers, $state, $ionicHistory, $ionicPopup) {
  // map object
  $scope.map = null;

  // map height
  $scope.mapHeight = 360;

  // get driver profile
  // change driver id here
  $scope.driver = Drivers.get(1);

  // ratings stars
  $scope.stars = [0, 0, 0, 0, 0];

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
    var map = new google.maps.Map(document.getElementById("map_tracking"), mapOptions);

    // assign to stop
    $scope.map = map;

    // get ion-view height
    var viewHeight = window.screen.height - 44; // minus nav bar
    // get info block height
    var infoHeight = document.getElementsByClassName('tracking-info')[0].scrollHeight;

    $scope.mapHeight = viewHeight - infoHeight;
  }

  function showRating() {
    $scope.data = {
      stars: $scope.stars
    };

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'main/templates/popup-rating.html',
      title: 'Thank you',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Submit</b>',
          type: 'button-balanced',
          onTap: function(e) {
            if (!$scope.data.stars) {
              //don't allow the user to close unless he enters note
              e.preventDefault();
            } else {
              return $scope.data.stars;
            }
          }
        },
      ]
    });
    myPopup.then(function() {
      // save rating here

      // go to home page
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('home');
    });
  }

  $scope.$on('$ionicView.enter', function() {

  });

  // load map when the ui is loaded
  $scope.init = function() {
    setTimeout(function() {
      initialize();
    }, 200);

    // finish trip
    setTimeout(function() {
      showRating();
    }, 1000);
  };
});
