
/*jshint latedef: nofunc */
/*jslint node: true */
/*global alert */
/*global toastr */
/*global $state */

(function () {
    "use strict";

    angular
        .module("cocoafarmersdb")
        .controller("dependantCreateCtrl",
        ["dependantResource","relationResource","educationResource","$state",
            dependantCreateCtrl]);


    function dependantCreateCtrl(dependantResource,relationResource,educationResource,$state) {
        /*jshint validthis: true */
        /*jshint newcap: false */
        
        var vm = this;
        vm.dependant= new dependantResource();

        
         educationResource.query(function(data) {
            vm.education = data;
        });
        
        
          relationResource.query(function(data) {
            vm.relation = data;
        });

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.dependant.$save(function (data) {
                     $state.go('farmerlistView');
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
