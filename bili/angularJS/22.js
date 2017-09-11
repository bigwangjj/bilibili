	var app = angular.module('myApp', ['ng']);

	app.factory('$heart',['$interval',function($interval){
		return {
			start:function(){
				promise=$interval(function(){
					console.log('跳了一下')
				},500);
			},
			end:function(){
				$interval.cancel(promise);
				console.log('死了');
				}
			}
	}]);


//	app.controller('myCtrl',['$scope','$heart',function($scope,$heart){
//		$scope.btnStart=function(){
//			$heart.start();
//		};
//		$scope.btnEnd=function(){
//			$heart.end();
//		}
//	}]);
//
	app.controller('myCtrl',['$scope','$heart',function($scope,$heart){

		$scope.btnStart=function(){
			$heart.start();
	};
		$scope.btnEnd=function(){
			$heart.end();
		}
	}]);


	//app.controller('myCtrl',['$scope','$injector',function($scope,$injector){
	//	//get方法可以得到名称为$heart的武服务实例
	//	customService=$injector.get('$heart');
	//
	//
	//}]);
