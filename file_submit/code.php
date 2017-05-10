<?php
//session_start();
require './php/class.validateCode.php';
$_vc = new ValidateCode();
$_vc->doimg();
return $_vc->getCode();
?>