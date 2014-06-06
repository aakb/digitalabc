var abcApp = angular.module('abcApp', ['ngRoute', 'ngAnimate'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});