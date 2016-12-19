'use strict';

angular.module('main')

// JobHistory controller
.controller('JobHistoryCtrl', function($scope, Report, Jobs) {
  // set statistic
  $scope.stats = Report.all();

  // get all job history
  $scope.records = Jobs.all();

});
