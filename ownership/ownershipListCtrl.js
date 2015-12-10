
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("ownershipListCtrl",
                    ["ownership",
                        ownershipListCtrl]);

    function ownershipListCtrl(ownership) {
          /*jshint validthis: true */
        var vm = this;
        

        // Assign customers to scope
        vm.ownership = ownership;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
