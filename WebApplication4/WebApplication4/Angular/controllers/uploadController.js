'use strict';

angular.module('angularUploadApp')
    .controller('fileUploadCtrl', function ($scope, $http, $timeout, FileUploader) {
        $scope.upload = [];
        $scope.UploadedFiles = [];

        var uploader = $scope.uploader = new FileUploader({
            url: './api/upload'
        });

        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
            $scope.UploadedFiles.push(response);
        };

    });