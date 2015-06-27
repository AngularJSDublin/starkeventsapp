/**
 * Created by Sergey on 27-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('AdminService', AdminService);

    AdminService.$inject = ['$http', '$log', 'auth'];

    function AdminService($http, $log, auth) {
        return  {
            getList: getList,
            getById: getById,
            deleteById: deleteById,
            add: add,
            edit: edit
        };

        function getList() {
            var url = 'https://starkeventsdb.firebaseio.com/admins.json';
            url += '?auth=' +  auth.getToken();
            return $http
                .get(url)
                .then(getListComplete)
                .catch(getListFailed);

            function getListComplete(responce) {
                return responce.data;
            }
            function getListFailed(error) {
                $log.error('XHR Failed for EventService.getList: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function getById(id) {
            var url = 'https://starkeventsdb.firebaseio.com/admins/' + id + '.json';
            url += '?auth=' +  auth.getToken();
            return $http
                .get(url)
                .then(getByIdComplete)
                .catch(getByIdFailed);

            function getByIdComplete(responce) {
                return responce.data;
            }
            function getByIdFailed(error) {
                $log.error('XHR Failed for EventService.getById: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function deleteById(id) {
            var url = 'https://starkeventsdb.firebaseio.com/admins/' + id + '.json';
            url += '?auth=' +  auth.getToken();
            return $http
                .delete(url)
                .then(deleteByIdComplete)
                .catch(deleteByIdFailed);

            function deleteByIdComplete(responce) {
                return responce.status === 200;
            }
            function deleteByIdFailed(error) {
                $log.error('XHR Failed for EventService.deleteById: ' + JSON.stringify(error.data, null, 2));
            }
        }


        /**
         *
         * @param adminObj [object]
         * {
         *  email: 'mail@mail.com',
         *  name: 'some admin name',
         *  age: some integer value,
         *  password: 'future password for new admin'
         * }
         * @returns {*} - promise
         */
        function add(adminObj) {
            // bad approach, should use other id declaration
            var data = processAdminObj(adminObj);
            return auth.create(data.login, data.password)
                .then(function() {
                    return getList();
                })
                .then(function (data) {
                    var id = 'user-' + data.length;
                    return edit(id, adminObj);
                });
        }

        function edit(id, adminObj) {
            var url = 'https://starkeventsdb.firebaseio.com/admins/' + id + '.json';
            url += '?auth=' +  auth.getToken();
            return $http
                .put(url, adminObj)
                .then(editComplete)
                .catch(editFailed);

            function editComplete(responce) {
                return responce.data;
            }
            function editFailed(error) {
                $log.error('XHR Failed for EventService add / edit: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function processAdminObj(adminObj){
            var result = {
                login: adminObj.email,
                password: adminObj.password,
                data: {
                    email: adminObj.email,
                    name: adminObj.name,
                    age: adminObj.age
                }
            };
            return result;
        }
    }
})(angular);