abcApp.config(function($routeProvider) {$routeProvider
    .when('/for-larerne', {
      controller: 'HeaderController',
      templateUrl: '/partials/for-laererne/index.html'
    })
    .when('/for-larerne/digital-parathed', {
        controller: 'HeaderController',
        templateUrl: '/partials/for-laererne/digital-parathed/index.html'
    })
    .when('/quiz', {
      controller: 'HeaderController',
      templateUrl: '/partials/quiz/index.html'
    })
    .otherwise({
      templateUrl: '/partials/index.html',
      redirectTo: '/'
    });
});
