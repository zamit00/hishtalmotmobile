<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "zamitt0@gmail.com"; // Your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $body)) {
        echo "ההודעה נשלחה בהצלחה!";
    } else {
        echo "שגיאה בשליחת ההודעה.";
    }
} else {
    echo "בקשה לא חוקית.";
}
?>
