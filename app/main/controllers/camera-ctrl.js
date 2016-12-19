// Will need to find a way to store image, will need to test on device for me to adjust
// todo: wire this up to the backend
'use strict';
angular.module('main')
//Function for taking package/item pitcure in posting list.html
// .controller("CamController", function($scope, $cordovaCamera) {
//
//    $scope.takePicture = function() {
//        var options = {
//            quality : 75,
//           //  destinationType : Camera.DestinationType.DATA_URL,
//           //  sourceType : Camera.PictureSourceType.CAMERA,
//            allowEdit : true,
//           //  encodingType: Camera.EncodingType.JPEG,
//           //  targetWidth: 300,
//           //  targetHeight: 300,
//           //  popoverOptions: CameraPopoverOptions,
//            saveToPhotoAlbum: false
//        };
//
//        $cordovaCamera.getPicture(options).then(function(imageData) {
//            $scope.imgURI = "data:image/jpeg;base64," + imageData;
//        }, function() {
//            // An error occured. Show a message to the user
//        });
//    };
//
// });

.controller('CameraCtrl', function ($scope) {
     $scope.takePic = function() {
        var options =   {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0     // 0=JPG 1=PNG
        }
        navigator.camera.getPicture(onSuccess,onFail,options);
    }
    var onSuccess = function(FILE_URI) {
        console.log(FILE_URI);
        $scope.picData = FILE_URI;
        $scope.$apply();
    };
    var onFail = function(e) {
        console.log("On fail " + e);
    }
    $scope.send = function() {
        var myImg = $scope.picData;
        var options = new FileUploadOptions();
        options.fileKey="post";
        options.chunkedMode = false;
        var params = {};
        params.user_token = localStorage.getItem('auth_token');
        params.user_email = localStorage.getItem('email');
        options.params = params;
        var ft = new FileTransfer();
        ft.upload(myImg, encodeURI("https://tripshipfileuploader.azurewebsites.net/upload "), onUploadSuccess, onUploadFail, options);
    }
