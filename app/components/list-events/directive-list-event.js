angular.module('eventsApp.directives', [])
	.directive('listEvent', function($scope) {
	  return { 
	  	scope : {
	  		event: "="
	  	}, 	
	  	restrict: 'E' ,
	    templateUrl: 'app/components/list-events/directive-list-event.html'  
	  };
	}
);