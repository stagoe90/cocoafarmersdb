/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("educationResource",
                ["$resource",
                 educationResource]);

    function educationResource($resource) {
        return $resource("http://210-isu-01/cocoadb/api/education/:EducationID");
    }
    
    

}());
