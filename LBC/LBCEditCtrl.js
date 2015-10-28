
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("LBCEditCtrl",
        ["LBCResource","$state",
            LBCEditCtrl]);


    function LBCEditCtrl(LBCResource,LBC,$state) {
        /*jshint validthis: true */
        var vm = this;
        
         vm.LBC = LBC;



       
        if (vm.LBCID && vm.LBC.LBC) {
            vm.title = "Edit: " + vm.LBC.LBCID;
        }
        else {
            vm.title = "New LBC";
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.LBC.$save(function (data) {
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go('farmerListView');
        };

    }
}());
