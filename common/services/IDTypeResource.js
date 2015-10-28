/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("IDTypeResource",
                ["$resource",
                 farmerResource]);

    function farmerResource($resource) {
        return $resource("http://210-isu-01/cocoadbwebapi/api/IDType/:IDTypeID");
    }
    
    

}());
