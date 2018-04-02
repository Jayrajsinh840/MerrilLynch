var app = angular.module('Groceries', []);

app.controller('GroceriesController', function($scope,$http) {
	$scope.groceryList = [];
	$http.get('groceries.json').then(function(response){
		$scope.groceryList = response.data;
		console.log("list "+$scope.groceryList);
	});
});