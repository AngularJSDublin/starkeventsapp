angular.module('eventsApp.editEvent')
.controller("editEventController", ['$scope', '$routeParams','EventService','$location','CategoryService',
		function($scope,$routeParams,eventService,$location,categoryService){

			$scope.showSuccessAlert = false;

			// take a eventId 
			$scope.eventId = $routeParams.eventId;

			$scope.categories = [];
			categoryService.getList($scope.categories).then(function(result){
				if(result != null) {
					$scope.categories = result;
				}
			})

			eventService.getById($scope.eventId).then(
				function(res){
					if(res != null) {
						$scope.event = res;
						$scope.event.date = new Date(res.date);
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
						$location.url('/event-list');
						$scope.showSuccessAlert = true;
						$scope.textAlert = "Event deleted";
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