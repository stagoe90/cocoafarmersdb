/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("IDTypeResource",
                ["$resource",
                 farmerResource]);

    function farmerResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/IDType/:IDTypeID");
    }
    
    

}());
