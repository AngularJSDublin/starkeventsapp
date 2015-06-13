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
           getList: getList
        };

        function getList() {
            return $http
                .get('https://starkeventsdb.firebaseio.com/categories.json')
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