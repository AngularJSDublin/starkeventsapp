/**
 * Created by Sergey on 20-Jun-15.
 */
(function() {
    angular
        .module('eventsApp.auth')
        .factory('authService', AuthService);

    function AuthService() {
        return {
            name: 'authService'
        }
    }
})();