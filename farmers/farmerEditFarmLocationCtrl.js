(function () {
    "use strict";
angular.module('cocoafarmersdb')
    .controller('farmerEditFarmLocationCtrl', function($scope) {
        $scope.map = {
                        center: {
                            lng: -122.676207,
                            lat: 45.523452
                        },
                        zoom: 12
        };
    });
    }());
    