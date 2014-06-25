var abcApp = angular.module('abcApp', ['ngTouch', 'ngRoute', 'ngAnimate', 'duScroll'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
}).value('duScrollDuration', 800);