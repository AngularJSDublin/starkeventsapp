(function(){

	var app = angular.module("eventsApp.controllers");

	var EventDetailsController = function ($scope, $routeParams,$q, EventService){
		$scope.eventId = $routeParams.eventId;
		
		console.log("in event details controller");
		
		
		if ($routeParams.eventId){
			
			console.log("in event details controller:: get by id before call");
			EventService.getById($scope.eventId).then(
				function(res){
					//console.log(res)
					console.log("in event details controller:: get by id");
					$scope.event = res;
					$scope.map = {
						lat: res.location.lat,
						lng: res.location.lng,
						zoom: 14,
						//address: 'Trinity College Dublin, Dublin'.split(" ").join("+")
						address: res.venue + ',' + res.city
					};
				}
			)
			
		}else{
			$scope.map = {
			lat: 55,
			lng: 22,
			zoom: 14,
			address: 'Trinity College Dublin, Dublin'.split(" ").join("+")

			};
		}
		
	};
	
	app.controller('EventDetailsController',["$scope", "$routeParams","$q","EventService", EventDetailsController]);



}());