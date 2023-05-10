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

$sql = "INSERT INTO `cart` (`ID`, `days`) VALUES ('" . $query . "', '1');";
if ($conn->query($sql) === TRUE) {
    echo "Record added successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>