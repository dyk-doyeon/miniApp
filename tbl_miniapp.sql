-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 28, 2022 at 02:21 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_miniapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_miniapp`
--

CREATE TABLE `tbl_miniapp` (
  `mini_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `id` varchar(100) NOT NULL,
  `biopic` varchar(100) NOT NULL,
  `lbBG` varchar(100) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_miniapp`
--

INSERT INTO `tbl_miniapp` (`mini_id`, `name`, `id`, `biopic`, `lbBG`, `description`) VALUES
(1, 'Cooper', 'cooper', 'cooper.png', 'cooper_bg.jpg', 'The Mini hardtop is sporty, quirky, and full of character, which is the three door type. The Cooper uses 3 Cylinder 12 Valve Twin Power Turbo. It has 134 hp @ 4,500-6,000 output (rpm) and 6-Speed Manual Transmission.\r\n'),
(2, 'Cooper S', 'coopers', 'cooperS.png', 'cooperS_bg.jpg', 'The Mini hardtop is sporty, quirky, and full of character, which is the three door type. The Cooper S uses 4 Cylinder 16 Valve Twin Power Turbo. It has 189 hp @ 5,000-6,000 output (rpm) and 6-Speed Manual Transmission.'),
(3, 'John Cooper Works', 'cooperworks', 'cooperWorks.png', 'cooperWorks_bg.jpg', 'The Mini hardtop is sporty, quirky, and full of character, which is the three door type. The John Cooper Works uses 4 Cylinder 16 Valve Twin Power Turbo. It has 228 hp @ 5,200-6,000 output (rpm) and 6-Speed Manual Transmission.'),
(4, 'Cooper SE', 'cooperse', 'cooperSE.png', 'cooperSE_bg.png', 'The Mini hardtop is sporty, quirky, and full of character, which is the three door type. The Cooper SE uses a Fully Electric Motor. It has 181 hp @ 7,000 output (rpm) and Single Speed Automatic Transmission.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_miniapp`
--
ALTER TABLE `tbl_miniapp`
  ADD PRIMARY KEY (`mini_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_miniapp`
--
ALTER TABLE `tbl_miniapp`
  MODIFY `mini_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
