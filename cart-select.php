<?php
$servername = "localhost";
$username = "uts";
$password = "";
$dbname = "assignment2";

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
$jsonString = json_encode($output_array);

$path = "json-data/cars.json";
$fp = fopen($path, 'w');
fwrite($fp, $jsonString);
fclose($fp);
$conn->close();
?>