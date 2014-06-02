abcApp.factory('quizFactory', function() {
  var factory = {};
  var questions = [
    {
      question: 'Kan du finde ud af nemid?',
      answers: [
        {id: 0, text: 'Ja'},
        {id: 1, text: 'NEEJJJ!!!'},
        {id: 2, text: 'Måske'},
        {id: 3, text: 'Hvorfor?'}
      ],
      correctAnswer: 0,
      chosenAnswer: null
    },
    {
      question: 'Skal man bruge nemid for at bruge e-post?',
      answers: [
        {id: 0, text: 'Ja'},
        {id: 1, text: 'Nej'},
        {id: 2, text: 'Måske'},
        {id: 3, text: 'Hvorfor?'}
      ],
      correctAnswer: 0,
      chosenAnswer: null
    },
    {
      question: 'Er nem ID nemt?',
      answers: [
        {id: 0, text: 'Ja'},
        {id: 1, text: 'Nej'},
        {id: 2, text: 'Måske'},
        {id: 3, text: 'Hvorfor?'}
      ],
      correctAnswer: 1,
      chosenAnswer: null
    }
  ];

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