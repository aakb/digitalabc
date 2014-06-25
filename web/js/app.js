var abcApp = angular.module('abcApp', ['ngTouch', 'ngRoute', 'ngAnimate'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});