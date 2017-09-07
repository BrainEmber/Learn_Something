console.log('angular app.js is connected');

const app = angular.module('learnSomething', []);

app.controller('mainController', ['$http', function($http){
	this.lessons = [];

	$http({
		method: 'GET',
		url: 'http://localhost:3000/lessons'
	}).then
		(response => {
			console.log(response.data);
			this.lessons = response.data;
		}).catch(err => console.log(err));
}]);