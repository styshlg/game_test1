module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
  searchword: searchword,
  searchliju1: searchliju1,
  searchliju2: searchliju2,
  searchchinese1: searchchinese1,
  searchchinese2: searchchinese2,
}
var mt_data = mtData()
function searchword(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].word
    }
  }
  return result
}
function searchmtdata(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt
    }
  }
  return result || {}
}
function searchliju1(id) 
{
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].liju1
    }
  }
  return result
}
function searchliju2(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].liju2
    }
  }
  return result
}
function searchchinese2(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].chinese2
    }
  }
  return result
}
function searchchinese1(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].chinese1
    }
  }
  return result
}

function mtData() {
  var arr = {
    list: [
      {
        
       }
      ,
       {
         id: '1450',
         word: 'glow',
         ciyi:'',
         ciyi: '',
         liju1: 'An electric light glows when it is turned on.',
         chinese1: '通电后电灯发光。',
         liju2: 'The night lantern glowed softly in the darkness.',
         chinese2: '夜灯在黑暗中发出微弱的光。',
         liju3: '',
         chinese3: ''
       }
      ,
       {
         id: '1451',
         word: 'glue',
		 ciyi: '',
         liju1: '',
         chinese1: '',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
       {
         id: '1452',
         word: 'glow',
         ciyi: ' n. 光辉；光亮；色彩鲜艳vi. 发热；发光',
         liju1: ' An electric light glows when it is turned on.',
         chinese1: '通电后电灯发光。',
         liju2: 'The night lantern glowed softly in the darkness.',
         chinese2: '夜灯在黑暗中发出微弱的光。',
         liju3:'',
         chinese3:''
       }
	   ,
       {
         id: '1453',
         word: 'glue',
         ciyi: 'vt. 粘合；黏贴n. 胶；各种胶合物',
         liju1: 'The material is cut and glued in place.',
         chinese1: '材料被剪开并粘到合适的位置。',
         liju2: 'The glue is not dry and don’t touch it.',
         chinese2: ' 胶水没干，不要碰。',
         liju3:'',
         chinese3:''
       }

     ,
       {
         id: '1454',
         word: 'golf',
         ciyi: 'n. 高尔夫球',
         liju1: "'Golf isn't his cup of tea.'",
         chinese1: '打高尔夫球并非他的爱好。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '1455',
         word: 'gorgeous',
         ciyi: 'a. 华丽的，灿烂的；极好的',
         liju1: 'For instance, in 1957 most of the cars were gorgeous.',
         chinese1: '例如，在1957年大部分的汽车都是华丽的。',
         liju2: 'Charline plays a simple but absolutely gorgeous melody.',
         chinese2: '查理放了一首简单但很好听的曲子。',
         liju3:'',
         chinese3:''
       }
	   ,
       {
         id: '1456',
         word: 'gossip',
         ciyi: 'n. 流言蜚语；爱说长道短的人vi. 闲聊；传播流言蜚语',
         liju1: 'She discredited him with ugly gossip.',
         chinese1: '她用难听的流言蜚语臭他。',
         liju2: 'Bill and his lover left the town stealthily, lest the gossips should have seen them.',
         chinese2: '比尔和他的情人悄悄离开了镇子，以免被那些喜欢说长道短的人看见。',
         liju3:'We spoke, debated, and gossiped into the night.',
         chinese3:'我们交谈、争论、闲聊到夜间。'
       }
	   ,
       {
         id: '1457',
         word: 'govern',
         ciyi: 'vt. 统治；管理；支配；控制',
         liju1: 'Who are the men who really govern in this country?',
         chinese1: '谁是这个国家的真正统治者?',
         liju2: "'Don't be governed by what other people say.'",
         chinese2: '不要受他人意见的支配。',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1458',
         word: 'governor',
         ciyi: 'n. 总督；统治者，州长；地方长官',
         liju1: 'He announced for the U.S. governor.',
         chinese1: '他宣布竞选美国州长。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1459',
         word: 'gown',
         ciyi: 'n. 长袍，礼服；罩衣；睡袍',
         liju1: 'Today the keynote of the wedding gown is simplicity.',
         chinese1: '如今结婚礼服的基调是素雅。',
         liju2: 'The doctor put on gown and prepared for the coming operation.',
         chinese2: '医生穿好罩衣为即将开始的手术做准备。',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1460',
         word: 'grab',
         ciyi: 'vt. 抓，夺n. 攫取；抓；夺取之物',
         liju1: 'He grabbed her arm and pulled her out of the path of the car.',
         chinese1: '他抓住了她的胳膊，把她拉出了车道。',
         liju2: 'I made a grab for the knife.',
         chinese2: '我伸手去抓那把刀。',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1461',
         word: 'grace',
         ciyi: 'n. 优雅；恩惠；魅力；慈悲',
         liju1: 'He moved with the grace of a trained boxer.',
         chinese1: '他的动作带有一个训练有素的拳击手的风采。',
         liju2: 'The priest always preaches on grace to a large congregation.',
         chinese2: '牧师经常向广大会众讲关于恩典的道理。',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1462',
         word: 'graceful',
         ciyi: 'a. 优雅的；优美的',
         liju1: 'Mt. Fuji has a graceful shape.',
         chinese1: '富士山形态优美。',
         liju2: 'His movements were so graceful they seemed effortless.',
         chinese2: '他的动作如此优雅，看似非常从容自如。',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1463',
         word: 'gracious',
         ciyi: 'a. 亲切的；高尚的；仁慈的；雅致的',
         liju1: 'She is a lovely and gracious woman.',
         chinese1: '她是个可爱而和蔼的女人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1464',
         word: 'gradual',
         ciyi: 'a. 逐渐的；平缓的',
         liju1: 'Age brought a gradual diminution of his strength and energy.',
         chinese1: '年龄使他的体力和精力逐渐减退。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1465',
         word: ' graduate ',
         ciyi: 'vi. 毕业；接受学位n. 研究生；毕业生',
         liju1: 'After I had graduated I continued to devote myself to research.',
         chinese1: '大学毕业后，我继续献身于科学研究。',
         liju2: 'The top one-third of all high school graduates are entitled to an education at California State University.',
         chinese2: '全部高中毕业生当中排名前三分之一的有资格到加利福尼亚州立大学学习。',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1466',
         word: 'grain',
         ciyi: 'n. 粮食；谷物；颗粒',
         liju1: "Corn is America's most important grain.'",
         chinese1: '玉米是美国最重要的谷物。',
         liju2: 'The young man can’t hold with a grain of sand in his eyes.',
         chinese2: '这个年轻人的眼里容不下一粒沙子。',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1467',
         word: 'gram(me)',
         ciyi: 'n. 克',
         liju1: 'Theanalysis module can process up to one gram of flowing sample per minute.',
         chinese1: '这种分析模块可以在每分钟内处理一克流体的样本。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1468',
         word: 'grammar',
         ciyi: 'n. 语法；语法书',
         liju1: 'Language teachers often extract examples from grammar books.',
         chinese1: '语言教师常从语法书里摘录例子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1469',
         word: 'grand',
         ciyi: 'a. 宏伟的；豪华的；极重要的；重大的',
         liju1: "'This grand building in the centre of town used to be the hub of the capital's social life.'",
         chinese1: '这座位于城镇中央的宏伟建筑曾经是首都社交生活的中心。',
         liju2: 'This is one of the grand challenges of our time.',
         chinese2: '这是我们这个时代面临的重大挑战之一。',
         liju3:'',
         chinese3:''
       }  	   
      ,   	   
	   {
         id: '1470',
         word: 'grant',
         ciyi: 'vt. 准予；授予；给予；承认n. 拨款；授予',
         liju1: 'France has agreed to grant him political asylum.',
         chinese1: '法国已经同意给予他政治庇护。',
         liju2: 'As my wife, I think you should grant me this favor.',
         chinese2: '作为我的妻子，我认为你应该给以我这份爱。',
         liju3:'You should grant them access only to the resources that they require.',
         chinese3:'您应该仅向用户授予它们所需的访问权限。'
       }  	
	   ,
       {
         id: '1471',
         word: 'grape',
         ciyi: 'n. 葡萄；葡萄酒',
         liju1: 'I like all fruits with the exception of grape.',
         chinese1: '我喜欢所有的水果，就是不喜欢葡萄。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1472',
         word: 'graph',
         ciyi: 'n. 图表；曲线图',
         liju1: 'See the graph above and below for the numbers.',
         chinese1: '看看上面的曲线图和下面的数字吧。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1473',
         word: 'graphic',
         ciyi: 'a. 形象的；生动的；图表的；绘画的',
         liju1: 'The descriptions of sexual abuse are graphic.',
         chinese1: '这些对于性虐待的描述生动而具体。',
         liju2: 'You can use an image, or a graphicfor your background or you can also leave it plain and simple.',
         chinese2: '你用一幅图片，或者一幅图形来作为你的背景，或者你也可以让它变空白和简洁。',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1474',
         word: 'grasp',
         ciyi: 'n. 抓住；控制；理解；掌握vt.抓住；领会；掌握',
         liju1: 'His hand was taken in a warm, firm grasp.',
         chinese1: '他的手被热情地、紧紧地握住了。',
         liju2: 'All of this should be fairly easy to grasp.',
         chinese2: '所有这些都应当很容易掌握。',
         liju3:'She grasped the letter and held it to her breast.',
         chinese3:'她急切地抓住信把它举在胸前。',
		      liju4:"'I don't grasp your meaning.'",
		      chinese4:'我不明白你的意思。'
       }  	   
   	  ,
       {
         id: '1475',
         word: 'grateful',
         ciyi: 'a. 感谢的；令人愉快的，感激的',
         liju1: 'He was so grateful that the tears pricked.',
         chinese1: '他感激得泪珠滚滚。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1476',
         word: 'gratitude',
         ciyi: 'n. 感谢；感激',
         liju1: 'I cherish for you the liveliest feeling of affection and gratitude.',
         chinese1: '我对你怀有最强烈的爱和感激之情。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1477',
         word: 'grave',
         ciyi: 'a. 严肃的；庄重的n. 墓穴，坟墓',
         liju1: 'Anxiously, she examined his unusually grave face.',
         chinese1: '她不安地审视着他那张异常严肃的脸。',
         liju2: 'They used to visit her grave twice a year.',
         chinese2: '他们以前每年给她上两次坟。',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1478',
         word: 'gravity',
         ciyi: 'n. 重力，地心引力；严重性；庄严',
         liju1: 'The stone rolled down the mountain by gravity.',
         chinese1: '这块石头受重力作用滚下山。',
         liju2: 'There was an appealing gravity to everything she said.',
         chinese2: '她说的一切都带有一种吸引人的严肃与庄重。',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1479',
         word: 'graze',
         ciyi: 'vt. 放牧；擦伤；擦过n. 放牧；擦伤处',
         liju1: 'The little boy grazed the goats on the hillside.',
         chinese1: '小男孩在山坡上放羊。',
         liju2: 'I had grazed my knees a little.',
         chinese2: '我的膝盖擦破了一点皮。',
         liju3:'There is good grassland here for your cattle and horses to graze on.',
         chinese3:'这里有良好的草场可供你的牛马放牧。',
		     liju4:'Although cuts and grazes are not usually very serious, they can be quite painful.',
		     chinese4:'尽管割伤和擦伤一般并无大碍，却会很疼。'
		 
       }  	
	   ,
       {
         id: '1480',
         word: 'grease',
         ciyi: 'vt. 涂脂于；贿赂n. 油脂；贿赂；润滑剂',
         liju1: 'I greased front and rear hubs and adjusted the brakes.',
         chinese1: '我把前后轮轴都加了润滑油并调试了刹车。',
         liju2: 'He could smell the bacon grease.',
         chinese2: '他闻到了一股熏肉的油脂味儿。',
         liju3:'',
         chinese3:''
       }  	   
   	  
      ,   	   
	   {
         id: '1481',
         word: 'greedy',
         ciyi: 'a. 贪婪的；贪吃的；渴望的',
         liju1: 'There is no peace where men are greedy.',
         chinese1: '在人们贪婪的情况下是永远不会有安宁的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1482',
         word: 'greenhouse',
         ciyi: 'n. 温室',
         liju1: 'A fiery steed is not trained in a courtyard, nor does a pine grow sturdy in a greenhouse.',
         chinese1: '院子里练不出千里马，温室里长不出万年松。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1483',
         word: 'grief',
         ciyi: 'n. 悲痛；忧伤；悲伤的事',
         liju1: 'Time cured him of his grief. ',
         chinese1: '时光的流逝治愈了他的悲痛。',
         liju2: 'Her face was pinched with grief.',
         chinese2: '她的面容因悲伤而憔悴。',
         liju3:'',
         chinese3:''
       }
      ,   	   
	   {
         id: '1484',
         word: 'grieve',
         ciyi: 'vt. 使悲伤，使伤心',
         liju1: "'The boy's wrong actions grieved his parents.'",
         chinese1: '男孩的错误行为使他的父母感到伤心。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	   ,
       {
         id: '1485',
         word: 'grim',
         ciyi: 'a. 冷酷的；严厉的；糟糕的；残忍的',
         liju1: 'Kevin made a grim face and signaled to his son to stop playing the game.',
         chinese1: '凯文装出一脸的严厉，示意儿子不要在玩游戏了。',
         liju2: 'This, he says, may have grim repercussions for America and Europe.',
         chinese2: '他说，这一事实对于欧美也有糟糕的影响。',
         liju3:'',
         chinese3:''
       }  	   
   	  ,
       {
         id: '1486',
         word: 'grin',
         ciyi: 'n. 露齿笑；咧嘴笑',
         liju1: 'Mary makes a sheepish grin when she sees Corbett.',
         chinese1: '见到科比特时，玛丽羞怯的咧嘴笑了一下。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
       ,  	   
	   {
         id: '1487',
         word: 'grind',
         ciyi: 'vt. 磨碎；碾碎',
         liju1: 'She grinds coffee beans every day.',
         chinese1: '她每天要磨咖啡豆。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1488',
         word: 'grip',
         ciyi: 'n. 紧握；抓紧；握拍方式vt. 紧握；夹紧',
         liju1: 'His strong hand eased the bag from her grip.',
         chinese1: '他强有力的手使她把紧握的包松开。',
         liju2: "'The frightened boy gripped his mother's hand.'",
         chinese2: '惊恐的男孩牢牢抓住妈妈的手。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1489',
         word: 'groan',
         ciyi: 'vi. 呻吟；抱怨 n. 呻吟；叹息',
         liju1: 'The class groaned when the teacher set the homework.',
         chinese1: '在老师布置家庭作业时，课堂上发出一片失望的声音。',
         liju2: 'The people groan under the burden of taxes.',
         chinese2: '人民在重税下痛苦呻吟。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1490',
         word: 'grocer',
         ciyi: 'n. 杂货店；食品商',
         liju1: 'The cook and the grocer haggled over the price of eggs.',
         chinese1: '厨师和杂货商为蛋价计较个没完。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1491',
         word: 'grope',
         ciyi: 'vi. 摸索；探索；搜寻',
         liju1: 'He groped for the door handle in the dark.',
         chinese1: '他在黑暗中摸索寻找门把手。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,   	   
	   {
         id: '1492',
         word: 'gross',
         ciyi: 'a. 总共的；粗野的；显而易见的n. 总额，总数',
         liju1: 'Gross sales reached nearly $2 million a year.',
         chinese1: '全年总销售额达到近二百万美元。',
         liju2: 'He abused the Admiral in the grossest terms.',
         chinese2: '他用最粗俗的字眼辱骂那位海军上将。',
         liju3:'The president said that the gross national product had declined by a big margin.',
         chinese3:'总统说国民生产总值已大幅度下降。'
       } 
	   ,
	   {
         id: '1493',
         word: 'grown-up',
         ciyi: 'a. 成熟的；成人的n. 成年人',
         liju1: ' Her songs tackle grown-up subjects.',
         chinese1: '她的歌曲以成人题材为主题。',
         liju2: 'As a grown-up man, I would feel ashamed. ',
         chinese2: '他说，“作为一个成年人，我会感到很羞愧。”',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1494',
         word: 'growth',
         ciyi: 'n. 增长；发展；生长',
         liju1: 'The area has seen a rapid population growth.',
         chinese1: '这个地区人口快速增长。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1495',
         word: 'guarantee',
         ciyi: 'n. 保证；保证书vt. 保证；担保',
         liju1: 'Unity is the guarantee of victory.',
         chinese1: '团结是胜利的保证。',
         liju2: 'He will guarantee us possession of the house by May.',
         chinese2: '他保证我们在五月可搬入这间房子。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1496',
         word: 'guidance',
         ciyi: 'n. 指导，引导；领导',
         liju1: 'We respectfully request your guidance.',
         chinese1: '我们敬祈指导。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }	   
	   ,   	   
	   {
         id: '1497',
         word: 'guideline',
         ciyi: 'n. 指导方针；参考；准则',
         liju1: 'The government should issue clear guidelines on the content of religious education.',
         chinese1: '政府应该颁布明确的关于宗教教育内容的指导方针。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1498',
         word: 'guild',
         ciyi: 'n. 协会，行会',
         liju1: 'We applaud our members for this remarkable show of solidarity for striking Writers Guild of America writers.',
         chinese1: '我们赞同我们的成员在这件事上表现出的团结，这是对编剧协会罢工的支持。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1499',
         word: 'guilt',
         ciyi: 'n. 犯罪，过失；内疚',
         liju1: 'Her emotions had ranged from anger to guilt in the space of a few seconds.',
         chinese1: '她的情绪在几秒钟内由愤怒转为内疚。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1500',
         word: 'guilty',
         ciyi: 'a. 有罪的；内疚的',
         liju1: 'Many may be keeping it a guilty secret.',
         chinese1: '许多人可能将它作为一个罪恶的秘密保守着。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1501',
         word: 'guitar',
         ciyi: 'n. 吉他，六弦琴',
         liju1: 'Before singing, he noodled at his guitar.',
         chinese1: '唱歌之前他先弹了几下吉他。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	    ,   	   
	   {
         id: '1502',
         word: 'gulf',
         ciyi: 'n. 海湾；深渊',
         liju1: 'Hurricane Andrew was last night heading into the Gulf of Mexico.',
         chinese1: '安德鲁飓风昨晚进入墨西哥湾。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1503',
         word: 'gum',
         ciyi: 'n. 口香糖；树胶；橡皮',
         liju1: 'To sweeten your oral cavity, you can have a piece of chewing gum.',
         chinese1: '吃口香糖可以清洁口腔、去除异味。',
         liju2: 'It’s hard to wash off the gum of this tree.',
         chinese2: '这种树的树胶很难洗掉。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1504',
         word: 'gut',
         ciyi: 'n. 内脏；胆量；勇气；肠vt. 取出内脏；摧毁（建筑物等）的内部a. 本能的，直觉的',
         liju1: 'By the time they finish, the crewmen are standing ankle-deep in fish guts.',
         chinese1: '到他们结束时，船员们正站在齐脚踝深的鱼内脏堆里。',
         liju2: 'The new governor has the guts to push through unpopular tax increases.',
         chinese2: '新任州长有胆量强制通过不得人心的增税方案通过。',
         liju3:'Toxins can leak from the gut into the bloodstream.',
         chinese3:'毒素能够从肠道渗透到血液里。',
		     liju4:'Fire gutted the building and left only the brick wall standing.',
		      chinese4:'大火烧毁了建筑物的内部，只留下断壁残墙。',
		      liju5:'The lion gutted the buffalo.',
		     chinese5:'狮子挖出野牛的内脏。',
		     liju6:"'Let's have your gut reaction to the facts as we know them.'",
		     chinese6:'请告诉我们你对这些我们了解的事实的直觉反应。'
         },
	   ,   	   
	   {
         id: '1505',
         word: 'guy',
         ciyi: 'n. 男人，家伙',
         liju1: 'He really whaled on that guy.',
         chinese1: '他确实狠狠揍了那家伙一顿。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1506',
         word: 'gymnasium/gym',
         ciyi: 'n. 体育馆；健身房',
         liju1: 'The next day, the arsonist was arrested at a gymnasium.',
         chinese1: '第二天，纵火犯在一家体育馆被逮捕了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  
	    ,   	   
	   {
         id: '1507',
         word: 'habitat',
         ciyi: 'n. 栖息地，住处',
         liju1: 'Many species are in peril of extinction because of our destruction of their natural habitat.',
         chinese1: '许多物种由于我们破坏了它们的栖息地，现在正面临灭绝的危险。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1508',
         word: 'hail',
         ciyi: 'n. 冰雹 vt. 致敬；招呼；向...欢呼vi.下雹',
         liju1: 'It was so fine this morning. Who would have thought it would hail in the afternoon!',
         chinese1: '早上天气还好好的，不料下午竟下起雹子来了！',
         liju2: 'An old friend hailed me on the other side of the stree.',
         chinese2: '一位老朋友在街对面大声喊我。',
         liju3:'It started to hail, huge great stones.',
         chinese3:'天空开始下冰雹，巨大的雹子。'
       }
	   ,   	   
	   {
         id: '1509',
         word: 'halt',
         ciyi: 'v. 停止；立定；止步n. 停止；止步；休息',
         liju1: 'Striking workers halted production at the auto plant yesterday.',
         chinese1: '昨天，汽车厂的罢工工人完全停止了生产。',
         liju2: 'We should halt the policy immediately.',
         chinese2: '我们应该立即停止政策。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1510',
         word: 'hamburger',
         ciyi: 'n. 汉堡包，牛肉饼',
         liju1: 'The whole stadium stinks of the hamburger.',
         chinese1: '整个体育场内散发着汉堡包的香味。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1511',
         word: 'hammer',
         ciyi: 'n. 铁锤；榔头；音锤vt.锤击；锤打',
         liju1: ' He used a hammer and chisel to chip away at the wall.',
         chinese1: '他用锤子和凿子将墙壁一点点凿掉。',
         liju2: 'I spent 2 hours hammering up the announcement on the wall.',
         chinese2: '我花了两个小时才把那个广告钉在墙上。',
         liju3:'',
         chinese3:''
       }  
	    ,   	   
	   {
         id: '1512',
         word: 'hamper',
         ciyi: 'vt. 妨碍；束缚；使困累',
         liju1: 'The bad weather hampered rescue operations.',
         chinese1: '恶劣的天气阻碍了救助行动。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1513',
         word: 'handbook',
         ciyi: 'n. 手册；指南',
         liju1: 'Look at your handbook every morning before you start your day.',
         chinese1: '每天清晨，在开始你新的一天时，看一看你的手册。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1514',
         word: 'handful',
         ciyi: 'n.一把；少数',
         liju1: 'She scooped up a handful of sand and let it trickle through her fingers.',
         chinese1: '她抓了一把沙子，然后让它们从指缝间慢慢漏掉。',
         liju2: 'He surveyed the handful of customers at the bar.',
         chinese2: '他打量着吧台边仅有的几位顾客。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1515',
         word: 'handicap',
         ciyi: 'n. 残疾；障碍；不利的因素vt. 妨碍；使不利',
         liju1: 'He lost his leg when he was ten, but learned to overcome his handicap.',
         chinese1: '他10岁时失去了一条腿，但学会了战胜自己的残疾。',
         liju2: 'He was handicapped by his height.',
         chinese2: '他的身高妨碍了他的发展。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1516',
         word: 'handle',
         ciyi: 'n. 把手；柄 vt. 处理；操作；运用，触，摸',
         liju1: 'I turned the handle and found the door was open.',
         chinese1: '我转动把手，发现门是开着的。',
         liju2: 'Bob advised her daughter how to handle everyday work.',
         chinese2: '鲍勃告诉自己的女儿如何处理日常工作。',
         liju3:'He was handling his toy all the morning.',
         chinese3:'整个上午他一直在玩着他的玩具。'
       }  	
	    ,   	   
	   {
         id: '1517',
         word: 'handwriting',
         ciyi: 'n. 笔迹；书法；书写',
         liju1: 'Mary disguised her handwriting by writing with her left hand',
         chinese1: '玛丽用左手写字以伪装自己的笔迹。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1518',
         word: 'handy',
         ciyi: 'a. 便利的；手边的；方便的',
         liju1: 'It would be good to have a pencil and paper handy.',
         chinese1: '把铅笔和纸放在手边会很有好处。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1519',
         word: 'harassment',
         ciyi: 'n. 骚扰；烦恼；扰乱',
         liju1: 'First, I will not tolerate harassment or any other form of misconduct.',
         chinese1: '首先，我不能容忍骚扰或任何其它形式的不正当行为。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1520',
         word: 'harbor(u)r ',
         ciyi: 'vt. 庇护；收容n. 海港；港口；避难所',
         liju1: ' The researchers advanced the startling idea that the subsurface ocean might harbor life.',
         chinese1: '研究人员提出了一个惊人的观点，即这片海洋下面可能蕴藏生命。',
         liju2: 'All the battleships can refresh in this harbor. ',
         chinese2: '所有战舰都能在这个港口装上补充供应品。',
         liju3:'The shy child fled to the harbor of her father’s arms.',
         chinese3:'害羞的小女孩躲到他的父亲怀里了。'
       }
	   ,   	   
	   {
         id: '1521',
         word: 'harden',
         ciyi: 'vi. 变硬，变坚固；变坚强',
         liju1: ' With the temprature cool, magma would be hardened into rock.',
         chinese1: '温度越来越低，岩浆也就变硬，最后成了岩石。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1522',
         word: 'hardship',
         ciyi: 'n. 困苦；苦难；艰难险阻',
         liju1: 'She also urges them not to use childhood hardship as an excuse not to take opportunities.',
         chinese1: '她还鼓励他们不要把儿童时期的苦难当作不把握机遇的借口。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1523',
         word: 'hardware',
         ciyi: 'n. 计算机硬件；五金器具',
         liju1: 'Some of them do have specific hardware and software requirements.',
         chinese1: '它们中有一些需要特定的硬件和软件。',
         liju2: 'There are no hardware stores open past midnight in the village.',
         chinese2: '村子里的五金店过了午夜就都关门了。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1524',
         word: 'harm',
         ciyi: 'n/vt. 伤害；危害；损害',
         liju1: 'All dogs are capable of doing harm to human beings.',
         chinese1: '所有的狗都能对人造成伤害。',
         liju2: 'The hijackers seemed anxious not to harm anyone.',
         chinese2: '劫机犯们似乎并不急于伤害任何人。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1525',
         word: 'harmony',
         ciyi: 'n. 和谐；和睦；融洽',
         liju1: 'And together, you represent the harmony between tradition and progress.',
         chinese1: '你们并肩而立，象征着传统与进步的和谐共进。',
         liju2: 'The couple dwelt together in harmony and concord.',
         chinese2: '两口子和睦融洽地住在一起。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1526',
         word: 'harness',
         ciyi: 'vt. 治理；利用',
         liju1: 'We must harness the rivers which overflow annually.',
         chinese1: '我们必须治理那些每年泛滥的河流。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1527',
         word: 'harsh',
         ciyi: ' a. 严厉的；恶劣的；刺耳的；粗糙的；刺目的',
         liju1: 'The harsh weather hindered us from going any further.',
         chinese1: '恶劣的天气阻碍了我们继续前进。',
         liju2: 'The harsh towel irritated my skin.',
         chinese2: '粗糙的毛巾刺激了我的皮肤。',
         liju3:"'It's a pity she has such a loud harsh voice.'",
         chinese3:'可惜她有这么一种响亮刺耳的声音。',
		    liju4:'He said many harsh and unkind things about his opponents.',
		    chinese4:'他说了许多关于他对手的严厉且残酷的话。'
       } 
	   ,
	   {
         id: '1528',
         word: 'haste',
         ciyi: 'n. 匆忙；急忙；草率vi. 匆忙；赶紧',
         liju1: "'Don't act in haste or be hot-headed.'",
         chinese1: '别匆忙行事，也别鲁莽。',
         liju2: 'In my haste I forgot to lock the door.',
         chinese2: '我匆忙中忘了锁门。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1529',
         word: 'hasty',
         ciyi: 'a. 轻率的；匆忙的；草率的',
         liju1: 'This might not be a day for hasty decisions.',
         chinese1: '这一天可能不适合做出草率的决定。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1530',
         word: 'hatch',
         ciyi: 'n. 小门，舱口vi. 孵；孵出vt. 图谋；策划',
         liju1: 'The flight attendant closed and locked the airplane hatch.',
         chinese1: '飞机乘务员把舱门关上锁好。',
         liju2: 'A goose was hatched among ducks.',
         chinese2: '在一群小鸭中孵出了一只小鹅。',
         liju3:'He has accused opposition parties of hatching a plot to assassinate the pope.',
         chinese3:'他曾指责各反对党阴谋策划暗杀教皇。'
       }
	   ,   	   
	   {
         id: '1531',
         word: 'hatred',
         ciyi: 'n. 憎恨；怨恨；敌意',
         liju1: 'He is unselfish and above small jealousy and hatred.',
         chinese1: '他毫不自私，没有一点忌妒和怨恨之意。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1532',
         word: 'haul',
         ciyi: 'v. 拖，拉',
         liju1: 'She hauled her large box into the room.',
         chinese1: '她把那只大箱子拖进了房间。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1533',
         word: 'hawk',
         ciyi: 'n. 鹰 vt. 兜售，沿街叫卖',
         liju1: 'Victors hearing was as good as a hawk, so he heard this. ',
         chinese1: '维克多的听力好得像鹰一般，因此他听到了这番话。',
         liju2: 'He often hawked toothpastes in the street during the vacations.',
         chinese2: '上大学期间每逢放假，他便在大街上沿街兜售牙膏。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1534',
         word: 'hay',
         ciyi: 'n. 干草',
         liju1: 'He ignited the wood with a band of hay. ',
         chinese1: '他用一把干草引燃了这些木柴。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   
	   ,   	   
	   {
         id: '1535',
         word: 'hazard',
         ciyi: ' n. 危险，冒险；危害vt.风险，冒险',
         liju1: 'A new report suggests that chewing gum may be a health hazard.',
         chinese1: '一份新的报告指出，嚼口香糖可能给健康带来危害。',
         liju2: 'In making the investment, he hazarded all his savings.',
         chinese2: '他不顾风险，把所有的积蓄全都投了资。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1536',
         word: 'headline',
         ciyi: 'n. 大字标题；头版头条新闻',
         liju1: 'The news was blazed in headline of the newspaper.',
         chinese1: '这家报纸把那条消息以大字标题宣扬出去。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1537',
         word: 'headquarters',
         ciyi: 'n. 总部；指挥部；司令部',
         liju1: "'The company's headquarters is based in London.'",
         chinese1: '这家公司的总部设在伦敦。',
         liju2: 'The headquarters dispatched troops to the front.',
         chinese2: '司令部迅速派遣部队到前线。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1538',
         word: 'heal',
         ciyi: 'v. 治愈，痊愈；和解',
         liju1: 'This kind of ointment will heal the scald.',
         chinese1: '这种软膏能使烫伤痊愈。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1539',
         word: 'heap',
         ciyi: 'n. 堆；许多；大量；累积vt. 堆；堆积',
         liju1: 'We’ve got to get going because we got a heap of work waiting at the institute.',
         chinese1: '我们得走了，因为研究所里有一大堆的工作要是做。',
         liju2: 'He heaped the diamonds up and said they were all his.',
         chinese2: '他把那些钻石堆成一堆，然后说那些钻石全是他的。',
         liju3:'His bag was heaped with tissues.',
         chinese3:'他的包中装了满满一包的卫生纸。'
       }
	   ,   	   
	   {
         id: '1540',
         word: 'hearing',
         ciyi: 'n. 听力；审讯，听讯；听，倾听',
         liju1: 'His mind still seemed clear and his hearing was excellent.',
         chinese1: '他的头脑看来依然清醒，而且听力极好。',
         liju2: 'You assume his innocence before hearing the evidence against him. ',
         chinese2: '在未听到对他不利的证言之前，你假定他是无罪的。',
         liju3:'At first hearing, I don’t like the music.',
         chinese3:'第一次听时，我不喜欢这首曲子。'
       }  	
	    ,   	   
	   {
         id: '1541',
         word: 'heave',
         ciyi: 'vt. 举起；使起伏；扔 n. 举起；升降',
         liju1: 'He heaved his wounded arm.',
         chinese1: '他奋力抬起他那只受伤的胳臂。',
         liju2: 'The caption ardered the sailors to heave these burdens overboard.',
         chinese2: '船长命令船员把这些重物抛出船外。',
         liju3:'Two goons gave the guns a might heave.',
         chinese3:'两名暴徒用力举起这些抢。'
       } 
	   ,
	   {
         id: '1542',
         word: 'hedge',
         ciyi: 'n. 树篱；障碍物；篱笆vt. 用树篱笆围住；预防',
         liju1: 'Along the river bank there is a hedge.',
         chinese1: '沿河岸有一排树篱芭。',
         liju2: 'My house has been hedged off.',
         chinese2: '我的住家已用树篱围了起来。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1543',
         word: 'heel',
         ciyi: 'n. 脚后跟；踵',
         liju1: 'She dug her heel into the ground.',
         chinese1: '她把鞋后跟戳进地里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1544',
         word: 'heighten',
         ciyi: 'vt. 提高；增高；加强',
         liju1: 'The enthusiasm of the audience was heightened by the climax of the play.',
         chinese1: '全剧的高潮令观众的情绪高涨。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1545',
         word: 'heir',
         ciyi: 'n. 继承人',
         liju1: 'He claims to be the rightful heir.',
         chinese1: '他要求做合法的继承人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1546',
         word: 'helicopter',
         ciyi: 'n. 直升飞机',
         liju1: 'The helicopter is staying over our heads.',
         chinese1: '那架直升机就在我们头顶的上方。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1547',
         word: 'hell',
         ciyi: 'n. 地狱，阴间；苦境，极大痛苦',
         liju1: 'The hell yawns for that rogue. ',
         chinese1: '地狱张着大口在等待着那个恶棍。',
         liju2: 'Sam’s life has been hell since his wife passed away.',
         chinese2: '自从妻子过世后，萨姆的日子一直过得很苦。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1548',
         word: 'helmet',
         ciyi: 'n. 钢盔，头盔',
         liju1: "'The Sword split the Knight's helmet and bit him fatally.'",
         chinese1: '剑劈开了骑士的头盔并致命地刺进他。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1549',
         word: 'helpful',
         ciyi: 'a. 有帮助的；有益的；有用的',
         liju1: 'I hope you have found this article helpful and I welcome all feedback.',
         chinese1: '我希望这篇文章会对您有所帮助，并欢迎所有的反馈。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1550',
         word: 'hemisphere',
         ciyi: 'n. 半球',
         liju1: 'It is further divided into four regions, or lobes, in each hemisphere.',
         chinese1: '每个半球它又进一步分化为四个区域或四个脑叶。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1551',
         word: 'hence',
         ciyi: 'ad. 因此；今后',
         liju1: 'Hence some other factor must be at play.',
         chinese1: '因此，一定是些其它因素在起作用。',
         liju2: 'The gases that may be warming the planet will have their main effect many years hence.',
         chinese2: '这些可能正在使行星变暖的气体，其重要影响将在许多年之后显现。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1552',
         word: 'henceforth',
         ciyi: 'ad. 今后；自此以后',
         liju1: 'In the past I have not considered this fact but it will henceforth shape and guide my life.',
         chinese1: '过去我忽略了这个事实，从今往后，它将塑造我的性格，引导我的人生。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1553',
         word: 'herald',
         ciyi: 'n. 预告；先兆；传令官vt. 预示…的来临',
         liju1: 'I welcome the report as a herald of more freedom.',
         chinese1: '我欢迎这份报告，认为它预示着更多的自由。',
         liju2: 'The herald is a person who carried messages from a ruler in the past.',
         chinese2: '传令官是古时候传达统治者口信的人。',
         liju3:'One falling leaf heralds the coming of autumn.',
         chinese3:'一片落叶预示着秋天的来临。'
       }
	   ,   	   
	   {
         id: '1554',
         word: 'herb',
         ciyi: 'n. 香草，药草；草本植物',
         liju1: 'This medicinal herb is hard to come by.',
         chinese1: '这种草药很难得。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1555',
         word: 'herd',
         ciyi: 'n. 兽群，牛群；放牧人vt. 放牧；使成群',
         liju1: 'Chobe is also renowned for its large herds of elephant and buffalo.',
         chinese1: '乔贝还以其大群的大象和水牛而闻名。',
         liju2: 'He began to herd the prisoners out.',
         chinese2: '他开始把囚犯集中起来赶出去。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1556',
         word: 'heritage',
         ciyi: 'n. 遗产；传统；继承物；继承权',
         liju1: 'Some in Korea say the change means a loss of cultural heritage.',
         chinese1: '有些韩国人认为，这一改变意味着丧失了文化传统。',
         liju2: 'All of our cultural heritage which is useful should be inherited, but in a critical way.',
         chinese2: '凡属我国文化遗产中有用的东西，都应当批判地继承。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1557',
         word: 'heroic',
         ciyi: 'a. 英雄的；英勇的',
         liju1: 'His heroic deeds were celebrated in every corner of India.',
         chinese1: '他的英勇事迹在印度的每个角落被传颂。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1558',
         word: 'heroin',
         ciyi: 'a. 英雄的；英勇的',
         liju1: ' His heroic deeds were celebrated in every corner of India.',
         chinese1: '他的英勇事迹在印度的每个角落被传颂。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1559',
         word: 'heroin',
         ciyi: 'n. 海洛因，吗啡',
         liju1: 'The girls were duped by drug smugglers into carrying heroinfor them.',
         chinese1: '那些女孩被毒品走私犯利用为他们携带海洛因。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1560',
         word: 'heroine',
         ciyi: 'n. 女主角；女英雄',
         liju1: 'She is ticketed as a heroine.',
         chinese1: '她被描绘成了一位女英雄。',
         liju2: 'The heroine is a senior TV executive.',
         chinese2: '女主人公是一位电视台高级主管。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1561',
         word: 'hesitate',
         ciyi: 'vi. 踌躇，犹豫；含糊；支吾',
         liju1: 'He hesitated and asked me if he could sit near me.',
         chinese1: '他犹豫了一下，问能不能在我身边坐下。',
         liju2: 'He hesitated and told me he was brought up in a shabby and dirty town.',
         chinese2: '他吞吞吐吐地告诉我，他是在一个破旧肮脏的小镇上长大的。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1562',
         word: 'hierarchy',
         ciyi: 'n. 等级制度；领导者；统治集团',
         liju1: 'Like most other American companies with a rigid hierarchy, workers and managers had strictly defined duties.',
         chinese1: '像大多数其他等级制度森严的美国公司一样，工人和管理人员都有严格界定的职责。',
         liju2: 'The church hierarchy today feels the church should reflect the social and political realities of the country.',
         chinese2: '教会统治集团如今感到教会应该反映国家的社会现实和政治现实。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1563',
         word: 'highland',
         ciyi: 'n. 高地；丘陵地带',
         liju1: 'There something undeniably soulful about the eerie whine of the highland bagpipes.',
         chinese1: '高原风笛神秘的哀鸣有着让人无法抗拒的深情。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1564',
         word: 'highlight',
         ciyi: 'vt. 突出；强调；使显著 n. 最精彩的部分；最重要的事件',
         liju1: 'You can highlight this by investigating the nature of the workload.',
         chinese1: '可以通过调查工作量的性质来突出这一点。',
         liju2: 'Swimming that is likely to prove one of the highlights of the tournament.',
         chinese2: '可能是本届锦标赛最精彩的赛事之一。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1565',
         word: 'highly',
         ciyi: 'ad. 高度地；非常；赞许地',
         liju1: 'I realized that what was all around me was highly contaminated.',
         chinese1: '我知道我周围所有的一切都被高度污染了。',
         liju2: 'Mr. Singh was a highly successful salesman.',
         chinese2: '辛格先生曾是一位非常成功的推销员。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1566',
         word: 'highway',
         ciyi: 'n. 公路，大路',
         liju1: 'I crossed the highway, dodging the traffic.',
         chinese1: '我闪身避让着来往的车辆，穿过了公路。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1567',
         word: 'hijack/highjack',
         ciyi: 'vt. 劫持；揩油',
         liju1: 'Two men tried to hijack a plane on a flight from Riga to Murmansk.',
         chinese1: '两名男子试图劫持一架从里加飞往摩尔曼斯克的飞机。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1568',
         word: 'hike',
         ciyi: 'vi. 徒步旅行vt. 提高；使…高涨n.徒步旅行；上升',
         liju1: 'He wants to hike round the world.',
         chinese1: '他打算徒步旅行环游世界一周。',
         liju2: 'The costs of daily consumer goods have been hiked at two times.',
         chinese2: '日用消费品的费用上涨了两倍。',
         liju3:'The uniondemands a 7% wage hike.',
         chinese3:'工会要求工资提高7%。',
		     liju4:' He wants to hike round the world. ',
		     chinese4:'他打算徒步旅行环游世界一周。'
       }
	   ,   	   
	   {
         id: '1569',
         word: 'hinder',
         ciyi: 'vt. 阻碍；打扰；阻止',
         liju1: 'Further investigation was hindered by the loss of all documentation on the case.',
         chinese1: '由于有关此案的材料全部丢失，进一步的调查受到了阻碍。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1570',
         word: 'hinge',
         ciyi: 'n. 铰链，折叶；合页',
         liju1: 'The wider the hinge, the further it folds.',
         chinese1: '铰链角度越大，它能折的距离越远。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  
	    ,   	   
	   {
         id: '1571',
         word: 'hint',
         ciyi: 'n. 暗示；线索；提示v.暗示；示意',
         liju1: "'I'd dropped a hint about having an exhibition of his work up here.'",
         chinese1: '我暗示要在这里举办一次他的作品展。',
         liju2: 'She hinted at the possibility of a treat of some sort.',
         chinese2: '她暗示可以找找乐子什么的。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1572',
         word: 'hip',
         ciyi: 'n. 臀部，髋骨',
         liju1: 'Her coat blouses above the hip',
         chinese1: '不她的上衣折边垂至臀部。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1573',
         word: 'historian',
         ciyi: 'n. 历史学家',
         liju1: 'The historian drew a horizontal line on the date to remember it.',
         chinese1: '历史学家在日期上画了一条水平线来记住这天。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1574',
         word: 'historic',
         ciyi: 'a. 历史的；有历史意义的',
         liju1: 'We are living in a great historic era.',
         chinese1: '我们正处在一个伟大的历史时代。',
         liju2: 'It is a historic meeting between the two leaders.',
         chinese2: '这是两位领导人之间一次具有历史意义的会晤。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1575',
         word: 'historical',
         ciyi: 'a. 历史的；有关历史的；基于史实的',
         liju1: 'No historical phenomenon is a mere repetition of the past.',
         chinese1: '任何历史现象都不会是简单的重复。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1576',
         word: 'hitherto',
         ciyi: 'ad. 迄今；到目前为止',
         liju1: 'The ruling party is likely to be opened up to let in peoplehithertoexcluded.',
         chinese1: '执政党可能会放开政策，吸纳迄今被排斥在外的人士。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1577',
         word: 'hoist',
         ciyi: 'vt.升起；举起；吊起',
         liju1: 'The mixed cement has been hoisted up the building.',
         chinese1: '拌好的水泥灰浆已吊到建筑物顶上了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1578',
         word: 'holder',
         ciyi: 'n. 持有人；所有人；支持物',
         liju1: "'If the holder loses the interest, it's no big deal.'",
         chinese1: '如果持有人失去了利息，这样就不会有大的交易。',
         liju2: 'Betty bought a mirror holder from the store.',
         chinese2: '贝蒂从商店里买了一个镜架。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1579',
         word: 'hollow',
         ciyi: 'a. 空的；中空的，空洞的 vi挖空，凿空',
         liju1: 'Bamboo is light because it is hollow.',
         chinese1: '竹子很轻，因为它中间是空的。',
         liju2: 'I have been tired of your hollow words.',
         chinese2: '我已经厌倦了你的空话连篇。',
         liju3:'The carver hollowed out the wooden stick tomake a flute.',
         chinese3:'雕刻匠把木棍掏空做了一支长笛。'
       }
	   ,   	   
	   {
         id: '1580',
         word: 'holy',
         ciyi: 'a. 圣洁的，神圣的',
         liju1: 'She was still a holy and pure young girl.',
         chinese1: '她仍是一个圣洁的少女。',
         liju2: 'You shall keep the Sabbath, for it is holy for you.',
         chinese2: '你们要守安息日，因为它对你们来说是神圣的。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1581',
         word: 'homogeneous',
         ciyi: 'a. 同质的；同种的；同性质的',
         liju1: 'So far, this report has looked at what the new middle classes have in common, treating them as a homogeneous group.',
         chinese1: '到目前为止，本期特别报道已经审视了新兴中产阶级的共同点，视其为一个同质的群体。',
         liju2: 'The unemployed are not a homogeneous group.',
         chinese2: '失业者并不都是同一类人。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1582',
         word: 'honorable',
         ciyi: 'a. 可敬的；光荣的；高贵的',
         liju1: 'The honorable journalist spent an hour on the journey of tour.',
         chinese1: '可敬的新闻记者在观光旅程上花了一个小时。',
         liju2: 'Advocacy journalism has a long and honorable history.',
         chinese2: '鼓吹性新闻有着漫长而光荣的历史。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1583',
         word: 'hook',
         ciyi: 'n. 挂钩，吊钩vt. 钩住；引上钩',
         liju1: 'One of his jackets hung from a hook.',
         chinese1: '他的一件夹克衫挂在挂钩上。',
         liju2: "'For over 3 hours I've hooked only a small fish.'",
         chinese2: '钓了三个多小时，我就钓着这么一条小鱼。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1584',
         word: 'hop',
         ciyi: 'vi. 单足跳跃；双足或齐足跳行n. 蹦跳，短程航行',
         liju1: 'The children were hopping to play on the ground.',
         chinese1: '孩子们在地上单腿跳来跳去的玩耍。',
         liju2: 'Gazelles often hop when running.',
         chinese2: '瞪羚在奔跑时不时地齐足跳行。',
         liju3:'The rabbit got up, took four hops and turned around.',
         chinese3:'兔子直起身子，蹦跳了4下，然后转过身。',
		 liju4:'It is a three-hour drive but can be reached by a 20-minute hopin a private helicopter.',
		 chinese4:'这段路程开车需要3个小时，而乘坐私人直升飞机20分钟就可以到达。'
       }
	   ,   	   
	   {
         id: '1585',
         word: 'hopeful',
         ciyi: 'a. 有希望的；有前途的；充满希望的',
         liju1: 'The result of the election is yet another hopeful sign that peace could come to the Middle East.',
         chinese1: '这次选举的结果是和平有希望降临中东的又一个征兆。',
         liju2: 'I am hopeful this misunderstanding will be rectified very quickly.',
         chinese2: '我满怀希望这一误解很快就能得到澄清。',
         liju3:'',
         chinese3:''
       }  	

	   ,
	   {
         id: '1586',
         word: 'horizon',
         ciyi: 'n. 地平线；视野；见识；范围',
         liju1: 'The sun dipped below the horizon.',
         chinese1: '太阳西沉到地平线以下。',
         liju2: 'As your horizons expand, these new ideas can give a whole new meaning to life.',
         chinese2: '随着你的眼界不断开阔，这些新观念将给你的生活赋予崭新的意义。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1587',
         word: 'horizontal',
         ciyi: 'a. 地平线的；水平的',
         liju1: 'Robin saw the sun rising from the horizontalline.',
         chinese1: '罗宾看到太阳从地平线上冉冉升起。',
         liju2: 'The vertical line meets the horizontal one here.',
         chinese2: '垂直线与水平线在此相交。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1588',
         word: 'hormone',
         ciyi: 'n. 激素，荷尔蒙',
         liju1: 'From a marriage perspective, love your body because it supplies you with oxytocin (the "love hormone"). ',
         chinese1: '从婚姻的角度看，爱上你的身体因为它给了你荷尔蒙。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1589',
         word: 'horn',
         ciyi: 'n. 喇叭，号角；触角；角状物',
         liju1: 'The sound of the automobile horn rasped on the ear.',
         chinese1: '汽车的喇叭声很刺耳。',
         liju2: 'A mature cow has horns.',
         chinese2: '成年母牛头上长有触角。',
         liju3:' A small tree was pierced by a curved bronze horn.',
         chinese3:'一棵小树被一个弯曲的铜角刺穿了。'
       }  	
	    ,   	   
	   {
         id: '1590',
         word: 'horrible',
         ciyi: 'a. 可怕的；令人恐怖的；使人不愉快的',
         liju1: 'My scalp began to prickle as I realized the horrible truth.',
         chinese1: '我了解到了那令人恐怖的事实时，顿时感到不寒而栗。',
         liju2: 'The play was so horrible that it closed after just one performance.',
         chinese2: '这出戏太糟糕了，只演了一场就结束了。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1591',
         word: 'horror',
         ciyi: 'n. 惊骇；惨状；恐怖',
         liju1: "'I remember you don't like the horror fiction or movie.'",
         chinese1: '我记得你不喜欢恐怖小说或者是恐怖电影的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1592',
         word: 'horsepower',
         ciyi: 'n. 马力',
         liju1: 'This motor turns up 100 horsepower.',
         chinese1: '这台发动机的功率达到100马力。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1593',
         word: 'hose',
         ciyi: 'n. 软管；水龙带vt. 用软管浇水；痛打',
         liju1: 'Water in the engine compartment is sucked away by a hose.',
         chinese1: '发动机舱里的水由一条软管吸走。',
         liju2: 'We wash our cars and hose our gardens without even thinking of the water that uses.',
         chinese2: '我们冲洗汽车，浇灌花园，从没考虑过所耗费的水。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1594',
         word: 'hospitality',
         ciyi: 'n. 好客；殷勤；款待',
         liju1: "'I'll pay her back for her hospitality by inviting her to dinner.'",
         chinese1: '我要请她吃饭以回报她的殷勤款待。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1595',
         word: 'host',
         ciyi: 'n. 主人；节目主持人；许多vt. 主持；当主人招待',
         liju1: 'The host bowed us in.',
         chinese1: '主人鞠躬把我们迎了进去。',
         liju2: 'Many hosts start their show with a monologue.',
         chinese2: '很多节目主持人都以一段独白开场。',
         liju3:'A host of problems may delay the opening of the new bridge.',
         chinese3:'一大堆问题也许会延迟新建桥梁的开通。',
		 liju4:'People believe that there will be television chat shows hosted by robots.',
		 chinese4:'人们相信以后会出现有机器人主持的电视谈话节目。'
       } 
	   ,
	   {
         id: '1596',
         word: 'hostage',
         ciyi: 'n. 人质；抵押品',
         liju1: "'The hostage's mouth was taped.'",
         chinese1: '人质的嘴被用胶布封住了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1597',
         word: 'hostess',
         ciyi: 'n. 女主人，女主持人',
         liju1: 'The hostess introduced them.',
         chinese1: '女主人介绍了他们。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1598',
         word: 'hostile',
         ciyi: 'a. 敌对的，敌方的；怀敌意的',
         liju1: 'The West has gradually relaxed its hostile attitude to this influential state.',
         chinese1: '西方对这个有影响力的国家的敌对态度已趋缓和。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1599',
         word: 'hound',
         ciyi: 'vt. 追猎；烦扰；纠缠n. 猎犬',
         liju1: 'I hounded a criminal to San Francisco.',
         chinese1: '我追踪一名罪犯，一直追到旧金山。',
         liju2: 'A troubled hound was baying the moon.',
         chinese2: '一条受惊不安的猎狗正在对月狂吠。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1600',
         word: 'household',
         ciyi: 'a. 家庭的；日常的n. 家庭；全家人',
         liju1: 'Mike hired an accountant to manage the household expenses.',
         chinese1: '迈克雇了一名会计来管理家庭开支。',
         liju2: 'She raged against her husband for some household affairs.',
         chinese2: '她为一些家庭琐事对丈夫大发雷霆。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1601',
         word: 'hover',
         ciyi: 'vi. 盘旋，翱翔；徘徊；彷徨；犹豫',
         liju1: 'Seagulls hover over the surging waves.',
         chinese1: '海鸥在惊涛骇浪上翱翔。',
         liju2: 'I hovered in front of the door of Mary, and never dared to knock at her door.',
         chinese2: '我在玛丽的门前徘徊不前，一直不敢敲她的门。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1602',
         word: 'howl',
         ciyi: 'vi. 嗥叫；怒吼；狂吠vt. 对…吼叫n. 嗥叫；怒号；嚎哭',
         liju1: "'I haven't heard wolves howling for a long time.'",
         chinese1: '我已经有好长时间听不到狼的嗥叫了。',
         liju2: 'The crowd howled its displeasure.',
         chinese2: '人群怒吼着表示不满。',
         liju3:'The dog let out a savage howl and, wheeling round, flew at him.',
         chinese3:'狗发出凶猛的嗥叫声，转过身向他猛扑过来。'
       }
	   ,   	   
	   {
         id: '1603',
         word: 'huddle',
         ciyi: 'v. 把...挤在一起；使缩成一团n.挤在一起的人',
         liju1: 'I saw him huddling himself up under the table when I went into the room.',
         chinese1: '我走进屋时看见他正蜷缩在桌子下面。',
         liju2: 'We lay there: a huddle of bodies, gasping for air.',
         chinese2: '我们躺在那儿：挤作一团，大口地喘着气。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1604',
         word: 'hug',
         ciyi: 'vt. 拥抱；紧抱 n. 拥抱；紧抱',
         liju1: 'They warmly hugged me to show their welcomes.',
         chinese1: '他们热烈地拥抱我，以表达他们对我的欢迎。',
         liju2: 'She leapt out of the back seat, and gave him a hug.',
         chinese2: '她从后座上跳了出来，给了他一个拥抱。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1605',
         word: 'hum',
         ciyi: 'v. 哼着曲子；发嗡嗡声；充满活力，忙碌n. 嗡嗡声；哼声；杂声',
         liju1: 'She was humming a merry little tune.',
         chinese1: '她轻轻地哼着一首欢快的小曲儿。',
         liju2: 'A bee hummed around flowers.',
         chinese2: '一只蜜蜂围着花朵嗡嗡作响。',
         liju3:'The whole place was humming with life when we arrived.',
         chinese3:'当我们到达时，那里到处生机勃勃。',
		 liju4:'Jim stared to hear a low hum in the distance.',
		 chinese4:'吉姆开始听到远处传来一阵低沉的嗡嗡声。'
       } 
	   ,
	   {
         id: '1606',
         word: 'humanity',
         ciyi: 'n .人类；人性；仁慈；人文学科',
         liju1: 'Greed suffocates humanity and intuitive knowledge.',
         chinese1: '贪婪可以灭绝人性和良知。',
         liju2: 'The number of students majoring in the humanities has declined by about half.',
         chinese2: '主修人文学科的学生数量已经下降了近一半。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1607',
         word: 'humble',
         ciyi: 'a. 谦卑的；简陋的；低下的 vt.使谦恭；降低；贬低',
         liju1: 'Defeat and failure make people humble.',
         chinese1: '挫折与失败会使人谦卑。',
         liju2: 'Spyros Latsis started his career as a humble fisherman in the Aegean.',
         chinese2: '斯派罗斯·拉齐斯最初的职业是爱琴海的一名地位低微的渔夫。',
         liju3:'They tried to humble your importance in that achievement.',
         chinese3:'他们企图贬低你在那次功绩中的重要作用。'
       }
	   ,   	   
	   {
         id: '1608',
         word: 'humid',
         ciyi: 'a. 潮湿的；湿润的；多湿气的',
         liju1: 'On a humid stretch of Pacific coast in one of the poorest parts of the Americas, somebody seems to have misplaced a chunk of Manhattan.',
         chinese1: '在太平洋湿润而延伸的海岸线上，作为美洲最贫困的地区之一，仿佛是某人错把曼哈顿的一块放在了这里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1609',
         word: 'humidity',
         ciyi: 'n. 湿度；湿气',
         liju1: 'The humidity of soil helps to grow.',
         chinese1: '土壤湿度有助于植物生长。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1610',
         word: 'humiliate',
         ciyi: 'vt. 使蒙羞；使…丢脸；耻辱',
         liju1: 'Their goal is to humiliate us.',
         chinese1: '他们的目的是使我们丢脸。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1611',
         word: 'humo(u)r ',
         ciyi: 'n. 幽默，诙谐；心情',
         liju1: 'His remarks participated of the sense of humor.',
         chinese1: '他的话里带有几分幽默感。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1612',
         word: 'humorous',
         ciyi: 'a. 诙谐的，幽默的；滑稽的',
         liju1: 'The poet ranted his humorous verses before a big crowd.',
         chinese1: '这位诗人在大庭广众之下大声朗诵他的幽默诗句。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1613',
         word: 'hunt',
         ciyi: 'vt. 打猎；猎取；搜索n. 狩猎；搜寻，寻找',
         liju1: 'As a child I learned to hunt and fish.',
         chinese1: '我孩提时代就学会了打猎和捕鱼。',
         liju2: 'A forensic team was hunting for clues.',
         chinese2: '法医小组正在搜寻线索。',
         liju3:'He set off for a nineteen-day moose hunt in Nova Scotia.',
         chinese3:'他开始了在新斯科舍为期19天的猎驼鹿行程。',
		     liju4:'The pirates began a hunt for treasure on the island.',
		     chinese4:'海盗们在海岛上展开了寻宝行动。'
       }
	   ,   	   
	   {
         id: '1614',
         word: 'hurl',
         ciyi: 'vt. 丢下；猛投；猛掷；大声叫骂',
         liju1: 'Groups of angry youths hurled stones at police.',
         chinese1: '一群愤怒的年轻人朝着警察猛掷石块。',
         liju2: 'How would you handle being locked in the back of a cab while the driver hurled abuse at you?',
         chinese2: '如果你被锁在出租车后座又遭司机谩骂，你会怎么办？',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1615',
         word: 'hurricane',
         ciyi: 'n. 飓风，暴风',
         liju1: 'The hurricane devastated a large section of the coast.',
         chinese1: '飓风毁坏了沿海地区的大部分。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1616',
         word: 'hut',
         ciyi: 'n. 小屋；临时营房',
         liju1: 'He thatched his hut with straw.',
         chinese1: '他用稻草给小屋盖顶。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1617',
         word: 'hydrogen',
         ciyi: 'n. 氢',
         liju1: 'Water can be reduced to oxygen and hydrogen by electrolysis.',
         chinese1: '水通过电解可以分解为氧和氢。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1618',
         word: 'hygiene',
         ciyi: 'n. 卫生；卫生学',
         liju1: 'Many diseases proceed from negligence of hygiene.',
         chinese1: '许多疾病源于不讲究卫生。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1619',
         word: 'hypocrisy',
         ciyi: 'n. 虚伪；伪善',
         liju1: 'Through them I discovered that thought is often full of unconscious prejudice, ignorance, and hypocrisy.',
         chinese1: '通过他们我发现思考通常是充满了无意识的偏见、无知和虚伪的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1620',
         word: 'hypothesis',
         ciyi: 'n. 假说，假设；前提',
         liju1: 'We have another hypothesis as well.',
         chinese1: '我们提出了另一种假说。',
         liju2: 'His hypothesis turned out to be correct.',
         chinese2: '事实证明他的假设是正确的。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1621',
         word: 'hysterical',
         ciyi: 'a. 歇斯底里的；异常兴奋的',
         liju1: 'Police and bodyguards had to form a human shield around him as the almost hysterical crowds struggled to approach him.',
         chinese1: '当近乎歇斯底里的人群奋力接近他时，警察和保镖们不得不在他周围形成一堵人墙。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1622',
         word: 'ideal',
         ciyi: 'a. 理想的；完美的n.典范；理想',
         liju1: 'We do not live in an ideal world.',
         chinese1: '我们并非生活在一个完美的世界里。',
         liju2: 'Her features were almost the opposite of the Japanese ideal of beauty in those days.',
         chinese2: '她的容貌几乎和当时日本的美人典范正好相反。',
         liju3:'The arrangements, if not ideal, are fairly satisfactory.',
         chinese3:'安排虽不算理想，但也相当满意。'
       }
	   ,   	   
	   {
         id: '1623',
         word: 'identical',
         ciyi: 'a. 同一的；完全相同的',
         liju1: 'My opinion is identical with his.',
         chinese1: '我的意见与他的观点相同。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1624',
         word: 'identification',
         ciyi: 'n. 鉴定，识别；身份证明',
         liju1: 'He did not have any identification when he arrived at the hospital.',
         chinese1: '他到医院的时候没有任何身份证明。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	  
	   {
         id: '1625',
         word: 'identify',
         ciyi: 'vt. 鉴定；识别，使参与；把…看成一样',
         liju1: 'He identified his baggage among hundreds of others.',
         chinese1: '他在几百件行李中认出了自己的行李。',
         liju2: "'He always identifies other's happiness with his own.'",
         chinese2: '他总是把别人的幸福看做自己的幸福。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1626',
         word: 'identity',
         ciyi: 'n. 身份；特性；特征；同一性，达成一致',
         liju1: 'His real identity was surprised by me.',
         chinese1: '我无意间发现了他的真实身份。',
         liju2: 'I wanted a sense of my own identity.',
         chinese2: '我需要确立自身的个性意识。',
         liju3:'Both sides reached an identity of view in terms of urban construction.',
         chinese3:'双方城市就建设问题达成一致。'
       }
	   ,   	   
	   {
         id: '1627',
         word: 'ideology',
         ciyi: 'n. 意识形态；思想意识；观念学',
         liju1: 'These questions have nothing to do with party or ideology.',
         chinese1: '这些问题其实和党派和意识形态毫无关系。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1628',
         word: 'idiom',
         ciyi: 'n. 成语，习语',
         liju1: 'The idiom was overworn by my family.',
         chinese1: '在我们家这条成语都被用滥了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1629',
         word: 'idiot',
         ciyi: 'n. 笨蛋，傻瓜；白痴',
         liju1: '‘You are an idiot, ’he tells them. ',
         chinese1: '‘你确实是傻瓜，’他对他们说。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1630',
         word: 'idle',
         ciyi: 'n. 笨蛋，傻瓜；白痴',
         liju1:  'You are an idiot, he tells them',
         chinese1: '‘你确实是傻瓜，’他对他们说。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1631',
         word: 'idle',
         ciyi: 'a. 闲置的，空置的；无用的；懒散的vt. 虚度；浪费',
         liju1: 'Now the machine is lying idle.',
         chinese1: '现在这台机器正处于闲置状态。',
         liju2: 'It’s idle to expect help from Pull, for he is just a troublemaker.',
         chinese2: '指望保罗帮忙是没用的，他是个只会捣乱的家伙。',
         liju3:'An idle man only enjoys playing and making pleasures.',
         chinese3:'一个懒惰的人只享受玩耍和寻乐。',
		     liju4:' I used to idle away the hours watching TV.',
		     chinese4:'我过去经常把时间浪费在看电视上。'
       }
	   ,   	   
	   {
         id: '1632',
         word: 'ignite',
         ciyi: 'vi.点火；燃烧',
         liju1: 'Music can ignite your spirit and make you feel like you can do anything.',
         chinese1: '音乐能点燃你的精神和使你感觉你能够做到任何事情。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1633',
         word: 'ignorance',
         ciyi: 'n. 无知，愚昧；不知，不懂',
         liju1: 'What knocks me most is his ignorance.',
         chinese1: '最让我吃惊的是他的无知。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1634',
         word: 'ignorant',
         ciyi: 'a. 无知的；愚昧的；不知道的',
         liju1: 'Only the most ignorant architect does not consider what has gone before.',
         chinese1: '只有那些最无知的架构师才放弃考虑过去的经验。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1635',
         word: 'illegal',
         ciyi: 'a. 非法的；违法的；违反规则的',
         liju1: 'He distanced himself from the actions of the illegal group.',
         chinese1: '他使自己远离非法集团的行动。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1636',
         word: 'illiterate',
         ciyi: 'a. 文盲的；不识字的；没受教育的',
         liju1: 'A large percentage of the population is illiterate.',
         chinese1: '人口中文盲的比例相当高。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1637',
         word: 'illuminate',
         ciyi: 'vt. 阐明，说明；照亮；使灿烂',
         liju1: 'In the countryside, houses are still illuminated by oil lamps.',
         chinese1: '在农村，房屋仍然靠油灯照明。',
         liju2: 'The author illuminates the subject with many examples.',
         chinese2: '作者用许多例子来阐明该主题。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1638',
         word: 'illusion',
         ciyi: 'n. 幻觉，错觉；错误的观念或信仰',
         liju1: 'His mind could no longer distinguish between illusion and reality.',
         chinese1: '他的头脑已不再能分清幻觉和现实。',
         liju2: ' We should have no illusions about our ability.',
         chinese2: '我们应该对自己的能力有自知之明。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1639',
         word: 'illustrate',
         ciyi: 'vt. 阐明，举例说明；图解，加插图',
         liju1: 'Let me give another example to illustrate this difficult point.',
         chinese1: '让我举一个例子来阐明这个难点。',
         liju2: 'She went on to art school and is now illustrating a book.',
         chinese2: '她接着上了美术学校，现在正在给一本书画插图。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1640',
         word: 'illustration',
         ciyi: 'n. 说明；例证；插图；图解',
         liju1: 'It is the outcome of an often unexpressed philosophy, its illustration and its consummation.',
         chinese1: '它是一种常常无法言传的哲学的结果，是这种哲学的例证和完满。',
         liju2: 'She looked like a princess in a nineteenth-century illustration.',
         chinese2: '她看上去像19世纪插图里的公主。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1641',
         word: 'image',
         ciyi: 'n. 形像；影像；想象；肖像',
         liju1: 'His image was fixed in her mind.',
         chinese1: '他的形象铭记在她的心中。',
         liju2: 'The photograph showed a distinct image.',
         chinese2: '照片显出了明晰的影像。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1642',
         word: 'imaginary',
         ciyi: 'a. 虚构的；想像的；虚数的',
         liju1: 'This time it must of its nature be an imaginary one.',
         chinese1: '这次，由于其本质必须是一个想象的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1643',
         word: 'imagination',
         ciyi: 'n. 想象力；空想；幻想',
         liju1: 'Latanya is a woman with a vivid imagination.',
         chinese1: '拉坦尼娅是一个想象力丰富的女人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1644',
         word: 'imaginative',
         ciyi: 'a. 富于想象力的；有创造力的',
         liju1: 'And as a writer, I’m not tremendously imaginative. So I want to have my feet on the ground.',
         chinese1: '作为作家，我不是一个想象力极为丰富的人，所以我想脚踏实地，现实些。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1645',
         word: 'imagin',
         ciyi: 'vt. 想象；猜想；设想',
         liju1: 'I can hardly imagine such a scene.',
         chinese1: '我无法想象出这样的情景。',
         liju2: 'Imagine yourself to be on a desert island.',
         chinese2: '设想一下你身处荒岛的情形。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1646',
         word: 'imitate',
         ciyi: 'vt. 模仿，仿效；仿造，仿制',
         liju1: 'He can imitate the cries of birds.',
         chinese1: '他能模仿鸟叫。',
         liju2: 'People imitate diamonds with crystal.',
         chinese2: '人们用水晶仿造钻石。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1647',
         word: 'imitation',
         ciyi: 'n. 模仿，仿造；仿制品',
         liju1: 'The use of language begins with imitation.',
         chinese1: '运用语言是从模仿开始的。',
         liju2: 'If you find out it is an imitation, you may return it to me.',
         chinese2: '假如您发现它是赝品，可以退还给我。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1648',
         word: 'immense',
         ciyi: 'a. 巨大的，广大的；无边无际的',
         liju1: "'It's almost impossible to find him in the immense ocean.'",
         chinese1: '在无边无际的海洋中要找到他几乎是不可能的。',
         liju2: 'This synchronous behavior proved to be an immense advantage.',
         chinese2: '这种同步行为被证明有巨大的优势。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1649',
         word: 'immerse',
         ciyi: 'vt. 沉浸；使陷入；使浸没',
         liju1: 'He is immersed in the swimming pool.',
         chinese1: '他完全沉浸了水中。',
         liju2: 'The man immersed his face into the shower faucet.',
         chinese2: '那名男子把脸浸在淋浴头喷出的水里。',
         liju3:'',
         chinese3:''
       }  	
	   
	   ,
	   {
         id: '1650',
         word: 'immigrant',
         ciyi: 'a. 移民的；迁入的n. 移民，侨民',
         liju1: 'Around the world, countries have found a variety of ways to make schools work—even for poor kids or immigrant kids. ',
         chinese1: '世界上，每个国家都有不同的使学校运转的方法——即使对于贫困的孩子或是移民的孩子。',
         liju2: 'To be sure, there are success stories, but it is more often the children who benefit than immigrant parents.',
         chinese2: '肯定有许多成功的故事，但是通常受惠的是孩子们，而不是移民这一代的父母辈。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1651',
         word: 'immune',
         ciyi: 'a. 免疫的；不受影响；免除的；豁免的',
         liju1: 'We are immune to advertising.',
         chinese1: '我们对广告是免疫的。',
         liju2: 'Higher education is no longer immune to state budget cuts.',
         chinese2: '高等教育不再受州预算削减的影响。',
         liju3:'People with diplomatic passports are immune from criminal prosecution.',
         chinese3:'持有外交护照者享有刑事起诉豁免权。'
       }
	   ,   	   
	   {
         id: '1652',
         word: 'impact',
         ciyi: 'n. 碰撞；冲击力；影响；效果',
         liju1: 'The plane is destroyed, a complete wreck: the pilot must have died on impact.',
         chinese1: '飞机被毁，完全成了一堆残骸：飞行员一定在撞击中丧生了。',
         liju2: 'They say they expect the meeting to have a marked impact on the future of the country.',
         chinese2: '他们说期望这次会议对国家的未来产生显著的影响。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1653',
         word: 'impair',
         ciyi: 'vt. 损害；削弱；减少',
         liju1: 'Overweight and obesity are defined as abnormal or excessive fat accumulation that may impair health.',
         chinese1: '超重和肥胖的定义是可损害健康的异常或过量脂肪累积。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1654',
         word: 'impart',
         ciyi: 'vt. 给予，传授；告知，透露',
         liju1: 'The much jogging can impart your lungs.',
         chinese1: '过长时间的慢跑可能会损伤肺部。',
         liju2: "'And first, I'd like to impart my forte skill to you!'",
         chinese2: '首先，我想传授你们我的一项拿手绝活。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1655',
         word: 'impatient',
         ciyi: 'a. 不耐烦的；焦躁的',
         liju1: 'Investors are growing impatient with promises of improved earnings.',
         chinese1: '投资者们对提高收益的承诺越来越不耐烦了。',
         liju2: "'He didn't want to tell Mr. Morrison why he was impatient to get home.'",
         chinese2: '他不想告诉莫里森先生他为什么要着急回家。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1656',
         word: 'imperative',
         ciyi: 'a. 必要的，极为重要的；紧急的；命令的 n. 必要的事；祈使语气',
         liju1: 'It was imperative that he act as naturally as possible.',
         chinese1: '至关重要的是他要尽可能地自然行事。',
         liju2: 'I can’t stand anyone speaking to me in such an imperative tone.',
         chinese2: '我不能忍受任何人以这种命令的语气跟我讲话。',
         liju3:'First on a long list of imperatives is the purchase of a new computer.',
         chinese3:'在一个长长的必做事项清单里，头等大事就是买一台新电脑。'
       }
	   ,   	   
	   {
         id: '1657',
         word: 'imperial',
         ciyi: ' a. 帝国的；帝王的；至尊的；专横的；傲慢的；英制的',
         liju1: ' The Chinese imperial family in the Qing Dynasty is of Manchu origin.',
         chinese1: '中国清朝的皇帝是满族血统。',
         liju2: 'The imperial power of this country was in the hands of the president.',
         chinese2: '该国的最高权力掌握在总统手里。',
         liju3:'Alfred spoke to the old lady in an imperial manner.',
         chinese3:'阿尔费雷德与那位老妇人讲话时态度极为傲慢。',
		 liju4:' Imperial gallon is a unit of volume in the British Imperial System  and equals to 4quarts (4.546 liters).',
		 chinese4:'英制加仑是英国度量衡体系中的容积单位，等于4夸脱(合4.546升)。'
       }
	   ,   	   
	   {
         id: '1658',
         word: 'impetus',
         ciyi: 'n. 动力；促进；冲力',
         liju1: 'The impetus for change came from lawyers.',
         chinese1: '促进转变的动力来自于律师们。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1659',
         word: 'implement',
         ciyi: 'vt. 实施，执行；使生效n. 工具，器具',
         liju1: 'How do we implement this?',
         chinese1: '那我们怎么来执行呢?',
         liju2: 'Implement your plans with courage and persistence.',
         chinese2: '用勇气与坚持贯彻你的计划。',
         liju3:'We need sharp implements to open the cardboard box.',
         chinese3:'我们需要锋利的工具来打开这个纸板箱。'
       } 
	   ,
	   {
         id: '1660',
         word: 'implication',
         ciyi:'n. 含意；暗示；影响',
		 liju:' The implication was obvious: vote for us or it will be very embarrassing for you.',
         chinese1: '含意很明显：投票给我们，否则你会很难堪。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1661',
         word: 'implicit',
         ciyi: 'a. 含蓄的；暗示的；固有的；无疑问的',
         liju1: 'I mean that there was an implicit reality in the photograph that is a new way of looking at something.',
         chinese1: '我说的是在摄影作品中含蓄的表达现实社会是一种看待事物的新的方式。',
         liju2: ' The coach had implicit confidence in the player to win the champion.',
         chinese2: '教练对这名运动员夺冠有十足的把握。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1662',
         word: 'imply',
         ciyi: 'vt. 意味；暗示；隐含',
         liju1: 'His words implied displeasure.',
         chinese1: '他的话暗示出他很不高兴。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1663',
         word: 'import',
         ciyi: 'n. 进口，输入；进口货；意思，含义；重要性vt.输入，进口',
         liju1: 'Germany, however, insists on restrictions on the import of Polish coal.',
         chinese1: '然而德国坚持对波兰煤炭的进口限制。',
         liju2: 'This is cheap imports from other countries.',
         chinese2: '这些是来自其他国家的廉价进口商品。',
         liju3:'I think the last paragraph is the import of the whole story.',
         chinese3:'我认为整个故事的要旨都在最后一段里。',
		 liju4:'Such arguments are of little import.',
		 chinese4:'这种争论几乎不具重要性。',
		 liju5:"'Rich countries benefited from importing Indonesia's timber.'",
		 chinese:'富国从进口印度尼西亚木材中获利。'
       }  	
	    ,   	   
	   {
         id: '1664',
         word: 'impose',
         ciyi: 'vt. 把…强加给；征税；处以(罚款)',
         liju1: 'We have borne this burden not because we seek to impose our will.',
         chinese1: '我们承受这些重负并不是因为我们谋求强加我们的意志。',
         liju2: 'Some state statutes impose special taxes, usually in the form of stamp tax, on sales of stock.',
         chinese2: '有些州的法规对股票销售征收特种税，通常是以印花税的形式征收。',
         liju3:'The regulator has no power to impose fines but can revoke licenses.',
         chinese3:'执法者无权罚款，但有权吊销营业执照。'
       } 
	   ,
	   {
         id: '1665',
         word: 'impress',
         ciyi: 'vt. 盖印；给予某人深刻印象n.印记；痕迹',
         liju1: 'We can impress our logo on the package of the products.',
         chinese1: '我们可以在产品包装上印上我们的标志。',
         liju2: 'She did not impress me at all.',
         chinese2: '她没给我留下丝毫印象。',
         liju3:'The massacre left inerasable impress in the survivors’ hearts.',
         chinese3:'大屠杀在幸存者心中留下来无法抹去的印记。'
       }
	   ,   	   
	   {
         id: '1666',
         word: 'impression',
         ciyi: 'n. 印象；压痕，印记；感想',
         liju1: "'I don't want to give the impression that I'm running away from the charges.'",
         chinese1: '我并不想给人留下一种我在逃避指控的印象。',
         liju2: 'Mike held a diamond firmly against the window and made a deep impressionin the glass.',
         chinese2: '迈克把一颗钻石使劲按在窗户上，在玻璃上留下一个深深的印痕。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1667',
         word: 'impressive',
         ciyi: 'a. 威严的；令人敬畏的；给人以深刻印象的',
         liju1: 'It is an impressive achievement.',
         chinese1: '这是一项令人敬佩的成就。',
         liju2: 'The ancient architecture in this city is most impressive.',
         chinese2: '这座城市里的古建筑给人留下的印象十分深刻。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1668',
         word: 'impulse',
         ciyi: 'n. 冲动；刺激；神经冲动；推动力',
         liju1: ' Unable to resist the impulse, he glanced at the sea again.',
         chinese1: '他抑制不住冲动，又看了一眼大海。',
         liju2: 'The new factory was just the impulse that the local economy needed.',
         chinese2: '这家新工厂正是当地经济所需的推动力。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1669',
         word: 'inaugurate',
         ciyi: 'vt. 创新；开辟；开始；为…举行开幕式；举行就职典礼',
         liju1: 'A Mafia Museum was inaugurated in Corleone.',
         chinese1: '一座黑手党博物馆在科莱奥内举行落成典礼。',
         liju2: 'The new president will be inaugurated on January 20th.',
         chinese2: '新总统将在1月20日正式就任。',
         liju3:' The moon landing inaugurated a new era in space exploration.',
         chinese3:'登月开创了太空探索的新时代。'
       } 
	   ,
	   {
         id: '1670',
         word: 'incentive',
         ciyi: 'n. 动机；刺激；激励',
         liju1: 'Since the Americans have no leverage in these conflicts, they also have no incentive to pick sides.',
         chinese1: '由于美国人在这些冲突中没有影响力，他们也就没有选择站在那边的动机。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1671',
         word: 'incidence',
         ciyi: 'n. 发生率；影响范围',
         liju1: 'The incidence of breast cancer increases with age.',
         chinese1: '乳腺癌的发病率随着年龄的增长而上升。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1672',
         word: 'incident',
         ciyi: 'n. 事件，事变',
         liju1: 'The incident increased the contradictions between the two countries.',
         chinese1: '这一事件加深了两个国家之间的矛盾。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1673',
         word: 'incidentally',
         ciyi: 'ad. 顺便；偶然地；附带地',
         liju1: 'The letter mentioned my great aunt and uncle only incidentally.',
         chinese1: '信里只是附带地提到我的叔祖母和叔祖父。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1674',
         word: 'incline',
         ciyi: 'vi.使倾斜；使倾向于n. 倾斜；斜面；斜坡',
         liju1: 'The old man inclined towards the speakers to hear more clearly.',
         chinese1: '老人朝讲话的人侧过去便听的更清楚。',
         liju2: 'Those who fail incline to blame the world for their failure.',
         chinese2: '那些失败者往往会将其失败归咎于社会。',
         liju3:'He came to a halt at the edge of a steep incline.',
         chinese3:'他停步在一个陡坡的边上。'
       } 
	   ,
	   {
         id: '1675',
         word: 'inclusive',
         ciyi: 'a. 包括的，包含的；范围广的',
         liju1: ' This process should be inclusive of all departments and all situations.',
         chinese1: '此过程应该包括所有部门和所有的情况。',
         liju2: 'Jack made an inclusive list of what he was going to buy in the supermarket.',
         chinese2: '杰克列了一张去超市购物的明细单。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1676',
         word: 'incorporate',
         ciyi: 'vt. 包含，吸收；结合并a. 合并的',
         liju1: 'The new cars will incorporate a number of major improvements.',
         chinese1: '这种新型汽车将包含许多重大的改进。',
         liju2: 'The computer company will be incorporated with another.',
         chinese2: '该计算机公司将于另一家合并。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1677',
         word: 'increasingly',
         ciyi: 'ad. 越来越多地；渐增地；日益',
         liju1: 'The commercial world is now being increasingly computerized.',
         chinese1: '商业界目前正在日益计算机化。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1678',
         word: 'incredible',
         ciyi: 'a. 难以置信的，惊人的；不可相信的',
         liju1: 'It seemed incredible that people would still want to play football during a war.',
         chinese1: '在战争期间人们仍然想踢足球，这似乎不可思议。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1679',
         word: 'incur',
         ciyi: 'vt. 招致，引发；蒙受',
         liju1: ' The currency curriculum made the excursionist incur loss of time and money.',
		 chinese1: '流通（货币）课程使得旅行者招致了时间和金钱的损失。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1680',
         word: 'independence',
         ciyi: 'n. 独立，自立性；自主',
         liju1: 'In 1816, Argentina declared its independence from Spain.',
         chinese1: '1816年，阿根廷宣布脱离西班牙而独立。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1681',
         word: 'independent',
         ciyi: 'a. 独立的；自主的；不受约束的',
         liju1: 'Children should be encouraged to be independent thinkers.',
         chinese1: '应鼓励孩子们成为独立思考者。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1682',
         word: 'index',
         ciyi: 'n. 标志；指数；索引；指针vt.指出；编入索引中',
         liju1: 'The book has in it a name index.',
         chinese1: '该书附有一个人名索引。',
         liju2: 'A person’s face is often an index of his mood.',
         chinese2: '一个人的脸部表情常常反应他的情绪。',
         liju3:'Your influence index can be counted in the same way, although not for free.',
         chinese3:'你的影响力指数也可以通过同样的方法计算，虽然不是免费的。',
		 liju4:'A quarter of this vast archive has been indexed and madeaccessible to researchers.A quarter of this vast archive has been indexed and madeaccessible to researchers.',
		 chinese4:'这批数量巨大的档案的1/4都已编了索引，可供研究者查阅。'
       }
	   ,   	   
	   {
         id: '1683',
         word: 'indicate',
         ciyi: 'vt. 表明；指出；暗示…的可能性',
         liju1: 'Our vote today indicates a change in United States policy.',
         chinese1: '我们今天的投票表明了美国政策的变化。',
         liju2: 'The clouds indicate the coming of rain.',
         chinese2: '云彩预示着即将下雨了。',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1684',
         word: 'indication',
         ciyi: 'n. 指示，指出；迹象；象征',
         liju1: 'He gave no indication that he was ready to compromise.',
         chinese1: '他没有流露出打算妥协的迹象。',
         liju2: 'Tom waited for the indication from his superior as to what to do next.',
         chinese2: '关于接下来要做什么，汤姆等着上司的指示。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1685',
         word: 'indicative',
         ciyi: 'a. 指示的；暗示的',
         liju1: 'His investigation was indicative of his interest in this problem.',
         chinese1: '他的调查暗示了他在这个问题上的兴趣。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1686',
         word: 'indifferent',
         ciyi: 'a. 冷漠的，不关心的；不积极的',
         liju1: 'People have become indifferent to the suffering of others.',
         chinese1: '人们已经变得对别人的痛苦漠不关心。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1687',
         word: 'indignant',
         ciyi: 'a. 愤愤不平的；义愤的',
         liju1: 'He was indignant that his rival was offered the job.',
         chinese1: '他对他的对手得到了那份工作感到愤愤不平。',
         liju2: 'indignation',
         chinese2: 'n. 愤慨；愤怒',
         liju3:'It caused some protest and indignation. ',
         chinese3:'这引起了一些抗议和愤慨。'
       }
	   ,   	   
	   {
         id: '1688',
         word: 'indispensable',
         ciyi: 'a. 不可缺少的；必需的',
         liju1: 'To be without some of the things you want is an indispensable part of happiness.',
         chinese1: '你追求不到的东西有时也是幸福不可缺少的一部分。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1689',
         word: 'individual',
         ciyi: 'a. 个人的；个别的；独特的n. 个人，个体',
         liju1: 'After all，individual strength is limited.',
         chinese1: '个人的力量毕竟是有限的。',
         liju2: 'Go on individual dates with your children. ',
         chinese2: '和你的孩子们进行个人约会。',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1690',
         word: 'indoor',
         ciyi: 'a. 室内的，户内的',
         liju1: 'No smoking in any indoor facilities.',
         chinese1: '在任何室内场所都禁止抽烟。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1691',
         word: 'induce',
         ciyi: 'vt. 诱导；引诱；引起；导致',
         liju1: "'People are always induced by advertisements to buy things they don't really need.'",
         chinese1: '人们总是受广告的引诱，买一些自己并不真正需要的东西。',
         liju2: 'Doctors said surgery could induce a heart attack.',
         chinese2: '医生们说手术可能导致心脏病。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1692',
         word: 'indulge',
         ciyi: 'vt.纵容自己；沉溺；允许(某人)延期付款',
         liju1: 'Most of white collars are too busy to indulge in lunches.',
         chinese1: '大多数白领都非常忙，没有时间好好吃午饭。',
         liju2: 'The bank indulged Mario to play the arrearage in a year.',
         chinese2: '银行允许马里奥在一年内还清了欠款。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1693',
         word: 'industrial',
         ciyi: 'a. 工业的，产业的；从事工业的',
         liju1: 'Shanghai is the most important industrial base of China.',
         chinese1: '上海是中国最重要的工业基地。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }  	
	    ,   	   
	   {
         id: '1694',
         word: 'industrialise/industrialize',
         ciyi: 'vt. 使工业化',
         liju1: 'Energy consumption rises as countries industrialize.',
         chinese1: '能源消耗随着各国工业化而增加。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       } 
	   ,
	   {
         id: '1695',
         word: 'inertia',
         ciyi: 'n. 惯性；惰性，迟钝；不活动',
         liju1: 'He resented her inertia, her lack of energy and self-direction.',
         chinese1: '他讨厌她的懒惰、缺乏活力和自我。',
         liju2: 'Galileo and Descartes replaced that with the idea of inertia.',
         chinese2: '伽利略和笛卡尔用惯性的概念将其取代。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1696',
         word: 'inevitable',
         ciyi: 'a. 必然的，不可避免的',
         liju1: "'You'll have to bow to the inevitable.'",
         chinese1: '你将不得不向不可避免的事态低头。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1697',
         word: 'infant',
         ciyi: 'n. 婴儿；幼儿',
         liju1: 'Mother with her toddler perambulated the infant in tow.',
         chinese1: '母亲与蹒跚学步的孩子一起用童车推着婴儿走。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1698',
         word: 'infectious',
         ciyi: 'a. 传染的；传染性的；易传染的',
         liju1: 'A smile is infectious. Be a positive person and share your smile with others.',
         chinese1: '微笑是会传染的，做一个积极向上的人，和别人分享你的微笑。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   	   ,   	   
	   {
         id: '1699',
         word: 'infer',
         ciyi: 'vt. 推断；推论',
         liju1: "'I can infer from what you've said that you will do it.'",
         chinese1: '从你的话中我可以推断出你会去做的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1700',
         word: 'inference',
         ciyi: 'n. 推理；推论；推断；结论；推断结果',
         liju1: 'There were two inferences to be drawn from her letter.',
         chinese1: '从她的来信可以得到两种推论。',
         liju2: 'We think that the only ground of such an inference is causation.',
         chinese2: '我们认为那种情况唯一可以推断的便是因果关系。',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1701',
         word: 'inferior',
         ciyi: 'a. 差的；下级的，下等的n. 下级；晚辈',
         liju1: 'The cassettes were of inferior quality.',
         chinese1: '这些盒式磁带质量较差。',
         liju2: '',
         chinese2: 'The foreman was very condescending to all of his inferiors.',
         liju3:'这位领班对他的所有下属都非常谦逊。',
         chinese3:''
       },
	   {
         id: '1702',
         word: 'infinite',
         ciyi: ' a. 无限的，无穷的；极大的n. 无限；无穷', 
         liju1: 'Feelings of infinite melancholy stole over him.',
         chinese1: '无限的哀情愁思向他悄悄袭来。',
         liju2: 'This is an error because you now have an infinite loop.',
         chinese2: '出现此错误的原因是现在运行了一个无限循环。',
         liju3:'',
         chinese3:''
       }
	   	   ,   	   
	   {
         id: '1703',
         word: 'inflation',
         ciyi: 'n. 膨胀；通货膨胀',
         liju1: 'We are battling against inflation and unemployment.',
         chinese1: '我们正与通货膨胀和失业做斗争。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1704',
         word: 'influence',
         ciyi: 'n. 影响；势力，权势；vt.影响；改变；感化',
         liju1: 'He denies exerting any political influence over them.',
         chinese1: '他否认曾向他们施加过政治影响。',
         liju2: 'He used his influence to get his son into medical school.',
         chinese2: '他利用权势把儿子弄进了医学院。',
         liju3:'He is trying to improperly influence a witness.',
         chinese3:'他正试图不适当地影响一名证人。'
       }
	    ,   	   
	   {
         id: '1705',
         word: 'influential',
         ciyi: 'a. 有影响的；有势力的',
         liju1: 'This seems to be the most influential organization that represents the interests of Jews in America.',
         chinese1: '这个组织好像是美国最有影响的、代表犹太人利益的组织。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1706',
         word: 'inform',
		 ciyi: 'vt. 通知；告诉；报告vi. 告发；告密',
         liju1: 'Please inform us how to find his house.',
         chinese1: '请告诉我们他家在哪里。',
         liju2: 'We were surprised that it was David’s wife who informed on him.',
         chinese2: '是戴维的妻子告发了他，我们对此感到很惊讶。',
         liju3:'',
         chinese3:''
       }
	   	   ,   	   
	   {
         id: '1707',
         word: 'infrared',
         ciyi: 'n. 红外线ad. 红外线的',
         liju1: 'The images combine infrared and visible light to increase the contrast between water and land.',
         chinese1: '这些图片通过结合红外线及可见光来增大水体和陆地的对比。',
         liju2: ' The detective attached the infraredvideo camera on the ceiling of the hall.',
         chinese2: '侦探把红外线摄影机安装在大厅的天花板上。',
         liju3:'',
         chinese3:''
       }
      ,	   
     {
         id: '1708',
         word: 'infrastructure',
         ciyi: 'n. 基础设施；公共建设；下部构造',
         liju1: 'Grid provides an infrastructure that you turn it on and off as needed.',
         chinese1: '可以根据需要打开和关闭网格提供的基础设施。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1709',
         word: 'ingenious',
         ciyi: 'a. 有独创性的；精制的；心灵手巧的',
         liju1: 'Visitors are struck by its ingenious architecture and exotic layout.',
         chinese1: '独创性的建筑风格和奇特的布局给参观者留下了深刻的印象。',
         liju2: ' The little boy is quite good at inventing some ingenious devices.',
         chinese2: '那个小男孩子很擅长发明一些精巧的小装置。',
         liju3:'Nick is so ingenious that he fixed ail all the broken furniture in the house.',
         chinese3:'尼克真是心灵手巧，他修好了房子里所有的破损家具。'
       }
	   
	   ,   	   
	   {
         id: '1710',
         word:'ingredient',
         ciyi: 'n. 原料；要素；组成部分',
         liju1: 'The meeting had all the ingredients of high political drama.',
         chinese1: '这次会议拥有了极富戏剧性的政治紧张场面的全部要素。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   
	    ,   	   
	   {
         id: '1711',
         word: 'inhabit',
         ciyi: 'vt. 栖息；居住',
         liju1: 'The valley is inhabited by the Dani tribe.',
         chinese1: '这个山谷里居住着丹尼部落。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1712',
         word: 'inhabitant',
         ciyi: 'n. 居民；居住者',
         liju1: 'And in virtual reality, the outside world and all itsinhabitant effectively ceases to exist. ',
         chinese1: '在虚拟现实中，外部世界和及其所有居民有效的停止了存在。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   	   ,   	   
	   {
         id: '1713',
         word: 'inhale',
         ciyi: 'vt. 吸入；猛喝；吸气',
         liju1: 'He took a long slow breath, inhaling deeply.',
         chinese1: '他缓缓地深吸了一口气。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1714',
         word: 'inherent',
         ciyi: 'a. 固有的；内在的；天生的',
         liju1: 'After all, there does not seem to be any inherent impossibility in the combination.',
         chinese1: '毕竟，在这种组合中似乎没有任何固有的不可能性。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1715',
         word: 'inherit',
         ciyi: 'vt. 继承；遗传而得',
         liju1: 'Any format you implement must inherit from one of these classes.',
         chinese1: ' 所实现的任何格式都必须继承自这些类中的一个。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
       ,  	   
	   {
         id: '1716',
         word: 'ibitinh',
         ciyi: 'vt. 抑制；禁止；妨碍',
         liju1: 'We must ensure that standards promote innovation and do not inhibit it.',
         chinese1: '我们必须要确保标准能促进创新，而不是抑制创新。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1717',
         word: 'initial',
         ciyi: 'a. 最初的；词首的n. 词首大写字母',
         liju1: 'The initial reaction has been excellent.',
         chinese1: '最初的反应极好。',
         liju2: 'Would you mind initialing this voucher?',
         chinese2: '请您在这张单子上签上姓名的首字母，好吗？',
         liju3:'A silver Porsche with her initials JB on the side.',
         chinese3:'一辆银色保时捷汽车，侧面有她的姓名首字母JB。'
       }
	    ,   	   
	   {
         id: '1718',
         word: 'initiate',
         ciyi: 'vt.开始，创始；发起',
         liju1: 'They wanted to initiate a discussion on economics.',
         chinese1: '他们想发起一次关于经济学的讨论。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1719',
         word: 'initiative',
         ciyi: 'n. 主动精神；第一步a. 主动的；自发的；创始的',
         liju1: 'We have the initiative; we intend to keep it.',
         chinese1: '我们拥有主动权；我们想要保持主动权。',
         liju2: 'The initiative proposal is approved by the congress.',
         chinese2: '初步提案被国会通过了。',
         liju3:'',
         chinese3:''
       }
	   	   ,   	   
	   {
         id: '1720',
         word: 'inject',
         ciyi: 'vt. 注入；注射',
         liju1: 'His son was injected with strong drugs.',
         chinese1: '他的儿子被注射了强效的药。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1721',
         word: 'injure',
         ciyi: 'vt. 伤害，损害，损伤',
         liju1: 'I can limit and injure by the kindest acts of protection or concern.',
         chinese1: '即使保护或关心这种最善意的行为也会限制和伤害别人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1722',
         word: 'injury',
         ciyi: 'n. 损伤，损害；受伤处',
         liju1: 'She was awarded $3,500 for injury to her feelings.',
         chinese1: '她获得了3500美元的精神损伤费。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   
	   ,   	   
	   {
         id: '1723',
         word: 'inland ',
         ciyi: 'a. 内陆的；内地的；国内的ad. 在内地；在内陆',
         liju1: 'Peasants in inland areas are denied such advantages.',
         chinese1: '内陆的农民无法得到这些优待。',
         liju2: 'We beached the boat and headed inland. ',
         chinese2: '我们想使船靠岸，朝内陆方向驶去。',
         liju3:'',
         chinese3:''
       }
	   
	    ,   	   
	   {
         id: '1724',
         word: 'inlet',
         ciyi: ' n. 入口，进口；水湾；小湾',
         liju1: 'The police had blocked the inlet to the inn.',
         chinese1: '警方已经封锁了客栈的入口。',
         liju2: 'Upon inquiry, he learnt that the inn was near an inlet. ',
         chinese2: '在询问之后，他知道了客栈在一个水湾附近。',
         liju3:'',
         chinese3:''
       }
	  
	   ,   	   
	   {
         id: '1725',
         word: 'inn',
         ciyi: 'n. 客栈；旅馆',
         liju1: 'The tourists will tarry at an inn. ',
         chinese1: '旅游者们将在一个旅店里逗留。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   
	   ,   	   
	   {
         id: '1726',
         word: 'inner',
         ciyi: 'a. 内心的；内部的;',
         liju1: 'What you said opened up his inner world.',
         chinese1: '你所说的揭示了他的内心世界。',
         liju2: 'Not just you’re outside life, but your inner life as well.',
         chinese2: '不仅仅是你的外面人生，你的内部生活也是一样。',
         liju3:'',
         chinese3:''
       }
	  
	   ,   	   
	   {
         id: '1727',
         word: 'innocent',
         ciyi: 'a.无罪的；没有恶意的；无知的；天真的',
         liju1: 'He was sure that the man was innocent of any crime.',
         chinese1: '他确信此人是清白无罪的。',
         liju2: 'It was probably an innocent question, but Michael got flustered anyway.',
         chinese2: '那也许是个没有恶意的问题，但迈克尔还是变得紧张不安。',
         liju3:'Seeing these innocent children, I can’t help recalling my own childhood.',
         chinese3:'看到这些天真无邪的孩子，我不禁想起了自己的童年。'
	   
     }
	    ,   	   
	   {
         id: '1728',
         word: 'innovation',
         ciyi: 'n. 创新，革新；新方法',
         liju1: 'We must promote originality, inspire creativity and encourage innovation.',
         chinese1: '我们必须提倡独创性，激发创造力，鼓励创新。',
         liju2: '',
        chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1729',
         word: 'innumerable',
         ciyi: 'a. 无数的，数不清的',
         liju1: 'There are innumerable stars in the sky. ',
         chinese1: '天空中有无数颗星。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1730',
         word: 'input',
         ciyi: ' n. 投入；输入vt.输入；将…输入电脑',
         liju1: 'The x-ray detectors feed the input into computer programs.',
         chinese1: 'X射线探测器把输入信息传入计算机程序。',
         liju2: 'We need to add an input. ',
         chinese2: '我们需要添加一个输入。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1731',
         word: 'inquiry/enquiry ',
         ciyi: 'n. 探究；调查；询问；打听',
         liju1: 'He made some inquiries and discovered she had gone to Connecticut.',
         chinese1: '他询问了一番，发现她已去了康涅狄格州。',
         liju2: ' In any inquiry, be careful to proceed on right principle.  ',
         chinese2: '在任何调查中，应注意按照正确的原则行事。',
         liju3:'',
         chinese3:''
     },   	   
	   {
         id: '1732',
         word: 'insect',
         ciyi: 'n. 昆虫',
         liju1: ' He instanced the fly as dirty insect.  ',
         chinese1: '他举出苍蝇作为肮脏昆虫的例子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1733',
         word: 'insert ',
         ciyi: 'vt. 插入；嵌入',
         liju1: 'He took a small key from his pocket and slowly inserted it into the lock.',
         chinese1: '他从衣袋里掏出一把小钥匙，然后缓缓地将其插入锁孔里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1734',
         word: 'insight',
         ciyi: 'n. 洞察力；洞悉；见识',
         liju1: 'He was a man of forceful character, with considerable insight and diplomatic skills.',
         chinese1: '他是个性格坚强的人，有着非凡的洞察力和交际手腕。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1735',
         word: 'inspect ',
         ciyi: 'vt. 检查；视察；检阅',
         liju1: 'Elaine went outside to inspect the playing field.',
         chinese1: '伊莱恩到外边去检查运动场。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,	   
	   {
         id: '1736',
         word: 'inspiration ',
         ciyi: ' n. 灵感；鼓舞；鼓励',
         liju1: ' My inspiration comes from poets like Baudelaire and Jacques Prévert.',
         chinese1: '我的灵感来自像波德莱尔和雅克·普莱维尔这样的诗人。',
         liju2: ' What an inspiration she was to all around her! ',
         chinese2: '她对于她周围所有的人是一种多么大的鼓舞!',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1737',
         word: 'inspire',
         ciyi: 'vt. 激起；鼓舞；产生；使产生灵感',
         liju1: 'His speech inspired the soldiers.',
         chinese1: '他的演说使士兵们大受鼓舞。',
         liju2: 'The Muse does not inspire all poets equally.',
         chinese2: '诗神并不一视同仁地赐予所有诗人以灵感。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1738',
         word: 'instability ',
         ciyi: 'n. 不稳定（性）；不安定',
         liju1: 'Water may serve as a type of instability.',
         chinese1: '水可以作为不稳定性的象征。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1739',
         word: 'installation ',
         ciyi: ' n. 安装，装置；设置；就职；就任',
         liju1: 'The installation of these products should be straightforward. ',
         chinese1: '这两个产品的安装应该很简单。',
         liju2: 'Would you attend my installation as principal?',
         chinese2: '你能来参加我就职校长的典礼吗？',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1740',
         word: 'installment ',
         ciyi: ' n.分期付款；部分；一期',
         liju1: "' I'll discuss this in my next installment. '",
         chinese1: '我将在下一部分讨论这个问题。',
         liju2: 'So Azul offers payments by direct bank withdrawal as well as installment plans. ',
         chinese2: '所以阿苏尔通过银行直接提款和分期付款的方式来收费。',
         liju3:'',
         chinese3:''
       }
	   
	    ,   	   
	   {
         id: '1741',
         word: 'instance',
         ciyi: ' n. 实例；例证；例子',
         liju1: ' He instanced the fly as dirty insect.',
         chinese1: '他举出苍蝇作为肮脏昆虫的例子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
       ,
	   {
         id: '1742',
         word: 'instant',
         ciyi: 'a. 立即的；紧迫的；方便的n. 瞬间；时刻',
         liju1: "' Mr. Porter's book was an instant hit.'",
         chinese1: '波特先生的书立刻引起了轰动。',
         liju2: 'The police took instant action to save the endangered child.',
         chinese2: '警察采取紧急行动去营救那个身处险境的孩子。',
         liju3:'He stirred instant coffee into a mug of hot water.',
         chinese3:'他将速溶咖啡搅入一大杯热水中。',
		 liju4:'For an instant, Barney was tempted to flee.',
		 chinese4:'那一瞬间，巴尼很想逃走。'
       }
	   ,
	   {
         id: '1743',
         word: 'instantaneous',
         ciyi: ' a. 瞬间的；即刻的',
         liju1: ' Death was not instantaneous because none of the bullets hit the heart.',
         chinese1: '因为没有一颗子弹射中心脏，所以没有即刻死亡。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1744',
         word: 'instinct ',
         ciyi: ' n. 本能，直觉；天性',
         liju1: 'Some scientists thought that fight between the male animals headed up from their instinct.  ',
         chinese1: '有些科学家认为雄性动物之间的争斗源于其本能。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1745',
         word: 'institute ',
         ciyi: ' vt.制定；创立；设置n. 学会，协会；学院',
         liju1: 'We will institute a number of measures to better safeguard the public.',
         chinese1: '我们将制定许多措施更好地保护公众。',
         liju2: ' There is a middle school attached to the institute.  ',
         chinese2: '这个学院附设一所中学。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1746',
         word: 'institution',
         ciyi: 'n. 制度，惯例；公共机构，协会，学校',
         liju1: 'I believe in the institution of marriage.',
         chinese1: '我相信婚姻制度。',
         liju2: 'This was the house of a private collector, not a big institution. ',
         chinese2: '这是一所私人收藏家的住宅，不是那种大型机构。',
         liju3:'',
         chinese3:''
     }
	    ,   	   
	   {
         id: '1747',
         word: 'instruct',
         ciyi: 'vt. 指导；命令；教，教授',
         liju1: ' He instructed family members in nursing techniques.',
         chinese1: ' 他教家人护理技术。',
         liju2: 'The forces are instructed to wait here until the commander arrives.',
         chinese2: '军队接到命令在此等候，直到指挥官到达。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1748',
         word: 'instrument',
         ciyi: 'n.仪器；工具；乐器；器械',
         liju1: ' A healthy tooth percussed with a metal instrument gives a metallic sound.',
         chinese1: '用金属器械对健康的牙齿作叩诊则发出金属声。',
         liju2: 'Learning a musical instrument introduces a child to an understanding of music.',
         chinese2: '学习一种乐器能引导孩子对音乐有所了解。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1749',
         word: 'instrumental',
         ciyi: ' a. 乐器的；有帮助的',
         liju1: 'What instrumental sound do you hear?  ',
         chinese1: '你会听到什么乐器的声音呢？',
         liju2: "'In his first years as chairman he was instrumental in raising the company's wider profile.'",
         chinese2: '在刚担任董事长的头几年，他在提升公司形象方面发挥了作用。',
         liju3:'',
         chinese3:''
       }
	   
	   	   ,   	   
	   {
         id: '1750',
         word: 'insulate ',
         ciyi: 'vt. 隔离，使孤立；使绝缘，使隔热',
         liju1: ' Rubber is used to insulate electric wires. ',
         chinese1: '橡胶被用来使电线与外界绝缘。',
         liju2: 'Its ability to insulate itself from external shocks stems partly from history and geography.  ',
         chinese2: '波兰能够将自己与外部经济动荡隔离，部分是由于历史和地理原因。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1751',
         word: 'insult',
         ciyi: 'vt. 侮辱；辱骂；损害n. 侮辱；凌辱；无礼',
         liju1: ' I did not mean to insult you.',
         chinese1: '我并非故意要冒犯你。',
         liju2: "'For saving face Mary had to choke down the manager's insult.'",
         chinese2: '为了顾全面子，玛丽对于经理的侮辱只好忍气吞声。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1752',
         word: 'insurance ',
         ciyi: 'n. 保险；保险费；保险业',
         liju1: ' She canvassed for insurance during her spare time.  ',
         chinese1: '她在业余时间里兜揽保险业务。',
         liju2: 'I balanced the benefits against the costs of medical insurance.  ',
         chinese2: '我权衡了医疗保险的好处和它的花费。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1753',
         word: 'insure',
         ciyi: '确保，保证；给…保险',
         liju1: 'For protection against unforeseen emergencies, you insure your house, your furnishings and your car.',
         chinese1: '为防止发生无法预料的紧急情况，人们给房屋、家具和汽车投保。',
         liju2: 'His talent and dedication will insure his success.  ',
         chinese2: '他的才气和执着将确保他成功。',
         liju3:'',
         chinese3:''
       }
	   ,   	   
	   {
         id: '1754',
         word: 'intact ',
         ciyi: ' a. 完整的；原封不动的；未受损伤的', 
         liju1: 'As much as I wish his dad and I could have given him an intact family, we couldn’t. ',
         chinese1: '尽管我是多么希望我和他爸爸能给他一个完整的家，可是我们做不到。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
        ,   
	   {
         id: '1755',
         word: 'integral',
         ciyi: ' a.完整的，整体的；构成整体所必须的',
         liju1: 'Rituals, celebrations, and festivals form an integral part of every human society.',
         chinese1: '仪式、庆典和节日是每个人类社会不可缺少的组成部分。',
         liju2: 'These decisions are an integral element of business operations.  ',
         chinese2: '这些决策是一个完整元素的业务操作。',
         liju3:'',
         chinese3:''
       }
       ,   	   
	   {
         id: '1756',
         word: 'integrate ',
         ciyi: 'vt. 使合并；使…成整体，使结合在一起',
         liju1: 'There is, he said, a lack of an integrated national transportation policy.',
         chinese1: '他说目前缺乏一个整体的全国运输政策。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   , 
	   {
         id: '1757',
         word: 'integrity ',
         ciyi: ' n. 完整；正直；诚实；廉正',
         liju1: ' The ancient pagoda is still there, but not in its integrity. ',
         chinese1: '那座古塔还在，但是不完整了。',
         liju2: 'I have always regarded him as a man of integrity.',
         chinese2: '我一直把他当作一个正直诚实的人。',
         liju3:'',
         chinese3:''
       }
	   ,   
	   {
         id: '1758',
         word: 'intellectual ',
         ciyi: ' a. 智力的；聪明的n. 知识分子',
         liju1: ' High levels of lead could damage the intellectual development of children.',
         chinese1: '高含铅量会损害儿童的智力发育。',
         liju2: 'I have no nationality—the best possible status for an intellectual.  ',
         chinese2: '我没有国籍，对于知识分子而言这可能是最好的状况。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1759',
         word: 'intelligence',
         ciyi: 'n. 智力,才智；灵性，悟性；情报，消息',
         liju1: 'She has shown no abnormality in intelligence or in disposition.  ',
         chinese1: '她在智力或性情上都未显示出任何反常。',
         liju2: 'You have to hurdle to London and get the intelligence back.  ',
         chinese2: '你得克服困难到达伦敦把那份情报取回来。',
         liju3:'',
         chinese3:''
       }
	   ,  	   
	   {
         id: '1760',
         word: 'intelligent',
         ciyi: ' a. 智能的；聪明的；理解力强的',
         liju1: ' Intelligent people cannot be led by the nose.  ',
         chinese1: '聪明的人不会让人牵着鼻子走。',
         liju2: 'Intelligent computers will soon be an indispensable diagnostic tool for every doctor.',
         chinese2: '智能计算机很快将会成为每位医生必不可少的诊断工具。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1761',
         word: 'intelligible',
         ciyi: 'a. 可理解的，易领悟的；明了的，清楚的',
         liju1: 'The language of Darwin was intelligible to experts and non-experts alike.',
         chinese1: '达尔文的语言对专家和平常人来说都容易理解。',
         liju2: 'The simplest and most intelligible answer to this question is that Truth is the object of Logic. ',
         chinese2: '对于这个问题的最简单、最明了的答复是，真理就是逻辑学的对象。',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1762',
         word: 'intend ',
         ciyi: 'vt. 打算；想要；意指',
         liju1: 'What do you intend doing when you get to this place?',
         chinese1: '你打算到这里干什么？',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1763',
         word: 'intense',
         ciyi: 'a. 强烈的，剧烈的，极度的；紧张的，热烈的',
         liju1: 'They abused their power and bullied the people, thus arousing intense discontent among the masses.  ',
         chinese1: '他们仗势欺人，引起群众强烈的不满。',
         liju2: ' Competition among youths to enter the best colleges is intense.  ',
         chinese2: '青年人进名牌大学的竞争十分激烈。',
         liju3:"'I felt so self-conscious under Luke's mother's intense gaze.'",
         chinese3:'在卢克母亲热切的注视下，我感到很不自在。'
       }
	   ,   	   
	   {
         id: '1764',
         word: 'intensity',
         ciyi: 'n. 强度；强烈；亮度；紧张',
         liju1: 'When a surface is perpendicular to the rays, their intensity is at its maximum. ',
         chinese1: '当表面与射线垂直时，射线的强度最大。',
         liju2: 'Learn by Imitation—Kids observe the people around them with enthusiastic intensity.  ',
         chinese2: '通过模仿学习 —— 孩子带着强烈的热情观察周围的人。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1765',
         word: 'intensive ',
         ciyi: ' a. 加强的；集中的；透彻的',
         liju1: 'There we received several weeks of intensive training.  ',
         chinese1: '在那里我们受了几星期的集中训练。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1766',
         word: 'intention',
         ciyi: 'n. 意图；目的；意向',
         liju1: ' His silence threw out his real intention.  ',
         chinese1: '他的沉默显露出了他的真实意图。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1767',
         word: 'interact',
         ciyi: ' vi. 互相影响；互相作用',
         liju1: 'You have to understand how cells interact.',
         chinese1: '你必须得了解细胞之间是如何相互作用的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   	,   	   
	   {
         id: '1768',
         word: 'intercourse',
         ciyi: 'n. 交际，交流，往来',
         liju1: ' The friendly intercourse between our two countries can be traced back to last century.  ',
         chinese1: '我们两国之间的友好往来可以追溯到上个世纪。',
         liju2: 'The magazine becomes a cultural medium of intercourse between the two peoples.  ',
         chinese2: '该杂志成为两民族间文化交流的媒介。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1769',
         word: 'interface',
         ciyi: ' n. 界面；交界面；接口',
         liju1: 'He had interfaced all this machinery with a master computer.',
         chinese1: '他已将这整台机器与一台主控计算机连接起来。',
         liju2: 'You will even be able to do this via a voice interface.  ',
         chinese2: '你甚至将能够通过语音界面来做到这一点。',
         liju3:'',
         chinese3:''
       }
	    ,   	   
	   {
         id: '1770',
         word: 'interfere',
         ciyi: ' vi. 干涉；妨碍；打扰',
         liju1: "'Don't interfere in other's private concerns.  '",
         chinese1: '不要干涉别人的私事。',
         liju2: "'Smoking and drinking interfere with your body's ability to process oxygen.'",
         chinese2: '吸烟和喝酒妨碍身体对氧的吸收能力。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1771',
         word: 'interference ',
         ciyi: ' n. 干扰，干涉；妨碍，打扰',
         liju1: "'He was reckoning without her mother's interference.'",
         chinese1: '他盼望不要受到她母亲的干涉。',
         liju2: 'To what extent will government interference in the digital world limit the development of the industry?  ',
         chinese2: '政府对数字世界的干预会对行业的发展造成多大程度的限制？',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1772',
         word: 'interim ',
         ciyi: ' a. 临时的，暂时的n. 过渡时期，间歇；暂定',
         liju1: ' Please give me an interim receipt.  ',
         chinese1: '请给我一张临时的收据。',
         liju2: 'If we had thought carefully over the interim period, we could have avoided this.  ',
         chinese2: '如果我们在这个过渡时期谨慎地思考，我们可以避开它。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1773',
         word: 'interior ',
         ciyi: ' n. 内部；本质a. 内部的；国内的；本质的',
         liju1: 'He lashed out half a small fortune on the interior decoration.  ',
         chinese1: '他在室内装饰上花了很多钱。',
         liju2: 'The interior of the house was furnished with heavy, old-fashioned pieces.',
         chinese2: '房内陈设着些笨重、老式的家具。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1774',
         word: 'intermediate',
         ciyi: 'a. 中间的，居中的，中级的n. 中间物；媒介',
         liju1: 'Do you make any intermediatestops between your home and work?',
         chinese1: '你在住所和工作地点之间停留吗？',
         liju2: 'Students are categorized as novice, intermediate, or advanced.',
         chinese2: '学生分为新生、中级生或高级生。',
         liju3:'Butterflies are intermediate for transferring pollen.',
         chinese3:'蝴蝶是传播花粉的媒介。'
       },
	   {
         id: '1775',
         word: 'intermittent ',
         ciyi: ' a. 间歇的；断断续续的',
         liju1: 'After three hours of intermittent rain, the game was abandoned.',
         chinese1: '雨断断续续地下了3个小时之后，比赛被取消了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1776',
         word: 'internal',
         ciyi: 'a. 内部的；内在的；国内的,内政的；',
         liju1: 'The fundamental cause of the development of a thing lies in its internal contradictoriness.',
         chinese1: '事物发展的根本原因在于其内部矛盾。',
         liju2: 'Coexistence necessitates the total noninterference by any power in the internal affairs of another.  ',
         chinese2: '共处必需是任何国家都决不干涉别国的内部事务。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1777',
         word: 'interpret',
         ciyi: ' vt. 解释，说明；认为，了解；口译 vi.做口译',
         liju1: "'The judge quite rightly says that he has to interpret the law as it's been passed.'",
         chinese1: '法官很有理地说他必须按照法律被通过时的意义进行解释。',
         liju2: 'I interpreted the ambassador’s remarks for everybody.',
         chinese2: '我为大家口译了大使的话。',
         liju3:'I interpreted Lucy’s answer as a refusal.',
         chinese3:'我把露西的回答理解为是一种拒绝。'
       }
	   ,
	   {
         id: '1778',
         word: 'interrupt ',
         ciyi: 'vt. 中断；妨碍；遮断；打断；干扰',
         liju1: "' I'm sorry to interrupt your meditation. '",
         chinese1: '很抱歉，我打断了你的沉思。',
         liju2: 'Taller plants interrupt the views from the house.',
         chinese2: '高的树木遮住了房子外的视线。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1779',
         word: 'intersection ',
         ciyi: ' n. 交叉；十字路口；交集；交叉点',
         liju1: 'The traffic backed up at the intersection.  ',
         chinese1: '车辆在交叉路口拥塞起来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1780',
         word: 'interval',
         ciyi: ' n. 间隔；间距；幕间休息',
         liju1: ' The process is repeated after a short interval of time.',
         chinese1: '该程序间隔很短时间就重复一次。',
         liju2: 'Fraser did not perform until after the interval.',
         chinese2: '弗雷泽直到中场休息之后才出场。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1781',
         word: 'intervene ',
         ciyi: 'vi. 干涉；调停；插入，介入',
         liju1: 'The situation calmed down when police intervened.',
         chinese1: '警察干预后，局势平静了下来。',
         liju2: 'The mailboat arrived on Friday mornings unless bad weather intervened.',
         chinese2: '除非受到恶劣天气的干扰，邮船于星期五上午到达。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1782',
         word: 'interview',
         ciyi: ' n. 接见，采访；面试，面谈vt.采访；面试',
         liju1: 'The manager will interview the candidates in order of arrival.  ',
         chinese1: '经理将按（到达）先后次序接见这些应征者。',
         liju2: 'The interview went well.',
         chinese2: '面试很顺利。',
         liju3:'The television interview will be aired to all parts of the country. ',
         chinese3:'这个电视采访节目将向全国各地播放。'
       },
	   {
         id: '1783',
         word: 'intimate ',
         ciyi: ' a. 亲密的；私人的；密切的',
         liju1: 'Success and determination are intimate siblings.  ',
         chinese1: '成功和决心是亲密的兄弟。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1784',
         word: 'intimidate ',
         ciyi: 'vt. 恐吓，威胁；胁迫',
         liju1: "' If you try to intimidate us by threats, you'll get more than you bargained for. '",
         chinese1: '如果你想用威胁来恐吓我们，后果将会严重到出乎你的意料。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1785',
         word: 'intricate',
         ciyi: ' a. 复杂精细的；错综复杂的',
         liju1: 'The human eye is a very intricate part of the body.',
         chinese1: '眼睛是人体非常复杂精密的器官。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1786',
         word: 'intrigue',
         ciyi: ' n. 阴谋；诡计；私通vt.激起...的兴趣，迷住vi. 私通；密谋',
         liju1: ' The novelty of the situation intrigued him.',
         chinese1: '那种新奇的情景激起了他的好奇心。',
         liju2: 'He never dirtied his hands with political intrigue. ',
         chinese2: '他从不参与政治阴谋玷污自己。',
         liju3:'While the king was abroad, the barons had been intriguing against him.',
         chinese3:'当国王在国外的时候，男爵们正在密谋推翻他。'
       },
	   {
         id: '1787',
         word: 'intrinsic ',
         ciyi: ' a. 本质的，固有的，内在的',
         liju1: 'Diamonds have little intrinsic value and their price depends almost entirely on their scarcity.',
         chinese1: '钻石没有多少内在价值，它们的价格几乎完全取决于其稀有程度。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1788',
         word: 'introduction ',
         ciyi: 'n. 介绍；引进，传入；导言，绪论；',
         liju1: 'The book is a friendly, down-to-earth introduction to physics.',
         chinese1: '这是一本简明、实用的物理学入门书。',
         liju2: 'You want me to write an introduction to your lectures?  ',
         chinese2: '你要我写一篇文章介绍你的讲座文集？',
         liju3:'The introduction of the biology textbook began with a quote from Darwin.',
         chinese3:'这本生物课本的绪论的开头引用了达尔文的一句话。'
       },
	   {
         id: '1789',
         word: 'intrude',
         ciyi: 'vt. 把… (思想等)强加vi. 闯入；侵入；侵扰',
         liju1: "'Be strict, and don't let them intrude on your thoughts.  '",
         chinese1: '你必须坚定立场，不能让它们侵入你的思维。',
         liju2: 'You had no right to intrude your opinions on the rest of us.',
         chinese2: '你没有权利将自己的观点强加在我们身上。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1790',
         word: 'intuition',
         ciyi: 'n. 直觉；直觉力',
         liju1: 'Her intuition was telling her that something was wrong.',
         chinese1: '她的直觉在告诉她事情有些不对头。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1791',
         word: 'invade ',
         ciyi: ' v. 侵略；侵害；侵入；侵犯',
         liju1: ' Germs invade the organism.  ',
         chinese1: '病菌会侵入机体。',
         liju2: 'Learn to say no to people that invade your privacy.  ',
         chinese2: '学会对侵犯你的隐私的人说不。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1792',
         word: 'invalid ',
         ciyi: ' a. 无效的；无根据的，站不住脚的；有病的；残废的；供病人用的n. 病人；残废者',
         liju1: 'We regarded the contract as having become invalid.  ',
         chinese1: '我们认为这个合同业已失效。',
         liju2: 'We think that those arguments are rendered invalid by the facts.',
         chinese2: '我们认为那些论点在事实面前站不住脚。',
         liju3:'I hate being treated as an invalid.',
         chinese3:'我讨厌被当作病人对待。'
       },
	   {
         id: '1793',
         word: 'invaluable ',
         ciyi: 'a. 无价的；非常贵重的',
         liju1: 'I was able to gain invaluable experience over that year.',
         chinese1: '在那一年里我获得了十分宝贵的经验。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1794',
         word: 'invariable',
         ciyi: 'a. 不变的；恒定的，常数的',
         liju1: ' There are no absolute, invariable moral rules.',
         chinese1: '没有绝对的，不变的道德准则。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1795',
         word: 'invasion',
         ciyi: 'n. 入侵，侵略；侵犯',
         liju1: 'At that time the government was unwilling to resist the foreign invasion.  ',
         chinese1: '那时候政府对外国的入侵不愿进行抵抗。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1796',
         word: 'inventory ',
         ciyi: 'n. 存货，存货清单；详细目录；财产清册',
         liju1: 'Before starting, he made an inventory of everything that was to stay.',
         chinese1: '出发前，他把要留下的所有东西列了一份详细清单。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1797',
         word: 'inverse ',
         ciyi: 'n. 相反；反面，倒数；a. 相反的；倒转的',
         liju1: 'Evil is the inverse of good.  ',
         chinese1: '恶是善的反面。',
         liju2: 'The tension grew in inverse proportion to the distance from their final destination.',
         chinese2: '拉力的增加与到达它们最终点的距离成相反的比例。',
         liju3:'The inverse of 4 is 1/4.',
         chinese3:'4的倒数是1/4。'
       }
	   ,
	   {
         id: '1798',
         word: 'invert ',
         ciyi: 'vt.使…颠倒；使…反转；倒置',
         liju1: 'Invert the cake onto a serving plate.',
         chinese1: '把蛋糕倒扣过来放到一个盘子上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1799',
         word: 'invest ',
         ciyi: ' v. 投资；入股',
         liju1: 'Astute salesmen know how to invest emotionally.',
         chinese1: '精明的商人懂得如何感情投资。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1800',
         word: 'investigate',
         ciyi: ' v. 调查；研究',
         liju1: "'We should not jump to conclusions. Let's investigate first.'",
         chinese1: '我们不应草率下结论，还是先调查一下吧。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1801',
         word: 'investment ',
         ciyi: 'n. 投资，投资额',
         liju1: ' They were discussing over the plan of investment.  ',
         chinese1: '他们就投资规划展开了讨论。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1802',
         word: 'invisible',
         ciyi: ' a. 无形的，看不见的',
         liju1: "'The turtle's shell blended into the mud, making it almost invisible. '",
         chinese1: '龟壳潜入泥中，使它几乎不被看见。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1803',
         word: 'invitation',
         ciyi: 'n. 邀请，招待；引诱；请柬',
         liju1: ' I hated to barge in without an invitation.  ',
         chinese1: '我讨厌不经邀请，擅自闯入。',
         liju2: 'Did you get invitation to Ross’ wedding?',
         chinese2: '你收到罗斯的婚礼请柬了吗？',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1804',
         word: 'involve ',
         ciyi: ' vt. 包含；牵涉，使某人卷入，连累；使陷于',
         liju1: "'I seem to have involved myself in something I don't understand.'",
         chinese1: '我似乎已经将自己卷入了我不了解的事情当中。',
         liju2: 'However, the use of these materials does involve some inherent questions.  ',
         chinese2: '然而，对这些材料的使用涉及了一些固有的问题。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1805',
         word: 'inward',
         ciyi: ' a. 向内的；内部的；内心的ad. 向内；内心里',
         liju1: ' I sighed with inward relief.',
         chinese1: '我内心释然地长出了一口气。',
         liju2: 'He pushed open the front door, which swung inward with a groan.',
         chinese2: '他推开前门，门呀的一声向里开了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1806',
         word: 'irony',
         ciyi: ' n. 讽刺；反语；具有讽刺意味的事',
         liju1: ' His tone was tinged with irony.',
         chinese1: '他的语气中略含讽刺。',
         liju2: 'The irony is that many officials in Washington agree in private that their policy is inconsistent.',
         chinese2: '具有讽刺意味的是，华盛顿的许多官员私下里承认他们的政策是前后矛盾的。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1807',
         word: 'irrespective',
         ciyi: 'a. 无关的；不考虑的；不顾的',
         liju1: ' Irrespective of the approach, it is important to agree tariffs before investments proceed. ',
         chinese1: '不论采用哪种方法，在投资前达成一致同意的电价是重要的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1808',
         word: 'irrigate ',
         ciyi: 'vt. 灌溉；冲洗（伤口等）；使清新',
         liju1: ' None of the water from Lake Powell is used to irrigate the area.',
         chinese1: '鲍威尔湖的水没有被用来灌溉这一地区。',
         liju2: 'The doctor irrigated the wound with the medicated fluid.',
         chinese2: '医生用药液冲洗了伤口。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1809',
         word: 'irritate ',
         ciyi: 'vt. 刺激，使兴奋；激怒',
         liju1: 'Their attitude irritates me.',
         chinese1: '他们的态度激怒了我。',
         liju2: 'Wear rubber gloves while chopping chillies as they can irritate the skin.',
         chinese2: '剁辣椒时戴上橡皮手套，因为它们会刺激皮肤。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1810',
         word: 'isle',
         ciyi: 'n. 岛',
         liju1: 'On the isle of Sardinia in Italy, they prefer Pecorino. They also like it served a very specific way.  ',
         chinese1: '在意大利撒丁岛的其中一个岛，他们更喜欢佩科里诺干酪，以一种特殊的方式。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1811',
         word: 'isolate ',
         ciyi: 'vt. 使隔离；使孤立；使绝缘',
         liju1: 'Computers and networks isolate us from one another.  ',
         chinese1: '计算机和网络将我们孤立开来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1812',
         word: 'issue',
         ciyi: 'n. 问题，争论点；（报刊）期号；发行物vt.发行，发布vi. 发行；流出',
         liju1: 'The king adventured his crown upon the issue.  ',
         chinese1: '国王在此问题上拿他的王冠冒险。',
         liju2: 'Last night he issued a statement denying the allegations.',
         chinese2: '昨天晚上，他发表了一项声明否认那些说法。',
         liju3:'The growing problem is underlined in the latest issue of the Scientific American.',
         chinese3:'这一日益严重的问题在最新一期的《科学美国人》上得到强调。'
       },
	   {
         id: '1813',
         word: 'item ',
         ciyi: 'n. 条款，项目',
         liju1: 'He would not succumb to such an item.  ',
         chinese1: '他不会对这样的条款做出让步的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1814',
         word: 'ivory ',
         ciyi: 'n. 象牙；乳白色；长牙',
         liju1: ' The panel had a veneer of gold and ivory.  ',
         chinese1: '这木板上面镶饰了一层金和象牙。',
         liju2: 'Della would like an ivory silk wedding gown.',
         chinese2: '戴拉想要一件乳白色的丝质婚纱。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1815',
         word: 'jam ',
         ciyi: ' n. 果酱；阻塞；卡住v.使堵塞；挤进，使卡住不到',
         liju1: ' The stadium was jammed and they had to turn away hundreds of disappointed fans.',
         chinese1: '该体育场挤满了人，他们不得不谢绝上百名失望的球迷入场。',
         liju2: 'They detoured around the traffic jam by heading south.  ',
         chinese2: '他们朝南绕过交通拥挤的人群。',
         liju3:'She kept gazing at him, while spreading jam on the bread.  ',
         chinese3:'她在往面包上涂果酱时，眼睛一直在盯着他。'
       }
	   ,
	   {
         id: '1816',
         word: 'jar',
         ciyi: ' n. 罐；广口瓶',
         liju1: 'A jar full of ancient coins was raked up by them in the garden.  ',
         chinese1: '他们在花园里刨出一个装满古币的坛子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1817',
         word: 'jargon ',
         ciyi: ' n. 行话，术语',
         liju1: 'The manual is full of the jargon and slang of self-improvement courses.',
         chinese1: '该手册中满是自我完善课程的行话和俚语。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1818',
         word: 'jaw',
         ciyi: ' n. 颌；下巴',
         liju1: ' A strong square jaw is a sign of firm character.  ',
         chinese1: '强健的方下巴是刚毅性格的标志。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1819',
         word: 'jazz',
         ciyi: ' n. 爵士乐，爵士舞',
         liju1: 'Jack is great on cycling and jazz.  ',
         chinese1: '杰克热衷于骑自行车和听爵士音乐。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1820',
         word: 'jealous',
         ciyi: ' a. 妒忌的；珍惜的，爱惜的',
         liju1: 'He was jealous when he discovered that she loved someone else.  ',
         chinese1: '当他发现她爱别人的时候，他吃醋了。',
         liju2: 'She got insanely jealous and there was a terrible fight.',
         chinese2: '她变得过分地猜忌，接着是一场激烈的打斗。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1821',
         word: 'jet',
         ciyi: 'n. 喷射，喷嘴；喷气式飞机 v. 喷出，喷射',
         liju1: 'A jet of water poured through the windows.',
         chinese1: '一股水柱从窗户喷了过来。',
         liju2: 'The aircraft is powered by three jet engines. ',
         chinese2: '这架飞机由三台喷气发动机驱动。',
         liju3:'Water was jetting profusely from the pipe.',
         chinese3:'水从管子里汩汩喷出。'
       }
	   ,
	   {
         id: '1822',
         word: 'jewel ',
         ciyi: 'n. 宝石；珠宝',
         liju1: 'The French jewel thief was caught by the English police and extradited to France. ',
         chinese1: '那个法国珠宝窃贼被英国的警察抓获送回法国。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1823',
         word: 'jewel(le)ry ',
         ciyi: ' n. 珠宝',
         liju1: 'You can stow your jewellery away in the bank. ',
         chinese1: '你可以把你的珠宝存到银行里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1824',
         word: 'jog',
         ciyi: ' vt. 慢跑，轻推n. 慢跑，轻推',
         liju1: ' He jogged me with his elbow to give me warning.',
         chinese1: '他用肘轻推我以给我警告。',
         liju2: ' Not everyone loves to jog or go to the gym. ',
         chinese2: '不是每个人都喜欢慢跑或去健身房。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1825',
         word: 'joint ',
         ciyi: 'n. 关节；接缝；接合处，接合点a. 共同的；连接的',
         liju1: ' He yawned his jaws out of joint. ',
         chinese1: '他打呵欠打得下巴关节脱了臼。',
         liju2: 'The mason flushed the joint with mortar.  ',
         chinese2: '泥工用灰浆把接缝处抹平。',
         liju3:'She and Frank had never got around to opening a joint account.',
         chinese3:'她和弗兰克还没能抽出时间开个联名账户。'
       }
	   ,
	   {
         id: '1826',
         word: 'jolly',
         ciyi: 'a. 愉快的；欢乐的ad. 很；非常',
         liju1: ' She had a very jolly time in Korea.',
         chinese1: '她在韩国过得很愉快。',
         liju2: 'We had a jolly good time on the beach.',
         chinese2: '我们在海滩上度过了一段美好的时光。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1827',
         word: 'journal ',
         ciyi: 'n. 日报，杂志；日记',
         liju1: 'The finding appears in the journal Science. ',
         chinese1: '这项发现发表在《科学》期刊上。',
         liju2: 'When you have a realization, write it down in your journal.  ',
         chinese2: '当你有所领悟时，把它们记在你的日记里。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1828',
         word: 'journalist ',
         ciyi: 'n. 新闻工作者；报人；记日志者',
         liju1: "'This journalist distorted the spokesman's remarks. '",
         chinese1: '这名记者曲解了该发言人的话。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1829',
         word: 'judg(e)ment ',
         ciyi: 'n. 意见；判断力；审判；判决',
         liju1: 'All action is based on judgement. ',
         chinese1: '一切行动均以判断为基础。',
         liju2: ' If the judgement is enforced, the entrepreneur will be bankrupted.',
         chinese2: '如果执行判决，那位企业家将会破产。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1830',
         word: 'judicial ',
         ciyi: ' a. 公正的，明断的；法庭的；审判的；司法的',
         liju1: ' The White House says the meeting was about stalled judicial nominations, not arms control. ',
         chinese1: '白宫说这次会谈是关于减缓司法的任命，不是控制核武器。',
         liju2: 'The judge is regarded as a man with a judicial mind.',
         chinese2: '这位法官被认为是一个公正的人。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1831',
         word: 'jug ',
         ciyi: 'n.水壶；一大罐容量；监牢vt.关押',
         liju1: 'Skip the boxed and jug wines. ',
         chinese1: '跳过盒装和壶装葡萄酒。',
         liju2: 'Every day, the baby tiger drinks three jugs of milk.',
         chinese2: '那只小老虎每天喝三大罐牛奶。',
         liju3:' The thief has been judged three times.',
         chinese3:'那个小偷做过三次牢。'
       }
	   ,
	   {
         id: '1832',
         word: 'junction ',
         ciyi: ' n. 连接，接合；交叉点；接合点',
         liju1: ' This setup requires an SSL junction.  ',
         chinese1: '这个设置需要一个 SSL 连接。',
         liju2: 'The power station was built at the junction of two rivers.',
         chinese2: '那个发电站厂建在两条河的交汇处。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1833',
         word: 'jungle ',
         ciyi: ' n. 丛林，密林；乱七八糟的一堆',
         liju1: ' We went deep into the jungle.',
         chinese1: '我们走进丛林深处。',
         liju2: 'Social Security law and procedure remain a jungle of complex rules.',
         chinese2: '社会保障法律和程序仍然是充满复杂规定的一团糟。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1834',
         word: 'junior ',
         ciyi: ' a. 年少的；后进的；下级的，低年级的n. 年少者，晚辈；大学三年级学生',
         liju1: 'A handful of junior officers were made to bear responsibility for the incident.',
         chinese1: '几名下级军官被迫对此事件负责。',
         liju2: 'Despite his junior love-guru status, Alec says there are no ladies 　in his life, aside from his mother.  ',
         chinese2: '虽然身为年少的爱情专家，但亚历克说自己的生活中除了母亲还没有其他女士。',
         liju3:"'Their youngest daughter Amy's a junior at the University of Evansville in Indiana.'",
         chinese3:'他们最小的女儿埃米是印第安纳州埃文斯维尔大学的三年级学生。',
		   liju4:'As a junior, we should respect the old. ',
		    chinese4:'作为一个晚辈，我们应该尊敬老人。'
       },
	   {
         id: '1835',
         word: 'junk ',
         ciyi: 'n. 垃圾，废物 vt.丢弃；废弃',
         liju1: ' We have an immunity to all of the junk that lies at the edges of our culture. ',
         chinese1: '这是一个道理。我们已经对于我们社会文化中的各种垃圾产生了免疫力。',
         liju2: 'Consumers will not have to junk their old cassettes to use the new format.',
         chinese2: '消费者们将不必为了使用新制式而丢掉他们的老盒式磁带。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1836',
         word: 'jury ',
         ciyi: ' n.　陪审团；评判委员会',
         liju1: ' The jury convicted Mr. Hampson of all offences.',
         chinese1: '该陪审团裁定汉普森先生的全部罪名成立。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1837',
         word: 'justice ',
         ciyi: 'n. 司法，审判，法律制裁；正义；公平',
         liju1: ' He has a good overall sense of justice and fairness.',
         chinese1: '他有良好的公正和公平的整体意识。',
         liju2: "'Many in Toronto's black community feel that the justice system does not treat them fairly.'",
         chinese2: '多伦多黑人社区的很多人觉得司法制度对他们不公正。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1838',
         word: 'justify',
         ciyi: ' vt.证明…是正当的；替…辩护',
         liju1: ' He attempts to justify his conduct. ',
         chinese1: '他试图为他的行为辩护。',
         liju2: 'No argument can justify a war.',
         chinese2: '没有任何理由能证明一个战争有理。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1839',
         word: 'juvenile ',
         ciyi: ' n. 青少年；少年a. 青少年的；幼稚的',
         liju1: ' Juvenile crime is increasing at a terrifying rate.',
         chinese1: '青少年犯罪在以惊人的速度增加。',
         liju2: 'If you have the courage to do something juvenile and enjoy it, you know you have confidence. ',
         chinese2: '如果你有勇气做一些幼稚的事情并能享受它，这时你便有了信心。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1840',
         word: 'keen',
         ciyi: ' a. 敏锐的，敏捷的；渴望的；强烈的；锐利的',
         liju1: 'The blind have a keen touch. ',
         chinese1: '盲人有敏锐的触觉。',
         liju2: "'You're not keen on going, are you?'",
         chinese2: '你不是很渴望走，对吗？',
         liju3:'The blacksmith who lived in woods could make keen swords.',
         chinese3:'那个住在森林里的铁匠能够铸造出锋利的刀剑。'
       },
	   {
         id: '1841',
         word: 'kettle ',
         ciyi: ' n. 壶；罐',
         liju1: 'Water overruns the kettle while boiling. ',
         chinese1: '水开时从壶里溢了出来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1841',
         word: 'keyboard ',
         ciyi: ' n. 键盘',
         liju1: ' Water overruns the kettle while boiling. ',
         chinese1: '水开时从壶里溢了出来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1842',
         word: 'keyboard ',
         ciyi: ' n. 键盘',
         liju1: "'Tanya's hands rippled over the keyboard.'",
         chinese1: '坦尼娅的双手在键盘上起伏摆动。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1843',
         word: 'kid ',
         ciyi: ' n. 小孩；儿童v. 取笑；戏弄',
         liju1: "'They've got three kids.'",
         chinese1: '他们有三个孩子。',
         liju2: 'My husband often kids me about shedding tears easily like a child.',
         chinese2: '我丈夫常取笑我像小孩子一样爱哭。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1844',
         word: 'kidnap',
         ciyi: ' vt. 绑架；诱拐；拐骗',
         liju1: ' Police in Brazil uncovered a plot to kidnap him.',
         chinese1: '巴西警方侦破了一起要绑架他的阴谋。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1845',
         word: 'kidney ',
         ciyi: 'n. 肾脏；腰子',
         liju1: ' Sugars are reabsorbed in the kidney. ',
         chinese1: '在肾脏内糖被再吸收。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1846',
         word: 'kin ',
         ciyi: ' n. 亲戚；家族；同族；家属',
         liju1: ' All John’s kin were at the wedding.',
         chinese1: '约翰所有的亲属都参加了这场婚礼。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1847',
         word: 'kindergarten',
         ciyi: ' n. 幼儿园；幼稚园',
         liju1: ' She looks after children in the kindergarten. ',
         chinese1: '她在幼儿园照看孩子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1848',
         word: 'kingdom ',
         ciyi: 'n. 王国；界；领域',
         liju1: ' The Kingdom of Lesotho is completely bounded by South Africa.  ',
         chinese1: '莱索托王国四周都与南非接壤。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1849',
         word: 'kit',
         ciyi: 'n. 工具箱;成套工具 vt.装备',
         liju1: 'Inside the kit are the benchmark facilities for loading the database and driving the benchmark. ',
         chinese1: '这个工具包中有用于装载数据库和驱动基准的一些基准工具。',
         liju2: 'The army must be kitted out with proper medical supplies.',
         chinese2: '军队必须配备适当的医药用品。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1850',
         word: 'kneel ',
         ciyi: ' vi. 跪下，跪',
         liju1: ' She knelt by the bed and prayed.',
         chinese1: '她跪在床边祷告。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1851',
         word: 'knit',
         ciyi: 'vi. 编织；编结；缝合；接合',
         liju1: 'Mother is knitting wool into stockings.',
         chinese1: '母亲正在织毛线袜。',
         liju2: 'The doctor knitted her broken bones together.',
         chinese2: '医生把她的断骨拼合好了。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1852',
         word: 'knob ',
         ciyi: 'n. 门把手；旋转',
         liju1: ' He turned the knob and pushed against the door.',
         chinese1: '他转动门把手，推了那扇门。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1853',
         word: 'knot ',
         ciyi: ' n. （绳等的）结；节瘤，疙瘩；节(海里/小时)  vt.打结',
         liju1: 'She tied a pretty knot at the end of her pigtails.  ',
         chinese1: '她在辫子的末梢打了一个花结。',
         liju2: 'A carpenter often rejects half his wood because of knots or cracks.',
         chinese2: '木匠常常因为有节疤或裂缝而把一半的木材都扔掉。',
         liju3:'They travel at speeds of up to 30 knots.',
         chinese3:'他们以高达30节的航速行进。',
		 liju4:'My hair has knotted.',
		 chinese4:'我的头发打结了。'
       },
	   {
         id: '1854',
         word: 'label',
         ciyi: 'vt. 标注；贴标签于…n. 标签；商标；称号；外号',
         liju1: 'It requires foreign frozen-food imports to be clearly labelled.',
         chinese1: '它要求外国进口冷冻食品要粘贴明确的标签。',
         liju2: 'He peered at the label on the bottle.',
         chinese2: '他注视着瓶子上的标签。',
         liju3:'We stick “beauty” as a label on our music teacher.',
         chinese3:'我们给音乐老师取了个“美人”的外号。'
       }
	   ,
	   {
         id: '1855',
         word: 'laboratory ',
         ciyi: 'n. 实验室，研究室',
         liju1: ' He would stay for hours at a stretch in the laboratory. ',
         chinese1: '他在实验室里一蹲就是好几个小时。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1856',
         word: 'lace ',
         ciyi: ' n. 花边；蕾丝；鞋带v.结带子；系带子',
         liju1: 'She finally found the perfect gown, a beautiful creation trimmed with lace.',
         chinese1: '她最终找到了那件完美的大衣，款式漂亮、饰有花边。',
         liju2: 'Barry was sitting on the bed, tying the laces of an old pair of running shoes.',
         chinese2: '巴里正坐在床上系一双旧跑鞋的鞋带。',
         liju3:'The parents began to tell the little child how to lace his shoes.',
         chinese3:'父母开始告诉小孩如何系好鞋带。'
       }
	   ,
	   {
         id: '1857',
         word: 'lad',
         ciyi: ' n. 少年，小伙子；家伙',
         liju1: ' That lad is very handsome. ',
         chinese1: '这小伙子长得挺俊的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1858',
         word: 'lag',
         ciyi: ' n. 落后；迟延，滞后vi.落后于；滞后于',
         liju1: ' I feel I am as obedient and as careful as him, but how come I always lag behind?  ',
         chinese1: '我觉得我和他一样听老师的话，一样认真地做作业，可是，为什么我总比他落后？',
         liju2: 'The girl was tired and lagged behind us, so we had to stop to wait for her.',
         chinese2: '女孩很累，落在了我们后面，所以我们只好停下来等她。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1859',
         word: 'lamb ',
         ciyi: 'n. 羔羊，小羊；羔羊肉',
         liju1: "'One of Mary's prize possessions was a little white lamb which her husband had given her. '",
         chinese1: '玛丽最珍贵的财产之一就是丈夫送给她的一只白色小羊羔。',
         liju2: 'Lebanese cuisine relies heavily on poultry and meat, especially lamb, grilled or served in a stew. ',
         chinese2: '黎巴嫩的菜肴中有大量家禽和肉类，特别是羔羊肉(可烤制或者是炖制)。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1860',
         word: 'lame',
         ciyi: ' a. 跛足的；站不稳的；有缺陷的',
         liju1: ' The lame child lagged far behind.  ',
         chinese1: '那个跛足的孩子远远落在后面。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1861',
         word: 'landlady ',
         ciyi: 'n. 女房东；女地主；女店主',
         liju1: ' When he was at college, he lodged with a landlady. ',
         chinese1: '他上大学时租住在一位女房东家里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1862',
         word: 'landlord',
         ciyi: 'n. 房东，老板；地主',
         liju1: ' He used to be a long-term labourer for a landlord. ',
         chinese1: '他早先给地主扛过长活。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1863',
         word: 'lane',
         ciyi: ' n. 小巷；航线；车道',
         liju1: 'The lane and the main road join here.',
         chinese1: '小巷与大路在此会合。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1864',
         word: 'lantern ',
         ciyi: 'n. 灯笼；提灯',
         liju1: 'There is an ice lantern show in Harbin every year in winter.  ',
         chinese1: '每年冬天，哈尔滨有一次冰灯展。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1865',
         word: 'lap ',
         ciyi: ' n. 一圈；膝盖；大腿',
         liju1: 'She waited quietly with her hands in her lap.',
         chinese1: '她双手放在大腿上静静地等候。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1866',
         word: 'lapse',
         ciyi: ' n. 失误；流逝；失足，行为失检；过失vi. 失效；陷入…状态；终止',
         liju1: 'I told Mar the truth by a lapse of the tongue.',
         chinese1: '我失言把真相告诉了玛丽。',
         liju2: 'Mary couldn’t forgive her husband’s lapses.',
         chinese2: '玛丽无法原谅丈夫的行为失检。',
         liju3:'There is a lapse of several years between the two earthquakes.',
         chinese3:'这两次地震之间有几年的时间间隔。',
		 liju4:"'Remind me to renew the driver's license.It will lapse next month.'",
		 chinese4:'提醒我更换驾驶执照，它下个月就失效了。',
		 liju5:'Annie lapsed into a coma in the car accident.',
		 chinese5:'安妮在车祸中陷入了昏迷。'
       }
	   ,
	   {
         id: '1867',
         word: 'laptop',
         ciyi: ' n.轻便式电脑，笔记本电脑',
         liju1: 'Sarah’s father bought a laptop for her.',
         chinese1: '拉萨的爸爸给她买了一台便携式电脑。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1868',
         word: 'largely',
         ciyi: 'adv. 主要地；基本上；大规模地；大量地',
         liju1: ' Your success will largely depend upon what you do and how you do it.',
         chinese1: '你是否成功将主要取决于你做什么和怎样做。',
         liju2: 'The vast frontier would be largely explored and developed.',
         chinese2: '广袤的边境地区将会大规模地勘探和开发。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1869',
         word: 'laser',
         ciyi: 'n. 激光',
         liju1: ' This is a virtual keyboard with laser impressions on any table or other surface. ',
         chinese1: '这是一个可以在任何桌面或其他表面投射的激光虚拟键盘。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1870',
         word: 'lash',
         ciyi: 'v. 鞭打；抽打；将…系牢；抨击，斥责n. 鞭打；眼睫毛，鞭子，鞭梢',
         liju1: 'The racer lashed the horse across the back with a whip.',
         chinese1: '赛马手用鞭子抽打着马背。',
         liju2: 'Dick is busy in lashing the cargo together on the deck.',
         chinese2: '迈克正在甲板上忙着把货物捆在一起。',
         liju3:'The congressman lashed the president for his nepotism.',
         chinese3:'国会议员抨击总统搞裙带关系。',
		 liju4:'The lash made Mike black and blue all over.',
		 chinese4:'鞭打使迈克浑身青一块紫一块。'
		 
       }
	   ,
	   {
         id: '1871',
         word: 'latent',
         ciyi: ' a. 潜在的；潜伏的；隐藏的',
         liju1: ' So in that sense, there is a certain degree of latent support for him. ',
         chinese1: '所以从这种意义上讲，姆拉迪奇有一定的潜在支持度。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1872',
         word: 'lateral',
         ciyi: 'a. 侧面的，旁边的',
         liju1: 'Mr. Dawson walked into the court from a lateral door. ',
         chinese1: '道森先生从一个侧面的门走进法庭。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1873',
         word: 'latin ',
         ciyi: 'a. 拉丁的；拉丁文的',
         liju1: 'Cuba was one of the least Catholic of the Latin countries.',
         chinese1: '古巴是拉丁语国家中最不信仰天主教的国家之一。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1874',
         word: 'latitude',
         ciyi: 'n. 纬度；界限；活动范围；自由度',
         liju1: ' In the middle to high latitudes rainfall has risen steadily over the last 20-30 years.',
         chinese1: '中高纬度地区的降雨量在过去的20到30年间稳步上升了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1875',
         word: 'latter',
         ciyi: 'a. 后者的；近来的；后面的 pron. 后者',
         liju1: 'He is getting into the latter years of his career.',
         chinese1: '他正进入职业生涯的晚期。',
         liju2: 'This article focuses on the latter. ',
         chinese2: '这篇文章的重点在后者。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1876',
         word: 'laughter',
         ciyi: 'n. 笑；笑声',
         liju1: ' She cloaked her sorrow with laughter. ',
         chinese1: '她用笑来掩饰她的悲痛。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1877',
         word: 'launch',
         ciyi: 'vt. 发射；发起，发动；使…下水n. 发射；投放；下水；汽艇',
         liju1: 'China launchedits first manned rocket in October 2003.',
         chinese1: '中国于2003年10月发射了第一颗载人火箭。',
         liju2: 'They launched a violent attack on the enemy at dawn.',
         chinese2: '他们在拂晓时向敌人发动猛攻。',
         liju3:'The launch of a ship was a big occasion.',
         chinese3:'船下水曾是一件大事。'
       },
	   {
         id: '1878',
         word: 'laundry',
         ciyi: ' n. 洗衣店，洗衣房；要洗的衣服；所洗衣服；洗熨',
         liju1: 'We had to have the washing done at the laundry.',
         chinese1: '我们不得不把衣服放在洗衣店里洗。',
         liju2: 'The first step in having an uncluttered laundry routine is not to have more clothes than you can store. ',
         chinese2: '第一步，拥有一个整洁的日常洗衣程序不是为了让你存放更多要洗的衣物。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1879',
         word: 'lavatory',
         ciyi: ' n. 厕所，盥洗室',
         liju1: ' Where is the lavatory? ',
         chinese1: '盥洗室在哪里？',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1880',
         word: 'lawn',
         ciyi: 'n. 草地；草坪',
         liju1: 'They planted roses round the lawn.',
         chinese1: '他们在草坪四周种了些玫瑰。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1881',
         word: 'layer ',
         ciyi: 'n. 层，层次 ',
         liju1: ' A thin layer of ice formed over the lake. ',
         chinese1: '湖面上凝结了一层薄冰。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1882',
         word: 'layman',
         ciyi: 'n. 外行；门外汉；俗人；一般信徒',
         liju1: 'Where the law is concerned, I am only a layman. ',
         chinese1: '谈到法律，我不过是门外汉。',
         liju2: 'Due to shortage of priests, many duties in the Catholic Church are done by layman.',
         chinese2: '由于牧师的人手不够，这座天主教里的很多事物都是由普通信徒完成的。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1883',
         word: 'layoff ',
         ciyi: ' n.解雇；失业工人',
         liju1: ' In a mass layoff, 50 or more workers are laid off at a time. ',
         chinese1: '大规模裁员，是指50或50个以上的工人同时被解雇的情况。',
         liju2: 'It will close more than 200 stores nationwide resulting in the layoffs of an estimated 2,000 employees.',
         chinese2: '在全国范围内将关闭二百多家商店，造成约两千人失业。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1884',
         word: 'layout ',
         ciyi: 'n. 布局；陈列；版面',
         liju1: ' He tried to recall the layout of the farmhouse.',
         chinese1: '他想回忆那农舍的布局。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1885',
         word: 'leadership ',
         ciyi: ' n. 领导',
         liju1: 'He praised her leadership during the crisis.',
         chinese1: '他称赞了她在危机中的领导作用。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1886',
         word: 'leading',
         ciyi: ' a.处于领导地位的；最主要的；前列的；领衔的',
         liju1: ' China, Japan, and Korea have become leading producers of green technology.',
         chinese1: '中国，日本和韩国已经成为绿色技术的领先生产者。',
         liju2: 'She is one of the leading writers of her days. ',
         chinese2: '她是那个时代最主要的作家之一。',
         liju3:'The leading actor on the stage captured our attention.',
         chinese3:'台上的主角吸引了我们的注意。'
       }
	   ,
	   {
         id: '1887',
         word: 'leaflet',
         ciyi: 'n. 小叶；嫩叶；传单；单页，活页',
         liju1: 'Campaigners handed out leaflets on passive smoking.',
         chinese1: '发起人分发了关于被动吸烟的传单。',
         liju2: ' Several leaflets sprout out from the branch.',
         chinese2: '树枝上长出几片新叶。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1888',
         word: 'leak',
         ciyi: 'n. 泄漏；漏洞，裂缝vt.使渗漏，泄露；漏',
         liju1: 'The barrel began to spring a leak. ',
         chinese1: '那个木桶开始破裂泄漏了。',
         liju2: 'The cottage leaks whenever it rains.',
         chinese2: '每逢下雨，小屋就会漏水。',
         liju3:'The water is leaking in through the cracks.',
         chinese3:'水正从裂缝中渗进来。',
		 liju4:'She looked at her son, her eyes leaking glad tears.',
		 chinese4:'她看着她的儿子，眼里流出高兴的眼泪。'
		 
       }
	   ,
	   {
         id: '1889',
         word: 'lean ',
         ciyi: ' vi. 倾斜；倾向；靠；依赖a. 瘦的；无脂肪的',
         liju1: ' She leans on her husband for advice.',
         chinese1: '她靠丈夫出主意。',
         liju2: 'The flagpole leans to the south.',
         chinese2: '旗杆向南倾斜。',
         liju3:'Like most athletes, she was lean and muscular.',
         chinese3:'像大部分运动员一样，她清瘦而且肌肉强健。'
       },
	   {
         id: '1890',
         word: 'leap',
         ciyi: 'n. 飞跃；跳跃vi. 跳，跳跃',
         liju1: ' He tensed his muscles for the leap. ',
         chinese1: '他绷紧肌肉准备跳跃。',
         liju2: 'The thief leaped the fence and escaped.',
         chinese2: '小偷跳过篱笆逃走了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1891',
         word: 'learned ',
         ciyi: 'a. 博学的；有学问的',
         liju1: ' He is a scholar, a genuinely learned man.',
         chinese1: '他是个学者，一个真正博学的人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1892',
         word: 'lease ',
         ciyi: 'n.租期；租赁；租赁权vt.出租',
         liju1: 'He took up a 10-year lease on the house.',
         chinese1: '他为这房子签了10年的租约。',
         liju2: 'He leased his shop to a friend.',
         chinese2: '他把商店租给了一个朋友。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1893',
         word: 'leather',
         ciyi: 'n. 皮革；皮革制品',
         liju1: 'Wax polish preserves wood and leather. ',
         chinese1: '上光蜡可以保护木材和皮革。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1894',
         word: 'legacy',
         ciyi: 'n. 遗赠，遗产；遗留之物',
         liju1: "'You could make a real difference to someone's life by leaving them a generous legacy.'",
         chinese1: '你留给某人一大笔遗产就可以真正改变他的生活。',
         liju2: 'The invasion left a legacy of hatred and fear.',
         chinese2: '入侵留下了仇恨与恐惧。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1895',
         word: 'legal',
         ciyi: 'a. 法律的；法定的；合法的；正当的',
         liju1: ' He vowed to take legal action.',
         chinese1: '他发誓要诉诸法律行动。',
         liju2: ' Gambling is legal in some countries.',
         chinese2: '在某些国家里赌钱是合法的。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1896',
         word: 'legend ',
         ciyi: ' n. 传奇，传说',
         liju1: 'This legend still spreads abroad among the people. ',
         chinese1: '这个传奇故事依然在民间广泛流传。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1897',
         word: 'legislation ',
         ciyi: ' n. 立法；法律；法规',
         liju1: "'The new government dismantled their predecessors' legislation.'",
         chinese1: '新政府废除了前任政府的立法。',
         liju2: 'Parliament has powers to introduce and pass legislation, summon and impeach ministers or the president. ',
         chinese2: '议会拥有提出和通过法律、召集弹劾内阁成员或总统的权力。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1898',
         word: 'legitimate ',
         ciyi: ' a. 合法的；正当的；合理的；正统的',
         liju1: ' Some of that is legitimate. ',
         chinese1: '上述有些事情是合理的。',
         liju2: 'The opposition parties do not recognize the political legitimacy of his government.',
         chinese2: '反对党不承认他的政府的政治合法性。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1899',
         word: 'leisure ',
         ciyi: 'n. 闲暇；空闲；安逸；悠闲',
         liju1: 'Modern life is compartmentalized into work and leisure.  ',
         chinese1: '现代生活分成工作和闲暇两部分。',
         liju2: 'You will be able to stroll at leisure through the gardens.',
         chinese2: '你将能在花园里悠闲地散步。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '1900',
         word: 'lemon ',
         ciyi: 'n. 柠檬',
         liju1:'A lemon is an acid fruit.', 
         chinese1: '柠檬是一种酸味水果。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1901',
         word: 'lens',
         ciyi: ' n. 透镜，镜头；晶状体',
         liju1: 'The lens of the eye accommodate to distance. ',
         chinese1: '眼球晶状体能根据距离进行调节。',
         liju2: 'The sailor’s face is pressed up against the lens of the periscope.',
         chinese2: '那名水手的脸紧贴着潜望镜的镜头。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1902',
         word: 'lest ',
         ciyi: 'conj. 唯恐，免得',
         liju1: 'I was afraid to open the door lest he should follow me.',
         chinese1: '我当时害怕打开那个门唯恐他跟踪我。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1903',
         word: 'lever ',
         ciyi: 'n. 杠杆；控制杆',
         liju1: ' Push the tiny lever on the lock and let the door lock itself.',
         chinese1: '推锁上的小控制杆，让门自动锁上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1904',
         word: 'levy',
         ciyi: 'n. 征收；征兵，征税vt.征收（税等）',
         liju1: ' We should levy a heavy tax on the wealthy men.',
         chinese1: '我们应该向富人征重税。',
         liju2: 'Green levies and veteran soldiers were gathered soon before the war.',
         chinese2: '开战前，新兵和老兵很快都被召集起来。',
         liju3:'The government levies taxes on real estate and personal property.',
         chinese3:'政府征收不动产和动产税。'
       }
	   ,
	   {
         id: '1905',
         word: 'liability ',
         ciyi: 'n. 债务；责任；义务',
         liju1: 'Your savings are a liability to the bank even though those same savings are an asset to you. ',
         chinese1: '你的储蓄对银行来说是一种债务，虽然这些储蓄也是你的一种资产。',
         liju2: ' But without the formal business entity, you have no hope of limiting your personal liability. ',
         chinese2: '因为没有正规的商务体制，你就没有希望限制你的个人责任。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1906',
         word: 'liable',
         ciyi: ' a. 有责任的，有义务的；有…倾向的；易于…的',
         liju1: 'She will grow into a woman particularly liable to depression.',
         chinese1: '她将变成一个特别易于消沉的女人。',
         liju2: 'The shipping company announced that they’ll be liable for damage of the cargo.',
         chinese2: '运输公司称他们将对货物损毁负责。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1907',
         word: 'liberal ',
         ciyi: 'a. 自由的，思想开朗的；慷慨的；丰富的；富足的',
         liju1: 'She is known to have liberal views on divorce and contraception.',
         chinese1: '大家知道，她对于离婚和避孕持开明的观点。',
         liju2: 'I put a liberal amount of sun block on my skin.',
         chinese2: '我在皮肤上涂抹了大量的防晒霜。',
         liju3:'It was very strange that the mean man’s son was quite liberal.',
         chinese3:'那个吝啬鬼的儿子非常大方，这真是很奇怪。'
       }
	   ,
	   {
         id: '1908',
         word: 'liberate ',
         ciyi: 'vt. 解放；放出；释放',
         liju1: 'They liberated all war prisoners from the concentration camp.',
         chinese1: '他们将所有战俘从集中营里解放出来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1909',
         word: 'liberty ',
         ciyi: 'n. 自由；许可',
         liju1: 'We must not restrain children of their liberty. ',
         chinese1: '我们绝对不要限制孩子们的自由。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1910',
         word: 'librarian',
         ciyi: ' n. 图书馆员；图书管理员',
         liju1: 'The new librarian is a friend of mine.',
         chinese1: '这位新来的图书管理员是我的朋友。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1911',
         word: 'license/licence ',
         ciyi: 'n. 执照，许可证vt.许可；特许',
         liju1: 'No special license will be regranted to anyone from now on.  ',
         chinese1: '特殊许可证今后不得向任何人再行发放。',
         liju2: ' The Turner’s is the only shop that is licensed to sell tobacco in his town.',
         chinese2: '特纳商店是这个小镇上唯一被准许的经营烟草的商店。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1912',
         word: 'lick',
         ciyi: 'vt. 舔；卷过；鞭打n. 舔；打',
         liju1: 'The cat licked its paws clean.',
         chinese1: '猫把爪子舔干净了。',
         liju2: 'The mother licked the child for failing the examination.',
         chinese2: '母亲因孩子考试不及格而打了他。',
         liju3:"'It's incredible how long a cat can go without more than a lick of milk or water.'",
         chinese3:'不可思议的是，猫不舔一口奶或一滴水能活这么久。'
       }
	   ,
	   {
         id: '1913',
         word: 'lid',
         ciyi: ' n. 盖子；盖',
         liju1: 'She pressed down the lid. ',
         chinese1: '她把盖子按了下去。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1914',
         word: 'lightning ',
         ciyi: ' a. 闪电的；快速的n. 闪电',
         liju1: ' Driving today demands lightning reflexes.',
         chinese1: '如今驾车需要闪电般的反应。',
         liju2: 'Lightning usually accompanies thunder. ',
         chinese2: '闪电通常伴有雷声。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1915',
         word: 'likelihood ',
         ciyi: 'n. 可能性，可能',
         liju1: ' When you choose your partners, you increase the likelihood of success. ',
         chinese1: '当你选择合适的合作伙伴，增加成功的可能性。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1916',
         word: 'likely ',
         ciyi: 'a. 很可能的；合适的；有希望的ad. 大概；或许',
         liju1: ' Experts say a "yes" vote is still the likely outcome.',
         chinese1: '专家们表示投赞成票仍是可能的结果。',
         liju2: 'As likely as not, Joe’s forgotten all about the matter.',
         chinese2: '乔大概已经把这件事忘得一干二净了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1917',
         word: 'likewise',
         ciyi: 'ad.同样地；照样的；也；而且',
         liju1: ' What is fair for homeowners likewise should be fair to businesses.',
         chinese1: '对私房业主公平的，同样也该对商家公平。',
         liju2: ' She mentioned how her uncle likewise had been questioned by the police.',
         chinese2: '她提到她的叔叔也遭警察盘问的事。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1918',
         word: 'limb ',
         ciyi: 'n. 肢，臂；分支；枝干；大树枝',
         liju1: ' She would be able to stretch out her cramped limbs and rest for a few hours.',
         chinese1: '她将可以伸开蜷缩的四肢，休息几个小时。',
         liju2: 'The tree was felled and limbed.',
         chinese2: '树被伐倒并被砍去枝条。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1919',
         word: 'limitation',
         ciyi: 'n. 限制；局限性；极限',
         liju1: ' Free composition as an exercise has its limitation. ',
         chinese1: '作为练习的自由命题的作文有其局限性。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1920',
         word: 'limited ',
         ciyi: ' a. 有限的；被限制的',
         liju1: 'With a limited budget the society is handicapped in its operation. ',
         chinese1: '由于该协会的预算有限，其活动受到限制。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1921',
         word: 'limp',
         ciyi: ' a. 柔软的，无力的；软弱的vi. 跛行n. 跛行，蹒跚',
         liju1: ' She was told to reject applicants with limp handshakes.',
         chinese1: '有人告诉她通过无力的握手来拒绝申请者。',
         liju2: "'I wasn't badly hurt, but I injured my thigh and had to limp.'",
         chinese2: '我伤得并不严重，但我伤到了大腿，不得不一瘸一拐地走路。',
         liju3:'A stiff knee following surgery forced her to walk with a limp.',
         chinese3:'手术后僵直的膝盖迫使她瘸着走路。'
       }
	   ,
	   {
         id: '1922',
         word: 'linear',
         ciyi: ' a. 线的，直线的；线性的，线状的；长度的',
         liju1: ' Ants move in linear progression, following each other very closely.',
         chinese1: '蚂蚁一只紧跟着一只，排成直线行进。',
         liju2: 'If you fix a point, then we have linear approximation. ',
         chinese2: '如果你固定了一个点，就能得到线性近似。',
         liju3:'The box is five meters in linear measure.',
         chinese3:'这个盒子有5米长。'
       }
	   ,
	   {
         id: '1923',
         word: 'linen',
         ciyi: ' n. 亚麻布，亚麻线；亚麻制品',
         liju1: 'The linen coat is comfortable to wear.',
         chinese1: '这件亚麻外套穿起来很舒服。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1924',
         word: 'liner',
         ciyi: 'n. 班轮，班机',
         liju1: 'The luxury liner is fully prepared in case of emergency.',
         chinese1: '这架豪华班机为紧急情况做好了充分的准备。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1925',
         word: 'linger ',
         ciyi: ' vi. 徘徊；逗留；拖延；磨蹭',
         liju1: 'The girl lingered by the lake until it was dark.',
         chinese1: '女孩在湖畔一直徘徊到天黑。',
         liju2: 'The beautiful music is still lingering in my ears.',
         chinese2: '美妙的音乐依然在我耳际萦绕。',
         liju3:'He lingered several days after the car accident.',
         chinese3:'他在车祸后拖了几天才死去。'
       }
	   ,
	   {
         id: '1926',
         word: 'linguistic',
         ciyi: 'a. 语言的；语言学的',
         liju1: 'Modern linguistics emerged as a distinct field in the nineteenth century.',
         chinese1: '现代语言学在19世纪作为一个独立的领域出现。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1927',
         word: 'link ',
         ciyi: 'n. 联系，环节vt.连接，连结；联合',
         liju1: ' The Red Cross was created to provide a link between soldiers in battle and their families at home.',
         chinese1: '红十字会被创立来为前线士兵与其家乡的亲人之间提供联系。',
         liju2: 'They planned to build a highway to link the two towns.',
         chinese2: '他们打算修一条公路将两个城镇连接起来。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1928',
         word: 'liquid',
         ciyi: ' a. 液体的；清澈的；液态的n. 液体，流体',
         liju1: ' Wash in warm water with liquid detergent.',
         chinese1: '用液体清洁剂在温水中清洗。',
         liju2: 'All substances, whether they are gaseous, liquid or solid, are made of atoms. ',
         chinese2: '一切物质，不论它们是气体、液体还是固体，都是由原子构成的。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1929',
         word: 'liquor',
         ciyi: 'n. 酒，含酒精饮料；烈酒',
         liju1: ' He carries his liquor like a gentleman. ',
         chinese1: '他酒量很大, 没有丝毫醉意。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1930',
         word: 'liter/litre',
         ciyi: ' n. 升',
         liju1: ' It is sold to the public at eight cents a litre.',
         chinese1: '它以每升8美分的价格出售给公众。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1931',
         word: 'literacy ',
         ciyi: 'n. 读写能力；识字；有文化',
         liju1: 'Literacy is an essential foundation for development and prosperity. ',
         chinese1: '识字是发展和繁荣必不可少的基础。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1932',
         word: 'literally',
         ciyi: 'ad. 照字面地；逐字地；真正地；确实地',
         liju1: 'So he says, you have to read it literally.',
         chinese1: '所以他说，你必须从字面上阅读。',
         liju2: "'We've got to get the economy under control or it will literally eat us up.'",
         chinese2: '我们必须控制住经济，否则它真地就会把我们困住。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1933',
         word: 'literary',
         ciyi: 'a. 文学的；书面的；精通文学的',
         liju1: 'Her literary criticism focuses on the way great literature suggests ideas.',
         chinese1: '她的文学批评集中于伟大文学作品表达思想的方法。',
         liju2: 'Duma is a great literary man.',
         chinese2: '大仲马是一个伟大的作家。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1934',
         word: 'literature ',
         ciyi: ' n. 文学；文献；文艺；著作',
         liju1: 'The subject boasts of an extensive literature.',
         chinese1: '这门学科的文献极为丰富。',
         liju2: 'I have spent my life getting to know diverse literatures of different epochs.',
         chinese2: '我花费一生时间来逐渐了解不同时代形形色色的文学。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1935',
         word: 'litter',
         ciyi: 'n. 垃圾；一窝（动物的幼崽）vt.乱丢；产仔',
         liju1: 'If you see litter in the corridor, pick it up.',
         chinese1: '如果你看到走廊里有垃圾，就把它捡起来。',
         liju2: 'The mother dog gave birth to a litter of 5 puppies.',
         chinese2: '狗妈妈一次产下了五只小狗。',
         liju3:'He litters cigarette ends round the room.',
         chinese3:'他在屋内到处乱丢烟头。',
		    liju4:'The sow littered eight piglets.',
		    chinese4:'那头母猪产下了八只小猪。'
       }
	   ,
	   {
         id: '1936',
         word: 'liver',
         ciyi: ' n. 肝脏',
         liju1: 'Cancer of the liver carried him off last year. ',
         chinese1: '去年肝癌夺去了他的生命。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1937',
         word: 'loaf',
         ciyi: 'n. 条，一条面包vi. 游荡；游手好闲；虚度光阴',
         liju1: 'He goes to smaller stores, chats with familiar people and gets milk and eggs and a small loaf of fresh bread. ',
         chinese1: '他去了几个小店铺，见到熟人聊几句，买了牛奶，鸡蛋和一小块新鲜的面包，继续往前走。',
         liju2: 'That fellow was fired because he had loafed on the job.',
         chinese2: '那个家伙因为闲逛而被解雇了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1938',
         word: 'loan ',
         ciyi: ' n. 贷款；借款；暂借的东西vt.借；借给',
         liju1: 'We obtained a loan from the government. ',
         chinese1: '我们得了一笔政府贷款。',
         liju2: 'The bicycle is a loan from a friend, not mine.',
         chinese2: '这辆车是跟朋友暂借的，不是我的。',
         liju3:'The teacher loaned her a dictionary.',
         chinese3:'老师借给她一本词典。'
		 
       }
	   ,
	   {
         id: '1939',
         word: 'lobby',
         ciyi: 'n. 大厅；休息室；休息厅',
         liju1: 'The delegates entered the assembly hall by way of the lobby.',
         chinese1: '代表们通过大厅进入会场。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1940',
         word: 'local',
         ciyi: 'a. 当地的；地方性的；局部的',
         liju1: ' Every evening the local people perambulate around the park.',
         chinese1: '每天晚上，当地的居民常在这公园里散步。',
         liju2: "'The procedure was done under local anaesthetic in the physician's office.'",
         chinese2: '在医师诊所里经过局部麻醉完成了手术。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1941',
         word: 'locality ',
         ciyi: ' n. 所在；位置；地点',
         liju1: ' Since the reference is part of the data structure, it has good cache locality. ',
         chinese1: '由于引用是数据结构的一部分，所以它有一个好的缓存位置。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1942',
         word: 'locate',
         ciyi: 'vt.查找…的地点；位于；使…坐落',
         liju1: 'We located Nottingham on the map.',
         chinese1: '我们在地图上找出了诺丁汉郡的位置。',
         liju2: 'The university is located in a quiet community.',
         chinese2: '这所大学位于一个安静的社区。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1943',
         word: 'location',
         ciyi: ' n. 位置；地点；场所',
         liju1: 'This corner would make a good location for a gas station.  ',
         chinese1: '这个拐角将是设立一个加油站的好地点。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1944',
         word: 'locker',
         ciyi: 'n. 柜，箱；有锁的橱柜',
         liju1: ' I dialled the combination to open my locker. ',
         chinese1: '我拨暗码打开我的锁柜。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1945',
         word: 'locomotive',
         ciyi: 'a.运动的；移动的n. 机车；火车头',
         liju1: ' The locomotive shed collapsed in the rainstorm.',
         chinese1: '移动工棚在暴风雨中倒塌。',
         liju2: ' This locomotive runs upon electricity. ',
         chinese2: '这台机车是用电运转的。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1946',
         word: 'lodge',
         ciyi: 'vt.寄存；借住；住宿',
         liju1: 'Are there any rooms to lodge me in, Iwonder?',
         chinese1: '我想知道还有可以让我借宿的房间吗？',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1947',
         word: 'lofty',
         ciyi: ' a.崇高的；高耸的；高傲的',
         liju1: 'It was a bank that started out with grand ideas and lofty ideals.',
         chinese1: '那是一家创办时带着宏大理念、崇高理想的银行。',
         liju2: 'These meadows were encircled by lofty hills.',
         chinese2: '这些牧场被高山环绕着。',
         liju3:'Carter is lofty, looking down upon everything.',
         chinese3:'卡特很高傲，目空一切。'
       }
	   ,
	   {
         id: '1948',
         word: 'log',
         ciyi: 'n. 记录；航行日志；原木',
         liju1: 'They log everyone and everything that comes in and out of here.',
         chinese1: '他们把在这里出入的人和发生的事都记入日志。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1949',
         word: 'logic',
         ciyi: 'n. 逻辑；逻辑学；逻辑性',
         liju1: ' Logic is taught here as a separate subject. ',
         chinese1: '逻辑学在这里是作为单独一门课来讲授的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1950',
         word: 'logical',
         ciyi: 'a. 合逻辑的，合理的；逻辑学的',
         liju1: ' If the climate gets drier, then the logical conclusion is that even more drought will occur.',
         chinese1: '如果气候变得更干燥，那么符合逻辑的结论就是甚至更多的旱灾将会发生。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1951',
         word: 'longitude ',
         ciyi: 'n. 经度；经线',
         liju1: 'The map even includes lines of latitude and longitude.',
         chinese1: '这张地图甚至包含了经线和纬线。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1952',
         word: 'loom',
         ciyi: 'n. 织布机vi. 隐现；朦胧地出现',
         liju1: 'The loom was blown off. ',
         chinese1: '这台纺织机已清洗。',
         liju2: 'A flagpole loomed up through the mist.',
         chinese2: '在薄雾中隐隐可见一根旗杆。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1953',
         word: 'loop',
         ciyi: 'n. 环；圈；弯曲部分',
         liju1: 'If so, skip to the next iteration of the loop. ',
         chinese1: '如果是的话则跳过到循环的下个迭代。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1954',
         word: 'loose',
         ciyi: ' a. 宽松的；散漫的；肥大的',
         liju1: ' I had to wear a belt because my pants were too loose.',
         chinese1: '裤子太肥了，我不得不系腰带。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1955',
         word: 'loosen ',
         ciyi: ' v. 放松；松开',
         liju1: 'Harry loosened his grip momentarily and Anna wriggled free.',
         chinese1: '哈里刚松了一下手，安娜就挣脱了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1956',
         word: 'lord',
         ciyi: ' n. 主；上帝；主人，长官，君主',
         liju1: 'I know the Lord will look after him.',
         chinese1: '我知道上帝会照顾他的。',
         liju2: 'The servants’ subjection to their lord was not of their own faith.',
         chinese2: '这些仆人对主人的顺从并非己愿。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1957',
         word: 'lorry ',
         ciyi: 'n.卡车；货车；运料车',
         liju1: ' His bicycle collided with a lorry. ',
         chinese1: '他的自行车撞在一辆卡车上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1958',
         word: 'lottery',
         ciyi: 'n. 碰运气的事，难算计的事；彩票；抽彩给奖法',
         liju1: ' The stockmarket is a lottery.',
         chinese1: '股市靠的是运气。',
         liju2: ' They tried to hype up their goods by the lottery. ',
         chinese2: '他们试图以抽奖的方式刺激销售。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1959',
         word: 'loudspeaker',
         ciyi: ' n. 喇叭，扬声器；扩音器',
         liju1: 'Her voice over the loudspeaker was distorted. ',
         chinese1: '她通过扬声器说话的声音失真了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1960',
         word: 'lounge',
         ciyi: 'n. 休息室；客厅vi. 闲逛；懒洋洋地躺卧；斜倚',
         liju1: ' After dinner we all adjourned to the lounge. ',
         chinese1: '饭后我们都到休息室去了。',
         liju2: 'The child lounged in an armchair.',
         chinese2: '孩子懒洋洋地倚在扶手椅里。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1961',
         word: 'lower',
         ciyi: 'vt. 使降低；放低；贬低a. 下游的；下级的；下等的',
         liju1: 'He was forced to lower the rent of his house.',
         chinese1: '他被迫降低房租。',
         liju2: "'The nation's highest court reversed the lower court's decision.'",
         chinese2: '该国的最高法院推翻了下级法院的判决。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1962',
         word: 'loyal',
         ciyi: 'a. 忠诚的，忠心的；忠贞的',
         liju1: ' Some of their most loyal members have now fallen off. ',
         chinese1: '他们一些最忠诚的会员现已经退出了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1963',
         word: 'loyalty',
         ciyi: 'n. 忠诚；忠心；忠实',
         liju1: ' Once he took the vow his loyalty never wavered. ',
         chinese1: '一旦他发了誓，他的忠诚从不动摇。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1964',
         word: 'lubricate',
         ciyi: 'vt.使…润滑；给…加润滑油',
         liju1: 'Mineral oils are used to lubricate machinery.',
         chinese1: '矿物油被用来润滑机器。',
         liju2: 'luggage',
         chinese2: 'n. 行李；皮箱',
         liju3:' He dumped down his luggage. ',
         chinese3:'他砰地放下行李。'
       }
	   ,
	   {
         id: '1965',
         word: 'lumber',
         ciyi: 'n. 木材；木料',
         liju1: 'The forest provides lumber, habitat and freshwater and it sequesters vast amounts of carbon. ',
         chinese1: '森林可以提供木材、动物栖息地和淡水，还能储备大量的碳。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1966',
         word: 'lump ',
         ciyi: ' n. 块，块状vt.把…归在一起vi. 结块',
         liju1: ' One day, I noticed a lump in her skin. ',
         chinese1: '有一天，我注意到她皮肤上有个肿块。',
         liju2: "'Don't lump all these different problems together.'",
         chinese2: '不要把这些不同的问题混为一谈。',
         liju3:'The words lumped in my throat.',
         chinese3:'话在我的喉头哽住了。'
       }
	   ,
	   {
         id: '1967',
         word: 'lunar',
         ciyi: 'a. 月亮的，月球的；阴历的',
         liju1: 'The Spring Festival is the lunar New Year. ',
         chinese1: '春节即农历新年。',
         liju2: 'The vast volcanic slope was eerily reminiscent of a lunar landscape.',
         chinese2: '巨大的火山坡很奇怪地让人想起月球上的景观。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1968',
         word: 'lung ',
         ciyi: 'n. 肺；呼吸器',
         liju1: 'They forced air into his lung. ',
         chinese1: '他们把空气吹入他的肺里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1969',
         word: 'lure',
         ciyi: ' n. 诱惑；饵；诱惑物vt.诱惑；引诱',
         liju1: 'She never holds out on the lure of money to do something they wanted. ',
         chinese1: '她从未因为金钱的诱惑而做出他们想让她做的事情。',
         chinese2: 'He was lured to destruction.',
         liju3:'他受诱惑而走向毁灭。',
         chinese3:''
       }
	   ,
	   {
         id: '1970',
         word: 'luxury',
         ciyi: ' n. 奢侈，奢华；奢侈品',
         liju1: 'By all accounts he leads a life of considerable luxury.',
         chinese1: '从方方面面来讲，他都过着极为奢侈的生活。',
         liju2: 'He could not afford luxury food on his pay.',
         chinese2: '凭他的薪水，他吃不起奢侈的食品。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1971',
         word: 'lyric',
         ciyi: ' a. 抒情的；吟唱的n. 抒情诗；歌词',
         liju1: ' The lyric music in this cafe reduced him to tears.',
         chinese1: ' 这间咖啡馆的抒情乐让他不禁潸然泪下。',
         liju2: 'This lyric sings well. ',
         chinese2: '这首抒情诗唱起好听。',
         liju3:' He sang not well but the lyrics he wrote were in a unique style.',
         chinese3:'他唱的不是很好，但是他写的歌词却独具风格。'
       }
	   ,
	   {
         id: '1972',
         word: 'machinery',
         ciyi: 'n. 机械；机器；机制；机械装置',
         liju1: ' China will host an exhibition of international garment machinery. ',
         chinese1: '中国将主办国际服装机械展览会。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1973',
         word: 'magic',
         ciyi: ' n. 巫术；魔法；戏法a.有魔力的；魔术的',
         liju1: 'All this was supposed to work like magic.',
         chinese1: '这一切应该魔法般地起作用。',
         liju2: 'The witch poured a magic potion in her cauldron.',
         chinese2: '巫婆在大锅里投入了一剂魔力药粉。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1974',
         word: 'magistrate ',
         ciyi: ' n. 地方法官；文职官员；治安推事',
         liju1: 'A couple of codgers got into a quarrel and came before the local magistrate. ',
         chinese1: '一对性情乖僻的老夫妻发生了争吵，一直闹到地方法官那里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1975',
         word: 'magnet',
         ciyi: 'n. 磁铁；磁体；磁石',
         liju1: 'The earth may be thought of as a gigantic magnet. ',
         chinese1: '整个地球可以想像为一块硕大无朋的磁石。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1976',
         word: 'magnetic',
         ciyi: ' a. 地磁的；有磁性的；有吸引力的',
         liju1: ' If we charge it with electricity, it will become magnetic. ',
         chinese1: '如果充上电，它就会带有磁性。',
         liju2: 'To be a good teacher, you must be enthusiastic and magnetic.',
         chinese2: '要当一名好老师，你必须热情，有吸引力。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1977',
         word: 'magnificent ',
         ciyi: 'a.壮丽的；华丽的；宏伟的',
         liju1: ' These magnificent ancient buildings demonstrate the great intelligence of the labouring people. ',
         chinese1: '这些壮丽的古代建筑显示了劳动人民的高度智慧。',
         liju2: 'After the fire, nothing remained of the magnificent buildings of the temple. ',
         chinese2: '大火过后，寺院里的那些宏伟建筑已荡然无存。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1978',
         word: 'magnify ',
         ciyi: ' vt. 放大；赞美；夸大',
         liju1: 'The microscope magnified the object two hundred times.',
         chinese1: '这架显微镜把实物放大了200倍。',
         liju2: 'She is inclined to magnify her troubles. ',
         chinese2: '她喜欢夸大她的困难。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1979',
         word: 'magnitude ',
         ciyi: ' n. 大小；数量；巨大；重要性',
         liju1: ' I want to know the magnitude of this equipment before making room for it.',
         chinese1: '在给这个设备腾出地方前，我想知道它的大小。',
         liju2: 'The flood caused a magnitude of loss.',
         chinese2: '洪水造成了巨大的损失。',
         liju3:'I didn’t realize the magnitude of this meeting and paid little attention to it.',
         chinese3:'我没有意识到这次会议的重要性，一点也没有重视它。'
       }
	   ,
	   {
         id: '1980',
         word: 'maid',
         ciyi: ' n. 女仆；少女',
         liju1: 'She doubled as secretary and maid in the play.',
         chinese1: '她在剧中兼演秘书和女佣。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1981',
         word: 'maiden',
         ciyi: 'a.首次的；初次的n. 少女；处女',
         liju1: ' In 1912, the Titanic sank on her maiden voyage.',
         chinese1: ' 1912年，泰坦尼克号首次航行时沉没。',
         liju2: ' His reputation stunk for obscenities to a maiden. ',
         chinese2: '他因猥亵一名少女而声名狼藉。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1982',
         word: 'mainland',
         ciyi: 'n. 大陆；本土',
         liju1: 'They have relatives on the mainland. ',
         chinese1: '他们在大陆有亲戚。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1983',
         word: 'maintain ',
         ciyi: 'vt. 维持；保持；维修；保养；主张；坚持',
         liju1: 'We must maintain friendly relations with them.',
         chinese1: '我们必须和他们保持友好关系。',
         liju2: 'The trucks have to be constantly maintained.',
         chinese2: '卡车必须经常得到保养。',
         liju3:'I maintained my opinion.',
         chinese3:'我坚持自己的意见。'
       }
	   ,
	   {
         id: '1984',
         word: 'maintenance ',
         ciyi: 'n.维修；保养；保持；维持',
         liju1: 'The maintenance process is not configurable; it starts at midnight every 24 hours. ',
         chinese1: '维护处理是不可配置的，它每隔 24 小时在午夜启动。',
         liju2: '保持国家之间的友好关系很重要。',
         chinese2: '保持国家之间的友好关系很重要。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1984',
         word: 'majesty ',
         ciyi: 'n. 威严；最高权威，王权；雄伟；壮丽',
         liju1: 'The majesty of the skyscraper awed me.',
         chinese1: '这幢摩天大厦的雄伟气势令我惊叹。',
         liju2: 'His majesty requests your presence in the royal chambers.',
         chinese2: '国王陛下要求你在皇室受召见。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1985',
         word: 'majority ',
         ciyi: ' n. 多数；大多数；成年',
         liju1: ' His opinion represents that of the majority. ',
         chinese1: '他的意见代表大多数人的意见。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1986',
         word: 'male ',
         ciyi: 'a. 男性的；雄性的n. 男人；雄性动物',
         liju1: 'Massive male unemployment has diminished the status of men in the family.',
         chinese1: '大量男性失业已经降低了男人在家庭中的地位。',
         liju2: 'Some scientists thought that fight between the male animals headed up from their instinct. ',
         chinese2: '有些科学家认为雄性动物之间的争斗源于其本能。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1987',
         word: 'malignant',
         ciyi: 'a. 恶性的；有害的；致命的',
         liju1: 'A cancer is a malignant tumour.',
         chinese1: '癌是一种恶性瘤。',
         liju2: 'A highly malignant kind of cancer was discovered by experts last month.',
         chinese2: '上个月，专家发现了一种非常致命的癌症。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1988',
         word: 'mammal',
         ciyi: 'n. 哺乳动物',
         liju1: 'A whale is a kind of mammal. ',
         chinese1: '鲸是一种哺乳动物。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1989',
         word: 'management ',
         ciyi: 'n. 管理；经营；管理部门；操纵',
         liju1: ' The zoo needed better management rather than more money.',
         chinese1: '动物园需要更好的管理而非更多的钱。',
         liju2: ' They referred their plan to the management. ',
         chinese2: '他们将计划提交管理部门。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1990',
         word: 'manifest',
         ciyi: 'vt. 证明，表明；显示a.明了的；明白的',
         liju1: 'Her actions manifested a complete disregard for personal safety.',
         chinese1: '她的行为证明她完全不顾个人安危。',
         liju2: 'Kevin strove to make his ideas manifest to us.',
         chinese2: '凯文极力使我们明白他的想法。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1991',
         word: 'manipulate',
         ciyi: 'vt. 操纵；操作；控制；影响',
         liju1: 'He quickly learned how to manipulate the controls of a plane.',
         chinese1: '他很快学会了操作飞机的操纵装置。',
         liju2: 'It is a simple matter to manipulate such a situation.',
         chinese2: '控制这种局面是很简单的事情。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1992',
         word: 'mankind',
         ciyi: 'n. 人类；男性',
         liju1: ' Asia is one of the places where mankind originated.',
         chinese1: '亚洲是人类的发源地之一。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1993',
         word: 'manner',
         ciyi: ' n. 方式；方法；举止；礼貌；规矩；风俗',
         liju1: "'I'm a professional and I have to conduct myself in a professional manner.'",
         chinese1: '我是专业人士，必须以专业方式行事。',
         liju2: 'His manner was self-assured and brusque.',
         chinese2: '他的举止自负而且粗鲁。',
         liju3:'The manners of many doctors were appalling.',
         chinese3:'许多医生很没礼貌。',
		   liju4:'The folklorist wrote a book on the manners and customs of the ancient Egyptians.',
		 chinese4:'用餐时约翰忘了规矩，站起去取桌上较远处的醋。'
       }
	   ,
	   {
         id: '1994',
         word: 'manoeuvre/maneuver ',
         ciyi: 'vi.演习；移动；运动；熟练而巧妙的引导某人',
         liju1: 'The admiral manoeuvred his ships in the battle plan.',
         chinese1: '舰队司令按作战计划进行舰队演习。',
         liju2: 'Thesailors maneuvered their ships between the huge trunks.',
         chinese2: '水手们操纵着船在巨大的主航道间穿梭。',
         liju3:'Diana maneuvered the conversation round marriage as she had dinner with John, her boyfriend.',
         chinese3:'和男朋友约翰吃饭时，黛安娜巧妙地把话题引到了婚姻问题上。'
       }
	   ,
	   {
         id: '1995',
         word: 'manual',
         ciyi: 'a. 手工的；体力的；手工做的n. 手册，指南',
         liju1: 'All we ever got was manual labour and illness.',
         chinese1: '我们曾经得到的只有体力劳动和疾病。',
         liju2: 'I did that and also deleted the online manual and default index pages. ',
         chinese2: '我这样做了，而且还删除了在线手册和默认的索引页。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1996',
         word: 'manufacture ',
         ciyi: 'n. 制造；产品；制造业vt.制造；加工',
         liju1: 'The equipment is of our own manufacture. ',
         chinese1:'这台设备是我们自己制造的。',
         liju2: 'This steel is manufactured from Swedish iron.',
         chinese2: '这种钢材是用瑞典的铁炼制的。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1997',
         word: 'manuscript',
         ciyi: 'He had seen a manuscript of the book.',
         liju1: '他见过这本书的一份手稿。',
         chinese1: '',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '1998',
         word: 'marathon ',
         ciyi: 'n. 马拉松赛跑；马拉松式的活动a. 马拉松式的',
         liju1: 'Two of the runners in the Marathon race collapsed and were carried off in a state of prostration. ',
         chinese1: '两位马拉松赛跑选手累倒了，他们在虚脱状态中被抬走。',
         liju2: 'Think of work as a series of sprints, not a marathon.  ',
         chinese2: '把工作看成一段段短跑，而不是一场漫长的马拉松。',
         liju3:'Thefootball players volunteered for a marathon journey which lasted for 56 hours.',
         chinese3:'足球选手自愿参加了一项长达56小时的马拉松式旅行。'
       }
	   ,
	   {
         id: '1999',
         word: 'marble',
         ciyi: ' n. 大理石；大理石制品；弹珠',
         liju1: 'The house has a superb staircase made from oak and marble.',
         chinese1: '这座房子里有用栎木和大理石做成的一流的楼梯。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2000',
         word: 'margin',
         ciyi: ' n. 边缘；页边的空白；幅度；余地；差距；差额',
         liju1: ' She added her comments in the margin.',
         chinese1: '她在页边空白处加上了她的评语。',
         liju2: 'The money is collected in a straightforward way with little margin for error.',
         chinese2: '这笔钱是直接募集上来的, 几乎没有出错的余地。',
         liju3:'They culd end up with a 50-point winning margin.',
         chinese3:'他们最后可能会以50点的优势获胜。'
       }
	   ,
	   {
         id: '2001',
         word: 'marine ',
         ciyi: 'a. 海生的；海产的；船舶的；航海的',
         liju1: 'The sea otter is well adapted at its marine existence.',
         chinese1: '海濑能很好地适应海洋的生存环境。',
         liju2: 'The government regulates marine navigation.',
         chinese2: ' 船舶的航行由政府调控',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2002',
         word: 'marital ',
         ciyi: ' a. 婚姻的；夫妻的',
         liju1: 'The marital status itself is part of the core business data, but it is stored there only as a short code.', 
         chinese1: '虽然婚姻状况本身就是部分核心业务数据，但是它只是作为一个短代码被存储在那里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2003',
         word: 'married',
         ciyi: 'a. 已婚的，夫妇的；密切结合在一起，与…结婚的',
         liju1: 'We have been married for 14 years.',
         chinese1: '我们已经结婚14年了。',
         liju2: 'Kevin is married to his work.',
         chinese2: '凯文一心扑在工作上。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2004',
         word: 'marvel(l)ous ',
         ciyi: 'a. 了不起的；令人惊异的；不平常的',
         liju1: ' Luke was a marvellous photographer in the circle.',
         chinese1: '卢克在圈子里是个了不起的摄影师。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2005',
         word: 'Marxist ',
         ciyi: ' n. 马克思主义者a. 马克思主义的',
         liju1: 'He is a communist politician of Russia, and one of the greatest contributors of the Marxist theory. ',
         chinese1: '他是俄国的共产主义政治家，有着伟大贡献的马克思主义理论家之一。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2006',
         word: 'masculine',
         ciyi: ' a. 男性的；男子的；男子气概的',
         liju1: 'Masculine characteristics like a husky voice and facial hair.',
         chinese1: '沙哑的嗓音和面部的胡须之类的男性特征。',
         liju2: ' Jim looks rather masculine in that suit.',
         chinese2: '吉姆穿着那件衣服看起来很有男子气概。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2007',
         word: 'mask',
         ciyi: ' n. 面具；口罩vt.掩饰；戴面具；掩盖',
         liju1: 'The gunman, whose mask had slipped, fled.',
         chinese1: '面具滑落的持枪歹徒逃走了。',
         liju2: 'Her smile masked her anger.',
         chinese2: '她的微笑掩饰了怒气。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2008',
         word: 'mass',
         ciyi: 'n. 块，团；群众，民众；大量，众多；质量 a. 大规模，群众的',
         liju1: ' On his desk is a mass of books and papers.',
         chinese1: '在他书桌上有大堆的书和文件。',
         liju2: 'Astronomers know that Pluto and Triton have nearly the same size, mass, and density.',
         chinese2: '天文学家们知道冥王星和海王卫一拥有几乎相同的体积、质量和密度。',
         liju3:'The manager asked us to promote professional competence on a mass scale.',
         chinese3:'经理要求我们大幅提高业务水平。'
       }
	   ,
	   {
         id: '2009',
         word: 'massacre ',
         ciyi: ' vt. 残杀；屠杀；彻底击败n. 大屠杀；惨败',
         liju1: 'Maria lost her 62-year-old mother in the massacre.',
         chinese1: '玛丽亚在大屠杀中失去了她62岁的母亲。',
         liju2: 'The lawyer is collecting evidence to massacre his opponents.',
         chinese2: '这位律师正在搜索证据以彻底击败他的对手。',
         liju3:'The second round was a complete massacre.',
         chinese3:'第二回合是一次彻底的惨败。'
       }
	   ,
	   {
         id: '2010',
         word: 'massive',
         ciyi: 'a.粗大的，厚实的；大量的；大规模的',
         liju1: ' For example, during the elections, they have massive propaganda against Iran at that time. ',
         chinese1: '例如，在选举期间，他们对伊朗进行大规模的负面宣传。',
         liju2: 'I saw massive black clouds boiling up from the west.',
         chinese2: '我看到大块的乌云从西边翻涌而至。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2011',
         word: 'master ',
         ciyi: 'vt. 控制；精通n. 硕士；主人；大师；教师a.主要的；熟练的',
         liju1: ' If only I could be master of this subject. ',
         chinese1: '我多么希望能精通这门学科。',
         liju2: 'My master ordered me not to deliver the message except in private.',
         chinese2: '主人命令我不能传送信息，除非在私下里。',
         liju3:'The old paintings must be painted by a master’s hand.',
         chinese3:'这些古画定是出自名家之手。',
		 liju4:'Henry got his Master’s degree last year.',
		 chinese4:'亨利去年取得了硕士学位。',
		 liju5:'This master switch controls power of the entire factory.',
		 chinese5:'这个主开关控制着整个工厂的电力。'
       }
	   ,
	   {
         id: '2012',
         word: 'masterpiece ',
         ciyi: ' n. 杰作；名著',
         liju1: 'The book would be his masterpiece. ',
         chinese1: '这本书将是他的杰作。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2013',
         word: 'mat',
         ciyi: ' n. 垫；垫子；衬边',
         liju1: 'The food is served on polished tables with mats.',
         chinese1: '食物被摆放在擦得光亮的餐桌的垫子上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2014',
         word: 'mate ',
         ciyi: 'n. 助手；配偶；同事',
         liju1: 'He has found his ideal mate.',
         chinese1: '他已经找到了理想的配偶。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2015',
         word: 'mathematical',
         ciyi: ' a. 数学的，数学上的',
         liju1: ' Each of them is declared as in the mathematical model. ',
         chinese1: '每个都是作为一个数学模型来声明的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2016',
         word: 'mature',
         ciyi: ' a. 成熟的；成年人的v. 到期；使…成熟',
         liju1: 'They are emotionally mature and should behave responsibly.',
         chinese1: '他们在情感上是成熟的，应该负责任地行事。',
         liju2: 'This experience matured her greatly.',
         chinese2: '这个经历使她极大地成熟了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2017',
         word: 'maximum ',
         ciyi: 'n.极限，最大值；最大量a. 最高的；最大的',
         liju1: 'The law provides for a maximum of two years in prison.',
         chinese1: '法律规定监禁最长两年。',
         liju2: 'I need the maximum amount of information you can give me.',
         chinese2: '我需要你所能给我的最大的信息量。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2018',
         word: 'mayor',
         ciyi: 'n. 市长',
         liju1: 'The lawyer was being groomed as a candidate for mayor. ',
         chinese1: '人们推荐这位律师作为市长候选人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2019',
         word: 'meadow',
         ciyi: 'n. 草地；牧场',
         liju1: ' The meadow has been ploughed up. ',
         chinese1: '那片草地已用犁翻过。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2020',
         word: 'means',
         ciyi: 'n. 手段；方法；财产',
         liju1: 'The move is a means to fight crime.',
         chinese1: '这个行动是打击犯罪的一种手段。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2021',
         word: 'meantime ',
         ciyi: 'n. 其时，其间ad. 同时；其间',
         liju1: 'Eventually your child will leave home to lead her own life, but in the meantime she relies on your support.',
         chinese1: '最终你的孩子将会离开家去过她自己的生活，不过在此期间她依赖你的支持。',
         liju2: 'In the meantime, you have to insulate yourself from his moods.  ',
         chinese2: '同时，你必须将你自己隔绝在他的情绪之外。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2022',
         word: 'mechanic ',
         ciyi: 'n. 技工，机修工',
         liju1: 'The mechanic has trued up a wheel. ',
         chinese1: '机修工已经装上了一个轮子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2023',
         word: 'mechanical',
         ciyi: ' a. 机械的；机械制的；呆板的；无意识的',
         liju1: 'This is the oldest working mechanical clock in the world.',
         chinese1: '这是世界上最古老的还可以使用的机械钟。',
         liju2: 'He was a very mechanical person, who knew a lot about sound.',
         chinese2: '他是个非常精通机械的人，对声音很了解。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2024',
         word: 'mechanism',
         ciyi: 'n. 机制；机理；机构；机械装置；机能',
         liju1: "'There's no mechanism for punishing arms exporters who break the rules.'",
         chinese1: '对于违反规定的军火出口商还没有惩罚机制。',
         liju2: ' An automobile engine is a complex mechanism.',
         chinese2: '汽车引擎是一种复杂的装置。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2025',
         word: 'medal',
         ciyi: 'n. 勋章，奖章；纪念章',
         liju1: ' He received a medal for his heroism. ',
         chinese1: '他由于英勇而获得一枚奖章。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '2026',
         word: 'medieval ',
         ciyi: 'a. 中世纪的；仿中世纪的；老式的',
         liju1: 'Besides the good looks, they said they yearned for the sense of adventure and honour of the medieval era. ',
         chinese1: '除了好看的外表，他们说他们更向往那种冒险精神和中世纪时期的人们的道义。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2027',
         word: 'meditate',
         ciyi: ' vt. 考虑；计划；企图vi. 冥想；沉思',
         liju1: 'She meditated revenge after she was fired by the company.',
         chinese1: '在被公司辞退后，她谋划报复。',
         liju2: 'I was meditating, and reached a higher state of consciousness.',
         chinese2: '我正在冥想，并进入了一种更高的意识境界。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2028',
         word: 'meditation ',
         ciyi: 'n. 冥想；沉思，深思',
         liju1: "'I'm sorry to interrupt your meditation. '",
         chinese1: '很抱歉，我打断了你的沉思。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2029',
         word: 'medium',
         ciyi: 'a. 中间的，中等的n.媒体；媒介；中间；适中',
         liju1: 'A medium dose produces severe nausea within hours.',
         chinese1: '中等剂量会在几小时内引起严重的恶心。',
         liju2: 'Blood is the medium in which oxygen is carried to all parts of the body.',
         chinese2: '血液是把氧气输送到身体各部分的媒介。',
         liju3:'Teachers should find the medium between severity and leniency.',
         chinese3:'老师应该宽严适度。'
       }
	   ,
	   {
         id: '2030',
         word: 'melody ',
         ciyi: 'n. 旋律；歌曲；美妙的音乐',
         liju1: ' To melt and be like a running brook that sings its melody to the night. ',
         chinese1: '将自己融化并像流动的小溪一样向夜色吟唱其优美的旋律。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2031',
         word: 'melon',
         ciyi: ' n. 瓜；甜瓜',
         liju1: 'This melon weighs more than ten kilograms, I should think.  ',
         chinese1: '这个瓜怕有十几斤吧。',
         liju2: 'melt',
         chinese2: 'vt. 使融化；使熔化；使软化',
         liju3:' The snow had melted, but the lake was still frozen solid.',
         chinese3:'雪已经融化了，但湖面仍然冻得结结实实。'
       }
	   ,
	   {
         id: '2032',
         word: 'membership',
         ciyi: ' n. 资格；成员资格；会员身分',
         liju1: 'Membership of the club has fallen away this year. ',
         chinese1: '今年俱乐部会员数量减少了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2033',
         word: 'memo ',
         ciyi: 'n. 备忘录',
         liju1: ' She ticked off the items on the memo. ',
         chinese1: '她在备忘录上的项目作了记号。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2034',
         word: 'memorandum',
         ciyi: 'n. 备忘录',
         liju1: ' The memorandum of understanding between Chinese officials and First Solar would open a potentially vast solar market in China. ',
         chinese1: '中方官员与第一太阳能签署的谅解备忘录，将打开中国潜在的巨大太阳能市场。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2035',
         word: 'memorial ',
         ciyi: 'n. 纪念碑，纪念馆；纪念物a. 记忆的；纪念的，追悼的',
         liju1: 'Building a memorial to Columbus has been his lifelong dream.',
         chinese1: '建一座哥伦布纪念碑一直是他一生的梦想。',
         liju2: "'A memorial service is being held for her at St. Paul's Church.'",
         chinese2: '一场为她举行的纪念仪式正在圣保罗教堂举行。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2036',
         word: 'memory',
         ciyi: 'n. 记忆，记忆力；存储器；回忆',
         liju1: 'This visit will always remain in my memory. ',
         chinese1: '这次访问将永远留在我的记忆中。',
         liju2:" 'The data are stored in the computer's memory.'",
         chinese2: '这些数据存储在计算机的内存中。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2037',
         word: 'menace ',
         ciyi: 'n. 威胁；恐吓；危险的人vt.威胁；恐吓',
         liju1: 'In my view, you are a menace to the public.',
         chinese1: '在我看来，你对公众是一个威胁。',
         liju2: 'Henry was so timid that he hardly seemed like a public menace.',
         chinese2: '亨利如此软弱，完全不像一个对公众产生威胁的人。',
         liju3:'Hemenaced me with his fist clenched.',
         chinese3:'他紧握着拳头威胁着我。'
       }
	   ,
	   {
         id: '2038',
         word: 'merchandise',
         ciyi: 'n. 商品；货物',
         liju1: 'We delivered the merchandise to them.',
         chinese1: '我们把货物送交给他们。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2039',
         word: 'Merchant ',
         ciyi: ' n. 商人，批发商；店主',
         liju1: 'The merchant worked off an undesirable lot of goods.',
         chinese1: '这个商人销掉了一大批劣货。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2040',
         word: 'mercury ',
         ciyi: ' n.汞，水银；水星；温度表',
         liju1: 'Of all the inner planets, only Mercury and Earth boast such a field.',
         chinese1: '在所有的内行星中，只有水星和地球拥有这样一个领域。',
         liju2: 'Both these compounds are toxic, leading to mercury and lead poisoning.',
         chinese2: '这两种化合物都是有毒的，能导致汞和铅中毒。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2041',
         word: 'mercy',
         ciyi: ' n. 仁慈，宽容；怜悯',
         liju1: ' We will not pity nor spare, nor have mercy to the enemy.',
         chinese1: '对敌人我们不会同情，不会宽恕，也不会怜悯。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2042',
         word: 'mere ',
         ciyi: 'a. 仅仅的；只不过的；纯粹的',
         liju1: 'There is more to good health than the mere absence of disease.',
         chinese1: '健康不仅仅指不生病，还包括更多。',
         liju2: 'We discredited the story as mere rumour. ',
         chinese2: '我们把那种传闻视为纯粹的谣言。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2043',
         word: 'merely',
         ciyi: ' ad. 仅仅，只不过；只是',
         liju1: 'Michael is now merely a good friend.',
         chinese1: '迈克尔现在只不过是一个好朋友而已。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2044',
         word: 'merge',
         ciyi: ' v. 合并；使合并；吞没',
         liju1: 'The big company merged various small businesses.',
         chinese1: '那家大公司兼并了多家小商行。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2045',
         word: 'mess',
         ciyi: ' n. 混乱；混杂；脏乱vt.弄乱，弄脏；毁坏',
         liju1: ' The house is a mess.',
         chinese1: '这个房间又脏又乱。',
         liju2: 'See how your cat has messed up my ball of wool.',
         chinese2: '瞧你的猫把我的绒线球弄乱了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2046',
         word: 'message ',
         ciyi: 'n. 消息；信息；启示；要旨',
         liju1: 'It emerged from the message that all was well.  ',
         chinese1: '从获知的消息来看，一切都很好。',
         liju2: ' This is a film with a profound message.',
         chinese2: '这是一部寓意深刻的影片。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2047',
         word: 'metaphor ',
         ciyi: ' n. 暗喻，隐喻；比喻说法',
         liju1: 'The metaphor extends to all of chemistry.',
         chinese1: '这个隐喻扩展到化学的所有领域。',
         liju2: 'metric',
         chinese2: 'a. 公制的；米制的；公尺的',
         liju3:'As the most metric-intensive portion of the supply chain, measure quality levels, production output and worker productivity. ',
         chinese3:'作为最公制密集部分的供应链，衡量质量水平，产量和工人的生产力。'
       }
	   ,
	   {
         id: '2048',
         word: 'metropolitan',
         ciyi: ' a. 大都市的；首都的',
         liju1: ' They are journalists from several major metropolitan newspapers.',
         chinese1: '他们来自首都几大报社的记者。',
         liju2: ' The country is quieter in comparison to metropolitan life.',
         chinese2: '和都市生活相比，乡村生活要安静的多。',
         liju3:'',
         chinese3:'' 
       }
	   ,
	   {
         id: '2049',
         word: 'microphone ',
         ciyi: 'n. 扩音器，麦克风',
         liju1: 'Today I am sitting at my computer, speaking these words through a microphone.  ',
         chinese1: '今天我坐在我的电脑桌边，通过麦克风说了这些话。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2050',
         word: 'microscope ',
         ciyi: ' n. 显微镜',
         liju1: 'The slightest movement will defocus the microscope.',
         chinese1: '最轻微的运动都会使显微镜散焦。',
         liju2: 'midst',
         chinese2: 'n. 当中，中间',
         liju3:'It’s known to us that you’ve a traitor in your midst.',
         chinese3:'我们知道你们当中有个叛徒。'
       }
	   ,
       {
         id: '2051',
		 word: ' migrate',
         ciyi: ' vi. 移动；移居；移往',
         liju1:'Wealthy people often migrate in winter to warmer sunnier countries.',
         chinese1: '有钱人冬天常移居到天气较暖和的、阳光更充足的国家。',
         liju2: 'Wealthy people often migrate in winter to warmer sunnier countries.	   ',
         chinese2: '富人经常在冬天移居到更暖和的国家。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2052',
         word: 'mild',
         ciyi: 'a. 温和的；轻微的；味淡的；温暖的，暖和的',
         liju1: 'He is a mild man, who is reasonable almost to the point of blandness.',
         chinese1: '他是个性情温和、理智到了近乎呆板的人。',
         liju2: 'The weather reporter said we would have a mild winter this year.',
         chinese2: '天气预报员说今年我们将度过一个暖冬。',
         liju3:'This cheese has a soft, mild flavour.',
         chinese3:'这种奶酪有种柔和的、淡淡的味道。'
       }
	   ,
	   {
         id: '2053',
         word: 'militant',
         ciyi: 'a. 好战的；好斗的n. 激进分子',
         liju1: 'One militant group warned the government to take notice.',
         chinese1: '一个好战组织警告政府要小心。',
         liju2: 'He is a militant in the movement.',
         chinese2: '他在那次运动中是个激进分子。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2054',
         word: 'military ',
         ciyi: 'a. 军事的；军人的；适于战争的',
         liju1: 'His book incorporates his military thinking. ',
         chinese1: '他的书体现了他的军事思想。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2055',
         word: 'mill',
         ciyi: 'n.磨坊；磨粉机；工厂；作坊',
         liju1: 'There was an old mill that really did grind corn.',
         chinese1: '有一个真正碾磨玉米的老磨坊。',
         liju2: 'After the mill closes, the local economy may tailspin.',
         chinese2: '制造厂关闭后，当地经济可能突然陷于困境。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2056',
         word: 'millimetre/millimeter',
         ciyi: 'n. 毫米',
         liju1: 'The creature is a tiny centipede, just 10 millimetres long.',
         chinese1: '那个生物是一只很小的蜈蚣，只有10毫米长。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2057',
         word: 'millionaire',
         ciyi: 'n. 百万富翁；大富豪',
         liju1: 'He had a millionaire father. ',
         chinese1: '他有个百万富翁的父亲。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '2058',
         word: 'mingle ',
         ciyi: 'vi. 相混合；相交往vt.使混合；使相混',
         liju1: 'He used to train in a local park and mingle with other runners.',
         chinese1: '他过去常在地方公园里锻炼，并与其他跑步的人相交往。',
         liju2: 'If we mingle with the crowd, we shall not be noticed.',
         chinese2: '如果我们混在人群里，就不会被注意到了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2059',
         word: 'miniature ',
         ciyi: 'a. 微型的，小规模的n. 缩图；微型图画绘画术',
         liju1: 'James took out his miniature camera from the bag.',
         chinese1: '詹姆斯从包里掏出微型照相机。',
         liju2: 'My sister liked to collect different from kinds of miniatures of cars.',
         chinese2: '我妹妹喜欢收集各种汽车模型。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2060',
         word: 'minimize',
         ciyi: ' vt. 使减到最少；使降到最低',
         liju1: "' We had about ten hours' warning, so we were able to minimize the effects of the flood.'",
         chinese1: '由于在十小时前发出了警报，我们能够把水灾的破坏减至最低程度。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2061',
         word: 'minimum',
         ciyi: ' n. 最小值；最低限度 a. 最小的；最低的',
         liju1: 'This will take a minimum of one hour.',
         chinese1: '这最少要用一个小时。',
         liju2: 'He was only five feet nine, the minimum height for a policeman.',
         chinese2: '他只有5.9英尺高，这是警察身高要求的底线。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2062',
         word: 'ministry',
         ciyi: 'n. （政府的）部门；牧师',
         liju1: ' Small residential areas have become a priority with the Ministry of Construction. ',
         chinese1: '建设居民小区是建设部要优先解决的问题。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2063',
         word: 'minor',
         ciyi: ' a. 未成年的；次要的；较小的n.副修科目vi. 兼修',
         liju1: 'She is known in Italy for a number of minor roles in films.',
         chinese1: '她因担任电影中一些配角而闻名意大利。',
         liju2: 'The approach has virtually ended cigarette sales to minors.',
         chinese2: '这一作法实际上已经终止了向未成年人出售香烟',
         liju3:'Pam minored in math besides majoring in English.',
         chinese3:'帕姆除了主修英语外，还辅修数学。'
       }
	   ,
	   {
         id: '2064',
         word: 'minority',
         ciyi: 'n. 少数民族；少数派',
         liju1: ' Students who maintain or lose weight on campus may be in the minority, but they seem to stick together.',
         chinese1: '校园里那些保持或者减轻了体重的学生们可能是少数，但是他们似乎团结在一起。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2065',
         word: 'minus',
         ciyi: 'prep. 减，减去n. 负号，减号 a. 减的；负的',
         liju1: ' Nine minus three equals six. ',
         chinese1: '九减去三等于六。',
         liju2: 'The temperature dropped to minus ten degrees centigrade.',
         chinese2: '温度降到摄氏零下十度。',
         liju3:'The aircraft was subjected to temperatures of minus 65 degrees and plus 120 degrees.',
         chinese3:'该飞机经受了零下65 度和零上120度的温度。'
       }
	   ,
	   {
         id: '2066',
         word: 'miracle ',
         ciyi: 'n. 奇迹，奇迹般的人或物；惊人的事例',
         liju1: 'The rest of the book seeks to account for the miracle. ',
         chinese1: '本书的其余部分就是在探讨这个奇迹的原因。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2067',
         word: 'mirror',
         ciyi: ' n. 镜子；反映；反射；榜样vt.反射；反映',
         liju1: ' Before going out, she surveyed herself in the mirror.',
         chinese1: '出门之前，她在镜子中审视自己。',
         liju2: 'Pepys’s Diary holds up a mirror to the times he lived in.',
         chinese2: '佩皮斯的《日记》是对他生活的那个时代的真实反映。',
         liju3:'Her eyes mirrored her thought.',
         chinese3:'她的眼神反映了她的思想。'
       }
	   ,
	   {
         id: '2068',
         word: 'mischief ',
         ciyi: 'n. 恶作剧；胡闹；伤害；危害',
         liju1: ' The little boy was a real handful. He was always up to mischief.',
         chinese1: '这个小男孩真是难管教。他总是在搞恶作剧。',
         liju2: 'The storm did a lot of mischief to the crops.',
         chinese2: '这场暴风雨对庄稼造成了很大的危害。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2069',
         word: 'miserable',
         ciyi: ' a. 悲惨的；痛苦的',
         liju1: 'The miserable scene was revived in my mind.',
         chinese1: '在我的脑海里又回忆起那幅悲惨的景象。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2070',
         word: 'misery ',
         ciyi: ' n. 痛苦，悲惨；不幸；苦恼；穷困',
         liju1: 'All that money brought nothing but sadness and misery and tragedy.',
         chinese1: '那些钱带来的只有悲哀、苦难和不幸。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2071',
         word: 'misfortune',
         ciyi: ' n. 不幸；灾祸，灾难',
         liju1: 'Some misfortune must have befallen him.',
         chinese1: '某种灾难必降临在他头上了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2072',
         word: 'mislead',
         ciyi: ' vt. 误导；带错；使误入歧途',
         liju1: "'It's this legend which has misled scholars.'",
         chinese1: '正是这个传奇故事误导了学者们。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2073',
         word: 'missile',
         ciyi: 'n. 导弹；投射物',
         liju1: 'The missile was delivered from a ship. ',
         chinese1: '这枚导弹是从舰上发射的。',
         liju2: ' The scouts started off on their mission on a stormy night.',
         chinese2: '侦察兵们在一个雷雨之夜出发去执行任务。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2074',
         word: 'missionary ',
         ciyi: 'n. 传教士',
         liju1: 'My mother would still like me to be a missionary in Africa.',
         chinese1: '我母亲还是想让我在非洲做一名传教士。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2075',
         word: 'mist',
         ciyi: 'n. 薄雾；视线模糊不清；霭',
         liju1: 'Mist often blurs the landscape.',
         chinese1: '薄雾常常使风景暗淡。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2076',
         word: 'mistress ',
         ciyi: 'n. 情妇；女主人；主妇；女教师',
         liju1: 'Go now and tell your mistress. ',
         chinese1: '现在去告诉你的女主人。',
         liju2: 'Tracy was his mistress for three years.',
         chinese2: '特蕾西给他做了3年情妇。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2077',
         word: 'mixture ',
         ciyi: 'n. 混合；混合物；混合剂',
         liju1: ' Air is a mixture of gases.  ',
         chinese1: '空气是多种气体的混合物。',
         liju2: 'Joseph uses a mixture of English and occasional Italian.',
         chinese2: '约瑟夫讲英语，偶尔夹杂着意大利语。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2078',
         word: 'mo(u)ld',
         ciyi: ' vt. 塑造；形成 n. 模型；模子',
         liju1: 'Individual characters are molded by the social environment in which they grow up.',
         chinese1: '个人的性格是由其成长的社会环境塑造的。',
         liju2: ' The clay mold broke in transit.',
         chinese2: '黏土模型在运输过程中碎掉了。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2079',
         word: 'moan',
         ciyi: 'vi. 抱怨，悲叹；呻吟n. 呻吟声；悲叹vt.呻吟着说',
         liju1: ' The wounded man moaned ceaselessly.',
         chinese1: '那个伤员呻吟不止。',
         liju2: 'Stop moaning! You have nothing to complain about.',
         chinese2: '别发牢骚了！你没什么可抱怨的。',
         liju3:'Suddenly she gave a low, choking moan and began to tremble violently.',
         chinese3:'突然她发出了一声低沉、令人窒息的呻吟，身体开始剧烈地抖动。',
		 liju4:'The prisoner moaned out a prayer for help.',
		 chinese4:'囚犯呻吟着祈求帮助。'
       }
	   ,
	   {
         id: '2080',
         word: 'mob',
         ciyi: 'n. 暴民；乌合之众vt. 大举包围，围攻；群众袭击',
         liju1: ' If they continue like this there is a danger of the mob taking over.',
         chinese1: '如果他们继续如此，就有被暴民接管的危险。',
         liju2: 'The celebrated violinist was mobbed by the audience.',
         chinese2: '观众团团围住了这位著名的小提琴演奏家。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2081',
         word: 'mobile',
         ciyi: ' a. 机动的；运动的；活动的',
         liju1: 'And in this mobile world, you have to carry it along with you. ',
         chinese1: '在这个移动的世界里，你又得无时不刻地带着它们。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2082',
         word: 'mobilise/mobilize',
         ciyi: 'vt. 动员，调动；集合，组织',
         liju1: 'The government mobilized millions of people to build the dam.',
         chinese1: '政府动员了几百万人来修建水坝。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2083',
         word: 'mock',
         ciyi: ' v. 嘲弄，嘲笑a. 模拟的；假装的；伪造的n. 模拟考试',
         liju1: 'She mocked him as a country boy.',
         chinese1: '她嘲笑他是个乡下孩子。',
         liju2: 'To amuse the children, Tony threw up his hands in mock horror.',
		 chinese2:'为了逗孩子开心，托尼举起双手假装害怕。',
         liju3:' We had a mock debate in class yesterday.',
         chinese3:'昨天我们在课堂上进行了一次模拟辩论。',
		 liju4:'We will take our mocks next Friday.',
		 chinese4:'下周五我们将有几场模拟考试。'
       }
	   ,
	   {
         id: '2084',
         word: 'mode',
         ciyi: 'n. 模式；方式；风格；时尚',
         liju1: 'The adapter supports outbound mode only for this interface.  ',
         chinese1: '对于此接口，适配器仅支持出站模式。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2085',
         word: 'moderate',
         ciyi: 'a. 稳健的，温和的；适度的，中等的',
         liju1: 'He was an easygoing man of very moderate views.',
         chinese1: '他是一个有着温和观点性情随和的人。',
         liju2: 'Moderate exercise subserves digestion.',
         chinese2: '适度锻炼有助于消化。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2086',
         word: 'modernization',
         ciyi: 'n. 现代化',
         liju1: 'We must achieve modernization of science and technology, Otherwise we will lag behind other nations. ',
         chinese1: '我们必须实现科学技术现代化，否则我们要落后于其他国家。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2087',
         word: 'modest ',
         ciyi: 'a. 谦虚的，谦逊的；适度的',
         liju1: "'He's modest, as well as being a great player.'",
         chinese1: '他是一个谦虚而且出色的运动员。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2088',
         word: 'modify',
         ciyi:  'vt. 修改，修饰；更改；缓和；减轻',
         liju1: 'The industrial revolution modified the whole structure of English society.',
         chinese1: '工业革命改变了英国社会的整体结构。',
         liju2: "'She won't modify her demands.'",
         chinese2: '她是不会降低要求的。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2089',
         word: 'module',
         ciyi: ' n. 模块；组件；(航空器中的)舱',
         liju1: ' Switch from one module to another.',
         chinese1: '从一个模块转换到另一个模块。',
         liju2: 'A rescue plan could be achieved by sending an unmanned module to the space station.',
         chinese2: '营救计划可以通过向空间站发送一个无人舱来完成。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2090',
         word: 'moist ',
         ciyi: 'a. 潮湿的；多雨的；湿润的',
         liju1: 'Some water distilled over the rocks from the moist undergrowth. ',
         chinese1: '石下潮湿的草岩丛使岩石上渗出水滴。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2091',
         word: 'moisture ',
         ciyi: 'n. 水分；湿度；潮湿',
         liju1: 'When the soil is dry, more moisture is lost from the plant.',
         chinese1: '土壤干燥时，植物就会失去更多的水分。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2092',
         word: 'molecule ',
         ciyi: ' n.分子；微小颗粒，微粒',
         liju1: 'They have developed all kinds of tools to synthesize and manipulate this molecule. ',
         chinese1: '他们已经研究出各种各样合成和处理这些分子的方法。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2093',
         word: 'momentum ',
         ciyi: 'n. 动量；势头；动力；冲力',
         liju1: ' A falling object gains momentum as it falls. ',
         chinese1: '物体下落增进动量。',
         liju2: 'This campaign is really gaining momentum.',
         chinese2: '这场运动确实势头正猛。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2094',
         word: 'monarch',
         ciyi: 'n. 君主，帝王；最高统治者',
         liju1: 'The monarch was ousted by a military coup.',
         chinese1: '那君主被军事政变者废黜了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2095',
         word: 'monetary',
         ciyi: ' a. 货币的；财政的；金融的',
         liju1: 'Some countries tighten monetary policy to avoid inflation.',
         chinese1: '一些国家紧缩货币政策以避免通货膨胀。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2096',
         word: 'monopoly',
         ciyi: ' n. 垄断；垄断者；专卖权',
         liju1: 'For now, the US and its allies have the drones, but this monopoly will end.',
         chinese1: '目前，只有美国及其盟国拥有无人战机，但这种垄断终将结束。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2097',
         word: 'monotonous',
         ciyi: "'It's monotonous work, like most factory jobs.'",
         liju1: '这是个单调的工作，和大多数工厂工作一样。',
         chinese1: '',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2098',
         word: 'monster',
         ciyi: ' n. 怪物；巨人，巨兽',
         liju1: ' Both movies are about a monster in the bedroom cupboard.',
         chinese1: '两部电影都是关于卧室橱柜里的一个怪物。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2099',
         word: 'monument ',
         ciyi: 'n. 纪念碑；历史遗迹；不朽的作品',
         liju1: ' The monument has been a symbol of liberty.',
         chinese1: '这座纪念碑已经成了自由的象征。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2100',
         word: 'mood ',
         ciyi: ' n. 情绪；心情；语气',
         liju1: 'He is clearly in a good mood today.',
         chinese1: '显然他今天心情不错。',
         liju2: ' Our teacher announced the good news in an excited mood.',
         chinese2: '我们的老师用激动的语气宣布了那条好消息。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2101',
         word: 'moral ',
         ciyi: 'a. 道德的；道义的n. 道德；伦理；寓意；教育意义',
         liju1: ' She describes her own moral dilemma in making the film.',
         chinese1: '她描述了自己拍摄这部电影时面临的道德困境。',
         liju2: 'Faith undergirds moral principles.',
         chinese2: '信仰能加强道德原则。',
         liju3:'The moral of this story is “where there is a will, there is a way”.',
         chinese3:'这个故事的寓意是“有志者，事竟成”。'
       }
	   ,
	   {
         id: '2102',
         word: 'morality',
         ciyi: 'n. 道德；品行，美德',
         liju1: 'This is about honor and morality.',
         chinese1: '这是有关荣誉与道德。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2103',
         word: 'moreover',
         ciyi: 'ad. 而且；此外；加之',
         liju1: 'Moreover, they do this with no thought of gain for themselves. ',
         chinese1: '而且，他们这么做并不考虑自己的得失。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2104',
         word: 'mortal',
         ciyi: ' a.致命的；终有一死的；不共戴天的n. 人类，凡人',
         liju1: 'The police were defending themselves and others against mortal danger.',
         chinese1: '警察在保卫他们自己和其他人免受致命的危险。',
         liju2: 'A man is deliberately designed to be mortal. He grows, he ages, and he dies.',
         chinese2: '人是被故意设计成终归一死的。成长，变老，然后死去。',
         liju3:'The two knights fought in mortal combat.',
         chinese3:'两个骑士进行了殊死搏斗。',
		 liju4:'Since we are all mortals, it is inevitable that we make mistakes.',
		 chinese4:'既然我们都是凡人，那就难免会犯错误。'
       }
	   ,
	   {
         id: '2105',
         word: 'mortgage ',
         ciyi: 'vt. 抵押n. 抵押',
         liju1: 'They had to mortgage their home to pay the bills.',
         chinese1: '他们不得不抵押他们的房子来还账。',
         liju2: 'The bank refused to accept any mortgage on land.',
         chinese2: '银行拒绝接受任何土地抵押。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2106',
         word: 'mosaic ',
         ciyi: 'n. 马赛克；镶嵌；镶嵌细工',
         liju1: 'Mosaic appears on the screen.',
         chinese1: '屏幕上出现了马赛克。 ',
         liju2: 'The sky this morning is a mosaic of blue and white.',
         chinese2: '今天早上的天空宛如一幅蓝白相间的镶嵌面。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2107',
         word: 'mosquito',
         ciyi: ' n. 蚊子',
         liju1: 'The frog darted out its tongue to catch a mosquito.',
         chinese1: '这只青蛙突然伸出舌头捕捉蚊子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2108',
         word: 'moss ',
         ciyi: 'n. 苔藓；泥沼vt.使长满苔藓',
         liju1: ' The wall was patched with moss.',
         chinese1: '墙上长着斑斑点点的青苔。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2109',
         word: 'mostly',
         ciyi: ' ad. 主要地；通常；大部分',
         liju1: ' I am working with mostly highly motivated people.',
         chinese1: '我正与大多都积极性很高的人们共事。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2110',
         word: 'motel',
         ciyi: 'n. 汽车旅馆',
         liju1: 'The gas station just neighbours to the motel.',
         chinese1: '加油站就在汽车旅馆的附近。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2111',
         word: 'motion ',
         ciyi: 'n.动作；运动；移动；提议，动议vt.向…示意',
         liju1: 'He made a neat chopping motion with his hand.',
         chinese1: '他用手做了一个干净利落的砍的动作。',
         liju2: 'One group of muscles sets the next group in motion.',
         chinese2: '一组肌肉带动下一组肌肉运动。',
         liju3:'The conference is now debating the motion and will vote on it shortly.',
         chinese3:'大会现在正在讨论这个动议，并将马上就此投票。',
		 liju4:'He motioned to me to sit down.',
		 chinese4:'他示意让我坐下。'
       }
	   ,
	   {
         id: '2112',
         word: 'motivate',
         ciyi: 'vt. 驱动；驱使；激励；激发…的积极性',
         liju1: ' If businessmen are taxed too much, they will no longer be motivated to work hard, with the result that incomes from taxation might actually shrink.',
         chinese1: '如果商人的赋税太重，他们就不会再有动力努力工作，那么税收收入也就会减少。',
         liju2: 'You have first got to motivate the children and then to teach them.',
         chinese2: '你首先得激发孩子们的学习兴趣，然后再去教他们。',
         liju3:'',
         chinese3:''
       }
	   ,
	   {
         id: '2113',
         word: 'motive',
         ciyi: 'n. 动机，目的a. 发动的；动机的',
         liju1: ' The man privately admits that his motive is profits. ',
         chinese1: '那人私下承认他的动机是为了牟利。',
         liju2: 'The motive power of trains is usually steam or electricity.',
         chinese2: '火车的动力通常来自蒸汽或电力。',
         liju3:'',
         chinese3:''
       },
	   {
         id: '2114',
         word: 'mount',
         ciyi: 'vt. 登上；爬上；安装，装配；镶嵌，嵌入 n. 山峰；底座；支架；底座',
         liju1: ' Larry was mounting the stairs up into the attic.',
         chinese1: '拉里正在拾级而上到阁楼去。',
         liju2: 'Her husband mounts the work on velour paper and makes the frame.',
         chinese2: '她丈夫把作品装裱到丝绒纸上，又做了框架。',
         liju3:'The picture was securely mounted to the wall.',
         chinese3:'这幅画牢牢地固定在墙上。',
		 liju4:'We have already climbed the Mount Everest.',
		 chinese4:'我们已经攀登过珠穆朗玛峰。'
		 
       }
	   ,
	   {
         id: '2115',
         word: 'mourn ',
         ciyi: ' v. 哀悼；忧伤',
         liju1: ' If this era is over, few will mourn its passing. ',
         chinese1: '如果这个时代结束，很少人会哀悼它的消逝。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       },
	   {
         id: '2116',
         word: 'mud ',
         ciyi: '泥；泥浆',
         liju1: 'My car was stuck in the mud. ',
         chinese1: '我的汽车陷在泥里不能动弹。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
      }
    ]
  }
  return arr
}