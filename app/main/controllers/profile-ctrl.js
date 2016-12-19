'use strict';
angular.module('main')
.controller('ProfileCtrl', function (Auth, dbWrapper, $scope) {
  var profile = Auth.$getAuth();
  
  if(!profile){
    //todo get some kind of logging going in the app and log here if someone is not logged in and hits this controller (since it will break the things)
  }

  $scope.user = profile;
  $scope.profile = dbWrapper.getProfileRef(profile.uid);

  $scope.saveProfile = function() {
      $scope.profile.$save().then(function() {
        alert('Profile saved!');
      }).catch(function() {
        alert('Error!'); //todo show an error in the ui on save? log error?
      });
    };
});
