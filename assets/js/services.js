angular.module('todo.services', [])
    .factory('Task', function($http, $q) {
    save = function(data) {
        var defrred = $q.defer();
        $http({
            url: '/api/v1/task',
            method: 'POST'
        }).success(function(response) {
            defrred.resolve(response);
        }).error(function(error) {
            defrred.reject(error);
        });
        return defrred.promise;
    };

    get = function(id) {

    };
    getAll = function() {

    };

    remove = function(id) {

    };
    removeAll = function() {
        
    };

    return {
        save       : save,
        get        : get,
        getAll     : getAll,
        remove     : remove,
        removeAll  : removeAll
    };
}).factory('Group', function() {
    save = function(data) {
        
    };
    getAll = function() {

    };
    remove = function(id) {

    };

    return {
        save: save,
        getAll: getAll,
        remove: removeAll
    };
});