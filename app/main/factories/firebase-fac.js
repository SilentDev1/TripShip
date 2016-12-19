'use strict';

//wrap the global firebase object so we don't have to depend on the global scope so much'
    angular.module("main")
           .factory("globalFire", function(){
               return firebase;
           });