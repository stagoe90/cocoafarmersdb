
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("LBCListCtrl",
                    ["LBC",
                        LBCListCtrl]);

    function LBCListCtrl(LBC) {
          /*jshint validthis: true */
        var vm = this;

   vm.LBC=LBC;
       
    }
}());
