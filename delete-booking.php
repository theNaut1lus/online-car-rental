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

// sql to delete a record
$sql = "DELETE FROM booking WHERE id=" . $query;

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>