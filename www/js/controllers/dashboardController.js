bloomApp.controller('DashboardController', function($ionicLoading,$scope,$ionicSideMenuDelegate,ionicMaterialInk) {


	$scope.addresses = [
	'64 Pitt St. Charleston SC',
	'15 Thomas St. Charleston SC',
	'725 Coleman Boulevard, Mount Pleasant SC',
	'70 Church St. Charleston SC',
	'1600 Pensylvannia Ave. Washington DC',
	'40 Bee St. Charleston SC',
	'415 Upland Trail Rd. Columbia SC'];

	$scope.jamesLoc = $scope.addresses[0];
	$scope.saraLoc = $scope.addresses[0];

	$scope.callKids = function(){
		$ionicLoading.show({template: 'Children Notified', duration:2000});
	};

	$scope.locateKids = function(){
		$scope.jamesLoc = $scope.addresses[Math.floor((Math.random()*6)+1)];
		$scope.saraLoc = $scope.addresses[Math.floor((Math.random()*6)+1)];
	}

	var init = function(){
	}

	angular.element(document).ready(function () {
	  ionicMaterialInk.displayEffect();
	});

	init();

});