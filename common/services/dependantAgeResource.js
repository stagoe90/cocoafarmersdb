/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("dependantAgeResource",
                ["$resource",
                 dependantAgeResource]);

    function dependantAgeResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/DependantAge/:DependantAgeID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
