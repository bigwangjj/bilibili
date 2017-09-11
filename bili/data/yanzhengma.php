<?php
	header('Content-Type:image/png');

	$w=120;
	$h=30;

	//在服务器端内存中生成一副随机图片
	$img=imagecreatetruecolor($w,$h);

	//绘制随机的背景颜色(参数列)
	$c=imagecolorallocate($img,rand(180,240),rand(180,240),rand(180,240));

	//填充一个矩形作为背景
	imagefilledrectangle($img,0,0,$w,$h,$c);

	//绘制4个随机的字符
	$pool='ABCDEFGHIJKLMNPQRSTUVWXY3456789';
	$vc='';
	for($i=0;$i<4;$i++){
	//每次生成一个字符。
		$char=$pool[rand(0,strlen($pool)-1)];

		//拼起来，用于最后发给客户端
		$vc.=$char;

		//字体颜色随机
		$c=imagecolorallocate($img,rand(80,180),rand(80,180),rand(80,180));

		$x=$i*30+5;
		$y=rand(15,30);
		$fontSize=rand(14,23);
		$font="simhei.ttf";
		$deg=rand(-30,30);

		//开始绘制
		imagettftext($img,$fontSize,$deg,$x,$y,$c,$font,$char);
	}
	//把服务器生成的随机验证码保存在服务器的session中
	session_start();
	$_SESSION['code']=$vc;

	//绘制6条随机干扰线
	for($i=0;$i<6;$i++){
		$c=imagecolorallocate($img,rand(0,255),rand(0,255),rand(0,255));
		imageline($img,rand(0,$w),rand(0,$h),rand(0,$w),rand(0,$h),$c);
	}


	//绘制50个随机干扰点
	for($i=0;$i<50;$i++){
		$c=imagecolorallocate($img,rand(0,255),rand(0,255),rand(0,255));
		imagearc($img,rand(0,$w),rand(0,$h),1,1,0,360,$c);
	}

	//把图片输出给客户端
	imagepng($img);

	//输出完之后删除掉
	imagedestroy($img);

?>