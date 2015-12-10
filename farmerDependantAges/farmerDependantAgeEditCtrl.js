
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("farmerDependantAgeEditCtrl",
        ["farmerDependantAge","dependantAgeResource","educationResource","$state","$stateParams",
            farmerDependantAgeEditCtrl]);


    function farmerDependantAgeEditCtrl(farmerDependantAge,dependantAgeResource,educationResource,$state,$stateParams) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        
        var vm = this;

        vm.farmerDependantAge= farmerDependantAge;

    educationResource.query(function(data) {
         vm.Education = data;
      });
        
          dependantAgeResource.query(function(data) {
         vm.DependantAge = data;
     });
        
        

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.farmerDependantAge.FarmerCount=vm.id;
                vm.farmerDependantAge.$update(function (data) {
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
