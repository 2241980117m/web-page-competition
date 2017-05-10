<?php
    header("Content-Type:text/html;charset=utf8");
   
   $name = $_POST['name'];
   //对数据进行过滤
   $name = htmlspecialchars($name);
    
     if(!get_magic_quotes_gpc()){
            $name    =    addslashes($name);
      }
$db    =    new mysqli('localhost','root','100100mxh','compition');
     if(mysqli_connect_errno()){
        echo 'Error:Could not connect to databases.Please try again.';
        exit;
     }
    $db->query("SET NAMES utf8");   //设置从数据库读出的数据的字符编码方式
    

    $query = 'select * from user';
    $result = $db->query($query);
    
    $nums = $result->num_rows;
    
  
    
    while($row = $result->fetch_assoc()){
    for($i=0;$i<$nums;)
     
    	if($name != $row['name']){//可以增加process的筛选条件
    		$i++;
    	}else{   
          
        echo '1';  
     /* if(!isset($_SESSION)) 
        { 
            session_start(); 
        } 
        $_SESSION['name']=1;*/
        exit;
    } 
  }
    echo "0";
      /* if(!isset($_SESSION)) 
        { 
            session_start(); 
        } 
      $_SESSION['name']=0;*/
?>