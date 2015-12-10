
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("farmEditFarmCtrl",
        ["farm","ownershipResource","cocoaTypeResource","regionResource","districtResource","typeOfArrangementResource","ownershipResource","sourceOfLabourResource","sourceOfMaterialResource",
            "$state",
            farmEditFarmCtrl]);


    function farmEditFarmCtrl(farm,$state,cocoaTypeResource,regionResource,districtResource,typeOfArrangementResource,ownershipResource,sourceOfLabourResource,sourceOfMaterialResource) {
        /*jshint validthis: true */
          /*jshint newcap: false */
        var vm = this;
        
          vm.farm = farm;
          
          regionResource.query(function(data) {
            vm.Region = data;
        });
        
          districtResource.query(function(data) {
            vm.District = data;
        });
        
        typeOfArrangementResource.query(function(data) {
            vm.TypeOfArrangement = data;
        });
        
        cocoaTypeResource.query(function(data) {
            vm.CocoaType = data;
        });
        
        
          ownershipResource.query(function(data) {
            vm.Ownership = data;
        });

        
         sourceOfMaterialResource.query(function(data) {
            vm.SourceOfMaterial = data;
        });
        
            sourceOfLabourResource.query(function(data) {
            vm.SourceOfLabour = data;
        });

       
     // if (vm.farm && vm.farm.FarmCount) {
           // vm.title = "Edit: " + vm.farmer.FarmerCount;
       // }
        //else {
          //  vm.title = "New Farmer";
        //}

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {

                vm.farm.$save(function (data) {
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go('farmerlistView',{});
        };

      
    }
}());
