<?php
    $name = $_POST['name']; // required
    $to = $_POST['mail']; // required
    $phone = $_POST['phone']; // required
    $message = $_POST['message']; // not required
    $subject="Glowria erdeklodes";
   
    $message="Name: ". $name . " Phone number: ".$phone ." E-mail: " . $to ." Message: " . $message ;
    
    mail("info@glowria.show",$subject,$message);

echo "sent";

   
?>