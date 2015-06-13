/**
 * Created by Sergey on 13-Jun-15.
 */
(function (angular) {
    'use strict';

angular.module('eventsApp.listEvents')
	.directive('listEvents',function() {
	  return {  
	    templateUrl: 'app/components/list-events/list-events.html' ,
	    controller: function($scope, EventService){
			EventService.getList().then(
				function(res){
					$scope.events = res;
				}
			); 
	    }
	  };
	});

});





