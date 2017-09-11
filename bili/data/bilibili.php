<?php
	header("Content-Type:application/json;charset=utf-8");
	@$uname=$_REQUEST['uname'];
	@$upwd=$_REQUEST['upwd'];
	@$ucode=$_REQUEST['ucode'];
	$conn=mysqli_connect('127.0.0.1','root','','blbl');
	$sql="set names utf8";
	mysqli_query($conn,$sql);

  session_start();
	if($ucode===$_SESSION['code']){
//创建预编译对象，两个
	$sql="select * from t_user where uname=? and upwd=?";
	$stmt=$conn->prepare($sql);

//绑定参数
	$stmt->bind_param("ss",$uname,$upwd);

	//绑定结果集
	$stmt->bind_result($uid,$uname,$upwd,$uphone);
	//执行
	$stmt->execute();
	$result=$stmt->fetch();

	if($result!=1){
   echo '{"code":401,"msg":"uname or upwd err"}';
	}else{
	  echo '{"code":200,"msg":"login success"}';
	//在服务器端为当前客户端开辟session空间，存储客户端专有数据

	$_SESSION['loginUname']=$uname;

	}

	}else{
    echo '{"code":601,"msg":"code error"}';
	}


?>