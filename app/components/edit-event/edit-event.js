angular.module('eventsApp.editEvent')
.controller("editEventController", ['$scope', '$routeParams','EventService','$location',
		function($scope,$routeParams,eventService,$location){

			$scope.showSuccessAlert = false;

			// take a eventId 
			$scope.eventId = $routeParams.eventId;

			eventService.getById($scope.eventId).then(
				function(res){
					$scope.event = res;
					$scope.event.StartDate = new Date(res.StartDate);
					$scope.event.EndDate = new Date(res.EndDate);
				}
			);

			$scope.deleteEvent = function(){
				eventService.deleteById($scope.eventId).then(
					function(res){
						console.log(res);
					}
				);
			};

			$scope.cancelEvent = function(){
				$location.url('/event-list');
			};

			$scope.saveEvent = function(){
				eventService.edit($scope.eventId,$scope.event).then(
					function(res){
						console.log(res);
						$scope.showSuccessAlert = true;
						$scope.successTextAlert = "Edit complete!";
					}
				);
			};

		}]);