/**
 * Created by Sergey on 27-Jun-15.
 */


(function(angular) {
    angular
        .module('eventsApp.auth')
        .service('FirebaseService', FireBaseService);

    function FireBaseService() {
        var firebase = new Firebase("https://starkeventsdb.firebaseio.com");

        this.getInstance = function (name, ref) {
            return firebase;
        };
    }
})(angular);