-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-06-01 23:05:40
-- 服务器版本： 5.7.18-0ubuntu0.16.04.1
-- PHP Version: 7.0.19-1+deb.sury.org~xenial+2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `compition`
--

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `name` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `tel` varchar(11) NOT NULL,
  `process` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`name`, `email`, `tel`, `process`) VALUES
('424', '15029352642@163.com', '15509181857', '31'),
('crazyZhang', '895114856@qq.com', '18700833491', '4'),
('fghfh', '2955290945@qq.com', '13200000000', '31'),
('ghnghn', '2955290945@qq.com', '13201851975', '31'),
('GMA', '919899477@qq.com', '15529342896', '31'),
('HLM', '1981537012@qq.com', '13032961409', '31'),
('juseOne', '1142175080@qq.com', '18829291179', '31'),
('NF', '1193081018@qq.com', '18710307108', '31'),
('NorIns', '18792898826@163.com', '18792898826', '31'),
('orz', 'quxiangxuan@xiyouant.org', '13407175819', '31'),
('pass', '2369470974@qq.com', '18729055434', '41'),
('R9', '779247142@qq.com', '18629418276', '31'),
('special', '1285026304@qq.com', '18829075918', '31'),
('SUMMER', '1515330702@qq.com', '18291957100', '31'),
('test', '2533927063@qq.com', '15877874568', '31'),
('test1', '3763762@qq.com', '15889894548', '31'),
('Van', '1537719853@qq.com', '15202956601', '31'),
('XLCZ', '974520639@qq.com', '18706756086', '4'),
('youngchou', 'zy1308536472@gmail.com', '18710506265', '31'),
('Zee', '452330443@qq.com', '18829208856', '31'),
('乔丁', 'tjoe18@126.com', '13310989130', '31'),
('六六', '939762768@qq.com', '13032967424', '4'),
('嗯', '1234567892@qq.com', '18829527157', '31'),
('墨染晴空', '564134208@qq.com', '18220852540', '4'),
('好好学习', '976056569@qq.com', '18829509225', '4'),
('我也不知道该起什么名字好', 'cytosinelovegood@gmail.com', '18710792758', '31'),
('无畏先锋队', '1263823818@qq.com', '18829062311', '31'),
('桑叶', '2582152019@qq.com', '15249294355', '31'),
('沐风', '3080455512@qq.com', '18829527157', '4'),
('眉目成书', '534774764@qq.com', '18291969805', '4'),
('茅坡村网页设计部', 'xushihao@xiyouant.org', '18392869739', '4'),
('菜鸟队', '2691819131@qq.com', '18792755869', '31'),
('起个名字好麻烦', '1124164306@qq.com', '15309274812', '31'),
('陌生人', '1142931804@qq.com', '18792787835', '31'),
('青柚花开', '2646628105@qq.com', '11', '31'),
('风起团队', '1398546280@qq.com', '15091761865', '41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
