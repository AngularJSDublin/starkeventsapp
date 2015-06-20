/**
 * Created by Sergey on 20-Jun-15.
 */
(function() {
    angular
        .module('eventsApp.auth')
            .directive('login', function() {
                return {
                    restrict: 'E' ,
                    templateUrl: 'app/components/auth/login.template.html' ,
                    controller: LoginController,
                    controllerAs: 'vm'
                };
            });

    LoginController.$inject = ['$scope'];
    function LoginController($scope) {
        var vm = this;
        vm.onSubmit = OnSubmit;

        function OnSubmit () {
            console.log('Submit', vm);
        }

    }
})();
