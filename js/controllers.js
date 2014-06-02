abcApp.controller('IndexController', function($scope) {});

abcApp.controller('ShareController', function($scope, quizFactory) {
  $scope.result = quizFactory.getResult();
});

abcApp.controller('QuizController', function($scope, $routeParams, $location, quizFactory) {
  if (quizFactory.getQuizFinished()) {
    $location.path('/quiz/done');
  }

  $scope.step = $routeParams.step;
  $scope.numberOfQuestions = quizFactory.getNumberOfQuestions();
  $scope.highestQuestionAnswered = quizFactory.getHighestAnsweredQuestion();

  if ($scope.step < 1 || $scope.step > $scope.highestQuestionAnswered) {
    $location.path('/quiz/' + parseInt($scope.highestQuestionAnswered + 1));
  }

  $scope.question = quizFactory.getQuestion($scope.step);

  $scope.nextStep = function() {
    if ($scope.question.chosenAnswer !== null) {
      if ($scope.step < $scope.numberOfQuestions) {
        $location.path('/quiz/' + (parseInt($scope.step) + 1));
      }
      else if ($scope.step == $scope.numberOfQuestions) {
        quizFactory.finishQuiz();
        $location.path('/quiz/done');
      }
    }
  }

  $scope.previousStep = function() {
    if ($scope.step > 1) {
      $location.path('/quiz/' + (parseInt($scope.step - 1)));
    }
  }
});
