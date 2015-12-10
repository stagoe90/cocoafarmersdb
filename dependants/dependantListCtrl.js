
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("dependantListCtrl",
                    ["dependant","$stateParams","$state",
                        dependantListCtrl]);

    function dependantListCtrl(dependant,$stateParams,$state) {
          /*jshint validthis: true */
        var vm = this;

        vm.id=$stateParams.FarmerCount;
        
          console.log(dependant);

        // Assign customers to scope
        vm.dependant =dependant;
        
           vm.addDependant = function () {
            $state.go("farmerCreateView.dependantView", { FarmerCount: $stateParams.FarmerCount });
        };
                                                        
      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
