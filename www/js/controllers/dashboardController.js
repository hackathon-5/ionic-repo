bloomApp.controller('DashboardController', function($timeout,$state,$ionicLoading,$scope,$ionicSideMenuDelegate,ionicMaterialInk) {

	$scope.notifications = true;

	$scope.returnToDashboard = function(){
		$state.go('dashboard');
	};

	$scope.changeView = function(state){
		if($scope.notifications && state != 'task'){
			$scope.notifications = false; 
		}else if(!$scope.notifications && state == 'task'){
			$scope.notifications = true;
		}
	}

	$scope.noQuery = true; 

	$scope.childStatus = function(){
		$scope.noQuery = false;
		$timeout(function() { $scope.noResponse = true; }, 2000);
		$timeout(function() { $scope.acknowledged = true; }, 4000);
		$timeout(function() { $scope.returning = true; }, 6000);
		$timeout(function() { $scope.noQuery = true; }, 8000).then(function(){
			$scope.noQuery = true;
		})

	}

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

	$scope.profileInfoJ = {
		profilePic : './img/child1.png',
		firstName : 'James',
		lastName : 'Jones',
		points : 18
	};

	$scope.profileInfoS = {
		profilePic : './img/child2.png',
		firstName : 'Sara',
		lastName : 'Jones',
		points : 24
	};

	$scope.recentTasks = [
		{title : "Homework", value: 5},
		{title: "Eatings Veggies", value: 10},
		{title: "Practice Cello", value: 7},
		{title: "Homework" ,value: 5}
	];

	$scope.recentRewards = [
		{description : "traded 5 points for 20 Extra Minutes of Play"},
		{description : "traded 10 points to skip dish duty"},
		{description : "traded 15 points for 1 Ice Cream Cone"},
		{description : "traded 5 points for 20 Extra Minutes of Play"},
		{description : "traded 35 points for 1 hour of Video Games"},

	]

	$scope.callKids = function(){
		$ionicLoading.show({template: 'Children Notified', duration:2000});
	};

	$scope.locateKids = function(){
		$scope.jamesLoc = $scope.addresses[Math.floor((Math.random()*6)+1)];
		$scope.saraLoc = $scope.addresses[Math.floor((Math.random()*6)+1)];
	}

	var init = function(){
	}

	// angular.element(document).ready(function () {
	//   ionicMaterialInk.displayEffect();
	// });

	init();

});