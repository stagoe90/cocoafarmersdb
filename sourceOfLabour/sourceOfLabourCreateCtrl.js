 
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

 angular
        .module("cocoafarmersdb")
        .controller("sourceOfLabourCreateCtrl",
        ["sourceOfLabourResource","$state",
           sourceOfLabourCreateCtrl]);


    function sourceOfLabourCreateCtrl(sourceOfLabourResource,$state) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
        
        vm.sourceOfLabour= new sourceOfLabourResource();

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                
                vm.sourceOfLabour.$save(function (data) {
                    $state.reload();
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go('farmerlistView');
        };

      
    }
}());
