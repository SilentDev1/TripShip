'use strict';
var angularApp = angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'firebase',
  'LocalForageModule',
  'starter.controllers',
  'main.services'
  // TODO: load other modules selected during generation
]);
angularApp.
 run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $state.go("main.auth");
    }
  });
}]);
angularApp
.config(function ($stateProvider, $urlRouterProvider, $localForageProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/home');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
    .state('main.auth', {
      url: '/auth',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/auth.html'
        },
      }
    })
    .state('main.profile', {
        url: '/profile',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/profile.html',
            controller: 'ProfileCtrl as ProfileCtrl'
          }
        },
        resolve: {
          // controller will not be loaded until $requireSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth":  function(Auth) {
            // $requireSignIn returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireSignIn();
          }
        }

      })
      .state('main.home', {
        url: '/home',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.notification', {
        url: '/notification',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/notification.html',
            controller: 'NotificationCtrl'
          }
        }
      })
      .state('main.register', {
        url: '/register',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/register.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
        //Fill in/ History for fast posting
      }).state('main.places', {
        url: '/places',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/places.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      // History
      .state('main.history', {
        url: '/history',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/history.html',
            controller: 'HistoryCtrl'
          }
        }
      })
      // Choose payment method
      .state('payment_method', {
        url: '/payment-method',
        templateUrl: 'main/templates/payment-method.html',
        controller: 'PaymentMethodCtrl'
      })
      // Find a driver
      .state('finding', {
        url: '/finding',
        templateUrl: 'main/templates/finding.html',
        controller: 'FindingCtrl'
      })

      // Show driver profile
      .state('driver', {
        url: '/driver',
        templateUrl: 'main/templates/driver.html',
        controller: 'DriverCtrl'
      })

      // Show driver profile
      .state('main.login', {
        url: '/login',
        templateUrl: 'main/templates/login.html',
        // controller: 'LoginCtrl'
      })


      // Tracking driver position
      .state('tracking', {
        url: '/tracking',
        templateUrl: 'main/templates/tracking.html',
        controller: 'TrackingCtrl'
      })

      // Support form
      .state('support', {
    url: '/support',
    templateUrl: 'main/templates/support.html',
    controller: 'SupportCtrl'
    })

    //Driver Pages

    // state for main screen
.state('app', {
  url: '/app',
  abstract: true,
  templateUrl: '/main/templates/driver/app.html'
})

// Home screen
.state('app.home', {
  url: '/home',
  templateUrl: '/main/templates/driver/home.html',
  controller: 'HomeCtrl'
})

// Customer pickup
.state('app.pickup', {
  url: '/pickup',
  templateUrl: '/main/templates/driver/pickup.html',
  controller: 'PickupCtrl'
})

// Customer pick off
.state('app.pick_off', {
  url: '/pick_off',
  templateUrl: '/main/templates/driver/pick_off.html',
  controller: 'PickupCtrl'
})

// Profile page
.state('app.profile', {
  url: '/profile',
  templateUrl: '/main/templates/driver/profile.html',
  controller: 'ProfileCtrl'
})


// Setting page
.state('app.setting', {
  url: '/setting',
  templateUrl: '/main/templates/driver/setting.html',
  controller: 'SettingCtrl'
})

// Wallet
.state('app.wallet', {
  url: '/wallet',
  templateUrl: '/main/templates/driver/wallet.html',
  controller: 'WalletCtrl'
})

// Job history
.state('app.job_history', {
  url: '/job_history',
  templateUrl: '/main/templates/driver/job_history.html',
  controller: 'JobHistoryCtrl'
})


      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        },
        resolve: {
          // controller will not be loaded until $requireSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth":  function(Auth) {
            // $requireSignIn returns a promise so the resolve waits for it to complete
            // If the promise is rejected, it will throw a $stateChangeError (see above)
            return Auth.$requireSignIn();
          }
        }

      });

      $localForageProvider.config({
        driver      : localforage.LOCALSTORAGE, // if you want to force a driver
        name        : 'TripShip' // name of the database and prefix for your data, it is "lf" by default
    });
});
