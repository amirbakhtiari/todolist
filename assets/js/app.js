angular.module('todoApp', ['todo.controllers', 'todo.services'])
	.run(function($rootScope) {
    	$rootScope.title = "مدیریت وظایف"
	});
