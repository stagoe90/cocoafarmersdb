 
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

 angular
        .module("cocoafarmersdb")
        .controller("districtCreateCtrl",
        ["districtResource","regionResource","$state",
           districtCreateCtrl]);


    function districtCreateCtrl(districtResource,regionResource,$state) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
      
        
        vm.district= new districtResource();
        
          
               regionResource.query(function(data) {
            vm.Region = data;
        });

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                
                vm.district.$save(function (data) {
                    $state.reload();
                    toastr.success("Save Successful");
                });
            } else {
                alert("Please correct the validation errors first.");
            }
        };

        vm.cancel = function () {
            $state.go('farmerlistView');
        };

      
    }
}());
