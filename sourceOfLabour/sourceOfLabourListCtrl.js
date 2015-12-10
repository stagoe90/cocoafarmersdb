
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("sourceOfLabourListCtrl",
                    ["sourceOfLabour",
                        sourceOfLabourListCtrl]);

    function sourceOfLabourListCtrl(sourceOfLabour) {
          /*jshint validthis: true */
        var vm = this;
        

        // Assign customers to scope
        vm.sourceOfLabour= sourceOfLabour;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
