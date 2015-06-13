var appController = angular.module('eventsApp',[]);

appController.controller("EventDetailsController", ['$scope', function($scope) {
	$scope.event = {
	 	availableSpots: 1000,
	 	category: "Workshop",
		city : "Dublin",
		date : "13.05.2015",
		descript : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
		image_url : "http://dl.dropboxusercontent.com/u/284252/7914623918_9498110660_o.jpg",
		location_lat : "53.3168242",
		location_long : "-6.2015825",
		eventname : "Most awesome party ever",
		venue : "Club Bongo"
	}
	var googlemapsrcstr = "https://maps.googleapis.com/maps/api/staticmap?center=" + $scope.event.location_lat + "," + $scope.event.location_long + "&zoom=14&size=300x300&markers=color:red|"+ $scope.event.location_lat + "," + $scope.event.location_long;
	$scope.event.googlemapsrc = googlemapsrcstr
}]);

