<?php


	header('Content-Type:application/json');

   $weeks = $_REQUEST['weeks'];

   $conn = mysqli_connect('127.0.0.1','root','','blbl');
   $sql = "SET NAMES UTF8";
   mysqli_query($conn,$sql);

  if($weeks==="最新"){
    $sql="SELECT * FROM fj_content";
   }else{
   $sql="SELECT * FROM fj_content WHERE weeks='$weeks'";
  }

   $result = mysqli_query($conn,$sql);

   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);

  echo json_encode($rows);

?>