
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("cocoaTypeEditCtrl",
        ["cocoaType","$state",
            cocoaTypeEditCtrl]);


    function cocoaTypeEditCtrl(cocoaType,$state) {
        /*jshint validthis: true */
        var vm = this;
        
         vm.cocoaType = cocoaType;

     

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.cocoaType.$update(function (data) {
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
