/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("farmerResource",
                ["$resource",
                 farmerResource]);

    function farmerResource($resource) {
        return $resource("http://210-isu-01/cocoadb/api/farmer/:FarmerCount", null,
       {
                
                    'update': { method: 'PUT' },
                      save: {
            method: 'POST'
        }
                });
    }



}());
