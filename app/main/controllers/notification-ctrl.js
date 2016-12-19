'use strict';

angular.module('main')
.controller('NotificationCtrl', function($scope, Notifications) {
  // get list of notifications from model
  $scope.notifications = Notifications.all();
});
