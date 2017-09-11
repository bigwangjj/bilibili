<?php
 header('Content-Type:application/json');

 $start = $_REQUEST['start'];
 $count = 4;

 $conn = mysqli_connect('127.0.0.1','root','','blbl');
 $sql = "SET NAMES UTF8";
 mysqli_query($conn,$sql);

 $sql="SELECT f_user.uName,f_user.photo,f_user.uLevel,f_user.uLevelImg,f_user.addr,f_content.tId,f_content.content,f_content.contentTime FROM f_user,f_content WHERE f_user.uName=f_content.uName LIMIT $start,$count";
 $result = mysqli_query($conn,$sql);

 $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);



echo json_encode($rows);

?>

