console.log('angular app.js is connected');

const app = angular.module('learnSomething', ['ngYoutubeEmbed']);

app.controller('mainController', ['$http', function($http){
	this.lessons = [];
	this.videos = [
{
	"url": "https://www.youtube.com/watch?v=T93WOuwUZ3s"
},
{
	"url": "https://www.youtube.com/watch?v=rfsWnO980H8"
}
	];


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
			console.log(response.data[0].name);
		}).catch(err => console.log(err));


}]);

// app.filter('trusted', ['$sce', function ($sce) {
//     return function(url) {
//             var video_id = url.split('v=')[1].split('&')[0];
//         return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
//     };
// }]);