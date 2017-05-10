<?php
// 得到进度状态
  header("Content-Type:text/html;charset=utf8");
   $name = $_GET['tname'];
   //对数据进行过滤
   $name = htmlspecialchars($name);
    
     if(!get_magic_quotes_gpc()){
            $name    =    addslashes($name);
      }
    $db    =    new mysqli('localhost','root','100100mxh','compition');
    $db->query("SET NAMES utf8");   //设置从数据库读出的数据的字符编码方式
    if(mysqli_connect_errno()){
        echo 'Error:Could not connect to databases.Please try again.';
        exit;
     }
   $query = "select * from user where name='".$name."'";
   $result = $db->query($query);
   $nums = $result->num_rows;
   while($row = $result->fetch_assoc()){
    for($i=0;$i<$nums;$i++)
    	
    	if($name == $row['name']){
    		
    		 echo $row['process'];
    		 exit;
    	}
    } 
?>