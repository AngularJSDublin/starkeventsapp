/**
 * Created by Sergey on 04-Jul-15.
 */
(function (angular) {
    'use strict';
    angular.module('eventsApp.backend')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', '$log', 'CommonBackendFactory'];

    function UserService($http, $log, factory) {

        var service = factory.getInstance({
                name: 'UserService',
                url: 'https://starkeventsdb.firebaseio.com/user-roles/users',
                useAuth: true
            }),
            auth = service.auth,
            details;

        return  {
            loginRegister: loginRegisterUser,
            logout: logoutUser,
            registerToEvent: registerCurrentUserToEvent
        };

        function loginRegisterUser (login, password) {
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

        function logoutUser() {
            return auth.logout();
        }

        function registerCurrentUserToEvent () {

        }

    }
})(angular);