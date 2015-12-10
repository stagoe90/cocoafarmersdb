angular.module('cocoafarmersdb', ['common.services','ui.bootstrap','ui.utils','ui.router','ngAnimate','esri.map']);

angular.module('cocoafarmersdb').config(function($stateProvider, $urlRouterProvider) {

 $stateProvider.state("home", {
                         url: "/farmerListView",
                        templateUrl: "/farmers/farmerListView.html",
                        controller: "farmerListCtrl as vm",
                          resolve: {
                farmerResource: 'farmerResource',
                farmer: function(farmerResource){

                    // This line is updated to return the promise
                    return farmerResource.query().$promise;
                }}
                    })
                    
                    // Products
                    .state("farmerEditView", {
                        url: "/farmerEditView/:FarmerCount",
                        templateUrl: "/farmers/farmerEditView.html",
                        controller: "farmerEditCtrl as vm",
                        
                          resolve: {
                           farmerResource: "farmerResource",

                            farmer: function (farmerResource, $stateParams) {
                                var FarmerCount = $stateParams.FarmerCount;
                                return farmerResource.get({ FarmerCount: FarmerCount }).$promise;
                            }
                        }
                    })
                    
                      .state("dependantEditView", {
                        url: "/dependantEditView/:DependantID",
                        templateUrl: "/dependants/dependantEditView.html",
                        controller: "dependantEditCtrl as vm",
                        
                          resolve: {
                           dependantResource: "dependantResource",

                            dependent: function (dependantResource, $stateParams) {
                                var DependantID = $stateParams.DependantID;
                                return dependantResource.get({ DependantID: DependantID }).$promise;
                            }
                        }
                    })
                    
                    .state("farmerDependantAgeEditView", {
                        url: "/farmerDependantAgeEditView/:FarmerDependantAgeID",
                        templateUrl: "/farmerDependantAges/farmerDependantAgeEditView.html",
                        controller: "farmerDependantAgeEditCtrl as vm",
                        
                          resolve: {
                           farmerDependantAgeResource: "farmerDependantAgeResource",

                            farmerDependantAge: function (farmerDependantAgeResource, $stateParams) {
                                var FarmerDependantAgeID = $stateParams.FarmerDependantAgeID;
                                return farmerDependantAgeResource.get({ FarmerDependantAgeID: FarmerDependantAgeID }).$promise;
                            }
                        }
                    })
                    
                      .state("farmEditFarmView", {
                        url: "/farmEditFarmView/:FarmCount",
                        templateUrl: "/farms/farmEditFarmView.html",
                        controller: "farmEditFarmCtrl as vm",
                        
                          resolve: {
                           farmResource: "farmResource",

                            farm: function (farmResource, $stateParams) {
                                var FarmCount = $stateParams.FarmCount;
                                return farmResource.get({ FarmCount: FarmCount }).$promise;
                            }
                        }
                    })
                    
                    .state("farmerCreateView", {
                        url: "/farmerCreateView",
                        templateUrl: "/farmers/farmerCreateView.html",
                        controller: "farmerCreateCtrl as vm"
                    })
                    
                    
                        .state("farmerCreateView.basic", {
                        url: "/basic",
                        templateUrl: "/farmers/farmerCreateBasicView.html"
                    })
                    
                    
                      .state("farmerCreateView.farmDetails", {
                        url: "/farmDetails/:FarmerCount",
                        templateUrl: "/farms/farmCreateFarmView.html",
                          controller: "farmCreateFarmCtrl as vm"
                    })
                    
                    
                       .state("farmerCreateView.dependantView", {
                        url: "/dependantView/:FarmerCount",
                        templateUrl: "/dependants/dependantView.html",
                         controller: "dependantCreateCtrl as vm"
                    })
                   
                    
                       .state("farmerEditView.basic", {
                        url: "/basic",
                        templateUrl: "farmers/farmerEditBasicView.html"
                    })
                    
                      // .state("farmerEditView.farmDetails", {
                     //   url: "/farmDetails",
                    //    templateUrl: "/farmers/farmerEditFarmView.html"
                   // })
                    
                       .state("farmerEditView.dependants", {
                        url: "/dependants",
                        templateUrl: "/farmers/farmerEditDependantView.html"
                    })
                    
                       .state("farmerEditView.farmLocation", {
                        url: "/farmLocation",
                        templateUrl: "/farmers/farmerEditfarmLocationView.html",
                         controller: "farmerEditFarmLocationCtrl"
                    })
                    
                           .state("farmerDetailBasicView", {
                        url: "/farmerDetailBasicView/:FarmerCount",
                        templateUrl: "/farmers/farmerDetailBasicView.html",
                   controller: function($scope, $stateParams) {
     $scope.FarmerCount = $stateParams.FarmerCount;
  }
})
                     .state("farmerlistView", {
                        url: "/farmerListView",
                        templateUrl: "/farmers/farmerListView.html",
                        controller: "farmerListCtrl as vm",
                          resolve: {
                farmerResource: 'farmerResource',
                farmer: function(farmerResource){

                    // This line is updated to return the promise
                    return farmerResource.query().$promise;
                }}
                    })
                    
                    
                       .state("farmListView", {
                        url: "/farmListView",
                        templateUrl: "/farms/farmListView.html",
                        controller: "farmListCtrl as vm",
                          resolve: {
                farmResource: 'farmResource',
                farm: function(farmResource){
                  // This line is updated to return the promise
                    return farmResource.query().$promise;
                }}
                    })
                    
                     .state("typeOfArrangementListView", {
                        url: "/typeOfArrangementListView",
                        templateUrl: "/typeOfArrangements/typeOfArrangementListView.html",
                        controller: "typeOfArrangementListCtrl as vm",
                          resolve: {
                typeOfArrangementResource: 'typeOfArrangementResource',
                typeofarrangement: function(typeOfArrangementResource){
                  // This line is updated to return the promise
                    return typeOfArrangementResource.query().$promise;
                }}
                    })
                    
                         
                    
                      .state("farmerDependantEditListView", {
                        url: "/farmerDependantEditListView",
                        templateUrl: "/farmers/farmerDependantEditListView.html"
                    })
                    
                     .state("religionEditView", {
                        url: "/religionEditView",
                        templateUrl: "/Religion/religionEditView.html",
                        controller: "religionEditCtrl as vm",
                        
                    })
                    
                      
                     .state("LBCEditView", {
                        url: "/LBCEditView",
                        templateUrl: "/LBC/LBCEditView.html",
                        controller: "LBCEditCtrl as vm"
                    })
                    
                      
                    
                    
                      .state("farmerEditView.farmerDependantView", {
                         url: "/farmerDependantView",
                        views: {
                                "": {
                                    templateUrl: "/farmers/farmerDependantView.html"},
                                "farmerEditDependantView@farmerEditView.farmerDependantView": {
                                    templateUrl: "/farmers/farmerEditDependantView.html" },
                                      controller: "relationEditCtrl as vm",
                                "farmerDependantEditListView@farmerEditView.farmerDependantView": {
                                    templateUrl: "/farmers/farmerDependantEditListView.html",
                                    controller: "relationEditCtrl as vm"}
                    }
                     });
                     
                      $stateProvider.state("LBCCreateMainView", {
                         url: "/LBCCreateMainView/:LBCID",
                        views: {
                               "": {
                                    templateUrl: "/LBC/LBCCreateMainView.html"},
                                "LBCCreateView@LBCCreateMainView": {
                                    templateUrl: "/LBC/LBCCreateView.html" ,
                                      controller: "LBCCreateCtrl as vm"},
                                "LBCListView@LBCCreateMainView": {
                                    templateUrl: "/LBC/LBCListView.html",
                                    controller: "LBCListCtrl as vm",
                                        resolve: {
                LBCResource: 'LBCResource',
                LBC: function(LBCResource){

                    // This line is updated to return the promise
                    return LBCResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("LBCEditMainView", {
                         url: "/LBCEditMainView/:LBCID",
                        views: {
                               "": {
                                    templateUrl: "/LBC/LBCEditMainView.html"},
                                "LBCEditView@LBCEditMainView": {
                                    templateUrl: "/LBC/LBCEditView.html" ,
                                      controller: "LBCEditCtrl as vm",
                                          resolve: {
                           LBCResource: "LBCResource",

                            LBC: function (LBCResource, $stateParams) {
                                var LBCID = $stateParams.LBCID;
                                return LBCResource.get({ LBCID: LBCID }).$promise;
                            }}
                        },
                                "LBCListView@LBCEditMainView": {
                                    templateUrl: "/LBC/LBCListView.html",
                                    controller: "LBCListCtrl as vm",
                                        resolve: {
                LBCResource: 'LBCResource',
                LBC: function(LBCResource){

                    // This line is updated to return the promise
                    return LBCResource.query().$promise;
                }}}}
                     });
                     
                     
                        $stateProvider.state("religionCreateMainView", {
                         url: "/religionCreateMainView/:ReligionID",
                        views: {
                               "": {
                                    templateUrl: "/religion/religionCreateMainView.html"},
                                "religionCreateView@religionCreateMainView": {
                                    templateUrl: "/religion/religionCreateView.html" ,
                                      controller: "religionCreateCtrl as vm"},
                                "religionListView@religionCreateMainView": {
                                    templateUrl: "/religion/religionListView.html",
                                    controller: "religionListCtrl as vm",
                                        resolve: {
                religionResource: 'religionResource',
                religion: function(religionResource){

                    // This line is updated to return the promise
                    return religionResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("religionEditMainView", {
                         url: "/religionEditMainView/:ReligionID",
                        views: {
                               "": {
                                    templateUrl: "/religion/religionEditMainView.html"},
                                "religionEditView@religionEditMainView": {
                                    templateUrl: "/religion/religionEditView.html" ,
                                      controller: "religionEditCtrl as vm",
                                          resolve: {
                           religionResource: "religionResource",

                            religion: function (religionResource, $stateParams) {
                                var ReligionID = $stateParams.ReligionID;
                                return religionResource.get({ ReligionID: ReligionID }).$promise;
                            }}
                        },
                                "religionListView@religionEditMainView": {
                                    templateUrl: "/religion/religionListView.html",
                                    controller: "religionListCtrl as vm",
                                        resolve: {
                religionResource: 'religionResource',
                religion: function(religionResource){

                    // This line is updated to return the promise
                    return religionResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                       $stateProvider.state("regionCreateMainView", {
                         url: "/regionCreateMainView/:RegionID",
                        views: {
                               "": {
                                    templateUrl: "/regions/regionCreateMainView.html"},
                                "regionCreateView@regionCreateMainView": {
                                    templateUrl: "/regions/regionCreateView.html" ,
                                      controller: "regionCreateCtrl as vm"},
                                "regionListView@regionCreateMainView": {
                                    templateUrl: "/regions/regionListView.html",
                                    controller: "regionListCtrl as vm",
                                        resolve: {
                regionResource: 'regionResource',
                region: function(regionResource){

                    // This line is updated to return the promise
                    return regionResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("regionEditMainView", {
                         url: "/regionEditMainView/:RegionID",
                        views: {
                               "": {
                                    templateUrl: "/regions/regionEditMainView.html"},
                                "regionEditView@regionEditMainView": {
                                    templateUrl: "/regions/regionEditView.html" ,
                                      controller: "regionEditCtrl as vm",
                                          resolve: {
                           regionResource: "regionResource",

                            region: function (regionResource, $stateParams) {
                                var RegionID = $stateParams.RegionID;
                                return regionResource.get({ RegionID: RegionID }).$promise;
                            }}
                        },
                                "regionListView@regionEditMainView": {
                                    templateUrl: "/regions/regionListView.html",
                                    controller: "regionListCtrl as vm",
                                        resolve: {
                regionResource: 'regionResource',
                region: function(regionResource){

                    // This line is updated to return the promise
                    return regionResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                        $stateProvider.state("idTypeCreateMainView", {
                         url: "/idTypeCreateMainView/:IDTypeID",
                        views: {
                               "": {
                                    templateUrl: "/idTypes/idTypeCreateMainView.html"},
                                "idTypeCreateView@idTypeCreateMainView": {
                                    templateUrl: "/idTypes/idTypeCreateView.html" ,
                                      controller: "idTypeCreateCtrl as vm"},
                                "idTypeListView@idTypeCreateMainView": {
                                    templateUrl: "/idTypes/idTypeListView.html",
                                    controller: "idTypeListCtrl as vm",
                                        resolve: {
                IDTypeResource: 'IDTypeResource',
                IDType: function(IDTypeResource){

                    // This line is updated to return the promise
                    return IDTypeResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("idTypeEditMainView", {
                         url: "/idTypeEditMainView/:IDTypeID",
                        views: {
                               "": {
                                    templateUrl: "/idTypes/idTypeEditMainView.html"},
                                "idTypeEditView@idTypeEditMainView": {
                                    templateUrl: "/idTypes/idTypeEditView.html" ,
                                      controller: "idTypeEditCtrl as vm",
                                          resolve: {
                           IDTypeResource: "IDTypeResource",

                            IDType: function (IDTypeResource, $stateParams) {
                                var IDTypeID = $stateParams.IDTypeID;
                                return IDTypeResource.get({ IDTypeID: IDTypeID }).$promise;
                            }}
                        },
                                "idTypeListView@idTypeEditMainView": {
                                    templateUrl: "/idTypes/idTypeListView.html",
                                    controller: "idTypeListCtrl as vm",
                                        resolve: {
                IDTypeResource: 'IDTypeResource',
                IDType: function(IDTypeResource){

                    // This line is updated to return the promise
                    return IDTypeResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                        $stateProvider.state("districtCreateMainView", {
                         url: "/districtCreateMainView/:DistrictID",
                        views: {
                               "": {
                                    templateUrl: "/districts/districtCreateMainView.html"},
                                "districtCreateView@districtCreateMainView": {
                                    templateUrl: "/districts/districtCreateView.html" ,
                                      controller: "districtCreateCtrl as vm"},
                                "districtListView@districtCreateMainView": {
                                    templateUrl: "/districts/districtListView.html",
                                    controller: "districtListCtrl as vm",
                                        resolve: {
                districtResource: 'districtResource',
                district: function(districtResource){

                    // This line is updated to return the promise
                    return districtResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("districtEditMainView", {
                         url: "/districtEditMainView/:DistrictID",
                        views: {
                               "": {
                                    templateUrl: "/districts/districtEditMainView.html"},
                                "districtEditView@districtEditMainView": {
                                    templateUrl: "/districts/districtEditView.html" ,
                                      controller: "districtEditCtrl as vm",
                                          resolve: {
                           districtResource: "districtResource",

                            district: function (districtResource, $stateParams) {
                                var DistrictID = $stateParams.DistrictID;
                                return districtResource.get({ DistrictID: DistrictID }).$promise;
                            }}
                        },
                                "districtListView@districtEditMainView": {
                                    templateUrl: "/districts/districtListView.html",
                                    controller: "districtListCtrl as vm",
                                        resolve: {
                districtResource: 'districtResource',
                district: function(districtResource){

                    // This line is updated to return the promise
                    return districtResource.query().$promise;
                }}}}
                     });
                     
                        $stateProvider.state("educationCreateMainView", {
                         url: "/educationCreateMainView/:EducationID",
                        views: {
                               "": {
                                    templateUrl: "/education/educationCreateMainView.html"},
                                "educationCreateView@educationCreateMainView": {
                                    templateUrl: "/education/educationCreateView.html" ,
                                      controller: "educationCreateCtrl as vm"},
                                "educationListView@educationCreateMainView": {
                                    templateUrl: "/education/educationListView.html",
                                    controller: "educationListCtrl as vm",
                                        resolve: {
               educationResource: 'educationResource',
                education: function(educationResource){

                    // This line is updated to return the promise
                    return educationResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("educationEditMainView", {
                         url: "/educationEditMainView/:EducationID",
                        views: {
                               "": {
                                    templateUrl: "/education/educationEditMainView.html"},
                                "educationEditView@educationEditMainView": {
                                    templateUrl: "/education/educationEditView.html" ,
                                      controller: "educationEditCtrl as vm",
                                          resolve: {
                           districtResource: "educationResource",

                            education: function (educationResource, $stateParams) {
                                var EducationID = $stateParams.EducationID;
                                return educationResource.get({ EducationID: EducationID }).$promise;
                            }}
                        },
                                "educationListView@educationEditMainView": {
                                    templateUrl: "/education/educationListView.html",
                                    controller: "educationListCtrl as vm",
                                        resolve: {
                educationResource: 'educationResource',
                education: function(educationResource){

                    // This line is updated to return the promise
                    return educationResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                         $stateProvider.state("maritalCreateMainView", {
                         url: "/maritalCreateMainView/:MaritalID",
                        views: {
                               "": {
                                    templateUrl: "/marital/maritalCreateMainView.html"},
                                "maritalCreateView@maritalCreateMainView": {
                                    templateUrl: "/marital/maritalCreateView.html" ,
                                      controller: "maritalCreateCtrl as vm"},
                                "maritalListView@maritalCreateMainView": {
                                    templateUrl: "/marital/maritalListView.html",
                                    controller: "maritalListCtrl as vm",
                                        resolve: {
              maritalResource: 'maritalResource',
                marital: function(maritalResource){

                    // This line is updated to return the promise
                    return maritalResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("maritalEditMainView", {
                         url: "/maritalEditMainView/:MaritalID",
                        views: {
                               "": {
                                    templateUrl: "/marital/maritalEditMainView.html"},
                                "maritalEditView@maritalEditMainView": {
                                    templateUrl: "/marital/maritalEditView.html" ,
                                      controller: "maritalEditCtrl as vm",
                                          resolve: {
                           maritalResource: "maritalResource",

                            marital: function (maritalResource, $stateParams) {
                                var MaritalID = $stateParams.MaritalID;
                                return maritalResource.get({ MaritalID: MaritalID }).$promise;
                            }}
                        },
                                "maritalListView@maritalEditMainView": {
                                    templateUrl: "/marital/maritalListView.html",
                                    controller: "maritalListCtrl as vm",
                                        resolve: {
                maritalResource: 'maritalResource',
                marital: function(maritalResource){

                    // This line is updated to return the promise
                    return maritalResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                     
                       $stateProvider.state("ownershipCreateMainView", {
                         url: "/ownershipCreateMainView/:OwnershipID",
                        views: {
                               "": {
                                    templateUrl: "/ownership/ownershipCreateMainView.html"},
                                "ownershipCreateView@ownershipCreateMainView": {
                                    templateUrl: "/ownership/ownershipCreateView.html" ,
                                      controller: "ownershipCreateCtrl as vm"},
                                "ownershipListView@ownershipCreateMainView": {
                                    templateUrl: "/ownership/ownershipListView.html",
                                    controller: "ownershipListCtrl as vm",
                                        resolve: {
              ownershipResource: 'ownershipResource',
                ownership: function(ownershipResource){

                    // This line is updated to return the promise
                    return ownershipResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("ownershipEditMainView", {
                         url: "/ownershipEditMainView/:OwnershipID",
                        views: {
                               "": {
                                    templateUrl: "/ownership/ownershipEditMainView.html"},
                                "ownershipEditView@ownershipEditMainView": {
                                    templateUrl: "/ownership/ownershipEditView.html" ,
                                      controller: "ownershipEditCtrl as vm",
                                          resolve: {
                           ownershipResource: "ownershipResource",

                            ownership: function (ownershipResource, $stateParams) {
                                var OwnershipID = $stateParams.OwnershipID;
                                return ownershipResource.get({ OwnershipID: OwnershipID }).$promise;
                            }}
                        },
                                "ownershipListView@ownershipEditMainView": {
                                    templateUrl: "/ownership/ownershipListView.html",
                                    controller: "ownershipListCtrl as vm",
                                        resolve: {
               ownershipResource: 'ownershipResource',
                ownership: function(ownershipResource){

                    // This line is updated to return the promise
                    return ownershipResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                     
                          $stateProvider.state("cocoaTypeCreateMainView", {
                         url: "/cocoaTypeCreateMainView/:CocoaTypeID",
                        views: {
                               "": {
                                    templateUrl: "/cocoaType/cocoaTypeCreateMainView.html"},
                                "cocoaTypeCreateView@cocoaTypeCreateMainView": {
                                    templateUrl: "/cocoaType/cocoaTypeCreateView.html" ,
                                      controller: "cocoaTypeCreateCtrl as vm"},
                                "cocoaTypeListView@cocoaTypeCreateMainView": {
                                    templateUrl: "/cocoaType/cocoaTypeListView.html",
                                    controller: "cocoaTypeListCtrl as vm",
                                        resolve: {
              cocoaTypeResource: 'cocoaTypeResource',
                cocoaType: function(cocoaTypeResource){

                    // This line is updated to return the promise
                    return cocoaTypeResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("cocoaTypeEditMainView", {
                         url: "/cocoaTypeEditMainView/:CocoaTypeID",
                        views: {
                               "": {
                                    templateUrl: "/cocoaType/cocoaTypeEditMainView.html"},
                                "cocoaTypeEditView@cocoaTypeEditMainView": {
                                    templateUrl: "/cocoaType/cocoaTypeEditView.html" ,
                                      controller: "cocoaTypeEditCtrl as vm",
                                          resolve: {
                           cocoaTypeResource: "cocoaTypeResource",

                            cocoaType: function (cocoaTypeResource, $stateParams) {
                                var CocoaTypeID = $stateParams.CocoaTypeID;
                                return cocoaTypeResource.get({ CocoaTypeID: CocoaTypeID }).$promise;
                            }}
                        },
                                "cocoaTypeListView@cocoaTypeEditMainView": {
                                    templateUrl: "/cocoaType/cocoaTypeListView.html",
                                    controller: "cocoaTypeListCtrl as vm",
                                        resolve: {
               cocoaTypeResource: 'cocoaTypeResource',
                cocoaType: function(cocoaTypeResource){

                    // This line is updated to return the promise
                    return cocoaTypeResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                     
                     
                     
                       $stateProvider.state("sourceOfMaterialCreateMainView", {
                         url: "/sourceOfMaterialCreateMainView/:SourceOfMaterialID",
                        views: {
                               "": {
                                    templateUrl: "/sourceOfMaterial/sourceOfMaterialCreateMainView.html"},
                                "sourceOfMaterialCreateView@sourceOfMaterialCreateMainView": {
                                    templateUrl: "/sourceOfMaterial/sourceOfMaterialCreateView.html" ,
                                      controller: "sourceOfMaterialCreateCtrl as vm"},
                                "sourceOfMaterialListView@sourceOfMaterialCreateMainView": {
                                    templateUrl: "/sourceOfMaterial/sourceOfMaterialListView.html",
                                    controller: "sourceOfMaterialListCtrl as vm",
                                        resolve: {
              sourceOfMaterialResource: 'sourceOfMaterialResource',
                sourceOfMaterial: function(sourceOfMaterialResource){

                    // This line is updated to return the promise
                    return sourceOfMaterialResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("sourceOfMaterialEditMainView", {
                         url: "/sourceOfMaterialEditMainView/:SourceOfMaterialID",
                        views: {
                               "": {
                                    templateUrl: "/sourceOfMaterial/sourceOfMaterialEditMainView.html"},
                                "sourceOfMaterialEditView@sourceOfMaterialEditMainView": {
                                    templateUrl: "/sourceOfMaterial/sourceOfMaterialEditView.html" ,
                                      controller: "sourceOfMaterialEditCtrl as vm",
                                          resolve: {
                           sourceOfMaterialResource: "sourceOfMaterialResource",

                            sourceOfMaterial: function (sourceOfMaterialResource, $stateParams) {
                                var SourceOfMaterialID = $stateParams.SourceOfMaterialID;
                                return sourceOfMaterialResource.get({ SourceOfMaterialID: SourceOfMaterialID }).$promise;
                            }}
                        },
                                "sourceOfMaterialListView@sourceOfMaterialEditMainView": {
                                    templateUrl: "/sourceOfMaterial/sourceOfMaterialListView.html",
                                    controller: "sourceOfMaterialListCtrl as vm",
                                        resolve: {
               sourceOfMaterialResource: 'sourceOfMaterialResource',
                sourceOfMaterial: function(sourceOfMaterialResource){

                    // This line is updated to return the promise
                    return sourceOfMaterialResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                     
                       $stateProvider.state("sourceOfLabourCreateMainView", {
                         url: "/sourceOfLabourCreateMainView/:SourceOfLabourID",
                        views: {
                               "": {
                                    templateUrl: "/sourceOfLabour/sourceOfLabourCreateMainView.html"},
                                "sourceOfLabourCreateView@sourceOfLabourCreateMainView": {
                                    templateUrl: "/sourceOfLabour/sourceOfLabourCreateView.html" ,
                                      controller: "sourceOfLabourCreateCtrl as vm"},
                                "sourceOfLabourListView@sourceOfLabourCreateMainView": {
                                    templateUrl: "/sourceOfLabour/sourceOfLabourListView.html",
                                    controller: "sourceOfLabourListCtrl as vm",
                                        resolve: {
              sourceOfLabourResource: 'sourceOfLabourResource',
                sourceOfLabour: function(sourceOfLabourResource){

                    // This line is updated to return the promise
                    return sourceOfLabourResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("sourceOfLabourEditMainView", {
                         url: "/sourceOfLabourEditMainView/:SourceOfLabourID",
                        views: {
                               "": {
                                    templateUrl: "/sourceOfLabour/sourceOfLabourEditMainView.html"},
                                "sourceOfLabourEditView@sourceOfLabourEditMainView": {
                                    templateUrl: "/sourceOfLabour/sourceOfLabourEditView.html" ,
                                      controller: "sourceOfLabourEditCtrl as vm",
                                          resolve: {
                          sourceOfLabourResource: "sourceOfLabourResource",

                            sourceOfLabour: function (sourceOfLabourResource, $stateParams) {
                                var SourceOfLabourID = $stateParams.SourceOfLabourID;
                                return sourceOfLabourResource.get({ SourceOfLabourID: SourceOfLabourID }).$promise;
                            }}
                        },
                                "sourceOfLabourListView@sourceOfLabourEditMainView": {
                                    templateUrl: "/sourceOfLabour/sourceOfLabourListView.html",
                                    controller: "sourceOfLabourListCtrl as vm",
                                        resolve: {
               sourceOfLabourResource: 'sourceOLabourResource',
                sourceOfLabour: function(sourceOfLabourResource){

                    // This line is updated to return the promise
                    return sourceOfLabourResource.query().$promise;
                }}}}
                     });
                    //   .state("farmerCreateView.dependantView", {
                      //   url: "/dependantView",
                        //views: {
                          //      "": {
                            //        templateUrl: "/dependants/dependantView.html"},
                              //  "dependantCreateView@farmerCreateView.dependantView": {
                                //    templateUrl: "/dependants/dependantCreateView.html" },
                                  //    controller: "dependantCreateCtrl as vm",
                               // "dependantListView@farmerCreateView.dependantView": {
                                 //   templateUrl: "/dependants/dependantListView.html"
                                  //}
                    //}
                     //})
                     
                     
                     
                         $stateProvider.state("relationCreateMainView", {
                         url: "/relationCreateMainView/:RelationID",
                        views: {
                               "": {
                                    templateUrl: "/relation/relationCreateMainView.html"},
                                "relationCreateView@relationCreateMainView": {
                                    templateUrl: "/relation/relationCreateView.html" ,
                                      controller: "relationCreateCtrl as vm"},
                                "relationListView@relationCreateMainView": {
                                    templateUrl: "/relation/relationListView.html",
                                    controller: "relationListCtrl as vm",
                                        resolve: {
              relationResource: 'relationResource',
                relation: function(relationResource){

                    // This line is updated to return the promise
                    return relationResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("relationEditMainView", {
                         url: "relationEditMainView/:RelationID",
                        views: {
                               "": {
                                    templateUrl: "relation/relationEditMainView.html"},
                                "relationEditView@relationEditMainView": {
                                    templateUrl: "/relation/relationEditView.html" ,
                                      controller: "relationEditCtrl as vm",
                                          resolve: {
                           relationResource: "relationResource",

                            relation: function (relationResource, $stateParams) {
                                var RelationID = $stateParams.RelationID;
                                return relationResource.get({ RelationID: RelationID }).$promise;
                            }}
                        },
                                "relationListView@relationEditMainView": {
                                    templateUrl: "/relation/relationListView.html",
                                    controller: "relationListCtrl as vm",
                                        resolve: {
              relationResource: 'relationResource',
                relation: function(relationResource){

                    // This line is updated to return the promise
                    return relationResource.query().$promise;
                }}}}
                     });
                     
                     
                     
                     
                     
                     
                          $stateProvider.state("typeOfArrangementCreateMainView", {
                         url: "/typeOfArrangementCreateMainView/:FarmypeOfarrangement",
                        views: {
                               "": {
                                    templateUrl: "/typeOfArrangements/typeOfArrangementCreateMainView.html"},
                                "typeOfArrangementCreateView@typeOfArrangementCreateMainView": {
                                    templateUrl: "/typeOfArrangements/typeOfArrangementCreateView.html" ,
                                      controller: "typeOfArrangementCreateCtrl as vm"},
                                "typeOfArrangementListView@typeOfArrangementCreateMainView": {
                                    templateUrl: "/typeOfArrangements/typeOfArrangementListView.html",
                                    controller: "typeOfArrangementListCtrl as vm",
                                        resolve: {
              typeOfArrangementResource: 'typeOfArrangementResource',
                typeOfArrangement: function(typeOfArrangementResource){

                    // This line is updated to return the promise
                    return typeOfArrangementResource.query().$promise;
                }}}}
                     });
                     
                     
                       $stateProvider.state("typeOfArrangementEditMainView", {
                         url: "typeOfArrangementEditMainView/:FarmypeOfarrangement",
                        views: {
                               "": {
                                    templateUrl: "typeOfArrangements/typeOfArrangementEditMainView.html"},
                                "typeOfArrangementEditView@typeOfArrangementEditMainView": {
                                    templateUrl: "/typeOfArrangements/typeOfArrangementEditView.html" ,
                                      controller: "typeOfArrangementEditCtrl as vm",
                                          resolve: {
                           typeOfArrangementResource: "typeOfArrangementResource",

                            typeOfArrangement: function (typeOfArrangementResource, $stateParams) {
                                var FarmypeOfarrangement = $stateParams.FarmypeOfarrangement;
                                return typeOfArrangementResource.get({ FarmypeOfarrangement: FarmypeOfarrangement }).$promise;
                            }}
                        },
                                "typeOfArrangementListView@typeOfArrangementEditMainView": {
                                    templateUrl: "/typeOfArrangements/typeOfArrangementListView.html",
                                    controller: "typeOfArrangementListCtrl as vm",
                                        resolve: {
              typeOfArrangementResource: 'typeOfArrangementResource',
                typeOfArrangement: function(typeOfArrangementResource){

                    // This line is updated to return the promise
                    return typeOfArrangementResource.query().$promise;
                }}}}
                     })
                     
                     
                            .state("farmerCreateView.farmerDependantAgeView", {
                         url: "/farmerDependantAgeView/:FarmerCount",
                         templateUrl: "/farmerDependantAges/farmerDependantAgeView.html",
                        controller: "farmerDependantAgeCreateCtrl as vm"
                    })
                     
                         .state("farmerDetailView", {
                         url: "/farmerDetailView/:FarmerCount",  
                        views: {
                                "": {
                                    templateUrl: "/farmers/farmerDetailView.html"},
                                "farmerDetailBasicView@farmerDetailView": {
                                    templateUrl: "/farmers/farmerDetailBasicView.html" ,
                                     controller: "farmerDetailCtrl as vm",
                        
                          resolve: {
                           farmerResource: "farmerResource",

                            farmer: function (farmerResource, $stateParams) {
                                var FarmerCount = $stateParams.FarmerCount;
                                return farmerResource.get({ FarmerCount: FarmerCount }).$promise;
                            }}},
                               "dependantListView@farmerDetailView": {
                                    templateUrl: "/dependants/dependantListView.html" ,
                                      controller: "dependantListCtrl as vm",
                        resolve: {
                           dependantResource: "dependantResource",

                            dependant: function (dependantResource, $stateParams) {
                                var FarmerCount = $stateParams.FarmerCount;
                                return dependantResource.query({ FarmerCount: FarmerCount }).$promise;
                            }}},
                            
                                "farmerDependantAgeListView@farmerDetailView": {
                                    templateUrl: "/farmerDependantAges/farmerDependantAgeListView.html" ,
                                      controller: "farmerDependantAgeListCtrl as vm",
                        resolve: {
                           farmerDependantAgeResource: "farmerDependantAgeResource",

                            farmerDependantAge: function (farmerDependantAgeResource, $stateParams) {
                                var FarmerCount = $stateParams.FarmerCount;
                                return farmerDependantAgeResource.query({ FarmerCount: FarmerCount }).$promise;
                            }}},
                            
                                "farmDetailListView@farmerDetailView": {
                                    templateUrl: "/farms/farmDetailListView.html" ,
                                      controller: "farmDetailListCtrl as vm",
                        resolve: {
                           farmResource: "farmResource",

                            farm: function (farmResource, $stateParams) {
                                var FarmerCount = $stateParams.FarmerCount;
                                return farmResource.query({ FarmerCount: FarmerCount }).$promise;
                            }}}
                    }
                     })
                     
                           .state("farmerEditView.farmerDependantAgeView", {
                         url: "/farmerDependantAgeView",
                        views: {
                                "": {
                                    templateUrl: "/farmers/farmerDependantAgeView.html"},
                                    controller: "farmerEditCtrl as vm",
                                "farmerEditDependantAgeView@farmerEditView.farmerDependantAgeView": {
                                    templateUrl: "/farmers/farmerEditDependantAgeView.html" },
                                "farmerDependantAgeEditListView@farmerEditView.farmerDependantAgeView": {
                                    templateUrl: "/farmers/farmerDependantAgeEditListView.html" }
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
