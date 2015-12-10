
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("religionListCtrl",
                    ["religion",
                        religionListCtrl]);

    function religionListCtrl(religion) {
          /*jshint validthis: true */
        var vm = this;

   vm.religion=religion;
       
    }
}());
