var bloomApp = angular.module('bloom', ['ionic','ionic-material'])

bloomApp.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

bloomApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('landing', {
      url: '/landing',
      templateUrl: 'templates/landingPage.html',
      controller: 'landingController'
    })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/landing');
});
