abcApp.config(function($routeProvider) {$routeProvider
    .when('/done/:challengeid', {
        controller: 'ShareController',
        templateUrl: '/partials/quiz/quiz-finish.html'
    })
    .when('/done', {
        controller: 'ShareController',
        templateUrl: '/partials/quiz/quiz-finish.html'
    })
    .when('/:step/:challengeid', {
        controller: 'QuizController',
        templateUrl: '/partials/quiz/quiz.html'
    })
    .when('/:step', {
        controller: 'QuizController',
        templateUrl: '/partials/quiz/quiz.html'
    })
    .when('/', {
        controller: 'StartController',
        templateUrl: '/partials/quiz/quiz-start.html'
    })
    .otherwise({redirectTo: '/quiz/index.html'});
});
