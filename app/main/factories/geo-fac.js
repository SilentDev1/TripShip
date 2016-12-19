'use strict';

//this is a factory to get the current geolocation of a user as a promise
(function () {
 
    var geo = function ($q, $rootScope) {
 
        var apply = function () {
            $rootScope.$apply();
        };
 
        var locate = function () {
            var defer = $q.defer(); 
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    defer.resolve(position);
                    apply();
                },
                function(error) {
                    defer.reject(error);
                    apply();
                });
            return defer.promise;
        };
 
        return {
            locate: locate
        };
    };
 
    geo.$inject = ["$q", "$rootScope"];
 
    angular.module("main")
           .factory("geo", geo);
 
})();