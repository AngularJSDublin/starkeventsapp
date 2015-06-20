/**
 * Created by Sergey on 13-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('CategoryService', CategoryService)

    CategoryService.$inject = ['$http', '$log'];

    function CategoryService($http, $log) {
        return  {
            getList: getList,
            getById: getById,
            deleteById: deleteById,
            add: add,
            edit: edit
        };

        function getList() {
            var url = 'https://starkeventsdb.firebaseio.com/categories.json';
            return $http
                .get(url)
                .then(getListComplete)
                .catch(getListFailed);

            function getListComplete(responce) {
                return responce.data;
            }
            function getListFailed(error) {
                $log.error('XHR Failed for CategoryService.getList: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function getById(id) {
            var url = 'https://starkeventsdb.firebaseio.com/categories/' + id + '.json';
            return $http
                .get(url)
                .then(getByIdComplete)
                .catch(getByIdFailed);

            function getByIdComplete(responce) {
                return responce.data;
            }
            function getByIdFailed(error) {
                $log.error('XHR Failed for CategoryService.getById: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function deleteById(id) {
            var url = 'https://starkeventsdb.firebaseio.com/categories/' + id + '.json';
            return $http
                .delete(url)
                .then(deleteByIdComplete)
                .catch(deleteByIdFailed);

            function deleteByIdComplete(responce) {
                return responce.status === 200;
            }
            function deleteByIdFailed(error) {
                $log.error('XHR Failed for CategoryService.deleteById: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function add(name) {
            return getList().then(function (data) {
                return edit(data.length, name);
            });
        }

        function edit(id, name) {
            var url = 'https://starkeventsdb.firebaseio.com/categories/' + id + '.json';
            name = '"' + name + '"';

            return $http
                .put(url, name)
                .then(editComplete)
                .catch(editFailed);

            function editComplete(responce) {
                return responce.data;
            }
            function editFailed(error) {
                $log.error('XHR Failed for CategoryService add / edit: ' + JSON.stringify(error.data, null, 2));
            }
        }
    }
})(angular);