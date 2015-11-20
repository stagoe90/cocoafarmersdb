
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("farmerCreateCtrl",
        ["farmerResource","LBCResource","IDTypeResource","educationResource","religionResource","maritalResource","regionResource","districtResource","typeOfArrangementResource","$state",
            farmerCreateCtrl]);


    function farmerCreateCtrl(farmerResource,LBCResource,IDTypeResource,educationResource,religionResource,maritalResource,regionResource,districtResource,typeOfArrangementResource,$state) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
        vm.farmer= new farmerResource();
        


        LBCResource.query(function(data) {
            vm.LBC = data;
        });
        
         IDTypeResource.query(function(data) {
            vm.IDType = data;
        });
        
           educationResource.query(function(data) {
            vm.Education = data;
        });
        
          religionResource.query(function(data) {
            vm.Religion = data;
        });
        
          maritalResource.query(function(data) {
            vm.Marital = data;
        });
        
          regionResource.query(function(data) {
            vm.Region = data;
        });
        
          districtResource.query(function(data) {
            vm.District = data;
        });
        
       typeOfArrangementResource.query(function(data) {
            vm.TypeOfArrangement = data;
        });
        
        
        

      

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.farmer.$save(function (data) {
                     $state.go('farmerlistView');
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
