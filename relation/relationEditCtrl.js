
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("relationEditCtrl",
        ["relation","$state",
            relationEditCtrl]);


    function relationEditCtrl(relation,$state) {
        /*jshint validthis: true */
        var vm = this;
        
         vm.relation = relation;



       
        if (vm.id && vm.relation.RelationID) {
            vm.title = "Edit: " + vm.relation.RelationID;
        }
        else {
            vm.title = "New relation";
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };
        
        

        vm.submit = function (isValid) {
            if (isValid) {
                vm.relation.$update(function (data) {
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go("farmerListView");
        };

    }
}());
