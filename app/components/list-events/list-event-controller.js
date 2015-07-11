'use strict';

angular.module('eventsApp.controllers')
	.controller('listEventController',
		function($scope, EventService){
			EventService.getList().then(
				function(res){
					$scope.events = res;
				}
			);
	  }
);




