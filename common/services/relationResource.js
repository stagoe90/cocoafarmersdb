
/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("relationResource",
                ["$resource",
                 relationResource]);

    function relationResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/Relation/:RelationID",null,
        {
                
                    'update': { method: 'PUT' }
                });
    }



}());


