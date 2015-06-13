/**
 * Created by Sergey on 13-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('EventService', EventService)

    EventService.$inject = ['$http', '$log'];

    function EventService($http, $log) {
        return  {
            getList: getList
        };

        function getList() {
            return $http
                .get('https://starkeventsdb.firebaseio.com/events.json')
                .then(getListComplete)
                .catch(getListFailed);

            function getListComplete(responce) {
                return responce.data;
            }
            function getListFailed(error) {
                $log.err('XHR Failed for getCategories: ' + error.data);
            }
        }
    }
})(angular);