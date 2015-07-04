/**
 * Created by Sergey on 04-Jul-15.
 */

(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .service('CommonBackendService', CommonBackendService);

    CommonBackendService.$inject = ['$http', '$log', 'auth'];

    function CommonBackendService($http, $log, auth) {
        var me = this;

        me.auth = auth;
        me.setup = setupService;
        me.getList = getList;
        me.getById = getById;
        me.deleteById = deleteById;
        me.add = add;
        me.edit = edit;

        function setupService (config) {
            me.serviceName = config.name;
            //https://starkeventsdb.firebaseio.com/events
            me.url = config.url;
            me.useAuth = config.useAuth;
        }

        function getUrl(id) {
            // Example used urls
            // List
            // var url = 'https://starkeventsdb.firebaseio.com/events.json';
            // By Id
            // var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
            // Delete
            // var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
            // Add / Edit
            // var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
            var result = me.url;
            if (id) {
                result += '/' + id + '.json';
            } else {
                result += '.json';
            }

            if (me.useAuth) {
                result += '?auth=' +  auth.getToken();
            }
            return result;
        }

        function getList() {
            var url = getUrl();
            return $http
                .get(url)
                .then(getListComplete)
                .catch(getListFailed);

            function getListComplete(responce) {
                return responce.data;
            }
            function getListFailed(error) {
                $log.error('XHR Failed for ' + me.serviceName + '.getList: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function getById(id) {
            var url = getUrl(id);
            return $http
                .get(url)
                .then(getByIdComplete)
                .catch(getByIdFailed);

            function getByIdComplete(responce) {
                return responce.data;
            }
            function getByIdFailed(error) {
                $log.error('XHR Failed for ' + me.serviceName + '.getById: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function deleteById(id) {
            var url = getUrl(id);
            return $http
                .delete(url)
                .then(deleteByIdComplete)
                .catch(deleteByIdFailed);

            function deleteByIdComplete(responce) {
                return responce.status === 200;
            }
            function deleteByIdFailed(error) {
                $log.error('XHR Failed for ' + me.serviceName + '.deleteById: ' + JSON.stringify(error.data, null, 2));
            }
        }

        function add(newOnject) {
            // bad approach, should use other id declaration
            return getList()
                .then(function (data) {
                    var id = data.length;
                    newOnject.id = id;
                    return edit(id, newOnject);
                });
        }

        function edit(id, existObject) {
            var url = getUrl(id);

            return $http
                .put(url, existObject)
                .then(editComplete)
                .catch(editFailed);

            function editComplete(responce) {
                return responce.data;
            }
            function editFailed(error) {
                $log.error('XHR Failed for ' + me.serviceName + ' add / edit: ' + JSON.stringify(error.data, null, 2));
            }
        }
    }
})(angular);