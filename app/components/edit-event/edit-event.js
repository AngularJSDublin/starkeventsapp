angular.module('eventsApp.editEvent')
.controller("editEventController", ['$scope', '$routeParams','EventService','$location',
		function($scope,$routeParams,eventService,$location){

			$scope.showSuccessAlert = false;

			// take a eventId 
			$scope.eventId = $routeParams.eventId;

			eventService.getById($scope.eventId).then(
				function(res){
					if(res != null) {
						$scope.event = res;
						$scope.event.StartDate = new Date(res.StartDate);
						$scope.event.EndDate = new Date(res.EndDate);
					}else{
						$scope.showErrorAlert = true;
						$scope.textAlert = "Event doesn't exist";
					}
				}
			).catch(
				function(res){
					$scope.showErrorAlert = true;
					$scope.textAlert = "Event doesn't exist";
				}
			);

			$scope.deleteEvent = function(){
				eventService.deleteById($scope.eventId).then(
					function(result){
						console.log(result);
						$scope.showSuccessAlert = true;
						$scope.textAlert = "Event deleted";
						$scope.event = {};
					}
				).catch(
					function(result){
						$scope.showErrorAlert = true;
						$scope.textAlert = "Error";
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
						$scope.textAlert = "Edit completed";
					}
				).catch(
					function(result){
						$scope.showErrorAlert = true;
						$scope.textAlert = "Error";
					}
				);
			};

		}]);