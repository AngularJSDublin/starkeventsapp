/**
 * Created by Sergey on 13-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('CategoryService', CategoryService)

    CategoryService.$inject = ['$http', '$log', 'CommonBackendFactory'];

    function CategoryService($http, $log, serviceFactory) {

        var service = serviceFactory.getInstance({
            name: 'CategoryService',
            url: 'https://starkeventsdb.firebaseio.com/categories',
            useAuth: false
        });

        return  {
            getList: getList,
            getById: getById,
            deleteById: deleteById,
            add: add,
            edit: edit
        };

        function getList() {
            return service.getList();
        }

        function getById(id) {
            return service.getById(id);
        }

        function deleteById(id) {
            return service.deleteById(id);
        }

        function add(name) {
            return service.add(name);
        }

        function edit(id, name) {
            return service.edit(id, name);
        }
    }
})(angular);