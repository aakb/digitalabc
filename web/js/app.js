var abcApp = angular.module('abcApp', ['ngTouch', 'ngRoute'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<[');
    $interpolateProvider.endSymbol(']>');
});