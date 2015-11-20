/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("sourceOfLabourResource",
                ["$resource",
                 sourceOfLabourResource]);

    function sourceOfLabourResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/SourceOfLabour/:SourceOfLabourID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
