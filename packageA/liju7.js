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
        id: '2921',
        word:'select',
        ciyi:'vt. 挑选；选拔a. 精选的；极好的',
        liju1: 'Voters are selecting candidates for both U.S. Senate seats and for 52 congressional seats.',
        chinese1: '选民们正在选举美国参议院议席的候选人和52个众议院席位的候选人。',
        liju2: 'A select group of wine critics will be giving a taste.',
        chinese2: '一批精选细挑出来的评酒师将过来品酒。',
         liju3: '',
        chinese3: ''
      }
      
      ,
       {
         id: '2922',
         word: 'selection ',
         ciyi: 'n. 选择，挑选；选集；精选品',
         liju1: ' It offers the widest selection of antiques of every description in a one day market.',
         chinese1: '在为时一天的集市上，它提供了选择范围广泛的各式古董。',
         liju2: 'In his closet there is a small selection of pretty good clothes.',
         chinese2: '他的衣柜里有一小部分经过精调细选的非常精致的衣服。',
         liju3: '',
         chinese3: ''
       }
      ,
       {
         id: '2923',
         word: 'selfish ',
         ciyi: 'a. 自私的；利己主义的',
         liju1: "I think I've been very selfish. I've been mainly concerned with myself.",
         chinese1: '我觉得我一直很自私。我总是只关心自己。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 , 
	  {
         id: '2924',
         word: 'semester ',
         ciyi: 'n. 学期；半年',
         liju1: "I'll take American history this semester.",
         chinese1: '这学期我要选美国史。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2925',
         word: 'semiconductor',
         ciyi: 'n. 半导体 ',
         liju1: 'In semiconductor receivers transistors take the place of vacuum tubes. ',
         chinese1: '在半导体收音机中晶体管代替了真空管。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2926',
         word: 'seminar ',
         ciyi: 'n. 讨论会，研讨班',
         liju1: 'Students are asked to prepare material in advance of each weekly seminar.',
         chinese1: '要求学生为每星期一次的研讨班预先准备好材料。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2927',
         word: 'senate ',
         ciyi: 'n. 参议院，上院 ',
         liju1: ' The senate is expected to pass the bill shortly.',
         chinese1: '预计参议院将很快通过这项议案。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2928',
         word: 'senator',
         ciyi: 'n. 参议员；评议员',
         liju1: 'The senator declaimed against the opposition. ',
         chinese1: '这名参议员猛烈抨击反对派。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2929',
         word: 'senior',
         ciyi: 'a. 年长的；高级的；地位较高的n. 毕业班学生',
         liju1: 'The position had to be filled by an officer senior to Haig.',
         chinese1: '这个位置必须由一名职位比黑格高的军官来填补。',
         liju2: 'My brother is senior to me by two years.',
         chinese2: '家兄比我年长两岁。',
         liju3:'The number of high school seniors who go on to college.',
         chinese3:'高中毕业班上大学的学生人数。'
       }
	  ,
	   {
         id: '2930',
         word: 'sensation',
         ciyi: 'n. 感觉；知觉；轰动；激动 ',
         liju1: ' Floating can be a very pleasant sensation.',
         chinese1: '漂浮会给人一种非常愉快的感觉。',
         liju2: 'She was just 14 when she caused a sensation at the Montreal Olympics.',
         chinese2: '她在蒙特利尔奥运会上引起轰动时，年仅14岁。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2931',
         word: 'sensible',
         ciyi: 'a. 明智的；觉察到的',
         liju1: 'It might be sensible to get a lawyer.',
         chinese1: '找个律师可能会是明智的。',
         liju2: 'We found a sensible change in the attitude of the director after his promotion.',
         chinese2: '我们发现主任升职后态度上有了明显的变化。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2932',
         word: 'sensitive ',
         ciyi: 'a. 敏感的；灵敏的；感光的；易受伤害的',
         liju1: ' Employment is a very sensitive issue.',
         chinese1: '就业是一个非常敏感的问题。',
         liju2: 'This instrument is highly sensitive. ',
         chinese2: '这架仪器很灵敏。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2933',
         word: 'sentiment',
         ciyi: 'n. 感情，情绪；情操；观点',
         liju1: 'Public sentiment rapidly turned anti-American.',
         chinese1: '公众的情绪迅速转向反美。',
         liju2: 'I must agree with the sentiments expressed by John Prescott.',
         chinese2: '我必须同意约翰·普雷斯科特表达的观点。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2934',
         word: 'sequence',
         ciyi: 'n. 顺序，次序；连续，数列',
         liju1: 'All of the colour sequence yellow, orange, purple, blue, green and white.',
         chinese1: '这些都是由黄、橙、紫、蓝、绿和白的颜色顺序。',
         liju2: 'Because of his carelessness led to the sequence of events.',
         chinese2: '由于他的粗心导致了一连串事件。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2935',
         word: 'serial',
         ciyi: 'a. 连续的 n. 电视连续剧 ',
         liju1: 'Currency notes bear serial numbers. ',
         chinese1: '钞票上有连续的号码。',
         liju2: "CCTV is one of television's most popular serials.",
         chinese2: 'CCTV是最受欢迎的电视连续剧之一。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '2936',
         word: 'series',
         ciyi: 'n. 一系列，连续；丛书',
         liju1: 'The comic strip stories are a series of art works.',
         chinese1: '连环画由一系列美术作品构成。',
         liju2: 'More than 3,000 experts and scholars have completed the editing and publishing of five series of books.',
         chinese2: '三千多位专家和学者已经完成了五套系列的丛书的编辑和出版。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2937',
         word: 'session',
         ciyi: 'n. 会议；一届会议',
         liju1: 'The Arab League is meeting in emergency session today',
         chinese1: '阿拉伯国家联盟今天正在举行紧急会议。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2938',
         word: 'setback',
         ciyi: 'n. 挫折；退步；逆流；失败 ',
         liju1: 'It is an unexpected setback in her fortunes. ',
         chinese1: '这是她好运中的一次意外的挫折。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2939',
         word: 'setting',
         ciyi: 'n. 环境，背景；布置；落山；底座',
         liju1: 'The dismond was held in a gold setting.',
         chinese1: '钻石被安置在一个金制底座上。',
         liju2: 'The setting of the sun paints Bruce’s face with golden light.',
         chinese2: '落日照在布鲁斯的脸上，使他的脸泛着金色的光。',
         liju3:'The setting of his movies is New York City in the early 1960s.',
         chinese3:'这部电影以20世纪60年代早期的纽约市为背景。'
       }
, 
	  {
         id: '2940',
         word: 'settlement',
         ciyi: 'n. 解决，决定；住宅区 ',
         liju1: 'We hope for a lasting settlement of all these troubles. ',
         chinese1: '我们希望这些纠纷能获得永久的解决。',
         liju2: 'The village is a settlement of just fifty houses.',
         chinese2: '这个村子是个仅有50家住户的定居地。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2941',
         word: 'severe',
         ciyi: 'a. 严厉的；剧烈的；苛刻的；严峻的 ',
         liju1: 'The patient is suffering severe pain caused by cancer.',
         chinese1: '病人正在经受由癌症引起的剧烈疼痛。',
         liju2: 'The task is a severe test lof our loyalty to our country.',
         chinese2: '这次任务严峻地考验了我们对国家的忠诚。',
         liju3:'He was subjected to severe criticism.',
         chinese3:'他受到严厉的批评。'
       }
	  ,
	   {
         id: '2942',
         word: 'sew',
         ciyi: 'vi. 缝纫，缝',
         liju1: 'She sewed the dresses on the sewing machine.',
         chinese1: '她在缝纫机上缝制了这些衣服。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2943',
         word: 'shabby',
         ciyi: 'a. 破旧的；卑鄙的；吝啬的；衣衫褴褛的',
         liju1: 'She sewed the dresses on the sewing machine.',
         chinese1: '她在缝纫机上缝制了这些衣服。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2944',
         word: 'shabby',
         ciyi: 'a. 破旧的；卑鄙的；吝啬的；衣衫褴褛的',
         liju1: 'His clothes were old and shabby.',
         chinese1: '他的衣服又旧又破。',
         liju2: 'The shabby old man asked me for a dollar.',
         chinese2: '那个衣衫褴褛的老人向我乞讨一美元。',
         liju3:'Some candidates play a shabby trick in general election.',
         chinese3:'一些候选人在大选中玩弄卑鄙的手段。'
       }
	  ,
	   {
         id: '2945',
         word: 'shaft',
         ciyi: 'n. 拍杆；轴；杆状物 ',
         liju1: 'The lathe turns off a shaft in just one minute.',
         chinese1: '车床仅在一分钟内就可车出一根轴。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2946',
         word: 'shallow',
         ciyi: 'a. 浅薄的；浅的n. 浅滩 ',
         liju1: 'I think he is shallow, vain and untrustworthy.',
         chinese1: '我认为他浅薄、虚荣、不可信。',
         liju2: 'Put the milk in a shallow dish.',
         chinese2: '把牛奶倒进一个浅盘里。',
         liju3:'The ship wrecked in the shallows that lie near the island.',
         chinese3:'船在岛屿附近的浅水区失事了。'
       }
	  ,
	   {
         id: '2947',
         word: 'sham',
         ciyi: ' n. 假装；假冒vt. 假装；冒充；虚伪 ',
         liju1: 'Excuse me," I mutter. "I have to get this sham over with. ',
         chinese1: '“对不起，”我咕哝着说，“我得把假装的这一套做完了事。”',
         liju2: 'The criminal shammed to be a priest to escape from the policamen.',
         chinese2: '罪犯假扮成牧师以逃离警察的视野。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2948',
         word: 'shampoo',
         ciyi: ' n. 洗发，洗发；洗发精vt. 洗发',
         liju1: "I've rinsed the shampoo out of my hair.",
         chinese1: '我把头发上的洗发剂冲洗干净了。',
         liju2: 'Would you like to have a shave or to have a shampoo？',
         chinese2: '你想刮脸还是剃头？',
         liju3:'Shampoo your hair and dry it.',
         chinese3:'用洗发水洗洗你的头发，然后把头发弄干。'
       }
	  ,
	   {
         id: '2949',
         word: 'shark',
         ciyi: 'n. 鲨鱼 ',
         liju1: 'Panic swept through the swimmers as they saw the shark approaching. ',
         chinese1: '游泳的人看见鲨鱼靠近时一片惊慌。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2950',
         word: 'shatter',
         ciyi: 'vt. 使…粉碎；打碎；使破灭',
         liju1: 'A failure would shatter the hopes of many people.',
         chinese1: '一次失败会使很多人的希望粉碎。',
         liju2: 'The conflict between the two countries shattered the dream of peace.',
         chinese2: '两国间的冲突使和平的梦想破灭。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2951',
         word: 'shave',
         ciyi: 'vt. 剃，削去；修剪 n. 刮脸',
         liju1: 'He took a bath and shaved before dinner.',
         chinese1: '他在晚餐前洗了澡并刮了脸。',
         liju2: 'He never seemed to need a shave.',
         chinese2: '他似乎从不需要刮脸。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '2952',
         word: 'shear',
         ciyi: 'vt. 剪；修剪 ',
         liju1: ' Competitors have six minutes to shear four sheep.',
         chinese1: '参赛者们有6分钟的时间来给4只羊剪毛。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2953',
         word: 'shed',
         ciyi: 'vt. 流出；脱落；散发；倾吐n. 小屋，棚 ',
         liju1: "They will shed a few tears at their daughter's wedding.",
         chinese1: '他们在女儿的婚礼上会落些泪。',
         liju2: 'The wheat is shedding.',
         chinese2: '小麦成熟落粒了。',
         liju3:'The sun sheds warmth and light.',
         chinese3:'太阳散发光和热。',
         liju4:'The shed was roofed with dried straw.',
         chinese4:'小屋上面用干草盖上了屋顶。'
     },
	   {
         id: '2954',
         word: 'sheer',
         ciyi: 'a. 十足的；纯粹的；峻峭的 ',
         liju1: 'His music is sheer delight.',
         chinese1: '他的音乐是纯粹的快乐。',
         liju2: 'There was a sheer drop just outside my window.',
         chinese2: '就在我的窗外有一个陡坡。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2955',
         word: 'shell',
         ciyi: 'n. 壳，贝壳；炮弹；外形',
         liju1: 'They cracked the nuts and removed their shells.',
         chinese1: '他们打破坚果并剥掉果壳。',
         liju2: 'Tanks fired shells at the house.',
         chinese2: '坦克向那座房子发射炮弹。',
         liju3:'',
         chinese3:''
       }
       , 
	  {
         id: '2956',
         word: 'shelter',
         ciyi: 'n. 保护；遮盖；掩蔽处；避难所vt. 保护；庇护 ',
         liju1: "The city's bomb shelters were being prepared for possible air raids.",
         chinese1: '这座城市的防空掩体正在准备中，以防可能发生的空袭。',
         liju2: 'We are at another shelter.',
         chinese2: '我们在另一个避难所。',
         liju3:'A neighbour sheltered the boy for seven days.',
         chinese3:'一个邻居将这个男孩藏了7天。'
       }
	  ,
	   {
         id: '2957',
         word: 'shepherd',
         ciyi: 'n. 牧羊人；牧民',
         liju1: 'The shepherd is whacking up the cattle. ',
         chinese1: '牧民在赶牛群。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2958',
         word: 'shield',
         ciyi: 'n. 防护物；盾vt. 遮蔽；保护 ',
         liju1: 'He used his left hand as a shield against the reflecting sunlight.',
         chinese1: '他用左手遮挡反射过来的阳光。',
         liju2: 'He clanged his sword three times on his shield.',
         chinese2: '他用他的剑当当当地敲了3下盾。',
         liju3:'He shielded his head from the sun with an old sack.',
         chinese3:'他用一个旧袋子遮住头来防晒。'
       }
	  ,
	   {
         id: '2959',
         word: 'shift',
         ciyi: 'n. 移变；转换；轮班vi. 转变；替换',
         liju1: 'The prime minister’s shift in foreign policy angered the senators.',
         chinese1: '总理在外交政策上的转变让议员们很生气。',
         liju2: 'His father worked shifts in a steel mill.',
         chinese2: '他的父亲在一家钢铁厂轮班工作。',
         liju3:'He shifted from foot to foot.',
         chinese3:'他从一只脚换到另一只脚。'
       }
      ,
       {
         id: '2960',
         word: 'shilling',
         ciyi: 'n. 先令 ',
         liju1: 'The prominent coin was called the shilling and it was a silver coin. ',
         chinese1: '那种著名的硬币名叫先令,并且它是一种银质的硬币。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2961',
         word: 'shipment',
         ciyi: 'n. 装船；装载的货物',
         liju1: 'The machine has been knocked down ready for shipment. ',
         chinese1: '机器已拆好准备装船。',
         liju2: 'After that, food shipments to the port could begin in a matter of weeks.',
         chinese2: '之后，到该港口的食物运送可能在几周之内开始。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2962',
         word: 'shiver',
         ciyi: 'n. 颤抖，战栗vi. 颤抖 ',
         liju1: 'The emptiness here sent shivers down my spine.',
         chinese1: '这里的空气让我感到脊背一阵战栗。',
         liju2: 'He shivered in the cold.',
         chinese2: '他在寒冷中颤抖。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2963',
         word: 'shopkeeper',
         ciyi: 'n. 店主，老板',
         liju1: 'The girl had only worked for the shopkeeper for three days when she packed him in.',
         chinese1: '这姑娘替那店主只干了三天，就辞职不干了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2964',
         word: 'shortage',
         ciyi: 'n. 不足，缺少',
         liju1: 'Harry deserted during the food shortage. ',
         chinese1: '哈里在食物缺乏时逃亡了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2965',
         word: 'shortcoming',
         ciyi: 'n. 缺点；短处',
         liju1: ' Marriages usually break down as a result of the shortcomings of both partners.',
         chinese1: '婚姻常常因双方的缺点而破裂。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2966',
         word: 'shorthand',
         ciyi: ' n. 速记；速记法',
         liju1: 'Ben took notes in shorthand.',
         chinese1: '本用速记的方法记笔记。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2967',
         word: 'shove',
         ciyi: ' vt. 挤；撞；猛推；随意放n. 猛推',
         liju1: 'He shoved her out of the way.',
         chinese1: '他把她推开。',
         liju2: 'We shoved a copy of the newsletter beneath their door.',
         chinese2: '我们在他们的门下塞了一份时事通讯。',
         liju3:'She gave Gracie a shove toward the house.',
         chinese3:'她把格雷西向那所房子猛地一推。'
       }
     , 
	   {
         id: '2968',
         word: 'shrewd',
         ciyi: ' a. 精明的；狡猾的；机灵的',
         liju1: "She's a shrewd businesswoman.",
         chinese1: '她是一个精明的商人。',
         liju2: 'Charlie is a quiet, shrewd and thoughtful companion.',
         chinese2: '查利是一个安静，机灵，深谋远虑的共事者。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2969',
         word: 'shrink',
         ciyi: 'vt. 使缩小，收缩；畏缩',
         liju1: 'This kind of cloth shrinks easily.',
         chinese1: '这种布料容易缩水。',
         liju2: 'Don’t drop by Nancy alone—she shrinks from meeting strangers.',
         chinese2: '不要独自一人去拜访南希—她害怕见生人。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2970',
         word: 'shrug',
         ciyi: 'vt. 耸肩，耸肩表示n. 耸肩 ',
         liju1: 'A shrug, a sigh, or any of a number of expressive sounds as well as speech can follow it. ',
         chinese1: '耸肩、叹气或者其他任何具有表达意味的声音都可以作为引语跟随其后。',
         liju2: '"I suppose so," said Anna with a shrug.',
         chinese2: '“我想是这样，”安娜耸耸肩说道。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2971',
         word: 'shutter',
         ciyi: ' n. 快门；百叶窗；遮板',
         liju1: 'There are a few things you should check before pressing the shutter release.',
         chinese1: '在按快门之前，有几件事情你应该检查。',
         liju2: 'She opened the shutters and gazed out over village roofs.',
         chinese2: '她打开了百叶窗，朝村里的房顶望去。',
         liju3:'',
         chinese3:''
       }
        , 
	  {
         id: '2972',
         word: 'shuttle',
         ciyi: ' n. 航天飞机；梭子；穿梭班机、公共汽车等vt.使穿短程穿梭般运送 ',
         liju1: 'They stand guard with weapons as the human survivors of the battle are marched onto the shuttle.',
         chinese1: '他们站在一起用武器护卫着战后的人类幸存者鱼贯进入航天飞机。',
         liju2: 'My heart like a shuttle went to and fro when I was asked into the manger’s office.',
         chinese2: '当被叫进经理办公室时，我的心像梭子一样七上八下的。',
         liju3:'There is a free 24-hour shuttle between the airport terminals.',
         chinese3:'在机场的各航空站之间有24小时的免费穿梭巴士。',
          liju4:'He and colleagues have shuttled back and forth between the three capitals.',
         chinese4:'他和同事们一直来回往返于3个首都之间。'
	   }
	  ,
	   {
         id: '2973',
         word: 'sideways',
         ciyi: 'ad. 向侧面地；侧身；斜着a.一旁的；横着的 ',
         liju1: 'Piercey glanced sideways at her.',
         chinese1: '皮尔西斜着眼看了她一下。',
         liju2: 'She noticed that he was walking straight instead of sideways.  ',
         chinese2: '她注意到他走路是直着走，而不是横着走。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2974',
         word: 'siege',
         ciyi: 'n. 围攻；包围；围城 ',
         liju1: 'We must do everything possible to lift the siege.',
         chinese1: '我们必须尽一切可能解除包围。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2975',
         word: 'sigh',
         ciyi: 'vi. 叹息，叹气n. 叹息，叹气 ',
         liju1: 'Michael sighed wearily.',
         chinese1: '迈克尔疲惫地叹了口气。',
         liju2: 'She kicked off her shoes with a sigh.',
         chinese2: '她叹着气踢掉了鞋子。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2976',
         word: 'sightseeing',
         ciyi: 'n. 观光；游览',
         liju1: ' After a day of sightseeing, take in a musical or play in one of the world renowned Broadway Theaters.',
         chinese1: '游览一天后，你可以在世界享有生命的百老汇歌剧院听音乐会或看戏剧。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2977',
         word: 'signal',
         ciyi: 'n. 信号；暗号vt. 标志；用信号通知',
         liju1: 'They fired three distress signals.',
         chinese1: '他们发射了3次遇难求救信号。',
         liju2: 'She signalled to Ted that she was moving forward.',
         chinese2: '她向特德示意她要向前走。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2978',
         word: 'signature',
         ciyi: ' n. 署名；签名 ',
         liju1: ' I was writing my signature at the bottom of the page.',
         chinese1: '我当时正把我的签名写在本页的底部。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2979',
         word: 'significance ',
         ciyi: 'n. 意义；重要性',
         liju1: ' Ideas about the social significance of religion have changed over time.',
         chinese1: '有关宗教的社会意义的观念已随时间的流逝发生了改变。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2980',
         word: 'significant',
         ciyi: 'a. 重要的；有意义的',
         liju1: 'There are two significant findings in this report. ',
         chinese1: '在这份报告中有两个重要的发现。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2981',
         word: 'signify',
         ciyi: 'vt. 表示；意味；预示vi. 有重要性；要紧',
         liju1: 'It signifies we should go now.',
         chinese1: '这就意味着我们该走了。',
         liju2: 'It signifies much.',
         chinese2: '这非常重要。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2982',
         word: 'silicon',
         ciyi: 'n. 硅；硅元素',
         liju1: 'The major ingredient of semiconductors is silicon, the second abundant element on earth.',
         chinese1: '半导体的主要成份硅，是地球上第二大丰富的元素。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2983',
         word: 'simplicity',
         ciyi: 'n. 朴素；简单；单纯；直率 ',
         liju1: ' I like simplicity in life.',
         chinese1: '生活中我喜欢简单。',
         liju2: 'Annie liked his character by frankness and simplicity.',
         chinese2: '安妮喜欢他率真，单纯的性格。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '2984',
         word: 'simplify',
         ciyi: 'vt.简化；使单纯；使简易 ',
         liju1: 'They have to simplify.',
         chinese1: '他们需要简化。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2985',
         word: 'simulate',
         ciyi: 'vt. 模拟；假装；冒充',
         liju1: 'The model will be used to simulate the effects of an earthquake.',
         chinese1: '这个模型将用于模拟地震造成的影响。',
         liju2: 'There is no disguise which can hide love for long where it exists, or simulate it.',
         chinese2: '爱存在的地方，没有伪装能长时间隐藏它，也不能假装。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '2986',
         word: 'simultaneous',
         ciyi: 'a. 同时的；同时发生的 ',
         liju1: 'This event was almost simultaneous with that one.',
         chinese1: '这件事几乎是与那件事同时发生的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2987',
         word: 'sin',
         ciyi: 'n. 罪恶；罪过 vi. 犯罪；犯过失 ',
         liju1: "The Vatican's teaching on abortion is clear: it is a sin.",
         chinese1: '梵蒂冈有关坠胎的教义是清楚的：这是个罪过。',
         liju2: 'Sam sinned and then he prayed for forgiveness.',
         chinese2: '萨姆犯了罪，之后乞求宽恕。',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '2988',
         word: 'sincere',
         ciyi: 'a. 真诚的；诚挚的；诚恳的；忠诚的',
         liju1: 'He is a sincere friend to me. ',
         chinese1: '对我来说，他是个真诚的朋友。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2989',
         word: 'singular',
         ciyi: 'a. 单数的；非凡的；异常的',
         liju1: "It always take the third person singular form of the verb even though it's always plural in English.",
         chinese1: '它总是使用动词第三人称单数的形式，尽管在英语中“我们”的动词总是复数。',
         liju2: 'I would be a singular businessman.',
         chinese2: '我将成为一个非凡的商人。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2990',
         word: 'sip',
         ciyi: 'n. 抿；小口喝 vi. 啜饮；抿',
         liju1: ' Harry took a sip of bourbon.',
         chinese1: '哈里喝了一小口波旁威士忌酒。',
         liju2: 'He sipped at the glass and then put it down.',
         chinese2: '他抿了一口，然后放下杯子。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2991',
         word: 'siren ',
         ciyi: ' n. 汽笛；警报声',
         liju1: 'It sounds like an air raid siren.',
         chinese1: '这听起来像是空袭警报。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '2992',
         word: 'situated',
         ciyi: 'a. 坐落在…的',
         liju1: 'His hotel is situated in one of the loveliest places on the Loire.',
         chinese1: '他的旅馆坐落在卢瓦尔的一个最优美的地方。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2993',
         word: 'skeleton',
         ciyi: 'n. 骨架，骨骼；纲要；梗概',
         liju1: ' The skeleton showed no sign of disease or injury.',
         chinese1: '其骨架显示没有任何疾病或是外伤。',
         liju2: 'The artist wrote the skeleton of his drama.',
         chinese2: '这位艺术家为自己的戏剧写了提纲。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2994',
         word: 'skeptical',
         ciyi: 'a. 怀疑的 ',
         liju1: ' Not all theory that we read in this course is skeptical. ',
         chinese1: '我们在这门课中提及的理论不全是怀疑的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2995',
         word: 'sketch',
         ciyi: 'n. 草图；素描；略图；梗概vt. 画素描或速写；简述；勾画',
         liju1: 'He squiggles a sketch on the ground.',
         chinese1: '他在地上胡乱地画了个草图。',
         liju2: 'Thumbnail sketches of heads of state and political figures.',
         chinese2: '国家首脑和政治要员们的简要陈述。',
         liju3:'Clare and David Astor are sketching a view of far Spanish hills.',
         chinese3:'克莱尔和大卫·阿斯特正在素描远处西班牙山峦景色。',
          liju4:'Cross sketched the story briefly, telling the facts just as they had happened.',
         chinese4:'克罗斯简要地概述了这个事件，如实地讲述了所发生的事情。'
	   }
      ,
       {
         id: '2996',
         word: 'ski',
         ciyi: ' n. 滑雪橇vi. 滑雪 ',
         liju1: 'He has a pair of skis.',
         chinese1: '他有一副滑雪板。',
         liju2: 'I would teach her to ski like my dad had taught me.',
         chinese2: '我会教她滑雪，就像当年父亲教我时那样。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2997',
         word: 'skil(l)ful',
         ciyi: 'a. 熟练的；灵巧的',
         liju1: "The more you practise, the more skillful you'll become. ",
         chinese1: '练习的次数越多，熟练的程度越高。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2998',
         word: 'skilled',
         ciyi: ' a. 熟练的；有技能的；需要技能的 ',
         liju1: 'He has become a skilled worker.',
         chinese1: '他已经成为一名熟练的工人。',
         liju2: 'New industries demanded skilled labour not available locally.',
         chinese2: '新兴产业需要熟练技术工人，而当地没有。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '2999',
         word: 'skim',
         ciyi: 'v. 略读；撇去…的浮物；掠过；浏览',
         liju1: "Rough seas today prevented specially equipped ships from skimming oil off the water's surface.",
         chinese1: '今天汹涌的海浪使特别装备的船只无法撇去浮在水面上的石油。',
         liju2: 'The sailboat skimmed the water.',
         chinese2: '帆船掠过水面。',
         liju3:'He skimmed the pages quickly, then read them again more carefully.',
         chinese3:'他很快浏览了几页，然后又仔细地读了一遍。'
       }
     , 
	   {
         id: '3000',
         word: 'skip',
         ciyi: ' v.蹦蹦跳跳；跳绳；跳过；遗漏n. 跳；蹦跳',
         liju1: 'We went skipping down the street arm in arm.',
         chinese1: '我们挽着臂蹦蹦跳跳地沿大街走着。',
         liju2: 'They skip and play catch, waiting for the bell.',
         chinese2: '他们又是跳绳又是玩捉迷藏，等着铃声响。',
         liju3:'You might want to skip the exercises in this chapter.',
         chinese3:'你可能想把这一章的练习跳过去。',
          liju4:'The boxer gave a little skip as he came out of his corner.',
         chinese4:'那位拳击手轻快地跳出了场角。'
	   }
	 ,
	   {
         id: '3001',
         word: 'skull',
         ciyi: ' n. 头盖骨，脑壳；颅骨',
         liju1: 'Her husband was later treated for a fractured skull.',
         chinese1: '她丈夫后来因颅骨碎裂而接受治疗。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3002',
         word: 'skyscraper',
         ciyi: 'n. 摩天楼，超高层大楼',
         liju1: ' The skyscraper towers into the clouds. ',
         chinese1: '那幢摩天大楼高耸入云。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3003',
         word: 'slack',
         ciyi: 'a. 懈怠的；松弛的；萧条的n. 淡季；萧条；运动裤',
         liju1: 'Because I choose to occasionally socialize with my employees in an informal setting, they sometimes feel that they can use this as a free pass to slack off at work.',
         chinese1: '因为我偶尔会和员工们在非正式的场合下有些交情，他们有时候会认为可以凭借这种交情在工作中有所懈怠。',
         liju2: 'She was shocked at the slack discipline in the school. ',
         chinese2: '对于学校松弛的纪律，她感到震惊。',
         liju3:'Business was slack, so the owner closed the store early.',
         chinese3:'生意不景气，所以老板早早关了门。',
          liju4:"The girls at the private school weren’t allowed to wear slacks.",
         chinese4:'那所私立学校不许女生穿便裤。'
	  }
, 
	  {
         id: '3004',
         word: 'slam',
         ciyi: 'v. 砰地关上；猛力抨击；砰地放下；猛力抨击n. 砰然声',
         liju1: ' She slammed the door and locked it behind her.',
         chinese1: '她砰地关上门，身后的门锁上了。',
         liju2: 'The plane slammed into the building after losing an engine shortly after take-off.',
         chinese2: '飞机起飞后不久便失去一个引擎，猛地撞到那栋建筑物上。',
         liju3:'She listened in a mixture of shock and anger before slamming the phone down.',
         chinese3:'她震惊而气愤地听着，随后啪地挂上电话。',
           liju4:'I was relieved to hear the front door slam.',
         chinese4:'听到前门砰地一声关上，我才放下了心。'
	   }
	  ,
	   {
         id: '3005',
         word: 'slap',
         ciyi: 'vt. 拍击；掌击 n. 掴；掌击',
         liju1: 'He would push or slap her once in a while.',
         chinese1: '他时不时地推搡她，或是打她耳光。',
         liju2: 'He reached forward and gave her a slap.',
         chinese2: '他走上前去，给了她一个耳光。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3006',
         word: 'slaughter',
         ciyi: 'vt. 屠宰，屠杀；杀戮n. 屠宰；杀戮',
         liju1: ' Thirty four people were slaughtered while lining up to cast their votes.',
         chinese1: '有34人在排队投票时遭屠杀。',
         liju2: 'More than 491,000 sheep were exported for slaughter last year.',
         chinese2: '去年，超过四十九万一千只羊被出口供屠宰。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3007',
         word: 'slave',
         ciyi: 'n. 奴隶vi. 苦干；拼命地干',
         liju1: 'The slave fearlessly lammed into his master. ',
         chinese1: '奴隶无畏地痛打他的主人。',
         liju2: "When you're busy all day the last thing you want to do is spend hours slaving over a hot stove.",
         chinese2: '当你忙碌了一整天后，你最不愿意做的事就是花好几个钟头在灼热的火炉边辛苦地劳作。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3008',
         word: 'sleeve',
         ciyi: 'n. 袖子，袖套 ',
         liju1: ' His sleeves were rolled up to his elbows.',
         chinese1: '他的两只袖子被挽到了肘部。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3009',
         word: 'slender ',
         ciyi: 'a. 细长的；苗条的；微薄的；微小的',
         liju1: ' She was slender, with delicate wrists and ankles.',
         chinese1: '她身材苗条，有着纤细的手腕和脚踝。',
         liju2: 'The United States held a slender lead.',
         chinese2: '美国稍微领先',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3010',
         word: 'slice ',
         ciyi: 'n. 薄片；部分',
         liju1: 'Try to eat at least four slices of bread a day.',
         chinese1: '每天尽量吃至少4片面包。',
         liju2: 'Fiction takes up a large slice of the publishing market.',
         chinese2: '小说占出版市场的一大部分。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3011',
         word: 'slide ',
         ciyi: 'n. 滑动；幻灯片vi. 使滑动；滑落 ',
         liju1: ' Slide up or down to adjust volume.',
         chinese1: '上下方向滑动调整音量。',
         liju2: 'Jacob watched a slide of Peggy in her wedding dress.',
         chinese2: '雅各布观看了佩吉穿婚纱的幻灯片。',
         liju3:'I slid the wallet into his pocket.',
         chinese3:'我把那钱包滑进了他的口袋。'
       }
      ,
       {
         id: '3012',
         word: 'slight  ',
         ciyi: 'a. 轻微的，少量的；纤细的',
         liju1: 'Doctors say he has made a slight improvement.',
         chinese1: '医生说他已经有些轻微的好转。',
         liju2: 'She is smaller and slighter than Christie.',
         chinese2: '她比克里斯蒂更瘦小更纤弱。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3013',
         word: 'slim  ',
         ciyi: 'a. 苗条的；薄的；微小的vi. 减轻体重；变细',
         liju1: 'The young woman was tall and slim. ',
         chinese1: '那个年轻女子个子高挑，身材苗条。',
         liju2: 'John finished the slim book in half an hour.',
         chinese2: '约翰半个小时就看完了那本薄书。',
         liju3:"There's still a slim chance that he may become president.",
         chinese3:'仍然有微小的可能他会当上总统。',
         liju4:'It is unbelievable that Nina has slimmed down to 110 proud.',
         chinese4:'真的是很难相信，妮娜已经把体重减到110磅了。'
	   }
	  ,
	   {
         id: '3014',
         word: 'slip  ',
         ciyi: ' vi. 滑倒；溜走n. 疏忽；错误；纸片 ',
         liju1: 'He slipped on the street and broke his leg.',
         chinese1: '他在马路上滑了一跤，摔断了腿。',
         liju2: "You must be present. Then you'll slip off.",
         chinese2: '你必须出席，然后你再溜走。',
         liju3:'We must be well prepared, there must be no slips.',
         chinese3:'我们必须好好准备，一定不要有差错。',
          liju4:'Little slips of paper he had torn from a notebook.',
         chinese4:'他从笔记本上撕下的几张小纸片。'
	  }
	  ,
	   {
         id: '3015',
         word: 'slipper ',
         ciyi: 'n. 拖鞋 ',
         liju1: ' With its lips the sly fly clipped the slippery slipper that eclipsed his sight.',
         chinese1: '狡猾的苍蝇用嘴唇夹住遮挡他视线的滑拖鞋。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3016',
         word: 'slippery',
         ciyi: 'a. 滑的；狡猾的',
         liju1: 'The tiled floor was wet and slippery.',
         chinese1: '那磁砖地板又湿又滑。',
         liju2: 'He is a slippery customer, and should be carefully watched.',
         chinese2: '他可是个狡猾的主顾，得小心看着他。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3017',
         word: 'slit',
         ciyi: 'vt. 撕裂；切开n. 细长裂缝；投币口 ',
         liju1: ' He began to slit open each envelope.',
         chinese1: '他开始撕开每个信封。',
         liju2: 'Make a slit in the stem about half an inch long.',
         chinese2: '在树干上割一个约半英寸长的口儿。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3018',
         word: 'slogan ',
         ciyi: 'n. 标语；呐喊声；口号',
         liju1: 'There you can see the slogan written up on the wall. ',
         chinese1: '在那儿你会看到这条标语写在墙上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3019',
         word: 'slope ',
         ciyi: 'n. 斜坡；倾斜；斜度vi. 使倾斜 ',
         liju1: ' The street must have been on a slope.',
         chinese1: '那条街一定是一直在一个斜坡上。',
         liju2: 'The slope increases as you go up the curve.',
         chinese2: '你顺着那条弯路往上走，坡的倾斜度越来越大。',
         liju3:'The bank sloped down sharply to the river.',
         chinese3:'那座堤岸陡峭地朝着那条河倾斜下去。'
       }
, 
	  {
         id: '3020',
         word: 'slot  ',
         ciyi: 'n. 位置；狭缝； vt. 开槽于；使有位置',
         liju1: 'Shall we meet at the same slot tomorrow?',
         chinese1: '明天我们还在同一个地方见面吗？',
         liju2: 'He dropped a coin into the slot and dialled.',
         chinese2: '他把一枚硬币投进了那个投币口，然后拨了号。',
         liju3:'He was slotting a CD into a CD player.',
         chinese3:'他正把一张光盘放入光盘播放器中。'
       }
	  ,
	   {
         id: '3021',
         word: 'slum ',
         ciyi: ' n. 贫民窟；陋巷',
         liju1: ' The slum must be inside you.',
         chinese1: '贫民窟一定是在你内心。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3022',
         word: 'sly ',
         ciyi: 'a. 狡猾的；诡密的 ',
         liju1: ' The sly fox nimbly eluded the dogs.',
         chinese1: '那只狡猾的狐狸灵活地躲避开那群狗。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3023',
         word: 'smash ',
         ciyi: ' vt/n.粉碎；打碎',
         liju1: 'My watch was smashed against the wall.',
         chinese1: '我的手表撞在墙上破碎了。',
         liju2: 'We will smash any aggression. ',
         chinese2: '我们将粉碎任何侵略。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3024',
         word: ' smog',
         ciyi: 'n. 烟雾',
         liju1: ' Cars cause pollution, both smog and acid rain.',
         chinese1: '汽车引起污染，既有烟雾又有酸雨。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3025',
         word: 'smuggle  ',
         ciyi: 'vt.走私；偷运 ',
         liju1: 'My message is "If you try to smuggle drugs you are stupid."',
         chinese1: '我的讯息是，“你若企图走私毒品，那是犯傻。”',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3026',
         word: 'snack ',
         ciyi: 'n. 小吃，快餐 ',
         liju1: ' Lunch was a snack in the fields.',
         chinese1: '午饭是在野外吃的快餐。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3027',
         word: ' snap ',
         ciyi: 'vt. 给…拍快照vi. 咔嚓折断；厉声说；咯嗒一声关上n. 吧嗒声；快照a. 仓促的 ',
         liju1: 'You have to snap a photo.',
         chinese1: '你得照一张快相。',
         liju2: 'He shifted his weight and a twig snapped.',
         chinese2: '他挪了挪身子，一根树枝随即喀嚓一声折断了。',
         liju3:'When I got out of the room, the door snapped close behind me.',
         chinese3:'我刚走出屋门，门就啪嗒一声在我身后关上了。',
         liju4:'He shut the book with a snap and stood up.',
         chinese4:'他啪的一声合上书，站了起来。',
	      liju5:'It’s a snap decision that Tom made only in a second.',
         chinese5:'汤姆只用了片刻时间就做了这个仓促的决定。'
	   }
      ,
       {
         id: '3028',
         word: 'snatch',
         ciyi: 'n/v. 抢夺 攫取 ',
         liju1: 'Freeze onto that bag or someone in the crowd may snatch it. ',
         chinese1: '把手提包抓紧，否则在人群中可能有人把它抢去。',
         liju2: "Mick snatched the cards from Archie's hand.",
         chinese2: '米克一把夺过阿彻手里的牌。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3029',
         word: 'sneak',
         ciyi: 'v.偷偷地走，溜；偷偷地做',
         liju1: 'Sometimes he would sneak out of his house late at night to be with me.',
         chinese1: '有时候他会在深夜偷偷溜出他的家来陪伴我。',
         liju2: 'He smuggled papers out each day, photocopied them, and snuck them back.',
         chinese2: '他每天都把文件偷带出来，复印后又偷偷送回去。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3030',
         word: 'sneeze',
         ciyi: 'vi. 打喷嚏n. 喷嚏 ',
         liju1: 'What exactly happens when we sneeze?',
         chinese1: '我们打喷嚏究竟是怎么回事？',
         liju2: 'Coughs and sneezes spread infections.',
         chinese2: '咳嗽和打喷嚏会传播传染病。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3031',
         word: 'sniff',
         ciyi: 'vi. 嗅；用力吸入；嗤之以鼻vt. 嗅；闻 n. 吸气，闻 ',
         liju1: 'The coughs, sneezes, and sniffs of those who have colds mixed together.',
         chinese1: '感冒患者的咳嗽声，喷嚏声和鼻子的吸气声混杂一起。',
         liju2: 'Suddenly, he stopped and sniffed the air.',
         chinese2: '突然他停下来，嗅了嗅空气中的味道。',
         liju3:'The coughs, sneezes, and sniffs of those who have colds mixed together.',
         chinese3:'感冒患者的咳嗽声，喷嚏声和吸鼻子声混杂一起。',
         liju4:'The bear pauses on a patch of rockweed algae to sniff the air. ',
         chinese4:'黑熊在一块长满岩藻的砾石上驻足，嗅着空气中的气味。'
	   }
     , 
	   {
         id: '3032',
         word: 'snobbish ',
         ciyi: 'a. 势利的',
         liju1: 'Snobbish Knob is doing his hobby in the lobby.',
         chinese1: '势利的球形门柄正在大堂里做他的嗜好。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3033',
         word: 'snowstorm',
         ciyi: 'n. 暴风雪；雪暴 ',
         liju1: 'The snowstorm added to our difficulties. ',
         chinese1: '暴风雪增加了我们的困难。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3034',
         word: ' soak',
         ciyi: 'vt. 吸收，吸入；浸泡 ',
         liju1: 'I used a paper towel to soak up the oil on the desk.',
         chinese1: '我用纸巾把桌子的油吸干。',
         liju2: 'The clothes should soak for a quarter before washing.',
         chinese2: '洗这些衣服之前应浸泡一刻钟。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3035',
         word: ' soar',
         ciyi: 'vi. 高飞；猛增；情绪的高涨；高耸，屹立 ',
         liju1: "If you're lucky, a splendid golden eagle may soar into view.",
         chinese1: '幸运的话，一只金色雄鹰会跃入视线。',
         liju2: 'The number of the people who traveled by air soared to millions.',
         chinese2: '乘飞机旅行的人数猛增至上千万。',
         liju3:'At the good news from the Olympic Games, our spirit soared.',
         chinese3:'听到从奥运会上传来的好消息，我们情绪高涨。',
          liju4:'A tree soared on the peak.',
         chinese4:'屹立在山峰之巅的大树。'
	   }
     , 
	  {
         id: '3036',
         word: 'sob ',
         ciyi: 'vi/n. 啜泣，呜咽 ',
         liju1: "She sobbed she hadn't gone to there.",
         chinese1: '她呜咽着说她并没有去过那儿。',
         liju2: 'The room was silent except for her sobbing.',
         chinese2: '房间里除了她的啜泣声一片寂静。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3037',
         word: 'sober ',
         ciyi: 'a. 冷静的，清醒的；严肃的 ',
         liju1: "He'd been drunk when I arrived. Now he was sober.",
         chinese1: '我到的时候他已经喝醉了。现在他清醒了。',
         liju2: 'We are now far more sober and realistic.',
         chinese2: '我们现在严肃多了，也现实多了。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3038',
         word: 'so-called ',
         ciyi: 'a. 所谓的；号称的',
         liju1: 'These are the facts that explode their so-called economic miracle.',
         chinese1: '这些就是戳穿他们所谓的经济奇迹的事实。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3039',
         word: ' sociable ',
         ciyi: 'a. 社交的；好交际的；友善的 ',
         liju1: ' She was, and remained, extremely sociable, enjoying dancing, golf, tennis, skating, and bicycling.',
         chinese1: '她以前是，现在依然是极其好交际，喜欢跳舞、打高尔夫、打网球、滑冰和骑自行车。',
         liju2: 'They are sociable people who are nice to everyone.',
         chinese2: '他们为人和善，对每个人都很友好。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3040',
         word: 'social  ',
         ciyi: ' a. 社会的，社交的；交际的',
         liju1: 'Only social practice can be the criterion of truth. ',
         chinese1: '真理的标准只能是社会的实践。',
         liju2: 'We ought to organize more social events.',
         chinese2: '我们应该组织更多的社交活动。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3041',
         word: 'sociology  ',
         ciyi: 'n. 社会学；群体生态学',
         liju1: 'There is no psychology, no sociology, and no anthropology; there is only economics. ',
         chinese1: '没有心理学，没有社会学，没有人类学，只有经济学。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3042',
         word: ' soda',
         ciyi: ' n. 苏打；碳酸水 ',
         liju1: 'He spritzed a little soda in his drink. ',
         chinese1: '他往饮料里喷了一点儿苏打水。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3043',
         word: 'sofa ',
         ciyi: 'n. 沙发；长椅',
         liju1: 'He sprang up from the sofa. ',
         chinese1: '他从沙发上猛然跳了起来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3044',
         word: ' software ',
         ciyi: ' n. 软件 ',
         liju1: ' The company deals in both hardware and software.',
         chinese1: '这家公司既经营硬件，又经营软件。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3045',
         word: ' solar',
         ciyi: ' a. 太阳的；日光的 ',
         liju1: ' This house was solar-heated. ',
         chinese1: '这所房屋是用太阳能供暖、供电的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3046',
         word: ' sole ',
         ciyi: ' n. 鞋底；脚底a. 唯一的；单独的；专有的 ',
         liju1: 'I must have my soles repaired.',
         chinese1: '我的鞋底该补补了。',
         liju2: 'Their sole aim is to destabilize the Indian government.',
         chinese2: '他们的唯一目的是要动摇印度政府的统治。',
         liju3:'We have to decline your proposal of acting as our sole agency. ',
         chinese3:'我们不得不谢绝你们作为我方独家代理的建议。'
       }
	  ,
	   {
         id: '3047',
         word: ' solemn',
         ciyi: ' a. 庄严的，严肃的；隆重的，郑重的 ',
         liju1: ' His solemn little face broke into smiles.',
         chinese1: '他那严肃的小脸绽开了笑容。',
         liju2: "The setting for this morning's signing ceremony matched the solemnity of the occasion.",
         chinese2: '今天早上签字仪式的布置符合这种场合的庄严气氛。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3048',
         word: 'solidarity  ',
         ciyi: ' n. 团结，团结一致 ',
         liju1: "The solidarity among China's various nationalities is as firm as a rock.",
         chinese1: '中国各族人民之间的团结坚如磐石。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3049',
         word: ' solitary',
         ciyi: 'a. 独自的；单个的；孤独的',
         liju1: 'Paul was a shy, pleasant, solitary man.',
         chinese1: '保罗是个腼腆的、讨人喜欢的、惯于独处的人。',
         liju2: 'His evenings were spent in solitary drinking.',
         chinese2: '他的每个夜晚都在独自饮酒中度过。',
         liju3:'The artist is a solitary kind of person.',
         chinese3:'这位艺术家是一个孤独的人。'
       }
	 ,
	   {
         id: '3050',
         word: ' solo',
         ciyi: 'n. 独奏；独唱 a. 单独的ad. 单独地',
         liju1: 'The original version featured a guitar solo.',
         chinese1: '原版以吉他独奏为特色。',
         liju2: 'He had just completed his final solo album.',
         chinese2: '他刚刚完成他最后一张个人专辑。',
         liju3:'Charles Lindbergh became the very first person to fly solo across the Atlantic.',
         chinese3:'查尔斯•林德伯格成为第一个单独飞越大西洋的人。'
       }
	  ,
	   {
         id: '3051',
         word: 'soluble ',
         ciyi: 'a. 可溶的，可溶解的 ',
         liju1: ' Uranium is soluble in sea water.',
         chinese1: '铀可在海水中溶解。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3052',
         word: 'solution  ',
         ciyi: ' n. 解答；解决方案；溶液；溶解 ',
         liju1: 'Although he has sought to find a peaceful solution, he is facing pressure to use greater military force.',
         chinese1: '虽然他已设法寻找一个和平的解决办法，但他正面临着使用更大军事力量的压力。',
         liju2: 'Water precipitates camphor from its alcoholic solution. ',
         chinese2: '水使樟脑从其酒精溶液中沉淀。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3053',
         word: ' solve',
         ciyi: 'vt. 解决；解答 ',
         liju1: 'I must alert him to the need to solve the problem.',
         chinese1: '我必须使他认识到解决这问题的必要性。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3054',
         word: 'somehow ',
         ciyi: 'ad. 不知怎么地；莫名其妙地；设法',
         liju1: 'He was nervous somehow.',
         chinese1: '不知怎么的，他有点紧张。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3055',
         word: 'sometime ',
         ciyi: ' ad. 来日；在某一时候；有一天',
         liju1: "The sales figures won't be released until sometime next month.",
         chinese1: '销售数据要到下个月的某个时候才会公布。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3056',
         word: ' somewhat',
         ciyi: 'ad. 有点；几分；稍微',
         liju1: 'He concluded that Oswald was somewhat abnormal.',
         chinese1: '他断定奥斯瓦德有点不正常。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3057',
         word: ' sophisticated',
         ciyi: 'a. 复杂的；先进的；老练的',
         liju1: 'Honeybees use one of the most sophisticated communication systems of any insect.',
         chinese1: '蜜蜂所使用的交流系统是昆虫中最复杂的之一。',
         liju2: 'Claude was a charming, sophisticated companion.',
         chinese2: '克劳德是个有魅力、久经世故的伙伴。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3058',
         word: ' sophomore',
         ciyi: 'n. 大学二年级生 ',
         liju1: "I'd been in television since I was 19 and a sophomore.",
         chinese1: '我在19岁还是大学二年级的时候就已经上了电视。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3059',
         word: 'sore ',
         ciyi: 'a. 疼痛的，痛心的；n. 痛处 ',
         liju1: "It's years since I've had a sore throat like I did last night.",
         chinese1: '我已经好多年没有像昨晚那样嗓子痛了。',
         liju2: 'Our backs and hands were covered with sores and burns from the ropes.',
         chinese2: '我们的背和手到处是绳索导致的伤口和灼伤。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3060',
         word: ' sorrow',
         ciyi: 'n. 悲伤；伤心事 ',
         liju1: 'Words cannot express my sorrow.',
         chinese1: '语言不能表达我的悲伤。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3061',
         word: 'sour ',
         ciyi: 'a. 酸的；发酵的；脾气坏的 ',
         liju1: 'The stewed apple was sour even with honey.',
         chinese1: '炖煮的苹果即使加了蜂蜜也还是酸的。',
         liju2: 'She made a sour face in his direction.',
         chinese2: '她给了他一副不友善的脸色。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3062',
         word: 'source  ',
         ciyi: 'n. 来源；水源；原始资料 ',
         liju1: 'The long drought dried up the source. ',
         chinese1: '长时间干旱，水源都枯竭了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3063',
         word: 'sovereign ',
         ciyi: 'a.独立主权的：至高无上的；n. 君主；元首；统治',
         liju1: 'Lithuania and Armenia signed a treaty in Vilnius recognizing each other as independent sovereign states.',
         chinese1: '立陶宛和亚美尼亚在维尔纽斯签订了一份互相承认各自为独立主权国家的协定。',
         liju2: "Sovereign power will continue to lie with the Supreme People's Assembly.",
         chinese2: '至高无上的权力将继续掌控在最高人民议会。',
         liju3:'In March 1889, she became the first British sovereign to set foot on Spanish soil.',
         chinese3:'1889年3月，她成为首位踏上西班牙国土的英国君主。'
       }
     , 
	   {
         id: '3064',
         word: 'sow ',
         ciyi: 'vt. 播种',
         liju1: 'Sow the seed in a warm place in February/March.',
         chinese1: '2/3月里把种子播在温暖的地方。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3065',
         word: 'spacecraft ',
         ciyi: 'n. 宇宙飞船，航天器',
         liju1: 'Each of the papers in Science reports data from one of the spacecraft.  ',
         chinese1: '科学杂志上发表的论文分别报告了来自这些太空船的数据。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3066',
         word: 'spaceship ',
         ciyi: 'n. 宇宙飞船 ',
         liju1: 'They successfully lofted a spaceship into orbit. ',
         chinese1: '他们成功地将一艘宇宙飞船射入轨道。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3067',
         word: 'spacious ',
         ciyi: 'a. 宽敞的，广阔的 ',
         liju1: 'The house has a spacious kitchen and dining area.',
         chinese1: '这座住宅有一个宽敞的厨房和用餐区。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3068',
         word: 'spade  ',
         ciyi: 'n. 铁锹，铲子 ',
         liju1: 'He laid the spade by the door. ',
         chinese1: '他把铲子放在门边。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3069',
         word: 'span',
         ciyi: ' n. 跨度，跨距；范围',
         liju1: 'Over a span of just two years, the government has transformed the local economy successfully.',
         chinese1: '政府仅用了两年的时间就使得当地经济成功转型。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3070',
         word: 'spark ',
         ciyi: 'n. 火花v. 导致，产生；冒火花，飞火星',
         liju1: 'The fire gradually got bigger and bigger. Sparks flew off in all directions.',
         chinese1: '火势逐渐变得越来越大。火花四处飞溅。',
         liju2: 'The two countries’ tests threaten to spark a dangerous arms race.',
         chinese2: '这两个国家的实验可能会导致一场危险的军备竞赛。',
         liju3:'Their eyes sparked with green in the dark night.',
         chinese3:'在黑暗的夜里，他们的眼睛会发出绿色的闪光。'
       }
	  ,
	   {
         id: '3071',
         word: 'sparkle',
         ciyi: 'vt. 使闪耀；使发光 ',
         liju1: 'The pearls sparkles the bright silver.',
         chinese1: '珍珠闪着耀眼的银光。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3072',
         word: 'spear',
         ciyi: ' n. 矛，枪 ',
         liju1: 'I fended off his sword thrust with my spear. ',
         chinese1: '他一刀砍来，我拿枪架住。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3073',
         word: 'special(i)ty ',
         ciyi: ' n. 专业，专长；特产；招牌菜',
         liju1: 'His specialty was researching spiders. ',
         chinese1: '他的专长是研究蜘蛛。',
         liju2: 'For lunch, we tasted the local Vietnamese specialty.',
         chinese2: '我们在午餐时品尝了越南当地的特色菜。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3074',
         word: 'specialise/specialize ',
         ciyi: 'vi. 专门从事；专攻；专业化 ',
         liju1: ' This degree offers a major specialization in social policy alongside a course in sociology.',
         chinese1: '该学位提供一门社会政策主专业课和一门社会学课程。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3075',
         word: 'specialist ',
         ciyi: ' n. 专家 ',
         liju1: 'We had better call in a specialist at this critical moment. ',
         chinese1: '在这个关键时刻我们最好请一位专家来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3076',
         word: 'species',
         ciyi: 'n. 物种；种类',
         liju1: 'Pandas are an endangered species.',
         chinese1: '大熊猫是一种濒危物种。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3077',
         word: 'specific',
         ciyi: 'a. 特定的；明确的；具体的',
         liju1: ' There are several specific problems to be dealt with.',
         chinese1: '有好几个特定问题要解决。',
         liju2: 'We should make decisions in accordance with specific conditions. ',
         chinese2: '我们应当根据具体情况做出决定。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3078',
         word: 'specification',
         ciyi: 'n. 规格；说明书；详述 ',
         liju1: 'Read the specification carefully before you take the medicine.',
         chinese1: '吃药之前请仔细阅读说明书。',
         liju2: 'Have you got a product of this specification? ',
         chinese2: '不知你们有没有这种规格的产品？',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3079',
         word: 'specify ',
         ciyi: 'vt. 具体指定；详细说明 ',
         liju1: 'Each recipe specifies the size of egg to be used.',
         chinese1: '每种食谱都具体说明了所用鸡蛋的大小。',
         liju2: 'In this case, you either have to remove the slash or specify the directory with +D. ',
         chinese2: '在这种情况下，您可以删除这个斜杠或者使用 +D 指定目录。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3080',
         word: 'specimen',
         ciyi: 'n. 样品，样本',
         liju1: '200,000 specimens of fungus are kept at the Komarov Botanical Institute.',
         chinese1: '20万个真菌标本被保存在科马罗夫植物研究所。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3081',
         word: 'spectacle',
         ciyi: 'n. 景象；奇观 ；眼镜',
         liju1: 'It was a spectacle not to be missed.',
         chinese1: '它是不可错过的奇观。',
         liju2: 'He looked at me over the tops of his spectacles.',
         chinese2: '他从眼镜的上方看了看我。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3082',
         word: 'spectacular ',
         ciyi: 'a. 壮观的，惊人的n. 壮观的演出 ',
         liju1: ' Icebergs are among nature’s most spectacular creations, and yet most people have never seen one. A vague air of mystery envelops them. ',
         chinese1: '冰山是大自然最壮观的创造之一，但大多数人却从未看到过冰山，一种朦胧神秘的气氛笼罩着它们。',
         liju2: 'In one spectacular instance, at least, it was not.',
         chinese2: '在一个惊人的事例中，至少它不是这样的。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3083',
         word: 'spectator',
         ciyi: 'n. 观众；旁观者',
         liju1: 'Thirty thousand spectators watched the final game.',
         chinese1: '3万观众观看了那场决赛。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3084',
         word: 'spectrum ',
         ciyi: ' n.频谱；光谱；范围',
         liju1: 'At one end of the spectrum is the ability to release an application based on its project plan. ',
         chinese1: '在这个范围的一端是在它的项目计划的基础上，发布一个应用软件的能力。',
         liju2: 'The professor took a spectrum analysis in class.',
         chinese2: '教授在课堂上做了一次光谱分析。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3085',
         word: 'speculate ',
         ciyi: 'vi. 推测；投机；思索 ',
         liju1: "No one can speculate on what he's thinking about.",
         chinese1: '没人知道他在想什么。',
         liju2: 'The doctors speculate that he died of a cerebral haemorrhage caused by a blow on the head.',
         chinese2: '医生们推测他死于头部撞击引起的脑溢血。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3086',
         word: 'sphere ',
         ciyi: 'n. 范围；球体，球 ',
         liju1: ' Because the earth spins, it is not a perfect sphere.',
         chinese1: '因为地球旋转，所以它不是个完完全全的球体。',
         liju2: 'When they have matured, they can be incorporated with another SOA control sphere. ',
         chinese2: '一旦成熟，它们就可以和另一个SOA控制范围合并。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3087',
         word: 'spicy',
         ciyi: ' a. 辛辣的；香的，有刺激性的；下流的 ',
         liju1: ' Thai food is hot and spicy.',
         chinese1: '泰国食品很辛辣的。',
         liju2: 'Don’t tell such spicy joke.',
         chinese2: '不要讲这种下流的笑话。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3088',
         word: 'spider ',
         ciyi: ' n. 蜘蛛 ',
         liju1: 'Do you think that the spider can web anything? ',
         chinese1: '你觉得这蜘蛛能用网捕住什么吗?',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3089',
         word: 'spill ',
         ciyi: 'vi. 溢出，流出 n. 跌下，摔下',
         liju1: ' She handed me a glass of wine with her hands shaking, a little wine spilt.',
         chinese1: '她双手颤动地递给我一杯酒，有些酒了出来。',
         liju2: 'Mary had a nasty spill from the horse yesterday.',
         chinese2: '昨天玛丽从马上重重摔下。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3090',
         word: 'spin',
         ciyi: 'vi. 旋转；纺纱；吐丝；晕眩n. 旋转，自转 ',
         liju1: 'The latest disks, used for small portable computers, spin 3,600 times a minute.',
         chinese1: '用于小型手提电脑的最新磁盘每分钟转动3600次。',
         liju2: "Michelle will also spin a customer's wool fleece to specification at a cost of $2.25 an ounce.",
         chinese2: '米歇尔也将以每盎司$2.25的价格按照顾客的要求为其纺羊毛呢。',
         liju3:'A spider can spin a web.',
         chinese3:'蜘蛛会结网。'
       }
	  ,
	   {
         id: '3091',
         word: 'spine',
         ciyi: 'n. 脊柱，脊椎；刺；书脊 ',
         liju1: 'It is articulated to the spine. ',
         chinese1: '它以关节连接于脊骨。',
         liju2: 'An adult hedgehog can boast 7,500 spines.',
         chinese2: '一只成年刺猬能有多达7500根刺。',
         liju3:'The spine of the book is very beautiful and attractive.',
         chinese3:'这本书的书脊很漂亮，很吸引人。'
       }
      ,
       {
         id: '3092',
         word: 'spiral ',
         ciyi: 'vi. 盘旋；成螺旋形；螺旋形上升n. 螺旋；螺旋形之物a. 螺旋形的；盘旋的 ',
         liju1: 'The eagle spirals up into the sky.',
         chinese1: '鹰盘旋着飞上了高空。',
         liju2: 'The maze is actually two interlocking spirals.',
         chinese2: '这个迷宫实际上是两个连锁的螺旋体。',
         liju3:'A regular staircase takes up more space than a spiral one.',
         chinese3:'普通楼梯比螺旋形楼梯占的空间多。'
       }
	  ,
	   {
         id: '3093',
         word: 'spiritual',
         ciyi: 'a. 精神的，心灵的 ',
         liju1: 'It is not only material, but spiritual. ',
         chinese1: '喜，不仅仅是物质的，更是精神的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3094',
         word: 'spit  ',
         ciyi: 'vi. 吐痰；吐口水n. 唾液；口水 ',
         liju1: 'He was spit saliva on his face.',
         chinese1: '人们朝他脸上吐口水。',
         liju2: 'And ink from soot and spit. ',
         chinese2: '墨水用煤灰和唾液来做。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3095',
         word: 'spite  ',
         ciyi: ' n. 不顾；恶意；怨恨 ',
         liju1: 'He was there on the stroke in spite of the rain. ',
         chinese1: '尽管下雨，他还是准时到了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3096',
         word: 'splash ',
         ciyi: 'vt.溅，泼 n. 飞溅声；引人注目的事物',
         liju1: ' My car was splashed over with mud.',
         chinese1: '我的车上溅满了泥污。',
         liju2: 'Wallcoverings and floors should be able to withstand steam and splashes. ',
         chinese2: '墙纸和地板应该能承受得住蒸汽和液体的泼溅。',
         liju3:'The artist made a splash in artistic circles with his new painting.',
         chinese3:'那位画家的新作在艺术界引起了轰动。'
       }
	 ,
	   {
         id: '3097',
         word: 'split  ',
         ciyi: 'vt.使分离；分裂；劈开 n. 劈开；裂缝',
         liju1: 'They tried to split the United Church of Catholicism.',
         chinese1: '他们曾试图分裂联合天主教会。',
         liju2: 'A lightening splits the dark sky.',
         chinese2: '一道闪电划破了黑暗的天空。',
         liju3:'The plastic-covered seat has a few small splits around the corners.',
         chinese3:'那个有塑料套的座位的角边周围有几处小裂缝。'
       }
	 ,
	   {
         id: '3098',
         word: 'spoil',
         ciyi: 'vt. 毁坏，损坏；溺爱；破坏 ',
         liju1: 'Your present behaviour would spoil your future.',
         chinese1: '你现在的行为会毁掉你的前程的。',
         liju2: 'She was spoiled by her father.',
         chinese2: '她让她的父亲给宠坏了。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3099',
         word: 'spokesman ',
         ciyi: 'n. 发言人 ',
         liju1: 'They drew lots to decide who should be their spokesman. ',
         chinese1: '他们抽签决定谁是他们的发言人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3100',
         word: 'sponge',
         ciyi: 'n. 海绵',
         liju1: ' He wiped off the table with a sponge.',
         chinese1: '他用一块海绵擦了桌子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3101',
         word: 'sponsor ',
         ciyi: ' n. 主办者；保证人vt. 发起；主办',
         liju1: 'Race officials announced a handful of new sponsors on Tuesday.',
         chinese1: '比赛官员们星期二公布了几位新赞助人。',
         liju2: 'The meeting was sponsored by 16 countries.',
         chinese2: '此次会议是由16个国家发起召开的。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3102',
         word: 'spontaneous',
         ciyi: 'a. 自发的；自然的 ',
         liju1: ' That tells us whether the change is spontaneous. ',
         chinese1: '这可以告诉我们变化是否是自发的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3103',
         word: 'sportsman',
         ciyi: 'n. 运动员 ',
         liju1: "If you train hard, you'll make a good sportsman.",
         chinese1: '如果刻苦训练你就能成为一名优秀的运动员。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3104',
         word: 'spot',
         ciyi: 'n. 地点；斑点vt. 认出；弄脏；用点做记号 ',
         liju1: "They stayed at several of the island's top tourist spots.",
         chinese1: '他们在岛上几个最好的旅游景点呆过。',
         liju2: 'The leaves have yellow areas on the top and underneath are powdery orange spots.',
         chinese2: '叶子上端有黄色斑块，下方有粉状橙色斑点。',
         liju3:'He spotted the carpet with his muddy boots.',
         chinese3:'他的泥靴子踏脏了地毯。',
          liju4:'The sunlight spotted the carpet.',
         chinese4:'阳光在地毯上留下了斑驳的光点。'
	  }
	  ,
	   {
         id: '3105',
         word: 'spouse ',
         ciyi: ' n. 配偶 ',
         liju1: 'You and your spouse both have to sign this contract.',
         chinese1: '你和你的配偶都需要签这份合同。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3106',
         word: 'spray',
         ciyi: 'n. 喷雾；浪花vt. 喷射',
         liju1: 'Farmers can use the spray to kill weeds without harming the soy crop.',
         chinese1: '农民们能用喷雾器来除草而不伤大豆作物。',
         liju2: 'Spray buffeted the rocks at the bank.',
         chinese2: '浪花拍打着岸边的岩石。',
         liju3:'The farmers were spraying fruit trees.',
         chinese3:'农夫们正在往树上喷洒农药。'
       }
	  ,
	   {
         id: '3107',
         word: 'sprinkle',
         ciyi: 'vt. 洒；喷 ',
         liju1: 'The slops she threw down sprinkled me all over.',
         chinese1: '她泼下来的脏水全都洒在了我的身上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3108',
         word: 'sprout',
         ciyi: 'vi. 发芽；长芽n. 芽；苗芽',
         liju1: 'The seeds will sprout in 3 days after they are sown.',
         chinese1: '这类种子种下后3天出芽。',
         liju2: 'Potatoes sprout twice a year.',
         chinese2: '马铃薯一年发两次芽。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3109',
         word: 'spur ',
         ciyi: 'n. 刺激；马刺 vt. 激励，刺激 ',
         liju1: ' A booming economy sometimes causes a spur in prices.',
         chinese1: '飞速发展的经济有时会刺激物价。',
         liju2: 'He was spurred on by his friends when he failed the match.',
         chinese2: '在他比赛失利时，他受到来自他朋友的激励。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3110',
         word: 'squeeze ',
         ciyi: 'vt. 压榨, 挤 n. 压榨，勒索 ',
         liju1: 'Joe put the plug in the sink and squeezed some detergent over the dishes.',
         chinese1: '乔把塞子插进水槽，往盘子上挤了些洗洁精。',
         liju2: 'The farmers were driven to rebel by the squeeze of the landlords.',
         chinese2: '农民们在地主的压榨下被迫起来反抗了。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3111',
         word: 'squirrel ',
         ciyi: 'n. 松鼠 ',
         liju1: ' It was moving fast like a squirrel, but it was as loud as a bear.  ',
         chinese1: '它像松鼠一样快速的移动但那声音却像熊发出的似的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3112',
         word: 'stab ',
         ciyi: 'vt. 刺；戳n. 刺；戳 ',
         liju1: 'Somebody stabbed him in the stomach.',
         chinese1: '有人刺了他的腹部。',
         liju2: 'Good friends stab you in the front. ',
         chinese2: '当面刺痛你的是你的好朋友。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3113',
         word: 'stability ',
         ciyi: 'n. 稳定性；坚定 ',
         liju1: 'Peace and stability in the world need the active involvement of China. ',
         chinese1: '世界和平和稳定需有中国的积极参与。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3114',
         word: 'stable ',
         ciyi: 'n. 马厩；牛棚a. 稳定的，安定的 ',
         liju1: 'Our stable abuts against his dwelling. ',
         chinese1: '我们的马厩和他的住所毗连。',
         liju2: 'The price of oil should remain stable for the rest of 1992.',
         chinese2: '石油价格在1992年余下时间里应该保持稳定。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3115',
         word: 'stack ',
         ciyi: 'n. 堆；堆叠vt. 使堆叠；堆起',
         liju1: ' There were stacks of books on the bedside table and floor.',
         chinese1: '床头桌上和地板上有一摞摞的书。',
         liju2: 'The cereals should be stacked when drying up.',
         chinese2: '谷物应在彻底干透后再堆起。',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3116',
         word: 'stadium ',
         ciyi: 'n. 体育场 ',
         liju1: 'The stadium is oriented south and north. ',
         chinese1: '那个体育场是南北走向。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3117',
         word: 'staff',
         ciyi: 'n. 全体职员；参谋部；棒vt. 给…配备职员',
         liju1: 'The outpatient programme has a staff of six people.',
         chinese1: '这个门诊部有6名员工。',
         liju2: 'The President enters, followed by his Chief of staff and the Secretary of Defense.',
         chinese2: '总统进来了，后面跟着参谋部长和国防部长。',
         liju3:'The elderly woman walked with a staff.',
         chinese3:'老奶奶拄着拐杖走路。',
          liju4:'He staffed my office with two secretaries.',
         chinese4:'他给我的办公室安排了两名秘书。',
	   }
	  ,
	   {
         id: '3118',
         word: 'stagger ',
         ciyi: 'vt. 使吃惊；使交错；使犹豫vi. 蹒跚；犹豫n. 蹒跚；踉跄',
         liju1: 'He was staggered by her bold act.',
         chinese1: '她的大胆举动令他目瞪口呆。',
         liju2: 'They planned to stagger our rehearsing hours.',
         chinese2: '他们打算错开我们的排演时间。',
         liju3:'The baby dog staggered to me.',
         chinese3:'小狗娃蹒跚着朝我走来。',
          liju4:'The drunkard gave a stagger when he stood up.',
         chinese4:'醉鬼站起来的时候踉跄了一下。'
	  }
	  ,
	   {
         id: '3119',
         word: 'stagnant ',
         ciyi: 'a. 停滞的；不景气的 ',
         liju1: 'Their national economy is stagnant. ',
         chinese1: '他们的国家经济停滞不前。',
         liju2: 'When credit is tight as it is now, they can be stagnant for years. ',
         chinese2: '如果当时信贷像现在这样紧的话，他们可能好几年都不景气了。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3120',
         word: 'stain',
         ciyi: 'vt. 沾污；败坏；给…着色n. 污点；瑕疵 ',
         liju1: 'His sheet was stained with blood running from his nose.',
         chinese1: '他的床单沾满了他的鼻血。',
         liju2: 'Her crimes stained the family honor.',
         chinese2: '他的罪行玷污了家族的名誉。',
         liju3:'The foot of the wall should be stained brown.',
         chinese3:'墙脚根应该漆成褐色。',
        liju4:'Remove stains by soaking in a mild solution of bleach.',
         chinese4:'用温和的漂白溶液浸泡以去除污渍。'
	   }
	  ,
	   {
         id: '3121',
         word: 'staircase/stairway',
         ciyi: 'n. 楼梯 ',
         liju1: 'Tongues of flame leaped up the stairway. ',
         chinese1: '火舌沿楼梯迅速向上蔓延。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3122',
         word: 'stake ',
         ciyi: 'n. 桩，棍子；赌注；利害关系；风险',
         liju1: 'His arms were tied to wooden stakes to hold him flat.',
         chinese1: '他的双臂被绑在木桩上以便使他平躺着。',
         liju2: 'The game was usually played for high stakes between two large groups.',
         chinese2: '这种游戏通常是两大组人为赢得大的赌注而进行的。',
         liju3:'He was eager to return to a more entrepreneurial role in which he had a big financial stake in his own efforts.',
         chinese3:'他渴望回到更具企业家性质的角色，这样他的努力就跟自己有大的金融利害关系。'
       }
	  ,
	   {
         id: '3123',
         word: 'stale',
         ciyi: 'a. 不新鲜的；变质的；陈腐的 ',
         liju1: 'Their daily diet consisted of a lump of stale bread, a bowl of rice, and stale water.',
         chinese1: '他们的日常饮食包括一块不新鲜的面包、一碗米饭，还有不新鲜的水。',
         liju2: 'The editor criticized the journalist’s stale style.',
         chinese2: '编辑批评了那位新闻记者的陈词滥用。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3124',
         word: 'stalk',
         ciyi: 'n. 茎，秆，梗v. 悄悄地跟踪，高视阔步走',
         liju1: 'A single pale blue flower grows up from each joint on a long stalk.',
         chinese1: '一根长梗的每个节上都长出了一朵淡蓝色的花。',
         liju2: 'He stalks his victims like a hunter after a deer.',
         chinese2: '他像猎人跟踪鹿一样悄悄跟踪他的受害者们。',
         liju3:'He stalked up the rostrum.',
         chinese3:'他昂首阔步走上了主席台。'
       }
	  ,
	   {
         id: '3125',
         word: 'stall ',
         ciyi: 'n. 货摊；畜栏vi. 停止，停转 ',
         liju1: 'My friend who has a food stall in the caravanserai is no exception and grins at me with an entire set of glinting gold.',
         chinese1: '我的一位朋友也不例外，他在商队旅馆里有一食品摊位，正朝我咧嘴微笑，露出一排金色的牙齿。',
         liju2: 'Bill threw some hay into the horse’s stall.',
         chinese2: '比尔往马厩里扔了些干草。',
         liju3:'On the way to London, we had to stall for our car to fuel up.',
         chinese3:'在去伦敦的途中，我们得停下来给车加点儿油。'
       }
	  ,
	   {
         id: '3126',
         word: 'standpoint ',
         ciyi: 'n. 立场；观点',
         liju1: 'Standing under the outstanding rock I misunderstood his standard standpoint.',
         chinese1: '站在突出的岩石下,我误解了他的标准立场。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3127',
         word: 'staple',
         ciyi: 'n. 主食 ；主要产品；订书钉a. 主要的，经常需要的vt. 把…订起来',
         liju1: 'Fish is a staple in the diet of many Africans.',
         chinese1: '鱼是许多非洲人饮食中的主食。',
         liju2: 'Rice is the staple grain and fish form an important part of the diet.  ',
         chinese2: '稻谷是主要的粮食，鱼也是饮食中常有的重要组成部分。',
         liju3:'Staple some sheets of paper together into a book.',
         chinese3:'用订书钉把一些纸张订成一本。',
         liju4:'Potatoes are an important and staple crop in many parts of the world.',
         chinese4:'马铃薯是世界上很多地区的主要农作物。',
	      liju5:'The secretary stapled the document with that one.',
         chinese5:'秘书将这份文件同那份订在一起。'
	     }
     , 
	   {
         id: '3128',
         word: 'startle  ',
         ciyi: 'vt. 使惊奇；惊吓',
         liju1: "Let's hide ourselves behind the door and startle her.",
         chinese1: '藏在门后面，咱们吓她一下。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3129',
         word: 'starve ',
         ciyi: 'v. 使饿死；挨饿 ',
         liju1: 'Many children in the orphanage were starved often.',
         chinese1: '孤儿院中的孩子们常常挨饿。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3130',
         word: 'state',
         ciyi: 'n. 国家；州；状态vt. 规定；声明；陈述',
         liju1: ' Mexico is a secular state and does not have diplomatic relations with the Vatican.',
         chinese1: '墨西哥是个非宗教国家，和梵蒂冈没有外交关系。',
         liju2: 'For the first few months after Daniel died, I was in a state of clinical depression.',
         chinese2: '丹尼尔去世后的头几个月，我一直处在临床抑郁状态。',
         liju3:'Unless otherwise stated, you must run the tasks here on each and every node of the cluster.  ',
         chinese3:'除非特别声明，您必须在集群中的每一个节点上运行这里的任务。',
          liju4:'The price of such product was stated by the government.',
         chinese4:'这类产品的价格是由政府规定的。'
	  }
	  ,
	   {
         id: '3131',
         word: 'statement',
         ciyi: 'n. 声明；陈述 ',
         liju1: "The statement by the military denied any involvement in last night's attack.",
         chinese1: '军方的声明否认其与昨晚的袭击有任何关系。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3132',
         word: 'statesman  ',
         ciyi: ' n. 政治家；国务活动家 ',
         liju1: 'Hamilton is a great statesman and political thinker.',
         chinese1: '汉密尔顿是个伟大的政治家和政治思想家。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3133',
         word: 'static(al) ',
         ciyi: 'a. 静止的；静电的 ',
         liju1: 'Film divides motion up into a series of static images.',
         chinese1: '电影将动作分解为一系列静态画面。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3134',
         word: 'stationary ',
         ciyi: 'a. 固定的；静止的 ',
         liju1: 'Stationary cars in traffic jams cause a great deal of pollution.',
         chinese1: '交通堵塞中停止不前的车辆造成大量污染。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3135',
         word: 'stationery ',
         ciyi: 'n. 文具 ',
         liju1: 'She travels in stationery.',
         chinese1: '她到处推销文具用品。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3136',
         word: 'statistics ',
         ciyi: 'n. 统计；统计学；统计资料 ',
         liju1: "Statistics suggest that the population of this country will be double in ten years' time.",
         chinese1: '统计显示，这个国家人口在10年内将增加一倍。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3137',
         word: 'statue ',
         ciyi: 'n. 雕像，塑像 ',
         liju1: 'She superseded the old statue. ',
         chinese1: '她把那个旧的塑像扔掉了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3138',
         word: 'status',
         ciyi: 'n. 地位；状态；情形；重要身份 ',
         liju1: 'People of higher status tend more to use certain drugs.',
         chinese1: '社会地位较高的人更倾向于使用某些药物。',
         liju2: 'The council unanimously directed city staff to prepare a status report on the project.',
         chinese2: '该委员会成员一致要求市政人员准备一份关于这项工程的进展状况报告。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3139',
         word: 'statute',
         ciyi: 'n. 法规；法令；条例 ',
         liju1: 'The statute, required of all schools, outlines the school’s operations. ',
         chinese1: '所有学校都需要制定条例以规范学校的运行。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3140',
         word: 'steady ',
         ciyi: 'a. 稳定的；不变的；坚定的vt. 使稳定；稳固 ',
         liju1: 'Despite the steady progress of building work, the campaign against it is still going strong.',
         chinese1: '尽管建筑工程稳步进行，罢工运动却仍然高涨。',
         liju2: 'Bell fixed his partner with a steady look.',
         chinese2: '贝尔表情坚定地注视着自己的搭档。',
         liju3:'He steadied a coin on the top of the basketball bank.',
         chinese3:'他把一枚硬币稳稳地放在篮板的顶上面。'
       }
	  ,
	   {
         id: '3141',
         word: 'steak ',
         ciyi: ' n. 牛排；肉排；鱼排 ',
         liju1: 'The steak burned around the edges. ',
         chinese1: '牛排边缘炸焦了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3142',
         word: 'steep ',
         ciyi: 'a. 陡峭的 ',
         liju1: 'San Francisco is built on 40 hills and some are very steep.',
         chinese1: '旧金山建在40座山丘上，其中有些非常陡峭。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3143',
         word: 'steer ',
         ciyi: 'vt.控制，驾驶；指导 ',
         liju1: 'What is it like to steer a ship this size?',
         chinese1: '驾驶这样大小的船会怎么样呢？',
         liju2: 'The teacher steered the teengers away from drugs.',
         chinese2: '老师教导青少年遥远离毒品。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3144',
         word: 'stem',
         ciyi: 'n. 干；词干vi. 起源于某事物；发生于 ',
         liju1: "The plant's stem curled round the branches of the tree.",
         chinese1: '那植物的茎缠绕在树枝上。',
         liju2: 'Swim is the stem of swimming and swimmer.',
         chinese2: 'Swim是swimming和swimmer的词干。',
         liju3:'All my problems stem from drink.',
         chinese3:'我所有的问题都源于酗酒引起的。'
       }
	 ,
	   {
         id: '3145',
         word: 'stereo',
         ciyi: 'n. 立体声 a. 立体声的 ',
         liju1: ' This program is being broadcast in stereo.',
         chinese1: '这个节目正在用立体声播放。',
         liju2: 'The captain listened to the stereo radio and steered the steamer careful into the harbor.',
         chinese2: '船长一边收听立体声收音机，一边小心翼翼的掌舵将船驶进海港。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3146',
         word: 'stereotype',
         ciyi: 'vt. 成固定形象n. 陈规，老套 ',
         liju1: 'It’s wrong to stereotype politicians, as they were different from each other.',
         chinese1: '对政治家形成固定看法是错误的，因为他们各不相同。',
         liju2: 'The new generation always tried to smash the stereotype.',
         chinese2: '新一代人总是试图打破陈规。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3147',
         word: 'stern',
         ciyi: 'n. 船尾；末端a. 严厉的；坚定的；苛刻的 ',
         liju1: 'Ruth sat near her father in the stern.',
         chinese1: '露丝靠着父亲坐在船尾。',
         liju2: 'The stern mother has gained the upper hand of the family.',
         chinese2: '这位严厉的母亲掌管了全家。',
         liju3:'Jim has a stern resolve to conquer any problem.',
         chinese3:'吉姆下定决心克服任何困难。'
       }
, 
	  {
         id: '3148',
         word: 'steward ',
         ciyi: 'n. 管家；乘务员； ',
         liju1: 'The captain together with the steward stuck out the stiff sailing.',
         chinese1: '船长和乘务员一起将这艰难的航行坚持到底。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3149',
         word: 'stiff',
         ciyi: 'a. 硬的；拘谨的；艰难的',
         liju1: ' The furniture was stiff, uncomfortable, too delicate, and too neat.',
         chinese1: '这家具又硬又不舒服，过分易碎且过于光洁。',
         liju2: 'In the classroom the teacher is stiff and stern but after class he unbends. ',
         chinese2: '在教室中教师是拘谨而且严肃的，但在课后他便变得平易近人了。',
         liju3:'GRE is a stiff examination for me.',
         chinese3:'GRE考试对我来说难度很大。'
       }
	  ,
	   {
         id: '3150',
         word: 'stimulate',
         ciyi: 'vt. 鼓舞，激励；刺激 ',
         liju1: ' Your encouragement will stimulate me to further efforts. ',
         chinese1: '你的鼓励会激发我进一步努力。',
         liju2: "America's priority is rightly to stimulate its economy.",
         chinese2: '美国的首要任务自然是刺激经济。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3151',
         word: 'sting ',
         ciyi: ' n. 刺痛；刺vt. 刺；刺痛 ',
         liju1: "This won't hurt – you will just feel a little sting.",
         chinese1: '不会痛的–你只会觉得被轻轻刺了一下。',
         liju2: 'He was stung by a wasp.',
         chinese2: '他被马蜂螫了一下。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3152',
         word: 'stir ',
         ciyi: 'vt. 搅拌；摇动；煽动 ',
         liju1: 'Mix this oil with the paint and stir well.',
         chinese1: '把这油和漆搀在一起，好好搅拌。',
         liju2: 'The speaker stirred people with an emotional speech.',
         chinese2: '演讲者用富于情感的演说煽动观众。',
         liju3:'The soft breeze stirs the leaves.',
         chinese3:'柔和的微风摇动着树叶。'
       }
	  ,
	   {
         id: '3153',
         word: 'stitch',
         ciyi: 'n. 针脚，一针vt. 缝，缝合 ',
         liju1: 'Her mother counted the stitches on her knitting needles.',
         chinese1: '她的母亲数了数编织针上的针数。',
         liju2: 'Fold the fabric and stitch the two layers together.',
         chinese2: '把布料对折，将两层缝在一起。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3154',
         word: 'stock',
         ciyi: 'n. 股份，股票；库存；现货 vt. 储存 ',
         liju1: 'The stock market will soon rally. ',
         chinese1: '股票行情不久即将回升。',
         liju2: 'When a nearby shop burned down, our stock was ruined by smoke.',
         chinese2: '附近一家商店被烧成灰烬，我们的存货也被浓烟熏坏了。',
         liju3:'I stocked many facial tissues in my shop.',
         chinese3:'我的店里有大量面巾纸的存货。'
       }
	  ,
	   {
         id: '3155',
         word: 'stocking ',
         ciyi: ' n. 长袜 ',
         liju1: 'The Christmas stocking bulged with goodies. ',
         chinese1: '圣诞节袜子里塞满了好吃的东西。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3156',
         word: 'stool',
         ciyi: 'n. 凳子',
         liju1: ' She sat in the sofa with her legs propping on a small stool.',
         chinese1: '她坐在沙发上，双腿搁在一张小凳上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3157',
         word: 'stoop',
         ciyi: 'vi. 弯腰；屈服n. 弯腰，屈背 ',
         liju1: ' He stooped and put down his gun.',
         chinese1: '他弯下腰放下了他的枪。',
         liju2: 'He was very tall and had to stoop slightly to peer into the car.  ',
         chinese2: '他长得很高，稍微弯腰才能看到车里。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3158',
         word: 'storage ',
         ciyi: 'n. 存储；仓库；贮藏所；库房',
         liju1: 'Some of the space will at first be used for storage.',
         chinese1: '一些空间将首先用于贮藏。',
         liju2: 'It’s quite strange that the door to the food storage was unlocked.',
         chinese2: '食品库房的门竟然是敞开的，真是奇怪。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3159',
         word: 'stove',
         ciyi: 'n. 火炉；窑；温室',
         liju1: 'They sat down around the stove, smoking and cracking jokes.',
         chinese1: '他们坐在火炉周围，边吸烟边说笑话。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3160',
         word: 'straightforward ',
         ciyi: 'a. 简单的；坦率的ad. 坦率地',
         liju1: ' The question seemed straightforward enough.',
         chinese1: '这个问题看起来够容易的了。',
         liju2: 'She is very blunt, very straightforward, and very honest.',
         chinese2: '她直言不讳，非常坦率，也非常诚实。',
         liju3:'The film star explained straightforward the scandals about him in press conference.',
         chinese3:'这位影星在记者招待会上坦率地解释了有关自己的各种绯闻。'
       }
	 ,
	   {
         id: '3161',
         word: 'strain',
         ciyi: 'n. 紧张；拉力vi. 尽力；用力拉vt.拉紧；扭伤 ',
         liju1: 'His confidence cracked under the strain. ',
         chinese1: '他因紧张而失去信心。',
         liju2: 'The rope broke easily under strain.',
         chinese2: '绳子在拉力的作用下很容易断。',
         liju3:'He strained and raised the barbell of 205 kilograms.',
         chinese3:'他奋力一举，举起了205公斤重的杠铃。',
          liju4:'He strained against the ropes that held the dog.',
         chinese4:'他使劲拉了拴狗的绳子。',
	      liju5:'She strained her child close to her breast.',
         chinese5:'她把孩子紧紧地搂在怀里。',
	     liju6:'He strained his muscle in the match.',
         chinese6:'他在那次比赛中拉伤了肌肉。'
	   }
	 ,
	   {
         id: '3162',
         word: 'strap',
         ciyi: 'vt. 捆扎n. 带；皮带；鞭打 ',
         liju1: ' He was strapped onto the chair.',
         chinese1: '他被绑在了椅子上。',
         liju2: "The rough strap galled the horse's skin.",
         chinese2: '粗糙的皮带磨伤了马的皮肤。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3163',
         word: 'strategy',
         ciyi: 'n. 战略，策略 ',
         liju1: 'Tactics differs from strategy. ',
         chinese1: '战术有别于战略。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3164',
         word: 'straw ',
         ciyi: ' n. 稻草；吸管',
         liju1: 'He thatched his hut with straw. ',
         chinese1: '他用稻草给小屋盖顶。',
         liju2: 'After it stopped, a straw came down through the crack.',
         chinese2: '声音停止时，一根吸管穿过裂缝伸了进来。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3165',
         word: 'strawberry ',
         ciyi: ' n. 草莓；草莓色',
         liju1: 'He let her feast on the cracker with strawberry jam. ',
         chinese1: '他给饼干配上草莓果酱，让内奥米美食一餐。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3166',
         word: 'stream ',
         ciyi: 'n. 溪流；流动 vi. 流出；涌进 ',
         liju1: 'There was a small stream at the end of the garden.',
         chinese1: '这个花园的尽头有一条小溪。',
         liju2: 'Tears streamed down their faces.',
         chinese2: '泪水顺着他们的脸颊流下来。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3167',
         word: 'streamline ',
         ciyi: 'a. 流线型的 ',
         liju1: 'Can you streamline this kind of airship? ',
         chinese1: '你能把这种飞艇设计成流线型的吗?',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3168',
         word: 'strengthen',
         ciyi: 'vt.加强；巩固 ',
         liju1: 'Giving the president the authority to go to war would strengthen his hand for peace.',
         chinese1: '给予总统发动战争的权利会加强他对于和平的掌控权。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3169',
         word: 'strenuous ',
         ciyi: 'a. 紧张的；艰苦的；费力的',
         liju1: ' Strenuous efforts had been made to improve conditions in the jail.',
         chinese1: '为改善那家监狱里的条件已做了艰苦的努力。',
         liju2: 'Maintaining such a raveled page is strenuous. ',
         chinese2: '维护这样混乱的页面十分费力。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3170',
         word: 'stress',
         ciyi: 'n. 强调；压力；重音；应力vt.强调；使紧张',
         liju1: 'The spokesman stressed that the measures did not amount to an overall ban.',
         chinese1: '发言人强调说，这些措施并不等于全面禁止。',
         liju2: 'The silver was deformed under stress. ',
         chinese2: '银在压力作用下变了形。',
         liju3:'The stress of the Spanish word is on the first syllable.',
         chinese3:'这个西班牙语单词的重音在第一个字节上。',
         liju4:'The strong wind put great stress on the building.',
         chinese4:'大风作用于大楼，产生了巨大应力。',
	     liju5:'He stressed he had the power of life and death over the hostages in the building.',
         chinese5:'他强调他对大楼内的人质有生杀大权。'
	   }
	  ,
	   {
         id: '3171',
         word: 'stretch',
         ciyi: 'vt. 拉长，伸开vi. 伸展n. 伸展，延伸；一段时间',
         liju1: 'Jane doesn’t know why her sweaters are always stretched.',
         chinese1: '简不知道自己的毛衣为什么会变长。',
         liju2: "She's stretched out in the sun.",
         chinese2: '她伸开四肢躺在太阳下。',
         liju3:'Vast meadows stretch to the east. ',
         chinese3:'辽阔的草场向东伸展。',
          liju4:'The forest stretches for miles.',
         chinese4:'森林绵延数英里。'
	   }
      ,
       {
         id: '3172',
         word: 'stride  ',
         ciyi: ' n. 大步；迈步vi. 跨过；大步行走 ',
         liju1: 'With every stride, runners hit the ground with up to five times their body-weight.',
         chinese1: '赛跑者的每一步都以5倍于他们体重的力量撞击地面。',
         liju2: 'He strode about the meeting room.',
         chinese2: '他在会议室内大步地来回踱步。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3173',
         word: 'strife',
         ciyi: 'n. 冲突；争吵；不和；纷争 ',
         liju1: ' Money is a major cause of strife in many marriages.',
         chinese1: '钱在许多婚姻中是导致冲突的一个主要原因。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3174',
         word: 'striking ',
         ciyi: ' a. 显著的，突出的，惊人的 ',
         liju1: 'The most striking feature of those statistics is the high proportion of suicides.',
         chinese1: '那些统计数据最显著的特征是高自杀率。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3175',
         word: 'string',
         ciyi: 'n. 线，细绳；一串 vt. 扎，悬挂 ',
         liju1: ' He held out a small bag tied with string.',
         chinese1: '他递出一个用细绳系着的小包。',
         liju2: 'She wore a string of pearls around her neck.',
         chinese2: '她戴了一串珍珠在她的脖子上。',
         liju3:'Lanterns were strung in the trees around the pool.',
         chinese3:'水池周围的书上悬挂着灯笼。'
       }
     , 
	   {
         id: '3176',
         word: 'strip ',
         ciyi: ' vt. 剥夺；剥去n. 带状物；脱衣舞',
         liju1: 'He stripped an orange of its rind for me.',
         chinese1: '他为我剥去了橘子皮。',
         liju2: 'There was a strip of land suitable for cultivating flowers in the yard.',
         chinese2: '院子里有一窄条地很适合种花。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3177',
         word: 'stripe',
         ciyi: 'n. 条纹，斑纹',
         liju1: 'She wore a bright green jogging suit with a white stripe down the sides.',
         chinese1: '她穿了一套侧边有一条白色条纹的艳绿色慢跑服。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3178',
         word: 'strive ',
         ciyi: 'vi. 努力；奋斗；抗争 ',
         liju1: 'He strives hard to keep himself very fit.',
         chinese1: '他努力使自己保持非常的健康。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3179',
         word: 'stroke ',
         ciyi: 'n. 中风；一笔；一次努力；击；抚摸；vt. 抚摸',
         liju1: 'He had a minor stroke in 1987, which left him partly paralysed.',
         chinese1: '他在1987年患了轻度中风，这使他半身不遂了。',
         liju2: 'Fill in gaps by using short, upward strokes of the pencil.',
         chinese2: '用铅笔画出短的、向上的笔画来填空。',
         liju3:'Compton was sending the ball here, there, and everywhere with each stroke.',
         chinese3:'康普顿把球发到这儿，发到那儿，每一次击球都打到不同地方。',
         liju4:'I tried to calm the frightened puppy with soft strokes.',
         chinese4:'我轻轻地抚摸着那只受惊的小狗，试图让它安静下来。',
	     liju5:'She stroked my head as if I were her son.',
         chinese5:'她温柔地抚摸着我的头，就像是在抚摸她亲生儿子一样。'
	   }
, 
	  {
         id: '3180',
         word: 'stroll',
         ciyi: 'n/vi. 漫步；闲逛；巡回演出',
         liju1: 'I decided to take a stroll in the park after dinner.',
         chinese1: '我决定晚饭后去公园散步。',
         liju2: 'He strolled along the beach along.',
         chinese2: '他独自一人在海滩上闲荡。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3181',
         word: 'structure ',
         ciyi: 'n. 建筑物；结构；构造vt. 组织；安排',
         liju1: 'About half of those funds have gone to repair public roads, structures, and bridges.',
         chinese1: '那些资金中大约一半用于维修公路、建筑物和桥梁。',
         liju2: "The typical family structure of Freud's patients involved two parents and two children.",
         chinese2: '弗洛伊德的病人们的典型家庭结构包括一对父母和两个孩子。',
         liju3:'It’s not an easy work to structure a homeschool curriculum schedule.',
         chinese3:'安排在家教学的课程并不是一件容易的事。'
       }
	  ,
	   {
         id: '3182',
         word: 'stubborn ',
         ciyi: 'a. 顽固的；顽强的；难应付的 ',
         liju1: 'He is a stubborn character used to getting his own way.',
         chinese1: '他是一个顽固的人，过去常常随心所欲。',
         liju2: 'This treatment removes the most stubborn stains.',
         chinese2: '这种处理去掉了最难以去除的污渍。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3183',
         word: 'studio ',
         ciyi: ' n. 工作室；画室；电影制片厂 ',
         liju1: 'She was in her studio again, painting onto a large canvas.',
         chinese1: '她又在她的工作室里了，在一块大帆布上画画。',
         liju2: 'The actor has signed with a film studio.',
         chinese2: '这位演员已与电影制片厂草签了（受雇）合约。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3184',
         word: 'stuff ',
         ciyi: 'n. 东西；材料vt. 塞满；填塞',
         liju1: "I'd like some coffee, and I don't object to the powdered stuff if it's all you've got.",
         chinese1: '我想要点咖啡，如果你们只有粉状的东西，我也不反对。',
         liju2: 'I stuffed my hands in my pockets.',
         chinese2: '我把双手塞进了我的口袋里。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3185',
         word: 'stumble ',
         ciyi: 'vi.绊，跌；结结巴巴地说话n. 绊倒 ',
         liju1: 'She nearly fell down by stumbling over my stretched leg.',
         chinese1: '她绊在我伸出的腿上，险些跌倒。',
         liju2: 'The boy stumbled through a recitation.',
         chinese2: '那个男孩结结巴巴地背诵。',
         liju3:'Mr. Black made a stumble in the doorway.',
         chinese3:'布莱克先生在门口绊了一跤。'
       }
	  ,
	   {
         id: '3186',
         word: 'stun',
         ciyi: 'vt.打昏；使…昏迷；使…震惊',
         liju1: 'The blow on his head stunned him for a moment.',
         chinese1: '击在他头上的一拳使他有一阵儿昏了过去。',
         liju2: 'Her wit stunned the audience.',
         chinese2: '她的风趣令观众赞叹不已。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3187',
         word: 'sturdy',
         ciyi: 'a. 坚定的；强健的；结实的 ',
         liju1: 'She was a short, sturdy woman in her early sixties.',
         chinese1: '她是一位六十出头、矮小结实的女人。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3188',
         word: 'style  ',
         ciyi: ' n. 风格；式样；字体',
         liju1: ' She has a style of her own in everything. ',
         chinese1: '她在各方面都有自己的独特风格。',
         liju2: 'I like this style. ',
         chinese2: '我看上了这个式样。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3189',
         word: 'subjective ',
         ciyi: ' a. 主观的；个人的 ',
         liju1: 'We know that taste in art is a subjective matter.',
         chinese1: '我们知道艺术品味是个主观问题。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3190',
         word: 'submarine',
         ciyi: 'n. 潜水艇a. 海底的；水下的 ',
         liju1: 'The submarine is driven by nuclear power. ',
         chinese1: '这艘潜艇是由核动力驱动的。',
         liju2: 'The diver moves forward a vast submarine cavern.',
         chinese2: '潜水员朝海底深处游去。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3191',
         word: 'submerge',
         ciyi: 'vt. 淹没；沉浸vi. 潜入水中 ',
         liju1: 'The whole village and the fields have been submerged by floods.',
         chinese1: '洪水已淹没了整个村庄和农田。',
         liju2: 'Then he submerged again.',
         chinese2: '然后，他又潜入了水下。',
         liju3:'',
         chinese3:''
       }
     , 
	   {
         id: '3192',
         word: 'submit ',
         ciyi: 'vt. 使服从；提交vi.服从；顺从 ',
         liju1: ' A sketch of the long report by the budget committee was submitted to the mayor.',
         chinese1: '预算委员会向市长递交了一份长篇报告的梗概。',
         liju2: 'Should you submit yourself to him?',
         chinese2: '你应该顺从他吗?',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3193',
         word: 'subordinate ',
         ciyi: 'n. 下属，部属a. 从属的；次要的 ',
         liju1: ' Haig tended not to seek guidance from subordinates.',
         chinese1: '黑格不想向下属们寻求指导。',
         liju2: 'It was an art in which words were subordinate to images.',
         chinese2: '它是一种语言比图像次要的艺术。',
         liju3:'',
         chinese3:''
       }
	 ,
	   {
         id: '3194',
         word: 'subscribe ',
         ciyi: 'vi. 订阅；赞成；签署 ',
         liju1: ' If you are not a subscriber, you can subscribe today. ',
         chinese1: '如果您不是一个订阅者，您可以现在订阅。',
         liju2: 'I will subscribe to your decision.',
         chinese2: '我会赞同你的决定。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3195',
         word: 'subsequent ',
         ciyi: 'a. 后来的，随后的 ',
         liju1: 'Neither the event producer nor the event itself participates in the determination of any subsequent execution processing. ',
         chinese1: '事件的创建者和事件本身都不会参与到随后的任何执行处理决定中。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
, 
	  {
         id: '3196',
         word: 'subsidy ',
         ciyi: ' n. 补贴；津贴；补助金',
         liju1: 'The great advantage of a subsidy, indeed, from the standpoint of the public, is that it makes this fact so clear. ',
         chinese1: '站在公众角度而言，补贴的最大好就是它使得财富专业的这样一个事实变得如此清晰。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3197',
         word: 'substance ',
         ciyi: 'n. 物质；财产；大意；要旨 ',
         liju1: "There's absolutely no regulation of cigarettes to make sure that they don't include poisonous substances.",
         chinese1: '绝对没有确保香烟不含有毒物质的规定。',
         liju2: 'Mary intended to marry a man of substance.',
         chinese2: '玛丽想嫁个有钱人。',
         liju3:"The substance of his discussions doesn't really matter.",
         chinese3:'他讨论的要旨实际并不重要。'
       }
	  ,
	   {
         id: '3198',
         word: 'substantial ',
         ciyi: 'a. 可观的；实质的；内容充实的；结实的 ',
         liju1: ' We are trying to make some of that information more public because it’s very, very substantial.  ',
         chinese1: '我们正在努力向更多的公众公开这些信息，因为信息量非常可观。',
         liju2: 'The reforms have made substantial headway. ',
         chinese2: '改革取得了实质的进展。',
         liju3:'Corson observed the castle, a substantial 17th century mansion.',
         chinese3:'科森注视着这座城堡，一栋坚固的17世纪的官邸。'
       }
	  ,
	   {
         id: '3199',
         word: 'substitute  ',
         ciyi: 'n. 代用品；代替者vt. 代替；替换 ',
         liju1: "It's okay to substitute vegetable oil for butter.",
         chinese1: '用植物油代替黄油也一样。',
         liju2: 'The coach let me substitute No.9 in the second half.',
         chinese2: '下半场，教练让我替下了9号。',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3200',
         word: 'subtle ',
         ciyi: 'a. 微妙的；精巧的；敏感的 ',
         liju1: ' Many of the changes we make are so subtle that very few people notice them. ',
         chinese1: '我们所做的很多改变是很微妙的，以至于很少有人注意到它们。',
         liju2: 'The customer liked the subtle style of the room’s décor.',
         chinese2: '顾客喜欢这个房间精巧的装潢。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3201',
         word: 'subtract  ',
         ciyi: 'vt. 减去；扣掉',
         liju1: 'Mandy subtracted the date of birth from the date of death.',
         chinese1: '曼迪从死亡的日期减去了出生的日期。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3202',
         word: 'suburb ',
         ciyi: 'n. 郊区；边缘 ',
         liju1: 'His family lived in the suburbs.',
         chinese1: '他家住在郊区。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3203',
         word: 'subway ',
         ciyi: 'n. 地铁；地道 ',
         liju1: ' We can subway to the station. ',
         chinese1: '我们可以乘地铁去车站。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
      ,
       {
         id: '3204',
         word: 'succession ',
         ciyi: 'n. 连续；系列；继位；继承权 ',
         liju1: 'Adams took a succession of jobs which have stood him in good stead.',
         chinese1: '亚当斯做了一连串对他很有利的工作。',
         liju2: 'There was a dispute about the rightful succession to the throne. ',
         chinese2: '对于王位的合法继承权有过一场争论。',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3205',
         word: 'successive',
         ciyi: 'a. 连续的；连接的',
         liju1: ' Using this method of successive division, you can turn your design into components. ',
         chinese1: '按照这种连续的划分方法，可以将设计转换为组件。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3206',
         word: 'successor ',
         ciyi: 'n. 继承者；后继承人 ',
         liju1: 'His successor inherited a lot of problems from him. ',
         chinese1: '他的继任者从他手中接过不少问题。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
	  ,
	   {
         id: '3207',
         word: 'suck ',
         ciyi: 'vt. 吸吮；吸取 ',
         liju1: 'They waited in silence and sucked their sweets.',
         chinese1: '他们静静地等着，吮着糖果。',
         liju2: '',
         chinese2: '',
         liju3:'',
         chinese3:''
       }
    ]
  }
  return arr
}
