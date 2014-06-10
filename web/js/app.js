var abcApp = angular.module('abcApp', ['ngRoute'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});