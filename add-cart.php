<?php
$servername = "localhost";
$username = "uts";
$password = "";
$dbname = "assignment2";

$query = $_GET['query'];
echo $query;

isset($query) ? $query : $query = 'all';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$check_sql = "SELECT * FROM `cart` WHERE `ID` = '" . $query . "'";

$check_result = $conn->query($check_sql);

if ($check_result->num_rows > 0) {
    // echo "updating..";
    //car already in cart, just need to increment the days..
    $update_sql = "UPDATE `cart` SET `days` = `days` + 1 WHERE `ID` = '" . $query . "'";
    if ($conn->query($update_sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
    exit();
} else {
    // echo "adding..";
    //car not in cart, need to add it..
    $add_sql = "INSERT INTO `cart` (`ID`, `days`) VALUES ('" . $query . "', '1');";
    if ($conn->query($add_sql) === TRUE) {
        echo "Record added successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}

$conn->close();
?>