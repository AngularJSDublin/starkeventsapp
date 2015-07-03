'use strict';

angular.module('eventsApp.directives', [])
.directive('listEvent', function() {
console.log("works");

	  return { 
	  	scope : {
	  		event: "=",
	  		eventId: "="
	  	}, 	
	  	restrict: 'E' ,
	    templateUrl: 'app/components/list-events/directive-list-event.html' ,
	    link: function(scope){
	    	console.log("in link list directive" + scope.event);
	    },
		controller: function($scope){
			console.log("in controller list directive" + $scope.event);
			$scope.truncDesc = function() {
				if ($scope.event) {
				if ($scope.event.description) {
					if ($scope.event.description.length > 300) {
						   var truncString = $scope.event.description.substring(0,300);
						   return truncString+ '...';
						}
					else
						return $scope.event.description;
				}
				else
					return "No Description";
			} else { return "No Description"; }
			}
			
	  }
	}
});