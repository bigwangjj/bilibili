set names utf8;
drop database if exists blbl;
create database blbl charset=utf8;
use blbl;
create table t_user(
	uid int primary key AUTO_INCREMENT,
	uname varchar(100),
	upwd varchar(100),
	uphone BIGINT
);
insert into t_user values
(null,'asuna',123456,13012345678),
(null,'kirito',654321,13112345678),
(null,'sezina',456789,13212345678),
(null,'kazusa',112233,13312345678);

create table f_user(
	uId int primary key AUTO_INCREMENT,
	uName varchar(100),
	photo varchar(1000),
	uLevel varchar(100),
	uLevelImg varchar(100),
	addr varchar(1000)
);

insert into f_user values
(null,'asuna','user01.jpg','钻石会员','level5.jpg','来自iphoneSE'),
(null,'kirito','user03.jpg','普通会员','level1.jpg','来自iphone7'),
(null,'kazusa','user05.jpg','青铜会员','level2.jpg','来自android'),
(null,'sezina','user07.jpg','黄金会员','level3.jpg','来自小米5');


create table f_content(
	tId int primary key AUTO_INCREMENT,
	uName varchar(1000),
	content varchar(1000),
	contentTime datetime
);

insert into f_content values
(null,'asuna','分享一点自己的加点经验，个人感觉还不错！',now()),
(null,'kazusa','之前刚刚出了毕业武器，是把短剑，怎么加点啊求教！',now()),
(null,'kirito','新手来的，不知道装备怎么搭配，楼主艾特我吧!',now()),
(null,'sezina','洗了5次点，终于总结出一套比较合理的巨剑点，不喜勿喷！',now()),
(null,'asuna','新练个一个小号宗妹，感觉御剑术强制中断不会用，有没有哪位老手指教下！',now()),
(null,'kazusa','又被活动坑了200个盒子，什么都没开到，想删号脱坑算了！',now()),
(null,'kirito','我对剑宗的理解已经突破天际，小白又什么不懂得都可以艾特我!',now()),
(null,'sezina','200票闪了自己的毕业武器，哈哈开心，附图分享给你们！',now());



create table lb_left_content(
	lId int primary key AUTO_INCREMENT,
	content varchar(1000),
	lImg varchar(1000)
);

insert into lb_left_content values
(null,'碧蓝航线，6月2日全平台开启','lb01.jpg'),
(null,'妖狐小红娘的配音大师','lb02.jpg'),
(null,'戴上耳机去感受魔性，6月2日全平台开启','lb03.jpg'),
(null,'那年让我们刻骨铭心的番，6月2日全平台开启','lb04.jpg'),
(null,'返老还童，六一传说，6月2日全平台开启','lb05.jpg');


create table lb_right_content(
	lId int primary key AUTO_INCREMENT,
	top varchar(1000),
	up varchar(1000),
	play bigint,
	lImg varchar(1000)
);

insert into lb_right_content values
(null,'【初音ミク】无梦之梦 ','初音一号','3855','01_320x200.jpg'),
(null,'我的分身是做什么的 ','等待的歌','4755','02_320x200.jpg'),
(null,'最终战争，一起High ','吾王233','9658','03_320x200.jpg'),
(null,'战舰少女，血腥之旅 ','poi','7855','04_320x200.jpg'),
(null,'路人女主不路人 ','加藤惠','9955','05_320x200.jpg'),
(null,'【东方】你跑不了','不离灵梦','3855','06_320x200.jpg'),
(null,'淡定的金色之暗 ','雕鱼包','4795','07_320x200.jpg'),
(null,'宫本狗雨：手绘画 ','雨宫天','9758','08_320x200.jpg'),
(null,'校园里勤快的班长尼桑','夏目','7825','09_320x200.jpg'),
(null,'写个小说我们都是主角','妖精','9155','10_320x200.jpg'),
(null,'【约战】日常毛衫十香 ','爱十香','6655','11_320x200.jpg'),
(null,'LoveLive全集合集','nico','4755','12_320x200.jpg'),
(null,'经典黑猫语录啊哈？','五更琉璃','9658','13_320x200.jpg'),
(null,'妹妹是个宅家里的画家','sagiri','7855','14_320x200.jpg'),
(null,'弱音换新装了？来看！','大家族','9955','15_320x200.jpg'),
(null,'奏天使叫你起床啦','立华奏','3855','16_320x200.jpg'),
(null,'你可能看了假的毛和老鼠','欢乐菇','4795','17_320x200.jpg'),
(null,'黑岩妹子，来，让我虐！','蓝发','9758','18_320x200.jpg'),
(null,'鱼子姐妹的小情感','尼禄','7825','19_320x200.jpg'),
(null,'吐血推荐：莫哭啦！','void','9155','20_320x200.jpg'),
(null,'初音新装，来围观','初音三号','3855','21_320x200.jpg'),
(null,'皮卡丘版狐狸精','小精灵','4755','22_320x200.jpg'),
(null,'雷姆来到你正面前额','从零开始','9658','23_320x200.jpg'),
(null,'鸣人的成长过程','naruto','7855','24_320x200.jpg');


create table cartoon_content(
	lId int primary key AUTO_INCREMENT,
	content varchar(1000),
	play bigint,
	pTime varchar(1000),
	love bigint,
	lImg varchar(100)
);

insert into cartoon_content values
(null,'【初音ミク】演唱会','588','28:34','356','25_320x200.jpg'),
(null,'魔法禁书目录合集','788','258:45','452','26_320x200.jpg'),
(null,'圣斗士冥王篇，终站','956','63:12','522','27_320x200.jpg'),
(null,'小林家的龙女仆','1244','24:12','822','28_320x200.jpg'),
(null,'【约会大作战】合集','1588','228:34','656','29_320x200.jpg'),
(null,'境界的彼方，会想念你的','888','23:25','482','30_320x200.jpg'),
(null,'龙与虎合集','936','163:12','526','31_320x200.jpg'),
(null,'异灵大作战03','956','23:44','322','32_320x200.jpg'),
(null,'叶修的单人表演','588','12:34','386','33_320x200.jpg'),
(null,'破坏之战游戏合集','988','12:45','412','34_320x200.jpg'),

(null,'弱音换新装了？来看！','988','12:45','412','15_320x200.jpg'),
(null,'奏天使叫你起床啦','888','12:45','412','16_320x200.jpg'),
(null,'你可能看了假的毛和老鼠','788','12:45','412','17_320x200.jpg'),
(null,'黑岩妹子，来，让我虐！','688','12:45','412','18_320x200.jpg'),
(null,'鱼子姐妹的小情感','588','12:45','412','19_320x200.jpg'),
(null,'吐血推荐：莫哭啦！','488','12:45','412','20_320x200.jpg'),
(null,'初音新装，来围观','388','12:45','412','21_320x200.jpg'),
(null,'皮卡丘版狐狸精','288','12:45','412','22_320x200.jpg'),
(null,'雷姆来到你正面前额','958','12:45','412','23_320x200.jpg'),
(null,'鸣人的成长过程','978','12:45','412','24_320x200.jpg');


create table fj_content(
	lId int primary key AUTO_INCREMENT,
	content varchar(1000),
	num bigint,
	weeks varchar(1000),
	lImg varchar(1000)
);

insert into fj_content values
(null,'樱花任务','7','一','fj01.jpg'),
(null,'火影忍者 博人传','6','一','fj02.jpg'),
(null,'机甲少女Sama','3','二','fj03.jpg'),
(null,'夏目友人帐6','2','二','fj04.jpg'),
(null,'飚速宅男','13','三','fj05.jpg'),
(null,'月色真美','8','四','fj06.jpg'),
(null,'迷糊餐厅4','5','四','fj07.jpg'),
(null,'埃罗芒阿老师','7','四','fj08.jpg'),
(null,'恋爱暴君','6','五','fj09.jpg'),
(null,'小气探警','7','六','fj10.jpg'),
(null,'美妙旋律','12','日','fj11.jpg'),
(null,'雏子的日志','2','日','fj12.jpg');


