abcApp.config(function($routeProvider) {$routeProvider
  .when('/done', {
    controller: 'ShareController',
    templateUrl: '/partials/share.html'
  })
  .when('/:step', {
    controller: 'QuizController',
    templateUrl: '/partials/quiz.html'
  })
  .when('/', {
    redirectTo: '/1'
  })
  .otherwise({redirectTo: '/'});
});
