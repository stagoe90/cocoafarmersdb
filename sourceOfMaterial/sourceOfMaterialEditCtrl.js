
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("sourceOfMaterialEditCtrl",
        ["sourceOfMaterial","$state",
            sourceOfMaterialEditCtrl]);


    function sourceOfMaterialEditCtrl(sourceOfMaterial,$state) {
        /*jshint validthis: true */
        var vm = this;
        
         vm.sourceOfMaterial = sourceOfMaterial;

     

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.sourceOfMaterial.$update(function (data) {
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
