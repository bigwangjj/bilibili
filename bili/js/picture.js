

//点击小图切换大图效果
+function(){
	"use strict";
	var bgas=document.querySelectorAll("div.bgImg>a");
	var smas=document.querySelectorAll("div.smImg>a");

	$("div.smImg").on('click','a',function(e){
		e.preventDefault();
		var i=$(this).index();
		$(bgas).eq(i).siblings('a').removeClass('active');
		$(bgas).eq(i).addClass('active');
		$(smas).eq(i).siblings('a').children('p').removeClass('active');
		$(smas).eq(i).children('p').addClass('active');
	});


}();

//点击标签换组图效果
+function(){
	"use strict";
	var as=$('div.imgNav>ul>li>a');
	var divs=$('div.staff');
	as.on('click',function(e){
		e.preventDefault();
		var li=$(this).parent();
		var i=li.index();
		as.eq(i).addClass('active');
		as.eq(i).parents('li').siblings('li').children('a').removeClass('active');
		divs.eq(i).addClass('active');
		divs.eq(i).siblings('div').removeClass('active');
	});
}();