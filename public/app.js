console.log('angular app.js is connected');

const app = angular.module('learnSomething', ['ngYoutubeEmbed']);

app.controller('mainController', ['$http', function($http){
	this.lessons = [];
	this.playlists = [];
	this.ledgers = [];
	this.formData = {};
	const controller = this;


	$http({
		method: 'GET',
		url: 'http://localhost:3000/lessons'
	}).then
		(response => {
			// this.name = response.data[0].name;
			// this.author = response.data[0].author;
			// this.date = response.data[0].date;
			// this.language = response.data[0].language;
			// this.difficulty = response.data[0].difficulty;
			// this.url = response.data[0].url;
			this.lessons = response.data;
			
		}).catch(err => console.log(err));

	this.addToPlaylist = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/ledgers'
		}).then
		(response => {

		}).catch(err => console.log(err));
	};

// 		this.addToPlaylist = function($resource){
// 			var lessonA = $resource('/lessons/:id.json');
// 			console.log('Add button clicked');
// 			console.log(lessonA);
// };

	this.createPlaylist = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/playlists',
			dataType: 'json',
			data: {
				name : this.name,
				difficulty : this.difficulty,
				number : this.number,
				languages : this.languages,
			}

			
		}).then
		(response => {
			console.log(response);
		}).catch(err => console.log(err));
	};

}]);

// app.filter('trusted', ['$sce', function ($sce) {
//     return function(url) {
//             var video_id = url.split('v=')[1].split('&')[0];
//         return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
//     };
// }]);