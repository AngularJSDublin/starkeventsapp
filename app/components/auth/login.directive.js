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

    LoginController.$inject = ['$scope', 'authService'];
    function LoginController($scope, authService) {
        var vm = this;
        vm.onSubmit = OnSubmit;

        console.log('authService', authService);

        function OnSubmit () {
            console.log('Submit', vm);
        }

    }
})();
