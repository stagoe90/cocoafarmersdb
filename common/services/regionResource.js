/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("regionResource",
                ["$resource",
                 regionResource]);

    function regionResource($resource) {
        return $resource("http://210-isu-01/cocoadb/api/region/:RegionID", null,
       {
                    'update': { method: 'PUT' },
                      save: {
            method: 'POST',
            isArray: true
        }
                });
    }



}());
