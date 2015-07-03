(function(){
	'use strict';

	angular
		.module('eventsApp.directives')
		.directive('makeMap', makeMap);

//more flexible map directive:

	function makeMap () {
		 
		var directive = {
			restrict: 'EA',
			
			templateUrl: 'app/components/map/map.html',
			link: link,
			controller: mapController,
			/*scope: {
				map: '='
			}	*/
		};
		return directive;

		function link (scope, element, attrs){
			console.log("in event details directive link");
			scope.zoomIn = function(){
				scope.map.zoom++;
			};

			scope.zoomOut = function(){
				scope.map.zoom--;
			};
		}
	}

		mapController.$inject = ['$scope'];

		function mapController($scope) {
				console.log("in event details map directive controller");
				console.log("showing scope map" + $scope.map);
				$scope.returnLocationOrNot = function(){
					if($scope.map.address)
						return true;
					else
						return false;	
				};
		}		
	}

)();