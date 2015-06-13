'use strict';

(function(){

	var app = angular.module('eventsApp', [
		'ngRoute',
		'eventsApp.backend',
		'eventsApp.directives'
	]);

	angular
		.module('eventsApp')
		 .config(router);


    //creating the routes
	function router ($routeProvider, $locationProvider) {
		  // use the HTML5 History API
        $locationProvider.html5Mode(true);

		$routeProvider
		  .when('/add-event', {
		  	templateUrl: 'components/add-event/add-event.html'
		  })
		  .when('/event-list', {
		  	templateUrl: 'components/event-list/event-list.html'
		  })
		  .otherwise({
		    redirectTo: '/'
		  });

		
	}

})();