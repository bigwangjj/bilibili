if(!window.jQuery){
	throw new Error('jd_index.js依赖于jQuery！');
}

jQuery.fn.rotation = function(){
	var interval=3000,//每隔三秒轮换一次
			duration=500,//每次轮换动画的持续时间
			aimgList=this.children('a'),//所有的包含img的a组成的类数组对象
			liList=this.find('li'),//所有装着数字的li组成的类数组对象
			now= 0,//当前显示的广告的序号
			next=1;//下次即将要显示的广告的序号

//定义一个广告轮播函数carousel
	function carousel(){
		//为序号为next的带数字的li添加.active,并让它的带active类的兄弟li清除.active。
		liList.eq(next).addClass('active');
		liList.eq(next).siblings('.active').removeClass('active');

		//让当前显示的广告清除类.active
		aimgList.eq(now).removeClass('active');

		//让即将要显示的下一张广告添加类.active
		aimgList.eq(next).addClass('active');

		//修改now和next的值：第now张移走之后next张移入
		now=next;
		next++;
		if(next>=aimgList.length){next=0;}
	}


	//开启一个定时器，每隔interval的时长启动一次轮换
	setInterval(function(){
		carousel();
	},interval);

	//为每个带数字的li添加时间监听函数，单击后直接显示指定的广告
	liList.on('click',function(){
		var i=liList.index(this);//这是获得当前点击的li在其所在的类数组中的对应下标数（就是序号），装载到变量i中。
		next=i;//将用户点击的代数字的li的下标数赋值到变量next当中，这就能让计算机知道下次即将要显示的广告的序号了！
		carousel();//点击之后立即开始执行广告轮播。
	});



};