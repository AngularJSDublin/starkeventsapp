angular.module('eventsApp')
.controller("addEventController", function($scope){
		$scope.event = {
			title:"Title",
			description:"Description",
			imageUrl:"something",
			longitude:"121",
			latitude:"3423",
			startDate: new Date("July 21, 2015"),
			startTime: new Date("July 21, 2015 13:50"),
			endDate: new Date("July 21, 2015"),
			endTime: new Date("July 21, 2015 13:50"),
		}

		$scope.addEvent = function(){
			var event = $scope.event;
		}
		
	})