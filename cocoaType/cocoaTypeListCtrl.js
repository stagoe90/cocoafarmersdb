
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("cocoaTypeListCtrl",
                    ["cocoaType",
                        cocoaTypeListCtrl]);

    function cocoaTypeListCtrl(cocoaType) {
          /*jshint validthis: true */
        var vm = this;
        

        // Assign customers to scope
        vm.cocoaType = cocoaType;

      //  farmerResource.query(function(data) {
        //    vm.farmers = data;
        //});
       
    }
}());
