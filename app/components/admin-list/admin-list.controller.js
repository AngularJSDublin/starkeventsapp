/**
 * Created by Sergey on 11-Jul-15.
 */

(function (angular){
    angular.module('eventsApp.controllers')
        .controller('listAdminController', AdminListController);
    AdminListController.$inject = ['$scope', 'AdminService'];
    function AdminListController($scope, adminServise) {
        var vm = this;

        adminServise.getList().then(function (list) {
            vm.adminList = list;
        });
    }
})(angular);
