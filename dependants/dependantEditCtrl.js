
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("dependantEditCtrl",
        ["dependent","$state","educationResource","relationResource",
            dependantEditCtrl]);


    function dependantEditCtrl(dependent,$state,educationResource,relationResource) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
        
        
         
        vm.dependant= dependent;
        
          educationResource.query(function(data) {
            vm.Education = data;
        });
        
          relationResource.query(function(data) {
            vm.Relation = data;
        });

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.dependant.$update(function (data) {
                   $state.go("farmerDetailView",{FarmerCount:vm.id});
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
             $state.go("farmerDetailView",{FarmerCount:vm.id});
        };

      
    }
}());
