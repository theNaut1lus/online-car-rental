<?php
$servername = "localhost";
$username = "uts";
$password = "";
$dbname = "assignment2";

$query = $_GET['query'];
// echo $query;
isset($query) ? $query : $query = 'all';

$output_array = array();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = ($query == 'all' or $query == '') ? 'SELECT * FROM `cars`' : 'SELECT * FROM `cars` WHERE `brand` like "%' . $query . '%"';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $output_array[] = $row;
    }
} else {
    echo "0 results";
}
$conn->close();
print_r(json_encode($output_array));
?>