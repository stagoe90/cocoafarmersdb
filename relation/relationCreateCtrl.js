 
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

 angular
        .module("cocoafarmersdb")
        .controller("relationCreateCtrl",
        ["relationResource","$state",
           relationCreateCtrl]);


    function relationCreateCtrl(relationResource,$state) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
        
        vm.relation= new relationResource();

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                
                vm.relation.$save(function (data) {
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
