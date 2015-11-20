/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("cocoaTypeResource",
                ["$resource",
                 cocoaTypeResource]);

    function cocoaTypeResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/CocoaType/:CocoaTypeID", null,
       {
                
                    'update': { method: 'PUT' }
                });
    }



}());
