<?php
$query = $_GET['query'];

$file = "json-data/sample.json";
$json_file_read = file_get_contents($file);

$json = json_decode($json_file_read, true);

print_r($json);
