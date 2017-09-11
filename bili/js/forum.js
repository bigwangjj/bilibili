



//滑动到页面指定位置时，显示出的广告
+function(){
	var top=$('div.banner').offset().top;
	//console.log(top);
	$(window).on('scroll',function(){
			var move=$(this).scrollTop();
		//console.log(move);
		if(move>=910){
			$('div.bigBanner').show();
		}else{
			$('div.bigBanner').hide();
		}
	});

}();


//动态生成评论内容,搜索框模糊搜索
+function(){
	var app=angular.module('forum',['ng','ngRoute']);

	app.controller('forumCtrl',['$scope','$http',function($scope,$http){

		//定义一个控制提示没有更多信息的变量
		$scope.hasMore=true;
		$http
		.get('data/getbyfUser.php?start=0')
		.success(function(data){
				//console.log(data);
				$scope.user=data;
			});

		$scope.$watch('kw',function(){
			console.log($scope.kw);
			if($scope.kw){
				$http
					.get('data/getbyfContentkw.php?kw='+$scope.kw)
				.success(function(data){
						console.log(data);
						if(data.length>0){
							$scope.user=data;
						}
					})
			}
		});

		//加载更多...
		$scope.loadMore=function(){
			$http
			.get('data/getbyfUser.php?start='+$scope.user.length)
			.success(function(data){
					if(data.length<4){
						//没有更多数据时，将按钮隐藏，显示一个提示信息
						$scope.hasMore=false;
					}
					//将找到的新数据用concat拼接进原来的数据中去
					$scope.user=$scope.user.concat(data);
				})
		}

	}]);
}();


//添加一条新的评论
+function(){
	$('#fb').on('click',function(){
		var content=$('#replyContent').val();
		var uName=$('li.username>a').html();
		console.log(content);
		console.log(uName);
		//console.log(contentTime);

		if(uName==sessionStorage['Uname']){
			if(content!==''){
				$.ajax({
					method:'POST',
					url:'data/addContent.php',
					data:{uName:uName,content:content},
					success:function(data){
						console.log(data);
						alert('发表成功！');
						location.href='forum.html';
					}
				});
			}else{
				alert('内容不能为空！');
			}

		}else{
			alert('请先登录，再发表留言！');
		}


	});
}();

