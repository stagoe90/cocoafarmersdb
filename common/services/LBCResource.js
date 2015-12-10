/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("LBCResource",
                ["$resource",
                 LBCResource]);

    function LBCResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/LBC/:LBCID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
