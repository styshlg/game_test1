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
         id: '3642',
         word: 'abase',
         ciyi: 'vt. 使…谦卑；降低自己，贬低',
         liju1: 'We should abase ourselves before God.',
         chinese1: '我们应该在上帝面前表示谦卑。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3643',
         word: 'abolition',
         ciyi: 'n. 废除；废止',
         liju1: 'Their discussion centered around the abolition of slavery.',
         chinese1: '他们的讨论是以废除奴隶制度为中心而进行的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3644',
         word: 'abreast',
         ciyi: 'ad. 并肩地；并列',
         liju1: 'The steep sidewalk was too narrow for them to walk abreast.',
         chinese1: '这个很陡的人行道窄得不能让他们并排走。',
         liju2: 'He will be keeping abreast of the news.',
         chinese2: '他会不断及时了解最新消息。'
       },
	   {
         id: '3645',
         word: 'abstain',
         ciyi: 'vi. 弃权；戒除，戒绝',
         liju1: 'Three countries abstained in the vote.',
         chinese1: '三个国家在投票中弃权了。',
         liju2: 'Susan persuades her husband to abstain from drinking.',
         chinese2: '苏珊劝丈夫戒酒。'
       },
	   {
         id: '3646',
         word: 'accede',
         ciyi: 'vi. 同意；即位，继任',
         liju1: 'When his father died, the prince acceded to the position of head of state.',
         chinese1: '父王去世后，王子继承了国家元首的职位。',
         liju2: 'They could do no other than accede to the demands of the victors.',
         chinese2: '他们只好答应得胜者的要求。'
       },
	   {
         id: '3647',
         word: 'additive',
         ciyi: 'n. 添加剂，添加物a. 附加的，添加的；加法的',
         liju1: 'Strict safety tests are carried out on food additives.',
         chinese1: '对食品添加剂进行了严格的安全检测。',
         liju2: 'Rule Sets are additive.',
         chinese2: '规则是附加的。'
       },
	   {
         id: '3648',
         word: 'adept',
         ciyi: 'a. 熟练的；精通的 n. 行家，熟手',
         liju1: "He's usually very adept at keeping his private life out of the media.",
         chinese1: '他通常十分擅长于使他的私生活远离媒体。',
         liju2: 'My teacher is adept at designing robots.',
         chinese2: '我的老师对设计机器人是个内行。'
       },
	   {
         id: '3649',
         word: 'aeronautics',
         ciyi: 'n. 航空学；飞行术',
         liju1: 'Aeronautics enables us to overcome great distances.',
         chinese1: '航空学使我们能征服远距离。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3650',
         word: 'affinity',
         ciyi: 'n. 密切关系；构造相似，特点相近',
         liju1: 'This substance has an affinity for water.',
         chinese1: '这物质和水有亲和力。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3651',
         word: 'airborne',
         ciyi: 'a. 空运的；空气传播的；在空中飞行的',
         liju1: 'The pilot did manage to get airborne.',
         chinese1: '这位飞行员的确使飞机升空了。',
         liju2: 'Many people are allergic to airborne pollutants such as pollen.',
         chinese2: '许多人对空气中花粉之类的污染物质过敏。'
       },
	   {
         id: '3652',
         word: 'akin',
         ciyi: 'a. 类似的，有关系的；同族的',
         liju1: 'Listening to his life story is akin to reading a good adventure novel.',
         chinese1: '听他的生活故事就像读一部好的探险小说。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3653',
         word: 'allegation',
         ciyi: 'n. 主张，断言；陈词，指控',
         liju1: 'The company has denied the allegations.',
         chinese1: '该公司否认了这些指控。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3654',
         word: 'allergic',
         ciyi: 'a. 对…过敏的；对…极讨厌的',
         liju1: "I'm allergic to cats.",
         chinese1: '我对猫过敏。',
         liju2: 'Soy milk can cause allergic reactions in some children.',
         chinese2: '豆奶会导致有些儿童起过敏反应。'
       },
	   {
         id: '3655',
         word: 'allot',
         ciyi: 'vt. 分配；拨给；分派',
         liju1: 'The seats are allotted to the candidates who have won the most votes.',
         chinese1: '这些席位被分配给了赢得了最多选票的候选人。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3656',
         word: 'amber',
         ciyi: 'a. 琥珀色的n. 琥珀；琥珀色vt. 使呈琥珀色',
         liju1: 'A burst of sunshine sent a beam of amber light through the window.',
         chinese1: '一道阳光透过窗户射进了一束琥珀色的光。',
         liju2: 'Amber from different sites tends to have different chemical compositions.',
         chinese2: '来自不同区域的琥珀有着不同的化学成分。'
       },
	   {
         id: '3657',
         word: 'amphibian',
         ciyi: 'n. 两栖动物a. 两栖类的',
         liju1: 'At first this amphibian deals with the cooler days by burying itself in the soil.',
         chinese1: '起初，天气乍凉的时候，这种两栖动物将自己埋在土壤里。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3658',
         word: 'anabolism',
         ciyi: 'n. 合成代谢；同化作用',
         liju1: 'Anabolism is when energy is created and stored, and catabolism is when energy is released.',
         chinese1: '合成代谢是生成和储存能量，而分解代谢则是能量的释放。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3659',
         word: 'anatomy',
         ciyi: 'n. 解剖；解剖学；解剖构造',
         liju1: 'The knowledge of anatomy adds to the appreciation of works of art.',
         chinese1: '解剖学知识有助于提高对艺术作品的鉴赏力。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3660',
         word: 'anew',
         ciyi: 'ad. 重新；再',
         liju1: "She's ready to start anew.",
         chinese1: '她准备好重新来过。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3661',
         word: 'annex',
         ciyi: 'vt. 附加；并吞n. 附加物；附属建筑物',
         liju1: 'Rome annexed the Nabatean kingdom in AD 106.',
         chinese1: 'Rome annexed the Nabatean kingdom in AD 106.',
         liju2: 'Any annex is the integral part of this contract.',
         chinese2: '本合同一切附件均为本合同的有效组成部分。'
       },
	   {
         id: '3662',
         word: 'antagonist',
         ciyi: 'n. 敌手',
         liju1: 'Spassky had never previously lost to his antagonist.',
         chinese1: '斯帕斯基以前从未败给过他的敌手。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3663',
         word: 'anthropology',
         ciyi: 'n. 人类学，人类学家',
         liju1: 'In his old age the mathematician developed a fantastic enthusiasm in anthropology.',
         chinese1: '那个数学家在老年时对人类学发生了极大的热情。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3664',
         word: 'antibacterial',
         ciyi: 'n. 抗菌剂a. 抗菌的',
         liju1: 'Antibacterial soaps kill the odor-causing bacteria on the body.',
         chinese1: '抗菌肥皂杀死身体上导致异味的细菌。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3665',
         word: 'appraise',
         ciyi: 'vt. 评价，鉴定；估价',
         liju1: 'They tried to appraise the poetry of John Milton.',
         chinese1: '他们试图评价弥尔顿的诗。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3666',
         word: 'apprehensive',
         ciyi: 'a. 忧虑的，不安的，有理解力的',
         liju1: 'People are still terribly apprehensive about the future.',
         chinese1: '人们对未来依旧极为担心。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3667',
         word: 'aquatic',
         ciyi: 'a. 水生的；水栖的 n. 水生植物或动物',
         liju1: 'The pond is small but can support many aquatic plants and fish.',
         chinese1: '这个池塘虽小，但是能养活许多水生植物和鱼。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3668',
         word: 'archaeologist',
         ciyi: 'n. 考古学家',
         liju1: 'In fact, she was an archaeologist.',
         chinese1: '其实她是一个考古学家。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3669',
         word: 'arduous',
         ciyi: 'a. 努力的；费力的，艰巨的',
         liju1: 'We must have patience in doing arduous work.',
         chinese1: '我们做艰苦的工作要有耐性。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3670',
         word: 'artifice',
         ciyi: 'n. 欺骗；巧妙的办法',
         liju1: 'There was no room in law for artifice.',
         chinese1: '法律绝不容许欺骗。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3671',
         word: 'artillery',
         ciyi: 'n. 火炮；大炮；炮队',
         liju1: 'The fire of our artillery troops raked their gunboat.',
         chinese1: '我方炮兵部队的炮火向他们的炮艇扫射。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3672',
         word: 'aspiration',
         ciyi: 'n. 渴望；志向，抱负',
         liju1: 'He nurses an aspiration to be a poet.',
         chinese1: '他心怀当诗人的愿望。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3673',
         word: 'aspirin',
         ciyi: 'n. 阿司匹林（解热镇痛药）',
         liju1: 'The nurse dosed the patient with aspirin.',
         chinese1: '护士给病人服阿司匹林。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3674',
         word: 'assent',
         ciyi: 'vi. 同意；赞成n. 同意；赞成',
         liju1: 'She gave a nod of assent.',
         chinese1: '她点头表示同意。',
         liju2: 'He gave his assent to the proposed legislation.',
         chinese2: '他对这项拟议法案给予了正式认可。'
       },
	   {
         id: '3675',
         word: 'assort',
         ciyi: 'vi. 协调；交往vt. 把…分级；分类',
         liju1: 'My son will not assort with people of his own age.',
         chinese1: '我儿子决不和他的同龄人交往。',
         liju2: 'It took me a lot of time to assort presents out on Christmas Eve.',
         chinese2: '圣诞前夜，我花了好久的时间才把礼物分好类。'
       },
	   {
         id: '3676',
         word: 'astrology',
         ciyi: 'n. 占星术；占星学',
         liju1: 'Astronomy inherits from astrology.',
         chinese1: '天文学的前身是占星术。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3677',
         word: 'astrophysicist',
         ciyi: 'n. 天体物理学家',
         liju1: 'The famous astrophysicist says that our only chance for long-term survival is to move away from Earth and begin to inhabit new planets.',
         chinese1: '这位著名的天体物理学家表示，人类长期生存下去的唯一机会是离开地球，在新的星球上定居。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3678',
         word: 'attentively',
         ciyi: 'ad. 聚精会神地',
         liju1: 'The audience is listening attentively.',
         chinese1: '听众都在聚精会神地听着。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3679',
         word: 'authorize',
         ciyi: 'vt. 批准，认可；授权给',
         liju1: 'The city authorized a housing project.',
         chinese1: '该市批准了一项住房建筑规划。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3680',
         word: 'avenge',
         ciyi: 'vt. 替…报仇vi. 报复，报仇',
         liju1: 'She swore to avenge herself on them for the insult that had been offered to her name and reputation.',
         chinese1: '她发誓为侮辱她的名望和声誉向他们进行报复。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3681',
         word: 'backbone',
         ciyi: 'n. 支柱，主干，主要成分；脊椎',
         liju1: 'The youths are the backbone of the country.',
         chinese1: '年轻人是国家的栋梁。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3682',
         word: 'baffle',
         ciyi: 'vt. 使…困惑；使…受挫折n. 挡板；屏蔽',
         liju1: 'Sometimes the decisions baffle and enrage me.',
         chinese1: '有时候作出的决定使我困惑甚至愤怒。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3683',
         word: 'bakery',
         ciyi: 'n. 面包店',
         liju1: 'A smell of bread drifted from some distant bakery.',
         chinese1: '一股面包的味道从远处的某个面包店飘来。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3684',
         word: 'barter',
         ciyi: 'vt. 以…作为交换；进行易货贸易n. 易货贸易',
         liju1: 'They have been bartering wheat for cotton and timber.',
         chinese1: '他们一直在用小麦交换棉花和木材。',
         liju2: 'Overall, barter is a very inefficient means of organizing transactions.',
         chinese2: '总的说来，物物交换是一种非常低效的组织交易的方式。'
       },
	   {
         id: '3685',
         word: 'berry',
         ciyi: 'n. 浆果（葡萄，番茄等）vi. 采集浆果',
         liju1: 'The shrub has berried.',
         chinese1: '灌木已结浆果。',
         liju2: 'We went berrying this afternoon.',
         chinese2: '今天下午我们去采浆果了。'
       },
	   {
         id: '3686',
         word: 'besiege',
         ciyi: 'vt. 围困，围攻，困扰',
         liju1: 'She was besieged by the press and the public.',
         chinese1: '她不断被媒体和公众打扰。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3687',
         word: 'biomedical',
         ciyi: 'a. 生物医学的',
         liju1: 'Biomedical research will enable many individuals infected with HIV to live longer, more comfortable lives.',
         chinese1: '生物医学研究将使许多感染艾滋病病毒的人们能够活得时间更长、更舒适。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3688',
         word: 'blanch',
         ciyi: 'vt. 漂白；使变白a. 漂白的；银白色的',
         liju1: 'Workers were blanching linen in the sun.',
         chinese1: '工人们正在把亚麻布放在阳光下晒白。',
         liju2: "Simon's face blanched as he looked at Sharpe's blood-drenched uniform.",
         chinese2: '当西蒙看见夏普被血浸透的制服时，脸一下子就白了。'
       },
	   {
         id: '3689',
         word: 'bland',
         ciyi: 'a. 温和的；（食物）清淡的；冷漠的',
         liju1: 'It tasted bland and insipid, like warmed cardboard.',
         chinese1: '它吃起来淡而无味，像加热过的卡纸板。',
         liju2: 'Serle has a blander personality than Howard.',
         chinese2: '塞尔在个性上比霍华德更沉闷。'
       },
	   {
         id: '3690',
         word: 'blockade',
         ciyi: 'vt. 封锁n. 阻塞',
         liju1: 'They ran a blockade and got to the border.',
         chinese1: '他们闯过封锁线来到边境地区。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3691',
         word: 'blockage',
         ciyi: 'n. 堵塞；封锁；妨碍',
         liju1: 'The logical treatment is to remove this blockage.',
         chinese1: '合理的处理方法是清除这种堵塞物。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3692',
         word: 'blot',
         ciyi: 'vt. 涂污，弄脏 n. 污点，污渍',
         liju1: 'A lie is an ugly blot on a person.',
         chinese1: '谎言是一个人丑陋的污点。',
         liju2: 'My sister’s skirt was blotted by some juice.',
         chinese2: '姐姐的裙子被果汁弄脏了。'
       },
	   {
         id: '3693',
         word: 'bluff',
         ciyi: 'n. 虚张声势，绝壁vt. 虚张声势，吓唬a. 直率的；陡峭的',
         liju1: 'The letter was a bluff.',
         chinese1: '这封信是虚张声势。',
         liju2: 'The gangster bluffed the police into thinking that he had a gun.',
         chinese2: '歹徒虚张声势，让警方误认为他有枪。',
		 liju3:'One of the choppers set down on the beach below them, the other on the bluff above.',
		 chinese3:'有一架直升机在他们下面的海滩上降落，其余的直接降落在断崖上。'
       },
	   {
         id: '3694',
         word: 'bravery',
         ciyi: 'n. 勇敢；勇气',
         liju1: 'The commander commended the soldier for his bravery.',
         chinese1: '司令员表扬这名士兵的勇敢。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3695',
         word: 'breakout',
         ciyi: 'n. 爆发；越狱',
         liju1: 'He is thought to have planned a prison breakout of militants suspected of the July bombing.',
         chinese1: '他被认为曾经策划了7月轰炸事件的嫌疑武力份子的越狱。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3696',
         word: 'breakthrough',
         ciyi: 'n. 突破；突破性进展',
         liju1: 'Our goal must be nothing short of a real breakthrough.',
         chinese1: '我们的目标是必须取得真正突破性进展。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3697',
         word: 'brood',
         ciyi: 'vt. 焦虑，沉思n. 一窝；一伙',
         liju1: 'You might as well leave a stranger with a brood of tigers.',
         chinese1: '你也可让一个陌生人和一窝老虎待在一起。',
         liju2: 'She constantly broods about her family.',
         chinese2: '她一直在为她的家人担忧。'
       },
	   {
         id: '3698',
         word: 'brotherhood',
         ciyi: 'n. 兄弟关系；手足情谊',
         liju1: 'They live and work together in complete equality and brotherhood.',
         chinese1: '他们完全平等和兄弟般地在一起生活和工作。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3699',
         word: 'Buddhist',
         ciyi: 'n. 佛教徒a. 佛教的',
         liju1: 'In this case, I genuinely believe in the Buddhist way of thinking.',
         chinese1: '在这种情况下，我真诚地相信佛教徒的思维方式。',
         liju2: 'On the extreme northwestern outskirts of the city stands the Buddhist temple.',
         chinese2: '那所佛教寺院位于市郊的最西北角。'
       },
	   {
         id: '3700',
         word: 'bust',
         ciyi: 'vt. 使破产；逮捕n. 破产；半身雕像，胸部',
         liju1: 'They will have to bust the door to get him out.',
         chinese1: '他们将不得不砸碎门把他弄出来。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3701',
         word: 'calamity',
         ciyi: 'n. 灾难；不幸事件',
         liju1: 'Even a greater natural calamity cannot daunt us.',
         chinese1: '再大的自然灾害也压不垮我们。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3702',
         word: 'calculus',
         ciyi: 'n. 结石；微积分学',
         liju1: "I think I've finally unzipped this calculus problem.",
         chinese1: '我认为我最终解出了这道微积分题。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3703',
         word: 'calf',
         ciyi: 'n. 小腿，小牛',
         liju1: 'No one knows the luck of a lousy calf.',
         chinese1: '邋遢小牛的运气如何,谁也不知道。',
         liju2: 'When my hand lay on her calf, I felt the constant twitching play of muscles.',
         chinese2: '当我的手放在她的小腿上时，我感觉到肌肉不断地在抽搐。'
       },
	   {
         id: '3704',
         word: 'caption',
         ciyi: 'n. 标题；（电影）字幕；（图片）说明文字',
         liju1: 'Each level should have exactly one caption attribute.',
         chinese1: '每个级别都应该有一个标题属性。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3705',
         word: 'carefree',
         ciyi: 'a. 无忧无虑的',
         liju1: 'The boy sat there, playing his toy leisurely and carefree.',
         chinese1: '那男孩坐在那里，自由自在地玩着玩具。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3706',
         word: 'catalyze',
         ciyi: 'vt. 催化；刺激，促进',
         liju1: 'Modern technology catalyzed tremendous economic growth in China.',
         chinese1: '现代技术促成了中国经济的巨大发展。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3707',
         word: 'cataract',
         ciyi: 'n. 白内障；大瀑布',
         liju1: 'In one study, light smokers were found to be more than twice as likely to get cataracts as non-smokers.',
         chinese1: '一项研究表明，轻度烟民患白内障的比例是不吸烟者的两倍以上。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3708',
         word: 'causal',
         ciyi: 'a. 因果关系的；有原因的',
         liju1: 'Rawlins stresses that it is impossible to prove a causal link between the drug and the deaths.',
         chinese1: '罗林斯强调说证实毒品与死亡之间的因果关系是不可能的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3709',
         word: 'censor',
         ciyi: 'vt.审查，检查n. 检查员',
         liju1: 'The film came under the ban of censor.',
         chinese1: '该影片被审查官员禁止上映。',
         liju2: 'Several paragraphs have been deleted from the book by the censor.',
         chinese2: '那本书中有好几段被新闻检查员删去了。'
       },
	   {
         id: '3710',
         word: 'centralization',
         ciyi: 'n. 集中化；中央集权管理',
         liju1: 'The crux of this scenario is the virtualization and centralization of information to create a set of consistent, reliable data.',
         chinese1: '这一场景的关键在于对信息进行虚拟化和集中化，以创建一组一致的、可靠的数据。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3711',
         word: 'championship',
         ciyi: 'n. 锦标赛，冠军的地位；有力的支持',
         liju1: 'The table tennis championship is broadcast live to several countries.',
         chinese1: '乒乓球锦标赛在几个的国家进行现场转播。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3712',
         word: 'chargeable',
         ciyi: 'a. 应支付的；可以控诉的；可充电的',
         liju1: 'The day of discharge is not chargeable if rooms are vacated by 12:00 noon.',
         chinese1: '如果中午12点前房间被腾空，退房当天就免交费用。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3713',
         word: 'checkup',
         ciyi: 'n. 审查，检查',
         liju1: 'The disease was detected during a routine checkup.',
         chinese1: '这种疾病是在一次例行体检中查出来的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3714',
         word: 'cheery',
         ciyi: 'a.乐观的，愉快的',
         liju1: 'I am a careful and cheery maturity female.',
         chinese1: '我是一个既严谨又活泼的成熟女性。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3715',
         word: 'cholesterol',
         ciyi: 'n. 胆固醇',
         liju1: 'Western diets may result in high blood cholesterol level.',
         chinese1: '西餐会导致血液中胆固醇的含量过高。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3716',
         word: 'chromosome',
         ciyi: 'n. 染色体',
         liju1: 'Each cell of our bodies contains 46 chromosomes.',
         chinese1: '我们体内的每个细胞都有46条染色体。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3717',
         word: 'chunk',
         ciyi: 'n. 厚块，大块；相当大的部分（或数量）',
         liju1: 'They had to be careful of floating chunks of ice.',
         chinese1: '他们不得不小心漂浮着的厚冰块。',
         liju2: 'The company owns a chunk of farmland near the airport.',
         chinese2: '这家公司在机场附近拥有一大片农场。'
       },
	   {
         id: '3718',
         word: 'circulation',
         ciyi: 'n. 流通，传播；循环；发行量',
         liju1: 'We must constantly adjust the amount of money in circulation.',
         chinese1: '我们必须对货币的流通不断进行调节。',
         liju2: 'The Daily News once had the highest circulation of any daily in the country.',
         chinese2: '《每日新闻报》一度在该国所有日报中拥有最高发行量。'
       },
	   {
         id: '3719',
         word: 'clique',
         ciyi: 'n. 派系，私党，小集团',
         liju1: 'He was accepted into the most popular clique on campus.',
         chinese1: '他被吸收到了校园里最受欢迎的小团体里。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3720',
         word: 'coffin',
         ciyi: 'n. 棺材',
         liju1: 'We draped the flag round the coffin.',
         chinese1: '我们把旗帜覆盖在灵柩上。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3721',
         word: 'cog',
         ciyi: 'vt.给…装配齿轮n.（齿轮的）钝齿',
         liju1: 'The mechanic welded a cog to the gear.',
         chinese1: '机修工在齿轮上焊了一个钝齿。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3722',
         word: 'colossal',
         ciyi: 'a. 巨大的；异常的',
         liju1: 'The colossal monument bestrode the harbor.',
         chinese1: '巨大的纪念碑高耸于海港上。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3723',
         word: 'comeback',
         ciyi: 'n. 恢复；复原',
         liju1: 'Tight fitting T-shirts are making a comeback.',
         chinese1: '紧身短袖圆领T恤衫再度流行起来。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3724',
         word: 'competence',
         ciyi: 'n. 能力，胜任',
         liju1: 'We can certify for him competence as an editor.',
         chinese1: '我们可以保证他能胜任编辑工作。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3725',
         word: 'complexion',
         ciyi: 'n. 肤色，局面；性质',
         liju1: 'She had short brown hair and a pale complexion.',
         chinese1: '她留棕色短发，面色苍白。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3726',
         word: 'compulsion',
         ciyi: 'n. 强制；强迫；强制力',
         liju1: 'Many universities argued that students learned more when they were in classes out of choice rather than compulsion.',
         chinese1: '很多大学认为学生出于自愿比被逼迫上课能学到更多的东西。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3727',
         word: 'confound',
         ciyi: 'vt. 混淆，弄错；使困惑，使混乱',
         liju1: 'Don’t confound public affairs with private ones.',
         chinese1: '不要把公事与私事混为一谈。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3728',
         word: 'congestion',
         ciyi: 'n. 拥塞，充血',
         liju1: 'The problems of traffic congestion will not disappear in a hurry.',
         chinese1: '交通堵塞问题不会很快消失。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3729',
         word: 'connotation',
         ciyi: 'n. 内涵，隐含意义',
         liju1: "It's just one of those words that have got so many negative connotations.",
         chinese1: '它只是那些有很多负面内涵意义的词之一。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3730',
         word: 'consequent',
         ciyi: 'a. 随之发生的；作为结果（或后果）的',
         liju1: 'The warming of the Earth and the consequent climatic changes affect us all.',
         chinese1: '全球变暖以及随之而来的气候变化影响我们每个人。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3731',
         word: 'conserve',
         ciyi: 'vt. 保存，保持',
         liju1: 'To live a good life is to conserve your health.',
         chinese1: '想要生活幸福就得保持身体健康。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3732',
         word: 'consul',
         ciyi: 'n. 领事；（古罗马的）两执政官之一',
         liju1: 'The consul’s consultant hauled out the assaulter from the vault.',
         chinese1: '领事的顾问把袭击者从地窖中拖了出来。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3733',
         word: 'contention',
         ciyi: 'n. 争论，争夺；论点',
         liju1: 'It is my contention that death and murder always lurk as potentials in violent relationships.',
         chinese1: '我的观点是，在暴力关系中总是潜伏着死亡和谋杀的可能。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3734',
         word: 'coral',
         ciyi: 'n. 珊瑚；珊瑚虫a. 珊瑚红的；珊瑚色的',
         liju1: 'The seas around Bermuda are full of colorful corals and fantastic fish.',
         chinese1: '百慕大周围的海域中到处都是五彩的珊瑚虫和奇异的鱼类。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3735',
         word: 'corporate',
         ciyi: 'a. 法人的；公司的，团体的',
         liju1: "His corporate's life will be as short as a rabbit's tail.",
         chinese1: '他的公司的寿命是兔子尾巴长不了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3736',
         word: 'corpse',
         ciyi: 'n. 尸体',
         liju1: 'They disinterred a corpse from the grave.',
         chinese1: '他们从墓中掘出一具尸体。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3737',
         word: 'coverage',
         ciyi: 'n. 覆盖，新闻报道',
         liju1: 'Now a special TV network gives live coverage of most races.',
         chinese1: '现在一个专门的电视网对大多数比赛进行现场报道。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3738',
         word: 'cram',
         ciyi: 'vt. 填满，塞满；为应考而学习',
         liju1: 'She was cramming for her Economics exam.',
         chinese1: '她正为了应付经济学考试而临时抱佛脚。',
         liju2: 'Terry crammed the dirty clothes into his bag.',
         chinese2: '特里把脏衣服塞进了包里。'
       },
	   {
         id: '3739',
         word: 'crater',
         ciyi: 'n. 火山口；弹坑',
         liju1: 'Lava boiled up from the crater of the volcano.',
         chinese1: '熔岩从火山口喷出。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3740',
         word: 'credible',
         ciyi: 'a. 可靠的，可信的',
         liju1: 'Her claims seem credible to many.',
         chinese1: '她的说法似乎在许多人看来是可信的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3741',
         word: 'Danube',
         ciyi: 'n. 多瑙河（位于欧洲）',
         liju1: 'With the court, chocolate moves in by via the blue Danube.',
         chinese1: '随着宫廷的迁移，巧克力也风靡了蓝色多瑙河。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3742',
         word: 'debase',
         ciyi: 'vt.降低；使…贬值',
         liju1: 'We trust that the central bank does not debase it.',
         chinese1: '我们信任央行不会降低货币的价值。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3743',
         word: 'debris',
         ciyi: 'n. 碎片，残骸，废墟',
         liju1: 'The sea tided the debris ashore.',
         chinese1: '潮水将碎片冲上海滩。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3744',
         word: 'decode',
         ciyi: 'vt. 译码，解码',
         liju1: 'All he had to do was to decode it and pass it over.',
         chinese1: '他所要做的就是解译它，然后把它发过去。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3745',
         word: 'delinquency',
         ciyi: 'n. 行为不良，（青少年的）不法行为',
         liju1: 'He had no history of delinquency.',
         chinese1: '他没有犯罪记录。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3746',
         word: 'demographer',
         ciyi: 'n. 人口统计学家，人口学家',
         liju1: "Based on one demographer's estimate, the number of stay-at-home dads who are the primary caregivers for their children reached nearly 2 million last year, or one in 15 fathers.",
         chinese1: '根据人口统计学家的估计，在家照顾小孩的全职爸爸人数在去年达到了近200万，也就是15个父亲当中有1个是全职爸爸。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3747',
         word: 'depletion',
         ciyi: 'n. 损耗，耗尽',
         liju1: 'People all round the world should pay more attention to the energy depletion.',
         chinese1: '全世界的人们都应该更加关心能源枯竭问题。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3748',
         word: 'depreciate',
         ciyi: 'vt. 使贬值；贬低；轻视vi. 贬值；轻视；贬低',
         liju1: "The computer's value will depreciate by $500 in the first year.",
         chinese1: '在头一年里这台电脑会贬值 500 美元。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3749',
         word: 'detrimental',
         ciyi: 'a. 不利的；有害的n. 有害的人（或物）',
         liju1: 'Lime in the soil is detrimental to some plants.',
         chinese1: '土壤里的石灰对某些植物有害。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3750',
         word: 'Devalue',
         ciyi: 'vt.使贬值；降低…的价值',
         liju1: 'They spread tales about her in an attempt to devalue her work.',
         chinese1: '他们散布关于她的传闻，企图贬低她的工作。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3751',
         word: 'devour',
         ciyi: 'vt.吞食；（一口气）读完；充满（好奇等）；挥霍，毁灭',
         liju1: 'Fire devoured the entire building.',
         chinese1: '大火烧毁了整幢大楼。',
         liju2: 'The child devours fairy tales.',
         chinese2: '小孩贪婪地倾听神话故事。',
		 liju3:'He devoured a lot of money.',
		 chinese3:'他挥霍掉大笔金钱。'
       },
	   {
         id: '3752',
         word: 'disparaging',
         ciyi: 'a. 毁谤的；轻蔑的',
         liju1: 'You should not disparage good manners.',
         chinese1: '你不应该轻视好的风度。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3753',
         word: 'disproportionate',
         ciyi: 'a. 不成比例的，不相称的',
         liju1: 'That gives them disproportionate influence over economic policy.',
         chinese1: '他们受到和经济政策不相称的影响。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3754',
         word: 'disseminate',
         ciyi: 'vt. 宣传，传播；散布',
         liju1: 'The doctors disseminated information about preventive medicine.',
         chinese1: '医生们宣传有关预防医学的知识。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3755',
         word: 'diverge',
         ciyi: 'vi. 分歧；偏离；离题',
         liju1: 'This is where our opinions diverge from each other.',
         chinese1: '我们的意见就是从此产生分歧的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3756',
         word: 'diversify',
         ciyi: 'vt.使多样化，使变化',
         liju1: 'The university diversified the educational program by introducing new subjects.',
         chinese1: '该大学引进新学科使教育计划多样化。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3757',
         word: 'dormant',
         ciyi: 'a. 休眠的；静止的，隐匿的',
         liju1: "Insects possess a biological clock that programs the insect's growth, reproduction and dormant periods.",
         chinese1: '昆虫具有一种生物钟，它会按照遗传密码控制昆虫的生长、繁殖和休眠期。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3758',
         word: 'downshifting',
         ciyi: 'n. 转换低速，（汽车等）调低速挡',
         liju1: 'The economy seems to be downshifting.',
         chinese1: '经济似乎正在放慢速度。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3759',
         word: 'downsizing',
         ciyi: 'n. 精简，裁员；缩小化',
         liju1: 'American manufacturing organizations have been downsizing their factories.',
         chinese1: '美国制造商们一直在缩小他们工厂的规模。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3760',
         word: 'drudgery',
         ciyi: 'n. 苦工，苦差事',
         liju1: 'People want to get away from the drudgery of their everyday lives.',
         chinese1: '人们想摆脱日常生活中的苦差事。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3761',
         word: 'dynamics',
         ciyi: 'n. 动力学，力学，动态',
         liju1: 'The parting of the waters can be understood through fluid dynamics.',
         chinese1: '水域被分开是可以用流体动力学来理解的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3762',
         word: 'egalitarian',
         ciyi: 'a. 平等主义的',
         liju1: 'I still believe in the notion of an egalitarian society.',
         chinese1: '我仍然相信平等主义社会的理念。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3763',
         word: 'elude',
         ciyi: 'vt. 逃避，躲避；不记得，不理解',
         liju1: 'He eluded the police for 13 years.',
         chinese1: '他躲了警察13年。',
         liju2: 'The appropriate word eluded him.',
         chinese2: '他想不起来那个合适的词。'
       },
	   {
         id: '3764',
         word: 'emancipate',
         ciyi: 'vt. 解放；释放',
         liju1: 'This new machine will emancipate us from the hard work.',
         chinese1: '这部新机器将把我们从繁重劳动中解放出来。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3765',
         word: 'ember',
         ciyi: 'n. 灰烬，余烬',
         liju1: 'The embers of the bonfire remained.',
         chinese1: '那堆篝火灰烬尚存。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3766',
         word: 'emulation',
         ciyi: 'n. 竞争，赶超；效法',
         liju1: 'Annie worked hard in emulation of others.',
         chinese1: '安妮努力赶超他人。',
         liju2: 'His spirit of assiduous study is worthy of emulation.',
         chinese2: '他刻苦钻研的精神，值得效法。'
       },
	   {
         id: '3767',
         word: 'encompass',
         ciyi: 'vt. 包含；包围，环绕',
         liju1: 'They built a moat to encompass the castle.',
         chinese1: '他们在城堡周围修了一条护城河。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3768',
         word: 'encroach',
         ciyi: 'vi. 侵占；蚕食；侵蚀',
         liju1: 'The new institutions do not encroach on political power.',
         chinese1: '这些新机构没有侵犯到政治权力。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3769',
         word: 'engrave',
         ciyi: 'vt.（在…上）雕刻；铭记',
         liju1: 'That image is engraved on my mind.',
         chinese1: '那个形象铭记在我脑海里。',
         liju2: 'He had the jeweler engrave his name on the back of the watch.',
         chinese2: '他请钟表匠把他的名字刻在手表的背面。'
       },
	   {
         id: '3770',
         word: 'entangle',
         ciyi: 'vt. 使纠缠；卷入',
         liju1: 'The country became entangled in a grave economic crisis.',
         chinese1: '该国陷入了严重的经济危机。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3771',
         word: 'entreat',
         ciyi: 'vt. 恳求；请求vi. 恳求；乞求',
         liju1: 'She was not accustomed to entreat.',
         chinese1: '她不习惯于乞求于人。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3772',
         word: 'entrust',
         ciyi: 'vt. 委托，信托',
         liju1: 'We entrusted him with our lives.',
         chinese1: '我们把我们的生命托付给他了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3773',
         word: 'envision',
         ciyi: 'vt. 想象；预想',
         liju1: 'Alana never envisioned her college career ending like this.',
         chinese1: '阿兰娜从未想到她的大学生涯会如此结束。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3774',
         word: 'enzyme',
         ciyi: 'n. [生化] 酶',
         liju1: 'The students learned how digestive enzymes break food down.',
         chinese1: '学生们了解了消化酶是如何分解食物的。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3775',
         word: 'epithet',
         ciyi: 'n. 绰号；侮辱性词汇',
         liju1: 'For that epithet of yours, I will devise a new punishment for you.',
         chinese1: '就为你那句骂人的话，我会再给你加一条新的惩罚。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3776',
         word: 'espionage',
         ciyi: 'n. 间谍；间谍活动',
         liju1: 'The authorities have arrested several people suspected of espionage.',
         chinese1: '当局已经逮捕了几个涉嫌从事间谍活动的人。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3777',
         word: 'euthanasia',
         ciyi: 'n. 安乐死',
         liju1: 'Whatever way you look at it, euthanasia is a subject which cannot be ignored.',
         chinese1: '不管你以何种方式看待，安乐死都是不容忽视的主题。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3778',
         word: 'excavate',
         ciyi: 'vt. 挖掘；开凿vi. 发掘；细查',
         liju1: 'The ground was excavated for a foundation.',
         chinese1: '地面被挖空作为地基。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3779',
         word: 'excavation',
         ciyi: 'n. 挖掘，发掘；[pl.]挖掘的地方',
         liju1: 'We found some gold coins in the excavations.',
         chinese1: '我们在挖掘的地方发现了金币。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3780',
         word: 'facial',
         ciyi: 'a. 面部的，表面的；面部用的',
         liju1: "Where's the best place to get a facial in New York City?",
         chinese1: '在纽约做美容最好的地方在哪儿？',
         liju2: "The camera panned in for a better view of the actress' facial expression.",
         chinese2: '镜头拉近，以便更清楚地拍摄到女演员的脸部表情。'
       },
	   {
         id: '3781',
         word: 'fallacy',
         ciyi: 'n. 谬论，谬误',
         liju1: "It's a fallacy that the affluent give relatively more to charity than the less prosperous.",
         chinese1: '富人比不太有钱的人给慈善机构相对更多捐赠是一种谬论。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3782',
         word: 'fallout',
         ciyi: 'n. 放射性尘埃；附带结果，余波',
         liju1: 'They were exposed to radioactive fallout during nuclear weapons tests.',
         chinese1: '他们在核武器试验过程中暴露于放射性核辐射。',
         liju2: 'Grundy lost his job in the fallout from the incident.',
         chinese2: '格伦迪因该事故丢了工作。'
       },
	   {
         id: '3783',
         word: 'fanatic',
         ciyi: 'n. 狂热入迷者；盲信者 a. 狂热的；盲信的',
         liju1: 'I am not a religious fanatic but I am a Christian.',
         chinese1: '我不是个宗教狂热分子，但我是个基督徒。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3784',
         word: 'farfetched',
         ciyi: 'a. 牵强的',
         liju1: 'His jokes were somewhat farfetched.',
         chinese1: '他的笑话有些牵强附会。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3785',
         word: 'fascism',
         ciyi: 'n. 法西斯主义；极端的国家主义',
         liju1: 'Fascism was on the march in Germany and Italy.',
         chinese1: '法西斯主义在德国和意大利兴起。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3786',
         word: 'federation',
         ciyi: 'n. 联合会；联邦',
         liju1: 'Some of good men drained from the Russian Federation.',
         chinese1: '一些优秀人才离开了俄罗斯联邦。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3787',
         word: 'feminist',
         ciyi: 'n. 女权主义者',
         liju1: "In that sense, her status as Argentina's first elected woman president is not quite the feminist victory it appears.",
         chinese1: '从这个意义上说，她作为阿根廷第一位民选女总统似乎不完全是女权主义的胜利。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3788',
         word: 'feverishly',
         ciyi: 'ad. 狂热地；兴奋地',
         liju1: 'As we get older, we work feverishly to recapture our youth.',
         chinese1: '随着我们年纪越来越大，我们狂热地工作以重获青春。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3789',
         word: 'fissure',
         ciyi: 'n. 裂缝；裂沟vt. 裂开；分裂',
         liju1: 'This is an amazing cave that can be accessed through a fissure in the ground with a rope.',
         chinese1: '这是一个非常奇妙的山洞，可以利用绳索从一个地上的裂缝进入其中。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3790',
         word: 'flake',
         ciyi: 'vt. 使…成薄片；雪花般落下 n. 小薄片',
         liju1: 'Large flakes of snow began swiftly to fall.',
         chinese1: '大片的雪花开始飞快地落下。',
         liju2: 'The surface corrosion was worst where the paint had flaked off.',
         chinese2: '油漆已经剥落的地方，表面的腐蚀最严重。'
       },
	   {
         id: '3791',
         word: 'flick',
         ciyi: 'vi. 轻拍，（轻而快地）移动；轻轻拂去',
         liju1: 'His tongue flicked across his lips.',
         chinese1: '他的舌头在双唇间快速移动。',
         liju2: 'Flick the dust off and we will use this table.',
         chinese2: '把这张桌子上的灰尘轻轻抹去，我们要用桌子。'
       },
	   {
         id: '3792',
         word: 'flicker',
         ciyi: 'vi. 闪烁；摇曳n. 闪烁；闪光',
         liju1: 'Fluorescent lights flickered, and then the room was blindingly bright.',
         chinese1: '荧光灯闪了闪，接着房间里就亮得令人目眩了。',
         liju2: 'Looking through the window I saw the flicker of flames.',
         chinese2: '透过窗子望出去，我看到了闪烁的火光。'
       },
	   {
         id: '3793',
         word: 'flip',
         ciyi: 'vi. 快速翻动；轻抛，蹦跳a. 无礼的',
         liju1: 'He was flipping through a magazine in the living room.',
         chinese1: '他在起居室里快速翻阅一本杂志。',
         liju2: 'I pulled a coin from my pocket and flipped it.',
         chinese2: '我从口袋里掏出一枚硬币，把它投掷出去。'
       },
	   {
         id: '3794',
         word: 'flutter',
         ciyi: 'vt.（鸟等）振翼，飘动，（心脏等）快速跳动n. 摆动；紧张',
         liju1: 'The birds fluttered excitedly in the trees.',
         chinese1: '鸟儿在树林中兴奋地飞来飞去。',
         liju2: 'She fluttered about the room anxiously.',
         chinese2: '她坐立不安地在房间里走来走去。'
       },
	   {
         id: '3795',
         word: 'foe',
         ciyi: 'n. 敌人，仇敌',
         liju1: 'But he soon discovers that his old foe may be leading him into a trap.',
         chinese1: '但他不久发现他的老对头也许正把他引入圈套。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3796',
         word: 'frenzy',
         ciyi: 'n. 狂暴；狂怒',
         liju1: '"Get out!" she ordered in a frenzy.',
         chinese1: '“滚出去！”她发疯似地命令道。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3797',
         word: 'frigid',
         ciyi: 'a. 寒冷的，冷淡的',
         liju1: 'A snowstorm hit the West today, bringing with it frigid temperatures.',
         chinese1: '一场暴风雪今天袭击西部地区，带来了严寒低温。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3798',
         word: 'fungus',
         ciyi: 'n. 真菌，菌类植物',
         liju1: 'The latest study reveals that, in fact, both extreme hot and cold temperatures stop the fungus from killing frogs.',
         chinese1: '最新的研究表明，事实上极热和极冷的温度都会阻止这种真菌杀死蛙类。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3799',
         word: 'fury',
         ciyi: 'n. 狂怒；激烈，猛烈',
         liju1: 'She screamed, and her face distorted with fury and pain.',
         chinese1: '她尖叫着，她的脸因愤怒和痛苦而扭曲了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3800',
         word: 'futurist',
         ciyi: 'n. 未来主义者；未来派画家a. 未来主义的',
         liju1: 'This, though it fulfills the laws and requirements of futurist poetry, can hardly be classed as Literature.',
         chinese1: '尽管这符合未来派诗歌的规则和要求，却很难被归入文学之列。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3801',
         word: 'futurologist',
         ciyi: 'n. 未来学家',
         liju1: 'Susan fell in love with a futurologist.',
         chinese1: '苏珊爱上了一个未来学家。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3802',
         word: 'geophysical',
         ciyi: 'a. 地球物理学的',
         liju1: 'Thank you for furnishing me with so many geophysical data.',
         chinese1: '谢谢你给我提供这么多地球物理学的资料。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3803',
         word: 'gizmo',
         ciyi: 'n. 小发明（等于gismo ）',
         liju1: 'Tom shows all his gizmos to us.',
         chinese1: '汤姆把他所有的小发明都展示给我们看。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3804',
         word: 'glamor',
         ciyi: 'n. 魅力，吸引力，迷人的美（等于glamour）',
         liju1: 'His performance fully displayed the infinite glamor of Chinese dance.',
         chinese1: '他的表演充分展示了中华舞蹈的无穷魅力。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3805',
         word: 'gland',
         ciyi: 'n. 腺',
         liju1: 'The sweating rate depends on the sweat output per gland.',
         chinese1: '出汗量决定于每个腺体输出的汗量。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3806',
         word: 'gratify',
         ciyi: 'vt. 使满意，使高兴，纵容',
         liju1: 'Your good marks gratify me very much.',
         chinese1: '你的好评使我非常高兴。',
         liju2: "We gratified our friend's curiosity.",
         chinese2: '我们满足了朋友的好奇心。'
       },
	   {
         id: '3807',
         word: 'gravel',
         ciyi: 'n. 碎石；砂砾vt. 用碎石铺',
         liju1: 'His old car bumped down the gravel road.',
         chinese1: '他那辆老爷车在砾石路上颠簸行驶。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3808',
         word: 'groove',
         ciyi: 'n.沟，槽；唱片上的纹路',
         liju1: 'The cupboard door slides open along the groove.',
         chinese1: '橱柜的门沿槽移开。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3809',
         word: 'growl',
         ciyi: 'vi. 咆哮着说，发牢骚地说n. 咆哮声；吠声；不平',
         liju1: 'The dog growled at me.',
         chinese1: '狗朝我狂吠。',
         liju2: 'Suddenly we were aroused by a thunder of a growl.',
         chinese2: '突然，我们被一声雷鸣般的吼声吵醒。'
       },
	   {
         id: '3810',
         word: 'guardian',
         ciyi: 'n. 监护人，保护人；守护者',
         liju1: 'The court constituted him legal guardian of the child.',
         chinese1: '法庭指定他为这个孩子的合法监护人。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3811',
         word: 'gunpowder',
         ciyi: 'n. 黑色火药；有烟火药',
         liju1: 'Gunpowder was used in China as far back as the 11th century.',
         chinese1: '远在公元11世纪，中国已使用火药。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3812',
         word: 'hallucination',
         ciyi: 'n. 幻觉，幻想；错觉',
         liju1: 'The drug induces hallucinations at high doses.',
         chinese1: '这种毒品在大剂量使用时会引发幻觉。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3813',
         word: 'harass',
         ciyi: 'vt. 使困扰；骚扰，侵扰',
         liju1: 'He will bring up your past to haunt and harass you.',
         chinese1: '他将带你回到从前，困扰和骚扰你。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3814',
         word: 'haunt',
         ciyi: 'vt. 常出没于…；萦绕于…',
         liju1: 'People say ghosts haunt that old house.',
         chinese1: '据说那座老宅子有鬼魂出没。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3815',
         word: 'hectare',
         ciyi: 'n. 公顷',
         liju1: 'The park has an area of only several hectares.',
         chinese1: '这个公园占地只有几公顷。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3816',
         word: 'heed',
         ciyi: 'n. 注意到；留心到vt. 注意，留心',
         liju1: "He didn't heed my advice.",
         chinese1: '他没有听从我的忠告。',
         liju2: 'And unfortunately, not everyone will heed.',
         chinese2: '不幸的是，不是每个人都会注意。'
       },
	   {
         id: '3817',
         word: 'helix',
         ciyi: 'n. 螺旋，螺旋状物',
         liju1: 'The structures are made from bundles of double-helix DNA strands.',
         chinese1: '这些结构是由一束束双螺旋DNA链构成。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3818',
         word: 'hockey',
         ciyi: 'n. 曲棍球',
         liju1: 'They were playing at hockey.',
         chinese1: '他们正在打曲棍球。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3819',
         word: 'homicide',
         ciyi: 'n. 杀人；杀人犯',
         liju1: 'The police arrived at the scene of the homicide.',
         chinese1: '警察赶到了杀人现场。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3820',
         word: 'honesty',
         ciyi: 'n. 诚实，正直，坦率',
         liju1: 'He learned honesty from his mother.',
         chinese1: '他从母亲那里学会诚实。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3821',
         word: 'hospice',
         ciyi: 'n. 收容所；救济院',
         liju1: 'And with one long last look, I turned and left the hospice.',
         chinese1: '最后久久地凝视了她一眼，我转身离开了收容所。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3822',
         word: 'hospitable',
         ciyi: 'a. 好客的，（气候）宜人的；（对新思想等）易接受的',
         liju1: 'The man is very hospitable; he keeps open house for his friends and fellow-workers.',
         chinese1: '那人十分好客，无论是他的朋友还是同事，他都盛情接待。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3823',
         word: 'husbandry',
         ciyi: 'n. 饲养，务农，管理，畜牧',
         liju1: 'They depended on animal husbandry for their livelihood.',
         chinese1: '他们以畜牧业为生。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3824',
         word: 'hydroelectric',
         ciyi: 'a. 水力发电的',
         liju1: 'Water levels in rivers are low, with the result that hydroelectric plants are generating about a fifth less electricity than normal.',
         chinese1: '河流水位普遍偏低，这就导致了水力发电站只能产出不到平时五分之一的发电量。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3825',
         word: 'hysteria',
         ciyi: 'n. 歇斯底里',
         liju1: 'No one could help getting carried away by the hysteria.',
         chinese1: '歇斯底里发作起来谁也无法控制自己。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3826',
         word: 'iceberg',
         ciyi: 'n. 冰山',
         liju1: 'The ship ran upon the iceberg.',
         chinese1: '轮船撞到冰山上。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3827',
         word: 'icon',
         ciyi: 'n. 图标；肖像，（东正教的）圣像',
         liju1: 'What do you think this face icon represent?',
         chinese1: '你们认为这个脸部图标表示什么？',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3828',
         word: 'impoverished',
         ciyi: 'a. 穷困的；无力的，无创造性的',
         liju1: 'Money and food were sent to the impoverished drought victims.',
         chinese1: '给贫困的灾民送去了救济金和粮食。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3829',
         word: 'imprint',
         ciyi: 'n. 印记；深刻的印象，特征 vt.刻上记号，铭记',
         liju1: 'As I arrived, the shimmering skyline of domes and minarets was imprinted on my memory.',
         chinese1: '当我到达时，穹顶和尖塔形成的泛着微光的空中轮廓线铭刻在我的记忆中。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3830',
         word: 'imprison',
         ciyi: 'vt.监禁；禁锢，关押',
         liju1: 'He was imprisoned for 18 months on charges of theft.',
         chinese1: '他因盗窃指控而被监禁了18个月。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3831',
         word: 'improper',
         ciyi: 'a. 不正确的；不适当的',
         liju1: 'The improper use of medicine could lead to severe adverse reactions.',
         chinese1: '用药不当会引起严重的不良反应。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3832',
         word: 'inborn',
         ciyi: 'a. 天生的；先天的',
         liju1: 'He had an inborn talent for languages.',
         chinese1: '他有天生的语言才能。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3833',
         word: 'incoming',
         ciyi: 'a. 进来的，来临的；即将就任的',
         liju1: 'The airport was closed for incoming flights.',
         chinese1: '机场为正到达的飞机而关闭。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3834',
         word: 'incomplete',
         ciyi: 'a. 不完全的，不完善的',
         liju1: 'The clearing of rubbish and drains is still incomplete.',
         chinese1: '垃圾和污水的清理工作还没有完成。',
         liju2: 'China is so vast that whatever you report is an incomplete picture.',
         chinese2: '中国很大，不管你报道什么，都不是一个完整的图景。'
       },
	    {
         id: '3835',
         word: 'indistinct',
         ciyi: 'a. 模糊的，不清楚的',
         liju1: 'I only have indistinct memory of her.',
         chinese1: '我对她只要模糊的印象',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3836',
         word: 'ineptly',
         ciyi: 'ad. 不适当地；无能地',
         liju1: 'Some of the business restructuring of recent years may have been ineptly done.',
         chinese1: '近年来的一些业务重组并不适合。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3837',
         word: 'inexorable',
         ciyi: 'a. 无情的；不可阻挡的；不可动摇的',
         liju1: 'This is an inexorable law governing social advancement.',
         chinese1: '这是社会前进的必然规律。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3838',
         word: 'infection',
         ciyi: 'n. 感染，传染；传播；传染病',
         liju1: 'The main emphasis of our research has shifted to the prevention of infection and septicemia.',
         chinese1: '我们研究的重点转到预防感染和败血病方面来。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3839',
         word: 'innate',
         ciyi: 'a. 先天的；固有的；与生俱来的',
         liju1: 'Correct ideas are not innate in the mind, but come from social practice.',
         chinese1: '正确的思想不是头脑中先天固有的，而是来源于社会实践。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3840',
         word: 'innovate',
         ciyi: 'vi. 创新；革新',
         liju1: 'What sets Rice apart from most engineers is his constant desire to innovate and experiment.',
         chinese1: '赖斯与大多数工程师不同之处在于他不断地渴望创新和实验。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3841',
         word: 'insane',
         ciyi: 'a. 疯狂的；精神病的；极愚蠢的，荒唐的',
         liju1: 'The doctor certified him insane.',
         chinese1: '医生确诊他精神失常。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3842',
         word: 'insidious',
         ciyi: 'a. 隐蔽的，阴险的；隐伏的',
         liju1: 'Colonization is perhaps the most insidious form of imprisonment.',
         chinese1: '殖民地化可能是监禁最隐匿的形式。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3843',
         word: 'intake',
         ciyi: 'n. 摄取量；吸收，吸纳',
         liju1: 'Also, try to limit your intake of caffeine and alcohol.',
         chinese1: '你也要限制你的咖啡因和酒精的摄入量。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3844',
         word: 'intent',
         ciyi: 'n. 意图；目的a. 专心的，专注的；急切的',
         liju1: 'She looked from one intent face to another.',
         chinese1: '她看着一张张专注的面孔。',
         liju2: 'It was their intent to micromanage the issues, to become part of the process.',
         chinese2: '他们的目的是为了微观处理这个问题，使之成为整个过程中的一部分。'
       },
	    {
         id: '3845',
         word: 'interlocking',
         ciyi: 'a. 连锁的，相连的',
         liju1: 'Both sides rely on each other in interlocking trade networks.',
         chinese1: '双方在连锁贸易网中相互依赖。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3846',
         word: 'intranet',
         ciyi: 'n. 内联网；企业内部互联网',
         liju1: 'The company also uses its intranet to communicate with its staff around the world.',
         chinese1: '公司还用公司的内部网与世界各地的员工进行通信联络。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3847',
         word: 'inventive',
         ciyi: 'a. 善于创造的，发明的',
         liju1: 'He has an inventive genius.',
         chinese1: '他有发明的天才。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3848',
         word: 'invoice',
         ciyi: 'n. 发票；发货单vt. 开发票；记清单',
         liju1: 'The merchandise does not check with invoice.',
         chinese1: '这批货与发货单不符。',
         liju2: 'The agency invoices the client who then pays the full amount to the agency.',
         chinese2: '那个代销处给客户开具发票，然后客户向代销处支付全部的款项。'
       },
	    {
         id: '3849',
         word: 'irrigation',
         ciyi: 'n. 灌溉；冲洗法',
         liju1: 'Irrigation is needed to make crops grow in dry regions.',
         chinese1: '干旱地区需要灌溉才能使作物生长。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3850',
         word: 'itinerary',
         ciyi: 'n. 旅程表，行程路线a. 旅程的',
         liju1: 'I need your travel itinerary by end of day.',
         chinese1: '我需要在今天之内知道你的旅行路线。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3851',
         word: 'jeer',
         ciyi: 'n. 嘲笑；戏弄vi. 嘲笑；戏弄',
         liju1: 'They all jeer at the foolish speaker.',
         chinese1: '他们都嘲笑那个愚蠢的演说者。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3852',
         word: 'Jew',
         ciyi: 'n. 犹太人；犹太教徒',
         liju1: 'The disciple was a Jew.',
         chinese1: '有一个门徒是犹太人。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3853',
         word: 'juggle',
         ciyi: 'vt. 歪曲；用戏法变出',
         liju1: 'The magician juggled some oranges into pigeons.',
         chinese1: '魔术师将一些橙子变成了鸽子。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3854',
         word: 'keyword',
         ciyi: 'n.关键字，重要字',
         liju1: 'You have options to search by image content, keyword, or group.',
         chinese1: '您可以选择按图像内容、关键字或组进行搜索。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3855',
         word: 'kindle',
         ciyi: 'vt.点燃；激起；照亮',
         liju1: 'The Second World War kindled his enthusiasm for politics.',
         chinese1: '第二次世界大战激发了他的政治热情。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3856',
         word: 'laid-off',
         ciyi: 'a. 被解雇的，下岗的',
         liju1: 'Laid-off factory workers tend to return to the countryside and rely on their extended families.',
         chinese1: '被解雇的工厂员工往往选择返回农村老家，依赖大家庭维持生计。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3857',
         word: 'lavish',
         ciyi: 'a. 浪费的；丰富的；过度慷慨的 vt. 浪费，挥霍',
         liju1: 'Critics attack his lavish spending and flamboyant style.',
         chinese1: '批评家们抨击他的挥霍无度和过分夸张的作风。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3858',
         word: 'lawsuit',
         ciyi: 'n. 诉讼（尤指非刑事案件）',
         liju1: 'The dispute culminated last week in a lawsuit against the government.',
         chinese1: '这场针对政府诉讼案的争论在上星期达到了高潮。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3859',
         word: 'legible',
         ciyi: 'a. （印刷或字迹）清晰的；易读的',
         liju1: "My handwriting isn't very legible.",
         chinese1: '我写的字不太好认。',
         liju2: 'The interpreter translated this novel into a legible English version.',
         chinese2: '译者把这本小说译成了通俗易懂的英文版。'
       },
	    {
         id: '3860',
         word: 'light-year',
         ciyi: 'n. 光年',
         liju1: 'Seen so clearly in this sharp Hubble Space Telescope image, the truly cosmic eye is over half a light-year across.',
         chinese1: '在这张清晰的哈勃太空望远镜照片张清楚看到的这个真正的宇宙之眼的直径超过半光年。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3861',
         word: 'limpid',
         ciyi: 'a. 透明的，清澈的；无忧虑的',
         liju1: 'On the endless grassland gleams a limpid brook which is flanked by wild date trees.',
         chinese1: '一望无际的草原上，有一条清澈的小河，两旁长满了野生的枣树。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3862',
         word: 'livelihood',
         ciyi: 'n. 生计，生活',
         liju1: "Consideration must be given to both the development of production and the improvement of the people's livelihood.",
         chinese1: '发展生产和改善人民生活二者必须兼顾。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3863',
         word: 'lobster',
         ciyi: 'n. 龙虾',
         liju1: 'She sold me a couple of live lobsters.',
         chinese1: '她卖给了我几只活龙虾。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3864',
         word: 'lookout',
         ciyi: 'n. 监视，警戒；前景',
         liju1: 'The lookout of this country’s economy is not optimistic.',
         chinese1: '该国的经济前景不容乐观。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3865',
         word: 'maize',
         ciyi: 'a. 黄色的，玉米色的n. （植物）玉蜀黍，玉米',
         liju1: 'We can grow sorghum or maize on this plot.',
         chinese1: '这块地可以种高粱或玉米。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3866',
         word: 'makeup',
         ciyi: 'n. 化妆品；组成；补充；补考',
         liju1: "Don't dawdle over your makeup, and we don't want to be late for the concert.",
         chinese1: '你别慢吞吞地化妆，我们不想音乐会迟到。',
         liju2: 'The ideological makeup of the unions is now radically different from what it had been.',
         chinese2: '这些协会的意识形态构成如今与过去大相径庭。',
		 liju3:'The teacher promised to give Tom a makeup examination.',
		 chinese3:'老师允诺给汤姆一次补考机会。'
       },
	    {
         id: '3867',
         word: 'mania',
         ciyi: 'n. 狂热；热衷，癖好',
         liju1: 'The mania for dinosaurs began in the late 1800s.',
         chinese1: '恐龙热兴起于19世纪晚期。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3868',
         word: 'manicurist',
         ciyi: 'n. 指甲修饰师',
         liju1: 'The manicurist will be right here.',
         chinese1: '修指甲师马上就过来。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3869',
         word: 'Mars',
         ciyi: 'n.火星',
         liju1: 'They found that in some, Mars and Venus collided with the Earth.',
         chinese1: '他们发现在有些情况下，火星和金星会与地球相撞。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3870',
         word: 'media',
         ciyi: 'n. 媒体；媒质（medium的复数）',
         liju1: 'Most of us are known to succumb to persuasion through the media.',
         chinese1: '我们之中的大多数人都抵挡不住传播媒介的宣传。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3871',
         word: 'mediate',
         ciyi: 'vt. 调停，调解； a. 间接的；居间的',
         liju1: 'The government must mediate the struggle for water resources.',
         chinese1: '政府必须通过调解解决对水资源的争夺。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3872',
         word: 'Medicare',
         ciyi: 'n. 医疗保险制度',
         liju1: 'We have to limit Medicare and Medicaid.',
         chinese1: '我们必须限制医疗保险和医疗补助。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3873',
         word: 'medication',
         ciyi: 'n. 药物；药物治疗',
         liju1: 'When somebody comes for treatment I always ask them if they are on any medication.',
         chinese1: '有人来治疗时，我总是会问他们是否在服药。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3874',
         word: 'mediocrity',
         ciyi: 'n. 平庸之才；平常',
         liju1: 'Until that happens, you will wallow in mediocrity.',
         chinese1: '等到那个时候，你将会变得平庸。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3875',
         word: 'merrymaking',
         ciyi: 'n. 狂欢者；寻欢作乐，欢宴作乐',
         liju1: 'Come and join in the merrymaking.',
         chinese1: '来参加我们的狂欢。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3876',
         word: 'microprocessor',
         ciyi: 'n. 微处理器',
         liju1: 'Our applications take in massive amounts of information and crunch it with the power of the microprocessor.',
         chinese1: '我们的应用程序将接收大量信息并使用微处理器的能力来处理这些信息。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3877',
         word: 'mighty',
         ciyi: 'a. 有力的；强有力的；有势力的ad. 很；极；非常',
         liju1: 'There was a flash and a mighty bang.',
         chinese1: '一道闪光伴随着一声轰然巨响。',
         liju2: "It's something you'll be mighty proud of.",
         chinese2: '这是个你会非常骄傲的事。'
       },
	    {
         id: '3878',
         word: 'milestone',
         ciyi: 'n. 里程碑，划时代的事件',
         liju1: 'But for these young people, the real milestone would be to find something to do next.',
         chinese1: '但是对于这些年轻人们来说，真正的里程碑是接下来要找到事情做。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3879',
         word: 'millennium',
         ciyi: 'n.一千年，黄金时代',
         liju1: 'We have entered the third millennium through a gate of fire.',
         chinese1: '我们通过一道火焰门进入了第三个千年。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3880',
         word: 'misguided',
         ciyi: 'a. 被误导的',
         liju1: 'Trying to act as a combined research and healthcare operation is misguided.',
         chinese1: '试图把研究和保健相结合的行为就是一种误导。',
         liju2: 'In a misguided attempt to be funny, he manages only offensiveness.',
         chinese2: '他试图使自己很风趣，可弄巧成拙地冒犯了别人。'
       },
	    {
         id: '3881',
         word: 'misuse',
         ciyi: 'vt. 滥用；误用； n. 滥用；误用；虐待',
         liju1: 'I hate to see her misusing her time like that.',
         chinese1: '我不愿看到她把时间用在不正当的事情上。',
         liju2: 'I noticed a misuse of the word “who” in your letter.',
         chinese2: '我发现在你的信中误用了who这个词。'
       },
	    {
         id: '3882',
         word: 'modem',
         ciyi: 'n. 调制解调器',
         liju1: 'He sent his work to his publishers by modem.',
         chinese1: '他通过调制解调器把作品发给他的出版商。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3883',
         word: 'modulate',
         ciyi: 'vt.调节；（信号）调制；调整（音的强弱）',
         liju1: 'Some people are able to modulate their voices according to the size of the room in which they speak.',
         chinese1: '有些人能根据房间大小调节自己讲话的声音。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3884',
         word: 'monarchy',
         ciyi: 'n. 君主制',
         liju1: 'Britain is a constitutional monarchy.',
         chinese1: '英国是个君主立宪制国家。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3885',
         word: 'monk',
         ciyi: 'n. 僧侣，修道士；和尚',
         liju1: 'The young monk was released from his vows.',
         chinese1: '这位年轻的僧人被准许还俗。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3886',
         word: 'morphine',
         ciyi: 'n. 吗啡',
         liju1: 'Morphine is a white bitter substance obtained from opium and used in medicine to reduce pain.',
         chinese1: '吗啡是从鸦片中提炼出的苦味的白色物体，用作减痛的药物。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3887',
         word: 'mortify',
         ciyi: 'vt. 使…感屈辱，使痛心',
         liju1: 'Jane mortified her family by leaving her husband.',
         chinese1: '简的家人为简离开了丈夫感到奇耻大辱。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3888',
         word: 'motorist',
         ciyi: 'n.开汽车的人，驾驶者',
         liju1: 'Police urged motorists to take extra care on the roads.',
         chinese1: '警方敦促汽车驾驶员们在路上要格外当心。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3889',
         word: 'motorway',
         ciyi: 'n. 高速公路',
         liju1: 'Several cars piled up after ignoring the fog warning on the motorway.',
         chinese1: '由于无视高速公路上的大雾警告，有好几辆汽车相撞。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3890',
         word: 'mummy',
         ciyi: 'n. （口）妈妈；木乃伊',
         liju1: 'In their investigations, the researchers discovered that the mummy’s skin and recent skin samples were very similar.',
         chinese1: '在他们的研究中，研究者发现木乃伊的皮肤与现代人的皮肤样本非常类似。',
         liju2: 'Be very good and very quiet and help your mummy.',
         chinese2: '你要乖乖的，安安静静的，要帮妈妈干活。'
       },
	    {
         id: '3891',
         word: 'Muslim',
         ciyi: 'n. 穆斯林；穆罕默德信徒 a. 伊斯兰教的',
         liju1: 'Friday is a holiday in Muslim countries.',
         chinese1: '在穆斯林（回教）国家星期五是假日。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3892',
         word: 'muster',
         ciyi: 'vt. 召集；对…进行点名；使振作n. 集合；点名册',
         liju1: 'Muster all the students you can find.',
         chinese1: '把能找到的学生都集合起来。',
         liju2: 'He nourished me to muster my courage.',
         chinese2: '他激励我鼓起勇气。'
       },
	    {
         id: '3893',
         word: 'mutability',
         ciyi: 'n. 易变性；突变性',
         liju1: 'Mutability of attributes is an important property of usage control model.',
         chinese1: '属性的可变性是使用控制模型的一个重要特征。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3894',
         word: 'narrowly',
         ciyi: 'ad. 仔细地；勉强地；狭窄地；严密地',
         liju1: 'He grimaced and looked narrowly at his colleague.',
         chinese1: '他做了个鬼脸，然后仔细地看着同事。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3895',
         word: 'navigate',
         ciyi: 'vt.驾驶，使通过；航行于vi. 航行，航空',
         liju1: 'The purpose of the visit was to navigate into an ice-filled fiord.',
         chinese1: '这次访问的目的是为驶入一个冰雪覆盖的峡湾导航。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3896',
         word: 'Nazism',
         ciyi: 'n. 纳粹主义',
         liju1: 'The new Nazism is resurging in some places in Germany.',
         chinese1: '新纳粹主义正在德国的一些地方复活。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3897',
         word: 'neon',
         ciyi: 'n. 霓虹灯；氖',
         liju1: 'Neon flickers outside the club.',
         chinese1: '俱乐部外霓虹灯闪烁。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3898',
         word: 'neurology',
         ciyi: 'n. 神经病学；神经学',
         liju1: 'He trained in neurology at the National Hospital for Nervous Diseases.',
         chinese1: '他在神经性疾病国立医院里完成了神经学训练。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3899',
         word: 'newborn',
         ciyi: 'a. 新生的n. 婴儿',
         liju1: 'A newborn is ready to bond to its parents.',
         chinese1: '新生儿很容易对其父母产生亲情。',
         liju2: 'The electronic sensor has been adapted to fit on a newborn baby.',
         chinese2: '电子传感器已被改装以适应新生儿。'
       },
	   {
         id: '3900',
         word: 'newsletter',
         ciyi: 'n. 时事通讯，业务通讯',
         liju1: 'The organization now has around 18,000 members who receive a quarterly newsletter.',
         chinese1: '该组织目前约有18000名会员收到内部通讯季刊。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3901',
         word: 'newsroom',
         ciyi: 'n. 新闻编辑部；报刊阅览室',
         liju1: 'But in other parts of the world, newsroom searches occur frequently.',
         chinese1: '但是，在世界其他地方，搜查新闻编辑室的情况频繁发生。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3902',
         word: 'nicety',
         ciyi: 'n. 精确，准确；细节',
         liju1: 'Television sets require nicety of adjustment.',
         chinese1: '电视机需要细微的调整。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3903',
         word: 'noteworthy',
         ciyi: 'a. 值得注意的；显著的',
         liju1: 'I found nothing particularly noteworthy to report.',
         chinese1: '我没什么特别值得关注的事情可报告。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3904',
         word: 'oasis',
         ciyi: 'n.([pl.]oases) 绿洲；舒适的地方；令人宽慰的事物',
         liju1: 'Running will become your oasis of peace, a time you look forward to each day.',
         chinese1: '跑步将会成为你宁静的绿洲，成为你每天都会期待的一段时光。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3905',
         word: 'obsess',
         ciyi: 'vt. 迷住，使…着迷；使…困扰',
         liju1: 'They were obsessed by her song.',
         chinese1: '他们都被她的歌声迷住了。',
         liju2: 'A string of scandals is obsessing America.',
         chinese2: '一系列丑闻在困扰着美国。'
       },
	   {
         id: '3906',
         word: 'offshore',
         ciyi: 'a. 离岸的；近海的ad. 向海面',
         liju1: 'One day a larger ship anchored offshore.',
         chinese1: '一天，一艘更大的船在近海抛锚。',
         liju2: 'A lot of oil comes from offshore drilling sites.',
         chinese2: '近海的钻井台开采出了很多石油。'
       },
	   {
         id: '3907',
         word: 'off-the-cuff',
         ciyi: 'a. 即席的，临时的，即兴的',
         liju1: 'Include a few casual and apparently off-the-cuff remarks which you can deliver in a relaxed and unforced manner.',
         chinese1: '你可以用轻松的、不做作的方式说一些很随便的、看上去是即兴的话。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3908',
         word: 'olive',
         ciyi: 'n. 橄榄枝；橄榄树；橄榄色a. 橄榄的；橄榄色的',
         liju1: 'She wore an olive-green T-shirt.',
         chinese1: '她穿了一件橄榄绿的T恤衫。',
         liju2: 'I thought we were finished, but finally we managed to emergency-land in an olive grove.',
         chinese2: '我想我们完了，但我们终于设法紧急降落在一片橄榄林中。'
       },
	   {
         id: '3909',
         word: 'oncologist',
         ciyi: 'n. 肿瘤学家',
         liju1: 'Now 23, he plans to become an oncologist and will attend medical school at the University of Pennsylvania in the fall.',
         chinese1: '他现年23岁，打算做一名肿瘤学家，秋季将在宾夕法尼亚大学上医学院。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3910',
         word: 'oncoming',
         ciyi: 'a. 即将到来的；接近的',
         liju1: 'Gathering clouds announced the oncoming storm.',
         chinese1: '集聚的云朵预示了即将来临的风暴。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3911',
         word: 'online',
         ciyi: 'a. 网上的，在线的ad. 在线地',
         liju1: 'You can chat to other people who are online.',
         chinese1: '你可以与其他在线的人聊天。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3912',
         word: 'optimism',
         ciyi: 'n. 乐观；乐观主义',
         liju1: "The Indian prime minister has expressed optimism about India's future relations with the U.S.",
         chinese1: '印度总理表达了对未来印美关系的乐观态度。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3913',
         word: 'outburst',
         ciyi: 'n. （火山、情感等的）爆发；破裂',
         liju1: 'And then people rose and cheered. There was an extraordinary outburst of applause from every corner of the auditorium.',
         chinese1: '接着，人们从座位上站起并欢呼起来，从观众席的每一个角落都爆发出热烈的掌声。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3914',
         word: 'outcry',
         ciyi: 'n. 强烈抗议；大声疾呼',
         liju1: 'The killing caused an international outcry.',
         chinese1: '该起谋杀引起了国际上强烈的抗议。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3915',
         word: 'outdated',
         ciyi: 'a. 过时的；不流行的',
         liju1: 'Outdated ideas should be rooted out.',
         chinese1: '陈旧的思想观念应当肃清。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3916',
         word: 'overrated',
         ciyi: 'a. 评价过高的',
         liju1: 'Life in the wild is vastly overrated.',
         chinese1: '野外生活被大大地高估了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3917',
         word: 'oversee',
         ciyi: 'vt. 监督，监视（某人或某物）；俯瞰，眺望',
         liju1: 'He oversaw someone take a newspaper away without paying.',
         chinese1: '他无意中看到有人拿了一份报纸而没有付钱。',
         liju2: 'Use a surveyor or architect to oversee and inspect the different stages of the work.',
         chinese2: '用一名监察员或建筑师去监督和检查工程的不同阶段。'
       },
	   {
         id: '3918',
         word: 'painstaking',
         ciyi: 'a. 艰苦的；勤勉的',
         liju1: 'In order to transform their environment, he drew up the project with painstaking accuracy.',
         chinese1: '为了改造环境， 他苦心孤诣地制订了这个计划。',
         liju2: 'Forensic experts carried out a painstaking search of the debris.',
         chinese2: '法医专家们对残骸进行了极其仔细的研究。'
       },
	   {
         id: '3919',
         word: 'paraphrase',
         ciyi: 'vt. 改述，解释，释义',
         liju1: 'Paraphrase this article in 250 words or less.',
         chinese1: '用不到 250 个字译出这篇文章。',
         liju2: 'Baxter paraphrased the contents of the press release.',
         chinese2: '巴克斯特解释了新闻发布的内容。'
       },
	   {
         id: '3920',
         word: 'passionate',
         ciyi: 'a. 热情的；强烈的，激昂的',
         liju1: 'He is very passionate about the project.',
         chinese1: '他对这个项目非常热诚。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3921',
         word: 'pathway',
         ciyi: 'n.道路；途径，方法',
         liju1: 'Diplomacy will smooth your pathway to success.',
         chinese1: '良好的交际会铺平你的成功之路。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3922',
         word: 'patriarchal',
         ciyi: 'a. 家长的；族长的；由族长统治的',
         liju1: 'He is notorious for its patriarchal behavior.',
         chinese1: '他搞家长制作风是很典型的。',
         liju2: 'To feminists she is a classic victim of the patriarchal society.',
         chinese2: '在女权主义者眼中，她是父权社会的典型受害者。'
       },
	   {
         id: '3923',
         word: 'peddle',
         ciyi: 'vt. 叫卖；兜售；宣传，散播',
         liju1: 'They even set up their own news agency to peddle anti-isolationist propaganda.',
         chinese1: '他们甚至建立了自己的新闻机构以散布反孤立主义思想。',
         liju2: 'Finally he found his game with whom he stood in to peddle his smuggled watches.',
         chinese2: '最后他终于找到了兜售他走私表的对象。'
       },
	   {
         id: '3924',
         word: 'penguin',
         ciyi: 'n. 企鹅',
         liju1: 'Scientists say the find shows that key features of the plumage were present quite early on in penguin evolution.',
         chinese1: '科学家表示这项发现表明羽毛的特征在企鹅进化的早期就已经存在。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3925',
         word: 'penicillin',
         ciyi: 'n. 盘尼西林（青霉素）',
         liju1: 'Penicillin cured him of pneumonia.',
         chinese1: '青霉素治好了他的肺炎。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3926',
         word: 'periodic',
         ciyi: 'a. 周期的；定期的',
         liju1: 'Periodic checks are taken to ensure that high standards are maintained.',
         chinese1: '进行周期性检查以确保高标准得以维持。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3927',
         word: 'pervasive',
         ciyi: 'a. 普遍的；弥漫的，广泛存在的',
         liju1: 'Gaps in health outcomes have multiple causes, but poverty is the most pervasive factor.',
         chinese1: '健康结果方面的差距有众多原因，但贫穷是最普遍的因素。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3928',
         word: 'plagiarize',
         ciyi: 'vi. 剽窃；抄袭vt. 剽窃；抄袭',
         liju1: 'The students denied plagiarizing papers.',
         chinese1: '学生们不承认抄袭试卷。',
         liju2: 'On no account are students allowed to plagiarize in essay writing.',
         chinese2: '无论如何学生都不能在论文书写中抄袭。'
       },
	   {
         id: '3929',
         word: 'plank',
         ciyi: 'n. 厚木板；政治要点，政纲条款vt. 立刻付款',
         liju1: 'The plank over the brook sagged while we were walking on it.',
         chinese1: '当我们走在横跨小溪的木板上时，它变弯了。',
         liju2: 'Plank down your one hundred dollars.',
         chinese2: '立即支付一百美元。'
       },
	   {
         id: '3930',
         word: 'popularity',
         ciyi: 'n. 普及，流行；声望',
         liju1: 'The story had an extensive popularity among American readers.',
         chinese1: '这本小说在美国读者中赢得广泛的声望。',
         liju2: 'The new product jumped into popularity.',
         chinese2: '新产品一下子普及开来。'
       },
	   {
         id: '3931',
         word: 'populist',
         ciyi: 'n. 平民主义者，平民党党员',
         liju1: 'Some populists died in this conflict.',
         chinese1: '一些平民在这次冲突中牺牲了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3932',
         word: 'prelude',
         ciyi: 'n. 前奏；序幕；前奏曲',
         liju1: 'For him, reading was a necessary prelude to sleep.',
         chinese1: '对他来说，阅读是入睡的必要前奏。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3933',
         word: 'preservative',
         ciyi: 'n. 防腐剂；保护剂 a. 防腐的；有保存力的，储藏的',
         liju1: 'Nitrates are used as preservatives in food processing.',
         chinese1: '硝酸盐在食品加工中被用作防腐剂。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3934',
         word: 'procure',
         ciyi: 'vt. 获得，取得；导致',
         liju1: 'Can you procure some tickets for me?',
         chinese1: '你能替我弄到一些票吗?',
         liju2: 'His pride procured his downfall.',
         chinese2: '他的骄傲使他垮台了。'
       },
	   {
         id: '3935',
         word: 'profess',
         ciyi: 'vt. 自称；公开表明',
         liju1: 'She professed to hate her nickname.',
         chinese1: '她声称讨厌她的绰号。',
         liju2: 'I profess that I was surprised at the news.',
         chinese2: '我承认这个消息使我感到惊奇。'
       },
	   {
         id: '3936',
         word: 'profuse',
         ciyi: 'a. 很多的；慷慨的；浪费的',
         liju1: 'Then the policeman recognized me, breaking into profuse apologies.',
         chinese1: '然后警察认出了我，开始一再道歉。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3937',
         word: 'proliferate',
         ciyi: 'vi. （迅速）繁殖，繁衍；扩散；激增vt. 使激增',
         liju1: 'Computerized databases are proliferating fast.',
         chinese1: '计算机化的数据库在迅速激增。',
         liju2: 'Tropical vegetation proliferates.',
         chinese2: '热带植物繁衍茂盛。'
       },
	   {
         id: '3938',
         word: 'pronounced',
         ciyi: 'a. 显著的 v. 发音；宣告；断言',
         liju1: 'Most of the art exhibitions have a pronounced Appalachian theme.',
         chinese1: '大部分艺术展品都有一种明显的阿巴拉契亚主题。',
         liju2: 'The doctors pronounced that he was no longer in danger.',
         chinese2: '医生宣称他已脱离危险。'
       },
	   {
         id: '3939',
         word: 'proponent',
         ciyi: 'n. 支持者；建议者',
         liju1: 'Halsey was identified as a leading proponent of the values of progressive education.',
         chinese1: '哈尔西被认为是进步教育价值观的首要支持者。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3940',
         word: 'Protestant',
         ciyi: 'a. 新教的；新教徒的 n. 新教；新教徒',
         liju1: 'Most Protestant churches now have some women ministers.',
         chinese1: '如今，大部分新教教堂都有一些女牧师。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3941',
         word: 'psychedelic',
         ciyi: 'a. 引起幻觉的n. 迷幻剂，幻觉剂',
         liju1: 'If the times call for psychedelic imagery, you paint the Rolls crazy colors.',
         chinese1: '如果时代需要迷幻的意象，那就把你的劳斯莱斯漆上狂野的色彩。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3942',
         word: 'quadruple',
         ciyi: 'a. 四倍的；四重的vt. 使…成四倍',
         liju1: 'China seeks to quadruple its income in twenty years.',
         chinese1: '中国力求在20年内将其收入翻两番。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3943',
         word: 'query',
         ciyi: 'n. 疑问，问题 vt. 询问；向…提问',
         liju1: 'If you have any queries about this insurance, please contact our call centre.',
         chinese1: '如果你对此项保险有任何疑问，请联系我们的呼叫中心。',
         liju2: "It's got a number you can call to query your bill.",
         chinese2: '你可以拨打一个号码，对账单提出质疑。'
       },
	   {
         id: '3944',
         word: 'quirk',
         ciyi: 'n. 怪癖；偶然发生的事，巧合',
         liju1: 'Brown was always fascinated by the quirks and foibles of people in everyday situations.',
         chinese1: '布朗总是着迷于日常环境中人们的古怪性格和怪癖。',
         liju2: 'Years later, by a quirk of fate, Ben found himself sitting next to his ex-wife on a plane.',
         chinese2: '几年后，十分巧合，本发现他与前妻在同一架飞机上坐邻座。'
       },
	   {
         id: '3945',
         word: 'ranch',
         ciyi: 'n. 大农场；大牧场',
         liju1: "If the weather's fine, we'll barbecue in the ranch.",
         chinese1: '如果天气好的话，我们将在农场举行烤肉野餐。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3946',
         word: 'rating',
         ciyi: 'n. 等级；等级评定 [pl.]收视率，收听率，信用程度',
         liju1: "CBS's ratings again showed huge improvement over the previous year.",
         chinese1: '哥伦比亚广播公司的收视率比过去的一年又有了大幅提高。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3947',
         word: 'rattlesnake',
         ciyi: 'n.响尾蛇',
         liju1: 'Rattlesnake migration on the Great Plains of western Canada is a peculiar but illuminating case.',
         chinese1: '加拿大西部大平原的响尾蛇迁徙是奇特而具有启发性的个例。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3948',
         word: 'raze',
         ciyi: 'vt. 夷为平地；彻底破坏或摧毁（建筑物或城镇等）',
         liju1: 'Dozens of villages have been razed.',
         chinese1: '几十座村庄已被夷为平地。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3949',
         word: 'ready-made',
         ciyi: 'a. 现成的；做好的',
         liju1: 'Do you have any ready-made clothes that will fit me?',
         chinese1: '你们有适合我穿的现成的衣服吗?',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3950',
         word: 'red-hot',
         ciyi: 'a. 炽热的；激烈的；狂热的',
         liju1: 'Some traders are already stacking the red-hot book on their shelves.',
         chinese1: '一些书商已经在往他们的架上放这本热门畅销书了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3951',
         word: 'refrigerated',
         ciyi: 'a. 冷冻的，冷却的',
         liju1: 'Food must be refrigerated in summer.',
         chinese1: '食物在夏天必须加以冷藏。',
         liju2: 'Refrigerated eggs should not be left out more than 2 hours.',
         chinese2: '冷藏的鸡蛋在室温条件下不能超过2个小时。'
       },
	   {
         id: '3952',
         word: 'regain',
         ciyi: 'vt. 恢复；重新夺得；收回',
         liju1: 'Troops have regained control of the city.',
         chinese1: '军队已重新获得对那座城市的控制。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3953',
         word: 'renounce',
         ciyi: 'vt. 宣布放弃，抛弃；宣布终止',
         liju1: 'After a period of imprisonment she renounced terrorism.',
         chinese1: '被监禁了一段时间后她宣布放弃恐怖主义。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3954',
         word: 'residue',
         ciyi: 'n. 残渣；剩余物；剩余遗产',
         liju1: 'Always using the same shampoo means that residue can build up on the hair.',
         chinese1: '总是用同一种洗发水意味着残留物会在头发上越积越多。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3955',
         word: 'revere',
         ciyi: 'vt. 敬畏；尊敬；崇敬',
         liju1: 'The old were revered in our society.',
         chinese1: '在我们的社会里老年人受到尊敬。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3956',
         word: 'rhythmical',
         ciyi: 'a.( =rhythmic)有节奏的；有韵律的',
         liju1: 'Good breathing is slow, rhythmic and deep.',
         chinese1: '良好的呼吸缓慢、有节奏并且深沉。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3957',
         word: 'roadhog /road hog',
         ciyi: 'n.自私的司机；鲁莽的驾驶员(因其开车行驶在道路中央)',
         liju1: 'The man in front of us is really a road hog.',
         chinese1: '在我们的前面那个人真是个蛮横的司机。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3958',
         word: 'roam',
         ciyi: 'vt. 在…漫步，漫游，徜徉 n. 漫步，徘徊',
         liju1: 'I spent a couple of years roaming around the countryside.',
         chinese1: '我花了几年时间在乡村漫游。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3959',
         word: 'sanitary',
         ciyi: 'a.清洁的，保健的n. （有卫生设备的）公共厕所',
         liju1: 'We subcontracted for sanitary-plumbing equipment in the project.',
         chinese1: '在该项工程中我们分包了卫生设备的承建。',
         liju2: "It's not the most sanitary place one could swim.",
         chinese2: '这不是最干净的游泳之地。'
       },
	   {
         id: '3960',
         word: 'sardine',
         ciyi: 'n. 沙丁鱼；庸碌无能的人vt. 使拥挤不堪',
         liju1: 'They opened a can of sardines.',
         chinese1: '他们打开了一罐沙丁鱼。',
         liju2: 'We were packed like sardines into a coach without a breath of air.',
         chinese2: '我们像沙丁鱼一样被塞进密不通风的客车里。'
       },
	   {
         id: '3961',
         word: 'scapegoat',
         ciyi: 'n. 替罪羊，替身vt. 使成为…的替罪羊',
         liju1: "I don't think I deserve to be made the scapegoat for a couple of bad results.",
         chinese1: '我认为我不该为出现的一些不良后果充当替罪羊。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3962',
         word: 'schism',
         ciyi: 'n. 分裂，分派，分歧',
         liju1: 'The church seems to be on the brink of schism.',
         chinese1: '该教会看来处于分裂的边缘。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3963',
         word: 'sediment',
         ciyi: 'n. 沉积物；沉淀物',
         liju1: 'Many organisms that die in the sea are soon buried by sediment.',
         chinese1: '许多在海里死亡的生物很快便被沉淀物掩埋。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3964',
         word: 'selective',
         ciyi: 'a. 选择性的，讲究的，精挑细选的',
         liju1: 'Sales still happen, but buyers are more selective.',
         chinese1: '销售仍在进行,但买家更挑剔了。',
         liju2: 'We seem to have a selective memory for the best bits of the past.',
         chinese2: '我们似乎对过去最美好的时光有选择性的记忆。'
       },
	   {
         id: '3965',
         word: 'separation',
         ciyi: 'n. 分离，分开，分居',
         liju1: 'A fortunate encounter brought the two friends together after a long separation.',
         chinese1: '两位老朋友长期分离这次才有幸相遇。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3966',
         word: 'sexually',
         ciyi: 'ad. 性别地；两性之间地',
         liju1: 'Also talk with your doctor about other ways to protect yourself from sexually transmitted infections.',
         chinese1: '还要跟你的医生谈谈其它保护你免遭性传播传染病的方法。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3967',
         word: 'shimmer',
         ciyi: 'vi. 闪烁；发闪烁的微光vt. 使闪烁',
         liju1: 'The lights shimmered on the water.',
         chinese1: '那些灯在水面上闪着微光。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3968',
         word: 'shortlist',
         ciyi: 'n. 供最后挑选用的候选人名单',
         liju1: 'He was shortlisted for the Nobel Prize for literature several times.',
         chinese1: '他曾数次获得诺贝尔文学奖提名。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3969',
         word: 'shovel',
         ciyi: 'n. 铁铲；铲车vt. 铲除',
         liju1: 'The child packed the sand down with his shovel.',
         chinese1: '小孩用铲子将泥沙压紧。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3970',
         word: 'shrivel',
         ciyi: 'vi. 枯萎；皱缩vt. 使枯萎；使束手无策',
         liju1: 'The leaves started to shrivel up.',
         chinese1: '那些树叶开始枯萎了。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3971',
         word: 'shudder',
         ciyi: 'n. 发抖；战栗； vi. 发抖；战栗',
         liju1: 'As we stood there staring at each other, a shudder passed through me.',
         chinese1: '我们站在那里对望着彼此，突如其来地，我感到一阵战栗。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3972',
         word: 'shuffle',
         ciyi: 'v. 洗牌；拖曳，搅乱n. 洗牌，蒙混；拖着脚走',
         liju1: 'She noticed her own proud walk had become a shuffle.',
         chinese1: '她注意到了自己得意的步伐已变成了拖着脚走。',
         liju2: 'You have to shuffle the cards before the cut for deal.',
         chinese2: '你得先洗牌，然后再倒牌和发牌。'
       },
	   {
         id: '3973',
         word: 'sidewalk',
         ciyi: 'n. 人行道',
         liju1: 'The blind man tapped his cane on the sidewalk.',
         chinese1: '盲人用手杖敲击人行道。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3974',
         word: 'silt',
         ciyi: 'n. 淤泥，泥沙',
         liju1: 'The channel is almost choked with silt.',
         chinese1: '水渠里淤了很多泥沙。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3975',
         word: 'similarly',
         ciyi: 'ad. 同样地；类似于',
         liju1: 'Most of the men who now gathered around him again were similarly dressed.',
         chinese1: '现在重新聚在他周围的大多数人穿着差不多的衣服。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3976',
         word: 'site',
         ciyi: 'n. 位置；场所vt. 设置；为…选址',
         liju1: 'He sped his car off the accidental site.',
         chinese1: '他加快车速驶离了出事地点。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3977',
         word: 'slash',
         ciyi: 'vt. 猛砍；大幅度裁减或削减n. 削减；斜线号',
         liju1: 'He slashed at her, aiming carefully.',
         chinese1: '他瞄得准准的，朝她挥砍过去。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3978',
         word: 'sledge',
         ciyi: 'vt. 用雪橇搬运；乘雪橇n. 雪橇',
         liju1: 'I saw her pulling three children through the snow on a sledge.',
         chinese1: '我看到她用雪橇拉着3个孩子穿过雪地。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3979',
         word: 'slowdown',
         ciyi: 'n. 减速；降低速度',
         liju1: 'There has been a sharp slowdown in economic growth.',
         chinese1: '在经济增长方面一直存在急剧的减速。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3980',
         word: 'small-minded',
         ciyi: 'a. 心胸狭窄的；固执己见的',
         liju1: 'Nobody liked to make friends with a small-minded man.',
         chinese1: '没有人喜欢与一个心胸狭窄的人交朋友。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3981',
         word: 'smallpox',
         ciyi: 'n. [内科] 天花',
         liju1: 'Your son ought to be inoculated against smallpox.',
         chinese1: '你儿子应当注射预防天花的预防针。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '3982',
         word: 'smoothly',
         ciyi: 'ad. 平稳地，平滑地；顺利地',
         liju1: 'The train glides smoothly into the station.',
         chinese1: '列车平稳而缓慢地驶进车站。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3983',
         word: 'smother',
         ciyi: 'vt. 使窒息；抑制；（用灰等）闷熄',
         liju1: 'She loved her own children, almost smothering them with love.',
         chinese1: '她爱自己的孩子，几乎爱得让他们透不过气。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3984',
         word: 'smudge',
         ciyi: 'vt. 弄脏n. 污点，污迹',
         liju1: 'There was a dark smudge on his forehead.',
         chinese1: '他前额上有一个黑色污点。',
         liju2: 'The coffee smudged on the cups.',
         chinese2: '喝过咖啡的杯子上留下了咖啡渍。'
       },
	    {
         id: '3985',
         word: 'sneer',
         ciyi: 'vi. 嘲笑，冷笑vt. 嘲笑，冷笑n. 嘲笑，冷笑',
         liju1: 'I was uncomfortable with his sneer.',
         chinese1: '他的冷笑使我很不舒服。',
         liju2: 'It’s easy to see a smudge on your neighbor’s face and be oblivious to the ugly sneer on your own.',
         chinese2: '你很容易看到邻居的错误，却忘记了别人如何嘲笑你的。'
       },
	    {
         id: '3986',
         word: 'soothe',
         ciyi: 'vt. 安慰；使平静；缓和（痛苦等）',
         liju1: 'He would take her in his arms and soothe her.',
         chinese1: '他就会把她搂在怀里，使她镇定下来。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3987',
         word: 'sparing',
         ciyi: 'a. 节约的；贫乏的；保守的',
         liju1: "I'm never sparing with the garlic.",
         chinese1: '我从不吝啬使用大蒜。',
         liju2: 'Would you please spare me a cup of wine?',
         chinese2: '请给我一杯酒，行吗?'
       },
	    {
         id: '3988',
         word: 'sparse',
         ciyi: 'a. 稀疏的；稀少的',
         liju1: 'Many slopes are rock fields with sparse vegetation.',
         chinese1: '许多山坡都是植被稀疏的岩石地。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3989',
         word: 'spatial',
         ciyi: 'a. 空间的；存在于空间的',
         liju1: 'That new function operates on all the spatial data types.',
         chinese1: '这个新函数可以操作所有空间数据类型。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3990',
         word: 'spotlight',
         ciyi: 'n. 聚光灯；公众注意的中心',
         liju1: 'The budget crisis also spotlighted a weakening economy.',
         chinese1: '预算危机也使日益衰弱的经济备受关注。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3991',
         word: 'sprawl',
         ciyi: 'vi. 蔓延；伸开手足躺vt. 懒散地伸开；使蔓生',
         liju1: 'She sprawled on the bed as he had left her, not even moving to cover herself up.',
         chinese1: '他离开她后，她摊开四肢躺在床上，甚至懒得动动把自己盖上。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '',
         word: 'squat',
         ciyi: 'vi.蹲下；蹲坐 vt. 使蹲坐 n. 蹲坐',
         liju1: 'We squatted beside the pool and watched the diver sink slowly down.',
         chinese1: '我们蹲在池边，看潜水员慢慢沉下水。',
         liju2: 'Eddie was a short squat fellow in his forties with thinning hair.',
         chinese2: '埃迪是个矮胖的人，四十来岁，头发稀疏。'
       },
	    {
         id: '3992',
         word: 'stamina',
         ciyi: 'n. 毅力；精力；持久力',
         liju1: "It's remarkable that a 70-year-old man has the stamina he had.",
         chinese1: '一个70岁的人还有他那样的精力， 真是不同寻常。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3993',
         word: 'standstill',
         ciyi: 'n. 停顿；停止',
         liju1: 'Abruptly the group ahead of us came to a standstill.',
         chinese1: '忽然我们前面的队伍停了下来。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3994',
         word: 'starch',
         ciyi: 'n. 淀粉',
         liju1: 'She reorganized her eating so that she was taking more fruit and vegetables and less starch, salt, and fat.',
         chinese1: '她重新调整了自己的饮食，在多吃水果蔬菜，少食用淀粉、盐和脂肪。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3995',
         word: 'stature',
         ciyi: 'n. 身高，（精神、道德等的）高度',
         liju1: 'Mother was of very small stature, barely five feet tall.',
         chinese1: '母亲身材娇小，仅有5英尺高。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3996',
         word: 'stead',
         ciyi: 'n. 代替；用处vt. 对…有利',
         liju1: 'These two games here will stand them in good stead for the future.',
         chinese1: '这里的两场比赛对他们的将来很有用。',
         liju2: 'They want me to learn some practical skills in stead of British literature.',
         chinese2: '他们希望我去读一个能学到专业技能的学位，而我想去攻读英国文学。'
       },
	    {
         id: '3997',
         word: 'sterile',
         ciyi: 'a. 不育的；无菌的；贫瘠的',
         liju1: 'He always made sure that any cuts were protected by sterile dressings.',
         chinese1: '他总是确保所有伤口都用无菌的敷料包好。',
         liju2: 'No crops could grow in the sterile soil.',
         chinese2: '这片贫瘠的土地上长不出农作物。'
       },
	    {
         id: '3998',
         word: 'stifle',
         ciyi: 'vt. 扼杀；使窒息；抑制',
         liju1: 'Regulations on children stifled creativity.',
         chinese1: '对孩子们制定的各种规定扼杀了创造力。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '3999',
         word: 'stimulus',
         ciyi: 'n. （[pl.]stimuli）激励；刺激物，促进因素',
         liju1: 'Regard each failure as a stimulus to further efforts.',
         chinese1: '把每次失利看成对进一步努力的激励。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4000',
         word: 'stockpile',
         ciyi: 'n. 库存；积蓄，资源',
         liju1: 'People are stockpiling food for the coming winter.',
         chinese1: '人们正在为即将到来的冬天大量储备食物。',
         liju2: 'Chile has given up its entire stockpile.',
         chinese2: '智利已放弃其全部库存。'
       },
	    {
         id: '4001',
         word: 'stomp',
         ciyi: 'vt. 跺脚，重踏；践踏',
         liju1: 'He angrily stomped his cricket after failing the fight.',
         chinese1: '比赛失败后，他生气地踏死了他的蟋蟀。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4002',
         word: 'stout',
         ciyi: 'a. 健壮的，结实的',
         liju1: 'She is slender, whereas he is stout.',
         chinese1: '她很瘦弱，而他却又粗又壮。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4003',
         word: 'stow',
         ciyi: 'vt. 装垛，装载；收藏',
         liju1: 'Luke stowed his camera bags into the boot.',
         chinese1: '卢克把他的相机袋收到旅行箱里。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4004',
         word: 'strait',
         ciyi: 'n. 海峡 [常pl.]困境；危难',
         liju1: 'We will transit across the strait at night.',
         chinese1: '我们将在夜间通过那个海峡。',
         liju2: "The company's closure has left many small businessmen in desperate financial straits.",
         chinese2: '该公司的关闭使得许多小商人陷入经济困境。'
       },
	    {
         id: '4005',
         word: 'strand',
         ciyi: 'n. 线；串 vt. 使搁浅；使陷于困境',
         liju1: "One strand of silk doesn't make a thread; one tree doesn't make a forest.",
         chinese1: '单丝不成线， 独木不成林。',
         liju2: 'The receding tide stranded the whale.',
         chinese2: '退潮把鲸鱼搁浅在海滩上。',
		 liju3:'He was stranded in the middle of nowhere.',
		 chinese3:'他身在茫茫荒野中，一筹莫展。'
       },
	    {
         id: '4006',
         word: 'stratum',
         ciyi: 'n. （组织的）层；地层；社会阶层',
         liju1: 'It was an enormous task that affected every stratum of society.',
         chinese1: '这是一项影响到社会各阶层的重大任务。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4007',
         word: 'subdue',
         ciyi: 'vt. 征服；抑制；减轻',
         liju1: 'Senior government officials admit they have not been able to subdue the rebels.',
         chinese1: '高级政府官员们承认他们还没能制服反叛者们。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4008',
         word: 'surmise',
         ciyi: 'vt. 猜测；推测',
         liju1: "There's so little to go on, we can only surmise what happened.",
         chinese1: '几乎没有什么可继续进行的，我们只能猜测发生过的事。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4009',
         word: 'surveillance',
         ciyi: 'n. 监督；监视',
         liju1: 'The police kept the criminal under strict surveillance.',
         chinese1: '警察严密监视那个罪犯。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4010',
         word: 'suspense',
         ciyi: 'n. 悬念；悬疑；焦虑；悬而不决',
         liju1: "For as much horror, action and suspense, there's also plenty of wit, romance and humanity.",
         chinese1: '尽管有太多的恐怖、动作以及悬疑，剧中仍有不少的智慧、浪漫和人性。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4011',
         word: 'suspension',
         ciyi: 'n. 悬念，挂念，暂停；停职',
         liju1: 'The minister warned that any civil servant not at his desk faced immediate suspension.',
         chinese1: '那位部长警告说任何擅自离岗的公务员面临着立即停职。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4012',
         word: 'sustenance',
         ciyi: 'n. 食物；生计；营养',
         liju1: 'The state provided a basic quantity of food for daily sustenance, but little else.',
         chinese1: '国家提供基本的日常食物供应，仅此而已。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4013',
         word: 'swollen',
         ciyi: 'a. 肿胀的，浮肿的',
         liju1: "Her finger had swollen so much that she couldn't get her ring off.",
         chinese1: '她的手指肿得很厉害，连戒指都取不下来了。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4014',
         word: 'symbolize',
         ciyi: 'vt. 象征',
         liju1: 'The fall of the Berlin Wall symbolized the end of the Cold War between East and West.',
         chinese1: '柏林墙的倒塌象征着东西方冷战的结束。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4015',
         word: 'syndicate',
         ciyi: 'n. 辛迪加；企业联合； vt. 把…联合成辛迪加',
         liju1: 'Several firms of mechanical engineering have been syndicated.',
         chinese1: '几家机械工程公司已组成了机械工程辛迪加。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4016',
         word: 'tack',
         ciyi: 'n. 大头钉；行动方针 vt. 附加；以大头针钉住',
         liju1: 'He tacked the timetable to the door.',
         chinese1: '他把时间表钉在门上。',
         liju2: 'They decided to tack an amendment to the bill.',
         chinese2: '他们决定在议案中附加一个修正案。'
       },
	    {
         id: '4017',
         word: 'tangible',
         ciyi: 'a. 有形的；确实的，可触摸的，具体的',
         liju1: 'There should be some tangible evidence that the economy is starting to recover.',
         chinese1: '应该有一些足够清晰的证据表明经济正开始复苏。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4018',
         word: 'tardy',
         ciyi: 'a. 缓慢的，迟缓的；迟到的',
         liju1: 'I was as tardy as ever for the afternoon appointments.',
         chinese1: '和以往一样，下午的那些约见我又晚了。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4019',
         word: 'teens',
         ciyi: 'n. 十多岁，十几岁（13-19岁）；青少年',
         liju1: 'Most people who smoke began smoking in their teens.',
         chinese1: '大多数吸烟的人都是在十几岁时开始吸的。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4020',
         word: 'temperate',
         ciyi: 'a. （气候）温和的，温带的；有节制的',
         liju1: 'The Nile Valley keeps a temperate climate throughout the year.',
         chinese1: '尼罗河流域全年气候温和。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4021',
         word: 'template',
         ciyi: 'n. 模板，样板，模式',
         liju1: 'Trace around your template and transfer the design onto a sheet of card.',
         chinese1: '沿着模板描摹，把设计图案描到一张薄纸板上。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4022',
         word: 'terrestrial',
         ciyi: 'a. 地球的；陆地的n. 陆地生物；地球上的人',
         liju1: 'Forests are home to over 80% of terrestrial biodiversity.',
         chinese1: '森林是80%以上陆地生物多样性的家园。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4023',
         word: 'tinge',
         ciyi: 'n. （较淡的）色调，气息 vt. 微染；使带气息',
         liju1: "The moon's rays tinged the mountains silver.",
         chinese1: '月光把山脉染成了银白色。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4024',
         word: 'tonic',
         ciyi: 'n. 补药，滋补品； a. 滋补的',
         liju1: "Sea air is Nature's best tonic for mind and body.",
         chinese1: '海上的空气是大自然赋予的对人们身心的最佳补品。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4025',
         word: 'tornado',
         ciyi: 'n.龙卷风；暴风',
         liju1: 'The tornado disrupted broadcasting along the entire coast.',
         chinese1: '龙卷风使整个沿海的广播都中断了。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4026',
         word: 'tort',
         ciyi: 'n. 民事侵权行为',
         liju1: 'In tort law the duty is imposed by the law.',
         chinese1: '在侵权法中，责任是由法律规定的。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4027',
         word: 'tortuous',
         ciyi: 'a. 扭曲的，转弯抹角的，含糊不清的',
         liju1: 'The future is bright, but the path ahead will be tortuous.',
         chinese1: '前途是光明的，但今后的道路将是曲折的。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4028',
         word: 'tournament',
         ciyi: 'n. 锦标赛，比赛',
         liju1: 'They dropped two games in a row and were eliminated from the tournament.',
         chinese1: '他们在划船比赛中输了两场比赛，并被淘汰出局。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4029',
         word: 'transfusion',
         ciyi: 'n. 输血，输液，灌输',
         liju1: 'Transfusion services face the challenge of providing blood that is safe and adequate to meet the rising demand.',
         chinese1: '输血服务机构面临的挑战是，提供安全和足够的血液以满足不断增长的需求。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4030',
         word: 'translucent',
         ciyi: 'a. 透明的；半透明的',
         liju1: 'The building is roofed entirely with translucent corrugated plastic.',
         chinese1: '这座建筑全部都是用半透明的波纹状塑料封顶。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4031',
         word: 'traverse',
         ciyi: 'n. 穿过；横贯；vt. 穿过，横跨',
         liju1: 'Several railroads traverse the district.',
         chinese1: '有几条铁路线横贯这个地区。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4032',
         word: 'trickle',
         ciyi: 'vt. 使…细细地流n. 细流',
         liju1: 'The stream has thinned down to a mere trickle.',
         chinese1: '这条小河变成细流了。',
         liju2: "A tear trickled down the old man's cheek.",
         chinese2: '一滴泪水顺着老人的面颊流了下来。'
       },
	    {
         id: '4033',
         word: 'trigonometry',
         ciyi: 'n. 三角法',
         liju1: 'He received a low mark for trigonometry.',
         chinese1: '他的三角学分数很低。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4034',
         word: 'trillion',
         ciyi: 'n. 万亿a. 万亿的num. 万亿',
         liju1: 'We have spent over a trillion dollars at war, often financed by borrowing from overseas.',
         chinese1: '在战争中，我们花费了逾万亿美元，这些资金往往来自海外借贷。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4035',
         word: 'trot',
         ciyi: 'n. （人）慢跑；小跑vt. 使小跑；使快步走',
         liju1: 'As they started up again, the horse broke into a brisk trot.',
         chinese1: '当他们又出发时，那匹马便轻快地小跑起来。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4036',
         word: 'turtle',
         ciyi: 'n. 龟，海龟',
         liju1: 'Only male chiefs could eat turtle meat.',
         chinese1: '只有男性首领才可以吃海龟肉。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4037',
         word: 'ulcer',
         ciyi: 'n. 溃疡；腐烂物',
         liju1: 'The ulcer has perforated.',
         chinese1: '溃疡已经穿孔。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4038',
         word: 'undue',
         ciyi: 'a. 过度的，不适当的',
         liju1: 'This would help the families to survive the drought without undue suffering.',
         chinese1: '这将有助于这些家庭免受过多痛苦而度过这次旱灾。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4039',
         word: 'unearth',
         ciyi: 'vt. 发掘或挖出某物；揭露，发现',
         liju1: 'Fossil hunters have unearthed the bones of an elephant believed to be 500,000 years old.',
         chinese1: '化石寻找者们挖掘出了一头被认为有50万年之久的大象遗骨。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4040',
         word: 'unilateralism',
         ciyi: 'n. 片面，单边主义',
         liju1: 'We cannot go back to Cold War containment or to unilateralism.',
         chinese1: '我们不可能返回冷战遏制时期或单边主义时代。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4041',
         word: 'upbringing',
         ciyi: 'n. 教养；养育；抚育',
         liju1: 'Her unselfish act reflects well on her upbringing.',
         chinese1: '她的大公无私行为充分体现出她受过良好的教养。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4042',
         word: 'uranium',
         ciyi: 'n. 铀',
         liju1: 'The fuel was enriched with uranium 235 for the nuclear reactor.',
         chinese1: '核反应堆的燃料由于铀235的应用而丰富。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4043',
         word: 'vaccination',
         ciyi: 'n. 接种疫苗；种痘',
         liju1: 'The doctor gave vaccination by injection.',
         chinese1: '医生通过注射接种疫苗。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4044',
         word: 'vaunt',
         ciyi: 'vi. 自夸；吹嘘vt. 自夸；吹嘘',
         liju1: 'Amanda likes vaunting her achievements.',
         chinese1: '阿曼达喜欢吹嘘自己的成就。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4045',
         word: 'vendor',
         ciyi: 'n. 卖主；小贩',
         liju1: 'The vendor can turn his stock every day.',
         chinese1: '小贩每天都能把进的货卖完。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4046',
         word: 'viable',
         ciyi: 'a. 可行的，可实施的；能独立的，能独立发展的',
         liju1: 'To be successful in reaching your goals you must make sure you set realistic, viable goals.',
         chinese1: '为了成功达到目标，你必须确保你确定的目标是现实的，可行的。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4047',
         word: 'vibration',
         ciyi: 'n. 振动；颤动',
         liju1: 'Vibration often springs many parts of the bike.',
         chinese1: '震动常常引起自行车许多零件的松动。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4048',
         word: 'vigilance',
         ciyi: 'n. 警戒，警觉',
         liju1: 'Constant vigilance is necessary in order to avoid accidents.',
         chinese1: '为了避免意外事故， 必须经常保持警惕。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4049',
         word: 'volatile',
         ciyi: 'a. 挥发性的；不稳定的，反覆无常的',
         liju1: 'It is like the sense of chill that follows immersion of the hand in a volatile liquid.',
         chinese1: '这很像把手浸入挥发性液体后的那种凉飕飕的感觉。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4050',
         word: 'wade',
         ciyi: 'vt. 涉水，跋涉，费力行走',
         liju1: 'Her mother came to find them, wading across a river to reach them.',
         chinese1: '她的母亲蹚过河来找他们。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4051',
         word: 'wait-and-see',
         ciyi: 'a. 观望的',
         liju1: 'Other experts were taking a wait-and-see attitude.',
         chinese1: '其他专家抱着观望的态度。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4052',
         word: 'warranty',
         ciyi: 'n. 保证书，证书；担保；授权；根据',
         liju1: 'It has worked for me, but I do not give you any warranty, that it is error free.',
         chinese1: '在我这工作得很好，但是我不能给你任何担保，这是过失自由。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4053',
         word: 'waver',
         ciyi: 'vi. 摇曳；踌躇，动摇n. 动摇；踌躇',
         liju1: 'Nothing could make me waver in my faith.',
         chinese1: '任何事都动摇不了我的信仰。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4054',
         word: 'wharf',
         ciyi: 'vt. 使靠码头 n. 码头；停泊处',
         liju1: 'The boatmen boomed the boat off the wharf.',
         chinese1: '船夫用竿把船推离码头。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4055',
         word: 'whereby',
         ciyi: 'ad. 凭借；通借以 conj.借以，凭',
         liju1: 'The company operates an arrangement whereby employees may select any 8-hour period between 6 a.m. to 8 p.m. to go to work.',
         chinese1: '该公司做出了一种安排，据此员工可以在上午6点到晚上8点之间任意选择8个小时去上班。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4056',
         word: 'whirlwind',
         ciyi: 'n. 旋风，涡动；猛烈的势力',
         liju1: 'Let the whirlwind mourn its requiem.',
         chinese1: '任由旋风哀唱其挽歌。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4057',
         word: 'wholesale',
         ciyi: 'a. 批发的ad. 大规模地n. 批发vt. 批发',
         liju1: 'He does wholesale business, while his brother is engaged in retail business.',
         chinese1: '他经营批发生意， 他弟弟则经营零售生意。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4058',
         word: 'wield',
         ciyi: 'vt. 使用；行使；支配，掌权',
         liju1: 'He remains chairman, but wields little power at the company.',
         chinese1: '他还是主席，但在公司内没有什么权力。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4059',
         word: 'wither',
         ciyi: 'vt. 使凋谢；使畏缩 vi. 枯萎；凋谢',
         liju1: 'Failing some rain soon, the crops will wither.',
         chinese1: '如果不下雨，庄稼就会干枯。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4060',
         word: 'wrath',
         ciyi: 'n. 愤怒；激怒，大怒',
         liju1: 'He incurred the wrath of the authorities in speaking out against government injustices.',
         chinese1: '他因为公开反对政府的不公正而引起当局的愤怒。',
         liju2: '',
         chinese2: ''
       },
	    {
         id: '4061',
         word: 'yearn',
         ciyi: 'vi. 渴望，向往；怀念',
         liju1: 'He yearned for freedom.',
         chinese1: '他曾渴望自由。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '4062',
         word: 'yellowish',
         ciyi: 'a. 微黄色的，发黄的',
         liju1: 'The shelves are loaded with old musty books whose pages have become yellowish.',
         chinese1: '书架上堆着发霉的旧书，书页已经又黄又脆。',
         liju2: '',
         chinese2: ''
       },
	   {
         id: '4063',
         word: 'zest',
         ciyi: 'n. 滋味，风味；热情，热心 vt. 给…调味',
         liju1: 'We entered into the sport with zest.',
         chinese1: '我们热情地参加了这项运动.',
         liju2: '',
         chinese2: ''
       },
	   
    ]
  }
  return arr
}
