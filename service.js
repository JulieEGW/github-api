var app = angular.module('github-api');

app.service('githubService', function($http, $q){

  var id = "myCLientID";
  var sec = "mySecretKeyThing";
  var param = "?client_id=3257a93c96b37cf80ae9" + id + "&client_secret=45becb1dda65f5af435cb81048b8791bd02440f9" + sec;

  	this.getUser = function(username){
		return $http({
			method: 'GET',
			url: 'https://api.github.com/users/' + username + param
		});
};

});