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

    LoginController.$inject = ['$scope', 'auth', 'AdminService'];
    function LoginController($scope, auth, adminServise) {
        var vm = this;
        vm.onSubmit = OnSubmit;

        console.log('authService', auth);

        function OnSubmit () {
            console.log('Submit', vm);
            auth.login(vm.login, vm.password)
                .then(function () {
                    return adminServise.getList();
                }).then(function (list) {
                    console.log('Admins', list);
                });
        }

    }
})(angular);
