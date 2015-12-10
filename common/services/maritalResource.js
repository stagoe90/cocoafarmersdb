/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("maritalResource",
                ["$resource",
                 maritalResource]);

    function maritalResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/Marital/:MaritalID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
