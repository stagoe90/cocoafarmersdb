/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("sourceOfMaterialResource",
                ["$resource",
                 sourceOfMaterialResource]);

    function sourceOfMaterialResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/SourceOfMaterial/:SourceOfMaterialID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
