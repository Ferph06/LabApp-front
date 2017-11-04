'use strict';
angular.module('LabApp')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('/', {
		url:'/',
		templateUrl: './app/templates/landing/landing.html'
	})
	.state('/Login', {
		url:'/Login',
		templateUrl: './app/templates/landing/login.html'
	})
	.state('/Register', {
		url:'/Register',
		templateUrl: './app/templates/landing/registro.html'
	})
}]);