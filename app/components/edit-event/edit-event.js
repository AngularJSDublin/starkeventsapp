angular.module('eventsApp.editEvent')
.controller("editEventController", ['$scope', 'EventService',
		function($scope, eventService){
			$scope.addVisible = false;

			$scope.event = {
				"name": "EDIT",
				"description": "Description",
				"StartDate": new Date("July 21, 2015 13:50"),
				"EndDate": new Date("July 21, 2015 13:50"),
				"location": {
				  "lat": 53.3168242,
				  "lng": -6.2015825
				},
				"allSpots": 12000,
				"availableSpots": 3423,
				"image_url":"https://static.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg"
 
			};

			

		}]);