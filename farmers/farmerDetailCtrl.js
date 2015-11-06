
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */



(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("farmerDetailCtrl",
                     ["farmerResource","LBCResource","IDTypeResource","educationResource","religionResource","maritalResource","regionResource","districtResource","farmer",
            "$state",
                     farmerDetailCtrl]);
                     
 function farmerDetailCtrl(farmerResource,LBCResource,IDTypeResource,educationResource,religionResource,maritalResource,regionResource,districtResource,farmer,$state) {
       /*jshint validthis: true */
        var vm = this;

        vm.farmer = farmer;

        vm.title = "Farmer Detail: " + vm.farmer.FarmerID;
               
       farmerResource.query(function(data) {
            vm.Farmer = data;
        });      
                     
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
                   

   

      
    }
}());
