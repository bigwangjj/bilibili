var regx=/^\w{4,18}$/;
//var regx=/^\w{4,18}$/;
var regy=/^\d{11}$/;


//注册管理
+function(){
	$('#eye').on('click',function(){
		if(this.className=='glyphicon glyphicon-eye-open'){
			upwd.setAttribute('type','text');
			this.className='glyphicon glyphicon-eye-close';
		}
		else if(this.className=='glyphicon glyphicon-eye-close'){
			upwd.setAttribute('type','password');
			this.className='glyphicon glyphicon-eye-open';
		}
	});


	//tr.onclick=function(){
	setInterval(function(){
		var zc=document.getElementById("zc");
		var tr=document.getElementById("tr");
		var un=regx.test(uname.value);
		var up=regx.test(upwd.value);
		var uph=regy.test(uphone.value);
		if(((tr.checked)&&un&&up&&uph)==true){
			zc.disabled=false;
		}else{
			zc.disabled=true;
		}
	},1);

		//}

}();



//切换验证码
+function(){
	$('#trans').on('click',function(){
		$('#yanzhengma').attr('src','data/yanzhengma.php?id='+Math.random());

	})
}();
//用户注册
+function(){
	"use strict";
	$('#zc').on('click',function(){
		var n=$('#uname').val();
		var p=$('#upwd').val();
		var h=$('#uphone').val();
		var v=$('#yzm').val();
		console.log(n,p,h);
		$.ajax({
			type:'POST',
			url:'data/add_user.php',
			data:{uname:n,upwd:p,uphone:h,ucode:v},
			success:function(result){
				console.log('成功获取到异步返回的数据');
				console.log(result);
				if(result.code===200){
					if(confirm('注册成功！去完善个人信息吗？')==true){
						sessionStorage['Uname']=n;
						location.href='myMsg.html';
					}else{
						location.href='index.html';
					}
				}
				else if(result.code===401){
					alert('注册失败，请稍后再试！');
				}else{
					alert('验证码有误，请重新输入！');
				}
			}
		});
	});
}();

//验证管理
+function(){
	var $uname=$('#uname');
	var $upwd=$('#upwd');
	var $uphone=$('#uphone');

	function getFocus(){
		var span=this.nextElementSibling.nextElementSibling;
		var diva=this.nextElementSibling.nextElementSibling.nextElementSibling;
		var dive=this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
		$(span).css('display','none');
		$(diva).css('display','none');
		$(dive).css('display','none');
	}

	function misFocus(that,reg){
		var span=that.nextElementSibling.nextElementSibling;
		var diva=that.nextElementSibling.nextElementSibling.nextElementSibling;
		var dive=that.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
		if(that.value==''){
			$(span).css('display','block');
			$(diva).css('display','none');
			$(dive).css('display','block');
		}else{
			if(reg.test(that.value)){
				$(span).css('display','none');
				$(diva).css('display','none');
				$(dive).css('display','none');
			}else{
				$(span).css('display','block');
				$(diva).css('display','block');
				$(dive).css('display','none');
			}
		}
	}

	$uname.on('focus',getFocus);
	$upwd.on('focus',getFocus);
	$uphone.on('focus',getFocus);

	$uname.on('blur',function(){
		misFocus(this,regx);
	});
	$upwd.on('blur',function(){
		misFocus(this,regx);
	});
	$uphone.on('blur',function(){
		misFocus(this,regy);
	});
}();