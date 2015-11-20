
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("typeOfArrangementListCtrl",
                    ["typeofarrangement",
                        typeOfArrangementListCtrl]);

    function typeOfArrangementListCtrl(typeofarrangement) {
          /*jshint validthis: true */
        var vm = this;
        
          console.log(typeofarrangement);

        // Assign customers to scope
        vm.typeofarrangement = typeofarrangement;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
