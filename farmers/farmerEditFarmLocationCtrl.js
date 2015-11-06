(function () {
    "use strict";
angular.module('cocoafarmersdb')
    .controller('farmerEditFarmLocationCtrl', function($scope) {
        $scope.map = {
                        center: {
                             lng: 1.023194,
                             lat: 7.946527
                        },
                        zoom: 7
        };
    });
    }());
    