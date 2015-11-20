
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("farmListCtrl",
                    ["farm","$stateParams",
                        farmListCtrl]);

    function farmListCtrl(farm,$stateParams) {
          /*jshint validthis: true */
        var vm = this;
        
        vm.id=$stateParams.FarmerCount;
        
          console.log(farm);

        // Assign customers to scope
        vm.farm = farm;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
