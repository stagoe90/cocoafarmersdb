
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("educationListCtrl",
                    ["education",
                        educationListCtrl]);

    function educationListCtrl(education) {
          /*jshint validthis: true */
        var vm = this;
        

        // Assign customers to scope
        vm.education = education;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
