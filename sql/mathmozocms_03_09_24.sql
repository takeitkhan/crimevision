-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 03, 2024 at 04:28 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mathmozocms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_menus`
--

CREATE TABLE `admin_menus` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_menus`
--

INSERT INTO `admin_menus` (`id`, `name`, `created_at`, `updated_at`) VALUES
(3, 'Footer navigation', '2023-12-07 01:40:44', '2023-12-07 01:40:44'),
(4, 'Explore Menu', '2024-01-09 02:08:25', '2024-01-09 02:08:25'),
(5, 'Header Menu', '2024-08-16 06:40:21', '2024-08-16 06:40:21');

-- --------------------------------------------------------

--
-- Table structure for table `admin_menu_items`
--

CREATE TABLE `admin_menu_items` (
  `id` bigint UNSIGNED NOT NULL,
  `label` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` bigint UNSIGNED NOT NULL DEFAULT '0',
  `sort` int NOT NULL DEFAULT '0',
  `class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu` bigint UNSIGNED NOT NULL,
  `depth` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_menu_items`
--

INSERT INTO `admin_menu_items` (`id`, `label`, `link`, `parent`, `sort`, `class`, `menu`, `depth`, `created_at`, `updated_at`) VALUES
(9, 'Home', '#', 0, 0, NULL, 3, 0, '2023-12-07 01:41:01', '2023-12-07 01:41:04'),
(10, 'About', '#', 0, 1, NULL, 3, 0, '2023-12-07 01:44:01', '2023-12-07 01:44:01'),
(11, 'FAQ', '#', 0, 2, NULL, 3, 0, '2023-12-07 01:45:58', '2023-12-07 01:45:58'),
(12, 'Farhad', '/page/about-us', 0, 3, NULL, 3, 0, '2023-12-22 02:14:43', '2023-12-22 02:15:04'),
(13, '<div className=\"topic\">Donate</div>', '/donate', 0, 0, 'donate', 4, 0, '2024-01-09 02:08:51', '2024-02-11 07:02:34'),
(14, '<div className=\"topic\">Home</div>', '/', 0, 1, 'home', 4, 0, '2024-01-09 02:09:18', '2024-01-09 02:26:14'),
(15, '<div className=\"topic\">About Us</div>', '/page/about-us', 0, 2, 'about', 4, 0, '2024-01-09 02:09:59', '2024-01-09 02:35:13'),
(16, '<div className=\"topic\">News & Article</div>', '/page/news', 0, 3, 'news', 4, 0, '2024-01-09 02:10:09', '2024-01-09 03:02:02'),
(17, '<div className=\"topic\">Gallery</div>', '/page/gallery', 0, 4, 'gallery', 4, 0, '2024-01-09 02:10:13', '2024-01-09 02:50:18'),
(18, '<div className=\"topic\">R & D</div><div className=\"subtopic\">Research & Development</div>', '/page/research-development', 0, 5, 'rnd', 4, 0, '2024-01-09 02:10:17', '2024-01-09 03:00:56'),
(19, '<div className=\"topic\">Astro Shop</div>', '/page/astro-shop', 0, 6, 'shop', 4, 0, '2024-01-09 02:10:21', '2024-01-09 02:51:08'),
(20, '<div className=\"topic\">Astronomy</div><div className=\"subtopic\">Astronomy in mother language</div>', '/page/astronomy', 0, 7, 'astronomy', 4, 0, '2024-01-09 02:10:25', '2024-01-09 02:36:53'),
(21, '<div className=\"topic\">Workshop</div><div className=\"subtopic\">Workshop & Resources</div>', '/page/workshop', 0, 8, 'workshop', 4, 0, '2024-01-09 02:10:31', '2024-01-09 02:52:07'),
(22, '<div className=\"topic\">Contact Us</div>', '/page/contact', 0, 9, 'contact', 4, 0, '2024-01-09 02:14:11', '2024-01-09 02:27:21'),
(26, 'সর্বশেষ', 'latests', 0, 0, NULL, 5, 0, '2024-08-16 06:57:03', '2024-08-20 10:12:01'),
(27, 'জাতীয়', 'national', 0, 1, NULL, 5, 0, '2024-08-16 06:57:11', '2024-08-16 06:57:43'),
(28, 'রাজনীতি', 'politics', 0, 2, NULL, 5, 0, '2024-08-16 06:57:43', '2024-08-16 06:57:54'),
(29, 'বাংলাদেশ', 'bangladesh', 0, 3, NULL, 5, 0, '2024-08-16 06:57:54', '2024-08-16 06:57:54'),
(30, 'আন্তর্জাতিক', 'international', 0, 4, NULL, 5, 0, '2024-08-16 06:58:21', '2024-08-16 06:58:21'),
(31, 'খেলা', 'sports', 0, 5, NULL, 5, 0, '2024-08-16 06:58:48', '2024-08-20 10:11:54'),
(32, 'বিনোদন', 'entertainment', 0, 6, NULL, 5, 0, '2024-08-16 06:58:57', '2024-08-16 06:58:57'),
(33, 'অর্থনীতি', 'economics', 0, 7, NULL, 5, 0, '2024-08-16 06:59:17', '2024-08-16 06:59:17'),
(34, 'লাইফস্টাইল', 'life-style', 0, 8, NULL, 5, 0, '2024-08-16 06:59:32', '2024-08-16 06:59:32'),
(35, 'ভিডিও', 'video', 0, 9, NULL, 5, 0, '2024-08-16 07:00:35', '2024-08-16 07:00:35'),
(36, 'অন্যান্য', 'others', 0, 10, NULL, 5, 0, '2024-08-16 07:00:46', '2024-08-16 07:00:46');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint UNSIGNED NOT NULL,
  `property_id` int NOT NULL,
  `property_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `property_type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `property_type_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_cat_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `child_cat_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_in` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `check_out` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_paid_amount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `booking_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `how_many_guest` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alternate_phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_notes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `property_information` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `statuses` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  `taxonomy_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'publish',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `image`, `parent_id`, `taxonomy_type`, `is_status`, `created_at`, `updated_at`) VALUES
(6, 'জাতীয়', 'national', 'জাতীয়', NULL, NULL, 'category', 'publish', '2024-08-16 04:00:18', '2024-08-16 04:00:18'),
(7, 'রাজনীতি', 'politics', 'রাজনীতি', NULL, NULL, 'category', 'publish', '2024-08-16 04:00:44', '2024-08-16 04:05:17'),
(8, 'বাংলাদেশ', 'bangladesh', 'বাংলাদেশ', NULL, NULL, 'category', 'publish', '2024-08-16 04:01:05', '2024-08-16 04:01:05'),
(9, 'আন্তর্জাতিক', 'international', 'আন্তর্জাতিক', NULL, NULL, 'category', 'publish', '2024-08-16 04:01:59', '2024-08-16 04:01:59'),
(10, 'খেলাধুলা', 'sports', 'খেলাধুলা', NULL, NULL, 'category', 'publish', '2024-08-16 04:02:32', '2024-08-16 04:02:32'),
(11, 'বিনোদন', 'Entertainment', 'বিনোদন', NULL, NULL, 'category', 'publish', '2024-08-16 04:04:12', '2024-08-16 04:04:12'),
(12, 'লাইফ স্টাইল', 'life-style', 'লাইফ স্টাইল', NULL, NULL, 'category', 'publish', '2024-08-16 04:06:06', '2024-08-16 04:06:06'),
(13, 'অর্থনীতি', 'economics', 'অর্থনীতি', NULL, NULL, 'category', 'publish', '2024-08-17 12:13:58', '2024-08-17 12:14:29'),
(14, 'cricket', 'cricket', 'cricket', NULL, 10, 'category', 'publish', '2024-09-03 08:07:24', '2024-09-03 08:07:24');

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` int NOT NULL,
  `division_id` int NOT NULL,
  `name` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `bn_name` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` decimal(10,7) NOT NULL,
  `lon` decimal(10,7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `division_id`, `name`, `bn_name`, `lat`, `lon`) VALUES
(1, 3, 'Dhaka', 'ঢাকা', '23.7115253', '90.4111451'),
(2, 3, 'Faridpur', 'ফরিদপুর', '23.6070822', '89.8429406'),
(3, 3, 'Gazipur', 'গাজীপুর', '24.0022858', '90.4264283'),
(4, 3, 'Gopalganj', 'গোপালগঞ্জ', '23.0050857', '89.8266059'),
(5, 8, 'Jamalpur', 'জামালপুর', '24.9375330', '89.9377750'),
(6, 3, 'Kishoreganj', 'কিশোরগঞ্জ', '24.4449370', '90.7765750'),
(7, 3, 'Madaripur', 'মাদারীপুর', '23.1641020', '90.1896805'),
(8, 3, 'Manikganj', 'মানিকগঞ্জ', '23.8644000', '90.0047000'),
(9, 3, 'Munshiganj', 'মুন্সিগঞ্জ', '23.5422000', '90.5305000'),
(10, 8, 'Mymensingh', 'ময়মনসিংহ', '24.7471000', '90.4203000'),
(11, 3, 'Narayanganj', 'নারায়াণগঞ্জ', '23.6336600', '90.4964820'),
(12, 3, 'Narsingdi', 'নরসিংদী', '23.9322330', '90.7154100'),
(13, 8, 'Netrokona', 'নেত্রকোণা', '24.8709550', '90.7278870'),
(14, 3, 'Rajbari', 'রাজবাড়ি', '23.7574305', '89.6444665'),
(15, 3, 'Shariatpur', 'শরীয়তপুর', '23.2423000', '90.4348000'),
(16, 8, 'Sherpur', 'শেরপুর', '25.0204933', '90.0152966'),
(17, 3, 'Tangail', 'টাঙ্গাইল', '24.2513000', '89.9167000'),
(18, 5, 'Bogura', 'বগুড়া', '24.8465228', '89.3777550'),
(19, 5, 'Joypurhat', 'জয়পুরহাট', '25.0968000', '89.0227000'),
(20, 5, 'Naogaon', 'নওগাঁ', '24.7936000', '88.9318000'),
(21, 5, 'Natore', 'নাটোর', '24.4205560', '89.0002820'),
(22, 5, 'Nawabganj', 'নবাবগঞ্জ', '24.5965034', '88.2775122'),
(23, 5, 'Pabna', 'পাবনা', '23.9985240', '89.2336450'),
(24, 5, 'Rajshahi', 'রাজশাহী', '24.3745000', '88.6042000'),
(25, 5, 'Sirajgonj', 'সিরাজগঞ্জ', '24.4533978', '89.7006815'),
(26, 6, 'Dinajpur', 'দিনাজপুর', '25.6217061', '88.6354504'),
(27, 6, 'Gaibandha', 'গাইবান্ধা', '25.3287510', '89.5280880'),
(28, 6, 'Kurigram', 'কুড়িগ্রাম', '25.8054450', '89.6361740'),
(29, 6, 'Lalmonirhat', 'লালমনিরহাট', '25.9923000', '89.2847000'),
(30, 6, 'Nilphamari', 'নীলফামারী', '25.9317940', '88.8560060'),
(31, 6, 'Panchagarh', 'পঞ্চগড়', '26.3411000', '88.5541606'),
(32, 6, 'Rangpur', 'রংপুর', '25.7558096', '89.2444620'),
(33, 6, 'Thakurgaon', 'ঠাকুরগাঁও', '26.0336945', '88.4616834'),
(34, 1, 'Barguna', 'বরগুনা', '22.0953000', '90.1121000'),
(35, 1, 'Barishal', 'বরিশাল', '22.7010000', '90.3535000'),
(36, 1, 'Bhola', 'ভোলা', '22.6859230', '90.6481790'),
(37, 1, 'Jhalokati', 'ঝালকাঠি', '22.6406000', '90.1987000'),
(38, 1, 'Patuakhali', 'পটুয়াখালী', '22.3596316', '90.3298712'),
(39, 1, 'Pirojpur', 'পিরোজপুর', '22.5841000', '89.9720000'),
(40, 2, 'Bandarban', 'বান্দরবান', '22.1953275', '92.2183773'),
(41, 2, 'Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', '23.9570904', '91.1119286'),
(42, 2, 'Chandpur', 'চাঁদপুর', '23.2332585', '90.6712912'),
(43, 2, 'Chattogram', 'চট্টগ্রাম', '22.3351090', '91.8340730'),
(44, 2, 'Cumilla', 'কুমিল্লা', '23.4682747', '91.1788135'),
(45, 2, 'Cox\'s Bazar', 'কক্স বাজার', '21.4272000', '92.0058000'),
(46, 2, 'Feni', 'ফেনী', '23.0159000', '91.3976000'),
(47, 2, 'Khagrachari', 'খাগড়াছড়ি', '23.1192850', '91.9846630'),
(48, 2, 'Lakshmipur', 'লক্ষ্মীপুর', '22.9424770', '90.8411840'),
(49, 2, 'Noakhali', 'নোয়াখালী', '22.8695630', '91.0993980'),
(50, 2, 'Rangamati', 'রাঙ্গামাটি', '22.7324000', '92.2985000'),
(51, 7, 'Habiganj', 'হবিগঞ্জ', '24.3749450', '91.4155300'),
(52, 7, 'Maulvibazar', 'মৌলভীবাজার', '24.4829340', '91.7774170'),
(53, 7, 'Sunamganj', 'সুনামগঞ্জ', '25.0658042', '91.3950115'),
(54, 7, 'Sylhet', 'সিলেট', '24.8897956', '91.8697894'),
(55, 4, 'Bagerhat', 'বাগেরহাট', '22.6515680', '89.7859380'),
(56, 4, 'Chuadanga', 'চুয়াডাঙ্গা', '23.6401961', '88.8418410'),
(57, 4, 'Jashore', 'যশোর', '23.1664300', '89.2081126'),
(58, 4, 'Jhenaidah', 'ঝিনাইদহ', '23.5448176', '89.1539213'),
(59, 4, 'Khulna', 'খুলনা', '22.8157740', '89.5686790'),
(60, 4, 'Kushtia', 'কুষ্টিয়া', '23.9012580', '89.1204820'),
(61, 4, 'Magura', 'মাগুরা', '23.4873370', '89.4199560'),
(62, 4, 'Meherpur', 'মেহেরপুর', '23.7622130', '88.6318210'),
(63, 4, 'Narail', 'নড়াইল', '23.1725340', '89.5126720'),
(64, 4, 'Satkhira', 'সাতক্ষীরা', '22.7185000', '89.0705000');

-- --------------------------------------------------------

--
-- Table structure for table `divisions`
--

CREATE TABLE `divisions` (
  `id` int NOT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `bn_name` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lat` decimal(9,6) NOT NULL,
  `lon` decimal(9,6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `divisions`
--

INSERT INTO `divisions` (`id`, `name`, `bn_name`, `lat`, `lon`) VALUES
(1, 'Barishal', 'বরিশাল', '22.701002', '90.353451'),
(2, 'Chattogram', 'চট্টগ্রাম', '22.356851', '91.783182'),
(3, 'Dhaka', 'ঢাকা', '23.810332', '90.412518'),
(4, 'Khulna', 'খুলনা', '22.845641', '89.540328'),
(5, 'Rajshahi', 'রাজশাহী', '24.363589', '88.624135'),
(6, 'Rangpur', 'রংপুর', '25.743892', '89.275227'),
(7, 'Sylhet', 'সিলেট', '24.894929', '91.868706'),
(8, 'Mymensingh', 'ময়মনসিংহ', '24.747149', '90.420273');

-- --------------------------------------------------------

--
-- Table structure for table `donations`
--

CREATE TABLE `donations` (
  `id` bigint UNSIGNED NOT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `frontend_settings`
--

CREATE TABLE `frontend_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_type` enum('Text','Textarea','Select','Richeditor','Number','Checkbox','Gallery','Media') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_group` enum('General','Homepage','Header Section','Footer Section') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_order` int DEFAULT NULL,
  `meta_placeholder` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `frontend_settings`
--

INSERT INTO `frontend_settings` (`id`, `meta_title`, `meta_name`, `meta_value`, `meta_type`, `meta_group`, `meta_order`, `meta_placeholder`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 'Website Name', 'site_name', 'Telescope Bangladesh', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:28', '2023-12-21 08:51:18'),
(2, 'About website', 'site_description', 'Telescope Bangladesh', 'Textarea', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-12-21 08:51:18'),
(3, 'Favicon', 'site_faviconimg_id', NULL, 'Media', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-22 05:41:20'),
(4, 'Logo', 'site_logoimg_id', '64', 'Media', 'Header Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-12-21 08:27:24'),
(5, 'Footer Content', 'footer_content', 'Plot # Cha-2, Flat # 2nd Floor, Girza Road, Dhaka 1212', 'Richeditor', 'Footer Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-12-10 00:19:28'),
(6, 'Facebook', 'facebook_url', 'https://www.facebook.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:32:54'),
(9, 'Youtube', 'youtube_url', NULL, 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2021-12-28 15:06:33'),
(10, 'Phone', 'company_phone', '16227', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-03-18 03:05:04'),
(11, 'Email', 'company_email', 'info@mail.com', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-03-18 03:05:04'),
(14, 'Header Menu Name', 'header_menu_name', 'Explore Menu', 'Text', 'Header Section', NULL, NULL, NULL, NULL, '2024-01-09 02:15:43'),
(17, 'Office location', 'office_location', 'Dhaka', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-03-18 03:24:36'),
(22, 'Home Vision Donate', 'home_vision_donate', '<h5>DONATION FOR OBSERVETORY & GROUP DEVELOPMENT</h5>\r\n<div className=\"info-sub mb-5\">By purchasing you help us develop new features!</div>', 'Textarea', 'Homepage', 2, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:42:34'),
(23, 'Home Vision Donate Link', 'home_vision_donate_link', 'http://localhost/farhad/astro/donate', 'Text', 'Homepage', 2, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:44:13'),
(29, 'Mobile Menu Name', 'mobile_menu_name', 'Mobile Primary Menu', 'Text', 'Header Section', NULL, NULL, NULL, NULL, '2021-12-28 15:22:50'),
(30, 'Bottom Footer Content', 'bottom_footer_content', 'Copyright © All rights reserved by&nbsp;Telescope Bangladesh', 'Richeditor', 'Footer Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2024-01-09 03:25:24'),
(35, 'Instagram', 'instagram_url', 'https://www.instagram.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:32:54'),
(36, 'Twitter', 'twitter_url', 'https://twitter.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:32:54'),
(37, 'LinkedIn', 'linkedin_url', 'https://www.linkedin.com/', 'Text', 'General', NULL, NULL, NULL, '2021-12-27 17:33:29', '2023-08-24 00:44:23'),
(38, 'Vision Speech', 'vision_speech', '<p>\r\n                With more context, I can craft a compelling speech that captures the essence of Telescope Bangladesh and\r\n                its vision for the future of astronomy in Bangladesh\r\n            </p>\r\n            <p>We hope you will have as much fun exploring the universe with our app as do we while making it :)</p>', 'Textarea', 'Homepage', 1, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:47:13'),
(39, 'Partners', 'partners', '72,73,74,75,72,73,74,75', 'Text', 'Homepage', 1, NULL, '', '2021-12-27 17:33:29', '2023-12-21 11:01:57'),
(40, 'Vision Speech Section Title', 'vision_speech_section_title', '<h3>Our Vision :: Telescope Bangladesh</h3>', 'Text', 'Homepage', 1, NULL, '', '2021-12-27 17:33:29', '2023-08-22 05:47:08'),
(41, 'Footer Logo', 'footer_logo', '77', 'Media', 'Footer Section', NULL, NULL, NULL, '2021-12-27 17:33:29', '2024-01-09 03:26:00');

-- --------------------------------------------------------

--
-- Table structure for table `medias`
--

CREATE TABLE `medias` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `original_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_extension` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_directory` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `medias`
--

INSERT INTO `medias` (`id`, `user_id`, `original_name`, `filename`, `file_type`, `file_size`, `file_extension`, `file_directory`, `created_at`, `updated_at`) VALUES
(65, 1, '1.jpg', '1-1703168937.jpg', 'image/jpeg', '382762', 'jpg', '/public/uploads/images/', '2023-12-21 08:28:57', '2023-12-21 08:28:57'),
(66, 1, '2.jpg', '2-1703168937.jpg', 'image/jpeg', '264489', 'jpg', '/public/uploads/images/', '2023-12-21 08:28:57', '2023-12-21 08:28:57'),
(67, 1, '3.jpg', '3-1703168937.jpg', 'image/jpeg', '261744', 'jpg', '/public/uploads/images/', '2023-12-21 08:28:57', '2023-12-21 08:28:57'),
(68, 1, 'background_model.jpg', 'backgroundmodel-1703170647.jpg', 'image/jpeg', '169367', 'jpg', '/public/uploads/images/', '2023-12-21 08:57:27', '2023-12-21 08:57:27'),
(70, 1, '84356.jpg', '84356-1703175787.jpg', 'image/jpeg', '591503', 'jpg', '/public/uploads/images/', '2023-12-21 10:23:07', '2023-12-21 10:23:07'),
(80, 1, 'image-838729-1723801610.jpg', 'image-838729-1723801610-1723829145.jpg', 'image/jpeg', '43801', 'jpg', '/public/uploads/images/', '2024-08-16 11:25:45', '2024-08-16 11:25:45'),
(81, 1, 'image-839190-1723888972.jpg', 'image-839190-1723888972-1723917229.jpg', 'image/jpeg', '211362', 'jpg', '/public/uploads/images/', '2024-08-17 11:53:49', '2024-08-17 11:53:49'),
(82, 1, 'image-839307-1723914368.jpg', 'image-839307-1723914368-1723917412.jpg', 'image/jpeg', '99450', 'jpg', '/public/uploads/images/', '2024-08-17 11:56:52', '2024-08-17 11:56:52'),
(83, 1, 'image-839293-1723913002.jpg', 'image-839293-1723913002-1723917555.jpg', 'image/jpeg', '129692', 'jpg', '/public/uploads/images/', '2024-08-17 11:59:15', '2024-08-17 11:59:15'),
(84, 1, 'image-839308-1723916522.jpeg', 'image-839308-1723916522-1723917708.jpeg', 'image/jpeg', '53425', 'jpeg', '/public/uploads/images/', '2024-08-17 12:01:48', '2024-08-17 12:01:48'),
(85, 1, 'image-839235-1723901563.jpg', 'image-839235-1723901563-1723917769.jpg', 'image/jpeg', '212453', 'jpg', '/public/uploads/images/', '2024-08-17 12:02:49', '2024-08-17 12:02:49'),
(86, 1, 'image-839163-1723883602.jpg', 'image-839163-1723883602-1723917860.jpg', 'image/jpeg', '173061', 'jpg', '/public/uploads/images/', '2024-08-17 12:04:20', '2024-08-17 12:04:20'),
(87, 1, 'image-839223-1723897413.jpg', 'image-839223-1723897413-1723917993.jpg', 'image/jpeg', '101142', 'jpg', '/public/uploads/images/', '2024-08-17 12:06:33', '2024-08-17 12:06:33'),
(88, 1, 'image-839202-1723891900.jpg', 'image-839202-1723891900-1723918068.jpg', 'image/jpeg', '67349', 'jpg', '/public/uploads/images/', '2024-08-17 12:07:48', '2024-08-17 12:07:48'),
(89, 1, 'image-839127-1723870232.jpg', 'image-839127-1723870232-1723918157.jpg', 'image/jpeg', '17999', 'jpg', '/public/uploads/images/', '2024-08-17 12:09:17', '2024-08-17 12:09:17'),
(90, 1, 'image-839301-1723913640.jpg', 'image-839301-1723913640-1723918252.jpg', 'image/jpeg', '129792', 'jpg', '/public/uploads/images/', '2024-08-17 12:10:52', '2024-08-17 12:10:52'),
(91, 1, 'image-836345-1723308657.jpg', 'image-836345-1723308657-1723918694.jpg', 'image/jpeg', '82664', 'jpg', '/public/uploads/images/', '2024-08-17 12:18:14', '2024-08-17 12:18:14'),
(92, 1, 'image-839272-1723910767.jpg', 'image-839272-1723910767-1723920300.jpg', 'image/jpeg', '90714', 'jpg', '/public/uploads/images/', '2024-08-17 12:45:00', '2024-08-17 12:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2017_08_11_073824_create_menus_wp_table', 1),
(4, '2017_08_11_074006_create_menu_items_wp_table', 1),
(5, '2021_01_30_151530_create_medias_table', 1),
(6, '2021_02_08_225954_create_terms_table', 1),
(7, '2021_02_08_230957_create_posts_table', 1),
(8, '2021_02_09_195757_create_term_taxonomy_table', 1),
(9, '2021_02_09_203137_create_categories_table', 1),
(10, '2021_02_10_101053_create_frontend_settings', 1),
(11, '2021_07_14_054017_create_roles_table', 1),
(12, '2021_07_14_054544_create_role_users_table', 1),
(13, '2021_07_14_061139_create_route_groups_table', 1),
(14, '2021_07_14_061140_create_route_lists_table', 1),
(15, '2021_07_14_061655_create_route_list_roles_table', 1),
(18, '2021_12_24_235004_create_posts_field_table', 2),
(19, '2021_12_24_235502_create_posts_meta_table', 2),
(20, '2022_01_07_020302_create_post_custom_fields_table', 3),
(21, '2021_01_30_145239_create_product_categories_table', 4),
(22, '2021_01_30_150031_create_products_table', 4),
(23, '2021_02_17_222859_create_product_attributes_table', 4),
(24, '2021_02_17_223045_create_product_attribute_values_table', 4),
(25, '2023_12_09_180527_create_bookings_table', 5),
(26, '2024_02_12_183728_create_donations_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_by` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `featured_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'page',
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_keyword` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `meta_author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `template` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `is_status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'publish',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `sub_title`, `order_by`, `slug`, `description`, `featured_image`, `term_type`, `category_id`, `meta_title`, `meta_description`, `meta_keyword`, `meta_author`, `template`, `is_status`, `author`, `created_at`, `updated_at`) VALUES
(24, 'বিএনপির সর্বোচ্চ নীতি নির্ধারণী ফোরামে হাফিজ ও জাহিদ', NULL, NULL, 'বিএনপির-সর্বোচ্চ-নীতি-নির্ধারণী-ফোরামে-হাফিজ-ও-জাহিদ', '<p style=\"padding-bottom: 0px; line-height: 24px; text-align: justify;\"><font color=\"#000000\" face=\"SolaimanLipi\"><span style=\"font-size: 18px;\">বিএনপির ভাইস চেয়ারম্যান মেজর (অব.) হাফিজউদ্দিন আহমেদ ও আরেক ভাইস চেয়ারম্যান অধ্যাপক ডা. এজেডএম জাহিদ হোসেনকে পদোন্নতি দেওয়া হয়েছে। তাদেরকে বিএনপির সর্বোচ্চ নীতি নির্ধারণী ফোরাম জাতীয় স্থায়ী কমিটির সদস্য করা হয়েছে।&nbsp;</span></font></p><p style=\"padding-bottom: 0px; line-height: 24px; text-align: justify;\">রাজধানীর নয়াপল্টনে শুক্রবার দুপুরে এক সংবাদ সম্মেলনে বিএনপির সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী এ তথ্য জানান।</p><p style=\"padding-bottom: 0px; line-height: 24px; text-align: justify;\">রিজভী বলেন, দলের সবার সর্বসম্মতিক্রমে মেজর (অব.) হাফিজ ও জাহিদ হোসেনকে বিএনপির সর্বোচ্চ নীতি নির্ধারণী ফোরামের সদস্য করা হয়েছে।&nbsp;</p><p style=\"padding-bottom: 0px; line-height: 24px; text-align: justify;\">বিএনপির চেয়ারপারসন খালেদা জিয়া, ভারপ্রাপ্ত চেয়ারম্যান তারেক রহমানসহ স্থায়ী কমিটিতে রয়েছেন ড. খন্দকার মোশাররফ, ব্যারিস্টার জমির উদ্দিন সরকার, ব্যারিস্টার রফিকুল ইসলাম মিয়া, মির্জা আব্বাস, গয়েশ্বর চন্দ্র রায়, ড. আব্দুল মঈন খান, মহাসচিব মির্জা ফখরুল ইসলাম আলমগীর, নজরুল ইসলাম খান, আমির খসরু মাহমুদ চৌধুরী, সালাহউদ্দিন আহমেদ, বেগম সেলিমা রহমান, ইকবাল হাসান মাহমুদ টুকু।&nbsp;</p><p style=\"padding-bottom: 0px; line-height: 24px; text-align: justify;\">তাদের মধ্যে ব্যারিস্টার জমির ও ব্যারিস্টার রফিক বয়োঃবৃদ্ধ হওয়ায় স্থায়ী কমিটির বৈঠকগুলোতে অংশ নিতে পারেন না।&nbsp;</p><p style=\"padding-bottom: 0px; line-height: 24px; text-align: justify;\">নতুন করে মেজর (অব.) হাফিজ উদ্দিন আহমেদ (বীর বিক্রম) অধ্যাপক ডা. এজেডএম জাহিদ হোসেনকে যুক্ত করা হয়েছে।</p>', '80', 'news', '13,10,8,7,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-16 04:13:43', '2024-08-20 08:25:46'),
(25, 'বিশ্ববাজারে সোনার দামে রেকর্ড', NULL, NULL, 'বিশ্ববাজারে-সোনার-দামে-রেকর্ড', '<p>অতীতের সব রেকর্ড ভেঙে সোনার দামে নতুন ইতিহাস সৃষ্টি হয়েছে। বিশ্ববাজারে প্রথমবারের মতো এক আউন্স সোনার দাম ২ হাজার ৫০০ ডলার ছুঁয়েছে।</p><p>তথ্য পর্যালোচনায় গত সপ্তাহের শুরুতে প্রতি আউন্স সোনার দাম ছিল ২ হাজার ৪২৮ দশমিক শূন্য ৭ ডলার। সেখান থেকে বেড়ে প্রতি আউন্স সোনার দাম ২ হাজার ৫০৭ দশমিক ৮২ ডলারে থিতু হয় সপ্তাহ শেষে।</p><p>অর্থাৎ সপ্তাহের ব্যবধানে প্রতি আউন্স সোনার দাম বেড়েছে ৭৯ দশমিক ৭৫ ডলার বা ৩ দশমিক ১৮ শতাংশ। এর মধ্যে সপ্তাহে শেষ কার্য দিবসেই প্রতি আউন্স সোনার দাম বেড়েছে ৫০ দশমিক ৪৮ ডলার বা ২ দশমিক শূন্য ৫ শতাংশ।</p><p>বর্তমানে দেশের বাজারে রেকর্ড দামেই সোনা বিক্রি হচ্ছে। নতুন করে দাম বাড়ানো হলে অতীতের সব রেকর্ড ভেঙে আরও উচ্চতায় উঠবে সোনার দাম।</p><p>দেশের বাজারে সোনার দাম নির্ধারণের দায়িত্ব পালন করে বাংলাদেশ জুয়েলার্স সমিতি (বাজুস)। সংগঠনটির পক্ষ থেকে সোনার দাম বাড়ানো বা কমানোর সিদ্ধান্ত নেয় বাজুস স্ট্যান্ডিং কমিটি অন প্রাইসিং অ্যান্ড প্রাইস মনিটরিং কমিটি। এই কমিটির এক সদস্য বলেন, বিশ্ববাজারে সোনার দাম যে হারে বেড়েছে, তাতে দেশের বাজারে সোনার দাম বাড়ানোর কোনো বিকল্প নেই।</p><p>দাম বাড়ানোর বিষয়ে বাংলাদেশ জুয়েলার্স সমিতির (বাজুস) স্ট্যান্ডিং কমিটি অন প্রাইসিং অ্যান্ড প্রাইস মনিটরিং কমিটির এক সদস্য বলেন, আন্তর্জাতিক বাজার এবং স্থানীয় বাজারে পাকা সোনার দাম পর্যালোচনা করে বাজুস স্ট্যান্ডিং কমিটি অন প্রাইসিং অ্যান্ড প্রাইস মনিটরিং কমিটি সোনার দাম বাড়ানোর সিদ্ধান্ত নেবে। সোনার দাম কতটা বাড়ানো হবে সেই সিদ্ধান্ত কমিটি নেবে। দেশের বাজারে সোনার দাম নির্ধারণ করার পর এরই মধ্যে বিশ্ববাজারে প্রতি আউন্স সোনার দাম ১০০ ডলার বেড়ে গেছে। স্বাভাবিকভাবেই এখন দেশের বাজারে সোনার দাম বাড়বে।</p>', '81', 'news', '13,10,9,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:54:15', '2024-08-20 08:25:53'),
(26, 'স্বৈরশাসনের অবসান ঘটিয়েছে ছাত্রসমাজ: দাগনভূঞায় আবদুল আউয়াল মিন্টু', NULL, NULL, 'স্বৈরশাসনের-অবসান-ঘটিয়েছে-ছাত্রসমাজ-দাগনভূঞায়-আবদুল-আউয়াল', '<p>বিএনপির ভাইস চেয়ারম্যান আবদুল আউয়াল মিন্টু বলেছেন, দীর্ঘ প্রায় দেড় যুগ ধরে বসে স্বৈরশাসনের অবসান ঘটিয়েছে ছাত্রসমাজ। তাদের আত্মত্যাগের বিনিময়ে স্বৈরাচারমুক্ত হলো বাংলাদেশ। আজ ছাত্ররা ইতিহাসের মহানায়ক। ছাত্র-জনতার আন্দোলনের রোষানলে পড়ে স্বৈরশাসক হাসিনা দেশ ছেড়ে পালিয়েছে।</p><p>বৈষম্যবিরোধী ছাত্র আন্দোলনে অংশ নিয়ে দাগনভূঞাসহ ফেনীতে নিহত ৮ ছাত্রের পরিবারকে শুক্রবার দিনব্যাপী বিএনপির পক্ষ থেকে আর্থিক অনুদান প্রদানকালে তিনি এসব কথা বলেন।&nbsp;</p><p>তিনি সকালে প্রথমে দাগনভূঞা উপজেলার জায়লস্কর ইউনিয়নের নিহত সারোয়ার জাহান মাসুদের কবর জিয়ারত করেন ও তার পিতার হাতে অনুদানের অর্থ প্রদান করেন। পরে ফেনী সদর উপজেলার পাঁচগাছিয়া এলাকার নিহত ওয়াকিল আহমেদ শিহাব, সাইদুল ইসলাম, সোনাগাজী উপজেলার জাকির হোসেন শাকিব, মাহমুদুল হাসান, ফুলগাজী উপজেলার ইশতিয়াক আহমেদ ও পরশুরাম উপজেলার ইকরাম হোসেনের কবর জিয়ারত ও পরিবারের সদস্যদের সঙ্গে কথা বলে পরিবারকে সহায়তা প্রদান করেন।</p><p>এ সময় বিএনপি চেয়ারপারসনের উপদেষ্টা অধ্যাপক জয়নাল আবেদীন ভিপি, বিএনপির চট্টগ্রাম বিভাগীয় সাংগঠনিক সম্পাদক মাহবুবুর রহমান শামীম, সহ-প্রশিক্ষণ বিষয়ক সম্পাদক রাহেনা আক্তার রানু, নির্বাহী কমিটির সদস্য শাহেনা আক্তার শানু, আবু তালেব, কৃষক দলের শাহজান মিয়া সম্রাট, ফেনী জেলা বিএনপির সচিব আলাল উদ্দিন আলাল, গাজী হাবিবুল্লাহ মানিক, আনোয়ার পাটোয়ারী, দাগনভূঞা উপজেলা বিএনপির সভাপতি আকবর হোসেন প্রমুখ উপস্থিত ছিলেন।</p>', '82', 'news', '10,8,7,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:56:57', '2024-08-20 08:25:38'),
(27, 'মোহাম্মদপুর ও আদাবরে আ.লীগ নেতাকর্মীরা পলাতক', NULL, NULL, 'মোহাম্মদপুর-ও-আদাবরে-আ.লীগ-নেতাকর্মীরা-পলাতক', '<p>৫ আগস্ট শেখ হাসিনা সরকারের পতনের পর রাজধানীর মোহাম্মদপুর ও আদাবর এলাকার আওয়ামী লীগ, যুবলীগ, ছাত্রলীগসহ অঙ্গসংগঠনের সব নেতাকর্মী পলাতক রয়েছেন।&nbsp;</p><p>কোটা আন্দোলনকে কেন্দ্র করে ১৮ জুলাই মোহাম্মদপুরে ত্রিমুখী সংঘর্ষে রণক্ষেত্রে পরিণত হয়। এ সময় পুলিশের পাশাপাশি স্থানীয় আওয়ামী লীগ, যুবলীগ ও ছাত্রলীগসহ বিভিন্ন অঙ্গসংগঠনের নেতাকর্মীদের আগ্নেয়াস্ত্র হাতে শিক্ষার্থীদের ওপর গুলি ছুড়তে দেখা যায়। তাদের গুলিতে ১৮-২০ জুলাই ৩ দিনে অন্তত ১৫ শিক্ষার্থী নিহত হন।&nbsp;</p><p>পরে ৩ ও ৪ আগস্টেও মোহাম্মদপুর বাসস্ট্যান্ড এলাকায় তারা গুলি চালিয়ে শিক্ষার্থীদের হত্যা করে। পরদিন হাসিনার পতনের পর থেকে সবাই আত্মগোপনে চলে গেছেন বলে স্থানীয়রা জানান।</p><p>জানা যায়, মোহাম্মদপুরের বাসস্ট্যান্ড এলাকায় পুলিশের সঙ্গে আন্দোলনকারীদের ওপর হামলায় সরাসরি জড়িত ছিলেন ঢাকা-১৩ আসনের সাবেক সংসদ-সদস্য জাহাঙ্গীর কবির নানকের ব্যক্তিগত সহকারী মাসুদুর রহমান বিপ্লব, আওয়ামী লীগের সভাপতি আব্দুস সাত্তার, সাবেক কাউন্সিলর তারেকুজ্জামান রাজিব, ঢাকা উত্তর সিটি করপোরেশনের ৩৩ নম্বর ওয়ার্ড কাউন্সিলর আসিফ আহমেদ, ৩৪ নম্বর ওয়ার্ড কাউন্সিলর শেখ মোহাম্মদ খোকন, আওয়ামী লীগ নেতা আবু সায়েম শাহীন, যুবলীগের আহ্বায়ক বিপ্লব, ছাত্রলীগ সভাপতি নাইমুল ইসলাম রাসেল, আদাবর থানা আওয়ামী লীগ নেতা সালাউদ্দিন শামীম, তুহিন, হিটু, আলমগীরসহ প্রায় পাঁচ শতাধিক নেতাকর্মী। যাদের সবার হাতেই ভারী আগ্নেয়াস্ত্র ছিল।&nbsp;</p><p>শিক্ষার্থীদের ওপর হামলা ও তাদের গুলি করে হত্যার বেশ কয়েকটি ভিডিও যুগান্তরের হাতে সংরক্ষিত রয়েছে। ভিডিওতে দেখা যায়, সাদা জুতা, কালো প্যান্ট ও কালো টিশার্ট এবং মাথায় হেলমেট পরা এক ব্যক্তি বাসস্ট্যান্ডের সামনে ময়ূর ভিলা এলাকায় শিক্ষার্থীদের ওপর গুলি করে। তার সঙ্গে আরও ১৫-২০ জন আগ্নেয়াস্ত্র হাতে শিক্ষার্থীদের ওপর গুলি ছোড়ে। এ সময় এক কিশোর ঘটনাস্থলেই মাটিতে লুটিয়ে পড়ে। ভিডিও দেখে কয়েকজন শনাক্ত করেছেন, কালো টিশার্ট ও প্যান্ট পরা ব্যক্তিটি সাবেক কাউন্সিলর তারেকুজ্জামান রাজিব। হামলার কিছুক্ষণ আগে তারা সবাই প্রায় একই পোশাকে মুখে কাপড় বেঁধে পুলিশের আশপাশে অবস্থান নেয়।&nbsp;</p><p>এছাড়া আরেকটি ভিডিওতে দেখা যায়, পরনে কালো প্যান্ট ও কালো টিশার্ট এবং মাথায় হেলমেট পরা আরেক যুবক বেশ কয়েকজন সহযোগীকে নিয়ে ছাত্রদের ওপর গুলি করছে। তার ভিডিও দেখে কয়েকজন প্রত্যক্ষদর্শী জানান, তিনি জাহাঙ্গীর কবির নানকের ব্যক্তিগত সহকারী মাসুদুর রহমান বিপ্লব। এছাড়া আদাবরের যুবলীগ নেতা তুহিন, হিটু, আলমগীরের নেতৃত্বে ৫০-৬০ জনের একটি দল শিক্ষার্থীদের গুলি করে হত্যা করে।</p><p>সরেজমিন মঙ্গলবার মোহাম্মদপুর ও আদাবরের বিভিন্ন এলাকা ঘুরে আওয়ামী লীগ নেতাকর্মীদের কোনো খোঁজ পাওয়া যায়নি। এছাড়া ঢাকা মহানগর উত্তর আওয়ামী লীগের সভাপতি শেখ বজলুর রহমানের মোহাম্মদপুরের বাসায় গিয়ে তাকেও পাওয়া যায়নি। এ সময় তার ব্যক্তিগত মোবাইল ফোনে কল করে নম্বরটি বন্ধ পাওয়া যায়।&nbsp;</p><p>এছাড়া ঢাকা-১৩ আসনের সাবেক সংসদ-সদস্য জাহাঙ্গীর কবির নানকের মোবাইল ফোনও বন্ধ পাওয়া যায়। পাশাপাশি মোহাম্মদপুরের আওয়ামী লীগের সভাপতি এমএ সাত্তার, যুবলীগের সাবেক আহ্বায়ক বিপ্লব, সাবেক কাউন্সিলর তারেকুজ্জামান রাজিব, ৩৩ নম্বর ওয়ার্ড কাউন্সিলর আসিফ, ৩৪ নম্বর ওয়ার্ড কাউন্সিলর খোকন, ৩২ নম্বর ওয়ার্ড কাউন্সিলর রাস্টন, ৩০ নম্বর ওয়ার্ড কাউন্সিলর কাশেম, ২৯ নম্বর ওয়ার্ড কাউন্সিলর সলিমুল্লাহ সলু এবং মোহাম্মদপুর ও আদাবর থানা ছাত্রলীগের সভাপতি ও সাধারণ সম্পাদকের বাসায় ও মোবাইল ফোনে তাদের খুঁজে পাওয়া যায়নি।&nbsp;</p>', '83', 'news', '12,10,8,7,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 11:59:25', '2024-08-20 08:26:04'),
(28, 'সাবেক সিনিয়র সচিব শাহ কামাল গ্রেফতার', NULL, NULL, 'সাবেক-সিনিয়র-সচিব-শাহ-কামাল-গ্ৰেফতার', '<p>দুর্যোগ ব্যবস্থাপনা ও ত্রাণ মন্ত্রণালয়ের সাবেক সিনিয়র সচিব শাহ কামালকে গ্ৰেফতার করা হয়েছে। শনিবার রাতে রাজধানীর মহাখালী থেকে ঢাকা মহানগর গোয়েন্দা পুলিশের একটি দল তাকে গ্ৰেফতার করে।</p><p>এর আগে শুক্রবার সাবেক সিনিয়র সচিব শাহ কামালের বাবর রোডের বাসায় ডিএমপির একটি অভিযানে ৩ কোটি ১ লাখ টাকা ও ১০ লাখ টাকা মূল্যমানের বৈদেশিক মুদ্রা উদ্ধার হয়।&nbsp;</p><p>এর ধারাবাহিকতায় শনিবার তাকে মহাখালী থেকে গ্ৰেফতার হয়েছে।</p>', '84', 'news', '12,11,10,7,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:02:01', '2024-08-20 08:26:13'),
(29, 'বিদেশি ফুটবলার ছাড়া লিগ আয়োজনের দাবি', NULL, NULL, 'বিদেশি-ফুটবলার-ছাড়া-লিগ-আয়োজনের-দাবি', '<p>বিশ্বের সব ঘরোয়া ফুটবল লিগেই বাড়তি আকর্ষণ হিসেবে কাজ করেন বিদেশি ফুটবলাররা। লিগের মান বাড়ানোর ক্ষেত্রে বা আন্তর্জাতিক পর্যায়ে লিগের আবেদন তৈরিতে ভূমিকা রাখেন তারা।</p><p>ইউরোপের শীর্ষ লিগগুলোতে যেমন বৃহৎ পরিসরে স্কাউটিংয়ের মাধ্যমে বিশ্বের আনাচে-কানাচে থেকে প্রতিভাবান ফুটবলারদের খুঁজে বের করা হয়। আবার এশিয়ার লিগগুলোতে ইউরোপ ও আফ্রিকার তারকাদের নিয়ে রীতিমত কাড়াকাড়ি চলে।</p><p>বাংলাদেশের লিগে সর্বোচ্চ গোলদাতাদের তালিকায় বরাবরই বিদেশিদের প্রাধান্য থাকে। এছাড়া বিভিন্ন দলের সেরা খেলোয়াড় বেছে নেওয়ার প্রসঙ্গ এলেও বিদেশিরাই এগিয়ে থাকেন।</p>', '85', 'news', '13,12,10,8', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:02:55', '2024-08-17 12:20:19'),
(30, 'সালাউদ্দিন-কিরণের পদত্যাগের দাবিতে বাফুফেতে সাবেক নারী ফুটবলাররা', NULL, NULL, 'সালাউদ্দিনকিরণের-পদত্যাগের-দাবিতে-বাফুফেতে-সাবেক-নারী-ফুটবলাররা', '<p>শেখ হাসিনার পতনের পর দাবি উঠেছে দেশের ক্রীড়াঙ্গন ঢেলে সাজানোর। সেই সঙ্গে দাবি উঠেছে বাংলাদেশ ফুটবল ফেডারেশনের গুরুত্বপূর্ণ চেয়ার আগলে রাখা কাজী সালাউদ্দিন ও নারী ফুটবলের প্রধান মাহফুজা আক্তার কিরণের পদত্যাগের। সেই দাবিতেই শনিবার বাফুফে ভবনের সামনে হাজির হয়ে স্লোগান দিয়েছেন সাবেক নারী ফুটবল দলের অধিনায়ক ডালিয়া আক্তার। বাংলাদেশ মহিলা ফুটবল খেলোয়াড় কর্মকর্তাবৃন্দের ব্যানারে এই আন্দোলনে যোগ দেন অনেক নারী।</p><p>অবশ্য বহুদিন ধরেই তাদের পদত্যাগের দাবি জানিয়ে আসছিল বিভিন্ন সংগঠনগুলো। পরে সরকার পতনের পর পদত্যাগ করেন বাফুফের সহসভাপতি সালাম মুর্শেদী। তখন ভাবা হচ্ছিল কাজী সালাউদ্দিন ও মাহফুজা আক্তার কিরণও হাঁটতে পারেন একই পথে। তবে সেটি যে হচ্ছে না তা স্পষ্ট করে জানিয়ে দেন কাজী সালাউদ্দিন। সেই সঙ্গে এটাও বলেন, আগামী নির্বাচনেও প্রার্থী হবেন তিনি।</p><p>তার এমন ঘোষণার পর ফের আন্দোলনে নেমেছে নারী ফুটবলাররা। সালাউদ্দিনের পদত্যাগের দাবি তুলে বাংলাদেশ ফুটবল দলের সাবেক অধিনায়ক ডালিয়া বলেন, ‘খেলোয়াড়েরা প্রতিবাদ, সমালোচনা করলেই বাদ দেয়া হয়েছে। খেলোয়াড়দের খাবার নিয়ে অভিযোগ ছিল অনেক। তিনি (কিরণ) যখন প্রথম স্টেডিয়ামে আসেন তখন রিকশায় এসেছিলেন এখন দামি গাড়িতে আসছেন। সময়ের সঙ্গে মানুষের জীবনযাত্রা পরিবর্তন হতে পারে। তার যতটা উন্নয়ন হয়েছে, ফুটবল ও ফুটবলারদের কি হয়েছে?</p><p>কিরণ ফিফার সদস্য ছিলেন। এখন এএফসিতেও আছেন, বাফুফের নারী উইংয়ের প্রধান। কিরণের উত্থান নিয়েও প্রশ্ন তুলেছেন ডানা, ‘নারী ফুটবল নিয়ে আমি ২০০৩-৪ সালের দিকে বাচ্চু ভাইয়ের সঙ্গে কাজ শুরু করি। ২০০৮ সালে আমি সালাউদ্দিনের প্যানেলের সঙ্গে ছিলাম। এএফসিতে আমার নাম পাঠানোর কথা ছিল, সেখানে উড়ে এসে জুড়ে বসা কিরণকে অদৃশ্য কারণে পাঠিয়েছে সালাউদ্দিন।</p>', '86', 'news', '11,10,8,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:04:25', '2024-08-17 12:20:35'),
(31, 'কবে অবসর নেবেন, জানালেন অশ্বিন', NULL, NULL, 'কবে-অবসর-নেবেন-জানালেন-অশ্বিন', '<p>ভারতের এই সময়ের অন্যতম সেরা স্পিনার রবিচন্দ্রন অশ্বিন। সাদা পোশাকে এরই মধ্যে ১০০ টেস্ট খেলা হয়ে গেছে তার। ক্যারিয়ারের এই পর্যায়ে এসে নিজের অবসর ভাবনার কথা জানিয়েছেন তিনি।</p><p>টেস্টে এখন অশ্বিনের উইকেট সংখ্যা ৫১৬। ভারতের হয়ে লাল বলের ক্রিকেটে সবচেয়ে বেশি উইকেটের মালিক আরেক স্পিনার অনিল কুম্বলে। এই রেকর্ড ভাঙার সুযোগ রয়েছে তার সামনে।</p><p>কিন্তু অশ্বিন সে রেকর্ড ভাঙতে চান না। সাফ বলে দিলেন, ‘আমি ওই রেকর্ড ভাঙতে চাই না। অনিল কুম্বলের ভক্ত আমি। আমি যদি ৬১৮টা উইকেট পেয়ে যাই, সেই ম্যাচেই অবসর নিয়ে নেব। ওটাই আমার শেষ ম্যাচ হবে।</p>', '87', 'news', '12,10,9,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:06:39', '2024-08-17 12:20:47'),
(32, 'ভ্রুর সৌন্দর্য বাড়াতে যা করবেন', NULL, NULL, 'ভ্রুর-সৌন্দর্য-বাড়াতে-যা-করবেন', '<p>বাহ্যিক সৌন্দর্যের অনেকটাই নির্ভর করে চোখের ওপর। আর চোখের সাজ নির্ভর করে ভ্রু-দ্বয়ের ওপর। চেহারার সঙ্গে ভ্রু’র আকৃতি ঠিকঠাক না হলে মুখের ধরনই বদলে যায়।&nbsp;</p><p>ভ্রু প্লাক করাতে অনেকে পার্লারে যান, আবার অনেকে বাড়িতে নিজেই করে নেন। তবে আগে জানতে হবে আপনার মুখের আকৃতির সঙ্গে কী ধরনের ভ্রু ভালো লাগবে। সব মুখে সরু বা পাতলা ভ্রু মানায় না। অনেকেই আছেন যারা পাতলা ভ্রু নিয়ে চিন্তিত। তবে রাতে ঘুমোনোর আগে একটু যত্ন নিলেই কিন্তু সুন্দর এক জোড়া ভ্রু পেতে পারেন আপনি। ভ্রু সুন্দর করার পদ্ধতি সম্পর্কে চলুন জেনে নিই—</p><p>১) ঘুমোনোর আগে অবশ্যই মেকআপ তুলে ভালো করে ফেসওয়াশ দিয়ে মুখ ধুতে হবে। অনেক সময়ই ভ্রুর অংশটি বাদ পড়ে যায়। তাই ভালো করে ভ্রুর অংশটি পরিষ্কার করতে ভুলবেন না।</p><p>২) নিয়মিত ভ্রুর যত্ন নিতে হবে। গোসল করার আগে হালকা কোনো তেল লাগাতে পারেন। তা হলে বেশ উজ্জ্বল দেখাবে। ক্যাস্টার অয়েল মালিশ করলে ভ্রুর ঘনত্ব বাড়ে। তবে রাতারাতি কাজ হবে না, ধৈর্য ধরতে হবে।</p><p>৩) চুল আঁচড়ানোর সঙ্গে সঙ্গে ভ্রু ব্রাশ করে নিতে পারেন।</p><p>৪) চোখের মেকআপ শুরুর আগে হবে ভ্রুর মেকআপ। প্রথমেই ময়শ্চারাইজ়ার লাগিয়ে নেবেন। মিনিট পাঁচেক পরে নিজের চুলের রঙ অনুযায়ী আইশ্যাডো আই ব্রো ব্রাশে নিয়ে ভ্রুতে বুলিয়ে ভ্রুর শেপ ঠিক করতে হবে। সময় না থাকলে আই ব্রো জেল ব্যবহার করতে পারেন।</p><p>৫) ভ্রুর ঘনত্ব বৃদ্ধি করতে মাঝেমধ্যেই দুই আঙুল দিয়ে ভ্রু জোড়া মালিশ করতে হবে। দিনে দুই থেকে তিন বার করতে পারলে ওই অংশে রক্তসঞ্চালন ভালো হয়, ফলে ভ্রুর ঘনত্বও বাড়ে।</p>', '88', 'news', '13,12,11,10', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:07:55', '2024-08-20 08:15:38'),
(33, 'নখের আশপাশে চামড়া উঠছে, কী করবেন?', NULL, NULL, 'নখের-আশপাশে-চামড়া-উঠছে-কী-করবেন', '<p>সাধারণত ঘন ঘন নখের আশপাশের চামড়া ওঠার যন্ত্রণায় আমরা অনেকেই ভুগে থাকি। এ সমস্যা যেমন যন্ত্রণাদায়ক, তেমনই বিরক্তি ও চিন্তারও বিষয়। অনেকেই আবার এই চামড়া ছেঁড়ার চেষ্টা করে থাকেন। আর তখনই ঘটে বিপদ। চামড়ার সঙ্গে বের হয় রক্তও। যন্ত্রণা তখন আরও তীব্র হয়ে ওঠে। এ ক্ষেত্রে ক্ষত স্থানে ব্যথার সঙ্গে সংক্রমণের কারণ হতে পারে। তাই এ বিষয়েও আপনাকে যত্নবান হতে হবে।&nbsp;</p><p>নখের আশপাশে চামড়া ওঠার একটি প্রাথমিক কারণ হলো— সংক্রমণ। ব্যাকটেরিয়া বা ছত্রাকের সংক্রমণের কারণে ফোলা, লালভাব এবং চামড়া ওঠার সমস্যা হয়। এটি প্রায়ই ঘটে যখন ত্বকে একটি ফাটল বা ছিঁড়ে যায়, যা প্যাথোজেনগুলোকে প্রবেশ করতে দেয়।&nbsp;</p><p>বিশেষজ্ঞরা বলছেন, আঙুলের অগ্রভাগে শরীরের অনেক গুরুত্বপূর্ণ নার্ভ থাকে। ফলে নখের আশপাশ থেকে ওঠা চামড়া ছিঁড়লে বিপদ ঘটতে পারে। নখের কাছে চামড়া ওঠার পেছনে অনেক কারণ থাকতে পারে, যা সহজেই এড়ানো যায়। এ সমস্যা প্রায়শই ব্যথা ও জ্বালা করে, যা সাধারণত দৈনন্দিন কাজকর্ম ও সামগ্রিক স্বাস্থ্যকে উল্লেখযোগ্যভাবে প্রভাবিত করতে পারে।&nbsp;</p><p>নখের কোনায় এ রকম বাড়তি চামড়া ওঠার সমস্যাকে বলা হয় \'হ্যাংনেইলস\'। এ সমস্যার পেছনে নানান কারণ রয়েছে। এর মধ্যে একটি হলো শুষ্ক ত্বক।&nbsp;</p><p>নখ কামড়ানো বা কিউটিকল তোলা নখের চারপাশের ত্বকের ক্ষতি করতে পারে। যার ফলে চামড়া ওঠা ও সংক্রমণ হতে পারে। এই বদভ্যাস শুধু ত্বকের ক্ষতি করে না, ব্যাকটেরিয়া বা ছত্রাকের বৃদ্ধির ঝুঁকিও বাড়ায়। কিছু স্বাস্থ্যগত সমস্যা, যেমন— একজিমা বা সোরিয়াসিস নখের চারপাশে ত্বকের সমস্যা সৃষ্টি করতে পারে। এই দীর্ঘস্থায়ী অবস্থার কারণে প্রায়ই শুষ্ক ত্বক হয়ে যায়। নখের চারপাশে শুষ্ক, ফাটা ত্বক ঠাণ্ডা আবহাওয়া, কম আর্দ্রতা বা ঘন ঘন হাত ধোয়ার মতো কারণগুলোর ফল হতে পারে। ত্বক যখন তার আর্দ্রতা হারায়, তখন এই সমস্যা দেখা যায় এবং জ্বালাপোড়ার সৃষ্টি হয়।&nbsp;</p><p>সবসময় ত্বকের আর্দ্রতা বজায় রাখুন। আপনার ত্বককে হাইড্রেটেড রাখা খুবই গুরুত্বপূর্ণ। শুষ্কতা রোধ করতে নিয়মিত নখের চারপাশে একটি সমৃদ্ধ, ময়শ্চারাইজিং লোশন বা কিউটিকল তেল লাগান। শিয়া বাটার বা ভিটামিন ই’র মতো ইমোলিয়েন্ট রয়েছে, এমন পণ্য বেছে নিন।&nbsp;</p><p>এ সমস্যা সমাধানে অ্যান্টি-ইনফ্লেমেটরি ক্রিম ব্যবহার করুন। অ্যান্টি-ইনফ্লেমেটরি ক্রিম বা মলম আপনার ব্যথা ও ফোলা কমাতে সাহায্য করতে পারে। হাইড্রোকর্টিসোন বা অনুরূপ উপাদান ধারণকারী পণ্য বেছে নিন।&nbsp;</p><p>এ ছাড়া উষ্ণ জলে আঙুল ভিজিয়ে রাখুন। এতে আপনার হাত গরম, সাবান জলে ভিজিয়ে রাখলে তা ফোলা কমাতে এবং ত্বককে নরম করতে সাহায্য করে। অতিরিক্ত উপকারের জন্য এতে কয়েক ফোঁটা অ্যান্টিব্যাকটেরিয়াল বা অ্যান্টিফাঙ্গাল অ্যাসেনশিয়াল অয়েল, যেমন টি ট্রি অয়েল যোগ করুন।&nbsp;</p><p>আপনি সবসময় নখ পরিষ্কার রাখুন এবং ছোট রাখুন। সঙ্গে কামড়ানো বা আঁচড়ানো এড়িয়ে চলুন। সংক্রমণ রোধ করতে আপনার নখ এবং কিউটিকল নিয়মিত পরিষ্কার করুন। এ ছাড়া যদি এ সমস্যা দীর্ঘদিন ধরে অব্যাহত থাকে তা হলে একজন চর্মরোগ বিশেষজ্ঞের দ্বারস্থ হন।</p><p>বি.দ্র: প্রতিবেদনটি সচেতনতার উদ্দেশ্যে লেখা হয়েছে। কোনো সিদ্ধান্ত নেওয়ার আগে চিকিৎসকের পরামর্শ নিন।</p>', '89', 'news', '12,11,10,8', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:09:24', '2024-08-20 08:15:28'),
(34, 'আন্দোলন নিয়ে তাসরিফ খানকে হুমকি, যা বললেন সোলায়মান সুখন', NULL, NULL, 'আন্দোলন-নিয়ে-তাসরিফ-খানকে-হুমকি-যা-বললেন-সোলায়মান-সুখন', '<p>কোটা সংস্কার আন্দোলনের সময় ছাত্র-জনতার পক্ষে সরব ছিলেন তাসরিফ খান। তার গান ‘রাজার রাজ্যে সবাই গোলাম’ সামাজিক মাধ্যমে আন্দোলনকারীদের মধ্যে জনপ্রিয়তা পায়।</p><p>আন্দোলনে সমর্থন দেওয়ার কারণে সে সময় বিভিন্ন মহল থেকে চাপও এসেছে তাসরিফের ওপর। সম্প্রতি এক ফেসবুক পোস্টে কারও নাম না নিয়েই সেসব কথা শেয়ার করেছেন তিনি। পোস্টে একজন সিনিয়র ইনফ্লুয়েন্সারের বিরুদ্ধে অভিযোগ এনেছেন।</p><p>তবে যেহেতু তাসরিফ পোস্টে কারও নাম উল্লেখ করেননি, তাই নিশ্চিত হওয়া যায়নি তিনি কার দিকে ইঙ্গিত করেছেন। তবে নেটিজনদের একাংশ ধারণা করছেন ওই সিনিয়র ইনফ্লুয়েন্সার সোলায়মান সুখন।</p><p>সামাজিক মাধ্যমে তার বিষয়ে এমন খবর চাউর হওয়ার পর সোলায়মান সুখন গণমাধ্যমকে বলেছেন, ‘আমি কেন একজনকে হুমকি-ধমকি দিতে যাব। আমার এই বয়সে কি এটা যায়। আমি একটা চাকরি করি। অনেক চাপ আছে। বাচ্চারা অনেক কিছু লিখছে। লিখুক। আমার আসলে আর কিছু বলার নেই।</p>', '90', 'news', '11,10,8,7,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:11:00', '2024-08-20 08:15:47'),
(35, 'পুরোদমে ব্যাংক ও বন্দর চালুর নির্দেশ', NULL, NULL, 'পুরোদমে-ব্যাংক-ও-বন্দর-চালুর-নির্দেশ', '<p>অর্থনীতিকে সচল করতে বাংলাদেশ ব্যাংক, রাষ্ট্রায়ত্ত ব্যাংক ও আর্থিক প্রতিষ্ঠানসহ বন্দর পুরোদমে চালু রাখার নির্দেশ দিয়েছেন অর্থ ও পরিকল্পনা মন্ত্রণালয়ের উপদেষ্টা ড. সালেহউদ্দিন আহমেদ। একই সঙ্গে লক্ষ্যমাত্রা অনুযায়ী রাজস্ব আহরণে মনিটরিং করতে বলা হয়েছে জাতীয় রাজস্ব বোর্ডকে (এনবিআর)। পাশাপাশি উন্নয়ন কর্মকাণ্ডের গতিশীল এবং মূল্যস্ফীতি নিয়ন্ত্রণে প্রয়োজনীয় পদক্ষেপ নেওয়ারও নির্দেশ দেওয়া হয়েছে।&nbsp;</p><p>শনিবার এক বৈঠকে অর্থ ও পরিকল্পনা মন্ত্রণালয়ের উপদেষ্টা এসব নির্দেশনা দিয়েছেন অর্থ বিভাগ, আর্থিক প্রতিষ্ঠান বিভাগ, পরিকল্পনা ও অর্থনৈতিক সম্পর্ক বিভাগের সচিব এবং এনবিআর চেয়ারম্যানকে।&nbsp;</p><p>এর আগে সচিবালয়ে নিজ দপ্তরে প্রবেশের সময় সাংবাদিকদের প্রশ্নের জবাবে অর্থ ও পরিকল্পনা মন্ত্রণালয়ের উপদেষ্টা বলেন, ব্যাংক খাত সংস্কার করা হবে। তবে বাংলাদেশ ব্যাংকের কার্যক্রম পুরোপুরি চালু হোক, এরপর সংস্কারের প্রসঙ্গ আসবে। এখনই সংস্কার শুরু হলে মূল কার্যক্রম বন্ধ হয়ে যাবে।&nbsp;</p><p>সাপ্তাহিক ছুটির দিন অর্থ ও পরিকল্পনা মন্ত্রণালয়ের উপদেষ্টা চলে আসেন অফিসে। এ সময় অর্থ সচিব ড. মোহাম্মদ খায়েরুজ্জামান মজুমদার ফুলেল শুভেচ্ছায় তাকে বরণ করেন। এরপর তিনি দেশের অর্থনীতির পরিস্থিতি নিয়ে টানা ৩ ঘণ্টা বৈঠক করেন সংশ্লিষ্ট বিভাগের সচিবদের সঙ্গে। ওই বৈঠকে অর্থ সচিবসহ আর্থিক প্রতিষ্ঠান বিভাগের সচিব মো. আবদুর রহমান খান, পরিকল্পনা বিভাগের সিনিয়র সচিব সত্যজিত কর্মকার, অর্থনৈতিক সম্পর্ক বিভাগের সচিব মো. শাহরিয়ার কাদের খান, এনবিআরের চেয়ারম্যান উপস্থিত ছিলেন।</p><p>বৈঠকে আগামী দিনগুলোতে অর্থনীতি সচল রাখতে স্বল্প মেয়াদের কাজের বিষয়গুলো উপদেষ্টার কাছে তুলে ধরেন সংশ্লিষ্ট বিভাগের সচিবরা। বৈঠক শেষে জানতে চাইলে ড. সালেহউদ্দিন আহমেদ সাংবাদিকদের বলেন, অর্থনীতির গতি ফেরাতে বাংলাদেশ ব্যাংকসহ সব ব্যাংক ও পুঁজিবাজার সচল ও প্রতিষ্ঠানগুলোর স্বাভাবিক কার্যক্রম বজায় রাখা হবে। এসব প্রতিষ্ঠানে কে আছেন বা চলে গেছেন সেটি আমাদের এখন বিবেচ্য বিষয় নয়। সংশ্লিষ্ট প্রতিষ্ঠানগুলোর আইন ও নিয়মনীতি অনুযায়ী যারা আছেন তারা কাজ করবেন। মানুষের আস্থা ফেরাতে ব্যাংকের কার্যক্রম চলবে। ব্যবসা-বাণিজ্য সচল রাখতে বন্দর কার্যক্রম চালু থাকবে। এসব কার্যক্রমের মাধ্যমে অর্থনীতি সচল রাখা হবে।&nbsp;</p><p>তিনি আরও বলেন, স্বাভাবিকভাবে কাজ করলে সমস্যা হবে না। কেউ অতিরিক্ত কিছু বিগত সময় করে থাকলে সে বিষয়ে আইনগত ব্যবস্থা নেওয়া হবে। বৈঠকের আলোচনা প্রসঙ্গে তিনি বলেন, ল’ অ্যান্ড অর্ডারসহ অতিদ্রুত বিষয়গুলো নিয়ে আলোচনা করা হয়েছে। কিছু বিশেষ বিষয় আছে দীর্ঘ মেয়াদে করা হবে।&nbsp;</p><p>জাতীয় রাজস্ব বোর্ডের (এনবিআর) চেয়ারম্যান পদত্যাগ করবেন এমন শোনা যাচ্ছে- এ প্রসঙ্গে অর্থ ও পরিকল্পনা মন্ত্রণালয়ের উপদেষ্টা বলেন, না এমন কিছু নয়।</p><p>রাজস্ব আদায়ে এনবিআরকে যে লক্ষ্যমাত্রা দেওয়া হয়েছে সেটি আদায়ের ব্যাপারে বলা হয়েছে। এ বিষয়ে তিনি তদারকি (চেয়ারম্যান) করবেন।</p><p>ব্যাংকপাড়ায় অরাজকতা সৃষ্টি হয়েছে- ব্যাংকের ডিজি ও এমডিদের নিরাপত্তা বিষয়ে জানতে চাইলে তিনি বলেন, কেউ হয়তো পদত্যাগ করছে। তবে যারা আছে তারা নিজেদের নিরাপত্তা ব্যবস্থা করেই অফিসে আসবে। জীবনের ঝুঁকি নিয়ে অফিসে আসার জন্য কাউকে বলা হয়নি। তারা জীবনের নিরাপত্তা না পায় সে ঝুঁকি আপনি বা আমি কেউ নিতে পারব না।&nbsp;</p><p>পুলিশের অনুপস্থিতিকে অর্থনীতি সচলের বাধা কিনা প্রশ্নের জবাবে অর্থ উপদেষ্টা বলেন, না, মূলত একটি পরিস্থিতিতে অনেকে চাকরি অব্যাহতি দিয়েছে, অনুপস্থিত আছে। তবে প্রতিটি ঘটনার তদন্ত করে ব্যবস্থা নেওয়া হবে। পুলিশের ভয় পাওয়ার কিছু নেই।&nbsp;</p><p>এর আগে নিজ দপ্তরে প্রবেশের সময় সাংবাদিকদের সঙ্গে কথা বলেছেন অর্থ ও পরিকল্পনা মন্ত্রণালয়ের উপদেষ্টা। এ সময় তিনি বলেন, দেশ কঠিন পরিস্থিতির মুখে পড়েছে। এ মুহূর্তে মূল কাজ হলো আইনশৃঙ্খলা পুনরুদ্ধার করা। আইনশৃঙ্খলা মানে শুধু রাস্তাঘাটের আইনশৃঙ্খলা নয়, বরং ব্যাংক পুরোপুরি চালু করা, বন্দরগুলো অনেকাংশে অচল সেগুলো চালু করা। এ ছাড়া সামষ্টিক অর্থনীতিতে যেসব চ্যালেঞ্জ আছে, যেমন মূল্যস্ফীতি, সেগুলো তাৎক্ষণিকভাবে মোকাবিলার চেষ্টা করা হবে। অর্থনীতি মন্থর হতে পারে, কিন্তু থমকে গেলে পুনরায় চালু করতে অনেক সময় লেগে যায়। সুবিধা হলো বাংলাদেশের মানুষের অফুরন্ত কর্মস্পৃহা আছে। গুটিকয়েক মানুষ ছাড়া বেশিরভাগ মানুষই কাজে যোগ দেবেন।</p><p>সালেহউদ্দিন আহমেদ বলেন, এই সরকারের খুব বেশি দিন ক্ষমতায় থাকার ইচ্ছা নেই। ‘ভবিষ্যৎ সরকারের জন্য আমরা মসৃণ পথ তৈরি করে যেতে চাই। সেজন্য সাংবাদিকদের সহযোগিতা দরকার। আমাদের কর্মোদ্যোগী মানুষ দরকার। শুধু নির্দেশনা পেলে কাজ হয়ে যাবে, এমন হলে চলবে না।’ সাংবাদিকদের উদ্দেশে তিনি বলেন, ভুলত্রুটি হলে সমালোচনা করবেন, কিন্তু অপ্রয়োজনীয় সমালোচনা না করার আহ্বান জানান তিনি।</p><p>লাইনচ্যুত অর্থনীতিকে লাইনে আনতে কত সময় লাগবে, এমন প্রশ্নের জবাবে সালেহউদ্দিন আহমেদ বলেন, ‘আমার মনে হয় না মৌলিক কাজগুলো করতে বেশি সময় লাগবে। অর্থনৈতিক কার্যক্রম ছিল, একেবারে লাইনচ্যুত হয়ে যায়নি। বরং গতি হারিয়ে ফেলেছিল। আমরা গতি বৃদ্ধি করব।’&nbsp;</p><p>এখন বড় চ্যালেঞ্জ মূল্যস্ফীতি। সে বিষয়ে দৃষ্টি আকর্ষণ করা হলে তিনি বলেন, সামষ্টিক অর্থনীতি ছাড়াও উন্নয়ন কৌশলে ভুল ছিল। মানুষ সামগ্রিকভাবে উন্নয়নের সুফল পায়নি। প্রবৃদ্ধি হয়েছে, কিন্তু তার ফল কে পেয়েছে, কাদের কাছে টাকা গেছে, সেটাই মূল বিষয়। সরকার চায়, সমতাভিত্তিক ও ন্যায্য প্রবৃদ্ধি নিশ্চিত করা। সব মানুষের জীবন-জীবিকার বিষয়ে যথাসাধ্য চেষ্টা করা হবে। সদ্য পদত্যাগী গভর্নরের আমলে দেশের অনেক ব্যাংকে কেলেঙ্কারি হয়েছে। কিন্তু তার পদত্যাগপত্র গ্রহণ করা হলে কি তিনি জবাবদিহির আওতা থেকে বেরিয়ে যাবেন, সাংবাদিকদের এমন প্রশ্নের জবাবে অর্থ উপদেষ্টা বলেন, গভর্নরের পদ সংবেদনশীল। তিনি পদত্যাগপত্র দিয়েছেন, এ বিষয়ে আগামীকালের বৈঠকে সিদ্ধান্ত হবে।&nbsp;</p><p>সালেহউদ্দিন আহমেদ আরও বলেন, বাংলাদেশ ব্যাংকের আইন বা দেশের যে কোনো আইন যথেষ্ট আন্তর্জাতিকমানের। কিন্তু তা মানা হয় না। যাদের মানানোর কথা তারা সেটা করেননি। যাদের মানার কথা, তারাও মানেননি। অর্থ পাচার প্রসঙ্গে উপদেষ্টা বলেন, ‘এ বিষয়ে আমরা সবাই জানি, এ বিষয়ে তথ্য লাগবে। এর প্রক্রিয়া আছে, তা মেনেই এসব করতে হবে।</p>', '91', 'news', '13,10,8,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:13:21', '2024-08-20 08:16:25'),
(36, '‘গণহত্যা’র বিচার দাবিতে বিভিন্ন স্থানে বিএনপির দোয়া', NULL, '1', 'গণহত্যার-বিচার-দাবিতে-বিভিন্ন-স্থানে-বিএনপির-দোয়া', '<p>বৈষম্যবিরোধী ছাত্র আন্দোলনে নিহত ছাত্র-জনতাকে স্মরণ এবং আহত ছাত্র-জনতাসহ বিএনপি চেয়ারপারসন ও সাবেক প্রধানমন্ত্রী খালেদা জিয়ার দ্রুত সুস্থতা কামনায় দোয়া মাহফিল হয়েছে। বিএনপি ও এর অঙ্গ-সহযোগী সংগঠনের উদ্যোগে শনিবার বিভিন্ন স্থানে এ কর্মসূচি পালন করা হয়।&nbsp;</p><p>কর্মসূচি থেকে বক্তারা ছাত্র-জনতার ওপর গুলি চালিয়ে ‘গণহত্যা’র অভিযোগে শেখ হাসিনাসহ তার দোসরদের বিচার দাবি জানিয়েছেন। যুগান্তর ব্যুরো ও প্রতিদনিধিদের পাঠানো খবর:&nbsp;</p><p>বরিশালে জেলা স্বাধীনতা ফোরামের সভাপতি নুরুল আমিনের সভাপতিত্বে প্রধান অতিথি ছিলেন কেন্দ্রীয় বিএনপির সদস্য আবু নাসের মো. রহমাতুল্লাহ। বক্তব্য দেন জেলা বিএনপির (উত্তর) সভাপতি দেওয়ান মো. শহিদুল্লাহ, বীর মুক্তিযোদ্ধা নুরুল আলম ফরিদ, জেলা বিএনপির সাবেক সাধারণ সম্পাদক আকতার হোসেন মেবুল, নগর বিএনপির সাবেক সদস্য সচিব মীর জাহিদুল কবির জাহিদ প্রমুখ। খুলনায় সভায় সভাপতিত্ব করেন জেলা বিএনপির আহ্বায়ক আমীর এজাজ খান। অনুষ্ঠানটি সঞ্চালনা করেন সদস্য সচিব এসএম মনিরুল হাসান বাপ্পী। উপস্থিত ছিলেন বিজেপির খুলনা মহানগর সভাপতি অ্যাডভোকেট লতিফুর রহমান লাবু, জেলা বিএনপির যুগ্ম-আহ্বায়ক সাইফুর রহমান মিন্টু, মো. রকিব মল্লিক প্রমুখ। সুজানগরে উপজেলা বিএনপির আহ্বায়ক এবিএম তৌফিক হাসানের সভাপতিত্বে ও সদস্য সচিব শেখ আব্দুর রউফের পরিচালনায় সভা হয়েছে। প্রধান অতিথি ছিলেন কেন্দ্রীয় কৃষক দলের সভাপতি কৃষিবিদ হাসান জাফির তুহিন। বক্তব্য দেন পৌর বিএনপির আহ্বায়ক কামাল হোসেন বিশ্বাস,সদস্য সচিব জসিম উদ্দিন বিশ্বাস। মানিকগঞ্জে ডা. আরিফ হোসেন, ডা. শহিদুল আজম, ডা. জিয়াউর রহমান, নার্স সুপারভাইজার আনিছুর রহমান ভূইয়া ও সিনিয়র নার্স শাহিনুর রহমান প্রমুখ বক্তব্য দেন।&nbsp;</p><p>মনপুরায় উপস্থিত ছিলেন উপজেলা বিএনপির ভারপ্রাপ্ত সাধারণ সম্পাদক মফিজুল ইসলাম মিলন মাতাব্বর, সাংগঠনিক সম্পাদক মাহবুবুল আলম শাহীন, বিএনপির সিনিয়র নেতা অহিদুর রহমান। জামালপুরে সমাভেশে সভাপতিত্ব করেন জেলা বিএনপির সহ-সভাপতি লিয়াকত আলী। জেলা বিএনপির সাংগঠনিক সম্পাদক শফিকুল ইসলাম খান সজিবের পরিচালনায় প্রধান অতিথি ছিলেন বিএনপির জাতীয় নির্বাহী কমিটির সহ-সাংগঠনিক সম্পাদক ওয়ারেছ আলী মামুন। বক্তব্য দেন জেলা বিএনপির সিনিয়র যুগ্ম-সাধারণ সম্পাদক শহিদুল হক খান দুলাল, যুগ্ম-সাধারণ সম্পাদক খন্দকার আহসানুজ্জামান রুমেল, সাংগঠনিক সম্পাদক লোকমান আহাম্মেদ খান লোটন।&nbsp;</p><p>বেলকুচিতে সভায় সভাপতিত্ব করেন উপজেলা বিএনপির আহ্বায়ক নুরুল ইসলাম গোলাম। প্রধান অতিথি ছিলেন কেন্দ্রীয় বিএনপির সহপ্রচার সম্পাদক ও বিএনপির রাজশাহী বিভাগীয় সহসাংগঠনিক সম্পাদক আমিরুল ইসলাম খান আলিম। এ সময় জেলা বিএনপির সহ তাঁতবিষয়ক সম্পাদক হাজী আকছেদ আলী, জেলা বিএনপির সদস্য গোলাম আজম উপস্থিত ছিলেন।&nbsp;</p><p>ফটিকছড়িতে সদর বিবিরহাট কেন্দ্রীয় মসজিদে দোয়া মাহফিল হয়েছে। এতে বক্তব্য দেন উত্তর জেলা বিএনপির যুগ্ম আহ্বায়ক&nbsp; ছালাহ উদ্দিন আহমেদ। ভেড়ামারায় অনুষ্ঠানে প্রধান অতিথি ছিলেন কুষ্টিয়া জেলা বিএনপির সিনিয়র যুগ্ম সাধারণ সম্পাদক তৌহিদুল ইসলাম আলম। উপস্থিত ছিলেন বিএনপি নেতা নূরু ভিপি, শফিকুল ইসলাম ডাবলু, সাইফুল ইসলাম রোকন, আলমাস হোসাইন নিউটন, যুবদল নেতা বিপ্লব, ছাত্রদল নেতা প্রত্যাশা করিম প্রমুখ।</p>', '92', 'news', '10,8,7,6', NULL, NULL, NULL, NULL, NULL, 'publish', '1', '2024-08-17 12:45:04', '2024-08-20 08:16:32');

-- --------------------------------------------------------

--
-- Table structure for table `posts_field`
--

CREATE TABLE `posts_field` (
  `id` bigint UNSIGNED NOT NULL,
  `sorting` int DEFAULT NULL,
  `term_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_taxonomy_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_type` enum('text','textarea','richtext','select','single_image','multiple_image','checkbox','radio','colorpicker','addmore','daterangepicker') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_type_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'Title:field_type#value1,value2|',
  `field_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `field_value` varbinary(255) DEFAULT NULL,
  `join_table` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `join_column` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `html_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `html_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_for` enum('Post','Category') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts_field`
--

INSERT INTO `posts_field` (`id`, `sorting`, `term_type`, `term_taxonomy_type`, `field_type`, `field_type_value`, `field_title`, `field_name`, `field_value`, `join_table`, `join_column`, `html_id`, `html_class`, `note`, `field_for`, `created_at`, `updated_at`) VALUES
(7, NULL, 'news', 'category', 'text', NULL, 'Featured', 'featured', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-16 07:14:52', '2024-08-20 09:39:16'),
(8, NULL, 'news', 'category', 'multiple_image', NULL, 'Multiple Image', 'images', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-26 04:43:34', '2024-08-26 04:43:34');

-- --------------------------------------------------------

--
-- Table structure for table `posts_meta`
--

CREATE TABLE `posts_meta` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `meta_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts_meta`
--

INSERT INTO `posts_meta` (`id`, `post_id`, `category_id`, `meta_name`, `meta_value`, `created_at`, `updated_at`) VALUES
(1, 11, NULL, 'custom_url', 'https://www.prothomalo.com/world/europe/42azkj0kjf', '2023-12-21 11:16:05', '2023-12-21 11:16:05'),
(2, 12, NULL, 'custom_url', 'https://www.kalerkantho.com/online/world/2023/12/21/1347638', '2023-12-21 11:16:58', '2023-12-21 11:16:58'),
(3, 13, NULL, 'custom_url', 'https://www.ittefaq.com.bd/671144/স্বতন্ত্র-ও-নৌকার-প্রার্থীর-কর্মীদের-আহত-করার', '2023-12-21 11:17:31', '2023-12-21 11:17:31'),
(5, 14, NULL, 'page_short_description', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', '2024-01-09 02:44:36', '2024-01-09 02:44:36'),
(6, 14, NULL, 'page_sub_title', 'Thank you for your generosity!', '2024-01-09 02:48:23', '2024-01-09 02:48:23'),
(7, 18, NULL, 'page_short_description', 'Gallery Short Description', '2024-01-09 02:50:01', '2024-01-09 02:50:01'),
(8, 18, NULL, 'page_sub_title', 'Gallery Sub Title', '2024-01-09 02:50:01', '2024-01-09 02:50:01'),
(9, 19, NULL, 'page_short_description', 'Astro Shop Short Description', '2024-01-09 02:50:59', '2024-01-09 02:50:59'),
(10, 19, NULL, 'page_sub_title', 'Astro Shop Sub Title', '2024-01-09 02:50:59', '2024-01-09 02:50:59'),
(11, 20, NULL, 'page_short_description', 'Workshop short details', '2024-01-09 02:51:57', '2024-01-09 02:51:57'),
(12, 20, NULL, 'page_sub_title', 'Workshop sub title', '2024-01-09 02:51:57', '2024-01-09 02:51:57'),
(13, 21, NULL, 'page_short_description', 'Contact', '2024-01-09 02:52:34', '2024-01-09 02:52:34'),
(14, 21, NULL, 'page_sub_title', 'Contact', '2024-01-09 02:52:34', '2024-01-09 02:52:34'),
(15, 22, NULL, 'page_short_description', 'Research and Development: short Details', '2024-01-09 03:00:23', '2024-01-09 03:00:23'),
(16, 22, NULL, 'page_sub_title', 'Research & Development sub title', '2024-01-09 03:00:23', '2024-01-09 03:00:23'),
(17, 23, NULL, 'page_short_description', 'News Short Description', '2024-01-09 03:01:44', '2024-01-09 03:01:44'),
(18, 23, NULL, 'page_sub_title', 'News Sub Title', '2024-01-09 03:01:44', '2024-01-09 03:01:44'),
(19, 24, NULL, 'featured', '5', '2024-08-16 08:14:26', '2024-08-20 09:39:32'),
(20, 25, NULL, 'featured', '5', '2024-08-17 11:54:15', '2024-08-26 04:54:14'),
(21, 26, NULL, 'featured', '1', '2024-08-17 11:56:57', '2024-08-17 11:56:57'),
(22, 27, NULL, 'featured', '1', '2024-08-17 11:59:25', '2024-08-17 11:59:25'),
(23, 28, NULL, 'featured', '1', '2024-08-17 12:02:01', '2024-08-17 12:02:01'),
(24, 29, NULL, 'featured', '1', '2024-08-17 12:02:55', '2024-08-17 12:02:55'),
(25, 30, NULL, 'featured', '1', '2024-08-17 12:04:25', '2024-08-17 12:04:25'),
(26, 31, NULL, 'featured', '1', '2024-08-17 12:06:39', '2024-08-17 12:06:39'),
(27, 32, NULL, 'featured', '1', '2024-08-17 12:07:55', '2024-08-17 12:07:55'),
(28, 33, NULL, 'featured', '1', '2024-08-17 12:09:24', '2024-08-17 12:09:24'),
(29, 34, NULL, 'featured', '1', '2024-08-17 12:11:00', '2024-08-17 12:11:00'),
(30, 35, NULL, 'featured', '1', '2024-08-17 12:13:21', '2024-08-17 12:13:21'),
(31, 36, NULL, 'featured', '1', '2024-08-17 12:45:04', '2024-08-17 12:45:04'),
(32, 24, NULL, 'images', '92|91|88', '2024-08-26 04:44:13', '2024-08-26 04:44:13'),
(33, 25, NULL, 'images', '91|90|89|87|84', '2024-08-26 04:54:14', '2024-08-26 04:54:14');

-- --------------------------------------------------------

--
-- Table structure for table `post_custom_fields`
--

CREATE TABLE `post_custom_fields` (
  `id` bigint UNSIGNED NOT NULL,
  `post_id` bigint UNSIGNED DEFAULT NULL,
  `category_id` bigint UNSIGNED DEFAULT NULL,
  `field_file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `field_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `field_for` enum('Post','Category') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_custom_fields`
--

INSERT INTO `post_custom_fields` (`id`, `post_id`, `category_id`, `field_file`, `field_value`, `field_for`, `created_at`, `updated_at`) VALUES
(2, 72, NULL, 'field-management', '{\"location\":\"Dhaka\"}', 'Post', '2023-12-07 03:10:47', '2023-12-07 03:20:13');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('Global','General','Custom') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `code`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Super Admin', 'super_admin', 'Global', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(2, 'Student', 'student', 'General', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(3, 'Regular', 'regular', 'General', '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(4, 'Executive', 'executive', 'General', '2021-12-27 17:33:29', '2021-12-27 17:33:29');

-- --------------------------------------------------------

--
-- Table structure for table `role_users`
--

CREATE TABLE `role_users` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_users`
--

INSERT INTO `role_users` (`id`, `role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-12-27 17:33:29', '2021-12-27 17:33:29'),
(2, 3, 3, '2021-12-29 17:35:59', '2021-12-29 17:35:59'),
(3, 2, 8, '2024-02-12 05:25:59', '2024-02-12 05:25:59'),
(4, 2, 9, '2024-02-12 05:33:50', '2024-02-12 05:33:50');

-- --------------------------------------------------------

--
-- Table structure for table `route_groups`
--

CREATE TABLE `route_groups` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_order` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `route_lists`
--

CREATE TABLE `route_lists` (
  `id` bigint UNSIGNED NOT NULL,
  `route_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `route_parameter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route_group` bigint UNSIGNED DEFAULT NULL,
  `route_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `route_order` int DEFAULT NULL,
  `route_hash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_menu` enum('Yes','No') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_menu_id` int DEFAULT NULL,
  `dashboard_position` set('Left','Right','Top','Bottom') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show_for` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_show_as` enum('Yes','No') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `route_list_roles`
--

CREATE TABLE `route_list_roles` (
  `id` bigint UNSIGNED NOT NULL,
  `role_id` bigint UNSIGNED NOT NULL,
  `route_id` bigint UNSIGNED NOT NULL,
  `show_as` enum('All','User','Permission') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `terms`
--

CREATE TABLE `terms` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `default_field` set('title','slug','description','featured-image') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `terms`
--

INSERT INTO `terms` (`id`, `name`, `slug`, `icon`, `default_field`, `status`, `created_at`, `updated_at`) VALUES
(15, 'News', 'news', 'far fa-newspaper', 'title,slug,description,featured-image', 'publish', '2024-08-16 03:49:53', '2024-08-16 04:08:02');

-- --------------------------------------------------------

--
-- Table structure for table `term_taxonomy`
--

CREATE TABLE `term_taxonomy` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `term_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('publish','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `term_taxonomy`
--

INSERT INTO `term_taxonomy` (`id`, `name`, `slug`, `type`, `term_type`, `status`, `created_at`, `updated_at`) VALUES
(6, 'Category', 'category', NULL, 'News', 'publish', '2024-08-16 03:54:20', '2024-08-16 04:08:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thana` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `district` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `gender` enum('Male','Female') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `religion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `highest_qualification` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `major_subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hobbies` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `membertype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `phone`, `avatar`, `address`, `postcode`, `thana`, `district`, `birthdate`, `gender`, `password`, `transaction_id`, `payment_method`, `full_name`, `facebook`, `religion`, `highest_qualification`, `major_subject`, `hobbies`, `membertype`, `member_status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin@system.com', NULL, '00000000000', NULL, 'N/A', 'N/A', 'N/A', '1', '2021-12-08', NULL, '$2y$10$tWhlq1ma.y/f3Ui30qy8cONc5hCG/6GlaSsWxSowMoc7bZdklk0wC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'G0ItUX9rVyrArXugTzvr9bylKmYSErxJUnRVi5IEo8E2OaCueuIVL9htA6Xc', '2021-12-27 17:33:29', '2022-01-07 17:17:59'),
(3, 'nipunnoushad8@gmail.com', NULL, '01823633792', NULL, '74, East Tejturi Bazar, Tejgoan', '1215', 'Dhaka', NULL, '2022-01-01', NULL, '$2y$10$9zer8D8yLLB0oc3rVJ/VYOkIBKESpSclt613s5IlXe.8cPpz452MW', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-29 17:35:59', '2021-12-31 16:21:34'),
(9, 'benjir.soft701@gmail.com', NULL, '01774211701', NULL, NULL, NULL, NULL, 'Dhaka', '2014-02-12', 'Male', '$2y$10$gvMG2nYSsJN.ZfgQXfbIwOIb3t5E99ciYO8cUub5iMvLLSV/Jxtnm', '353erthg43', 'bKash', 'Benjir ahmed', 'benjir01', 'Islam', 'PHP', 'Laravel', 'Travel', 'Student', 'Active', NULL, '2024-02-12 05:33:50', '2024-02-12 05:33:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_menus`
--
ALTER TABLE `admin_menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_menu_items`
--
ALTER TABLE `admin_menu_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_menu_items_menu_foreign` (`menu`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `divisions`
--
ALTER TABLE `divisions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `frontend_settings`
--
ALTER TABLE `frontend_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medias`
--
ALTER TABLE `medias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_field`
--
ALTER TABLE `posts_field`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts_meta`
--
ALTER TABLE `posts_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_custom_fields`
--
ALTER TABLE `post_custom_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_users`
--
ALTER TABLE `role_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route_groups`
--
ALTER TABLE `route_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route_lists`
--
ALTER TABLE `route_lists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route_list_roles`
--
ALTER TABLE `route_list_roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `terms`
--
ALTER TABLE `terms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `term_taxonomy`
--
ALTER TABLE `term_taxonomy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_menus`
--
ALTER TABLE `admin_menus`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `admin_menu_items`
--
ALTER TABLE `admin_menu_items`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `divisions`
--
ALTER TABLE `divisions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `frontend_settings`
--
ALTER TABLE `frontend_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `medias`
--
ALTER TABLE `medias`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `posts_field`
--
ALTER TABLE `posts_field`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `posts_meta`
--
ALTER TABLE `posts_meta`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `post_custom_fields`
--
ALTER TABLE `post_custom_fields`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role_users`
--
ALTER TABLE `role_users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `route_groups`
--
ALTER TABLE `route_groups`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `route_lists`
--
ALTER TABLE `route_lists`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `route_list_roles`
--
ALTER TABLE `route_list_roles`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `terms`
--
ALTER TABLE `terms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `term_taxonomy`
--
ALTER TABLE `term_taxonomy`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
