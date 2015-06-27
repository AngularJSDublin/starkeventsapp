angular.module('eventsApp.addEvent')
.controller("addEventController", ['$scope', 'EventService',
		function($scope, eventService){

			$scope.showSuccessAlert = false;
			$scope.showErrorAlert 	= false;

			$scope.addEvent = function(){

				eventService.add($scope.event).then(function(result){
					$scope.textAlert = "Event added!";
					console.log($scope.event);
					console.log('Event added', result);
					$scope.showSuccessAlert = true;
				}).catch(function(result){
					$scope.showErrorAlert = true;
					$scope.textAlert = "Error";
				});
			};

		}]);