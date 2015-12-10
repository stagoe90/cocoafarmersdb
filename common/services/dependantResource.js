/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("dependantResource",
                ["$resource",
                 dependantResource]);

    function dependantResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/Dependent/:DependantID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
