<?php
$servername = "localhost";
$username = "uts";
$password = "";
$dbname = "assignment2";

$query = $_GET['query'];
// echo $query;
isset($query) ? $query : $query = 'all';

$total = 0;

$output_array = array();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// $sql = "SELECT * FROM `cart` JOIN `cars` where cart.ID = cars.id ";
$sql = "SELECT cart.ID, CONCAT(cars.brand,\" \",cars.model,\" \",CONVERT(cars.year,CHARACTER)) as car_details, cart.days, cars.price_per_day, (cart.days*cars.price_per_day) as charges FROM `cart` JOIN `cars` where cart.ID = cars.id;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $total += $row["charges"];
        $output_array[] = $row;
    }
} else {
    echo "0 results";
}
$json_array = json_encode($output_array, JSON_PRETTY_PRINT);
$path = "json-data/cart.json";

if (file_exists($path)) {
    file_put_contents($path, $json_array) or die("Unable to write file!");
} else {
    echo "File does not exist";
}

$conn->close();

print_r($json_array);
?>