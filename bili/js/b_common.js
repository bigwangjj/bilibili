$('header').load('b_header.html',function(){

	$('.logo').on('click',function(e){
		e.preventDefault();
		location.href='index.html';
	});
//上方登录的判断
	+function(){
		"use strict";
		var dl=$('li.dl');
		var person=$('.person');
		var username=$('.username');
		if(!sessionStorage['Uname']){
			dl.find('a').html('登录');
			dl.show();
			person.hide();
			username.hide();
		}else{
			person.show();
			username.show();
			username.find('a').html(sessionStorage['Uname']);
			dl.hide();

		}

		username.find('a').on('click',function(e){
			e.preventDefault();
			if(confirm('您确定要注销当前用户吗？')==true){
				//sessionStorage['Uname']='';
				sessionStorage.clear();
				username.find('a').html('');
				username.hide();
				person.hide();
				dl.find('a').html('登录');
				dl.show();
			}
		});
	}();

});


$('footer').load('b_footer.html',function(){

	//尾部弹出二维码
	(function(){
		$('.QR>div.phone,.QR>p').on('mouseover',function(){
			$('.parent').show();
		});
		$('.QR>div.phone,.QR>p').on('mouseout',function(){
			$('.parent').hide();
		});
	})();
});


