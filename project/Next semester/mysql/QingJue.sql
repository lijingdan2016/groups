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

-- 导出  表 light_sleep.article 结构
CREATE TABLE IF NOT EXISTS `article` (
  `title` char(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `article_id` int(11) NOT NULL,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  light_sleep.article 的数据：~14 rows (大约)
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
REPLACE INTO `article` (`title`, `content`, `article_id`) VALUES
	('安睡，在梦的浅滩', '我愿意看你入睡，也许你根本睡不着。我愿意睡意朦胧地，看着你。我愿意与你一起入睡，进入你的梦境，当它那柔滑的黑波卷过我的头顶。愿和你一起穿越那片透亮的叶子黑蓝、摇曳不定的树林，那儿有水汪汪的太阳和三个月亮，走向你必须下去的那个山洞，走向你最最担心的惊恐。我愿递给你一枝银色的树枝，一朵小白花，一个字保护你，当你陷进梦的深处的忧虑，和忧虑深处的中心。我愿跟随你再一次走完那道长长的楼梯，变成一条小舟小心地载你回来，做一朵双手捧住的火焰，引导你回进睡在我的身旁的你的躯体，让你悄然回去如同吸进一口空气。', 0),
	('陪伴，祝安眠（一）', '去睡吧，……柔滑的黑波袭来，全身有一种软绵绵的感觉，像一个没有思虑的婴孩似的睡去。想象拉你入睡的，是一股舒适的倦意——一种纯粹、完整的生理状态，而不是疲劳的猛然一击，该多么美妙。失眠或梦里的惊恐都不足困扰了，因为有“我”陪着你。“我”愿意看你入睡，愿意和你一起入睡，甚至愿进入你的梦境，陪你面对梦里“最最担心的惊恐”。梦里的恐惧仿若是漆黑的山洞、长长的楼梯和无边的汪洋——是未知、是恐惧本身。“我”无法解除恐惧本身，惟愿时时刻刻“陪伴”着你，“递给你一枝树枝，一朵小白花、一个字”，愿这些小小的、散发着美好气息', 1),
	('陪伴，祝安眠（二）', '“我”不一定是某个或某类人，可以是任何关系亲密的人，父母、孩子、爱人……“我”愿意时时刻刻陪伴着你，像空气一样，无处不在却又无处可感的陪伴，“我”所求的，是亲密本身，是保护你远离夜的忧虑和梦的恐惧。人长大了之后常说，睡眠是一个人的事情，那么“睡不着”，也该独自面对吧。诗人却敏锐地意识到，所谓独立的背后，对亲密的渴望。安睡的秘诀，是另一个人的陪伴、爱意和温暖。', 2),
	('失眠的夜晚（一）', '忽然发现这个城市的夜晚很亮，呆在家里拉上窗帘都抵挡不了那些光亮的暗影，本来躺着都要睡着了，却突然的清醒，空气里弥漫着讽刺的味道，穿过思念，想看透自己，却越来越不能理解这样的自己，明亮的月光带不来一丝的安慰，反而显得那么的落寞，抱着膝盖，倚坐在落地窗边，不知道此刻的脑子在想些什么，不知道要思考些什么，不知道在失落些什么，更不知道自己为何变得越来越敏感', 3),
	('失眠的夜晚（二）', '深夜，冰冷寂寥，我哀伤的目光无声地掠过安静的手机，独自在深夜里轻轻的叹息......很久没有试过这种突然失眠的感觉，那是一种让人无法安寝的无助，就像被悬在空中，周围都是缥缈的气息。眼泪就犹如调皮的孩子，任性地冲出来玩耍，我也就索性纵容它们，让它们在这个静谧的夜晚完完全全的解除禁锢。没有完全解除禁锢的是我的声音，我压抑着它。要知道，在这样的夜里，眼泪是唯一的奢侈。在这个世界上让人坚信的东西真的是越来越少，即使是眼泪也是在无人聆听的夜晚才来得最真实最任性。那是一种自我解放，那是一个坦诚自我的时刻。在这个时刻.', 4),
	('是梦非梦（一）', '生活总是充满着未知数，所以傻呆呆的我靠着“做梦”才得以顽强的生存下来。因为爱“做梦”，所以觉得生活很有趣。我喜欢做快乐的梦，所以在梦中会安排着我喜欢的或是在意的人出现，有意思的是他们也许并不知道我是多么在意他们，而我也不需要犹豫，不需要胆怯，不需要打电话，不需要安排时间，就这样随心所欲的让他们来到我的世界。因为喜欢他们，所以我会编造许多有趣快乐甚至无厘头的故事，在梦中我们放肆的互相调侃，忘我的捧腹大笑，大胆的暧昧亲昵……', 5),
	('是梦非梦（二）', '快乐的梦是自己努力想出来的，而忧伤伴随着烦恼的梦却是不请自来的。因为喜欢他们，所以将他们放入自己的梦中，然而发生的一切的快乐甜蜜都是虚假不切实际的，当我站在你的面前，你会记得关于我们什么样的回忆？不，你不会知道，那样虚假无望的回忆只有我有，你是不知道的。这样的梦虽然不招人喜欢但我也不排斥，当自己做快乐的梦做到忘乎所以的时候，它会敲响警钟，让我冷静下来，与其说是被泼了一盆冷水，我更相信是它让我恢复了理智。爱梦，痴梦，迷梦。有的人为梦癫狂，有的人为梦信仰，有的人为梦幸福，有的人为梦迷茫……每个人都有专属自己的', 6),
	('年轻人不要老熬夜（一）', '我们常常走得太快，却忘记很多常识：你越来越重视成功，却常常忽略早餐的必要性，你拼命举铁和跑步，却不重视一张舒服的床。没有正常的睡眠，何来健康坚挺的人生？真正优质的人生，健康的身体，永远是首选项。年轻的时候总是心比天高，喜欢一切带有仪式感的东西，想拼命想出名想加足马力换一个精彩人生。可是，很多时候我们都忽略了自己是否能正确对待产出比，误认为自己消耗了时间、精力，是朋友圈里最拼命的那个人，这就是努力了。其实却不然。付出了时间、精力，一定也要得到相应的知识增长回报才算值得，否则这种玩命式的努力只是给自己的心理安', 7),
	('年轻人不要老熬夜（二）', '当社会竞争越来越激烈，越来越多的我们都不自觉加大负荷，想拼命一点再拼命一点。然而，越是不肯放松，越容易被盲目无效的努力冲昏头脑。我们熬夜，我们废寝忘食，我们牺牲社交休闲的时间，甚至认为和朋友煲个电话粥、看个八点档都是在浪费生命，我们的日程从早上睁眼睛到晚上闭眼睛都安排得十分紧凑，就是为了能争分夺秒提升自己。但是更多时候，这种自嗨式努力所获得的回报却远远小于有成果输出的有效努力。愿你疲惫心累时就安心入眠，能量充沛时就奋力奔跑。能自律拼命，也能舒心自由。', 8),
	('晚安心语(一）', '夜，渐浓，月光如瀑布般，倾泻地洒落在城市的每个角落。那一片柔美的光，像袅袅升起的一缕青烟，婀婀娜娜，飘飘渺渺；像一层薄薄的轻纱，轻轻的在空气中，浮去飘来，一切的一切，变得朦朦胧胧……夜，深了，窗外依然喧嚣，城市从不会因为夜的来临，而褪去浮华，整座城市沐浴在闪烁的霓虹灯下。这些璀璨的灯光，反而将星月的清辉所掩盖，遮住了月色的柔美，也烦扰了我，这颗喜欢安静的心。夜，沉了，天幕下这张柔软的网，依然在梦幻中，编织着美丽的心，在飞絮着，所有的青春与欢乐，全被裹在一团迷蒙的湿雾中，犹如折翼的翅膀，再也无力尽情翱翔。生', 9),
	('晚安心语（二）', '月色极好，从窗口洒落进来的光，温柔轻缓的笼罩在身上，有些慵懒，有些散漫，有些轻飘。一段文字，一首歌曲，一抹月光，一个安静的女人，安守着一座美妙的城堡。故事里的起起伏伏，花开花落，随着明媚的心情而阳光，随着忧郁的神情而阴霾。那些洋洋洒洒的文字，在夜幕中，低吟浅唱。那些思绪和幻想，漫天飞扬！夜，深沉了，城市，终于安静，五光十色的霓虹灯逐渐减弱，只留下橘黄的路灯依然在闪烁。月色弥漫，倾倒而下，明净的世界，清澈如水流。晚安，世界！', 10),
	('好好睡觉，再谈生活（一）', '有人说，看一个人有多爱自己，多热爱生活，就看他如何对待两件事：一是吃饭，一是睡觉。吃饭自不必多说，一粥一饭间，都是生活态度的体现。但很多人似乎忽略了睡觉这件“小事”的重要性。其实，好好睡觉和好好吃饭一样，都是对生活最好的尊重。', 11),
	('好好睡觉，再谈生活（二）', '曾经有一句话说：“熬夜是因为没有勇气结束这一天，赖床是因为没有勇气开始这一天。”为什么会没有勇气结束这一天，或许是觉得自己虚度了这一天的时光，或许是找不到自己生活的意义。不管是哪一种情况，都说明了一个问题，你的内心缺少一份笃定。如果你没有生活的目标，找不到生活的意义，所以内心空虚，于是没有勇气结束这一天，那你也应该知道，即使你熬了一个通宵，也未必会有所改观。你真正该做的，恰恰是认真睡觉，在一觉醒来精力充沛的时候，再去好好思考人生，改变现状。如果你因为一天浑浑噩噩就过去了，有几分愧疚，有几分懊恼，所以不愿这', 12),
	('好好睡觉，再谈生活（三）', '“往者不可谏，来者犹可追”，一个内心富足的人，不会在这样简单的道理上纠结徘徊。一个自律的、内心笃定的人，不会靠熬夜去透支时间，来填补空虚。所以，请把睡眠还给夜晚，放下手机和千头万绪，静静地读一会儿枕边书，按时入眠吧。好好睡觉，才足以谈生活啊。', 13);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

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

-- 导出  表 light_sleep.shoucang 结构
CREATE TABLE IF NOT EXISTS `shoucang` (
  `user_nick` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `article_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  light_sleep.shoucang 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `shoucang` DISABLE KEYS */;
REPLACE INTO `shoucang` (`user_nick`, `article_id`) VALUES
	('lemon ', 2),
	('lemon ', 3),
	('明夏', 1),
	('lemon ', 13);
/*!40000 ALTER TABLE `shoucang` ENABLE KEYS */;

-- 导出  表 light_sleep.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `user_nick` varchar(50) COLLATE utf8_unicode_ci,
  `city` char(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  light_sleep.user 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
REPLACE INTO `user` (`user_nick`, `city`) VALUES
	('hello', 'Tangshan'),
	('lemon ', 'Tangshan'),
	('lemon ', 'Tangshan'),
	('lemon ', 'Tangshan'),
	('lemon ', 'Tangshan'),
	('lemon ', 'Tangshan');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
