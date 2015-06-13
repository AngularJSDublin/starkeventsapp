'use strict';

angular.module('eventsApp.directives', [])
.directive('listEvent', function() {
console.log("works");

	  return { 
	  	scope : {
	  		event: "="
	  	}, 	
	  	restrict: 'E' ,
	    templateUrl: 'app/components/list-events/directive-list-event.html' ,
	    link: function(scope){
	    	console.log(scope.event);
	    }
	  };
	}
);