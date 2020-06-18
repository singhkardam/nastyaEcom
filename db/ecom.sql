-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2020 at 03:18 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecom`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `roll` varchar(10) NOT NULL DEFAULT '0',
  `datetime` timestamp(5) NOT NULL DEFAULT current_timestamp(5) ON UPDATE current_timestamp(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `pass`, `roll`, `datetime`) VALUES
(1, 'ankit@gmail.com', '$2a$10$HhhYPWzsMCFCWvhje8wpw.jMBiUF6YSWnkqorTsqZG/TDD3uc4dim', '0', '2020-05-11 08:22:28.57301');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `category_name` varchar(50) NOT NULL,
  `datetine` timestamp(5) NOT NULL DEFAULT current_timestamp(5) ON UPDATE current_timestamp(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `datetine`) VALUES
(1, 'bag', '2020-05-11 10:16:24.40450'),
(3, 'laptop', '2020-05-11 10:18:20.36895'),
(4, 'watch', '2020-05-11 10:21:40.85767'),
(5, 'mobile', '2020-05-11 10:21:49.01313'),
(7, 'cap', '2020-05-12 04:15:07.16479');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `category_id` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `qty` int(10) NOT NULL,
  `description` varchar(255) NOT NULL,
  `datetime` timestamp(5) NOT NULL DEFAULT current_timestamp(5) ON UPDATE current_timestamp(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `price`, `imageUrl`, `qty`, `description`, `datetime`) VALUES
(1, 'Black bag', 1, 100, 'https://5.imimg.com/data5/CD/CB/MY-48686190/college-bag-500x500.jpg', 15, 'Black bag Contrary to popular belief, LoBlack bag rem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virg', '2020-05-11 13:26:35.05674'),
(3, 'lenovo laptop', 3, 399, 'https://5.imimg.com/data5/OY/AK/MY-43959882/lenovo-laptop-500x500.jpg', 50, 'lenovo laptop are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem I', '2020-05-11 13:27:03.09750'),
(4, 'dell laptop', 3, 423, 'https://5.imimg.com/data5/BY/HM/QF/SELLER-71120432/portable-dell-laptop-500x500.jpg', 40, 'dell laptop ing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as ', '2020-05-11 13:27:35.71977'),
(5, 'wrist watch', 4, 423, 'https://images-na.ssl-images-amazon.com/images/I/71vKyimxsiL._UX342_.jpg', 11, 'wrist watch It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Cont', '2020-05-11 13:27:54.19574'),
(7, 'nokia mobile', 5, 11720, 'https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/185x185/iKall-Big-Screen-4G-Android-Mobile-K-7-2.jpg', 100, 'nokia mobile model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the lik', '2020-05-11 13:28:09.43261'),
(8, 'red cap', 7, 100, 'https://4.imimg.com/data4/DK/YJ/MY-17036223/plain-red-caps-250x250.jpg', 200, 'red cap It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content ', '2020-05-12 04:16:37.84642');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `mobileNumber` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `roll` varchar(10) NOT NULL DEFAULT '1',
  `datetime` timestamp(5) NOT NULL DEFAULT current_timestamp(5) ON UPDATE current_timestamp(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `mobileNumber`, `email`, `pass`, `roll`, `datetime`) VALUES
(1, 'amit', '8791586596', 'amit@gmail.com', '$2a$10$VrSIeaNUxwac2/8b9y/aiu51a1JrCCvUE7KNMX1cmOLimok277iHS', '1', '2020-05-07 08:15:45.80912'),
(3, 'ankit', '9897481045', 'ankit@gmail.com', '$2a$10$Dnshp99Knzf/i0RzzV5ZG.4x8T4LPSSvqm1mP/HQ8b0e4Kub1.VMm', '1', '2020-05-07 08:16:24.25065'),
(4, 'rohan', '9997451201', 'rohan@gmail.com', '$2a$10$FtCGz07j8pKQq98vNw5yb.BIUHVev7kwatGxoIdtVAyBb.L8t2zWS', '1', '2020-05-07 08:16:56.37659'),
(5, 'vicky', '9974145202', 'vicky@gmail.com', '$2a$10$vMmOHN/nrgxw8mG3Ykq1WOPcNBLGJJknnXdI5bq1N77j8pdjGKip.', '1', '2020-05-07 08:17:23.67327'),
(7, 'naveen', '9974145202', 'naveen@gmail.com', '$2a$10$7PuAIwgYFaVPh0TnxAyip.//iV1g8/75.vQu9uUJOo/Fx0P8NRylq', '1', '2020-05-07 08:17:49.48105'),
(11, 'santosh', '8745120102', 'santosh@gmail.com', '$2a$10$ifkvZAffsyjSZCR2QeTDIeOcjKUH/RxBn9meG7xdqFDHkiWMTKppu', '1', '2020-05-07 08:19:50.31121'),
(13, 'rahul', '8745120102', 'rahul@gmail.com', '$2a$10$4Vix9eO0gjMBxQdZ67jWBuCN7uTIziAZIx8suzLmXBNVfAydUMonm', '1', '2020-05-07 08:24:05.09656'),
(17, 'devesh', '7845120201', 'devesh@gmail.com', '$2a$10$bLonYJMU49IgkxZ9Yupq4.dqRNT1TBH4O.zXr582LhzziGeQdahV.', '1', '2020-05-07 08:26:02.84652'),
(18, 'rajni', '8521024562', 'rajni@gmail.com', '$2a$10$RCBOnfThHE1LFPTcQ9t/cOQSXlrpPGz7gncrr/Yc9sxQt8CP19iJu', '1', '2020-05-07 09:41:41.98587'),
(19, 'ravi', '9878456555', 'ravi@gmail.com', '$2a$10$prnmaD8zenQkKWf08pE7Ku3eB1ylqFWHNeRRNalmLiDBfjdZU1756', '1', '2020-05-07 10:20:12.49064'),
(21, 'krishna', '9878456555', 'krishna@gmail.com', '$2a$10$/lveG22PzBB7zEUwVqm0zewd4wfZVbND/vXwnzyHFRf/rDiIUhVlW', '1', '2020-05-11 09:22:14.86506'),
(22, 'buniyad', '9512364785', 'buniyad@gmail.com', '$2a$10$MaM.V07Ag6yuja.tkmz8L.LrC9PTvApzfOxLxg22a8vkdU4.LxR5K', '1', '2020-05-12 04:32:23.59821'),
(23, 'mithi', '7410258965', 'mithi@gmail.com', '$2a$10$7oLn9cW.tpd1RtRNvAel2.5oKNsnFoq/6Bg8Zv3xVVcwirpDSn6o2', '1', '2020-05-12 04:35:25.32043'),
(24, 'neha', '9874563210', 'neha@gmail.com', '$2a$10$ti3Psk9D21PaucuO65xvfueMeEm9tiyg2kSB6pIAW7X98Y3qk5jka', '1', '2020-05-12 06:06:42.40133');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `product_id` int(10) NOT NULL,
  `datetime` timestamp(5) NOT NULL DEFAULT current_timestamp(5) ON UPDATE current_timestamp(5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`id`, `user_id`, `product_id`, `datetime`) VALUES
(1, 18, 3, '2020-05-12 12:27:25.97249'),
(2, 18, 8, '2020-05-12 12:27:32.06406'),
(3, 18, 5, '2020-05-12 12:27:33.14902'),
(4, 7, 1, '2020-05-12 12:29:11.54123'),
(5, 7, 5, '2020-05-12 12:29:12.57193'),
(6, 7, 8, '2020-05-12 12:29:13.64634'),
(7, 11, 7, '2020-05-12 12:29:41.76502'),
(8, 11, 8, '2020-05-12 12:29:42.61961'),
(9, 3, 1, '2020-05-12 12:30:16.11655'),
(10, 3, 5, '2020-05-12 12:30:17.13922'),
(11, 11, 4, '2020-05-13 07:00:50.12653'),
(12, 11, 3, '2020-05-13 07:00:51.50863'),
(13, 11, 3, '2020-05-13 11:01:18.14677');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `category` (`category_name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
