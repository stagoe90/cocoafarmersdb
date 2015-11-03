
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("relationResource",
                ["$resource",
                 relationResource]);

    function relationResource($resource) {
        return $resource("http://210-isu-01/cocoadb/api/relation/:id",null,
       {
               
                    'update': { method: 'PUT' },
                    'get':    {method:'GET'},
                      save: { method: 'POST'
        }
                });
    }



}());
