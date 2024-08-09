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
header("Location:last.html");
// ------------------------------





if (isset($_POST['email'])) {
     $email_to = "bianca@frequencycoordinationgroup.com";
     $email_subject = "FCG - New contact form submission";

     function problem($error) {
        echo "Looks like there is a problem with your form submission: <br><br>";
        echo $error . "<br><br>";
        echo "Please make necessary adjustments to submit.<br><br>";
        die();
     }

     // Validation expected data exists:
     if (
        !isset($_POST['fullname']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])
     ){
        problem("Looks like there is a problem with your form submission.");
     }

     $name = $_POST['fullname']; // required
     $email = $_POST['email'];  // required
     $message = $_POST['message'];  // required

     $error_msg = "";
     $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

     if (!preg_match($email_exp, $email)) {
        $error_msg .= 'Email address does not seem valid.<br>';
     }

     $string_exp = "/^[A-Za-z .'-]+$/";

     if (!preg_match($string_exp, $name)) {
        $error_msg .= 'Name does not seem valid.<br>';
     }

     if (strlen($message) < 2) {
        $error_msg .= 'Are you sure you wrote a message? Seems too short.<br>';
     }

     if (strlen(error_msg) > 0){
        problem($error_msg);
     }

     $email_msg = "Form details below:\n\n";

     function clean_string($string) {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
     }

     $email_msg .= "Name: " . clean_string($name) . "\n";
     $email_msg .= "Email: " . clean_string($email) . "\n";
     $email_msg .= "Message: " . clean_string($message) . "\n";

     // Create email headers:
     $headers = "From: " . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" . 
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_msg, $headers);

    ?>

<?php
}
?>

