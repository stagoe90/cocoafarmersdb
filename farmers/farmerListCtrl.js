
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("farmerListCtrl",
                    ["farmer",
                        farmerListCtrl]);

    function farmerListCtrl(farmer) {
          /*jshint validthis: true */
        var vm = this;
        
        

        // Assign customers to scope
        vm.farmer = farmer;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
