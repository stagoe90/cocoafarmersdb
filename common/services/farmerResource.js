/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("farmerResource",
                ["$resource",
                 farmerResource]);

    function farmerResource($resource) {
        return $resource("http://210-isu-01/cocoadbwebapi/api/farmer/:FarmerCount",null,
                {
                    'update': { method: 'PUT' },
                      save: {
            method: 'POST',
            isArray: true
        }
                });
    }

}());
