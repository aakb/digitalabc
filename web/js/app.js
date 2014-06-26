var abcApp = angular.module('abcApp', ['ngTouch', 'ngRoute', 'ngAnimate', 'duScroll', 'angulartics', 'angulartics.google.analytics', 'angulartics.scroll'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
}).value('duScrollDuration', 800);