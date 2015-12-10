
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("farmerDependantAgeListCtrl",
                    ["farmerDependantAge","$stateParams","$state",
                        farmerDependantAgeListCtrl]);

    function farmerDependantAgeListCtrl(farmerDependantAge,$stateParams,$state) {
          /*jshint validthis: true */
        var vm = this;

        vm.id=$stateParams.FarmerCount;
        
          console.log(farmerDependantAge);

        // Assign customers to scope
        vm.farmerDependantAge =farmerDependantAge;
        
           vm.addfarmerDependantAge = function () {
            $state.go("farmerCreateView.farmerDependantAgeView", { FarmerCount: $stateParams.FarmerCount });
        };
                                                        
      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
