(function(){ 
	'use strict';

	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsApp.backend',
		'eventsApp.directives',
		'eventsApp.controllers',
		'eventsApp.addEvent'
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
		  .when('/add-event', {
		  	templateUrl: 'app/components/add-event/add-event.html',
		  	controller: 'addEventController'
 
		  })
		  .when('/event-list', {
		  	templateUrl: 'app/components/list-events/list-event.html',
			controller: 'listEventController'
		  })
		  .otherwise({redirectTo: '/'}); 
	}

})();
