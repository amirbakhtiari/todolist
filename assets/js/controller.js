todoApp.controller('mainCtrl', function($scope, $mdDialog) {
    
    /**
     * show groups of list
     */
    $scope.groupList = function(ev) {
        $mdDialog.show({
            controller: showGroupListCtrl,
            templateUrl: './template/groupList.html',
            targetEvent: ev,
            clickOutSideToClose: true
        });
    };
    /**
     * groups list controller
     * @param {*} scope 
     */
    function showGroupListCtrl($scope) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        }
    }
    /********************************************************************************************/
    $scope.addTask = function(ev) {
        $mdDialog.show({
            controller: addTaskCtrl,
            templateUrl: './template/addTask.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutSideToClose: true
        }).then(function($answer) {

        }, function() {

        });
    };
    $scope.setting = function(ev) {
        $mdDialog.show({
            controller: settingCtrl,
            templateUrl: './template/setting.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clientInformation: true
        }).then();
    };
    $scope.group = function(ev) {
        $mdDialog.show({
            controller: groupCtrl,
            templateUrl: './template/group.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutSideToClose: true
        });
    };
    /**
     * task controller
     * @param {*} scope 
     */
    function addTaskCtrl($scope) {
        $scope.task = {
            status: true
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        /**
         * return all groups
         */
        db.allDocs({include_docs: true, descending: true}, function(err, doc) {
            $scope.groups = doc.rows;
        });
        /**
         * set priority
         */
        $scope.prioritys = ['زیاد', 'متوسط', 'کم'];
    };
    
    /**
     * setting controller
     * @param {*} scope 
     */
    function settingCtrl($scope) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    };

    /**
     * group controller
     * @param {*} scope 
     */
    function groupCtrl($scope, $localStorage, $sessionStorage) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.group = {
            status: true,
            name: '',
            description: ''
        };
        $scope.saveGroup = function(obj) {
            var group = {
                _id: (new Date()).getTime().toString(),
                name: obj.name,
                description: obj.description,
                status: obj.status,
            };
            db.put(group, function callback(err, result) {
                if(!err) {
                    alert("ذخیره شده");
                    $scope.group = {
                        status: true,
                        name: '',
                        description: ''
                    };
                }
            });
        };
    };
});