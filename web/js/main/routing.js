abcApp.config(function($routeProvider) {$routeProvider
  .when('/for-larerne', {
    controller: 'StaticPageController',
    templateUrl: '/partials/for-laererne/index.html'
  })
  .when('/for-larerne/digital-parathed', {
    controller: 'StaticPageController',
    templateUrl: '/partials/for-laererne/digital-parathed/index.html'
  })
  .when('/quiz', {
    controller: 'StartController',
    templateUrl: '/partials/quiz/index.html'
  })
  .when('/quiz/done/:challengeid', {
    controller: 'ShareController',
    templateUrl: '/partials/quiz/quiz-finish.html'
  })
  .when('/quiz/done', {
    controller: 'ShareController',
    templateUrl: '/partials/quiz/quiz-finish.html'
  })
  .when('/quiz/:step/:challengeid', {
    controller: 'QuizController',
    templateUrl: '/partials/quiz/quiz.html'
  })
  .when('/quiz/:step', {
    controller: 'QuizController',
    templateUrl: '/partials/quiz/quiz.html'
  })
  .otherwise({
    controller: 'FrontpageController',
    templateUrl: '/partials/index.html'
  });
});
