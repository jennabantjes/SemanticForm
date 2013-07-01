<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
</head>

<body>

    <?php
        // if the form has been submitted, process it - otherwise, just display the form normally
        if(isset($_POST['send'])){
            
            // pull the name out of the submitted for
            $name = strip_tags($_POST['name']);
            
            // pull the email out of the submitted form
            $emailFrom = strip_tags($_POST['email']);
            
            // who you're sending the email to (probably change this)
            $emailTo = "apprentices@freshtilledsoil.com";
            $subject = "Submission";
            
            // inset information into the body of the email
            $body = "Name: ".$name."\n";
            $body .= "Email: ".$emailFrom."\n";
            
            // set the email headers
            $headers = "From: ".$emailFrom."\n";
            $headers .= "Reply-To:".$emailFrom."\n";	
            
            $success = mail($emailTo, $subject, $body, $headers);
            
            // this is the message that gets displayed after submission
            if ($success){
                echo 'sent';
            } else {
                echo 'not sent';
            }
        
        } else {
    ?>
        
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            
            <label for="name">Name</label>
            <input type="text" id="name" name="name" minlength="2"/>
            
            <label for="name">E-mail</label>
            <input type="email" id="email" name="email" minlength="2"/>
            
            <button type="submit" name="send">Send!</button>
            
        </form>
    
    <?php
        }
    ?>

</body>
</html>
