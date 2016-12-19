'use strict';
angular.module('main')
.controller('MenuCtrl', function ($scope, Auth) {

  $scope.user = Auth.$getAuth();
  Auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.user = firebaseUser;
   });

});
