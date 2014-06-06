abcApp.config(function($routeProvider) {$routeProvider
    .when('/done', {
        controller: 'ShareController',
        templateUrl: '/partials/quiz-finish.html'
    })
    .when('/:step', {
        controller: 'QuizController',
        templateUrl: '/partials/quiz.html'
    })
    .when('/', {
        controller: 'StartController',
        templateUrl: '/partials/quiz-start.html'
    })
    .otherwise({redirectTo: '/'});
});
