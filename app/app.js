'use strict';

(function(){
	var app = angular.module('eventsApp', ['ngRoute']);

	angular
		.module('eventsApp')
		 .config(router);


	//controller as syntax
	app.controller('SampleController', function(){
		this.welcome = 'Welcome to the first AngularJS workshop.'
	});

	app.controller("SecondController", function($scope){
		$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	})

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

})()