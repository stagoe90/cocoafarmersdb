
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("farmerEditCtrl",
        ["farmerResource",
            "$state",
            farmerEditCtrl]);


    function farmerEditCtrl(farmer, $state) {
        /*jshint validthis: true */
        var vm = this;

        vm.farmer = farmer;

        if (vm.farmer && vm.farmer.FarmerCount) {
            vm.title = "Edit: " + vm.farmer.FarmerID;
        }
        else {
            vm.title = "New Farmer";
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.product.$save(function (data) {
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go('productList');
        };

        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        };

        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        };
    }
}());
