
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("LBCListCtrl",
                    ["LBCResource",
                        LBCListCtrl]);

    function LBCListCtrl(LBCResource) {
          /*jshint validthis: true */
        var vm = this;

        LBCResource.query(function(data) {
            vm.LBC = data;
        });
       
    }
}());
