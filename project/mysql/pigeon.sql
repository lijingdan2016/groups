-- --------------------------------------------------------
-- 主机:                           192.168.234.144
-- 服务器版本:                        5.5.60-MariaDB - MariaDB Server
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 pigeon.admin 结构
DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `account` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `duties` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='管理员';

-- 数据导出被取消选择。
-- 导出  表 pigeon.behave 结构
DROP TABLE IF EXISTS `behave`;
CREATE TABLE IF NOT EXISTS `behave` (
  `user_id` int(11) NOT NULL,
  `behave_content` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `stu_id` int(11) NOT NULL,
  KEY `FK_be` (`user_id`),
  CONSTRAINT `FK_be` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='表现';

-- 数据导出被取消选择。
-- 导出  表 pigeon.class 结构
DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `class_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `class_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`class_id`),
  KEY `FK_cl` (`user_id`),
  CONSTRAINT `FK_cl` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='班级表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.join_class 结构
DROP TABLE IF EXISTS `join_class`;
CREATE TABLE IF NOT EXISTS `join_class` (
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  KEY `FK_jo1` (`user_id`),
  KEY `FK_jo2` (`class_id`),
  CONSTRAINT `FK_jo1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK_jo2` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='加入班级';

-- 数据导出被取消选择。
-- 导出  表 pigeon.pinglun 结构
DROP TABLE IF EXISTS `pinglun`;
CREATE TABLE IF NOT EXISTS `pinglun` (
  `tiezi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pinglun_content` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `date` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_pltz` (`tiezi_id`),
  KEY `FK_plu` (`user_id`),
  CONSTRAINT `FK_pltz` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_plu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='评论表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.schedule 结构
DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `user_id` int(11) NOT NULL,
  `school_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `stu_id` int(11) NOT NULL,
  `stu_name` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  KEY `FK_sche` (`user_id`),
  CONSTRAINT `FK_sche` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='课程表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.score 结构
DROP TABLE IF EXISTS `score`;
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

-- 数据导出被取消选择。
-- 导出  表 pigeon.shoucang 结构
DROP TABLE IF EXISTS `shoucang`;
CREATE TABLE IF NOT EXISTS `shoucang` (
  `tiezi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`tiezi_id`,`user_id`),
  KEY `FK_scu` (`user_id`),
  CONSTRAINT `FK_sct` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_scu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='收藏表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.task 结构
DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `user_id` int(11) NOT NULL,
  `task_content` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `task_data` char(30) COLLATE utf8_unicode_ci NOT NULL,
  `class_id` int(11) NOT NULL,
  KEY `FK_ta` (`user_id`),
  KEY `FK_tc` (`class_id`),
  CONSTRAINT `FK_ta` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK_tc` FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='任务表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.tiezi 结构
DROP TABLE IF EXISTS `tiezi`;
CREATE TABLE IF NOT EXISTS `tiezi` (
  `tiezi_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `tiezi_content` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tiezi_date` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zan` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`tiezi_id`),
  KEY `FK_tz` (`user_id`),
  CONSTRAINT `FK_tz` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='帖子表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `identity` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `stu_id` int(11) DEFAULT NULL,
  `nickname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `signature` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户信息表';

-- 数据导出被取消选择。
-- 导出  表 pigeon.zan 结构
DROP TABLE IF EXISTS `zan`;
CREATE TABLE IF NOT EXISTS `zan` (
  `tiezi_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`tiezi_id`,`user_id`),
  KEY `FK_zu` (`user_id`),
  CONSTRAINT `FK_zt` FOREIGN KEY (`tiezi_id`) REFERENCES `tiezi` (`tiezi_id`),
  CONSTRAINT `FK_zu` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='赞';

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
