/**
 * Created by Sergey on 13-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('EventService', EventService);

    EventService.$inject = ['$http', '$log', 'CommonBackendService', 'FirebaseService'];

    function EventService($http, $log, service, firebase) {

        var ref = firebase.getInstance();

        service.setup({
            name: 'EventService',
            url: 'https://starkeventsdb.firebaseio.com/events',
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

        function add(eventObj) {
            return service.add(eventObj);
        }

        function edit(id, eventObj) {
            return service.edit(id, eventObj);
        }
    }
})(angular);