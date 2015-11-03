/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("districtResource",
                ["$resource",
                 districtResource]);

    function districtResource($resource) {
        return $resource("http://210-isu-01/cocoadb/api/district/:DistrictID", null,
       {
                    'update': { method: 'PUT' },
                      save: {
            method: 'POST',
            isArray: true
        }
                });
    }



}());
