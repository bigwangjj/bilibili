

//跟新验证
+function(){
		$('#bc').on('click',function(){
			var img=$('#uImg').val();
			var addr=$('#uAddr').val();
			var name=$('li.username>a').html();
			console.log(img,addr,name);
			if(name=='登录'){
				alert('请先登录再做操作！');
			}else{
				$.ajax({
					type:'POST',
					url:'data/update_user.php',
					data:{uimg:img,uaddr:addr,uname:name},
					success:function(result){
						var rs=parseInt(result);
						if(rs===1){
							alert('信息保存成功！');
							location.href='index.html';
						}else{
							alert('保存失败！请稍后再试！');
						}
					}
				});

			}


		});
}();
