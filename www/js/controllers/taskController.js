bloomApp.controller('TaskController', function($ionicModal,$timeout,$rootScope,$scope,$ionicSideMenuDelegate,ionicMaterialInk,ionicMaterialMotion) {

	$scope.newTask = {};

	$scope.data = [
		{title : "Walk the Cat", value: 5},
		{title: "Do the Dishes", value: 10},
		{title: "Practice Cello", value: 7},
		{title: "Practice For Lacrosse",value: 7}
	];

	window.localStorage.taskData = JSON.stringify($scope.data);

	var init = function(){
		$scope.taskList = JSON.parse(window.localStorage.taskData);
	}

	$scope.submitTask = function(){
		console.log("submitting");
		$scope.data = JSON.parse(window.localStorage.taskData);
		$scope.data.push({title: $scope.newTask.title, value: $scope.newTask.value});
		window.localStorage.taskData = JSON.stringify($scope.data);
		$scope.taskList = JSON.parse(window.localStorage.taskData);

	}

	angular.element(document).ready(function () {
		ionicMaterialInk.displayEffect();
	});

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		if(toState.name == 'task'){				
			var fab = document.getElementById('fab');
		  	fab.classList.toggle('motion');
			  $timeout(function() {
			          fab.classList.toggle('motion');
			  }, 600);
		}
	});

	$ionicModal.fromTemplateUrl('templates/modal-newTask.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(taskModal) {
		$scope.taskModal = taskModal;
	});

	$scope.openTaskModal = function() {
		$scope.taskModal.show();
	};

	$scope.closeTaskModal = function() {
		$scope.taskModal.hide();
	};

	$scope.$on('$destroy', function() {
		$scope.taskModal.remove();
	});


  init();

});