'use strict';

angular.module('eventsApp.controllers')
	.controller('listEventController',
		function($scope, EventService){
		    console.log("in event list controller");
			EventService.getList().then(
				function(res){
					console.log("in event list controller get list then");
					$scope.events = res;
					
				}
			);  
	  }
);




