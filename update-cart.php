<?php
$servername = "localhost";
$username = "uts";
$password = "";
$dbname = "assignment2";

$query = $_GET['query'];
$value = $_GET['value'];
echo $query;
echo $value;
isset($query) ? $query : $query = 'all';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE `cart` SET days=" . $value . " WHERE id=" . $query;

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>