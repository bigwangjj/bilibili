<?php
  header("Content-Type:application/json");

  $content=$_REQUEST['content'];
  $uName=$_REQUEST['uName'];


    $conn=mysqli_connect('127.0.0.1','root','','blbl');
      $sql='set names utf8';
      mysqli_query($conn,$sql);

      $sql="INSERT INTO f_content VALUES(null,'$uName','$content',now())";
      $result=mysqli_query($conn,$sql);

      $output=[];
      if($result===true){
        $arr['msg']='success';
        $arr['oid']=mysqli_insert_id($conn);
        $output[]=$arr;
      }
      else{
        $arr['msg']='error';
        $output=$arr;
      }

      echo json_encode($output);


?>