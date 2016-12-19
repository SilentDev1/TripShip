'use strict';

angular.module('main')

.controller('HistoryCtrl', function($scope, Trips) {
  // get list of trips from model
  $scope.records = Trips.all();
});
