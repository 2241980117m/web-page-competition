<?php
require_once  './php-sdk-7.1.3/autoload.php';

use Qiniu\Auth;
$bucket = 'test1';

$accessKey = '3HMl27Klnos06QrHVD-Ru_VIivF_-MbeMRyfmNLp';
$secretKey = 'bOvyZ0XG9podSxyXYgJUyD-qEP0nulnFvu3lkzFk';

$auth = new Auth($accessKey, $secretKey);


//echo    $_GET['callback'].'('.json_encode(array('token'=>$upToken)).')';

$upToken = $auth->uploadToken($bucket);
echo $upToken;
?>