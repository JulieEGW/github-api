var app = angular.module('github-api');

app.controller('gitHubController', function($scope, githubService){

	$scope.getUserData = function(){
		githubService.getUser($scope.searchText).then(
			function(res){
				$scope.user = res.data;
				console.log($scope.user);
			}, function(err){
				console.log(err);
			}
			);
	};
});