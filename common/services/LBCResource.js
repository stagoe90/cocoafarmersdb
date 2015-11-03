/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("LBCResource",
                ["$resource",
                 LBCResource]);

    function LBCResource($resource) {
        return $resource("http://210-isu-01/cocoadb/api/LBC/:LBCID");
    }
    
    

}());
