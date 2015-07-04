'use strict';

angular.module('eventsApp.directives')
	.directive('eventDirective',function() {
		console.log("works");

		return {
			restrict: "EA",
			scope: {
				event: "=",
				categories: "=",
				showSuccessAlert: "=",
				showErrorAlert: "=",
				textAlert: "=",
				type: "@",
				add: "&",
				delete: "&",
				cancel: "&",
				save: "&"
			},
			templateUrl: 'app/components/event/directive-event.html',
			controller: function($scope){
				console.log($scope.categories);

				$scope.textAlert = "Form not valid";

				$scope.addEvent = function(){
					$scope.add();
				}

				$scope.deleteEvent = function(){
					$scope.delete();
				}

				$scope.cancelEvent = function(){
					$scope.cancel();
				}

				$scope.saveEvent = function(){
					$scope.save();
				}

				if($scope.type == "add"){
					$scope.addVisible =true;
				} else{
					$scope.addVisible =false;
				}

				// switch flag
				$scope.switchBool = function (value) {
					$scope[value] = !$scope[value];
				};
			}
		};
	}
);