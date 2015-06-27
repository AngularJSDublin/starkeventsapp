(function(){

	var app = angular.module("eventsApp.controllers");

	var EventDetailsController = function ($scope, $routeParams, EventService){
		$scope.eventId = $routeParams.eventId;
		
		//console.log($scope.eventId);
		
		
		if ($routeParams.eventId){
			EventService.getById($scope.eventId).then(
				function(res){
					//console.log(res)
					$scope.event = res;
					$scope.map = {
						lat: res.location.lat,
						lng: res.location.lng,
						zoom: 14,
						address: 'Trinity College Dublin, Dublin'.split(" ").join("+")
					};
				}
			);
		}else{
			$scope.map = {
			lat: 55,
			lng: 22,
			zoom: 14,
			address: 'Trinity College Dublin, Dublin'.split(" ").join("+")

			};
		}
		
	};
	
	app.controller('EventDetailsController',["$scope", "$routeParams","EventService", EventDetailsController]);



}());