-- --------------------------------------------------------
-- 主机:                           47.102.96.200
-- 服务器版本:                        5.5.60-MariaDB - MariaDB Server
-- 服务器操作系统:                      Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 light_sleep 的数据库结构
CREATE DATABASE IF NOT EXISTS `light_sleep` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `light_sleep`;

-- 导出  表 light_sleep.music 结构
CREATE TABLE IF NOT EXISTS `music` (
  `src` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `poster` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `author` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`src`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  light_sleep.music 的数据：~72 rows (大约)
/*!40000 ALTER TABLE `music` DISABLE KEYS */;
REPLACE INTO `music` (`src`, `poster`, `name`, `author`) VALUES
	('http://www.ytmp3.cn/down/35099.mp3', 'http://p4.music.126.net/2-xhlRbs9PzUxybYnA4IfA==/6001134464929400.jpg', '街道的寂寞', '佚名'),
	('http://www.ytmp3.cn/down/36963.mp3', 'http://p1.music.126.net/g02utuWeGsAGeHNE_Aj1EQ==/109951163890687376.jpg?param=140y140', 'The truth that you l', 'Pianoboy'),
	('http://www.ytmp3.cn/down/38518.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558250464&di=5cacd8e3892f27a222', '美丽的神话', '白冰&胡歌'),
	('http://www.ytmp3.cn/down/46089.mp3', 'http://p1.music.126.net/MM-AtwgUl60-kKJZnbAIzw==/109951164017421130.jpg?param=140y140', '梦中蝶影', '佚名'),
	('http://www.ytmp3.cn/down/47039.mp3', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=124464729,3838671383&fm=26&gp=0.jpg', '雨的印记', '佚名'),
	('http://www.ytmp3.cn/down/47040.mp3', 'http://p4.music.126.net/kdpXc5DwwyzvPuHU_Tqsfw==/109951163990622204.jpg', '安妮的仙境', '佚名'),
	('http://www.ytmp3.cn/down/47042.mp3', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4175232212,3703261654&fm=26&gp=0.jpg', '雨中漫步', '曼曼'),
	('http://www.ytmp3.cn/down/47043.mp3', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=488228129,3353958276&fm=26&gp=0.jpg', '卡农', '佚名'),
	('http://www.ytmp3.cn/down/47068.mp3', 'http://p4.music.126.net/8OS9Pdfmy8RKdz0UyxC5fw==/109951164063314848.jpg?param=200y200', '爱与被爱', '佚名'),
	('http://www.ytmp3.cn/down/47585.mp3', 'http://p4.music.126.net/niLIjX-PFA7LX_tL4dIxlg==/109951164070344836.jpg?param=200y200', '爱的罗曼史', '佚名'),
	('http://www.ytmp3.cn/down/48060.mp3', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=729996903,3666187040&fm=26&gp=0.jpg', '梅花下舞', '佚名'),
	('http://www.ytmp3.cn/down/48174.mp3', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3904921534,1872921421&fm=26&gp=0.jpg', '杨柳', '佚名'),
	('http://www.ytmp3.cn/down/50045.mp3', 'http://p3.music.126.net/jZqnhMaHu6RLc3cDjNOMgw==/109951163612043501.jpg?param=200y200', '荀彧', '群星'),
	('http://www.ytmp3.cn/down/50393.mp3', 'http://photocdn.sohu.com/20160513/Img449217127.jpg', '筑梦师', '潘佳杰'),
	('http://www.ytmp3.cn/down/50536.mp3', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1242821532,2320639359&fm=26&gp=0.jpg', '森林', '佚名'),
	('http://www.ytmp3.cn/down/50589.mp3 ', 'http://p1.music.126.net/1F2xCbLRIk-e_YDkEaGRFg==/109951164053384354.jpg?param=140y140', '青石巷', '群星'),
	('http://www.ytmp3.cn/down/51738.mp3', 'http://img0.imgtn.bdimg.com/it/u=3369772404,864452946&fm=26&gp=0.jpg', '追梦人', 'Bandari'),
	('http://www.ytmp3.cn/down/51956.mp3', 'http://p1.music.126.net/IogO6NfqVwOjZh0xmqbTZQ==/109951163960778026.jpg?param=140y140', '不装饰你的梦', '佚名'),
	('http://www.ytmp3.cn/down/52017.mp3', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3641050268,1259360774&fm=26&gp=0.jpg', 'My Heart Will Go On', '佚名'),
	('http://www.ytmp3.cn/down/52146.mp3', 'http://down.52pk.com/uploads/180321/5038_110105_6749.jpg', '一帘幽梦', '费玉清'),
	('http://www.ytmp3.cn/down/52214.mp3', 'http://p1.music.126.net/N2OZ0Ztt9TMlZFQ8g3GK2Q==/109951164022932280.jpg?param=140y140', '忧伤还是快乐', '佚名'),
	('http://www.ytmp3.cn/down/52367.mp3', 'http://p1.music.126.net/DsG82xgpvF0Gwy3MTNp5IQ==/109951164031546927.jpg?param=140y140', 'Always With Me', '佚名'),
	('http://www.ytmp3.cn/down/52418.mp3', 'http://p1.music.126.net/JsGLyYO56ELrSXnJ4Uxqyw==/109951163949043637.jpg?param=140y140', '笛箫吟', '佚名'),
	('http://www.ytmp3.cn/down/52649.mp3', 'http://p1.music.126.net/KKm_frxqRl34b0Thfi4fTQ==/109951163849330631.jpg?param=140y140', '琵琶语', '佚名'),
	('http://www.ytmp3.cn/down/52688.mp3', 'http://p1.music.126.net/rdaq0T0LpYwfs3qOFVMWBA==/109951163931979815.jpg?param=140y140', '云水禅心', '佚名'),
	('http://www.ytmp3.cn/down/52693.mp3', 'http://p1.music.126.net/tO07S2eWZYmB0Meoe179UA==/109951164020146682.jpg?param=140y140', '千与千寻', '久石让'),
	('http://www.ytmp3.cn/down/52736.mp3', 'http://p1.music.126.net/qw8xgmb_49hVxz3bdJhmWA==/109951163992253585.jpg?param=140y140', '一直很安静', '阿桑'),
	('http://www.ytmp3.cn/down/53706.mp3', 'http://s6.sinaimg.cn/bmiddle/63f9d1f1hc4033a199115&690', '眼泪', '张学友'),
	('http://www.ytmp3.cn/down/53812.mp3', 'http://p1.music.126.net/xbrJok_D2bDZzHKQKAoriQ==/109951163922408019.jpg?param=140y140', '像我这样的人', '毛不易'),
	('http://www.ytmp3.cn/down/55712.mp3', 'http://p1.music.126.net/kigpYBePsUatL3K8eBxk1w==/109951163903135210.jpg?param=140y140', '悲伤的', '佚名'),
	('http://www.ytmp3.cn/down/55877.mp3', 'http://p1.music.126.net/O6kySNpiStn3c8_IAmqrxg==/109951164003314539.jpg?param=140y140', '莫斯科郊外的晚上', '佚名'),
	('http://www.ytmp3.cn/down/56110.mp3', 'http://5b0988e595225.cdn.sohucs.com/images/20180408/d15b810a8ffa418faa303cbf6bd4b9d2.jpeg', '我们好像在哪见过', '杨宗纬&叶蓓 '),
	('http://www.ytmp3.cn/down/56111.mp3', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1907388777,739015551&fm=26&gp=0.jpg', '回家的路', '龙梅子/老猫'),
	('http://www.ytmp3.cn/down/56605.mp3', 'http://p1.music.126.net/4LnVwd8bPYYHnEvw7I-Ivg==/109951163942755205.jpg?param=140y140', '爱丫爱丫', 'By2'),
	('http://www.ytmp3.cn/down/56635.mp3', 'http://p1.music.126.net/kNYxM_OitkDcOyUCPZ6CcA==/109951164063360504.jpg?param=140y140', '萤火虫之舞', '萤火虫'),
	('http://www.ytmp3.cn/down/56636.mp3', 'http://p1.music.126.net/ekejbOaHeX46cySXLnuYmA==/109951164075705509.jpg?param=140y140', '萤火虫', '幽基斯'),
	('http://www.ytmp3.cn/down/56644.mp3', 'http://p2.music.126.net/BupfAYc2hthJiF5ARqTrVw==/109951164030608017.jpg?param=140y140', 'attention', '佚名'),
	('http://www.ytmp3.cn/down/56835.mp3', 'http://p2.music.126.net/iLZQMqHXixPBHPfeYOrBPQ==/109951164003336433.jpg?param=140y140', '阿尔法脑波', '佚名'),
	('http://www.ytmp3.cn/down/57234.mp3', 'http://p2.music.126.net/k0SfX2xv8P-9qz10uwwggQ==/109951164068942049.jpg?param=140y140', '凉凉', '杨宗纬&张碧晨'),
	('http://www.ytmp3.cn/down/57249.mp3', 'http://p2.music.126.net/4fr8upBdcJVDTDnUfXlDfQ==/109951163952847431.jpg?param=140y140', '贝加尔湖畔', '佚名'),
	('http://www.ytmp3.cn/down/57338.mp3', 'http://p1.music.126.net/SHaX4mjzzBzbsuMdCkCwcg==/109951164024853221.jpg?param=140y140', '琵琶行', '佚名'),
	('http://www.ytmp3.cn/down/57344.mp3', 'http://p1.music.126.net/k01oCGOGOJyHKQLSyt9qsg==/109951163926573328.jpg?param=140y140', '秋水悠悠', '佚名'),
	('http://www.ytmp3.cn/down/57596.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658299111&di=3430622bc09b76e', '天空之城', '李志'),
	('http://www.ytmp3.cn/down/57887.mp3', 'http://p1.music.126.net/iRbTMHGfy-grDtx7o2T_dA==/109951164009413034.jpg?param=140y140', '白浅', '佚名'),
	('http://www.ytmp3.cn/down/58724.mp3', 'http://p2.music.126.net/VJTPl12r4jKIThmjy5ROTg==/109951163887710551.jpg?param=140y140', '悠然', '半盏清寒'),
	('http://www.ytmp3.cn/down/58830.mp3', 'http://www.wndhw.com/fengjing/weimei/images/wm012t2.jpg', '一生有你', '水木年华'),
	('http://www.ytmp3.cn/down/58847.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658340817&di=3aa925bc80f07e5', '天之痕', '华语群星'),
	('http://www.ytmp3.cn/down/58889.mp3', 'http://p2.music.126.net/lkwpfzUpj0_3QB-Tyrf2bA==/109951164016585910.jpg?param=140y140', '大浪漫主义', '佚名'),
	('http://www.ytmp3.cn/down/58891.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658340807&di=dcc2aaf65fd9768', '梦中的婚礼', '赵海洋'),
	('http://www.ytmp3.cn/down/59079.mp3', 'http://img0.imgtn.bdimg.com/it/u=3516521483,2849673779&fm=11&gp=0.jpg', '玫瑰情缘', '王少峰'),
	('http://www.ytmp3.cn/down/59346.mp3', 'http://p1.music.126.net/iB7A2P4yIFemAcS6xZurrA==/109951163831715335.jpg?param=140y140', '孤独：姫神', '一人静'),
	('http://www.ytmp3.cn/down/59736.mp3', 'http://img17.3lian.com/d/file/201702/20/abdfb8b550178dc2bf44e83704038497.jpg', '流水声催眠', '佚名'),
	('http://www.ytmp3.cn/down/59872.mp3', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=621335064,2529084069&fm=26&gp=0.jpg', '一人众天', '漫步人生'),
	('http://www.ytmp3.cn/down/60129.mp3', 'http://p1.music.126.net/ezQ1H11R_VQrLcoSOadOlw==/109951164058798445.jpg?param=140y140', '一荤一素', '毛不易'),
	('http://www.ytmp3.cn/down/60331.mp3', 'http://imgsrc.baidu.com/forum/pic/item/e220770e0cf3d7ca8591b35ffe1fbe096b63a9b3.jpg', 'A Little Story', 'Valentin'),
	('http://www.ytmp3.cn/down/64519.mp3', 'http://p2.music.126.net/hys96zdefVumEzGnT5B0qQ==/109951163812084051.jpg?param=140y140', '十年', '陈奕迅'),
	('http://www.ytmp3.cn/down/64666.mp3', 'http://p1.music.126.net/ptx2Jf4PZl3oNLxv4NiADg==/109951164018765577.jpg?param=140y140', '红玫瑰', '陈奕迅'),
	('http://www.ytmp3.cn/down/64667.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558953215415&di=0732c1ad94668da', '因为爱情', '王菲&陈奕迅'),
	('http://www.ytmp3.cn/down/64903.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558953215421&di=ff6943cbee57693', '淘汰', '陈奕迅'),
	('http://www.ytmp3.cn/down/64917.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558953215421&di=e30e4f71eeee772', '给爱丽斯', '陈奕迅'),
	('http://www.ytmp3.cn/down/65745.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558953215418&di=b9c23e5ca7d7f71', '回忆的沙漏', '邓紫棋'),
	('http://www.ytmp3.cn/down/69907.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658366453&di=d5725b8d82cd5c3', '青花瓷', '周杰伦'),
	('http://www.ytmp3.cn/down/70226.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658366451&di=cc9d9c89002c9a8', '布拉格广场', '蔡依林&周杰伦'),
	('http://www.ytmp3.cn/down/70231.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658453516&di=bea3b1031914159', '发如雪', '周杰伦'),
	('http://www.ytmp3.cn/down/70232.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658486951&di=5338766cc792dd4', '彩虹', '周杰伦'),
	('http://www.ytmp3.cn/down/70234.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658486950&di=e50f166cc795536', '红尘客栈', '周杰伦'),
	('http://www.ytmp3.cn/down/70238.mp3', 'https://timgsa.baidu.com/timg?https://imgsa.baidu.com/forum/w%3D580/sign=2e32e38c067b02080cc93fe952d', '退后', '周杰伦'),
	('http://www.ytmp3.cn/down/70277.mp3', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3813221237,4105551513&fm=26&gp=0.jpg', '烟花易冷', '周杰伦'),
	('http://www.ytmp3.cn/down/70300.mp3', 'http://img4.imgtn.bdimg.com/it/u=2801782160,3456854724&fm=26&gp=0.jpg', '周杰伦婚礼音乐', '周杰伦'),
	('http://www.ytmp3.cn/down/72971.mp3', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557658340809&di=6a782eb28922589', '春光美', '佳佳'),
	('http://www.ytmp3.cn/down/73199.mp3', 'http://p2.music.126.net/bTQlb2Jn40sTtONF-ikwHg==/109951163988288296.jpg?param=140y140', '牧马城市', '毛不易'),
	('http://www.ytmp3.cn/down/73399.mp3', 'http://img1.imgtn.bdimg.com/it/u=2619377182,3727139155&fm=26&gp=0.jpg', '命运之夜', '熬夜多成黑眼圈');
/*!40000 ALTER TABLE `music` ENABLE KEYS */;

-- 导出  表 light_sleep.musictype 结构
CREATE TABLE IF NOT EXISTS `musictype` (
  `src` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  KEY `FK_musictype_music` (`src`),
  KEY `FK_musictype_onlytype` (`type`),
  CONSTRAINT `FK_musictype_music` FOREIGN KEY (`src`) REFERENCES `music` (`src`),
  CONSTRAINT `FK_musictype_onlytype` FOREIGN KEY (`type`) REFERENCES `onlytype` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  light_sleep.musictype 的数据：~71 rows (大约)
/*!40000 ALTER TABLE `musictype` DISABLE KEYS */;
REPLACE INTO `musictype` (`src`, `type`) VALUES
	('http://www.ytmp3.cn/down/60331.mp3', '安静'),
	('http://www.ytmp3.cn/down/52367.mp3', '放松'),
	('http://www.ytmp3.cn/down/56644.mp3', '幸福'),
	('http://www.ytmp3.cn/down/52017.mp3', '清新'),
	('http://www.ytmp3.cn/down/36963.mp3', '放松'),
	('http://www.ytmp3.cn/down/59872.mp3', '幸福'),
	('http://www.ytmp3.cn/down/52146.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/58830.mp3', '治愈'),
	('http://www.ytmp3.cn/down/52736.mp3', '放松'),
	('http://www.ytmp3.cn/down/60129.mp3', '幸福'),
	('http://www.ytmp3.cn/down/51956.mp3', '清新'),
	('http://www.ytmp3.cn/down/52688.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/57234.mp3', '清新'),
	('http://www.ytmp3.cn/down/64519.mp3', '治愈'),
	('http://www.ytmp3.cn/down/52693.mp3', '安静'),
	('http://www.ytmp3.cn/down/47043.mp3', '治愈'),
	('http://www.ytmp3.cn/down/70300.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/70231.mp3', '清新'),
	('http://www.ytmp3.cn/down/73399.mp3', '安静'),
	('http://www.ytmp3.cn/down/56111.mp3', '放松'),
	('http://www.ytmp3.cn/down/65745.mp3', '治愈'),
	('http://www.ytmp3.cn/down/64667.mp3', '清新'),
	('http://www.ytmp3.cn/down/58889.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/58847.mp3', '清新'),
	('http://www.ytmp3.cn/down/57596.mp3', '安静'),
	('http://www.ytmp3.cn/down/59346.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/47040.mp3', '幸福'),
	('http://www.ytmp3.cn/down/70226.mp3', '治愈'),
	('http://www.ytmp3.cn/down/70232.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/52214.mp3', '放松'),
	('http://www.ytmp3.cn/down/58724.mp3', '放松'),
	('http://www.ytmp3.cn/down/55712.mp3', '安静'),
	('http://www.ytmp3.cn/down/56110.mp3', '幸福'),
	('http://www.ytmp3.cn/down/72971.mp3', '放松'),
	('http://www.ytmp3.cn/down/48174.mp3', '治愈'),
	('http://www.ytmp3.cn/down/48060.mp3', '治愈'),
	('http://www.ytmp3.cn/down/58891.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/46089.mp3', '清新'),
	('http://www.ytmp3.cn/down/50536.mp3', '安静'),
	('http://www.ytmp3.cn/down/59736.mp3', '清新'),
	('http://www.ytmp3.cn/down/64903.mp3', '放松'),
	('http://www.ytmp3.cn/down/70277.mp3', '治愈'),
	('http://www.ytmp3.cn/down/47068.mp3', '清新'),
	('http://www.ytmp3.cn/down/56605.mp3', '放松'),
	('http://www.ytmp3.cn/down/47585.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/73199.mp3', '安静'),
	('http://www.ytmp3.cn/down/59079.mp3', '安静'),
	('http://www.ytmp3.cn/down/57338.mp3', '治愈'),
	('http://www.ytmp3.cn/down/52649.mp3', '安静'),
	('http://www.ytmp3.cn/down/57887.mp3', '治愈'),
	('http://www.ytmp3.cn/down/53706.mp3', '清新'),
	('http://www.ytmp3.cn/down/57344.mp3', '幸福'),
	('http://www.ytmp3.cn/down/52418.mp3', '幸福'),
	('http://www.ytmp3.cn/down/50393.mp3', '幸福'),
	('http://www.ytmp3.cn/down/70234.mp3', '清新'),
	('http://www.ytmp3.cn/down/64666.mp3', '放松'),
	('http://www.ytmp3.cn/down/64917.mp3', '幸福'),
	('http://www.ytmp3.cn/down/38518.mp3', '治愈'),
	('http://www.ytmp3.cn/down/50045.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/55877.mp3', '幸福'),
	('http://www.ytmp3.cn/down/56636.mp3', '放松'),
	('http://www.ytmp3.cn/down/56635.mp3', '清新'),
	('http://www.ytmp3.cn/down/35099.mp3', '幸福'),
	('http://www.ytmp3.cn/down/57249.mp3', '放松'),
	('http://www.ytmp3.cn/down/51738.mp3', '放松'),
	('http://www.ytmp3.cn/down/70238.mp3', '幸福'),
	('http://www.ytmp3.cn/down/56835.mp3', '治愈'),
	('http://www.ytmp3.cn/down/47042.mp3', '舒缓'),
	('http://www.ytmp3.cn/down/47039.mp3', '清新'),
	('http://www.ytmp3.cn/down/50589.mp3 ', '放松'),
	('http://www.ytmp3.cn/down/69907.mp3', '幸福');
/*!40000 ALTER TABLE `musictype` ENABLE KEYS */;

-- 导出  表 light_sleep.onlytype 结构
CREATE TABLE IF NOT EXISTS `onlytype` (
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `details` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  light_sleep.onlytype 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `onlytype` DISABLE KEYS */;
REPLACE INTO `onlytype` (`type`, `details`) VALUES
	('安静', NULL),
	('幸福', NULL),
	('放松', NULL),
	('治愈', NULL),
	('清新', NULL),
	('舒缓', NULL);
/*!40000 ALTER TABLE `onlytype` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
