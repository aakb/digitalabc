abcApp.factory('quizFactory', function($http, $q) {
  var factory = {};
  var questions = [];
  var quizFinished = false;
  var initialized = false;

  factory.init = function() {
    if (initialized) {
      var defer = $q.defer();
      defer.resolve(true);
      return defer.promise;
    }

    var defer = $q.defer();
    $http({method: 'GET', url: '/backend/quiz.php?action=questions'})
    .success(function(data, status, headers, config) {
      questions = data;
      defer.resolve(true);
      initialized = true;
    });
    return defer.promise;
  }

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
