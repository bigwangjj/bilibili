


//验证码切换效果
+function(){
	var $yzm=$('#dtyzm');
	var $gif=$yzm.attr('src');
	$('div.yz>a').on('click',function(e){
		e.preventDefault();
		$yzm.attr('src','data/yanzhengma.php?id='+Math.random());

});
}();


//用户登录验证
$(function(){
	"use strict";

	$('input.zc').on('click',function(){
		location.href='register.html';
	});
	//创建两个全集变量保存用户名和密码
	var uname=null;
	var upwd=null;
	var pAlert=$('p.alert');
	//为登录按钮绑定点击事件
	$('#denglu').on('click',function(){
		//获取用户名和密码
		var u=$('#Name').val();
		var p=$('#Pwd').val();
		var v=$('#yzm').val();
		//发送ajax请求
		$.ajax({
			type:'POST',
			url:'data/bilibili.php',
			data:{uname:u,upwd:p,ucode:v},
			success:function(result){
				console.log('获取到服务器返回的响应数据');
				console.log(result);
				if(result.code===200){
					pAlert.html('登录成功，3S后自动跳转到首页');
					pAlert.css('color','green');
					pAlert.css('display','block');
					sessionStorage['Uname']=u;
					//sessionStorage['Uid']=p;
					setTimeout(function(){
						location.href='index.html';
					},3000);
				}
				else if(result.code===401){
					pAlert.html('用户名不存在，或用户名/密码错误！请重新输入！');
					pAlert.css('color','red');
					pAlert.css('display','block');
					$('#Name').val('');
					$('#Pwd').val('');
				}else{
					pAlert.html('验证码有误！请重新输入！');
					pAlert.css('color','red');
					pAlert.css('display','block');
				}
			}
		});
});

});

