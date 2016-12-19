'use strict';
angular.module('main')
.controller("AuthCtrl",
  function($scope, Auth) {
    $scope.auth = Auth;
    // any time auth state changes, add the user data to scope
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
    });

      $scope.basicAuthLogin = function(){
        Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
          .then(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
        }).catch(function(error) {
          $scope.error = error; //figure out what to do when error occurs probably invalid login bro
        });
      };
  });
