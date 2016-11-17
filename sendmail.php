<?php

$hasError = false;
$sent = false;

if(isset($_POST['submitform'])){
  $fullname = trim(htmlspecialchars($_POST['fullname'], ENT_QUOTES));
  $email = trim($_POST['email']);
  $number = trim(htmlspecialchars($_POST['number'], ENT_QUOTES));
  $message = trim(htmlspecialchars($_POST['message'], ENT_QUOTES));

  $fieldsArray = array(
    'name' => $fullname,
    'email' => $email,
    'number' => $number,
    'message' => $message
    );

  $errorArray = array();

  foreach($fieldsArray as $key => $val){
    switch ($key){
      case 'name':
      case 'message':
      if(empty($val)){
        $hasError = true;
        $errorArray[$key] = ucfirst($key). " field was left empty";
      }
      break;
      case 'email':
      if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $hasError = true;
        $errorArray[$key] = " Invalid Email Address entered";
      }
      else{
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
      }
      break;
    }   
  }

  if($hasError != true){
    $to = "tinkytinx@hotmail.co.uk";
    $subject = "OYS Client enquiry";
    $msgcontents = "Name: $fullname<br>Contact Number: $number<br>Email: $email<br>Message: $message";
    $headers = "MIME-VERSION: 1.0 \r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1 \r\n";
    $headers .= "From: $fullname <$email> \r\n";
    $mailsent = mail($to, $subject, $msgcontents, $headers);
    if($mailsent){
      $sent = true;
      unset($fullname);
      unset($email);
      unset($message);
    }
  }
}


?>