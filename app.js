//app.js for Lab14
(function() { // <-- It's an IIFE
var myAppModule = angular.module('myApp', ["ngRoute"]);  // create the module

// TODO Set up routing.
app.config(function($routeProvider) {
	
	// #!/cat --> cat.html views and someController???
	$routeProvider.when("/cat", {
		templateUrl: "views/cat.html"  
		//controller: "catController"
	});

// #!/dog --> dog.html view and someController???
	$routeProvider.when("/dog", {
		templateUrl: "views/dog.html",
		//controller: "dogController"
	});

// Otherwise, display "Please select one of the links above."
	$routeProvider.otherwise({
		template: "Please select a photo from one of the links above."
	});
	
	

});

})();
