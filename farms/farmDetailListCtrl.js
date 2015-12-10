
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("farmDetailListCtrl",
                    ["farm","$stateParams","$state",
                        farmDetailListCtrl]);

    function farmDetailListCtrl(farm,$stateParams,$state) {
          /*jshint validthis: true */
        var vm = this;

        vm.id=$stateParams.FarmerCount;
        
          console.log(farm);

        // Assign customers to scope
        vm.farm = farm;
        
           vm.addFarm = function () {
            $state.go("farmerCreateView.farmDetails", { FarmerCount: $stateParams.FarmerCount });
        };
                                                        
      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
