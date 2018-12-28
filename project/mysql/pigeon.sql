-- --------------------------------------------------------
-- 主机:                           192.168.152.144
-- 服务器版本:                        8.0.13 - MySQL Community Server - GPL
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 F_user 的数据库结构
CREATE DATABASE IF NOT EXISTS `F_user` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `F_user`;

-- 导出  表 F_user.class 结构
CREATE TABLE IF NOT EXISTS `class` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(40) DEFAULT NULL,
  `class_people` varchar(40) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.class 的数据：~4 rows (大约)
DELETE FROM `class`;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` (`class_id`, `class_name`, `class_people`, `user_id`) VALUES
	(123, '123', '123', 123),
	(20181101, '一年级', '20', 123),
	(20181101, '一年级', '20', 123),
	(123455, '1', '1', 123);
/*!40000 ALTER TABLE `class` ENABLE KEYS */;

-- 导出  表 F_user.employees 结构
CREATE TABLE IF NOT EXISTS `employees` (
  `empid` int(11) NOT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `firstname` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.employees 的数据：~0 rows (大约)
DELETE FROM `employees`;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;

-- 导出  表 F_user.gxqm 结构
CREATE TABLE IF NOT EXISTS `gxqm` (
  `content` varchar(100) DEFAULT NULL,
  `userid` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.gxqm 的数据：~4 rows (大约)
DELETE FROM `gxqm`;
/*!40000 ALTER TABLE `gxqm` DISABLE KEYS */;
INSERT INTO `gxqm` (`content`, `userid`) VALUES
	('123', NULL),
	('123', NULL),
	('456', NULL),
	('234', NULL);
/*!40000 ALTER TABLE `gxqm` ENABLE KEYS */;

-- 导出  表 F_user.heart1 结构
CREATE TABLE IF NOT EXISTS `heart1` (
  `pushname` varchar(50) DEFAULT NULL,
  `ontime` date DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.heart1 的数据：~5 rows (大约)
DELETE FROM `heart1`;
/*!40000 ALTER TABLE `heart1` DISABLE KEYS */;
INSERT INTO `heart1` (`pushname`, `ontime`, `title`) VALUES
	('老年人', '2018-12-18', '只愿你健康成长'),
	('欣欣爸爸', '2018-12-18', '关于教育体制改革，留着给全家读'),
	('she', '2018-12-18', '你真的懂孩子吗'),
	('快乐一家', '2018-12-18', '经典原文'),
	('明明', '2018-12-18', '海里竟然有这些物质');
/*!40000 ALTER TABLE `heart1` ENABLE KEYS */;

-- 导出  表 F_user.score 结构
CREATE TABLE IF NOT EXISTS `score` (
  `student_id` int(11) DEFAULT NULL,
  `data` char(50) DEFAULT NULL,
  `math` int(11) DEFAULT NULL,
  `Chinese` int(11) DEFAULT NULL,
  `english` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.score 的数据：~3 rows (大约)
DELETE FROM `score`;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
INSERT INTO `score` (`student_id`, `data`, `math`, `Chinese`, `english`) VALUES
	(123, '123', 90, 98, 98),
	(2, '12', 23, 33, 32),
	(3, '22', 50, 32, 22);
/*!40000 ALTER TABLE `score` ENABLE KEYS */;

-- 导出  表 F_user.shoucang 结构
CREATE TABLE IF NOT EXISTS `shoucang` (
  `tiezi` int(11) NOT NULL,
  `click_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.shoucang 的数据：~7 rows (大约)
DELETE FROM `shoucang`;
/*!40000 ALTER TABLE `shoucang` DISABLE KEYS */;
INSERT INTO `shoucang` (`tiezi`, `click_user`) VALUES
	(3713, 100),
	(3713, 100),
	(8225, 100),
	(8958, 100),
	(8958, 100),
	(9322, 100),
	(1296, 100);
/*!40000 ALTER TABLE `shoucang` ENABLE KEYS */;

-- 导出  表 F_user.t3 结构
CREATE TABLE IF NOT EXISTS `t3` (
  `id` int(11) DEFAULT NULL,
  `name` char(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.t3 的数据：~0 rows (大约)
DELETE FROM `t3`;
/*!40000 ALTER TABLE `t3` DISABLE KEYS */;
/*!40000 ALTER TABLE `t3` ENABLE KEYS */;

-- 导出  表 F_user.tiezi 结构
CREATE TABLE IF NOT EXISTS `tiezi` (
  `tz_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tz_content` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.tiezi 的数据：~2 rows (大约)
DELETE FROM `tiezi`;
/*!40000 ALTER TABLE `tiezi` DISABLE KEYS */;
INSERT INTO `tiezi` (`tz_id`, `user_id`, `tz_content`) VALUES
	(8814, 100, '123'),
	(6143, 100, '五十四');
/*!40000 ALTER TABLE `tiezi` ENABLE KEYS */;

-- 导出  表 F_user.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `username` char(20) NOT NULL,
  `password` char(20) NOT NULL,
  `email` char(30) NOT NULL,
  `identity` char(10) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.user 的数据：~10 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`username`, `password`, `email`, `identity`) VALUES
	('1', '1', '1', '老师'),
	('123', '123', '', '家长'),
	('asd', 'asd', 'asd@qq.com', '老师'),
	('bob', '555', '', '家长'),
	('ddd', '123', '123@qq.com', '家长'),
	('jack', '123', '', '家长'),
	('lucy', '123', '', '老师'),
	('啦啦啦', '123', '123@qq.com', '家长'),
	('小牛哥', '123', 'xiaoniuge@qq.com', '老师'),
	('张三', '123', '123@qq.com', '老师'),
	('李四', '123', '123@qq.com', '老师');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 F_user.zan 结构
CREATE TABLE IF NOT EXISTS `zan` (
  `tz_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 正在导出表  F_user.zan 的数据：~7 rows (大约)
DELETE FROM `zan`;
/*!40000 ALTER TABLE `zan` DISABLE KEYS */;
INSERT INTO `zan` (`tz_id`, `user_id`) VALUES
	(3713, 100),
	(3713, 100),
	(1991, 100),
	(3369, 100),
	(8958, 100),
	(9322, 100),
	(1296, 100);
/*!40000 ALTER TABLE `zan` ENABLE KEYS */;


-- 导出 pigeon 的数据库结构
CREATE DATABASE IF NOT EXISTS `pigeon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `pigeon`;

-- 导出  表 pigeon.admin 结构
CREATE TABLE IF NOT EXISTS `admin` (
  `account` int(11) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `duties` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='管理员';

-- 正在导出表  pigeon.admin 的数据：~0 rows (大约)
DELETE FROM `admin`;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 导出  表 pigeon.behave 结构
CREATE TABLE IF NOT EXISTS `behave` (
  `user_id` int(11) NOT NULL,
  `behave_content` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `stu_id` int(11) NOT NULL,
  KEY `FK_be` (`user_id`),
  CONSTRAINT `FK_be` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='表现';

-- 正在导出表  pigeon.behave 的数据：~0 rows (大约)
DELETE FROM `behave`;
/*!40000 ALTER TABLE `behave` DISABLE KEYS */;
/*!40000 ALTER TABLE `behave` ENABLE KEYS */;

-- 导出  表 pigeon.class 结构
CREATE TABLE IF NOT EXISTS `class` (
  `class_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `class_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`class_id`),
  KEY `FK_cl` (`user_id`),
  CONSTRAINT `FK_cl` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='班级表';

-- 正在导出表  pigeon.class 的数据：~0 rows (大约)
DELETE FROM `class`;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
/*!40000 ALTER TABLE `class` ENABLE KEYS */;

-- 导出  表 pigeon.join_class 结构
CREATE TABLE IF NOT EXISTS `join_class` (
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  KEY `FK_jo1` (`user_id`),
  KEY `FK_jo2` (`class_id`),
  CONSTRAINT `FK_jo1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK_jo2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='加入班级';

-- 正在导出表  pigeon.join_class 的数据：~0 rows (大约)
DELETE FROM `join_class`;
/*!40000 ALTER TABLE `join_class` DISABLE KEYS */;
/*!40000 ALTER TABLE `join_class` ENABLE KEYS */;

-- 导出  表 pigeon.pinglun 结构
CREATE TABLE IF NOT EXISTS `pinglun` (
  `tiezi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pinglun_content` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_pltz` (`tiezi_id`),
  KEY `FK_plu` (`user_id`),
  CONSTRAINT `FK_pltz` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_plu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='评论表';

-- 正在导出表  pigeon.pinglun 的数据：~3 rows (大约)
DELETE FROM `pinglun`;
/*!40000 ALTER TABLE `pinglun` DISABLE KEYS */;
INSERT INTO `pinglun` (`tiezi_id`, `user_id`, `pinglun_content`, `date`) VALUES
	(1, 1, '11111111111的评论', '2018-12-28 8:31'),
	(2, 2, '2222222222的评论', '2018-12-28 8:40'),
	(1, 1, '111111的评论', '2018-12-28 8:49');
/*!40000 ALTER TABLE `pinglun` ENABLE KEYS */;

-- 导出  表 pigeon.schedule 结构
CREATE TABLE IF NOT EXISTS `schedule` (
  `user_id` int(11) NOT NULL,
  `school_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `stu_id` int(11) NOT NULL,
  `stu_name` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_sche` (`user_id`),
  CONSTRAINT `FK_sche` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='课程表';

-- 正在导出表  pigeon.schedule 的数据：~0 rows (大约)
DELETE FROM `schedule`;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;

-- 导出  表 pigeon.score 结构
CREATE TABLE IF NOT EXISTS `score` (
  `user_id` int(11) NOT NULL,
  `exam_data` datetime NOT NULL,
  `stu_id` int(11) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='成绩表';

-- 正在导出表  pigeon.score 的数据：~0 rows (大约)
DELETE FROM `score`;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
/*!40000 ALTER TABLE `score` ENABLE KEYS */;

-- 导出  表 pigeon.shoucang 结构
CREATE TABLE IF NOT EXISTS `shoucang` (
  `tiezi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`tiezi_id`,`user_id`),
  KEY `FK_scu` (`user_id`),
  CONSTRAINT `FK_sct` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_scu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='收藏表';

-- 正在导出表  pigeon.shoucang 的数据：~0 rows (大约)
DELETE FROM `shoucang`;
/*!40000 ALTER TABLE `shoucang` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoucang` ENABLE KEYS */;

-- 导出  表 pigeon.task 结构
CREATE TABLE IF NOT EXISTS `task` (
  `user_id` int(11) NOT NULL,
  `task_content` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `task_data` char(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `class_id` int(11) NOT NULL,
  KEY `FK_ta` (`user_id`),
  KEY `FK_tc` (`class_id`),
  CONSTRAINT `FK_ta` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK_tc` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='任务表';

-- 正在导出表  pigeon.task 的数据：~0 rows (大约)
DELETE FROM `task`;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
/*!40000 ALTER TABLE `task` ENABLE KEYS */;

-- 导出  表 pigeon.tiezi 结构
CREATE TABLE IF NOT EXISTS `tiezi` (
  `tiezi_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `tiezi_content` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `tiezi_date` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `zan` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`tiezi_id`),
  KEY `FK_tz` (`user_id`),
  CONSTRAINT `FK_tz` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='帖子表';

-- 正在导出表  pigeon.tiezi 的数据：~2 rows (大约)
DELETE FROM `tiezi`;
/*!40000 ALTER TABLE `tiezi` DISABLE KEYS */;
INSERT INTO `tiezi` (`tiezi_id`, `user_id`, `tiezi_content`, `tiezi_date`, `zan`) VALUES
	(1, 1, '1111111111111111111', '2018-12-28 8:29', 3),
	(2, 2, '222222222222222222', '2018-12-28 8:40', 2);
/*!40000 ALTER TABLE `tiezi` ENABLE KEYS */;

-- 导出  表 pigeon.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `identity` char(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `stu_id` int(11) DEFAULT NULL,
  `nickname` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `signature` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户信息表';

-- 正在导出表  pigeon.user 的数据：~2 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `password`, `email`, `identity`, `stu_id`, `nickname`, `signature`) VALUES
	(1, '1', '1', '老师', NULL, NULL, NULL),
	(2, '2', '2', '家长', 123456, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 pigeon.zan 结构
CREATE TABLE IF NOT EXISTS `zan` (
  `tiezi_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  KEY `FK_zan` (`tiezi_id`),
  KEY `FK_zan1` (`user_id`),
  CONSTRAINT `FK_zan` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_zan1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  pigeon.zan 的数据：~0 rows (大约)
DELETE FROM `zan`;
/*!40000 ALTER TABLE `zan` DISABLE KEYS */;
INSERT INTO `zan` (`tiezi_id`, `user_id`) VALUES
	(1, 1);
/*!40000 ALTER TABLE `zan` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
