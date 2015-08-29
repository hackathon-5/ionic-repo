bloomApp.controller('RewardController', function($rootScope,$scope,$ionicModal,$ionicSideMenuDelegate,ionicMaterialInk) {


	$scope.newReward = {};

	$scope.data = [
		{title: "1 Episode of Bill Nye", price: 6},
		{title: "Skip Dish Duty", price: 10},
		{title: "1 Sleep Over", price: 25},
		{title: "1 hour of Video Games", price: 35},
		{title: "1 Stuffed Animal", price: 35},
		{title: "1 Macbook Pro", price: 5000}
	];

	window.localStorage.rewardData = JSON.stringify($scope.data);

	var init = function(){
		$scope.rewardList = JSON.parse(window.localStorage.rewardData);
	}

	$scope.submitReward = function(){
		$scope.data = JSON.parse(window.localStorage.rewardData);
		$scope.data.push({title: $scope.newReward.title, price: $scope.newReward.value});
		window.localStorage.rewardData = JSON.stringify($scope.data);
		$scope.rewardList = JSON.parse(window.localStorage.rewardData);

	}

	angular.element(document).ready(function () {
	  ionicMaterialInk.displayEffect();
	});


	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if(toState.name == 'reward'){				
			var fab = document.getElementById('fab');
		  	fab.classList.toggle('motion');
			  $timeout(function() {
			          fab.classList.toggle('motion');
			  }, 600);
		}
	});

	$ionicModal.fromTemplateUrl('templates/modal-newReward.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(rewardModal) {
		$scope.rewardModal = rewardModal;
	});

	$scope.openRewardModal = function() {
		$scope.rewardModal.show();
	};

	$scope.closeRewardModal = function() {
		$scope.rewardModal.hide();
	};

	$scope.$on('$destroy', function() {
		$scope.rewardModal.remove();
	});

	init();

});