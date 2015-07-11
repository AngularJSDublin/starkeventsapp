/**
 * Created by Sergey on 27-Jun-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('AdminService', AdminService);

    AdminService.$inject = ['$http', '$log', 'CommonBackendFactory'];

    function AdminService($http, $log, factory) {

        var service = factory.getInstance({
                name: 'AdminService',
                url: 'https://starkeventsdb.firebaseio.com/user-roles/admins',
                useAuth: true
            }),
            auth = service.auth,
            details;

        return  {
            login: loginAdmin,
            logout: logoutAdmin,
            register: registerAdmin
            //delete: deleteAdmin,
            //getDetails: getAdminDetails,
            //updateDetails: updateDetails,
            //getList: getList
        };

        function loginAdmin (login, password) {
            return auth.login(login, password)
                .then(afterAuthorization)
                .catch(failedAuthorization);

            function afterAuthorization (uid) {
                return service.getById(uid)
                    .then(function (data) {
                        details = data;
                    })
            }
            function failedAuthorization(error) {
                $log('Authorization for ' + login + 'failed')
            }
        }

        function logoutAdmin() {
            return auth.logout();
        }

        function registerAdmin(data) {

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