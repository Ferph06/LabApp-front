'use strict';
angular.module('LabApp',['LabControllers','LabServices','ui.router','lumx'])
.config(['$httpProvider','$rootScopeProvider',function($httpProvider,$rootScopeProvider){
	console.log('hola mundo')
	var log=false
	return log=true;

}]);
angular.module('LabControllers',['ngResource']);
angular.module('LabServices',['ngResource'])