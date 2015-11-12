/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("educationResource",
                ["$resource",
                 educationResource]);

    function educationResource($resource) {
        return $resource("http://172.16.5.11/cocoadb/api/education/:EducationID");
    }
    
    

}());
