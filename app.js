angular.module('cocoafarmersdb', ['common.services','ui.bootstrap','ui.utils','ui.router','ngAnimate','esri.map']);

angular.module('cocoafarmersdb').config(function($stateProvider, $urlRouterProvider) {

 $stateProvider.state("home", {
                        url: "/home",
                        templateurl: "/farmers/farmerListView.html"
                    })
                    // Products
                    .state("farmerEditView", {
                        url: "/farmerEditView",
                        templateUrl: "/farmers/farmerEditView.html",
                        controller: "farmerEditCtrl as vm"
                    })
                    
                       .state("farmerEditView.basic", {
                        url: "/basic",
                        templateUrl: "farmers/farmerEditBasicView.html"
                    })
                    
                       .state("farmerEditView.farmDetails", {
                        url: "/farmDetails",
                        templateUrl: "/farmers/farmerEditFarmView.html"
                    })
                    
                       .state("farmerEditView.dependants", {
                        url: "/dependants",
                        templateUrl: "/farmers/farmerEditDependantView.html"
                    })
                    
                       .state("farmerEditView.farmLocation", {
                        url: "/farmLocation",
                        templateUrl: "/farmers/farmerEditfarmLocationView.html",
                         controller: "farmerEditFarmLocationCtrl"
                    })
                    
                     .state("farmerlistView", {
                        url: "/farmerListView",
                        templateUrl: "/farmers/farmerListView.html",
                        controller: "farmerListCtrl as vm"
                    })
                    
                      .state("farmerEditView.farmerDependantView", {
                         url: "/farmerDependantView",
                        views: {
                                "": {
                                    templateUrl: "/farmers/farmerDependantView.html"},
                                "farmerEditDependantView@farmerEditView.farmerDependantView": {
                                    templateUrl: "/farmers/farmerEditDependantView.html" },
                                "farmerListView@farmerEditView.farmerDependantView": {
                                    templateUrl: "/farmers/farmerListView.html" }
                    }
                     })
                    
                    
                    .state("productEdit", {
                        abstract: true,
                        url: "/products/edit/:productId",
                        templateUrl: "app/products/productEditView.html",
                        controller: "ProductEditCtrl as vm",
                        resolve: {
                            productResource: "productResource",

                            product: function (productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({ productId: productId }).$promise;
                            }
                        }
                    })
                    .state("productEdit.info", {
                        url: "/info",
                        templateUrl: "app/products/productEditInfoView.html"
                    })
                    .state("productEdit.price", {
                        url: "/price",
                        templateUrl: "app/products/productEditPriceView.html"
                    })
                    .state("productEdit.tags", {
                        url: "/tags",
                        templateUrl: "app/products/productEditTagsView.html"
                    })

                    .state("productDetail", {
                        url: "/products/:productId",
                        templateUrl: "app/products/productDetailView.html",
                        controller: "ProductDetailCtrl as vm",
                        resolve: {
                            productResource: "productResource",

                            product: function (productResource, $stateParams) {
                                var productId = $stateParams.productId;
                                return productResource.get({ productId: productId }).$promise;
                            }
                        }
                    });
                    
  $urlRouterProvider.otherwise('/home');

});


    /* Add New States Above */
  
    
    

angular.module('cocoafarmersdb').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
