var app = angular.module('myApp', ['ng']);
//创建了一个$Test服务
app.service('$Test',function(){
	this.test=function(){
		console.log('it is a test');
	}
});

//推断式依赖注入
//app.controller('myCtrl', function ($scope,$Test) {
//		$Test.test();
//});


//标记式依赖注入
var CtrlFunc=function($scope,$Test){
	$Test.test();
};

//对依赖做标记
CtrlFunc.$inject=['$scope','$Test'];//此处的$scope,$Test的谁许要和上面标记式注入的顺序保持一致
app.controller('myCtrl',CtrlFunc);