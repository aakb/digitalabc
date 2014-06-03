abcApp.config(function($routeProvider) {$routeProvider
  .when('/quiz', {
    controller: 'IndexController',
    templateUrl: 'partials/index.html'
  })
  .when('/quiz/done', {
    controller: 'ShareController',
    templateUrl: 'partials/share.html'
  })
  .when('/quiz/:step', {
    controller: 'QuizController',
    templateUrl: 'partials/quiz.html'
  })
  .when('/quiz', {
    redirectTo: '/quiz/1'
  })
  .otherwise({redirectTo: '/'});
});
