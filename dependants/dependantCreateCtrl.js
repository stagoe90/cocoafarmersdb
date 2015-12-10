
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("dependantCreateCtrl",
        ["dependantResource","relationResource","educationResource","$state","$stateParams",
            dependantCreateCtrl]);


    function dependantCreateCtrl(dependantResource,relationResource,educationResource,$state,$stateParams) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
        
          vm.id=$stateParams.FarmerCount;
        vm.dependant= new dependantResource();

         relationResource.query(function(data) {
            vm.Relation = data;
        });
        
        educationResource.query(function(data) {
         vm.Education = data;
      });
        
        
    

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                 vm.dependant.FarmerCount=vm.id;
                vm.dependant.$save(function (data) {
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
