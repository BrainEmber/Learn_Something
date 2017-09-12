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
	this.text3 = 'Show lessons';
	this.text4 = 'Hide lessons';
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
	this.URL = 'https://learn-something-new-api.herokuapp.com'


this.getLessons = function(){
	$http({
		method: 'GET',
		url: this.URL + '/lessons'
	}).then
		(response => {
			this.lessons = response.data;
		}).catch(err => console.log(err));
};

this.getPlaylists = function(){
	$http({
		method: 'GET',
		url: this.URL + '/playlists'
	}).then
		(response => {
			this.playlists = response.data;
		}).catch(err => console.log(err));
	};

	this.addToPlaylist = function(){
		$http({
			method: 'POST',
			url: this.URL + '/ledgers',
			dataType: 'json',
			data : {
				lesson_id: this.lesson_id,
				playlist_id: this.playlist_id
			}
		}).then
		(response => {
			this.getPlaylists();
			console.log(response);
			this.getPlaylists();
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
			url: this.URL + '/playlists',
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
			this.getPlaylists();
		}).catch(err => console.log(err));
	};



	this.removePlaylist = function(id){
		$http({
			method: 'DELETE',
			url: this.URL + '/playlists/' + id
		}).then
		(response => {
			console.log(response);
			this.getPlaylists();
		}).catch(err => console.log(err));
	};

		this.removeLedger= function(id){
		$http({
			method: 'DELETE',
			url: this.URL + '/ledgers/' + id
		}).then
		(response => {
			console.log(response);
		}).catch(err => console.log(err));
	};


	this.updatePlaylist = function(id){
		$http({
			method: 'PATCH',
			url: this.URL + '/playlists/' + id,
			data: {
				name : this.updatedName,
				difficulty : this.updatedDifficulty,
				number : this.updatedNumber,
				language : this.updatedLanguage,
			}
		}).then
		(response => {
			console.log(response);
			this.getPlaylists();
		}).catch(err => console.log(err));
	};

this.getLessons();
this.getPlaylists();
}]);
