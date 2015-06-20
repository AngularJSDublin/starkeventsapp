/**
 * Created by Sergey on 13-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('EventService', EventService);

    EventService.$inject = ['$http', '$log'];

    function EventService($http, $log) {
        return  {
            getList: getList,
            getById: getById,
            deleteById: deleteById,
            add: add,
            edit: edit
        };

        function getList() {
            var url = 'https://starkeventsdb.firebaseio.com/events.json';
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
            var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
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
            var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';
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

        function add(eventObj) {
            // bad approach, should use other id declaration
            return getList()
                .then(function (data) {
                    var id = data.length;
                    return edit(id, eventObj);
                });
        }

        function edit(id, eventObj) {
            var url = 'https://starkeventsdb.firebaseio.com/events/' + id + '.json';

            return $http
                .put(url, eventObj)
                .then(editComplete)
                .catch(editFailed);

            function editComplete(responce) {
                return responce.data;
            }
            function editFailed(error) {
                $log.error('XHR Failed for EventService add / edit: ' + JSON.stringify(error.data, null, 2));
            }
        }
    }
})(angular);