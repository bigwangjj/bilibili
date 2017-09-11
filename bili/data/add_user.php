<?php
	header("Content-Type:application/json;charset=utf-8");
	$conn = mysqli_connect("127.0.0.1","root","","blbl");
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);
	@$uname=$_REQUEST['uname'] or die ('uname not found');
	@$upwd=$_REQUEST['upwd'] or die ('upwd not found');
	@$uphone=$_REQUEST['uphone'] or die ('uphone not found');
	@$ucode=$_REQUEST['ucode'] or die ('uphone not found');

	session_start();
	if($ucode===$_SESSION['code']){

	$sql1="insert into t_user values(null,'$uname','$upwd','$uphone')";
	$sql2="insert into f_user values(null,'$uname','default.jpg','普通会员','level1.jpg','未知地址')";
	$result1=mysqli_query($conn,$sql1);
	$result2=mysqli_query($conn,$sql2);
	$result=($result1&&$result2);
	if($result===true){
		echo '{"code":200,"msg":"register success"}';
	}else{
		echo '{"code":401,"msg":"error"}';
	}
}else{
	echo '{"code":601,"msg":"code error"}';
}



?>