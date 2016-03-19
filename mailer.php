<?php
	$name = $_GET['name'];
	$phone = $_GET['phone'];
	$email = $_GET['email'];
	$msg = $_GET['msg'];

	$result = "";

	if(!isset($phone) && !isset($email)){ $result = "Must input phone or email"; }

	if($result == ""){
		$str = "שם: " . $name . "\r\n";
		$str = $str . "טלפון: " . $phone . "\r\n";
		$str = $str . "מייל: " . $email . "\r\n";
		$str = $str . $msg;
		mail('yakir@code-cult.com','Studio Site - Incoming Mail', $str);
		$result = "Everything O.K.";
	}

	echo $result;

?>