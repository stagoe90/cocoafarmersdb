
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("relationListCtrl",
                    ["relation",
                        relationListCtrl]);

    function relationListCtrl(relation) {
          /*jshint validthis: true */
        var vm = this;
        
      

        // Assign customers to scope
        vm.relation = relation;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
