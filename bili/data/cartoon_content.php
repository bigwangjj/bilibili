<?php
	header('Content-Type:application/json');

   $start = $_REQUEST['start'];
   $count = 10;

   $conn = mysqli_connect('127.0.0.1','root','','blbl');
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

   $sql="SELECT * FROM cartoon_content LIMIT $start,$count";
   $result = mysqli_query($conn,$sql);

   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);


  echo json_encode($rows);

?>