
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("farmerListCtrl",
                    ["farmerResource",
                        farmerListCtrl]);

    function farmerListCtrl(farmerResource) {
          /*jshint validthis: true */
        var vm = this;

        farmerResource.query(function(data) {
            vm.farmers = data;
        });
       
    }
}());
