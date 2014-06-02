abcApp.factory('quizFactory', function($http) {
  var factory = {};
  var questions = [];

  $http(
    {method: 'GET', url: './backend/quiz.php'}
  )
  .success(function(data, status, headers, config) {
    questions = data;
  });

  var quizFinished = false;

  factory.finishQuiz = function() {
    quizFinished = true;
  }

  factory.getQuizFinished = function() {
    return quizFinished;
  }

  factory.getQuestions = function() {
    return questions;
  }

  factory.getQuestion = function(id) {
    return questions[id - 1];
  }

  factory.getNumberOfQuestions = function() {
    return questions.length;
  }

  factory.getHighestAnsweredQuestion = function() {
    var questionAnswered = 0;
    angular.forEach(questions, function(question, key) {
      if (question.chosenAnswer !== null) {
        questionAnswered++;
      }
    });

    return questionAnswered;
  }

  factory.getResult = function() {
    var res = 0;
    angular.forEach(questions, function(question, key) {
      if (question.correctAnswer == question.chosenAnswer) {
        res = res + 1;
      }
    });

    return parseInt(100 * (res / questions.length));
  }

  return factory;
});
