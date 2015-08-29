bloomApp.controller('RewardController', function($scope,$ionicSideMenuDelegate,ionicMaterialInk) {


	$scope.data = {
		task1: {title : "20 Extra Minutes of Play", price: 5},
		task2: {title: "1 Episode of Bill Nye", price: 6},
		task3: {title: "Skip Dish Duty", price: 10},
		task4: {title: "1 Ice Cream Cone", price: 15},
		task5: {title: "1 Sleep Over", price: 25},
		task6: {title: "A Trip to the Movies", price: 25},
		task7: {title: "1 hour of Video Games", price: 35},
		task8: {title: "1 Stuffed Animal", price: 35},
		task9: {title: "1 Macbook Pro", price: 5000}
	};

	window.localStorage.rewardData = JSON.stringify($scope.data);

	var init = function(){
		$scope.rewardList = JSON.parse(window.localStorage.rewardData);
	}

	angular.element(document).ready(function () {
	  ionicMaterialInk.displayEffect();
	});

	init();

});