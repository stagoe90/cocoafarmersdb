
/*jshint latedef: nofunc */
(function () {
    "use strict";
    angular
        .module("cocoafarmersdb")
        .controller("districtListCtrl",
                    ["district",
                        districtListCtrl]);

    function districtListCtrl(district) {
          /*jshint validthis: true */
        var vm = this;
        
        

   vm.district=district;
       
    }
}());
