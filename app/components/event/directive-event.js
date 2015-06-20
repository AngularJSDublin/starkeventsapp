'use strict';

angular.module('eventsApp.directives')
.directive('eventDirective', function() {
console.log("works");

	  return { 	  	
	  	scope: {
	  		event: "=",
	  		type: "@"
	  	},
	    templateUrl: 'app/components/event/directive-event.html',
	    controller: function($scope){
	    	if($scope.type == "add"){
	    		$scope.addVisible =true;
	    	} else{
	    		$scope.addVisible =false;
	    	}
	    }
	  };
	}
);