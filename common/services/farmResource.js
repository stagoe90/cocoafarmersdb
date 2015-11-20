/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("farmResource",
                ["$resource",
                 farmResource]);

    function farmResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/farm/:FarmCount", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
