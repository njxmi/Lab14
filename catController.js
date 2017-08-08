(function() { // <-- IIFE
// Because we don't pass the second ([]) parameter, angular.module gets the
// module we made earlier rather than creating one.
var app = angular.module("myApp");

// Define a controller named 'catController'
app.controller("catController", function($scope) {
    // Add an image called "cat1.jpg" to the scope.
    $scope.catImages = [{
		src: 'cat1.jpg',
	}];
});

})();
