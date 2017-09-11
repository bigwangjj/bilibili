<?php
	$conn = mysqli_connect("127.0.0.1","root","","blbl");
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);
	@$uimg=$_REQUEST['uimg'];
	@$uaddr=$_REQUEST['uaddr'];
	@$uname=$_REQUEST['uname'];
	$sql="update f_user set photo='$uimg',addr='$uaddr' where uName='$uname'";
	$result=mysqli_query($conn,$sql);
	if($result===true){
		echo "1";
	}else{
		echo "-3";
	}
?>