/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("farmerDependantAgeResource",
                ["$resource",
                 farmerDependantAgeResource]);

    function farmerDependantAgeResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/FarmerDependantAge/:FarmerDependantAgeID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
