/**
 * Created by Sergey on 20-Jun-15.
 */
(function(angular) {
    var fbase, $q, identity;
    angular
        .module('eventsApp.auth')
        .service('auth', AuthService);

    AuthService.$inject = ['FirebaseService', '$q'];

    function AuthService(firebase, promise) {

        fbase = firebase.getInstance();
        $q = promise;

        this.create = CreateUser;
        this.remove = RemoveUser;

        this.login = Login;
        this.logout = Logout;

        this.isAuth = IsAuth;
        this.getToken = GetAuthToken;
    }

    function CreateUser(loginEmail, password) {
        var deferred = $q.defer();
        fbase.createUser({
            email    : loginEmail,
            password : password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
                deferred.reject(error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                deferred.resolve(authData);
            }
        });
        return deferred.promise;
    }

    function RemoveUser(loginEmail, password) {
        var deferred = $q.defer();
        fbase.removeUser({
            email    : loginEmail,
            password : password
        }, function(error, authData) {
            if (error) {
                switch (error.code) {
                    case "INVALID_USER":
                        console.log("The specified user account does not exist.");
                        break;
                    case "INVALID_PASSWORD":
                        console.log("The specified user account password is incorrect.");
                        break;
                    default:
                        console.log("Error removing user:", error);
                }
                deferred.reject(error);
            } else {
                console.log("User account deleted successfully!");
                deferred.resolve();
            }
        });
        return deferred.promise;
    }

    function Login(loginEmail, password) {
        var deferred = $q.defer();
        fbase.authWithPassword({
            email    : loginEmail,
            password : password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
                deferred.reject(error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                identity = authData;
                deferred.resolve();
            }
        });
        return deferred.promise;
    }

    function Logout() {
        identity = null;
        fbase.unauth();
    }

    function IsAuth () {
        return !!identity;
    }

    function GetAuthToken() {
        return identity ? identity.token : null;
    }
})(angular);