<?php

// echo "test";

// print_r($product_array);

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$username = $_POST['username'];
$email = $_POST['email'];
$address = $_POST['address'];
$address2 = $_POST['address2'];
$country = $_POST['country'];
$state = $_POST['state'];
$zip = $_POST['zip'];
$paymentMethod = $_POST['paymentMethod'];
$ccName = $_POST['cc-name'];
$ccNumber = $_POST['cc-number'];
$ccExpiration = $_POST['cc-expiration'];
$ccCVV = $_POST['cc-cvv'];

$date = date("l jS \of F Y h:i:s A");

// echo $date;
// echo "test";
// echo $username;
// echo $firstName, $lastName, $username, $address, $address2, $country, $state, $zip, $paymentMethod, $ccName, $ccNumber, $ccExpiration, $ccCVV;

echo "Booking Processed, returning to home";

// sleep(10);
header("Location: index.php");
exit();

?>