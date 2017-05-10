<?php
require_once("./functions.php");
require './php/class.validateCode.php';
$_vc = new ValidateCode();
$_vc->doimg();
$checkcode = $_vc->getCode(); 
if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
$_SESSION['checkcode']=$checkcode;
//setcookie('checkcode',$checkcode);  
	if(!empty($_POST['name'])&&!empty($_POST['email'])){
	 $name    =     $_POST['name'];
     $email    =    $_POST['email'];
    //htmlspecialchars 使 > < 转化为html实体
    
     $name = htmlspecialchars($name);
     $email = htmlspecialchars($email);
    
     if(!get_magic_quotes_gpc()){
            $name    =    addslashes($name);            
            $email    =    addslashes($email);
}
    $mail_title = "'创新杯'网页设计大赛";
    $mail_text  = "验证码:<b>".$checkcode."<b><br />".$name."正在'创新杯'网页设计大赛中报名,请填写以上验证码完成报名。";
	$flag = sendMail($email,$mail_title,$mail_text);
		if($flag){
			echo "发送邮件成功";
			exit;
		}
		else{
	  		echo "发送邮件失败";
	  		exit;
		}
	}else if(empty($_POST['name'])){
         echo '请先输入团队名称';
         exit;
	}else if(empty($_POST['email'])){
		echo '请先输入邮箱';
		exit;
	}
	
?>