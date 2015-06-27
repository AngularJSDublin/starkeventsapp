angular.module('eventsApp.editEvent')
.controller("editEventController", ['$scope', '$routeParams','EventService',
		function($scope,$routeParams,eventService){

			// parameter used to hide/unhide buttons 
			$scope.addVisible = false;
			// take a eventId 
			$scope.eventId = $routeParams.eventId;

			eventService.getById($scope.eventId).then(
				function(res){
					console.log((res.StartDate instanceof Date));
					console.log(typeof res.StartDate);
					console.log(res.StartDate);
					$scope.event.StartDate = new Date(res.StartDate);
					$scope.event.EndDate = new Date(res.EndDate);
				}
			);

			$scope.deleteEvent = function(){

				console.log('Click Delete');
			};

			$scope.cancelEvent = function(){

				console.log('Click Cancel');
			};

			$scope.saveEvent = function(){

				console.log('Click Save');
			};

		}]);