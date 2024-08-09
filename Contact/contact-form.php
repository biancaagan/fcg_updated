<?php

// Get data from form  
$name = $_POST['fullname']; // required
$email = $_POST['email'];  // required
$message = $_POST['message'];  // required

$to = "bianca@frequencycoordinationgroup.com";
$subject = "FCG - New contact form submission";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="Name = ". $name . "\r\n  Email = " 
    . $email . "\r\n Message =" . $message;

$headers = "From: noreply@demosite.com" . "\r\n" .
            "CC: somebodyelse@example.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect to
header("Location:/Contact/contact-landing-page.html");
// ------------------------------


?>
