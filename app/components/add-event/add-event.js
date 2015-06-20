angular.module('eventsApp.addEvent')
.controller("addEventController", ['$scope', 'EventService',
		function($scope, eventService){
			$scope.event = {
				"name": "Title",
				"description": "Description",
				"date": new Date("July 21, 2015 13:50"),
				"location": {
				  "lat": 53.3168242,
				  "lng": -6.2015825
				},
				"allSpots": 12000,
				"availableSpots": 3423,
				"image_url":"https://static.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg"

			};

			$scope.addEvent = function(){
				eventService.add($scope.event).then(function(result){
					console.log('Event added', result);
				});
			}

		}]);