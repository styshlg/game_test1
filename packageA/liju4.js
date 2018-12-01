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
function searchliju1(id) {
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


      ,
      {
        id: '2117',
        word: 'mug',
        ciyi: ' n. 杯子，大杯vt. 给…拍照；行凶抢劫',
        liju1: 'He spooned instant coffee into two of the mugs.',
        chinese1: '他用勺子把速溶咖啡舀进其中两个大杯里。',
        liju2: 'I was walking out to my car when this guy tried to mug me.',
        chinese2: '这家伙企图抢劫我的时候，我正向我的汽车走去。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2118',
        word: 'multiple ',
        ciyi: 'a. 多重的；多样的；许多的n. 倍数',
        liju1: 'These suites have served you well throughout the development process and in multiple environments.  ',
        chinese1: '在整个开发过程和多个环境中，这些组合为您很好地服务。',
        liju2: 'Their numerical system, derived from the Babylonians, was based on multiples of the number six.',
        chinese2: '他们的数制是袭用巴比伦人的，以数字6的倍数为基准。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2119',
        word: 'multiply',
        ciyi: 'vt. 乘；使增加；使繁殖；使相乘',
        liju1: 'This will multiply our chances of success.',
        chinese1: '这将增加我们成功的机会。',
        liju2: 'These creatures can multiply quickly.',
        chinese2: '这些生物能迅速大量繁殖。',
        liju3: 'To reduce pounds to pence you multiply by a hundred.',
        chinese3: '镑乘以一百就折合成便士。'
      }
      ,
      {
        id: '2120',
        word: 'multitude ',
        ciyi: 'n. 群众；多数，众多，大量',
        liju1: 'There are a multitude of small, quiet roads to cycle along.',
        chinese1: '有多条可以骑自行车的僻静小路。',
        liju2: 'The hideous truth was hidden from the multitude.',
        chinese2: '向大众隐瞒了丑恶的真相。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2121',
        word: 'municipal ',
        ciyi: 'a. 市政的，市立的，市的',
        liju1: 'The municipal authorities gave the go-ahead for the march.',
        chinese1: '市政当局批准了此次游行。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2122',
        word: 'murmur ',
        ciyi: 'n. 低语；低语声；低声抱怨；潺潺声vi. 低声说（某事）；私下抱怨，咕哝',
        liju1: 'The workers murmured against the treatment they received.',
        chinese1: '工人们抱怨所受的待遇。',
        liju2: 'He turned and murmured something to the professor.',
        chinese2: '他转过身，小声对教授说了些什么。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2123',
        word: 'muscle',
        ciyi: ' n. 肌肉；体力',
        liju1: 'The dancing lessons will muscle my legs.',
        chinese1: '跳舞课会使我的腿部肌肉发达。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2124',
        word: 'muscular',
        ciyi: 'a. 肌肉的；肌肉发达的；强健的',
        liju1: 'Like most female athletes, she was lean and muscular.',
        chinese1: '像大多数女运动员一样，她精瘦而健壮。',
        liju2: 'At the end of the movie, the big and muscular killer appeared again!',
        chinese2: '在电影的结尾，那个高大而且肌肉发达的凶手又出现了！',
        liju3: 'Vitamin E foods increase the efficiency of the entire muscular system by promoting efficient use of Oxygen.',
        chinese3: '食物中的维生素E能提高肌肉系统的工作效率，有效地促进氧气利用。'
      }
      ,
      {
        id: '2125',
        word: 'mushroom ',
        ciyi: 'n. 蘑菇，伞菌；',
        liju1: 'This kind of mushroom is edible, but that kind is not.',
        chinese1: '这种蘑菇吃得，那种吃不得。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2126',
        word: 'mute ',
        ciyi: ' a. 哑的，缄默的；弱化的，微弱的vt. 减弱…的声音n. 哑巴；弱音器；闭锁音',
        liju1: 'He was mute, distant, and indifferent.',
        chinese1: '他缄默无言，对人疏远而且冷漠。',
        liju2: 'People spoke in nute voices before the meeting.',
        chinese2: '会前，人们轻声谈论着。',
        liju3: 'They muted the propaganda campaign later.',
        chinese3: '后来，他们降低了宣传运动的调子。'
       }
      ,
      {
        id: '2127',
        word: 'mutter ',
        ciyi: 'v. 咕哝；抱怨地说；低声含糊地说',
        liju1: 'She muttered against her husband.',
        chinese1: '她抱怨丈夫。',
        liju2: 'The old man muttered to himself.',
        chinese2: '老人喃喃自语',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2128',
        word: 'mutton',
        ciyi: 'n. 羊肉',
        liju1: 'She put a leg of mutton into the oven to roast it for supper.',
        chinese1: '她将一条羊腿放入烤箱准备晚饭吃烤肉。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2129',
        word: 'mutual ',
        ciyi: 'a. 共同的；相互的，彼此的',
        liju1: 'Democracy is based on good will and mutual understanding.',
        chinese1: '民主建立在善意和相互理解的基础上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2130',
        word: 'mysterious',
        ciyi: 'a. 神秘的；不可思议的；难解的',
        liju1: 'A mysterious illness confined him to bed for over a month.',
        chinese1: '一种怪病让他卧床一个多月。',
        liju2: 'The mysterious rider dissolved into the mists.',
        chinese2: '那个神秘的骑手在雾中消失了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2131',
        word: 'mystery ',
        ciyi: 'n.神秘，神秘的事物；推理小说，侦探小说',
        liju1: 'The story is wrapped in mystery.',
        chinese1: '故事被神秘的气氛笼罩着。',
        liju2: 'His fourth novel is a murder mystery set in London.',
        chinese2: '他的第4本小说是一个以伦敦为背景的凶杀疑案。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2132',
        word: 'myth',
        ciyi: 'n. 神话；虚构的人，虚构的故事，荒诞的说法',
        liju1: "'It's only a myth.'",
         chinese1: '这不过是个神话。',
        liju2: 'Contrary to the popular myth, women are not reckless spendthrifts.',
        chinese2: '与盛行的谬见相反，女人们并非挥霍无度。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2133',
        word: 'naïve ',
        ciyi: 'a. 天真的,幼稚的',
        liju1: 'Their view was that he had been politically naive.',
        chinese1: '他们的看法是，他在政治上曾是幼稚的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2134',
        word: 'naked',
        ciyi: 'a. 裸体的；无遮掩的，无装饰的',
        liju1: 'Her naked body was found wrapped in a sheet in a field.',
        chinese1: '她赤裸的尸体在野外被找到了，裹在一张床单里。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }

      ,
      {
        id: '2135',
        word: 'namely',
        ciyi: 'ad. 也就是；即是；换句话说',
        liju1: 'A district should serve its clientele, namely students, staff, and parents.',
        chinese1: '一个学区应该服务于其主顾，即学生、教职员工和家长。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2136',
        word: 'nap',
        ciyi: 'n. 小睡，打盹儿',
        liju1: 'You may recline your seat a little when you want to have a quick nap.',
        chinese1: '你想小睡片刻时，可以把你的座位调节得向后仰一点。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2137',
        word: 'napkin',
        ciyi: 'n. 餐巾；餐巾纸',
        liju1: 'A table setting looks much more inviting with cloth napkins and napkin rings.',
        chinese1: '有了桌布和餐巾环，桌子的布置则会看上去更吸引人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2138',
        word: 'narrative',
        ciyi: 'n. 叙述，记叙文 a.叙述的；有故事性的',
        liju1: 'She wants to fable up this narrative into a fiction.',
        chinese1: '她想把这个故事改编成小说。',
        liju2: 'In this narrative, information might appear in any order.',
        chinese2: '在这个叙述中，信息可能会以任何次序出现。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2139',
        word: 'nasty',
        ciyi: 'a. 下流的；卑鄙的，肮脏的；令人厌恶的',
        liju1: 'The guards looked really nasty.',
        chinese1: '那些警卫看上去真可恶。',
        liju2: 'We thought this was a nasty movie.',
        chinese2: '我们认为这是一部下流的电影。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2140',
        word: 'nationality',
        ciyi: 'n. 国籍，国家；民族；部落',
        liju1: 'We were both of the same nationality.',
        chinese1: '我们俩是同一国籍的人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2141',
        word: 'naughty',
        ciyi: 'a. 顽皮的，淘气的；不听话的；猥琐的',
        liju1: 'These naughty kids have pulled off all the rose buds.',
        chinese1: '这些淘气的孩子把所有玫瑰花蕾都摘掉了。',
        liju2: 'You know what little boys are like with naughty words.',
        chinese2: '你知道小男孩们说下流话是什么样子。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2142',
        word: 'naval',
        ciyi: 'a. 海军的；军舰的',
        liju1: 'The harbour is an important naval base.',
        chinese1: '该港是一个重要的海军基地。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2143',
        word: 'navigation',
        ciyi: 'n. 航行；航海，航空；导航，领航',
        liju1: 'Pack ice around Iceland was becoming a threat to navigation.',
        chinese1: '冰岛周围的浮冰一度成为船舶航行的威胁。',
        liju2: 'This store sells the instruments used for navigation on a ship.',
        chinese2: '这家店出售船载导航设备。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2144',
        word: 'navy',
        ciyi: 'n. 海军',
        liju1: 'Being drafted into the navy derailed his career for three years.',
        chinese1: '由于应征参加海军，他的事业被耽搁了三年。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2145',
        word: 'necessitate ',
        ciyi: 'vt. 使成为必需，需要；迫使',
        liju1: 'A prolonged drought had necessitated the introduction of water rationing.',
        chinese1: '一场持续的干旱使定量供水的引进成为必需。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2146',
        word: 'necessity',
        ciyi: 'n. （迫切）需要；必然性；必需品',
        liju1: 'Water is a basic necessity of life.',
        chinese1: '水是一种基本生活必需品。',
        liju2: 'The necessity of making a living disentranced him from his gamble.',
        chinese2: '谋生的必要使他醒悟，不再赌博了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2147',
        word: 'necklace',
        ciyi: 'n. 项链',
        liju1: 'A diamond necklace adorned her neck.',
        chinese1: '一串钻石项链使她更富美感。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2148',
        word: 'negative ',
        ciyi: 'a. [数] 负的，阴性的；消极的；否定的；反面的n. 否定；负数；[摄影] 底片',
        liju1: 'The Council answered those questions in the negative.',
        chinese1: '理事会对那些问题做出了否定回答。',
        liju2: 'She did negative your conduct.',
        chinese2: '她确实不赞成你的所作所为。',
        liju3: 'So far 57 have taken the test and all have been negative.',
        chinese3: '到目前为止已有57人进行了这项检验，所有人都呈阴性反应。',
         liju4: 'How many copies shall we print from the negative?',
        chinese4: '用这张底片我们要印多少张相片?'
      }, 
	  {
        id: '2149',
        word: 'neglect ',
        ciyi: 'vt. 疏忽，忽视；忽略，漏做n. 疏忽，忽视；怠慢',
        liju1: 'None can afford to neglect the accumulated experience of man.',
        chinese1: '谁也不能忽视人类所积累的经验。',
        liju2: 'He is chargeable with a fault or neglect.',
        chinese2: '他可能因过失或疏忽而被控告。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2150',
        word: 'negligible',
        ciyi: 'a. 微不足道的，可以忽略的',
        liju1: 'The pay that the soldiers received was negligible.',
        chinese1: '士兵们得到的津贴微乎其微。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2151',
        word: 'negotiate',
        ciyi: 'vi. 谈判，交涉',
        liju1: "'We can't negotiate until each side is willing to give up some points.'",
         chinese1: '直到各方愿意在某些要点上作让步，我们才能谈判。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2152',
        word: 'neighbo(u)rhood',
        ciyi: ' n. 邻近；周围；邻居关系，街道',
        liju1: 'She knocked up an acquaintance with a few people in this neighbourhood.',
        chinese1: '她偶然与住在这个居民区的几个人相识。',
        liju2: 'Her bad cooking has become the neighbourhood joke.',
        chinese2: '她那糟糕的烹调技术成了邻居的笑料。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2153',
        word: 'nephew',
        ciyi: 'n. 侄子；外甥',
        liju1: ' He was going to resign his personal property to the care of his nephew.',
        chinese1: '他打算把他个人的财产托付给他的侄子照管。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2154',
        word: 'nerve',
        ciyi: 'n. 神经；勇气，胆识',
        liju1: 'The brandy made him choke, but it restored his nerve.',
        chinese1: '白兰地呛到他了，但恢复了他的勇气。',
        liju2: "'Jill's nerves are stretched to breaking point.'",
         chinese2: '吉尔的神经紧张得快到极点了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2155',
        word: 'nest',
        ciyi: 'n. 巢，窝vi. 筑巢；找鸟巢',
        liju1: 'The bird befouled its own nest.',
        chinese1: '鸟儿弄脏了它自己的鸟巢。',
        liju2: 'The swallows nested under the eaves.',
        chinese2: '燕子在屋檐下筑巢。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2156',
        word: 'network',
        ciyi: 'n. 网络；广播网，电视网；网状物',
        liju1: 'I want to upload data to the computer network storage from my office computer.',
        chinese1: '我想将资料从办公室电脑转送到计算机中心网络的储存中。',
        liju2: 'In business, it is important to network with as many people as possible on a face to face basis.',
        chinese2: '在生意场上，与尽可能多的人建立面对面的关系网是重要的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2157',
        word: 'neutral',
        ciyi: 'a. 中立的，中性的；中和的',
        liju1: 'Pure water is neutral with a pH of 7.',
        chinese1: '纯净水是中性的，PH值为7。',
        liju2: 'You cannot be completely neutral in this world.',
        chinese2: '在此世间，你无法做到绝对的中立。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2158',
        word: 'neutron',
        ciyi: ' n. 中子',
        liju1: 'Each atomic cluster is made up of neutrons and protons.',
        chinese1: '每个原子团簇是由中子和质子组成的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2159',
        word: 'nevertheless',
        ciyi: 'ad. 然而，不过conj. 然而，不过',
        liju1: 'The news may be unexpected; nevertheless, it is true.',
        chinese1: '这消息可能是出乎意料的，然而是真实的。',
        liju2: 'My brother was nevertheless afraid of the dark when he grew up and always slept with a light on.',
        chinese2: '我弟弟长大后仍然怕黑，总是开着灯睡觉。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2160',
        word: 'nickel',
        ciyi: 'n. 镍；镍币；五分镍币',
        liju1: 'In fact, half of the increased global demand for nickel goes to China.',
        chinese1: '事实上，全球镍需求增加，半数是因为中国消费量的增加。',
        liju2: 'Joe kept a nickel as a lucky symbol in his pocket.',
        chinese2: '乔在口袋里放了5美分，把它当做幸运物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2161',
        word: 'nickname',
        ciyi: 'n. 绰号；昵称vt. 给……取绰号',
        liju1: 'The child answers only to its nickname.',
        chinese1: '你只有叫那孩子的外号，他才答应。',
        liju2: 'When he got older I nicknamed him Little Alf.',
        chinese2: '他长大些后，我给他起了绰号“小阿尔夫”。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2162',
        word: 'niece',
        ciyi: 'n. 外甥女，侄女',
        liju1: 'Mary bequeathed half of the company to her niece.',
        chinese1: '玛丽把她公司的一半遗赠给她侄女。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2163',
        word: 'nightmare',
        ciyi: 'n. 噩梦；梦魇般的经历，可怕的事',
        liju1: 'The years in prison were a nightmare.',
        chinese1: '数年的铁窗生涯是一场噩梦。',
        liju2: 'The terrible hurricane was a nightmare for the coastal towns.',
        chinese2: '骇人的飓风对沿海城镇来说真是件可怕的事。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2164',
        word: 'nitrogen',
        ciyi: 'n. 氮',
        liju1: 'The plant requires nitrogen in order to make proteins.',
        chinese1: '植物需要氮以便制造蛋白质。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2165',
        word: 'nominal ',
        ciyi: 'a. 名义上的；（金额、租金）微不足道的',
        liju1: 'As he was still not allowed to run a company, his wife became its nominal head.',
        chinese1: '由于他仍未获准管理公司，他的妻子就成了公司名义上的老板。',
        liju2: 'The bonus to employees is merely a nominal sum.',
        chinese2: '雇员们只得到了一点可怜的奖金。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2166',
        word: 'nominate',
        ciyi: 'vt. 推荐；提名；任命',
        liju1: 'He was nominated for the MP.',
        chinese1: '他被提名为议员候选人。',
        liju2: 'She was nominated by the president as ambassador to China.',
        chinese2: '她被总统任命为驻中国大使。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2167',
        word: 'nonetheless',
        ciyi: 'ad. 尽管如此，但是，依然',
        liju1: 'There was still a long way to go. Nonetheless, some progress had been made.',
        chinese1: '仍然有很长的路要走。不过还是取得了一些进步。',
        liju2: 'Kenny is thin and a bit shaggy, but very cute nonetheless.',
        chinese2: '肯尼瘦瘦的，还有点蓬头垢面，但是依然很可爱。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2168',
        word: 'nonsense',
        ciyi: 'n. 胡说；废话',
        liju1: 'None of your nonsense!',
        chinese1: '别胡说八道了!',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2169',
        word: 'norm ',
        ciyi: ' n. 规范，基准，准则',
        liju1: 'The actions taken depart from what she called the commonly accepted norms of democracy.',
        chinese1: '所采取的这些行动背离了她所谓的那些普遍接受的民主准则。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2170',
        word: 'normalization',
        ciyi: 'n. 正常化；标准化；正规化',
        liju1: ' It is important to maintain integrity and normalization within the glossary.',
        chinese1: '维持术语表的完整性和规范化是很重要的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2171',
        word: 'nostalgic ',
        ciyi: ' a. 怀旧的；乡愁的',
        liju1: ' Many people were nostalgic for the good old days.',
        chinese1: '很多人都怀念过去的好时光。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2172',
        word: 'notable',
        ciyi: 'a. 值得注意的，显著的；著名的',
        liju1: "'It's difficult to level down the notable difference between the two. '",
         chinese1: '很难消除两者之间的显著差别。',
        liju2: 'The book stands out as one of the notable landmarks in the progress of modern science.',
        chinese2: '这部著作是现代科学发展史上著名的里程碑之一。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2173',
        word: 'notify',
        ciyi: ' vt. 通告，通知；公布，报告',
        liju1: 'Earlier this year they were notified that their homes were to be cleared away.',
        chinese1: '今年早些时候他们被通知说他们的家将被拆除。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2174',
        word: 'notion',
        ciyi: 'n. 概念，意念；看法，想法，观点',
        liju1: "'We each have a notion of just what kind of person we'd like to be.'",
         chinese1: '我们每个人都对自己要做个什么样的人有各自的想法。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2175',
        word: 'notorious',
        ciyi: ' a. 声名狼藉的，臭名昭著的，众所周知的',
        liju1: 'The lawyer has defended some of the most notorious criminals.',
        chinese1: '这名法官已为一些最臭名昭著的罪犯当过辩护律师。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2176',
        word: 'notwithstanding',
        ciyi: 'ad. 尽管，仍然prep. 尽管，虽然conj. 虽然，尽管',
        liju1: 'He still went home, notwithstanding the midnight.',
        chinese1: '尽管已近午夜，他还是回家去了。',
        liju2: 'Notwithstanding, we should learn to readily forgive others.',
        chinese2: '尽管如此，我们应学会欣然地原谅他人。',
        liju3: 'Many people told him not to try, but John went ahead notwithstanding.',
        chinese3: '尽管很多人都劝他不要尝试，但约翰还是执意去做。'
      }
      ,
      {
        id: '2177',
        word: 'nourish',
        ciyi: 'vt. 滋养，养育；提供养分',
        liju1: 'South American women use the fruit to nourish their skin and hair.',
        chinese1: '南美洲的妇女都用这种水果来滋养她们的皮肤和头发。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2178',
        word: 'novel',
        ciyi: 'a. 新奇的，新颖的；异常的n.（长篇）小说',
        liju1: 'He identifies with the heroine of the novel.',
        chinese1: '他同情小说中的女主人公。',
        liju2: 'Protesters found a novel way of demonstrating against steeply rising oil prices.',
        chinese2: '抗议者们找到一种新奇的示威方式来反对石油价格的飙升。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2179',
        word: 'novelty',
        ciyi: 'n. 新奇，新颖；新奇的事物',
        liju1: 'In the contemporary western world, rapidly changing styles cater to a desire for novelty and individualism.',
        chinese1: '在当代西方世界，快速变换着的款式迎合了人们对新奇和独特性的追求。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2180',
        word: 'nowhere',
        ciyi: 'ad. 无处；任何地方都不；毫无结果',
        liju1: 'There was nowhere to hide and nowhere to run.',
        chinese1: '没有任何地方可藏，也没有任何地方可逃。',
        liju2: "'If you don't work hard, you will wind up nowhere.'",
         chinese2: '如果你不努力工作你将毫无成就。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2181',
        word: 'nuclear',
        ciyi: 'a. 原子能的，核能的；核心的，中心的；原子核的',
        liju1: 'The fuel was enriched with uranium 235 for the nuclear reactor.',
        chinese1: '核反应堆的燃料被铀235浓缩。',
        liju2: 'They rejected a demand for the removal of all nuclear weapons.',
        chinese2: '他们拒绝了清除所有核武器的要求。',
        liju3: "'I'm out of  my depth when it comesnuclear physics. '",
         chinese3: '我对原子核物理学一窍不通。'
       }
      ,
      {
        id: '2182',
        word: 'nucleus',
        ciyi: ' n. 核，核心；原子核',
        liju1: 'Neutrons and protons are bound together in the nucleus of an atom.',
        chinese1: '在一个原子的核内，中子和质子聚合在一起。',
        liju2: 'These young people formed the nucleus of the club and played an important role in it.',
        chinese2: '这些年轻人成为了俱乐部的核心并在其中起了重要作用。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2183',
        word: 'nuisance',
        ciyi: 'n. 讨厌的人（或东西）；损害；麻烦事',
        liju1: 'What a nuisance that child is!',
        chinese1: '那个小孩多讨厌!',
        liju2: 'He could be a bit of a nuisance when he was drunk.',
        chinese2: '他喝醉时会是一个有点令人讨厌的人。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2184',
        word: 'numb',
        ciyi: 'vt. 使麻木 a. 麻木的；发愣的，失去感觉的',
        liju1: 'The cold numbed my fingers.',
        chinese1: '寒冷使我的手指失去了知觉。',
        liju2: 'The mother, numb with grief, has trouble speaking.',
        chinese2: '那位母亲，由于悲伤而木然，说不出话来。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2185',
        word: 'numerical',
        ciyi: 'a. 数值的；数字的；用数字表示的',
        liju1: 'Your job is to group them by letter and put them in numerical order.',
        chinese1: '你的工作是把它们按字母编组，再把它们按数字顺序排序。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2186',
        word: 'numerous',
        ciyi: 'a. 许多的，众多的，大批的，',
        liju1: 'I have numerous engagements next week.',
        chinese1: '下星期我有许多约会。',
        liju2: 'Numerous factories have sprung up in this once desolate erea.',
        chinese2: '过去这一带满目苍凉，现在却有了无数的工厂。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2187',
        word: 'nursery',
        ciyi: 'n. 苗圃；托儿所',
        liju1: 'The babies were bawling in the nursery.',
        chinese1: '托儿所的婴儿都在啼哭。',
        liju2: 'The garden, developed over the past 35 years, includes a nursery.',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2188',
        word: 'nurture',
        ciyi: 'vt.抚育，教养；给…营养物n. 养育；教养；营养物',
        liju1: ' She had always nurtured great ambitions for her son.',
        chinese1: '她一直在培养她儿子的雄心大志。',
        liju2: 'Parents want to know the best way to nurture and raise their child to adulthood.',
        chinese2: '父母们想了解把他们的孩子养育成人的最好方法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2189',
        word: 'nutrition',
        ciyi: 'n. 营养，营养学；营养品',
        liju1: 'There are alternative sources of nutrition to animal meat.',
        chinese1: '有能替代动物肉类的其他营养来源。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2190',
        word: 'nylon',
        ciyi: 'n. 尼龙',
        liju1: 'Nylon is made from air, coal and water.',
        chinese1: '尼龙是由空气、煤和水加工制成。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2191',
        word: 'oak',
        ciyi: 'n. 栎树，橡树，橡木 a. 栎树的；橡木的',
        liju1: 'Many large oaks were felled during the war.',
        chinese1: '许多大橡树在那场战争期间被砍伐了。',
        liju2: 'The cabinet was made of oak and was hand-carved.',
        chinese2: '这个柜子是橡木做的，并且经手工雕刻而成。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2192',
        word: 'oar',
        ciyi: 'n. 桨；橹',
        liju1: 'Today, we will join our Chinese counterparts in grabbing an oar and starting to row.',
        chinese1: '今天，我们将与中国的同行们一起拿起船桨，开始划船。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2193',
        word: 'oath',
        ciyi: 'n. 誓言，誓约；诅咒，咒骂，诅咒语',
        liju1: 'You are being swerved from your oath.',
        chinese1: '你现在的行为背离了你的誓言。',
        liju2: 'He ground out an oath. ',
        chinese2: '他咬牙切齿地诅咒。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2194',
        word: 'obedience',
        ciyi: ' n. 顺从；服从',
        liju1: 'Society has a right to expect obedience of the law. ',
        chinese1: '社会有权要求人人遵守法律。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2195',
        word: 'obedient',
        ciyi: ' a. 顺从的，服从的',
        liju1: 'He was very respectful at home and obedient to his parents.',
        chinese1: '他在家里很尊重人而且顺从父母。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2196',
        word: 'obesity',
        ciyi: 'n. 肥大，肥胖',
        liju1: 'Dr.Watson is great on exercise as a cure for obesity. ',
        chinese1: '沃森医生把运动看做是治疗肥胖症的良方。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2197',
        word: 'objection',
        ciyi: 'n. 异议，反对；妨碍',
        liju1: 'She broke in with a ridiculous objection.',
        chinese1: '她突然插嘴提了个可笑的异议。',
        liju2: 'He circumvented their objection to the plan by having one of their own members propose it. ',
        chinese2: '他设法使他们自己的人来提出这个计划而避过了他们的反对。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2198',
        word: 'objective',
        ciyi: 'a. 客观的，真实的n. 目的；目标',
        liju1: 'We must hold by the objective laws to do anything.',
        chinese1: '做任何事都要遵循客观规律。',
        liju2: 'He kept on towards his objective.',
        chinese2: '他朝着他的目标前进。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2199',
        word: 'obligation',
        ciyi: 'n. 义务；责任',
        liju1: "'Don't try to duck out of the obligation.'",
         chinese1: '别想逃避那项义务。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2200',
        word: 'oblige ',
        ciyi: 'vt.责成；使感激，施恩惠',
        liju1: 'The principal shall be obliged to pay the wages to the employees.',
        chinese1: '必须责成雇主向雇员支付薪金。',
        liju2: 'Kindly oblige me by opening the door.',
        chinese2: '劳驾帮我开一下门。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2201',
        word: 'obscure',
        ciyi: 'a.模糊的；昏暗的，朦胧的vt. 使…模糊不清',
        liju1: ' Last night, an obscure project peered upon my mind.',
        chinese1: '昨晚，一个计划在我脑中模糊出现。',
        liju2: 'The moon was obscured by clouds.',
        chinese2: '月亮被云朵遮掩了。',
        liju3: 'The contracts are written in obscure language.',
        chinese3: '那些合同是用复杂难懂的语言写的。'
      }
      ,
      {
        id: '2202',
        word: 'observation',
        ciyi: 'n. 观察；监视；观察资料或报告',
        liju1: 'When experiments are to be made, one cannot rely too much upon the human senses to make accurate observation. ',
        chinese1: '在做实验时，不能过分依靠人类的感觉去做精确的观察。',
        liju2: 'The professor published his observations on pandas.',
        chinese2: '那位教授发表了有关熊猫的观察报告。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2203',
        word: 'observe',
        ciyi: 'vt.遵守；注意到；观察',
        liju1: "'Someone who doesn't observe traffic regulations will sweat. '",
         chinese1: '不遵守交通规则者必将要吃苦头。',
        liju2: 'Observe what is best and to strive to universalize these qualities. ',
        chinese2: ' 观察什么是最好的，然后努力使这些特质得以普遍化。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2204',
        word: 'obsession',
        ciyi: 'n. 迷住，牵挂，惦念；萦绕于心的事物或人；固执念头',
        liju1: 'She would try to forget her obsession with Christopher.',
        chinese1: '她会试图忘掉她对克里斯托弗的迷恋。',
        liju2: 'The mother had an obsession for her son.',
        chinese2: '这位母亲非常挂念自己的儿子。',
        liju3: 'The obsessions made Tom nervous and irritable.',
        chinese3: '这些烦心事使汤姆神经紧张，动不动就生气。',
         liju4: 'Obsession and compulsion both caused Jack to do irrational things.',
        chinese4: '固执的念头和难以抗拒的冲动让杰克做出了不理智的事情。'
      }
      ,
      {
        id: '2205',
        word: 'obsolete',
        ciyi: 'a. 废弃的；过时的，老式的',
        liju1: "'So much equipment becomes obsolete almost as soon as it's made.'",
         chinese1: '很多设备几乎刚制造出来就过时了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2206',
        word: 'obstacle',
        ciyi: 'n. 障碍，干扰；妨害物',
        liju1: 'Overcrowding remains a large obstacle to improving conditions.',
        chinese1: '过度拥挤仍然是改善条件的一大障碍。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2207',
        word: 'obstruct',
        ciyi: 'vt. 妨碍；阻塞；遮断',
        liju1: 'Debris obstructed the road.',
        chinese1: '垃圾堵塞了道路。',
        liju2: 'The heavy rain obstructed our view.',
        chinese2: '大雨挡住了我们的视线。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2208',
        word: 'obstruction',
        ciyi: 'n. 障碍；阻碍；妨碍',
        liju1: 'John was irritated by drivers parking near his house and causing an obstruction.',
        chinese1: '约翰被众司机在他房子附近停车而造成阻塞所激怒。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2209',
        word: 'obtain',
        ciyi: 'vi. 获得；流行vt. 获得',
        liju1: 'The secret police tortured him to obtain information.',
        chinese1: '秘密警察拷问他以获取情报。',
        liju2: 'You can also obtain knowledge through practice.',
        chinese2: '你还可以从实践经验中获得知识。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2210',
        word: 'obvious',
        ciyi: ' a. 明显的；显而易见的',
        liju1: 'Once you have eliminated the obvious causes of death, you must consider the possibility of foul play. ',
        chinese1: '一旦排除了明显的死因，你就必须考虑到可能有人采取了卑劣手段。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2211',
        word: 'occasion',
        ciyi: 'n.场合；时机，机会',
        liju1: 'Try to dress appropriately for each occasion. ',
        chinese1: '试图为每个场合适当地打扮。',
        liju2: 'It is an occasion for all the family to celebrate.',
        chinese2: '那是个全家庆祝的机会。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2212',
        word: 'occasional',
        ciyi: 'a. 偶然的，特殊场合的；临时的',
        liju1: "'I've had occasional mild headaches all my life.'",
         chinese1: '我此生一直有偶尔的轻微头疼。',
        liju2: 'They hired some occasional chauffeurs in their weeding.',
        chinese2: '他们在结婚时请了一些临时司机。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2213',
        word: 'occupation',
        ciyi: 'n.占领，占有；职业，工作',
        liju1: 'I said that Palestinians should not have to live in poverty and occupation.',
        chinese1: '我说，巴勒斯坦人不应只能在贫困和被占领的环境中生活。',
        liju2: 'I suppose I was looking for an occupation which was going to be an adventure.',
        chinese2: '我想我那时在寻找一份冒险型职业。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2214',
        word: 'occupy',
        ciyi: 'vt. 占用，居住；使忙碌，使从事',
        liju1: 'Her career occupies all of her time.',
        chinese1: '她的事业占用了她所有的时间。',
        liju2: 'The writer occupied himself in reading recently.',
        chinese2: '这位作家近来忙着看书。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2215',
        word: 'occurrence',
        ciyi: 'n. 发生；出现；事件',
        liju1: 'The occurrence of such things is by no means fortuitous. ',
        chinese1: '出现这种问题绝不是偶然的。',
        liju2: 'Complaints seemed to be an everyday occurrence.',
        chinese2: '投诉似乎成了天天发生的事。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2216',
        word: 'odd',
        ciyi: 'a.古怪的；奇数的；临时的；不固定的，带零头的',
        liju1: "'I don't know what to make of his odd behaviour.'",
         chinese1: '我不知道如何理解他的古怪行为。',
        liju2: 'The odd numbers are on the left as you walk up the street.',
        chinese2: '你沿这条街走时，单号在左边。',
        liju3: 'Do you plan to do some odd jobs?',
        chinese3: '你打算做一些临时工吗？'
      }
      ,
      {
        id: '2217',
        word: 'odds',
        ciyi: ' n. 几率，机会；胜算；不平等；差别',
        liju1: ' How can you improve your odds of success? ',
        chinese1: '如何才能提高你成功的几率呢？',
        liju2: 'Ivan is at odds with the new manger.',
        chinese2: '伊万与新来的经理不和。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2218',
        word: 'odo(u)r',
        ciyi: 'n. 气味；声誉',
        liju1: 'The odour of pines pervades the air in the forest.',
        chinese1: '林子里的空气中充满着松树的气味。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2219',
        word: 'offend',
        ciyi: 'vt. 冒犯；使…不愉快vi. 违反；进攻；得罪',
        liju1: 'He was offended by her unreasonable quarrel.',
        chinese1: '他被她的无理取闹激怒了。',
        liju2: 'In the great effort not to offend, we end up saying nothing.',
        chinese2: '为了尽量不冒犯人，我们最终什么也没说。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2220',
        word: 'offensive',
        ciyi: 'a. 攻击的；冒犯的；讨厌的n. 攻势；攻击',
        liju1: 'Offensive is the best defence.',
        chinese1: '进攻是最好的防御。',
        liju2: 'You need to hold an intelligent conversation and not use profanity or offensive language. ',
        chinese2: '你需要保持一种聪慧的交谈，不要使用亵渎的、冒犯的语言。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2221',
        word: 'offset',
        ciyi: 'n. 抵消，补偿；分支vt. 抵消；弥补；用平版印刷术印刷vi. 装支管',
        liju1: 'The gains offset the losses.',
        chinese1: '收支相抵。',
        liju2: 'In basketball, he offsets his small size by his cleverness and speed.',
        chinese2: '他打篮球时的灵巧和速度弥补了他身材的矮小。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2222',
        word: 'offspring',
        ciyi: 'n.后代，子孙；结果，产物',
        liju1: 'Jack is her only offspring.',
        chinese1: '杰克是她唯一的后代。',
        liju2: 'The atomic bomb is the offspring of the 20th century physics.',
        chinese2: '原子弹是20世纪物理学家的产物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2223',
        word: 'omit',
        ciyi: 'vt. 省略；遗漏；删除；疏忽',
        liju1: 'Some passages were omitted from the book.',
        chinese1: '本书中的某些段落被删除了。',
        liju2: 'I omitted to tell her come.',
        chinese2: '我忘记告诉她来了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2224',
        word: 'onion',
        ciyi: 'n. 洋葱；洋葱头',
        liju1: "'Let's prick the onion plant out.'",
         chinese1: '让我们把洋葱幼苗移出来。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2225',
        word: 'opaque',
        ciyi: 'a. 不透明的；难理解的，晦涩的',
        liju1: 'You can always use opaque glass if you need to block a street view.',
        chinese1: '如果你需要挡住外面的街景，你随时可以使用不透明玻璃。',
        liju2: 'Willy was confused by the opaque words in this message.',
        chinese2: '威利被这条信息里含糊其辞的话给弄糊涂了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2226',
        word: 'opening',
        ciyi: 'n. 口子，孔；开始；空缺的职位a. 开始的，开幕的',
        liju1: 'He squeezed through a narrow opening in the fence.',
        chinese1: '他从围栏的一个狭窄缺口挤了过去。',
        liju2: "'We don't have any openings now, but we'll call you if something comes up.'",
        chinese2: '眼下我们没有空缺的职位。如果有了，我们会给你打电话的。',
        liju3: 'Our headmaster rattled on for at least two hours at the opening ceremony. ',
        chinese3: '我们的校长在开学典礼上唠唠叨叨地讲了至少两个小时。'
      }
      ,
      {
        id: '2227',
        word: 'opera',
        ciyi: 'n. 歌剧；歌剧院',
        liju1: 'The audience applauded wildly at the end of the opera. ',
        chinese1: '观众在歌剧结束时狂热地鼓掌喝彩。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2228',
        word: 'operational',
        ciyi: 'a. 操作的；运作的',
        liju1: 'This provides you with increased operational freedom.',
        chinese1: '这为您增加了操作上的自由。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2229',
        word: 'operator',
        ciyi: 'n.操作员；（电话）接线员；行家',
        liju1: 'The telephone operator cut us off before we had finished our conversation. ',
        chinese1: '我们的话还没说完，电话接线员就中断了我们的通话。',
        liju2: 'By using the less powerful roles of monitor and operator, you can restrict the actions an administrator can take. ',
        chinese2: '通过使用角色较弱的监视人员和操作员，您可以限制管理员能够采取的操作。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2230',
        word: 'opponent',
        ciyi: 'n. 对手；反对者；敌手a. 对立的；敌对的',
        liju1: 'The soldier jabbed at his opponent.',
        chinese1: '那个战士猛击他的对手。',
        liju2: 'The two countries were opponent in World WarⅡ.',
        chinese2: '这两个国家在“二战”时是对立国。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2231',
        word: 'oppose',
        ciyi: 'vt. 反对；对抗，抗争vi. 反对',
        liju1: ' Oppose extravagant eating and drinking and pay attention to thrift and economy. ',
        chinese1: '反对大吃大喝，注意节约。',
        liju2: 'We oppose interference by any outside force.',
        chinese2: '我们反对任何外来势力插手干预。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2232',
        word: 'oppress',
        ciyi: 'vt.压迫，压抑；使…烦恼；使…感到沉重',
        liju1: 'These people often are oppressed by the governments of the countries they find themselves in.',
        chinese1: '这些人经常受到他们所在国家政府的压迫。',
        liju2: 'What he did oppressed me.',
        chinese2: '他的所作所为令我心情沉重。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2233',
        word: 'opt',
        ciyi: 'vi. 选择，挑选',
        liju1: 'These are the clothes which you can opt for.',
        chinese1: '这些是可供你选择的衣服。',
        liju2: 'More students are opting for English nowadays.',
        chinese2: '现在有更多的学生在选修英语。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2234',
        word: 'optical',
        ciyi: 'a. 光学的；眼睛的，视觉的，视力的',
        liju1: 'All the optical effects have disappeared.',
        chinese1: '所有的视觉效果都不见了。',
        liju2: 'But the scene is actually an optical illusion.',
        chinese2: '而事实上，这样的场景只是一种光学错觉。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2235',
        word: 'optimistic',
        ciyi: 'a. 乐观的；乐观主义的',
        liju1: 'We have every reason to feel optimistic.',
        chinese1: '我们完全有理由感到乐观。',
        liju2: 'The dismal science, it seems, is an optimistic profession.',
        chinese2: '这种沉闷的科学似乎是一种乐观的职业。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2236',
        word: 'optimum',
        ciyi: 'a. 最适宜的，最好的，最有利的',
        liju1: 'Try to do some physical activity three times a week for optimum health.',
        chinese1: '试着每星期锻炼身体3次，以达到最佳的健康状态。',
        liju2: 'Optimum light is bright and even.',
        chinese2: '最佳光线是明亮的、稳定的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2237',
        word: 'option',
        ciyi: 'n. 选项；选择权；选择的事物（或人）；选课',
        liju1: "'Several options are offered for the student's senior year.'",
         chinese1: '好几门选修课开给毕业班的学生。',
        liju2: 'Criminals are given the option of going to jail or facing public humiliation.',
        chinese2: '罪犯们被给予进监狱或面对公众羞辱的选择权。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2238',
        word: 'optional',
        ciyi: 'a. 可选择的，非强制的，随意的',
        liju1: 'Sex education is a sensitive area for some parents, and thus it should remain optional.',
        chinese1: '性教育对一些家长来说是个敏感的话题，因此应该还是非强制性的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2239',
        word: 'oral',
        ciyi: ' a. 口头的，口述的',
        liju1: 'He lucked out on the oral examination.',
        chinese1: '他侥幸通过了口语考试。',
        liju2: 'I made an oral agreement with a company.',
        chinese2: '我与一家公司达成了一个口头协议。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2240',
        word: 'orbit',
        ciyi: 'n. 轨道vt. 绕…轨道而行',
        liju1: 'They successfully lofted a spaceship into orbit.',
        chinese1: '他们成功地将一艘宇宙飞船射入轨道。',
        liju2: 'The moon orbits the Earth.',
        chinese2: '月亮围绕地球转。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2241',
        word: 'orchard',
        ciyi: 'n.果园；果树林',
        liju1: 'The boy dropped the apples he had stolen and cut away across the orchard.',
        chinese1: '那个男孩丢下偷来的苹果，飞快地穿过果园逃走了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2242',
        word: 'orchestra',
        ciyi: 'n. 管弦乐队；乐队演奏处',
        liju1: 'She conducted an orchestra of forty instruments.',
        chinese1: '她在一个拥有40种乐器的管弦乐队里当指挥。',
        liju2: 'He directed an orchestra.',
        chinese2: '他指挥一个管弦乐队。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2243',
        word: 'orderly',
        ciyi: 'a. 有秩序的；整齐的n. 勤务兵',
        liju1: 'When there is a fire, it is important that people file out of the building in an orderly way. ',
        chinese1: '发生火灾时，重要的是人们要有秩序地从大楼里鱼贯而出。',
        liju2: "'It's a beautiful, clean and orderly city.'",
         chinese2: '这是一座美丽、干净、整齐的城市。',
        liju3: 'For most of his life, he was a hospital orderly.',
        chinese3: '他做了大半辈子的医院护理员。'
      }
      ,
      {
        id: '2244',
        word: 'ore',
        ciyi: 'n. 矿；矿石',
        liju1: 'This ore assays high in gold.',
        chinese1: '这种矿石被验明含金量高。',
        liju2: 'How many tons of ore can this machine crush in an hour? ',
        chinese2: '这机器每小时可以破碎多少吨矿石?',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2245',
        word: 'organ',
        ciyi: 'n. 器官；机构；风琴',
        liju1: 'Every organ of state must apply the principle of efficient and simple administration.',
        chinese1: '国家机关必须实行精简的原则。',
        liju2: 'A barrel-organ was wheezing out an old tune. ',
        chinese2: '一架手摇风琴正在呼哧呼哧地奏着一首古老的曲子。',
        liju3: 'There is almost no other organ that would fail so fast as to cause sudden death.',
        chinese3: '几乎没有其它的器官像心脏那样衰竭如此之快，以至于导致突然死亡。'
      }
      ,
      {
        id: '2246',
        word: 'organic',
        ciyi: 'a. 有机的；组织的；器官的',
        liju1: 'Organic farming is expanding everywhere.',
        chinese1: '有机农业在各处发展。',
        liju2: 'The students are studying the organic structure of animals and plants in the lab.',
        chinese2: '学生们正在实验室里研究动植物的器官构造。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2247',
        word: 'organization/organisation',
        ciyi: 'n. 组织；机构；体制；团体',
        liju1: 'They are charting out the future of the organization. ',
        chinese1: '他们正在明确规划这个组织的未来。',
        liju2: 'I am aware that the organization of the book leaves something to be desired.',
        chinese2: '我知道这本书的结构还有待完善。',
        liju3: 'The lack of funds posed difficulties for this organization last year.',
        chinese3: '去年，缺乏资金给这个机构带来了若干困难。'
      }
      ,
      {
        id: '2248',
        word: 'organize/organise',
        ciyi: 'vt. 组织；使有系统化；组织成立工会等',
        liju1: 'In the end, we all decided to organize a concert for Easter.',
        chinese1: '最后，我们一致决定为复活节组织一场音乐会。',
        liju2: 'He began to organize his materials.',
        chinese2: '他开始整理他的材料。',
        liju3: 'The capitalists resisted all efforts to organize.',
        chinese3: '资方想尽一切办法阻止成立工会。'
      }
      ,
      {
        id: '2249',
        word: 'organism',
        ciyi: 'n. 有机体；生物体',
        liju1: 'Not all chemicals normally present in living organisms are harmless.',
        chinese1: '并非所有正常存在于活的有机体中的化学物质都是无害的。',
        liju2: 'A parasite is an organism that feeds on other organisms. ',
        chinese2: '寄生虫是一种以其它生物为食的生物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2250',
        word: 'orient',
        ciyi: 'vt. 使适应；定…的方位 n. 东方a. 东方的',
        liju1: 'They love paintings from the Orient. ',
        chinese1: '他们喜欢来自东方的绘画。',
        liju2: 'We must orient our work to the needs of the markets.',
        chinese2: '我们必须调整我们的工作，以适应市场的需要。',
        liju3: 'You can easily orient yourself in the city by the famous buildings.',
        chinese3: '利用城内的著名建筑物，你可以很容易地确定自己的方位。'
      }
      ,
      {
        id: '2251',
        word: 'oriental',
        ciyi: 'a. 东方的；东方人的',
        liju1: 'There were Oriental carpets on the floors.',
        chinese1: '地板上铺着东方的地毯。',
        liju2: 'Is it possible to level out the difference between Oriental and European ideas as regards matrimony?',
        chinese2: '有可能消除东方与欧洲在婚姻观上的差别吗?',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2252',
        word: 'orientation',
        ciyi: 'n. 方向；定向；熟悉，适应；情况介绍',
        liju1: 'The winding trail caused us to lose our orientation.',
        chinese1: '迂回曲折的小道使我们迷失了方向。',
        liju2: 'They give their new employees a day or two of orientation.',
        chinese2: '他们对新员工进行一两天的培训。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2253',
        word: 'origin',
        ciyi: 'n. 起源；原点；出身，来历',
        liju1: 'Darwin generalized from many facts to reach his idea about the origin of man.',
        chinese1: '达尔文对许多事实进行了归纳，从而得出了他对人类起源的想法。',
        liju2: 'We do not differentiate between our workers on the basis of their background or ethnic origin.  ',
        chinese2: '我们不以工人们的背景或种族来源区别对待他们。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2254',
        word: 'original',
        ciyi: 'n. 原件；原作，原文 a. 原始的；最初的，原文的；独创的；新颖的',
        liju1: 'They accepted his advice and rescinded the original plan.',
        chinese1: '他们听从了他的劝告，撤销了原计划。',
        liju2: 'When you have filled in the questionnaire, copy it and send the original to your employer.',
        chinese2: '填好问卷调查表之后，复印并将原件交给你的雇主。',
        liju3: 'It is one of the most original works of imagination in the language.',
        chinese3: '这是用这种语言创作的最具想像力的原创作品之一。'
      }
      ,
      {
        id: '2255',
        word: 'originate',
        ciyi: 'vt. 引起；首创，创作vi. 发源；发生；起航',
        liju1: 'The disease originated in Africa.',
        chinese1: '这种疾病起源于非洲。',
        liju2: 'The bus originates at Oxford Street.',
        chinese2: '这辆公共汽车的始发站在牛津大街。',
        liju3: 'Do you know who originated the theory of quantum?',
        chinese3: '你知道量子论是由谁首创的吗?'
      }
      ,
      {
        id: '2256',
        word: 'ornament',
        ciyi: 'n.装饰；装饰物； vt. 装饰，美化',
        liju1: 'There is an ornament made of shells on the wall. ',
        chinese1: '墙上有一个贝壳做成的装饰品。',
        liju2: 'We ornamented the house with flower and color lights for the coming New Year.',
        chinese2: '为迎接即将到来的新年，我们用鲜花和彩灯装饰了房屋。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2257',
        word: 'orphan',
        ciyi: 'n. 孤儿',
        liju1: 'We may keep an orphan or adopt it out.',
        chinese1: '我们可以领养一个孤儿，或将孩子给人收养。',
        liju2: 'When she was orphaned, her uncle sent her to orphanage.',
        chinese2: '她的父母刚一去世，她的叔叔便把她送进了孤儿院。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2258',
        word: 'orthodox',
        ciyi: ' a. 正统的；传统的；惯常的',
        liju1: "'That would be an entirely orthodox image and we wouldn't be startled by its presence. '",
         chinese1: '这将是一个完全正统的形象,我们不会被它的存在吓一跳。',
        liju2: 'Modern women are no longer restrained by orthodox ethics.',
        chinese2: '现代女性不再受传统道德规范的约束。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2259',
        word: 'ounce',
        ciyi: 'n.盎司，英两',
        liju1: 'One ounce of almonds contains nearly half the recommended daily amount.',
        chinese1: '一盎司杏仁大约包含每日需求量的一半。',
        liju2: 'If only my father had possessed an ounce of business sense.',
        chinese2: '要是我父亲有一点点商业头脑就好了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2260',
        word: 'outbreak',
        ciyi: 'n. （战争的）爆发；（疾病的）发作vi. 爆发',
        liju1: 'The cholera outbreak has been contained.',
        chinese1: '霍乱的爆发已被遏制住。',
        liju2: 'Such events may forecast an outbreak of war. ',
        chinese2: '这些事件可能预示着战争的爆发。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2261',
        word: 'outcome',
        ciyi: 'n. 结果，结局；成果',
        liju1: 'Five minutes from the end, the outcome of the match was still in doubt.',
        chinese1: '比赛只剩下5分钟了，可是结局仍然难以预料。',
        liju2: 'The settling way will hang on the outcome of our discussion. ',
        chinese2: '解决的方法待我们的讨论结果而定。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2262',
        word: 'outer',
        ciyi: ' a.外面的，外部的，外层的',
        liju1: 'The two modules will dock in outer space.',
        chinese1: '两个宇宙飞船上的舱将在外层空间对接。',
        liju2: 'Imagine that you and I go in outer space.',
        chinese2: '设想一下你和我将去到外太空。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2263',
        word: 'outfit',
        ciyi: ' n.机构；用具；全套装备，全套工具',
        liju1: "'She was wearing an outfit she'd bought the previous day.'",
         chinese1: '她穿着前一天买的一套服装。',
        liju2: 'He works for a private security outfit.',
        chinese2: '他在一家私人保安公司工作。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2264',
        word: 'outing',
        ciyi: 'n. 远足；郊游，短途旅游',
        liju1: 'We often go for an outing in the country on fine days in spring and autumn.',
        chinese1: '春秋佳日，每作郊游。',
        liju2: 'We went for an outing on a crisp fall day.',
        chinese2: '我们在一个秋高气爽的日子去远足了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2265',
        word: 'outlet',
        ciyi: 'n.出路，出口，渠道；发泄的方法，排遣；批发商店',
        liju1: ' The huge outlet debouched the wastewater. ',
        chinese1: '大出口排出废水。',
        liju2: "'At the factory outlet you'll find discounted items at up to 75 % off regular prices.'",
         chinese2: '在工厂的直销店里，你会找到比常规价低75%的打折商品。',
        liju3: 'Her father had found an outlet for his ambition in his work.',
        chinese3: '她父亲在工作中找到了施展抱负的途径。'
      }
      ,
      {
        id: '2266',
        word: 'outline',
        ciyi: 'n.轮廓，略图；大纲；概要vt. 概述；略述；描画…轮廓',
        liju1: 'The fog blurred the outline of the plane.',
        chinese1: '浓雾使飞机轮廓模糊不清。',
        liju2: 'It may be briefly summarized in the following outline. ',
        chinese2: '这可以用下面的提纲简短地加以概括。',
        liju3: "'The mayor outlined his plan to clean up the town's image.'",
         chinese3: '市长概述了他清理整顿该市形象的计划。'
       }
      ,
      {
        id: '2267',
        word: 'outlook',
        ciyi: 'n. 展望，前景；观点，见解；景色，风光',
        liju1: 'The economic outlook is one of rising unemployment.',
        chinese1: '经济前景恶化，失业率不断增长。',
        liju2: 'I adopted a positive outlook on life.',
        chinese2: '我选择了一种积极的人生观。',
        liju3: 'The outlook from my kitchen window is the beautiful lake.',
        chinese3: '我的厨房窗外是一片美丽的湖景。'
      }
      ,
      {
        id: '2268',
        word: 'output ',
        ciyi: 'n. 输出，输出量；产量；出产vt. 输出',
        liju1: 'The output of cars shows a marked increase over last year.',
        chinese1: '汽车的产量比较去年有显著的增长。',
        liju2: 'We should phase the input and output of the machine.',
        chinese2: '我们应该使机器的输入功率和输出功率的相位同步。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2269',
        word: 'outrage',
        ciyi: 'n.愤慨；暴行，骇人听闻的事件；侮辱vt. 凌辱，激起愤怒',
        liju1: 'It outraged the public that the local authority decided to close the road.',
        chinese1: '当局决定封闭该路引起了公愤。',
        liju2: 'They were horrified by the outrage before their eyes.',
        chinese2: '他们被亲眼所见的暴行吓得呆住了。',
        liju3: 'The latest outrage was to have been a coordinated gun and bomb attack on the station.',
        chinese3: '最近令人震怒的事件是一次对该车站枪弹并用的袭击。'
      }
      ,
      {
        id: '2270',
        word: 'outset',
        ciyi: 'n. 开始；开端',
        liju1: 'Decide at the outset what kind of learning programme you want to follow.',
        chinese1: '一开始就要定下你的学习计划。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2271',
        word: 'outskirts',
        ciyi: 'n. 市郊，郊区',
        liju1: 'On the extreme northwestern outskirts of the city stands the Buddhist temple.',
        chinese1: '那所佛教寺院位于市郊的最西北角。',
        liju2: 'They mostly live on the outskirts of a town.',
        chinese2: '他们大多住在近郊。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2272',
        word: 'outward',
        ciyi: 'a. 向外的；外面的；公开的 ad. 向外，在外',
        liju1: 'The top door opened outward.',
        chinese1: '最上面的门向外开着。',
        liju2: 'Mark was lying unconscious but with no outward sign of injury.',
        chinese2: '马克躺着, 神志不清，但却没有外在的受伤迹象。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2273',
        word: 'oval',
        ciyi: 'a. 椭圆的；卵形的n. 椭圆形；卵形',
        liju1: 'The leaf is oval in shape.',
        chinese1: '叶呈椭圆形。',
        liju2: 'They call it the Oval Office.',
        chinese2: '他们管它叫椭圆办公室。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2274',
        word: 'oven',
        ciyi: 'n. 炉，灶；烤炉，烤箱',
        liju1: 'His cheeks shone red before the glowing oven.',
        chinese1: '他的脸被炉火映得通红。',
        liju2: 'Put the onions and ginger in the oven and let them roast for thirty minutes.',
        chinese2: '把洋葱与生姜放入烤箱中烤30分钟。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2275',
        word: 'overall',
        ciyi: 'a.全面的；综合的，全体的ad. 全部地；总的说来n. 工装裤；罩衫',
        liju1: 'This module provides the overall control for the application.',
        chinese1: '此模块为应用程序提供全面的控制。',
        liju2: 'Overall I was disappointed.',
        chinese2: '总的来说，我感到失望。',
        liju3: 'Will you help me off with my overalls? I am too tired.',
        chinese3: '你能帮我脱掉工作服吗？我太累了。'
      }
      ,
      {
        id: '2276',
        word: 'overcome',
        ciyi: 'vt. 克服；胜过vi. 克服；得胜',
        liju1: 'We can overcome any difficulty，however great.',
        chinese1: '不管多大困难，我们都能克服。',
        liju2: 'If we rally round, we can overcome our present troubles.',
        chinese2: '如果我们同心协力，就能克服我们当前的困难。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2277',
        word: 'overflow',
        ciyi: 'vi. 溢出；泛滥；充溢vt. 使溢出；使泛滥；使充溢',
        liju1: 'We must harness the rivers which overflow annually. ',
        chinese1: '我们必须治理那些每年泛滥的河流。',
        liju2: 'His heart was overflowing with bitterness.',
        chinese2: '他的心中充满了苦涩。',
        liju3: 'Many people overflowed onto the street.',
        chinese3: '许多人被挤到了大街上。'
      }
      ,
      {
        id: '2278',
        word: 'overhaul',
        ciyi: 'vt.彻底检查，大修；改革；（在比赛等中）追上并超过n. 彻底检修',
        liju1: 'Your car needs overhauling.',
        chinese1: '你的汽车该大修了。',
        liju2: 'I was overhauled last week.',
        chinese2: '上周我进行了一次全面性的体检。',
        liju3: 'It did need to overhaul techniques.',
        chinese3: '那的确需要革新技术。',
         liju4: "'It's possible that he could overhaul you.'",
         chinese4: '他有可能会超过你。'
	  }
      ,
      {
        id: '2279',
        word: 'overhead ',
        ciyi: 'ad. 在头顶上；在空中a. 高架的；在头顶上的',
        liju1: 'The fireworks cracked overhead.',
        chinese1: '鞭炮在头顶上空噼啪地爆响。',
        liju2: 'A number of birds are circling overhead.',
        chinese2: '很多鸟在头顶上空盘旋。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2280',
        word: 'overhear',
        ciyi: 'vt. 无意中听到；偷听vi. 无意中听到；偷听到',
        liju1: 'I overheard two doctors discussing my case.',
        chinese1: '我无意中听到两个医生在讨论我的病例。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2281',
        word: 'overlap',
        ciyi: 'n. 重叠；重复vi. 部分重叠；部分的同时发生vt. 与…重叠；与…同时发生',
        liju1: 'Two old trees overlapped their upper branches.',
        chinese1: '那两棵古树的上端分枝相互交搭复生。',
        liju2: 'Overlap the slices carefully so there are no gaps.',
        chinese2: '把薄片小心地叠放在一起，那样就没有间隙。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2282',
        word: 'overlook',
        ciyi: 'vt. 忽略，漏看；俯瞰；远眺；检查；宽容，放任',
        liju1: "'He stood at the balcony to overlook neighbor's hall - room.'",
         chinese1: '他站在阳台上俯瞰邻家的门厅。',
        liju2: 'The important details were overlooked by them,',
        chinese2: '很重要的细节都被他们忽略掉了。',
        liju3: "'I was allowed to overlook Jack's documents by the police.'",
         chinese3: '警方准许我查阅了杰克的个人资料。',
         liju4: 'I beg you overlook my rudeness.',
        chinese4: '我请求你宽恕我的失礼。'
      }
      ,
      {
        id: '2283',
        word: 'overnight',
        ciyi: 'ad. 通宵；突然 a. 晚上的；通宵的vi. 过一夜',
        liju1: 'The snow drifted into huge mounds overnight.',
        chinese1: '雪一夜之间被吹积成许多大堆。',
        liju2: 'In 1970 he became an overnight success in America.',
        chinese2: '1970年他在美国一夜之间成了成功人士。',
        liju3: 'We planned to overnight in Paris and then go to London by air. ',
        chinese3: '我们打算在巴黎过一夜，然后坐飞机去伦敦。'
      }
      ,
      {
        id: '2284',
        word: 'overpass',
        ciyi: 'vt. 超越；胜过；忽略n. 过街天桥',
        liju1: 'Economic shrinking has finally been overpassed now.',
        chinese1: '现在经济萎缩终于过去了。',
        liju2: "'His action won't be overpassed in the studies.'",
         chinese2: '在这些研究工作中，他的作用是不可小看的。',
        liju3: 'A blue car overpassed just now.',
        chinese3: '刚才有一辆蓝色的汽车驶过去了。',
        liju4: 'A squad of traffic police from Dongcheng District said they stopped Li at the Chaoyangmen Overpass at midnight.',
        chinese4: '东城区一小队的交通警察说他们半夜在朝阳门天桥截住李。'
      }
      ,
      {
        id: '2285',
        word: 'overseas',
        ciyi: 'ad. 在海外，海外a. 海外的，国外的',
        liju1: 'The overseas companies were diversifying more rapidly.',
        chinese1: '海外公司正在更迅速地从事各种经营。',
        liju2: "'If you're staying for more than three months or working overseas, a full 10-year passport is required.'",
         chinese2: '如果你在海外居留超过3个月或工作，须持有效期整10年的护照。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2286',
        word: 'overtake',
        ciyi: 'vt. 赶上，赶上，超过；压倒；突然来袭vi. 超车',
        liju1: 'We managed to overtake the last train.',
        chinese1: '我们设法赶上了末班火车。',
        liju2: 'Soon afterwards death overtook him.',
        chinese2: '不久之后，他突然去世了。',
        liju3: 'His kindness was suddenly overtaken by the threats.',
        chinese3: '他的和颜悦色突然变成了威胁和恐吓。'
      }
      ,
      {
        id: '2287',
        word: 'overthrow',
        ciyi: 'n. 推翻；倾覆 vt. 推翻；打倒；倾覆',
        liju1: 'They conspired to overthrow the government.',
        chinese1: '他们密谋推翻政府。',
        liju2: 'Her charms overthrew everyone.',
        chinese2: '她的美貌令所有人倾倒。',
        liju3: 'They were charged with plotting the overthrow of the state.',
        chinese3: '他们被控密谋颠覆国家。'
      }
      ,
      {
        id: '2288',
        word: 'overtime',
        ciyi: 'a. 超时的；加班的ad. 加班地',
        liju1: 'The firm wanted to chisel him out of his overtime pay.',
        chinese1: '公司想要剥夺他的超时加班费。',
        liju2: 'He would work overtime, without pay, to finish a job.',
        chinese2: '他会无偿地加班把一件工作完成。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2289',
        word: 'overturn',
        ciyi: 'vt. 推翻；倾覆 vi. 推翻；倾覆n. 倾覆 ',
        liju1: 'We saw the canoe overturn, throwing its passengers into the water. ',
        chinese1: '我们看到独木舟倾覆了，把上面的乘客掀入水中。',
        liju2: 'The building was overturned at the earthquake.',
        chinese2: '那栋大楼在地震中已坍塌了。',
        liju3: 'Few survived after the overturn of the ship.',
        chinese3: '船翻了，几乎无人幸免。'
      }
      ,
      {
        id: '2290',
        word: 'overwhelm',
        ciyi: ' vt. 淹没；压倒；压垮，制服',
        liju1: 'We overwhelmed the enemy by superior forces.',
        chinese1: '我们以优势兵力打垮了敌军。',
        liju2: 'I was overwhelmed by such a temptation.',
        chinese2: '我经受不住那样的诱惑。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2291',
        word: 'owing',
        ciyi: 'a. 未付的；欠着的v. 欠；把…归功于（owe的ing形式）',
        liju1: 'She always natters about many people owing her money.',
        chinese1: '她总是抱怨说，有许多人欠着她的钱不还。',
        liju2: 'He owed his fame to good fortune.',
        chinese2: '他把他获得的名望归因于好运。',
        liju3: 'Owing to graft, the manager of this company was discharged from his post and prosecuted.',
        chinese3: '由于贪污，这个公司的经理已被撤职查办。'
      }
      ,
      {
        id: '2292',
        word: 'owl',
        ciyi: 'n. 猫头鹰；惯于晚上活动的人',
        liju1: 'Gliding like an owl through the night forest, I was exhilarated and afraid.',
        chinese1: '我就像一头猫头鹰滑翔在树林的黑夜中，既兴奋又害怕。',
        liju2: "'You can work from midnight to4 a.m. if you're a night owl.'",
         chinese2: '你可以从午夜工作到凌晨4点，如果你是个夜猫子的话。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2293',
        word: 'ownership',
        ciyi: 'n. 所有权，所有制',
        liju1: 'The two sides continued to dispute the ownership of the territory. ',
        chinese1: '双方继续争夺那片领土的所有权。',
        liju2: 'The matter in dispute is the ownership of the house.',
        chinese2: '眼下的纠纷是这所房子的所有权问题。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2294',
        word: 'oxide',
        ciyi: 'n. 氧化物',
        liju1: 'In an iron thermite reaction, iron oxide reacts with aluminum and comes out as liquid iron.',
        chinese1: '在铁的铝热剂还原反应中，铁的氧化物与铝反应，从而生成液态铁。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2295',
        word: 'oxygen',
        ciyi: 'n. 氧气，氧',
        liju1: 'Carbon dioxide consists of carbon and oxygen.',
        chinese1: '二氧化碳是由碳和氧组成的。',
        liju2: 'Water is a compound containing the elements hydrogen and oxygen. ',
        chinese2: '水是含有氢元素和氧元素的化合物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2296',
        word: 'ozone ',
        ciyi: 'n. 臭氧；新鲜的空气',
        liju1: 'Ozone in the stratosphere is important because it absorbs some of the Sun’s dangerous ultraviolet radiation.',
        chinese1: '在平流层的臭氧是重要的，因为它吸收了一些太阳中危险的紫外线辐射。',
        liju2: 'The couple drove to the seaside to breathe the ozone every weekend.',
        chinese2: '那对夫妇每个周末都会驱车去海边呼吸新鲜空气。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2297',
        word: 'pace ',
        ciyi: ' n. 一步；步速；步伐vi. 踱步；缓慢而行vt. 踱步于',
        liju1: ' They could not stand the pace or the workload.',
        chinese1: '他们受不了工作的节奏和负荷。',
        liju2: 'The earnings of the average American have failed to keep pace with the rate of inflation.',
        chinese2: '一般美国人的收入跟不上通货膨胀的速度。',
        liju3: 'We have to quicken our pace.',
        chinese3: '我们必须加快步伐。'
      }
      ,
      {
        id: '2298',
        word: 'package',
        ciyi: 'n. 包，包裹，箱vt. 打包；将…包装',
        liju1: 'He seized the package from my hand. ',
        chinese1: '他从我手中夺走了包裹。',
        liju2: 'He packaged up the books and put them under his bed after examination.',
        chinese2: '考完试他就把书捆起来，放到床铺底下去了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2299',
        word: 'pact ',
        ciyi: 'n. 协定；条约；契约',
        liju1: 'Last month he signed a new peace pact with Germany.',
        chinese1: '上个月他与德国签署了一份新的和平条约。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2300',
        word: 'pad ',
        ciyi: 'n. 衬垫；便笺簿 vi. 步行；放轻脚步走vt. 填补；走',
        liju1: 'Pad the back of a car seat with a pillow.',
        chinese1: '在汽车座椅靠背上垫一个头枕。',
        liju2: 'She wrote on a pad of paper.',
        chinese2: '她写在了一本便笺簿上。',
        liju3: 'Pad your schedule to allow time for this stuff. ',
        chinese3: '要在你的时间表里为这类事情填补时间。',
          liju4: 'Freddy speaks very quietly and pads around in soft velvet slippers.',
        chinese4: '弗雷迪一边非常小声地说着，一边穿着柔软的天鹅绒拖鞋轻快地四处走着。'
      }
      ,
      {
        id: '2301',
        word: 'paddle',
        ciyi: ' n. 划桨v. 拌；搅；用桨划',
        liju1: 'Each man had a paddle for an hour and then a rest.',
        chinese1: '每人划一小时桨，然后休息一下。',
        liju2: 'We paddled a little boat in the West Lake.',
        chinese2: '我们在西湖里荡一叶小舟。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2302',
        word: 'pail ',
        ciyi: 'n. 桶，提桶',
        liju1: ' The water drained out of the hole in the pail.',
        chinese1: '水从桶的孔里流出来。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2303',
        word: 'palm ',
        ciyi: 'n. 手掌；棕榈树；掌状物vt. 将…藏于掌中',
        liju1: "'The palm of one's hand is slightly concave. '",
         chinese1: '人的手掌是微凹的。',
        liju2: "'The magician palmed the coin and suddenly produced it from a boy's mouth.'",
         chinese2: '魔术师把硬币藏在掌中，然后突然从一个男孩的嘴里把它变出来。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2304',
        word: 'pamphlet ',
        ciyi: 'n. 小册子',
        liju1: 'These materials have been digested into a handy pamphlet. ',
        chinese1: '这些材料已被汇编成便于使用的小册子。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2305',
        word: 'panel ',
        ciyi: 'n. 面，板；仪表盘，控制板；座谈小组 ',
        liju1: 'She burned the image of a tiger into the wood panel.',
        chinese1: '她在木板上烙出了虎的形象。',
        liju2: 'The equipment was extremely sophisticated and was monitored from a central control panel.',
        chinese2: '这台设备极其复杂，是由中央控制面板监控的。',
        liju3: 'He assembled a panel of scholars to advise him.',
        chinese3: '他集结了一个学者小组为他出谋划策。'
      }
      ,
      {
        id: '2306',
        word: 'panic',
        ciyi: 'n. 恐慌，惊慌；大恐慌',
        liju1: 'Her face distorted in panic.',
        chinese1: '她的脸因恐慌而变相了。',
        liju2: 'They ascribed courage to me for something I did out of sheer panic.',
        chinese2: '由于我纯粹因惊慌而做的事，他们认为我很有勇气。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2307',
        word: 'panorama ',
        ciyi: 'n. 全景；概论，综述',
        liju1: 'Horton looked out over a panorama of fertile valleys and gentle hills.',
        chinese1: '霍顿眺望着那一片肥沃山谷和平缓山脉的景象。',
        liju2: 'The play presents a panorama of the history of communism.',
        chinese2: '这出戏展现了共产主义历史的全貌。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2308',
        word: 'pant ',
        ciyi: 'vi. 喘息；气喘吁吁地说出某事n. 气喘；喘息',
        liju1: 'The dog was panting because of the hot weather.',
        chinese1: ' 因为天热这只狗不停地喘气。',
        liju2: 'Jack was so exhausted that his breathing was only a series of quick pants.',
        chinese2: '杰克累得气喘吁吁。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2309',
        word: 'pants  ',
        ciyi: 'n. 长裤，（宽松的）便裤；内裤',
        liju1: 'She described him as wearing brown corduroy pants and a white cotton shirt.',
        chinese1: '她描述说他穿着棕色的灯芯绒长裤和一件白色的棉衬衫。',
        liju2: 'Tom just wore the little stretchy pants after bath.',
        chinese2: '洗完澡后，汤姆只穿了一条弹力小裤衩。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2310',
        word: 'paperback ',
        ciyi: ' n. 平装本；简装本',
        liju1: 'She said she would buy the book when it comes out in paperback.',
        chinese1: '她说等那本书的平装本面市后她会买一本。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2311',
        word: 'parachute ',
        ciyi: 'n. 降落伞vi. （使某人）跳伞',
        liju1: 'They fell 41,000 ft. before opening their parachutes.',
        chinese1: '他们下落了41000英尺才打开他们的降落伞。',
        liju2: 'He was a courier for the Polish underground and parachuted into Warsaw.',
        chinese2: '他是波兰地下组织的信使，被空降到了华沙。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2312',
        word: 'parade ',
        ciyi: 'n. 游行，检阅；炫耀vi. 游行；炫耀；列队行进',
        liju1: 'The PLA troops paraded through Tiananmen Square on National Day.',
        chinese1: '国庆节那天，中国人民解放军列队经过天安门广场接受检阅。',
        liju2: 'The captured criminals were paraded through the main streets.',
        chinese2: '被抓获的犯人列队游街示众。',
        liju3: 'She is parading the playground in her new dress.',
        chinese3: '她身穿新衣招摇地在操场上走来走去。'
      }
      ,
      {
        id: '2313',
        word: 'paradise',
        ciyi: 'n. 天堂',
        liju1: 'The bird of Paradise is fabled to have no feet.',
        chinese1: '相传天堂的鸟没有脚。',
        liju2: 'On that rainy night, I dreamed to fly to my paradise.',
        chinese2: '在那个落雨之夜，我梦想着飞向我的天堂。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2314',
        word: 'paradox ',
        ciyi: ' n. 悖论，反论；似非而是的论点',
        liju1: 'The story contains many levels of paradox.',
        chinese1: '这个故事包含很多层面的悖论。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2315',
        word: 'paragraph ',
        ciyi: ' n. 段落，节；小新闻，短评vt. 将…分段',
        liju1: 'It will be clearer if you delete the last paragraph.',
        chinese1: '如果你删去最后那一段，它将会更清楚。',
        liju2: 'The teacher taught the students how to paragraph an essay.',
        chinese2: '老师教学生如何把一篇文章分段。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2316',
        word: 'parallel',
        ciyi: 'n. 平行线，平行面；类似，对比，相似物；纬线a. 平行的；并联的，类似的，相同的',
        liju1: 'Remsen Street is parallel with Montague Street.',
        chinese1: '雷姆森大街与蒙塔古大街是平行的。',
        liju2: 'The current from these parallel generators will add up to make a total flow of 500 amperes. ',
        chinese2: '这些并联的发电机所产生的电流累计在一起，总电流达到 500 安培。',
        liju3: 'His experiences parallel mine in many instances.',
        chinese3: '他的经历在许多地方与我的差不多。'
      }
      ,
      {
        id: '2317',
        word: 'paralyze/paralyse ',
        ciyi: 'vt. 使麻痹；使瘫痪。使丧失作用',
        liju1: 'He is paralyzed from the waist down.',
        chinese1: '他下半身瘫痪了。',
        liju2: 'The electricity failure paralyzed the train service.',
        chinese2: '电力故障使火车停驶。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2318',
        word: 'parameter',
        ciyi: 'n. 参数；系数；参量',
        liju1: ' Each parameter should have a unique reference name. ',
        chinese1: '各参数应该有一个唯一的引用名。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2319',
        word: 'parasite',
        ciyi: 'n. 寄生虫',
        liju1: 'The lazy man was a parasite on his family. ',
        chinese1: '那懒汉是家里的寄生虫。',
        liju2: 'Kangaroos harbour a vast range of parasites.',
        chinese2: '袋鼠身上有各种各样的寄生虫。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2320',
        word: 'parcel ',
        ciyi: 'n. 包裹，邮包，小包vt. 打包；捆扎',
        liju1: 'He lifted the parcel down from the shelf. ',
        chinese1: '他把包裹从架子上拿了下来。',
        liju2: 'He parceled up the books and posted them.',
        chinese2: '他把书包好寄走了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2321',
        word: 'parliament ',
        ciyi: ' n. 议会，国会',
        liju1: 'The government succeeded in carrying its plan through Parliament. ',
        chinese1: '政府成功地使计划在国会中获得通过。',
        liju2: 'Parliament has voted the town a large sum of money for a new road.',
        chinese2: '国会投票通过为该城镇提供一大笔资金修建一条新公路。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2322',
        word: 'partial  ',
        ciyi: 'a.部分的，不完整的；偏爱的；不公平的，偏袒的',
        liju1: "'He's partial to sporty women with blue eyes.'",
         chinese1: '他对蓝眼睛的、运动型的女人是偏爱的。',
        liju2: 'I might be accused of being partial.',
        chinese2: '我可能会被人指责是偏袒的。',
        liju3: 'He managed to reach a partial agreement with both republics.',
        chinese3: '他设法跟两个共和国达成了部分共识。'
      }
      ,
      {
        id: '2323',
        word: 'participant ',
        ciyi: 'a. 参与的；有关系的n. 参加者，参与者',
        liju1: '40 of the course participants are offered employment with the company.',
        chinese1: '参加课程学习的人中有40名得到了在该公司工作的机会。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2324',
        word: 'participate ',
        ciyi: 'vi. 参与，参加；分享vt. 分享；分担',
        liju1: 'All of us will participatein the profits.',
        chinese1: '我们大家都将分享到利润。',
        liju2: 'Did you participate in this discussion?',
        chinese2: '你参加这次讨论了吗?',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2325',
        word: 'particle',
        ciyi: 'n. 颗粒，微粒；质点；小品词，虚词',
        liju1: 'This particle has a very small mass.',
        chinese1: '这种粒子的质量很小。',
        liju2: 'The teacher asked Mary to make a sentence with this particle.',
        chinese2: '老师让玛丽用这个小品词造句。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2326',
        word: 'passerby ',
        ciyi: 'n. 行人，过路人',
        liju1: 'A passerby described what he saw moments after the car bomb had exploded.',
        chinese1: '一个过路人描述了汽车炸弹爆炸后瞬间他所看到的情景。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2327',
        word: 'passion ',
        ciyi: 'n. 激情；热情；酷爱；盛怒，大怒',
        liju1: 'He spoke with great passion.',
        chinese1: '他激情洋溢地讲话。',
        liju2: 'His passion for the ballerina soon congealed. ',
        chinese2: '他对那位芭蕾舞女的热情很快就冷下来了。',
        liju3: 'Bill filed into a passion when he heard this upset news.',
        chinese3: '比尔听到这个令人沮丧的消息后勃然大怒。'
      }
      ,
      {
        id: '2328',
        word: 'passive',
        ciyi: 'a. 被动的，消极的；被动语态的',
        liju1: 'They want less passive ways of filling their time.',
        chinese1: '他们需要不那么消极的方式来打发时间。',
        liju2: 'His passive attitude made things easier for me.',
        chinese2: '他的被动态度使我办起事来容易多了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2329',
        word: 'passport',
        ciyi: 'n. 护照，通行证；手段',
        liju1: 'He falsified his birth certificate to get a passport.',
        chinese1: '为了取得护照，他伪造了出生证明。',
        liju2: 'This passport has to be signed before the official can validate it.',
        chinese2: '这个护照必须先行签署，官方才能确认其有效。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2330',
        word: 'paste',
        ciyi: 'vt. 张贴，粘 n. 面团，膏；糊状物',
        liju1: 'Help me to paste up these notices.',
        chinese1: '请帮我把这些布告贴在墙上。',
        liju2: 'Blend a little milk with the custard powder to form a paste.',
        chinese2: '用蛋奶粉和一点牛奶混合成一个面团。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2331',
        word: 'pastime ',
        ciyi: 'n. 娱乐，消遣',
        liju1: 'His favourite pastime is golf.',
        chinese1: '他最喜欢的消遣是打高尔夫。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2332',
        word: 'pasture ',
        ciyi: 'n. 草地；牧场；牧草',
        liju1: 'The farmer laid the big field up for pasture.',
        chinese1: '农场主把这块大田留作牧场。',
        liju2: 'The cows are out now, grazing in the pasture.',
        chinese2: '牛群现在出去了，正在牧场上吃草。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2333',
        word: 'pat',
        ciyi: ' n. 轻拍；小块；轻拍声vt. 轻拍，抚摸vi. 轻拍，抚摸',
        liju1: 'The old man patted the dog with his hand.',
        chinese1: '老人用手轻轻地拍了拍那条狗。',
        liju2: 'Snowflakes were patting against the windowpane.',
        chinese2: '雪花轻轻拍打着玻璃窗。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2334',
        word: 'patch',
        ciyi: 'n.斑点；补丁；碎片；小块土地vt. 修补；解决 vi. 打补丁',
        liju1: 'There was a small patch of blue in the grey clouds.',
        chinese1: '乌云中透着一小块蓝天。',
        liju2: 'The collar on my coat has worn thin, so I must patch it.',
        chinese2: '我大衣的领子已经磨薄了，所以我得补一补。',
        liju3: 'The wall was patched with moss.',
        chinese3: '墙上长着斑斑点点的青苔。',
         liju4: 'We decided to patch up our differences and become friends again.',
        chinese: '我们决定消除我们之间的分歧，言归于好。'
      }
      ,
      {
        id: '2335',
        word: 'patent',
        ciyi: 'vt. 授予专利；取得…的专利权a. 专利的 n. 专利权；执照；专利品',
        liju1: 'P&G applied for a patent on its cookies.',
        chinese1: '宝洁公司为其饼干申请了专利。',
        liju2: 'The invention has been patented by the university.',
        chinese2: '那项发明已经由那所大学获取了专利。',
        liju3: 'For scientists who are willing to push past these obstacles, the next one is the patent system.',
        chinese3: '对于那些愿意冲破这些阻碍的科学家来说，下一个问题是专利系统。'
      }
      ,
      {
        id: '2336',
        word: 'pathetic ',
        ciyi: 'a. 可怜的，感伤的；令人难过的',
        liju1: 'The small group of onlookers presented a pathetic sight.',
        chinese1: '那一小群旁观者显出一幅可怜的样子。',
        liju2: 'It was pathetic to watch Kate’s condition deteriorate day by day.',
        chinese2: '眼看着凯特的病情一天天恶化，真是令人难过。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2337',
        word: 'patience ',
        ciyi: 'n. 耐性，耐心；忍耐，容忍',
        liju1: 'Compiling a dictionary asks patience.  ',
        chinese1: '编词典需要耐心。',
        liju2: 'My patience is almost worn away by their endless quarrel.',
        chinese2: '他们不停的争吵使我的忍耐接近于极限了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2338',
        word: 'patriotic',
        ciyi: 'a. 爱国的',
        liju1: 'He led them in launching a patriotic movement. ',
        chinese1: '他领导他们开展了一场爱国运动。',
        liju2: 'We must carry on the patriotic public health campaign with a great fanfare, reduce disease and improve health conditions. ',
        chinese2: '要大张旗鼓地开展爱国卫生运动，减少疾病，提高健康水平。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2339',
        word: 'patrol',
        ciyi: 'n. 巡逻；巡逻兵，巡逻队vt. 巡逻；巡查vi. 巡逻；巡查',
        liju1: 'During the riots last year, the nighttime patrol force was beefed up with volunteers. ',
        chinese1: '去年骚乱期间志愿者增加了夜间巡逻力量。',
        liju2: 'Guerrillas attacked a patrol with hand grenades.',
        chinese2: '游击队用手榴弹袭击了一支巡逻队。',
        liju3: 'Prison officers continued to patrol the grounds within the jail.',
        chinese3: '狱警们继续在监狱内的场地里巡逻。'
      }
      ,
      {
        id: '2340',
        word: 'patron ',
        ciyi: 'n. 赞助人；保护人',
        liju1: ' The patron came down a path paved with cobblestones. ',
        chinese1: '赞助人经过一条铺着鹅卵石的小路。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2341',
        word: 'pattern ',
        ciyi: 'n. 模式；图案；样品vt. 模仿；以图案装饰vi. 形成图案',
        liju1: 'She pricked out the design from the pattern.',
        chinese1: '她根据样板刺绣出这一图案。',
        liju2: 'He has patterned himself after the example of his father.',
        chinese2: '他一举一动都模仿他父亲的样子。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2342',
        word: 'pave',
        ciyi: 'vt. 铺设；安排；作铺设之用',
        liju1: 'The path is paved with concrete slabs.',
        chinese1: '这条路是用混凝土板铺成的。',
        liju2: 'A long history of success may pave the way for further development.',
        chinese2: '一个长期成功的经历会为进一步的发展铺平道路。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2343',
        word: 'pavement ',
        ciyi: ' n. 人行道',
        liju1: 'The snow on the pavement was compacted and has turned to ice.  ',
        chinese1: '人行便道上的雪被踩实并结成了冰。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2344',
        word: 'paw ',
        ciyi: 'vt. 抓，扒 vi. 用爪子抓；翻找n. 爪子',
        liju1: 'The dog sprang to the door and pawed at the man who was coming in.',
        chinese1: '这条狗跳到门边，拼命地抓进门的人。',
        liju2: 'She pawed through her purse for a comb.',
        chinese2: '她在手提包里乱翻一气找梳子。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2345',
        word: 'payment ',
        ciyi: 'n. 付款，支付 ',
        liju1: 'She fell down on her payment. ',
        chinese1: '她没有如期付款。',
        liju2: ' You may defer payment until next week.',
        chinese2: '你可延期至下周支付。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2346',
        word: 'pea',
        ciyi: 'n. 豌豆',
        liju1: 'A feral sweet pea clings to it for support. ',
        chinese1: '一株野生的甜豌豆攀附而上，倚靠着它。',
        liju2: 'Each pea and peach on the beach can be reached by the peacock. ',
        chinese2: '海滩上的每一颗豌豆和桃子孔雀都能触及。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2347',
        word: 'peach ',
        ciyi: 'n. 桃子；桃树',
        liju1: 'Those boys rifled the peach trees in our garden.',
        chinese1: '那些男孩子把我们花园里的桃树抢摘光了。',
        liju2: 'The peach trees cast all their blossoms after the heavy rain.',
        chinese2: '大雨过后，桃花全部落掉。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2348',
        word: 'peak',
        ciyi: 'n. 山峰；最高点；顶点 v. 使达到最高点a. 最高的；最大值的',
        liju1: 'The book sales have begun to peak off. ',
        chinese1: '图书销售达到最高峰后开始滑坡。',
        liju2: 'In order to get out of the peak-hour traffic, we must start early.',
        chinese2: '我们得早点儿动身以避开交通高峰期。',
        liju3: 'Temperatures have peaked at over 90 degrees.',
        chinese3: '温度已达到峰值，超过了90度。'
      }
      ,
      {
        id: '2349',
        word: 'peanut ',
        ciyi: ' n. 花生',
        liju1: 'The peanut is not really a nut, but a pea.',
        chinese1: '花生其实不是坚果，而是一种豆类。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2350',
        word: 'pearl',
        ciyi: 'n. 珍珠',
        liju1: 'She wore a string of pearls at her throat.',
        chinese1: '她那时脖子上带着一串珍珠。',
        liju2: 'Welcome to the oriental pearl Television Tower! ',
        chinese2: '欢迎来东方明珠电视塔参观!',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2351',
        word: 'pebble',
        ciyi: 'n. 卵石',
        liju1: 'Just then the crow saw a pebble beside the pitcher, and it gave him an idea. ',
        chinese1: '就在这时，乌鸦看到水罐旁边有块小鹅卵石，这让他想到一个主意。',
        liju2: 'The path to the garden was paved with pebbles.',
        chinese2: '通向花园的小径铺满了鹅卵石。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2352',
        word: 'peculiar ',
        ciyi: 'a. 特殊的；独特的；奇怪的；罕见的',
        liju1: 'Mr. Kennet has a rather peculiar sense of humour.',
        chinese1: '肯尼特先生有一种相当不寻常的幽默感。',
        liju2: ' It seems very peculiar that no one noticed the teacher had gone.',
        chinese2: '没人注意到老师离开了，这很古怪。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2353',
        word: 'pedal',
        ciyi: 'n. 踏板；脚蹬子vt. 骑（自行车）；踩…的踏板',
        liju1: 'She climbed on her bike with a feeling of pride and pedalled the five miles home.',
        chinese1: '她怀着一种自豪感跨上自行车，蹬了5英里回到家。',
        liju2: 'I suddenly pressed the brake pedal and we were both thrown forward. ',
        chinese2: '我突然用力踩紧刹车踏板，结果我俩的身体都向前冲去。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2354',
        word: 'pedestrian ',
        ciyi: 'a. 徒步的；缺乏想像力的n. 行人',
        liju1: 'The speeding car barely missed the pedestrian.',
        chinese1: '疾驰的汽车差点撞上那个行人。',
        liju2: 'This novel has a rather pedestrian plot.',
        chinese2: '这部小说的情节相当缺乏想象力。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2355',
        word: 'peel',
        ciyi: ' v. 剥，剥落；削n. 皮',
        liju1: 'Please peel an apple for me. ',
        chinese1: '请给我削个苹果。',
        liju2: 'He nibbled away the apple peel, and then ate the flesh. ',
        chinese2: '他先慢慢地咬去苹果皮，然后再吃果肉。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2356',
        word: 'peep ',
        ciyi: 'vi. 窥视；慢慢露出，出现vt. 使出现',
        liju1: 'Not a dangerous action can peep out his head.',
        chinese1: '危险的举动绝不会在他头脑中出现。',
        liju2: 'Children came to peep at him around the doorway.',
        chinese2: '孩子们来到门口偷看他。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2357',
        word: 'peer ',
        ciyi: 'vi. 凝视，仔细看，费力看；窥视n. 贵族；同等的人',
        liju1: 'I had been peering at a computer print-out that made no sense at all.',
        chinese1: '我一直在费力地看一份不知所云的电脑打印稿。',
        liju2: 'The queen created him a peer.',
        chinese2: '女王封他为贵族。',
        liju3: 'His engaging personality made him popular with his peers.',
        chinese3: '他迷人的个性使他很受同龄人欢迎。'
      }
      ,
      {
        id: '2358',
        word: 'penalty ',
        ciyi: 'n. 罚款，罚金；处罚',
        liju1: 'Some of the players claim a penalty but the referee told them to play on. ',
        chinese1: '有些队员认为应当判罚，但裁判让他们继续比赛。',
        liju2: 'The fees and penalty charges ballooned. ',
        chinese2: '花费和罚款费用一路激增。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2359',
        word: 'pendulum',
        ciyi: ' n. 钟摆；摇锤',
        liju1: 'The political pendulum has swung in favour of the liberals.',
        chinese1: '政治的钟摆已经摆向了自由派。',
        liju2: 'The pendulum swings back and forth.',
        chinese2: '这就像单摆一样来回摆动。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2360',
        word: 'penetrate',
        ciyi: 'vt. 渗透；穿透；洞察vi. 渗透；刺入；看透',
        liju1: 'X-rays can penetrate many objects.',
        chinese1: 'X射线能穿透很多物体。',
        liju2: "'Were you able to penetrate the author's symbolism ? '",
         chinese2: '你能理解作者的象征主义吗?',
        liju3: 'This employee has penetrated his boss’s meaning.',
        chinese3: '这位雇员已经看穿了他老板的意思。'
      }
      ,
      {
        id: '2361',
        word: 'peninsula',
        ciyi: 'n. 半岛',
        liju1: 'Dalian is in the south of the Liaodong Peninsula.',
        chinese1: '大连位于辽东半岛南部。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2362',
        word: 'pension ',
        ciyi: ' n. 退休金，养老金，年金',
        liju1: 'The firm granted him a pension.',
        chinese1: '公司赐予他年金。',
        liju2: 'Since then he has been drawing a pension.',
        chinese2: '从那时起他一直领退休金。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2363',
        word: 'pepper',
        ciyi: 'n. 胡椒；辣椒；胡椒粉vt. 加胡椒粉于',
        liju1: ' The pepper bit my tongue.',
        chinese1: '辣椒辣得我舌头发麻。',
        liju2: 'Mix up the salt with the pepper. ',
        chinese2: '把盐和胡椒粉混合在一起。',
        liju3: "'You don't have to pepper the soup. '",
         chinese3: '你不一定要在汤里撒胡椒面。'
       }
      ,
      {
        id: '2364',
        word: 'per ',
        ciyi: 'prep. 每；经，由；每一',
        liju1: 'They are ramming their motorcycles on the expressway at 80 miles per hour.  ',
        chinese1: '他们正以每小时80英里的速度骑着摩托车在高速公路上疾驶。',
        liju2: "'I'm sending a parcel to you per bearer.'",
         chinese2: '我请来人送上包裹一件。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2365',
        word: 'perceive',
        ciyi: 'vt. 察觉，感觉；理解；认知',
        liju1: 'The students perceived that his behavior had changed.',
        chinese1: '同学们发觉他的行为有些变化。',
        liju2: 'He has now perceived his error.',
        chinese2: '他现在认识到了自己的错误。',
        liju3: 'He is perceived as a religious man.',
        chinese3: '众人认为他是个教徒。'
      }
      ,
      {
        id: '2366',
        word: 'percentage ',
        ciyi: 'n. 百分比；百分率，百分数',
        liju1: 'Whisky contains a large percentage of alcohol. ',
        chinese1: '威士忌含有酒精的百分比很高。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2367',
        word: 'perform',
        ciyi: 'v. 履行，执行；完成；演奏',
        liju1: 'We should always perform before the workers, peasants and soldiers. ',
        chinese1: '我们应该经常为工农兵演出。',
        liju2: 'One should always perform what one promises.',
        chinese2: '一个人应该说到做到。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2368',
        word: 'performance',
        ciyi: 'n. 性能，特性；绩效；表演；履行，执行',
        liju1: 'He devoted in excess of seventy hours a week to the performance of his duties.',
        chinese1: '他每周在自己职责的执行上投入超过70个小时。',
        liju2: 'Her performance exceeded all the others. ',
        chinese2: '她的表演超过所有其他人。',
        liju3: 'The poor performance has been blamed on the recession and cheaper sports car imports.',
        chinese3: '业绩惨淡归咎于经济衰退和更便宜跑车的进口。'
      }
      ,
      {
        id: '2369',
        word: 'perfume ',
        ciyi: ' n. 香水；香味vt. 洒香水于…； 散发香气',
        liju1: "'Who's wearing that spicy perfume? '",
         chinese1: '是谁身上有那么浓的香味?',
        liju2: "'The hall smelled of her mother's perfume.'",
         chinese2: '大厅里弥漫着她母亲的香水味。',
        liju3: 'Those lotuses perfume the whole park. ',
        chinese3: '荷花使整个公园变得很香。'
      }
      ,
      {
        id: '2370',
        word: 'periodical ',
        ciyi: 'a. 周期的；定期的n. 期刊；杂志',
        liju1: 'The quarterly magazine is a periodical published every three months.',
        chinese1: '季刊是每3个月出版一次的期刊。',
        liju2: 'She made periodical visits to her dentist.',
        chinese2: '她定期去看牙医。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2371',
        word: 'perish ',
        ciyi: 'vi. 死亡；毁灭；腐烂；枯萎',
        liju1: 'Most of the butterflies perish in the first frosts of autumn.',
        chinese1: '大多数蝴蝶在秋季初霜来临时死亡。',
        liju2: 'Many flowers perished in the storm.',
        chinese2: '大风雪使许多花朵凋谢。',
        liju3: 'The heavy rain perished all the crops.',
        chinese3: '大雨把所有庄稼都淹死了。'
      }
      ,
      {
        id: '2372',
        word: 'permanent ',
        ciyi: 'a. 永久的，永恒的；不变的n. 烫发',
        liju1: 'They had no permanent address.',
        chinese1: '他们没有固定的地址。',
        liju2: 'Her hair had had a permanent, but had grown out.',
        chinese2: '她的头发曾经烫卷过，但又长出新的了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2373',
        word: 'permeate ',
        ciyi: 'vt. 渗透，透过；弥漫vi. 弥漫；透入；散布',
        liju1: 'The smell of roast beef permeated the air.',
        chinese1: '烤牛肉的气味弥漫在空气中。',
        liju2: 'Water will easily permeate a cotton dress.',
        chinese2: '水很容易渗透棉布衣服。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2374',
        word: 'permission',
        ciyi: 'n. 允许，许可',
        liju1: ' It is forbidden to reprint any article from this magazine without special permission.',
        chinese1: '本杂志中的各篇文章未经特殊许可一律不得转载。',
        liju2: 'They cannot leave the country without permission.',
        chinese2: '没有许可他们不得离开这个国家。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2375',
        word: 'permit',
        ciyi: 'vi. 许可；允许vt. 许可；允许n. 许可证，执照',
        liju1: 'No entrance without a permit.',
        chinese1: '没有许可证不准入内。',
        liju2: 'We must never permit anything of the sort. ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2376',
        word: 'perpetual ',
        ciyi: 'a. 永久的，永恒的；不断的',
        liju1: 'This is my perpetual loyalty to my faith.',
        chinese1: '这是我对自己信仰永恒的忠诚。',
        liju2: 'I thought her perpetual complaints were going to prove too much for me.',
        chinese2: '我觉得她那永无休止的抱怨会让我吃不消的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2377',
        word: 'perplex',
        ciyi: 'vt. 使困惑，使为难；使复杂化',
        liju1: 'His strange behaviour perplexed her greatly.',
        chinese1: '他的奇怪举止使她茫然不解。',
        liju2: "'Don't perplex the issue.'",
         chinese2: '不要使问题复杂化了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2378',
        word: 'persecute',
        ciyi: 'vt. 迫害；困扰；同…捣乱',
        liju1: 'They persecute those who do not conform to their ideas.',
        chinese1: '他们迫害那些不符合他们意见的人。',
        liju2: 'A hooligan persecuted her with telephone calls.',
        chinese2: '小流氓不停地用电话跟她纠缠。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2379',
        word: 'persevere',
        ciyi: 'vi. 坚持；不屈不挠；固执己见（在辩论中）',
        liju1: "'If you persevere with the work, you'll succeed in the end.'",
         chinese1: '你如果把工作坚持下去，最终会取得成功的。',
        liju2: 'He persevered in the fact.',
        chinese2: '他力言坚持这事实。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2380',
        word: 'persist',
        ciyi: 'vi. 存留，坚持；持续',
        liju1: 'He urged the United States to persist with its efforts to bring about peace.',
        chinese1: '他敦促美国坚持努力实现和平。',
        liju2: 'On the tops of some mountains snow persists throughout the year.',
        chinese2: '在有些山顶上，雪终年留存。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2381',
        word: 'personality ',
        ciyi: 'n. 个性；品格；人物',
        liju1: "'The mother's personality pretypified her daughter's. '",
        chinese1: '母亲的个性预示着女儿的个性。',
        liju2: "'Years of living alone may warp one's personality. '",
         chinese2: '长期的孤身生活会使人的性格变得乖戾。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2382',
        word: 'personnel',
        ciyi: 'n. 人事部门；全体人员（职工）',
        liju1: 'Her first job was in personnel.',
        chinese1: '她的第一份工作是在人事部。',
        liju2: 'All the managerial personnel at the factory are hired on contract.',
        chinese2: '工厂所有管理人员都是聘用的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2383',
        word: 'perspective',
        ciyi: ' n. 前途，远景；观点，看法；透视图',
        liju1: 'The authors maintain this perspective throughout the book. ',
        chinese1: '作者在全书中都维持这个观点。',
        liju2: 'With some product licenses, this perspective might not be available.',
        chinese2: '对于某些产品许可证，此透视图可能不可用。',
        liju3: 'Many students go to university to acquire a broader perspective of life.',
        chinese3: '许多学生上大学是为了获得更广阔的人生前景。'
      }
      ,
      {
        id: '2384',
        word: 'persuasion',
        ciyi: 'n. 说服；说服力',
        liju1: ' His father was reached by their persuasion at last.',
        chinese1: '他的父亲最后终于被他们说服了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2385',
        word: 'pessimistic',
        ciyi: 'a. 悲观的，悲观主义的',
        liju1: 'Not everyone is so pessimistic about the future.',
        chinese1: '并非每个人都对未来如此悲观。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2386',
        word: 'pest',
        ciyi: ' n. 害虫；有害之物；讨厌的人',
        liju1: 'Each year ten percent of the crop is lost to a pest called corn rootworm.',
        chinese1: '每年有10%的作物受损于一种叫做玉米根虫的害虫。',
        liju2: 'He climbed on the table, pulled my hair, and was generally a pest.',
        chinese2: '他爬上桌子，揪我的头发，真是个讨厌鬼。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2387',
        word: 'petition',
        ciyi: 'n. 请愿；请愿书；祈求；诉状vt. （向…）请愿；正式请求；恳求',
        liju1: 'They petitioned the government to reduce taxes.',
        chinese1: '他们向政府要求减税。',
        liju2: 'The students in the village petitioned the authority for a new playground.',
        chinese2: '村里的学生恳求当局修建一个新操场。',
        liju3: 'These names will all be added to the petition. ',
        chinese3: '这些名字都将被添加到请愿书中。'
      }
      ,
      {
        id: '2388',
        word: 'petrol',
        ciyi: ' n. 汽油',
        liju1: 'You can use petrol to take out that stain.',
        chinese1: '你可以用汽油去掉那个污渍。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2389',
        word: 'petroleum',
        ciyi: 'n. 石油',
        liju1: 'The petroleum price will be unfrozen next month.',
        chinese1: '对石油价格的限制将于下月取消。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2390',
        word: 'petty',
        ciyi: 'a. 琐碎的；小气的；小规模的',
        liju1: 'He was miserable all the time and fights would start over petty things.',
        chinese1: '他一直都很闷闷不乐，常为一些鸡毛蒜皮的事吵架。',
        liju2: 'I’m not that petty. ',
        chinese2: '我不是那么小气。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2391',
        word: 'pharmacy',
        ciyi: 'n. 药房；配药学，药剂学',
        liju1: 'Pick up the medicine from the pharmacy.',
        chinese1: '从药房取药。',
        liju2: 'He spent four years studying pharmacy.',
        chinese2: '他花了4年时间学习药剂学。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2392',
        word: 'phase',
        ciyi: 'n. 相，相位；阶段，状态，时期vt.使调整相位；使同步，逐步执行vi. 逐步前进',
        liju1: 'The government will phase out an advertising campaign.  ',
        chinese1: '政府将分阶段开展广告宣传。',
        liju2: 'We should phase the input and output of the machine. ',
        chinese2: '我们应该使机器的输入功率和输出功率的相位同步。',
        liju3: 'The crisis is entering a crucial, critical phase.',
        chinese3: '危机正进入一个至关重要的决定性阶段。'
      }
      ,
      {
        id: '2393',
        word: 'phenomenon ',
        ciyi: 'n. 现象',
        liju1: 'We are all familiar with the procrastination phenomenon.  ',
        chinese1: '对拖延现象我们是再熟悉不过了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2394',
        word: 'philosopher',
        ciyi: 'n. 哲学家；哲人',
        liju1: 'Carlos was something of a philosopher.',
        chinese1: '卡洛斯有几分哲人气质。',
        liju2: 'What advice do you have for our young philosopher?',
        chinese2: '对于我们年轻的哲学家们，您有什么忠告？',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2395',
        word: 'philosophy',
        ciyi: 'n. 哲学；哲理；人生观',
        liju1: 'Philosophy is the scientific knowledge that summarizes the nature and society.',
        chinese1: '哲学是关于自然和社会知识总结、概括的一门学科。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2396',
        word: 'phrase ',
        ciyi: ' n. 短语, 习语, 措辞',
        liju1: "'It's difficult to tick off in a phrase. '",
         chinese1: '很难用一句话概括。',
        liju2: 'He hashed a phrase in order to colour the sentence. ',
        chinese2: '他反复推敲一个习语以使该句增色。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2397',
        word: 'physical ',
        ciyi: 'a. 自然科学的，物理的；肉体的，身体的；物质的，有形的n. 体格检查',
        liju1: 'Youth is the time of physical growth.',
        chinese1: '青年时期是长身体的时期。',
        liju2: 'They have cleared up the cause of the physical change.',
        chinese2: '他们已经搞清楚这个物理变化的成因。',
        liju3: 'Bob failed his physical.',
        chinese3: '鲍勃没有通过体格检查。'
      }
      ,
      {
        id: '2398',
        word: 'physician',
        ciyi: 'n. 医师；内科医师',
        liju1: 'The old physician was unfrocked by the Medical Association. ',
        chinese1: '这位老医生被医师公会除名。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2399',
        word: 'physicist',
        ciyi: 'n. 物理学家',
        liju1: 'The physicist explained the law of gravity to us.',
        chinese1: '物理学家向我们解释了地心引力定律。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2400',
        word: 'physiology',
        ciyi: 'n. 生理学；生理机能',
        liju1: 'He was awarded the Nobel Prize for achievements in physiology.',
        chinese1: '他因生理学方面的成就而被授予诺贝尔奖。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2401',
        word: 'pickup',
        ciyi: 'n. 收集，整理；拾起，获得',
        liju1: 'The company had pickup points in most cities.',
        chinese1: '公司在大多数城市都有接取点。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2402',
        word: 'pierce',
        ciyi: 'vt. 刺穿，刺破',
        liju1: 'He pierced the rubber ball with a needle.',
        chinese1: '他用针刺穿橡皮球。',
        liju2: "'The army pierced the enemy's line.'",
         chinese2: '部队突破了敌人的防线。',
        liju3: 'The worker tried to pierce a hole in a piece of leather.',
        chinese3: '工人设法在一块皮革上打一个洞。'
      }
      ,
      {
        id: '2403',
        word: 'pigeon',
        ciyi: 'n. 鸽子',
        liju1: 'Pigeon is the symbol of peace.',
        chinese1: '鸽子是和平的象征。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2404',
        word: 'pilgrim',
        ciyi: 'n. 朝圣者，香客',
        liju1: 'This is where pilgrims to the abbey would pay their first devotions.',
        chinese1: '这儿就是来此修道院的朝圣者做第一次祈祷的地方。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2405',
        word: 'pillar',
        ciyi: 'n. 柱子，柱形物；栋梁',
        liju1: ' My father is a pillar of the community.',
        chinese1: '我父亲是社区的顶梁柱。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2406',
        word: 'pillow',
        ciyi: 'n. 枕头',
        liju1: 'She was sobbing her loneliness into her pillow. ',
        chinese1: '她伏枕啜泣以泄心中的孤寂。',
        liju2: 'She buried face in the pillow. ',
        chinese2: '她把脸埋在枕头里。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2407',
        word: 'pinch',
        ciyi: 'vt. 捏，掐，拧n.紧缺，匮乏；少量，一撮',
        liju1: 'She pinched his arm as hard as she could.',
        chinese1: '她使出全力拧他的胳膊。',
        liju2: 'Consumers are spending less and merchants are feeling the pinch.',
        chinese2: '消费者花钱少了，商家感到手头拮据。',
        liju3: 'The cook pinches salt into the soup.',
        chinese3: '厨师在汤里放了一些盐。'
      }
      ,
      {
        id: '2408',
        word: 'pine',
        ciyi: 'vi. 渴望 n. 松树',
        liju1: 'I pine for the countryside.',
        chinese1: '我渴望乡下的生活。',
        liju2: 'A tall pine dominated the landscape. ',
        chinese2: '一棵高耸的松树俯视全景。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2409',
        word: 'pint',
        ciyi: 'n. 品脱；一品脱的量；一品脱牛奶或啤酒',
        liju1: 'Tommy hands Rose a pint of stout and she hoists it.',
        chinese1: '汤米递给露丝一品脱烈性啤酒，她一饮而尽。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2410',
        word: 'pirate',
        ciyi: 'n. 海盗；盗版vt. 掠夺；翻印；盗版',
        liju1: 'Pirate copies of the DVD are already being sold.',
        chinese1: '该DVD的盗版已经有售了。',
        liju2: 'In the nineteenth century, pirates roamed the seas.',
        chinese2: '19世纪，海盗很猖獗。',
        liju3: 'Computer crimes include data theft and pirating software.',
        chinese3: '计算机犯罪包括数据窃取和盗版软件。'
      },
      {
        id: '2411',
        word: 'pistol',
        ciyi: 'n. 手枪',
        liju1: 'He stowed a small pistol in her handbag.',
        chinese1: '他在她的手袋里藏了一把小手枪。',
        liju2: 'He hopped back up the stairs and took his pistol. ',
        chinese2: '他赶紧返回到楼上，拿上了他的手枪。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2412',
        word: 'piston',
        ciyi: 'n. 活塞',
        liju1: 'Filling the cylinder with steam pushes the piston out.',
        chinese1: '填充汽缸的蒸汽将活塞推出。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2413',
        word: 'pit',
        ciyi: 'n. 矿井；深坑；陷阱',
        liju1: 'She stops and peers into the pit. ',
        chinese1: '她停下来朝坑里面瞟了一眼。',
        liju2: 'The tissue affected by edema will usually pit. ',
        chinese2: '受浮肿影响的组织常在按后起凹陷。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2414',
        word: 'pitch ',
        ciyi: 'vt. 投；掷；用沥青涂；扎营n. 沥青；音高；投掷 ',
        liju1: 'Simon pitched the empty bottle into the lake.',
        chinese1: '西蒙把空瓶子投进湖里。',
        liju2: 'He keyed the piano up to a concert pitch.  ',
        chinese2: '他把钢琴的音调调到了音乐会要求的音高标准。',
        liju3: 'We pitched on the other side of the hill.',
        chinese3: '我们在山的那边扎营。',
         liju4: 'It took us ten days to pitch this road.',
        chinese4: '我们花了10天的时间给这条路铺沥青。'
      }
      ,
      {
        id: '2415',
        word: 'plague',
        ciyi: 'n. 瘟疫；灾祸 vt. 折磨；使苦恼；使得灾祸',
        liju1: 'A terrible plague hit the whole Europe.',
        chinese1: '一场可怕的瘟疫袭击了整个欧洲。',
        liju2: "'He's been plaguing me with silly questions all day!'",
         chinese2: '他整天老是拿愚蠢的问题来烦我!',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2416',
        word: 'plaintiff',
        ciyi: 'n. 原告',
        liju1: "'The plaintiff's right to set aside the deed is barred by laches.'",
         chinese1: '原告解约的权利由于迟迟不予行使而不得再次提出。',
        liju2: 'The lead plaintiff of the lawsuit is the University of California.',
        chinese2: '这次诉讼的第一原告是加利福尼亚大学。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2417',
        word: 'planet ',
        ciyi: 'n. 行星',
        liju1: 'They claimed to have discovered a new planet. ',
        chinese1: '他们宣称发现了一颗新的行星。',
        liju2: 'How do you distinguish between a star and a planet? ',
        chinese2: '你如何区分恒星和行星?',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2418',
        word: 'plantation',
        ciyi: 'n.种植园，大农场',
        liju1: 'One such film explores whether a sugar plantation in Kenya will lead to opportunity or disaster. ',
        chinese1: '有一部影片探究的是肯尼亚糖料种植园会带来机遇还是灾难。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2419',
        word: 'plaster',
        ciyi: 'n. 石膏；灰泥；膏药vt.涂以灰泥',
        liju1: 'They chinked the holes in the walls with plaster. ',
        chinese1: '他们用灰泥堵塞住墙上的洞。',
        liju2: 'The ceiling he had just plastered fell in and knocked him off his ladder.',
        chinese2: '他刚抹过灰泥的那块天花板脱落了，把他从梯子上砸了下来。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2420',
        word: 'plastic',
        ciyi: 'a. 塑料的；可塑的n. 塑料制品',
        liju1: "'If plastic and rubber are burnt, they'll give off poisonous gases. '",
         chinese1: '要是塑料和橡胶被焚，就会放出有毒的气体。',
        liju2: 'The plastic coating is easy to apply on any surface.  ',
        chinese2: '塑性涂料容易涂在任何表面上。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2421',
        word: 'plateau',
        ciyi: 'n. 高原；稳定水平',
        liju1: ' As the river drops from the plateau，it forms great waterfalls. ',
        chinese1: '河水从高原上下落时，形成了巨大的瀑布。',
        liju2: 'The U.S. heroin market now appears to have reached a plateau.',
        chinese2: '美国的海洛因市场目前似乎已进入了一个稳定阶段。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2422',
        word: 'platform',
        ciyi: 'n. 平台；月台，站台；政纲，党纲',
        liju1: 'Our train departs from platform 3. ',
        chinese1: '本次列车从3号站台发车。',
        liju2: 'The two pieces of wood were lashed together to form a platform. ',
        chinese2: '两块木头被用绳子绑在一起做成了一个平台。',
        liju3: 'The party has announced a platform of political and economicreforms.',
        chinese3: '该党已宣布了一份关于政治和经济改革的施政纲领。'
      }
      ,
      {
        id: '2423',
        word: 'plausible',
        ciyi: 'a. 貌似可信的，貌似真实的，貌似合理的',
        liju1: 'A more plausible explanation would seem to be that people are fed up with the administration.',
        chinese1: '一个更合理的解释似乎是人们对行政机关感到厌倦。',
        liju2: "'All I can say is that he was so plausible it wasn't just me that he conned.'",
         chinese2: '我只能说，他看上去好像那么可信，他骗的可不只我一个。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2425',
        word: 'plea',
        ciyi: ' n. 恳求，请求；辩解，辩护；借口，托辞',
        liju1: ' I conjure you to hear my plea. ',
        chinese1: '我恳求你听取我的请求。',
        liju2: 'No plea can be set up on the ground of ignorance. ',
        chinese2: '以无知为理由而提出的抗辩是不能成立的。',
        liju3: 'Phillips murdered his wife, but got off on a plea of insanity.',
        chinese3: '菲利普斯谋杀了自己的妻子，但以精神错乱为由逃脱了罪责。'
      }
      ,
      {
        id: '2426',
        word: 'plead',
        ciyi: ' vt. 借口；为...辩护；托称vi. 恳求；辩护',
        liju1: 'He was kneeling on the floor pleading for mercy.',
        chinese1: '他正跪在地板上请求宽恕。',
        liju2: 'He appeared before the committee to plead his case.',
        chinese2: '他出现在委员会上为他的案子辩护。',
        liju3: 'Mr. Giles pleads ignorance as his excuse.',
        chinese3: '贾尔斯先生以不知情作为他的借口。'
      }
      ,
      {
        id: '2427',
        word: 'pledge',
        ciyi: 'n. 保证，誓言；抵押品vt. 保证，许诺',
        liju1: 'He would keep his pledge to the utmost of his power.',
        chinese1: '他将极力信守他的誓言。',
        liju2: 'I have left the watch as pledge for borrowed money. ',
        chinese2: '我留下这块手表作为借款的抵押物。',
        liju3: 'The president pledged himself to increase taxes for the rich but not the middle classes.',
        chinese3: '总统保证增加富人而不是中产阶级的税收。'
      }
      ,
      {
        id: '2428',
        word: 'plentiful',
        ciyi: 'a. 丰富的；许多的；丰饶的',
        liju1: 'The pigs battened on the plentiful fodder. ',
        chinese1: '那些猪饲料充足，吃得膘肥体壮。',
        liju2: 'Fish are plentiful in the lake.',
        chinese2: '这个湖里鱼很多。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2429',
        word: 'plight',
        ciyi: 'n. 困境；境况vt. 保证；约定',
        liju1: 'He plighted his word to attempt it.',
        chinese1: '他发誓一试。',
        liju2: 'I saw the plight of the farmers, whose crops had died.',
        chinese2: '我看到了农民因庄稼死亡而陷入困境。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2430',
        word: 'plot',
        ciyi: 'n. 情节；阴谋；小块土地；vt.绘图；标绘vi. 密谋；策划',
        liju1: 'He tipped the plot to us.',
        chinese1: '他把这个阴谋泄露给我们。',
        liju2: 'He roughcast the plot of the novel. ',
        chinese2: '他简略写出了小说的情节。',
        liju3: "'I thought that I'd buy myself a small plot of land and build a house on it.'",
         chinese3: '我觉得我应该给自己买一小块地，在上面盖一所房子。',
          liju4: 'The military were plotting a coup.',
        chinese4: '该军方当时正在密谋政变。',
        liju5: 'The prisoners plotted an escape route.',
        chinese5: '囚犯画出了逃跑路线。'
      },
      {
        id: '2431',
        word: 'plug',
        ciyi: 'n. 插头；塞子vi. 塞住vt. 插入；塞住',
        liju1: 'This socket only accepts a two-pronged plug.',
        chinese1: '这个插座只能插入两脚插头。',
        liju2: 'The drain will plug up if you let grease settle in it.',
        chinese2: '如果你让油脂积存，排水管就会堵塞。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2432',
        word: 'plumber',
        ciyi: 'n. 水管工,管子工,水暖工',
        liju1: 'Not only is there no God, but try getting a plumber on weekends. ',
        chinese1: '不仅上帝不存在，而且周末连一个水管工都找不到。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2433',
        word: 'plunge',
        ciyi: 'n. 投入；尝试 v. 使陷入；使投入；使插入，猛冲',
        liju1: 'He ran to the edge of the swimming pool and plunged in.',
        chinese1: '他跑到游泳池边，一纵身跳进水里。',
        liju2: 'At least 50 people died when a bus plunged into a river.',
        chinese2: '一辆公共汽车冲进了河里，至少有50人死亡。',
        liju3: 'The two men plunged into discussion.',
        chinese3: '这两个男人突然投入了讨论。',
         liju4: 'If you have been thinking about buying mutual funds, now could be the time to take the plunge.',
        chinese4: '如果你一直在考虑购买共同基金，现在也许是冒险一试的时候了。'
      }
      ,
      {
        id: '2435',
        word: 'plural',
        ciyi: 'a. 复数的n. 复数',
        liju1: 'The letter “s” terminates most plural nouns.',
        chinese1: '大多数复数名词以字母“s”结尾。',
        liju2: 'Sometimes a noun has the irregular plural.',
        chinese2: '有些名词会有不规则的复数形式。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2436',
        word: 'plus ',
        ciyi: 'n. 正号，加号 a. 正的；附加的prep. 加，加上',
        liju1: 'Three plus three makes six.',
        chinese1: '三加三等于六。',
        liju2: 'The aircraft was subjected to temperatures of minus 65 degrees and plus 120 degrees.',
        chinese2: '这架飞机经受过零下65度和零上120度的考验。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2437',
        word: 'pneumonia',
        ciyi: 'n. 肺炎',
        liju1: 'Penicillin cured him of pneumonia.',
        chinese1: '青霉素治好了他的肺炎。',
        liju2: 'That bout of pneumonia enfeebled her.  ',
        chinese2: '那次肺炎的发作使她虚弱了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2438',
        word: 'poetry',
        ciyi: 'n. 诗；诗歌，诗集，诗歌艺术',
        liju1: 'Her love for him is enshrined forever in her poetry.  ',
        chinese1: '她对他的爱被永远珍藏在她的诗中。',
        liju2: 'English poetry is one of their great heritages. ',
        chinese2: '英国诗歌是他们的伟大遗产之一。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2439',
        word: 'poison',
        ciyi: 'vt.使中毒，放毒于；败坏n. 毒药，毒物',
        liju1: 'He wanted to walk down these poison. ',
        chinese1: '他想通过散步消除这些毒素。',
        liju2: 'His wife poisoned him with arsenic.',
        chinese2: '他妻子用砒霜把他毒死了。',
        liju3: 'The whole atmosphere has really been poisoned.',
        chinese3: '整个气氛已经完全被破坏了。'
      }
      ,
      {
        id: '2440',
        word: 'poisonous',
        ciyi: 'a. 有毒的；恶毒的',
        liju1: ' A lot of poisonous waste water comes from that chemical factory. ',
        chinese1: '那个化工厂排出大量有毒的废水。',
        liju2: "'If plastic and rubber are burnt, they'll give off poisonous gases.'",
         chinese2: '要是塑料和橡胶被焚，就会放出有毒的气体。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2441',
        word: 'poke ',
        ciyi: 'vt. 刺，捅；戳；拨开n. 戳；刺',
        liju1: 'Be careful not to poke someone in the eye with your umbrella. ',
        chinese1: '注意别把伞戳着别人的眼睛。',
        liju2: 'He poked his finger into the hole.',
        chinese2: '他把手指戳进洞里。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2442',
        word: 'polar',
        ciyi: 'a. 极地的；磁极的；正好相反的，截然对立的',
        liju1: 'There was a period of excessive warmth which melted some of the polar ice.',
        chinese1: '有段时期温度过高，融化了极地的部分冰层。',
        liju2: "'The nomads' lifestyle was the polar opposite of collectivization.'",
         chinese2: '游牧民的生活方式同集体化的生活方式刚好相反。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2443',
        word: 'policy',
        ciyi: 'n. 政策，方针',
        liju1: 'The policy guarantees us against all loss.',
        chinese1: '这项政策保证了我们免受全部损失。',
        liju2: 'You are advised to read the small print of homeowner and car insurance policies.',
        chinese2: '建议你读一下房主保险单和汽车保险单上的小号印刷字。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2444',
        word: 'polish',
        ciyi: 'n. 擦亮剂v. 擦亮，磨光，使完美；修改；润色a. 波兰的',
        liju1: 'Polish your shoes with a brush.',
        chinese1: '用刷子把你的鞋子擦亮。',
        liju2: 'The still air smelled faintly of furniture polish.',
        chinese2: '久未流通的空气中有股淡淡的家具漆的气味。',
        liju3: 'The Polish clergy use their influence to polonize the people.  ',
        chinese3: '波兰的教士们运用他们的影响去使人民波兰化。'
      }
      ,
      {
        id: '2445',
        word: 'politician',
        ciyi: 'n. 政治家，政客',
        liju1: 'The newspaper editorial defamed the politician. ',
        chinese1: '该报社论诬蔑这名政治家。',
        liju2: 'The politician deluded the voters with election promises. ',
        chinese2: '那政客用竞选诺言欺骗选民。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2446',
        word: 'politics',
        ciyi: 'n. 政治，政治学；政纲，政见',
        liju1: "'One can't separate politics from economics.'",
         chinese1: '不能把政治与经济割裂开来。',
        liju2: 'My politics are well to the left of centre.',
        chinese2: '我的政治观点很靠左翼。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2447',
        word: 'poll ',
        ciyi: 'n.选票；民意测验v. 投票；对…进行民意测验',
        liju1: 'She polled a village on the matter of building a new church.',
        chinese1: '她组织村民就新建一所新教堂一事投票表决。',
        liju2: 'We are doing a weekly poll on the president, and clearly his popularity has declined.',
        chinese2: '我们正在对总统进行每周一次的民意测验，很显然他的受欢迎度已经下降了。',
        liju3: 'The result showed he had polled enough votes to force a second ballot.',
        chinese3: '结果显示他获得了足够的选票来促使第二轮选举。'
      }
      ,
      {
        id: '2448',
        word: 'pond',
        ciyi: 'v. 筑成池塘n. 池塘',
        liju1: 'Wild flowers and grasses rimmed the little pond.',
        chinese1: '各种野花和野草环绕着这个小池塘。',
        liju2: 'The lake was possibly ponded by lavas.',
        chinese2: '这个湖可能是熔岩堵塞河道形成的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2449',
        word: 'ponder',
        ciyi: 'v.衡量，考虑；沉思',
        liju1: ' We can ponder over the ways and means for raising funds before the construction work starts. ',
        chinese1: '我们可以在建筑工程开工之前详细考虑各种筹款集资的措施。',
        liju2: 'She pondered her words thoroughly.',
        chinese2: '她说每一句话都要仔细掂量。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2450',
        word: 'pop',
        ciyi: 'n.砰的一声vi. 突然出现a. 流行的；通俗的',
        liju1: 'The radio station recently pumps out pop music. ',
        chinese1: '这家广播电台近来连续播放流行音乐。',
        liju2: 'The champagne cork popped when he pulled it out.',
        chinese2: '他拔香槟酒的瓶塞时它砰的一声开了。',
        liju3: 'An idea popped into his mind like a flash.',
        chinese3: '他头脑里突然闪过一个念头。'
      },
      {
        id: '2451',
        word: 'pope',
        ciyi: 'n. 教皇，罗马教皇',
        liju1: 'He was the first pope to visit the White House. ',
        chinese1: '他是访问白宫的第一位教皇。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2452',
        word: 'porcelain',
        ciyi: 'n. 瓷；瓷器a. 瓷制的；精美的',
        liju1: "'I don't know enough about porcelain to be able to price these plates.'",
         chinese1: '我不太懂得瓷器，估计不出这些盘子的价钱。',
        liju2: 'These porcelain plates have rather original designs on them. ',
        chinese2: '这些瓷盘的花纹很别致。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2453',
        word: 'porch',
        ciyi: 'n. 门廊；走廊',
        liju1: 'The porch is supported by six immense pillars. ',
        chinese1: '门廊由六根大柱子支撑着。',
        liju2: 'They glassed in the open porch. ',
        chinese2: '他们将门廊用玻璃围住。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2454',
        word: 'portable',
        ciyi: 'a. 手提的，便携式的n. 手提式打字机',
        liju1: 'There was a little portable television switched on behind the bar.',
        chinese1: '吧台后有一台便携式小电视机开着。',
        liju2: 'We bought a portable for the bedroom.',
        chinese2: '我们卧室里买了台便携设备。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2455',
        word: 'porter',
        ciyi: ' n. 门房；行李搬运工',
        liju1: ' Our taxi pulled up at Old Delhi station and a porter sprinted to the door.',
        chinese1: '我们的出租车停在老德里车站，一个搬运工疾步跑向车门。',
        liju2: 'The porter told us Tom lived on the fifth floor.',
        chinese2: '门房告诉我们汤姆住在五楼。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2456',
        word: 'portfolio',
        ciyi: 'n. 公文包；文件夹，作品集；证券投资组合',
        liju1: ' After dinner that evening, Edith showed them a portfolio of her own political cartoons.',
        chinese1: '那天晚饭后，伊迪丝给他们看了她自己的政治漫画选辑。',
        liju2: 'Please take good care of your portfolio after you go aboard.',
        chinese2: '上船后请保管好您的公文包。',
        liju3: 'If you own more than one security, you have an investment portfolio. ',
        chinese3: '如果你拥有了不止一种证券，你就拥有了一个投资组合。'
      }
      ,
      {
        id: '2457',
        word: 'portion ',
        ciyi: 'n. 部分；一份；命运vt. 分配',
        liju1: 'She applied a portion of her salary each month to savings.',
        chinese1: '她每月把一部分薪金用于储蓄。',
        liju2: 'The conquered territories were portioned out among the victors.',
        chinese2: '被征服的领土在胜利者之间被均分了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2458',
        word: 'portrait',
        ciyi: 'n. 肖像，画像；半身雕塑像',
        liju1: 'The artist has reproduced your features very well in this portrait. ',
        chinese1: '这位艺术家在这幅画像中把你的容貌重现得维妙维肖。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2459',
        word: 'portray',
        ciyi: 'vt. 描绘，描写；扮演，饰演',
        liju1: 'The author portrays life in a refugee camp very vividly.',
        chinese1: '作者生动地描述了难民营中的生活。',
        liju2: 'In 1975 he portrayed the king in a Los Angeles revival of "Camelot."',
        chinese2: '1975年他在洛杉矶重演的戏剧《卡米洛特》中扮演国王。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2460',
        word: 'pose',
        ciyi: ' vt. 造成；摆姿势；提出…讨论vi. 摆姿势；佯装；矫揉造作',
        liju1: 'Allow me to pose several questions.',
        chinese1: '请允许我提几个问题。',
        liju2: 'The great photographer posed them in front of a row of tenement.',
        chinese2: '摄影大师让他们在一排公寓房面前摆好姿势。',
        liju3: 'She loves to pose when men are around.',
        chinese3: '当有男人在四周时她喜欢装腔作势，故作姿态。',
         liju4: "'He posed as a newsman to get in.'",
        chinese4: '他假装新闻记者混了进去。',
	      liju5: "'The workers' movement poses a direct threat to their interests.'",
         chinese5: '工人运动对他们的利益造成了直接威胁。'
	  }
      ,
      {
        id: '2461',
        word: 'positive',
        ciyi: 'a. 积极的；正的，阳性的；确定的，肯定的；十足的，完全的n. 正数；正片',
        liju1: 'Be positive about your future and get on with living a normal life.',
        chinese1: '要积极面对未来，习惯过一种平常生活。',
        liju2: 'There was no positive evidence that any birth defects had arisen as a result of Vitamin A intake.',
        chinese2: '没有确凿证据表明摄入维生素A会导致先天缺陷。',
        liju3: 'If the test is positive, a course of antibiotics may be prescribed.',
        chinese3: '如果化验结果呈阳性，可能要开一个疗程的抗生素。',
         liju4: 'We made ten positives from the negative.',
        chinese4: '我们用这张底片洗出了10 张正片。'
      }
      ,
      {
        id: '2462',
        word: 'possess',
        ciyi: ' vt. 占有，拥有，具备',
        liju1: 'Revolutionaries should possess the noble qualities of the proletariat. ',
        chinese1: '革命者应该具有无产阶级的崇高品质。',
        liju2: 'He decided to give away everything he possessed and become a monk.',
        chinese2: '他决定放弃他所有的一切，出家为僧。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2463',
        word: 'possibility ',
        ciyi: 'n. 可能性；可能发生的事物',
        liju1: 'We had to explore this possibility very gingerly. ',
        chinese1: '我们必须极其小心地探索这个可能性。',
        liju2: 'Once you have eliminated the obvious causes of death, you must consider the possibility of foul play. ',
        chinese2: '一旦排除了明显的死因，你就必须考虑到可能有人采取了卑劣手段。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2464',
        word: 'postage',
        ciyi: 'n. 邮资，邮费',
        liju1: 'The sum covers the cost inclusive of postage. ',
        chinese1: '款项包括邮资在内的全部费用。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2465',
        word: 'poster ',
        ciyi: 'n. 海报，广告；招贴',
        liju1: 'This poster sells the virtues of travel and trips on the Thames.',
        chinese1: '这份海报则是在宣传泰晤士河河畔旅行的优点。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2466',
        word: 'postpone',
        ciyi: 'vt. 推迟，使…延期；把…放在次要地位；把…放在后面',
        liju1: 'Lacking money, they had to postpone their plan. ',
        chinese1: '没有钱，他们只得推迟计划。',
        liju2: 'He always postpones his private ambitions to the public welfare.',
        chinese2: '他总是把个人抱负置于公众福利之后。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2467',
        word: 'posture',
        ciyi: 'n. 姿势；态度 vi. 摆姿势',
        liju1: 'You can make your stomach look flatter instantly by improving your posture.',
        chinese1: '你可以改善坐姿，腹部就会马上显得平些。',
        liju2: "'You've postured until everyone's sick of you.'",
        chinese2: '你装模作样，直到大家都讨厌你。',
        liju3: 'You should adopt a more cooperative posture with the judge.',
        chinese3: '你应该对法官采取更为合作的态度。'
      }
      ,
      {
        id: '2468',
        word: 'potential',
        ciyi: 'n.潜力，潜能；电势a. 潜在的；可能的；势的，位的',
        liju1: 'We are aware of the potential problems and have taken every precaution.',
        chinese1: '我们意识到了潜在的问题，已经采取了一切防范措施。',
        liju2: 'The school strives to treat students as individuals and to help each one to achieve their full potential.',
        chinese2: '学校力图因材施教，并帮助每位学生发挥他们的全部潜能。',
        liju3: 'The stored energy of position is referred to as potential energy.',
        chinese3: '这种被储存的位置能量称为势能。'
      }
      ,
      {
        id: '2469',
        word: 'poultry',
        ciyi: 'n. 家禽，家禽肉',
        liju1: 'The menu features roast meats and poultry.',
        chinese1: '菜单以各种烤肉和家禽肉为特色。',
        liju2: 'What do you feed the poultry on?',
        chinese2: '你们用什么饲料喂养家禽？',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2470',
        word: 'poverty',
        ciyi: 'n. 贫困；困难',
        liju1: 'They were driven by poverty and hunger to steal.',
        chinese1: '他们行窃是为贫穷与饥饿所迫。',
        liju2: 'We must fend against poverty. ',
        chinese2: '我们必须抵御贫穷。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2471',
        word: 'powder',
        ciyi: ' n. 粉；粉末；火药，炸药 v.搽粉于',
        liju1: 'This machine grinds up these rocks into powder.  ',
        chinese1: '这部机器把这些石块磨成粉末。',
        liju2: 'She powdered her face and applied her lipstick and rouge.',
        chinese2: '她往脸上搽了粉，又涂了她的口红和胭脂。',
        liju3: 'The introduction of powder gradually made the bow and arrow obsolete.',
        chinese3: '火药的引进逐渐使弓箭成了过时的武器。'
      }
      ,
      {
        id: '2472',
        word: 'powerful',
        ciyi: 'a. 强大的；强有力的，有权的',
        liju1: 'The army pinned the enemy to its ground by powerful infantry attacks.',
        chinese1: '部队以强大的步兵进攻来牵制敌人使其不能离开。',
        liju2: 'Jack quickly established himself as a powerful member of the new company. ',
        chinese2: '杰克在新公司里使自己很快成为一名强有力的成员。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2473',
        word: 'practitioner',
        ciyi: 'n. 开业者，从业者，执业医生',
        liju1: 'You can do this by selecting only roles that interest you, as a practitioner. ',
        chinese1: '作为一名从业者，您可以通过只选择那些您感兴趣的角色来进行操作。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2474',
        word: 'pray',
        ciyi: 'vt. 祈祷；恳求；央求vi. 祈祷；请；恳求',
        liju1: 'I would never believe that Londoners would pray for rain.',
        chinese1: '我永远也不相信伦敦人会祈求老天爷下雨。',
        liju2: 'I earnestly pray for your pardon.',
        chinese2: '我恳切地请求你原谅。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2475',
        word: 'prayer',
        ciyi: 'n. 祈祷，祷告；祈祷文',
        liju1: 'He upraised his hands in prayer. ',
        chinese1: '他在祈祷时高举双手。',
        liju2: 'The bell of the church struck to call the worshippers to prayer.',
        chinese2: '教堂的钟声敲响，让信徒们作祈祷。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2476',
        word: 'preach',
        ciyi: 'vt. 说教，宣讲，竭力鼓吹 vi.讲道，布道',
        liju1: 'The teacher kept preaching about the importance of study.',
        chinese1: '老师不断地宣讲学习的重要性。',
        liju2: 'She preached economy as the best means of solving the crisis.',
        chinese2: '她大力鼓吹节约是解决危机的关键。',
        liju3: 'Christ preached that we should love each other.',
        chinese3: '基督在布道中说人们应该互爱。'
      }
      ,
      {
        id: '2477',
        word: 'precaution',
        ciyi: 'n. 预防，警惕；预防措施',
        liju1: ' The fact woke them up to the need for the safety precaution.  ',
        chinese1: '事实使他们认识到安全防范的必要性。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2478',
        word: 'precede',
        ciyi: 'v. 领先，在…之前；优于，高于',
        liju1: 'The eldest prince precedes all men except the king.',
        chinese1: '大太子位于皇上之下万人之上。',
        liju2: 'He preceded his speech with a vote of thanks to the committee.',
        chinese2: '他发表讲话前先提议向全体委员表示感谢。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2479',
        word: 'precedent ',
        ciyi: 'n. 先例；前例；惯例',
        liju1: 'Principles and rules have petrified with the accumulated weight of precedent. ',
        chinese1: '由于层层先例的累积使原则和章程变得僵化呆板了。',
        liju2: 'Is there a precedent for what you want me to do? ',
        chinese2: '你要我做的事有前例可援吗?',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2480',
        word: 'preceding ',
        ciyi: 'a. 在前的，在先的；前述的',
        liju1: 'She informed us that eighteen members of the staff had left during the preceding year.',
        chinese1: '她当时告知我们，18位教职员在此前的一年里离开了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2481',
        word: 'precious',
        ciyi: 'a. 宝贵的；珍贵的',
        liju1: 'You are loafing away your precious time!  ',
        chinese1: '你在虚度宝贵的光阴。',
        liju2: 'The precious gold rings and necklets were encased in box to preserve them.',
        chinese2: '珍贵的金戒指和项链珍藏在盒子里。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2482',
        word: 'precise',
        ciyi: 'a. 精确的，准确的；明确的',
        liju1: 'They speak very precise English.',
        chinese1: '他们说非常标准的英语。',
        liju2: 'The precise location of the wreck was discovered in 1988.',
        chinese2: '船舶失事的确切地点是在1988年发现的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2483',
        word: 'precision',
        ciyi: 'n.精密度；精确，准确',
        liju1: 'This precision instrument is worth 10,000 yuan.',
        chinese1: '这台精密仪器价值一万元。',
        liju2: 'Planes fly daily over regular routes with timetable precision.',
        chinese2: '飞机每天精确地按时刻表飞行在各条航线上。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2484',
        word: 'preclude',
        ciyi: 'vt. 排除；妨碍；阻止',
        liju1: 'The temporary cease-fire agreement does not preclude possible retaliatory attacks later.',
        chinese1: '临时停火协议不能防止以后发生报复性攻击的可能性。',
        liju2: 'At 84, John feels his age precludes too much travel.',
        chinese2: '在84岁时，约翰感觉到他的年龄不允许他作太多的旅行。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2485',
        word: 'predecessor',
        ciyi: 'n. 前任，前辈；（被取代的）原有事物；前身',
        liju1: 'He maintained that he learned everything he knew from his predecessor.',
        chinese1: '他坚称他所知道的一切都是从他的前任那儿学到的。',
        liju2: 'The new law was bound to share the fate of its predecessor.',
        chinese2: '这部新法律必将遭受与前一部同样的命运。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2486',
        word: 'predict',
        ciyi: 'vt. 预报，预言；预知',
        liju1: 'No one had enough foresight to predict the winner. ',
        chinese1: '谁也没有足够的先见能预测哪一个获胜。',
        liju2: 'The latest opinion polls are predicting a very close contest.',
        chinese2: '最新的民意测验预言将是一场势均力敌的竞赛。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2487',
        word: 'predominant',
        ciyi: 'a.（over）占优势的；主要的，突出的；卓越的',
        liju1: 'The predominant route of infection appears to be consumption of contaminated food.',
        chinese1: '感染的主要途径是食用了受污染的食品。',
        liju2: ' Our team is predominant over theirs in the competition.',
        chinese2: '在比赛中我们队比他们队占优势。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2488',
        word: 'preface',
        ciyi: 'n. 序言，前言；引语vt. 为…加序言；以…开始vi. 作序',
        liju1: "'The preface of the book includes an account of the author's life.'",
         chinese1: '该书前言记述了作者生平。',
        liju2: 'He prefaced the diaries with a short account of how they were discovered.',
        chinese2: '他给这本日记写了序言，简述日记发现的经过。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2489',
        word: 'preferable',
        ciyi: 'a. 更好的，更可取的；更合意的',
        liju1: 'Prevention of a problem is always preferable to trying to cure it.',
        chinese1: '防止出现问题总是比试图解决问题更可取。',
        liju2: 'A big earthquake a long way off is preferable to a smaller one nearby.',
        chinese2: '远处的大地震要比近处的小地震好。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2490',
        word: 'preference',
        ciyi: 'n. 喜爱，偏爱，优惠，优先权',
        liju1: 'It upset her when men revealed a preference for her sister.',
        chinese1: '当男人们显露出偏爱她妹妹的时候，她很不高兴。',
        liju2: 'The Pentagon has said it will give preference to companies with which it can do business electronically.',
        chinese2: '五角大楼已经宣布它将优先考虑能与之进行电子交易的公司。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2491',
        word: 'pregnant',
        ciyi: ' a. 怀孕的，妊娠的；充满的，富有意义的',
        liju1: 'Helen aborted when she was three months pregnant.',
        chinese1: '海伦怀孕三个月时流产了。',
        liju2: 'There was a long, pregnant silence, which Mrs. Madrigal punctuated by reaching for the cheque.',
        chinese2: '马德里加尔太太伸手去拿那支票，打破了那一阵长时间的、耐人寻味的沉默。',
        liju3: 'Thomas used to be an artist pregnant with creative ideas.',
        chinese3: '托马斯曾经是一位充满创造性想法的艺术家。'
      }
      ,
      {
        id: '2492',
        word: 'prejudice ',
        ciyi: 'n. 偏见，成见；侵害vt. 损害；使抱有偏见',
        liju1: 'He is free from prejudice to everybody. ',
        chinese1: '他对所有的人都不带有任何成见。',
        liju2: 'Your bad spelling may prejudice your chances of getting the job.',
        chinese2: '拼写拙劣会影响你获得这个职位。',
        liju3: 'I think your upbringing has prejudiced you.',
        chinese3: '我认为你的教养使你抱有偏见。'
      }
      ,
      {
        id: '2493',
        word: 'preliminary',
        ciyi: 'n. 准备；预赛a. 初步的；预备的',
        liju1: 'A physical examination is a preliminary to joining the army. ',
        chinese1: '体格检查是参军的初步。',
        liju2: 'He has easily won the preliminary contest for the high jump. ',
        chinese2: '他轻松地通过了跳高预赛。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2494',
        word: 'premier',
        ciyi: 'a. 第一的；最初的n. 总理，首相',
        liju1: 'He requested that the former Premier grant him an interview. ',
        chinese1: '他请求前总理准许给他一次会面的机会。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2495',
        word: 'premise',
        ciyi: 'n. 前提；假设；房屋和地基，营业场所',
        liju1: 'The premise is that schools will work harder to improve if they must compete.',
        chinese1: '前提是各学校如必须竞争就会更加努力改进。',
        liju2: 'There is a kitchen on the premises.',
        chinese2: '营业场所内有一个厨房。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2496',
        word: 'premium',
        ciyi: 'n. 额外费用；奖金；保险费a. 高价的，优质的；售价高的',
        liju1: 'It is too early to say whether insurance premiums will be affected.',
        chinese1: '保险费会不会受到影响现在判定还为时过早。',
        liju2: 'We will up your premium semiannually.',
        chinese2: '我们每半年会增加一次你的额外津贴。',
        liju3: 'Starbucks provides premium quality coffee drinks.',
        chinese3: '星巴克提供质量上乘的咖啡饮料。',
         liju4: 'He eventually sold the shares back to the bank at a premium.',
        chinese4: '他最终以高价将股票返售给了银行。'
      }
      ,
      {
        id: '2497',
        word: 'preparation',
        ciyi: ' n. 预备，准备；制剂，制备品',
        liju1: 'I have no adequate preparation.',
        chinese1: '我没有充分的准备。',
        liju2: 'Some women began to use a new preparation for cleaning their skin.',
        chinese2: '一些女性开始用一种新的制剂来清洁皮肤。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2498',
        word: 'preposition',
        ciyi: 'n. 介词；前置词',
        liju1: 'The word is compounded of a preposition and a verb.',
        chinese1: '这个词是由一个介词和一个动词复合而成的。',
        liju2: 'There is nothing in the rules of grammar to suggest that ending a sentence with a preposition is wrong.',
        chinese2: '在语法规则中没有哪一条表明以介词结束一个句子是错误的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2499',
        word: 'prescribe',
        ciyi: 'vi. 规定；开药方vt. 规定；开处方',
        liju1: 'The doctor prescribed his patient who was down with fever.',
        chinese1: '医生给发烧病人开了药方',
        liju2: 'The supervisor prescribed the steps in which orders must be filled out.',
        chinese2: '主管规定了完成订货的步骤。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2500',
        word: 'prescription',
        ciyi: 'n. 药方，处方',
        liju1: 'The druggist dispensed a prescription. ',
        chinese1: '药剂师照药方配了药。',
        liju2: "'The new drug will not require a physician's prescription.'",
         chinese2: '这种新药不需要医生的处方。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2501',
        word: 'presence',
        ciyi: 'n. 存在；出席，到场；参加',
        liju1: 'She darkened the festivities by her presence.',
        chinese1: '她的出席给这次庆祝活动笼罩上一层阴影。',
        liju2: 'The boy felt constraint in her presence. ',
        chinese2: '那男孩在她面前感到局促不安。',
        liju3: 'The somewhat acid flavour is caused by the presence of lactic acid.',
        chinese3: '略有的酸味是由乳酸的存在造成的。'
      }
      ,
      {
        id: '1502',
        word: 'presently',
        ciyi: 'ad. 现在，目前；不久，一会儿',
        liju1: 'The oil prices drifted slightly higher presently.',
        chinese1: '目前石油价格略有上涨。',
        liju2: 'The flight from New York will be arriving presently.',
        chinese2: '从纽约来的航班马上就要到了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2503',
        word: 'preserve',
        ciyi: 'vt. 保存；保护；腌制；禁猎n. 保护区；禁猎地',
        liju1: 'We need to preserve the forest.',
        chinese1: '我们需要保护森林。',
        liju2: 'Duck eggs do not preserve satisfactorily.',
        chinese2: '鸭蛋腌制得令人不满意。',
        liju3: 'The ancient Egyptians knew ways to preserve dead bodies from decay.  ',
        chinese3: '古埃及人懂得保存尸体，使之不会腐烂的方法。',
         liju4: 'These woods are preserved.',
        chinese4: '此处林场禁止打猎。'
      }
      ,
      {
        id: '2504',
        word: 'preside',
        ciyi: 'vi. 主持 vt. 管理',
        liju1: 'The Prime Minister presides at meetings of the Cabinet.',
        chinese1: '首相主持内阁会议。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2505',
        word: 'pressure',
        ciyi: 'n. 压力；压迫，压强vt. 迫使',
        liju1: ' We will never capitulate to pressure from outside.',
        chinese1: '我们永远不会屈服于外界的压力。',
        liju2: 'He will never pressure you to get married.',
        chinese2: '他永远也不会给你施加压力让你结婚。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2506',
        word: 'prestige',
        ciyi: 'n. 威望，声望；声誉',
        liju1: ' The high prestige of the premier is radicated in the hearts of the people. ',
        chinese1: '总理的崇高威信在人民的心中树立起来。',
        liju2: 'His prestige has been raised greatly since he was promoted to the president of the university.',
        chinese2: '自从他升为大学校长以后，他的声望大大提高。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2507',
        word: 'presumably',
        ciyi: 'ad. 大概；推测起来；可假定',
        liju1: ' The spear is presumably the murder weapon.',
        chinese1: '这茅很可能就是凶器。',
        liju2: 'Presumably you could tell that by looking at her body as well?',
        chinese2: '你也可以通过看一眼她的身材便推测出她的年龄吗？',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2508',
        word: 'presume',
        ciyi: 'vt. 假定；推测；意味着',
        liju1: 'I presume that an agreement will eventually be reached.',
        chinese1: '我推测协议最终会达成。',
        liju2: "'Smith didn't say when he'd return, but I presume that he'll be back for dinner.'",
         chinese2: '史密斯没有说他什么时候回来，但是我想他会回来吃晚饭。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2509',
        word: 'pretext ',
        ciyi: 'n. 借口；托辞vt. 以…为借口',
        liju1: 'They wanted a pretext for subduing the region by force.',
        chinese1: '他们需要一个用武力征服那个地区的托词。',
        liju2: 'Mike came back home earlier, under the pretext of catching a cold.',
        chinese2: '迈克以感冒为理由，提前回家了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2510',
        word: 'prevail',
        ciyi: 'vi. 盛行，流行；战胜，获胜，占优势',
        liju1: ' The use of horese for ploughing still prevails among the poorer farmers.',
        chinese1: '用马耕作的现象在贫苦农民中仍然十分盛行。',
        liju2: 'Truth will prevail.',
        chinese2: '真理必胜。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2511',
        word: 'prevalent',
        ciyi: 'a. 流行的；普遍的，广传的',
        liju1: 'Smoking is becoming increasingly prevalent among younger women.',
        chinese1: '吸烟在年轻女性中正变得越来越盛行。',
        liju2: 'This condition is more prevalent in women than in men.',
        chinese2: '这种情况在女性中比在男性中更为普遍。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2512',
        word: 'previous',
        ciyi: 'a. 以前的；早先的；过早的ad. 在先；在…以前',
        liju1: 'He revoked his previous decision.',
        chinese1: '他改变了以前作出的决定。',
        liju2: 'Previous to our being there, there was an earthquake in the area.',
        chinese2: '在我们去那之前，该地区曾经发生过一场地震。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2513',
        word: 'prey',
        ciyi: 'vi. 捕食；折磨n. 猎物，捕获物，受害者',
        liju1: 'The lion bounded on the prey.',
        chinese1: '那头狮子向猎物猛扑过去。',
        liju2: 'Cats prey on birds and mice.',
        chinese2: '猫捕食鸟类及老鼠。',
        liju3: 'This problem has been preying on my mind all day.',
        chinese3: '这个问题整天都在折磨我。'
      }
      ,
      {
        id: '2514',
        word: 'prick',
        ciyi: 'vt. 刺，戳；刺伤，刺痛； n.刺痛，刺伤',
        liju1: 'The roses are thorny. Take care not to prick your hands. ',
        chinese1: '玫瑰有刺，小心扎手。',
        liju2: 'The child pricked the balloon and it burst.',
        chinese2: '那孩子在气球上刺了个洞，气球就爆了。',
        liju3: 'At the same time she felt a prick on her neck.',
        chinese3: '同时她感到脖子上一阵刺痛。'
      }
      ,
      {
        id: '2515',
        word: 'priest',
        ciyi: 'n. 牧师；神父',
        liju1: 'The weary priest droned a prayer.',
        chinese1: '疲惫不堪的牧师喃喃地念祷词。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2516',
        word: 'primary',
        ciyi: 'a. 最初的，初级的；首要的，主要的；基本的',
        liju1: 'The content of primary education should be the same for everyone.',
        chinese1: '初级教育的内容对每个人都应该是相同的。',
        liju2: 'A distinction should be made between the primary and secondary tasks.',
        chinese2: '要区别主要的和次要的任务。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2517',
        word: 'prime',
        ciyi: ' a. 主要的；最好的，一流的 n.青春，青年；全盛时期',
        liju1: 'It could be a prime target for guerrilla attack.',
        chinese1: '它会是游击队进攻的一个主要目标。',
        liju2: 'The location of these beaches makes them prime sites for development.',
        chinese2: '这些海滩的位置使它们成为开发的最佳选址。',
        liju3: 'This should be the prime of our lives. ',
        chinese3: '这应该是我们人生的黄金时期。'
      },
      {
        id: '2518',
        word: 'primitive ',
        ciyi: 'a. 原始的，远古的，早期的；简单的，粗糙的',
        liju1: 'Primitive tribes lived by fishing, hunting and gathering.',
        chinese1: '原始部落靠渔猎采集为生。',
        liju2: 'The conditions are primitive by any standards.',
        chinese2: '这些条件以任何标准衡量都是简陋的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2519',
        word: 'prince',
        ciyi: 'n. 王子，国君；亲王；贵族',
        liju1: 'The ringing bells proclaimed the birth of the prince.',
        chinese1: '鸣响的钟声宣布王子诞生了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2520',
        word: 'princess',
        ciyi: 'n. 公主；王妃',
        liju1: 'The wicked old woman charmed the princess with magic words.  ',
        chinese1: '这个老巫婆用咒语使公主中了魔。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2521',
        word: 'principal',
        ciyi: ' a. 主要的；重要的n.负责人，首长；校长；资本',
        liju1: "'Ever since World War the United States has been Japan's principal trade partner. '",
         chinese1: '二次世界大战以来，美国一直是日本的主要贸易伙伴。',
        liju2: 'Donald King is the principal of Dartmouth High School.',
        chinese2: '唐纳德·金是达特茅斯中学的校长。',
        liju3: 'If the price level rises, your principal rises as well.',
        chinese3: '如果价格升高，你的本金也会升高。'
      }
      ,
      {
        id: '2522',
        word: 'principle',
        ciyi: 'n. 原理，原则；主义，信念，道义',
        liju1: 'In any inquiry, be careful to proceed on right principle. ',
        chinese1: '在任何调查中，应注意按照正确的原则行事。',
        liju2: 'I live by the principles of my religion.',
        chinese2: '我依靠自己的宗教信念而生活。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2523',
        word: 'prior',
        ciyi: ' a. 优先的；在前的ad. 在…之前，优先',
        liju1: 'The firm I wanted to use had prior commitments.',
        chinese1: '我选择的那家公司有优先承诺。',
        liju2: 'A death prior to 65 is considered to be a premature death.',
        chinese2: '65岁以前的死亡被认为是过早死亡。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2524',
        word: 'priority',
        ciyi: 'Women are more likely to give priority to child care and education policies.',
        liju1: '女性更可能给孩子的照料和教育方案以优先考虑。',
        chinese1: 'Being a parent is her first priority.',
        liju2: '做母亲是她的头等大事。',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2525',
        word: 'privacy',
        ciyi: 'n.私事，隐私；隐居 ',
        liju1: ' We should respect others’privacy！',
        chinese1: '我们应该尊重别人的隐私！',
        liju2: 'The old professor lived in privacy after his retirement.',
        chinese2: '这位老教授退休后过着隐居生活。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2526',
        word: 'private ',
        ciyi: 'a. 私人的；私有的；私下的',
        liju1: 'They started up in the business as a private detective after he left the police.',
        chinese1: '在他辞掉警察工作后，他们开始从事私人侦探业务。',
        liju2: 'They sent their children to private schools.',
        chinese2: '他们送孩子们上私立学校。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2527',
        word: 'privilege',
        ciyi: 'n. 特权，优惠，特许；基本权利vt. 给予…特权',
        liju1: 'Education is not a privilege but a right.',
        chinese1: '受教育不是一种特权，而是一种权利。',
        liju2: 'The government of this country privileged the disabled to take buses free.',
        chinese2: '该国政府给予残疾人免费搭乘公交车的特权。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2528',
        word: 'probability',
        ciyi: 'n. 可能性；机率；概率',
        liju1: "'Without a transfusion, the victim's probability of dying was 100 %.'",
         chinese1: '不输血的话，该患者的死亡概率是100%。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2529',
        word: 'probable',
        ciyi: ' a. 很可能的；可信的',
        liju1: 'It is probable that the medication will suppress the symptom without treating the condition.',
        chinese1: '可能该药物只治标而不治本。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2530',
        word: 'probe',
        ciyi: 'n. 探针，探测器v. 调查；探测；用探针探测',
        liju1: 'The soldiers probed cautiously ahead of them for mines.',
        chinese1: '士兵们小心翼翼地探测前方的地雷。',
        liju2: 'The journalist was probing into several financial scandals.',
        chinese2: '记者正在调查几起财务丑闻。',
        liju3: 'The doctor examined Jack’s wound with a probe.',
        chinese3: '医生用一根探针检查了杰克的伤口。'
      }
      ,
      {
        id: '2531',
        word: 'procedure',
        ciyi: 'n. 程序，手续；步骤',
        liju1: 'He is familiar with export procedure.',
        chinese1: '他熟悉出口手续。',
        liju2: 'It has passed through an interesting procedure of evolution.',
        chinese2: '它经过了一个有趣的进化过程。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2532',
        word: 'proceed',
        ciyi: 'vi. 开始；继续进行；发生，行进',
        liju1: 'He proceeded to tell me of my birth.',
        chinese1: '他接着给我讲了我的出生。',
        liju2: 'You can clear your head and proceed with your task.',
        chinese2: '你就可以理清你的头脑，并继续向目标前进。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2533',
        word: 'proceeding',
        ciyi: 'n. 进行，进行；会议记录',
        liju1: 'The proceedings of the inquiry will take place in private.',
        chinese1: '调查行动将秘密进行。',
        liju2: 'The DOT is to publish the conference proceedings.',
        chinese2: '运输部将公布会议记录。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2534',
        word: 'process ',
        ciyi: 'vt. 处理；加工n. 过程，进行；方法，程序，工艺',
        liju1: 'This method of manufacture evolved out of a long process of trial.',
        chinese1: '这种制造方法是在长期试验过程中逐步形成的。',
        liju2: 'The material will be processed into plastic pellets.',
        chinese2: '该原料将被加工成塑料颗粒。',
        liju3: 'The company developed a new process of printing.',
        chinese3: '这家公司开发了一种新的印刷工艺。'
      }
      ,
      {
        id: '2535',
        word: 'procession',
        ciyi: 'n. 队伍，行列',
        liju1: 'A group of girls led the parading procession.',
        chinese1: '一群女孩子们在游行队伍的前面。',
        liju2: 'The youngsters poured down the street to see the parading procession. ',
        chinese2: '年轻人涌上街头看游行队伍。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2536',
        word: 'proclaim',
        ciyi: 'vt. 宣告，公布；声明；表明 ',
        liju1: 'Britain proudly proclaims that it is a nation of animal lovers.',
        chinese1: '英国自豪地宣称它是个热爱动物的国家。',
        liju2: 'His manners proclaim him a scholar.',
        chinese2: '从他的举止可以看出他是一名学者。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2537',
        word: 'product',
        ciyi: 'n. 产品；结果；乘积',
        liju1: 'They touted their new product around.',
        chinese1: '他们四处兜售他们的新产品。',
        liju2: 'We are all products of our time.',
        chinese2: '我们都是我们时代的产物。',
        liju3: 'The product of six multiplied by three is eighteen.',
        chinese3: '三和六的乘积是十八。'
      }
      ,
      {
        id: '2538',
        word: 'productive ',
        ciyi: 'a. 能产的；生产的，生产性的；多产的；富有成效的',
        liju1: 'Education must be combined with productive labour. ',
        chinese1: '教育必须与生产劳动相结合。',
        liju2: 'He was hopeful that the next round of talks would also be productive.',
        chinese2: '他对下一轮会谈也会富有成效充满了希望。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2539',
        word: 'productivity ',
        ciyi: ' n. 生产力；生产率',
        liju1: 'Productivity has risen greatly.',
        chinese1: '生产效率大大提高。',
        liju2: 'The third-quarter results reflect continued improvements in productivity.',
        chinese2: '第三季度的结果反映了生产率的持续提高。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2540',
        word: 'profession',
        ciyi: 'n. 职业，自由职业；公开声明，宣布，表白',
        liju1: 'He envies her the position she has achieved in her profession.  ',
        chinese1: '他妒忌她在她的职业中已取得的地位。',
        liju2: 'The girl was moved by her boyfriend’s profession of love.',
        chinese2: '女孩儿被男朋友的公开示爱打动了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2541',
        word: 'professional',
        ciyi: ' a. 专业的；职业的n. 专业人员',
        liju1: 'The football team was disciplined by a professional trainer.',
        chinese1: '这支足球队受过专业教练员的训练。',
        liju2: 'My father wanted me to become a professional and have more stability.',
        chinese2: '我父亲希望我成为一名专业人士，有更多稳定性。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2542',
        word: 'proficiency',
        ciyi: 'n. 精通，熟练',
        liju1: 'I brought her proficiency up to the required level.',
        chinese1: '我把她的熟练程度提高到所规定的水平。',
        liju2: 'Evidence of basic proficiency in English is part of the admissions requirement.',
        chinese2: '基本英语水平的证明是录取条件的一部分。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2543',
        word: 'profile',
        ciyi: 'n. 侧面（像）；轮廓；外形；人物简介v. 描…的轮廓',
        liju1: 'His handsome profile was turned away from us.',
        chinese1: '他英俊的侧面轮廓转离了我们。',
        liju2: 'The huge trees were profiled against the night sky.',
        chinese2: '在夜空的映衬下显出大树的轮廓。',
        liju3: 'I was reading the profile of that politician.',
        chinese3: '我正在读那位政治家的人物简介。'
      }
      ,
      {
        id: '2544',
        word: 'profit',
        ciyi: ' n. 利润；利益；益处v. 获利；有益，有益于',
        liju1: 'Profit is not the only yardstick of success. ',
        chinese1: '利润并不是衡量成功的唯一尺度。',
        liju2: 'She has certainly profited from spending a year in England.',
        chinese2: '在英国度过的一年确实对她有益处。',
        liju3: 'No one was profiting inordinately from the war effort.',
        chinese3: '没有人在从战争中发大财。',
          liju4: 'You may profit by the experience of others.',
        chinese4: '你可以汲取别人的经验教训。'
      }
      ,
      {
        id: '2545',
        word: 'profitable',
        ciyi: 'Drug manufacturing is the most profitable business in the U.S.',
        liju1: '药品生产是美国最赚钱的行业。',
        chinese1: '',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2546',
        word: 'profound',
        ciyi: 'a. 深厚的；意义深远的；渊博的，造诣深的',
        liju1: 'This remark has profound implications.',
        chinese1: '这句话含义深刻。',
        liju2: 'This is a book full of profound, original, and challenging insights.',
        chinese2: '这是一本充满高深、新颖且富有挑战性见解的书。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2547',
        word: 'progressive ',
        ciyi: 'a. 进步的；先进的；前进的n. 改革论者；进步分子',
        liju1: 'Willan was able to point to the progressive changes he had already introduced.',
        chinese1: '威兰能够指出他已经带来的有进步意义的变化。',
        liju2: 'The Republicans were deeply split between progressives and conservatives.',
        chinese2: '共和党进步派和保守派之间分歧很大。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2548',
        word: 'prohibit',
        ciyi: 'vt. 阻止，禁止，不准；使不可能',
        liju1: 'We are prohibited from drinking alcohol during working hours.',
        chinese1: '工作时间内我们不得喝酒。',
        liju2: 'The high cost prohibits the widespread use of this dictionary.',
        chinese2: '这本词典因价格昂贵而影响其广泛使用。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2549',
        word: 'project',
        ciyi: ' vi.凸出，伸出vt. 设计；计划；发射；放映n. 工程，项目；方案，计划',
        liju1: 'Please count me in on this project. ',
        chinese1: '请把我也算入这项计划的参加者。',
        liju2: 'Some creatures project their tongues to catch flies and other insects.',
        chinese2: '有些动物会伸出舌头捕捉苍蝇和其他昆虫。',
        liju3: 'The team tried projecting the maps with two different projectors onto the same screen.',
        chinese3: '该组尝试用两台不同的放映机将地图投映在同一屏幕上。',
          liju4: 'The government had been projecting a 5% consumer price increase for the entire year.',
        chinese4: '政府一直在预计全年5%的消费价格增长。'
      }
      ,
      {
        id: '2550',
        word: 'projector',
        ciyi: 'n. 投影仪；放映机；探照灯',
        liju1: ' How do you connect the projector to the computer?',
        chinese1: '你知道怎样把投影仪连接到电脑上吗?',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2551',
        word: 'prolong',
        ciyi: 'vt. 延长；拖延',
        liju1: 'They prolonged their visit by two days.',
        chinese1: '他们延长访问二天。',
        liju2: 'Mr. Chesler said foreign military aid was prolonging the war.',
        chinese2: '切斯勒先生说外国的军事援助正在延长这场战争。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2552',
        word: 'prominent',
        ciyi: ' a. 突出的，显著的；杰出的，著名的',
        liju1: ' The newspapers gave prominent coverage to the news. ',
        chinese1: '各报在显著位置上登载了这条消息。',
        liju2: 'Here the window plays a prominent part in the design.',
        chinese2: '这里，窗户在设计中有着突出的作用。',
        liju3: 'My father is a very prominent surgeon.',
        chinese3: '我的爸爸是一位非常杰出的外科医生。'
      }
      ,
      {
        id: '2553',
        word: 'promising',
        ciyi: 'a. 有希望的，有前途的v. 许诺，答应',
        liju1: "'We're trying to bring along several promising young football player.  '",
         chinese1: '我们正设法培养出几个有前途的年轻足球运动员。',
        liju2: 'The leader was just double-talking, full of generalities and promising nothing.',
        chinese2: '这个领导人正在大讲空话，全是笼统的泛泛而谈，什么也没许诺。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2554',
        word: 'promote',
        ciyi: 'vt. 促进，增进；提升，提拔；推销；发扬',
        liju1: ' The meeting discussed how to promote cooperation between the two countries.',
        chinese1: '会议讨论了如何促进两国的合作。',
        liju2: 'He worked hard and was soon promoted.',
        chinese2: '他工作努力，很快就获得提升。',
        liju3: 'We launch a big advertising campaign to promote our new toothpaste.',
        chinese3: '我们发动了一场声势浩大的广告宣传攻势，旨在推销新型牙膏。'
      }
      ,
      {
        id: '2555',
        word: 'prompt',
        ciyi: 'a. 敏捷的，迅速的；立刻的vt. 提示；促进；激起；（给演员）提白',
        liju1: 'You have been so prompt in carrying out all these commissions.',
        chinese1: '你执行所有这些任务非常迅速。',
        liju2: 'It is not too late, but prompt action is needed.',
        chinese2: '还不太晚，但需要立即行动。',
        liju3: "'Japan's recession has prompted consumers to cut back on buying cars.'",
         chinese3: '日本的经济衰退已促使消费者们削减购车花销。',
          liju4: 'Her guestion was prompted by her worries about future.',
        chinese4: '她提的那个问题是因为她对前途十分忧虑。',
        liju5: "'I'll prompt her if she forgets her lines.'",
         chinese5: '如果她忘掉台词我将给她提示。'
	  }
      ,
      {
        id: '2556',
        word: 'prone',
        ciyi: 'a. 俯卧的，平卧的；有…倾向的，易于…的',
        liju1: 'For all her experience as a television reporter, she was still prone to camera nerves.',
        chinese1: '尽管有丰富的做电视记者的经验，她仍然倾向于在镜头前紧张。',
        liju2: 'John was prone on the floor, listening to some music.',
        chinese2: '约翰平躺在地板上听音乐。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2557',
        word: 'pronoun',
        ciyi: 'n. 代词',
        liju1: 'Become the pronoun of not because of his remarkable how clever, but that he is how diligent.',
        chinese1: '成为卓越的代名词并不是因为他有何等伶俐，而在于他有何等勤奋。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2558',
        word: 'proof',
        ciyi: ' n. 证明，证据；校样，样张',
        liju1: 'The proof was fished up from old papers.',
        chinese1: '这个证据是从旧文件中搜寻到的。',
        liju2: 'He was correcting his proof sheets in his study. ',
        chinese2: '他正在书房里看校样。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2559',
        word: 'propaganda',
        ciyi: 'n. 宣传 ',
        liju1: 'They muted the propaganda campaign later. ',
        chinese1: '后来，他们降低了宣传运动的调子。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2560',
        word: 'propel',
        ciyi: 'vt. 推进；驱使；激励；驱策',
        liju1: ' A sailing boat is propelled by wind.',
        chinese1: '帆船是由风力推进的。',
        liju2: 'His addiction to drugs propelled him toward a life of crime.',
        chinese2: '吸毒成瘾使他走上犯罪的道路。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2561',
        word: 'property',
        ciyi: 'n. 性质；财产，所有物',
        liju1: ' He forfeited his property by crime.  ',
        chinese1: '他因犯罪被剥夺财产。',
        liju2: 'A radio signal has both electrical and magnetic properties.',
        chinese2: '无线电信号既具有电的特性也具有磁的特性。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2562',
        word: 'prophet',
        ciyi: 'n. 先知；预言者',
        liju1: 'The pity is that you are not a prophet. ',
        chinese1: '可惜你不能未卜先知。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2563',
        word: 'proportion',
        ciyi: 'n. 比例；部分；均衡，相称',
        liju1: 'Resources can be allocated in any proportion of each other.',
        chinese1: '每种资源可以采取任何比例来进行分配。',
        liju2: 'A large proportion of the dolphins in that area will eventually die.',
        chinese2: '那个地区的很大一部分海豚最终都会死去。',
        liju3: 'The two windows are in admirable proportion.',
        chinese3: '这两扇窗户十分相称。'
      }
      ,
      {
        id: '2564',
        word: 'proposal',
        ciyi: 'n. 提议，建议；求婚',
        liju1: 'The chairman leapt at our proposal in the meeting. ',
        chinese1: '在会议上，主席欣然接受了我们的建议。',
        liju2: "'After a three-weekend courtship, Pam accepted Randy's proposal of marriage.'",
         chinese2: '经过一段为期3个周末的恋爱，帕姆接受了兰迪的求婚。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2565',
        word: 'propose',
        ciyi: 'vt. 提议，建议；提名，推荐vi.求婚',
        liju1: 'What do you propose we do?',
        chinese1: '你建议我们做什么?',
        liju2: 'I proposed him for as candidate.',
        chinese2: '我推荐他为候选人。',
        liju3: 'He proposed to his girlfriend over a public-address system.',
        chinese3: '他在有线广播系统上向女友求婚。'
      }
      ,
      {
        id: '2566',
        word: 'proposition',
        ciyi: 'n. 命题；主张，建议；提议',
        liju1: 'The sentence, Beijing is the capital of China is a proposition.  ',
        chinese1: '‘北京是中国的首都’，这个句子就是一个命题。',
        liju2: 'You came to see me at my office the other day with a business proposition.',
        chinese2: '你几天前到我的办公室来看我，带着一份业务上的建议。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2567',
        word: 'prose',
        ciyi: 'n. 散文；单调vi. 写散文；乏味地讲话',
        liju1: ' A feeling of melancholy runs through his prose.  ',
        chinese1: '在他的散文中贯穿着一种忧郁的情绪。',
        liju2: 'He listened to the old man prosing away.',
        chinese2: '他听着那老人唠唠叨叨讲个没完。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2568',
        word: 'prosecute ',
        ciyi: 'vt. 检举，对…提起公诉；贯彻；从事',
        liju1: 'The police have decided not to prosecute because the evidence is not strong enough.',
        chinese1: '警方已决定不起诉，因为证据不够充分。',
        liju2: 'The enemy had no strength to prosecute the war.',
        chinese2: '敌人已经无力应战。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2569',
        word: 'prospect ',
        ciyi: 'n. 前途，前途；景色v. 勘探，勘察',
        liju1: 'The prospect of bankruptcy of his company beetled over the general manager.  ',
        chinese1: '总经理面临他的公司破产的阴暗前景。',
        liju2: 'He had prospected for minerals everywhere from the Gobi Desert to the Transvaal.',
        chinese2: '他在世界各地探过矿，从戈壁沙漠到德兰士瓦。',
        liju3: 'From the top of the hill, there’s a beautiful prospect over the valley.',
        chinese3: '从山顶俯视，山谷里的景色很美。'
      }
      ,
      {
        id: '2570',
        word: 'prospective',
        ciyi: 'a. 未来的；预期的；可能的',
        liju1: ' The story should act as a warning to other prospective buyers.',
        chinese1: '这篇报道应该可以对其他可能的购买者起到警告作用。',
        liju2: 'Prospective employers like to see what you have written. ',
        chinese2: '未来的老板愿意看你所写过的东西。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2571',
        word: 'prosper ',
        ciyi: 'v. 繁荣，昌盛；使成功',
        liju1: ' His business prospered.',
        chinese1: '他的生意兴隆。',
        liju2: 'The children seem to be prospering under their care.',
        chinese2: '在他们的照管下，孩子们看来在健康成长。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2572',
        word: 'prosperity',
        ciyi: ' n. 繁荣，兴旺，成功',
        liju1: 'The city took on an air of prosperity. ',
        chinese1: '这个城市呈现出繁荣的景象。',
        liju2: 'You have only to look around to see the prosperity of the district.',
        chinese2: '你只要环顾四周，就可看到这个地区的繁荣。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2573',
        word: 'prosperous',
        ciyi: 'a. 繁荣的；兴旺的',
        liju1: ' A prosperous and stable population is an asset in every country.  ',
        chinese1: '兴旺和稳定的人口对每个国家来讲，都是一种财富。',
        liju2: 'We will protect the country we love and pass it safer, stronger and more prosperous to the next generation. ',
        chinese2: '我们将保护我们热爱的国家，并把它更安全、更强大和更繁荣地传给下一代。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2574',
        word: 'protein',
        ciyi: 'n. 蛋白质',
        liju1: 'China was the first country in the world to synthesize crystalline insulin, a bioactive protein.  ',
        chinese1: '中国在世界上最早用人工方法合成一种有生物活力的蛋白质—结晶胰岛素。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2575',
        word: 'protest',
        ciyi: ' vi. 抗议；断言vt. 抗议；断言n. 抗议',
        liju1: 'They registered a strong protest with the United Nations.',
        chinese1: '他们向联合国提出强烈抗议。',
        liju2: 'She protested about the expense.',
        chinese2: '她对这项支出强烈反对。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2576',
        word: 'prototype',
        ciyi: 'n. 原型，蓝本；标准，模范',
        liju1: 'Metal-wheeled chariots are the prototype of the tanks of modern warfare.',
        chinese1: '金属轮战车是现代战争中坦克的原型。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2577',
        word: 'provided',
        ciyi: 'conj. 只要，假如；倘若v. 提供；给予（provide的过去式）',
        liju1: 'Provided you have the courage to admit your mistakes, I will forgive you.',
        chinese1: '若是你有勇气承认自己的错误，我就会原谅你。',
        liju2: 'The local government provided special buses for the guests. ',
        chinese2: '地方政府为宾客提供了专车。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2578',
        word: 'province ',
        ciyi: 'n. 省；领域，范围；职权',
        liju1: 'The arrangement of light industry in the province needs adjustment.  ',
        chinese1: '那个省的轻工业布局需要调整。',
        liju2: 'Tattooing is not just the province of sailors.',
        chinese2: '纹身不只是水手们才感兴趣的事。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2579',
        word: 'provision ',
        ciyi: 'n. 规定；条款；准备；供应品，给养，口粮',
        liju1: 'The department is responsible for the provision of residential care services.',
        chinese1: '该部门负责住宿照顾服务的提供。',
        liju2: 'He backed a provision that would allow judges to delay granting a divorce decree in some cases.',
        chinese2: '他支持允许法官在有些情况下推迟离婚判决的规定。',
        liju3: 'Mr. Kurtz asked if it had ever occurred to her to make provision for her retirement.',
        chinese3: '库尔茨先生问她是否想过要为退休做好准备。'
      }
      ,
      {
        id: '2580',
        word: 'provoke',
        ciyi: 'vt.激怒；煽动；惹起，挑衅',
        liju1: 'I am not easily provoked, but his behaviour is intolerable!',
        chinese1: '我这个人不易被激怒，但是他的行为让人忍无可忍!',
        liju2: "'Don't throw one bone to two dogs; you'll only provoke a fight.'",
        chinese2: '别把一根骨头扔给两只狗，那会引起它们打架。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2581',
        word: 'prudent',
        ciyi: 'a. 谨慎的，深谋远虑的',
        liju1: 'Be modest and prudent，never lag behind!',
        chinese1: '谦虚谨慎，永不落后!',
        liju2: 'It is clearly prudent to take all precautions.',
        chinese2: '采取一切防范措施显然是慎重的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2582',
        word: 'psychiatry ',
        ciyi: 'n. 精神病学；精神病治疗法',
        liju1: 'The results of the study have been published in the Canadian Journal of Psychiatry.',
        chinese1: '这些研究结果发表在精神病学加拿大的期刊里。',
        liju2: 'Psychiatry is the area of medicine that treats mental and emotional conditions. ',
        chinese2: '精神病学是对待心理和情绪条件的医学领域。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2583',
        word: 'psychology',
        ciyi: 'n. 心理，心理学；心理状态',
        liju1: 'It was not until the mid-twentieth century that psychology really came into its own.',
        chinese1: '直到20世纪中叶心理学才得到应有的重视。',
        liju2: 'I understood the psychology of this, but it still hurt.',
        chinese2: '我理解这种心理，但这仍然让我感到伤心。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2584',
        word: 'publication',
        ciyi: 'n. 出版；出版物；公布，发表',
        liju1: 'The publication of this work lifted our hopes.',
        chinese1: '该书的出版鼓起了我们的希望。',
        liju2: 'They have started legal proceedings against two publications which spoke of an affair.',
        chinese2: '他们已开始对提及一件绯闻的两本出版物进行法律诉讼。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2585',
        word: 'publicity',
        ciyi: 'n. 宣传，宣扬；公众的注意，名声',
        liju1: 'Much advance publicity was given to the talks.',
        chinese1: '会谈之前做了大量的宣传。',
        liju2: 'The case has generated enormous publicity in Brazil.',
        chinese2: '这起犯罪事件已在巴西引起了公众的极大关注。',
        liju3: 'He consciously stood off her in the publicity. ',
        chinese3: '他有意在公开场合避开她。'
      }
      ,
      {
        id: '',
        word: 'publish',
        ciyi: 'vt. 出版；发表；公布vi. 出版；发行；刊印',
        liju1: 'The reporter intimated to me that he would publish the story. ',
        chinese1: '这位记者向我暗示他将发表这篇文章。',
        liju2: "'Womens' magazines just don't publish articles on the harmful effects of smoking.'",
        chinese2: '女性杂志就是不刊登关于吸烟有害的文章。',
        liju3: 'The demonstrators called on the government to publish a list of registered voters.',
        chinese3: '示威者要求政府公开已登记的选民名单。'
      }
      ,
      {
        id: '2586',
        word: 'puff',
        ciyi: 'v.鼓吹，喘气 n. 粉扑；泡芙；一阵喷烟',
        liju1: ' He drew heavily on his cigarette and puffed out a cloud of smoke.',
        chinese1: '他深深地吸了一口烟，喷出了一团烟雾。',
        liju2: 'I know nothing about boxing, but I could see he was unfit, because he was puffing.',
        chinese2: '我对拳击一无所知，但我看得出他身体不行，因为他直喘粗气。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2587',
        word: 'pulse',
        ciyi: 'n.脉冲；脉搏；意向，动向；情绪',
        liju1: 'One may feel the social, economic, and political pulse of the state. ',
        chinese1: '任何人都可以感觉到这个国家的社会、经济和政治的脉搏。',
        liju2: 'The White House insists that the president is in touch with the pulse of the black community.',
        chinese2: '白宫坚持说总统了解黑人社区的民意。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2588',
        word: 'pump',
        ciyi: 'v. 打气；用抽水机抽… n. 泵，抽水机；打气筒',
        liju1: 'The pump sucked water from the basement.',
        chinese1: '水泵把地下室里的水抽出来了。',
        liju2: 'The farmers were pumping away the whole day.',
        chinese2: '农民们整天抽水。',
        liju3: 'And that really is the bicycle pump. ',
        chinese3: '这正是自行车打气筒的情况。'
      }
      ,
      {
        id: '2589',
        word: 'punch',
        ciyi: 'n. 冲压机；钻孔机v.以拳重击',
        liju1: 'He blacked her eye with that one punch.',
        chinese1: '他用那一猛拳把她的眼眶打得发青。',
        liju2: 'This new sort of punch could stamp out 3,000 bonnets an hour.  ',
        chinese2: '这种新型冲床每小时可冲压出三千个汽车引擎盖。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2590',
        word: 'punctual ',
        ciyi: 'a. 准时的，守时的；精确的',
        liju1: 'He piqued himself on being punctual.  ',
        chinese1: '他对于自己能准时而感到骄傲。',
        liju2: 'You should be punctual for appointments. ',
        chinese2: '你应该准时赴约的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2591',
        word: 'puppet',
        ciyi: 'n. 木偶；傀儡',
        liju1: 'When the invasion occurred he seized power and ruled the country as a puppet of the occupiers.',
        chinese1: '他趁入侵之时夺取了政权，作为占领者的傀儡统治着这个国家。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2592',
        word: 'purchase',
        ciyi: 'n. 购买的物品vt. 购买；赢得',
        liju1: 'They deposited a large amount of money toward the purchase of the car. ',
        chinese1: '他们预付了一大笔钱作为购买那辆汽车的定金。',
        liju2: 'Expert flattery may purchase an honest man.',
        chinese2: '老练的阿谀奉承可以买动一个老实人。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2593',
        word: 'purify',
        ciyi: 'vt. 净化；使纯净',
        liju1: 'This salt has been purified for use in medicine.',
        chinese1: '供药用的盐已被净化。',
        liju2: 'I take wheat and yeast tablets daily to purify the blood.',
        chinese2: '我每天服用小麦酵母片来净化血液。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2594',
        word: 'purple',
        ciyi: 'a. 紫色的n. 紫色',
        liju1: ' A purple may be made by dyeing a blue over a red.',
        chinese1: '红色染上蓝色便可成为紫色。',
        liju2: 'She wore purple and green silk.',
        chinese2: '她穿着紫色和绿色的丝绸。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2595',
        word: 'purse',
        ciyi: 'n.手提袋；钱包',
        liju1: 'She rummaged some change out of her purse.  ',
        chinese1: '她从钱包里翻出了一些零钱。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2596',
        word: 'pursuit ',
        ciyi: ' n. 追赶，追求；职业，工作',
        liju1: 'After a pursuit lasting all day we finally caught up with them. ',
        chinese1: '经过一整天的追赶，我们终于赶上了他们。',
        liju2: 'The writer devoted all his life to the literary pursuit.',
        chinese2: '那位作家将毕生的精力都献给了文学事业。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2597',
        word: 'puzzle',
        ciyi: 'vt. 使…困惑；使…为难 n. 谜；难题；迷惑',
        liju1: 'The puzzle defied solution.',
        chinese1: '这个谜无法解。',
        liju2: 'My sister puzzles me and causes me anxiety.',
        chinese2: '我的妹妹常会让我不解，使我焦虑。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2598',
        word: 'pyramid',
        ciyi: 'n. 金字塔',
        liju1: 'We set off to see the Pyramids and Sphinx.',
        chinese1: '我们出发去看金字塔和狮身人面像。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2599',
        word: 'qualification',
        ciyi: 'n. 资格；条件；限制，条件；合格证',
        liju1: 'They had every qualification for success.',
        chinese1: '他们具备获得成功的各种条件。',
        liju2: 'She has met the minimum educational requirements for qualification.',
        chinese2: '她已达到了资格取得所需的最低教育水准。',
        liju3: 'The so-called doctor doesn’t have the medical qualification.',
        chinese3: '这个所谓的医生没有行医资格证书。'
      }
      ,
      {
        id: '2600',
        word: 'qualify',
        ciyi: 'v. 限制，限定，修饰；使具有资格；证明…合格',
        liju1: 'This degree will qualify you for teaching. ',
        chinese1: '这个学位将使你有资格当教师。',
        liju2: 'His skills qualify him for the work.',
        chinese2: '他的技能使他能担当这项工作。',
        liju3: 'In most situations, adjectives are used to qualify nouns.',
        chinese3: '在大多数情况下，形容词都被用于修饰名词。'
      }
      ,
      {
        id: '2601',
        word: 'qualitative',
        ciyi: ' a. 定性的；性质上的',
        liju1: 'There are qualitative differences in the way children of different ages and adults think.',
        chinese1: '不同年龄的儿童和成人在思维方式上有着质的差异。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2602',
        word: 'quantify',
        ciyi: ' vt. 量化；确定数量',
        liju1: ' It is difficult to quantify an exact figure as firms are reluctant to declare their losses.',
        chinese1: '很难确定一个准确的数字，因为各家公司不愿公布它们的亏损情况。',
        liju2: 'I would not like to try to quantify those. ',
        chinese2: '我就不会试图去量化这些东西。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2603',
        word: 'quantitative',
        ciyi: 'a. 定量的；量的，数量的',
        liju1: 'Valuable personal growth is not quantitative, but qualitative, and you have to force yourself towards qualitative growth.  ',
        chinese1: '有价值的个人成长是定性的而不是定量的。而你必须强迫自己面对定性的生活。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2604',
        word: 'quart',
        ciyi: ' n. 夸脱（容量单位）',
        liju1: 'It will hold another quart.',
        chinese1: '它还可以再装一夸脱。',
        liju2: 'Pick up a quart of milk and a loaf of bread.',
        chinese2: '买一夸脱牛奶和一条面包。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2605',
        word: 'quartz',
        ciyi: 'n. 石英',
        liju1: 'To this class of substance belong mica, porcelain, quartz, glass, wood, etc.',
        chinese1: '属于这类物质的有云母、瓷器、石英、玻璃、木材等等。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2606',
        word: 'queer',
        ciyi: 'a. 奇怪的；同性恋的；不舒服的；心智不平衡的vt. 搞糟；使陷于不利地位n. 同性恋者；怪人；伪造的货币',
        liju1: 'Silly mistakes and queer clothes often arouse ridicule.',
        chinese1: '荒谬的错误和古怪的服装常会引起人们的讪笑。',
        liju2: 'His cheating on the final examination queered his chances of graduation.',
        chinese2: '他在期终考试中作弊使他失掉了毕业的机会。',
        liju3: 'My grandma has been queer lately.',
        chinese3: '我奶奶最近身体不舒服。'
      }
      ,
      {
        id: '2607',
        word: 'quench',
        ciyi: 'vt. 熄灭，解渴',
        liju1: 'The blaze was quenched by the brave firemen.',
        chinese1: '大火被勇敢的消防队员扑灭了。',
        liju2: 'She quenched her thirst with a glass of Coke.',
        chinese2: '她喝了一杯可乐解渴。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2608',
        word: 'quest',
        ciyi: 'n. 追求；寻找vi. 追求；寻找vt. 探索',
        liju1: 'My quest for a better bank continues.',
        chinese1: '我继续在搜寻一家更好的银行。',
        liju2: 'They have been questing for a new method of language teaching for years.',
        chinese2: '多年来他们一直在探索语言教学的一种新方法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2609',
        word: 'questionnaire',
        ciyi: 'n. 问卷；调查表',
        liju1: 'Teachers will be asked to fill in a questionnaire.',
        chinese1: '教师们将被要求填写一份调查问卷。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2610',
        word: 'queue',
        ciyi: 'n. 队列；长队vi. 排队；排队等候',
        liju1: 'Her hair was pleated in a queue. ',
        chinese1: '她的头发编成了一条辫子。',
        liju2: 'Children clutching empty bowls form a queue.',
        chinese2: '抓着空碗的孩子们排成一队。',
        liju3: 'Please queue up to register.',
        chinese3: '请排队挂号。'
      }
      ,
      {
        id: '2611',
        word: 'quilt',
        ciyi: 'n. 被子vi. 缝被子',
        liju1: 'He picked apart an old quilt. ',
        chinese1: '他把一条旧被子撕得粉碎。',
        liju2: 'Maggie knows how to quilt.',
        chinese2: '玛吉知道怎样缝被子。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2612',
        word: 'quit',
        ciyi: 'vt. 离开；放弃；停止；使…解除；辞职',
        liju1: "'I'd quit except I need the money.'",
         chinese1: '要不是我需要钱的话，我就辞职了。',
        liju2: 'A nicotine spray can help smokers quit the habit.',
        chinese2: '一种尼古丁喷剂可以帮助吸烟者戒烟。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2613',
        word: 'quiver',
        ciyi: 'n. 颤抖；震动 v. 使…颤动；抖动',
        liju1: ' Her bottom lip quivered and big tears rolled down her cheeks.',
        chinese1: '她的下唇颤动着，大滴大滴的泪珠顺着脸颊滚了下来。',
        liju2: 'I recognized it instantly and felt a quiver of panic.',
        chinese2: '我立刻认出它了，感到一阵惊恐的颤抖。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2614',
        word: 'quiz',
        ciyi: 'n. 考查；课堂测验，问答比赛v.对…进行测验',
        liju1: 'Our English teacher quizzed us yesterday morning.',
        chinese1: '昨天上午英语老师对我们进行了小测验。',
        liju2: 'So take this quiz to find out if you will get promoted. ',
        chinese2: '因此，借此测验看看你是否会得到晋升。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2615',
        word: 'quota',
        ciyi: 'n. 配额；定额；限额',
        liju1: 'The main office axed those in the field who didn’t meet their quota.',
        chinese1: '主要办公室裁减那些在工作中完不成定额的人。',
        liju2: 'The bill would force employers to adopt a quota system when recruiting workers.',
        chinese2: '该法案将迫使雇主们在录用工人时采取配额制。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2616',
        word: 'quote',
        ciyi: ' v.引用；引证n. 引用，引文',
        liju1: 'No one can quote you a price lower than mine.',
        chinese1: '谁的报价也不会比我报的价更低。',
        liju2: 'She often quotes several lines of Byron in the class.',
        chinese2: '她经常在课堂上引用几句拜伦的诗。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2617',
        word: 'rabbit',
        ciyi: 'n. 兔子',
        liju1: 'The rabbit disappeared in the bushes.',
        chinese1: '那只兔子消失在树丛中。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2618',
        word: 'racial',
        ciyi: ' a. 种族的；人种的',
        liju1: 'He went on record as opposing racial discrimination. ',
        chinese1: '他公开表示反对种族歧视。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2619',
        word: 'rack',
        ciyi: 'n.行李架 v. 折磨；榨取',
        liju1: 'He racked a bottle of wine after dinner.',
        chinese1: '饭后他将一瓶酒都放在酒架上。',
        liju2: 'High fever racked his whole body.',
        chinese2: '发高烧使他浑身难受。',
        liju3: 'She began to rack her brains to remember what had happened at the nursing home.',
        chinese3: '她开始绞尽脑汁地回忆在疗养院发生的事。'
      }
      ,
      {
        id: '2620',
        word: 'racket',
        ciyi: 'n. 球拍；吵闹，喧闹v. 过着花天酒地的生活',
        liju1: 'My hands blistered from holding the racket.',
        chinese1: '我的手因握球拍而起了水泡。',
        liju2: "'He makes such a racket I'm afraid he disturbs the neighbours.'",
         chinese2: '他如此大声喧哗，我担心他骚扰到邻居。',
        liju3: 'His wife used to racket about when she was young.',
        chinese3: '他的妻子年轻时经常过着花天酒地的生活。'
      }
      ,
      {
        id: '2621',
        word: 'radar',
        ciyi: 'n. 雷达',
        liju1: 'Our radar pinpointed accurately the attacking planes. ',
        chinese1: '我们的雷达准确地对准来袭的敌机。',
        liju2: 'They acquired the target by radar. ',
        chinese2: '他们用雷达捕获了目标。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2622',
        word: 'radiant',
        ciyi: 'a. 辐射的；容光焕发的；光芒四射的',
        liju1: 'On her wedding day the bride looked truly radiant.',
        chinese1: '在她婚礼那天，新娘看起来真的是容光焕发。',
        liju2: 'The evening sun warms the old red brick wall to a radiant glow.',
        chinese2: '傍晚的阳光照暖了那道旧红砖墙，使它熠熠生辉。',
        liju3: 'Solar energy is radiant energy that is produced by the sun. ',
        chinese3: '所谓太阳能，就是太阳产生的辐射能。'
      }
      ,
      {
        id: '2623',
        word: 'radiate',
        ciyi: 'v. 辐射，放射；传播，散布',
        liju1: 'The sun radiates both light and heat every day.',
        chinese1: '太阳每天发出光和热。',
        liju2: 'The city has always been the core from which cultural advancement has radiated.',
        chinese2: '城市通常是文化进步得以传播的中心。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2624',
        word: 'radical',
        ciyi: 'a. 激进的，极端的；根本的，重要的；彻底的',
        liju1: 'The government is putting through some radical social reforms. ',
        chinese1: '政府正在实行某些彻底的社会改革。',
        liju2: 'Mr.Jackson is known for radical ideas.',
        chinese2: '杰克逊先生以其激进的思想而闻名。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2625',
        word: 'radioactive',
        ciyi: 'a. 放射性的；有辐射的',
        liju1: 'The government has been storing radioactive waste at Fernald for 50 years.',
        chinese1: '该政府50年来一直在弗纳德储存放射性废物。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2626',
        word: 'radius',
        ciyi: 'n. 半径，半径范围',
        liju1: 'He indicated a semicircle with a radius of about thirty miles.',
        chinese1: '他标示出一个半径大约三十英里的半圆。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2627',
        word: 'rag',
        ciyi: ' n. 破布；碎屑v. 戏弄；责骂',
        liju1: 'The ragged man drags a waggon of rag fragments. ',
        chinese1: '那个衣衫褴褛的人拉著一货车破布碎片.',
        liju2: 'She is always ragging Tom about his stammer.',
        chinese2: '她总是拿汤姆的口吃开玩笑。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2628',
        word: 'rage',
        ciyi: 'n. 愤怒，精神错乱v. 发怒；流行',
        liju1: 'His words roused a great rage inside her.',
        chinese1: '他的话引起了她心中极大的愤怒。',
        liju2: 'Flu raged throughout the city.',
        chinese2: '流行性感冒蔓延全市。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2629',
        word: 'raid',
        ciyi: 'n. 袭击；突袭v. 袭击，突袭',
        liju1: 'The air-raid alarm went on drilling away from the gate. ',
        chinese1: '从大门不停地传来刺耳的空袭警报。',
        liju2: 'They were going to raid Warsaw the next day.',
        chinese2: '他们将于次日袭击华沙。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2630',
        word: 'rail',
        ciyi: 'n. [pl.] 铁路，铁轨，扶手；围栏v. 铺铁轨；以横木围栏',
        liju1: 'This formerly inaccessible place can now be reached by road and rail.',
        chinese1: '这里过去是穷乡僻壤，现在铁路公路都畅通了。',
        liju2: "'The children's playground should be railed.'",
         chinese2: '儿童游乐场应当围以栏杆。',
        liju3: 'The old woman gripped the rail as she walked down the stairs.',
        chinese3: '那位老妇人在下楼时紧抓栏杆。'
      },
      {
        id: '2631',
        word: 'railroad/railway',
        ciyi: 'n. 铁路vi.由铁道运输',
        liju1: 'The railway slopes up slightly at this point.',
        chinese1: '铁路从这里开始有个微微向上的坡度。',
        liju2: 'Those logs were railroaded overseas.',
        chinese2: '那些原木通过铁路被运往国外。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2632',
        word: 'rainbow',
        ciyi: 'n. 彩虹',
        liju1: 'I want a pot of gold at the end of the rainbow. ',
        chinese1: '我自己也希望在彩虹的末端出现一罐金子。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2633',
        word: 'rake',
        ciyi: 'v. 搜索；用耙子耙；掠过n. 耙子',
        liju1: 'He raked the dead leaves together every morning.',
        chinese1: '他每天清晨用耙子将枯叶耙到一起。',
        liju2: "'It's impossible for me to rake so many ancient books together in a week.'",
         chinese2: '让我在一周之内搜集这么多本古书是不可能的。',
        liju3: 'John collected the fallen leaves with a rake.',
        chinese3: '约翰用耙子把落叶收拢到一起。'
      }
      ,
      {
        id: '2634',
        word: 'rally',
        ciyi: ' v. 团结；恢复恢复健康、力量等n. 集会；公路赛车会',
        liju1: 'The rally began in an uproar.  ',
        chinese1: '大会在一片喧腾声中开始了。',
        liju2: 'Carlos Sainz of Spain has won the New Zealand Motor Rally.',
        chinese2: '西班牙的卡洛斯·赛恩斯在新西兰摩托车公路赛中获胜。',
        liju3: 'We must rally the broad masses of the people round the Party. ',
        chinese3: '我们必须将广大人民群众团结在党的周围。',
          liju4: 'They rallied their spirits and threw themselves into the battle.',
        chinese4: '他们重振精神投入战斗。'
      }
      ,
      {
        id: '2635',
        word: 'random',
        ciyi: 'a. 随机的；任意的n. 随意',
        liju1: 'We received several answers, and we picked one at random.',
        chinese1: '我们收到了好几个答案，就随机地拣选了一个。',
        liju2: 'The survey used a random sample of two thousand people across the Midwest.',
        chinese2: '这项调查使用的是对中西部地区2000人的随机取样。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2636',
        word: 'range',
        ciyi: 'n. 范围，幅度；排列，联系；山脉；炉灶v.排列成行，(在一定幅度内) 变化 ',
        liju1: 'The average age range is between 35 and 55.',
        chinese1: ' 平均年龄范围是35至55岁。',
        liju2: 'The government is proposing to put on a new range of taxes to pay for social services.',
        chinese2: '政府准备征收一系列新税，以应付社会的开支。',
        liju3: 'The mountain range has many high peaks and deep canyons.',
        chinese3: '这条山脉有许多高峰和深谷。',
          liju4: 'There’s no gas range in the kitchen, but you can use the electric stove.',
        chinese4: '厨房里没有煤气灶，但你可以用电炉。',
	      liju5: 'They range in price from $3 to $15.',
        chinese5: '它们的价格在$3到$15之间变化。',
        liju6: 'The salesclerks ranged the goods in good order in the shop-windows.',
        chinese6: '售货员将橱窗中的商品排列得很整齐。'
      }
      ,
      {
        id: '2637',
        word: 'rank',
        ciyi: ' n. 排，横列；军衔；社会阶层 vt. 排列；把…分等级',
        liju1: 'His collar badge designates his rank.',
        chinese1: '他的领章表明他的级别。',
        liju2: 'Ranks of police in riot gear stood nervously by.',
        chinese2: '一排排配有防暴设备的警察紧张地站在一边。',
        liju3: 'The report ranks the U.S. 20th out of 22 advanced nations.',
        chinese3: '这份报告把美国排在22个发达国家的第20位。'
      }
      ,
      {
        id: '2638',
        word: 'rap',
        ciyi: 'v. 轻敲；责备，训斥n. 轻敲,说唱音乐',
        liju1: ' They rapped the door, but there was no answer.',
        chinese1: '他们敲了敲门，但没人答应。',
        liju2: 'The policeman rapped the driver for his violation of traffic regulations.',
        chinese2: '由于司机违反交通规则，警察对他严加批评。',
        liju3: 'Her favourite music was by Run DMC, a rap group.',
        chinese3: '她最喜欢的音乐是一个说唱音乐组合的音乐。'
      }
      ,
      {
        id: '2639',
        word: 'rape',
        ciyi: 'n. 强奸，掠夺v. 强奸；掠夺',
        liju1: 'The rape victim was found dumped in one of the side streets.',
        chinese1: '人们发现那名强奸案受害者被扔在一条小路上。',
        liju2: 'A young woman was brutally raped in her own home.',
        chinese2: '一个年轻妇女在自己家中被粗暴地强奸了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2640',
        word: 'rare',
        ciyi: 'a. 稀有的；稀薄的',
        liju1: "'I happened on a rare stone in a small jeweler's. '",
         chinese1: '我在一家小珠宝店偶然发现了一块罕见的宝石。',
        liju2: 'The air is rare in high altitudes.',
        chinese2: '海拔高的地方空气稀薄.',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2641',
        word: 'rarely',
        ciyi: 'ad. 很少地；难得；罕有地',
        liju1: 'He rarely mingles with other students on the campus.',
        chinese1: '他很少和校园里的其他学生交往。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2642',
        word: 'rash',
        ciyi: ' a. 轻率的；鲁莽的n. 皮疹；突然大量出现的事物',
        liju1: 'Scratching can aggravate the rash.',
        chinese1: '搔痒会使疹子发炎。',
        liju2: 'It would be rash to rely on such evidence.',
        chinese2: '依靠这样的证据太轻率了。',
        liju3: 'We hope that there is no more rash of bombings.',
        chinese3: '我们希望不会再有连串的轰炸了。'
      }
      ,
      {
        id: '2643',
        word: 'rat',
        ciyi: 'n. 鼠 v. 捕鼠；背叛n. 鼠 v. 捕鼠；背叛',
        liju1: 'The ungry rat ravened down the poison bait. ',
        chinese1: '饥饿的老鼠一口吞下毒饵。',
        liju2: 'She claims he ratted on their divorce settlement.',
        chinese2: '她声称他违背了他们的离婚协议。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2644',
        word: 'rate ',
        ciyi: ' n.比率，速度；价格；等级v. 认为；估价',
        liju1: 'They have to quicken up their rate of work to fulfil the production quota.',
        chinese1: '为了完成生产指标，他们就得加快工作速度。',
        liju2: 'A special weekend rate is available from mid-November.',
        chinese2: '周末特价从11月中旬就有了。',
        liju3: 'We rated his fortune at about one hundred thousand dollars.',
        chinese3: '我们估计他的财产约值十万美元。',
          liju4: 'Marion works on a ship of the first rate.',
        chinese4: '玛丽昂在一艘甲级舰上工作。'
      }
      ,
      {
        id: '2645',
        word: 'ratio',
        ciyi: 'n. 比率，比例',
        liju1: 'The adult to child ratio is one to six.',
        chinese1: '成人与儿童之比是1比6。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2646',
        word: 'rational ',
        ciyi: ' a. 合理的；理性的n. 有理数',
        liju1: "'He's asking you to look at both sides of the case and come to a rational decision.'",
         chinese1: '他是在要求你看到问题的两面，然后做出理性的决定。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2647',
        word: 'raw',
        ciyi: 'a. 生的；未加工的；无经验的,未经训练的',
        liju1: "'He doesn't eat raw garlic. '",
         chinese1: '他吃不来生蒜。',
        liju2: 'We import raw materials and energy and export mainly industrial products.',
        chinese2: '我们进口原材料和能源，主要出口工业产品。',
        liju3: 'The raw recruit has just joined the army.',
        chinese3: '这个未经训练的新兵刚刚入伍。'
      }
      ,
      {
        id: '2648',
        word: 'razor',
        ciyi: ' vt. 剃，用剃刀刮n. 剃刀',
        liju1: "' He was honing his razor although it's very sharp.'",
         chinese1: '尽管他的剃刀十分锋利了，可他还是不停地磨它。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2649',
        word: 'react ',
        ciyi: 'v. 回应，作出反应；反抗；起反作用',
        liju1: "'I shouted at her, but she didn't react at all. '",
         chinese1: '我向她大声喊叫，但她毫无反应。',
        liju2: 'My father never saved money and perhaps I reacted against that.',
        chinese2: '我父亲从不攒钱，也许我反对这种做法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2650',
        word: 'readily ',
        ciyi: 'ad. 容易地；乐意地；无困难地',
        liju1: 'Our boss is not one to take up readily with new ideas.',
        chinese1: '我们的老板不是一个容易接受新思想的人。',
        liju2: 'I asked her if she would allow me to interview her, and she readily agreed.',
        chinese2: '我问她是否允许我采访她，她欣然同意了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2651',
        word: 'realistic ',
        ciyi: 'a. 现实的；现实主义的',
        liju1: 'We must be realistic in our self-estimation, neither being conceited nor belittling ourselves. ',
        chinese1: '我们对自己的估计应该实事求是，不要自高自大，也不要妄自菲薄。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2652',
        word: 'reality',
        ciyi: ' n. 现实；实际；真实',
        liju1: 'If we redouble our efforts, our dream will translate into reality. ',
        chinese1: '如果我们加倍努力，我们的梦想会变成现实。',
        liju2: 'He came across as streetwise, but in reality he was not.',
        chinese2: '他看似适应都市的生活，但事实上他不是。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2653',
        word: 'realm',
        ciyi: 'n. 领域，范围；王国，国土',
        liju1: 'The king banished the traitor from the realm.  ',
        chinese1: '国王把背叛者驱逐出王国。',
        liju2: 'So, in the bright realm of values, we have no excuse behind us, nor justification before us.  ',
        chinese2: '所以在敞亮的价值领域中，人们身后没有借口，面前没有理由。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2654',
        word: 'reap',
        ciyi: ' v. 收获，获得；收割',
        liju1: 'The peasants leaned down to reap wheat.  ',
        chinese1: '农民们俯身收割小麦。',
        liju2: "'You'll soon begin to reap the benefits of being fitter.'",
         chinese2: '你很快就会获得身体更健康带来的好处。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2655',
        word: 'rear',
        ciyi: 'v. 抚养，饲养a. 后方的；后面的；背面的n. 后面',
        liju1: 'The enemy rear is weakly defended. ',
        chinese1: '敌人后方空虚。',
        liju2: 'She spends a lot of time rearing animals.',
        chinese2: '她花很多时间饲养动物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2656',
        word: 'reasonable',
        ciyi: 'a. 合理的，公道的；通情达理的；适度的',
        liju1: "'He's a reasonable sort of person.'",
         chinese1: '他是那种通情达理的人。',
        liju2: 'You get a good meal for a reasonable price.',
        chinese2: '你能以公道的价格好好地吃一顿。',
        liju3: 'Nowadays advertising costs are no longer in reasonable proportion to the total cost of the product.',
        chinese3: '现在，广告成本与产品的总成本不成比例。'
      }
      ,
      {
        id: '2657',
        word: 'reassure',
        ciyi: 'vt. 使…安心，安慰',
        liju1: 'Kate claps the man on the shoulder to reassure him.',
        chinese1: '凯特拍了拍那个人的肩膀以示安慰。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2658',
        word: 'rebel ',
        ciyi: 'v. 反叛；反抗；造反n. 反叛者，叛逆者；叛徒',
        liju1: 'He was a child who always rebelled against his teachers.',
        chinese1: '他是一个一贯不服从老师教导的孩子。',
        liju2: 'In Chinese history peasants rebelled several times.',
        chinese2: '在中国历史上，农民曾数次造反。',
        liju3: 'She had been a rebel at school.',
        chinese3: '她在学校时就是个叛逆者。'
      }
      ,
      {
        id: '2659',
        word: 'rebellion ',
        ciyi: 'n. 叛乱；反抗；不服从',
        liju1: 'The armed rebellion was quelled only in a few days.',
        chinese1: '几天之内武装叛乱就被镇压下去了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2660',
        word: 'recall',
        ciyi: 'v.回想，回忆；撤销，收回',
        liju1: "'I don't recall what he said at the meeting.'",
         chinese1: '我想不起来他在会上说了些什么。',
        liju2: 'All substandard products should be recalled promptly.',
        chinese2: '凡是次品均应立即收回。',
        liju3: 'The commander was recalled from the frontline.',
        chinese3: '司令员从前线被召回。'
      }
      ,
      {
        id: '2661',
        word: 'recede',
        ciyi: 'vi.退去，渐渐远去；向后倾斜',
        liju1: "'Luke's footsteps receded into the night.'",
         chinese1: '卢克的脚步声渐渐消失在夜色中。',
        liju2: 'The floods gradually receded from the fields.',
        chinese2: '洪水从田野里逐渐退去。',
        liju3: 'He has a receding chin.',
        chinese3: '他有一个向后缩的下巴。'
      }
      ,
      {
        id: '2662',
        word: 'receipt',
        ciyi: 'n. 收到；收据；收入vt. 收到',
        liju1: 'His main work is to receipt for each lot of goods. ',
        chinese1: '他的主要工作是给每一批货物开收据。',
        liju2: "'Here's the receipt for half payment on goods. '",
         chinese2: '这是支付一半货款的收据。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2663',
        word: 'reception',
        ciyi: ' n. 接待，招待会；接收，接收效果',
        liju1: 'Reception of TV programmes is unsatisfactory here. ',
        chinese1: '这里电视节目的接收情况不佳。',
        liju2: 'She was asked to pour at a little reception for the performers after the concert. ',
        chinese2: '她被请来主持在音乐会之后为演出者举行的小型招待会。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2664',
        word: 'recession',
        ciyi: 'n. 衰退；不景气',
        liju1: 'There is sign that the recession has bottomed out. ',
        chinese1: '有迹象表明萧条已达最低点。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2665',
        word: 'recipe ',
        ciyi: 'n. 食谱；处方，秘诀',
        liju1: ' I have yet to think of a recipe that is not in their database.',
        chinese1: '我还没有想到一个食谱是不在他们的数据库里的。',
        liju2: 'I’ll have to get your recipe. ',
        chinese2: '我得向你要点烹饪秘诀。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2666',
        word: 'recipient',
        ciyi: 'n.接受者；容纳者',
        liju1: ' I felt glad that I was now a giver of pleasure, not merely a passive recipient. ',
        chinese1: '我很高兴，现在我是一个快乐的给予者，而不只是被动的接受者。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2667',
        word: 'reciprocal',
        ciyi: 'a. 互惠的；相互的；互利的',
        liju1: 'They expected a reciprocal gesture before more hostages could be freed.',
        chinese1: '他们期望在更多的人质被释放之前有互惠的表示。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2668',
        word: 'recite',
        ciyi: 'v. 背诵，朗诵；叙述；列举',
        liju1: 'The little boy refused to recite at the evening party. ',
        chinese1: '这个小男孩拒不在晚会上朗诵。',
        liju2: 'He loved to recite his personal experiences.',
          chinese2: '他喜欢述说他个人的经历。',
        liju3: 'Our history teacher recited dully a number of dates.',
        chinese3: '我们的历史老师枯燥地列举了一大堆日期。'
      }
      ,
      {
        id: '2669',
        word: 'reckless',
        ciyi: 'a. 轻率的，鲁莽的，不顾后果的',
        liju1: ' Her attitude was reckless.  ',
        chinese1: '她的态度是轻率的。',
        liju2: 'His reckless driving accounted for the accident. ',
        chinese2: '他开车鲁莽，引起了这场事故。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2670',
        word: 'reckon',
        ciyi: 'vt.估计；认为；计算vi. 估计；计算；指望，想要',
        liju1: ' Did you reckon in the cost of the taxi?  ',
        chinese1: '你把坐计程车的费用计算在内了吗?',
        liju2: 'We reckon him to be the best goalkeeper in the world.',
        chinese2: '我们认为他是世界上最好的足球守门员。',
        liju3: 'We must reckon with all possible difficulties.',
        chinese3: '我们必须估计到可能遇到的一切困难。',
          liju4: "'You can't reckon upon his promises.'",
         chinese4: '你别指望他的诺言会兑现。'
	   }
      ,
      {
        id: '2671',
        word: 'reclaim',
        ciyi: ' v. 开拓；开垦；要求归还，收回',
        liju1: 'In Hong Kong many square miles of land have been reclaimed from the sea.',
        chinese1: '在香港，许多平方英里的陆地都是填海开拓出来的。',
        liju2: "'The good news for the industry was that investors don't seem to be in any hurry to reclaim their money.'",
         chinese2: '对该行业来说，好消息是投资者们似乎不急于要求收回他们的钱。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2672',
        word: 'recongnise/recognize',
        ciyi: ' v. 认出，识别；承认',
        liju1: ' He walked along in the shadows hoping no one would recognize him.  ',
        chinese1: '他在暗处向前走，希望没有人能认出他来。',
        liju2: 'I recognize my own shortcomings.',
        chinese2: '我承认我自己的那些缺点。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2673',
        word: 'recognition ',
        ciyi: 'n. 识别；承认，认出',
        liju1: ' The scientist deserves recognition for his talent.  ',
        chinese1: '这名科学家的才华应受到承认。',
        liju2: 'Recognition of the importance of career development is increasing.',
        chinese2: '对职业发展重要性的认可在不断增加。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2674',
        word: 'recollect',
        ciyi: 'v. 回忆，想起',
        liju1: 'I cannot recollect where we met.',
        chinese1: '我想不起来我们是在什么地方相遇的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2675',
        word: 'recommend',
        ciyi: ' v. 推荐，介绍；劝告',
        liju1: 'She recommended us another restaurant.',
        chinese1: '她向我们推荐了另一家饭馆。',
        liju2: 'He recommended me to change my way of life.',
        chinese2: '他劝我改变生活方式。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2676',
        word: 'reconcile',
        ciyi: 'vt. 使一致；使和解；调停，调解',
        liju1: 'The teacher in charge of our class had to reconcile disputes among the students.',
        chinese1: '我们的班主任必须调解学生中的纠纷。',
        liju2: "'It is difficult to reconcile one's statements with one's conduct.'",
        chinese2: '一个人的言行很难一致。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2677',
        word: 'recorder ',
        ciyi: 'n. 录音机；记录员',
        liju1: ' The gramophone has been displaced by tape recorder. ',
        chinese1: '留声机已被磁带录音机所取代。',
        liju2: 'The recorder wrote down everything that was discussed in the meeting.',
        chinese2: '记录员记下了会议上讨论过的所有内容。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2678',
        word: 'recovery',
        ciyi: 'n. 恢复，痊愈；重获，收复',
        liju1: 'There she lay year in year out，unable to move，and with no hope of recovery. ',
        chinese1: '她常年躺在那儿不能活动，没有痊愈的希望。',
        liju2: 'The film told a story about the recovery of a fallen city.',
        chinese2: '这部影片讲述了收复一座沦陷城市的故事。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2679',
        word: 'recreation',
        ciyi: 'n. 娱乐；消遣',
        liju1: 'Give a portion of each day to recreation.',
        chinese1: '每天抽一部分时间用于娱乐。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2680',
        word: 'recruit ',
        ciyi: ' n.新兵；新成员v.征募新兵，招收新成员',
        liju1: "'The country's first act would be to recruit for the navy. '",
         chinese1: '国家的第一个行动是为海军征募新兵。',
        liju2: 'The new recruits will be sent to the front soon.',
        chinese2: '新兵不久将被派往前线。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2681',
        word: 'rectangle',
        ciyi: 'n. 矩形；长方形',
        liju1: ' It is a rectangle if the four angles square.  ',
        chinese1: '如果四个角均为直角，该图为矩形。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2682',
        word: 'rectify',
        ciyi: ' vt. 改正，整顿',
        liju1: 'You should rectify your error before it is too late. ',
        chinese1: '你应当及时改正你的错误。',
        liju2: 'The local government was taking emergency measures to rectify the state of chaos.  ',
        chinese2: '地方政府正在采取紧急措施整顿这种混乱局面。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2683',
        word: 'recur',
        ciyi: 'v. 复发；重现；重新提起',
        liju1: 'The thought of going travelling abroad has often recurred to her mind.',
        chinese1: '出国旅游的念头屡屡在她的脑子里想起。',
        liju2: 'If the swelling should recur, please take this medicine immediately.',
        chinese2: '如果再出现肿胀症状，请立即服用这种药品。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2684',
        word: 'recycle ',
        ciyi: 'v. 使再循环，重复利用',
        liju1: 'They recycle empty tins so as to use the metal. ',
        chinese1: '他们回收空罐头盒以利用其金属。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2685',
        word: 'redeem ',
        ciyi: 'vt. 赎回；挽回；救赎',
        liju1: ' She is going to redeem her diamond ring. ',
        chinese1: '她将赎回她的钻石戒指。',
        liju2: 'He realized the mistake he had made and wanted to redeem himself.',
        chinese2: '他认识到自己所犯的错误并想挽回声誉。',
        liju3: 'He prays to be redeemed by Jesus Christ from his past sins.',
        chinese3: '他祈求上帝将他从过去的罪孽中救赎出来。'
      }
      ,
      {
        id: '2686',
        word: 'reduction ',
        ciyi: 'n. 减少；下降；缩小',
        liju1: 'We are now seeing a trend towards the reduction of exports by China. ',
        chinese1: '我们现在注意到一个趋势，那就是中国的出口在减少。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2687',
        word: 'redundant ',
        ciyi: 'a. 多余的，过剩的；冗长的，累赘的',
        liju1: ' This word is redundant, it can be left out.  ',
        chinese1: '这个字是多余的，可以去掉。',
        liju2: 'If a spoken language were completely redundant, it could not be useful.',
        chinese2: '口语如果太过累赘的话，就没有多大用处了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2688',
        word: 'reed',
        ciyi: 'n. 芦苇，苇丛；芦笛，牧笛',
        liju1: ' We need reed needles to speed the deed indeed. ',
        chinese1: '我们确实需要一些芦苇针来加快行动。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2689',
        word: 'reel',
        ciyi: ' vi.蹒跚地走 vt. 卷；使旋转n.卷筒，线轴',
        liju1: 'He was a bit tipsy, reeling along the street.',
        chinese1: '他已有几分醉意，沿大街蹒跚而行。',
        liju2: 'They reeled the hosepipe in rapidly.',
        chinese2: '他们迅速将水龙带卷好。',
        liju3: 'Tom couldn’t catch the fish because the reel had jammed.',
        chinese3: '因为线轴被卡住了，所以汤姆没法把那条鱼钓起来。'
      }
      ,
      {
        id: '2690',
        word: 'reference',
        ciyi: 'n. 参考，参考书目；涉及，提及；介绍信；证明书',
        liju1: 'He made no reference to any agreement.',
        chinese1: '他没有提到任何协议。',
        liju2: 'The above views may or may not be correct; they are only for your reference. ',
        chinese2: '以上看法不一定符合实际，仅供你们参考。',
        liju3: 'The firm offered to give her a reference.',
        chinese3: '公司提出给她开一封推荐信。'
      }
      ,
      {
        id: '2691',
        word: 'refine',
        ciyi: 'vt. 精炼，提纯',
        liju1: 'Their daily work is to refine crude oil. ',
        chinese1: '他们每天的工作是精炼原油。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2692',
        word: 'reflect',
        ciyi: 'vt. 反映；反射，表达 vi. 反射，深思',
        liju1: 'Their actions clearly reflect their thoughts. ',
        chinese1: '他们的行动清楚地反映了他们的思想。',
        liju2: 'We should all give ourselves time to reflect.',
        chinese2: '我们都应该给自己时间来深思。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2693',
        word: 'reflexion/reflection',
        ciyi: ' n. 反射；沉思；映像,倒影',
        liju1: ' Meg stared at her reflection in the bedroom mirror.',
        chinese1: '梅格端详着自己映在卧室镜子中的影像。',
        liju2: 'After days of reflection she decided to write back.',
        chinese2: '经过几天的认真思考，她决定回信。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2694',
        word: 'reform ',
        ciyi: 'n. 改革，改良；改正v. 改革，革新',
        liju1: 'Without the reform of the economic management system our industry will rot. ',
        chinese1: '没有经济管理体制的改革，我们的工业就会逐渐衰退。',
        liju2: "'He has completely reformed after three years' imprisonment.'",
         chinese2: '坐了三年牢以后，他已完全改过自新。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2695',
        word: 'refrain',
        ciyi: 'v. 节制，克制；戒除n. 叠句，重复，副歌',
        liju1: 'Mrs. Hardie refrained from making any comment.',
        chinese1: '哈迪太太忍住了没做任何评论。',
        liju2: "'Rosa's constant refrain is that she doesn't have a life.'",
        chinese2: '罗莎总是不断重复的一句话就是她生活得很无聊。',
        liju3: 'The performance ended with all the people singing the refrain.',
        chinese3: '演出以所有人齐唱副歌结束。',
          liju4: 'The doctor suggested my father refrain from smoking.',
        chinese4: '医生建议我父亲戒烟。'
      }
      ,
      {
        id: '2696',
        word: 'refresh',
        ciyi: ' vt. 更新；使精力恢复；使清新',
        liju1: 'The lotion cools and refreshes the skin.',
        chinese1: '润肤液使皮肤凉爽清新。',
        liju2: "'I've refreshed the page a few times and still see no comments.'",
         chinese2: '这一页我已经反复刷新了几次，但是仍未见到任何评论。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2697',
        word: 'refuge ',
        ciyi: 'n. 避难；避难所；庇护',
        liju1: 'They took refuge in a bomb shelter.',
        chinese1: '他们在一个防空洞里避难。',
        liju2: 'Eventually Suzanne fled to a refuge for battered women.',
        chinese2: '最后苏珊娜逃到了一家受虐妇女收容所。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2698',
        word: 'refugee ',
        ciyi: ' n. 难民，流亡者',
        liju1: 'A political refugee from Cameroon has moved into our neighbourhood.',
        chinese1: '一个喀麦隆的政治难民已经搬进了我们小区。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2699',
        word: 'refund',
        ciyi: 'v. 退还；偿还，归还n. 退款；偿还额',
        liju1: "'We guarantee to refund your money if you're not delighted with your purchase.'",
         chinese1: '如果你对购买的商品不满意，我们保证退款。',
        liju2: 'Can I refund this ticket? ',
        chinese2: '我可以退这张票吗？',
        liju3: "'You'll just have to take those cowboy boots back and ask for a refund.'",
         chinese3: '你不过是要把那些牛仔靴拿回去，要求退款。'
       }
      ,
      {
        id: '2700',
        word: 'refusal',
        ciyi: 'n. 拒绝；推却',
        liju1: 'Tom tempered his refusal with a smile.',
        chinese1: '汤姆微笑着并婉转拒绝。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2701',
        word: 'refute ',
        ciyi: 'vt. 反驳，驳斥；驳倒',
        liju1: 'We can easily refute his argument. ',
        chinese1: '我们可以很容易地驳倒他的论点。',
        liju2: 'I refuted his claim that he was innocent.',
        chinese2: '他说他清白无辜，我对此进行了驳斥。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2702',
        word: 'regarding',
        ciyi: 'prep. 关于，至于',
        liju1: ' I had nothing to say regarding this matter. ',
        chinese1: '对于这件事我无话可说。',
        liju2: 'The proposal regarding safety in production was called up in the conference this morning. ',
        chinese2: '有关安全生产的提案今天上午已在会上提出讨论。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2703',
        word: 'regardless',
        ciyi: 'a. 不管；不顾；不注意',
        liju1: 'The fields give high and stable yields regardless of climatic circumstances. ',
        chinese1: '不管天气条件如何，这块地总是保持稳产高产。',
        liju2: 'Despite her recent surgery she has been carrying on regardless.',
        chinese2: '尽管她最近动了手术，她却一直在不顾一切地继续工作。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2704',
        word: 'regime',
        ciyi: 'n. 政权；社会制度',
        liju1: 'The dictator banned all newspapers and books that criticized his regime. ',
        chinese1: '独裁者取缔批评他政权的报刊书籍。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2705',
        word: 'region ',
        ciyi: 'n. 地区；范围',
        liju1: 'The spring thaw caused the river to deluge the region.',
        chinese1: '春天冰雪融化，使河水泛滥淹没了那地区。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2706',
        word: 'register',
        ciyi: 'vt.登记；指示；把…挂号；正式提出n.注册',
        liju1: ' You must register with the police when you come to a foreign country.',
        chinese1: '当你到达外国时你必须在警方登记。',
        liju2: 'It will only register on sophisticated X-ray equipment.',
        chinese2: '只有在先进的X光设备上它才会显示出来。',
        liju3: "'To avoid miscarriage you'd better register your letter. '",
         chinese3: '为了避免误投，你还是将信挂号寄出为好。',
          liju4: 'He was struck off the lawyer register. ',
        chinese4: '在注册律师名单上，他已被除名。'
      }
      ,
      {
        id: '2707',
        word: 'regulate',
        ciyi: 'vt.调节，控制；校准',
        liju1: ' The temperature of the room should be regulated at all times.',
        chinese1: '室温应随时调节。',
        liju2: 'We must try our best to regulate our expenditure.',
        chinese2: '我们必须尽力控制开支。',
        liju3: "'Fighting is to start at 5 o'clock.Please regulate your watch.'",
         chinese3: '战斗将于上午五时开始。请对准表。'
       }
      ,
      {
        id: '2708',
        word: 'regulation ',
        ciyi: 'n. 管理；规则；校准；控制',
        liju1: 'Some in the market now want government regulation in order to reduce costs.',
        chinese1: '市场上现在有人想要政府来管理以降低成本。',
        liju2: 'The European Union has proposed new regulations to control the hours worked by its employees.',
        chinese2: '欧盟已经提出了新的法规来控制其雇员的工作时间。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2709',
        word: 'rehearse',
        ciyi: 'v.排练；预演',
        liju1: 'Tens of thousands of people have been rehearsing for the opening ceremony in the new stadium.',
        chinese1: '数万人一直在新体育场里为开幕式进行排练。',
        liju2: 'Anticipate any tough questions and rehearse your answers.',
        chinese2: '事先预想会有任何难的问题，然后在心里预演你的答复。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2710',
        word: 'reign',
        ciyi: 'vi. 统治；支配；盛行n. 统治；统治时期',
        liju1: 'Queen Victoria reigned over England from 1837 to1901.',
        chinese1: '维多利亚女王于1837年至1901年间统治英国。',
        liju2: 'Peace reigns throughout our country.',
        chinese2: '我国一片太平景象。',
        liju3: 'So how do we go about changing the world if we don’t have supreme reign over everything? ',
        chinese3: '那么，如果我们没有统治一切的至高权力，我们该如何着手改变这个世界呢？'
      }
      ,
      {
        id: '2711',
        word: 'rein',
        ciyi: ' n. 缰绳；统治；控制',
        liju1: ' He reined in his horse to a halt.',
        chinese1: '他勒紧缰绳让马停下来。',
        liju2: 'We must rein our emotions and not be swayed by them.',
        chinese2: '我们必须控制住感情，而不能感情用事。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2712',
        word: 'reinforce',
        ciyi: 'vt.加强，增援',
        liju1: 'The regular troops need to be reinforced.',
        chinese1: '正规部队将需要增援。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2713',
        word: 'reject',
        ciyi: 'vt.拒绝；丢弃；排斥；抵制',
        liju1: 'I rejected his suggestion.',
        chinese1: '我不同意他的建议。',
        liju2: 'They rejected the apples that were overripe.',
        chinese2: '他们把那些熟得过透的苹果扔掉。',
        liju3: 'The transplant was rejected by the surrounding tissue.',
        chinese3: '移植的器官受到周围组织的排斥。'
      }
      ,
      {
        id: '2714',
        word: 'rejoice',
        ciyi: 'vi. 高兴；庆祝',
        liju1: 'We are victorious, wherefore let us rejoice.',
        chinese1: '我们胜利了，因此我们特别高兴。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2715',
        word: 'relate ',
        ciyi: 'vt.使…有联系；叙述',
        liju1: ' It is difficult to relate these results with any known cause. ',
        chinese1: '这些结果很难与任何已知的原因联系在一起。',
        liju2: 'He related what he had seen in the theatre.',
        chinese2: '他把在剧场中所看到的情况叙述了一遍。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2716',
        word: 'relationship',
        ciyi: 'n. 关系；关联',
        liju1: ' A good relationship is built on trust.  ',
        chinese1: '一种好的关系是以信任为基础的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2717',
        word: 'relativity',
        ciyi: 'n. 相对论；相关性；相对性',
        liju1: "' Einstein's theory of relativity won for him universal esteem. '",
         chinese1: '爱因斯坦的相对论赢得了全世界对他的崇敬。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2718',
        word: 'relax',
        ciyi: ' v. 使松弛；放松，休息',
        liju1: 'The school discipline tends to relax a bit before summer holidays.',
        chinese1: '学校纪律在放暑假之前总是有些松弛。',
        liju2: 'Massage is used to relax muscles, relieve stress and improve the circulation.',
        chinese2: '按摩可用于放松肌肉、减轻压力和促进血液循环。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2719',
        word: 'relay',
        ciyi: 'vt.转播；使接替；接力传递n.接替人员',
        liju1: "'The broadcasting station will relay the news of the President's death.'",
         chinese1: '广播电台将转播总统逝世的消息。',
        liju2: 'In transmitting urgent messages the king gained time by relaying at each town.',
        chinese2: '在传递紧急信息时，国王采取每一城镇更换驿马的接力式传送方法以赢得时间。',
        liju3: 'New relays of soldiers were sent to the front.',
        chinese3: '新一批接替的战士被派往了前线。'
      }
      ,
      {
        id: '2720',
        word: 'release',
        ciyi: 'vt.释放；发布；允许发表n. 发布',
        liju1: 'Becoming your own person releases your creativity.',
        chinese1: '保持你自己的本色可以释放出你的创造力。',
        liju2: "'We have to release the news before 5 o'clock tomorrow morning. '",
         chinese2: '我们必须在明晨五点以前将这条新闻发布出去。',
        liju3: 'He is releasing an album of love songs.',
        chinese3: '他将发布一张情歌专辑。'
      },
      {
        id: '2721',
        word: 'relevant ',
        ciyi: 'a. 有关的；中肯的；有重大意义的',
        liju1: 'He will mention the relevant laws that fence out undesirable immigrants.',
        chinese1: '他将提及有关禁止不受欢迎的移民入境的法律。',
        liju2: 'The advice of the old staff was rather relevant.',
        chinese2: '老员工的建议相当中肯。',
        liju3: 'His novel is still relevant today.',
        chinese3: '他的小说今天仍有现实意义。'
      }
      ,
      {
        id: '2722',
        word: 'reliable',
        ciyi: 'a.可信赖的；可靠的',
        liju1: 'Judged by the ordinary standards, he was reliable.',
        chinese1: '用一般的标准衡量，他是可信赖的。',
        liju2: 'It is difficult to obtain reliable evidence. ',
        chinese2: '很难获得可靠的证据。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2723',
        word: 'reliance',
        ciyi: 'n. 信赖；信心',
        liju1: ' Reducing our reliance on foreign sources of energy makes the country more secure. ',
        chinese1: '减少我们对进口能源的依赖无疑能使得国家更加安全。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2724',
        word: 'relief',
        ciyi: 'n. 救济；减轻，解除',
        liju1: 'His family has been on relief ever since he died.',
        chinese1: '自他去世后, 他的家属一直靠救济过日子。',
        liju2: "'The doctor's treatment gave no relief to the patient. '",
         chinese2: '那医生的治疗并未使病人的病情减轻。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2725',
        word: 'relieve',
        ciyi: 'vt.解除，减轻；换…的班；换岗',
        liju1: 'You had better open your mouth to relieve the pressure on your eardrums. ',
        chinese1: '你最好张开嘴巴以减轻耳朵鼓膜所受的压力。',
        liju2: "'At seven o'clock the night nurse came in to relieve her.'",
         chinese2: '7点钟时值夜班的护士进来接了她的班。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2726',
        word: 'religion ',
        ciyi: 'n. 宗教；信仰；信念，信条',
        liju1: 'Maybe religion should help to straighten him out. ',
        chinese1: '也许宗教信仰可以使他改邪归正。',
        liju2: "'He was a Catholic but didn't practise his religion. '",
         chinese2: '他那时是天主教徒，但并不实践信条。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2727',
        word: 'religious ',
        ciyi: 'a. 宗教的；虔诚的',
        liju1: 'She disowned her religious belief.',
        chinese1: '她放弃了自己的宗教信仰。',
        liju2: 'They are both very religious and felt it was a gift from God.',
        chinese2: '他们俩都很虔诚，觉得这是上帝赐予的礼物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2728',
        word: 'relish ',
        ciyi: 'n. 滋味；风味；调味品vt.品味；欣赏',
        liju1: 'I ate my bread and drank my coffee with relish.',
        chinese1: '我美滋滋的吃着面包，喝着咖啡',
        liju2: 'This dish relishes of curry.',
        chinese2: '这道菜有咖喱味。',
        liju3: "'I don't relish ham salad.'",
         chinese3: '我不喜欢吃火腿色拉。'
       }
      ,
      {
        id: '2729',
        word: '我不喜欢吃火腿色拉。',
        ciyi: 'a. 不愿的；勉强的',
        liju1: 'Mr. Spero was reluctant to ask for help.',
        chinese1: '斯珀洛先生不愿意请求帮助。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2730',
        word: 'rely',
        ciyi: 'vi. 依靠；信赖,信任',
        liju1: 'They relied heavily on the advice of their professional advisers.',
        chinese1: '他们非常依赖专业顾问的建议。',
        liju2: "'We don't rely on blessings from Heaven. '",
         chinese2: '我们不靠老天保佑。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2731',
        word: 'remain',
        ciyi: 'vi. 保持；依然；剩余；n. 剩余物，残骸',
        liju1: 'Prices remain stable throughout.  ',
        chinese1: '物价始终保持稳定。',
        liju2: 'They were cleaning up the remains of their picnic.',
        chinese2: '他们正在打扫野餐的残余物。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2732',
        word: 'remainder',
        ciyi: 'n.其余的人；余数，剩余物',
        liju1: ' I spent the remainder of the afternoon in play.  ',
        chinese1: '我把这一下午其余的时间用在游戏上了',
        liju2: 'Take 4 from 9 and the remainder is 5. ',
        chinese2: '9减4，余数为5。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2733',
        word: 'remark',
        ciyi: 'vt.觉察vi. 评论n.言辞；评语',
        liju1: 'Did you remark the difference between the twin sisters?',
        chinese1: '你觉察出这两个孪生姊妹的不同之处了吗?',
        liju2: "'He remarked that we mustn't judge people solely by their appearences.'",
         chinese2: '他说我们绝对不要只以貌取人。',
        liju3: 'I found great illumination in his remark. ',
        chinese3: '我从他的话中得到很大的启发。'
      }
      ,
      {
        id: '2734',
        word: 'remarkable',
        ciyi: 'a. 卓越的；非凡的；值得注意的',
        liju1: 'He was a remarkable man.',
        chinese1: '他是个非凡卓越的人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2735',
        word: 'remedy',
        ciyi: 'n.药品；治疗措施vt.治疗；补救；纠正',
        liju1: 'There are many different kinds of natural remedies to help overcome winter infections.',
        chinese1: '很多不同种类的天然药物有助于克服冬季传染病。',
        liju2: 'A great deal has been done internally to remedy the situation.',
        chinese2: '内部已经采取了很多措施来挽救局面。',
        liju3: 'These tablets will do nothing to remedy my sore throat.',
        chinese3: '这些药片一点也治不了我的嗓子疼。',
          liju4: 'Mark wished to remedy his mistake and please you.',
        chinese4: '马克希望能够弥补过失，让你高兴。'
      }
      ,
      {
        id: '2736',
        word: 'remind ',
        ciyi: 'vt.提醒；使想起',
        liju1: 'In case I forget, please remind me of my promise. ',
        chinese1: '假如我忘记了，请提醒一下我的诺言。',
        liju2: 'This mishap reminded me of a traffic accident I once experienced.',
        chinese2: '这次不幸事故使我联想起我过去经历的一次交通事故。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2737',
        word: 'remnant ',
        ciyi: 'n. 剩余，遗迹',
        liju1: 'The Ainu settlers in Hokkaido are the last remnant of a prehistoric race.',
        chinese1: '北海道的阿伊努人是史前某个种族的最后残存者。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2738',
        word: 'remote',
        ciyi: 'a. 遥远的；偏僻的；疏远的',
        liju1: 'Slabs of rock had slipped sideways in the remote past and formed this hole.',
        chinese1: '在遥远的过去，大块的岩石向旁边滑落，形成了这个洞。',
        liju2: 'Nowadays tractors are used even in remote mountainous regions. ',
        chinese2: '现在连偏僻的山区也用上了拖拉机。',
        liju3: 'This government depends on the wishes of a few who are remote from the people.',
        chinese3: '这个政府按照那几个疏远群众之人的愿望行事。'
      }
      ,
      {
        id: '2739',
        word: 'removal',
        ciyi: 'n. 免职；除去；搬迁',
        liju1: 'What they expected to be the removal of a small lump turned out to be major surgery.',
        chinese1: '他们本以为只是切除一个小肿块，结果却成了个大手术。',
        liju2: 'We didn’t see him again since our removal to London.',
        chinese2: '自从我们搬到伦敦后就再也没有见过他。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2740',
        word: 'renaissance',
        ciyi: ' n. 新生；复兴；文艺复习时期',
        liju1: 'Popular art is experiencing a renaissance.',
        chinese1: '通俗艺术正在复兴。',
        liju2: 'This was the time of the early Renaissance and the beginning of the age of exploration in Europe.  ',
        chinese2: '郑和开拓了一条新路。这时，也是欧洲早期文艺复兴和探索时代的开始。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2741',
        word: 'render',
        ciyi: ' vt.提出；使得；实施',
        liju1: 'He rendered a report to the commander-in-chief.',
        chinese1: '他向总司令作了汇报。',
        liju2: 'His remark rendered me speechless.',
        chinese2: '他的话使我哑口无言。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2742',
        word: 'renew',
        ciyi: ' vt.使更新；恢复；重新开始',
        liju1: ' They renewed contact with other import and export corporations.',
        chinese1: '他们与其他进出口公司恢复了联系。',
        liju2: 'We renewed the attack after stopping for two hours.',
        chinese2: '停了两小时后，我们重新发起进攻。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2743',
        word: 'renovate',
        ciyi: 'vt.更新；修复',
        liju1: 'We must renovate our social life to keep abreast of the times.',
        chinese1: '我们必须革新我们的社会生活以适应时代的要求。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2744',
        word: 'rent',
        ciyi: 'n. 租金vt.出租；租用',
        liju1: ' She worked to pay the rent while I went to college.',
        chinese1: '当我读大学时，她工作挣钱来付租金。',
        liju2: 'He rented the house out to a young couple.',
        chinese2: '他把这所房子租给一对年轻的夫妇。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2745',
        word: 'repay',
        ciyi: 'vi. 偿还；报答；报复',
        liju1: 'When will you repay me the $500 I lent you last week?',
        chinese1: '我上周借给你的五百美元你什么时候还给我?',
        liju2: 'I can never repay you for your kindness.',
        chinese2: '你对我的恩情我永远也报答不完。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2746',
        word: 'repeated',
        ciyi: 'a. 再三的，反复的',
        liju1: 'Mr. Lawssi apparently did not return the money, despite repeated reminders.',
        chinese1: '劳斯先生显然还没有还钱，尽管已经反复提醒过。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2747',
        word: 'repel',
        ciyi: 'vt.击退；拒绝；使厌恶；讨厌',
        liju1: 'We repelled the enemy from the shores after a long hard struggle.',
        chinese1: '经过长时间的艰苦战斗，我们将敌人从海岸击退。',
        liju2: 'He repelled all my offers of help.',
        chinese2: '他拒绝了我的一切帮助。',
        liju3: 'His long hair and filthy clothes repelled her.',
        chinese3: '他的长头发和脏衣服使她感到厌恶。'
      }
      ,
      {
        id: '2748',
        word: 'repertoire',
        ciyi: 'n. 全部节目；计算机指令系统',
        liju1: "'Meredith D'Ambrosio has thousands of songs in her repertoire.'",
         chinese1: '梅雷迪思•丹布罗西奥的全部曲目达到几千首。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2749',
        word: 'repetition',
        ciyi: ' n. 重复，反复 ',
        liju1: 'He could also have cut out much of the repetition and thus saved many pages.',
        chinese1: '他本来也可以删掉很多重复的语句，省去很多页数。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2750',
        word: 'replace',
        ciyi: 'vt.取代，替换；放回，归还',
        liju1: 'Trams are being replaced by the buses.',
        chinese1: '电车正在被公共汽车所代替。',
        liju2: 'Please replace the books after reading.',
        chinese2: '看完书后请将书放回原处。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2751',
        word: 'reporter',
        ciyi: 'n. 记者；报告人',
        liju1: 'The reporter wrote the novel down. ',
        chinese1: '记者写文章贬低这本小说。',
        liju2: 'The reporter finished his speech in five minutes.',
        chinese2: '报告人五分钟就演讲完了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2752',
        word: 'represent',
        ciyi: 'vt.代表；描绘；说明',
        liju1: ' His opinion represents that of the majority.',
        chinese1: '他的意见代表大多数人的意见。',
        liju2: 'This painting represents the end of the world.',
        chinese2: '这张画描绘的是世界的末日。',
        liju3: 'Let me represent my ideas to you in another way.',
        chinese3: '让我用另一种方式向你说明我的想法。'
      }
      ,
      {
        id: '2753',
        word: 'representative ',
        ciyi: 'a. 典型的，有代表性的n. 代表',
        liju1: ' He was in no way representative of dog trainers in general.',
        chinese1: '他绝不能代表大多数的驯狗师。',
        liju2: 'We all voted for him as our representative. ',
        chinese2: '大家都推举他当代表。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2754',
        word: 'repression',
        ciyi: 'n. 抑制，压抑；镇压',
        liju1: "'Much of the anger he's felt during his life has stemmed from the repression of his feelings about men.'",
         chinese1: '他一生中的大多愤怒源于对男人的情感压抑。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2755',
        word: 'reproach ',
        ciyi: ' n. 责备；耻辱vt.责备；申斥',
        liju1: ' He looked at her with reproach.',
        chinese1: '他用责备的目光看着她。',
        liju2: "'She is quick to reproach anyone who doesn't live up to her own high standards.'",
         chinese2: '她动不动就指责达不到她高标准的人。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2756',
        word: 'reproduce',
        ciyi: ' vt.生殖，再生；复制',
        liju1: 'Lobsters can reproduce a lost limb.',
        chinese1: '龙虾能使失去的肢体重新再生出来。',
        liju2: 'He can reproduce a painting by a new method.',
        chinese2: '他能用一种新方法复制一幅油画。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2757',
        word: 'reptile',
        ciyi: 'n. 爬行动物',
        liju1: 'No matter how dry your skin gets, you will never turn into an alligator or any other type of reptile. ',
        chinese1: '不论皮肤多么干燥，你永远不会变成美洲鳄或任何其他一种皮肤粗糙的爬行动物。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2758',
        word: 'republican',
        ciyi: 'a. 共和国的n. 共和主义者',
        liju1: 'The Republican burden is their record of denial, evasion, and neglect. ',
        chinese1: '共和党的负担是他们否认、逃避和疏忽的履历。',
        liju2: 'What made you decide to become a Republican, as opposed to a Democrat?',
        chinese2: '是什么使你决定成为共和党人，而不是民主党人呢？',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2759',
        word: 'reputation',
        ciyi: 'n. 名声；声望',
        liju1: 'Alice Munro has a reputation for being a very depressing writer.',
        chinese1: '艾丽斯•门罗有文风抑郁的名声。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2760',
        word: 'requirement',
        ciyi: 'n. 要求；必要条件；必需品',
        liju1: ' Its products met all legal requirements.',
        chinese1: '它的产品满足了所有法定的必备条件。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2761',
        word: 'rescue',
        ciyi: ' vt.营救；援救n. 营救；援救',
        liju1: 'They were trying every possible means to rescue the miners trapped underground.',
        chinese1: '他们正在千方百计设法营救围困在井下的矿工。',
        liju2: 'A big rescue operation has been launched for a trawler missing in the North Atlantic.',
        chinese2: '为了一艘在北大西洋失踪的拖网渔船，已经开始了一项大的营救行动。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2762',
        word: 'resemblance ',
        ciyi: 'n. 相似；相似之处',
        liju1: 'There was a remarkable resemblance between him and Pete.',
        chinese1: '他和皮特有一个惊人的相似之处。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2763',
        word: 'resemble',
        ciyi: 'vt.类似，像',
        liju1: 'He resembles his father very much in character.',
        chinese1: '他在性格上非常像他父亲。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2764',
        word: 'resent',
        ciyi: 'vt.怨恨；愤恨；厌恶',
        liju1: 'She resents her mother for being so tough on her.',
        chinese1: '她恨她的妈妈对她如此苛刻。',
        liju2: 'reservation',
        chinese2: ' n. 预约，预订；保留',
        liju3: ' He went to the desk to inquire and make a reservation.',
        chinese3: '他到前台去咨询并做了预订。',
         liju4: 'I made a reservation for a flight to London Thursday.',
        chinese4: '我预定了星期四飞往伦敦的机票。'
      }
      ,
      {
        id: '2765',
        word: 'reserve ',
        ciyi: 'n. 储备，储备金；自然保护区；预备队；缄默；vt.储备；保留；预约',
        liju1: "'The Persian Gulf has 65 percent of the world's oil reserves.'",
         chinese1: '波斯湾拥有全世界石油储备的65%。',
        liju2: 'The workers of this nature reserve try to clean it by themselves but their efforts are not enough. ',
        chinese2: '该自然保护区的工人们试图靠他们自己来清理，但他们的努力远远不够。',
        liju3: 'Ellen wished to overcome her own shyness and reserve in class.',
        chinese3: '埃伦希望能克服自己在课堂上的害羞和缄默。',
          liju4: 'I reserve the right to make my own decisions.',
        chinese4: '我保留自行做出决定的权利。',
        liju5: 'Please call ahead if you want to reserve a room.',
        chinese5: '预订房间请提前来电话。'
      }
      ,
      {
        id: '2766',
        word: 'reservoir',
        ciyi: 'n. 水库；蓄水池',
        liju1: 'Various kinds of fish are being bred in the reservoir.',
        chinese1: '水库里放养了许多种鱼。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2767',
        word: 'residence',
        ciyi: 'n. 住宅，住处；居住',
        liju1: 'The house is currently run as a country inn, but could easily convert back into a private residence.',
        chinese1: '这栋房子目前被当作一家乡村客栈用，但可以容易地改回成一所私用住宅。',
        liju2: 'They had entered the country and had applied for permanent residence.',
        chinese2: '他们已进入了那个国家，并已经申请了永久居住权。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2768',
        word: 'resident',
        ciyi: 'a. 居住的；定居的n. 居民',
        liju1: 'He moved to the United States in 1990 to live with his son, who had been resident in Baltimore since 1967.',
        chinese1: '他1990年移居美国去和从1967年就住在巴尔的摩的儿子一起住。',
        liju2: 'The archbishop called on the government to build more low cost homes for local residents.',
        chinese2: '这位大主教呼吁该政府为当地居民建更多的廉价住宅。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2769',
        word: 'resign',
        ciyi: 'v.辞职；放弃',
        liju1: 'He resigned his post as chief engineer.',
        chinese1: '他辞去了总工程师的职务。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2770',
        word: 'resist',
        ciyi: 'v. 抵抗，抗拒；抵制，忍住',
        liju1: 'At that time the government was unwilling to resist the foreign invasion.',
        chinese1: '那时的政府对外国的入侵不愿进行抵抗。',
        liju2: 'At first they resisted the call for reform.',
        chinese2: '起初，他们对改革的号召加以抵制。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2771',
        word: 'resistance',
        ciyi: 'n. 阻力；抵抗；反抗；抵抗力；电阻',
        liju1: 'A CBS correspondent in Colombo says the troops are encountering stiff resistance.',
        chinese1: '哥伦比亚广播公司驻科伦坡的一名记者报道说，军队正遭遇顽强的抵抗。',
        liju2: 'The design of the bicycle reduces the effects of wind resistance and drag.',
        chinese2: '这种自行车的设计减少了风阻及曳力的影响。',
        liju3: 'The salt reduces the electrical resistance of the water.',
        chinese3: '盐使水的电阻减小。'
      }
      ,
      {
        id: '2772',
        word: 'resistant',
        ciyi: 'a. 抵制的，反抗的',
        liju1: 'Some people are very resistant to the idea of exercise.',
        chinese1: '一些人对锻炼的主意非常抵制。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2773',
        word: 'resolute ',
        ciyi: 'a. 坚决的；果断的',
        liju1: 'Voters perceive him as a decisive and resolute international leader.',
        chinese1: '选民认识到他是一位果断、坚定的国际领袖。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2774',
        word: 'resolution',
        ciyi: 'n.决议，决定；坚决，决心',
        liju1: 'He replied that the UN had passed two major resolutions calling for a complete withdrawal.',
        chinese1: '他回复说联合国已经通过要求完全撤军的两项重大决议。',
        liju2: 'They made a resolution to lose all the weight gained during the Christmas holidays.',
        chinese2: '他们下了一个决心要减掉圣诞节期间增加的全部体重。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2775',
        word: 'resolve',
        ciyi: 'v. 决定，决心；溶解；使分解；决议；解决n.解答；决心；决议',
        liju1: ' I resolved to visit my grandmother at least once a year.',
        chinese1: '我决定每年至少要去看望祖母一次。',
        liju2: 'Water may be resolved into hydrogen and oxygen.',
        chinese2: '水可以分解为氢和氧。',
        liju3: 'The conference resolved to resort to force to recover the lost territory.',
        chinese3: '会议决定以武力恢复失地。',
          liju4: 'I’m sure they will soon resolve all the difficulties.',
        chinese4: '我可以肯定地说他们很快会解决所有的困难。',
	      liju5: 'No one brought a resolve to this problem.',
        chinese5: '没人能解答这一难题。',
        liju6: 'My resolve is shaken, but I’m not ready to give up yet.',
        chinese6: '我的决心被动摇了，但我还不打算放弃。'
      }
      ,
      {
        id: '2776',
        word: 'resort',
        ciyi: 'n.胜地；手段；常去之地vi. 求助，诉诸',
        liju1: 'Hawaii is an all-the-year-round tourist resort.',
        chinese1: '夏威夷一年四季都是旅游胜地。',
        liju2: 'Reading and watching TV are Anne’s resorts when she feels lonely.',
        chinese2: '读书和看电视是安妮排遣寂寞的方式。',
        liju3: 'His punishing work schedule had made him resort to drugs.',
        chinese3: '他那累人的工作日程已经使他不得不求助于毒品了。'
      },
      {
        id: '2777',
        word: 'resource',
        ciyi: 'n. 资源，财力；办法；智谋',
        liju1: ' It depends on how you utilise your resource.',
        chinese1: '这取决于你如何利用你的资源。',
        liju2: 'The CEO is a man of great resources.',
        chinese2: '这位首席执行官是一个足智多谋的人。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2778',
        word: 'respective',
        ciyi: 'a. 分别的，各自的',
        liju1: 'Steve and I were at very different stages in our respective careers.',
        chinese1: '史蒂夫和我处在各自事业的迥然不同的阶段。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2779',
        word: 'respond',
        ciyi: 'vi. 回答；响应，回应',
        liju1: 'The army responded with gunfire and tear gas.',
        chinese1: '军方以炮火和催泪弹回应。',
        liju2: 'How did the editor respond to our suggestion?',
        chinese2: '编辑对我们的建议反应如何?',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2780',
        word: 'response',
        ciyi: ' n. 响应；反应；回答',
        liju1: 'They have made generous response to the appeals for funds. ',
        chinese1: '他们对募集资金的呼吁作出了慷慨的响应。',
        liju2: 'The judge asked the witness for his response.',
        chinese2: '法官要求证人作答。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2781',
        word: 'responsibility ',
        ciyi: ' n. 责任；职责，义务',
        liju1: 'The court feels it has a responsibility to ensure that customers are not misled.',
        chinese1: '该法院觉得其有责任确保消费者们不被误导。',
        liju2: 'She had decided that as a doctor she had a responsibility to her fellow creatures.',
        chinese2: '她决定作为一名医生她对同胞们负有义务。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2782',
        word: 'responsible ',
        ciyi: 'a. 有责任的；负责的，可靠的；责任重大的',
        liju1: 'He still felt responsible for her death.',
        chinese1: '他依然觉得对她的死负有责任。',
        liju2: 'David is a responsible and honest reporter.',
        chinese2: '戴维是一名诚实可靠的记者。',
        liju3: 'You are too young for such a responsible position.',
        chinese3: '对于这样一个责任重大的职位，你太年轻了。'
      }
      ,
      {
        id: '2783',
        word: 'restless',
        ciyi: 'a. 焦躁不安的；不平静的；得不到休息的',
        liju1: 'By 1982, she was restless and needed a new impetus for her talent.',
        chinese1: '到1982年，她焦躁不安，需要一个新的对其才华的推动力。',
        liju2: 'The couple was sitting on the beach, watching the restless sea.',
        chinese2: '那对夫妻坐在海滩上，望着波涛汹涌的大海。',
        liju3: 'The father spent a restless night worrying about his lost son.',
        chinese3: '父亲因为担心走失的儿子而彻夜未眠。'
      }
      ,
      {
        id: '2784',
        word: 'restore',
        ciyi: 'vt.恢复；修复；归还',
        liju1: 'The army has recently been brought in to restore order.',
        chinese1: '该军队最近被调来恢复秩序。',
        liju2: 'The old temple was restored during the early nineteenth century.',
        chinese2: '这座古刹是在19世纪初期重建的。',
        liju3: 'She restored the book she had taken by mistake.',
        chinese3: '她把拿错的书放回原处。'
      }
      ,
      {
        id: '2785',
        word: 'restrain',
        ciyi: 'vt.抑制，控制；制止',
        liju1: 'She was so angry that she could hardly restrain herself.',
        chinese1: '她气得几乎控制不了自己。',
        liju2: 'We must not restrain children of their liberty.',
        chinese2: '我们绝对不要限制孩子们的自由。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2786',
        word: 'restraint  ',
        ciyi: ' n. 抑制，克制；约束',
        liju1: 'The president is calling for spending restraints in some areas.',
        chinese1: '该总统要求在一些领域限制开支。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2787',
        word: 'restrict',
        ciyi: 'vt.限制；约束',
        liju1: 'There is talk of raising the admission requirements to restrict the number of students on campus.',
        chinese1: '有提高录取条件来限制校园里学生数量的说法。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2788',
        word: 'resultant',
        ciyi: 'a. 作为结果而发生的；合成的',
        liju1: 'It is the resultant from those two.',
        chinese1: '它是这两者相互结合的结果。',
        liju2: 'Our teacher is explaining the resultantacceleration to us.',
        chinese2: '老师正在给我们讲解什么是合成加速度。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2789',
        word: 'resume ',
        ciyi: 'vt.重新开始，继续；重新占用',
        liju1: ' I tried to persuade her to resume her job as secretary.',
        chinese1: '我试图劝她重新干她的秘书工作。',
        liju2: 'Negotiations are expected to be resumed soon.',
        chinese2: '预期不久就能恢复谈判。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2790',
        word: 'resume ',
        ciyi: 'n.履历，简历',
        liju1: 'I think I should work on this project because it will be good for my resume. ',
        chinese1: '我认为我应该加入某个项目，因为那对我的简历有好处。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2791',
        word: 'retail',
        ciyi: 'n. 零售vt.零售',
        liju1: 'Retail stores usually count on the Christmas season to make up to half of their annual profits.',
        chinese1: '零售商店通常指望圣诞节期间来赚取一半的年利润。',
        liju2: 'This kind of chocolate is retailed at one pound a kilo.',
        chinese2: '这种巧克力糖零售每公斤一英镑。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2792',
        word: 'retain',
        ciyi: 'vt. 保持；雇；记住',
        liju1: 'If you want to retain youthful vigor, you have to take regular exercise.',
        chinese1: '如果你想保持青春活力，你就得经常锻炼。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2793',
        word: 'retention',
        ciyi: 'n. 保留；保持',
        liju1: ' In customer retention situations, the firm knows when the relationship is over. ',
        chinese1: '在客户保留情况下，公司知道关系什么时候结束。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2794',
        word: 'retire',
        ciyi: 'vi. 退休；撤退；退却；就寝',
        liju1: 'According to the new regulations, mining engineers retire at the age of fifty-five.',
        chinese1: '按照新规定，采矿工程师五十五岁退休。',
        liju2: 'They retired to safer positions behind the frontline.',
        chinese2: '他们撤退到前线后面较安全的阵地。',
        liju3: 'You must retire early as you have to catch the early train tomorrow. ',
        chinese3: '你必须早睡，因为明天要赶早班车。'
      }
      ,
      {
        id: '2795',
        word: 'retort',
        ciyi: 'n. 反驳，顶嘴vt.反驳，反击',
        liju1: ' His sharp retort clearly made an impact.',
        chinese1: '他的尖锐反驳显然起了作用。',
        liju2: 'He retorted that I was to blame.',
        chinese2: '他反驳说这事全赖我。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2796',
        word: 'retreat ',
        ciyi: ' n. 撤退；退却vi. 撤退；退避',
        liju1: 'In June 1942, the British 8th Army was in full retreat.',
        chinese1: '1942年6月，英军第8军全线撤退。',
        liju2: 'The enemy was forced to retreat from the city.',
        chinese2: '敌人被迫撤出这个城市。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2797',
        word: 'retrieve',
        ciyi: 'vt. 重新得到；恢复；检索；补救',
        liju1: 'He retrieved the important letter from the waste paper basket.',
        chinese1: '他从废纸篓里找回了那封重要的信。',
        liju2: 'She tried hard to retrieve her luxurious life.',
        chinese2: '她极力设法恢复她的奢华生活。',
        liju3: 'They often retrieved some data from a disk.',
        chinese3: '他们常常从存储磁盘中检索一些信息。'
      }
      ,
      {
        id: '2798',
        word: 'retrospect',
        ciyi: ' n. 回顾，追溯',
        liju1: ' In retrospect, I wish that I had thought about alternative courses of action.',
        chinese1: '回想起来，我真希望自己当初考虑过其他的行动方案。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2799',
        word: 'reveal',
        ciyi: 'vt. 显示；透露；揭露；泄露',
        liju1: 'The actor removed the coat to reveal a costume.',
        chinese1: '男演员脱掉外衣，露出一身戏服。',
        liju2: 'She has refused to reveal the whereabouts of her daughter.',
        chinese2: '她已拒绝透露她女儿的行踪。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2800',
        word: 'revelation',
        ciyi: 'n. 启示；揭露；新发现',
        liju1: ' The revelation of his past leads to his resignation. ',
        chinese1: '对他过去的揭露导致了他的辞职。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2801',
        word: 'revenge ',
        ciyi: 'n. 报复；复仇vt.报复；替…报仇',
        liju1: 'The attackers were said to be taking revenge on the 14-year-old, claiming he was a school bully.',
        chinese1: '攻击者被称是在报复一名14岁男孩，称他是学校一霸。',
        liju2: 'She will revenge her dead sisters.',
        chinese2: '她将为死去的姊妹们报仇。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2802',
        word: 'revenue',
        ciyi: 'n. 税收，国家的收入；收益',
        liju1: 'They not only protect health. They bring in considerable revenue. ',
        chinese1: '他们不仅保护健康，还将带来可观的收入。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2803',
        word: 'reverse',
        ciyi: 'n.相反；颠倒；背面a. 相反的；颠倒的vt.颠倒；倒转',
        liju1: 'He was not at all jolly，quite the reverse.',
        chinese1: '他一点儿也不高兴，恰恰相反。',
        liju2: 'A chart on the reverse of this letter highlights your savings.',
        chinese2: '这封信背面的图表着重写明了你的存款情况。',
        liju3: 'The wrong attitude will have exactly the reverse effect.',
        chinese3: '这种错误的态度会得到恰好相反的结果。',
          liju4: 'Because the normal word order is reversed in passive sentences, they are sometimes hard to follow.',
        chinese4: '由于正常语序在被动句中被颠倒过来了，所以有时很难理解。'
      }
      ,
      {
        id: '2804',
        word: 'revise',
        ciyi: 'vt.校订，修订；修正，修改',
        liju1: 'The English textbooks for middle schools have been completely revised.',
        chinese1: '中学的英语教科书已经全部被修订过。',
        liju2: 'With time he came to revise his opinion of the profession.',
        chinese2: '随着时间的推移，他开始修正自己对这一职业的看法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2805',
        word: 'revive',
        ciyi: 'vi. 复苏；复活；苏醒；恢复精神',
        liju1: ' A dead man will never revive.',
        chinese1: '死人将永不复生。',
        liju2: 'She and a neighbour tried in vain to revive him.',
        chinese2: '她和一个邻居试图使他苏醒过来，却没有成功。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2806',
        word: 'revolt ',
        ciyi: 'vi/n.反抗；反叛；反感',
        liju1: "'It was reported that some of the king's troops had revolted.'",
         chinese1: '据说有些王室军队已经叛变。',
        liju2: 'Autocracy often causes the people to revolt.',
        chinese2: '独裁统治常常引起人民的反抗。',
        liju3: 'It was undeniably a revolt by ordinary people against their leaders.',
        chinese3: '不可否认，这是一场普通百姓反抗领导人的起义。'
      }
      ,
      {
        id: '2807',
        word: 'revolutionary',
        ciyi: 'a. 革命的；大变革的n. 革命者',
        liju1: 'No leader in this country ever existed but he was a revolutionary.',
        chinese1: '在这个国家没有一个领导人不是革命者的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2808',
        word: 'revolve ',
        ciyi: 'vt.使…旋转；使…循环',
        liju1: 'He revolved the pencil between his fingers.',
        chinese1: '他把铅笔放在手指间转动。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2809',
        word: 'reward ',
        ciyi: 'n. 报酬；奖赏；酬谢vt.奖励；酬劳；报答',
        liju1: 'The firm last night offered a $10,000 reward for information leading to the conviction of the killer.',
        chinese1: '这家公司昨晚对能将凶手定罪的信息悬赏1万美元。',
        liju2: 'The school rewarded him with a prize for excellence in his studies.',
        chinese2: '他因学习成绩优秀而受到学校的奖赏。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2810',
        word: 'rhythm',
        ciyi: 'n. 节奏；韵律',
        liju1: 'They drummed a rhythm for dancers.',
        chinese1: '他们为跳舞者敲出节奏。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2811',
        word: 'rib ',
        ciyi: 'n. 肋骨；排骨；肋状物',
        liju1: 'Her heart was thumping against her ribs.',
        chinese1: '当时她的心挨着她的肋骨砰砰直跳。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2812',
        word: 'ribbon',
        ciyi: ' n. 带；缎带；带状物',
        liju1: ' She had tied back her hair with a peach satin ribbon.',
        chinese1: '她用一条桃红色的缎带把头发扎在了脑后。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2813',
        word: 'rid ',
        ciyi: 'vt.使摆脱；使去掉',
        liju1: 'You must rid yourself of this gloomy mood.',
        chinese1: '你必须使自己摆脱这种闷闷不乐的忧郁情绪。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2814',
        word: 'riddle ',
        ciyi: 'n. 谜，谜语',
        liju1: ' All comers to the Sphinx were asked a riddle, and failure to solve it meant death.',
        chinese1: '所有来到斯芬克斯面前的人都被问了一个谜语，解答不了就意味着死亡。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2815 ',
        word: 'ridge ',
        ciyi: 'n.屋脊；山脊；山脉；鼻梁',
        liju1: 'The ridge and pitch of the roof give each first floor room an individual character.',
        chinese1: '屋顶的屋脊和其间距使得一层的每一个房间都有了独立的特色。',
        liju2: 'The herd spills over a far ridge, swelling like a stream down the mountainside.',
        chinese2: '鹿群跨过远处隆起的山脊，像溪流一样冲刷而下。',
        liju3: 'There is a scar on the robber’s ridge.',
        chinese3: '那个强盗的鼻梁上有一道疤。'
      }
      ,
      {
        id: '2816',
        word: 'ridiculous',
        ciyi: 'a. 可笑的；荒谬的',
        liju1: ' It is ridiculous to suggest we are having a romance.',
        chinese1: '说我们之间有风流韵事真是荒唐可笑。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2817',
        word: 'rifle',
        ciyi: 'n. 步枪',
        liju1: 'They shot him at point blank range with an automatic rifle.',
        chinese1: '他们用一支自动步枪在近距离射程内射中了他。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2818',
        word: 'rigid',
        ciyi: 'a. 严格的；刚性的，严厉的；精确的',
        liju1: 'Several colleges in our study have rigid rules about student conduct.',
        chinese1: '我们调查中的几所学院对学生行为举止都有过于严格的规定。',
        liju2: 'We fixed a rigid metal bar for hanging clothes.',
        chinese2: '我们装了一根坚硬的金属杆来挂衣服。',
        liju3: 'Ellen goes rigid, staring at her underling without expression.',
        chinese3: '埃伦变得严厉起来，面无表情地盯着自己的下属。'
      }
      ,
      {
        id: '2819',
        word: 'rigorous',
        ciyi: 'a. 严格的，严厉的；严密的，缜密的',
        liju1: 'They are designed to be rigorous. ',
        chinese1: '它们的设计是很严格的。',
        liju2: 'The selection process is based on rigorous tests of competence and experience.',
        chinese2: '挑选过程是建立在对能力和经验缜密的考核的基础之上的。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2820',
        word: 'rim ',
        ciyi: 'n.边界；边，边缘',
        liju1: 'There was a racial conflict at the southern rim of the country.',
        chinese1: '该国的南部边界发生了种族冲突。',
        liju2: 'Constant bubbling sends waves of lava lapping over the rim.',
        chinese2: '不断的鼓泡会将起伏的熔岩从边缘溢出。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2821',
        word: 'riot',
        ciyi: 'n. 暴乱； (色彩，声音)极为丰富的vi. 聚众闹事',
        liju1: ' Twelve inmates have been killed during a riot at the prison.',
        chinese1: '十二名囚犯在该监狱里的一次暴乱中丧生。',
        liju2: 'The setting sun tinted the sky in a riot of colors.',
        chinese2: '落日给天空染上了绚丽的颜色。',
        liju3: 'The unsatisfied workers are rioting in the streets.',
        chinese3: '心怀不满的工人们在大街上闹事。'
      }
      ,
      {
        id: '2822',
        word: 'rip',
        ciyi: 'vt.撕坏；撕裂n. 裂口，裂缝',
        liju1: 'You should rip the cover off the box first.',
        chinese1: '你首先应当把这个盒子的封套扯掉。',
        liju2: 'Looking at the rip in her new dress, she flew into a rage.',
        chinese2: '看着新连衣裙上的裂口，她勃然大怒。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2823',
        word: 'risk',
        ciyi: 'n. 风险；危险；冒险vt.冒…的危险',
        liju1: 'There is a small risk of brain damage from the procedure.',
        chinese1: '存在该手术导致脑损伤的小风险。',
        liju2: 'He risked his life in trying to save the drowning boy.',
        chinese2: '他冒着生命危险去营救那个快要淹死的男孩。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2824',
        word: 'ritual ',
        ciyi: ' n. 仪式；礼制；老规矩a.例行的；作为仪式一部分',
        liju1: ' This is the most ancient, and holiest of the Shinto rituals.',
        chinese1: '这是最古老、最神圣的神道教仪式。',
        liju2: 'The whole Italian culture revolves around the ritual of eating.',
        chinese2: '整个意大利文化是围绕着饮食习俗的。',
        liju3: 'Amy speaks in Arabic, exchanging the ritual greetings.',
        chinese3: '艾米用阿拉伯语与人互致例行问候。',
          liju4: 'These are ancient Shang Dynasty bronzes, usually ritual vessels.',
        chinese4: '这些都是商朝的青铜器，一般是举行仪式的器皿。'
      }
      ,
      {
        id: '2825',
        word: 'rival',
        ciyi: ' n. 对手；竞争者vt.与…竞争；对抗a. 竞争的',
        liju1: 'He prayed down his rival. ',
        chinese1: '他以祈祷来降伏了对手。',
        liju2: 'The two students rivaled each other for the scholarship.',
        chinese2: '这两个学生为获得奖学金而互相竞争。',
        liju3: 'The rival team lost by twelve points in the first round.',
        chinese3: '在第一轮比赛中，对方以十二分之差败比。'
      }
      ,
      {
        id: '2826',
        word: 'roar',
        ciyi: 'vi.吼叫；喧闹；咆哮',
        liju1: ' I heard the lions roaring in their cages.',
        chinese1: '我听见狮子在笼中吼叫。',
        liju2: 'The officer is roaring at the soldiers.',
        chinese2: '军官在对士兵们咆哮。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2827',
        word: 'roast',
        ciyi: 'vt.烤，焙；烘，烘烤',
        liju1: 'She put a leg of mutton into the oven to roast it for supper.',
        chinese1: '她将一条羊腿放入烤箱准备晚饭吃烤肉。',
        liju2: 'The sun is roasting us mercilessly.',
        chinese2: '太阳无情地烧烤着我们。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2828',
        word: 'rob',
        ciyi: ' vt.抢劫；使…丧失；非法剥夺',
        liju1: 'They robbed the bank in broad daylight.',
        chinese1: '他们在光天化日之下就抢劫银行。',
        liju2: 'The critic argued that a working wife may rob a husband of being the master of the house.',
        chinese2: '这位批评家争辩说，妻子参加工作可能会剥夺丈夫作为一家之主的权利。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2829',
        word: 'robe',
        ciyi: 'n. 长袍，礼服；制服',
        liju1: 'Pope John Paul II knelt in his white robes before the simple altar.',
        chinese1: '约翰•保罗二世教皇身着白色长袍跪在简朴的祭坛前。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2830',
        word: 'robust',
        ciyi: ' a. 强健的；健康的；粗野的',
        liju1: ' He was always the robust one, physically strong and mentally sharp.',
        chinese1: '他一向是个健壮的人，身体强壮、头脑敏锐。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2831',
        word: 'rod ',
        ciyi: 'n. 棒；杆 ',
        liju1: ' This is a traditional shot of a fuel rod glowing underwater. ',
        chinese1: '这是一个传统的水下发光的燃料棒镜头。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2832',
        word: 'romance',
        ciyi: ' n. 传奇；浪漫史；风流韵事',
        liju1: ' The romance of the sea beckoned the young sailors. ',
        chinese1: '航海的浪漫故事吸引着年轻水手们。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2833',
        word: 'romantic',
        ciyi: ' a. 浪漫的；空想的；不切实际的',
        liju1: "'When we're together, all he talks about is business.I wish he were more romantic.'",
         chinese1: '我们在一起时，他只谈生意上的事。我希望他能更浪漫一点。',
        liju2: 'He has a romantic view of rural society.',
        chinese2: '他对于乡村地区有种不切实际的看法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2834',
        word: 'rot',
        ciyi: 'n. 荒唐v.使腐烂；使腐朽；腐败',
        liju1: 'It is perfect rot to trust a man that you have never met before.',
        chinese1: '相信一个你从未见过的人简直是荒唐。',
        liju2: 'Investigations had revealed extensive rot in the beams under the ground floor.',
        chinese2: '检测显示一楼下面的横梁已经有大面积的腐烂。',
        liju3: 'The rain has rotted the roof beam.',
        chinese3: '雨水使房梁逐渐腐朽。'
      }
      ,
      {
        id: '2835',
        word: 'rotary',
        ciyi: ' a. 旋转的，转动的',
        liju1: ' The machine stopped its rotary motion because of the failure of power.',
        chinese1: '机器由于断电而停止转动。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2836',
        word: 'rotate',
        ciyi: 'vt.使旋转；使转动',
        liju1: 'Everyone knows that the Moon rotates around the Earth.',
        chinese1: '人人都知道月亮绕着地球转。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2837',
        word: 'rotten',
        ciyi: 'a. 腐烂的，腐朽的',
        liju1: 'The smell outside this building is overwhelming —— like rotten eggs.',
        chinese1: '这栋大楼外的气味势不可挡—— 像臭鸡蛋。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2838',
        word: 'roundabout',
        ciyi: ' a. 迂回的，绕道的n. 环状交叉路口',
        liju1: 'History moves in zigzags and by roundabout ways. ',
        chinese1: '历史的发展是曲折的，迂回的。',
        liju2: 'The bus flipped over at a roundabout.',
        chinese2: '这辆公共汽车在一条环状交叉路上翻车了。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2839',
        word: 'rouse',
        ciyi: ' vt.唤醒；激起，使振奋；惊起',
        liju1: 'He went all over the country, rousing the workers and peasants for the struggle against oppression.',
        chinese1: '他到全国各地，唤起工人和农民进行反压迫斗争。',
        liju2: 'The explosion of bombs roused me out of a deep sleep.',
        chinese2: '炸弹的爆炸声把我从熟睡中惊醒。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2840',
        word: 'route',
        ciyi: 'n. 路线；路程',
        liju1: 'He lined out the route for the sightseers.',
        chinese1: '他给游客们画出了路线图。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2841',
        word: 'routine',
        ciyi: 'n.日常工作；例行公事a. 日常的；例行的',
        liju1: ' His routine work is to rub the coal through a sieve. ',
        chinese1: '他的日常工作是用力筛煤。',
        liju2: 'The man cleans and repairs the machines as a matter of routine.',
        chinese2: '那位男士按常规清洗和修理了机器。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2842',
        word: 'royal',
        ciyi: ' a. 皇家的；高贵的；第一流的',
        liju1: 'News is flying about concerning a royal wedding. ',
        chinese1: '有关皇室婚礼的消息不胫而走。',
        liju2: 'The hotel prepared royal feasts for its guests.',
        chinese2: '这家饭店为客人提供一流的宴席。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2843',
        word: 'royalty',
        ciyi: ' n. 王室；王权',
        liju1: ' Royalty and government leaders from all around the world are gathering in Japan.',
        chinese1: '来自世界各国的王室和政府首脑们正聚集日本。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2844',
        word: 'rub',
        ciyi: 'v. 擦；摩擦',
        liju1: 'He rubbed his forehead with the back of his hand.',
        chinese1: '他用手背擦了擦前额。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2845',
        word: 'ruby',
        ciyi: ' n. 红宝石',
        liju1: 'She reset a ruby in her necklace. ',
        chinese1: '她在她的项链上重新镶上一块红宝石。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2846',
        word: 'rude',
        ciyi: ' a. 粗鲁的，无礼的；残暴的；粗糙的，粗陋的',
        liju1: "'He's rude to her friends and obsessively jealous.'",
         chinese1: '他对她的朋友粗鲁无礼而且过分嫉妒。',
        liju2: 'If you expect the match to be friendly, you’re in for a rude awakening.',
        chinese2: '如果你期望比赛友好进行，那你肯定会大吃一惊。',
        liju3: 'Tom made a rude doghouse with some boards in the backyard.',
        chinese3: '汤姆在后院用木板搭了一个简陋的狗窝。'
      },
      {
        id: '2847',
        word: 'rug',
        ciyi: 'n. 小地毯；围毯',
        liju1: 'A Persian rug covered the hardwood floors.',
          chinese1: '一张波斯小地毯铺在了那硬木地板上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2848',
        word: 'ruin',
        ciyi: 'n. 废墟；毁灭；崩溃；灭亡vt.毁灭；使破产',
        liju1: 'One dead child was found in the ruins almost two hours after the explosion.',
        chinese1: '一名遇难儿童在爆炸发生近两小时后在废墟中被找到。',
        liju2: 'Constant indulgence in bad habits brought about his ruin. ',
        chinese2: '经常沉溺于恶习导致了他的毁灭。',
        liju3: 'He was ruined by gambling.',
        chinese3: '赌博使他倾家荡产。'
      }
      ,
      {
        id: '2849',
        word: 'rumo(u)r',
        ciyi: 'n. 谣言；传闻',
        liju1: 'The rumor rocked the whole city.',
        chinese1: '谣言使整个城市惊慌不安。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2850',
        word: 'rural ',
        ciyi: 'a. 农村的，乡下的',
        liju1: 'These plants have a tendency to grow in the more rural areas.',
        chinese1: '这些植物倾向于生长在更偏远的乡村地区。',
        liju2: 'These works have a strong flavour of rural life.',
        chinese2: '这些作品具有浓郁的农村生活气息。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2851',
        word: 'rust ',
        ciyi: 'n. 锈；生锈；vt.使生锈；腐蚀',
        liju1: 'Oil it regularly to prevent rust.',
        chinese1: '经常擦油，以免生锈。',
        liju2: "'Don't let your mind rust during the summer vacation.'",
         chinese2: '在暑期中别让你的脑子生锈。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2852',
        word: 'ruthless',
        ciyi: 'a. 无情的，残忍的',
        liju1: 'Fascists are the most ruthless enemy of the people. ',
        chinese1: '法西斯是人民最残酷无情的敌人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2853',
        word: 'sack ',
        ciyi: 'sack',
        liju1: 'The chicken pecked a hole in the sack.',
        chinese1: '小鸡在布袋上啄了一个洞。',
        liju2: 'To sack a lazybones',
        chinese2: '解雇一名懒家伙',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2854',
        word: 'sacred ',
        ciyi: 'a. 神的；神圣的；庄严的',
        liju1: 'It is sacred in popular belief.',
        chinese1: '它被民众认为是神圣的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2855',
        word: 'sacrifice ',
        ciyi: 'n. 牺牲；祭品；供奉vt.牺牲；献出',
        liju1: 'He was endowed with the spirit of self-sacrifice.',
        chinese1: '他富有自我牺牲精神。',
        liju2: 'Animal sacrifices to the gods.',
        chinese2: '献给众神的动物祭品。',
        liju3: 'Nick sacrificed his life tosave the drowning child.',
        chinese3: '尼克为救落水儿童献出了自己的生命。'
      }
      ,
      {
        id: '2856',
        word: 'saddle',
        ciyi: 'n. 鞍，鞍状物；车座',
        liju1: 'It looks like a saddle.',
        chinese1: '它看起来像一个马鞍。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2857',
        word: 'safeguard',
        ciyi: 'n.保护；保护措施vt.保护，捍卫',
        liju1: 'Keeping clean is a safeguarding the confidential data.',
        chinese1: '保持清洁是抵御疾病的一种预防措施。',
        liju2: 'They will press for international action to safeguard the ozone layer.',
        chinese2: '他们将竭力要求国际行动来保护臭氧层。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2858',
        word: 'saint',
        ciyi: 'n. 圣人；圣徒',
        liju1: 'Every parish was named after a saint.',
        chinese1: '每个教区都以一个圣徒的名字命名。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2859',
        word: 'sake',
        ciyi: 'n. 目的；利益；缘故',
        liju1: 'I wish for your sake they were right. ',
        chinese1: '为了你的缘故，我但愿他们是对的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2860',
        word: 'salad',
        ciyi: 'n. 色拉，凉拌菜',
        liju1: 'He mixed his son a salad.',
        chinese1: '他为儿子调制了一盘色拉。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2861',
        word: 'salary ',
        ciyi: '薪水',
        liju1: 'He was barely listening until the salary was mentioned. Then he pricked up his ears.',
        chinese1: '他几乎没有注意听些什么， 但当提到工资时， 他却侧耳细听。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2862',
        word: 'salesman',
        ciyi: 'n. 推销员；售货员',
        liju1: "'The salesman won't bate a penny of it.'",
         chinese1: '售货员一分钱也不肯减少。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2863',
        word: 'salient',
        ciyi: 'a. 显著的；突出的',
        liju1: 'Perhaps not as salient are the differences in the intensity of food inflation across the world.',
        chinese1: '也许不是突出的，但是不同发展强度的食物通胀世界各地。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2864',
        word: 'salute ',
        ciyi: 'n. 致敬；敬礼；欢迎vt.行礼致敬，问候',
        liju1: 'John waved and did a salute to the leaving premier.',
        chinese1: '约翰对离开的总理挥手并敬礼致敬。',
        liju2: 'The host lifted his cup in a salute.',
        chinese2: '主人举杯表示欢迎。',
        liju3: 'We saluted our deceased leader by dipping our flags.',
        chinese3: '我们降旗向已故领导人致敬。'
      }
      ,
      {
        id: '2865',
        word: 'salvation ',
        ciyi: 'n. 拯救；救助',
        liju1: 'If she needs salvation, she will posit a savior. ',
        chinese1: '如果她需要救助，她就会设想一个救助者。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2866',
        word: 'sample',
        ciyi: 'vt.取样；抽样检查n. 样品；样本',
        liju1: 'To sample the products',
        chinese1: '对产品进行抽样检查',
        liju2: "'We're giving away 2, 000 free samples.'",
         chinese2: '我们正在赠送2000件免费样品。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2867',
        word: 'sanction',
        ciyi: 'n. 批准，认可；约束力；国际制裁vt.批准；认可',
        liju1: 'The church would not sanction his second marriage.',
        chinese1: '教会不会认可他的第二次婚姻。',
        liju2: 'Some people maintained that shame may operate as the principal sanction against wrongdoing.',
        chinese2: '有些人认为羞耻之心可以成为防止干坏事的主要约束力。',
        liju3: 'Economic sanctions meant not trading with other countries.',
        chinese3: '经济制裁意味着不能与其他国家进行贸易往来。',
		 liju4: 'The government sanctioned the military research.',
        chinese4: '政府批准了这次军事调查。'
      },
      {
        id: '2868',
        word: 'sane',
        ciyi: 'a. 心智健全的；理智的；合情合理的',
        liju1: 'He seemed perfectly sane.',
        chinese1: '他看来心智非常健全。',
        liju2: 'No sane person wishes to see conflict or casualties.',
        chinese2: '理智的人都不希望看到冲突或伤亡。',
        liju3: 'Do you have any sane reasons for not wearing your seat belt?',
        chinese3: '你能对自己不系安全带给出合理的解释吗？'
      }
      ,
      {
        id: '2869',
        word: 'sarcastic',
        ciyi: 'a. 挖苦的；尖刻的，辛辣的',
        liju1: "'She poked fun at people's shortcomings with sarcastic remarks.'",
         chinese1: '她用挖苦的话来取笑别人的缺点。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2870',
        word: 'satire',
        ciyi: 'n. 讽刺；讽刺作品',
        liju1: 'The satire aimed at modern greed. ',
        chinese1: '讽刺针对现代贪婪。',
        liju2: 'This is a sharp satire on the American political process.',
        chinese2: '这是一部关于美国政治进程的尖锐的讽刺作品。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2871',
        word: 'satisfactory ',
        ciyi: 'a. 满意的；符合要求的',
        liju1: 'I never got a satisfactory answer.',
        chinese1: '我从未得到过一个满意的回答。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2872',
        word: 'saturate',
        ciyi: 'vt.浸透，使湿透；使充满',
        liju1: 'The works saturated with sweat and heart',
        chinese1: '浸透着汗水和心血的作品',
        liju2: 'The sittingroom was saturated with perfume.',
        chinese2: '起坐间里充满了香水的味道。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2873',
        word: 'sauce',
        ciyi: 'n. 酱油；沙司；调味汁',
        liju1: 'We eat them with sauce. ',
        chinese1: '我们就着酱汁吃。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2874',
        word: 'saucer',
        ciyi: 'n. 茶托，碟子',
        liju1: 'He clacked the cup against the saucer.',
        chinese1: '他将茶杯与碟子相碰发出丁当的声音。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2875',
        word: 'sausage',
        ciyi: 'n. 香肠；腊肠',
        liju1: 'If you’re lucky, you get a pastry, a hearty breakfast of pancakes and sausage and eggs, or an English fry-up.',
        chinese1: '如果幸运的话，你会拿着一份糕点，有煎饼、香肠和鸡蛋的丰盛早餐，或者是一份英式煎火腿。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2876',
        word: 'savage ',
        ciyi: 'a. 野蛮的；残酷的n. 未开化的；野人',
        liju1: 'This was a savage attack on a defenceless young girl.',
        chinese1: '这是对一个无力自卫的小姑娘的野蛮袭击。',
        liju2: 'Thesavage lion slew its prey.',
        chinese2: '那只凶恶的狮子杀死了它的猎物。',
        liju3: 'The refugees were living like savages on the island.',
        chinese3: '难民们在岛上像野人一样生活着。'
      }
      ,
      {
        id: '2877',
        word: 'saving',
        ciyi: 'n. 节约；储蓄；存款a. 节约的',
        liju1: 'Her savings were in the First National Bank.',
        chinese1: '她的存款以前在第一国民银行。',
        liju2: 'Old-fashioned housewives were usually very saving.',
        chinese2: '守旧的家庭主妇通常都很节俭。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2878',
        word: 'saw',
        ciyi: 'vt.锯；锯开n. 锯子；锯床',
        liju1: 'Tom carpenter sawed the thick beam careful.',
        chinese2: '木匠很小心地锯开了那根粗横梁。',
        liju3: 'Tom cut his finger on the blade of a powersaw.',
        chinese3: '汤姆被电锯的刀刃割伤了手指。'
      }
      ,
      {
        id: '2879',
        word: 'scale',
        ciyi: 'n. 规模；鱼鳞；音阶；刻度；天平；比例尺',
        liju1: 'The break-down of law and order could result in killing on a massive scale.',
        chinese1: '法律和秩序的崩溃可能会导致大规模的杀戮。',
        liju2: 'Remove any excess scales from the fish skin.',
        chinese2: '刮掉鱼皮上任何多余的鳞。',
        liju3: 'Maria expertly sang a coloratura scale.',
        chinese3: '玛利亚花腔音长的很熟练。',
		 liju4: 'In America, temperature is measured on the Fahrenheit scale.',
        chinese4: '在美国，温度是用华氏刻度来衡量的。',
		 liju5: 'The map, on a scale of 1:10,000, shows over 5,000 individual paths.',
        chinese5: '这张比例尺为1:10000的地图显示了5000条以上的独立小径。'
      }
      ,
      {
        id: '2880',
        word: 'scan',
        ciyi: 'vt.细看；详细调查；扫描；浏览n. 扫描；浏览',
        liju1: 'The officer scanned the room.',
        chinese1: '警察仔细察看了那个房间。',
        liju2: 'She scanned the advertisement pages of the newspapers.',
        chinese2: '她浏览了报纸的广告页。',
        liju3: 'I just had a quick scan through your book again.',
        chinese3: '我刚刚把你的书又作了一次浏览。'
      }
      ,
      {
        id: '2881',
        word: 'scandal',
        ciyi: 'n. 丑闻；流言蜚语；诽谤；公愤；反感',
        liju1: 'He could not but cough up his political scandal.',
        chinese1: '他迫不得已只好吐露出他的政治丑闻。',
        liju2: 'He loved gossip and scandal.',
        chinese2: '他喜欢闲话和流言蜚语。',
        liju3: 'The news about the minister’s private life caused a scandal.',
        chinese3: '有关部长私生活的新闻激起了人们的愤慨。'
      }
      ,
      {
        id: '2882',
        word: 'scar',
        ciyi: 'n. 疤，伤痕',
        liju1: 'He had a scar on his forehead.',
        chinese1: '他前额上有个伤疤。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2883',
        word: 'scarce',
        ciyi: 'a. 缺乏的，不足的；稀少的',
        liju1: 'Food was scarce and expensive.',
        chinese1: '食物匮乏而且昂贵。',
        liju2: 'There was fierce competition for the scarce resources.',
        chinese2: '对稀缺资源的争夺很激烈。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2884',
        word: 'scarcely',
        ciyi: 'ad. 几乎不，简直没有；刚刚',
        liju1: 'I scarcely knew him.',
        chinese1: '我几乎不认识他。',
        liju2: 'He was scarcely awake when he heard the knock at the door.',
        chinese2: '他刚刚醒来就听见有人敲门。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2885',
        word: 'scare ',
        ciyi: 'vt.惊吓；把…吓跑n. 恐慌；惊吓；惊恐',
        liju1: 'To scare enemies by swashbuckling',
        chinese1: '以虚张声势吓跑敌人。',
        liju2: 'The news set off a continent-wide health scare.',
        chinese2: '这一消息引起了整个大陆的健康恐慌。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2886',
        word: 'scarf',
        ciyi: 'n. 围巾；头巾领巾',
        liju1: 'He reached up to loosen the scarf around his neck.',
        chinese1: '他伸出手松开围在脖子上的围巾。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '2887',
        word: 'scatter',
        ciyi: 'vi. 分散，散开；散布；散播',
        liju1: 'The crowd scattered gradually.',
        chinese1: '人群渐渐散开了。',
        liju2: 'She tore the rose apart and scattered the petals over the grave.',
        chinese2: '她掰开玫瑰花，把花瓣撒在坟墓上。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2888',
        word: 'scattered',
        ciyi: 'a. 分散的；离散的',
        liju1: 'The Jews are scattered over the world. ',
        chinese1: '犹太人分散在世界各地。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2889',
        word: 'scenario',
        ciyi: 'n.情景；剧本；情节',
        liju1: 'We determine each of the checkpoints described in Table 1 for each scenario and test.',
        chinese1: '我们确定表 1 中每个场景和测试中所描述的每个检查点。',
        liju2: 'Ella accepted this drama because it had such a moving scenario.',
        chinese2: '埃拉觉得剧本很感人，所以接下了这部戏。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2890',
        word: 'scenery',
        ciyi: 'n. 风景；景色；舞台布景',
        liju1: 'You can appreciate the same scenery in Matsu.',
        chinese1: '在马祖你也可以欣赏到同样的风景。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2891',
        word: 'scent',
        ciyi: 'n. 气味；嗅觉；香水；察觉能力',
        liju1: 'Flowers are chosen for their scent as well as their look.',
        chinese1: '花儿不仅凭外观也凭香味而被选中。',
        liju2: 'She dabbed herself with scent.',
        chinese2: '她在自己身上擦了点香水。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2892',
        word: 'schedule',
        ciyi: 'vt.安排，计划 n. 时间表；计划表，进度表 ',
        liju1: 'A presidential election was scheduled for last December.',
        chinese1: '一场总统大选计划在去年12月举行。',
        liju2: "'A tight schedule means we can't delay any longer.'",
         chinese2: '一张紧凑的时间表表明我们不能再耽搁。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2893',
        word: 'scheme',
        ciyi: 'n. 计划；组合；体制；配置vt.计划；策划',
        liju1: 'They would first have to work out some scheme for getting the treasure out.',
        chinese1: '他们首先得想出某种计划把珍宝取出来。',
        liju2: 'The color scheme in my bathroom is pale blue and gray.',
        chinese2: '我浴室的色彩配置是淡蓝色和灰色。',
        liju: 'A guilty plan has been schemed.',
        chinese3: '一项罪恶的策划已出台。'
      }
      ,
      {
        id: '2894',
        word: 'scholar',
        ciyi: 'n. 学者；奖学金获得者',
        liju1: 'As a scholar, he is far above me.',
        chinese1: '他作为一名学者，比我高明得多。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2895',
        word: 'scholarship',
        ciyi: 'n. 奖学金；学识，学问',
        liju1: 'He got a scholarship to the Pratt Institute of Art.',
        chinese1: '他得到了一笔普拉特艺术学院的奖学金。',
        liju2: 'Her scholarship in philosophy was quite weak.',
        chinese2: '她的哲学知识非常薄弱。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2896',
        word: 'scissors',
        ciyi: 'n. 剪刀',
        liju1: 'He told me to get some scissors.',
        chinese1: '他叫我去拿几把剪刀。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2897',
        word: 'scope',
        ciyi: 'n. 范围；余地；视野；眼界',
        liju1: "'Mr. Dobson promised to widen the organization's scope of activity.'",
         chinese1: '多布森先生答应扩大该组织的活动范围。',
        liju2: 'I’d like more scope for putting a few new ideals into practice.',
        chinese2: '我希望能有更多机会实现这一新的想法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2898',
        word: 'score',
        ciyi: 'n. 分数，得分；二十 vt.得分',
        liju1: 'Patten scored his second touchdown of the game.',
        chinese1: '帕顿在比赛中第2次持球触地得分。',
        liju2: 'A score of countries may be either producing or planning to obtain chemical weapons.',
        chinese2: '约有二十个国家可能在生产或计划获取化学武器。',
        liju3: 'He scored 100 on the test.',
        chinese3: '他测验得了100分。'
      }
      ,
      {
        id: '2899',
        word: 'scorn ',
        ciyi: 'n. 轻蔑；藐视vt.轻蔑；藐视',
        liju1: 'Researchers greeted the proposal with scorn.',
        chinese1: '研究者们对这个提议报以轻蔑的态度。',
        liju2: 'His bad action was scorned by the public.',
        chinese2: '他的恶劣举动遭到大家的白眼。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2900',
        word: 'scout',
        ciyi: 'n.侦察员；侦察机vi. 侦察；巡视；嘲笑',
        liju1: 'Climbing the mountain fatigued the whole scout troop.',
        chinese1: '登山使整个侦察连疲劳。',
        liju2: 'A team of four was sent to scout for a nuclear test site.',
        chinese2: '一个四人小组被派去寻找核试验基地。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2901',
        word: 'scramble',
        ciyi: 'vt.使混杂；扰乱n.争夺；混乱；爬行，攀登vi.攀登，爬；抢夺',
        liju1: 'I wonder who scrambled the files in my drawer.',
        chinese1: '我想知道是谁搞乱了我抽屉的文件',
        liju2: 'There was a scramble to get into shop on the first day of the bargain sales.',
        chinese2: '甩卖第一天，顾客们争先恐后地涌进商店。',
        liju3: 'It was a long scramble over rocks to the top of the mountain.',
        chinese3: '经过长时间的攀岩才到达山顶。',
		 liju4: 'The kids scrambled up into the car as it started to roll.',
        chinese4: '汽车发动了，孩子们争先恐后地爬进车里。',
        liju5: 'More than three million fans are expected to scramble for tickets.',
        chinese5: '预计会有三百万以上的歌迷抢购门票。'
      }
      ,
      {
        id: '2902',
        word: 'scrap',
        ciyi: 'n. 碎片；残余物vt.废弃；拆毁',
        liju1: 'A crumpled scrap of paper was found in her handbag.',
        chinese1: '在她的手提包里找到了一张弄皱的小纸片。',
        liju2: 'The committee has scrapped the current way of choosing host cities.',
        chinese2: '委员会废除了现行的评选主办城市的方法。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2903',
        word: 'scrape',
        ciyi: 'n. 刮掉；刮擦声；擦痕vt.刮；擦伤；擦过，勉强通过',
        liju1: 'We heard the scrape of heavy furniture being dragged across the floor.',
        chinese1: '我们听到了沉重的家具拖过地板的刮擦声。',
        liju2: 'We noticed a fresh scrape on Tom’s face.',
        chinese2: '我们注意到汤姆的脸上有一处新的擦伤。',
        liju3: 'Recoiling in pain, I’d scrape my back or arms on the scaly tree bark.',
        chinese3: '碰疼时我本能后退，结果又被粗糙的树皮擦伤背或胳膊。',
		 liju4: 'I just scrapped through my exams this term.',
        chinese4: '这学期我勉强通过了考试。'
      },
      {
        id: '2904',
        word: 'scratch',
        ciyi: 'vt.抓；刮；挖出n.抓，抓痕；起跑线',
        liju1: 'The old man lifted his cardigan to scratch his side.',
        chinese1: '那位老人撩起他的开襟毛衣挠了挠身子侧面。',
        liju2: 'Jim touched the purplish scratch on Kate’s neck softly.',
        chinese2: '吉姆轻轻碰了碰凯特脖子上发紫的抓痕。',
        liju3: 'Why don’t we start from scratch and think for a change of our image.',
        chinese3: '我们为什么不从头开始，考虑改变一下我们的形象昵？'
      }
      ,
      {
        id: '2905',
        word: 'screen',
        ciyi: 'n. 屏，幕；屏风vt.筛选；拍摄；掩蔽',
        liju1: 'This screen was made on canvas. ',
        chinese1: '银幕是用帆布做成的。',
        liju2: 'To screen and select the candidates',
        chinese2: '甄别及选拔候选人。',
        liju3: 'The lense of the camera should be screened from direct sunlight.',
        chinese3: '应罩上照相机的镜头，使之不受到阳光的直射。'
      },
      {
        id: '2906',
        word: 'screw',
        ciyi: 'vt.拧；强迫n. 螺旋；螺丝钉',
        liju1: 'Screw down the lid fairly tightly.',
        chinese1: '把盖子拧到很紧。',
        liju2: 'Each bracket is fixed to the wall with just three screws.',
        chinese2: '每个托架只用3颗螺钉固定在墙上。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2907',
        word: 'script',
        ciyi: 'n. 脚本；手迹；书写用的字母',
        liju1: "'Jenny's writing a film script.'",
         chinese1: '珍妮在写一个电影脚本。',
        liju2: "'When you're writing in script, there are four letters of the alphabet that you can't complete in one stroke.'",
        chinese2: '当你用连写体书写时，字母表里有4个字母你不能一笔写完。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2908',
        word: 'scrutiny',
        ciyi: 'n. 详细审查；监视；细看',
        liju1: 'The most serious penalty of all surely demands equal if not greater scrutiny.',
        chinese1: '如果不需要审查，所有最严重的惩罚当然要求一定要公平。',
        liju2: 'His private life came under media scrutiny.',
        chinese2: '他的私生活开始受到媒体的密切关注。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2909',
        word: 'sculpture',
        ciyi: 'n. 雕塑；雕刻；刻蚀；雕塑作品',
        liju1: 'Both studied sculpture.',
        chinese1: '两人都学过雕塑。',
        liju2: 'The Greek gods are the theme of the massive sand sculptures.',
        chinese2: '希腊诸神使这些大型沙滩雕塑品的主题。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2910',
        word: 'seal',
        ciyi: 'n. 密封；印章；海豹；封条；标志vt.密封；盖章',
        liju1: 'The seal on the box broke when it fell from its hiding-place.',
        chinese1: '盒子从隐藏处掉下时上面的封口破了。',
        liju2: 'After careful consideration, the manger affixed his seal to the contract.',
        chinese2: '深思熟虑之后经理在合约上盖了章。',
        liju3: 'They darted spears at the seal. ',
        chinese3: '他们把标茅掷向海豹。',
		 liju4: 'All goods were sealed.',
        chinese4: '所有货物都加盖了检验合格封印。'
      }
      ,
      {
        id: '2911',
        word: 'seam',
        ciyi: 'n. 缝；接缝',
        liju1: 'The skirt ripped along a seam.',
        chinese1: '那条裙子沿一条缝合线裂开了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2912',
        word: 'seaside',
        ciyi: 'n. 海边；海滨',
        liju1: 'I went to spend a few days at the seaside.',
        chinese1: '我去海边呆了几天。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2913',
        word: 'secondary',
        ciyi: 'a. 次要的，二级的；第二的，中级的',
        liju1: 'They argue that human rights considerations are now of only secondary importance.',
        chinese1: '他们争辩说人权考虑现在只是次要的。',
        liju2: 'A free copy of The Lord of the Rings will be sent to every secondary school in the UK.',
        chinese2: '《指环王》的赠阅本将免费发放到英国的每一所中学。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2914',
        word: 'section',
        ciyi: 'n. 截面；部门；地区；章节；部分',
        liju1: 'The doctors are studying the section of the human brain.',
        chinese1: '医生们正在研究入脑的剖面图。',
        liju2: 'After graduation, May worked in an information section.',
        chinese2: '毕业后，梅在一个情报部门工作。',
        liju3: 'The grassland between the two mountain ranges is a fine grazing section.',
        chinese3: '这片位于两条山脉之间的草地是一个极佳的牧场。',
		 liju4: 'I do precisely that in the next section. ',
        chinese4: '我在下一节精确地这一操作。',
        liju5: 'He said it was wrong to single out any section of society for AIDS testing.',
        chinese5: '他说挑出社会任何一部份人做艾滋病检查都是错误的。'
      }
      ,
      {
        id: '2915',
        word: 'sector',
        ciyi: 'n. 部门，部门；防御地段，防区；扇形',
        liju1: 'Take just one sector of our economy agriculture to illustrate what I mean.',
        chinese1: '仅举我们经济的一个部门农业为例来阐明我的意思。',
        liju2: 'There are many guards patrolling in the sector.',
        chinese2: '那个防区内有很多警卫在巡逻。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2916',
        word: 'secure',
        ciyi: 'a.安全的；放心的vt.保护；获得；招致',
         liju1: "'We'll make sure our home is as secure as possible from now on.'",
         chinese1: '我们将从现在起确保我们的家尽可能安全。',
        liju2: 'Indonesia secured its independence from the Dutch in 1949.',
        chinese2: '印度尼西亚于1949年脱离荷兰获得独立。',
        liju3: 'The dam secured the city from the flood.',
        chinese3: '这座大坝保护了该城免受洪水的袭击。'
      }
      ,
      {
        id: '2917',
        word: 'security ',
        ciyi: 'n. 安全；保证',
        liju1: 'Strict security measures are in force in the capital.',
        chinese1: '严格的安全措施在首都实施。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2918',
        word: 'seemingly',
        ciyi: 'ad. 看来似乎；表面上看来',
        liju1: 'A seemingly endless line of trucks waits in vain to load up.',
        chinese1: '看上去没有尽头的一排卡车徒劳地等着装货。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2919',
        word: 'segment',
        ciyi: 'n. 段；节；部分',
        liju1: 'Each segment contains rows from only one table defined in the table space.',
        chinese1: '每段只能包含该表空间中定义的一个表中的行。',
        liju2: 'It drew on every segment of the Egyptian population.',
        chinese2: '它蔓延到了埃及民众的每一个部分。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2920',
        word: 'segregate',
        ciyi: 'vt.使隔离；分开，使分离',
        liju1: 'A large detachment of police was used to segregate the two rival camps of protesters.',
        chinese1: '一大队分遣警察被派来隔离两群敌对的抗议者。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      }
    ]
  }
  return arr
}
