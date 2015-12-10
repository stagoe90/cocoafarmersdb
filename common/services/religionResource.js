/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("religionResource",
                ["$resource",
                 religionResource]);

    function religionResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/Religion/:ReligionID",null,
        {
                
                    'update': { method: 'PUT' }
                });
    }



}());


