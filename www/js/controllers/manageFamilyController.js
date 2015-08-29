bloomApp.controller('ManageFamilyController', function($ionicPopup,$scope,$ionicSideMenuDelegate,ionicMaterialInk) {

	$scope.home = "Not Set";
	$scope.school = "Not Set";

	var init = function(){
		$scope.home = window.localStorage.home || "Not Set";
		$scope.school = window.localStorage.school || "Not Set";
	}

	$scope.updateHome = function(homeAddress){
		$scope.home = homeAddress;
		window.localStorage.home = homeAddress;
	};

	$scope.updateSchool = function(schoolAddress){
		$scope.school = schoolAddress;
		window.localStorage.school = schoolAddress;
	};

	$scope.setSchool = function(){

		$scope.schoolData = {};

		$ionicPopup.show({
			template: '<input type="text" ng-model="schoolData.address" autofocus> ',
		  	title: 'Enter School Address:',
		  	scope: $scope,       
		  	buttons: 
		  	[{text: 'Cancel'},
		  	{text: '<b>Set</b>', type: 'button-calm',
		    	onTap: function(e){  //dont allow user to close 
		      	!$scope.schoolData.address ? e.preventDefault() : $scope.updateSchool($scope.schoolData.address);
		    	}
		  	}]
		});

	};


	$scope.setHome = function(){

		$scope.schoolData = {};

	$ionicPopup.show({
		template: '<input type="text" ng-model="schoolData.home" autofocus> ',
	  	title: 'Enter Home Address:',
	  	scope: $scope,       
	  	buttons: 
	  	[{text: 'Cancel'},
	  	{text: '<b>Set</b>', type: 'button-calm',
	    	onTap: function(e){ 
	      	!$scope.schoolData.home ? e.preventDefault() : $scope.updateHome($scope.schoolData.home);
	    	}
	  	}]
	});

	};

	angular.element(document).ready(function () {
	  ionicMaterialInk.displayEffect();
	});

	init();

});