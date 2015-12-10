/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("districtResource",
                ["$resource",
                 districtResource]);

    function districtResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/district/:DistrictID",  null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
