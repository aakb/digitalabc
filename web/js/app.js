var abcApp = angular.module('abcApp', ['ngTouch', 'ngRoute', 'duScroll', 'angulartics', 'angulartics.google.analytics'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
}).value('duScrollDuration', 800);