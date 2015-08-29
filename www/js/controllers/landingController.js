bloomApp.controller('LandingController', function($cordovaSplashscreen,$scope, $ionicModal, $timeout,$ionicSideMenuDelegate,ionicMaterialInk) {

  $scope.registering = false;
  $scope.joining = true;

  $scope.toggleRegister = function(){
    $scope.joining = !$scope.joining;
    $scope.registering = !$scope.registering;
  }

  var init = function(){
      setTimeout(function() {
        $cordovaSplashscreen.hide();
      }, 2000)
  }

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  angular.element(document).ready(function () {
      ionicMaterialInk.displayEffect();
  });

  init();

});