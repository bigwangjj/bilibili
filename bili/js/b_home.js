//动态生成页面内容
+function(){
	var app=angular.module('home',['ng','ngRoute']);
	app.controller('homeCtrl',['$scope','$http',function($scope,$http){


		$http
			.get('data/lb_left_content.php?start=0')
			.success(function(data){
				$scope.lb_left=data;
			});

		$http
			.get('data/lb_right_content.php?start=0')
			.success(function(data){
				$scope.lb_right_01=data;
			});

		$http
			.get('data/lb_right_content.php?start=8')
			.success(function(data){
				$scope.lb_right_02=data;
			});

		$http
			.get('data/lb_right_content.php?start=16')
			.success(function(data){
				$scope.lb_right_03=data;
			});

		$http
			.get('data/cartoon_content.php?start=0')
			.success(function(data){
				$scope.cartoon_01=data;
			});



		$http
			.get('data/fj_content.php')
			.success(function(data){
				$scope.fj=data;
			});


		//按星期查找番剧
		$('div.container>div.main-container>.left>.head>.date>a').on('click',function(){
			var name=this.name;
			console.log(name);
			$http
				.get('data/fj_weeks_content.php?weeks='+name)
				.success(function(data){
					$scope.fj=data;
					console.log(data);
				});

		});
	}]);
}();




//主导航左侧图片切换效果（轮播）
+function(){
	var $lis=$('.con-left>ul>li');
	var $as=$('.con-left>.pic');
	var $ols=$('.con-left>ol');
	var cur=0;
	var next=1;
	var interval=3000;
	$lis.eq(0).addClass('active');
	$as.children('a').eq(0).addClass('active');
	$ols.children('li').eq(0).addClass('active');

	function huantu(){
		$lis.eq(cur).addClass('active');
		$lis.eq(cur).siblings('li').removeClass('active');
		$as.children('a').removeClass('active');
		$as.children('a').eq(cur).addClass('active');
		$ols.children('li').removeClass('active');
		$ols.children('li').eq(cur).addClass('active');
		cur=next;
		next++;
		if(next>=$lis.length){
			next = 0;
		}
	}

	$lis.on('click',function(){
		var i=$(this).index();
		cur=i;
		huantu();
	});

	var timer=setInterval(huantu,interval);
	$('.con-left>ul>li,.con-left>.pic>a,.con-left>ol>li').on('mouseover',function(){
		clearInterval(timer);
		timer=null;
	});
	$('.con-left>ul>li,.con-left>.pic>a,.con-left>ol>li').on('mouseout',function(){
		timer=setInterval(huantu, interval);
	});
}();

//主导航右侧图片效果
(function(){
	var as=$('div.container>div.top-container>div.con-right>ul');

	as.on('mouseover','li>a',function(){
		$(this).find('.mask').addClass('active');
		$(this).find('p').show();
		$(this).find('i').show();
		$(this).find('s').show();
		$(this).find('span').hide();

	});

	as.on('mouseout','li>a',function(){
		$(this).find('.mask').removeClass('active');
		$(this).find('p').hide();
		$(this).find('i').hide();
		$(this).find('s').hide();
		$(this).find('span').show();
	});

	var uls=$('div.container>div.top-container>div.con-right>ul');
	var lb=$('div.container>div.top-container>div.con-right>div.lb');
	var rb=$('div.container>div.top-container>div.con-right>div.rb');
	var a_ul=$('div.container>div.top-container>div.con-right>ul.active');

	lb.on('click',function(){
		var a_ul=$('div.container>div.top-container>div.con-right>ul.active');
		var i=a_ul.index();
		uls.eq(i).removeClass('active');
		if(i!=0){
			uls.eq(i-1).addClass('active');
		}else{
			uls.eq(uls.length-1).addClass('active');
		}
	});

	rb.on('click',function(){
		var a_ul=$('div.container>div.top-container>div.con-right>ul.active');
		var i=a_ul.index();
		uls.eq(i).removeClass('active');
		if(i!=uls.length-1){
			uls.eq(i+1).addClass('active');
		}else{
			uls.eq(0).addClass('active');
		}
	});
})();

//小蓝箭头和转转刷新
(function(){
	//小蓝箭头函数
		function lan(e){
			e.preventDefault();
			$(this).addClass('active');
			$(this).siblings('a').removeClass('active');
	}

	$('div.container>div.main-container>.left>.head>.ul>a').on('click',lan);

	$('div.container>div.main-container>.right>.head>a').on('click',lan);

	$('div.container>div.main-container>.left>.head>.date>a').on('click',lan);




	$('div.container>div.main-container>.left>.head>.refresh').on('mouseover',function(){
		$(this).addClass('active');
		$(this).children('span').addClass('active');
	});
	$('div.container>div.main-container>.left>.head>.refresh').on('mouseout',function(){
		$(this).removeClass('active');
		$(this).children('span').removeClass('active');
	});
})();

//主体构造部分的效果（左边）
(function(){

	//鼠标移入移出单个li时的效果

	var lis=$('div.container>div.main-container>.left>.body>ul');


	lis.on('mouseover','li',function(){
		$(this).find('a.pic>.medal').hide();
		$(this).find('a.pic>span').show();
		$(this).find('a.pic>.mask').show();
		$(this).find('a.text>.play').removeClass('active');
		$(this).find('a.text>p').addClass('active');
		//timer=setInterval(move,100);
	});
	lis.on('mouseout','li',function(){
		$(this).find('a.pic>.medal').show();
		$(this).find('a.pic>span').hide();
		$(this).find('a.pic>.mask').hide();
		$(this).find('a.text>.play').addClass('active');
		$(this).find('a.text>p').removeClass('active');
		//clearInterval(timer);
		//timer=null;
	});

})();

//右边手风琴效果
(function(){
	$('div.container>div.main-container>.right>.body>.accordion>.item>p').on('click',function(){
		$(this).parent('div.item').addClass('active');
		$(this).parent('div.item').siblings('div.item').removeClass('active');
	});
})();





