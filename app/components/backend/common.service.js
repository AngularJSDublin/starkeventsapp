/**
 * Created by Sergey on 04-Jul-15.
 */

(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('CommonBackendFactory', CommonBackendFactory);

    CommonBackendFactory.$inject = ['$http', '$log', 'auth'];


    function CommonBackendFactory($http, $log, auth) {

        function CommonBackendService(config) {
            var me = this;
            me.serviceName = config.name;
            me.url = config.url;
            me.useAuth = config.useAuth;
        }

        CommonBackendService.prototype.auth = auth;
        CommonBackendService.prototype.getList = getList;
        CommonBackendService.prototype.getById = getById;
        CommonBackendService.prototype.deleteById = deleteById;
        CommonBackendService.prototype.add = add;
        CommonBackendService.prototype.edit = edit;

        CommonBackendService.prototype.getUrl = getUrl;

        return {
            getInstance: function (config) {
                var instance = new CommonBackendService(config);
                return instance;
            }
        };





            function getUrl(id) {
                var me = this,
                    result = me.url;

                // Example used urls
                // List
                // var url = 'https://starkeventsdb.firebaseio.com/events.json';
                // By Id
                // var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
                // Delete
                // var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
                // Add / Edit
                // var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';

                if (id) {
                    result += '/' + id + '.json';
                } else {
                    result += '.json';
                }

                if (me.useAuth) {
                    result += '?auth=' + auth.getToken();
                }
                return result;
            }

            function getList() {
                var url = this.getUrl();
                return $http
                    .get(url)
                    .then(getListComplete)
                    .catch(getListFailed);

                function getListComplete(responce) {
                    var i, len;
                    len = responce.data.length;
                    for (i = 0; i < len; i += 1) {
                        if (!responce.data[i]){
                            responce.data[i] = {};
                        }
                    }
                    return responce.data;
                }

                function getListFailed(error) {
                    $log.error('XHR Failed for ' + me.serviceName + '.getList: ' + JSON.stringify(error.data, null, 2));
                }
            }

            function getById(id) {
                var url = this.getUrl(id);
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
                var url = this.getUrl(id);
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
                var me = this;
                return me.getList()
                    .then(function (data) {
                        var id = data.length;
                        newOnject.id = id;
                        return me.edit(id, newOnject);
                    });
            }

            function edit(id, existObject) {
                var url = this.getUrl(id);

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