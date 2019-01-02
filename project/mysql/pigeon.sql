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

-- 正在导出表  pigeon.admin 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
REPLACE INTO `admin` (`account`, `name`, `duties`, `password`) VALUES
	(2016011000, 'admin1', 'UI', '11111111'),
	(2016011491, 'admin', 'PO', '11111111'),
	(2016011499, 'housuhong', '后端工程师', '11111111');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 导出  表 pigeon.behave 结构
CREATE TABLE IF NOT EXISTS `behave` (
  `user_id` int(11) NOT NULL,
  `behave_content` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `stu_id` int(11) NOT NULL,
  KEY `FK_be` (`user_id`),
  CONSTRAINT `FK_be` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='表现';

-- 正在导出表  pigeon.behave 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `behave` DISABLE KEYS */;
REPLACE INTO `behave` (`user_id`, `behave_content`, `stu_id`) VALUES
	(333, '今天孩子课上表现很好，举一反三', 20190102);
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

-- 正在导出表  pigeon.class 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
REPLACE INTO `class` (`class_id`, `user_id`, `class_name`) VALUES
	(201912, 123456, '初一六班');
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

-- 正在导出表  pigeon.join_class 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `join_class` DISABLE KEYS */;
REPLACE INTO `join_class` (`user_id`, `class_id`) VALUES
	(333, 201912);
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

-- 正在导出表  pigeon.pinglun 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `pinglun` DISABLE KEYS */;
REPLACE INTO `pinglun` (`tiezi_id`, `user_id`, `pinglun_content`, `date`) VALUES
	(1, 111, 'hhhhhhhh', '2019-1-2 13:33'),
	(8, 333, '11111', '2019-1-2 16:54');
/*!40000 ALTER TABLE `pinglun` ENABLE KEYS */;

-- 导出  表 pigeon.schedule 结构
CREATE TABLE IF NOT EXISTS `schedule` (
  `user_id` int(11) NOT NULL,
  `stu_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `MonAM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `MonPM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `TueAM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `TuePM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `WedAM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `WedPM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `ThurAM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `ThurPM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `FriAM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `FriPM` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  KEY `FK_sche` (`user_id`),
  CONSTRAINT `FK_sche` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='课程表';

-- 正在导出表  pigeon.schedule 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
REPLACE INTO `schedule` (`user_id`, `stu_id`, `MonAM`, `MonPM`, `TueAM`, `TuePM`, `WedAM`, `WedPM`, `ThurAM`, `ThurPM`, `FriAM`, `FriPM`) VALUES
	(333, '20190102', '语文', '数学', '英语', '美术', '音乐', '体育', '自然科学', '思想品德', '劳动', '班会'),
	(222, '20190104', '信息技术', '化学', '生物', '政治', '历史', '地理', '物理', NULL, NULL, NULL);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;

-- 导出  表 pigeon.score 结构
CREATE TABLE IF NOT EXISTS `score` (
  `user_id` int(11) NOT NULL,
  `exam_data` datetime DEFAULT NULL,
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

-- 正在导出表  pigeon.score 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
REPLACE INTO `score` (`user_id`, `exam_data`, `stu_id`, `chinese`, `math`, `english`, `chemical`, `physics`, `biology`, `history`, `politics`, `geography`) VALUES
	(333, '2019-01-02 00:00:00', 20190102, 99, 99, 99, NULL, NULL, NULL, NULL, NULL, NULL),
	(333, '2019-01-02 00:00:00', 20190102, 99, 99, 99, NULL, NULL, NULL, NULL, NULL, NULL);
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

-- 正在导出表  pigeon.shoucang 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `shoucang` DISABLE KEYS */;
REPLACE INTO `shoucang` (`tiezi_id`, `user_id`) VALUES
	(1, 222);
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

-- 正在导出表  pigeon.task 的数据：~1 rows (大约)
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
REPLACE INTO `task` (`user_id`, `task_content`, `task_data`, `class_id`) VALUES
	(123456, '完成课后阅读', '20190103', 201912);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='帖子表';

-- 正在导出表  pigeon.tiezi 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `tiezi` DISABLE KEYS */;
REPLACE INTO `tiezi` (`tiezi_id`, `user_id`, `tiezi_content`, `tiezi_date`, `zan`) VALUES
	(1, 222, 'Life is a journey, not the destination, but the scenery along the should be and the mood at the view', '2019-1-2 13:12', 2),
	(2, 222, 'Time goes by so fast, people go in and out of your life. You must never miss the opportunity to tell these people how much they mean to you.\n　　时间在流逝，生命中人来人往。不要错失机会，告诉他们在你生命中的意义。', '2019-1-2 13:13', 0),
	(3, 222, '“良好的模范恳切的语言和真诚坦白的同情”，系指家长、教师、同学及其他人的示范对儿童的影响。 \n—— 夸美纽斯', '2019-1-2 13:14', 0),
	(4, 123, '教育不能创造什么，但它能启发儿童创造力以从事于创造工作', '2019-1-2 13:16', 0),
	(8, 222, '11111', '2019-1-2 14:30', 0),
	(9, 222, '11111', '2019-1-2 14:30', 0),
	(10, 333, '今天天气很好', '2019-1-2 16:46', 0);
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

-- 正在导出表  pigeon.user 的数据：~7 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`user_id`, `password`, `email`, `identity`, `stu_id`, `nickname`, `signature`) VALUES
	(111, '111', '111', '老师', NULL, '小明', '今天天气真好'),
	(123, '123', '123', '老师', NULL, NULL, NULL),
	(222, '222', '222', '家长', 20190101, NULL, NULL),
	(333, '333', '333', '家长', 20190102, '小美', '11111'),
	(99999, '999', '999', '家长', 20180101, NULL, NULL),
	(123456, '123456', '111', '老师', NULL, NULL, NULL),
	(123456789, '111', '111', '老师', NULL, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 pigeon.zan 结构
CREATE TABLE IF NOT EXISTS `zan` (
  `tiezi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`tiezi_id`,`user_id`),
  KEY `FK_zu` (`user_id`),
  CONSTRAINT `FK_zt` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_zu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='赞';

-- 正在导出表  pigeon.zan 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `zan` DISABLE KEYS */;
REPLACE INTO `zan` (`tiezi_id`, `user_id`) VALUES
	(1, 222),
	(1, 333);
/*!40000 ALTER TABLE `zan` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
