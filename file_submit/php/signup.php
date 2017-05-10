<?php
 header("Content-Type:text/html;charset=utf8");
     $tel    =    $_POST['tel'];
     $tname    =    $_POST['name'];
     $temail    =    $_POST['email'];
     $testcode  =   $_POST['test'];
     session_start();
     if(isset($_SESSION['checkcode'])){
          $checkcode = $_SESSION['checkcode'];
     }else{
        echo '请先获取验证码';
        exit;
     }
    //htmlspecialchars 使 > < 转化为html实体
     $tel = htmlspecialchars($tel);
     $tname = htmlspecialchars($tname);
     $temail = htmlspecialchars($temail);
     if(!get_magic_quotes_gpc()){
            $tname    =    addslashes($tname);
            $tel    =    addslashes($tel);
            $temail    =    addslashes($temail);
      }

     //对传送到后台的数据进行过滤
    
     if(!preg_match("/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$/",$tel)){
         echo "联系方式不正确";
         exit;
     }
   //  /^[\u4E00-\u9FA5A-Za-z0-9]{1,20}$/
     if(!preg_match("/^[\x{4e00}-\x{9fa5}|[a-z]|[A-Z0-9]|]{1,20}+$/u",$tname)){
         echo "姓名格式不正确";
         exit;
     }
     if(!preg_match("/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/", $temail)){
         echo "邮箱格式不正确";
          exit;        
     }
     if( strcasecmp($testcode,$checkcode)){
        echo "验证码输入不正确";
        exit;
     }
      
     //连接到数据库
     $db    =    new mysqli('localhost','root','100100mxh','compition');
     if(mysqli_connect_errno()){
        echo 'Error:Could not connect to databases.Please try again.';
        exit;
     }
     //设置数据库的编码方式，以防造成前端传到数据库的中文乱码
     $db->set_charset("utf8");
     //需要修改 
     $state = "1";
   /*  if($_SESSION['email'] == 1){
        echo "该邮箱已经报过名";
        exit;
     }else if($_SESSION['name'] == 1){
        echo "该团队名称已经报过名";
        exit;
     }else if($_SESSION['tel'] == 1){
        echo "该联系方式已经报过名";
        exit;
     }*/
     session_destroy();
     $query = "insert into user values ('".$tname."','".$temail."','".$tel."','".$state."')";   
   
     $result = $db->query($query);
     if($result){
     	echo $tname.",报名成功";
     }else{
        echo "报名未成功.";
     }
     $db->close();
?>