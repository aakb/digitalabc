abcApp.config(function($routeProvider) {
  $routeProvider
    .when('/undervisningsmateriale', {
      controller: 'StaticPageController',
      templateUrl: '/partials/undervisningsmateriale/index.html'
    })
    .when('/undervisningsmateriale/sidste-omgang', {
      controller: 'StaticPageController',
      templateUrl: '/partials/undervisningsmateriale/sidste-omgang/index.html'
    })
    .when('/undervisningsmateriale/digital-parathed', {
      controller: 'StaticPageController',
      templateUrl: '/partials/undervisningsmateriale/digital-parathed/index.html'
    })
    .when('/undervisningsmateriale/farvel-forvalt-lingo', {
      controller: 'StaticPageController',
      templateUrl: '/partials/undervisningsmateriale/farvel-forvalt-lingo/index.html'
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