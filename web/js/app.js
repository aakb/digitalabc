var abcApp = angular.module('abcApp', ['ngRoute', 'ngAnimate', 'duScroll', 'angulartics', 'angulartics.google.analytics', 'ng.picturefill'],
  function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
  })
  .value('duScrollDuration', 800)
  .run(function() {
    FastClick.attach(document.body);
  });
