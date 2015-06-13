angular.module('eventsApp.directives', [])
	.directive('listEvents', function() {
	  return {  
	    templateUrl: 'app/components/list-events/list-events.html' ,
	    controller: function($scope){
			$scope.events =[
			{
				title: 'TITLE 1',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex',
				image:'#'
			},
			{
				title: 'TITLE 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex',
				image:'#'
			},
			{
				title: 'TITLE 3',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ex',
				image:'#'
			}
			]; 
	    }
	  };
	});


