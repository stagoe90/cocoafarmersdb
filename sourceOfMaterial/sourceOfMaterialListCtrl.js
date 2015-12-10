
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("sourceOfMaterialListCtrl",
                    ["sourceOfMaterial",
                        sourceOfMaterialListCtrl]);

    function sourceOfMaterialListCtrl(sourceOfMaterial) {
          /*jshint validthis: true */
        var vm = this;
        

        // Assign customers to scope
        vm.sourceOfMaterial = sourceOfMaterial;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
