'use strict';

(function () {
    // Returns a syncronized firebase object
    var dbWrapper = function ($firebaseObject, globalFire) {

        //todo: check to make sure user is already logged in
        var getProfileRef = function(userId){
            var ref = globalFire.database().ref().child('users').child(userId).child('profile');
            return $firebaseObject(ref);
        };
        return {
            getProfileRef: getProfileRef
        };
    };

    angular.module("main")
           .factory("dbWrapper", dbWrapper);

})();