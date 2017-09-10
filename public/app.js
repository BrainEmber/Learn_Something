console.log('angular app.js is connected');

const app = angular.module('learnSomething', ['ngYoutubeEmbed']);

app.controller('mainController', ['$http', function($http){
	this.lessons = [];
	this.playlists = [];
	this.ledgers = [];
	this.formData = {};
	const controller = this;
	this.text1 = 'Show video';
	this.text2 = 'Hide video';
	this.playlistId = 0;
	this.lessonDifficulties = [
	{name: 'Beginner', difficulty: 'Beginner'},
	{name: 'Intermediate', difficulty: 'Intermediate'},
	{name: 'Advanced', difficulty: 'Advanced'}
	];
	this.lessonLanguages = [
	{name: 'Ruby', language: 'Ruby'},
	{name: 'Python', language: 'Python'},
	{name: 'Javascript', language: 'Javascript'}
	];
	this.playlistName = [
	{namez: 'sdf', name: 'sdf'},
	{namez:'Aweomse Playlist 2', name:'Aweomse Playlist 2'}];



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

	$http({
		method: 'GET',
		url: 'http://localhost:3000/playlists'
	}).then
		(response => {
			// this.name = response.data[0].name;
			// this.author = response.data[0].author;
			// this.date = response.data[0].date;
			// this.language = response.data[0].language;
			// this.difficulty = response.data[0].difficulty;
			// this.url = response.data[0].url;
			this.playlists = response.data;

		}).catch(err => console.log(err));

	this.addToPlaylist = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/ledgers',
			dataType: 'json',
			data : {
				lesson_id: this.lesson_id,
				playlist_id: this.playlist_id
			}
		}).then
		(response => {
			console.log(response);
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



	this.removePlaylist = function(id){
		$http({
			method: 'DELETE',
			url: 'http://localhost:3000/playlists/' + id
		}).then
		(response => {
			console.log(response);
		}).catch(err => console.log(err));
	};

		this.removeLedger= function(id){
		$http({
			method: 'DELETE',
			url: 'http://localhost:3000/ledgers/' + id
		}).then
		(response => {
			console.log(response);
		}).catch(err => console.log(err));
	};


	this.updatePlaylist = function(id){
		$http({
			method: 'PATCH',
			url: 'http://localhost:3000/playlists/' + id,
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
