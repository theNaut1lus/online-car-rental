<?php
$servername = "localhost";
$username = "uts";
$password = "";
$dbname = "assignment2";

$output_array = array();

$query = $_GET['query'];
echo $query;
isset($query) ? $query : $query = 'all';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `cars` WHERE `brand` like '%" . $query . "%' OR `model` like '%" . $query . "%' OR `year` like '%" . $query . "%' OR `price_per_day` like '%" . $query . "%'";
// echo $sql;
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

$json_array = json_encode($output_array, JSON_PRETTY_PRINT);
$path = "json-data/search.json";

if (file_exists($path)) {
    file_put_contents($path, $json_array) or die("Unable to write file!");
} else {
    echo "File does not exist";
}

print_r($json_array);
?>