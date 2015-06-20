(function(){

	var app = angular.module("eventsApp.controllers");

	var EventDetailsController = function ($scope, $routeParams, EventService){
		$scope.eventId = $routeParams.eventId;
		
		//console.log($scope.eventId);

		EventService.getById($scope.eventId).then(
			function(res){
				console.log(res)
				$scope.event = res;
				$scope.zoom = 14;

				//var googlemapsrcstr =				$scope.event.googlemapsrc = googlemapsrcstr

			}
		);

		$scope.zoomIn = function(){
			$scope.zoom++;
		};

		$scope.zoomOut = function(){
			$scope.zoom--;
		};




		
	};


		
	app.controller('EventDetailsController',["$scope", "$routeParams","EventService", EventDetailsController]);



}());