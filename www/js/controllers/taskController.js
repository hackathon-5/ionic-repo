bloomApp.controller('TaskController', function($rootScope,$scope,$ionicSideMenuDelegate,ionicMaterialInk,ionicMaterialMotion) {

	$scope.data = {
		task1: {title : "Walk the Cat"},
		task2: {title: "Do the Dishes"},
		task3: {title: "Practice Cello"},
		task4: {title: "Practice For Lacrosse"}

	};

	window.localStorage.taskData = JSON.stringify($scope.data);

	var init = function(){
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

  init();

});