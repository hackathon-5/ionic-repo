bloomApp.controller('TaskController', function($rootScope,$scope,$ionicSideMenuDelegate,ionicMaterialInk,ionicMaterialMotion) {

	$scope.data = {
		task1: {title : "Walk the cat"},
		task2: {title: "Take out the trash"},
		task3: {title: "do the dishes"}
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