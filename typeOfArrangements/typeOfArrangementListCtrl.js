
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("typeOfArrangementListCtrl",
                    ["typeOfArrangement",
                        typeOfArrangementListCtrl]);

    function typeOfArrangementListCtrl(typeOfArrangement) {
          /*jshint validthis: true */
        var vm = this;
        
          console.log(typeOfArrangement);

        // Assign customers to scope
        vm.typeOfArrangement = typeOfArrangement;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
