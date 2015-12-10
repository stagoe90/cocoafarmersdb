
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("districtEditCtrl",
        ["district","regionResource","$state",
            districtEditCtrl]);


    function districtEditCtrl(district,regionResource,$state) {
        /*jshint validthis: true */
        var vm = this;
        
            regionResource.query(function(data) {
            vm.Region = data;
        });
        
         vm.district = district;

     

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.district.$update(function (data) {
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
