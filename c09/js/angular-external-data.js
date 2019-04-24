function TimetableCtrl($scope, $http) {
	$scope.title = 'Session Times';
	
	$http.get('js/items.json')
	.success(function(data){$scope.sessions = data.sessions;})
	.error(function(data){console.log('error')});
}
    