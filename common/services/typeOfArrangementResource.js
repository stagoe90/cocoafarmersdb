/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("typeOfArrangementResource",
                ["$resource",
                 typeOfArrangementResource]);

    function typeOfArrangementResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/TypeOfArrangement/:FarmypeOfarrangement", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
