<?php
   //更新进度条
   header("Content-Type:text/html;charset=utf8");
   $name = $_GET['tname'];
   //对数据进行过滤
   $name = htmlspecialchars($name);
    
     if(!get_magic_quotes_gpc()){
            $name    =    addslashes($name);
      }
   $db = new mysqli('localhost','root',']kPhg;6P6QdsV80#@','compition');
    
   $db->query("SET NAMES utf8");   //设置从数据库读出的数据的字符编码方式

   if(mysqli_connect_errno()){
       echo 'Connect the database failed';
       exit;
   }
   //  初赛作品提交成功
    $state = "2";
 //  $state = "4";

   //复赛作品提交成功时,$state为4
   $query = "update user set process ='".$state."'where name ='".$name."'";
   
   $result = $db->query($query);
   
   if($result){
   	  echo $name.'作品提交成功';
   }else{
      echo  $name.'作品提交失败';
   }
?>