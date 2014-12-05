abcApp.factory('quizFactory', function($http, $q) {
  var factory = {};
  var questions = [];
  var quizFinished = false;
  var initialized = false;
  var resultSaved = false;
  var resultID = null;
  var answers = [];
  var challenger = null;

  factory.init = function() {
    var defer;
    if (initialized) {
      defer = $q.defer();
      defer.resolve(true);
      return defer.promise;
    }

    defer = $q.defer();
    $http({method: 'GET', url: '/api/questions'})
    .success(function(data, status, headers, config) {
      questions = data;
      angular.forEach(questions, function(question, key) {
        answers.push({answer: null});
      });
      defer.resolve(true);
      initialized = true;
    });
    return defer.promise;
  };

  factory.resetQuiz = function() {
    questions = [];
    quizFinished = false;
    initialized = false;
    resultSaved = false;
    resultID = null;
    answers = [];
    challenger = null;
  };

  factory.finishQuiz = function() {
    quizFinished = true;
  };

  factory.getQuizFinished = function() {
    return quizFinished;
  };

  factory.getQuestion = function(id) {
    return questions[id - 1];
  };

  factory.getAnswer = function(id) {
    return answers[id - 1];
  };

  factory.getNumberOfQuestions = function() {
    return questions.length;
  };

  factory.getHighestAnsweredQuestion = function() {
    var questionsAnswered = 0;
    angular.forEach(answers, function(answer, key) {
      if (answer.answer !== null) {
        questionsAnswered++;
      }
    });

    return questionsAnswered;
  };

  factory.getResult = function() {
    var res = 0;
    angular.forEach(questions, function(question, key) {
      if (parseInt(question.correctAnswer) === parseInt(answers[key].answer)) {
        res = res + 1;
      }
    });

    return parseInt(100 * (res / questions.length));
  };

  factory.saveResult = function() {
      var defer = $q.defer();
      if (!resultSaved) {
          var ans = [];
          angular.forEach(answers, function(answer, index) {
            ans.push(answer.answer);
          });
          var data = {
              result: factory.getResult(),
              answers: ans
          };
          $http.post('/api/result/save', data)
              .success(function(data, status, headers, config) {
                  resultID = data.id;
                  resultSaved = true;
                  defer.resolve(resultID);
              });
      }
      else {
          defer.resolve(resultID);
      }
      return defer.promise;
  };

  factory.getChallenge = function(id) {
      var defer = $q.defer();
      if (challenger !== null) {
          defer.resolve(challenger);
      } else {
          $http.get('/api/result/' + id)
              .success(function(data, status, headers, config) {
                challenger = data;
                defer.resolve(challenger);
            })
              .error(function() {
                  defer.resolve(null);
              });
      }
      return defer.promise;
  };

  return factory;
});
