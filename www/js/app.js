var bloomApp = angular.module('bloom', ['ionic','ionic-material','ngCordova'])

bloomApp.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

  });
});

bloomApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('landing', {
      url: '/landing',
      templateUrl: 'templates/landingPage.html',
      controller: 'LandingController'
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboardPage.html',
      controller: 'DashboardController'
    })

    .state('task', {
      url: '/task',
      templateUrl: 'templates/taskPage.html',
      controller: 'TaskController'
    })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');
});
