
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("idTypeListCtrl",
                    ["IDType",
                        idTypeListCtrl]);

    function idTypeListCtrl(IDType) {
          /*jshint validthis: true */
        var vm = this;

   vm.IDType=IDType;
       
    }
}());
