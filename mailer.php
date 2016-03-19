<?php
	$name = $_GET['name'];
	$phone = $_GET['phone'];
	$email = $_GET['email'];
	$msg = $_GET['msg'];

	if(isset($name) || isset($phone) || isset($email) || isset($msg)){
		$str = "שם: " . $name . "\r\n";
		$str = $str . "טלפון: " . $phone . "\r\n";
		$str = $str . "מייל: " . $email . "\r\n";
		$str = $str . $msg;
		mail('yakir@code-cult.com','Studioin Site - Incoming Mail', $str);
	}else{
		echo "nothing";
	}
?>