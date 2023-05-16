-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 16, 2023 at 06:59 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment2`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `ID` int(4) NOT NULL,
  `days` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`ID`, `days`) VALUES
(14, 4);

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(4) NOT NULL,
  `category` varchar(20) NOT NULL,
  `availability` tinyint(1) NOT NULL,
  `brand` varchar(20) NOT NULL,
  `model` varchar(20) NOT NULL,
  `year` year(4) NOT NULL,
  `mileage` int(20) NOT NULL,
  `fuel_type` varchar(20) NOT NULL,
  `seats` int(2) NOT NULL,
  `price_per_day` int(20) NOT NULL,
  `description` longtext NOT NULL,
  `img_index` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `category`, `availability`, `brand`, `model`, `year`, `mileage`, `fuel_type`, `seats`, `price_per_day`, `description`, `img_index`) VALUES
(1, 'sedan', 1, 'Toyota', 'Camry', 2013, 10000, 'petrol', 5, 110, 'Fan favourites!!', 'camry.png'),
(12, 'Economy', 1, 'Toyota', 'Yaris', 2020, 5000, 'Gasoline', 5, 30, 'Compact and fuel-efficient', 'yaris.jpg'),
(13, 'Compact', 1, 'Honda', 'Civic', 2019, 12000, 'Gasoline', 5, 40, 'Sporty and reliable', 'civic.png'),
(14, 'Mid-size', 0, 'Nissan', 'Altima', 2018, 15000, 'Gasoline', 5, 50, 'Comfortable and spacious', 'altima.png'),
(15, 'Full-size', 1, 'Chevrolet', 'Impala', 2020, 8000, 'Gasoline', 6, 60, 'Luxurious and powerful', 'impala.png'),
(16, 'SUV', 0, 'Ford', 'Explorer', 2019, 20000, 'Gasoline', 7, 80, 'Roomy and rugged', 'explorer.png'),
(17, 'Luxury', 1, 'Mercedes-Benz', 'S-Class', 2021, 1000, 'Gasoline', 4, 200, 'Elegant and sophisticated', 'sclass.png'),
(18, 'Sports', 1, 'Porsche', '911', 2022, 100, 'Gasoline', 2, 300, 'Fast and exhilarating', '911.png'),
(19, 'Convertible', 1, 'BMW', '4 Series', 2021, 500, 'Gasoline', 4, 150, 'Stylish and open-air', '4series.png'),
(20, 'Van', 1, 'Dodge', 'Grand Caravan', 2017, 25000, 'Gasoline', 7, 70, 'Spacious and versatile', 'caravan.jp2'),
(21, 'Truck', 0, 'Toyota', 'Tacoma', 2020, 10000, 'Gasoline', 5, 90, 'Rugged and dependable', 'tacoma.png');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `ID` int(4) NOT NULL,
  `days` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`ID`, `days`) VALUES
(1, 1),
(12, 13),
(13, 3),
(15, 5),
(16, 7),
(18, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
