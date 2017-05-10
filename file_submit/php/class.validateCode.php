<?php
//验证码类
class ValidateCode{
	private $charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789';
	private $code;   //验证码
	private $codelen = 6; 
	private $width=130;
	private $height=30;
	private $img;
	private $font;
	private $fontsize=20;
	private $fontcolor;
	//生成随机码
	private function createCode(){
	$_len = strlen($this->charset) - 1;
		for($i=0;$i<$this->codelen;$i++){
			$this->code.=$this->charset[mt_rand(0,$_len)];
		}
		return $this->code;
	}
	public function __construct(){
		$this->font = './fonts/elephant.ttf';
	}
	//生成背景
	private function createBg(){
		$this->img = imagecreatetruecolor($this->width, $this->height);
		$color = imagecolorallocate($this->img, 255,255,255); //颜色 
		imagefilledrectangle($this->img, 0, $this->height, $this->width, 0, $color); //生成矩形
	}
	//生成文字
	/*private function createFont(){
		$this->fontcolor = imagecolorallocate($this->img,mt_rand(0,156),mt_rand(0,156),mt_rand(0,156));
		$_x = $this->width / $this->codelen; 
		for ($i=0;$i<$this->codelen;$i++) { 
			imagettftext($this->img,$this->fontsize,rand(-20,20),$_x*$i+mt_rand(0,4), $this->height / 1.4, $this->fontcolor,$this->font, $this->code[$i]); 
		}
	}*/
	//生成6个随机线条和100个雪花
	private function createLine(){ 
		//for ($i=0;$i<6;$i++) { 
		//	$color = imagecolorallocate($this->img, mt_rand(0,156),mt_rand(0,156),mt_rand(0,156)); 
		//	imageline($this->img,mt_rand(0,$this->width), mt_rand(0,$this->height),mt_rand(0,$this->width), mt_rand(0,$this->height),$color); 
		//} 
		//for ($i=0;$i<100;$i++) { $color = imagecolorallocate($this->img, mt_rand(200,255),mt_rand(200,255),mt_rand(200,255)); 
		//	imagestring($this->img,1, mt_rand(1,$this->width),mt_rand(1,$this->height),'*',$color); 
		//}
		for($i=0;$i<200;$i++){
        	//设置点的颜色，50-200颜色比数字浅，不干扰阅读
        	$pointcolor = imagecolorallocate($this->img,mt_rand(0,156),mt_rand(0,156),mt_rand(0,156));        
        	//imagesetpixel — 画一个单一像素
        	imagesetpixel($this->img, mt_rand(0,$this->width) ,  mt_rand(0,$this->height), $pointcolor);
    }
    	//9>增加干扰元素，设置横线
   		 for($i=0;$i<4;$i++){
        	//设置线的颜色
       		 $linecolor = imagecolorallocate($this->img,mt_rand(80,220), mt_rand(80,220),mt_rand(80,220));
        	//设置线，两点一线
        	imageline($this->img,mt_rand(0,$this->width) ,  mt_rand(0,$this->height),mt_rand(0,$this->width) ,  mt_rand(0,$this->height),$linecolor);
   			 }
	}
	


	//输出
	private function outPut(){
		header('Content-type:image/png');  //指定HTTP发送的标头：png 
		imagepng($this->img);   //指定向浏览器输出的类型：png 
		imagedestroy($this->img); //销毁图形句柄：$this->img
   }
	//对外生成
	public function doimg(){
		
	  //  $this->createBg();
		$this->createCode();
	//	$this->createFont();
	//	$this->createLine();
	//	$this->outPut();
	}
	//获取验证码 
	public function getCode() { 
		return strtolower($this->code); 
	}
}

?>