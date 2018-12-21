-- --------------------------------------------------------
-- 主机:                           192.168.226.144
-- 服务器版本:                        5.5.60-MariaDB - MariaDB Server
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 pigeon.behave 结构
DROP TABLE IF EXISTS `behave`;
CREATE TABLE IF NOT EXISTS `behave` (
  `user_id` int(11) DEFAULT NULL,
  `behave_content` varchar(50) DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  KEY `FK_be` (`user_id`),
  CONSTRAINT `FK_be` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.behave 的数据：~0 rows (大约)
DELETE FROM `behave`;
/*!40000 ALTER TABLE `behave` DISABLE KEYS */;
/*!40000 ALTER TABLE `behave` ENABLE KEYS */;

-- 导出  表 pigeon.class 结构
DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `class_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `class_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`class_id`),
  KEY `FK_cl` (`user_id`),
  CONSTRAINT `FK_cl` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.class 的数据：~0 rows (大约)
DELETE FROM `class`;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
/*!40000 ALTER TABLE `class` ENABLE KEYS */;

-- 导出  表 pigeon.join_class 结构
DROP TABLE IF EXISTS `join_class`;
CREATE TABLE IF NOT EXISTS `join_class` (
  `user_id` int(11) DEFAULT NULL,
  `class_id` int(11) DEFAULT NULL,
  KEY `FK_jo` (`user_id`),
  CONSTRAINT `FK_in` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK_jo` FOREIGN KEY (`user_id`) REFERENCES `class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.join_class 的数据：~0 rows (大约)
DELETE FROM `join_class`;
/*!40000 ALTER TABLE `join_class` DISABLE KEYS */;
/*!40000 ALTER TABLE `join_class` ENABLE KEYS */;

-- 导出  表 pigeon.schedule 结构
DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `user_id` int(11) DEFAULT NULL,
  `school_name` varchar(20) DEFAULT NULL,
  `stu_name` varchar(10) DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  KEY `FK_sh` (`user_id`),
  CONSTRAINT `FK_sh` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.schedule 的数据：~0 rows (大约)
DELETE FROM `schedule`;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;

-- 导出  表 pigeon.score 结构
DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `user_id` int(11) DEFAULT NULL,
  `exam_date` date DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  `chinese` int(11) DEFAULT NULL,
  `math` int(11) DEFAULT NULL,
  `english` int(11) DEFAULT NULL,
  `chemical` int(11) DEFAULT NULL,
  `physics` int(11) DEFAULT NULL,
  `biology` int(11) DEFAULT NULL,
  `history` int(11) DEFAULT NULL,
  `politics` int(11) DEFAULT NULL,
  `geography` int(11) DEFAULT NULL,
  KEY `FK_sc` (`user_id`),
  CONSTRAINT `FK_sc` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.score 的数据：~0 rows (大约)
DELETE FROM `score`;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
/*!40000 ALTER TABLE `score` ENABLE KEYS */;

-- 导出  表 pigeon.task 结构
DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `user_id` int(11) DEFAULT NULL,
  `task_content` varchar(50) DEFAULT NULL,
  `task_data` date DEFAULT NULL,
  KEY `FK_id` (`user_id`),
  CONSTRAINT `FK_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.task 的数据：~0 rows (大约)
DELETE FROM `task`;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
/*!40000 ALTER TABLE `task` ENABLE KEYS */;

-- 导出  表 pigeon.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `identity` char(4) DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  pigeon.user 的数据：~0 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `password`, `email`, `identity`, `stu_id`) VALUES
	(100, 'syr123', '123', '12', 123);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
