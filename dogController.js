(function() { // <-- IIFE
// Because we don't pass the second ([]) parameter, angular.module gets the
// module we made earlier rather than creating one.
var app = angular.module("myApp");

// Define a controller named 'dogController'
app.controller("dogController", function($scope) {
    // Add an image called "dog1.jpg" to the scope.
    $scope.dogImages = [{
		src: 'dog1.jpg',
	}];
});

})();
