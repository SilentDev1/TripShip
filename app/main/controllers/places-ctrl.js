'use strict';
angular.module('main')

.controller('PlacesCtrl', function($scope, Places) {
  // set list places
  $scope.places = Places.all();

  // list recent places
  $scope.recentPlaces = Places.recent();
});
