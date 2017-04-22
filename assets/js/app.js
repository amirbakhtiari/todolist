var todoApp = angular.module('todoApp', ['ngMaterial', 'ngStorage'])
.run(function($rootScope) {
    $rootScope.title = "مدیریت وظایف"
});
