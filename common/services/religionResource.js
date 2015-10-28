/*jshint latedef: nofunc */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("religionResource",
                ["$resource",
                 religionResource]);

    function religionResource($resource) {
        return $resource("http://210-isu-01/cocoadbwebapi/api/Religion/:ReligionID",null,
                {
                    'update': { method: 'PUT' },
                      save: {
            method: 'POST',
            isArray: true
        }
                });
    }

}());
