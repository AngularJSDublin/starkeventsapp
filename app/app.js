'use strict';

(function(){ 
	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsApp.backend',
		'eventsApp.directives',
		'eventsApp.controllers'
	]);

	angular
		.module('eventsApp')
		 .config(router);


	router.$inject = ['$routeProvider', '$locationProvider'];

    //creating the routes
	function router ($routeProvider, $locationProvider) {
		  // use the HTML5 History API
        $locationProvider.html5Mode(true);

		$routeProvider
		  .when('/add-event', {
		  	templateUrl: 'app/components/add-event/add-event.html'
		  })
		  .when('/event-list', {
		  	templateUrl: 'app/components/list-events/list-event.html',
			controller: 'listEventController'
		  })
		  .otherwise({
		    redirectTo: '/'
		  }); 
	}

})();