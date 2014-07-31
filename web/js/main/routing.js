abcApp.config(function($routeProvider) {
  $routeProvider
    .when('/om-projektet', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/index.html'
    })
    .when('/om-projektet/unge', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/unge/index.html'
    })
    .when('/om-projektet/laererne', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/laererne/index.html'
    })
    .when('/om-projektet/foraeldre', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/foraeldre/index.html'
    })
    .when('/om-projektet/andre-kommuner', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/andre-kommuner/index.html'
    })
    .when('/om-projektet/kontakt', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/kontakt/index.html'
    })
    .when('/om-projektet/credits', {
      controller: 'StaticPageController',
      templateUrl: '/partials/om-projektet/credits/index.html'
    })
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
    .when('/siden-blev-ikke-fundet', {
      controller: 'Error404Controller',
      templateUrl: '/partials/siden-blev-ikke-fundet.html'
    })
    .otherwise({
      controller: 'FrontpageController',
      templateUrl: '/partials/index.html'
    });
});