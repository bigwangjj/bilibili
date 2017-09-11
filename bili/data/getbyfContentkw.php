<?php
 header('Content-Type:application/json');

 $kw = $_REQUEST['kw'];
 if(empty($kw)){
  echo '';
  return;
 }

 $conn = mysqli_connect('127.0.0.1','root','','blbl');
 $sql = "SET NAMES UTF8";
 mysqli_query($conn,$sql);

 $sql="SELECT f_user.uName,f_user.photo,f_user.uLevel,f_user.uLevelImg,f_user.addr,f_content.tId,f_content.content,f_content.contentTime FROM f_user,f_content WHERE f_content.content LIKE '%$kw%' AND f_user.uName=f_content.uName";
 $result = mysqli_query($conn,$sql);

 $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($rows);

?>