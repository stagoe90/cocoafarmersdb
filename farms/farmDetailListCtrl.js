
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("farmDetailListCtrl",
                    ["farmResource",
                        farmDetailListCtrl]);

    function farmDetailListCtrl(farmResource) {
          /*jshint validthis: true */
        var vm = this;
        
        
        
          //console.log(farm);

        // Assign customers to scope
       // vm.farm = farm;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
