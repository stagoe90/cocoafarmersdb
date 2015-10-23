(function () {
    "use strict";
angular.module('cocoafarmersdb')
    .controller('farmerEditFarmLocationCtrl', function($scope) {
        $scope.map = {
                        center: {
                             lng: -2.3321273,
                             lat: 6.4569353
                        },
                        zoom: 12
        };
    });
    }());
    