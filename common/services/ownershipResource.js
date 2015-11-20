/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("ownershipResource",
                ["$resource",
                 ownershipResource]);

    function ownershipResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/Ownership/:OwnershipID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
