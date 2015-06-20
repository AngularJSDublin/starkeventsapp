(function(){

	var app = angular.module("eventsApp.controllers");

	var EventDetailsController = function ($scope, $routeParams, EventService){
		$scope.eventId = $routeParams.eventId;

		//console.log($scope.eventId);

		EventService.getById($scope.eventId).then(
			function(res){
				console.log(res)
				$scope.event = res;

				var googlemapsrcstr = "https://maps.googleapis.com/maps/api/staticmap?center=" + $scope.event.location.lat + "," + $scope.event.location.lng + "&zoom=14&size=300x300&markers=color:red|"+ $scope.event.location.lat + "," + $scope.event.location.lng;
				$scope.event.googlemapsrc = googlemapsrcstr
			}
		); 
		
	};

	
		
	app.controller('EventDetailsController',["$scope", "$routeParams","EventService", EventDetailsController]);



}());