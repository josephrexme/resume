<?php
/*
Credits: Bit Repository
URL: http://www.bitrepository.com/
*/


/////////// Add your own email below //////////////// 

	define("WEBMASTER_EMAIL", 'youradress@yourdomain.com');
	
	error_reporting (E_ALL ^ E_NOTICE);

//////////////////////////////////////////////////////

	function ValidateEmail($email)
	{
		$regex = '/([a-z0-9_.-]+)'. # name
		'@'. # at
		'([a-z0-9.-]+){2,255}'. # domain & possibly subdomains
		'.'. # period
		'([a-z]+){2,10}/i'; # domain extension 
		
		if($email == '') 
			return false;
		else
			$eregi = preg_replace($regex, '', $email);
		return empty($eregi) ? true : false;
	}

//////////////////////////////////////////////////////

	$post = (!empty($_POST)) ? true : false;
	
	if($post)
	{
		$name 	 = stripslashes($_POST['name']);
		$email 	 = trim($_POST['email']);
		$subject = 'A new message was received!';
		$message = stripslashes($_POST['message']);
	
		$error = '';
	
		// Check name
		if(!$name || $name == "Name*")
			$error .= 'Name required! ';
	
		// Check email
		if(!$email || $email == "Email*")
			$error .= 'E-mail required! ';
	
		if($email && !ValidateEmail($email))
			$error .= 'E-mail address is not valid! ';
	
		// Check message
		if(!$message)
			$error .= "Please enter your message!";
	
		if(!$error)
		{
			$mail = mail(WEBMASTER_EMAIL, $subject, $message,
				 "From: ".$name." <".$email.">\r\n"
				."Reply-To: ".$email."\r\n"
				."X-Mailer: PHP/" . phpversion());
			
			if($mail)
				echo 'OK';
		}
		else
			echo '<div class="formstatuserror">'.$error.'</div>';
	}

?>