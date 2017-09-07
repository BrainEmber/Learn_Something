console.log('angular app.js is connected');

const app = angular.module('learnSomething', []);

app.controller('mainController', ['$http', function($http){
	this.lessons = [];


	$http({
		method: 'GET',
		url: 'http://localhost:3000/lessons'
	}).then
		(response => {
			this.name = response.data[0].name;
			this.author = response.data[0].author;
			this.date = response.data[0].date;
			this.language = response.data[0].language;
			this.difficulty = response.data[0].difficulty;
			this.url = response.data[0].url;
			console.log(response.data[0].name);
			this.lessons = response.data;
		}).catch(err => console.log(err));
}]);