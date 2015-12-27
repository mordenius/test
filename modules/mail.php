<?php
	//declare our assets 
	$fname = stripcslashes($_POST['fname']);
	$lname = stripcslashes($_POST['lname']);
	$emailAddr = stripcslashes($_POST['email']);
	$phone	=  stripcslashes($_POST['phone']);
	$company	=  stripcslashes($_POST['company']);
	$position	=  stripcslashes($_POST['position']);
	$comment = stripcslashes($_POST['message']);
	$subject = "Форма обратной связи";	
	$contactMessage =  
		"Сообщение:
		$comment 

		Имя: $fname $lname
		E-mail: $emailAddr
		Телефон: $phone
		
		Компания: $company
		Должность: $position

_________________________________________________________
		Sending IP:$_SERVER[REMOTE_ADDR]
		Sending Script: $_SERVER[HTTP_HOST]";
		
		//send the email 
		mail('info@gmail.com', $subject.' Отправитель: '.$fname.' '.$lname, $contactMessage, 
		"From: form@kvinto.com.ua \r\n");
		echo('success'); //return success callback
?>