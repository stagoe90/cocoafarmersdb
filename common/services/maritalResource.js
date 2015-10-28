/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("maritalResource",
                ["$resource",
                 maritalResource]);

    function maritalResource($resource) {
        return $resource("http://210-isu-01/cocoadbwebapi/api/Marital/:MaritalID");
    }
    
    

}());
