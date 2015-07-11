/**
 * Created by Sergey on 20-Jun-15.
 */
(function(angular) {
    angular
        .module('eventsApp.auth')
            .directive('login', function() {
                return {
                    restrict: 'E' ,
                    scope: {
                        role: '@'
                    },
                    templateUrl: 'app/components/auth/login.template.html' ,
                    controller: LoginController,
                    controllerAs: 'vm'
                };
            });

    LoginController.$inject = ['$scope', '$location', 'AdminService'];
    function LoginController($scope, $location, adminServise) {
        var vm = this;
        vm.onSubmit = OnSubmit;

        function OnSubmit () {
            adminServise.login(vm.login, vm.password)
                .then(function () {
                    return $location.path('/admins/list');
                });
        }

    }
})(angular);
