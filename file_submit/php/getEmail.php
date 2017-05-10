<?php
    header("Content-Type:text/html;charset=utf8");
   
   $email = $_POST['email'];
   //对数据进行过滤
   $email = htmlspecialchars($email);
    
     if(!get_magic_quotes_gpc()){
            $email    =    addslashes($email);
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
     
    	if($email != $row['email']){//可以增加process的筛选条件
    		$i++;
    	}else{         
            echo '1';  
             /*if(!isset($_SESSION)) 
              { 
                session_start(); 
              } 
            $_SESSION['email']=1;*/
            exit;
    } 
  }
       echo "0";
       /* if(!isset($_SESSION)) 
          { 
            session_start(); 
          } 
        $_SESSION['email']=0;*/
?>