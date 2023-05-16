<?php
// $servername = "localhost"; //local
$servername = "awseb-e-qbre3sbpj9-stack-awsebrdsdatabase-jfmsni6lqk9t.cet59kefgwkn.us-east-1.rds.amazonaws.com"; //aws
$username = "uts";
$password = "Secret123";
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

$sql = "UPDATE `booking` SET days=" . $value . " WHERE id=" . $query;

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>