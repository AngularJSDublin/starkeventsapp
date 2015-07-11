(function(){ 
	'use strict';

	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsApp.backend',
		'eventsApp.directives',
		'eventsApp.controllers',
		'eventsApp.addEvent',
		'eventsApp.editEvent',
		'eventsApp.auth'
	]);

	angular
		.module('eventsApp')
		 .config(router);
	
	router.$inject = ['$routeProvider'];

    //creating the routes
	function router ($routeProvider) {
		  // use the HTML5 History API
       // $locationProvider.html5Mode(true);

		$routeProvider
		  .when('/login', {
		  	templateUrl: 'app/components/login/login.template.html'
		  })
		  .when( '/admin/list', {
		    templateUrl: 'app/components/admin-list/admin-list.template.html',
			controller: 'listAdminController',
			controllerAs: 'vm',
			resolve: {authenticate: authenticate}
		  })
		  .when('/add-event', {
		  	templateUrl: 'app/components/add-event/add-event.html',
		  	controller: 'addEventController'
		  })
		  .when('/edit-event/:eventId', {
		  	templateUrl: 'app/components/edit-event/edit-event.html',
		  	controller: 'editEventController'
 
		  })
		  .when('/event-list', {
		  	templateUrl: 'app/components/list-events/list-event.html',
			controller: 'listEventController'
		  })
		  .when("/event/:eventId", {
			templateUrl: "app/components/eventdetails/eventdetails.html",
			controller: "EventDetailsController"
		})
		  .otherwise({redirectTo: '/'});

		authenticate.$inject = ['$q', '$location', '$timeout', 'auth'];
		function authenticate($q, $location, $timeout, auth) {
			var deferred = $q.defer();
			if(auth.isAuth()) {
				deferred.resolve(auth.getUid());
			} else {
				console.log('reject');
				$timeout(function() {
					console.log('redirect to /login');
					$location.path('/login');
				});
				deferred.reject();
			}
			return deferred.promise;
		}
	}

})();
