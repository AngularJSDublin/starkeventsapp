angular.module('eventsApp.addEvent')
.controller("addEventController", ['$scope', 'EventService','CategoryService',
		function($scope, eventService, categoryService){

			$scope.showSuccessAlert = false;
			$scope.showErrorAlert 	= false;

			$scope.categories = [];

			categoryService.getList($scope.categories).then(function(result){
				if(result != null) {
					$scope.categories = result;
				}
			})

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