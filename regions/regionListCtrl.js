
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("regionListCtrl",
                    ["region",
                        regionListCtrl]);

    function regionListCtrl(region) {
          /*jshint validthis: true */
        var vm = this;

   vm.region=region;
       
    }
}());
