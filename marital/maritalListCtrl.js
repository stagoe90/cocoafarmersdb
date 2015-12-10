
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("maritalListCtrl",
                    ["marital",
                        maritalListCtrl]);

    function maritalListCtrl(marital) {
          /*jshint validthis: true */
        var vm = this;
        

        // Assign customers to scope
        vm.marital = marital;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
