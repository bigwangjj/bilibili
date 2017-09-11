var app = angular.module('myApp', ['ng']);

app.factory('$student',function(){
	return {
		checkScore:function(){
			return 80;
		}
	}
});


//推断式以来注入
//app.controller('myCtrl', function ($scope,$student) {
//	$scope.handleClick=function(){
//		$student.checkScore();
//	}
//});

//行内式依赖注入
app.controller('myCtrl',["$scope","$student",function($scope,$student){
	$scope.handleClick=function() {
		console.log($student.checkScore());
	};
}]);