module.exports = {
  mtData: mtData,
  searchmtdata: searchmtdata,
  searchword: searchword,
  searchliju1: searchliju1,
  searchliju2: searchliju2,
  searchliju3: searchliju3,
  searchchinese1: searchchinese1,
  searchchinese2: searchchinese2,
  searchchinese3: searchchinese3,
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
function searchliju3(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].liju3
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
function searchchinese3(id) {
  var result
  for (let i = 0; i < mt_data.list.length; i++) {
    var mt = mt_data.list[i]
    if (mt.id == id) {
      result = mt_data.list[id].chinese3
    }
  }
  return result
}
function mtData() {
  var arr = {
    list: [
      {
        id: '0',
        word: 'abandon   ',
        ciyi: ' n. 狂热；放任 vt. 遗弃；放弃',
        kaodian: '',
        liju1: 'He claimed that his parents had abandoned him.',
        chinese1: '他声称他的父母抛弃了他',
        liju2: 'The authorities have abandoned any attempt to distribute food in an orderly fashion',
        chinese2: '当局中途放弃了任何有序地分发食品的尝试'
      }
      ,
      {
        id: '1',
        word: ' abdomen',
        ciyi: ' n. 腹部；下腹；腹腔',
        kaodian: '',
        liju1: 'He went into the hospital to undergo tests for a pain in his abdomen.',
        chinese1: '他去了医院接受对他的腹部疼痛进行的各项检查。',
        liju2: 'Scans of his chest, abdomen, and pelvis likewise showed nothing.  ',
        chinese2: '扫描他的胸部，腹部和骨盆也没有什么发现。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '2',
        word: ' abide',
        ciyi: ' vt. 坚持，遵守，忍受；vi. 坚持，遵守；忍受  ',
        kaodian: '',
        liju1: "' I can't abide people who can't make up their minds.'",
        chinese1: '我无法容忍下定不了决心的人。',
        liju2: 'Above all, everyone must abide by the law. ',
        chinese2: '首要的是，每个人都必须遵守法律。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '3',
        word: 'ability  ',
        ciyi: 'n. 能力，智力；才能；才干 ',
        kaodian: '',
        liju1: 'Her drama teacher spotted her ability.',
        chinese1: '她的戏剧老师发现了她的才能。',
        liju2: 'In ability she towers over all the others in her class.  ',
        chinese2: '她的能力胜过班上的所有其他同学。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '4',
        word: 'abnormal ',
        ciyi: ' a. 反常的，不规则的；变态的 ',
        kaodian: '',
        liju1: ' That is simply abnormal.',
        chinese1: '那简直是反常的。',
        liju2: 'The machinist pressed his ear to the instrument in order to listen and tell where the abnormal sound came from.  ',
        chinese2: "'机械师把耳朵紧贴在仪器上想听出和找出异常的声音出自何处。",
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '5',
        word: ' aboard',
        ciyi: ' ad. 在飞机上；在船上prep. 在…上 ',
        kaodian: '',
        liju1: 'Everyone was soon aboard the plane.  ',
        chinese1: '大家很快登上了飞机。 ',
        liju2: 'He lifted the fish aboard, careful not to jerk the line over his shoulder.  ',
        chinese2: '他把这条“鱼”提到了船板上，小心不去拉动他肩上的钓丝。 ',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '6',
        word: 'abolish  ',
        ciyi: ' vt. 废除，取消',
        kaodian: '',
        liju1: 'The Emancipation Proclamation abolished slavery in the United States.',
        chinese1: '《解放宣言》在美国废除了黑奴制度。',
        liju2: 'I asked them not to abolish AmeriCorps, as they had threatened to do.  ',
        chinese2: '我要求他们不要取消美国服务队，因为他们曾经威胁过要这么做。',
        liju3: '',
        chinese3: ''

      }
      ,
      {
        id: '7',
        word: 'abound ',
        ciyi: ' vi. 富于；充满',
        kaodian: '',
        liju1: 'The region abounds in coal.',
        chinese1: '这个地区煤矿丰富。',
        liju2: 'The book abounds with misprints.',
        chinese2: '这本书中印刷错误很多。',
        liju3: '',
        chinese3: '',
      }
      ,
      {
        id: '8',
        word: 'abroad  ',
        ciyi: ' ad. 在国外；到海外n. 海外；异国 ',
        kaodian: '',
        liju1: ' She and I forgathered abroad.  ',
        chinese1: '她和我在国外邂逅。',
        liju2: 'He was engaged from abroad.  ',
        chinese2: '他是从国外请来的。',
        liju3: '',
        chinese3: '',
      }
      ,
      {
        id: '9',
        word: 'abrupt ',
        ciyi: ' a.突然的,意外的；唐突的，鲁莽的 ',
        kaodian: '',
        liju1: "' Rosie's idyllic world came to an abrupt end when her parents' marriage broke up.'",
        chinese1: '当她的父母婚姻破裂后，罗茜的田园诗一般的世界骤然结束了。',
        liju2: 'Excuse me for my abrupt question.  ',
        chinese2: '请原谅我这个唐突的问题。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '10',
        word: ' absence ',
        ciyi: ' n. 没有；缺乏；缺席；不注意 ',
        kaodian: '',
        liju1: ' In the absence of actual data no reliance can be placed on such figures.  ',
        chinese1: '在缺乏实际资料的情况下，这样的数据不可靠。',
        liju2: 'His absence incommodes the whole team.  ',
        chinese2: '他的缺席给全队带来不便。',
        liju3: '',
        chinese3: ''

      }
      ,
      {
        id: '11',
        word: ' absent ',
        ciyi: 'a. 缺席的；缺乏的；心不在焉的  ',
        kaodian: '',
        liju1: ' He nodded absently.',
        chinese1: '他心不在焉地点了点头。',
        liju2: 'Why did you absent yourself this afternoon? ',
        chinese2: '你今天下午为什么缺席?',
        liju3: 'Love was absent from his childhood.',
        chinese3: '他童年时就缺少爱。'
      }
      ,
      {
        id: '12',
        word: ' absolute',
        ciyi: 'a. 绝对的；完全的；专制的 ',
        kaodian: '',
        liju1: ' Absolute perfection in a dictionary is rare.  ',
        chinese1: '绝对完美的词典是罕见的。',
        liju2: 'He ruled with absolute power.',
        chinese2: '他实行独裁统治。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '13',
        word: 'absorb ',
        ciyi: ' vt.吸收；吸引；承受 ',
        kaodian: '',
        liju1: 'He was so absorbed in a book that he did not hear the bell.',
        chinese1: '   他如此专心致志地读书以致没听见铃响。',
        liju2: '   The company will absorb all the research costs.',
        chinese2: '  这家公司将承担全部研究经费。 ',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '14',
        word: 'abstract ',
        ciyi: '  n. 摘要；抽象；a. 抽象的vt. 提取；使…抽象化  ',
        kaodian: '',
        liju1: "'Don't speak in such abstract terms.'",
        chinese1: '不要这样抽象地谈问题。',
        liju2: 'They can abstract precious medicines from ordinary substances.  ',
        chinese2: '他们能从普通物质中提取贵重药物。',
        liju3: 'It might also be necessary to supply an abstract of the review of the literature as well.',
        chinese3: '可能也有必要提供这篇文学评论的摘要。'

      }
      ,
      {
        id: '15',
        word: 'absurd  ',
        ciyi: 'a. 荒谬的；可笑的n. 荒诞；荒诞作品 ',
        kaodian: '',
        liju1: ' The proposal borders upon the absurd.  ',
        chinese1: '那项提议几乎是荒唐的。',
        liju2: 'What an absurd idea!  ',
        chinese2: '多么荒唐的念头!',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '16',
        word: 'abundant  ',
        ciyi: ' a. 丰富的；充分的，充裕的  ',
        kaodian: '',
        liju1: 'Our country is abundant in minerals.  ',
        chinese1: '我国矿产非常丰富。',
        liju2: 'Our country has a vast territory and abundant resources.  ',
        chinese2: '我国土地辽阔， 资源丰富。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '17',
        word: ' abuse',
        ciyi: ' n. 滥用；虐待；辱骂 vt. 滥用；虐待；辱骂 ',
        kaodian: '',
        liju1: 'He showed how the rich and powerful can abuse their position.',
        chinese1: '他揭露了有钱有势的人会如何滥用他们的地位。',
        liju2: 'He alleged that he was verbally abused by other soldiers.',
        chinese2: '他声称他被其他士兵们口头侮辱了。',
        liju3: 'Hailstones of abuse were pelting him.  ',
        chinese3: '阵阵辱骂冰雹般地向他袭来。'
      }
      ,
      {
        id: '18',
        word: 'academic ',
        ciyi: ' a. 学术的；学院的n. 大学教师；学者',
        kaodian: '',
        liju1: 'This is not merely an academic question. ',
        chinese1: '这不仅仅是一个学术问题。',
        liju2: 'This is the story of how an academic found herself imprisoned in Tripoli.  ',
        chinese2: '这是一个故事，一位学者如何在的黎波里被监禁的故事。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '19',
        word: 'academy ',
        ciyi: ' n. 学院；研究院；专科院校 ',
        kaodian: '',
        liju1: 'The lecture was given under the auspices of the Academy of Sciences. ',
        chinese1: '这次报告会是由科学院主办的。',
        liju2: 'The findings appear in the Proceedings of the National Academy of Sciences. ',
        chinese2: '这项研究的成果会在国家科学学会汇刊上发表。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '20',
        word: 'accelerate ',
        ciyi: ' vt. 加速；促进',
        kaodian: '',
        liju1: ' How do you plan to accelerate the development of these technologies?  ',
        chinese1: '目前您打算如何加快这方面的技术研发？',
        liju2: ' The car suddenly accelerated.',
        chinese2: '那辆汽车突然加速。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '21',
        word: 'accent ',
        ciyi: ' n. 口音；重音； vt.强调；重读 ',
        kaodian: '',
        liju1: ' He has a slight Shandong accent.   ',
        chinese1: '他略微有些山东口音。',
        liju2: ' In the first word, the accent falls on the first syllable.',
        chinese2: '在第一个单词里，重音落在第一个音节上。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '22',
        word: 'acceptance',
        ciyi: '  n. 接纳；赞同；承认',
        kaodian: '',
        liju1: 'The proposal found general acceptance.   ',
        chinese1: '这项建议被普遍接受。',
        liju2: 'I got my acceptance to Tsinghua University. ',
        chinese2: '我被清华大学录取了。',
        liju3: 'So I do not write for money or for myself, but for social acceptance.  ',
        chinese3: '所以我不是为钱而写或为我自己而写，而是为了社会对我的接纳。'
      },
      {
        id: '23',
        word: 'access ',
        ciyi: 'n. 进入；接近（或进入）的方法；通道，入口 ',
        kaodian: '',
        liju1: '  The facilities have been adapted to give access to wheelchair users.',
        chinese1: '这些设施已经过改装，使轮椅使用者们能够进入。',
        liju2: 'He was not allowed access to a lawyer. ',
        chinese2: '他未被允许接触律师。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '24',
        word: 'accessory',
        ciyi: ' n. 配件；从犯a. 附属的 ',
        kaodian: '',
        liju1: ' And the only accessory inside is a wall charger.  ',
        chinese1: '盒子内唯一的附件就是一个充电器。',
        liju2: 'This university has several accessory factories. ',
        chinese2: '这所大学有几家校办工厂。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '25',
        word: 'acclaim ',
        ciyi: '  vt. 称赞n. 欢呼，喝彩；称赞',
        kaodian: '',
        liju1: 'They acclaimed him as the best player of the year. ',
        chinese1: '他们称赞他为本年度最佳运动员。',
        liju2: ' Prestige and acclaim are hard currency in the film business, in many ways more valuable than money.  ',
        chinese2: '在电影行业，吸引力与喝彩在很多方面是比金钱更有价值的硬货币。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '26',
        word: 'accommodate',
        ciyi: ' vt. 留宿，收容；调和，使适应；供应  ',
        kaodian: '',
        liju1: ' She tried to accommodate her way of life to his.  ',
        chinese1: '她试图使自己的生活方式与他的生活方式相适应',
        liju2: ' The school was not big enough to accommodate all the children.',
        chinese2: '学校没有足够的地方容纳所有的学生。',
        liju3: 'She will accommodate me with the use of her old car.',
        chinese3: '她会把她的旧汽车供我使用的。'
      },
      {
        id: '27',
        word: 'accommodation ',
        ciyi: '  n. 住宿[pl.]膳宿供应 ',
        kaodian: '',
        liju1: 'Have you found accommodation? ',
        chinese1: '找到住处没有?',
        liju2: 'These accommodations are a far cry from what Tom has been used to. ',
        chinese2: '这些膳宿供应与汤姆过去所习惯的相差甚远。 ',
        liju3: '',
        chinese3: ''
      },
      {
        id: '28',
        word: 'accompany ',
        ciyi: 'vt. 陪伴，伴随；为…伴奏  ',
        kaodian: '',
        liju1: ' Please accompany me on my walk.   ',
        chinese1: '请陪我散步。',
        liju2: 'Lightning usually accompanies thunder. ',
        chinese2: '闪电通常伴有雷声。',
        liju3: "'On Meredith's new recording, Eddie Higgins accompanies her on all but one song.'",
        chinese3: '在梅瑞迪斯的新唱片中，艾迪·希金斯为她伴奏了除一首歌以外的所有歌曲。'
      },
      {
        id: '29',
        word: 'accomplish',
        ciyi: 'vt. 完成；实现；达到  ',
        kaodian: '',
        liju1: ' It has never been her boast that she alone could accomplish the work.   ',
        chinese1: '她从没有夸口说只有她能完成那项工作。',
        liju2: ' To accomplish his own end, he placed collective interests in the back of his mind. ',
        chinese2: '为了达到个人目的，他把集体利益置之脑后。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '30',
        word: 'accord',
        ciyi: ' n. 符合；一致；协议，条款 vt. 授予，赠与 vi. 相符合 ',
        kaodian: '',
        liju1: 'His behavior does not accord with his principles.   ',
        chinese1: '他的行为与他的原则不相符合。',
        liju2: 'On his return home, the government accorded him the rank of Colonel. ',
        chinese2: '在他回国时，该国政府授予他上校军衔。',
        liju3: 'The two countries signed a peace accord last week.',
        chinese3: '两国上周签署了一项和平协议。'
      },
      {
        id: '31',
        word: 'accordance',
        ciyi: ' n. 一致；和谐 ',
        kaodian: '',
        liju1: 'We should make decisions in accordance with specific conditions.   ',
        chinese1: '我们应当根据具体情况做出决定。',
        liju2: 'The rights of children are protected in accordance with the law. ',
        chinese2: '儿童的权利依法受到保护。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '32',
        word: 'accordingly',
        ciyi: '  ad. 因此，相应地，照着（办） ',
        kaodian: '',
        liju1: 'It is a difficult job and they should be paid accordingly. ',
        chinese1: '它是一项艰巨的工作，他们应该相应地获得报酬。',
        liju2: ' We have a different background, a different history. Accordingly, we have the right to different futures.',
        chinese2: '我们拥有不同的背景、不同的历史。因此，我们有权获得不一样的前途。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '33',
        word: 'account ',
        ciyi: ' n. 账户，账目，叙述，说明vi. 解释；导致；(在数量、比例上) 占  ',
        kaodian: '',
        liju1: 'These figures disagree with our account. ',
        chinese1: '这些数字与我们的账单不符。',
        liju2: 'You must account to father what you have done.  ',
        chinese2: '你必须把你的所作所为对父亲解释清楚。',
        liju3: 'His reckless driving accounted for the accident.',
        chinese3: '他开车鲁莽，引起了这场事故。'
      },
      {
        id: '34',
        word: 'accountant ',
        ciyi: ' n. 会计师；会计人员 ',
        kaodian: '',
        liju1: ' The boss dropped an accountant from the payroll.   ',
        chinese1: '老板把一名会计师从在职人员名单中除了名。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '35',
        word: 'accumulate ',
        ciyi: 'vt.累积,积蓄；堆积',
        kaodian: '',
        liju1: '  I just want to accumulate some useful experience there. ',
        chinese1: '我只想在那里积累一些有用的经验。',
        liju2: ' Lead can accumulate in the body until toxic levels are reached.',
        chinese2: '铅可以在体内积聚直至到达有毒的程度。',
        liju3: 'He accumulated great wealth by hard work.',
        chinese3: '他靠勤劳积攒了大量财富。'

      },
      {
        id: '36',
        word: 'accuracy ',
        ciyi: ' n. 精确度，准确 ',
        kaodian: '',
        liju1: '  Convinced of the accuracy of the data, they stuck to their opinion.  ',
        chinese1: '由于深信数据准确无误，他们坚持自己的意见。',
        liju2: ' Every care has been taken to ensure the accuracy of all information given in this leaflet.',
        chinese2: '已经采取了一切措施来保证这张传单上所有信息的准确。',
        liju3: '',
        chinese3: ''

      },
      {
        id: '37',
        word: 'accurate',
        ciyi: 'a. 精确的，准确的 ',
        kaodian: '',
        liju1: ' I see it as accurate.   ',
        chinese1: '我把它看作是精确的。',
        liju2: 'Laboratory work needs not only accurate measurements but also correct calculation.   ',
        chinese2: '实验工作不但需要准确的测量，而且需要准确的计算。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '38',
        word: 'accuse',
        ciyi: ' vt. 控告，指控；谴责  ',
        kaodian: '',
        liju1: 'We accused him of immortal conduct toward her. ',
        chinese1: '我们指责他对她的不道德行为。',
        liju2: 'He was accused of murder. ',
        chinese2: '他被控犯有谋杀罪。',
        liju3: '',
        chinese3: ''

      },
      {
        id: '39',
        word: 'accustom ',
        ciyi: 'vt. 使习惯于 ',
        kaodian: '',
        liju1: 'You must accustom yourself to getting up early.   ',
        chinese1: '你必须使自己习惯于早起。',
        liju2: 'She tried to accustom herself to the tight bandages. ',
        chinese2: '她尝试着使自己习惯那些紧绷的绷带。',
        liju3: '',
        chinese3: ''

      },
      {
        id: '40',
        word: 'acid  ',
        ciyi: '  n. 酸；a. 酸的；讽刺的；刻薄的',
        kaodian: '',
        liju1: '  Battery acid had eroded the engine.    ',
        chinese1: '电池酸腐蚀了发动机。',
        liju2: ' Roses will not root in such acid soil.  ',
        chinese2: '玫瑰在这种酸性土壤中不会生根。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '41',
        word: ' acknowledge',
        ciyi: 'vt. 承认；答谢；报偿 ',
        kaodian: '',
        liju1: ' Anyhow Tony intended to acknowledge him as his son.   ',
        chinese1: '不管怎样托尼打算承认他为自己的儿子。',
        liju2: ' knowledged thJack ace gift with a pleasant letter.',
        chinese2: '杰克附一封友好的信对所赠礼物表示感谢。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '42',
        word: ' acquaint',
        ciyi: 'vt. 使了解；使认识 ',
        kaodian: '',
        liju1: "'I'll acquaint you with my daughter when she arrives.'",
        chinese1: '我女儿来后我将介绍你们认识。',
        liju2: ' You must acquaint with your new duties.',
        chinese2: '你必须熟悉你的新职责。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '43',
        word: 'acquaintance ',
        ciyi: ' n. 熟人；相识 ',
        kaodian: '',
        liju1: '  Acquaintance has developed into friendship.   ',
        chinese1: '相识已发展成为友谊。',
        liju2: 'We are the casual acquaintance of a long railway journey.   ',
        chinese2: '我们是在火车长途旅行中偶然结识的朋友。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '44',
        word: 'acquire  ',
        ciyi: 'vt. 获得；取得；学到 ',
        kaodian: '',
        liju1: ' The robot can acquire the object.     ',
        chinese1: '机器人能捕获该物体。',
        liju2: "' I've never acquired a taste for wine.'",
        chinese2: '我从未养成对葡萄酒的爱好。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '45',
        word: 'acquisition  ',
        ciyi: ' n. 获得物，获得 ',
        kaodian: '',
        liju1: ' In fact you could consider the nurturing of this awareness as fundamental to skills acquisition.   ',
        chinese1: '事实上你可以把这种对认知的培养作为获得技能的基本法则。',
        liju2: ' We investigate the legal status of every potential acquisition.  ',
        chinese2: '我们调查每项可能收购的作品的合法性。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '46',
        word: 'acrobat',
        ciyi: ' n. 杂技演员，特技演员 ',
        kaodian: '',
        liju1: ' The acrobat balanced himself on the high rope.    ',
        chinese1: '杂技演员在高绳上保持平衡。',
        liju2: "' I can't help but be astonished by that acrobat.'",
        chinese2: '我不能不为那杂技演员（的表演）而深为惊讶。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '47',
        word: 'action ',
        ciyi: ' n. 行动，行为；活动；动作；作用',
        kaodian: '',
        liju1: '  We carefully watched every detail of his action.  ',
        chinese1: '我们仔细观察了他动作的每个细节。',
        liju2: 'As always, Peter had a reason for his action. ',
        chinese2: '如往常一样，彼得对他的行为总有理由。',
        liju3: 'The action of salt on ice causes it to melt.',
        chinese3: '盐作用于冰能使其融化。'
      },
      {

        id: '48',
        word: 'activate ',
        ciyi: ' vt. 启动,激活；使活动   ',
        kaodian: '',
        liju1: '  The recording device has activated.  ',
        chinese1: '录音装置已开动起来。',
        liju2: 'Video cameras with night vision can be activated by movement. ',
        chinese2: '有夜视功能的摄像机能被物体的活动激活。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '49',
        word: ' activity',
        ciyi: ' n. 活动；活性；活力',
        kaodian: '',
        liju1: ' Children are supposed to get 60 minutes of physical activity every day.  ',
        chinese1: '儿童应该每天获得60分钟的体育活动。',
        liju2: ' The streets were noisy and full of activity.',
        chinese2: '街上熙熙攘攘 ，充满活力。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '50',
        word: 'acute  ',
        ciyi: 'a. 急性的；敏锐的,尖锐的；激烈的',
        kaodian: '',
        liju1: ' Acute dysentery wracked and sapped life from his body.    ',
        chinese1: '急性痢疾严重伤害了他的肌体。',
        liju2: ' A bad tooth can cause acute pain.  ',
        chinese2: '一颗蛀牙可以引起激烈的疼痛。',
        liju3: 'When she lost her sight, her other senses grew more acute.',
        chinese3: '失明以后，她的其他感官变得更加敏锐了。'
      },
      {
        id: '51',
        word: 'adapt ',
        ciyi: 'vt. 使适应；改编，改写',
        kaodian: '',
        liju1: ' The author is going to adapt his stories for television.   ',
        chinese1: '这位作家打算将他的小说改编成电视片。',
        liju2: 'When you go to a new country, you must adapt yourself to new manners and customs.   ',
        chinese2: '当你新到一个国家时，你必须使自己适应新的风俗习惯。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '52',
        word: 'addict  ',
        ciyi: 'n. 有瘾的人；入迷的人vt. 使上瘾,使入迷 ',
        kaodian: '',
        liju1: '   The addict prowled about for a place to drug up.   ',
        chinese1: '瘾君子到处潜行找个地方吸毒。 ',
        liju2: 'The children are addicted to video games. ',
        chinese2: '孩子们醉心于电子游戏。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '53',
        word: 'addition ',
        ciyi: ' n. 添加； 加法；增加物',
        kaodian: '',
        liju1: ' The children will learn addition next week.  ',
        chinese1: '孩子们下星期学习加法。 ',
        liju2: 'This is a fine book; a worthy addition to the series. ',
        chinese2: '这是一本好书—是对这套丛书有价值的增补。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '54',
        word: 'additional',
        ciyi: '  n. 添加； 加法；增加物',
        kaodian: '',
        liju1: '  The children will learn addition next week.  ',
        chinese1: '孩子们下星期学习加法。 ',
        liju2: 'This is a fine book; a worthy addition to the series. ',
        chinese2: '这是一本好书—是对这套丛书有价值的增补。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '55',
        word: 'additionai ',
        ciyi: 'a. 附加的，额外的 ',
        kaodian: '',
        liju1: ' The government is expected to lay an additional tax on us by the end of the year.    ',
        chinese1: '政府年底估计要向我们征收一项附加税。',
        liju2: 'When the general found there were no additional seats on the plane, he bumped a second lieutenant.  ',
        chinese2: '上将发现飞机上没有额外的座位时，他挤掉了一名少尉的座位。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '56',
        word: 'adequate  ',
        ciyi: ' a. 充足的；足够的，胜任的 ',
        kaodian: '',
        liju1: '  I have no adequate preparation.    ',
        chinese1: '我没有充分的准备。',
        liju2: 'One in four people worldwide are without adequate homes. ',
        chinese2: '世界上1/4的人没有足够的住房。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '57',
        word: 'adhere ',
        ciyi: '  vi. 坚持；黏附，胶着；追随',
        kaodian: '',
        liju1: '  We adhered to our original plan of swimming in spite of the bad weather. ',
        chinese1: '尽管天气恶劣，我们仍然坚持按预定计划游泳。',
        liju2: 'The mud adhered to her shoes. ',
        chinese2: '泥粘附在她的鞋上。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '58',
        word: 'adjacent',
        ciyi: ' a. 邻近的，毗连的',
        kaodian: '',
        liju1: ' The house adjacent to ours is under repairs.    ',
        chinese1: '与我家相邻的房子正在修缮。',
        liju2: 'He sat in an adjacent room and waited. ',
        chinese2: '他坐在一间相邻的房间里等。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '59',
        word: 'adjoin ',
        ciyi: ' vi. 毗连，邻接vt. 毗连，邻接 ',
        kaodian: '',
        liju1: '  The garage adjoins the house. ',
        chinese1: '车库与房子毗连。',
        liju2: ' If the enclosing sides adjoin each other, the area should be properly vented.  ',
        chinese2: '如果封闭的侧面彼此邻接，该区域要有适当的通风。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '60',
        word: 'adjust  ',
        ciyi: ' vt.调节，调整；校准vi. 调整，适应',
        kaodian: '',
        liju1: '  We must constantly adjust the amount of money in circulation.    ',
        chinese1: '我们必须对货币的流通不断进行调节。',
        liju2: 'We adjusted our watch to local time. ',
        chinese2: '我们按照当地时间把手表校准。',
        liju3: "'It's difficult to adjust one's habits to someone else.'",
        chinese3: '很难改变一个人的习惯去适应另一个人的习惯。'
      },
      {
        id: '61',
        word: ' administer',
        ciyi: 'vt.管理，料理…的事务；执行；给予,投（药） ',
        kaodian: '',
        liju1: '  They had the right to administer their own internal affairs.    ',
        chinese1: '他们有权管辖他们自己的内部事务。',
        liju2: ' The courts administer the laws.',
        chinese2: '法院执行法律。',
        liju3: 'The nurse administered the medicine to the patient.',
        chinese3: '护士给病人服药。'
      },
      {
        id: '62',
        word: 'administration  ',
        ciyi: ' n. 管理，经营；行政机构，政府  ',
        kaodian: '',
        liju1: '  The enterprise has been put under local administration.   ',
        chinese1: '这个企业已划归地方管理。',
        liju2: ' The teachers are responsible to the school administration.  ',
        chinese2: '教师向学校行政负责。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '63',
        word: 'admission ',
        ciyi: ' n. 承认；入场费；进入许可；接纳，录用 ',
        kaodian: '',
        liju1: 'He wept for joy when he received the admission notice.     ',
        chinese1: '接到录取通知书的时候他高兴地落下了眼泪。',
        liju2: ' Students apply for admission to a particular college. ',
        chinese2: ' 学生们申请某学院的入学许可。',
        liju3: ' The admission price is $8 for adults.',
        chinese3: ' 入场费成人是$8。'
      },
      {
        id: '64',
        word: 'adolescent ',
        ciyi: '  a. 青春期的；未成熟的n. 青少年',
        kaodian: '',
        liju1: 'Young adolescents are happiest with small groups of close friends.   ',
        chinese1: '年轻的青春期少年们和一小圈亲近的朋友在一起时最高兴。',
        liju2: 'It is important that an adolescent boy should have an adult in whom he can confide. ',
        chinese2: '一个青春期男孩应该有一个他能倾吐心声的成年人，这是很重要的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '65',
        word: ' adopt',
        ciyi: ' vt. 采取,采纳；通过；收养 ',
        kaodian: '',
        liju1: '   The family adopted the orphan as their own. ',
        chinese1: '这家人收养了那个孤儿，把他视同己出。',
        liju2: ' The committee ultimately adopted his suggestions.',
        chinese2: '委员会最终采纳了他的建议。',
        liju3: 'The House adopted the report.',
        chinese3: '议院投票通过了该报告。'
      },
      {
        id: '66',
        word: 'adore ',
        ciyi: ' vt. 崇拜；敬慕；爱慕；喜爱',
        kaodian: '',
        liju1: '  I simply adore the way your hair is done!    ',
        chinese1: '我就喜爱你的发型!',
        liju2: 'Her husband absolutely adored her. ',
        chinese2: '她丈夫很爱慕她。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '67',
        word: 'adult  ',
        ciyi: '  a. 成年的；成熟的n. 成年人',
        kaodian: '',
        liju1: '  He has developed from a child into an adult.   ',
        chinese1: '他已长大成人。',
        liju2: "'I've lived most of my adult life in Arizona.'",
        chinese2: '我已在亚利桑那州度过了我大部分的成年生活。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '68',
        word: 'advanced ',
        ciyi: '  a. 先进的；高级的；前进的v. 前进；增加',
        kaodian: '',
        liju1: ' Agricultural productivity remained low by comparison with advanced countries like the United States.   ',
        chinese1: '与美国等发达国家相比，农业生产率仍很低。',
        liju2: ' A former loafter, he is now an advanced worker.  ',
        chinese2: '他这个昔日浪子，今日成了先进工作者。',
        liju3: 'We advanced towards the castle.  ',
        chinese3: '我们朝城堡前进。'
      },
      {
        id: '69',
        word: 'advantage ',
        ciyi: ' n. 优点，有利条件；利益；vt.有利于；使处于优势 ',
        kaodian: '',
        liju1: ' The Chinese team enjoyed the height advantage.    ',
        chinese1: '中国队占有身高优势。',
        liju2: "'A commander mustn't get too anxious for the sake of some partial advantage.'",
        chinese2: '一个指挥员不要因为局部利益操之过急。',
        liju3: 'Your advice advantaged us much.',
        chinese3: '你的建议让我们受益匪浅。'
      },
      {
        id: '70',
        word: ' advent ',
        ciyi: ' n. 到来；出现  ',
        kaodian: '',
        liju1: '  The advent of the computer has brought this sort of task within the bounds of possibility. ',
        chinese1: '电脑的出现使这种任务的完成成为可能。',
        liju2: ' With the advent of a new semester, I’m full of ambitions. ',
        chinese2: '随着新学期的到来，我雄心勃勃。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '71',
        word: 'adverse ',
        ciyi: ' a. 不利的，有害的；相反的  ',
        kaodian: '',
        liju1: "' My sister's taste in dresses is adverse to my own.'",
        chinese1: '我妹妹的服饰审美观完全与我相反。',
        liju2: 'He ignored all kinds of adverse comments about him.   ',
        chinese2: '他不理睬各种各样对他不利的评论。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '72',
        word: 'advertise ',
        ciyi: ' vt. 通知；为…做广告 ',
        kaodian: '',
        liju1: '  The company advertised goods for sale.  ',
        chinese1: '这家公司为推销产品而做广告。',
        liju2: 'I advertised him of my intention. ',
        chinese2: '我把我的打算告知他。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '73',
        word: ' advisable',
        ciyi: ' a. 明智的，可取的 ',
        kaodian: '',
        liju1: ' I deem it advisable to buy property now.   ',
        chinese1: '我认为现在购置房地产是明智的。',
        liju2: 'Because of the popularity of the region, it is advisable to book hotels or camp sites in advance. ',
        chinese2: '鉴于该地区的受欢迎度，事先预订旅馆或露营地是可取的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '74',
        word: 'advocate',
        ciyi: 'vt. 提倡，鼓吹 n. 提倡者；支持者，鼓吹者 ',
        kaodian: '',
        liju1: '   He was a strong advocate of free market policies and a multi-party system.',
        chinese1: '他是自由市场政策以及多党制的坚定倡导者。',
        liju2: 'Moreover, we should advocate a more frugal lifestyle so as to reduce the growing scale of waste pollution.   ',
        chinese2: '此外，我们应该提倡一种更加节俭的生活方式，以减小垃圾污染的增长规模。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '75',
        word: 'aerial  ',
        ciyi: '  a. 空中的，航空的n. 天线',
        kaodian: '',
        liju1: ' The birds perched upon the television aerial.   ',
        chinese1: '那些鸟栖在电视天线上.',
        liju2: 'Patterns that are invisible on the ground can be the most striking part of an aerial photograph. ',
        chinese2: '在地面上看不见的图案可能是空中照片中最为醒目的部分。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '76',
        word: 'aesthetic  ',
        ciyi: ' a. 美学的，艺术的；审美的  ',
        kaodian: '',
        liju1: ' Frankly speaking, your artwork has no aesthetic value.   ',
        chinese1: '坦白地说，你的作品没有艺术价值。 ',
        liju2: ' He finds beauty all around him, and his aesthetic is like no other.  ',
        chinese2: '他能从周围的生活中发现美，他的审美观独一无二。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '77',
        word: ' affect',
        ciyi: ' vt.影响；感动，感染 ',
        kaodian: '',
        liju1: '   Staying away so long from office will affect promotion.   ',
        chinese1: '长期离职会影响晋级。',
        liju2: ' The music affected her deeply.',
        chinese2: '音乐深深打动了她。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '78',
        word: 'affection ',
        ciyi: ' n. 爱，喜爱，感情；影响  ',
        kaodian: '',
        liju1: '  She thought of him with affection.  ',
        chinese1: '她怀着喜爱想起了他。',
        liju2: 'The dog has transferred its affection to its new master.   ',
        chinese2: '那狗已把它的感情转移到新主人身上。',
        liju3: 'The economy of this country is under the affection of inflation.',
        chinese3: '该国经济受到通货膨胀的影响。'
      },
      {
        id: '79',
        word: ' affiliate',
        ciyi: 'n. 隶属机构,分公司vt. 使附属(隶属)于；使紧密联系 ',
        kaodian: '',
        liju1: '   The research centre is affiliated with the university. ',
        chinese1: '该研究中心隶属于该大学。',
        liju2: 'The World Chess Federation has affiliates in around 120 countries. ',
        chinese2: '世界象棋联盟在大约一百二十个国家内设有分支机构。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '80',
        word: 'affirm  ',
        ciyi: ' vt.肯定；断言，证实，宣誓说实话 ',
        kaodian: '',
        liju1: '  The appellate court affirmed the judgments of the lower court. ',
        chinese1: '受理上诉的法院维持下级法院的判决。',
        liju2: ' Everything I had accomplished seemed to affirm that opinion.',
        chinese2: '我所做成的每件事似乎都证实了那个观点。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '81',
        word: 'affluent ',
        ciyi: ' a. 富裕的；丰富的 ',
        kaodian: '',
        liju1: '  But most people in the world are not affluent, and their food budgets are limited.   ',
        chinese1: '而事实是，世界上大多数人并不富裕，他们的食物消费还很拮据。',
        liju2: ' Cigarette smoking used to be more common among affluent people.',
        chinese2: '吸烟过去在富人中更为普遍。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '82',
        word: 'afterward',
        ciyi: '  ad. 以后，后来',
        kaodian: '',
        liju1: '  Shortly afterward, police arrested four suspects. ',
        chinese1: '之后不久，警方逮捕了４名嫌疑犯。 ',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '83',
        word: ' agency ',
        ciyi: 'n. 代理，代理处，机构，经销处 ',
        kaodian: '',
        liju1: ' We had to hire maids through an agency. ',
        chinese1: '我们得通过代理公司雇用女佣。',
        liju2: ' The relief agency distributed food among the poor.  ',
        chinese2: '救援机构在穷人中分发食物。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '84',
        word: 'agenda  ',
        ciyi: ' n. 议事日程',
        kaodian: '',
        liju1: '  This is sure to be an item on the agenda next week. ',
        chinese1: '这必将成为下周议事日程上的一项议题。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '85',
        word: ' agent',
        ciyi: 'n. 代理人，代理商；vt.由…作中介；由…代理 ',
        kaodian: '',
        liju1: '  Who will agent the deal?   ',
        chinese1: '那笔生意将由谁来代理?',
        liju2: 'They are trawling London for an agent.   ',
        chinese2: '他们正在伦敦搜罗一个代理人。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '86',
        word: 'aggravate ',
        ciyi: 'vt.加重；使恶化；激怒 ',
        kaodian: '',
        liju1: '  The bad weather aggravated his illness. ',
        chinese1: '坏天气加重了他的病情。',
        liju2: 'Her questions aggravate him.   ',
        chinese2: '她的问题激怒了他。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '87',
        word: 'aggressive  ',
        ciyi: '  a. 侵略性的；好斗的；有进取心的；强有力的',
        kaodian: '',
        liju1: '   The female of the species is very aggressive.  ',
        chinese1: '这个物种中雌性是非常好斗的。',
        liju2: ' He assumed the style of an aggressive go-getter.  ',
        chinese2: '他具有一个积极进取的、有冲劲和进取心的人的风度',
        liju3: '',
        chinese3: ''
      },
      {
        id: '88',
        word: 'agitate  ',
        ciyi: ' vt.搅动；使…激动，使不安 ',
        kaodian: '',
        liju1: '  The washing machine agitates the clothes.  ',
        chinese1: '洗衣机搅动衣服。',
        liju2: 'The crowd was agitated by his speech. ',
        chinese2: '人群被他的演说激动起来。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '89',
        word: 'agony  ',
        ciyi: ' n. 苦恼；极大的痛苦 ',
        kaodian: '',
        liju1: '  The old woman expired in agony.   ',
        chinese1: '老妇在极度痛苦中断气。',
        liju2: 'Mary was in an agony of deciding to marry or not. ',
        chinese2: '玛丽为结不结婚的事而苦恼。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '90',
        word: 'agreeable ',
        ciyi: 'a. 令人愉快的；易相处的；同意的 ',
        kaodian: '',
        liju1: ' To be idle sometimes is agreeable, but to be idle all the time might become monotonous.    ',
        chinese1: '一段时间空闲是令人愉快的，整日无所事事可能就单调乏味了。',
        liju2: 'I regard them as my most agreeable companion.   ',
        chinese2: '我把它们看作是我最称心如意的伴侣。',
        liju3: 'The proposal was not universally agreeable.',
        chinese3: '该提议未得到普遍认可。'
      },
      {
        id: '91',
        word: ' aid ',
        ciyi: 'n. 援助；帮助；助手；辅助物(设备) vt. 援助；帮助   ',
        kaodian: '',
        liju1: '    He was forced to turn for aid to his former enemy.  ',
        chinese1: '他被迫向他以前的敌人寻求帮助。',
        liju2: ' The book is an invaluable aid to teachers of literature.  ',
        chinese2: '这本书对文学教师是一个非常有用的辅助工具。',
        liju3: 'We will aid their struggle against violent repression.  ',
        chinese3: '我们将帮助他们反抗残暴的压迫。'
      },
      {
        id: '92',
        word: 'aircraft ',
        ciyi: ' n. 飞机，航空器 ',
        kaodian: '',
        liju1: '  Aircraft bombarded the enemy warship.     ',
        chinese1: '飞机轰炸了敌军舰。',
        liju2: ' All aircraft at London Airport were grounded by fog yesterday.   ',
        chinese2: '昨天由于大雾伦敦机场所有飞机停飞。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '93',
        word: 'airline  ',
        ciyi: 'n. 航空公司；航线  ',
        kaodian: '',
        liju1: '  Right now we only have miles with one airline.      ',
        chinese1: '现在我们只是有一个航空公司的里程。',
        liju2: '  ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '94',
        word: 'aisle  ',
        ciyi: 'n. 通道，走道   ',
        kaodian: '',
        liju1: '   I think my seat is near the aisle.    ',
        chinese1: '我想我的座位是靠近过道的。',
        liju2: '  We kept walking and one of them came towards us, stopping smoothly at the end of aisle.  ',
        chinese2: '我们继续向前参观，一个机器人向我们走来，在过道的一端平稳的停下来。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '95',
        word: 'alarm ',
        ciyi: ' n. 闹钟；警报，惊慌vt. 向…报警，警告；使惊恐 ',
        kaodian: '',
        liju1: '   The air-raid alarm went on drilling away from the gate.  ',
        chinese1: '从大门不停地传来刺耳的空袭警报。',
        liju2: ' The news was greeted with alarm by senators.',
        chinese2: '参议员们听到这个消息后很惊恐。',
        liju3: 'We could not see what had alarmed him.',
        chinese3: '我们不明白是什么吓着他了。'
      },
      {
        id: '96',
        word: 'album  ',
        ciyi: ' n. 相簿；唱片集；集邮簿 ',
        kaodian: '',
        liju1: '  He stuck her photos in the album.  ',
        chinese1: '他把她的相片全都贴在了相册里。',
        liju2: ' Oasis releases their new album on July 1.',
        chinese2: '绿洲乐队将于7月1日发行他们的新专辑。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '97',
        word: 'alcohol  ',
        ciyi: ' n. 酒精，乙醇  ',
        kaodian: '',
        liju1: '  He was stupefied with alcohol. ',
        chinese1: '他喝酒喝得神志不清了。',
        liju2: 'Bacteria will not breed in alcohol.   ',
        chinese2: '细菌在酒精里不会繁殖。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '98',
        word: 'alert ',
        ciyi: ' vt. 警告；使意识到a. 警惕的，机灵的 n. 警戒，警惕   ',
        kaodian: '',
        liju1: ' He wanted to alert people to the activities of the group. ',
        chinese1: '他想警告人们注意这个组织的行动。',
        liju2: 'They were quiet during the alert.   ',
        chinese2: '警戒期间他们保持安静。',
        liju3: 'We all have to stay alert.',
        chinese3: '我们都必须保持警觉。'
      },
      {
        id: '99',
        word: 'alien  ',
        ciyi: 'a. 外国的；相异的，不相容的n. 外侨；外星人  ',
        kaodian: '',
        liju1: ' Print your name and Alien Registration number on the back of each photo.  ',
        chinese1: ' 在每张照片的背面写上你的名字和外国人注册号。 ',
        liju2: ' He said they were opposed to what he described as the presence of alien forces in the region.',
        chinese2: '所描述的在该地区有外国军队的存在。',
        liju3: 'I bought an album alien from Mary’s.',
        chinese3: '我买了一本和玛丽那本不同的相册。 '
      },
      {
        id: '100',
        word: ' alienate',
        ciyi: ' a. 相同的,相像的ad. 类似于， 同样地 ',
        kaodian: '',
        liju1: '  The twin sisters are so much alike that it is almost impossible to know one from the other.   ',
        chinese1: '这两个孪生姐妹长相极为相像，几乎无法把她们俩区分开。',
        liju2: 'The headmaster is respected by teachers and students alike. ',
        chinese2: '那位校长受到师生的一致尊敬。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '101',
        word: 'allege ',
        ciyi: 'vt.宣称，断言  ',
        kaodian: '',
        liju1: '  The court papers allege she may be a voyeur.   ',
        chinese1: '法庭文件宣称她可能是一个偷窥狂。',
        liju2: ' It has been alleged that Jack stole the money.',
        chinese2: '有人声称钱是杰克偷的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '102',
        word: 'allegiance  ',
        ciyi: ' n.拥护；忠诚  ',
        kaodian: '',
        liju1: ' His attendance at the rally declared his political allegiance. ',
        chinese1: '他们出席大会显示了他政治上的忠诚。',
        liju2: 'My allegiance to Kendall and his company ran deep. ',
        chinese2: '我对肯达尔和他的公司的拥戴持久深厚。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '103',
        word: 'alleviate  ',
        ciyi: '  vt. 减轻，缓和，缓解',
        kaodian: '',
        liju1: '  The unexpected heavy rain alleviated the drought.',
        chinese1: '这场突如其来的大雨缓解了旱情。',
        liju2: 'Nowadays, many can be done to alleviate back pain. ',
        chinese2: '如今，很多方法可以被用来减轻背部疼痛。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '104',
        word: ' alliance',
        ciyi: ' n. 结盟，联盟；联姻 ',
        kaodian: '',
        liju1: '  They contracted an alliance with another country.   ',
        chinese1: '他们与另外一个国家结成了同盟。',
        liju2: 'The two parties were still too much apart to form an alliance. ',
        chinese2: '这两个党派分歧大得还不能形成联盟。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '105',
        word: 'allocate ',
        ciyi: ' vt. 分配，分派；拨出  ',
        kaodian: '',
        liju1: ' The Government has allocated funds for housing. ',
        chinese1: '政府已为住房建筑拨给资金。',
        liju2: 'We have allocated this room to you. ',
        chinese2: '我们已把这间房子分给你。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '106',
        word: 'allowance ',
        ciyi: '  n. 津贴，补助（费），零用钱；允许；限额 ',
        kaodian: '',
        liju1: ' Beijing University provided her with an allowance when she was studying there.   ',
        chinese1: '北京大学在她学习期间给她提供了津贴。',
        liju2: "'Don't scrounge my pen without my allowance!   '",
        chinese2: '我不允许，你不能擅自拿我的钢笔用!',
        liju3: 'Most of our flights have a baggage allowance of 44 lbs per passenger.',
        chinese3: '我们大多数航班的行李限量是每位乘客44磅。'
      },
      {
        id: '107',
        word: ' alloy',
        ciyi: '  n. 合金 ',
        kaodian: '',
        liju1: 'Last October the first batch of low-alloy channel steel was successfully rolled.  ',
        chinese1: '去年10月，成功地轧出了第一批低合金槽钢。',
        liju2: 'Bronze is an alloy of copper and tin. ',
        chinese2: '青铜是一种铜锡合金。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '108',
        word: 'ally',
        ciyi: ' n. 同盟国；同盟者；支持者vt.使联盟；使联合 ',
        kaodian: '',
        liju1: "' Washington would not take such a step without its allies' approval. '",
        chinese1: '没有其同盟国的赞同，华盛顿不会迈出这样的一步。',
        liju2: 'He is a close ally of the president. ',
        chinese2: '他是总统的一位亲密盟友。',
        liju3: 'He will have no choice but to ally himself with the new movement.',
        chinese3: '他将别无选择，只能与这个新运动结盟。'
      },
      {
        id: '109',
        word: 'alongside  ',
        ciyi: '  ad. 并排地，并肩地prep. 在……旁边，与…并肩',
        kaodian: '',
        liju1: 'The vessel anchored alongside the quay.  ',
        chinese1: '船靠码头抛了锚。',
        liju2: 'They campaigned alongside the friendly forces.   ',
        chinese2: '他们与友军并肩作战。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '110',
        word: ' alphabet  ',
        ciyi: ' n. 字母表  ',
        kaodian: '',
        liju1: ' The modern Russian alphabet has 31 letters. ',
        chinese1: '现代俄语字母表有31个字母。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '111',
        word: 'alter ',
        ciyi: '  vt. 改变，更改 ',
        kaodian: '',
        liju1: '   Sophistry cannot alter history. ',
        chinese1: '诡辩改变不了历史。',
        liju2: "'In doing translation, one should not alter the meaning of the original to suit one's own taste. '",
        chinese2: '翻译时不应根据自己的好恶改变原文的意思。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '112',
        word: ' alternate  ',
        ciyi: '  vi. 交替；轮流a. 交替的；轮流的',
        kaodian: '',
        liju1: 'They were streaked with alternate bands of colour. ',
        chinese1: '他们都带有色彩交替相间的条纹。',
        liju2: "'Her aggressive moods alternated with gentle or more cooperative states. '",
        chinese2: '她的挑衅情绪与温和或更为合作的情绪互相交替。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '113',
        word: ' alternative ',
        ciyi: '  a. 供选择的 n.替换物，选择对象 ',
        kaodian: '',
        liju1: ' There were alternative methods of travel available.',
        chinese1: '有另外的旅行方式可采用。',
        liju2: 'New ways to treat arthritis may provide an alternative to painkillers. ',
        chinese2: '治疗关节炎的新方法可能会提供一种止痛药的替代品。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '114',
        word: ' altitude ',
        ciyi: 'n. 高地；高度，海拔  ',
        kaodian: '',
        liju1: ' Is there any evidence that altitude actually affects the results of football matches?   ',
        chinese1: '是否有任何证据显示海拔真的会影响足球比赛的结果呢？',
        liju2: 'The aircraft had reached its cruising altitude of about 39,000 feet. ',
        chinese2: '那架飞机已经达到了大约三万九千英尺的巡航高度。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '115',
        word: ' alumin(i)um  ',
        ciyi: ' a. 铝的n. 铝 ',
        kaodian: '',
        liju1: 'If necessary, we can use aluminum instead of steel.  ',
        chinese1: '如果必要，我们可用铝代钢。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '116',
        word: ' amateur ',
        ciyi: ' n. 爱好者；业余爱好者 a. 业余的 ',
        kaodian: '',
        liju1: ' Jerry is an amateur who dances because he feels like it. ',
        chinese1: '杰瑞是一位业余舞蹈爱好者，他跳舞因为他喜欢跳。',
        liju2: "' He's no amateur in farming.  '",
        chinese2: '种庄稼他可不外行。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '117',
        word: ' amaze ',
        ciyi: ' vt. 使吃惊，使惊愕，使惊叹  ',
        kaodian: '',
        liju1: "' Most of the cast was amazed by the play's success.'",
        chinese1: '演员班子中的大多数人对这出戏的成功感到吃惊。',
        liju2: ' It amazed me to learn that she had been promoted.',
        chinese2: '听说她提升了，真使我惊愕。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '118',
        word: 'ambassador  ',
        ciyi: ' n. 大使；代表  ',
        kaodian: '',
        liju1: ' She agreed to accompany the ambassador.',
        chinese1: '她同意陪大使。',
        liju2: ' The ambassador refused to give any interviews to journalists or TV men.  ',
        chinese2: '该大使拒绝接见任何新闻记者或电视台记者。 ',
        liju3: '',
        chinese3: ''
      },
      {
        id: '119',
        word: ' ambiguous ',
        ciyi: ' a.模棱两可的；引起歧义的 ',
        kaodian: '',
        liju1: '  His answer was ambiguous.  ',
        chinese1: '他的答复是含糊的。',
        liju2: 'This agreement is very ambiguous and open to various interpretations. ',
        chinese2: '这个协议非常模棱两可，可以有多种解释。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '120',
        word: 'ambition   ',
        ciyi: '  n. 野心，雄心 ',
        kaodian: '',
        liju1: ' Even when I was young I never had any ambition.',
        chinese1: '即使当我年轻的时候我也从未有过什么雄心。',
        liju2: 'They had the ambition to dominate this small country.   ',
        chinese2: '他们有控制这个小国的野心。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '121',
        word: ' ambitious  ',
        ciyi: 'a. 野心勃勃的；有雄心的 ',
        kaodian: '',
        liju1: ' The ambitious young man used his friends to further his career.  ',
        chinese1: '这位野心勃勃的年轻人利用朋友来推动他的事业的发展。',
        liju2: 'The program is laudably ambitious.   ',
        chinese2: '这项计划雄心勃勃，值得称赞。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '122',
        word: ' ambulance ',
        ciyi: '  n. 救护车 ',
        kaodian: '',
        liju1: '  The old man had hopped off when the ambulance reached the hospital.  ',
        chinese1: '当救护车开到医院时，那老人已经死了。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '123',
        word: ' amend  ',
        ciyi: 'vt. 修改，修正   ',
        kaodian: '',
        liju1: 'Congress may amend the proposed tax bill.   ',
        chinese1: '议会可能会修正提议的征税法。',
        liju2: ' She amended the speech by making some additions and deletions.',
        chinese2: '她对讲话作了增删修改。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '124',
        word: '  amiable',
        ciyi: ' a.和蔼可亲的，亲切的，可爱的 ',
        kaodian: '',
        liju1: 'The leader did the amiable.   ',
        chinese1: ' 那名领导人装出和蔼可亲的样子。 ',
        liju2: 'She had been surprised at how amiable and polite he had been. ',
        chinese2: '她对他如此和蔼可亲、彬彬有礼感到了惊讶。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '125',
        word: 'amid  ',
        ciyi: '  prep. 在…其中，被…围绕 ',
        kaodian: '',
        liju1: 'Some of the wreckage caused by the explosion fell amid the crowd of spectators. ',
        chinese1: '爆炸产生的碎片落在围观人群当中。',
        liju2: 'The party was a haven of quiet amid the noise and bustle of the streets outside. ',
        chinese2: '外面街道上熙来攘往，一片喧闹嘈杂之声，那个公园坐落其间，真是安静的世外桃源。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '126',
        word: ' amount ',
        ciyi: '   vi.合计，总共达；等于n. 数量；总额 ',
        kaodian: '',
        liju1: ' Any amount, great or small, will be appreciated.   ',
        chinese1: '数量不论多少都将受到欢迎。',
        liju2: ' Consumer spending on sports-related items amounted to $9.75 billion.',
        chinese2: '消费者在体育相关用品上的消费总共达到了97.5亿美元。',
        liju3: 'It is stated differently but amounts to the same thing.',
        chinese3: '那说法不同，而实际上是一回事。'
      },
      {
        id: '127',
        word: 'ample  ',
        ciyi: ' a. 丰富的；足够的；宽敞的  ',
        kaodian: '',
        liju1: '  Agriculture has developed rapidly, thus providing light industry with ample raw materials.  ',
        chinese1: '农业迅速发展，从而为轻工业提供了充足的原料。',
        liju2: ' An ample table stood in the middle of the kitchen.',
        chinese2: '厨房中央有一张宽大的餐桌。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '128',
        word: 'amplify   ',
        ciyi: 'vt.放大，增强   ',
        kaodian: '',
        liju1: ' This landscape seemed to trap and amplify sounds.',
        chinese1: '这种地形好像能聚拢和扩大声音。',
        liju2: ' The mist had been replaced by a kind of haze that seemed to amplify the heat.',
        chinese2: '这薄雾已经被一种热汽代替了，这似乎加重了炎热的程度。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '129',
        word: ' amuse ',
        ciyi: ' vt. 娱乐；消遣；使发笑  ',
        kaodian: '',
        liju1: ' I trumped up a story to amuse the children.  ',
        chinese1: '我编了一个故事逗孩子们开心。',
        liju2: ' The boys amused themselves with games.',
        chinese2: '男孩们以游戏自娱。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '130',
        word: 'analog(ue)   ',
        ciyi: ' n. 模拟；类似物a. 模拟的  ',
        kaodian: '',
        liju1: '  Though digital circuits are more resistant to noise than analogue designs, they remain vulnerable.  ',
        chinese1: '数字电路相比模拟电路对噪音抗性更强，但依然十分脆弱。',
        liju2: ' A vegetarian gets protein not from meat but from its analogs.',
        chinese2: '素食者摄取的蛋白质并非来自肉类，而是来自类似肉类的食物。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '131',
        word: ' analogy  ',
        ciyi: ' n. 类比；比拟 ',
        kaodian: '',
        liju1: ' The analogy is rather farfetched.   ',
        chinese1: '这个比方有点驴唇不对马嘴。',
        liju2: 'The analogy between music and fragrance has stuck. ',
        chinese2: '音乐与香味的类比已经深入人心了。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '132',
        word: 'analyse/analyze   ',
        ciyi: ' vt. 分析；分解  ',
        kaodian: '',
        liju1: "'We should develop the students' ability to analyze and solve problems.   '",
        chinese1: '我们应该培养学生分析问题和解决问题的能力。',
        liju2: ' We analyzed a sentence.',
        chinese2: '我们对一个句子作语法分析。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '133',
        word: 'analysis   ',
        ciyi: ' n. 分析；分解 ',
        kaodian: '',
        liju1: ' My speech started with the situation analysis.   ',
        chinese1: '我以形势分析开始了我的演说。',
        liju2: ' The comment only slammed but had no analysis at all.',
        chinese2: '该篇评论只是在漫骂，根本没有分析评论。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '134',
        word: '  analytic(al) ',
        ciyi: '  a. 分析的；解析的',
        kaodian: '',
        liju1: '  I have an analytical approach to every survey.',
        chinese1: '我对每项调查都采用一种分析的方法。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '135',
        word: ' ancestor ',
        ciyi: ' n. 始祖，祖先  ',
        kaodian: '',
        liju1: 'And there is only one explanation for that at the molecular level, which is common ancestor.   ',
        chinese1: '而对此唯一的解释就是，在分子水平上，我们有着共同的祖先。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '136',
        word: 'anchor  ',
        ciyi: '  n. 锚； vt. 抛锚；停泊 ',
        kaodian: '',
        liju1: ' The sailor coiled the rope around the anchor.   ',
        chinese1: '水手把绳子盘缠在锚上。',
        liju2: ' We could anchor off the pier.',
        chinese2: '我们可以在码头抛锚。',
        liju3: 'Sailboats lay at anchor in the narrow waterway.',
        chinese3: '帆船停泊在狭窄的水道里。'
      },
      {
        id: '137',
        word: 'ancient   ',
        ciyi: '  a. 古代的；古老的n. 古代人',
        kaodian: '',
        liju1: 'These magnificent ancient buildings demonstrate the great intelligence of the labouring people.   ',
        chinese1: '这些壮丽的古代建筑显示了劳动人民的高度智慧。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '138',
        word: ' anecdote ',
        ciyi: '   n. 轶事；奇闻，短故事',
        kaodian: '',
        liju1: ' Pete was telling them an anecdote about their mother.',
        chinese1: '皮特正在告诉他们一个关于他们母亲的趣闻轶事。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '139',
        word: 'angle  ',
        ciyi: ' n. 角度，立场，方面 ',
        kaodian: '',
        liju1: ' Use your compass to bisect an angle.  ',
        chinese1: '用圆规把一个角二等分。',
        liju2: ' Thanks to the angle at which he stood, he could just see the sunset.',
        chinese2: '多亏他站的角度，他刚好能看到日落。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '140',
        word: ' anguish ',
        ciyi: '  n. 极度痛苦；苦恼vt.使极度痛苦  ',
        kaodian: '',
        liju1: ' Mary anguished over the death of her husband.',
        chinese1: '丈夫的死让玛丽感到极度痛苦。 ',
        liju2: ' Mark looked at him in anguish.',
        chinese2: '马克极为痛苦地看着他。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '141',
        word: 'ankle  ',
        ciyi: ' n. 踝关节，踝  ',
        kaodian: '',
        liju1: '  Her ankle disjointed when she fell.  ',
        chinese1: '她跌了一跤，脚踝脱臼了。',
        liju2: 'Ankle sprains accounted for about half of all injuries. ',
        chinese2: '踝关节扭伤大约占所有受伤情况的一半。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '142',
        word: 'anniversary  ',
        ciyi: ' n. 周年纪念日  ',
        kaodian: '',
        liju1: 'The post office centralizing the town celebrated its 20th anniversary yesterday.   ',
        chinese1: '作为市镇中心的邮局昨天庆祝它建局二十周年。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '143',
        word: ' annoy ',
        ciyi: ' vt. 骚扰，惹恼，使生气；打搅 ',
        kaodian: '',
        liju1: 'He is not doing this to annoy you.   ',
        chinese1: '他做这件事并非是要惹你烦恼。',
        liju2: ' We can annoy the enemy by air raids.  ',
        chinese2: '我们可以用空袭骚扰敌人。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '144',
        word: ' annual  ',
        ciyi: ' a. 年度的；每年的n. 年刊，年鉴 ',
        kaodian: '',
        liju1: 'They met at an annual convention in New York.   ',
        chinese1: '他们在纽约年会上会面。',
        liju2: "'I looked for Wyman's picture in my high - school annual. '",
        chinese2: '我在我的中学年鉴里找过怀曼的照片。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '145',
        word: ' anonymous  ',
        ciyi: ' a. 匿名的，无名的；无特色的 ',
        kaodian: '',
        liju1: ' An anonymous benefactor stepped in to provide the prize money. ',
        chinese1: '一位匿名捐助人参与进来提供了奖金。',
        liju2: 'We were wandering in the grey anonymous streets in the down. ',
        chinese2: '我们在小镇毫无特色的灰暗街道上游荡着。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '146',
        word: '  antenna',
        ciyi: '  n.天线',
        kaodian: '',
        liju1: 'They erected a television antenna on the roof.   ',
        chinese1: '他们在屋顶上竖起了电视天线。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '147',
        word: ' anticipate ',
        ciyi: ' vt.预期，期望；预料 ',
        kaodian: '',
        liju1: "'The general misread the enemy's intentions, and didn't anticipate the attack.'",
        chinese1: '将军对敌人的意图判断错误，没有预见到那次进攻。',
        liju2: ' We anticipated her winning first prize.',
        chinese2: '我们期望她获得第一名。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '148',
        word: ' antique ',
        ciyi: 'a. 古老的 n. 古董，古玩  ',
        kaodian: '',
        liju1: ' This carved chest is a genuine antique.  ',
        chinese1: '这只雕花盒子是件古玩真品。',
        liju2: 'He delights in browsing through antique stores.   ',
        chinese2: '他喜爱逛古董店随意观看商品。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '149',
        word: 'anxiety   ',
        ciyi: ' n. 焦虑；渴望，热望；挂念 ',
        kaodian: '',
        liju1: 'He was distracted by anxiety.   ',
        chinese1: '他因忧虑而心烦意乱。',
        liju2: 'Fear and anxiety were gnawing her.  ',
        chinese2: '恐惧与焦虑折磨着她。',
        liju3: 'The prince’s eyes bent upon the princess with deep anxiety.',
        chinese3: '王子满含渴望的双眼专注地望着公主。'
      },
      {
        id: '150',
        word: 'anyhow  ',
        ciyi: ' anyhow  ',
        kaodian: '',
        liju1: 'Anyhow Tony intended to acknowledge him as his son.   ',
        chinese1: '不管怎样托尼打算承认他为自己的儿子。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '151',
        word: ' apart  ',
        ciyi: ' ad. 分开，分离；相距，相隔a. 分离的 ',
        kaodian: '',
        liju1: ' Their views are still wide apart.  ',
        chinese1: '他们的观点仍然相距甚远。',
        liju2: 'Ray and his sister lived just 25 miles apart from each other. ',
        chinese2: '雷和妹妹住得彼此仅隔25英里。',
        liju3: 'Apart from clothes and bedding, I have nothing.  ',
        chinese3: '我除了行李被褥之外一无所有。'
      },
      {
        id: '152',
        word: ' apartment  ',
        ciyi: ' n. 公寓；房间 ',
        kaodian: '',
        liju1: ' We leased an apartment from the school. ',
        chinese1: '我们从学校租到了一套公寓住房。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '153',
        word: ' ape  ',
        ciyi: '  n. 猿vt. 模仿',
        kaodian: '',
        liju1: ' Man has evolved from the ape.  ',
        chinese1: '人是从类人猿进化来的。',
        liju2: 'Modeling yourself on someone you admire is not the same as aping all they say or do. ',
        chinese2: '以你仰慕的某个人为榜样并不等于模仿他们的全部言行。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '154',
        word: 'appal(l)  ',
        ciyi: '  vt. 使惊骇；惊吓 ',
        kaodian: '',
        liju1: ' I dread sleeping: my dreams appall me.  ',
        chinese1: '我怕睡觉：我做的那些梦让我害怕。',
        liju2: ' I can do something for 12 hours that would appall me if I had to keep it up for a lifetime.  ',
        chinese2: '有些事情我只能坚持做十二个小时——要是让我坚持一辈子，我会恐惧不已。',
        liju3: '',
        chinese3: ''

      },
      {
        id: '155',
        word: ' apparatus ',
        ciyi: '  n. 器械，装置，设备；仪器  ',
        kaodian: '',
        liju1: ' The apparatus is spotlessly clean.   ',
        chinese1: '仪器上一尘不染。',
        liju2: 'One of the boys had to be rescued by firemen wearing breathing apparatus. ',
        chinese2: '其中的一个男孩得由戴着呼吸设备的消防队员们营救。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '156',
        word: '  apparent ',
        ciyi: ' a. 明显的，显然的；表面的',
        kaodian: '',
        liju1: ' When the synthetic is contrasted with the natural one, the difference is very apparent.  ',
        chinese1: '把人工制品与天然品一比，其差别是很明显的。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '157',
        word: ' appeal ',
        ciyi: 'vi. 呼吁，要求；对…有吸引力；申诉，上诉n. 呼吁，请求；吸引力；申诉；上诉  ',
        kaodian: '',
        liju1: 'He appealed to voters to go to the polls tomorrow. ',
        chinese1: '他呼吁选民们明天去投票站。',
        liju2: ' His argument appealed to me.',
        chinese2: '他的论据引起了我的兴趣。',
        liju3: 'The right of individuals to appeal to a higher court is provided for in the constitution.  ',
        chinese3: '个人向上一级法院提出上诉，这是宪法所赋予的权利。'
      },
      {
        id: '158',
        word: 'appearance   ',
        ciyi: ' n. 外貌，外观；出现，露面  ',
        kaodian: '',
        liju1: 'The car is not bad in appearance. ',
        chinese1: '这辆小车外表看起来还不赖。',
        liju2: ' At the appearance of the enemy, we attacked.  ',
        chinese2: '敌人一出现，我们就发起了攻击。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '159',
        word: ' appendix ',
        ciyi: ' n. 附录；阑尾；附加物  ',
        kaodian: '',
        liju1: "'The survey results are published in full as an appendix to Mr. Barton's discussion paper. '",
        chinese1: '该调查结果作为巴顿先生的讨论报告的附录被全文刊出。',
        liju2: 'Tom always brags that woman is a mere appendix to man. ',
        chinese2: '汤姆总是夸口，说女人只不过是男人的附属品。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '160',
        word: 'appetite  ',
        ciyi: ' n. 食欲，胃口；嗜好，欲望，要求 ',
        kaodian: '',
        liju1: ' These dishes can quicken your appetite. ',
        chinese1: '这些菜肴能刺激你的食欲。',
        liju2: 'He spent a lot of money in satisfying the appetite for excitement and amusement.   ',
        chinese2: '他花钱如水，以求满足兴奋和欢娱的欲望。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '161',
        word: ' applaud  ',
        ciyi: ' vt.赞同；称赞；向…喝彩 ',
        kaodian: '',
        liju1: ' I applaud you for being yourself.  ',
        chinese1: '做你自己，我会为你鼓掌。',
        liju2: 'He should be applauded for his courage. ',
        chinese2: '他应该因其勇气而受到称赞。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '162',
        word: ' applause ',
        ciyi: ' n. 欢呼，喝彩；鼓掌 ',
        kaodian: '',
        liju1: 'The speech was received with hearty rounds of applause.   ',
        chinese1: '听众对演说报以阵阵热烈的掌声。',
        liju2: ' The actor basked in appreciative applause.  ',
        chinese2: '这位演员受到热烈喝彩，心里感到乐滋滋的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '163',
        word: ' appliance ',
        ciyi: ' n. 用具，器具；器械 ',
        kaodian: '',
        liju1: 'He could also learn to use the vacuum cleaner, the washing machine and other household appliances. ',
        chinese1: '他还能学习使用吸尘器、洗衣机和其他家用电器。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '164',
        word: '  applicable ',
        ciyi: '  a. 可适用的；可应用的 ',
        kaodian: '',
        liju1: 'What is a reasonable standard for one family is not applicable for another. ',
        chinese1: '对一个家庭合理的标准对于另一个家庭并不适用。',
        liju2: ' ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '165',
        word: '  application ',
        ciyi: ' n. 应用，运用；请求，申请（书、表）；敷用 ',
        kaodian: '',
        liju1: 'Your application to join the club was honored.  ',
        chinese1: '你加入俱乐部的申请获得批准了。',
        liju2: ' Students learned the practical application of the theory they had learned in the classroom.',
        chinese2: '学生们学会了课堂上学到的理论的实际应用。',
        liju3: 'The patient recovered with the application of olive oil to his nostrils.',
        chinese3: 'The patient recovered with the application of olive oil to his nostrils.'
      },
      {
        id: '166',
        word: ' apply ',
        ciyi: 'vi.申请，请求；应用，适用；涂，敷   ',
        kaodian: '',
        liju1: ' They may apply to join the organization. ',
        chinese1: '他们可能申请加入该组织。',
        liju2: 'These regulations apply to everyone, without exception.   ',
        chinese2: '这些规章对谁都适用，没有例外。',
        liju3: 'The government appears to be applying the same principle.',
        chinese3: '政府似乎在运用同样的原则。'
      },
      {
        id: '167',
        word: ' appoint  ',
        ciyi: 'vt. 任命；指定；约定vi. 任命；委派   ',
        kaodian: '',
        liju1: 'The president has appointed a civilian as defense secretary. ',
        chinese1: '总统任命了一位平民做国防部长。',
        liju2: 'We appointed the school-house as place for the meeting. ',
        chinese2: '我们确定校舍为会面地点。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '168',
        word: 'appointment   ',
        ciyi: '  n. 任命,委任；约定，指定  ',
        kaodian: '',
        liju1: 'Rose had forgotten all about their appointment.   ',
        chinese1: '罗斯把他们的约会全忘掉了。',
        liju2: 'The news of his appointment filtered out before it was officially advertised.  ',
        chinese2: '关于他的任命尚未正式宣布，消息就已经泄露了出去。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '169',
        word: ' appraisal  ',
        ciyi: 'n. 评价；估价，估计  ',
        kaodian: '',
        liju1: ' In the process of thinking and contradicting I have recollections and appraisal of myself.  ',
        chinese1: '在思考和辩论的过程中进行自我反思和评价。',
        liju2: ' What is needed in such cases is a calm appraisal of the situation.',
        chinese2: '在此类情况下需要的是对形势的冷静估计。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '170',
        word: ' appreciate ',
        ciyi: ' vt. 正确评价，欣赏，赏识；感激  ',
        kaodian: '',
        liju1: ' I appreciate your generosity in the matter.   ',
        chinese1: '我很欣赏你在这件事上表现出来的宽大胸怀。',
        liju2: 'We appreciate your helping us. ',
        chinese2: '我们对你们给予我们的帮助表示感谢。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '171',
        word: 'approach  ',
        ciyi: '   n. 方法，途径；试探，探讨 vt. 靠近，接近；着手处理 ',
        kaodian: '',
        liju1: 'We will be exploring different approaches to gathering information. ',
        chinese1: '我们将探索收集信息的不同方法。',
        liju2: 'The club has made an approach to an international firm for sponsorship. ',
        chinese2: '俱乐部已与一家跨国公司就赞助事宜进行了磋商。',
        liju3: 'When I approached, they grew silent.',
        chinese3: '当我走近时，他们变得沉默了。'
      },
      {
        id: '172',
        word: ' appropriate',
        ciyi: 'a. 适当的；恰当的vt. 占用，拨出 ',
        kaodian: '',
        liju1: ' Dress neatly and attractively in an outfit appropriate to the job. ',
        chinese1: '穿适合于这份工作的整洁美观的套装。',
        liju2: 'That selfish student always appropriates the biggest bookcase and desk.',
        chinese2: '那个自私的学生总是占用最大的书橱和书桌。',
        liju3: 'The legislature appropriated funds for the university.',
        chinese3: '立法机关拨款作为大学经费。'
      },
      {
        id: '173',
        word: ' approval ',
        ciyi: 'n. 批准；认可；赞成 ',
        kaodian: '',
        liju1: ' They voiced their approval of the plan.  ',
        chinese1: '他们对这项计划表示赞成。',
        liju2: 'The testing and approval of new drugs will be speeded up.',
        chinese2: '新药的检测与审批将会加速。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '174',
        word: 'approve  ',
        ciyi: 'vt. 批准；通过，赞成；vi. 赞成；满意 ',
        kaodian: '',
        liju1: '  They stacked the committee to approve their expenditure.  ',
        chinese1: '他们暗中做手脚使委员会批准了他们的费用支出。',
        liju2: 'Father approved our plan to visit New York.',
        chinese2: '父亲同意了我们访问纽约的计划。',
        liju3: "'Don't expect him to approve of your plan straight away.'",
        chinese3: '别指望他马上会接受你的计划。'
      },
      {
        id: '175',
        word: ' approximate',
        ciyi: '  vi. 接近，估计a. 近似的；大概的',
        kaodian: '',
        liju1: ' The mixture described below will approximate it, but is not exactly the same. ',
        chinese1: '下面所描述的混合物会与之近似，但不完全一样。',
        liju2: 'The approximate cost varies from around $150 to $250.',
        chinese2: '大致的费用在$150至$250之间不等。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '176',
        word: 'Apri ',
        ciyi: 'n. 四月 ',
        kaodian: '',
        liju1: '  The workers were hustled to finish the work before April by the master.  ',
        chinese1: '老板催他的工人在四月前完成任务。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '177',
        word: ' apt ',
        ciyi: ' a. 恰当的；易于…的，有…倾向的；  ',
        kaodian: '',
        liju1: '  The words of this report are as apt today as in 1929. ',
        chinese1: '这份报告的措词在当今如在1929年一样恰当。',
        liju2: 'She was apt to raise her voice and wave her hands about.',
        chinese2: '她常常提高嗓门并挥舞双手。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '178',
        word: 'arbitrary ',
        ciyi: 'a. 任意的；武断的；专制的 ',
        kaodian: '',
        liju1: 'The customer should be driven by business need, not arbitrary pressure from above.    ',
        chinese1: '客户应当由业务需求来驱动，而不是来自上司的武断压力。',
        liju2: 'Arbitrary arrests and detention without trial were common.',
        chinese2: '不经审讯随意扣押是常有的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '179',
        word: 'arch ',
        ciyi: '  n. 弓形结构，拱门，拱桥洞vt. 使弯成弓形，拱起',
        kaodian: '',
        liju1: '  When she passed under the arch leading out of the park, Mira whooped with delight. ',
        chinese1: '从通向公园外的拱门下走过时，米拉高兴地喊叫起来。',
        liju2: 'She twined the bridal arch with flowers.',
        chinese2: '她将新娘拱形头饰用花缠起来。',
        liju3: "'Don't arch your back, keep your spine straight.'",
        chinese3: '不要弓着背，挺直脊梁。'
      },
      {
        id: '180',
        word: 'arch(a)eology  ',
        ciyi: ' n. 考古学 ',
        kaodian: '',
        liju1: ' For me, archaeology is about having a good time.   ',
        chinese1: '对我来说，考古学应该是一件很快乐的事情。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '181',
        word: 'architect  ',
        ciyi: ' n. 建筑师',
        kaodian: '',
        liju1: '  They commissioned an architect to design the new library.   ',
        chinese1: '他们委托一位建筑师设计这座新图书馆。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '182',
        word: 'architecture  ',
        ciyi: ' n. 建筑学；建筑风格；建筑式样 ',
        kaodian: '',
        liju1: '  Architecture is his line.   ',
        chinese1: '搞建筑是他的本行。',
        liju2: 'This architecture is usually referred to the sixteenth century.  ',
        chinese2: '这种建筑风格一般是属于16世纪的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '183',
        word: 'argue ',
        ciyi: ' vi. 争论，辩论；vt. 辩论，坚持，主张；证明；说服',
        kaodian: '',
        liju1: 'The senator argued with the President about the new tax bill.  ',
        chinese1: '参议员与总统为新税法案争辩。',
        liju2: 'The lawyers argued the case.',
        chinese2: '律师们辩论这案件。',
        liju3: 'His manners argue a good upbringing.',
        chinese3: '他的举止表明受过良好教育。'
      },
      {
        id: '184',
        word: 'argument  ',
        ciyi: ' n. 论证；论据；争论 ',
        kaodian: '',
        liju1: '   His argument appealed to me.  ',
        chinese1: '他的论据引起了我的兴趣。',
        liju2: 'I defeated him by knocking down his argument.  ',
        chinese2: '我通过驳斥他的论点挫败了他。',
        liju3: 'He complied without argument.',
        chinese3: '他没有争辩就服从了。'
      },
      {
        id: '185',
        word: ' arise ',
        ciyi: 'vi. 出现，发生；上升；起立；由…引起 ',
        kaodian: '',
        liju1: '  New problems arose imperceptibly.',
        chinese1: '新问题不知不觉地产生。 ',
        liju2: 'After such destruction many problems in resettlement often arise.  ',
        chinese2: '在这样的破坏之后重新定居中的许多问题常常由此产生。',
        liju3: 'A thin curl of smoke arose lazily from the cabin.',
        chinese3: '一缕薄烟懒洋洋地从小屋升起。'
      },
      {
        id: '186',
        word: 'arithmetic  ',
        ciyi: 'n. 算术，算法',
        kaodian: '',
        liju1: '  That school puts particular emphasis on arithmetic and reading.   ',
        chinese1: '那所学校侧重算术和阅读。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '187',
        word: 'arouse  ',
        ciyi: ' vt. 激起，引起；唤醒，唤起 ',
        kaodian: '',
        liju1: ' At dawn the farmers began to arouse.  ',
        chinese1: '黎明时农民们开始醒来。',
        liju2: 'We must arouse them to fight with enemies.  ',
        chinese2: '我们必须唤起他们同敌人斗争。',
        liju3: 'The smell of frying bacon aroused his hunger.',
        chinese3: '煎咸肉的味道激起了他的饥饿感。'
      },
      {
        id: '188',
        word: 'arrange ',
        ciyi: ' vt.安排，筹备；整理，排列 ',
        kaodian: '',
        liju1: ' If you want to meet them, I can arrange it.    ',
        chinese1: '你如果想见他们，我可以安排会见。',
        liju2: 'I arranged the books on the shelves.',
        chinese2: '我把书架上的书籍整理好。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '189',
        word: 'array  ',
        ciyi: ' n. 数组，排列，大批，一系列vt. 部署；排列  ',
        kaodian: '',
        liju1: ' As the deadline approached she experienced a bewildering array of emotions. ',
        chinese1: '随着最后期限的临近，她心绪变得纷繁复杂起来。',
        liju2: 'The army was arrayed against the enemy.',
        chinese2: '军队列阵抗敌。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '190',
        word: ' arrest',
        ciyi: '  vt. 逮捕，拘留；阻止；吸引 n. 逮捕；监禁 ',
        kaodian: '',
        liju1: '  Policemen have authority to arrest lawbreakers.   ',
        chinese1: '警察有权逮捕犯法者。',
        liju2: 'The loud noise arrested our attention.',
        chinese2: '响声吸引了我们的注意。',
        liju3: 'The new drug did not arrest the cancer.',
        chinese3: '这种新药控制不住癌症。'
      },
      {
        id: '191',
        word: ' arrogan',
        ciyi: 'a. 自大的，傲慢的  ',
        kaodian: '',
        liju1: ' He is an arrogant man.  ',
        chinese1: '他是个傲慢的人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '192',
        word: '  arrow ',
        ciyi: 'n. 箭，箭头；箭状物  ',
        kaodian: '',
        liju1: 'The arrow stuck in the tree.    ',
        chinese1: '这枝箭射插在树上。',
        liju2: 'The pickerel would occasionally arrow the surface.  ',
        chinese2: '小狗鱼偶尔会像箭一般地跃出水面。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '193',
        word: 'artery  ',
        ciyi: 'n. 动脉；干线，要道；主流 ',
        kaodian: '',
        liju1: ' Heart disease and artery disease will raise your risk of heart disease.   ',
        chinese1: '心脏病和动脉疾病会增加你患中风的风险。',
        liju2: 'Mark entered a main artery at all speed.',
        chinese2: '马克全速驶入了主干道。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '194',
        word: ' articulate ',
        ciyi: '  vt. 清晰地发音；明确有力地表达； a. 发音清晰的；善于表达的 ',
        kaodian: '',
        liju1: '  Be careful to articulate your words so that everyone in the room can understand you. ',
        chinese1: '小心使你的话发音清晰，以便室内每人都能听懂。',
        liju2: 'After the injury the bones did not articulate as well as before.  ',
        chinese2: '受伤后骨的关节不如以前连接得好。',
        liju3: 'She is an articulate young woman.',
        chinese3: '她是个善于表达的年轻女子。'
      },
      {
        id: '195',
        word: ' artificial ',
        ciyi: 'a. 人造的；仿造的；虚伪的  ',
        kaodian: '',
        liju1: ' When Jack nearly drowned, they brought him to by artificial respiration.   ',
        chinese1: '当杰克快淹死时，他们用人工呼吸使他恢复知觉。',
        liju2: 'Helen’s artificial warmth repelled us.',
        chinese2: '海伦刻意装出来的热情令我们感到厌恶。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '196',
        word: 'artistic ',
        ciyi: ' a. 艺术（家）的；风雅的；有美感的',
        kaodian: '',
        liju1: '   He has an artistic temperament.  ',
        chinese1: '他有艺术家的气质。',
        liju2: 'He acquired an enviable reputation for artistic ability.  ',
        chinese2: '他的艺术才能使他赢得了令人羡慕的声誉。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '197',
        word: ' ascend',
        ciyi: ' vi. 上升；登高；追溯 ',
        kaodian: '',
        liju1: ' The rocket ascended into the cloud. ',
        chinese1: '火箭高高飞入云端。',
        liju2: "'Mrs. Clayton had to hold Lizzie's hand as they ascended the steps.'",
        chinese2: '上台阶时克莱顿夫人不得不抓着莉齐的手。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '198',
        word: ' ascertain',
        ciyi: 'vt. 确定；查明；探知 ',
        kaodian: '',
        liju1: " '  It's difficult to ascertain the coal deposits.   '",
        chinese1: '煤储量很难探明。',
        liju2: 'Once they had ascertained that he was not a spy, they agreed to release him.',
        chinese2: '一查明他不是间谍，他们就同意了释放他。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '199',
        word: 'ashamed ',
        ciyi: 'a. 惭愧的，羞愧的；耻于……的  ',
        kaodian: '',
        liju1: "'  What is there to be ashamed of confessing one's errors ? '",
        chinese1: '承认自己的错误有什么可羞愧的呢?',
        liju2: 'I feel quite ashamed that I have not fulfilled the task.  ',
        chinese2: '我没有完成任务，感到很惭愧。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '200',
        word: 'ashore  ',
        ciyi: 'ad. 在岸上；向岸 ',
        kaodian: '',
        liju1: ' He went ashore at every port.   ',
        chinese1: '每到一个港口他都上岸。',
        liju2: 'Oil has come ashore on a ten mile stretch to the east of Anchorage.',
        chinese2: '连绵10英里的浮油已经到达安克雷齐东面的海岸上。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '201',
        word: ' aspect',
        ciyi: ' n. 方面；形势；外表，外貌',
        kaodian: '',
        liju1: '  He has made progress in every aspect.  ',
        chinese1: '他在各方面都有起色。',
        liju2: 'Everyone wore a happy aspect in the party.',
        chinese2: '晚会上每一个人都神情愉悦。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '202',
        word: 'aspire ',
        ciyi: ' vi. 渴望；立志；追求，向往 ',
        kaodian: '',
        liju1: ' It’s not something little girls aspire to.   ',
        chinese1: '这可不是什么让小女孩们向往的事。',
        liju2: 'He aspired to become a lawyer.',
        chinese2: '他渴望成为一名律师。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '203',
        word: 'assassinate',
        ciyi: ' vt. 暗杀；行刺 ',
        kaodian: '',
        liju1: '  Nobody ever tried to assassinate me.   ',
        chinese1: '至今没有人试图暗杀我。',
        liju2: 'Would the U.S. be radically different today if Kennedy had not been assassinated?',
        chinese2: '如果肯尼迪没有被刺杀，今天的美国会大不相同吗？',
        liju3: '',
        chinese3: ''
      },
      {
        id: '204',
        word: 'assault ',
        ciyi: 'n. 攻击；袭击vt. 攻击；袭击 ',
        kaodian: '',
        liju1: 'The gang assaulted him with iron bars.  ',
        chinese1: '该团伙用铁棒袭击了他。',
        liju2: 'The attack is one of a series of savage sexual assaults on women in the university area.',
        chinese2: '这次袭击是一系列在大学区对女性的野蛮性侵犯之一。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '205',
        word: 'assemble  ',
        ciyi: 'vt. 集合，集会，聚集；装配，组装  ',
        kaodian: '',
        liju1: 'The captain called the men to assemble.    ',
        chinese1: '队长命令部队集合。',
        liju2: 'The company prefabricated sections of houses and moved them to building sites for workers to assemble.  ',
        chinese2: '公司预制好房屋的各个部件，然后运到建筑工地由工人们将其组装起来。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '206',
        word: 'assembly ',
        ciyi: ' n. 装配；集会，会议，集合',
        kaodian: '',
        liju1: '  Any kind of assembly was suppressed in this country.   ',
        chinese1: '该国过去禁止一切形式的集会。',
        liju2: 'For the rest of the day, he worked on the assembly of an explosive device.',
        chinese2: '在那天余下的时间里，他在进行一个爆炸装置的组装。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '207',
        word: ' assert',
        ciyi: 'vt. 维护，坚持，主张；断言，宣称  ',
        kaodian: '',
        liju1: ' She asserted that she was innocent. ',
        chinese1: '她坚称自己清白无辜。',
        liju2: 'The republics began asserting their right to govern themselves.',
        chinese2: '各共和国开始坚持他们自治的权利。',
        liju3: 'The defendants, who continue to assert their innocence, are expected to appeal.',
        chinese3: '那些继续宣称其清白的被告预计会上诉。'
      },
      {
        id: '208',
        word: 'assess ',
        ciyi: ' vt. 评价；估价；对…征税 ',
        kaodian: '',
        liju1: ' The test was to assess aptitude rather than academic achievement. ',
        chinese1: '该测试将评估能力而不是学业成绩。',
        liju2: 'They assess his house at 15000 yuan.  ',
        chinese2: '他们给他房子的估价为15000元。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '209',
        word: ' asset ',
        ciyi: ' n. 资产，财产；优点，有用的东西  ',
        kaodian: '',
        liju1: ' By the end of 1989 the group had assets of $3.5 billion.  ',
        chinese1: '到1989年底该集团已有35亿美元的资产。',
        liju2: 'Sometimes imagination is a more valuable asset than experience.',
        chinese2: '有时候，想象力比经验更有用。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '210',
        word: ' assign ',
        ciyi: 'vt. 分配；指派；赋值，指定(时间、地点等) ',
        kaodian: '',
        liju1: 'Influenced by old ideas，some units assign posts according to seniority.    ',
        chinese1: '由于受旧观念的影响，有些单位分配工作按资排辈。',
        liju2: 'The teacher assigned a new lesson.',
        chinese2: '老师布置了新功课。',
        liju3: ' ',
        chinese3: ' '
      },
      {
        id: '211',
        word: ' assignment',
        ciyi: '  n. 分配；任务；作业；功课',
        kaodian: '',
        liju1: ' The assessment for the course involves written assignments and practical tests. ',
        chinese1: '这门课程的评估包括各种书面作业和实践测试。',
        liju2: 'He has just come off a difficult assignment.  ',
        chinese2: '他刚刚结束了一项艰巨任务。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '212',
        word: 'assimilate ',
        ciyi: ' vt. 经消化而吸收；使（被）同化  ',
        kaodian: '',
        liju1: ' What we eat is assimilated into our systems. ',
        chinese1: '人们吃的东西被吸收到身体里去。',
        liju2: 'China needs to assimilate a good deal of foreign progressive culture, but she must not swallow anything and everything uncritically.  ',
        chinese2: '中国需要大量吸收外国的进步文化， 但决不能无批判地兼收并蓄。',
        liju3: 'Europeans and Jews do not readily assimilate.  ',
        chinese3: '欧洲人和犹太人不易同化。'
      },
      {
        id: '213',
        word: 'assist ',
        ciyi: 'n. 帮助；助攻vt. 帮助，协助；促进 ',
        kaodian: '',
        liju1: ' You assist him in correting the proof. ',
        chinese1: '你辅助他做修改校样的工作。',
        liju2: 'Please assist her in moving the furniture.',
        chinese2: '请帮助她搬家具。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '214',
        word: ' assistance',
        ciyi: ' n. 援助，帮助；辅助设备 ',
        kaodian: '',
        liju1: ' You should never deny assistance to those who need it.   ',
        chinese1: '你不应当拒绝帮助那些需要你帮助的人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '215',
        word: 'associate ',
        ciyi: 'vi. 交往；结合vt.联想，使联合，使联系a. 副的；联合的n. 同事，伙伴，合作人  ',
        kaodian: '',
        liju1: 'When bad men combine, good men must associate.   ',
        chinese1: '当坏人朋比为奸时，好人应该联合起来。',
        liju2: 'Many people associate dark clouds with depression and gloom.',
        chinese2: '许多人把乌云与沮丧、阴郁联系起来。',
        liju3: 'Mr. Lin is associate director of the Institute.',
        chinese3: '林先生是该研究所的副主任。 '
      },
      {
        id: '216',
        word: ' association',
        ciyi: '  n. 协会，社团；联合，联系；交往；联想',
        kaodian: '',
        liju1: ' Members of the association kick over 40 dollars a month for a common fund.  ',
        chinese1: '该协会成员每月交纳40美元来建立一项共同基金。',
        liju2: 'I have association with the socialists of the society.  ',
        chinese2: '我与协会内的社会主义者有交往。',
        liju3: 'My hometown offers me many happy associations.',
        chinese3: '故乡给我种种美好的联想。'
      },
      {
        id: '217',
        word: 'assume ',
        ciyi: 'vt. 假定，设想；假装；采取，承担，呈现  ',
        kaodian: '',
        liju1: '  It is a misconception to assume that the two continents are similar. ',
        chinese1: '假设这两块大陆类似 是种错误概念。',
        liju2: 'He managed to assume an air of calm.',
        chinese2: '他设法表现出一幅平静的样子。',
        liju3: 'They assumed the customs of their new country.',
        chinese3: '他们采用他们新来到国家的习俗。'
      },
      {
        id: '218',
        word: 'assumption ',
        ciyi: ' n. 假定；设想；担任；采取',
        kaodian: '',
        liju1: 'He based his assumption of her guilt on the fact that she had no alibi.    ',
        chinese1: '他以她不在犯罪现场的事实为根据做出她犯罪的假定。',
        liju2: 'This project was predicated on the assumption that the economy was expanding.  ',
        chinese2: '这一计划是以经济发展的设想为依据的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '219',
        word: 'assurance ',
        ciyi: 'n. 保证，担保；确保，断言  ',
        kaodian: '',
        liju1: '  He gave me assurance in black and white.  ',
        chinese1: '他给了我书面保证。',
        liju2: 'So let me give you my assurance. I would never tolerate that.  ',
        chinese2: '我给你们我的保证，我不会容忍那样的事情发生。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '220',
        word: 'assure ',
        ciyi: '  vt.保证；担保；使确信，使放心 ',
        kaodian: '',
        liju1: ' I can assure you of the reliability of the information.   ',
        chinese1: '我可以向你保证这消息是可靠的。',
        liju2: 'Jack assured himself that they did as they were told.',
        chinese2: '杰克确信他们是按照要求的那样去干的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '221',
        word: 'astonish ',
        ciyi: ' vt. 使惊讶，使吃惊 ',
        kaodian: '',
        liju1: 'It astonished her that he was able to survive.  ',
        chinese1: '他竟然活了下来，使她大为惊讶。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '222',
        word: ' astronaut',
        ciyi: 'n. 宇航员，航天员 ',
        kaodian: '',
        liju1: ' Many different qualities go towards the making of an astronaut.    ',
        chinese1: '一名宇航员必须具备许多不同的素质。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '223',
        word: ' astronomy',
        ciyi: ' n. 天文学 ',
        kaodian: '',
        liju1: ' He dipped into astronomy.  ',
        chinese1: '他对天文学稍有涉猎。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '224',
        word: ' athlete',
        ciyi: '  n. 运动员',
        kaodian: '',
        liju1: ' She will make a very good athlete.   ',
        chinese1: '她将来会成为一名很好的运动员。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '225',
        word: 'atmosphere ',
        ciyi: '  n. 气氛；空气；大气（层），大气压 ',
        kaodian: '',
        liju1: ' They left the lights down to create a comfortable atmosphere.   ',
        chinese1: '他们让灯光保持暗淡来创造一种舒适的气氛。',
        liju2: 'These gases pollute the atmosphere of towns and cities.',
        chinese2: '这些气体污染城镇的空气。',
        liju3: "'The shuttle Columbia will re-enter Earth's atmosphere tomorrow morning.'",
        chinese3: '哥伦比亚号航天飞机将在明天上午重进地球大气层。'
      },
      {
        id: '226',
        word: ' ',
        ciyi: ' ',
        kaodian: '',
        liju1: '  ',
        chinese1: '',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '227',
        word: ' atom',
        ciyi: '  n. 原子；微粒，微量 ',
        kaodian: '',
        liju1: ' The power of the atom can be used to produce electricity.   ',
        chinese1: '原子能可以用来发电。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '228',
        word: 'attach ',
        ciyi: 'vt.使依附，使隶属；贴上；系上； vi. 附加；附属 ',
        kaodian: '',
        liju1: '  She attached herself to us. ',
        chinese1: '她和我们一起。',
        liju2: 'We attach labels to things before we file them away.',
        chinese2: '我们在把东西归档前先给它们贴上标签。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '229',
        word: 'attain  ',
        ciyi: ' vt. 达到，获得  ',
        kaodian: '',
        liju1: "' Jim is halfway to attaining his pilot's licence.  '",
        chinese1: '吉姆快要拿到他的飞行员执照了。',
        liju2: '吉姆快要拿到他的飞行员执照了。',
        chinese2: '不论什么时候，只要你有一个目标，就得牺牲一定的自由去实现它。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '230',
        word: 'attempt ',
        ciyi: '  n. 企图，努力 vt. 试图；尝试',
        kaodian: '',
        liju1: '  He gave up the attempt in despair.    ',
        chinese1: '他在绝望中放弃了这种尝试。 ',
        liju2: 'The only time that we attempted to do something like that was in the city of Philadelphia.',
        chinese2: '我们惟一一次试图做那样的事是在费城。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '231',
        word: 'attendant ',
        ciyi: ' a. 伴随的；随着而生的 n. 服务员，侍者',
        kaodian: '',
        liju1: '  She walks into a small pet shop and explains her need to the attendant.  ',
        chinese1: '她走进一家小型宠物店，向服务员说明了自己想要的宠物。',
        liju2: 'These thoughts, with their attendant visions, occupied her.',
        chinese2: '这些想法以及产生的愿景占据了她的脑海。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '232',
        word: 'attitude  ',
        ciyi: ' n. 态度；看法；姿势 ',
        kaodian: '',
        liju1: '   He took up a compromising attitude towards the question.  ',
        chinese1: '他对这个问题采取了妥协的态度。',
        liju2: 'It would be very tired to sit so long in one attitude.It would be very tired to sit so long in one attitude.',
        chinese2: '长时间保持一种坐姿会很累的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '233',
        word: ' attorney',
        ciyi: '  n. 律师；代理人',
        kaodian: '',
        liju1: ' The attorney for the defense challenged the juror.    ',
        chinese1: '被告辩护律师不同意这位陪审员。',
        liju2: 'He delegated his power of attorney to his sister-in-law.  ',
        chinese2: '他把他的代理人的权力委托给他的嫂子。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '234',
        word: 'attract ',
        ciyi: 'vt. 吸引；引起vi. 吸引；有吸引力 ',
        kaodian: '',
        liju1: '  It is a property of matter to attract.   ',
        chinese1: '物质具有吸引力的性质。',
        liju2: 'This new firm will attract the crowds, whatever its quality, provided that it gets played up in the right way.  ',
        chinese2: '这家新开的商号将吸引大群的人，不管它质量如何，只要它广告做得好。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '235',
        word: 'attractive  ',
        ciyi: 'a. 吸引人的；有魅力的；引人注目的 ',
        kaodian: '',
        liju1: ' I thought he was very attractive and obviously very intelligent. ',
        chinese1: '我认为他很有魅力，而且显然也很聪明。',
        liju2: 'For me, this one is not that attractive. ',
        chinese2: '对我来讲，这出戏不是那么有吸引力。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '236',
        word: 'attribute ',
        ciyi: '  n. 属性，特质，特征vt. 归属；把…归于',
        kaodian: '',
        liju1: '  This attribute should be set to any string that you want displayed in the status bar. ',
        chinese1: '您可以为这个属性设置为在状态栏中想要显示的任意字符串。',
        liju2: 'Women tend to attribute their success to external causes such as luck.',
        chinese2: '女性往往把她们的成功归因于外因，如运气。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '237',
        word: ' auction ',
        ciyi: ' vt. 拍卖；竞卖n. 拍卖 ',
        kaodian: '',
        liju1: ' He put his possessions up for auction.    ',
        chinese1: '他把他的财产拿出来拍卖。',
        liju2: 'It was sad to see all my grandfather’s lovely things being auctioned off.',
        chinese2: '看到祖父所有心爱之物在拍卖是令人伤心的。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '238',
        word: 'audience ',
        ciyi: ' n. 观众；听众；读者；接见，会见',
        kaodian: '',
        liju1: ' The entire audience broke into loud applause. ',
        chinese1: '全场观众爆发出响亮的掌声。',
        liju2: "'Say's writings reached a wide audience during his lifetime.'",
        chinese2: '塞伊的作品在他有生之年就拥有了广泛读者。',
        liju3: 'John will have an audience with the former headmaster next week.',
        chinese3: '约翰将于下周拜会前任校长。'
      },
      {
        id: '239',
        word: 'audio ',
        ciyi: '  a. 听觉的，声音的，音频的',
        kaodian: '',
        liju1: '  I recommend you to use those sources that have both audio and transcripts.   ',
        chinese1: '我推荐你使用那些既有音频又有文本的资源。',
        liju2: 'The software was the first to offer access to audio and video files.',
        chinese2: '这是第一种可以访问音视频文件的软件。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '240',
        word: 'audit ',
        ciyi: ' n. 审计，核对vt. 旁听；审计， 查帐',
        kaodian: '',
        liju1: ' Each year they audit our accounts and certify them as being true and fair. ',
        chinese1: '每年他们都会审核我们的账目，以证明其准确合理。',
        liju2: 'The bank first learned of the problem when it carried out an internal audit.',
        chinese2: '银行是在进行内部审计时最先得知这个问题的。',
        liju3: 'Mary likes to audit the literature lessons in her spare time.',
        chinese3: '玛丽喜欢在空闲时间旁听文学课。'
      },
      {
        id: '241',
        word: ' auditorium',
        ciyi: ' n. 礼堂；观众席',
        kaodian: '',
        liju1: ' Anderson was to sing at the Constitution Hall auditorium.',
        chinese1: '安德森将要在宪法厅的观众席演唱。',
        liju2: 'It is hereby announced that there will be a talk on the international situation in the auditorium at 3 on Saturday afternoon.  ',
        chinese2: '定于星期六下午3点在礼堂举行国际形势报告会，特此通知。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '242',
        word: 'augment ',
        ciyi: ' vt. 增加；增大，提高n. 增加；增大',
        kaodian: '',
        liju1: ' While searching for a way to augment the family income, she began making dolls. ',
        chinese1: '为求增加家庭收入，她开始做起了玩具娃娃。',
        liju2: 'The mayor wanted to augment his prestige through orations.',
        chinese2: '市长想通过演说来提高自己的威信。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '243',
        word: ' aural ',
        ciyi: '  a. 听觉的',
        kaodian: '',
        liju1: '  He became famous as an inventor of astonishing visual and aural effects. ',
        chinese1: '他因创造了令人震撼的视听效果而出名。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '244',
        word: 'authentic ',
        ciyi: '  a. 真正的，真实的；可信的，可靠的 ',
        kaodian: '',
        liju1: 'She has authentic charm whereas most people simply have nice manners.  ',
        chinese1: '她有真正的魅力，而大多数人只是有礼貌而已。',
        liju2: 'I had obtained the authentic details about the birth of the organization.',
        chinese2: '我已经弄到了有关该组织成立的可靠的详细资料。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '245',
        word: 'author ',
        ciyi: 'n. 作者；创始人vt. 创作出版 ',
        kaodian: '',
        liju1: '  The author belongs among the romance writers more than among the novelists.  ',
        chinese1: '这位作者应归传奇作家，而不应划入小说家之列。',
        liju2: 'The author of the party died last week.',
        chinese2: '该党的创始人于上周去世了。',
        liju3: 'She authored a history of the Chinese Revolution.',
        chinese3: '她写了一部中国革命史。'
      },
      {
        id: '246',
        word: ' authority ',
        ciyi: 'n. 权威，权力；当局，官方；学术权威，专家 ',
        kaodian: '',
        liju1: ' This provided a pretext for the authorities to cancel the elections. ',
        chinese1: '这给当局提供了一个取消选举的借口。',
        liju2: 'They disclaimed the authority of the president.  ',
        chinese2: '他们不承认总统的权威。',
        liju3: "'Little by little he usurped his boss's authority.  '",
        chinese3: '他逐渐地篡夺老板的权力。'
      },
      {
        id: '247',
        word: 'automatic ',
        ciyi: ' a. 自动的，机械的；无意识的n. 自动机械',
        kaodian: '',
        liju1: ' All of the automatic body functions, even breathing, are affected. ',
        chinese1: '所有无意识的身体功能，甚至呼吸，都受到影响。',
        liju2: 'Modern trains have automatic doors.',
        chinese2: '现代火车都有自动门。',
        liju3: 'When hearing someone coming in, she put her hand under the pillow and drew out a small automatic.',
        chinese3: 'When hearing someone coming in, she put her hand under the pillow and drew out a small automatic.'
      },
      {
        id: '248',
        word: ' automation ',
        ciyi: 'n. 自动化 ',
        kaodian: '',
        liju1: ' They phrase in new machinery for increased automation.  ',
        chinese1: ' 他们逐步采用新机器以提高自动化程度。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '249',
        word: 'automobile  ',
        ciyi: 'n. 汽车 ',
        kaodian: '',
        liju1: ' Automobile accidents maim many people each year.   ',
        chinese1: '汽车车祸每年使许多人残废。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '250',
        word: 'autonomy ',
        ciyi: ' n. 自治，自治权；人身自由，自主权',
        kaodian: '',
        liju1: ' Each of the area managers enjoys considerable autonomy in the running of own area. ',
        chinese1: '每一位地区经理在各自主管的区域都享有相当大的自主权。',
        liju2: 'Activists stepped up their demands for local autonomy last month.',
        chinese2: '活动的积极分子上个月提高了其对地方自治的要求。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '251',
        word: 'auxiliary',
        ciyi: 'n. 助动词；辅助者 a. 辅助的；附加的 ',
        kaodian: '',
        liju1: '  This avoids cluttering up the core content with auxiliary material.  ',
        chinese1: '这样可以避免把核心内容与辅助资料混在一起。',
        liju2: 'Nursing auxiliaries provide basic care, but are not qualified nurses.',
        chinese2: '助理护士们提供基本护理，但没有护士资格。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '252',
        word: 'avai ',
        ciyi: ' n. 效用，利益vt.有益于，有益于',
        kaodian: '',
        liju1: ' His efforts were to no avail.  ',
        chinese1: '他的努力是徒劳的。',
        liju2: 'Guests should feel at liberty to avail themselves of your facilities.',
        chinese2: '客人们应可以随意使用你们的设施。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '253',
        word: 'available ',
        ciyi: ' a. 有效的，可得的；可利用的，空闲的',
        kaodian: '',
        liju1: 'We must utilize all available resources.   ',
        chinese1: '我们必须利用可以得到的一切资源。',
        liju2: 'Mr. Leach is on holiday and was not available for comment.',
        chinese2: '利奇先生在休假，没空作评论。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '254',
        word: 'avenue ',
        ciyi: ' n. 大街，林荫大道；手段，方法  ',
        kaodian: '',
        liju1: '  Walk along Second Avenue and you can see it on the right.   ',
        chinese1: '沿着第二大街走，然后你能看到它在右边。',
        liju2: 'The IT legend introduced the avenue to success to us.',
        chinese2: '这位IT的传奇人物向我们传授了成功之道。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '255',
        word: 'average ',
        ciyi: ' n. 平均；平均数 a. 平均的；普通的vt.均分，平 ',
        kaodian: '',
        liju1: ' Take the average of those ratios and multiply by a hundred. ',
        chinese1: '取那些比例的平均数再乘以100。',
        liju2: 'Average grain output per mu has reached 1300 kilograms.',
        chinese2: '平均亩产量达到了1300千克。',
        liju3: 'We averaged 42 miles per hour.',
        chinese3: '我们平均时速为42英里。'
      },
      {
        id: '256',
        word: 'avert ',
        ciyi: '  vt. 避免，防止；转移',
        kaodian: '',
        liju1: ' But these measures may not be sufficient to avert disaster.   ',
        chinese1: '但这些措施并不足以避免灾难的发生。',
        liju2: 'He avoids any eye contact, quickly averting his gaze when anyone approaches.',
        chinese2: '他避免任何目光接触，任何人接近他时，他都会迅速转移视线。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '257',
        word: ' aviation',
        ciyi: '  n. 航空；飞行',
        kaodian: '',
        liju1: ' So he thought of his cousin who worked in the Aviation Council.   ',
        chinese1: '于是他想到他那在航空理事会工作的堂弟。 ',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '258',
        word: 'avoid  ',
        ciyi: ' vt.避免；回避，躲避 ',
        kaodian: '',
        liju1: 'She sheered off in time to avoid an accident.    ',
        chinese1: '轮船及时转向，避免了一次事故。',
        liju2: 'They were tacking about to avoid the enemy guns.  ',
        chinese2: '他们来回转向以避开敌人的炮火。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '259',
        word: ' await ',
        ciyi: ' vt. 等候，等待；期待',
        kaodian: '',
        liju1: ' We await your command.   ',
        chinese1: '我们等待你的口令。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },
      {
        id: '260',
        word: 'award ',
        ciyi: ' vt. 授予；判定n. 奖品；判决 ',
        kaodian: '',
        liju1: ' He begrudged his friend the award.   ',
        chinese1: '他羡慕他的朋友获奖。',
        liju2: 'The degree of B.A. was awarded to her.',
        chinese2: '她被授予文学士学位。',
        liju3: 'The plaintiff was awarded damages.',
        chinese3: '原告被判给损失赔偿费。'
      },
      {
        id: '261',
        word: ' aware',
        ciyi: ' a. 意识到的；知道的；有…方面知识的 ',
        kaodian: '',
        liju1: ' Yon can only humbug those who are not aware of your tricks.   ',
        chinese1: '你只能欺骗还不清楚你的伎俩的那些人。',
        liju2: 'Smokers are well aware of the dangers to their own health.',
        chinese2: '吸烟者们都很清楚吸烟对其自身健康的那些危害。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '262',
        word: ' awe ',
        ciyi: 'vt. 使敬畏；使畏怯n. 敬畏，惊惧 ',
        kaodian: '',
        liju1: 'She gazed in awe at the great stones.  ',
        chinese1: '她敬畏地凝视着那些巨石。',
        liju2: 'I was awed by her solemn words.',
        chinese2: '她那番严肃的话使我敬畏。',
        liju3: '',
        chinese3: ''
      },
      {
        id: '263',
        word: 'awful  ',
        ciyi: 'a. 威严的，可怕的；极度的，极坏的，糟糕的 ',
        kaodian: '',
        liju1: ' They sat there horrified as the television broadcasted the awful news.   ',
        chinese1: '当电视里高声播发那个可怕的消息时他们坐在那里感到恐惧。',
        liju2: 'Her injuries were massive. It was awful.',
        chinese2: '她的伤势很严重，糟透了。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '264',
        word: 'awkward ',
        ciyi: 'ad.笨拙的；尴尬的',
        kaodian: '',
        liju1: 'The president laughed off the awkward situation. ',
        chinese1: '总统对尴尬的处境一笑置之。',
        liju2: 'Amy made an awkward gesture with her hands.  ',
        chinese2: '艾米用双手做了一个笨拙的手势。',
        liju3: 'It was small but heavy enough to make it awkward to carry.',
        chinese3: '它虽然小，却沉重得不便携带。'
      },

      {
        id: '265',
        word: 'ax(e)',
        ciyi: 'vt. 削减；用斧修整n. 斧头',
        kaodian: '',
        liju1: 'The edge of this axe has turned.  ',
        chinese1: '这把斧子卷了刃了。',
        liju2: 'The main office axed those in the field who didn’t meet their quota.',
        chinese2: '主要办公室裁减那些在工作中完不成定额的人。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '266',
        word: 'axis',
        ciyi: 'n. 轴；轴线；轴心国',
        kaodian: '',
        liju1: ' The Earth revolves around its axis.',
        chinese1: '地球绕地轴自转。 ',
        liju2: 'The horizontal axis represents time and shows the lifecycle aspects of the process.  ',
        chinese2: '水平轴代表时间并显示了过程生命周期的各个方面。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '267',
        word: 'bachelor ',
        ciyi: 'n. 学士（学位）；单身汉',
        kaodian: '',
        liju1: 'Distrusting women, he remained a bachelor all his life.',
        chinese1: '由于不信任女人，他做了一辈子单身汉。',
        liju2: 'Both my wife and I have college bachelor degrees.  ',
        chinese2: '我们夫妇二人都持有大学学士学位。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '268',
        word: 'background',
        ciyi: ' n. 背景；经历 vt. 作…的背景 ',
        kaodian: '',
        liju1: 'We do not differentiate between our workers on the basis of their background or ethnic origin.  ',
        chinese1: '我们不以工人们的背景或种族来源区别对待他们。',
        liju2: "'The passenger's idle thoughts were backgrounded by the drone of the plane's engines.'",
        chinese2: '那位乘客的遐想似乎是由飞机发动机的嗡嗡声作伴奏。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '269',
        word: 'backward',
        ciyi: 'a. 向后的，落后的；迟钝的ad. 向后地；相反地',
        kaodian: '',
        liju1: 'He cut the ball so that it bounded almost backward. ',
        chinese1: '他斜削这个球，使其几乎向后弹起。',
        liju2: 'The backward place has changed into an industrial centre.  ',
        chinese2: '那落后的地方变成了工业中心。',
        liju3: 'My son was backward in learning to walk.',
        chinese3: '我儿子学步较晚。'
      },

      {
        id: '270',
        word: 'bacon ',
        ciyi: 'n. 咸肉；腌肉；熏猪肉',
        kaodian: '',
        liju1: ' He had bacon and eggs for breakfast.  ',
        chinese1: '他早餐吃了咸肉和鸡蛋。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '271',
        word: 'bacterium',
        ciyi: 'n. 细菌；杆菌属',
        kaodian: '',
        liju1: 'It was so large and complex, so they initially assumed it was a bacterium.  ',
        chinese1: '由于它们是如此庞大和复杂，最初被认为是一种细菌。',
        liju2: '',
        chinese2: ''
      },

      {
        id: '272',
        word: 'badge',
        ciyi: 'n. 徽章',
        kaodian: '',
        liju1: 'The boy pins a badge on his jacket.  ',
        chinese1: '这个男孩子把一枚徽章别在外套上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '273',
        word: 'badminton ',
        ciyi: ' n. 羽毛球',
        kaodian: '',
        liju1: 'I like playing basketball and badminton. ',
        chinese1: '我喜欢的篮球和羽毛球。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '274',
        word: 'baggage',
        ciyi: ' n. 行李',
        kaodian: '',
        liju1: 'They ticketed my baggage at the airport.  ',
        chinese1: '在机场，他们给我的行李贴了行李条。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '275',
        word: 'bail',
        ciyi: 'n. 保释vt. 保释，帮助某人脱离困境',
        kaodian: '',
        liju1: 'Her family paid $500 to bail her out.  ',
        chinese1: '她家里付了500美元把她保释出来。',
        liju2: 'The bank helped to bail out the struggling company.  ',
        chinese2: '银行搭救了那家陷于困境的公司。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '276',
        word: 'bait',
        ciyi: 'vt. 引诱；在…中放诱饵n. 饵；诱饵',
        kaodian: '',
        liju1: ' The hungry rat ravened down the poison bait.  ',
        chinese1: '饥饿的老鼠一口吞下毒饵。',
        liju2: 'He baited his hook with pie.',
        chinese2: '他把馅饼放在钓钩上作饵。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '277',
        word: 'balance',
        ciyi: 'n. 天平；平衡；余额vt. 称，使平衡 ',
        kaodian: '',
        liju1: 'The chemist weighed the drug with the balance.',
        chinese1: '药剂师用天平称了药物的重量。',
        liju2: 'In his design the beam cantilevers out too far for balance.  ',
        chinese2: '在他的设计中，悬臂梁伸出太多，不能平衡。',
        liju3: 'Demand and supply can be balanced.',
        chinese3: '供求关系可加以协调。',
        liju4: 'I balanced the meat that I just bought.',
        chinese4: '我掂量了一下我刚买的肉。'
      },

      {
        id: '278',
        word: 'balcony',
        ciyi: ' n. 阳台；戏院楼厅',
        kaodian: '',
        liju1: "'Our garden is overlooked from the neighbour's balcony.  '",
        chinese1: '从邻居的阳台居高临下可以俯视我家的花园。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '279',
        word: 'balcony ',
        ciyi: ' n. 阳台；戏院楼厅',
        kaodian: '',
        liju1: "'Our garden is overlooked from the neighbour's balcony.'",
        chinese1: '从邻居的阳台居高临下可以俯视我家的花园。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '280',
        word: 'bald',
        ciyi: 'a. 秃顶的；光秃的；单调的；vi. 变秃',
        kaodian: '',
        liju1: "' The man's bald head was beaded with sweat.'",
        chinese1: '这位男子的秃头上满是汗珠。',
        liju2: 'There is a whole world of anxiety and disillusion behind those bald employment figures.  ',
        chinese2: '在那些光秃秃的就业数字背后是整个世界的焦虑和幻灭。',
        liju3: "'He's getting bald.'",
        chinese3: '他的头开始秃了。'
      },

      {
        id: '281',
        word: 'balle',
        ciyi: ' n. 芭蕾舞，芭蕾舞剧',
        kaodian: '',
        liju1: 'She danced the principal role in the ballet.  ',
        chinese1: '她在这个芭蕾舞中担任主角。',
        liju2: 'The performance will include the premiere of three new ballets.',
        chinese2: '这次演出将包括3部新芭蕾舞剧的首演。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '282',
        word: 'balloon ',
        ciyi: ' n. 气球',
        kaodian: '',
        liju1: ' His overcoat was swollen like a full balloon by the wind.  ',
        chinese1: '他的大衣被风吹得鼓成了一个圆气球的样子。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '283',
        word: 'ballot',
        ciyi: 'n. 投票表决（选举），无记名投票；选票 vt.（使）投票表决，（使）无记名投票',
        kaodian: '',
        liju1: 'The result of the ballot will not be known for two weeks.',
        chinese1: '本次无记名投票的结果将在两周后才会揭晓。',
        liju2: 'Election boards will count the ballots by hand.',
        chinese2: '选举委员会将手工清点选票。',
        liju3: 'The party members were balloted on the resolution.',
        chinese3: '党员们就该项决议进行了无记名投票表决。'
      },

      {
        id: '284',
        word: 'ban',
        ciyi: 'vt. 禁止，取缔n. 禁令，禁忌',
        kaodian: '',
        liju1: 'The film came under the ban of censor.  ',
        chinese1: '该影片被审查官员禁止上映。',
        liju2: 'The general lifted the ban on political parties.',
        chinese2: '将军解除了对政党的官方禁令。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '285',
        word: 'band',
        ciyi: 'n. 条，带；波段；乐队；一群，一伙vi. 用带绑扎',
        kaodian: '',
        liju1: ' Almost all hospitals use a wrist-band of some kind with your name and details on it.',
        chinese1: '几乎所有医院都使用某种腕带，上面有你的名字和详细信息。',
        liju2: 'For an initial service, a 10 megahertz-wide band of frequencies will be needed.',
        chinese2: '初期制动将需要10兆赫兹宽的频带。',
        liju3: 'A professional player often sits in with our band.  ',
        chinese3: '一位专业演奏家常来参加我们乐队的演出。',
        liju4: 'A scruffy band of horsemen are crossing the desert.',
        chinese4: '一群衣衫褴褛的赶马人正穿过沙漠。',
        liju5: 'She banded her hair.',
        chinese5: '她把头发束起来了。'
      },

      {
        id: '286',
        word: 'bandage',
        ciyi: ' n. 绷带vt. 用绷带包扎',
        kaodian: '',
        liju1: ' His head has been hung over with thick bandage except two eyes.  ',
        chinese1: '除了两只眼睛，他的头裹上了厚厚的绷带。',
        liju2: 'Apply a dressing to the wound and bandage it.',
        chinese2: '在伤口上敷上敷料并用绷带包扎起来。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '287',
        word: 'bang',
        ciyi: ' n. 重击；砰的一声 vt.重击；发出砰的一声；猛撞到某人（某物）',
        kaodian: '',
        liju1: 'I heard four or five loud bangs.',
        chinese1: '我听到四五声巨响。',
        liju2: 'I got an awful bang on the head in the darkness.',
        chinese2: '黑暗中，我的头被猛击了一下。',
        liju3: 'She banged the door shut.',
        chinese3: '她砰地把门关上了。',
        liju4: "'I didn't mean to bang into you.'",
        chinese4: '我不是故意撞你的。'
      },

      {
        id: '288',
        word: 'bankrupt',
        ciyi: 'a. 破产的vt. 使破产',
        kaodian: '',
        liju1: 'We must recover our losses immediately, or we shall be bankrupt.  ',
        chinese1: '我们必须立即弥补上我们的损失，否则我们将破产。',
        liju2: 'They thought we would to bankrupt, but we managed.  ',
        chinese2: '他们以为我们会破产，但我们设法支撑了下来。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '289',
        word: 'banner',
        ciyi: ' n. 旗帜，横幅 ',
        kaodian: '',
        liju1: ' We should rally under the banner of socialism.  ',
        chinese1: '我们应当在社会主义的旗帜下团结起来。',
        liju2: 'A large crowd of students followed the coffin, carrying banners and shouting slogans denouncing the government.',
        chinese2: '一大群学生跟在灵柩的后面，举着横幅，高喊口号谴责政府',
        liju3: '',
        chinese3: ''
      },

      {
        id: '290',
        word: 'banquet ',
        ciyi: ' n. 宴会，盛宴 ',
        kaodian: '',
        liju1: 'She ushered at the banquet.  ',
        chinese1: '她在宴会上作招待员。',
        liju2: 'They commemorated their victories with a grand banquet. ',
        chinese2: '他们举行盛大宴会庆祝胜利。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '291',
        word: 'bar',
        ciyi: ' n. 条，棒；酒吧；障碍物vt.闩上，禁止；阻拦',
        kaodian: '',
        liju1: 'He moseyed across to the bar.  ',
        chinese1: '他闲荡着走向对面的酒吧。',
        liju2: 'One of the fundamental bars to communication is the lack of a universally spoken, common language.',
        chinese2: '沟通的根本障碍之一就是缺乏一种通用的共同语言。',
        liju3: 'Amnesty workers have been barred from the country since 1982.',
        chinese3: '自1982年以来特赦的工人被禁止进入该国。'
      },

      {
        id: '292',
        word: 'barbecue',
        ciyi: ' n. 金属烤架，烤肉vt. 烧烤野餐 ',
        kaodian: '',
        liju1: 'But the fact is we have no barbecue with us.  ',
        chinese1: '但是我们没有带烧烤的工具啊。',
        liju2: "'If the weather's fine, we'll barbecue in the ranch.  '",
        chinese2: '如果天气好的话，我们将在农场举行烤肉野餐。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '293',
        word: 'barber ',
        ciyi: ' vt. 为…理发；修整n. 理发师',
        kaodian: '',
        liju1: 'His father apprenticed him to a barber.  ',
        chinese1: '他父亲送他去当理发师的徒弟。',
        liju2: 'You need to barber that beard of yours.',
        chinese2: '你需要刮你那胡须。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '294',
        word: 'bare ',
        ciyi: ' a. 空的，赤裸的；稀少的，仅有的；vt. 暴露，露出',
        kaodian: '',
        liju1: 'The top of the hill was bare. ',
        chinese1: '小山顶上光秃秃的。',
        liju2: 'Certain chemicals will corrode if left on bare metal.  ',
        chinese2: '有些化学药品如留在裸露的金属上会起腐蚀作用。',
        liju3: 'Harry can only earn a bare subsistence wage.',
        chinese3: '哈里挣的工资勉强能够养家糊口。',
        liju4: 'The author bared his heart to the world.',
        chinese4: '作家向全世界敞开他的心扉。'
      },

      {
        id: '295',
        word: 'barely',
        ciyi: 'ad. 仅仅，勉强；几乎不；赤裸地；贫乏地',
        kaodian: '',
        liju1: 'The ruined economy is barely breathing.  ',
        chinese1: '遭受严重损害的经济几乎不能生存。',
        liju2: 'You barely got the rest of us here in time.  ',
        chinese2: '你仅仅能够及时把我们其他人带到这里。',
        liju3: 'The facts were presented barely without any comments.',
        chinese3: '这些事实未经任何加工，赤裸裸地摆在我们面前。'
      },

      {
        id: '296',
        word: 'bargain ',
        ciyi: 'n. 交易，契约；便宜货 v. 议价，成交',
        kaodian: '',
        liju1: ' At this price the wine is a bargain.',
        chinese1: '   以这个价格，这葡萄酒算是物美价廉了。',
        liju2: 'The employees and the employer reached a bargain.',
        chinese2: '  雇员工和老板达成了一项协议。',
        liju3: '   They lost the bargain.  ',
        chinese3: '他们没能成交。',
        liju4: 'We refuse to bargain over the price.',
        chinese4: '我们拒绝在价格上讨价还价。'
      },

      {
        id: '297',
        word: 'bark',
        ciyi: 'n. 树皮；吠声vt. 吠叫；咆哮 ',
        kaodian: '',
        liju1: ' He peeled the bark off that tree.  ',
        chinese1: '他把那棵树的皮剥掉了。',
        liju2: 'The Doberman let out a string of roaring barks.',
        chinese2: '那条杜宾犬发出一连串的吼叫声。',
        liju3: 'The dog barks at strangers.',
        chinese3: ' 狗一见陌生人就叫。',
        liju4: ' The captain barked a command at the troops.',
        chinese4: '上尉吼着对士兵下命令。'
      },

      {
        id: '298',
        word: 'barn',
        ciyi: 'n. 谷仓；畜棚 ',
        kaodian: '',
        liju1: 'The barn was heaped with grain.  ',
        chinese1: '谷仓里堆满了粮食。',
        liju2: 'The cowboys got the cows in the barn easily.',
        chinese2: '牛仔们轻松地将牛群赶进了畜棚。',
        liju3: ' ',
        chinese3: ''
      },

      {
        id: '299',
        word: 'barrel',
        ciyi: 'vt. 把……装入桶内n. 桶；枪管，炮管',
        kaodian: '',
        liju1: ' They planned to barrel the beer next Monday.',
        chinese1: '  他们打算下星期一把啤酒装桶。',
        liju2: ' The barrel began to spring a leak.',
        chinese2: '那个木桶开始破裂泄漏了。',
        liju3: "'He pushed the barrel of the gun into the other man's open mouth.'",
        chinese3: '他把枪管插入另一个人张开着的嘴里。'
      },

      {
        id: '300',
        word: 'barren',
        ciyi: 'a. 贫瘠的；不生育的；无益的；没有结果的，无意义的；n. 荒地',
        kaodian: '',
        liju1: 'He wants to use the water to irrigate barren desert land.',
        chinese1: '他想用该水来灌溉贫瘠的沙漠土地。',
        liju2: ' The lady got barren after the car accident a year ago.',
        chinese2: ' 那位女士在一年前的那起车祸后失去了生育能力。',
        liju3: ' I always recall the barren love.',
        chinese3: ' 我经常回忆起那段没有结果的爱情。'
      },

      {
        id: '301',
        word: 'barrier',
        ciyi: 'n. 障碍物，屏障；界线',
        kaodian: '',
        liju1: "'There is no reason why love shouldn't cross the age barrier.'",
        chinese1: '爱情没有理由不应跨越年龄障碍。',
        liju2: 'A severe storm destroyed a natural barrier between the house and the lake.',
        chinese2: '一场猛烈的暴风雨摧毁了房屋和湖泊之间的天然屏障。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '302',
        word: 'baseball',
        ciyi: ' n. 棒球；棒球运动',
        kaodian: '',
        liju1: 'Dick fell for baseball when he was a little boy.  ',
        chinese1: '当迪克还是个小孩时，他就迷恋上了棒球运动。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '303',
        word: 'basemen',
        ciyi: 'n. 地下室；地窖；建筑物的底部',
        kaodian: '',
        liju1: 'They transformed the basement into a reading room.  ',
        chinese1: ' 他们把地下室改建成阅览室。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '304',
        word: 'basis ',
        ciyi: 'n. 基础；主要成分；根据',
        kaodian: '',
        liju1: 'We wanted to bottom our plan on a solid basis.  ',
        chinese1: '我们想把我们的计划建立在牢固的基础上。',
        liju2: 'He quarried in various books for scientific basis.  ',
        chinese2: '他从各种书籍中搜寻科学根据。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '305',
        word: 'bat [',
        ciyi: ' n. 蝙蝠；球棒；球拍 ',
        kaodian: '',
        liju1: ' His cane answered for a baseball bat.  ',
        chinese1: '他的手杖可代用棒球棒。',
        liju2: 'Having been suggested by a bat, people invented sonar.  ',
        chinese2: '受到蝙蝠的启发，人们发明了声呐。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '306',
        word: 'batch ',
        ciyi: ' n. 一批；一炉；一组，一群',
        kaodian: '',
        liju1: ' She brought a large batch of newspaper clippings.',
        chinese1: '她带来一大批剪报。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '307',
        word: 'battery',
        ciyi: 'n.电池，蓄电池；炮兵连；排炮',
        kaodian: '',
        liju1: 'The battery in my car ran down this evening.  ',
        chinese1: '我的汽车里的蓄电池今天晚上用完了。',
        liju2: 'This new type of warship is armed with an advanced battery.',
        chinese2: '这种新型军舰配备了先进的排炮。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '308',
        word: 'bay',
        ciyi: ' n. 海湾；狗吠声vt. 向…吠叫',
        kaodian: '',
        liju1: 'The ships in the bay present a beautiful sight.  ',
        chinese1: ' 海湾内的船舶呈现一派美丽的景象。',
        liju2: '  A dog suddenly howled, baying at the moon.',
        chinese2: '一只狗忽然嚎叫起来，对月长嗥。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '309',
        word: 'beam',
        ciyi: ' n. 横梁；光线束vi. 照射，发光；堆满笑容',
        kaodian: '',
        liju1: 'A beam of light slices through the darkness/',
        chinese1: '一道光束划破了黑暗。',
        liju2: 'The ceilings are supported by oak beams.',
        chinese2: '天花板由橡木横梁支撑着。',
        liju3: 'The sun beamed throught the dreary clouds.',
        chinese3: '太阳透过阴云照耀着。',
        liju4: 'His entire face beamed with happiness.',
        chinese4: '他高兴得满脸堆笑。'
      },

      {
        id: '310',
        word: 'bean ',
        ciyi: ' n. 豆；菜豆；蚕豆',
        kaodian: '',
        liju1: ' If low lands must be used for the bean crop, they should be ridged.  ',
        chinese1: '如果低地必须用于种植豆类作物，就必须把地整成交替的垄和沟。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '311',
        word: 'beard',
        ciyi: 'vt. 公然反对；抓…的胡须n. 胡须；颌毛',
        kaodian: '',
        liju1: ' It took courage for her to beard the board of directors.',
        chinese1: '她要公然反对董事会还需要勇气。',
        liju2: ' Tom bearded the lion in its den.',
        chinese2: '汤姆在狮穴捋狮须。',
        liju4: "'His beard straggles because he hasn't shaven for a week.  '",
        chinese4: '他的胡须蓬乱，他有一个星期没刮胡子了。'
      },

      {
        id: '312',
        word: 'beast',
        ciyi: '] n. 野兽；畜生，凶残的人；举止粗鲁的人',
        kaodian: '',
        liju1: ' The young leopard separated from its mother would be eaten by other beast. ',
        chinese1: '与母亲离散的幼豹可能被其他的野兽吃掉。',
        liju2: ' When Tom is drunk, he is a beast.',
        chinese2: ' 汤姆喝醉后行为很粗鲁。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '313',
        word: 'behalf',
        ciyi: ' n. 代表；利益',
        kaodian: '',
        liju1: 'On behalf of my Government I have the honour to make to you the following communications.  ',
        chinese1: '我荣幸地代表我国政府向您转达如下内容。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '314',
        word: 'behave',
        ciyi: 'vi. 表现，举止；（机器等）运转 ',
        kaodian: '',
        liju1: "'Your mother will blow you up if you don't behave better. '",
        chinese1: '如果你不规矩一些，你母亲会责骂你的。',
        liju2: 'The ship behaves well.',
        chinese2: '这艘船航行得很好。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '315',
        word: 'behavio(u)r',
        ciyi: 'n. 行为，举止；（机器的）运行状况',
        kaodian: '',
        liju1: ' The students perceived that his behavior had changed.  ',
        chinese1: ' 同学们发觉他的行为有些变化。',
        liju2: 'All the experts were satisfied with the machine’s behavior.',
        chinese2: ' 所有专家都很满意着台机器的运转情况。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '316',
        word: 'being ',
        ciyi: ' n. 存在，生存；生物；本质 ',
        kaodian: '',
        liju1: ' People expect a horse to perform like a car, with no thought for its feelings as a living being.',
        chinese1: ' 人们期望一匹马能表现得像一辆车那样，却没考虑到它作为一个活的生物的感受。',
        liju2: 'Cotton and cloth are being rationed out now.  ',
        chinese2: ' 棉花和棉布现在正实行定量配给。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '317',
        word: 'belly',
        ciyi: 'n. 腹部',
        kaodian: '',
        liju1: 'She laid her hands on her swollen belly.',
        chinese1: '她把手放在隆起的肚子上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '318',
        word: 'beloved',
        ciyi: 'a. 心爱的；挚爱的n. 心爱的人；爱人',
        kaodian: '',
        liju1: ' The old man mothered his beloved pigeons.  ',
        chinese1: '这老人像妈妈带孩子一样饲养他心爱的鸽子。',
        liju2: 'He lost his beloved last year.',
        chinese2: '他去年痛失爱人。',
        liju3: 'The whole nation mourned the death of the beloved premier.  ',
        chinese3: '全国哀悼敬爱的总理的逝世。'
      },

      {
        id: '319',
        word: 'beneath ',
        ciyi: 'prep. 在…之下ad. 在下方',
        kaodian: '',
        liju1: 'He wore a woolen vest beneath his shirt.',
        chinese1: '他在衬衫里面穿了件毛背心。',
        liju2: ' On a shelf beneath he spotted a photo album.',
        chinese2: ' 在下方的书架上他发现了一本相册。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '320',
        word: 'beneficial ',
        ciyi: ' a. 有益的，有利的',
        kaodian: '',
        liju1: ' Something that makes a beneficial change is what turns me on.  ',
        chinese1: '能够产生有益的改变的事情是我要去做的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '321',
        word: 'benefit',
        ciyi: ' n. 利益，好处vt. 有益于，对…有益vi. 受益，得益',
        kaodian: '',
        liju1: 'In any case, we could halve the benefit.  ',
        chinese1: '在任何情况下我们都将利益均分。',
        liju2: '  The new hospital will benefit the entire community.  ',
        chinese2: '新医院将有益于整个社区。',
        liju3: '  Both sides have benefited from the talks.',
        chinese3: '双方都从会谈中获益。'
      },

      {
        id: '322',
        word: 'benign',
        ciyi: 'a. 良性的；和蔼的，亲切的 ',
        kaodian: '',
        liju1: "' It wasn't cancer, only a benign tumour.'",
        chinese1: '这不是癌，只是良性肿瘤。',
        liju2: 'They are normally a more benign audience.',
        chinese2: '他们通常是更为和善的观众。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '323',
        word: 'besides',
        ciyi: ' ad. 此外；而且prep. 除…之外',
        kaodian: '',
        liju1: "'There's no one here besides Tom and me.'",
        chinese1: '这里除了汤姆和我，没有别人。',
        liju2: '  He gave me a book, a pen and some money besides.  ',
        chinese2: '他给了我一本书，一支钢笔，此外还给了我一些钱。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '324',
        word: 'betray',
        ciyi: 'vt. 背叛；出卖；泄露（秘密），流露',
        kaodian: '',
        liju1: 'He betrayed his party and country.',
        chinese1: '他背叛了他的党和国家。',
        liju2: ' She betrayed state secrets to enemy agents.',
        chinese2: '她向敌特泄露了国家机密。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '325',
        word: 'beverage',
        ciyi: 'n. 饮料 ',
        kaodian: '',
        liju1: ' Beer is a beverage of the remotest time.  ',
        chinese1: '啤酒是一种最古老的饮料。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '326',
        word: 'beware ',
        ciyi: 'vi. 当心，小心vt. 注意，提防 ',
        kaodian: '',
        liju1: 'Beware her waspish wit.  ',
        chinese1: '提防她的刻毒的妙语。',
        liju2: 'Beware of being too impatient with others.',
        chinese2: '谨防对别人过于急噪。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '327',
        word: 'bewilder',
        ciyi: ' vt. 使迷惑，使难住，使不知所措 ',
        kaodian: '',
        liju1: ' The silence from Alex had hurt and bewildered her.',
        chinese1: '  亚历克斯的沉默令她伤心和迷惑不解。',
        liju2: ' Those shifting attitudes bewilder me.',
        chinese2: '那些犹豫不定的态度令我为难。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '328',
        word: 'bias ',
        ciyi: 'n. 偏见；偏袒vt. 使存偏见，偏袒',
        kaodian: '',
        liju1: "'We mustn't allow it to bias our teaching.'",
        chinese1: ' 我们不允许它使我们的教学产生偏见。',
        liju2: ' Knowing her political bias we discounted most of her story.  ',
        chinese2: '  由于了解她的政治偏见，我们对她的大部分报道都持怀疑态度。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '329',
        word: 'biased',
        ciyi: 'a. 有偏见的；（统计实验中）结果偏倚的',
        kaodian: '',
        liju1: 'My ignorance biased me against popular music.  ',
        chinese1: '我由于无知而对流行音乐抱有偏见。',
        liju2: 'The judgement is often biased by interest.  ',
        chinese2: '判断往往因利害关系而有偏差。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '330',
        word: 'Bible',
        ciyi: 'n. 圣经',
        kaodian: '',
        liju1: 'He can fluently study The Bible from Z to A.  ',
        chinese1: ' 他能倒背如流地背诵整部《圣经》。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '331',
        word: 'bibliography',
        ciyi: 'n. 参考书目；文献目录',
        kaodian: '',
        liju1: 'At the end of this chapter there is a select bibliography of useful books.',
        chinese1: '本章末尾附着有用书籍的精选书目。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '332',
        word: 'bid ',
        ciyi: 'vt. 祝愿；吩咐vi. 投标；吩咐n. 出价，投标',
        kaodian: '',
        liju1: ' I bid you a good day.',
        chinese1: '我祝愿你度过美好的一天。',
        liju2: 'Do as I bid you.  ',
        chinese2: '照我吩咐你的去做。',
        liju3: 'No other buyers have bid higher than this price.  ',
        chinese3: '没有别的买主的出价高于此价。',
        liju3: 'She wanted to bid for it.',
        chinese3: '她想出价买下它。'
      },

      {
        id: '333',
        word: 'bin',
        ciyi: 'n. 大箱子，容器 ',
        kaodian: '',
        liju1: "' There's certainly something scary in that bin. '",
        chinese1: '那个箱子里一定有什么可怕的东西。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '334',
        word: 'bind ',
        ciyi: 'vt. 捆；包扎，装订；约束 ',
        kaodian: '',
        liju1: "'All pharmacists are bound by the society's rules of confidentiality.'",
        chinese1: '所有药剂师都受到保密性这一社会规则的约束。',
        liju2: 'Bind the ends of the cord together with thread.',
        chinese2: '把细绳的两端用线系在一起。',
        liju3: 'Each volume is bound in bright-coloured cloth.',
        chinese3: '每一册都用颜色鲜亮的布料装订。'
      },

      {
        id: '335',
        word: 'biography',
        ciyi: 'n. 传记',
        kaodian: '',
        liju1: ' This book is a carefully documented biography. ',
        chinese1: '这是一本文献佐证翔实可靠的传记。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '336',
        word: 'biology ',
        ciyi: ' n. 生物，生物学',
        kaodian: '',
        liju1: 'I couldn’t touch the first question in the biology paper.  ',
        chinese1: '我无法解答生物学试卷上的第一道题。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '337',
        word: 'bizarre',
        ciyi: ' a. 奇异的（指态度，容貌，款式等），怪诞的',
        kaodian: '',
        liju1: 'The building was of bizarre construction.  ',
        chinese1: '这建筑构造奇异。',
        liju2: "'The game was also notable for the bizarre behaviour of the team's manager.'",
        chinese2: '这场比赛另一值得注意的地方是该队经理人异乎寻常的表现。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '338',
        word: 'blade',
        ciyi: ' n. 叶片；刀片，刀锋 ',
        kaodian: '',
        liju1: ' The propeller blade has been mounted.  ',
        chinese1: '推进器的叶片已经安装好了。',
        liju2: 'Many of them will have sharp blades.',
        chinese2: '他们很多都会有锋利的刃。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '339',
        word: 'blank',
        ciyi: ' a. 空白的；失色的，无表情的 n. 空白；空白表格',
        kaodian: '',
        liju1: 'He tore a blank page from his notebook.',
        chinese1: '  他从笔记本上撕下一页白纸。',
        liju2: "'Abbot looked blank. I don't quite follow, sir.'",
        chinese2: ' 阿博特一脸茫然，“我不太明白，先生。”',
        liju3: "' I'm sorry, but my mind is a blank.'",
        chinese3: '很抱歉，可是我脑子里一片空白。',
        liju4: 'Please fill in this blank before applying for the loan.',
        chinese4: '申请贷款前，请先填一下这个表格。'
      },

      {
        id: '340',
        word: 'blanket',
        ciyi: 'n. 毛毯，毯子 vt. 覆盖，掩盖 ',
        kaodian: '',
        liju1: 'She huddled herself in the blanket.  ',
        chinese1: '她用毯子紧紧裹住自己。',
        liju2: 'More than a foot of snow blanketed parts of Michigan.',
        chinese2: '一英尺多厚的白雪覆盖了密歇根州的部分地区。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '341',
        word: 'blas',
        ciyi: 'n. 爆炸冲击波；一阵（风），一股（气流）；管乐声或汽笛声vt. 爆炸；损害',
        kaodian: '',
        liju1: 'The huge blast tore the car into pieces.',
        chinese1: ' 巨大的爆炸冲击波把汽车炸得粉碎。',
        liju2: ' The buzzer suddenly responded in a long blast of sound.',
        chinese2: '蜂鸣器突然以一声长长的鸣响做出回应。',
        liju3: 'Blasts of cold air swept down from the mountains.',
        chinese3: '阵阵强冷气流从山上席卷下来。',
        liju4: ' The explosion which followed blasted out the wall of her apartment.',
        chinese4: '随后的爆炸炸开了她房间的那面墙。'
      },

      {
        id: '342',
        word: 'blaze',
        ciyi: 'n. 火焰，大火；光辉vi. 燃烧；照耀，发光 ',
        kaodian: '',
        liju1: ' Some 4,000 firefighters are battling the blaze.',
        chinese1: ' 约有四千名消防人员正在与大火搏斗。',
        liju2: ' I wanted the front garden to be a blaze of colour.',
        chinese2: ' 我想把前花园装点得五彩缤纷。',
        liju3: ' The log fire was blazing merrily.',
        chinese3: '篝火正在欢快地熊熊燃烧着。',
        liju4: ' The sun was blazing down on us that afternoon.',
        chinese4: ' 那天下午阳光照耀在我们身上。'
      },

      {
        id: '343',
        word: 'bleak ',
        ciyi: ' a. 阴冷的，荒凉的；无希望的，冷酷的',
        kaodian: '',
        liju1: 'The bleak ground pullulated with jackrabbits.  ',
        chinese1: '荒凉的土地上到处是长耳大野兔。',
        liju2: 'The weather can be quite bleak on the coast.',
        chinese2: '沿海一带的天气可能会十分阴冷。',
        liju3: 'His face was bleak.',
        chinese3: '他面容沮丧。'
      },

      {
        id: '344',
        word: 'bleed',
        ciyi: ' vi. 流血，出血；悲痛 ',
        kaodian: '',
        liju1: 'His head had struck the sink and was bleeding.',
        chinese1: '他的头撞到了洗脸池上，正在流血。',
        liju2: 'A nation bleeds for its dead leader.',
        chinese2: '举国为逝世的领袖而悲痛。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '345',
        word: 'blend ',
        ciyi: ' vt. 使混合，使混杂n. 混合；掺合物',
        kaodian: '',
        liju1: 'We blend that tea by mixing chamomile with pekoe.  ',
        chinese1: '我们用甘菊和香红茶混合调制成那种茶。',
        liju2: 'The public areas offer a subtle blend of traditional charm with modern amenities.',
        chinese2: '这些公共场所表现出对传统魅力与现代设施的巧妙结合。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '346',
        word: 'block',
        ciyi: 'n. 块；街区；障碍物vt.阻止；阻塞；封锁，限制',
        kaodian: '',
        liju1: 'He rough-hewed a statue out of a block of jade rapidly but then polished it slowly over a long period.  ',
        chinese1: '他用一块玉石很快地凿出塑像的毛坯，然后花很长一段时间慢慢加以修饰。',
        liju2: 'He walked around the block three times.',
        chinese2: '他绕着这个街区走了3圈。',
        liju3: 'The plumber found a block in the pipe.',
        chinese3: '管道工在管子里发现了堵塞物。',
        liju4: 'For years the country has tried to block imports of various cheap foreign products.',
        chinese4: '多年以来，这个国家曾试图阻止多种外国廉价产品的进口。'
      },

      {
        id: '347',
        word: 'blog',
        ciyi: ' n. 博客；网络日志',
        kaodian: '',
        liju1: 'I promised not to post them on my blog.  ',
        chinese1: '我保证过不把它张贴到我的博客。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '348',
        word: 'bloody',
        ciyi: ' a. 血腥的；流血的vt. 使流血ad. 很',
        kaodian: '',
        liju1: 'These bloody lessons would sober most people down. ',
        chinese1: '这些血的教训总会令大多数人清醒了吧。',
        liju2: 'One of our children fell and bloodied his knee.',
        chinese2: '我们的一个孩子摔得膝盖流血了。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '349',
        word: 'bloom ',
        ciyi: ' n. 花（朵）；开花期，青春； vi. 开花 ',
        kaodian: '',
        liju1: ' The roses bloom every few days.   ',
        chinese1: '玫瑰每隔几天开花。',
        liju2: 'Roses in the park are in bloom.',
        chinese2: '公园里的玫瑰正值花期。',
        liju3: 'The sweet fragrance of the white blooms makes this climber a favourite.',
        chinese3: '白色花朵散发出的甜香使这株藤蔓成了宠儿。'
      },

      {
        id: '350',
        word: 'blossom ',
        ciyi: ' vi. 开花；发展，成长n. 花 ',
        kaodian: '',
        liju1: 'A blossom develops from a bud.   ',
        chinese1: '花朵是从蓓蕾孕育而开放的。',
        liju2: ' Rain begins to fall and peach trees blossom.',
        chinese2: ' 雨开始下，桃树就开花了。',
        liju3: '   What began as a local festival has blossomed into an international event.',
        chinese3: ' 开始时的一个地方节日已经发展成了一个国际盛会。'
      },

      {
        id: '351',
        word: ' blouse',
        ciyi: 'n. 宽松的上衣；女装衬衫',
        kaodian: '',
        liju1: ' Maybe you could dye that skirt to match your blouse.  ',
        chinese1: ' 也许你可以给那条裙子染色，使之与你的衬衫相配。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '352',
        word: ' blueprin',
        ciyi: 'n. 蓝图，方案 ',
        kaodian: '',
        liju1: "'The president will offer delegates his blueprint for the country's future. '",
        chinese1: '总统将向代表们提出他的国家未来蓝图。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '353',
        word: ' blunder',
        ciyi: ' vi. 跌跌撞撞地走；（因无知、粗心等）犯大错n. 大错',
        kaodian: '',
        liju1: ' You just committed the blunder to end all blunders. ',
        chinese1: '你正好犯了一个超过所有大错的最大错误。',
        liju2: 'She blundered when she added up the bill.',
        chinese2: '她把账款相加时弄错了。',
        liju3: 'The travelers blundered about the dark forest.',
        chinese3: '旅行者们在黑暗的森林中踉跄前行。'
      },

      {
        id: '354',
        word: ' blunt ',
        ciyi: 'a. 钝的，直率的vt. 使迟钝，使减弱',
        kaodian: '',
        liju1: ' The knife is blunt.',
        chinese1: '刀钝了。',
        liju2: 'She is blunt about her personal life. ',
        chinese2: '她对自己的私生活直言不讳。',
        liju3: 'Wine can blunt the senses.  ',
        chinese3: '酒会使感觉迟钝。',
        liju4: 'The constant repetition of violence has blunted the human response to it.',
        chinese4: '持续不断的暴力事件使人们对它的反应减弱了。'
      },

      {
        id: '355',
        word: 'blur  ',
        ciyi: 'vt. 涂污；（使）模糊 n. 污迹；模糊不清的事物',
        kaodian: '',
        liju1: 'The doors and windows were blurred with soot. ',
        chinese1: '那些门窗被煤烟弄得很脏。',
        liju2: 'The fog blurred the outline of the plane.',
        chinese2: '浓雾使飞机轮廓模糊不清。',
        liju3: 'The hot oil made a blur on the clothes.',
        chinese3: '热油在衣服上留下了污点。',
        liju4: 'The bired filed away, leaving a blur.',
        chinese4: '鸟儿们飞远了，看不清了。'
      },

      {
        id: '356',
        word: 'blush ',
        ciyi: ' vi. 脸红；感到惭愧n. 脸红；红色；羞愧',
        kaodian: '',
        liju1: ' His words raised a blush on her cheeks.   ',
        chinese1: '他的话使她脸红。',
        liju2: 'She blushed when they called her a heroine.',
        chinese2: '当他们叫她为巾帼英雄时她脸红了。',
        liju3: 'Your behaviour makes me blush for your poor wife.',
        chinese3: '你的行为使我为你可怜的妻子害臊。'
      },

      {
        id: '357',
        word: 'boast  ',
        ciyi: 'vt. 夸口说，夸耀n. 自夸，夸耀，大话',
        kaodian: '',
        liju1: 'He boasted that he was the best swimmer in the city. ',
        chinese1: 'He boasted that he was the best swimmer in the city.',
        liju2: "'It is the charity's proud boast that it has never yet turned anyone away.'",
        chinese2: '该慈善机构自吹自擂，声称从来没有拒绝过任何人。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '358',
        word: 'bold ',
        ciyi: ' a. 大胆的，英勇的；冒失的，冒昧的；黑体的，粗体的 ',
        kaodian: '',
        liju1: 'He was staggered by her bold act.   ',
        chinese1: '她的大胆举动令他目瞪口呆。',
        liju2: 'Could I be so bold as to ask you for a dance?',
        chinese2: '我可以冒昧的邀请您跳一支舞吗？',
        liju3: 'The title of the new was printed in bold type.',
        chinese3: '新闻的标题是用粗体印刷的。'
      },

      {
        id: '359',
        word: ' bolt',
        ciyi: ' n. 螺栓，插销；门闩vt. 囫囵吞下；（把门、窗等）闩上 ',
        kaodian: '',
        liju1: 'He tightened the bolt up slowly.   ',
        chinese1: '他慢慢拧紧螺钉。',
        liju2: "'Eat slowly and don't bolt your food.'",
        chinese2: '慢慢吃，别囫囵吞吃食物。',
        liju3: 'Bolt the door and windows before you leave.',
        chinese3: '离开前要把门、窗户闩上。'
      },

      {
        id: '360',
        word: 'bomb ',
        ciyi: 'vt. 轰炸，投弹于n. 炸弹',
        kaodian: '',
        liju1: 'Our windows were shocked into pieces by the explosion of a bomb.  ',
        chinese1: '我们的窗子被一颗炸弹的爆炸震得粉碎。',
        liju2: 'Air force jets bombed the airport.',
        chinese2: '空军喷气机轰炸了机场。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '361',
        word: 'bond ',
        ciyi: 'n. 债券，契约，公债；结合物，黏结剂',
        kaodian: '',
        liju1: 'The bond bears interest. ',
        chinese1: '这债券生息。',
        liju2: 'In graphite sheets, carbon atoms bond together in rings.',
        chinese2: '在石墨片中，碳原子以环状黏合在一起。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '362',
        word: 'bonus  ',
        ciyi: ' n. 奖金；红利；额外津贴',
        kaodian: '',
        liju1: 'The boss crawfished on the Christmas bonus.  ',
        chinese1: '老板取消了发圣诞节奖金的许诺。',
        liju2: 'The workers expected to share out a year-end bonus.  ',
        chinese2: '工人们期望年终分红。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '363',
        word: 'boom ',
        ciyi: 'vi. 急速发展；发隆隆声n. 繁荣；隆隆声',
        kaodian: '',
        liju1: ' How long can the present business boom last?  ',
        chinese1: '目前这种商业繁荣能持续多久?',
        liju2: 'The stillness of the night was broken by the boom of the cannon.',
        chinese2: '夜晚的寂静被大炮的轰鸣声打破了。',
        liju3: 'Business is booming since I enlarged the shop.',
        chinese3: '自从我扩大商店以来，生意日趋兴隆。'
      },

      {
        id: '364',
        word: 'boost  ',
        ciyi: 'vt. 鼓励，促进；宣扬n. 推动，促进 ',
        kaodian: '',
        liju1: 'The chamber of commerce boosts local business. ',
        chinese1: '商会促进地方商业。',
        liju2: 'He always boosts his company.',
        chinese2: '他老是宣扬他的公司。',
        liju3: 'The words of our teacher were a boost to our spirits.',
        chinese3: '老师的话是对我们心灵的一种鼓舞。'
      },

      {
        id: '365',
        word: 'boot  ',
        ciyi: 'n. 靴子；汽车行李箱',
        kaodian: '',
        liju1: ' He angrily swished his boot. ',
        chinese1: '他气愤地嗖嗖地抽打他的靴子。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '366',
        word: 'booth ',
        ciyi: 'n. 货摊；电话亭',
        kaodian: '',
        liju1: 'I called her from a public phone booth near the entrance to the bar. ',
        chinese1: '我在酒吧入口附近的一个公用电话亭给她打了电话。',
        liju2: 'We asked a booth owner the way to the castle.',
        chinese2: '我们向一个货摊老板打听了去城堡的路。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '367',
        word: 'border ',
        ciyi: ' n. 边界；国界，边沿vt. 接近；与…接壤，交界',
        kaodian: '',
        liju1: 'California borders the Pacific Ocean. ',
        chinese1: '加利福尼亚州与太平洋毗连。',
        liju2: 'The police detained the suspect at the border.  ',
        chinese2: '警察把那名嫌疑犯扣留在边境。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '368',
        word: 'bore ',
        ciyi: 'vt. 钻孔；挖洞，使烦扰n. 令人讨厌的人，麻烦事',
        kaodian: '',
        liju1: 'Jack used a drill to bore a hole in the wall above the fireplace. ',
        chinese1: '杰克用钻子在壁炉上方的墙上钻孔。',
        liju2: 'Dickie bored him all through the meal with stories of the navy.',
        chinese2: '迪基整整一顿饭都在讲海军的故事，让他厌烦。',
        liju3: "'It's a bore to be sick, and the novelty of lying in bed all day wears off quickly.'",
        chinese3: '生病是件讨厌的事，整天躺在床上的新鲜感很快就没了。'
      },

      {
        id: '369',
        word: 'bosom ',
        ciyi: 'n.（心）胸；胸怀a. 知心的；亲密的',
        kaodian: '',
        liju1: 'She feels an ache in her bosom.   ',
        chinese1: '她感到胸痛。',
        liju2: 'They were bosom buddies.',
        chinese2: '他们曾是知心的伙伴。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '370',
        word: 'botany ',
        ciyi: 'n. 植物学',
        kaodian: '',
        liju1: 'Botany deals with the study of plants.  ',
        chinese1: '植物学论述植物的研究。',
        liju2: 'To what degree are you interested in botany?  ',
        chinese2: '你对植物学的兴趣达到什么程度?',
        liju3: '',
        chinese3: ''
      },

      {
        id: '371',
        word: 'bounce ',
        ciyi: 'n. 跳；弹力 v. 弹跳；使弹起',
        kaodian: '',
        liju1: 'The wheelchair tennis player is allowed two bounces of the ball. ',
        chinese1: '残疾网球运动员可以有两次弹球的机会。',
        liju2: 'Tell the children not to bounce up and down on the bed.',
        chinese2: '告诉孩子们别在床上蹦跳。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '372',
        word: 'bound  ',
        ciyi: 'a. 有义务的，受约束的；注定的，肯定的；开往…的v.使跳跃n. 跳跃',
        kaodian: '',
        liju1: ' The colt bounded through the meadow. ',
        chinese1: '那匹马驹跳着跑过牧场。',
        liju2: 'With one bound Jack was free.',
        chinese2: '纵身一跃，杰克自由了。',
        liju3: 'He is bound by affection.  ',
        chinese3: '他为爱情所束缚。',
        liju4: 'The newly emerging forces are bound to defeat what is corrupt and degenerate. ',
        chinese4: '新生力量必然战胜腐朽力量。',
        liju5: 'The ship was bound for Italy.',
        chinese5: '这艘船是开往意大利的。'
      },

      {
        id: '373',
        word: 'boundary ',
        ciyi: ' n. 边界；范围；分界线',
        kaodian: '',
        liju1: 'The river determines the natural boundary between the two countries.  ',
        chinese1: '这条河流成为这两国间的天然边界线。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '374',
        word: 'bow  ',
        ciyi: 'n. 弓；鞠躬，点头；蝴蝶结v. 鞠躬，点头',
        kaodian: '',
        liju1: ' Some of the raiders were armed with bows and arrows. ',
        chinese1: '有些偷袭者配备了弓箭。',
        liju2: 'I gave a theatrical bow and waved.',
        chinese2: '我夸张地鞠了一躬，然后挥了挥手。',
        liju3: 'Add a length of ribbon tied in a bow.',
        chinese3: '加一段打成蝴蝶结的缎带。',
        liju4: 'They bowed low to Louis and hastened out of his way.',
        chinese4: '他们向路易斯深深地鞠躬并迅速给他让路。'
      },

      {
        id: '375',
        word: 'bowel ',
        ciyi: ' n. 肠；内部；深处',
        kaodian: '',
        liju1: ' This bowel problem might cause a new kind of autism.  ',
        chinese1: '这肠道问题可以引起一种新型自闭症。',
        liju2: 'The eruption of a volcano begins from the bowels of the Earth.',
        chinese2: '火山喷发从地球内部开始。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '376',
        word: 'bowling ',
        ciyi: ' n.保龄球运动',
        kaodian: '',
        liju1: 'Do you want to go bowling with us? ',
        chinese1: '你要不要和我们一起去打保龄球?',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '377',
        word: 'boycott ',
        ciyi: 'vt.联合抵制；拒绝参加',
        kaodian: '',
        liju1: 'The main opposition parties are boycotting the elections. ',
        chinese1: '主要的反对党派正在联合抵制选举。',
        liju2: 'The union called on its members to boycott the meeting.',
        chinese2: '工会号召其会员拒绝参加会议。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '378',
        word: 'brace  ',
        ciyi: ' n. 支架vt. 支撑；使防备；使锻炼',
        kaodian: '',
        liju1: 'He wore leg braces after he had polio in childhood. ',
        chinese1: '小时候患小儿麻痹症后，他使用了腿部支架。',
        liju2: 'They braced the sagging wall with a piece of wood.',
        chinese2: '他们用一根木头撑住那堵往一边倾斜的墙壁。',
        liju3: 'He braced himself for the icy plunge into the black water.',
        chinese3: '他准备跳入冰冷的黑水。'
      },

      {
        id: '379',
        word: 'bracket ',
        ciyi: ' n. 支架；括号',
        kaodian: '',
        liju1: ' Fix the beam with the brackets and screws. ',
        chinese1: '用支架和螺丝固定横梁。',
        liju2: "'Don't put any spaces before or after the left bracket or before the right bracket.'",
        chinese2: '不要在左括号前后或右括号前面放置任何空格。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '380',
        word: 'brake ',
        ciyi: 'v. 刹车n. 闸，刹车',
        kaodian: '',
        liju1: ' He suddenly stepped on the brake and the car stopped at once. ',
        chinese1: '他突然间踩下了制动踏板，车子一下子就停了下来。',
        liju2: 'He should not brake the car abruptly on an icy road.',
        chinese2: '他不应该在结冰路上把汽车猛然刹住。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '381',
        word: 'brand  ',
        ciyi: ' vt. 使铭记；打烙印于n. 商标，牌子；烙印',
        kaodian: '',
        liju1: 'Winston is a brand of cigarette. ',
        chinese1: '云斯顿是一种香烟品牌。',
        liju2: "'The owner couldn't be bothered to brand the cattle.'",
        chinese2: '主人懒得给这牛打上烙印。',
        liju3: 'The plane crash was branded on his mind.',
        chinese3: '飞机坠毁的情景铭刻在他的心中。'
      },

      {
        id: '382',
        word: 'brandy  ',
        ciyi: 'n. 白兰地酒',
        kaodian: '',
        liju1: ' The bridegroom quaffed down a glass of brandy. ',
        chinese1: '新郎将一杯白兰地酒一饮而尽。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '383',
        word: 'brass ',
        ciyi: 'n. 黄铜；黄铜制品；铜器 ',
        kaodian: '',
        liju1: 'Copper and zinc are fused to make brass.  ',
        chinese1: '铜与锌熔合后形成黄铜。',
        liju2: 'Consequently even this vast chorus was occasionally overwhelmed by the brass.',
        chinese2: '结果连这个大合唱偶尔也被铜管乐所压倒。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '384',
        word: 'breach ',
        ciyi: ' n. 缺口，缝隙vt. 违反，破坏；打破，打裂',
        kaodian: '',
        liju1: 'The newspaper breached the code of conduct on privacy. ',
        chinese1: '这家报纸违反了隐私保护行为准则。',
        liju2: 'Their actions threatened a serious breach in relations between the two countries.',
        chinese2: '他们的行动有威胁两国关系分裂的危险。',
        liju3: 'The limestone is sufficiently fissured for tree roots to have breached the roof of the cave.',
        chinese3: '石灰岩裂开了足以让树根突破洞顶。'
      },

      {
        id: '385',
        word: 'breakdown ',
        ciyi: 'n. 故障；倒塌；损坏；衰竭',
        kaodian: '',
        liju1: 'Small shippers are most often disserviced by transportation breakdown.   ',
        chinese1: '小件托运者往往因运输故障而受损。',
        liju2: 'My mother had died, and a couple of years later I had a breakdown.',
        chinese2: 'My mother had died, and a couple of years later I had a breakdown.',
        liju3: '',
        chinese3: ''
      },

      {
        id: '386',
        word: 'breast  ',
        ciyi: 'n. 乳房，胸部；胸怀',
        kaodian: '',
        liju1: ' The sword bore through her breast.  ',
        chinese1: '剑刺穿了她的胸部。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '387',
        word: 'breed  ',
        ciyi: 'vi. 繁殖；饲养vt.繁殖；饲养；抚养，养育；造成n. 品种；种类',
        kaodian: '',
        liju1: 'A strong breed emerged. ',
        chinese1: '一个优良品种形成了。',
        liju2: 'Bacteria will not breed in alcohol.  ',
        chinese2: '细菌在酒精里不会繁殖。',
        liju3: 'He used to breed dogs for the police.',
        chinese3: '他过去为警察部门养殖狗。',
        liju4: 'He has been bred to be a gentleman.',
        chinese4: '他已被作为绅士培养成人。'
      },

      {
        id: '388',
        word: 'breeze ',
        ciyi: ' n. 微风',
        kaodian: '',
        liju1: ' The soft breeze stirs the leaves.  ',
        chinese1: '柔和的微风摇动着树叶。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '389',
        word: 'brick ',
        ciyi: 'n. 砖，砖块；砖形物',
        kaodian: '',
        liju1: 'In these houses, there are kangs built of stone or brick.   ',
        chinese1: '这些房子里有石头或砖垒的炕。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '390',
        word: 'bride ',
        ciyi: ' n. 新娘；姑娘，女朋友',
        kaodian: '',
        liju1: 'Guests toasted the bride and groom with champagne. ',
        chinese1: '客人们以香槟为新娘新郎敬酒。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '391',
        word: 'brief ',
        ciyi: 'a. 简短的，简洁的n. 摘要，简报vt. 简要汇报，摘要',
        kaodian: '',
        liju1: ' His article was brief and forceful. ',
        chinese1: '他的文章简短有力。',
        liju2: "'The secretary of defense briefed the president on the enemy's strength.'",
        chinese2: '国防部长向总统简略汇报敌人的兵力。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '392',
        word: 'briefcase ',
        ciyi: ' n. 公文包',
        kaodian: '',
        liju1: ' He popped a letter out of his briefcase.  ',
        chinese1: '他从公文包里突然掏出一封信。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '393',
        word: 'brilliant ',
        ciyi: 'a. 灿烂的，光辉的，闪耀的；卓越的；有才气的 ',
        kaodian: '',
        liju1: 'The countryside was bathed in brilliant sunshine. ',
        chinese1: '乡间沐浴在灿烂的阳光下。',
        liju2: 'With brilliant lights blazing everywhere in Christmas night, the city looked most magnificent. ',
        chinese2: '圣诞节的夜晚城里到处灯火辉煌，格外壮观。',
        liju3: 'Dali is considered as a brilliant painter.',
        chinese3: '人们认为，达利是一位才华横溢的画家。'
      },

      {
        id: '394',
        word: 'brim ',
        ciyi: ' n. 边；边缘，帽檐v. 满溢；溢出',
        kaodian: '',
        liju1: 'Rain dripped from the brim of his baseball cap. ',
        chinese1: '雨水从他的棒球帽檐上滴下来。',
        liju2: 'Michael looked at him imploringly, eyes brimming with tears.',
        chinese2: '迈克尔恳求地望着他，眼里充满了泪水。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '395',
        word: 'brisk ',
        ciyi: ' a. 敏锐的，轻快的，刻薄的；兴隆的',
        kaodian: '',
        liju1: 'Taking a brisk walk can often induce a feeling of well-being. ',
        chinese1: '轻快的散步经常能使人心旷神怡。',
        liju2: 'Vendors were doing a brisk trade in souvenirs.',
        chinese2: '小贩们的纪念品生意很兴隆。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '396',
        word: 'brittle ',
        ciyi: ' a. 易碎的，脆弱的',
        kaodian: '',
        liju1: 'Brittle things break easily ',
        chinese1: '脆的东西容易破碎。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '397',
        word: 'brochure ',
        ciyi: 'n. 手册，小册子',
        kaodian: '',
        liju1: "'The computer's characteristics are fully detailed in the brochure.  '",
        chinese1: '计算机的性能在这小册子里有详尽说明。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '398',
        word: 'bronze ',
        ciyi: 'n. 青铜；青铜制品a. 青铜色的；青铜制的',
        kaodian: '',
        liju1: 'The statue was cast in bronze.   ',
        chinese1: '这座塑像是用青铜铸成的。',
        liju2: 'Her hair shone bronze and gold.',
        chinese2: '她的头发闪耀着青铜色和金黄色的光彩。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '399',
        word: 'brook ',
        ciyi: 'vt. 忍受；容忍n. 小溪；小',
        kaodian: '',
        liju1: 'I cannot brook his arrogance. ',
        chinese1: '我不能容忍他的傲慢。',
        liju2: 'He often cast this brook.  ',
        chinese2: '他常在这条小河边钓鱼。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '400',
        word: 'brow ',
        ciyi: ' n. 眉，眉毛；额',
        kaodian: '',
        liju1: 'Sweat was dripping off his brow.  ',
        chinese1: '汗珠正从他的额头滴下来。',
        liju2: 'He had thick brown hair and shaggy brows.',
        chinese2: '他长着浓密褐色的头发和浓粗杂乱的眉毛。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '401',
        word: 'browse ',
        ciyi: 'v. 浏览；吃嫩叶或草n. 嫩叶；吃草，放牧；浏览',
        kaodian: '',
        liju1: ' I browsed through the library. ',
        chinese1: '我在图书馆里浏览书刊。',
        liju2: 'Two cows browsed the hillside.',
        chinese2: '两头牛在山坡上吃草。',
        liju3: 'A rough browse of this book is not enough.',
        chinese3: '对这本书只粗略的浏览一下是不够的。'
      },

      {
        id: '402',
        word: 'bruise ',
        ciyi: 'n. 擦痕；青肿vt. 使受瘀伤；使受挫伤',
        kaodian: '',
        liju1: ' I had only bruised my knee. ',
        chinese1: '我只是膝盖受了瘀伤。',
        liju2: 'How did you get that bruise on your cheek?',
        chinese2: '你脸颊上怎么有一块瘀伤？',
        liju3: '',
        chinese3: ''
      },

      {
        id: '403',
        word: 'brutal ',
        ciyi: ' a. 残忍的；严峻的，严酷的',
        kaodian: '',
        liju1: 'We have to face the brutal truth. ',
        chinese1: '我们不得不面对这一残酷事实。',
        liju2: 'The weather bureau forecast a winter of brutal cold this year.',
        chinese2: '气象局预测今年将是个寒冬。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '404',
        word: 'bubble ',
        ciyi: 'n. 气泡，泡沫，幻想的计划 vi. 沸腾，冒泡',
        kaodian: '',
        liju1: 'The water began to bubble in the teapot. ',
        chinese1: '水在茶壶里开始沸腾。',
        liju2: "'Ink particles attach themselves to air bubbles and rise to the surface.'",
        chinese2: '墨点吸附在气泡上，升到表面。',
        liju3: 'We may be heading into another bubble. ',
        chinese3: '我们似乎在走向另一个泡沫。'
      },

      {
        id: '405',
        word: 'bud ',
        ciyi: 'n. 芽，萌芽；蓓蕾vi. 发芽，萌芽',
        kaodian: '',
        liju1: 'A blossom develops from a bud. ',
        chinese1: '花朵是从蓓蕾孕育而开放的。',
        liju2: 'The plants began to bud in early April.',
        chinese2: '植物在4月初开始发芽。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '406',
        word: 'budget ',
        ciyi: 'n. 预算vi. 编预算，做预算',
        kaodian: '',
        liju1: 'The congress approved the budget.  ',
        chinese1: '国会批准了国家预算。',
        liju2: 'The government has budgeted $ 2,000,000 for education spending.',
        chinese2: '政府把200万美元编入教育预算。',
        liju3: "'We couldn't budget for every emergency.  '",
        chinese3: '我们不能为每个紧急需要做安排。'
      },

      {
        id: '407',
        word: 'buffet ',
        ciyi: 'n. 自助餐',
        kaodian: '',
        liju1: ' This morning I went to a restaurant famous for its brunch buffet. ',
        chinese1: '今天早上我去了一个以自助早午餐而闻名的餐厅。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '408',
        word: 'bug ',
        ciyi: 'n. 臭虫，小故障；窃听器vt. 装窃听器',
        kaodian: '',
        liju1: ' There is a bug in the software. ',
        chinese1: '软件出了故障。',
        liju2: 'We noticed tiny bugs that were all over the walls.',
        chinese2: '我们发现墙上爬满了小虫。',
        liju3: 'He heard that they were planning to bug his office.',
        chinese3: '他听说他们正计划在他的办公室安装窃听器。'
      },

      {
        id: '409',
        word: 'bulb  ',
        ciyi: 'n. 电灯泡；球状物',
        kaodian: '',
        liju1: ' The stairwell was lit by a single bulb. ',
        chinese1: '楼梯间只有一盏灯照明。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '410',
        word: 'bulk ',
        ciyi: 'n. 体积，容量；大批；大量；大块',
        kaodian: '',
        liju1: 'Bannol lowered his bulk carefully into the chair. ',
        chinese1: '班诺尔那肥硕的身躯小心地坐落到了椅子上。',
        liju2: 'Buying in bulk is more economical than shopping for small quantities.',
        chinese2: '大批采购比少量购买更经济实惠。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '411',
        word: 'bull  ',
        ciyi: 'n. 公牛 ',
        kaodian: '',
        liju1: ' He glared at me like a bull at a red rag. ',
        chinese1: '他像公牛怒视红布一样对我怒目而视。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '412',
        word: 'bullet ',
        ciyi: ' n. 子弹',
        kaodian: '',
        liju1: ' A bullet lamed the soldier for life.  ',
        chinese1: '一粒子弹让这个士兵一生跛足。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '413',
        word: 'bulletin ',
        ciyi: 'n. 公告，公报',
        kaodian: '',
        liju1: 'The secretary of the office pastes a bulletin on the wall.   ',
        chinese1: '办公室秘书把一张公告贴在墙上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '414',
        word: 'bully  ',
        ciyi: 'n. 欺凌弱小者 vt. 欺负；威吓',
        kaodian: '',
        liju1: 'If I had been there, I would not have let him bully you. ',
        chinese1: '当时如果我要是在场，我就不会让他欺负你的。',
        liju2: 'I fall victim to the office bully.',
        chinese2: '我成了这个办公室霸王欺负的对象。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '415',
        word: 'bump  ',
        ciyi: ' n. 碰，撞，隆起物v. 碰，撞；颠簸',
        kaodian: '',
        liju1: 'We left the road, and again bumped over the mountainside. ',
        chinese1: '我们离开公路，又一次在山坡上颠簸行驶。',
        liju2: 'She bumped her head against a low branch.',
        chinese2: '她的头撞到一根低矮的树枝上。',
        liju3: 'Small children often cry after a minor bump.',
        chinese3: '小孩子们在轻微的碰撞后常常会哭。',
        liju4: 'She fell against our coffee table and got a large bump on her forehead.',
        chinese4: '她撞到了我们的咖啡桌跌倒了，前额起了一个大包。'
      },

      {
        id: '416',
        word: 'bunch ',
        ciyi: ' n. 一群；一串，一帮',
        kaodian: '',
        liju1: ' We were a pretty inexperienced bunch of people really. ',
        chinese1: '我们实际上是一群相当没有经验的人。',
        liju2: 'A bunch of red roses drip their golden scent.  ',
        chinese2: '一束红玫瑰花散发出浓郁的芳香。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '417',
        word: 'bundle  ',
        ciyi: ' n. 束；捆',
        kaodian: '',
        liju1: ' I saw the man dragging a bundle of firewood after him. ',
        chinese1: '我看见那男人身后拖着一捆柴。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '418',
        word: 'burden ',
        ciyi: 'n. 负担；责任vt. 使负担，烦扰',
        kaodian: '',
        liju1: 'He eased me of my burden.  ',
        chinese1: '他减轻了我的负担。',
        liju2: 'We decided not to burden him with the news.',
        chinese2: '我们决定不拿这个消息去烦他。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '419',
        word: 'bureau ',
        ciyi: 'n. 局，处；办公桌',
        kaodian: '',
        liju1: 'The Political Bureau reports its work to these sessions and accepts their oversight.   ',
        chinese1: '中央政治局向中央委员会全体会议报告工作，接受监督。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '420',
        word: 'bureaucracy ',
        ciyi: ' n. 官僚主义；官僚机构',
        kaodian: '',
        liju1: 'There were a few articles in the newspaper inveighing against bureaucracy.   ',
        chinese1: '报纸上有几篇抨击官僚主义的文章。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '421',
        word: 'burglar ',
        ciyi: 'n. 夜贼，窃贼',
        kaodian: '',
        liju1: 'The detective took out after a burglar. ',
        chinese1: '那侦探追赶一个窃贼。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '422',
        word: 'butterfly  ',
        ciyi: 'n. 蝴蝶',
        kaodian: '',
        liju1: 'A caterpillar transforms into a butterfly.  ',
        chinese1: '毛虫变成了蝴蝶。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '423',
        word: 'buzz ',
        ciyi: 'v. 发出嗡嗡声；充满兴奋n. 嗡嗡声；嘈杂谈话声',
        kaodian: '',
        liju1: ' The intercom buzzed and he pressed down the appropriate switch.',
        chinese1: '对讲机嗡嗡地响起来，他按下了相应的开关。',
        liju2: 'The rehearsal studio is buzzing with lunchtime activity.',
        chinese2: '排练场被午餐时段活动搞得很热闹。',
        liju3: 'A buzz of excitement filled the courtroom as the defendant was led in.',
        chinese3: '被告被带进来时，法庭内充满激动的嘈杂声。'
      },

      {
        id: '424',
        word: 'bypass/by-pass ',
        ciyi: 'n. 旁路，支路；搭桥术，旁通管',
        kaodian: '',
        liju1: 'A new bypass around the city is being built. ',
        chinese1: '一条绕城而过的新旁路正在修建之中。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '425',
        word: 'cab ',
        ciyi: ' n. 驾驶室；出租汽车；出租马车',
        kaodian: '',
        liju1: 'Could I use your phone to call a cab? ',
        chinese1: '我能用你的电话叫一辆出租车吗？',
        liju2: "'The van has additional load space over the driver's cab.'",
        chinese2: '该货车在驾驶室上方有额外的载货空间',
        liju3: '',
        chinese3: ''
      },

      {
        id: '426',
        word: 'cabbage ',
        ciyi: 'n. 卷心菜，洋白菜',
        kaodian: '',
        liju1: ' The cabbage is overcooked. ',
        chinese1: '白菜早就咕嘟烂了。',
        liju2: 'When the water boils add the meat and the cabbage.  ',
        chinese2: '水开时加入肉和洋白菜。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '427',
        word: 'cabin ',
        ciyi: ' n. 小屋；客舱；船舱',
        kaodian: '',
        liju1: 'The cabin was built of logs.  ',
        chinese1: '这小屋是用圆木造的。',
        liju2: 'He sat quietly in the first class cabin of the flight looking tired.',
        chinese2: '他静静地坐在班机的头等舱内，看上去有些疲惫。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '428',
        word: 'cabinet ',
        ciyi: 'n. 内阁；橱柜',
        kaodian: '',
        liju1: 'They are recomposing the cabinet.  ',
        chinese1: '他们正在改组内阁。',
        liju2: 'Years of micropublished books can be stored in a single cabinet.',
        chinese2: '用缩微版印刷多年的书，可存放在一个小柜子里。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '429',
        word: 'cable ',
        ciyi: 'n. 缆绳；电缆；电报，有线电视vi. 拍电报',
        kaodian: '',
        liju1: ' They underlaid the Atlantic with a cable.   ',
        chinese1: '他们在大西洋海底铺设了一条电缆。',
        liju2: 'They ran commercials on cable systems across the country.',
        chinese2: '他们在全国范围内的有线电视上做广告。',
        liju3: 'Please write or cable as soon as you arrive.',
        chinese3: '请一到就给我们来封信或打个电报。'
      },

      {
        id: '430',
        word: 'cafeteria ',
        ciyi: 'n. 自助餐厅',
        kaodian: '',
        liju1: '  Deposit your lunch tray at the cafeteria door. ',
        chinese1: '把你的午餐托盘放在自助餐馆门口。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '431',
        word: 'calcium ',
        ciyi: ' n. 钙',
        kaodian: '',
        liju1: ' Calcium is essential for healthy bones.',
        chinese1: '骨骼健康离不开钙。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '432',
        word: 'calculate ',
        ciyi: ' v. 计算，推算；计划，打算',
        kaodian: '',
        liju1: 'This school is calculated for retarded children. ',
        chinese1: '这所学校是为弱智儿童开办的。',
        liju2: 'Engineers calculate the strains and stresses on a bridge. ',
        chinese2: '工程师们计算桥梁的应变和应力。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '433',
        word: 'calendar  ',
        ciyi: ' n. 日历；日程表',
        kaodian: '',
        liju1: 'There was a calendar on the wall above, with large squares around the dates. ',
        chinese1: '墙的上方曾有一本日历，日期框在大方格里。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '434',
        word: 'calorie ',
        ciyi: 'n. 卡路里（热量单位）',
        kaodian: '',
        liju1: ' Sweetened drinks contain a lot of calories. ',
        chinese1: '含糖的饮料热量很高。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '435',
        word: 'campaign  ',
        ciyi: 'n. 运动；活动；战役',
        kaodian: '',
        liju1: 'The army is beating up recruits for the campaign.  ',
        chinese1: '军队正在为这个战役召募新兵。',
        liju2: 'The candidate kicked off his campaign with a speech on television.',
        chinese2: '该候选人由电视演讲开始了他的竞选活动。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '436',
        word: 'campus ',
        ciyi: 'n. （大学）校园',
        kaodian: '',
        liju1: 'He rarely mingles with other students on the campus.  ',
        chinese1: '他很少和校园里的其他学生交往。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '437',
        word: 'canal ',
        ciyi: ' n. 运河；水道；管道',
        kaodian: '',
        liju1: ' The Panama Canal joins two oceans.   ',
        chinese1: '巴拿马运河连通两大洋。',
        liju2: 'The canal is blocked.  ',
        chinese2: '该运河阻塞不通。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '438',
        word: 'cancel  ',
        ciyi: 'vt. 取消；删去，把…作废vi.相互抵销',
        kaodian: '',
        liju1: 'If it were to rain, we would have to cancel the match tomorrow.   ',
        chinese1: '假如下雨的话，我们明天就得取消比赛。',
        liju2: 'The last chapter should be cancelled.',
        chinese2: '最后一章应该删去。',
        liju3: 'The answered test paper written with a pencil shall be cancelled out.',
        chinese3: '用铅笔书写的答卷一律无效。',
        liju4: 'His strong points and weak points cancel out.',
        chinese4: '他的优点和缺点互相抵消了。'
      },

      {
        id: '439',
        word: 'cancer ',
        ciyi: ' n. 癌症',
        kaodian: '',
        liju1: 'There is no radical cure for cancer. ',
        chinese1: '现在还没有根治癌症的办法。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '440',
        word: 'candidate ',
        ciyi: ' n. 候选人，候补者；应试者，报考者',
        kaodian: '',
        liju1: 'This candidate differed from the others. ',
        chinese1: '这名候选人与众不同。',
        liju2: 'Candidates are allowed to use dictionaries in this examination.',
        chinese2: '考生在本次考试中可使用词典。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '441',
        word: 'candy  ',
        ciyi: ' n. 糖果',
        kaodian: '',
        liju1: 'She enticed the children with candy.  ',
        chinese1: '她用糖果诱骗小孩们。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '442',
        word: 'cannon ',
        ciyi: ' n. 大炮；加农炮',
        kaodian: '',
        liju1: 'Cannon volleyed on all sides.   ',
        chinese1: '大炮从四面八方齐发。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '443',
        word: 'canoe  ',
        ciyi: 'n. 独木舟；轻舟，小游艇',
        kaodian: '',
        liju1: ' He used to be pottering about in a canoe on summer afternoons. ',
        chinese1: '他过去常常在夏日午后驾轻舟荡漾。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '444',
        word: 'canteen ',
        ciyi: ' n. 食堂，小卖部',
        kaodian: '',
        liju1: 'But I had no food in my dorm, so I had to go to canteen. ',
        chinese1: '但是我在宿舍没有东西可吃，所以我只能去餐厅了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '445',
        word: 'canvas ',
        ciyi: 'n. 帆布；油画布；油画',
        kaodian: '',
        liju1: 'We need a piece of canvas that weathers well. ',
        chinese1: '我们需要一块经久耐用的帆布。',
        liju2: 'My father has a Dali’s surrealistic canvas.',
        chinese2: '我父亲有一副达利的超现实主义风格的油画。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '446',
        word: 'capable ',
        ciyi: 'a. 能干的，能胜任的；有才华的',
        kaodian: '',
        liju1: "'She's a very capable speaker. '",
        chinese1: '她是一个非常有能力的演说者。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '447',
        word: 'capacity ',
        ciyi: 'n. 能力，能量；容量，容纳力 ',
        kaodian: '',
        liju1: 'I really admire his capacity for work. ',
        chinese1: '我真钦佩他的工作能力。',
        liju2: 'When will capacity free up?  ',
        chinese2: '容量将在何时释放？',
        liju3: 'Each stadium had a seating capacity of about 50,000.',
        chinese3: '每个运动场能容纳大约五万席位。'
      },

      {
        id: '448',
        word: 'cape ',
        ciyi: 'n. 海角，岬；斗篷，披肩',
        kaodian: '',
        liju1: 'The cape extends far into the ocean.   ',
        chinese1: '那海岬伸向海洋远处。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '449',
        word: 'capsule  ',
        ciyi: 'n. 胶囊；太空舱',
        kaodian: '',
        liju1: 'A Russian space capsule is currently orbiting the Earth. ',
        chinese1: '一个俄罗斯太空舱目前正环绕地球飞行。',
        liju2: 'The patient swallowed the capsule without drinking water.  ',
        chinese2: '这个病人不喝水就吞下了胶囊。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '450',
        word: 'captive  ',
        ciyi: ' a. 被俘虏的；被监禁的n. 俘虏',
        kaodian: '',
        liju1: ' The police managed to rescue the captive hostages. ',
        chinese1: ' 警察设法救出了被俘虏的人质。',
        liju2: 'He described the difficulties of surviving for four months as a captive.',
        chinese2: '他讲述了沦为阶下囚的4个月中生存的种种不易。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '451',
        word: 'capture  ',
        ciyi: ' vt. 俘获，捕获；引起注意力，吸引住n. 捕获；战利品，俘虏',
        kaodian: '',
        liju1: 'With the capture of the escaped tiger，everyone felt relieved.   ',
        chinese1: '逃出来的老虎被捕获后，大家都松了一口气。',
        liju2: 'Her beauty captured him instantly.',
        chinese2: '她的美貌立刻迷住了他。',
        liju3: 'The guerrillas shot down one aeroplane and captured the pilot.',
        chinese3: '那些游击队员击落了一架飞机，并俘虏了飞行员。'
      },

      {
        id: '452',
        word: 'carbohydrate ',
        ciyi: 'n. 碳水化合物',
        kaodian: '',
        liju1: 'On a biochemical level, a carbohydrate is a simple fusion of carbon, hydrogen and oxygen molecules.   ',
        chinese1: '从生化角度讲，碳水化合物是一个含有碳，氢，氧元素的简单化合物。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '453',
        word: 'carbon ',
        ciyi: ' n. 碳',
        kaodian: '',
        liju1: ' Across the world, forests and the soil beneath them absorb about a quarter of all carbon emissions.   ',
        chinese1: '纵观全球，森林与它们脚下的土壤能吸收大约碳排放总量的四分之一。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '454',
        word: 'cardinal ',
        ciyi: ' n. 红衣主教a. 主要的，最重要的',
        kaodian: '',
        liju1: 'In 1448, Nicholas was appointed a cardinal. ',
        chinese1: '1448年，尼古拉斯被任命为红衣主教。',
        liju2: 'As a salesman, your cardinal rule is to do everything you can to satisfy a customer.',
        chinese2: '作为一名推销员，首要原则就是要尽你所能使客户满意。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '455',
        word: 'career ',
        ciyi: ' n. 生涯；职业；事业  ',
        kaodian: '',
        liju1: 'His support furthered my career.   ',
        chinese1: '他的支持促进了我的事业。',
        liju2: 'During his career, he wrote more than fifty plays.',
        chinese2: '在他的创作生涯里，他共写了五十多部剧作。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '456',
        word: 'caress  ',
        ciyi: ' vt. 爱抚，抚摸 n. 爱抚，拥抱；接吻',
        kaodian: '',
        liju1: 'The mother caressed the child with her hand. ',
        chinese1: '母亲用手轻轻抚摸着孩子。',
        liju2: 'Words can be a cool caress or a stinging slap.  ',
        chinese2: '言语可以是很棒的爱抚也可以刺痛的巴掌。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '457',
        word: 'cargo ',
        ciyi: ' n. 货物，船货',
        kaodian: '',
        liju1: 'The ship will unlade her cargo today.   ',
        chinese1: '该船将于今天卸下货物。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '458',
        word: 'carpenter ',
        ciyi: 'n. 木匠，木工',
        kaodian: '',
        liju1: ' He is a carpenter by profession.  ',
        chinese1: '他以木工为业。',
        liju2: 'At an early age, I was apprenticed to a carpenter.',
        chinese2: '我小时候曾给木匠当过学徒。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '459',
        word: 'carriage  ',
        ciyi: ' n. 四轮马车；客车厢',
        kaodian: '',
        liju1: ' They battled strong winds and heavy rains in their carriage.   ',
        chinese1: '他们驾着马车与狂风暴雨搏斗。',
        liju2: "'I'll be sitting in the third carriage from the engine. '",
        chinese2: '我将坐在机车后面的第三节车厢内。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '460',
        word: 'carrier ',
        ciyi: 'n. 载体；运送者；载体，携带者 ',
        kaodian: '',
        liju1: 'The squadron is based on a carrier.  ',
        chinese1: '空军中队以航空母舰为基地。',
        liju2: 'He claimed that he isn’t an AIDS carrier.',
        chinese2: '他宣称自己不是一名艾滋病毒携带者。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '461',
        word: 'carve ',
        ciyi: ' vt. 雕刻 ',
        kaodian: '',
        liju1: 'She carved a flower out of a radish. ',
        chinese1: '她把萝卜刻成一朵花。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '462',
        word: 'cash ',
        ciyi: 'n. 现款，现金vt. 将…兑现；支付现款',
        kaodian: '',
        liju1: 'I bought the car from the store for cash.   ',
        chinese1: '我用现金从这家商店买下这辆汽车。',
        liju2: 'There are similar charges if you want to cash a cheque or withdraw money at a branch other than your own.',
        chinese2: '如果你在其他银行兑现支票或支取现金，将会产生差不多的手续费。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '463',
        word: 'cashier  ',
        ciyi: ' n. 出纳员，收银员；vt. 解雇；抛弃 ',
        kaodian: '',
        liju1: ' The cashier absconded with the money.   ',
        chinese1: '出纳员携款潜逃。',
        liju2: 'The dishonest manager was cashiered at last.',
        chinese2: '这位不忠实的经理终于被解雇了。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '464',
        word: 'cassette ',
        ciyi: 'n. 盒式磁带；盒子 ',
        kaodian: '',
        liju1: "' I think I've broken your cassette recorder.'",
        chinese1: '我想我已弄坏了你的盒式磁带录音机了。',
        liju2: 'Mary put all her jewellery in a cassette.',
        chinese2: '玛丽将她所有的首饰都放在了一个盒子里。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '465',
        word: 'cast ',
        ciyi: ' vt. 投，抛；扔；铸造n. 全体演员；演员表',
        kaodian: '',
        liju1: ' The boy cast a stone into the water.',
        chinese1: '男孩把一块石头扔进水中。',
        liju2: 'The statue was cast in bronze.',
        chinese2: '这座塑像是用青铜铸成的。',
        liju3: 'The show is very amusing and the cast is very good.',
        chinese3: '表演非常有趣，演员都很优秀。'
      },

      {
        id: '466',
        word: 'casual ',
        ciyi: 'a. 非正式的，临时的；偶然的，碰巧的',
        kaodian: '',
        liju1: ' We are the casual acquaintance of a long railway journey.   ',
        chinese1: '我们是在火车长途旅行中偶然结识的朋友。',
        liju2: 'I also bought some casual clothes for the weekend.',
        chinese2: '我还买了些休闲服准备周末穿。',
        liju3: 'She has to get a casual work to subsist.  ',
        chinese3: '她不得不找一个临时工作维持生活。'
      },

      {
        id: '467',
        word: 'casualty ',
        ciyi: ' n. 伤亡人员；受害人',
        kaodian: '',
        liju1: 'The car industry has been one of the greatest casualties of the recession. ',
        chinese1: '汽车工业是经济不景气最大的受害者之一。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '468',
        word: 'catalog(ue) ',
        ciyi: 'n. 目录vt. 登记；为…编目录',
        kaodian: '',
        liju1: ' He catalogued all the insects in his collection. ',
        chinese1: '他将所收集的昆虫编成目录。',
        liju2: 'The catalogue is under revision.  ',
        chinese2: '目录册正在修订之中。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '469',
        word: 'catastrophe ',
        ciyi: 'n. 大灾难；大祸',
        kaodian: '',
        liju1: 'He is teetering on the edge of catastrophe.   ',
        chinese1: '他在大灾难的边缘徘徊。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '470',
        word: 'category  ',
        ciyi: 'n. 种类，范畴',
        kaodian: '',
        liju1: 'This book clearly falls into the category of fictionalized autobiography. ',
        chinese1: '这本书显然类属自传体小说。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '471',
        word: 'cater ',
        ciyi: 'vi. 投合，迎合；满足需要；提供饮食及服务',
        kaodian: '',
        liju1: ' He has a small hotel and also caters for weddings and funerals. ',
        chinese1: '他开了一家小旅馆，并承办红白喜事的酒席。',
        liju2: 'We cater to an exclusive clientele.',
        chinese2: '我们满足一个特殊客户群的需求。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '472',
        word: 'cathedral ',
        ciyi: 'n. 大教堂',
        kaodian: '',
        liju1: "'The baby was christened in St. Paul's Cathedral.   '",
        chinese1: '这个婴儿是在圣保罗教堂施洗礼的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '473',
        word: 'Catholic  ',
        ciyi: ' a.天主教的n. 天主教徒',
        kaodian: '',
        liju1: "'He was a Catholic but didn't practise his religion.'",
        chinese1: '他那时是天主教徒，但并不实践信仰。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '474',
        word: 'caution ',
        ciyi: 'n. 小心，谨慎；警告，警示vt. 警告',
        kaodian: '',
        liju1: 'There was a note of caution for the treasury in the figures. ',
        chinese1: '这些数据向财政部亮出了一个警告。',
        liju2: 'Extreme caution should be exercised when buying used tyres.',
        chinese2: '买二手轮胎时一定要极其谨慎。',
        liju3: 'Tony cautioned against misrepresenting the situation.',
        chinese3: '托尼告诫说不要歪曲事实。'
      },

      {
        id: '475',
        word: 'cautious ',
        ciyi: ' a. 谨慎的；十分小心的',
        kaodian: '',
        liju1: ' The scientists are cautious about using enzyme therapy on humans. ',
        chinese1: '科学家们对于人体使用酶疗法持谨慎态度。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '476',
        word: 'cease  ',
        ciyi: 'v. 停止；结束n. 停止',
        kaodian: '',
        liju1: "' At one o'clock the rain had ceased. '",
        chinese1: '一点钟时雨已经停了。',
        liju2: 'The peace plan is calling for a cease of fire between the two countries.',
        chinese2: '该和平计划呼吁两国停火。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '477',
        word: 'celebrity ',
        ciyi: ' n. 名人；名声；名望；知名人士',
        kaodian: '',
        liju1: 'He achieved celebrity as a sports commentator. ',
        chinese1: '他作为一名体育评论员而享誉四方。',
        liju2: 'Many social celebrities favor Tom’s design.',
        chinese2: '许多社会名流都钟情于汤姆的设计。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '478',
        word: 'cell  ',
        ciyi: 'n. 细胞，小囚房；电池；蜂房',
        kaodian: '',
        liju1: "'The radio won't work, if you swap the cell's poles over. '",
        chinese1: '如果你把电池的正负极颠倒了，收音机就不会响了。',
        liju2: 'Those cells divide and give many other different types of cells.',
        chinese2: '那些细胞分裂后形成许多其他不同类型的细胞。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '479',
        word: 'cellar ',
        ciyi: 'n. 地窖；酒窖；地下室',
        kaodian: '',
        liju1: 'They laid up a store of vegetables in the cellar.   ',
        chinese1: '他们在地窖里贮藏了蔬菜。',
        liju2: 'The tornado is coming, so we had better batten down the hatches here and get to the cellar.  ',
        chinese2: '龙卷风即将来临，因此我们最好把这里的舱口封上，到地下室去。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '480',
        word: 'cement ',
        ciyi: 'v. 巩固，加强；粘合n. 水泥',
        kaodian: '',
        liju1: 'Our object is to further cement trade relations ',
        chinese1: '我们的目标是进一步巩固贸易关系。',
        liju2: 'Harry was coated in sand and cement, but we picked him up and dusted him down.',
        chinese2: '哈里满身全是沙子和水泥，我们把他扶起来，给他掸掸干净。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '481',
        word: 'cemetery ',
        ciyi: ' n. 墓地；公墓',
        kaodian: '',
        liju1: 'He rests in a cemetery in the western suburbs of Beijing.  ',
        chinese1: '他长眠于北京西郊的一个公墓中。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '482',
        word: 'censorship ',
        ciyi: ' n. 审查制度；审查机构',
        kaodian: '',
        liju1: 'The government today announced that press censorship was being lifted. ',
        chinese1: '该政府今日宣告说正在撤销新闻审查。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '483',
        word: 'census ',
        ciyi: ' n. 人口普查，人口调查',
        kaodian: '',
        liju1: 'The detailed assessment of the latest census will be ready in three months. ',
        chinese1: '有关最新人口普查的详细评估工作将在3个月内就绪。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '484',
        word: 'centigrade  ',
        ciyi: ' a. 摄氏温度计的；百分度的n. 摄氏温度计，百分度',
        kaodian: '',
        liju1: 'This thermometer is calibrated by centigrade. ',
        chinese1: '这种温度计是用摄氏百分度标定的。',
        liju2: 'Weather forecast says today high temperature will be 38 degree centigrade. ',
        chinese2: '天气预报说今天的最高温度将预计达到摄氏38度。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '485',
        word: 'centimeter/centimeter ',
        ciyi: ' n. 厘米，公分',
        kaodian: '',
        liju1: 'Slice into 2-centimeter circles. ',
        chinese1: '切成2厘米宽的圈。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '486',
        word: 'cereal ',
        ciyi: 'n. 谷物；谷类食品 ',
        kaodian: '',
        liju1: ' She dribbled some milk onto the cereal.  ',
        chinese1: '她把一些奶滴在燕麦片上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '487',
        word: 'ceremony ',
        ciyi: 'n. 典礼，仪式；礼节，礼仪；客套',
        kaodian: '',
        liju1: 'The opening ceremony was a fine spectacle.  ',
        chinese1: '开幕式典礼是个壮观的场面。',
        liju2: 'The republic was proclaimed with great ceremony.',
        chinese2: '以隆重的仪式宣告共和国成立。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '488',
        word: 'certainty ',
        ciyi: 'n. 必然；确实；确实的事情',
        kaodian: '',
        liju1: "' I have told them with absolute certainty there'll be no change of policy.'",
        chinese1: '我十分确定地告诉他们政策不会有变',
        liju2: 'A general election became a certainty last week.',
        chinese2: '普选上周已成必然。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '489',
        word: 'certificate ',
        ciyi: ' n. 证书；执照，文凭vt. 发给证明书；以证书形式授权给…',
        kaodian: '',
        liju1: ' This certificate is invalid. ',
        chinese1: '这张证明已失效。',
        liju2: 'He was afforded a certificate upon completion of his course of study.  ',
        chinese2: '他结业时被授予证书。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '490',
        word: 'certify ',
        ciyi: ' v. 证明；保证，发证书给',
        kaodian: '',
        liju1: ' Two witnesses must certify that this is your signature. ',
        chinese1: '必须有两个证人证明这是你的签字。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '491',
        word: 'challenge  ',
        ciyi: 'n. 挑战；怀疑vt. 向…挑战',
        kaodian: '',
        liju1: 'I challenged him to a game of chess. ',
        chinese1: '我向他挑战，要跟他下一盘棋。',
        liju2: "'The new government's first challenge is the economy.'",
        chinese2: '新政府面临的第一项挑战是经济。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '492',
        word: 'chamber  ',
        ciyi: ' n.室，膛；房间；会所 ',
        kaodian: '',
        liju1: 'He was chambered in a narrow basement. ',
        chinese1: '他被关进一个狭窄的地下室里。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '493',
        word: 'champagne  ',
        ciyi: ' n. 香槟酒；香槟酒色',
        kaodian: '',
        liju1: 'I drank a cup of champagne.  ',
        chinese1: '我喝了一杯香槟。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '494',
        word: 'champion ',
        ciyi: 'n. 冠军；得胜者；拥护者；战士 ',
        kaodian: '',
        liju1: 'He received acclaim as a champion of the oppressed. ',
        chinese1: '他作为被压迫者的捍卫者而受到了赞誉。',
        liju2: 'He succeeded in his efforts to get the champion. ',
        chinese2: '他经过艰苦的努力，终于成功地取得了冠军。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '495',
        word: 'chancellor ',
        ciyi: 'n. 总理；大臣；校长；大法官；首席法官',
        kaodian: '',
        liju1: ' He achievedvery prominent positions at Oxford, vice-chancellor of the university and deanof one of the colleges.  ',
        chinese1: '他在牛津的地位举足轻重，当过牛津大学副校长，还担任某个学院的系主任。',
        liju2: 'She said she wanted to be a "chancellor for all Germans, so Germany does better, particularly in a crisis".  ',
        chinese2: '她说她想成为“所有德国人的总理，这样德国做得更好，尤其是在危机时刻”。',
        liju3: 'The chancellor of the court was accused of bribery.',
        chinese3: '该法院的首席执行官被控受贿。'
      },

      {
        id: '496',
        word: 'channel ',
        ciyi: ' v.引导；集中n. 途径；频道；海峡；水道',
        kaodian: '',
        liju1: 'Stephen is channelling his energies into a novel called Blue. ',
        chinese1: '斯蒂芬正在集中精力写一本名为《蓝色》的小说。',
        liju2: 'The government will surely use the diplomatic channels available.',
        chinese2: '政府肯定会采用现有的外交途径。',
        liju3: 'The proliferating number of television channels in America.',
        chinese3: '美国电视频道的激增数量。',
        liju4: 'She is the first woman who navigates a sail crossing the English Channel. ',
        chinese4: '她是迄今为止驾船横渡英吉利海峡的第一位女性。'
      },

      {
        id: '497',
        word: 'chaos ',
        ciyi: ' n. 混沌，混乱 ',
        kaodian: '',
        liju1: 'That is the age of political chaos.  ',
        chinese1: '那是个政治上呈纷乱状态的时代。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '498',
        word: 'chap ',
        ciyi: ' n. 小伙子；家伙 ',
        kaodian: '',
        liju1: ' Duke is no ordinary chap.   ',
        chinese1: '公爵可不是一般的家伙。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '499',
        word: 'chapter ',
        ciyi: ' n. 章，回 ',
        kaodian: '',
        liju1: 'He is redrafting the first chapter. ',
        chinese1: '他正在重新草拟第一章。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '500',
        word: 'character ',
        ciyi: 'n. 性格，品质；特性；角色；[计] 字符',
        kaodian: '',
        liju1: 'It well assorts with her character.  ',
        chinese1: '这与她的性格很相配。',
        liju2: 'The film is autobiographical and the central character is played by Collard himself.',
        chinese2: '这部影片是自传式的，主角由科勒德亲自扮演。',
        liju3: 'This is because each character is encoded with 2 bytes. ',
        chinese3: '这是因为每个字符用 2 字节进行编码。'
      },

      {
        id: '501',
        word: 'characterise/characterize ',
        ciyi: ' vt. 刻划……的性格；表示……的特性',
        kaodian: '',
        liju1: 'He characterized briefly the main trend in the world now. ',
        chinese1: '他简要描述了当前世界上的主要趋势。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '502',
        word: 'characteristic ',
        ciyi: ' a. 典型的；特有的 n. 特征；特性 ',
        kaodian: '',
        liju1: 'Windmills are a characteristic feature of the Mallorcan landscape. ',
        chinese1: '风车是马略卡岛风光的一个典型的特色。',
        liju2: 'Genes determine the characteristics of every living thing.',
        chinese2: '基因决定每个生物的特征。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '503',
        word: 'charity ',
        ciyi: ' n. 慈善；施舍；慈善团体；宽容 ',
        kaodian: '',
        liju1: 'He made substantial donations to charity. ',
        chinese1: '他做了大量的慈善捐赠。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '504',
        word: 'charm  ',
        ciyi: 'n. 魅力，吸引力 vt. 使陶醉；施魔法于',
        kaodian: '',
        liju1: 'He was a man of great charm and distinction. ',
        chinese1: '他是一个魅力十足、地位显赫的男人。',
        liju2: 'She charmed her listeners with her sweet voice.',
        chinese2: '她甜润的嗓子使听众如醉如痴。',
        liju3: 'The wicked old woman charmed the princess with magic words.',
        chinese3: '这个老巫婆用咒语使公主中了魔。'
      },

      {
        id: '505',
        word: 'chart ',
        ciyi: ' n. 图表；海图；图纸 ',
        kaodian: '',
        liju1: 'With this chart, you can see what they mean.  ',
        chinese1: '下面这个图可以让你看清上述的意思。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '506',
        word: 'charter ',
        ciyi: 'vt. 租车；包租；租车n. 宪章；契约',
        kaodian: '',
        liju1: 'The club chartered two buses to take us on holiday to Paris. ',
        chinese1: '俱乐部包租了两辆公共汽车送我们去巴黎度假。',
        liju2: 'We think that the principles and purposes of the UN Charter should be the basic norms for us to handle international affairs.  ',
        chinese2: '我们认为《联合国宪章》的宗旨和原则应该成为我们处理国际事务的基本准则。',
        liju3: 'This charter will expire in 2020.',
        chinese3: '这一契约将于2020年到期。'
      },

      {
        id: '507',
        word: 'chase ',
        ciyi: 'vt. 追逐；追求 n. 追逐；追求 ',
        kaodian: '',
        liju1: 'The huntsmen chased the deer silently. ',
        chinese1: '猎人们悄悄地追踪那只鹿。',
        liju2: 'The chase is always much more exciting than the conquest anyway.',
        chinese2: '无论如何，追求总比征服更令人兴奋。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '508',
        word: 'cheat ',
        ciyi: ' vi. 欺骗；作弊n. 欺骗，作弊；骗子',
        kaodian: '',
        liju1: ' Several students were expelled for cheating in examinations. ',
        chinese1: '有几个学生因考试作弊而被开除。',
        liju2: 'The company engaged in a deliberate effort to cheat them out of their pensions.',
        chinese2: '该公司曾蓄意诈取他们的养老金。',
        liju3: 'We found Tom was a cunning cheat.',
        chinese3: '我们发现汤姆是一个诡计多端的骗子。'
      },

      {
        id: '509',
        word: 'chef  ',
        ciyi: ' n. 厨师，大师傅 ',
        kaodian: '',
        liju1: 'The snacks disappear quickly to the delight of the chef and organizers.   ',
        chinese1: '令厨师和组织者高兴的是，这些小吃很快售空。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '510',
        word: 'chemist  ',
        ciyi: 'n. 化学家；化学工作者；药剂师',
        kaodian: '',
        liju1: ' She worked as a research chemist. ',
        chinese1: '她是一名化学研究员。',
        liju2: 'Chemist: Did he tell you how to take the medicine? ',
        chinese2: '药剂师：那么他有没有告诉你怎么服用这些要呢？',
        liju3: '',
        chinese3: ''
      },

      {
        id: '511',
        word: 'cherish ',
        ciyi: 'vt. 珍爱；怀有（感情等）',
        kaodian: '',
        liju1: 'Life is hope, so we should cherish life.   ',
        chinese1: '生命就是希望,所以我们要珍爱生命。',
        liju2: 'She cherished the memory of her father.',
        chinese2: '她怀念她的父亲。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '512',
        word: 'cherry ',
        ciyi: ' n. 樱桃；樱桃树',
        kaodian: '',
        liju1: 'The cherry-trees began to put forth their blossoms. ',
        chinese1: '樱桃树开始开花了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '513',
        word: 'chess ',
        ciyi: ' n. 国际象棋，棋',
        kaodian: '',
        liju1: 'We often recreated ourselves with chess.  ',
        chinese1: '我们常常以下棋作为消遣。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '514',
        word: 'chew  ',
        ciyi: 'v. 咀嚼；思量',
        kaodian: '',
        liju1: 'Chew your food well before you swallow it.  ',
        chinese1: '食物在吞咽前要仔细咀嚼。',
        liju2: 'He chewed the problem over in his mind.',
        chinese2: '他仔细考虑了这个问题。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '515',
        word: 'chill ',
        ciyi: ' n. 寒冷；寒意；寒心vt. 冷冻，使寒心',
        kaodian: '',
        liju1: ' September is here, bringing with it a chill in the mornings. ',
        chinese1: '9月到了，带来了清晨的寒意。',
        liju2: 'The rain has chilled me to the bone.',
        chinese2: '这场雨使我感到寒气刺骨。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '516',
        word: 'chin ',
        ciyi: 'n. 下巴；聊天',
        kaodian: '',
        liju1: 'He nailed him on the chin with the fist.   ',
        chinese1: '他一拳击中了他的下巴。',
        liju2: 'A couple of old women were chinning in the corner.',
        chinese2: '几个老太婆在角落里聊天。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '517',
        word: 'chip ',
        ciyi: 'n. 芯片；碎片；(食物的)薄片',
        kaodian: '',
        liju1: 'There’s an electronic card containing a chip. ',
        chinese1: '这有一张带有芯片的电子卡。',
        liju2: 'It contains real chocolate chips.',
        chinese2: '它里面含有纯正的巧克力颗粒。',
        liju3: 'Lily carried the fish and chips for her lunch.',
        chinese3: '莉莉带了鱼和薯条当午饭。'
      },

      {
        id: '518',
        word: 'choke ',
        ciyi: 'vt. 使窒息；阻塞 vi. 窒息；阻塞；噎',
        kaodian: '',
        liju1: ' The smoke almost choked me. ',
        chinese1: '烟呛得我几乎透不过气来。',
        liju2: 'The pipe was choked by cotton.',
        chinese2: '管道被棉花堵住了。',
        liju3: 'He choked on a soya bean and died suddenly.',
        chinese3: '他被一颗黄豆噎住，突然死去。'
      },

      {
        id: '519',
        word: 'chop ',
        ciyi: 'n. 排骨，肉块vt. 剁碎；砍',
        kaodian: '',
        liju1: 'He chopped down an old apple tree. ',
        chinese1: '他砍倒了一棵老苹果树。',
        liju2: 'My wife was cooking pork chops when I returned.',
        chinese2: '我到家时，妻子正在炖猪肉。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '520',
        word: 'chorus ',
        ciyi: ' n. 合唱队；合唱 vt. 合唱；异口同声地说',
        kaodian: '',
        liju1: ' "Hi," they chorused. ',
        chinese1: '“嗨，”他们齐声说道。',
        liju2: '  All of us joined lustily in the chorus. ',
        chinese2: '我们全都劲头十足地加入了合唱。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '521',
        word: 'Christ  ',
        ciyi: ' n. 基督；救世主',
        kaodian: '',
        liju1: ' Christ preached that we should love each other. ',
        chinese1: '基督在布道中说人们应该互爱。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '522',
        word: 'Christian  ',
        ciyi: ' n. 基督徒 a. 基督教徒的',
        kaodian: '',
        liju1: 'He was a devout Christian. ',
        chinese1: '他曾是一个虔诚的基督教徒。',
        liju2: 'Most of my friends are Christian.',
        chinese2: '我大多数朋友都信奉基督教。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '523',
        word: 'chronic ',
        ciyi: 'a. 慢性的；习惯性的；严重的；坏的',
        kaodian: '',
        liju1: 'Most of them were chronically ill. ',
        chinese1: '他们中大部分人都有慢性病。',
        liju2: "'One cause of the artist's suicide seems to have been chronic poverty.'",
        chinese2: '那位艺术家自杀的原因之一好像是极度贫困。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '524',
        word: 'cigar ',
        ciyi: 'n. 雪茄烟 ',
        kaodian: '',
        liju1: 'This kind of cigar spoils you for the others.   ',
        chinese1: '这雪茄令你对其他的烟失去兴趣。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '525',
        word: 'circuit  ',
        ciyi: ' n. 电路，线路；环行，周线，巡回v. 绕回…环行',
        kaodian: '',
        liju1: 'Any attempts to cut through the cabling will break the electrical circuit. ',
        chinese1: '任何切断电缆的做法都会使电路中断。',
        liju2: 'The Earth takes a year to make a circuit of the sun.',
        chinese2: '地球绕太阳一周需要一年的时间。',
        liju3: 'The moon circuits round the earth.',
        chinese3: '月球绕地球运行。'
      },

      {
        id: '526',
        word: 'circular  ',
        ciyi: ' a. 循环的；圆形的；环形的n. 通知，传单',
        kaodian: '',
        liju1: ' Both sides of the river can be explored on this circular walk. ',
        chinese1: '沿着这条环形步行道走，河的两边就都可以看得到了。',
        liju2: 'The students have known the content of the circular.',
        chinese2: '学生们已经知道通报的内容了。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '527',
        word: 'circulate ',
        ciyi: 'v. 使循环；使流通；传播',
        kaodian: '',
        liju1: 'Traffic circulates in the streets of a city. ',
        chinese1: '车辆和行人在市内街上川流不息。',
        liju2: 'The heart circulates blood round the body.',
        chinese2: '心脏使血液在身体内循环流动。',
        liju3: "'The news of our teacher's divorce quickly circulated round the school.'",
        chinese3: '我们的老师离婚的消息迅速传遍全校。'
      },

      {
        id: '528',
        word: ' circumstance',
        ciyi: ' n. 环境，情况，形势',
        kaodian: '',
        liju1: "'Don't deceive under any circumstance.   '",
        chinese1: '在任何情况下都不要行骗。',
        liju2: 'This means we place our trust in Him for every circumstance of life. ',
        chinese2: '这就意味着无论生活环境如何，我们都对他怀以信任。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '529',
        word: 'circus  ',
        ciyi: 'n. 马戏；马戏团；杂技团',
        kaodian: '',
        liju1: '  My real ambition was to work in a circus.',
        chinese1: '我真正的理想是去马戏团工作。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '530',
        word: ' cite',
        ciyi: 'vt. 引用；传讯；表彰',
        kaodian: '',
        liju1: ' The lawyer cited a previous case to support his argument. ',
        chinese1: '这位律师援引了一个以前的案例来证实他的论断。',
        liju2: 'He was cited in divorce proceedings.',
        chinese2: '他因离婚案被传讯。',
        liju3: 'He was cited for his outstanding service.',
        chinese3: '他的出色的服务受到表扬。'
      },

      {
        id: '531',
        word: ' civil',
        ciyi: 'a. 公民的；民间的；民用的；文职的；有礼貌的，文明的',
        kaodian: '',
        liju1: 'The civil rights bill carried by a large majority.  ',
        chinese1: '公民权利法案获得大多数同意而通过。',
        liju2: 'You negotiate with all development partners and civil society organizations implementing programmes within the country. ',
        chinese2: '你们应与各发展伙伴和民间社团商讨如何在国家级实施规划。',
        liju3: 'I daresay Peter is a civil servant a man in a well-paid position.',
        chinese3: '我猜想彼得是个公务员，薪资优厚。',
        liju4: 'As visitors, the least we can do is be civil to the people in their own land.',
        chinese4: '作为游客，我们至少要能做到文明地对待当地人民。'
      },

      {
        id: '532',
        word: 'civilisation/civilization ',
        ciyi: 'n. 文明；文化',
        kaodian: '',
        liju1: ' The Chinese civilization is one of the oldest in the world.  ',
        chinese1: '中国文化是世界上最古老的文化之一。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '533',
        word: 'civilise/civilize ',
        ciyi: ' v. 使文明；教化；使开化 ',
        kaodian: '',
        liju1: 'School education helped to civilize the people.   ',
        chinese1: '学校教育使人们文明起来',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '534',
        word: ' claim',
        ciyi: ' v.要求；声称；需要；索赔n. 要求；声称；索赔；断言；值得；权利；所有权',
        kaodian: '',
        liju1: ' He claimed that it was all a conspiracy against him.',
        chinese1: '他声称这完全是一个针对他的阴谋。',
        liju2: 'Every citizen may claim the protection of the law.',
        chinese2: '每个公民都可以要求受到法律的保护。',
        liju3: 'He repeated his claim that the people of Trinidad and Tobago backed his action.',
        chinese3: '他再三重复他所声称的：特立尼达和多巴哥的人民支持他的行动。',
        liju4: 'Last time we made a claim on our insurance, they paid up really quickly.',
        chinese4: '上次我们依据保险提出索赔时，他们赔付得很快。',
        liju3: 'Sam has set up a claim to a portion of the estate.',
        chinese3: '萨姆已对房产的一部分提出所有权的要求。'
      },

      {
        id: '535',
        word: ' clap',
        ciyi: ' vt. 拍手，鼓掌；轻轻拍 n. 鼓掌；拍手声',
        kaodian: '',
        liju1: '  Midge clapped her hands, calling them back to order.',
        chinese1: '米琪拍着手，叫他们恢复秩序。',
        liju2: 'I wouldn’t even want them to clap for me. ',
        chinese2: '我根本都不想让他们为我鼓掌。',
        liju3: '',
        chinese3: ''

      },

      {
        id: '536',
        word: ' clarify',
        ciyi: ' vt. 澄清；阐明 ',
        kaodian: '',
        liju1: ' Thank you for writing and allowing me to clarify the present position.',
        chinese1: '谢谢你来信并允许我澄清目前的状况。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '537',
        word: 'clarity  ',
        ciyi: ' n. 清楚，明晰；透明',
        kaodian: '',
        liju1: '  Without one, the other suffers; together, both provide clarity and truth.  ',
        chinese1: '这两种行为结合在一起提供了明晰和真理，是缺一不可的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '538',
        word: 'clash ',
        ciyi: ' n. 冲突，碰撞声 vi. 冲突，抵触；碰撞 ',
        kaodian: '',
        liju1: "'It's a pity the two concerts clash; I want to go to both.   '",
        chinese1: '可惜两个音乐会时间冲突，我都想去听。',
        liju2: 'The two parties clashed in the conference.',
        chinese2: '在会议中双方意见发生抵触。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '539',
        word: ' clasp',
        ciyi: ' n. 扣子，钩子；握手；拥抱v. 紧抱；紧握；扣住',
        kaodian: '',
        liju1: ' My husband gave me a warm clasp as I came back.',
        chinese1: '我回到家里时，丈夫给了我一个温暖的拥抱。',
        liju2: 'She caught the clasp on her necklace.  ',
        chinese2: '她扣好项链上的搭扣。',
        liju3: 'The girl clasped the doll tightly.',
        chinese3: '小姑娘紧紧抱着洋娃娃。',
        liju4: 'She clasped a bracelet round her wrist.',
        chinese4: '她将手镯戴在手腕上。'
      },

      {
        id: '540',
        word: 'classic  ',
        ciyi: ' a. 经典的；典型的；不朽的；最优秀的n. 名著；杰作',
        kaodian: '',
        liju1: 'The record won a gold award and remains one of the classics of modern popular music. ',
        chinese1: '该唱片获得过金奖，而且依旧是现代流行音乐的经典作品之一。',
        liju2: 'The debate in the press has been a classic example of hypocrisy.',
        chinese2: '新闻界的这场争论是虚伪的典型例子。',
        liju3: 'As I grow older, I like to reread the classics regularly.',
        chinese3: '随着我年龄的增长，我喜欢定期重读文学名著。'
      },

      {
        id: '541',
        word: 'classical ',
        ciyi: 'a. 古典的；经典的；传统的 ',
        kaodian: '',
        liju1: 'His writings were deeply subjected to the classical style.   ',
        chinese1: '他的作品深受古典文体的影响。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '542',
        word: ' classification ',
        ciyi: 'n. 分类；类别，等级',
        kaodian: '',
        liju1: ' The government uses a classification system that includes both race and ethnicity.',
        chinese1: '政府采用一种既包括人种又包括种族的分类体系。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '543',
        word: ' classify',
        ciyi: 'vt. 分类；分等',
        kaodian: '',
        liju1: 'This is true regardless of how we classify the service.  ',
        chinese1: '不论我们如何分类服务，这一点都是不变的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '544',
        word: 'clause ',
        ciyi: ' n. 条款；从句；分句 ',
        kaodian: '',
        liju1: 'What clause do you require in the contract?   ',
        chinese1: '你要求在合同中订上什么条款?',
        liju2: 'The two coordinate clauses are joined by “and”.',
        chinese2: ' 那两个并列分句由“and”连接。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '545',
        word: ' claw',
        ciyi: 'n. 爪；螯，钳 v. 抓 ',
        kaodian: '',
        liju1: ' They cling to the belly of their oppressor and simply hang on with tooth and claw.  ',
        chinese1: '它们紧紧地抱住猎食者的腹部，单用牙齿和爪子将自己挂在那里。',
        liju2: 'The two cats clawed at each other.',
        chinese2: '这两只猫用爪子互相抓。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '546',
        word: 'clay  ',
        ciyi: 'n. 粘土；泥土；似黏土的东西 ',
        kaodian: '',
        liju1: 'Bricks are made from clay.   ',
        chinese1: '砖是用黏土制成的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '547',
        word: ' clergy',
        ciyi: ' n. 神职人员；牧师；僧侣；圣职者',
        kaodian: '',
        liju1: ' Thus, his preaching was directed at not only the laity, but the clergy as well.',
        chinese1: '因此，他的讲道面向的不只是世俗之人，也面向神职人员。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '548',
        word: ' click',
        ciyi: 'v. 使发咔哒声；作咔哒声n. 滴答声；咔哒声',
        kaodian: '',
        liju1: 'The door clicked shut. ',
        chinese1: '门咔哒一声关上了。',
        liju2: 'The telephone rang three times before I heard a click and then her recorded voice.',
        chinese2: '电话响了3次后我听到了咔嗒一声响，然后是她的录音留言。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '549',
        word: 'client ',
        ciyi: 'n. 客户；顾客；委托人；当事人 ',
        kaodian: '',
        liju1: 'The client left his visiting card on his desk.   ',
        chinese1: '客户将自己的名片留在他的桌上。',
        liju2: 'It is impossible for the client to recover.  ',
        chinese2: '该诉讼委托人不可能胜诉。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '550',
        word: 'cliff ',
        ciyi: 'n. 悬崖；绝壁 ',
        kaodian: '',
        liju1: 'He was hounded to the cliff.   ',
        chinese1: '他被追逼到了悬崖边上。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '551',
        word: 'climate ',
        ciyi: ' n. 气候；风气；思潮 ',
        kaodian: '',
        liju1: 'These two regions differ greatly in climate.   ',
        chinese1: '这两个地区气候差异很大。',
        liju2: 'The growth of economy depends on a healthy political climate.',
        chinese2: '经济的增长依赖于良好的政治风气。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '552',
        word: ' climax',
        ciyi: 'n. 高潮；顶点；极点',
        kaodian: '',
        liju1: '  The drama builds steadly toward a climax.  ',
        chinese1: '这出戏逐步发展到高潮。',
        liju2: 'cling ',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '553',
        word: ' vi. 坚持；坚定；紧贴；附着 ',
        ciyi: ' The wet clothes clung to his body.',
        kaodian: '',
        liju1: 'The wet clothes clung to his body. ',
        chinese1: '湿衣服紧紧贴在他的身上。',
        liju2: 'The whole party will cling to their leader very determinedly.',
        chinese2: '全党将极其坚定地紧紧跟随着他们的领袖。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '554',
        word: ' clip',
        ciyi: 'n. 回纹针；夹vt. 剪；修剪vi. 剪；修剪；夹住 ',
        kaodian: '',
        liju1: 'She took the clip out of her hair. ',
        chinese1: '她从头发里取出发夹。',
        liju2: 'The gardener clipped the shrubbery.',
        chinese2: '园丁修剪了灌木丛。',
        liju3: 'He clipped his safety belt to a fitting on the deck.',
        chinese3: '他把安全带扣在甲板的一个固定拴上。'
      },

      {
        id: '555',
        word: 'cloak  ',
        ciyi: ' n. 斗蓬；宽大外衣 vt. 遮掩；掩盖',
        kaodian: '',
        liju1: ' The snow covered up the fields with a white cloak.  ',
        chinese1: '积雪给田野盖上了一件白色的外衣。',
        liju2: 'He cloaked his evil purpose under sweet words.',
        chinese2: '他用甜言蜜语掩盖着他邪恶的目的。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '556',
        word: ' clockwise',
        ciyi: 'a. 顺时针方向的',
        kaodian: '',
        liju1: 'Flights over Moscow are made only in the clockwise direction.   ',
        chinese1: '在莫斯科上空飞行只能是沿着顺时针方向。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '557',
        word: ' clone',
        ciyi: 'n. 克隆；无性系；翻版v. 克隆',
        kaodian: '',
        liju1: ' Tom was in some ways a younger clone of his handsome father.',
        chinese1: '汤姆在某些方面是他英俊父亲年轻时的翻版。',
        liju2: 'If you have more than one clone machine, you must do this for each machine. ',
        chinese2: '如果您有多台克隆机器，则必须为每台机器进行这个操作。',
        liju3: 'The idea of cloning extinct life forms still belongs to science fiction.',
        chinese3: '对绝种的生命形式进行克隆的想法仍然属于科学幻想。'
      },

      {
        id: '558',
        word: 'closet ',
        ciyi: ' n. 壁橱；房间a. 秘密的，私下的vt. 把…引进密室会谈',
        kaodian: '',
        liju1: '  These boots belong in the closet.  ',
        chinese1: '这些靴子应搁在壁橱里。',
        liju2: 'Tom is a closet alcoholic and always drinks in private.',
        chinese2: '汤姆私底下是个酒鬼，经常一个人偷偷喝酒。',
        liju3: 'My boss has been closeted with the police for several hours.',
        chinese3: '我的老板被警察叫到密室谈话已经有几个小时了。'
      },

      {
        id: '559',
        word: ' clothe',
        ciyi: 'vt. 给…穿衣；赋予',
        kaodian: '',
        liju1: 'He clothed himself in his best clothes.',
        chinese1: '他穿上最好的衣服。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '560',
        word: 'clue ',
        ciyi: ' n. 线索；暗示 ',
        kaodian: '',
        liju1: "'The vital clue to the killer's identity was his nickname, Peanuts. '",
        chinese1: '关于杀手身份的重大线索是他的绰号——花生。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '561',
        word: ' clumsy',
        ciyi: ' a. 笨拙的；愚笨的；不得当的',
        kaodian: '',
        liju1: ' How clumsy of me to break the vase!   ',
        chinese1: '我打碎了这个花瓶，我是有多笨！',
        liju2: 'If the matter were handled clumsily, it could cost Miriam her life.',
        chinese2: '如果问题处理不得当，可能会断送米里亚姆的性命。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '562',
        word: ' cluster',
        ciyi: ' n. 群；丛；串；星团v. 群聚；丛生 ',
        kaodian: '',
        liju1: 'Do this for all nodes in the cluster.   ',
        chinese1: '对集群中的所有节点都这样做。',
        liju2: 'The public square was clustered with young students.',
        chinese2: '广场上聚集着成群的年轻学生。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '563',
        word: 'clutch ',
        ciyi: 'n.离合器 vt.抓住；紧握；攥住',
        kaodian: '',
        liju1: 'Laura let out the clutch and pulled slowly away down the drive. ',
        chinese1: '劳拉松开离合器踏板，慢慢沿着车道把车开走了。',
        liju2: 'She clutched her purse tightly, fearing that someone might snatch it.',
        chinese2: '她紧紧攥住她的钱袋，生怕别人夺走。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '564',
        word: 'coach ',
        ciyi: ' n. 教练；辅导员；旅客车厢；长途公车；大客车vt. 训练；指导',
        kaodian: '',
        liju1: '  Her coach encouraged her throughout the marathon race to keep on running. ',
        chinese1: '她的教练在马拉松赛全程鼓励她继续不断奔跑。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '565',
        word: 'coach ',
        ciyi: ' n. 教练；辅导员；旅客车厢；长途公车；大客车vt. 训练；指导',
        kaodian: '',
        liju1: ' Her coach encouraged her throughout the marathon race to keep on running. ',
        chinese1: '她的教练在马拉松赛全程鼓励她继续不断奔跑。',
        liju2: 'We traveled to Shanghai by coach.',
        chinese2: '我们乘长途汽车去上海。',
        liju3: 'He is now being coached by a famous pianist.',
        chinese3: '他现在正由一位著名的钢琴家进行辅导。'
      },

      {
        id: '566',
        word: 'coalition ',
        ciyi: 'n. 联合；结合；结合体，结盟',
        kaodian: '',
        liju1: 'Since June the country has had a coalition government. ',
        chinese1: '从6月起，这个国家有了一个联合政府。',
        liju2: 'That helped forge a broader coalition, but the West now has its work cut out. ',
        chinese2: '这有助于建立一个更广泛的联盟，但西方现在已削减了其工作。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '567',
        word: 'coarse ',
        ciyi: ' a. 粗鲁的；粗俗的；粗糙的；粗劣的',
        kaodian: '',
        liju1: 'The women laughed coarsely at some vulgar joke. ',
        chinese1: '女人们听到某个庸俗笑话后便粗俗地笑了起来。',
        liju2: 'His shirt and pants were made of coarse fabric.  ',
        chinese2: '他的衬衣和裤子由粗糙的布料做成。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '568',
        word: 'cocaine ',
        ciyi: 'n. 可卡因',
        kaodian: '',
        liju1: ' The police report said she was doing cocaine.   ',
        chinese1: '警方报告说她正在吸可卡因。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '569',
        word: ' code',
        ciyi: ' n. 代码，密码；编码；法典；规则，法规 ',
        kaodian: '',
        liju1: '  But we have not yet implemented this in the code.  ',
        chinese1: '但我们在代码中尚未实现此功能。',
        liju2: 'Everyone, poor or rich, has to follow the code of ethics.',
        chinese2: '无论贫富，每个人都要遵守道德规范。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '570',
        word: 'cognitive  ',
        ciyi: 'a. 认知的，认识的；有感知能力',
        kaodian: '',
        liju1: ' As children grow older, their cognitive processes become sharper.',
        chinese1: '随着孩子们长大，他们的认知过程也变得越来越敏锐了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '571',
        word: 'coherent ',
        ciyi: ' a. 连贯的；明了的；清晰的；粘在一起的',
        kaodian: '',
        liju1: ' He has failed to work out a coherent strategy for modernizing the service. ',
        chinese1: '他无法想出一个连贯的策略来使该服务现代化。',
        liju2: 'The boss said that the material must be moderately coherent.',
        chinese2: '老板说材料必须有适度的阐述。',
        liju3: '',
        chinese3: '',
      },

      {
        id: '572',
        word: 'cohesive ',
        ciyi: 'a. 凝聚的；紧密结合的；有粘着力的',
        kaodian: '',
        liju1: '  Rather, this is an effort requiring dedication, discipline, and a cohesive Enterprise Transformation team.  ',
        chinese1: '相反，这是一项需要奉献、经验和有凝聚力的企业转化团队的工作。',
        liju2: 'The repairer used a special cohesive agent to stick the parts together.',
        chinese2: '维修工用一种特殊的黏合剂把零件黏在一起。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '573',
        word: ' coil ',
        ciyi: 'v. 盘绕，卷 n. 线圈，线组；卷 ',
        kaodian: '',
        liju1: 'The snake coiled, ready to strike. ',
        chinese1: '蛇盘起来准备进攻。',
        liju2: 'Pythons kill by tightening their coils so that their victim cannot breathe.',
        chinese2: '蟒蛇捕杀时紧紧盘成圈，使猎物无法呼吸。',
        liju3: 'With a coil of clothesline in his hand, the naughty bor ran away.',
        chinese3: '这个淘气的男孩拿着一卷晾衣绳跑开了。'
      },

      {
        id: '574',
        word: ' coincide',
        ciyi: 'vi. 一致，符合；同时发生；相同',
        kaodian: '',
        liju1: ' Our vacations coincided this year. ',
        chinese1: '今年我们的假期在同一时期。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '575',
        word: 'coke ',
        ciyi: ' n. 焦炭；可卡因；可口可乐 ',
        kaodian: '',
        liju1: ' Jim often laces a glass of Coke with beer.  ',
        chinese1: '吉姆常常在一杯可口可乐里掺啤酒。',
        liju2: 'As I picked up the second scuttle by the handles and tried to shovel the coke up off the floor, the mountain began to move. ',
        chinese2: '就在我握着把柄拾起第二个煤斗并尽力将焦炭从地上铲起来时，这座煤山开始移动起来。',
        liju3: 'The drug user was heavily addicted to coke.',
        chinese3: '这个吸毒者对可卡因已经严重上瘾了。'
      },

      {
        id: '576',
        word: 'collaborate ',
        ciyi: 'vi. 协助；合作 ',
        kaodian: '',
        liju1: ' The students learn to collaborate in the sheltered halls of the school.  ',
        chinese1: '学生在学校这个受庇护的大厅里学习怎样协作。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '577',
        word: 'collapse ',
        ciyi: 'vi. 倒塌；瓦解；暴跌n. 倒塌；失败；衰竭',
        kaodian: '',
        liju1: ' The weight of snow collapsed the roof.',
        chinese1: '雪的重量把房顶压塌了。',
        liju2: "'The coup's collapse has speeded up the drive to independence.'",
        chinese2: '那次政变的失败加速推动了独立进程。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '578',
        word: ' colleague',
        ciyi: ' n. 同事，同僚 ',
        kaodian: '',
        liju1: 'He has told me about the new colleague.   ',
        chinese1: '他已经向我告知新同事的情况。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '579',
        word: ' collection',
        ciyi: ' n. 收集 ；收藏品；募捐 ',
        kaodian: '',
        liju1: ' He has a fine collection of stamps.  ',
        chinese1: '他收集了一些精美的邮票。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '580',
        word: 'collective  ',
        ciyi: ' a. 集体的；共同的n. 集团；集合体；团体',
        kaodian: '',
        liju1: ' It was a collective decision. ',
        chinese1: '这是集体的决定。',
        liju2: 'To accomplish his own end, he placed collective interests in the back of his mind. ',
        chinese2: '为了达到个人目的，他把集体利益置之脑后。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '581',
        word: ' collide',
        ciyi: 'vi. 碰撞；抵触，冲突 ',
        kaodian: '',
        liju1: ' His bicycle collided with a lorry.',
        chinese1: '他的自行车撞在一辆卡车上。',
        liju2: 'We know that more is to be gained when great powers cooperate than when they collide. ',
        chinese2: '我们知道，大国之间只有通过合作而非冲突才能获得更大的收益。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '582',
        word: 'collision ',
        ciyi: 'n. 碰撞；冲突  ',
        kaodian: '',
        liju1: ' This collision had a very unusual cause.  ',
        chinese1: '这次冲突有着非同寻常的原因。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '583',
        word: ' colonel',
        ciyi: ' n. 陆军上校',
        kaodian: '',
        liju1: 'This particular place was run by an ex-Army colonel. ',
        chinese1: '这个特别的地方归一位前陆军上校掌管。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '584',
        word: ' colonial',
        ciyi: 'a. 殖民地的，殖民的',
        kaodian: '',
        liju1: ' If you like to interpret it that way, then the deep green is very much a British colonial byproduct.   ',
        chinese1: '如果你想从这个角度解释的话，这种深绿色调可以算是英国殖民地的副产品吧。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '585',
        word: 'colony  ',
        ciyi: ' n. 殖民地；移民队',
        kaodian: '',
        liju1: '  Thousands of Indians were killed in North American colonies.',
        chinese1: '在北美殖民地，成千上万的印第安人遭到了屠杀。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '586',
        word: ' column',
        ciyi: 'n. 圆柱，柱形物；专栏',
        kaodian: '',
        liju1: ' The explosion sent a column of smoke thousands of feet into the air.',
        chinese1: '爆炸造成的烟柱升入几千英尺的高空。',
        liju2: 'He uses his daily column to whale away at the war.  ',
        chinese2: '他在他的日报专栏中严厉抨击这场战争。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '587',
        word: ' combat [',
        ciyi: 'v. 战斗；搏斗n. 战斗；争论；格斗',
        kaodian: '',
        liju1: ' It was hard enough for them to combat the corruptionists. ',
        chinese1: '和腐败分子作斗争对我们来说真是举步艰难。',
        liju2: 'A reporter interviewed the combat hero.  ',
        chinese2: '记者访问了这位战斗英雄。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '588',
        word: 'combination ',
        ciyi: 'n. 结合；联合；合并；结合体；联合体',
        kaodian: '',
        liju1: 'In this scenario we need to use a combination of the above two scenarios.  ',
        chinese1: '在这个场景中，我们需要结合使用上面的两个场景知识。',
        liju2: 'David smelt the combination of hot moist breath and freshly baked cookies in the kitchen.',
        chinese2: '戴维闻到了厨房湿热的空气和新烤好的饼干的混合气味。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '',
        word: 'combine ',
        ciyi: 'vt. 使化合；使联合，使结合 ',
        kaodian: '',
        liju1: ' Education must be combined with productive labour.',
        chinese1: '教育必须与生产劳动相结合。',
        liju2: 'These substances are sometimes combined with other chemicals, such as chlorine.',
        chinese2: '这些物质有时可与其他化学品化合，例如氯。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '589',
        word: ' comedy',
        ciyi: ' n. 喜剧；喜剧性；有趣的事情',
        kaodian: '',
        liju1: 'The movie is a romantic comedy. ',
        chinese1: '这部电影是一个浪漫喜剧。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '590',
        word: 'comet ',
        ciyi: 'n. 彗星',
        kaodian: '',
        liju1: "' Halley's Comet is going to come back in 2061.'",
        chinese1: '哈雷彗星将在2061年返回。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '591',
        word: ' comic',
        ciyi: ' a. 喜剧的；滑稽的；可笑的n. 喜剧演员；滑稽人物',
        kaodian: '',
        liju1: '  He underplayed the comic elements of the opera.  ',
        chinese1: '他没有把这出歌剧的喜剧成分表演得淋漓尽致。',
        liju2: 'Grodin got a signature of this popular comic.',
        chinese2: '格罗丁得到了这个受欢迎的喜剧演员的欢迎。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '592',
        word: 'command ',
        ciyi: ' v. 命令，指挥；控制n. 指挥，统帅；指令，命令；掌握；运用能力',
        kaodian: '',
        liju1: ' He commanded the soldiers to shut the gate.',
        chinese1: '他命令士兵们把大门关上。',
        liju2: 'The general designated an officer to the command.  ',
        chinese2: '该将军任命一名军官担任指挥官。',
        liju3: 'I closed my eyes at his command.',
        chinese3: '我听从他的命令闭上了眼睛。',
        liju4: 'His command of English was excellent.',
        chinese4: '他的英语掌握的相当出色。'
      },

      {
        id: '593',
        word: ' commemorate',
        ciyi: 'vt. 庆祝，纪念；成为…的纪念',
        kaodian: '',
        liju1: "' Christmas commemorates Christ's birth.'",
        chinese1: '圣诞节是纪念耶稣生日的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '594',
        word: ' 圣诞节是纪念耶稣生日的。',
        ciyi: 'vt. 推荐；称赞；表扬',
        kaodian: '',
        liju1: '  I should like to commend this dictionary to you.',
        chinese1: '我愿向你推荐这部词典。',
        liju2: 'The commander commended the soldier for his bravery.',
        chinese2: '司令员表扬这名士兵的勇敢。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '595',
        word: ' comment',
        ciyi: ' n. 评论；意见；注释v. 发表评论；注释',
        kaodian: '',
        liju1: "' I won't comment on what people say. '",
        chinese1: '对人们说的话我不作评论。',
        liju2: 'Everyone was commenting on the new policy.',
        chinese2: '大家都在评论这项新政策。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '596',
        word: ' commerce ',
        ciyi: ' n. 贸易，商业',
        kaodian: '',
        liju1: ' This country has been trying to expand its commerce with other nations.  ',
        chinese1: '该国一直在试图扩大与其他国家的贸易往来。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '597',
        word: ' commercia',
        ciyi: ' a. 商业的；营利的；贸易的 ',
        kaodian: '',
        liju1: '  They are the leading manufacturer in both defence and commercial products.',
        chinese1: '他们在防御性和商业性的产品方面都是领先的制造商。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '598',
        word: ' commission',
        ciyi: 'n. 委员会；委任；代办；佣金，手续费',
        kaodian: '',
        liju1: ' Minister in Charge of the State Education Commission/',
        chinese1: '国家教育委员会主任。',
        liju2: 'Our china can be bought off the shelf or by commission.',
        chinese2: '我们的瓷器可以现货购买或委托定做。',
        liju3: 'He took his commission out before turning in the rest of the money.  ',
        chinese3: '他扣除自己的佣金后上缴余款。'
      },

      {
        id: '599',
        word: ' commit ',
        ciyi: ' vt. 犯罪，做错事；把...交托给 ；提交',
        kaodian: '',
        liju1: ' This is a man who has committed murder. ',
        chinese1: '这是个犯了谋杀罪的男人。',
        liju2: 'The old man committed his will to the care of the lawyer.',
        chinese2: '老人把他的遗嘱委托律师保管。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '600',
        word: ' committee',
        ciyi: ' n. 委员会；全体委员 ',
        kaodian: '',
        liju1: 'We shall relegate this problem to the organizing committee.  ',
        chinese1: '我们将把这个问题委托组织委员会处理。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '601',
        word: 'commodity ',
        ciyi: 'n. 商品，货物；日用品',
        kaodian: '',
        liju1: 'Prices went up on several basic commodities like bread and meat. ',
        chinese1: '面包、肉等几种基本商品的价格上涨了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '602',
        word: 'commonplace ',
        ciyi: 'a. 平凡的；陈腐的 ',
        kaodian: '',
        liju1: 'He was an unambitious man destined for a commonplace job. ',
        chinese1: '他是一个没有野心的人，注定要找一个平凡的工作。',
        liju2: 'John was expelled from the meeting room for he made a commonplace speech again.',
        chinese2: '约翰再次因为陈词滥用而被赶出了会议室。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '603',
        word: ' commonwealth',
        ciyi: 'n. 联邦；共和国；国民整体 ',
        kaodian: '',
        liju1: ' This is in the earliest years of the commonwealth government.   ',
        chinese1: '这是在联邦政府刚成立不久的几年间。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '604',
        word: 'communicate ',
        ciyi: 'vi. 通讯，通话；交流 vt. 传达；传递',
        kaodian: '',
        liju1: '  We can communicate with people in most parts of the world by telephone.',
        chinese1: '我们可以通过电话与世界大部分地区的人民联系。',
        liju2: 'We learn a language in order to communicate.',
        chinese2: '我们学习一种语言是为了交流思想。',
        liju3: 'They successfully communicate their knowledge to others.',
        chinese3: '他们成功地把他们的知识传达给别人。'
      },

      {
        id: '605',
        word: ' communication',
        ciyi: ' n. 通讯，传达，交流； 通信系统；交通工具；',
        kaodian: '',
        liju1: ' Everything you do is based on some type of communication.  ',
        chinese1: '你做的每件事都是建立在某个交流形式的基础上的。',
        liju2: 'The engineers checked the communications but found nothing wrong with them.',
        chinese2: '工程师检查了通信系统，但没发现什么毛病。',
        liju3: 'It’s known that Paris has good communications with many European cities.',
        chinese3: '众所周知，巴黎和许多欧洲城市之间交通便利。'
      },

      {
        id: '606',
        word: 'community ',
        ciyi: 'n. 社区；团体；社会；共同体',
        kaodian: '',
        liju1: 'Two of our greatest strengths are diversity and community. ',
        chinese1: '我们的两个最大优点是多样性和团体精神。',
        liju2: 'He believed that the European Economic Community should consolidate. ',
        chinese2: '他认为欧洲经济共同体应该加强。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '607',
        word: ' commute',
        ciyi: 'v. 通勤；乘公交上下班；代偿n. 通勤；在两地之间坐车往返 ',
        kaodian: '',
        liju1: 'They commute between Beijing and Tianjin every day. ',
        chinese1: '他们每天往返于北京与天津之间。',
        liju2: 'There are significant numbers of commuters using our streets.',
        chinese2: '有相当多的通勤者使用我们的街道。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '608',
        word: ' compact',
        ciyi: 'vt. 使简洁；压缩a. 紧凑的，紧密的；简洁的',
        kaodian: '',
        liju1: 'The snow on the pavement was compacted and has turned to ice. ',
        chinese1: '人行便道上的雪被踩实并结成了冰。',
        liju2: 'I think this is the most desirable of the compact cars.  ',
        chinese2: '我认为这款车型是紧凑型车中最诱人的一款。',
        liju3: 'So it is compact notation.  ',
        chinese3: '所以它是一个简洁的标记。',
        liju3: 'We need a cmpact man to carry the big luggage.',
        chinese3: '我们需要一个结实的男人来扛大行李。'
      },

      {
        id: '609',
        word: 'comparable ',
        ciyi: 'a. 可比较的；比得上的',
        kaodian: '',
        liju1: 'In other comparable countries, real wages increased much more rapidly. ',
        chinese1: '在其他可比的国家里实际工资增长快得多。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '610',
        word: 'comparative ',
        ciyi: 'a. 比较的；相当的 ',
        kaodian: '',
        liju1: 'This blouse looks more elegant by comparison. ',
        chinese1: '相比较而言，这件上衣看起来更讲究一些。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '611',
        word: ' comparison',
        ciyi: ' n. 比较；对照；比喻；比较关系',
        kaodian: '',
        liju1: ' The amount of carbon dioxide released by human activities such as burning coal and oil is small in comparison.',
        chinese1: '相比之下人类燃烧煤、石油等活动所释放的二氧化碳的量是少的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '612',
        word: ' compartment',
        ciyi: 'n. 隔间；分隔的小房间；卧车上的小客房',
        kaodian: '',
        liju1: 'On the way home we shared our first class compartment with a group of businessmen. ',
        chinese1: '在回家的路上我们和一群商人共同乘坐头等车厢。',
        liju2: 'The fire started in the baggage compartment.',
        chinese2: '火是从行李舱着起来的。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '613',
        word: ' compass ',
        ciyi: 'n. 指南针，罗盘；圆规 ',
        kaodian: '',
        liju1: 'We had to rely on a compass and a lot of luck to get here. ',
        chinese1: '我们只得靠罗盘和很大的运气到达这儿。',
        liju2: 'Use your compass to bisect an angle. ',
        chinese2: '用圆规把一个角二等分。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '614',
        word: 'compassion ',
        ciyi: 'n. 同情；怜悯',
        kaodian: '',
        liju1: 'Elderly people need time and compassion from their physicians. ',
        chinese1: '老年人需要医生的时间和同情心。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '615',
        word: ' compatibl',
        ciyi: 'a. 兼容的；能和的来的；能和睦相处的',
        kaodian: '',
        liju1: 'It should allow the dynamic substitution of compatible partners.   ',
        chinese1: '它应该允许动态替换相容的合作者。',
        liju2: 'We’re hoping to find a compatible roommate.',
        chinese2: '我们希望能找到一个能合得来的室友。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '616',
        word: ' compel',
        ciyi: 'vt. 强迫，迫使；强使发生',
        kaodian: '',
        liju1: 'Nothing can compel me to do such a thing.   ',
        chinese1: '没有什么可以强迫我做这件事。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '617',
        word: ' compensate',
        ciyi: 'v.补偿，赔偿；弥补',
        kaodian: '',
        liju1: '  The damages are designed to compensate victims for their direct losses.',
        chinese1: '该赔偿金是用来补偿受害人的直接损失的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '618',
        word: 'competent  ',
        ciyi: 'a. 胜任的；有能力的；能干的 ',
        kaodian: '',
        liju1: ' He was a loyal, distinguished and very competent civil servant. ',
        chinese1: '他是一个忠诚、出色、很有能力的公务员。',
        liju2: 'He is not competent to the task of teaching English.  ',
        chinese2: '他不能胜任英语教学工作。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '619',
        word: ' compile',
        ciyi: 'vt. 编译；编制；汇编；搜索 ',
        kaodian: '',
        liju1: ' It often takes five or six years of hard work to compile a good dictionary.',
        chinese1: '编一部好的词典常常需要苦干五六年。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '620',
        word: ' complain',
        ciyi: 'v. 抱怨；控诉；申诉',
        kaodian: '',
        liju1: 'They never complained about working overtime ',
        chinese1: '他们对加班加点从来不抱怨。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '621',
        word: ' complaint',
        ciyi: 'v. 抱怨；控诉；申诉',
        kaodian: '',
        liju1: 'They never complained about working overtime. ',
        chinese1: '他们对加班加点从来不抱怨。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '622',
        word: 'complaint  ',
        ciyi: 'n. 抱怨；诉苦；疾病；申诉 ',
        kaodian: '',
        liju1: "'My main complaint is that we can't go out on the racecourse anymore. '",
        chinese1: '我抱怨的主要缘由是我们无法再去外面的赛道了。',
        liju2: 'Eczema is a common skin complaint which often runs in families.',
        chinese2: '湿疹是一种常见的皮肤病，常会遗传。',
        liju3: 'He understood her suggestion as a complaint. ',
        chinese3: '他认为她提出的意见不过是向大家诉苦。'
      },

      {
        id: '623',
        word: 'complement  ',
        ciyi: 'n. 补语；余角；余数；补足物vt.补足，补充',
        kaodian: '',
        liju1: 'This wine complements the food perfectlt. ',
        chinese1: '配上葡萄酒，这顿饭简直太美了。 ',
        liju2: 'Candles are perfect complements to any romantic.',
        chinese2: '蜡烛是所有浪漫晚餐的完美点缀。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '624',
        word: ' complementary ',
        ciyi: ' a. 补足的，互补的；辅导的',
        kaodian: '',
        liju1: 'I think they are very complementary.   ',
        chinese1: '我想他们是非常互补的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '625',
        word: 'complex ',
        ciyi: 'a. 复杂的；综合的；合成的n. 复合体；综合体',
        kaodian: '',
        liju1: ' This project involves a lot of complex technical problems. ',
        chinese1: '这个方案牵涉到许多复杂的技术问题。',
        liju2: 'We introduced a complex piece of machinery last month.',
        chinese2: '上个月，我们引进了一台组合机器。',
        liju3: 'The program is the complex of our suggestions.',
        chinese3: '该计划综合了大家的建议。'
      },

      {
        id: '626',
        word: ' complicate ',
        ciyi: 'vt. 使复杂化；使恶化 ',
        kaodian: '',
        liju1: '  If the answer to all of these questions is no, a framework will only complicate matters. ',
        chinese1: '如果所有这些问题的答案都为否，那么使用框架只会把事情变复杂。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '627',
        word: 'complicated ',
        ciyi: 'a. 难懂的，错综复杂的；麻烦的',
        kaodian: '',
        liju1: ' Do not be rather unsophisticated in the complicated political struggle.  ',
        chinese1: '在错综复杂的政治斗争中不要太天真了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '628',
        word: 'complimen ',
        ciyi: ' n. 恭维；称赞；问候；致意；道贺vt. 恭维；称赞',
        kaodian: '',
        liju1: ' You can do no harm by paying a woman compliments.',
        chinese1: '对女人讲恭维话不会有什么害处。',
        liju2: 'I am glad to receive so many compliments on Spring Festival.',
        chinese2: '我很高兴在春节收到这么多的祝福。',
        liju3: 'They complimented me on the way I looked each time they saw me.',
        chinese3: '他们每次见到我都就我的外貌恭维我。'
      },

      {
        id: '629',
        word: ' comply ',
        ciyi: 'vi. 遵守；照做，遵从；应允',
        kaodian: '',
        liju1: 'Visitors to the mine must comply with the rules. ',
        chinese1: '到矿上参观的人必须遵守规章。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '630',
        word: 'component  ',
        ciyi: 'a. 组成的，合成的n. 成分；组件；元件',
        kaodian: '',
        liju1: 'The management plan has four main components. ',
        chinese1: '该管理计划有4个主要组成部分。',
        liju2: 'In this example, the component itself provides the measurement.  ',
        chinese2: '在这个例子中，组件本身提供了度量。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '631',
        word: 'compose ',
        ciyi: 'vt. 构成；组成；由…组成vi. 作曲；创作 ',
        kaodian: '',
        liju1: 'Mere facts, badly stated, do not compose a good book. ',
        chinese1: '只有胡乱堆砌的事实构不成一本好书。',
        liju2: 'The force would be composed of troops from NATO countries.',
        chinese2: '该部队将由北约各国的军队组成。',
        liju3: 'Vivaldi composed a large number of very fine concertos.',
        chinese3: '维瓦尔蒂创作了大量非常优美的协奏曲。'
      },

      {
        id: '632',
        word: 'composite  ',
        ciyi: ' n. 合成物；混合物a. 复合的；合成的 ',
        kaodian: '',
        liju1: ' Cuba is a composite of diverse traditions and people.',
        chinese1: '古巴是一个不同传统和民族的融合体。',
        liju2: 'The police artist made a composite picture of the murderer.',
        chinese2: '警方的画像专家制作出了一幅杀人犯的合成照片。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '633',
        word: ' composition',
        ciyi: ' n. 作文，作曲，作品；成分；结构',
        kaodian: '',
        liju1: "' Mozart's compositions are undoubtedly among the worlds greatest.'",
        chinese1: '莫扎特的作品无疑位列于世界上最伟大的作品之中。',
        liju2: 'Choose them if you like, but don’t confuse the nutrient composition. ',
        chinese2: '如果你喜欢的话就选择它们，但是不要混淆营养成分。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '634',
        word: ' compound ',
        ciyi: 'n. 化合物；混合物a. 复合的；混合的',
        kaodian: '',
        liju1: ' Honey is basically a compound of water, two types of sugar, vitamins and enzymes.',
        chinese1: '蜂蜜主要是水、两种糖、维生素和酶的混合物。',
        liju2: 'We can join simple statements together to make compound statemets.',
        chinese2: '我们可以把简单的陈述合在一起做综述。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '635',
        word: ' comprehend',
        ciyi: 'vt. 理解；了解',
        kaodian: '',
        liju1: ' The child read the story but did not comprehend its meaning.',
        chinese1: '这个孩子读了这篇故事，但不能理解它的意思。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '636',
        word: 'comprehension  ',
        ciyi: 'n. 理解力；领悟',
        kaodian: '',
        liju1: ' This was utterly beyond her comprehension. ',
        chinese1: '这完全超出了她的理解力。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '637',
        word: 'comprehensive  ',
        ciyi: 'a. 综合的；广泛的；全面的',
        kaodian: '',
        liju1: 'This one is designed to be the most comprehensive.   ',
        chinese1: '这次调查是所有调查中最全面的一次。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '638',
        word: 'compress ',
        ciyi: ' vt. 压缩，浓缩 ',
        kaodian: '',
        liju1: ' The four debates will be compressed into an eight-day period.',
        chinese1: '4场辩论将被压缩在8天内。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '639',
        word: 'comprise  ',
        ciyi: 'vt. 包含；包括；构成 ',
        kaodian: 'The committee comprises men of widely different views.',
        liju1: '该委员会包括了具有各种不同意见的人。 ',
        chinese1: '',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '640',
        word: ' compromise',
        ciyi: ' vi. 妥协；让步n. 妥协，和解；折衷',
        kaodian: '',
        liju1: ' Compromise makes for success in negotiations.   ',
        chinese1: '妥协有助于谈判的成功。',
        liju2: 'He refused to compromise his principles.',
        chinese2: '他对他的原则寸步不让。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '641',
        word: ' compulsory',
        ciyi: 'a. 义务的；必修的；被强制的',
        kaodian: '',
        liju1: '  He believes that the study of history should be compulsory in school. ',
        chinese1: '他认为在学校里学习历史应该是强制性的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '642',
        word: 'compute ',
        ciyi: ' vt. 计算；估计 n. 计算；估计；推断',
        kaodian: '',
        liju1: 'If you compute the curl, you can check each of these. ',
        chinese1: '如果你计算旋度的话，所有这些都可以核对的。',
        liju2: 'Who can compute the distance of the moon from the earth?  ',
        chinese2: '谁能计算出月球与地球的距离?',
        liju3: '',
        chinese3: ''
      },

      {
        id: '643',
        word: 'conceal  ',
        ciyi: 'vt. 隐藏；隐瞒；隐蔽 ',
        kaodian: '',
        liju1: '  I did not conceal anything from him.  ',
        chinese1: '我对他什么也不隐瞒。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '644',
        word: ' concede',
        ciyi: 'vt. 承认…为真，承认；退让；给予；让步',
        kaodian: '',
        liju1: ' This dictionary is generally conceded to be the best in China.',
        chinese1: '这部词典普遍被承认是中国最好的词典。',
        liju2: 'He conceded the election to his opponents.',
        chinese2: '他承认他在竞选中输给对手。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '645',
        word: ' conceive',
        ciyi: 'v. 设想；构思；以为；怀孕；受孕',
        kaodian: '',
        liju1: '  He conceived a new plan very quickly.',
        chinese1: '他很快就构思出一个新的计划方案。   ',
        liju2: 'Their first child was conceived in January and born in October.',
        chinese2: '他们的第一个孩子是在一月怀上、十月出生的。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '646',
        word: ' concentrate',
        ciyi: 'v. 集中，专心；浓缩；n. 浓缩物',
        kaodian: '',
        liju1: 'You must concentrate all your energies on the study of English. ',
        chinese1: '你必须集中全力学习英语。',
        liju2: 'The orange juice has been concentrated.',
        chinese2: '橘子汁已经过浓缩。',
        liju3: 'Mother sent Tom to buy the orange juice concentrate.',
        chinese3: '妈妈让汤姆去买浓缩橘子汁。'
      },

      {
        id: '647',
        word: 'concept ',
        ciyi: ' n. 观念，概念；思想 ',
        kaodian: '',
        liju1: ' A small baby has no concept of right and wrong.   ',
        chinese1: '婴儿没有是非概念。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '648',
        word: 'conception ',
        ciyi: 'n. 观念；概念；设想；构想',
        kaodian: '',
        liju1: ' This conception has been rigidified.  ',
        chinese1: '这种观念已被僵化。',
        liju2: 'Modern industry is based on the conception of the maximum production at lowest cost.',
        chinese2: '现代工业基于以最低成本生产出最多产品的构想。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '649',
        word: 'concern',
        ciyi: 'vt.涉及，关系到；关心，观念n.关心；挂念；利害关系',
        kaodian: '',
        liju1: ' This matter concerns all of us.',
        chinese1: '这件事与我们每个人都有关系。',
        liju2: 'Her illness concerns her parents.',
        chinese2: '她的病使她的父母很挂念。',
        liju3: 'Without her care and concern, he had no chance at all.',
        chinese3: '没有她的照顾和关心，他根本就没有机会。',
        liju4: 'As a partner, he has a concern in that company.',
        chinese4: '作为一个股东，他与哪家公司有利害关系。'
      },

      {
        id: '650',
        word: ' concession',
        ciyi: 'n. 让步；特许（权）；迁就；退位',
        kaodian: '',
        liju1: ' We can’t make heavy concession to the matter.   ',
        chinese1: '我们在这个问题上不能过于让步。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '651',
        word: ' concise',
        ciyi: 'a. 简明的，简洁的',
        kaodian: '',
        liju1: "' He'd delivered his report clearly and concisely.'",
        chinese1: '他简洁明了地陈述了他的报告。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '652',
        word: ' conclude',
        ciyi: 'vt. 断定，下结论；结束；终止；缔结，议定',
        kaodian: '',
        liju1: "'They concluded the meeting at 6 o'clock in the afternoon. '",
        chinese1: '他们于下午六点结束了会议。',
        liju2: 'What can be concluded from these observations?',
        chinese2: '从这些观察中能够得出什么样的结论呢?',
        liju3: 'They concluded an agreement with their neighbouring country.',
        chinese3: '他们与邻邦缔结了一项协定。'
      },

      {
        id: '653',
        word: 'conclusio ',
        ciyi: 'n. 结论；终结；结局；推论',
        kaodian: '',
        liju1: ' You should not jump at conclusion. ',
        chinese1: '你不该轻率地乱下结论。',
        liju2: 'At the conclusion of the programme, I asked the children if they had any questions they wanted to ask me.',
        chinese2: '节目结束时我问孩子们是否有要问我的问题。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '654',
        word: ' concrete',
        ciyi: 'a. 实质性的，具体的；有形的vt. 使凝固；用混凝土修筑n. 混凝土',
        kaodian: '',
        liju1: '  I had no concrete evidence.',
        chinese1: '我当时没有明确而具体的证据。',
        liju2: 'The workmen are still busy concreting the road.',
        chinese2: '工人们仍忙着用混凝土铺路。',
        liju3: 'The posts have to be set in concrete.',
        chinese3: '这些柱子必须固定在混凝土中。'
      },

      {
        id: '655',
        word: 'condemn  ',
        ciyi: 'vt. 谴责；判刑，定罪；声讨',
        kaodian: '',
        liju1: '  Most people condemn war.',
        chinese1: '大多数人都谴责战争。',
        liju2: 'He was condemned to death.',
        chinese2: '他被判处死刑。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '656',
        word: 'condense ',
        ciyi: 'v. 使凝结；使压缩；精简；压缩',
        kaodian: '',
        liju1: 'At normal pressures steam condenses at 100℃. ',
        chinese1: '在正常的压力下，蒸气在摄氏100°时凝结成液体。',
        liju2: 'He managed to condense his letter of application to one page.',
        chinese2: '他设法将他的申请书压缩成一页。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '657',
        word: ' conduct',
        ciyi: 'vt. 管理；处理；引导；传热；传导；指挥乐队n.行为；举动；品行；引导；实施',
        kaodian: '',
        liju1: 'Some rules of conduct are determined by culture. ',
        chinese1: '文化决定了某些行为准则。',
        liju2: 'Actors may hire agents to conduct their affairs.',
        chinese2: '演员可以雇用经纪人掌管他们的事务。',
        liju3: 'Most plastics do not readily conduct electricity.',
        chinese3: '大多数塑料都不容易导电。'
      },

      {
        id: '658',
        word: 'Our music teacher often conducts the schools orchestra. ',
        ciyi: '我们的音乐老师常担任校管弦乐团的指挥。',
        kaodian: '',
        liju1: ' ',
        chinese1: '',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '659',
        word: 'conductor ',
        ciyi: 'n. 导体；导线；售票员；领导者；管理人；指挥，领队',
        kaodian: '',
        liju1: ' Graphite is a highly efficient conductor of electricity. ',
        chinese1: '石墨是一种高效的电导体。',
        liju2: 'The conductor might be commanding his musicians, but he cannot control his audience.',
        chinese2: '指挥家也许能够指挥他的乐师，但却无法掌控观众。',
        liju3: 'The bus conductor forgot to remind him to get off at that station. ',
        chinese3: '公共汽车售票员忘记提醒他在那一站下车了。'
      },

      {
        id: '660',
        word: ' confer ',
        ciyi: ' vt. 授予；给予vi. 协商;商议',
        kaodian: '',
        liju1: ' The school confers a medal on any student who is not absent a single day.',
        chinese1: '学校对一天也不缺席的学生发给一枚奖章。',
        liju2: 'He conferred with Hill and the others in his office.',
        chinese2: '他和希尔以及他办公室里的其他人进行了商议。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '661',
        word: ' conference',
        ciyi: ' n. 会议；讨论 ',
        kaodian: '',
        liju1: ' The conference underscored the importance of modern industry.  ',
        chinese1: '会议强调了现代工业的重要性。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '662',
        word: 'confess ',
        ciyi: 'vt. 承认；供认；坦白；忏悔',
        kaodian: '',
        liju1: ' She confessed her sins.',
        chinese1: '她忏悔她的罪过。',
        liju2: 'I am half ashamed to confess it.  ',
        chinese2: '承认这事我真有些羞愧。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '663',
        word: ' confidence',
        ciyi: ' n. 信心；自信；信任；秘密；保密 ',
        kaodian: '',
        liju1: ' This has contributed to the lack of confidence in the FDA.',
        chinese1: '这导致了对食品与药品管理局信任的缺乏。',
        liju2: 'The band is in excellent form and brimming with confidence.',
        chinese2: '该乐队处于极好的状态，表现得充满信心。',
        liju3: 'We told you all these things in confidence.',
        chinese3: '我们告诉你的这些事情都是保密的。'
      },

      {
        id: '664',
        word: ' confident',
        ciyi: 'a. 自信的；确信的',
        kaodian: '',
        liju1: ' She is confident that everybody is on her side. ',
        chinese1: '她确信每个人都在她那一边。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '665',
        word: 'confidential ',
        ciyi: ' a. 机密的；秘密的；亲信的',
        kaodian: '',
        liju1: ' Soon after, I made confidential inquiry as to how and when it all happened.  ',
        chinese1: '不久之后，我对这一切是如何以及何时发生的做了秘密调查。',
        liju2: 'Monica read the letter to all her confidential friends.',
        chinese2: '莫妮卡将这封信读给了所有的好朋友听。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '666',
        word: ' confine ',
        ciyi: 'vt. 限制；局限于；禁闭',
        kaodian: '',
        liju1: '  He did not confine himself to the one language.',
        chinese1: '他没把自己局限于这一门语言。',
        liju2: 'He was confined to prison for ten years.',
        chinese2: '他在狱中被监禁了十年。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '667',
        word: ' confirm',
        ciyi: ' vt.确认；确定；证实；批准；使巩固 ',
        kaodian: '',
        liju1: 'The experiment confirmed my theory. ',
        chinese1: '实验证实了我的理论。',
        liju2: 'The treaty was confirmed by the president.',
        chinese2: '条约已被总统批准。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '668',
        word: ' conflict',
        ciyi: ' n. 冲突，抵触；矛盾；战斗；斗争；争执 ',
        kaodian: '',
        liju1: ' Personal ethics and professional ethics sometimes conflict.',
        chinese1: '个人道德与职业道德之间有时会相冲突。',
        liju2: 'Try to keep any conflict between you and your ex-partner to a minimum.',
        chinese2: '尽量把你和前合伙人之间的争执控制到最少。',
        liju3: 'Mike came into the conflict without any weapon.',
        chinese3: '迈克赤手空拳地加入了这场战斗。'
      },

      {
        id: '669',
        word: ' conform',
        ciyi: 'vi. 符合；遵守；顺应 ',
        kaodian: '',
        liju1: '  All students must conform to the rules.',
        chinese1: '所有的学生都必须遵守校规。',
        liju2: 'The lamp has been designed to conform to new safety standards.',
        chinese2: '该灯设计得符合新的安全标准。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '670',
        word: ' confront',
        ciyi: 'vt. 面对；遭遇；使面临',
        kaodian: '',
        liju1: ' We must confront future with optimism.  ',
        chinese1: '我们必须乐观地面对未来。',
        liju2: 'She was confronted with severe money problems.',
        chinese2: '她面临严重的资金问题。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '671',
        word: ' confuse',
        ciyi: ' vt. 使混乱；使困惑；混淆；使迷惑',
        kaodian: '',
        liju1: '  You have confused the meanings of the two words.',
        chinese1: '你把这两个词的意思弄混了。',
        liju2: 'The player broke back in order to confuse the opposing players.  ',
        chinese2: '这名橄榄球员为了迷惑对方球员而突然朝反方向急跑。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '672',
        word: 'confusion  ',
        ciyi: 'n. 混淆，混乱；困惑',
        kaodian: '',
        liju1: ' His interference spilt over into confusion.   ',
        chinese1: '他的干预引起了混乱。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '673',
        word: ' congratulate ',
        ciyi: 'vt. 祝贺；恭喜；自我庆幸 ',
        kaodian: '',
        liju1: ' I sent him a telegram, congratulating him on his success.',
        chinese1: '我给他发去一个电报，祝贺他的成功。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '674',
        word: 'congratulation ',
        ciyi: 'n. 祝贺；恭喜；祝贺词',
        kaodian: '',
        liju1: "' In response, Lee Myung-bak expressed congratulation on the complete success of the second trilateral leaders' meeting.  '",
        chinese1: '李明博祝贺第二次中日韩领导人会议取得圆满成功。',
        liju2: 'Jane framed a few congratulations before writing these cards.',
        chinese2: '简在写这些卡片前先构思了一下祝贺词。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '675',
        word: 'congress ',
        ciyi: 'n. 国会；会议；代表大会 ',
        kaodian: '',
        liju1: ' Congress is behind the plan.  ',
        chinese1: '(美)国会支持此项计划。',
        liju2: 'A lot has changed after the party congress.',
        chinese2: '该党代表大会后很多都变了。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '676',
        word: ' conjunction ',
        ciyi: ' n. 连接词；结合；连接',
        kaodian: '',
        liju1: ' The two clauses are joined by a conjunction.  ',
        chinese1: '这两个分句由一个连词连在一起。',
        liju2: 'Textbooks are designed to be used in conjunction with classroom teaching.',
        chinese2: '教科书被设计成与课堂教学结合使用。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '677',
        word: 'connection/connexion ',
        ciyi: 'n. 连接；关系；联系',
        kaodian: '',
        liju1: 'What is the connection between the two ideas?   ',
        chinese1: '这两个意念之间有何联系?',
        liju2: 'Mexico City has excellent air and rail connections to the rest of the country.',
        chinese2: '墨西哥城有很好的空运和铁路连接全国各地。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '678',
        word: ' conquer',
        ciyi: ' vt. 战胜，征服；克服，破除 ',
        kaodian: '',
        liju1: '  They conquered the flood after a strenuous fight lasting four days and four nights.',
        chinese1: '经过四天四夜的苦战他们终于战胜了洪水。',
        liju2: 'We all have to conquer some fears.  ',
        chinese2: '我们都必须克服某些恐惧。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '679',
        word: 'conquest ',
        ciyi: 'n. 征服，战胜；战利品',
        kaodian: '',
        liju1: ' The pianist made a conquest of every audience for which she played.   ',
        chinese1: '这位钢琴家以她的演奏征服了每一位听众。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '680',
        word: ' conscience',
        ciyi: 'n. 道德心，良心；良知',
        kaodian: '',
        liju1: 'The temptation was warring with his conscience.   ',
        chinese1: '诱惑在与他的良心进行斗争。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '681',
        word: ' conscientious',
        ciyi: ' a. 认真的；尽责的；勤勤恳恳的',
        kaodian: '',
        liju1: '  She is very conscientious and never skimps her work.  ',
        chinese1: '她办事认真，从不敷衍了事。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '682',
        word: 'conscious ',
        ciyi: ' a. 意识到的；自觉的；神志清醒的',
        kaodian: '',
        liju1: '  How you view yourself and your world are conscious choices. ',
        chinese1: '如何看待自己和你眼中的世界是有意识的选择。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '683',
        word: 'consecutive ',
        ciyi: 'a. 连贯的；连续不断的',
        kaodian: '',
        liju1: ' The Cup was won for the third consecutive year by the Toronto Maple Leafs.',
        chinese1: '这个奖杯连续第三年由多伦多枫叶队赢去了。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '684',
        word: ' consensus ',
        ciyi: 'n. 一致；合意；一致同意',
        kaodian: '',
        liju1: ' Take a straw poll of your friends and we guarantee that you will find no consensus.  ',
        chinese1: '在你的朋友中进行一个民意投票，我们保证你不会得到一致的意见。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '685',
        word: ' consent',
        ciyi: 'n /vi. 同意；赞成；答应 ',
        kaodian: '',
        liju1: 'He misinterpreted her silence as giving consent.   ',
        chinese1: '他把她的沉默误认为是同意。',
        liju2: "'I'm sure she wouldn't consent.'",
        chinese2: '我敢肯定她不会答应的。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '686',
        word: ' consequence',
        ciyi: 'n. 结果；影响；重要性；推论',
        kaodian: '',
        liju1: 'This is an inevitable consequence of consciousness.  ',
        chinese1: '这是意识的一个不可避免的结果。',
        liju2: 'He is man of great consequence.',
        chinese2: '他是一个很重要的人物。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '687',
        word: ' consequently',
        ciyi: 'ad. 因此；结果；所以',
        kaodian: '',
        liju1: 'Consequently, this decision could be deferred to the formal UI-design process.  ',
        chinese1: '因而这个决定可以推迟到正式的UI设计过程。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '688',
        word: ' conservation',
        ciyi: ' n. 保存；保护；守恒；不',
        kaodian: '',
        liju1: ' Ape conservation tackles both of these issues head on.  ',
        chinese1: '保护猿可以解决即将面临的这两个问题。',
        liju2: 'This is the first time we see how energy is involved in the conservation process. ',
        chinese2: '这是我们第一次看到能量是如何涉及到守恒过程中。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '689',
        word: 'conservative  ',
        ciyi: ' n. 保守主义者 a. 保守的；守旧的',
        kaodian: '',
        liju1: '  He listed himself as a conservative.  ',
        chinese1: '他自称是一个保守主义者。',
        liju2: 'The girl was well dressed, as usual, though in a more conservative style.',
        chinese2: '这个女孩像平常一样穿着得体，但式样则更守旧。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '690',
        word: ' considerable',
        ciyi: 'a. 相当大的；可观的；重要的，值得考虑的',
        kaodian: '',
        liju1: 'They not only protect health. They bring in considerable revenue.   ',
        chinese1: '他们不仅保护健康，还将带来可观的收入。',
        liju2: 'Tariffs and Non Tariff Barriers have a very considerable influence on the pattern of world trade. ',
        chinese2: '关税壁垒与非关税壁垒对世界贸易的模式有着非常重要的影响。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '691',
        word: 'considerate',
        ciyi: ' a. 体贴的；体谅的；考虑周到的',
        kaodian: '',
        liju1: '  He is the most considerate person I have ever known.',
        chinese1: '他是我认识的人中考虑最周全的人。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '692',
        word: ' consist',
        ciyi: ' 由…组成；在于；存在于',
        kaodian: '',
        liju1: ' Carbon dioxide consists of carbon and oxygen. ',
        chinese1: '二氧化碳是由碳和氧组成的。',
        liju2: "'True patriotism consists in putting the interests of one's country above everything.'",
        chinese2: '真正的爱国精神在于将国家的利益置于一切之上。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '693',
        word: 'consistent ',
        ciyi: ' a. 始终如一的，一致的 ',
        kaodian: '',
        liju1: 'These actions are consistent with his principles.   ',
        chinese1: '这些行为与他的原则是一致的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '694',
        word: 'console ',
        ciyi: ' vt. 安慰；慰藉；抚慰',
        kaodian: '',
        liju1: ' She felt she could console the child better than anyone else.  ',
        chinese1: '她认为自己比任何人都能更好地安慰这孩子。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '695',
        word: ' consolidate',
        ciyi: 'v. 巩固，加强 ',
        kaodian: '',
        liju1: 'He believed that the European Economic Community should consolidate. ',
        chinese1: '他认为欧洲经济共同体应该加强。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '696',
        word: 'conspicuous ',
        ciyi: ' a. 显著的；明显的；显眼的',
        kaodian: '',
        liju1: ' What the drawing is trying to express is very conspicuous. ',
        chinese1: '这幅图试图表达的信息是非常明显的。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '697',
        word: 'conspiracy ',
        ciyi: 'n. 阴谋；共谋；阴谋集团',
        kaodian: '',
        liju1: ' Those who go in for intrigues and conspiracy are doomed to failure.  ',
        chinese1: '搞阴谋诡计的人注定要失败。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '698',
        word: 'constant ',
        ciyi: ' a. 持续的；不变的；坚定的，忠实的n. 常数；恒量',
        kaodian: '',
        liju1: ' Inflation is a constant threat.',
        chinese1: '通货膨胀是一种持续的威胁。',
        liju2: 'The old man looked on his dog as a constant companion.',
        chinese2: '老人把他的狗当作忠诚的伙伴。',
        liju3: 'In a city, the only constant is change. ',
        chinese3: '在一个城市，唯一不变的就是变化。',
        liju4: 'So we define, then, equilibrium constant this way. ',
        chinese4: '所以我们这样定义平衡常数。'
      },

      {
        id: '699',
        word: ' constituent',
        ciyi: 'n. 成分；要素；a. 构成的；形成的',
        kaodian: ' Caffeine is the active constituent of drinks such as tea and coffee.',
        liju1: '咖啡因是茶和咖啡这类饮品的活性成分。 ',
        chinese1: 'This process or activity is broken down into its constituent tasks. ',
        liju2: '这个过程或者活动被分解为若干个组成的任务。',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '700',
        word: 'constitute ',
        ciyi: ' vt. 组成，构成；建立；任命',
        kaodian: '',
        liju1: '  The court constituted him legal guardian of the child.',
        chinese1: '法庭指定他为这个孩子的合法监护人。',
        liju2: 'Four quarts constitute a gallon.',
        chinese2: '四夸脱构成一加仑。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '701',
        word: 'constitution ',
        ciyi: ' n. 体质；体格；宪法；构成；成分 ',
        kaodian: '',
        liju1: '  A weak constitution disposed her to frequent illness.  ',
        chinese1: '由于体质差，她动不动就会生病。',
        liju2: 'The king was forced to adopt a new constitution which reduced his powers.',
        chinese2: '国王被迫通过了削减其权力的新宪法。',
        liju3: 'We know the constitution of mineral through chemical analysis.  ',
        chinese3: '经过化学分析，我们知道了矿石的构成。'
      },

      {
        id: '702',
        word: ' constrain',
        ciyi: ' vt. 强迫；强制；束缚；抑制',
        kaodian: '',
        liju1: ' Hunger constrained him to eat. ',
        chinese1: '饥饿迫使他进食。',
        liju2: "'Cold weather constrained the plant's growth.'",
        chinese2: '寒冷的天气抑制了植物的生长。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '703',
        word: 'construct  ',
        ciyi: 'vt. 建造，构造；解释；创立n. 构想，概念',
        kaodian: '',
        liju1: ' His company recently constructed an office building in downtown Denver. ',
        chinese1: '他的公司最近在丹佛市中心建造了一座办公楼。',
        liju2: 'Betty has constructed a new theory of management at the meeting.',
        chinese2: '贝蒂在会上就一个管理的新理念做了解释。',
        liju3: 'Freedom, gravity, and intelligence are constructs.',
        chinese3: '自由，万有引力以及智力都属于概念。'
      },

      {
        id: '704',
        word: 'consult ',
        ciyi: 'vt. 查阅；向…请教vi. 与…商量；商议 ',
        kaodian: '',
        liju1: ' After consulting with her daughter and manager, she decided to take on the part, on her terms.',
        chinese1: '同她的女儿兼经纪人商量之后，她决定按她的要求接受那个角色。',
        liju2: 'I have consulted a number of law books in our school library.',
        chinese2: '我曾在我校图书馆里查阅过好些法律书籍。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '705',
        word: ' consultant',
        ciyi: 'n. 顾问；咨询者；会诊医生',
        kaodian: '',
        liju1: ' She is a consultant to the government. ',
        chinese1: '她是政府顾问。',
        liju2: 'So she contacted his consultant at once to consult with him about this.  ',
        chinese2: '于是她立刻联系他的顾问医生向他请教怎么办。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '706',
        word: ' consume',
        ciyi: 'vt. 消耗，消费；耗尽 ',
        kaodian: '',
        liju1: 'Arguing about such details consumed many hours of their valuable time. ',
        chinese1: '在这些细节上争来争去浪费了他们很多宝贵的时光。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '707',
        word: 'consumption ',
        ciyi: 'n. 消费；消耗 ',
        kaodian: '',
        liju1: ' Water consumption decreased during the winter.   ',
        chinese1: '冬季期间水消耗量减少。',
        liju2: 'This mentalist yearn easily trigger a large-scale consumption campaign.  ',
        chinese2: '这种心态容易引发一场大规模消费高潮。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '708',
        word: ' contact',
        ciyi: ' n. 接触，联系；交往vt. 使接触，联系',
        kaodian: '',
        liju1: ' When you contact these two wires, the machine will start at once. ',
        chinese1: '当你使这两条导线一接触，这台机器就会立刻开始运转。',
        liju2: 'Even if we cannot agree, we should maintain our contact.  ',
        chinese2: '即使我们不能取得一致，我们也要保持联系。',
        liju3: '',
        chinese3: '',
      },

      {
        id: '709',
        word: 'contagious ',
        ciyi: 'a. 感染性的；会蔓延的',
        kaodian: '',
        liju1: 'This is both contagious and deadly and must be avoided at all costs.   ',
        chinese1: '这会传染且是致命的，必须不惜一切代价加以避免。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '710',
        word: ' contain',
        ciyi: ' vt. 包含；容纳；等于；相当于',
        kaodian: '',
        liju1: ' The bottle contains 500 millilitres.',
        chinese1: '这个瓶子可容纳500毫升。',
        liju2: 'A pound contains 16 ounces.',
        chinese2: '一磅等于16英两。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '711',
        word: ' contaminate',
        ciyi: ' vt. 污染，弄脏 ',
        kaodian: '',
        liju1: ' The river was contaminated with waste from the factory. ',
        chinese1: '这条河流被从工厂流出的废物所污染。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '712',
        word: 'contemplate ',
        ciyi: 'vt. 盘算；预期；注视，凝视；沉思；思量',
        kaodian: '',
        liju1: '  He is contemplating buying a new car.',
        chinese1: '他打算买一辆新汽车。',
        liju2: 'He stood there contemplating the stars in the sky.',
        chinese2: '他站在那里凝视着天上的星星。',
        liju3: 'He contemplated the problem before making a final decision.',
        chinese3: '他在做出最后的决定之前，仔细考虑了这个问题。'
      },

      {
        id: '713',
        word: ' contemporary',
        ciyi: ' a. 同时代的；当代的；现代的 ',
        kaodian: '',
        liju1: '  Like most of my contemporaries, I grew up in a vastly different world.',
        chinese1: '像我同时代的大多数人一样，我在一个非常不同的世界里长大。',
        liju2: 'She writes a lot of contemporary music for people like Whitney Houston.',
        chinese2: '她为惠特尼·休斯敦等人创作大量当代音乐作品。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '714',
        word: 'contempt ',
        ciyi: ' n. 轻视，轻蔑；耻辱',
        kaodian: '',
        liju1: 'He interpreted the silence as contempt.   ',
        chinese1: '他把这沉默看做轻蔑的表示。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '715',
        word: 'contend ',
        ciyi: 'vi. 竞争；斗争；争论vt. 坚持主张 ',
        kaodian: '',
        liju1: ' Sixteen football teams are contending for the World Cup this year. ',
        chinese1: '今年有16个足球队争夺世界杯。',
        liju2: 'Weller’s attorneys contend he is not guilty.',
        chinese2: '韦勒的律师们坚持认为他无罪。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '716',
        word: ' continual',
        ciyi: 'a. 持续不断的；频繁的；不断的',
        kaodian: '',
        liju1: '  They felt continual pressure to perform well.',
        chinese1: '他们感受到持续不断的、要表演得好的压力。',
        liju2: '',
        chinese2: '',
        liju3: '',
        chinese3: ''
      },

      {
        id: '717',
        word: 'continuous  ',
        ciyi: ' a. 连续的，持续的；继续的 ',
        kaodian: '',
        liju1: ' Residents report that they heard continuous gunfire.',
        chinese1: '居民们说他们听到了持续的枪声。',
        liju2: 'Continuous farming impoverishes the soil.  ',
        chinese2: '连续耕作使土壤变得贫瘠。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '718',
        word: ' contract',
        ciyi: 'vi. 收缩；缩小；订约n. 合同；契约；包工',
        kaodian: '',
        liju1: ' Metals contract in cold weather.',
        chinese1: '金属在寒冷的天气中会收缩。',
        liju2: 'You can contract with us to deliver your cargo.',
        chinese2: '你们可以和我们签订合约，由我们负责运输你们的货物。',
        liju3: 'The contract admits of no other interpretation. ',
        chinese3: '这契约不容许做别的解释。'
      },

      {
        id: '719',
        word: ' contradict',
        ciyi: 'v. 反驳；与…矛盾；与…抵触',
        kaodian: '',
        liju1: 'The shy girl was afraid to contradict.   ',
        chinese1: '这个害羞的女孩不敢提出反驳意见。',
        liju2: "'Her version contradicted her daughter's.'",
        chinese2: '她的说法与她女儿的说法相矛盾。',
        liju3: '',
        chinese3: ''
      },

      {
        id: '720',
        word: 'contrary ',
        ciyi: 'a. 相反的；对立的；矛盾的n. 相反；反面；矛盾；对立面；对立物',
        kaodian: '',
        liju1: 'The plane is flying a contrary direction.   ',
        chinese1: '飞机向相反的方向飞去。',
        liju2: 'This view is contrary to the aims of critical social research for a number of reasons.',
        chinese2: '许多原因证明这种观点与批判性社会研究的目的截然相反。',
        liju3: 'The results run contrary to our expectations.',
        chinese3: '结果与我们的期望相矛盾。',
        liju4: 'Black and white is contraries.',
        chinese4: '黑与白相对。'
      },

      {
        id: '721',
        word: ' contrast',
        ciyi: 'vi. 形成对照vt. 使对比；使与…对照n. 对比；差别；对照物',
        kaodian: '',
        liju1: ' Emily contrasted the two colors and then chose the yellow one. ',
        chinese1: '埃米莉比较了两种颜色后选择了黄色的那个。',
        liju2: "'Johnson's easy charm contrasted sharply with the prickliness of his boss.'",
        chinese2: '翰的随和与他老约板的挑剔形成了鲜明的对比。',
        liju3: 'This is an example of no contrast. ',
        chinese3: '这就是一个没有对比的例子。'
      }
      ,
      {
        id: '722',
        word: 'contribute ',
        ciyi: ' v. 贡献，捐助；投稿；有助于  ',
        kaodian: '',
        liju1: 'They contributed food and clothing for the refugees.',
        chinese1: ' 他们向难民捐助了食物和衣服。 ',
        liju2: ' She contributed an article to our magazine. ',
        chinese2: ' 她给我们的杂志投了一篇稿子。 ',
        liju3: '  Paul’s interpretation contributed enormously to our solving this difficult problem. ',
        chinese3: '  保罗的解释对于我们解决这个难题大有帮助。 '
      }
      ,
      {
        id: '723',
        word: 'contribution ',
        ciyi: '  n. 贡献；捐献   ',
        kaodian: '',
        liju1: '   We have to do all of that for their team contribution as well. ',
        chinese1: '  我们也应该根据他们团队的贡献来考核他们。 ',
        liju2: '  This list ranked companies that make charitable contributions of a half million dollars or more. ',
        chinese2: '这张清单列出了慈善捐款50万美元及50万美元以上的公司。',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '724',
        word: ' contrive ',
        ciyi: ' vt.设法做到；谋划，策划 ',
        kaodian: '',
        liju1: 'I can cont Irive without your help. ',
        chinese1: ' 没有你的帮助，我也能设法做到。',
        liju2: ' They had contrived some naughty plan of revenge. ',
        chinese2: ' 他们密谋了一个邪恶的复仇计划。 ',
        liju3: '',
        chinese3: ''
      }
      ,
      {
        id: '725',
        word: ' controversial',
        ciyi: ' a. 有争议的；有争论的 ',
        kaodian: '',
        liju1: ' Immigration is a controversial issue in many countries. ',
        chinese1: ' 移民在很多国家都是一个有争议的问题。',
        liju2: ' ',
        chinese2: ' ',
        liju3: '',
        chinese3: ''
      },
  {
      id: '726',
      word: 'controversy  ',
      ciyi: ' n. 争论；论战；辩论 ',
      kaodian: '',
      liju1: ' Their findings have not been published, perhaps because of the controversy.  ',
      chinese1: '  他们的发现尚未发表，或许是由于这一争议。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '727',
      word: 'convenience  ',
      ciyi: ' n. 便利；厕所；便利的设备 ',
      kaodian: '',
      liju1: '  A new general store has been built for the convenience of the residents. ',
      chinese1: '为便利居民，新建了一个百货商店。',
      liju2: 'The newly-built apartment provides gas, electricity and other modern conveniences. ',
      chinese2: ' 这座新建的公寓提供天然气，电以及其他一些现代化便利设施。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '728',
      word: 'convention ',
      ciyi: ' n. 大会；惯例；习俗；公约，协定 ',
      kaodian: '',
      liju1: 'Ron Reagan will speak in prime time at the Democratic National Convention on the importance of stem cell research. ',
      chinese1: '罗恩·里根将在民主党全国大会上的黄金时段就干细胞研究的重要性发表演讲。',
      liju2: 'He sets at naught every convention of society.   ',
      chinese2: '他轻视所有的社会习俗。 ',
      liju3: 'This convention is something that we all committed to. ',
      chinese3: '我们所有人都已对此公约作出承诺。'
}
    ,
    {
      id: '729',
      word: ' converge',
      ciyi: ' vi. 聚集；汇合，靠拢；（思想，观念）趋近 ',
      kaodian: '',
      liju1: ' The interest of all the students converged upon the celebration. ',
      chinese1: '全体学生的兴趣都集中于庆祝会。',
      liju2: ' As they flow south, the five rivers converge. ',
      chinese2: '这5条河向南流，最终汇合在一起。 ',
      liju3: 'Cultural beliefs about women’s rights converge with the government policies.',
      chinese3: '在女权问题上，文化信仰与政府政策保持一致。'
}
    ,
    {
      id: '730',
      word: 'conversely ',
      ciyi: ' ad. 相反地 ',
      kaodian: '',
      liju1: ' Conversely, start only what you know you can finish.   ',
      chinese1: '相反地，只开始那些你知道你能完成的。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '731',
      word: 'conversion  ',
      ciyi: ' n. 转换；变换；兑换 ',
      kaodian: '',
      liju1: ' This is implemented by using conversion tables.   ',
      chinese1: '这是通过使用转换表实现的。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '732',
      word: ' convert ',
      ciyi: '  v. 转化，变换  ',
      kaodian: '',
      liju1: '   Water is converted into steam if it is boiled.  ',
      chinese1: '水沸腾时转化为蒸汽。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '733',
      word: 'convey ',
      ciyi: '  vt.表达；传播；传达；运输 ',
      kaodian: '',
      liju1: "'I can't convey my feelings in words.   '",
      chinese1: '我无法用言语表达我的心情。',
      liju2: 'Your luggage will be conveyed directly from the airport to your hotel. ',
      chinese2: '你们的行李将直接从机场运到宾馆。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '734',
      word: ' convict',
      ciyi: ' vt. 证明…有罪；宣告…有罪n. 罪犯  ',
      kaodian: '',
      liju1: '   There was insufficient evidence to convict him.  ',
      chinese1: '没有足够的证据证明他有罪。',
      liju2: ' The convicts were allowed outside for one hour each day. ',
      chinese2: '囚犯们每天有一个小时的放风时间。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '735',
      word: 'conviction ',
      ciyi: '  n.深信；确信，坚定的信仰 ',
      kaodian: '',
      liju1: '   It is our firm conviction that a step forward has been taken.  ',
      chinese1: '我们深信已经向前迈进了一步。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '736',
      word: 'convince ',
      ciyi: '  vt. 说服；使确信，使信服 ',
      kaodian: '',
      liju1: '   He convinced me of the difficulty of the work.  ',
      chinese1: '他使我确信这件工作的艰巨性。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '737',
      word: 'cooperate  ',
      ciyi: '  vi. 合作，配合；协力 ',
      kaodian: '',
      liju1: "'Let's all cooperate to get the work done quickly.'",
      chinese1: ' 让我们通力合作使这项工作迅速完成',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '738',
      word: 'cooperative ',
      ciyi: '  a. 合作的；协作的n. 合作社 ',
      kaodian: '',
      liju1: '   They decided a housing cooperative was the way to regenerate the area.  ',
      chinese1: '他们决定用合作建房的方式重建这一地区。',
      liju2: 'Then one dictator seized it, then another and so on, until a civilian government handed control to a worker cooperative a few decades ago.   ',
      chinese2: '之后，一个独裁者强占了种植园，然后就一波接一波，直到数十年前民选政府才把它交予工人合作社。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '739',
      word: 'coordinate  ',
      ciyi: ' n. 坐标 a. 同等的；并列的；坐标的  ',
      kaodian: '',
      liju1: '  Can you give me your coordinates?   ',
      chinese1: '能给我你的坐标吗？',
      liju2: 'Coalition forces were planning a coordinated effort to attack the drug trade. ',
      chinese2: '联合部队正在计划共同打击毒品买卖。 ',
      liju3: 'The teacher drew two coordinate axes on the blackboard.',
      chinese3: '老师在黑板上画了两条坐标线。'
}
    ,
    {
      id: '740',
      word: ' cop ',
      ciyi: '  n. 巡警，警官 ',
      kaodian: '',
      liju1: '  This morning I saw a cop with a dog.     ',
      chinese1: '今天早上我看见一个警察带着一只狗。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '741',
      word: ' cope',
      ciyi: '  vi. 处理；对付；竞争；对抗 ',
      kaodian: '',
      liju1: '   They coped with each other for the prize.  ',
      chinese1: '他们为了获得奖品而相互竞争。',
      liju2: "' You'd better take along a first - aid kit to cope with unexpected catastrophes.'",
      chinese2: '你们最好带着一个急救药箱以便应付意想不到的灾难。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '742',
      word: 'copper ',
      ciyi: '  n. 铜；铜币；铜制器 ',
      kaodian: '',
      liju1: '  Iron casts better than copper.     ',
      chinese1: '铁比铜更易于浇铸。',
      liju2: 'Mike had only a few coppers in his pocket when he came to New York. ',
      chinese2: '迈克刚到纽约时，口袋里只有几枚硬币。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '743',
      word: 'copyright ',
      ciyi: '  n. 版权，著作权vt.取得…的版权 ',
      kaodian: '',
      liju1: '  Who owns the copyright on this movie?   ',
      chinese1: '谁拥有这部电影的版权？',
      liju2: 'You do not need an assignment, because the copyright originally vests in your company.   ',
      chinese2: '你不需要一个受让证书，因为你的公司已获得天然的版权。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '744',
      word: 'cord ',
      ciyi: ' n. 绳索；束缚  ',
      kaodian: '',
      liju1: '   The cord has been extended between two bamboo poles.    ',
      chinese1: '在两根竹竿之间拉起了一根绳子。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '745',
      word: 'cordial  ',
      ciyi: ' a. 热忱的，诚恳的；亲切的 ',
      kaodian: '',
      liju1: '  The hall was circumfused with a cordial and friendly atmosphere.    ',
      chinese1: '大厅中充满了亲切友好的气氛。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '746',
      word: 'core ',
      ciyi: '  n. 果核；核心；要点；磁心 ',
      kaodian: '',
      liju1: '   Someone threw an apple core.  ',
      chinese1: ' 有人扔了一个苹果核。',
      liju2: ' What is the core of your app?   ',
      chinese2: '你的应用程序的核心是什么？ ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '747',
      word: 'corporation ',
      ciyi: '  n. 公司；团体；市政当局 ',
      kaodian: '',
      liju1: '   Three companies were amalgamated into a corporation.    ',
      chinese1: '三家商号被合并成一家公司。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '748',
      word: 'correlate ',
      ciyi: '  v. 相关；关联n. 相关物；相关联的人 ',
      kaodian: '',
      liju1: '   You should be able to see how these definitions correlate to what you see when you use SMIT.    ',
      chinese1: '您应该能够看到这些定义如何与您在使用 SMIT 时所看到的内容相互关联。',
      liju2: ' Obesity correlates with increased risk for hypertension and stroke. ',
      chinese2: '过度肥胖与高血压和中风的发病风险增加密切相关。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '749',
      word: 'correspond  ',
      ciyi: ' vi. 符合，一致；通信；相应；相当于 ',
      kaodian: '',
      liju1: '   The two correspond but are not one.   ',
      chinese1: '这二者相符合却不是同一件东西。',
      liju2: ' Mr. Brown and his wife corresponded for many years before they met.',
      chinese2: ' 布朗先生与妻子在相识以前先通信了好多年。',
      liju3: 'The wing of a bird corresponds to the arm of a man.',
      chinese3: '鸟的翅膀相当于人的胳臂。'
}
    ,
    {
      id: '750',
      word: 'correspondence ',
      ciyi: '  n. 通信；一致；相当，相似 ',
      kaodian: '',
      liju1: '  Our correspondence is limited to a few commercial letters.     ',
      chinese1: '我们之间的通信只限于几封商业函件。',
      liju2: 'The outcome has little correspondence with the prediction. ',
      chinese2: '结果和预测不太相符。 ',
      liju3: 'There was some correspondence in temperament between the two actresses.',
      chinese3: '这两位女演员气质有些相似。'

}
    ,
    {
      id: '751',
      word: ' correspondent ',
      ciyi: '  n.记者；客户；通信者 ',
      kaodian: '',
      liju1: '   Our correspondent says these accusations and withdrawals have dented the credibility of the elections.    ',
      chinese1: '我们的记者说这些指控和撤退对选举的可信度造成了影响。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '752',
      word: ' corridor ',
      ciyi: '  n. 走廊；通道 ',
      kaodian: '',
      liju1: '    We groped our way along the dark corridor.     ',
      chinese1: '我们摸索着走过黑暗的走廊。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '753',
      word: ' corrode ',
      ciyi: ' v. 侵蚀；受腐蚀；起腐蚀作用 ',
      kaodian: '',
      liju1: '    Engineers found the structure had been corroded by moisture.   ',
      chinese1: '工程师们发现这个构件已经被湿气腐蚀了。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '754',
      word: ' corrupt ',
      ciyi: '  a. 腐败的，贪污的vt.使腐烂；使堕落，使恶化 ',
      kaodian: '',
      liju1: '   The corrupt mayor should be removed from office and prosecuted.      ',
      chinese1: '这个腐败的市长应当撤职查办。',
      liju2: ' It is sad to see a man so corrupted by the desire for money and power.',
      chinese2: '看到一个人被金钱和权力欲望所腐蚀很可悲。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '755',
      word: ' cosmic ',
      ciyi: '  a. 宇宙的 ',
      kaodian: '',
      liju1: '  Because of its huge mass, the cluster acts as a cosmic magnifying glass, causing light to bend around it.      ',
      chinese1: '由于这个星系团的巨大质量，它相当于一个宇宙的放大镜，使光线在它的四周弯曲。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '756',
      word: ' costly ',
      ciyi: ' a. 昂贵的；代价高的；豪华的 ',
      kaodian: '',
      liju1: '    It’s known to us that such a database would be extremely costly to set up.   ',
      chinese1: '我们知道，要建立这样的一个数据库价格非常昂贵',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '757',
      word: ' costume  ',
      ciyi: '  n. 服装，装束；戏装，剧装 ',
      kaodian: '',
      liju1: '   The advertisements of costume in Paris broadened his outlook.      ',
      chinese1: '巴黎的服装广告使他大开眼界。',
      liju2: 'The performers, in costume and makeup, were walking up and down backstage. ',
      chinese2: '演员们穿着戏服化着妆，在后台走来走去。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '758',
      word: ' cosy/cozy ',
      ciyi: ' a. 温暖而舒适的；惬意的  ',
      kaodian: '',
      liju1: "'Downstairs there's a breakfast room and guests can relax in the cosy bar.'",
      chinese1: '楼下有个早餐室，客人们可以在温暖而舒适的酒吧间休息。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '759',
      word: ' cottage ',
      ciyi: '  n. 小屋；村舍；小别墅 ',
      kaodian: '',
      liju1: '   I saw a cottage nestling in the woods.      ',
      chinese1: '我看到隐映在树林中的乡村别墅。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '760',
      word: ' couch  ',
      ciyi: '  n. 睡椅，长沙发；卧榻 ',
      kaodian: '',
      liju1: '    After lunch he reposed on the couch.     ',
      chinese1: '午饭后他躺在长沙发上休息。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '761',
      word: 'council   ',
      ciyi: '  n. 委员会；会议；理事会 ',
      kaodian: '',
      liju1: '    The council denounced the new law.     ',
      chinese1: '该委员会谴责新法律。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '762',
      word: '  counsel ',
      ciyi: '   n. 法律顾问；忠告；讨论vt.建议；劝告 ',
      kaodian: '',
      liju1: "'Singleton's counsel said after the trial that he would appeal. '",
      chinese1: '庭审之后辛格尔顿的法律顾问说他会上诉。',
      liju2: 'He had always been able to count on her wise counsel. ',
      chinese2: '他总是能够指望她明智的忠告。 ',
      liju3: 'I would counsel you to say nothing about the affair.',
      chinese3: '对这件事情我建议你什么也别说了。'

}
    ,
    {
      id: '763',
      word: ' counter   ',
      ciyi: '  n.计数器；柜台v.反击，抵制 a. 相反的ad.相反  ',
      kaodian: '',
      liju1: '    The new answering machine has a call counter.    ',
      chinese1: '这种新型的电话答录机有一个通话计数器。',
      liju2: ' A large crowd of customers swarmed before the counter. ',
      chinese2: '柜台前挤满了一大群顾客。 ',
      liju3: 'He countered my blow.',
      chinese3: '他对我的强击进行还击。',
      liju4: 'The small ship was slowed down by counter tides.',
      chinese4: '由于逆流，小船的速度慢下来了。',
      liju5: 'Current attempts to unify Europe appear to run counter to thousands of years of European history.',
      chinese5: '近期统一欧洲的种种尝试看起来是与欧洲几千年的历史相违背的。'
}
    ,
    {
      id: '764',
      word: '  counterpart ',
      ciyi: '  n.极对应的人或物  ',
      kaodian: '',
      liju1: '   Each of them has a counterpart column in the database tables.      ',
      chinese1: '每个字段在数据库表中有一个对应的列。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '765',
      word: ' county  ',
      ciyi: '  n. 郡，县  ',
      kaodian: '',
      liju1: '   Ours is a small county.       ',
      chinese1: '我们那儿是个小县份。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '766',
      word: ' coupon  ',
      ciyi: '   n. 优惠券；礼券；配给券；票证 ',
      kaodian: '',
      liju1: '     Before you buy, do a coupon search and potentially save yourself a lot of money.     ',
      chinese1: '在购买前，先对优惠券进行搜索，说不定就可以为你省下一笔钱。',
      liju2: 'This coupon can be redeemed at any of our branches.  ',
      chinese2: ' 这种票证可以在我们的任何支行兑现。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '767',
      word: '  court ',
      ciyi: '   n. 法院；法庭；朝廷；院子；球场 ',
      kaodian: '',
      liju1: '    At this rate, we could find ourselves in the divorce courts!    ',
      chinese1: '照这样下去，我们可能会在离婚法庭上对簿公堂！',
      liju2: ' She came to visit England, where she was presented at the court of James I.',
      chinese2: ' 她来访问英格兰，在詹姆斯一世的王宫受到了接见。',
      liju3: 'The door at the end of the court opened and two men walked in.',
      chinese3: '院子尽头的那扇门开了，走进来两个人。',
      liju4: 'The hotel has several tennis and squash courts.',
      chinese4: '该旅馆有几个网球场和壁球场。'
}
    ,
    {
      id: '768',
      word: ' courtesy  ',
      ciyi: '  n. 有礼貌的举止；谦恭有礼  ',
      kaodian: '',
      liju1: '    By extending the courtesy of a phone call to my clients, I was building a personal relationship with them.    ',
      chinese1: '通过给客户打电话这样有礼的行为，我渐渐和他们建立起私交。',
      liju2: 'The president paid a courtesy call on Emperor Akihito. ',
      chinese2: '总统礼节性地拜访了明仁天皇。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '769',
      word: ' courtyard  ',
      ciyi: '   n. 庭院，院子 ',
      kaodian: '',
      liju1: '     The children always racket about in the courtyard.   ',
      chinese1: '孩子们总是在院子里吵吵闹闹。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '770',
      word: ' coward  ',
      ciyi: '  n. 懦夫，懦弱的人  ',
      kaodian: '',
      liju1: '    She accused her husband of being a coward.    ',
      chinese1: '她指责自己的丈夫是个胆小鬼。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '771',
      word: '  crab  ',
      ciyi: '   n. 螃蟹；蟹肉 ',
      kaodian: '',
      liju1: "'I can't remember when I last had crab.    '",
      chinese1: '我不记得上次吃蟹是什么时候了。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '772',
      word: '  crack  ',
      ciyi: '   vt. 破裂；爆裂；发出爆裂声n. 裂缝；裂纹；爆裂声   ',
      kaodian: '',
      liju1: '     The boiling water cracked the glass.   ',
      chinese1: '开水把玻璃杯弄裂了。',
      liju2: 'The branch cracked under the weight of the snow. ',
      chinese2: '树枝在雪的重压下啪的一声折断了。 ',
      liju3: 'The plate had a crack in it.',
      chinese3: '这盘子上有条裂纹。',
      liju4: 'The hunter’s rifle cracked and the bear fell dead.',
      chinese4: '随着猎人一声枪响，熊倒地而死。'
}
    ,
    {
      id: '773',
      word: ' cradle   ',
      ciyi: '   n. 摇篮；发源地；发祥地  ',
      kaodian: '',
      liju1: '   The baby was rocked asleep in the cradle.     ',
      chinese1: '婴儿在摇篮里被摇得入睡了。',
      liju2: 'The Yellow River is the cradle of Chinese culture. ',
      chinese2: '黄河是中华名族的发源地。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '774',
      word: ' craft  ',
      ciyi: '  n. 工艺；手艺；飞机；太空船；行业   ',
      kaodian: '',
      liju1: '  Programmers know that their craft is not just science and technology but art.      ',
      chinese1: '程序员知道他们的手艺不只是科学和技术，而是艺术。',
      liju2: 'The craft started to travel safely on its orbit. ',
      chinese2: ' 飞船开始在其轨道上安全行驶。',
      liju3: 'The craft of the teacher is admired by many people.',
      chinese3: '很多人羡慕教师这一行业。'
}
    ,
    {
      id: '775',
      word: ' crane  ',
      ciyi: '   n. 吊车，起重机；鹤  ',
      kaodian: '',
      liju1: '      The crane lifted the bales into the hold.    ',
      chinese1: '起重机将大包吊进货舱。',
      liju2: 'The crane symbolizes good fortune, peace and longevity.  ',
      chinese2: '此鹤象征着好运、和平与长寿。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '776',
      word: ' crash  ',
      ciyi: '   n. 撞碎；坠毁；失败；破产；崩溃；轰隆声v. 摔碎；坠落   ',
      kaodian: '',
      liju1: '   Mary’s car can’t stand the slightest crash.     ',
      chinese1: '玛丽的车经不起丝毫碰撞。',
      liju2: ' Two people recalled hearing a loud crash about 1:30 a.m.',
      chinese2: '两人回忆说大约凌晨1：30时听到一声巨响。 ',
      liju3: 'He predicted correctly that there was going to be a stock market crash.',
      chinese3: '他正确地预测到将出现股市崩溃。',
      liju4: 'Her car crashed into the rear of a van.',
      chinese4: '她的汽车撞毁了一辆面包车的尾部。'
}
    ,
    {
      id: '777',
      word: ' crawl  ',
      ciyi: '  vi. 爬行；缓慢地行进n. 爬行；蠕动；匍匐而行  ',
      kaodian: '',
      liju1: '    A child learns to crawl before he learns to walk.    ',
      chinese1: '小孩在学走路之前先学爬。',
      liju2: 'The train crawled over the damaged bridge. ',
      chinese2: '火车缓缓地开过这座已损坏的桥梁。 ',
      liju3: 'The traffic on the off-ramp slowed to a crawl.',
      chinese3: '驶出匝道的交通慢得在爬进。'
}
    ,
    {
      id: '778',
      word: ' create  ',
      ciyi: '   vt. 创造，创作；造成；引起；建立  ',
      kaodian: '',
      liju1: '  We set business free to create more jobs.     ',
      chinese1: '我们让企业自由以创造更多的就业机会。',
      liju2: '  This ultimatum was bound to create a grave crisis.',
      chinese2: '这一纸最后通牒必然会引起严重危机。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '779',
      word: '  creative ',
      ciyi: '   a. 创造性的；有创造力的  ',
      kaodian: '',
      liju1: '    Like so many creative people, he was never satisfied.   ',
      chinese1: '正如许多有创造力的人一样，他永不满足。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '780',
      word: ' creature   ',
      ciyi: '   n. 人，动物，生物；产物  ',
      kaodian: '',
      liju1: '   He could not help having compassion for the poor creature.     ',
      chinese1: '他情不自禁地怜悯起那个可怜的人来。',
      liju2: ' In all the land, only one creature stirs.   ',
      chinese2: ' 在所有地方，只有一个生物在移动。',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '781',
      word: ' credentials  ',
      ciyi: '   n. 证书；文凭；信任状，资格  ',
      kaodian: '',
      liju1: '     I believe—credentials on the wall do not make you a decent human being.    ',
      chinese1: '我相信——高挂在墙上的证书并不能证明你是一个高尚的人。',
      liju2: ' What credentials do you need for the dream jobs out there? ',
      chinese2: '想得到你梦想中的工作，你需要哪些资格呢？ ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '782',
      word: ' credit ',
      ciyi: '   n. 信用；信任，光荣；声望；贷款；学分vt.相信，信任  ',
      kaodian: '',
      liju1: '    If you’ve done both, your credit should be solid.     ',
      chinese1: '如果做完了以上两项，你的信用应该是可靠的。',
      liju2: ' Liu Xiang, a player in Athens Olympic Games, is a credit to China. ',
      chinese2: ' 在雅典奥运会上，运动员刘翔是中国的光荣。',
      liju3: 'We only accept payment by confirmed irrevocable letter of credit.',
      chinese3: '我们只接受保兑的不可撤销的信用证付款。',
      liju4: 'Through the AP programme students can earn college credits in high school.',
      chinese4: '通过大学预修课程计划，学生在中学就可以拿到大学的学分。',
      liju5: "' I didn't credit that absurd tale.  '",
      chinese5: '我不相信那个荒谬绝伦的故事。'

}
    ,
    {
      id: '783',
      word: ' creep ',
      ciyi: '   vi. 爬行；蔓延  ',
      kaodian: '',
      liju1: '     The tortoise crept along at a very slow speed.   ',
      chinese1: '乌龟以极慢的速度向前爬。',
      liju2: ' Mist had crept in again from the sea. ',
      chinese2: '大雾再次从海上渐渐蔓延过来。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '784',
      word: ' crew ',
      ciyi: '   n. 队；工作人员，全体船员  ',
      kaodian: '',
      liju1: '       The mission for the crew of the space shuttle is essentially over.  ',
      chinese1: '航天飞机全体机务人员的使命基本完成。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '785',
      word: ' cricket ',
      ciyi: '   n. 板球，板球运动；蟋蟀  ',
      kaodian: '',
      liju1: '   During the summer term we would play cricket at the village ground.      ',
      chinese1: '夏季学期里我们常在村里的空地上玩板球。',
      liju2: '  He angrily stomped his cricket after failing the fight.   ',
      chinese2: ' 比赛失败后，他生气地踏死了他的蟋蟀。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '786',
      word: ' crime ',
      ciyi: '   n. 罪行，犯罪；罪恶；犯罪活动  ',
      kaodian: '',
      liju1: '   He forfeited his property by crime.        ',
      chinese1: '他因犯罪被剥夺财产。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '787',
      word: ' criminal ',
      ciyi: '  n. 罪犯a. 刑事的；犯罪的；罪恶的   ',
      kaodian: '',
      liju1: '      The criminal lit out for the countryside after the bank robbery.     ',
      chinese1: '这个罪犯在抢劫银行后迅速逃往乡下。',
      liju2: ' Her husband faces various criminal charges.  ',
      chinese2: '她丈夫面临多项刑事的指控。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '788',
      word: ' cripple ',
      ciyi: '  vt.使跛；使残废n. 跛子；残废人   ',
      kaodian: '',
      liju1: '    He was crippled in the war.     ',
      chinese1: '他在战争中成了跛子',
      liju2: ' She has gone from being a healthy, fit, and sporty young woman to being a cripple. ',
      chinese2: '她从一个健康、强壮、爱好体育运动的年轻姑娘变成了一个残疾人。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '789',
      word: ' crisis ',
      ciyi: '   n. 危机；危险期；决定性时刻  ',
      kaodian: '',
      liju1: '      The strength of our country bulwarked us through the financial crisis.    ',
      chinese1: '我国的实力使我们得以安然渡过这次金融危机。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '790',
      word: ' crisp ',
      ciyi: '  a. 脆的；新鲜的；易碎的   ',
      kaodian: '',
      liju1: "'Bake the potatoes for 15 minutes, till they're nice and crisp.    '",
      chinese1: '把土豆烤15分钟，直到变得香脆可口。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '791',
      word: ' criterion ',
      ciyi: '   n. （批评判断的）标准；准则；规范  ',
      kaodian: '',
      liju1: '       Practice is the sole criterion of truth.   ',
      chinese1: '实践是检验真理的惟一标准。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '792',
      word: 'critic  ',
      ciyi: ' n. 批评家，评论家；批评；评论   ',
      kaodian: '',
      liju1: '      Mather was a film critic for many years.    ',
      chinese1: '马瑟做过多年的电影评论家。',
      liju2: ' The critic’s criticism was turned against himself.  ',
      chinese2: '批评家的批评反被别人用来批评他。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '793',
      word: 'critical  ',
      ciyi: '   a.批评的，评论的；爱挑剔的；危急的  ',
      kaodian: '',
      liju1: '      We need to become critical text-readers.    ',
      chinese1: '我们需要成为批判性的文本阅读者。',
      liju2: ' Bill grew tired of his critical girlfriend. ',
      chinese2: '比尔越来越烦他那个爱挑剔的女友了。 ',
      liju3: 'Ten of the injured are said to be in critical condition.',
      chinese3: '据说伤者中有十人情况危急。'
}
    ,
    {
      id: '794',
      word: ' criticise/criticize ',
      ciyi: '   vt. 批评；评论  ',
      kaodian: '',
      liju1: '     He openly criticized the plan as impracticable.    ',
      chinese1: '他公开批评该计划不切实际。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '795',
      word: ' criticism ',
      ciyi: '   n. 批评；考证  ',
      kaodian: '',
      liju1: '     This policy had repeatedly come under strong criticism on Capitol Hill.     ',
      chinese1: '这项政策在国会反复受到强烈批评。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '796',
      word: ' crow ',
      ciyi: '  n. 乌鸦；鸡鸣vi. 啼叫；鸡啼   ',
      kaodian: '',
      liju1: '    The crow waked me up in the early morning.      ',
      chinese1: '鸡叫声一大早把我吵醒了。',
      liju2: "' The crows roosted in Fonsa's Tower. '",
      chinese2: "'那些乌鸦栖息在风萨塔里。 '",
      liju3: 'The cock crows and the dawn chorus begains.',
      chinese3: '公鸡叫了，众鸟的清晨鸣唱随之开始了。'

}
    ,
    {
      id: '797',
      word: ' crown ',
      ciyi: '   n. 王冠；君权；王权vt. 为…加冕  ',
      kaodian: '',
      liju1: '    The gold crown was encrusted with precious gems.       ',
      chinese1: '金制的王冠镶有许多贵重的宝石。',
      liju2: ' Many rebellious nobles command the King to leave his crown. ',
      chinese2: '许多反叛的贵族要求国王下台。 ',
      liju3: 'British kings are crowned in Westminster Abbey.',
      chinese3: '英国国王都在威斯敏斯特教堂加冕。'
}
    ,
    {
      id: '798',
      word: ' crucial  ',
      ciyi: '   a. 重要的；决定性的；定局的  ',
      kaodian: '',
      liju1: '     We have found two issues of crucial importance: location and scale.      ',
      chinese1: '我们发现了两个至关重要的问题：地点和规模。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '799',
      word: ' crude  ',
      ciyi: '   a. 粗糙的，未加工的；粗鲁的；初步的；不成熟的  ',
      kaodian: '',
      liju1: '     Primitive man hunted wild animals with crude stone implements.      ',
      chinese1: '原始社会的人用粗糙的石器猎取野兽。',
      liju2: ' Bill’s crude behavior annoyed his sister. ',
      chinese2: '比尔粗鲁的言行惹恼了姐姐。 ',
      liju3: 'The measure was condemned by economists as crude and ill-conceived.',
      chinese3: '经济学家批评该措施不成熟且构思很差。'
}
    ,
    {
      id: '800',
      word: ' cruise ',
      ciyi: '   vi. 巡航，巡游；（出租车，船）缓慢航行n. 巡航，巡游  ',
      kaodian: '',
      liju1: '     Several warships are cruising around the Mediterranean Sea.     ',
      chinese1: '几艘军舰正在地中海上巡航。',
      liju2: ' A black and white police car cruised past. ',
      chinese2: '一辆黑白相间的警车平稳驶过。 ',
      liju3: 'He and his wife were planning to go on a world cruise.',
      chinese3: '他和妻子那时正计划进行一次环球海上航游。'
}
    ,
    {
      id: '801',
      word: ' crush ',
      ciyi: '   vt. 压碎；压垮，变形n. 压碎；压坏  ',
      kaodian: '',
      liju1: "'Don't crush this box; there are flowers inside.'",
      chinese1: '别把这个盒子压坏了，里面有花。',
      liju2: ' The army quickly crushed the rebellion. ',
      chinese2: ' 军队很快将叛乱镇压下去。',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '802',
      word: ' crust ',
      ciyi: '   n. 地壳；外壳；面包皮    ',
      kaodian: '',
      liju1: "'Earthquakes leave scars in the Earth's crust.'",
      chinese1: '地震会在地壳上留下痕迹。',
      liju2: ' Cut the crusts off the bread and soak the bread in the milk. ',
      chinese2: '切掉面包皮，将面包浸在牛奶中。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '803',
      word: ' crystal ',
      ciyi: '   n.水晶饰品，水晶；结晶，晶体a. 水晶的；透明的   ',
      kaodian: '',
      liju1: '    She was wearing a strand of crystal beads.     ',
      chinese1: '她戴着一串水晶珠子。',
      liju2: ' Chemistry on an experiment called the crystal.  ',
      chinese2: '化学上有一个实验叫结晶。 ',
      liju3: 'A crystal vase with flowers crashed to the floor.',
      chinese3: '一个插着花的水晶花瓶摔倒了地板上。'
}
    ,
    {
      id: '804',
      word: ' cube ',
      ciyi: '   n.立方体；立方；三次幂   ',
      kaodian: '',
      liju1: '     Standing on the "edge" of this cube world would feel like standing atop a mountain range.      ',
      chinese1: '站在这个立方体世界的“边上”会感觉像是站高山之巅一样。',
      liju2: ' The cube of three is twenty-seven. ',
      chinese2: '3的立方是27。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '805',
      word: ' cucumber ',
      ciyi: '  n. 黄瓜   ',
      kaodian: '',
      liju1: '     The salmon was brought to the table whole, garnished with parsley and slices of tomato and cucumber.      ',
      chinese1: '整条大麻哈鱼被端上了桌，并用欧芹、西红柿片和黄瓜片作为花色配菜。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '806',
      word: ' cue  ',
      ciyi: '   n. 提示，暗示；信号   ',
      kaodian: '',
      liju1: '     We can take the cue from our fears and plunge the world into chaos.      ',
      chinese1: '我们应该从我们的忧虑中以及世界陷入混乱中获取暗示。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '807',
      word: ' culprit ',
      ciyi: '   n. 犯人，罪犯   ',
      kaodian: '',
      liju1: '    The police followed home the clue and finally caught the culprit.     ',
      chinese1: '警察根据线索追根到底，终于抓住了这个罪犯。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '808',
      word: ' cultivate ',
      ciyi: '   vt.培养；教养；耕作，养殖   ',
      kaodian: '',
      liju1: '   We must cultivate compassion for ourselves and for others for our survival.       ',
      chinese1: '我们必须为了他人，自己及我们的生存去培养善良。',
      liju2: ' Millet is cultivated on some farms here. ',
      chinese2: ' 这里有些农场种小米。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '809',
      word: ' cunning ',
      ciyi: '    a. 狡猾的；巧妙的；可爱的n. 狡猾  ',
      kaodian: '',
      liju1: '     These disturbed kids can be cunning.    ',
      chinese1: '这些心理失常的小孩可能会很狡猾。',
      liju2: 'People have devised ever more cunning tools to cope with dangerous work.  ',
      chinese2: '人们设计了越来越精巧的工具以应对危险的工作。 ',
      liju3: 'Underneath his politeness, there was deceit and cunning. ',
      chinese3: '在他的彬彬有礼的伪装下，隐藏着欺诈和狡猾。'
}
    ,
    {
      id: '810',
      word: 'cupboard  ',
      ciyi: '  n. 碗柜；小厨    ',
      kaodian: '',
      liju1: '     A pile of magazines tumbled out when he opened the cupboard.      ',
      chinese1: '当他打开橱柜时，一堆杂志掉了出来。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '811',
      word: ' curb ',
      ciyi: '    n.路缘；勒马绳vt. 控制；勒住  ',
      kaodian: '',
      liju1: '     The workers repair the curbs of the city once a year.    ',
      chinese1: '工人们每年都对城市的路缘进行一次修整。',
      liju2: '  Effie bought a new curb for her father. ',
      chinese2: '埃菲给父亲买了一条新的勒马绳。 ',
      liju3: ' I could not curb my anger.',
      chinese3: '我按捺不住我的愤怒。'
}
    ,
    {
      id: '812',
      word: ' curiosity ',
      ciyi: '    n. 好奇，好奇心；古董，古玩   ',
      kaodian: '',
      liju1: '   The rumors excite her curiosity.        ',
      chinese1: '谣言引起了她的好奇心。',
      liju2: ' There is much to see in the way of castles, curiosities, and museums. ',
      chinese2: '那里有许多可看的城堡、奇珍异宝和博物馆。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '813',
      word: ' curious ',
      ciyi: '  a. 好奇的，稀有的；古怪的    ',
      kaodian: '',
      liju1: '   Steve was intensely curious about the world I came from.      ',
      chinese1: '史蒂夫对我是从哪里来的有强烈的好奇心。',
      liju2: ' He collected a quantity of curious information.   ',
      chinese2: '他搜集了大量稀奇古怪的消息。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '814',
      word: 'curl  ',
      ciyi: '   vt. 使…卷曲；蜷缩n. 卷曲状；卷发；螺旋状物    ',
      kaodian: '',
      liju1: '   The dog curled itself up on the rug.      ',
      chinese1: '那只狗蜷缩着身子躺在地毯上。',
      liju2: ' Her hair curls naturally. ',
      chinese2: '她的头发是天然卷曲的。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '815',
      word: ' currency ',
      ciyi: '  n. 货币；通货     ',
      kaodian: '',
      liju1: '     More people favour a single European currency than oppose it.    ',
      chinese1: '支持欧洲单一货币的人比反对的多。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '816',
      word: ' current ',
      ciyi: '   a. 现在的，当前的；流通的，通用的n.水流，气流；潮流；趋势   ',
      kaodian: '',
      liju1: '   The current situation is very different to that in 1990.      ',
      chinese1: '当前的形势与1990年大不相同。',
      liju2: ' Long ago it was a current belief that the earth was flat. ',
      chinese2: ' 很久以前，人们普遍认为地球是圆的。',
      liju3: 'I felt a current of cool air blowing in my face. ',
      chinese3: '我感到一股凉气吹在脸上。',
      liju4: 'Home Office is a new current of life.',
      chinese4: '家庭办公是一种新潮流。'
}
    ,
    {
      id: '817',
      word: ' curriculum ',
      ciyi: '     n. 课程；总课程  ',
      kaodian: '',
      liju1: '   Teachers incorporated business skills into the regular school curriculum.     ',
      chinese1: '教师们将商业技能纳入学校常规课程。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '818',
      word: ' curse ',
      ciyi: '   n. 诅咒；咒骂vt.诅咒；咒骂    ',
      kaodian: '',
      liju1: '    He shot her an angry look and a curse.     ',
      chinese1: '他投给她愤怒的一瞥和一句诅咒。',
      liju2: ' They were frequently cursed in those days. ',
      chinese2: '在那个时候他们常常挨骂。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '819',
      word: 'curve  ',
      ciyi: '  n. 曲线；弯曲 v.使弯曲；成曲形    ',
      kaodian: '',
      liju1: '    His plane swooped with a beautiful curve up and down.       ',
      chinese1: '他的飞机在上下翻飞时画出了一条美丽的曲线。',
      liju2: 'The ball curved strangely in the air.  ',
      chinese2: '球在空中划出奇怪的弧线。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '820',
      word: ' cushion ',
      ciyi: '    n. 垫子，坐垫   ',
      kaodian: '',
      liju1: '     She plumps up the sofa cushion.      ',
      chinese1: '她把沙发垫子拍得鼓鼓的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '821',
      word: ' cyberspace ',
      ciyi: '   n. 网络空间；计算机世界    ',
      kaodian: '',
      liju1: '   Take, for example, the threat of cyberspace conflict between states.       ',
      chinese1: '以国与国之间网络空间冲突的威胁为例。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '822',
      word: ' cycle  ',
      ciyi: '   n. 自行车；循环；周期vi. 循环；轮转；骑自行车    ',
      kaodian: '',
      liju1: '    We supply the travel ticket for you and your cycle.      ',
      chinese1: '我们为您和您的自行车提供旅行票。',
      liju2: ' There is a cycle to what we and our teams do.  ',
      chinese2: '这就是我们和我们的团队所做的循环。 ',
      liju3: ' This machine cycles automatically.',
      chinese3: '这台机器自动循环运动.',
      liju4: 'He cycled to Ingwold. ',
      chinese4: '他骑车去了英格沃尔德。'
}
    ,
    {
      id: '823',
      word: 'cylinder  ',
      ciyi: '   n. 圆筒；柱面；圆柱状物；汽缸    ',
      kaodian: '',
      liju1: '      It was recorded on a wax cylinder.    ',
      chinese1: '它被刻录在了蜡烛上。',
      liju2: '  The piston is reciprocating inside cylinder.',
      chinese2: ' 活塞在汽缸内部往复运动。',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '824',
      word: ' dairy ',
      ciyi: '   n. 奶制品；乳牛；牛奶店    ',
      kaodian: '',
      liju1: '      In my childhood, local dairies bought milk from local farmers.    ',
      chinese1: '在我小时候，本地的乳品公司向当地农场主收购牛奶。',
      liju2: ' He avoids all meat and dairy products. ',
      chinese2: '他不吃任何肉类和奶制品。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '825',
      word: ' dam ',
      ciyi: '   n. 水坝；障碍；水闸    ',
      kaodian: '',
      liju1: '      The flood weakened the dam.      ',
      chinese1: '洪水损坏了大坝。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '826',
      word: ' damn ',
      ciyi: '   vt. 谴责；严厉地批评a. 可恶的    ',
      kaodian: '',
      liju1: '      The film was damned by the critics.    ',
      chinese1: '此影片遭批评家指责。',
      liju2: ' This god damn tooth is killing me. ',
      chinese2: '这该死的牙痛要我的命了。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '827',
      word: 'damp  ',
      ciyi: ' a. 潮湿的；有湿气的     ',
      kaodian: '',
      liju1: '      Damp gunpowder will not fire.      ',
      chinese1: '潮湿的火药不会起火。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '828',
      word: ' dash ',
      ciyi: '  n. 破折号；突进；冲撞vi. 猛冲；撞击    ',
      kaodian: '',
      liju1: '      If a section has a dash or special character in it, the word is probably too long.     ',
      chinese1: '如果某个部分中有一个破折号或是一个特殊的字符的话，这个词就有可能太长。',
      liju2: ' All of the students made a dash for the dining room at noon. ',
      chinese2: '一到中午，学生都冲进食堂。 ',
      liju3: 'She dashed the chair against the door. ',
      chinese3: '她把椅子猛撞在门上。'
}
    ,
    {
      id: '829',
      word: ' data ',
      ciyi: '    n. 数据；资料   ',
      kaodian: '',
      liju1: '     The study was based on data from 2,100 women.     ',
      chinese1: '此项研究以从2100位女性身上获得的资料为依据。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '830',
      word: 'database  ',
      ciyi: '   n. 数据库，资料库    ',
      kaodian: '',
      liju1: '      The state maintains a database of names of people allowed to vote.    ',
      chinese1: '该州有一个可以投票的人的姓名数据库。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '831',
      word: ' daunt ',
      ciyi: '   vt. 使气馁，使畏缩；威吓    ',
      kaodian: '',
      liju1: '   They were daunted by the amount of work still to be done.       ',
      chinese1: '他们被那大量待做的工作吓倒了。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '832',
      word: ' dazzle ',
      ciyi: '   n. 耀眼的光；令人眼花缭乱vt.使目眩；使惊奇；使倾倒    ',
      kaodian: '',
      liju1: '    The dazzle of stardom and status attracts them.     ',
      chinese1: '明星和身份的耀眼光环吸引着他们。',
      liju2: ' The story of the company provided the dazzle in its carving out. ',
      chinese2: '这家公司的创业史令人眼花缭乱。 ',
      liju3: 'The sun, glinting from the pool, dazzled me. ',
      chinese3: '池水折射的阳光使我目眩。',
      liju4: ' We were all dazzled by the girl’s good looks and charm.',
      chinese4: '我们都被那个女孩的容貌和魅力所倾倒了。'

}
    ,
    {
      id: '833',
      word: 'deadline  ',
      ciyi: '   n. 截止期限，最后期限    ',
      kaodian: '',
      liju1: '     In this case, you’ll want to set yourself a deadline.       ',
      chinese1: '在这种情况下，你要为自己设定一个最后期限。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '834',
      word: 'deadly  ',
      ciyi: '   a. 致命的；非常的；极其的    ',
      kaodian: '',
      liju1: '      The shock was deadly to him.      ',
      chinese1: '这次打击对他是致命的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '835',
      word: ' deaf ',
      ciyi: '    a. 聋的；不愿听的   ',
      kaodian: '',
      liju1: '   She is now profoundly deaf.       ',
      chinese1: '她现在几乎一点声音都听不到了。',
      liju2: '  His father was deaf to our advice. ',
      chinese2: '他的父亲对我们的建议充耳不闻。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '836',
      word: 'dealer  ',
      ciyi: ' n. 经销商；商人；贩子     ',
      kaodian: '',
      liju1: '      I would like you to contact the auto dealer where I bought the car, explaining your error.      ',
      chinese1: '我希望你们联系一下我买车的汽车经销商，对你们的错误做出解释。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '837',
      word: ' dean ',
      ciyi: '  n. 院长；主持牧师；系主任；教务长     ',
      kaodian: '',
      liju1: "'She was dean of the University of Washington's Graduate School.'",
      chinese1: '她曾任华盛顿大学研究生院的院长。',
      liju2: ' Jane Froman went straight to her dean and asked for what she wanted. ',
      chinese2: '珍佛曼就直接找到她的系主任并提出了自己的请求。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '838',
      word: ' debate ',
      ciyi: '   vt. 辩论，争论，讨论n. 辩论；辩论会    ',
      kaodian: '',
      liju1: '    Scientists were debating whether an asteroid was about to hit the Earth.      ',
      chinese1: '科学家们在争论一颗小行星是否要撞上地球。',
      liju2: '  In debate he often parlays his voice into fame.  ',
      chinese2: ' 在辩论中他常常利用自己的嗓子赢得声誉。',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '839',
      word: ' debt ',
      ciyi: '  n. 债务；借款；罪过     ',
      kaodian: '',
      liju1: '   As the war  debt lightened, the economy of the country developed quickly.       ',
      chinese1: '由于战争负债减轻，这个国家的经济很快发展起来。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '840',
      word: 'debut  ',
      ciyi: '   n. 初次登台；处女作vt. 首次推出；（产品）面世    ',
      kaodian: '',
      liju1: '      She made her debut in a 1937 production of "Hamlet."    ',
      chinese1: '她在1937年《哈姆雷特》的演出中首次登台。',
      liju2: ' After little more than a year of work, Norah Jones released her debut album, Come Away with Me.   ',
      chinese2: ' 只经过一年多一点的准备工作，诺拉-琼斯就推出了她的首张专辑《远走高飞》。',
      liju3: 'A new product will debut next week. ',
      chinese3: '一种新产品将在下周面世。'
}
    ,
    {
      id: '841',
      word: 'decade  ',
      ciyi: '    n. 十年，十年期    ',
      kaodian: '',
      liju1: '    We hope to have test flights in this decade.        ',
      chinese1: '我们希望在这十年进行试验飞行。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '842',
      word: ' decay ',
      ciyi: '   vi. 衰退，衰减n. 衰退，衰减；腐烂，腐朽vt.使腐烂    ',
      kaodian: '',
      liju1: '      His power decayed in old age.      ',
      chinese1: '在他步入老年时，体力就衰退了。',
      liju2: ' The tree began to decay as soon as it was cut down.   ',
      chinese2: '树一被砍倒，它就开始腐朽。 ',
      liju3: ' The dampness of the climate decayed the books and clothes.',
      chinese3: '气候潮湿使书籍和衣服霉烂了。'
}
    ,
    {
      id: '843',
      word: ' deceit ',
      ciyi: '    n. 欺骗；谎言   ',
      kaodian: '',
      liju1: '      He was living a secret life of deceit and unfaithfulness.      ',
      chinese1: '他过着欺骗和不忠的隐瞒生活。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '844',
      word: ' deceive ',
      ciyi: '   v. 欺骗；行骗    ',
      kaodian: '',
      liju1: '      He has deceived and disillusioned us all.      ',
      chinese1: '他欺骗了我们所有人, 令我们所有人失望至极。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '845',
      word: ' decent ',
      ciyi: '  a. 正派的；宽厚的；得体的；体面的     ',
      kaodian: '',
      liju1: '   You should treat people with decent attitude.        ',
      chinese1: '你应该宽以待人。',
      liju2: ' He was the only thing there that seemed decent: and I thought he never looked better.   ',
      chinese2: '他是那里唯一的看上去很体面的人；我认为他从来没有这样好看过。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '846',
      word: ' decimal ',
      ciyi: '   a. 小数的；十进位的n. 小数    ',
      kaodian: '',
      liju1: '     The mathematics of ancient Egypt was based on a decimal system.       ',
      chinese1: '古埃及数学以十进制为基础。',
      liju2: ' The little dot near the centre is the decimal point.   ',
      chinese2: '怪圈中心近处的那个小圆圈，就是小数点。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '847',
      word: 'decisive  ',
      ciyi: '    a. 决定性的；果断的，坚定的   ',
      kaodian: '',
      liju1: '  The battle for Abidjan will be decisive.         ',
      chinese1: '阿比让的战斗将是决定性的。',
      liju2: '  He should give way to a younger, more decisive leader. ',
      chinese2: '他应该让位给一位更年轻、更果断的领导者。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '848',
      word: ' deck ',
      ciyi: '   n. 甲板；行李仓    ',
      kaodian: '',
      liju1: '    She missed the deck and landed in the water.         ',
      chinese1: '她未能跳到甲板上，而掉入水中。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '849',
      word: ' declaration ',
      ciyi: '   n.宣布；公告；声明    ',
      kaodian: '',
      liju1: '    Another war declaration was handed down by the government.         ',
      chinese1: '政府又颁布了另一项战争宣言。',
      liju2: '  ',
      chinese2: ' ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '850',
      word: ' declare ',
      ciyi: '   v. 宣布，声明；断言，宣称；公布；发表    ',
      kaodian: '',
      liju1: '    The governor declared a state of emergency.        ',
      chinese1: '州长宣布紧急状态。',
      liju2: '  She declared that the allegation was a lie. ',
      chinese2: '她断言这一说法是谎言。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '851',
      word: 'decline  ',
      ciyi: '   n. 下降；衰退；斜面；倾斜vi. 下降；衰落vt.谢绝    ',
      kaodian: '',
      liju1: ' The decline in sales embarrassed our company.            ',
      chinese1: '销售下降使我们公司陷于困境。',
      liju2: ' The path follows a sharp decline to the lake. ',
      chinese2: '小路沿着陡坡而下，通向湖边。 ',
      liju3: 'The sun declined in the skies. ',
      chinese3: '太阳在天边落下。',
      liju4: ' He declined their invitation.',
      chinese4: '他谢绝了他们的邀请。'
}
    ,
    {
      id: '852',
      word: ' decorate ',
      ciyi: '   vt. 装饰；布置；授勋给   ',
      kaodian: '',
      liju1: '    We decorated the house for the holidays.        ',
      chinese1: '我们装饰房子迎接假期到来。',
      liju2: '  The soldier was decorated for bravery. ',
      chinese2: '这名战士因勇敢而被授勋。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '',
      word: 'decrease  ',
      ciyi: '  n. 减少，减小vi. 减少，减小    ',
      kaodian: '',
      liju1: '    This can decrease the flow of water in nearby streams or dry them out completely.          ',
      chinese1: '这可能会导致附近河流的水量减少，或者让河流完全干涸。',
      liju2: '  Population growth is decreasing by 1.4% each year. ',
      chinese2: '人口增长每年下降1.4%。 ',
      liju3: 'Retail stores were experiencing a decrease in revenues.',
      chinese3: '零售商店正在经历收入的减少。'
}
    ,
    {
      id: '853',
      word: ' dedicate ',
      ciyi: ' vt. 致力；献身；把…用在    ',
      kaodian: '',
      liju1: "'He's quite dedicated to his students.'",
      chinese1: '他奉献很多给他的学生们。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '854',
      word: ' deduce ',
      ciyi: '  vt. 推论，推断；演绎    ',
      kaodian: '',
      liju1: '   I can’t deduce a conclusion from these facts.         ',
      chinese1: '我无法从这些事实中推断出结论。',
      liju2: ' From his conversation, I deduced that he had a large family. ',
      chinese2: '据他的谈话，我推断他有个大家庭。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '855',
      word: ' deduct ',
      ciyi: '   vt. 扣除，减去；演绎   ',
      kaodian: '',
      liju1: '   They deducted the cost of the broken window from his allowance.         ',
      chinese1: '他们从他的津贴中扣除损坏窗户的费用。',
      liju2: ' The company deducted this payment from his compensation. ',
      chinese2: '公司从他的补偿金中减去了这笔款项。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '856',
      word: ' deem  ',
      ciyi: ' vt. 认为；相信    ',
      kaodian: '',
      liju1: '       French and German were deemed essential.     ',
      chinese1: '法语和德语被认为是必需的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '857',
      word: ' default ',
      ciyi: '   vi. 拖欠；不履行义务n. 违约；缺席；弃权   ',
      kaodian: '',
      liju1: '    When they defaulted in their payments, the bank foreclosed on the car.       ',
      chinese1: '因他们拖欠赎款，银行取消了赎回汽车的权利。',
      liju2: ' The credit card business is down, and more borrowers are defaulting on loans. ',
      chinese2: '信用卡生意正在走下坡路，更多的借贷人不履行还贷责任。 ',
      liju3: 'The corporation may be charged with default on its contract with the government.',
      chinese3: '该公司可能会被指控违反了与政府签订的合同。',
      liju4: 'She became a tennis champion by default last year.',
      chinese4: '去年因对手弃权，她获得了网球冠军。'
}
    ,
    {
      id: '858',
      word: 'defect   ',
      ciyi: '   n. 缺点，缺陷   ',
      kaodian: '',
      liju1: '         It facilitates control and communication from defect report to resolution.     ',
      chinese1: '它促进了从缺陷报告到解决的控制与交流。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '859',
      word: ' defendant ',
      ciyi: '    n. 被告  ',
      kaodian: '',
      liju1: '       The defendant pleaded guilty and was fined $500.     ',
      chinese1: '被告认罪，并被罚款$500。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '860',
      word: ' defer ',
      ciyi: '   v. 推迟；延期；服从   ',
      kaodian: '',
      liju1: '        You may defer payment until next week.      ',
      chinese1: '你可延期至下周支付。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '861',
      word: 'deficiency  ',
      ciyi: '  n. 缺陷，缺点；缺乏；不足   ',
      kaodian: '',
      liju1: '      They did blood tests on him for signs of vitamin deficiency.        ',
      chinese1: '他们给他做了血检看是否有缺乏维生素的迹象。',
      liju2: "' The most serious deficiency in NATO's air defence is the lack of an identification system to distinguish friend from foe. '",
      chinese2: '北约防空的最大缺陷就是缺乏能够辨认敌友的识别系统。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '862',
      word: ' deficit ',
      ciyi: ' n. 赤字；逆差   ',
      kaodian: '',
      liju1: "'They're ready to cut the federal budget deficit for the next fiscal year.'",
      chinese1: '他们已准备好在下一个财政年度削减联邦预算赤字。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '863',
      word: ' define ',
      ciyi: '   vt. 给…下定义；规定；限定  ',
      kaodian: '',
      liju1: '        It all depends on how you define it.        ',
      chinese1: '这取决于您如何对它进行定义。',
      liju2: ' The powers of the President are defined clearly. ',
      chinese2: '总统的权力有明确的限定。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '864',
      word: ' definite ',
      ciyi: '  a.确切的；明确的；肯定的   ',
      kaodian: '',
      liju1: '     I should scope out his real goal before I give him a definite reply.           ',
      chinese1: '我得先琢磨一下他的真正意图，才能给他一个明确的答复。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '865',
      word: ' definition ',
      ciyi: ' n. 定义；解释    ',
      kaodian: '',
      liju1: '      I like that definition.          ',
      chinese1: '我喜欢这个定义。',
      liju2: "' The first speakers at the conference criticized Prof. Johnson's new programme for lack of definition. '",
      chinese2: '会上的首批发言者批评约翰逊教授的新项目没有清晰度。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '866',
      word: ' defy ',
      ciyi: '  vt. 篾视；公然违抗，反抗  ',
      kaodian: '',
      liju1: '   The young man seemed as if he would defy all things.          ',
      chinese1: '那个年轻人看起来目空一切。',
      liju2: '  They believe it is essential to defy convention. ',
      chinese2: '他们认为对抗流俗是绝对必要的。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '867',
      word: ' degenerate ',
      ciyi: '  vi. 退化；堕落，蜕化n. 堕落的人  ',
      kaodian: '',
      liju1: '     Inactivity can make your joints stiff, and the bones may begin to degenerate.         ',
      chinese1: '不活动会使关节僵硬，骨骼因此可能会开始退化。',
      liju2: '  The city of Las Vegas is the heaven for those degenerates. ',
      chinese2: '拉斯维加斯是堕落者的天堂。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '868',
      word: 'delegate  ',
      ciyi: ' vt. 委派…为代表；授权n. 代表   ',
      kaodian: '',
      liju1: '        We decided to delegate Martin to attend the conference.      ',
      chinese1: ' 我们决定委派马丁作为代表出席这次会议。',
      liju2: ' A key factor in running a business is the delegation of responsibility. ',
      chinese2: '经商的一个关键因素是责任委托。 ',
      liju3: 'They drafted him to serve as their delegate.  ',
      chinese3: '他们选派他作他们的代表。'
}
    ,
    {
      id: '869',
      word: 'delete   ',
      ciyi: '   vt. 删除  ',
      kaodian: '',
      liju1: '      He also deleted files from the computer system.        ',
      chinese1: '他也从计算机系统中删除了文件。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '870',
      word: ' deliberate ',
      ciyi: '  a. 故意的；深思熟虑的；从容的   ',
      kaodian: '',
      liju1: '    Witnesses say the firing was deliberate and sustained.          ',
      chinese1: '目击者说这次射击是故意的，而且还持续了一段时间。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '871',
      word: ' delicate ',
      ciyi: '  a. 微妙的，灵敏的；精致的；纤弱的     ',
      kaodian: '',
      liju1: '         Any of these delicate processes could have stalled.       ',
      chinese1: '这些微妙的过程都可能出现故障。',
      liju2: 'I feel the delicate symmetry of a leaf.   ',
      chinese2: '我感觉到叶片的精致的对称。 ',
      liju3: 'She was physically delicate and psychologically unstable.',
      chinese3: '她身体纤弱，而且心理也不稳定。'
}
    ,
    {
      id: '872',
      word: 'deliver   ',
      ciyi: '  vt. 交付；递送；释放；发表，表达；接生   ',
      kaodian: '',
      liju1: '   They delivered the thief over to the police.           ',
      chinese1: '他们把小偷移交警察局了。',
      liju2: ' The congressman delivers his speech tomorrow morning. ',
      chinese2: '这名议员明天上午演讲(或发表演说)。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '873',
      word: ' delivery ',
      ciyi: '    n. 交付；分娩；递送  ',
      kaodian: '',
      liju1: '      In the end, it was an easy delivery: a fine baby boy.        ',
      chinese1: '最终，分娩顺利—— 一个健康的男婴。',
      liju2: '  Please allow 28 days for delivery. ',
      chinese2: '请留出28天的递送时间。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '874',
      word: 'demand  ',
      ciyi: '  vt. 要求；需要；查询；请求n. 需求；要求    ',
      kaodian: '',
      liju1: '       She demanded that we let her in.      ',
      chinese1: '她要求我们让她进来。',
      liju2: '  Demand for a product usually determines supply.  ',
      chinese2: '一种产品的需求往往影响供应。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '875',
      word: ' democracy ',
      ciyi: '   n. 民主，民主国家；民主政治   ',
      kaodian: '',
      liju1: '     The new democracies face tough challenges.         ',
      chinese1: '新生的民主国家面临严峻的挑战。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '876',
      word: ' democratic ',
      ciyi: '   a. 民主的；民主政治的；大众的   ',
      kaodian: '',
      liju1: '      a. 民主的；民主政治的；大众的        ',
      chinese1: '教育是民主社会的基础。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '877',
      word: ' demonstrate ',
      ciyi: '    vt. 证明；展示；论证  ',
      kaodian: '',
      liju1: ' The attorney demonstrated that the witness was lying.            ',
      chinese1: '那位律师证明证人在撒谎。',
      liju2: 'A selection of cosmetic companies will be there to demonstrate their new products.  ',
      chinese2: '一些化妆品公司会在那里展示他们的新产品。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '878',
      word: ' denial ',
      ciyi: '  n. 否认；拒绝；背弃   ',
      kaodian: '',
      liju1: '   You can be in denial about something happening to you or to someone else.            ',
      chinese1: '你可以因发生在自身或是他人身上的事件而进入否认状态。',
      liju2: '  Your denial would upset all of us. ',
      chinese2: '你的拒绝会令我们大家失望的 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '879',
      word: 'denote  ',
      ciyi: ' vt. 表示，指示；意味着    ',
      kaodian: '',
      liju1: ' The flashing lights denote dangerous roads ahead.            ',
      chinese1: '闪光表示前方道路危险。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '880',
      word: ' denounce ',
      ciyi: '  vt. 谴责；公然抨击；告发某人   ',
      kaodian: '',
      liju1: '       And if we fail, they will denounce us.         ',
      chinese1: '如果我们失败了，会遭到谴责。',
      liju2: ' She was denounced as a thief. ',
      chinese2: '她被告发为贼。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '881',
      word: ' dense ',
      ciyi: '   a. 稠密的；浓厚的，密集的 ',
      kaodian: '',
      liju1: '    Java is a densely populated island.           ',
      chinese1: '爪哇是一个人口稠密的岛屿。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '882',
      word: '  density',
      ciyi: '   n. 密度；密集；浓度 ',
      kaodian: '',
      liju1: '      The region has a very high population density.         ',
      chinese1: '这是一个人口密集的地区。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '883',
      word: 'dental  ',
      ciyi: '  a. 牙科的；牙齿的，牙的  ',
      kaodian: '',
      liju1: '      Good oral hygiene and regular dental care are important, whatever your age.         ',
      chinese1: '无论年龄大小，良好的口腔卫生和定期的牙齿保健都非常重要。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '884',
      word: 'dentist  ',
      ciyi: '  n. 牙科医生；牙医  ',
      kaodian: '',
      liju1: '    The dentist will treat my tooth.            ',
      chinese1: '这名牙医将医治我的牙齿。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '885',
      word: ' deny ',
      ciyi: '  vt. 否定，否认；拒绝  ',
      kaodian: '',
      liju1: '    The government has denied that the authorities have uncovered a plot to assassinate the president.           ',
      chinese1: '政府否认当局已经发现一个暗杀总统的阴谋。',
      liju2: ' The private secretary denied the general manager to all those without appointments. ',
      chinese2: '私人秘书拒绝那些未经预约的客人会见总经理。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '886',
      word: ' depart ',
      ciyi: '  vi. 离开；起程   ',
      kaodian: '',
      liju1: '      In the morning Mr. McDonald departed for Sydney.         ',
      chinese1: '麦克唐纳先生早上起程去了悉尼。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '887',
      word: ' departure ',
      ciyi: '  n. 离开；出发  ',
      kaodian: '',
      liju1: "'The secretary's sudden departure disorganized the whole company.'",
      chinese1: '该秘书的突然离去使全公司陷入混乱。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '888',
      word: ' dependence ',
      ciyi: '  n. 依赖；依靠；信任；信赖  ',
      kaodian: '',
      liju1: '   You think I exaggerate about the dependence?              ',
      chinese1: ' 你会以为我说依赖是过于夸张？',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '889',
      word: 'dependent   ',
      ciyi: '  a. 依靠的；从属的；随…而定的  ',
      kaodian: '',
      liju1: '   The local economy is overwhelmingly dependent on oil and gas extraction.            ',
      chinese1: '当地经济严重依赖石油和天然气提炼。',
      liju2: ' Going camping or not is dependent on the weather. ',
      chinese2: ' 是否去野营要视天气好坏而定。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '890',
      word: ' depict ',
      ciyi: '  vt. 描述；描画；描写  ',
      kaodian: '',
      liju1: '    The painter depicted Napoleon at the Battle of Waterloo.           ',
      chinese1: '画家描绘了滑铁卢战役中的拿破仑。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '891',
      word: ' deplore',
      ciyi: ' vt. 谴责；悲悼；哀叹  ',
      kaodian: '',
      liju1: '      She is right to deplore the pogroms against Jews and the beginning of the inquisition.      ',
      chinese1: '她正确地谴责对犹太人的大屠杀和开始执行宗教法庭。',
      liju2: '  The citizens deplored the death of their King. ',
      chinese2: '市民哀悼他们国王的逝世。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '892',
      word: 'deposit ',
      ciyi: '  n. 存款；保证金；沉淀物vt. 使沉积；存放；储蓄 ',
      kaodian: '',
      liju1: '    He has a large deposit in the bank.        ',
      chinese1: '他在银行里有大笔存款。',
      liju2: ' There is some deposit in the bottom of the flask.  ',
      chinese2: '这只烧杯的底部有些沉淀物。 ',
      liju3: 'The river deposited soil at its mouth.',
      chinese3: '河口沉积了淤泥。',
      liju4: 'She deposited her paycheck every Saturday.',
      chinese4: '她每星期六都存储她的薪金支票。'
}
    ,
    {
      id: '893',
      word: 'depress ',
      ciyi: '  vt. 压抑；降低；使沮丧；使抑郁 ',
      kaodian: '',
      liju1: '     The stronger U.S. dollar depressed sales.     ',
      chinese1: '更坚挺的美元使销售量下降。',
      liju2: 'I must admit the state of the country depresses me.  ',
      chinese2: ' 我必须承认国家的形势令我沮丧。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '894',
      word: ' depressed',
      ciyi: '  a. 沮丧的；降低的   ',
      kaodian: '',
      liju1: "'She's been very depressed and upset about this whole situation.'",
      chinese1: '整个境况使她感到心烦意乱，意志消沉。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '895',
      word: ' deprive',
      ciyi: ' vt. 使丧失，剥夺  ',
      kaodian: '',
      liju1: '  The law deprives criminals of their right to vote.        ',
      chinese1: '法律剥夺了罪犯的选举权。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '896',
      word: 'deputy ',
      ciyi: '   n. 代理人，代表a. 副的；代理的 ',
      kaodian: '',
      liju1: '      I delegated my responsibilities to my deputy.      ',
      chinese1: '我把职责委托给了我的代理人。',
      liju2: '  When he was ill, his duties devolved on his deputy.   ',
      chinese2: ' 他生病期间他的工作移交给了他的副手。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '897',
      word: 'derive  ',
      ciyi: '  vt.得到；导出；引申vi. 起源  ',
      kaodian: '',
      liju1: ' He derives great satisfaction from his stamp collection.         ',
      chinese1: '他从集邮中得到极大的满足。',
      liju2: ' Many English words are derived from Latin and Greek words. ',
      chinese2: '许多英语词汇来自或源自拉丁语和希腊语词汇。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '898',
      word: 'descend ',
      ciyi: '   v. 下降；下来 ',
      kaodian: '',
      liju1: '    The elevator descended slowly to the ground floor.       ',
      chinese1: '电梯缓慢地下降到底楼。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '899',
      word: ' descendant',
      ciyi: '  n. 后裔；子孙  ',
      kaodian: '',
      liju1: '     They are descendants of the original English and Scottish settlers.     ',
      chinese1: '他们是最初的英格兰和苏格兰移民的后裔。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '900',
      word: ' descent',
      ciyi: '   n. 下降，降下；血统；斜坡 ',
      kaodian: '',
      liju1: '   Sixteen of the youngsters set off for help, but during the descent three collapsed in the cold and rain.        ',
      chinese1: '那些年轻人中有16人出发寻求帮助，但在下山过程中有3人在寒冷和阴雨中倒下了。',
      liju2: 'All the contributors were of African descent.  ',
      chinese2: ' 所有捐助者都是非洲血统。',
      liju3: 'On the descents, cyclists spin past cars, freewheeling downhill at tremendous speed.',
      chinese3: '在下坡道上，自行车手们飞快地掠过汽车，靠惯性快速冲下山去。'
}
    ,
    {
      id: '901',
      word: 'describe ',
      ciyi: '   v. 描述，形容；描绘  ',
      kaodian: '',
      liju1: '   He described what he had seen and heard.       ',
      chinese1: '他描述了他的所见所闻。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '902',
      word: 'description ',
      ciyi: '   n. 描述，描写，形容；种类  ',
      kaodian: '',
      liju1: '   He has written a novel that charms by its minute description.          ',
      chinese1: '他写了一本描写细腻颇具吸引力的小说。',
      liju2: ' Events of this description occurred daily.  ',
      chinese2: ' 这类事件每天都有发生。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '903',
      word: 'deserve  ',
      ciyi: '   vt. 应受，值得  ',
      kaodian: '',
      liju1: '   They deserve our praise and thanks.        ',
      chinese1: '他们值得我们的表扬和感谢。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '904',
      word: 'designate ',
      ciyi: '   vt. 指定；指派；标出  ',
      kaodian: '',
      liju1: '    She designated the place where we were to meet.       ',
      chinese1: '她指定了我们将会面的地点。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '905',
      word: 'desirable ',
      ciyi: ' a.值得要的；称心的   ',
      kaodian: '',
      liju1: '  Both sides consider it desirable to further the understanding between the two peoples.           ',
      chinese1: '双方认为增进两国人民之间的了解是值得的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '906',
      word: ' desolate ',
      ciyi: '   a. 荒凉的；孤独凄惨的vt.使荒凉；使荒芜；使孤寂  ',
      kaodian: '',
      liju1: '    He was desolate without her.       ',
      chinese1: '没有她，他感到很凄凉。',
      liju2: 'The three children were left desolate by their parents.  ',
      chinese2: ' 这三个小孩被父母遗弃了，孤苦伶仃。',
      liju3: 'We  were   desolated   by    the   death  of  our   good   friend',
      chinese3: '我们好朋友的去世使我们很孤寂。'
}
    ,
    {
      id: '907',
      word: ' despair',
      ciyi: '  n. 绝望vi. 对…绝望  ',
      kaodian: '',
      liju1: '     He fought against despair.       ',
      chinese1: '他与绝望作斗争。',
      liju2: ' He wished to earn a living through writing but despaired of doing so. ',
      chinese2: '他原想通过写作谋生，但却对此绝望了。 ',
      liju3: '',
      chinese3: ''

}
    ,
    {
      id: '908',
      word: 'despatch/dispatch ',
      ciyi: '   vt. 派遣，发送 n.急件，快信；新闻报道  ',
      kaodian: '',
      liju1: '      The US Attorney General would dispatch several officers to Florida to cope with the problem.    ',
      chinese1: '美国司法部长将派几名政府官员到佛罗里达州去处理该问题。',
      liju2: ' We have an urgent dispatch for your boss. ',
      chinese2: '我们有一份急件要给我们的老板。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '909',
      word: 'desperate ',
      ciyi: '  a. 不顾一切的；绝望的；拼死的   ',
      kaodian: '',
      liju1: '  Troops are needed to help get food into Kosovo where people are in desperate need.        ',
      chinese1: '需要军队协助将食物运进科索沃，那里的人们迫切需要食物。',
      liju2: 'For himself, and he grew desperate: his sorrow was of that kind that will not lament.   ',
      chinese2: '至于他自己，变得绝望了，他的悲哀是属于哭不出来的那种。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '910',
      word: 'despise ',
      ciyi: '   vt. 轻视，蔑视  ',
      kaodian: '',
      liju1: "'I despise such people; they've no character.  '",
      chinese1: '我蔑视这种人，他们没骨气。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '911',
      word: 'despite ',
      ciyi: '   prep. 尽管，不管  ',
      kaodian: '',
      liju1: '    She told friends she will stand by husband, despite reports that he sent another woman love notes.      ',
      chinese1: '她告诉朋友说，她将支持丈夫，尽管有报道说他在给别的女人递情书。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '912',
      word: 'dessert',
      ciyi: '  n. 餐后甜点；甜点心  ',
      kaodian: '',
      liju1: '   They dillydallied with dessert.         ',
      chinese1: '他们慢悠悠地吃饭后甜食。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '913',
      word: 'destination',
      ciyi: '    n. 目的地，终点 ',
      kaodian: '',
      liju1: "'Don't let down even if you're nearing the destination.        '",
      chinese1: '即使快到目的地也不要松劲。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '914',
      word: 'destiny',
      ciyi: '  n. 命运，定数，天命  ',
      kaodian: '',
      liju1: '  We are masters of our own destiny.       ',
      chinese1: '我们是自己命运的主人。',
      liju2: 'Is it destiny that brings people together, or is it accident?  ',
      chinese2: '是定数，还是偶然，将人们带到一起？ ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '915',
      word: 'destruction',
      ciyi: '   n. 破坏，毁灭；摧毁  ',
      kaodian: '',
      liju1: '   He was lured to destruction.        ',
      chinese1: '他受诱惑而走向毁灭。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '916',
      word: 'destructive',
      ciyi: '   a. 破坏的；毁灭性的  ',
      kaodian: '',
      liju1: '   We talk about "healthy" and "destructive" conflict, and generally we have worked very hard to eliminate it.        ',
      chinese1: '我们会谈到“健康的”和“破坏性的”冲突，一般来说，我们会努力消除冲突。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '917',
      word: 'detach ',
      ciyi: '  vt. 分开；拆开   ',
      kaodian: '',
      liju1: '   I have detached the watch from the chain.       ',
      chinese1: '我已把表从表链上拆了下来。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '918',
      word: 'detail',
      ciyi: '   n. 细节，详情vt.详述  ',
      kaodian: '',
      liju1: '   Not a single detail is to be omitted.         ',
      chinese1: '任何细节不得遗漏。',
      liju2: "' The computer's characteristics are fully detailed in the brochure. '",
      chinese2: ' 计算机的性能在这小册子里有详尽说明。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '919',
      word: 'detain',
      ciyi: '  vt. 拘留；留住；耽搁   ',
      kaodian: '',
      liju1: '   The heavy traffic detained us for half an hour.       ',
      chinese1: '拥挤的交通使我们耽搁了半个小时。',
      liju2: ' The police detained the suspect to make further inquiries.  ',
      chinese2: ' 警察拘留了那个嫌疑犯以便进一步审查。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '920',
      word: 'detect',
      ciyi: '   vt. 察觉；发现；探测；侦察  ',
      kaodian: '',
      liju1: 'I detected a note of pity in her voice.       ',
      chinese1: '我觉察她话音语中带着同情。',
      liju2: '  The police detected a spy. ',
      chinese2: '警方侦查出一名间谍。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '921',
      word: 'detective',
      ciyi: '    n. 侦探  ',
      kaodian: '',
      liju1: 'The detective turned up some new clues to the case.    ',
      chinese1: '侦探发现了这个案子的一些新线索。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '922',
      word: 'detector',
      ciyi: '   n. 探测器   ',
      kaodian: '',
      liju1: "'This detector is a very delicate instrument; it'll go wrong if it's mishandled.'",
      chinese1: '这个探测器是个非常精密的仪器，如果胡乱使用就会出现故障。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '923',
      word: 'deteriorate',
      ciyi: '   vi. 恶化，变坏   ',
      kaodian: '',
      liju1: "'  The patient's condition has deteriorated over the last few hours.     '",
      chinese1: '几个钟头前病人的病情已恶化。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '924',
      word: 'deviate',
      ciyi: '  vi. 脱离；偏离；越轨   ',
      kaodian: '',
      liju1: '   The plane deviated from its normal flight path.     ',
      chinese1: '飞机偏离了正常航线。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '925',
      word: 'device ',
      ciyi: '  n. 装置；设备，仪器；策略；诡计    ',
      kaodian: '',
      liju1: ' The recording device has activated.        ',
      chinese1: '录音装置已开动起来。',
      liju2: ' The thief gained access to the basement by a subtle device. ',
      chinese2: '小偷以巧妙的方式潜入了地下室。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '926',
      word: 'devil',
      ciyi: '  n. 魔鬼；家伙；恶棍   ',
      kaodian: '',
      liju1: '  The cartoon represented the president as a devil.      ',
      chinese1: '这幅漫画把总统画成了魔鬼。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '927',
      word: 'devise',
      ciyi: '    vt. 设计；想出；发明  ',
      kaodian: '',
      liju1: '     He elaborately devised a new computer.  ',
      chinese1: '他精心设计了一台新电脑。',
      liju2: ' The professor has devised a new method of teaching foreign languages. ',
      chinese2: '那位教授发明了一种教外语的新方法。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '928',
      word: 'dew',
      ciyi: '  n. 珠，滴；露水    ',
      kaodian: '',
      liju1: '  Moisture in the atmosphere condensed into dew during the night.      ',
      chinese1: '大气中的水分在夜间凝结成露珠。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '929',
      word: 'diabetes',
      ciyi: '    n. 糖尿病；多尿症  ',
      kaodian: '',
      liju1: '  It is like diabetes or asthma, an illness, due to a buildup of pressures, which can happen to anyone.       ',
      chinese1: '就像是糖尿病或者哮喘，由于压力的形成，这种病有可能发生在任何人身上。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '930',
      word: 'diagnose ',
      ciyi: '   vt. 诊断；断定   ',
      kaodian: '',
      liju1: '  The soldiers were diagnosed as having flu.     ',
      chinese1: '这些士兵被诊断为患了流感。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '931',
      word: 'diagram ',
      ciyi: '    n. 图表；图解  ',
      kaodian: '',
      liju1: '   He drew a diagram to show us how to get to his house.    ',
      chinese1: '他画了一张草图，告诉我们到他家该怎么走。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '932',
      word: 'dial ',
      ciyi: '   n.刻度盘，钟面，拨号盘v. 拨号，打电话   ',
      kaodian: '',
      liju1: '  The luminous dial on the clock showed five minutes to seven.   ',
      chinese1: '发光的表盘上显示6：55。',
      liju2: ' He lifted the phone and dialed her number.  ',
      chinese2: ' 他拿起电话，拨打她的号码。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '933',
      word: 'dialect ',
      ciyi: '  n. 方言，土话   ',
      kaodian: '',
      liju1: '  Cockney is the colourful dialect spoken in the East End of London.     ',
      chinese1: '伦敦方言是在伦敦东区讲的颇有特色的地方语。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '934',
      word: ' diameter ',
      ciyi: '    n. 直径  ',
      kaodian: '',
      liju1: '   The moon’s diameter is smaller than the Earth’s.   ',
      chinese1: '月亮的直径比地球小。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '935',
      word: ' dictate',
      ciyi: '    vt. 命令；口述；使听写  ',
      kaodian: '',
      liju1: '  Sheldon writes every day of the week, dictating his novels in the morning.   ',
      chinese1: '谢尔登每天都进行创作，在上午口述他的小说。',
      liju2: ' You have to eat what your parents feed you and sleep when they dictate.  ',
      chinese2: ' 父母决定你每天吃什么，当他们命令你睡觉时你不得不上床。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '936',
      word: ' dictation',
      ciyi: '   n. 听写；口述；命令   ',
      kaodian: '',
      liju1: '   The teacher gave the pupils dictation.    ',
      chinese1: '教师让学生听写。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '937',
      word: 'diet ',
      ciyi: '  n. 饮食；食物    ',
      kaodian: '',
      liju1: '  More exercise and a change of diet will tone up your body.    ',
      chinese1: '多进行锻炼并改变饮食会使你身强体壮。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '938',
      word: 'differ ',
      ciyi: '  vt.与…不同；与…意见不同    ',
      kaodian: '',
      liju1: "'   Each writer's style differs from that of another.   '",
      chinese1: '每个作家的风格各不相同。',
      liju2: ' The two leaders had differed on the issue of sanctions.  ',
      chinese2: '就制裁问题两位领导持不同意见。 ',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '939',
      word: ' differentiate ',
      ciyi: '  vi. 区分，区别vt.使区分，使不同   ',
      kaodian: '',
      liju1: '   A child may not differentiate between his imagination and the real world.   ',
      chinese1: '孩子也许无法区分想像与真实世界的差别。',
      liju2: '  Its slate roof differentiates this house from others. ',
      chinese2: ' 这间房子的石板瓦房顶使其有别于这地区的其他房子。',
      liju3: '',
      chinese3: ''
}
    ,
    {
      id: '940',
      word: ' diffuse',
      ciyi: '   a. 弥漫的；漫无边际vt.扩散；传播vi.扩散   ',
      kaodian: '',
      liju1: '   Direct light is better for reading than diffuse and I missed the point.   ',
      chinese1: '直射光比漫射光更适合看书。',
      liju2: ' The speaker’s speech was very diffuse and I missed the point. ',
      chinese2: '那位演讲人的演说太漫无边际了，我都没抓住要点。 ',
      liju3: 'The printing press helped diffuse scientific knowledge.  ',
      chinese3: '印刷品有助于传播科学知识。',
      liju4: ' Ink diffuses through water. ',
      chinese4: '墨水在水中扩散。'
}
    ,
    {
      id: '941',
      word: ' digest',
      ciyi: '    vt.吸收；领悟 vi. 消化n. 文摘；摘要  ',
      kaodian: '',
      liju1: '   It often takes a long time to digest new ideas.   ',
      chinese1: '吸收新思想往往需要很长时间。',
      liju2: "'I'll take a nap and digest. '",
      chinese2: '我要打个盹食物消化一下。 ',
      liju3: '"My mother warned him against doing it," said his son Ralph junior in an interview with Golf Digest in 1999.   ',
      chinese3: '1999年，他的儿子小拉尔夫在接受采访《高尔夫文摘》采访时说：“我母亲警告过他不要这么做。”'
}
    ,
    {
      id: '942',
      word: ' digital',
      ciyi: '  a. 数字的    ',
      kaodian: '',
      liju1: '   The new digital technology would allow a rapid expansion in the number of TV channels.    ',
      chinese1: '新的数码技术可使电视频道的数量得以快速增多。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '943',
      word: 'dignity ',
      ciyi: '   n. 尊严；高贵；举止庄严；端庄   ',
      kaodian: '',
      liju1: '  We have to recur to arms for guarding our national dignity.   ',
      chinese1: '为了捍卫国家的尊严，我们不得不诉诸武力。',
      liju2: ' The governor is a man of dignity. ',
      chinese2: '州长是一个不苟言笑的人。 ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '944',
      word: 'dilemma ',
      ciyi: '   n. 困境；进退两难   ',
      kaodian: '',
      liju1: '  This creates yet another dilemma.    ',
      chinese1: '这就造成了另一个困境。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '945',
      word: 'diligent  ',
      ciyi: '    a. 勤奋的；用功的   ',
      kaodian: '',
      liju1: '   Success always smiles upon people who are diligent.   ',
      chinese1: '成功总是青睐那些勤奋的人。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '946',
      word: ' dilute',
      ciyi: '  a. 稀释的；淡的vt.稀释；冲淡   ',
      kaodian: '',
      liju1: '   Be careful of the dilute sulphuric acid.   ',
      chinese1: '小心那些稀释的硫酸',
      liju2: 'Dilute the juice (with water) before you drink it.  ',
      chinese2: ' 喝果汁之前，用水把它冲淡。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '947',
      word: 'dim ',
      ciyi: '   a. 暗淡的，模糊的   ',
      kaodian: '',
      liju1: "'   It seems that the '60s era of social activism is all but a dim memory.   '",
      chinese1: '60年代的社会激进主义时代似乎只剩下模糊的记忆。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '948',
      word: 'dimension ',
      ciyi: '  n. 维；度数，元；尺寸    ',
      kaodian: '',
      liju1: '   The query includes one or more filters on at least one of the dimension tables.    ',
      chinese1: '查询至少在一个维度表上包含一个或更多的过滤器。',
      liju2: 'Dimension the shelves so that they fit securely into the cabinet.  ',
      chinese2: '把搁板刨成需要的尺寸以便它们可牢固地镶入贮藏橱中。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '949',
      word: 'diminish ',
      ciyi: '   v. 减少，缩小；变小   ',
      kaodian: '',
      liju1: '  If you stray from the guidelines, your amount of reuse will diminish.     ',
      chinese1: '如果您偏离方针，那么您的复用量将减少。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '950',
      word: 'dine  ',
      ciyi: '   vi. 进餐，吃饭   ',
      kaodian: '',
      liju1: "' They usually dine at six o'clock. '",
      chinese1: '他们通常6点钟吃饭。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '951',
      word: 'dinosaur ',
      ciyi: '  n. 恐龙；过时、落伍的人或事物  ',
      kaodian: '',
      liju1: ' From there you can look straight down to the dinosaur fossils displayed on the floor below.    ',
      chinese1: '从那儿往向下看，你可以看到陈列在地面上的恐龙化石。',
      liju2: 'He really can’t bear the lengthy speeches by some of the party’s dinosaurs. ',
      chinese2: '党内一些老政治家冗长的发言让他受不了。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '952',
      word: 'dioxide ',
      ciyi: '  n. 二氧化物   ',
      kaodian: '',
      liju1: 'Studying the light in each image could also reveal physical   characteristics, such as the presence of water or carbon dioxide.     ',
      chinese1: '研究每个行星图像中的光线同样可以揭示物理特性，如是否存在水或二氧化碳。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '953',
      word: 'dip  ',
      ciyi: '   vt. 浸，蘸n. 洗澡，浸，蘸  ',
      kaodian: '',
      liju1: '  Jim dipped his feet in the hot water to relax himself.   ',
      chinese1: '吉姆把脚浸到热水里，让他放松一下。',
      liju2: 'Like the Chicago Italian beef, the L.A. French Dip is made with thinly sliced roast beef served on a baguette.  ',
      chinese2: '与芝加哥意式牛肉三明治一样，法式蘸汁三明治用烤牛薄片夹在法国棍子面包里做成。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '954',
      word: 'diploma ',
      ciyi: ' n. 毕业证书，文凭   ',
      kaodian: '',
      liju1: '  Mary took a diploma from the University of London.   ',
      chinese1: '玛丽取得了伦敦大学的文凭。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '955',
      word: 'diplomatic  ',
      ciyi: '   a. 外交的；外交上的；有策略的  ',
      kaodian: '',
      liju1: '  He will go far in the diplomatic service.    ',
      chinese1: '他在外交部门会大有前途。',
      liju2: 'The politician realized he had to be more diplomatic. ',
      chinese2: '这位政治家意识到自己必须更有策略才行。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '956',
      word: 'directory ',
      ciyi: '  n. 电话簿；姓名地址录；目录   ',
      kaodian: '',
      liju1: '  This option lets you search your current directory for files by date, contents, and document summary.   ',
      chinese1: '这一选项让你按日期、内容和文件摘要在当前目录中查找文件。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '957',
      word: 'disable ',
      ciyi: '  vt. 使失去能力；使残废   ',
      kaodian: '',
      liju1: ' She was disabled by blindness.   ',
      chinese1: '她因失明而丧失视力。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '958',
      word: ' disappear',
      ciyi: '   vi. 消失；不见   ',
      kaodian: '',
      liju1: '  She turned down a side street and then disappeared.   ',
      chinese1: '她拐入一条小街然后就消失了。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '959',
      word: ' disaster',
      ciyi: '  n. 灾难，灾害  ',
      kaodian: '',
      liju1: '  The government brought itself to the brink of fiscal disaster.   ',
      chinese1: '该政府把自己带到了财政灾难的边缘。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '960',
      word: ' disastrous ',
      ciyi: '  a. 灾难性的；损失惨重的  ',
      kaodian: '',
      liju1: '   Yet as I said, there’s a push for a repeat of this disastrous performance.   ',
      chinese1: '然而，正如我前面所说的那样，有人推动要重演灾难性的这一幕。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '961',
      word: 'disc/disk  ',
      ciyi: '   n.磁盘，圆盘，盘状物；唱片  ',
      kaodian: '',
      liju1: '  The disk controller was chomping all day yesterday.    ',
      chinese1: '磁盘驱动器昨天坏了一整天。',
      liju2: ' The food processor has thin, medium, and thick slicing discs.',
      chinese2: '这个食品加工机有薄、中、厚的切片盘。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '962',
      word: ' discard ',
      ciyi: '   vt. 抛弃；丢弃  ',
      kaodian: '',
      liju1: '  Because of schedule pressure or because the results are encouraging, we do not discard that code.     ',
      chinese1: '由于时间的压力或者是结果的奖励，我们并没有抛弃这个代码。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '963',
      word: ' discern ',
      ciyi: '   vt. 识别；辨别；认出；发现  ',
      kaodian: '',
      liju1: '   She is incapable of discerning right from wrong.   ',
      chinese1: '她不能分辨是非。',
      liju2: ' In the writer’s work I would discern what his heart and soul were like.',
      chinese2: '从那位作家的作品中，我能了解到他的心灵。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '964',
      word: ' discharge ',
      ciyi: ' vt. 卸货；解雇；放出；遣散vi. 排出；发射；放电   ',
      kaodian: '',
      liju1: '   The dockers discharged a ship.   ',
      chinese1: '码头工人卸下了船上的货物。',
      liju2: 'The Air Force discharged some of the pilots after the war. ',
      chinese2: '战后，空军遣散了部分飞行员。 ',
      liju3: ' The weakened battery was no longer discharging. ',
      chinese3: '废蓄电池不再放电。'
}
    ,
    {
      id: '965',
      word: ' discipline ',
      ciyi: '  n. 学科；纪律，规定；训练   ',
      kaodian: '',
      liju1: "'We're looking for people from a wide range of disciplines.'",
      chinese1: '我们正在寻找各类学科的人才。',
      liju2: 'Everyone should keep discipline and you are no exception.   ',
      chinese2: '每个人都应该遵守纪律，你也毫无例外。 ',
      liju3: 'The discipline of studying music can help children develop good work habits and improve self-esteem.  ',
      chinese3: '学习音乐的规范训练能帮助孩子们养成良好的做事习惯和增强自尊心。'
}
    ,
    {
      id: '966',
      word: ' disclose ',
      ciyi: '  vt. 公开；揭露；泄露   ',
      kaodian: '',
      liju1: '  She fully disclosed the truth.    ',
      chinese1: '她充分揭露了事实真相。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '967',
      word: ' discount  ',
      ciyi: '   n. 折扣 vt. 打折扣  ',
      kaodian: '',
      liju1: '  All full-time staff get a 20 percent discount.    ',
      chinese1: '所有全职员工都可以享受8折优惠。',
      liju2: 'All bills that are paid promptly will be discounted at three percent. ',
      chinese2: '对所有即付的账单都将打去3%的折扣。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '968',
      word: 'discourage  ',
      ciyi: ' vt. 阻止；使泄气；使失去信心    ',
      kaodian: '',
      liju1: '  She was discouraged in her marriage.   ',
      chinese1: '她对自己的婚姻感到泄气。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '969',
      word: ' discourse ',
      ciyi: '   n. 论文；谈话；演讲vi. 演说；谈话   ',
      kaodian: '',
      liju1: '  I felt at home in this sort of discourse.    ',
      chinese1: '我对这类演讲得心应手。',
      liju2: '  They discoursed at the gate for a while.',
      chinese2: '他们在大门口交谈了一会儿。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '970',
      word: ' discreet ',
      ciyi: '  a. 谨慎的；慎重的   ',
      kaodian: '',
      liju1: ' Their views are more discreet but they are the ones that carry the day.     ',
      chinese1: '他们的意见更为谨慎，但他们是有决定影响的一些人。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '971',
      word: ' discrepancy ',
      ciyi: '  n. 不符；矛盾；相差  ',
      kaodian: '',
      liju1: ' Some children have an unexplained discrepancy with her parents.    ',
      chinese1: '有些孩子和父母之间存在一种莫名的矛盾。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '972',
      word: ' discriminate ',
      ciyi: '  vt. 歧视，有差别的对待；区别；辨别  ',
      kaodian: '',
      liju1: '   They believe the law discriminates against women.   ',
      chinese1: '他们认为这项法律歧视妇女。 ',
      liju2: 'I can discriminate right from wrong.  ',
      chinese2: '我能辨别是非。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '973',
      word: ' disease ',
      ciyi: ' n. 疾病；弊病   ',
      kaodian: '',
      liju1: '   The disease blighted oaks and elms.    ',
      chinese1: '疾病使栎树和榆树枯萎。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '974',
      word: ' disgrace ',
      ciyi: '  n. 耻辱；失宠vt.使失宠；玷污；使蒙羞  ',
      kaodian: '',
      liju1: '  Colleges are third-rate and should be a national disgrace.     ',
      chinese1: '大学是三流的，这应该成为这个国家的耻辱。',
      liju2: 'Being in disgrace, I was not favoured with a description of the interesting objects she saw.  ',
      chinese2: '我已经失宠，没法听她把她所看见的有趣的东西描述一番。 ',
      liju3: ' The actress’s appearing disgracedthe film star. ',
      chinese3: '女演员的出现使那位电影明星失宠了。',
      liju4: ' He disgraced himself by passing out at the party. ',
      chinese4: '他因在宴会上醉倒而使自己蒙羞。'
}
    ,
    {
      id: '975',
      word: ' disguise ',
      ciyi: '  vt. 掩饰；假装；伪装n. 伪装；掩饰  ',
      kaodian: '',
      liju1: '  The enemy soldier disguised as civilian.    ',
      chinese1: '一名敌兵伪装成了平民。',
      liju2: 'She tried to disguise her real feelings.  ',
      chinese2: '她试图掩饰自己的真实情感。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '976',
      word: ' disgust ',
      ciyi: ' n. 厌恶，恶心vt. 使厌恶；使作呕  ',
      kaodian: '',
      liju1: ' The boss manifested his disgust with a scowl.     ',
      chinese1: '老板皱皱眉表露出厌恶。',
      liju2: ' He disgusted many with his boorish behaviour. ',
      chinese2: '他以其粗鲁的行为使许多人感到厌恶。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '977',
      word: ' dismay ',
      ciyi: '  n.惊恐，绝望；失望；惊慌vt.使惊愕；使惊慌；使绝望；使失望  ',
      kaodian: '',
      liju1: '   Local politicians have reacted with dismay and indignation.   ',
      chinese1: '当地政客们做出了惊恐和愤慨的反应。',
      liju2: 'I couldn’t hide my dismay when my idol didn’t appear. ',
      chinese2: '当我的偶像没有出现时，我无法掩饰自己的失望。 ',
      liju3: 'She was dumbly dismayed at the news.  ',
      chinese3: '听见那消息她惊愕得发呆了。',
      liju4: ' He was dismayed to learn of their disloyalty. ',
      chinese4: '他得知他们对他的不忠，感到很失望。'
}
    ,
    {
      id: '978',
      word: ' dismiss ',
      ciyi: '  vt. 解雇；开除；解散；不予考虑  ',
      kaodian: '',
      liju1: '  The boss dismissed the employee.    ',
      chinese1: '老板解雇了那个雇员。',
      liju2: 'She just laughed and dismissed the question as unimportant. ',
      chinese2: '她只是一笑置之，认为问题无足轻重而不予考虑。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '979',
      word: ' disorder  ',
      ciyi: '  n. 混乱；骚乱；失调；疾病  ',
      kaodian: '',
      liju1: ' The emergency room was in disorder.     ',
      chinese1: '急救室一片混乱。',
      liju2: 'The doctor said there was no sign of any disorder of your body. ',
      chinese2: '医生说你的身体没有任何病症。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '980',
      word: ' disperse ',
      ciyi: ' vt. 分散；驱散；解散  ',
      kaodian: '',
      liju1: '  The riot police dispersed the crowd.   ',
      chinese1: '防暴警察驱散了人群。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '981',
      word: 'displace ',
      ciyi: '  vt. 取代；置换；转移  ',
      kaodian: '',
      liju1: "' These factories have displaced tourism as the country's largest source of foreign exchange.   '",
      chinese1: '这些工厂已经取代了旅游业而成为该国最大的外汇来源。',
      liju2: "'Please don't displace my dictionaries. '",
      chinese2: '请别动我的词典。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '982',
      word: 'displacement ',
      ciyi: '  n. 取代，位移；移置  ',
      kaodian: '',
      liju1: '   Software programmers are taking the displacement of personal agency to a new level.   ',
      chinese1: '软件程序员对个人决策的取代已经达到了一个新高度。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '983',
      word: 'display ',
      ciyi: '  n/vt. 显示；陈列；展示  ',
      kaodian: '',
      liju1: "' Let's display the figures and see what we have.'",
      chinese1: '让我们显示一下数字，看看我们有什么。',
      liju2: 'Department stores display their goods in the windows.',
      chinese2: '百货商店把商品陈列在橱窗里。 ',
      liju3: ' The vendors displayed their fruit. ',
      chinese3: '摊贩展示他们的水果。'
}
    ,
    {
      id: '984',
      word: 'disposal  ',
      ciyi: '  n. 处理；支配；布置；安排  ',
      kaodian: '',
      liju1: '  Networking is one of the most powerful tools you have at your disposal.    ',
      chinese1: '人际网是能任由你自己处理的最有力的工具之一。',
      liju2: 'The disposal of plants in your garden was quite pleasing. ',
      chinese2: ' 你花园里的植物布置得十分赏心悦目。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '985',
      word: 'dispose ',
      ciyi: '  v. 处理；处置；布置；安排  ',
      kaodian: '',
      liju1: '  Dispose of these old newspapers.    ',
      chinese1: '把这些旧报纸处理掉。',
      liju2: ' The manager always disposed affairs in his favor.',
      chinese2: ' 经理总是根据自己的喜好来安排事物。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '986',
      word: ' disposition ',
      ciyi: '  n. 处理；气质，天性；排列，部署  ',
      kaodian: '',
      liju1: '  The defendant was not satisfied with the final disposition of the case.   ',
      chinese1: '被告对案件的最终处理感到不满意。',
      liju2: 'The twin brothers are alike in appearance but differ greatly in disposition.  ',
      chinese2: '这对孪生兄弟外貌很相像，但性格却相差很大。 ',
      liju3: 'The disposition of troops is very important in the war.  ',
      chinese3: '在战争中，军队的部署非常重要。'
}
    ,
    {
      id: '987',
      word: ' dispute',
      ciyi: '   vi. 争论，争执n. 辩论；争论 ',
      kaodian: '',
      liju1: '   We disputed with each other on various issues.  ',
      chinese1: '我们为各种问题互相争论。',
      liju2: "'You're the expert on the applications and how they should be integrated; no one will dispute that.  '",
      chinese2: '您是应用程序专家，应该如何集成它们，没有人与您争论该主题。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '988',
      word: ' disrupt',
      ciyi: '  vt.使瓦解；使分裂；扰乱，使中断 ',
      kaodian: '',
      liju1: '   The war disrupted the connections of many people.  ',
      chinese1: '战争使许多人的联系被割断了。',
      liju2: ' The tornado disrupted broadcasting along the entire coast.',
      chinese2: '龙卷风使整个沿海的广播都中断了。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '989',
      word: 'dissipate  ',
      ciyi: ' vt. 浪费，挥霍；使…消散；使驱散  ',
      kaodian: '',
      liju1: "'  Don't dissipate your efforts.    '",
      chinese1: '不要浪费你的精力。',
      liju2: ' The sun dissipated the mist. ',
      chinese2: ' 阳光驱散了薄雾。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '990',
      word: 'dissolve ',
      ciyi: ' vt. 使溶解；使分解vi.解散；消失  ',
      kaodian: '',
      liju1: 'Dissolve the chocolate in the top of a double boiler.  ',
      chinese1: '在双层蒸锅的上层锅内融化巧克力。',
      liju2: "'The military government dissolved the country's parliament. '",
      chinese2: ' 军政府解散了该国的议会。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '991',
      word: 'distill  ',
      ciyi: '  vt. 提取，蒸馏；提炼；吸取 ',
      kaodian: '',
      liju1: '   “When you distill your own liquor, sometimes you end up with a bad batch,” whispered Tom.   ',
      chinese1: ' “你自己蒸馏造酒，有时会最终弄得一塌糊涂。”汤姆小声说。',
      liju2: 'My mother gave me his useful advice distilled from his lifetime experience',
      chinese2: '母亲将其从毕业经历中所得出的有益经验都传授给了我。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '992',
      word: ' distinct ',
      ciyi: '  a. 清楚的；明显的；截然不同的  ',
      kaodian: '',
      liju1: ' Now that Tony was no longer present, there was a distinct change in her attitude.    ',
      chinese1: '由于托尼不在现场，她的态度就发生了明显的变化。 ',
      liju2: 'The twin sisters are distinct from each in characters.',
      chinese2: '那对双胞胎姐妹的性格截然不同。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '993',
      word: ' distinction ',
      ciyi: ' n. 区别；差别  ',
      kaodian: '',
      liju1: '  There are obvious distinctions between the two wine-making areas.    ',
      chinese1: '这两个酿酒区之间有明显的不同。 ',
      liju2: '',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '994',
      word: ' distinguish ',
      ciyi: '  vt. 区别；辨别；使杰出，使著名  ',
      kaodian: '',
      liju1: '  There is something about music that distinguishes it from all other art forms.   ',
      chinese1: '音乐中一些因素使之有别于其他艺术形式。 ',
      liju2: 'Over the next few years he distinguished himself as a leading constitutional scholar.',
      chinese2: '在随后的几年中，他作为宪法学的权威学者而享有盛誉。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '995',
      word: 'distort  ',
      ciyi: ' vt. 扭曲；歪曲；曲解  ',
      kaodian: '',
      liju1: '  The media distorts reality; it categorizes people as all good or all bad.    ',
      chinese1: '媒体歪曲事实，将人分为十足的好人和坏蛋。 ',
      liju2: '',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '996',
      word: ' distract ',
      ciyi: '   vt. 分散；打扰；迷惑；扰乱 ',
      kaodian: '',
      liju1: '   The music distracted her from her work.   ',
      chinese1: '音乐使她无法专心工作。 ',
      liju2: ' She was distracted at some occurrence.',
      chinese2: ' 她被一件发生的事弄得心烦意乱。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '997',
      word: ' distress ',
      ciyi: '  n. 危难，不幸；苦恼vt.使悲痛；使苦恼  ',
      kaodian: '',
      liju1: '  The auto industry and retailing remain in distress.   ',
      chinese1: '汽车业和零售业继续处于困境。 ',
      liju2: 'The middle-aged man was in great distress over his unemployment.',
      chinese2: '那位中年男子因为失业而苦恼万分。 ',
      liju3: "' The news of my mother's death distressed me greatly. '",
      chinese3: '母亲逝世的噩耗令我极为悲痛。'
}
    ,
    {
      id: '998',
      word: ' distribute ',
      ciyi: '  vt. 分配；分布；散布  ',
      kaodian: '',
      liju1: '  The relief agency will distribute the food among several countries.    ',
      chinese1: '救援机构将给几个国家发放食物。 ',
      liju2: 'Distribute the topping evenly over the fruit.',
      chinese2: '将浇头均匀地浇在水果上。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '999',
      word: ' district ',
      ciyi: '  n. 区域；地方；行政区  ',
      kaodian: '',
      liju1: '  The new railway will benefit the district.   ',
      chinese1: ' 新铁路将使这地区得益。',
      liju2: '',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1000',
      word: ' disturb ',
      ciyi: '  vt. 打扰；妨碍；使不安；使恼怒  ',
      kaodian: '',
      liju1: '  Please do not disturb us when we are working.      ',
      chinese1: '工作的时候请不要打扰我们。 ',
      liju2: 'She was disturbed by his strange behaviour.',
      chinese2: '她被他的奇怪举止弄得心神不安。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1001',
      word: ' disturbance ',
      ciyi: ' n. 干扰；骚乱；动乱  ',
      kaodian: '',
      liju1: '  The disturbance was repressed at last by the riot police.    ',
      chinese1: '骚乱最终被防暴警察镇压下来。 ',
      liju2: ' Successful breeding requires quiet, peaceful conditions with as little disturbance as possible.',
      chinese2: '成功繁殖需要安宁的环境，干扰越少越好。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1002',
      word: ' ditch ',
      ciyi: '  n. 沟渠；壕沟 ',
      kaodian: '',
      liju1: '  The truck ran off the road and flipped over in the ditch.    ',
      chinese1: '这辆卡车开出公路翻倒在沟里。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1003',
      word: ' dive ',
      ciyi: ' vi. 潜水；跳水；俯冲n. 潜水；跳水；俯冲 ',
      kaodian: '',
      liju1: '   The submarine dove quickly as the destroyer searched for it.   ',
      chinese1: '当驱逐舰搜索潜艇时，潜艇迅速下潜。 ',
      liju2: 'The aircraft dived steeply. ',
      chinese2: '那架飞机俯冲下来。 ',
      liju3: '  All the frogs line up on the edge of a rock to dive.  ',
      chinese3: '所有的青蛙在一块石头边上排起了队来潜水。'
}
    ,
    {
      id: '1004',
      word: ' diverse ',
      ciyi: ' a. 不同的；多种多样的  ',
      kaodian: '',
      liju1: ' The building houses a wide and diverse variety of antiques.    ',
      chinese1: '这栋楼里摆放着大量各式各样的古董。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1005',
      word: ' diversion ',
      ciyi: ' n. 转移；转向  ',
      kaodian: '',
      liju1: '   A short diversion from the path led us to a quite stream.   ',
      chinese1: ' 从小路转过一点，就来到了一条安静的小溪旁。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1006',
      word: ' divert  ',
      ciyi: '  vt. 使…转向；转移；使娱乐，使消遣 ',
      kaodian: '',
      liju1: ' We diverted the river to supply water to our city.    ',
      chinese1: ' 我们改变河道流向以向我们市供水。',
      liju2: ' My attention was diverted for a moment by the accident. ',
      chinese2: '我的注意力在事故发生的一瞬间被转移了。 ',
      liju3: ' The children were diverted by the clown.  ',
      chinese3: '孩子们被小丑逗乐了。'
}
    ,
    {
      id: '1007',
      word: 'dividend  ',
      ciyi: 'n. 红利，股息；回报，效益；被除数  ',
      kaodian: '',
      liju1: '   The first quarter dividend has been increased by nearly 4 percent.   ',
      chinese1: '第一季度的股息增加了近4％。 ',
      liju2: ' Steps taken now to maximize your health will pay dividends later on.',
      chinese2: ' 现在采取措施充分重视你的健康将来就会有回报。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1008',
      word: ' divine  ',
      ciyi: '  a. 神圣的；非凡的；神授的，天赐的；极好的n. 牧师 ',
      kaodian: '',
      liju1: '   To forgive may be divine, but no one ever said it was easy.    ',
      chinese1: '宽恕是神圣的，但是没有人说很容易做到宽恕别人。 ',
      liju2: 'Jackson is a man of divine wisdom and personal appeal. ',
      chinese2: '杰克逊是个有着非凡智慧和个人魅力的人。 ',
      liju3: ' He suggested that the civil war had been a divine punishment. ',
      chinese3: '他暗示此次内战是神的惩罚。',
      liju4: '  Her carrot cake is divine. ',
      chinese4: '她的胡萝卜饼好吃极了。',
      liju4: '  Her carrot cake is divine. ',
      chinese4: '她的胡萝卜饼好吃极了。',
      liju5: ' The divine sought God’s guidance through meditation.  ',
      chinese5: '牧师通过冥想来寻求神的指引。'
}
    ,
    {
      id: '1009',
      word: ' division ',
      ciyi: '  n.部门，赛区，科室；分割，分；除法 ',
      kaodian: '',
      liju1: '  The script also inserts the data into lab and division tables.    ',
      chinese1: ' 脚本还将数据插入到了实验室和部门表中。',
      liju2: ' The division between beauty and ugliness seems unreasonable.',
      chinese2: '这种美与丑的划分似乎不太合理。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1010',
      word: ' divorce  ',
      ciyi: '  vt/ n. 离婚；分离 ',
      kaodian: '',
      liju1: '   Life and art cannot be divorced.   ',
      chinese1: '生活与艺术不能分离。 ',
      liju2: ' Numerous marriages now end in divorce.',
      chinese2: '现在许多婚姻都以离婚而告终。 ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1011',
      word: ' dizzy ',
      ciyi: ' a. 晕眩的；头晕目眩的；使人头晕的；极高的  ',
      kaodian: '',
      liju1: '  I felt dizzy when I looked down from the top of the television tower.     ',
      chinese1: '当我从电视塔顶往下看时，我感到头晕目眩。 ',
      liju2: 'I drove at speeds that dizzied me. ',
      chinese2: ' 我高速驾车致使我头晕目眩。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1012',
      word: ' dock ',
      ciyi: ' n. 码头；船坞  ',
      kaodian: '',
      liju1: '   The dockers disburdened the merchandise at the dock.    ',
      chinese1: '码头工人把货物卸在码头上。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1013',
      word: 'doctrine  ',
      ciyi: '  n. 主义；学说；教义；信条 ',
      kaodian: '',
      liju1: '   What is his doctrine of Christ?    ',
      chinese1: ' 他关于基督的教义是什么？',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1014',
      word: ' document ',
      ciyi: '  n. 文件，公文；文献；证件 ',
      kaodian: '',
      liju1: '    This document embodies the concern of the government for the deformity.   ',
      chinese1: '这个文件体现了政府对残疾人的关怀。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1015',
      word: ' documentary ',
      ciyi: '  a.文献的n. 纪录片 ',
      kaodian: '',
      liju1: '  We shouldn’t ignore the importance of documentary veracity.    ',
      chinese1: ' 我们不该忽视文献准确的重要性。',
      liju2: ' This great battle was vividly recorded in the documentary film. ',
      chinese2: ' 这部记录片生动地再现了这场伟大的战役',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1016',
      word: ' domain ',
      ciyi: '  n. 领域；范围 ',
      kaodian: '',
      liju1: '   How do you ask the question in each domain?    ',
      chinese1: '您如何在每个领域询问问题？ ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1017',
      word: ' dome ',
      ciyi: '  n. 圆屋顶；拱顶 ',
      kaodian: '',
      liju1: "'  The dome of St. Paul's Cathedral is well - known in London.     '",
      chinese1: '圣保罗教堂的圆顶在伦敦是人人知晓的。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1018',
      word: ' domestic ',
      ciyi: '  a. 国内的；家庭的；驯养的 ',
      kaodian: '',
      liju1: '    Low prices crimped domestic output and foreign imports.    ',
      chinese1: ' 低物价阻碍了国内出口和国外进口。',
      liju2: ' The film turns about a domestic tragedy.  ',
      chinese2: '这部影片主要讲述一个家庭悲剧。 ',
      liju3: ' This cat is domestic.  ',
      chinese3: '这只猫是驯养的。'
}
    ,
    {
      id: '1019',
      word: ' dominant ',
      ciyi: ' a. 显性的；占优势的；支配的，统治的  ',
      kaodian: '',
      liju1: '  Numerous persons with only a few Negroid traits annually pass over and are absorbed into the dominant Caucasoid population.      ',
      chinese1: '许许多多只有少许黑人特征的人每年都被当作白人而被吸收为占优势的高加索种群人口。 ',
      liju2: ' The dominant influence in Cindy’s life was her father.',
      chinese2: '在辛迪的一生中对他影响最大的是父亲。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1020',
      word: ' dominate ',
      ciyi: '  vt. 控制；支配；占优势 ',
      kaodian: '',
      liju1: '  The superpower attempted to dominate over other countries.   ',
      chinese1: '超级大国企图支配其他国家。 ',
      liju2: ' Males are often more dominant than females in the company.',
      chinese2: '在公司里男性通常比女性更占优势。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1021',
      word: ' donate ',
      ciyi: '  vt. 捐赠；捐献 ',
      kaodian: '',
      liju1: '   We donate to the school endowment fund every year.    ',
      chinese1: '我们每年向学校的捐赠基金捐款。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1022',
      word: ' doom ',
      ciyi: ' n. 厄运；命运 vt. 注定；命定  ',
      kaodian: '',
      liju1: '   I started with the doom and gloom so you will stick to your plan.    ',
      chinese1: '我开始这样的厄运和焦虑，所以你要坚持你的计划。 ',
      liju2: 'They are doomed to make the same mistakes in the future. ',
      chinese2: '他们将来注定要犯同样的错误。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1023',
      word: 'doorway  ',
      ciyi: '  n. 门口 ',
      kaodian: '',
      liju1: '   Hannah looked up to see David and another man standing in the doorway.   ',
      chinese1: '汉纳抬起头，看到戴维和另一个男人站在门口。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1024',
      word: ' dormitory  ',
      ciyi: '  n. 宿舍，学生宿舍 ',
      kaodian: '',
      liju1: '  She lived in a college dormitory.    ',
      chinese1: '她住在一幢大学宿舍楼里。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1025',
      word: ' dose ',
      ciyi: '  n. 剂量；一剂，一服vt.给…服药 ',
      kaodian: '',
      liju1: '    One dose of penicillin can wipe out the infection.  ',
      chinese1: '一剂青霉素即可消除感染。 ',
      liju2: 'Mother dosed the child up with cough syrup. ',
      chinese2: '母亲让孩子按量服用止咳糖浆。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1026',
      word: ' dot ',
      ciyi: '  n. 点，圆点vt.在…上打点 ',
      kaodian: '',
      liju1: ' Lofty derricks dot the landscape in an oil field.     ',
      chinese1: '高耸的井架点缀着油田的景色。 ',
      liju2: 'The sheet is sweat-stained and dotted by stains of rust. ',
      chinese2: '床单被汗渍给弄脏了，又被铁锈弄得斑斑点点的。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1027',
      word: ' downward ',
      ciyi: ' a. 向下的，下降的ad. 向下；往下  ',
      kaodian: '',
      liju1: ' The downward trend in home ownership is likely to continue.    ',
      chinese1: '住房拥有率的下降趋势有可能还要延续。 ',
      liju2: 'Benedict pointed downward again with his stick. ',
      chinese2: '贝内迪克特又用他的拐杖向下指了指。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1028',
      word: ' doze  ',
      ciyi: ' vi. 打瞌睡；假寐n. 瞌睡；假寐 ',
      kaodian: '',
      liju1: '   For a while she dozed fitfully.   ',
      chinese1: ' 她断断续续地小睡了片刻。',
      liju2: '  Some students often doze off in class. ',
      chinese2: '有些学生常在课堂上打瞌睡。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1029',
      word: 'draft   ',
      ciyi: '  n. 草案；草稿vt.起草；制定；草拟 ',
      kaodian: '',
      liju1: ' I faxed a first draft of this article to him.    ',
      chinese1: '我把这篇文章的初稿传真给他。 ',
      liju2: ' He drafted a letter to the editors. ',
      chinese2: '他草拟了一封给编辑的信。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1030',
      word: ' drag ',
      ciyi: ' vt. 拖；拖拽；拖拉  ',
      kaodian: '',
      liju1: '  The vigilantes dragged the men out of the vehicles.    ',
      chinese1: '治安联防员将这些人从车里拽了出来。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1031',
      word: ' dragon ',
      ciyi: '  n. 龙 ',
      kaodian: '',
      liju1: '  She worked a dragon on the new linen cloth.    ',
      chinese1: '她在新的亚麻布上绣了条龙。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1032',
      word: 'drain ',
      ciyi: ' v. 排去；流干n.下水道，排水沟；消耗，流出 ',
      kaodian: '',
      liju1: '   Miners built the tunnel to drain water out of the mines.  ',
      chinese1: '矿工们开掘了隧道以将水排出矿井。 ',
      liju2: 'Tony built his own house and laid his own drains. ',
      chinese2: '托尼新建了自己的房子,铺设了自己的排水管道。 ',
      liju3: ' It will drain you and rob you of your happiness.   ',
      chinese3: '它将耗尽你的心气，夺走你的快乐。'
}
    ,
    {
      id: '1032',
      word: ' drama',
      ciyi: ' n. 戏剧，剧本；戏剧艺术；戏剧性事件 ',
      kaodian: '',
      liju1: '  He knew nothing of Greek drama.   ',
      chinese1: '他对希腊戏剧一无所知。 ',
      liju2: ' There was none of the drama and relief of a hostage release.',
      chinese2: '丝毫没有人质释放的戏剧性场面和放松。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1033',
      word: ' dramatic',
      ciyi: '  a. 戏剧的；戏剧性的；巨大的；突然的 ',
      kaodian: '',
      liju1: '  If we place any stock at all in those labels, something dramatic has happened.    ',
      chinese1: '如果我们在所有这些标签中置入任何一条时间轴，戏剧性的一幕便会发生。 ',
      liju2: 'The earth’s climate may go through dramatic changes in the future. ',
      chinese2: '将来，全球气候可能会发生巨大的变化。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1034',
      word: ' drastic',
      ciyi: ' a. 激烈的；严厉的；极端的 ',
      kaodian: '',
      liju1: '   Drastic measures are needed to clean up the profession.  ',
      chinese1: '需要采取极端的措施来整顿这个行业。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1035',
      word: 'drawback ',
      ciyi: '  n. 缺点，欠缺；不利条件 ',
      kaodian: '',
      liju1: '   In spite of this drawback, it is used extensively due to its maturity, ubiquity, and performance.   ',
      chinese1: ' 尽管有这个缺点，但是由于其成熟性、普遍适用性和性能使它被广泛使用。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1036',
      word: 'drawer ',
      ciyi: '  n. 抽屉；画家 ',
      kaodian: '',
      liju1: '   I chanced on this old photograph in his drawer.   ',
      chinese1: '我在他的抽屉里偶然发现了这张旧照片。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1037',
      word: 'dread  ',
      ciyi: ' n. 恐惧；担心vt.惧怕；担心 ',
      kaodian: '',
      liju1: '   She thought with dread of the cold winters to come.  ',
      chinese1: ' 想到寒冬即将到来，她就感到恐惧。',
      liju2: 'I dreaded coming  back, to be honest. ',
      chinese2: '老实说，我很害怕回来。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1038',
      word: ' drift ',
      ciyi: '  n. 漂流，漂移vi. 漂流，漂移 ',
      kaodian: '',
      liju1: '  It is proposed that the drift of the continents was vectored by westward forces.    ',
      chinese1: ' 大陆的漂移被认为是由向西的力造成的。',
      liju2: 'The boat drifted dangerously near the falls. ',
      chinese2: '小船危险地漂近瀑布。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1039',
      word: 'drip ',
      ciyi: '  vi. 滴下；漏水n. 水滴，点滴，滴水声 ',
      kaodian: '',
      liju1: ' The rain was dripping off the roof.   ',
      chinese1: '雨水从屋檐往下滴。 ',
      liju2: 'Drips of water rolled down the trousers of his uniform. ',
      chinese2: '水珠从他的制服裤子上滚下来。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1040',
      word: ' drought',
      ciyi: '  n. 干旱；旱灾 ',
      kaodian: '',
      liju1: '  The lakes and wells all dried up during the drought.    ',
      chinese1: '在旱灾期间，所有的湖泊和水井都干涸了。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1041',
      word: 'drum ',
      ciyi: '  n. 鼓；鼓声；圆桶  ',
      kaodian: '',
      liju1: '  At dusk, a huge drum begins to beat.     ',
      chinese1: '在黄昏，一只巨大的鼓开始敲击。 ',
      liju2: ' One of the drums had a leak, and oil flowed everywhere.',
      chinese2: ' 有个圆桶漏了，油流得到处都是。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1042',
      word: 'dubious ',
      ciyi: '  a.有问题的；半信半疑的；可疑的；不确定的  ',
      kaodian: '',
      liju1: '  The manager decided not to hire the dubious applicant.    ',
      chinese1: '经理坚定不雇用那名有问题的求职者。 ',
      liju2: ' The testimony given by him is dubious.  ',
      chinese2: '他所作的证据是可疑的。 ',
      liju3: ' The results of the policy will remain dubious for some time. ',
      chinese3: '这项政策的成效在一段时期内难以确定。'
}
    ,
    {
      id: '1043',
      word: ' dull ',
      ciyi: ' a. 单调的；迟钝的；不锋利的vt. 使迟钝   ',
      kaodian: '',
      liju1: '   I felt she found me boring and dull.   ',
      chinese1: ' 我觉得她认为我令人厌烦而又乏味',
      liju1: '   Lily is not dull pupil, but she is not diligent.    ',
      chinese1: '莉莉并不是个笨孩子，他只是不用功罢了。',
      liju1: '  This knife is too dull to cut through the meat.  ',
      chinese1: '这把刀太钝了，根本切不下肉了。' ,
      liju1: '  The eyes and ears may be dulled by age. ',
      chinese1: '耳目可能会因老而变迟钝。'


}
    ,
    {
      id: '1044',
      word: 'dumb ',
      ciyi: '  a. 哑的，无声音的  ',
      kaodian: '',
      liju1: '   We were all struck dumb for a minute.   ',
      chinese1: ' 我们一时个个都哑口无言。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1045',
      word: ' dump',
      ciyi: ' vt. 倾倒；倾卸；扔弃n. 垃圾场；仓库  ',
      kaodian: '',
      liju1: '   German law forbids the dumping of hazardous waste on German soil.   ',
      chinese1: ' 德国法律禁止在德国国土上丢弃危险废弃物。',
      liju2: 'A trip to the dump on a bitterly cold Saturday morning provided me an incredible insight.   ',
      chinese2: ' 在一个寒冷刺骨的星期六早上去垃圾场，让我有了不可思议的领悟。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1046',
      word: 'duplicate ',
      ciyi: ' n. 副本；复制品a. 复制的；二重的；二倍的；成对的vt. 复制；使加倍  ',
      kaodian: '',
      liju1: '   Mary’s daughter is an exact duplicate of herself.   ',
      chinese1: '玛丽的女儿活脱脱就是他的翻版。 ',
      liju2: 'He let himself in with a duplicate key. ',
      chinese2: '他用一把另配的钥匙打开门进去了。 ',
      liju3: ' His task will be to duplicate his success overseas here at home. ',
      chinese3: '他的任务将是在国内复制他在海外的成功。'
}
    ,
    {
      id: '1047',
      word: 'durable ',
      ciyi: '  a. 耐用的，持久的n. 耐用品  ',
      kaodian: '',
      liju1: '   Fine bone china is eminently practical, since it is strong and durable.   ',
      chinese1: '精细骨瓷是非同一般地实用，因为它坚固耐用。 ',
      liju2: ' Airlines recommend hard-sided cases for durability. ',
      chinese2: '航空公司推荐使用硬边的提箱以求耐用。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1048',
      word: 'duration ',
      ciyi: '  n. 期间；持续，持续的时间  ',
      kaodian: '',
      liju1: '   He was given the task of protecting her for the duration of the trial.   ',
      chinese1: ' 他被委以在审判期间保护她的任务。',
      liju2: ' His wounds knocked him out of combat for the duration. ',
      chinese2: ' 在整个战斗中，他的伤一直令他无法参战。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1049',
      word: 'dusk ',
      ciyi: '  n. 黄昏，薄暮；昏暗  ',
      kaodian: '',
      liju1: '   We arrived home at dusk.   ',
      chinese1: ' 我们于黄昏时分到家了。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1050',
      word: 'dwarf  ',
      ciyi: '   n. 侏儒，矮子vt.使矮小a. 矮小的；发育不全面的 ',
      kaodian: '',
      liju1: '  He might have been called the invulnerable dwarf of the fray.     ',
      chinese1: ' 可以说，他是混战中的一个无懈可击的侏儒。',
      liju2: ' Our little boat is dwarfed by that big yacht.',
      chinese2: ' 我们的小船和那艘大游艇比起来显得很小。',
      liju3: ' The gardener had a rest under the dwarf trees of the garden. ',
      chinese3: '园丁在花园里的矮树下休息了一会。'
}
    ,
    {
      id: '1051',
      word: 'dwell ',
      ciyi: '   vi. 住；居留  ',
      kaodian: '',
      liju1: '  They dwell at Bath but work in the city.     ',
      chinese1: '他们住在巴斯，但在城里工作 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1052',
      word: ' dwelling',
      ciyi: '   n. 住宅；寓所  ',
      kaodian: '',
      liju1: '   Some 3,500 new dwellings are planned for the area.   ',
      chinese1: '大约三千五百套新住宅计划在这个地区新建。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1053',
      word: ' dye',
      ciyi: ' n. 染料；染色vt.染；把…染上颜色   ',
      kaodian: '',
      liju1: '   She dunked a piece of white cloth in the dye.    ',
      chinese1: '她把一块白布浸入染料中。 ',
      liju2: 'The women prepared, spun, and dyed the wool. ',
      chinese2: ' 妇女们将羊毛预备、纺线并染色。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1054',
      word: ' dynamic(al)',
      ciyi: '   a. 动力的；电动的；有生气的  ',
      kaodian: '',
      liju1: '   The dynamic loudspeaker is of high quality.   ',
      chinese1: '这个电喇叭的质量很好。 ',
      liju2: 'My boss is a man of dynamic personalities. ',
      chinese2: '我的老板是个精力充沛的人。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1055',
      word: 'dynasty ',
      ciyi: '   n. 王朝，朝代  ',
      kaodian: '',
      liju1: '    The Seljuk dynasty of Syria was founded in 1094.  ',
      chinese1: ' 叙利亚的塞尔柱王朝建立于1094年。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1056',
      word: 'eagle  ',
      ciyi: '  n. 鹰   ',
      kaodian: '',
      liju1: '  She lacks the skill to accomplish this, but recognizes that an eagle can help her.     ',
      chinese1: '她缺乏完成这项任务的能力，不过她认识到老鹰可以帮助她。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1057',
      word: ' earnest',
      ciyi: ' a. 认真的，热心的；诚挚的   ',
      kaodian: '',
      liju1: '    Catherine was a pious, earnest woman.  ',
      chinese1: '凯瑟琳是位虔诚、真挚的女子。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1058',
      word: 'earthquake ',
      ciyi: '   n. 地震  ',
      kaodian: '',
      liju1: '   The bridge broke down in last earthquake.    ',
      chinese1: '那座桥在上次地震中坍塌了。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1059',
      word: 'ease  ',
      ciyi: '   vt. 减轻，缓和；使安心n. 轻松，安逸，舒适；悠闲  ',
      kaodian: '',
      liju1: '  The tension between the two countries has eased off.    ',
      chinese1: '两国的紧张局势已有所缓和。 ',
      liju2: 'The thief eased his conscience by returning the stolen money. ',
      chinese2: '小偷归还了偷来的钱，良心才得到了安宁。 ',
      liju3: ' The student passed the examination with ease. ',
      chinese3: '那名学生轻松地通过了考试。',
      liju4: '  She lived a life of ease. ',
      chinese4: '她过着悠闲自在的生活。'
}
    ,
    {
      id: '1060',
      word: 'easter ',
      ciyi: '   n. 复活节  ',
      kaodian: '',
      liju1: '  But suddenly he remembered about Easter.    ',
      chinese1: '但是突然他记得了复活节。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1061',
      word: 'ebb ',
      ciyi: '  n. 退潮；落潮vi. 衰退；衰落；潮退   ',
      kaodian: '',
      liju1: '  The ebb and flow of the tide is constant.    ',
      chinese1: ' 这个潮汐的潮涨和潮落是永不停止的。',
      liju2: ' I waded farther out as the tide ebbed.',
      chinese2: ' 退潮时我涉水出去得更远。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1062',
      word: ' eccentric',
      ciyi: '  a. 古怪的，反常的n. 古怪的人   ',
      kaodian: '',
      liju1: '   The teachers are accustomed to the boy’s eccentric behaviour.  ',
      chinese1: '老师们对那个男孩的古怪行为已经习以为常。 ',
      liju2: ' He is an eccentric character who likes wearing a beret and dark glasses. ',
      chinese2: '他是个怪人，喜欢戴贝雷帽和墨镜。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1063',
      word: ' echo ',
      ciyi: '   vi. 随声附和；发出回声n. 回音；反响；共鸣  ',
      kaodian: '',
      liju1: ' Their views often echo each other.   ',
      chinese1: ' 他们的见解常常彼此附和。',
      liju2: ' He listened and heard nothing but the echoes of his own voice in the cave. ',
      chinese2: '他听了听，除了自己声音在山洞里的回响什么都没听见。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1064',
      word: 'eclipse ',
      ciyi: ' n. 日蚀，日食   ',
      kaodian: '',
      liju1: ' Not every eclipse of the Sun is a total eclipse.   ',
      chinese1: '不是每一种日食都是完整的日食。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1065',
      word: 'ecology ',
      ciyi: '  n. 生态学   ',
      kaodian: '',
      liju1: '  Future research, he says, should look at the behavior and ecology of these worms to understand what caused the new species to arise.    ',
      chinese1: ' 他说，未来的研究应该看看这些蠕虫的行为与生态学，以了解新物种的出现是由什么造成的。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1066',
      word: 'economic ',
      ciyi: '   a. 经济的，经济上的；经济学的  ',
      kaodian: '',
      liju1: '  His theory is linked closely with the success of our economic reform.    ',
      chinese1: ' 他的理论与我们的经济改革的成功紧密联系在一起。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1067',
      word: 'economical  ',
      ciyi: '  a. 经济的；节约的   ',
      kaodian: '',
      liju1: '  I want most economical packing.    ',
      chinese1: ' 我需要最经济的包装。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1068',
      word: 'economics  ',
      ciyi: '  n. 经济学；国家的经济状况   ',
      kaodian: '',
      liju1: '   His younger sister is studying economics.  ',
      chinese1: ' 他的妹妹在学经济学。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1069',
      word: 'economy ',
      ciyi: '   n.节约，节约措施；经济 ',
      kaodian: '',
      liju1: '   This is an outstanding example of strict economy.   ',
      chinese1: '这是厉行节约的一个出色范例。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1070',
      word: 'edible ',
      ciyi: '   a. 可食用的  ',
      kaodian: '',
      liju1: ' When edible fruits ripen, they change their colours or scent which appeal to humans, to ‘invite’ us to take them.    ',
      chinese1: '当可食用的水果成熟时，它们改变自己的颜色和香味，以吸引人类，邀请我们食用它们。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1071',
      word: 'edit ',
      ciyi: '  vt. 编辑；校订   ',
      kaodian: '',
      liju1: "'   The majority of contracts give the publisher the right to edit a book after it's done.  '",
      chinese1: '大多数合同都会赋予出版商在书稿完成后进行编辑的权利。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1072',
      word: 'edition ',
      ciyi: '   n. 版本；版次  ',
      kaodian: '',
      liju1: "'They issued a new edition of Lu Xun's works. '",
      chinese1: '他们发行了鲁迅著作的一个新版本。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1073',
      word: ' editor ',
      ciyi: '  n. 编者，编辑   ',
      kaodian: '',
      liju1: '  Mike later became the sports editor for The Beacon.  ',
      chinese1: '迈克后来成为《烽火》的体育栏目编辑。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1074',
      word: 'editorial  ',
      ciyi: ' n. 社论   ',
      kaodian: '',
      liju1: '  The editorial needs to be rewritten.   ',
      chinese1: ' 这篇社论需要重写。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1075',
      word: ' educate',
      ciyi: ' vt. 教育；培养；训练   ',
      kaodian: '',
      liju1: '   He was educated at Yale and Stanford. ',
      chinese1: ' 他是在耶鲁和斯坦福接受的教育。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1076',
      word: 'effective ',
      ciyi: ' a. 有效的，起作用的；给人深刻印象；显著的   ',
      kaodian: '',
      liju1: '  The government should take effective measures to live through this economic crisis.   ',
      chinese1: ' 政府应采取有效的措施度过这场经济危机。',
      liju2: 'The new rules will become effective in the next few days. ',
      chinese2: '这些新条例将在接下来的几天内生效。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1077',
      word: 'efficiency  ',
      ciyi: '  n. 效率；功效   ',
      kaodian: '',
      liju1: '  The production efficiency is lamed by the old machines.   ',
      chinese1: '生产效率受到破旧机器的影响而无法提高。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1078',
      word: 'efficient ',
      ciyi: '  a. 有效的；有能力的，胜任的   ',
      kaodian: '',
      liju1: "'  I've been looking out for an efficient teaching method.   '",
      chinese1: '我一直在寻求一种有效的教学法。 ',
      liju2: ' Harry’s a very efficient young man though a little proud. ',
      chinese2: '尽管有些骄傲，但哈里还算是个很有能力的年轻人。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1079',
      word: 'ego  ',
      ciyi: '  n. 自我；自负   ',
      kaodian: '',
      liju1: '  Everything you do involves your ego.    ',
      chinese1: ' 你做的每件事都涉及你的自我。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1080',
      word: 'eject ',
      ciyi: ' vt. 喷射；驱逐，逐出   ',
      kaodian: '',
      liju1: '  The police ejected the hecklers from the meeting.  ',
      chinese1: '警察把捣乱分子驱逐出会场。 ',
      liju2: 'The chimneys of those plants eject a lot of smoke every day. ',
      chinese2: ' 那些工厂的烟囱每天都排放出大量的烟尘。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1081',
      word: 'elaborate',
      ciyi: '  a. 精心制作的；详尽的vt.详细制定；vi. 详细说明  ',
      kaodian: '',
      liju1: '  The most elaborate Easter eggs are not even real eggs.  ',
      chinese1: ' 最精心制作的复活节彩蛋甚至不是真蛋。',
      liju2: 'We are elaborating our travel plan. ',
      chinese2: '我们正在详细制定旅行计划。 ',
      liju3: ' The professor asked me to elaborate on my proposal. ',
      chinese3: '教授让我详细说明我的提议。'
}
    ,
    {
      id: '1082',
      word: 'elapse',
      ciyi: '  vi. 消逝；时间过去  ',
      kaodian: '',
      liju1: '   Forty-eight hours have elapsed since his arrest.  ',
      chinese1: '他被捕后48小时已经过去了。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1083',
      word: 'elastic',
      ciyi: '  a. 有弹性的n. 松紧带；橡皮圈  ',
      kaodian: '',
      liju1: '   Beat it until the dough is slightly elastic.   ',
      chinese1: ' 反复捶打，直到面团略有弹性。',
      liju2: 'The elastic in my pants has gone. ',
      chinese2: '我的裤子的松紧带坏了。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1084',
      word: 'elbow',
      ciyi: '  n. 肘；弯头v.推挤；用手肘推开  ',
      kaodian: '',
      liju1: '  She dug her elbow into his ribs.   ',
      chinese1: '她用胳膊肘戳了一下他的肋部。 ',
      liju2: ' Mary elbowed through the crowd. ',
      chinese2: '玛丽从人群中推推搡搡地挤过去。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1085',
      word: 'elect',
      ciyi: '   vt. 选举；推选；选择 ',
      kaodian: '',
      liju1: ' The people of the Philippines have voted to elect a new president.   ',
      chinese1: '菲律宾人民已经投票选举出一位新总统。 ',
      liju2: 'Those electing to smoke will be seated at the rear. ',
      chinese2: '选择抽烟的人将坐在后面。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1086',
      word: 'electrical',
      ciyi: '  a. 有关电的；电学的  ',
      kaodian: '',
      liju1: '   Their inventions have contributed to the development of electricalengineering.    ',
      chinese1: '他们的发明有助于电气工程学的发展。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1087',
      word: 'electrician',
      ciyi: '  n. 电工；电气技师  ',
      kaodian: '',
      liju1: '  The electrician refitted my old radio set.    ',
      chinese1: ' 电工将我的旧收音机加以改装。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1088',
      word: 'electron',
      ciyi: '  n. 电子  ',
      kaodian: '',
      liju1: ' Most things are balanced—with equal numbers of electrons and protons.    ',
      chinese1: '大部分物体都是电荷平衡的——含等量的电子和质子。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1089',
      word: 'electronic',
      ciyi: '  a. 电子的  ',
      kaodian: '',
      liju1: '  Electronic computers are now in common use all over the world.    ',
      chinese1: '电子计算机已在世界各地普遍使用。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1090',
      word: 'elegant',
      ciyi: ' a. 优雅的，优美的；精致的；极好的  ',
      kaodian: '',
      liju1: ' Patricia looked beautiful and elegant as always.   ',
      chinese1: '帕特丽夏看上去跟往常一样美丽优雅。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1091',
      word: 'element',
      ciyi: '  n. 元素；原理；组成部分   ',
      kaodian: '',
      liju1: '  Physical fitness has now become an important element in our lives.  ',
      chinese1: '身体健康现已成为我们生活中的重要元素。 ',
      liju2: ' The integrity is a vital element of her success.',
      chinese2: '诚信是她成功的重要组成部分。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1092',
      word: 'elementary',
      ciyi: '   a. 基本的；初等的 ',
      kaodian: '',
      liju1: '  Literacy now includes elementary computer skills.  ',
      chinese1: '有文化现在包括基本的计算机技能。 ',
      liju2: ' You are start with these elementary exercises as a refresher course.',
      chinese2: '你可以从这些初级入手，将其作为复习课程。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1093',
      word: 'elevate ',
      ciyi: '  vt. 抬升；举起；提高  ',
      kaodian: '',
      liju1: ' Soon they will elevate you to a high rank in their society.    ',
      chinese1: '很快你就会被提升到他们的社会中较高的阶层。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1094',
      word: 'elevator',
      ciyi: '  n. 电梯；升降机  ',
      kaodian: '',
      liju1: '  We are all bunched together in the crowded elevator.    ',
      chinese1: ' 在拥挤的电梯里我们聚拢在一起。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1095',
      word: 'eligible ',
      ciyi: '  a.合格的，符合条件的；有资格当选的  ',
      kaodian: '',
      liju1: "'  Almost half the populations are eligible to vote in today's election.  '",
      chinese1: '将近一半的居民有资格在今天的选举中投票。 ',
      liju2: ' He is an eligible young man.  ',
      chinese2: '他是一个合格的年轻人。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1096',
      word: 'eliminate',
      ciyi: '  vt. 消除；排除  ',
      kaodian: '',
      liju1: '   We now turn our attention to these topics, the associated threats, and how to eliminate the threats.  ',
      chinese1: '我们现在把注意力放在这些主题、相关的威胁和如何消除这些威胁上。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1097',
      word: 'elite',
      ciyi: '  n. 精英；上层人士；掌权人物  ',
      kaodian: '',
      liju1: ' The court is one of the few institutions in which people have to do some elite thinking.   ',
      chinese1: '像最高法院这类为数不多的机构里，人们必须做一些精英化的思考。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1098',
      word: 'eloquent',
      ciyi: '  a. 意味深长的；动人的；雄辩的，有说服力的  ',
      kaodian: '',
      liju1: '  My teacher took an eloquent glance at me.  ',
      chinese1: '我的老师意味深长地瞥了我一眼。 ',
      liju2: ' He addressed the audience in an eloquent speech. ',
      chinese2: '他向听众发表了雄辩的演说。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1099',
      word: 'elsewhere',
      ciyi: '  ad. 在别处；到别处  ',
      kaodian: '',
      liju1: '  He was there all right, but his mind was elsewhere.   ',
      chinese1: '他人在那儿，心可想着别的事。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1100',
      word: 'embark',
      ciyi: ' v.使从事；使上船  ',
      kaodian: '',
      liju1: ' We embark at Montreal for New York.  ',
      chinese1: '我们在蒙特利尔上船去纽约。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1101',
      word: 'embarrass',
      ciyi: '   vt. 使为难；使窘迫；阻碍',
      kaodian: '',
      liju1: '  His bad table manners embarrassed her. ',
      chinese1: '他的不雅的吃相使她很尴尬。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1102',
      word: 'embassy',
      ciyi: '  n. 大使馆 ',
      kaodian: '',
      liju1: ' He was quartered at the embassy when he arrived in Paris.  ',
      chinese1: '他到达巴黎后被安排在大使馆里住下。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1103',
      word: 'embed',
      ciyi: ' vt. 栽种；使嵌入，使插入 ',
      kaodian: '',
      liju1: '  The fossils at Dinosaur Cove are embedded in hard sandstone. ',
      chinese1: '恐龙湾中的化石嵌在坚硬的砂岩中。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1104',
      word: 'embody',
      ciyi: '  vt. 体现，使具体化；具体表达 ',
      kaodian: '',
      liju1: '  Jack Kennedy embodied all the hopes of the 1960s. ',
      chinese1: '杰克•肯尼迪体现了20世纪60年代的全部希望。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1105',
      word: 'embrace',
      ciyi: '  vt.包含vi. 拥抱 ',
      kaodian: '',
      liju1: '  An encyclopedia embraces a great number of subjects. ',
      chinese1: '一部百科全书包含许多学科。 ',
      liju2: '  He embraced his daughter tenderly.',
      chinese2: '他温柔地拥抱女儿。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1106',
      word: 'embryo',
      ciyi: '  n.胚胎；胚芽；事物的萌芽期 ',
      kaodian: '',
      liju1: ' There are 24,000 frozen embryos in clinics across the country.  ',
      chinese1: '全国各地的诊所里有24000个冷冻胚胎。 ',
      liju2: ' They are an embryo party of government. ',
      chinese2: '他们是一个处于萌芽阶段的政体。 ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1107',
      word: 'emerge',
      ciyi: ' vi. 浮现；出现；显现  ',
      kaodian: '',
      liju1: '  Richard was waiting outside the door as she emerged. ',
      chinese1: '当她出现的时候，理查德正等候在门外。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1108',
      word: 'emergency',
      ciyi: '  n. 紧急情况；突发事件；非常时刻 ',
      kaodian: '',
      liju1: ' They were held together to deal with emergency.   ',
      chinese1: '他们团结一致以应付紧急情况。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1109',
      word: 'emigrate',
      ciyi: ' vi. 移居；移居外国 ',
      kaodian: '',
      liju1: ' You have to go through certain formalities before you can emigrate.   ',
      chinese1: '在你移居国外前必须履行某些手续。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1110',
      word: 'eminent',
      ciyi: '  a. 杰出的；有名的；显赫的 ',
      kaodian: '',
      liju1: '  He is an eminent citizen of China.   ',
      chinese1: ' 他是一个杰出的中国公民。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1111',
      word: 'emit',
      ciyi: '  vt. 发出，放射；散发 ',
      kaodian: '',
      liju1: '  The new device emits a powerful circular column of light.  ',
      chinese1: '这个新装置发出一束强烈的环形光柱。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1112',
      word: 'emotion',
      ciyi: '  n. 情感；情绪 ',
      kaodian: '',
      liju1: '  He displayed no sign of emotion.    ',
      chinese1: ' 他丝毫不露感情。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1113',
      word: 'emperor',
      ciyi: '  n. 皇帝，君主 ',
      kaodian: '',
      liju1: '  The daughter of an emperor does not worry about finding a husband.    ',
      chinese1: '皇帝女儿不愁嫁。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1114',
      word: 'emphasis',
      ciyi: ' n. 重点；强调；加强语气  ',
      kaodian: '',
      liju1: ' The emphasis of current economic work is on getting the market in gear.    ',
      chinese1: '当前经济工作的重点是启动市场。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1115',
      word: 'emphasise/emphasize',
      ciyi: ' vt. 强调，着重  ',
      kaodian: '',
      liju1: '  I must emphasize the fact that she is only a little girl.   ',
      chinese1: ' 我必须强调这样一个事实，这就是她只不过是个小女孩。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1116',
      word: 'empire',
      ciyi: '  n. 帝国 ',
      kaodian: '',
      liju1: '  The empire was barbarizing rapidly.   ',
      chinese1: '该帝国迅速变得野蛮起来。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1117',
      word: 'empirical',
      ciyi: ' a. 经验主义的，凭经验（或观察）的  ',
      kaodian: '',
      liju1: '  For this reason he is often considered as the father of empiricalscience and scientific method.    ',
      chinese1: '因为这个原因，他通常被认为是经验科学和科学方法的创始人。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1118',
      word: 'enable',
      ciyi: '  vt. 使能够，使成为可能 ',
      kaodian: '',
      liju1: '  Aeronautics enables us to overcome great distances.   ',
      chinese1: ' 航空学使我们能征服远距离。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1119',
      word: 'enclose',
      ciyi: '  vt. 围住，圈起；装入  ',
      kaodian: '',
      liju1: '  Farmers often enclose their land with hedges.    ',
      chinese1: ' 农夫们经常用树篱把他们的土地围起来。',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1120',
      word: 'enclosure ',
      ciyi: '  n.围住，围起；围墙；围场；信中的附件 ',
      kaodian: '',
      liju1: '  An enclosure formed by a circle of wagons for defense against attack during an encampment.    ',
      chinese1: ' 车阵用运货车围成的围栏，用作营地的防御地区。',
      liju2: 'Down below, the mare paced the small enclosure and snorted nervously.  ',
      chinese2: '母马在下面的围场里踱步并发出紧张的哼声。 ',
      liju3: ' There are several enclosures in the envelope. ',
      chinese3: '信封里有几份附件。'
}
    ,
    {
      id: '1121',
      word: 'encounter ',
      ciyi: '   vt /n.遭遇，邂逅；遇到 ',
      kaodian: '',
      liju1: '  Every day of our lives we encounter major and minor stresses of one kind or another.    ',
      chinese1: '生活中的每一天，我们会遇到或大或小的这样那样的压力。 ',
      liju2: ' The author tells of a remarkable encounter with a group of South Vietnamese soldiers. ',
      chinese2: '作者讲述了他与一群南越士兵的惊人遭遇。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1122',
      word: 'encyclopedia ',
      ciyi: '  n. 百科全书 ',
      kaodian: '',
      liju1: '  The encyclopedia thudded onto the floor.      ',
      chinese1: '那本百科全书砰地掉在地板上。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1123',
      word: 'endeavo(u)r ',
      ciyi: '   n. 努力；力图；活动vi. 努力；尽力；力图 ',
      kaodian: '',
      liju1: '   I wished the result of my endeavors to be respectable.   ',
      chinese1: ' 我希望我努力的结果还不错。 ',
      liju2: 'Marry endeavored to get better grades in college. ',
      chinese2: '玛丽努力在大学取得好成绩。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1124',
      word: ' endorse',
      ciyi: '  vt. 背书；在背面签名；认可；赞同；代言  ',
      kaodian: '',
      liju1: '   Endorse the check on the back.   ',
      chinese1: '在支票背面签字。 ',
      liju2: 'Democrats generally endorse the cap-and-trade plan in the bill.  ',
      chinese2: '民主党人普遍赞同议案中的限制和贸易计划。 ',
      liju3: ' The twins endorsed a line of household cleaning products. ',
      chinese3: '这对双胞胎为一系列的家庭清洁产品代言过。'
}
    ,
    {
      id: '1125',
      word: 'endow ',
      ciyi: '   vt. 赋予；捐赠；天生具有 ',
      kaodian: '',
      liju1: '    Nature has endowed him with great ability  ',
      chinese1: '天赋予他很大的才能。 ',
      liju2: ' He endowed the hospital with half his fortune.',
      chinese2: ' 他把他的一半财产捐赠给了这家医院。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1126',
      word: 'endurance ',
      ciyi: ' n. 忍耐力；持久力；耐久性  ',
      kaodian: '',
      liju1: '  For all of these dimensions you should strive for increasing your endurance and your strength.     ',
      chinese1: '对于这些不同的范畴你需要努力提高你的耐力和体力。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1127',
      word: 'endure ',
      ciyi: '  v. 忍耐；容忍；持续；持久  ',
      kaodian: '',
      liju1: '  Rather than being hoodwinked, I would endure anything.     ',
      chinese1: '除了受骗以外，我什么都可以承受。 ',
      liju2: ' This chance meeting was the start of an enduring friendship.',
      chinese2: ' 这次偶然的相遇是一段持久友情的开始。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1128',
      word: 'energetic ',
      ciyi: '  a. 精力充沛的；积极的；有力的  ',
      kaodian: '',
      liju1: '   Ten year-olds are incredibly energetic.   ',
      chinese1: ' 10岁的孩子精力非常旺盛。 ',
      liju2: ' ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1129',
      word: 'enforce ',
      ciyi: '  vt. 实施，执行；强迫，强制；竭力主张  ',
      kaodian: '',
      liju1: '  They struggled to limit the cost by enforcing a low-tech specification.   ',
      chinese1: '他们通过执行一种低技术规范来竭力限制成本。 ',
      liju2: 'The doctor enforced a strict dietary regimen. ',
      chinese2: '医生强制一套严格的饮食起居制度。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1130',
      word: 'engage ',
      ciyi: '  vt. 使订婚；吸引，引起；使参加，从事；聘用  ',
      kaodian: '',
      liju1: '   Jack is engaged to Ann.  ',
      chinese1: '杰克与安订婚。 ',
      liju2: '  The new novel engaged his attention and interest.',
      chinese2: ' 这部新小说引起了他的注意和兴趣。',
      liju3: '  I have never engaged in drug trafficking. ',
      chinese3: '我从来没有从事过贩毒。',
      liju4: '  We engaged the services of a famous engineer. ',
      chinese4: '我们聘了一位有名的工程师来帮忙。'
}
    ,
    {
      id: '1131',
      word: 'engagement ',
      ciyi: ' n. 婚约；订婚；约会，约定   ',
      kaodian: '',
      liju1: '   He broke off his engagement to her.   ',
      chinese1: '他和她解除了婚约。 ',
      liju2: '  He had an engagement at a restaurant at eight. ',
      chinese2: '他8点钟在一家餐馆有一个约会。 ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1132',
      word: 'engine ',
      ciyi: '  n. 引擎，发动机；机车，火车头  ',
      kaodian: '',
      liju1: '   He got into the driving seat and started the engine.  ',
      chinese1: '他坐上驾驶座椅，发动了引擎。 ',
      liju2: ' I feel sick with a seat back to the engine. ',
      chinese2: '坐在背朝火车头的座位我会晕车。 ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1133',
      word: 'engineering ',
      ciyi: ' n. 工程，工程学  ',
      kaodian: '',
      liju1: '  Their inventions have contributed to the development of electrical engineering.    ',
      chinese1: '他们的发明有助于电气工程学的发展。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1134',
      word: 'enhance ',
      ciyi: '  vt. 提高；增强  ',
      kaodian: '',
      liju1: '  The computer can enhance the quality of photographs transmitted from space.    ',
      chinese1: '计算机可增强从太空发回的照片的质量。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1135',
      word: 'enlarge ',
      ciyi: ' v. 扩大；放大；增大  ',
      kaodian: '',
      liju1: "'That photograph probably won't enlarge well.'",
      chinese1: '那张照片可能不会放大得很好。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1136',
      word: 'enlighten ',
      ciyi: '  vt. 启发，启蒙；教导  ',
      kaodian: '',
      liju1: '   I hope the results of my research will enlighten my colleagues.  ',
      chinese1: '我希望我的研究成果会对我的同事们有所启发。 ',
      liju2: '  The boy thought the world was flat until I enlightened him! ',
      chinese2: '在我教导这男孩之前，他认为地球是平的! ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1137',
      word: ' enormous',
      ciyi: '   a. 庞大的，巨大的 ',
      kaodian: '',
      liju1: '   It has enormous consequences for our troops.  ',
      chinese1: '它有巨大的后果为我们的军队。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1138',
      word: 'enquire/inquire  ',
      ciyi: '  v. 询问；调查；问候，打听 ',
      kaodian: '',
      liju1: '  I recently e-mailed one website to inquire why my goods had not yet arrived.    ',
      chinese1: '我最近给一个网站发邮件去询问为什么我订购的商品还没有到达。 ',
      liju2: ' Please allow me to inquire about the history of this famous garden, would you? ',
      chinese2: '我能打听一下这著名花园的历史吗？ ',
      liju3: ' Have they inquired after me?  ',
      chinese3: '我们可曾向你问好？'


}
    ,
    {
      id: '1139',
      word: ' enrich',
      ciyi: '  vt. 使肥沃；使富足；使充实；丰富  ',
      kaodian: '',
      liju1: '  The discovery of gold in the valleys will enrich the poor mountain area.  ',
      chinese1: '山谷里发现了黄金，这将使那个贫穷的山区富足起来。 ',
      liju2: ' By identifying the purpose of your goals, you enrich your perspective.  ',
      chinese2: ' 通过确定目标的用意，你就充实了你的愿景。',
      liju3: '   ',
      chinese3: ''


}
    ,
    {
      id: '1140',
      word: ' enroll',
      ciyi: '  v. 招收；登记；注册；入学  ',
      kaodian: '',
      liju1: '   The school will enroll new students in August.   ',
      chinese1: '这所学校将于八月份招收新生。 ',
      liju2: '  The new students only stand aside while their parents are busy helping them enroll.  ',
      chinese2: '那些新生只会站在一边，而父母亲们却在忙着帮他们办理入学登记。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1141',
      word: ' ensure',
      ciyi: '  vt. 保证，确保 ',
      kaodian: '',
      liju1: '   I cannot ensure his being on time.     ',
      chinese1: '我不能保证他会准时。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1142',
      word: 'entail ',
      ciyi: '   vt. 使需要，牵涉；遗传给 ',
      kaodian: '',
      liju1: '   Mountaineering will entail an early start in the morning.    ',
      chinese1: '想登山的话早上就要早一点动身。 ',
      liju2: ' The playboy would have sold the property long ago had it not been entailed.   ',
      chinese2: ' 这些财产若非限定继承的话，早就被那个花花公子给卖掉了。',
      liju3: '   ',
      chinese3: ''

}
    ,
    {
      id: '1143',
      word: ' enterprise',
      ciyi: '  n. 企业；事业；进取心；事业心  ',
      kaodian: '',
      liju1: '   The enterprise has excellent prospects.     ',
      chinese1: '这家企业的远景极其美好。 ',
      liju2: '  Mike got the job because he showed the spirit of enterprise.  ',
      chinese2: '迈克因为表现出进取精神而得到了这份工作。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1144',
      word: 'entertain ',
      ciyi: '  vt. 使娱乐，使欢乐；招待，款待  ',
      kaodian: '',
      liju1: '   Newspapers inform our opinion, educate us, entertain us, and keep us in touch with the world.     ',
      chinese1: ' 报纸影响着我们的观点，教育我们，娱乐我们让我们保持和世界的联系。',
      liju2: '  You can take your friend to the amusement places and entertainthem there.   ',
      chinese2: '你可以带你的朋友去娱乐场所，在那里款待他们。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1145',
      word: 'entertainment ',
      ciyi: '   n. 娱乐；款待，招待 ',
      kaodian: '',
      liju1: "'   Television has displaced film as our country's most popular form of entertainment.     '",
      chinese1: '电视已取代了电影，成为我国最大众化的娱乐形式。 ',
      liju2: '  The housewife was delighted in the entertainment of friends and relatives.   ',
      chinese2: '那位家庭主妇乐于招待亲朋好友。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1146',
      word: 'enthusiasm ',
      ciyi: '  n. 热心，热忱，热情  ',
      kaodian: '',
      liju1: '   Their skill and enthusiasm has got them on the team.   ',
      chinese1: '他们的技术和热情使他们进了那支团队。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1147',
      word: ' enthusiastic ',
      ciyi: '  a. 热情的；热心的  ',
      kaodian: '',
      liju1: '   Here the crowd was thickest and most enthusiastic.      ',
      chinese1: '这里的人群最密集， 热情也最高。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1148',
      word: 'entire ',
      ciyi: '  a. 全部的，整个的；全体的  ',
      kaodian: '',
      liju1: '   He had spent his entire life in China as a doctor.    ',
      chinese1: ' 他整个一生都在中国做医生。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1149',
      word: 'entitle ',
      ciyi: ' vt. 给予权利；定名为…；给…以称号  ',
      kaodian: '',
      liju1: '  His executive position entitled him to certain courtesies rarely accorded others.    ',
      chinese1: '他的行政职务使他享有某种极少给予别人的礼遇。 ',
      liju2: '  What was the book entitled?  ',
      chinese2: ' 给此书定什么名?',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1150',
      word: 'entity ',
      ciyi: ' n. 实体；事物的存在  ',
      kaodian: '',
      liju1: '     This ensures that I have the right business entity.  ',
      chinese1: '这就确保了我得到了正确的业务实体。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1152',
      word: ' entrepreneur',
      ciyi: '   n. 企业家；承包人；主办者 ',
      kaodian: '',
      liju1: '   How would you define personal growth as an entrepreneur?   ',
      chinese1: '你会如何定义,一个企业家的个人成长？ ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''

}
    ,
    {
      id: '1153',
      word: 'entry ',
      ciyi: '  n. 进入；入口，通道；条目，记载   ',
      kaodian: '',
      liju1: '  You can gain entry to the club only through a member.    ',
      chinese1: ' 你只有通过一位会员才能进入该俱乐部。',
      liju2: '  You should add an entry to this section.   ',
      chinese2: '你应该给这部分增加一个入口。 ',
      liju3: "'  Violet's diary entry for April 20, 1917 records Brigit admitting to the affair.  '",
      chinese3: '维奥莉特1917年4月20日的日记简短记录着布里吉特承认此事。'
}
    ,
    {
      id: '1154',
      word: 'environment ',
      ciyi: '  n. 环境，外界  ',
      kaodian: '',
      liju1: '   The moral characters of men are formed not by heredity but by environment.    ',
      chinese1: '人的品德不是由遗传而是由环境形成的。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1155',
      word: 'envisage ',
      ciyi: '  vt. 正视，面对；想象，展望  ',
      kaodian: '',
      liju1: '    You must envisage realities.    ',
      chinese1: '你必须正视现实。 ',
      liju2: '  It’s hard to envisage a more disruptive business model.  ',
      chinese2: '很难想象一个更具有破坏性的商业模式。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1156',
      word: ' envy ',
      ciyi: '  n/vt. 嫉妒，羡慕  ',
      kaodian: '',
      liju1: '   Gradually he began to acknowledge his feelings of envy towards his mother.    ',
      chinese1: '渐渐地他开始承认自己对母亲的羡慕。 ',
      liju2: '  Their economy is the envy of the developing world.  ',
      chinese2: ' 他们的经济令发展中国家嫉妒。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1157',
      word: 'epidemic ',
      ciyi: '   a. 流行的；传染性的n. 传染病；流行病 ',
      kaodian: '',
      liju1: '   The government declared that no major epidemic diseases prevailed in this area.    ',
      chinese1: '政府宣布该地区并没有出现严重的传染性疾病。 ',
      liju2: '  An epidemic broke out.    ',
      chinese2: '一种流行病突然开始流行。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1158',
      word: 'episode  ',
      ciyi: '   n.（连续剧的）一集；片断 ',
      kaodian: '',
      liju1: '   The director decided to delete this episode from the film.    ',
      chinese1: '导演决定从胶片中减去这个片段。 ',
      liju2: '  The final episode will be shown next Sunday.  ',
      chinese2: '最后一集将于下周日播放。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1159',
      word: 'epoch ',
      ciyi: '  n. 时代；时代  ',
      kaodian: '',
      liju1: '    The epoch of revolution creates great figures.     ',
      chinese1: ' 革命时代造就伟大的人物。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1160',
      word: 'equality ',
      ciyi: '   n. 平等；相等；等式 ',
      kaodian: '',
      liju1: ' The new law provided for equality of human rights.      ',
      chinese1: ' 新法律规定人人有平等的权利。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1161',
      word: ' equation',
      ciyi: '   n. 方程式，等式；相等；均衡 ',
      kaodian: '',
      liju1: '  One side of an equation must balance the other.     ',
      chinese1: ' 方程式的一边必须和另一边相等。',
      liju2: '   The party fears the equation between higher spending and higher taxes.  ',
      chinese2: '该党害怕增加开支和增高税收之间的相互制衡。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1162',
      word: ' equator',
      ciyi: '  n. 赤道  ',
      kaodian: '',
      liju1: '  The United States is north of the equator.     ',
      chinese1: '美国位于赤道以北。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1163',
      word: ' equip',
      ciyi: 'vt. 装备，配备   ',
      kaodian: '',
      liju1: '   Owners of restaurants have to equip them to admit disabled people.    ',
      chinese1: '餐馆老板们必须给餐馆配备接纳残疾人的设施。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1164',
      word: 'equivalent ',
      ciyi: '  a. 等价的，等值的n. 等价物；对应词  ',
      kaodian: '',
      liju1: '   If they want to change an item in the budget, they will have to propose equivalent cuts elsewhere.    ',
      chinese1: '如果他们想要改变预算中的一个款项，必须得提出其他等值的削减。 ',
      liju2: "'  Mr. Li's pay is the equivalent of about $80 a month.   '",
      chinese2: '李先生的报酬大约等于每月80美元。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1165',
      word: 'era ',
      ciyi: '   n. 时代；年代；纪元；阶段 ',
      kaodian: '',
      liju1: '   His death marked the end of an era.     ',
      chinese1: '他的逝世标志着一个时代的结束。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1166',
      word: 'erase  ',
      ciyi: '  vt. 抹去；擦除；删去  ',
      kaodian: '',
      liju1: '  Please erase my name from the list.      ',
      chinese1: '请把我的名字从名单上擦去。 ',
      liju2: '  I erased the file accidentally, and there is no backup.  ',
      chinese2: '我不小心删掉了一份没有备份的文件。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1167',
      word: ' erect ',
      ciyi: '   vt. 使竖立；建造；树立；安装a. 竖立的；笔直的 ',
      kaodian: '',
      liju1: '    This monument was erected in honor of the martyrs during the internal war.   ',
      chinese1: '这座纪念碑是为了纪念在内战中牺牲的烈士而建的。  ',
      liju2: '  Stand reasonably erect, your arms hanging naturally.  ',
      chinese2: ' 尽可能站直，双臂自然下垂。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1168',
      word: 'erosion ',
      ciyi: '  n. 侵蚀，腐蚀；削弱；减小 ',
      kaodian: '',
      liju1: "'  The cement petrified after many years' erosion. '",
      chinese1: '经过多年的侵蚀，水泥石化了。 ',
      liju2: ' The erosion of civil liberties causes sharp conflict.   ',
      chinese2: '对公民自由的削弱引发了尖锐的冲突。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1169',
      word: 'erroneous  ',
      ciyi: '  a. 错误的；不正确的  ',
      kaodian: '',
      liju1: '   No erroneous ideas should be allowed to spread unchecked.      ',
      chinese1: '  不能听任错误思想自由泛滥。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1170',
      word: ' error',
      ciyi: '  n. 误差；错误；过失  ',
      kaodian: '',
      liju1: '   The accident was caused by human error.     ',
      chinese1: '这一事故是人为错误造成的。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1171',
      word: 'erupt ',
      ciyi: '   vi. 爆发；喷出；发疹 ',
      kaodian: '',
      liju1: '   Heavy fighting erupted there today after a two-day cease-fire.    ',
      chinese1: '激烈的战斗在两天的停火之后，今天在那里爆发了。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1172',
      word: ' escalate',
      ciyi: '  vi. 逐步加强；逐步上升；使逐步增长，使紧张  ',
      kaodian: '',
      liju1: ' The local war escalated into a major conflict.    ',
      chinese1: '局部的战争逐步上升成大规模的冲突。',
      liju2: '   Epidemics of infectious disease can escalate into pandemics, but do not always do so.   ',
      chinese2: '传染性疾病的流行能够升级至大流行疫情，但并非总是这样。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1173',
      word: 'escort  ',
      ciyi: '   n. 陪同；护卫队；护送者vt.护送；护卫  ',
      kaodian: '',
      liju1: '    Policemen had to escort the referee from the football field.   ',
      chinese1: '警察不得不护送这位裁判离开足球场。',
      liju2: '   I escorted him to the door.  ',
      chinese2: '我护送他到门口。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1174',
      word: 'essay  ',
      ciyi: '   n. 散文；文章；短文  ',
      kaodian: '',
      liju1: '   She cobbled together an essay in half an hour.    ',
      chinese1: ' 她用半小时胡乱拼凑了一篇文章。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1175',
      word: 'essence ',
      ciyi: '  n. 本质，实质；精华   ',
      kaodian: '',
      liju1: '    The teacher cannot pin down the essence of ancient poetry.    ',
      chinese1: '老师不能清楚地解释古代诗歌的实质。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1176',
      word: 'essential ',
      ciyi: '   a.必要的；必不可少的；基本的；本质的  ',
      kaodian: '',
      liju1: '  They believe it is essential to defy convention.     ',
      chinese1: '他们认为对抗流俗是绝对必要的。',
      liju2: '  The apartment contained the basic essentials for bachelor life.  ',
      chinese2: '这套公寓配有单身生活的基本必需品。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1177',
      word: 'establish ',
      ciyi: '  vt. 建立；创办；定居；安置   ',
      kaodian: '',
      liju1: '  The politicians jockeyed about in order to establish relative power within the party.      ',
      chinese1: '为了确立在党内相应的权力，政客们调整了自己的位置。',
      liju2: '   They are now comfortably established in their new house.  ',
      chinese2: '他们现在已经舒舒服服地在新居里安顿下来了。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1178',
      word: ' estate',
      ciyi: '   n. 房地产；财产；地产  ',
      kaodian: '',
      liju1: '  She cashed in on her real-estate investments.     ',
      chinese1: '她在房地产的投资上赚了钱。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1179',
      word: 'esteem ',
      ciyi: '  vt/n. 尊重；尊敬  ',
      kaodian: '',
      liju1: '   The old professor was greatly loved and esteemed.   ',
      chinese1: '这位老教授受到大家的爱戴和尊敬。',
      liju2: '   After that, we could go for esteem and respect.   ',
      chinese2: '而再往上，我们可能需要自尊和尊重。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1180',
      word: 'estimate ',
      ciyi: '  vi. 估计；估价，估算n. 评价；判断，看法   ',
      kaodian: '',
      liju1: '   We estimate the cost to be four thousand dollars.   ',
      chinese1: '我们估计费用(或成本)为4 000美元。',
      liju2: '  We asked our build to estimate for the repair of the ceiling.  ',
      chinese2: '我们要求施工人员估算一下修理天花板的费用。 ',
      liju3: "' I hadn't been far wrong in my estimate of his grandson's capabilities.  '",
      chinese3: '我对他孙子能力的判断没有太离谱。'
}
    ,
    {
      id: '1181',
      word: 'eternal ',
      ciyi: '    a. 永恒的；不朽的 ',
      kaodian: '',
      liju1: '   My eternal purpose has decreed.     ',
      chinese1: '我的永恒目标已经确定。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1182',
      word: 'ethic ',
      ciyi: '   n. 伦理标准；道德规范  ',
      kaodian: '',
      liju1: '   In football, that does seem to be the prevailing ethic.    ',
      chinese1: '这似乎已经成为了足球界盛行的道德规范了。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1183',
      word: ' ethnic',
      ciyi: '   a. 种族的；民族的  ',
      kaodian: '',
      liju1: '   We do not differentiate between our workers on the basis of their background or ethnic origin.   ',
      chinese1: '我们不以工人们的背景或种族来源区别对待他们。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1184',
      word: 'evacuate ',
      ciyi: '  vt. 疏散，撤退；排泄；使丧生；剥夺   ',
      kaodian: '',
      liju1: '  The fire is threatening about sixty homes, and residents have evacuated the area.   ',
      chinese1: '这场大火威胁着约六十个家庭，居民已经撤离了该地区。',
      liju2: ' Fear evacuated their minds of reasons.   ',
      chinese2: '恐惧使他失去了理智。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1185',
      word: ' evade',
      ciyi: '   vt. 逃避；规避；逃脱；回避  ',
      kaodian: '',
      liju1: '   They evade paying taxes by living abroad.   ',
      chinese1: '他们用移居国外的方法逃避纳税。',
      liju2: '  He tried to evade the embarrassing question.    ',
      chinese2: ' 他企图回避这令人难堪的问题。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1186',
      word: ' evaluate',
      ciyi: '   vt. 评价；估价；求…的值 ',
      kaodian: '',
      liju1: '    We must scrutinize and evaluate.  ',
      chinese1: '我们必须细细察看并做出评价。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1187',
      word: 'evaporate ',
      ciyi: '  v. 使蒸发   ',
      kaodian: '',
      liju1: ' The puddle evaporated rapidly in the sun.    ',
      chinese1: '水坑在阳光下迅速蒸发。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1188',
      word: ' eve ',
      ciyi: '   n. 前夜；前夕  ',
      kaodian: '',
      liju1: "'  Don't peek at your presents before Christmas Eve.     '",
      chinese1: '不到圣诞节前夜不许偷看你们的礼物。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1189',
      word: 'evidence ',
      ciyi: '   n. 证据，证明；迹象；明显  ',
      kaodian: '',
      liju1: '  They faced him with evidence of treachery.     ',
      chinese1: '他们使他面对其叛国的证据。',
      liju2: '  What evidence do you see?    ',
      chinese2: '您看到什么迹象呢？ ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1190',
      word: ' evident ',
      ciyi: '   a. 明显的；明白的  ',
      kaodian: '',
      liju1: ' The role of friendship in their health and well-being is evident in almost every chapter.     ',
      chinese1: '几乎在每一章中友谊在她们健康和精神状态中的作用是很明显的。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1191',
      word: ' evil ',
      ciyi: '  a. 邪恶的；有害的n. 罪恶，邪恶   ',
      kaodian: '',
      liju1: '   Evil thoughts came to Tim’s mind again.   ',
      chinese1: '蒂姆脑海里再次浮现出那些邪恶的念头。',
      liju2: ' Virtue will prevail against evil.    ',
      chinese2: ' 美德定将战胜邪恶。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1192',
      word: 'evoke ',
      ciyi: '   vt. 引起，唤起  ',
      kaodian: '',
      liju1: '   Her comment evoked protests from the shocked listeners.   ',
      chinese1: '她的评论引起震惊的听众的抗议。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1193',
      word: 'evolution ',
      ciyi: '  n. 演变；进化；进展   ',
      kaodian: '',
      liju1: ' It has passed through an interesting procedure of evolution.     ',
      chinese1: '它经过了一个有趣的进化过程。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1194',
      word: 'evolve ',
      ciyi: '  v. 使发展，使进化；使逐步形成  ',
      kaodian: '',
      liju1: '   Man has evolved from the ape.   ',
      chinese1: '人是从类人猿进化来的。',
      liju2: ' The Chinese political system has evolved over a long period of time.   ',
      chinese2: ' 中国的政治制度是长期发展形成的。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1195',
      word: ' exaggerate',
      ciyi: '  v. 夸大；夸张   ',
      kaodian: '',
      liju1: '   These figures exaggerate the loss of competitiveness.   ',
      chinese1: '这些数字夸大了竞争力的下降。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1196',
      word: 'exceed ',
      ciyi: '   vt. 超过；胜过  ',
      kaodian: '',
      liju1: '  Her performance exceeded all the others.    ',
      chinese1: '她的表演超过所有其他人。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1197',
      word: 'exceedingly ',
      ciyi: '   ad. 非常；极其；极端地；  ',
      kaodian: '',
      liju1: ' There is certainly much work which is exceedingly irksome, and an excess of work is always very painful.     ',
      chinese1: '毫无疑问有许多工作是非常令人厌烦的，而且过多的工作总是十分痛苦的事。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1198',
      word: ' excel ',
      ciyi: '  vi. 胜过(或超过)别人；擅长vt. 超过；优于  ',
      kaodian: '',
      liju1: ' Mary was a better rider than either of them and she excelled at outdoor sports.    ',
      chinese1: '玛丽比他们俩骑得都好，她擅长户外运动。',
      liju2: ' Never mind trying to excel.     ',
      chinese2: '不要介意尝试超过别人。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1199',
      word: 'exception ',
      ciyi: '  n. 例外；异议   ',
      kaodian: '',
      liju1: '  These regulations apply to everyone, without exception.     ',
      chinese1: '这些规章对谁都适用，没有例外。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1200',
      word: 'exceptional ',
      ciyi: '   a. 异常的，例外的  ',
      kaodian: '',
      liju1: '  Its flesh has exceptional delicacies.     ',
      chinese1: '它的肉异常鲜美。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1201',
      word: 'excerpt ',
      ciyi: '   n. 摘录，引用；节录  ',
      kaodian: '',
      liju1: '  The excerpt below includes only portions of code that have changed from the previous example.      ',
      chinese1: '下面这个摘录只包含从前一个例子发生了改变的部分代码。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1202',
      word: ' excess',
      ciyi: '   n.超额；过剩a. 额外的，过量的  ',
      kaodian: '',
      liju1: ' All this caused the current excess.      ',
      chinese1: '所有这些导致如今的过剩。',
      liju2: "'Make sure that you don't have to pay expensive excess charges.  '",
      chinese2: '确保你不需要支付昂贵的额外费用。 ',
      liju3: '   ',
      chinese3: ''

}
    ,
    {
      id: '1203',
      word: ' excessive',
      ciyi: '  a. 过多的，过分的   ',
      kaodian: '',
      liju1: '  Their spending on research is excessive and is slowing developments of new treatments.     ',
      chinese1: '他们在研究上的花销过多，正在减慢新疗法的开发。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1204',
      word: ' exchange',
      ciyi: '   n. 交换，调换，兑换；交流，交易；交易所vt. 交换；更换  ',
      kaodian: '',
      liju1: '  He ruled out any exchange of prisoners with the militants.     ',
      chinese1: '他拒绝考虑与好战分子交换囚犯。',
      liju2: ' What would you like to exchange?     ',
      chinese2: '请问你要兑换什么货币? ',
      liju3:"' We'll hold a meeting to exchange experiences.   '",
      chinese3: '我们将开个会来交流经验。',
      liju3: ' Most stores will allow the purchaser to exchange goods.  ',
      chinese3: '大多数商店将允许顾客更换商品。'
}
    ,
    {
      id: '1205',
      word: 'excitement ',
      ciyi: '   n. 兴奋；刺激；令人兴奋的事物  ',
      kaodian: '',
      liju1: '   Everyone is in a state of great excitement.    ',
      chinese1: '人人都处于极度兴奋之中。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1206',
      word: '人人都处于极度兴奋之中。 ',
      ciyi: '  v. 呼喊，惊叫；大声叫嚷   ',
      kaodian: '',
      liju1: '    The spectacular sunrise made us exclaim in surprise.    ',
      chinese1: '壮观的日出让我们惊叹不已。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1207',
      word: 'exclude ',
      ciyi: '   vt. 排除；排斥；拒绝；逐出  ',
      kaodian: '',
      liju1: '  They excluded people under 20 from joining the club.    ',
      chinese1: '他们拒绝20岁以下的人加入俱乐部。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1208',
      word: 'exclusive ',
      ciyi: '   a. 独有的；专用的；排他的  ',
      kaodian: '',
      liju1: '   Our group will have exclusive use of a 60-foot boat.    ',
      chinese1: '我们组将有一条专用的60英尺的船。',
      liju2: '  It should be noted that the various mechanisms are not at all exclusive.    ',
      chinese2: ' 应当注意到，不同的机制并不完全是排外的。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1209',
      word: ' excursion',
      ciyi: '  n.远足；短程旅行；游览   ',
      kaodian: '',
      liju1: "'In Bermuda, Sam's father took him on an excursion to a coral barrier.'",
      chinese1: '在百慕大，萨姆的父亲带他去了一趟到珊瑚堤的短途旅行。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1210',
      word: 'execute ',
      ciyi: '   vt. 实施；执行   ',
      kaodian: '',
      liju1: '   We are going to execute our campaign plan to the letter.    ',
      chinese1: '我们将严格执行我们的竞选方案。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1211',
      word: ' executive ',
      ciyi: '  a. 执行的，实施的n. 总经理；执行委员会  ',
      kaodian: '',
      liju1: '   A successful job search needs to be as well organized as any other executive task.    ',
      chinese1: '一次成功的寻职要像任何其他执行任务一样精心安排。',
      liju2: '  They opted to put an executive committee in charge of the project rather than a single person.  ',
      chinese2: '他们选择由一个执行委员会而非个人来负责这个项目。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1212',
      word: 'exemplify ',
      ciyi: '  vt. 举例证明；是…的榜样  ',
      kaodian: '',
      liju1: '   Our teacher richly exemplified the use of these words.    ',
      chinese1: '我们老师充分举例说明了这些词的用法。',
      liju2: ' The plays of Wilds exemplify the comedy of manners.   ',
      chinese2: ' 王尔德的戏剧是风尚喜剧的典范。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1213',
      word: 'exempt ',
      ciyi: '   vt. 使…免除；豁免a. 被免除的；被豁免的  ',
      kaodian: '',
      liju1: '   South Carolina claimed the power to exempt its citizens from the obligation to obey federal law.    ',
      chinese1: '南卡罗来纳州宣称有权使其公民免除遵守联邦法律的义务。',
      liju2: '   Men in college were exempt from military service.  ',
      chinese2: '在校男大学生免服兵役。 ',
      liju3: '   ',
      chinese3: ''

}
    ,
    {
      id: '1214',
      word: 'exert  ',
      ciyi: '   vt. 尽力；施加，施以影响  ',
      kaodian: '',
      liju1: '  He exerted considerable influence on the thinking of the scientific community on these issues.    ',
      chinese1: '他对科学界在这些问题上的思考施加了相当大的影响。',
      liju2: '  You must exert yourself to pass your exam.  ',
      chinese2: '你必须竭尽全力去通过考试。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1215',
      word: ' exhaust',
      ciyi: '  vt. 抽完，吸干；耗尽，使精疲力尽n. 排气装置   ',
      kaodian: '',
      liju1: '   The chemist exhausted the test tube of air.    ',
      chinese1: '化学家将试管内空气抽空了。',
      liju2: '   I have exhausted myself working.  ',
      chinese2: '我工作得精疲力竭。 ',
      liju3: 'Automobile exhaust is a serious pollution problem.   ',
      chinese3: '汽车尾气排放是一个严重的问题。'
}
    ,
    {
      id: '1216',
      word: 'exhibit ',
      ciyi: '  vt. 展览；陈列   ',
      kaodian: '',
      liju1: '    His work was exhibited in the best galleries in America, Europe and Asia.   ',
      chinese1: '他的作品在美国、欧洲和亚洲最好的美术馆展览过。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1217',
      word: 'exile  ',
      ciyi: '  n/vt.放逐，流放；使背井离乡   ',
      kaodian: '',
      liju1: "'   Napoleon's exile to Elba was brief.      '",
      chinese1: '拿破仑被放逐到厄尔巴岛的时间很短。',
      liju2: '  She was exiled from her country.  ',
      chinese2: ' 她被流放到国外。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1218',
      word: 'existence ',
      ciyi: '  n. 存在，实在；生存，生活方式   ',
      kaodian: '',
      liju1: '  In meditation, we allow this harmony to percolate to every layer of our existence.     ',
      chinese1: '在冥想中，我们让这种和谐渗透到存在的每一个层次。',
      liju2: '  Public worries about accidents are threatening the very existence of the nuclear power industry.  ',
      chinese2: '公众对事故的担心正威胁着核电工业的生存。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1219',
      word: 'exotic ',
      ciyi: '    a. 外国风味的，由外国引进的；奇异的，异乎寻常的 ',
      kaodian: '',
      liju1: '   Quarks are the constituents of protons and neutrons, as well as more exotic things.    ',
      chinese1: '夸克是质子和中子的组成粒子，也是更为奇异的物质。',
      liju2: '  The steaming plate was heaped with chicken and exotic vegetables.  ',
      chinese2: '冒着热气的盘子里堆满了鸡肉和具有异国风味的蔬菜。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1220',
      word: 'expand ',
      ciyi: '   v. 扩张；使膨胀；张开，展开  ',
      kaodian: '',
      liju1: '   Heat expands most metals.    ',
      chinese1: '加热使大多数金属膨胀。',
      liju2: '  The buds had not yet expanded.  ',
      chinese2: '花蕾尚未绽开。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1221',
      word: 'expansion ',
      ciyi: '   n. 膨胀；扩张；伸展；张开；扩展  ',
      kaodian: '',
      liju1: '  Their desire for expansion has increased.     ',
      chinese1: '他们的扩张欲望有增无减。',
      liju2: '  Future expansion of the business calls for two new factories.    ',
      chinese2: '将来业务扩大需要建造两个新工厂。 ',
      liju3: "'There's room for expansion at the fringes of all.  '",
      chinese3: '在每个城市的边缘都有可供扩展的空间。'
}
    ,
    {
      id: '1222',
      word: 'expectation ',
      ciyi: '  n. 期待；预期；指望   ',
      kaodian: '',
      liju1: '   Stephen Chase had determined to live up to the expectations of the company.    ',
      chinese1: '斯蒂芬·蔡斯已决心不辜负公司的期望。',
      liju2: '     ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1223',
      word: 'expedition ',
      ciyi: '  n. 远征；探险队   ',
      kaodian: '',
      liju1: '  Forty-three members of the expedition were killed.     ',
      chinese1: '探险队中43名成员丧生。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1224',
      word: 'expel ',
      ciyi: '  vt. 驱逐；开除；排出   ',
      kaodian: '',
      liju1: '  An American academic was expelled from the country yesterday.     ',
      chinese1: '一名美国学者昨天被逐出该国。',
      liju2: '  As the lungs exhale this waste, gas is expelled into the atmosphere.  ',
      chinese2: '当肺呼出这股废气，气体就被排到空气中。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1225',
      word: ' expend',
      ciyi: '   vt. 花费；消费  ',
      kaodian: '',
      liju1: '    More often than not the energy they expend on seeming impressive makes their actual performance worse.    ',
      chinese1: '通常他们花费在着装上的精力使得他们的工作更加糟糕。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1226',
      word: ' expenditure',
      ciyi: '  n. 支出，花费；经费   ',
      kaodian: '',
      liju1: '  Policies of tax reduction must lead to reduced public expenditure.     ',
      chinese1: '减税政策必然导致公共经费减少。',
      liju2: '  I spend money on expensive things endlessly; so the expenditure trends up.  ',
      chinese2: '我无休止地花钱买昂贵的东西,所以开支趋向上升。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1227',
      word: ' expense',
      ciyi: '  n. 花费，消费；消耗   ',
      kaodian: '',
      liju1: '   The expense is prohibitive.      ',
      chinese1: '费用高得使人不敢问津。',
      liju2: "'He's bought a big TV at vast expense so that everyone can see properly.  '",
      chinese2: '他花费了很多钱买了台大电视，这样人人都可以看清楚了。 ',
      liju3: ' She bought fame at the expense of her happiness and health.    ',
      chinese3: '她牺牲了幸福和健康换得名誉。'
}
    ,
    {
      id: '1228',
      word: 'expert ',
      ciyi: '   a. 熟练的；有经验的；专门的n. 专家；能手  ',
      kaodian: '',
      liju1: '   Children became expert at holding their breath under water.    ',
      chinese1: '孩子们在水下憋气的技术变的娴熟。',
      liju2: '  This is an expert job, and you need certain skills to do it.  ',
      chinese2: '这是一项专业性的工作，你要掌握特定的技术才能做。 ',
      liju3: ' The expert elaborates his theory from his own reason.   ',
      chinese3: '这位专家详尽阐述他的学说。'
}
    ,
    {
      id: '1229',
      word: 'expertise ',
      ciyi: '   n. 专门知识；专长  ',
      kaodian: '',
      liju1: "' She was not an accountant and didn't have the expertise to verify all of the financial details.'",
      chinese1: '她不是会计，不具有核查所有这些财政细目的专业知识。',
      liju2: '    ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1230',
      word: ' expire',
      ciyi: '   vi. 期满；终止；死亡；呼气  ',
      kaodian: '',
      liju1: '   Now her passport has expired.    ',
      chinese1: '现在她的护照已过期了。',
      liju2: '  The whales expired with a rushing sound.   ',
      chinese2: ' 那些鲸鱼呼气时发出一种急促的声音。',
      liju3: '  The old woman expired in agony. ',
      chinese3: '老妇在极度痛苦中断气。'
}
    ,
    {
      id: '1231',
      word: 'explicit ',
      ciyi: '   a. 明确的；清楚的；直率的；详述的  ',
      kaodian: '',
      liju1: '   He avoids the explicit answer to us.     ',
      chinese1: '他避免给我们明确的回答。',
      liju2:"' He was explicit about his intention to overhaul the party's internal voting system.   '",
      chinese2: '他对自己彻底革新该党内投票体制的意图直言不讳。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1232',
      word: 'explode',
      ciyi: '   vt. 使爆炸；使爆发  ',
      kaodian: '',
      liju1: ' The bomb and other explosive exploded.    ',
      chinese1: '炸弹和其他爆炸物爆炸了。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1233',
      word: 'exploit',
      ciyi: '   vt. 开发，开拓；利用，剥削  ',
      kaodian: '',
      liju1: '  Humans could exploit metallic minerals almost 10,000 years ago.    ',
      chinese1: '人类差不多在一万年前就能开采金属矿了。',
      liju2: ' The temptation to exploit consumers usually prevails unless it is curbed.   ',
      chinese2: '剥削消费者的诱惑除非加以限制，否则就会得逞。 ',
      liju3: ' We must exploit every opportunity to learn new things.  ',
      chinese3: '我们必须利用一切机会学习新事物。'
}
    ,
    {
      id: '1234',
      word: 'explore',
      ciyi: '   vt. 探索；探测；探究  ',
      kaodian: '',
      liju1: '  Let us explore the possibilities for improvement.    ',
      chinese1: '让我们探索改善的可能性。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1235',
      word: 'explosion',
      ciyi: '  n. 爆炸；爆发；激增    ',
      kaodian: '',
      liju1: '  The explosion of bombs rent the serenity.     ',
      chinese1: '炸弹的爆炸声打破了四周的宁静。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1236',
      word: 'explosive',
      ciyi: '  a. 爆炸性的；使人冲动的n. 炸药；爆炸物   ',
      kaodian: '',
      liju1: '  He appeared to be treating the potentially explosive situation with   some sensitivity.    ',
      chinese1: '他似乎正在有些敏感地处理潜在的爆炸性局面。',
      liju2: "' He's inherited his father's explosive temper. '",
      chinese2: '他遗传了他父亲的火暴性子。 ',
      liju3: ' They seized four containers of explosive materials in a carrier vehicle, but the driver escaped.   ',
      chinese3: '他们在一辆运输车上缴获了四个装有炸药的货箱，但是司机逃跑了。'
}
    ,
    {
      id: '1237',
      word: 'export',
      ciyi: '  n. 输出，出口；出口商品v.输出，出口   ',
      kaodian: '',
      liju1: '  A lot of our land is used to grow crops for export.    ',
      chinese1: '我们很多的土地用来种植出口作物。',
      liju2: "'Ghana's main export is cocoa. '",
      chinese2: ' 加纳的主要出口产品是可可。',
      liju3: ' The company now exports to Japan.  ',
      chinese3: '该公司现在对日本出口。'
}
    ,
    {
      id: '1238',
      word: 'expose ',
      ciyi: '   vt. 揭露，揭发；使曝光  ',
      kaodian: '',
      liju1: '  Lowered sea levels exposed the shallow continental shelf beneath the Bering Sea.   ',
      chinese1: '下降了的海平面使白令海底的浅大陆架露了出来。',
      liju2: ' Once who tries to be a quack will be exposed finally. ',
      chinese2: '试图冒充内行的人最终会被揭穿。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1239',
      word: 'exposure',
      ciyi: '   n. 暴露，揭露；受到  ',
      kaodian: '',
      liju1: '  No matter what level of exposure you have, your lung cells know it and they are responding.    ',
      chinese1: '无论你暴露在什么样的烟雾环境中，你的肺部细胞都知道，并且会起反应。',
      liju2: ' He undertook increasingly dangerous assignments until his exposure as a spy. ',
      chinese2: '在间谍身份暴露之前他一直从事日益危险的任务。 ',
      liju3: '  Continued exposure to stress has been linked to a worsened functioning of the immune system. ',
      chinese3: '一个人免疫系统功能的恶化与他持续处于的紧张状态有关。'
}
    ,
    {
      id: '1240',
      word: 'exquisite',
      ciyi: '  a. 精致的，优美的，高雅的；剧烈的；强烈的；敏感的，敏锐的  ',
      kaodian: '',
      liju1: ' The food and service are exquisite.     ',
      chinese1: '食品和服务都是很精致的。',
      liju2: ' Paul seemed convulsed with exquisite terror. ',
      chinese2: '保罗似乎因强烈的恐惧而抽搐着。 ',
      liju3: ' A musician needs a pair of exquisite ears for music.  ',
      chinese3: '音乐家需要对音乐有非常敏锐的听觉。'
}
    ,
    {
      id: '1241',
      word: 'extend ',
      ciyi: '   vt. 延伸；扩大；提供；给予  ',
      kaodian: '',
      liju1: '  The European powers extended their authority in Asia.    ',
      chinese1: '欧洲列强在亚洲扩大他们的管辖权。',
      liju2: ' We extended a warm welcome to the new students. ',
      chinese2: '我们对新同学表示热烈欢迎。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1242',
      word: 'extension',
      ciyi: '  n. 延长；扩大；伸展；电话分机   ',
      kaodian: '',
      liju1: '   This principle is an extension of both the commitment principle and the success principle.    ',
      chinese1: '这个原则是对承担义务原则和成功原则的一种扩展。',
      liju2: '  She can get me on extension 308. ',
      chinese2: '她可以通过分机308找到我。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1243',
      word: 'extensive ',
      ciyi: '   a. 广泛的，广大的；大量的  ',
      kaodian: '',
      liju1: '  The story had an extensive popularity among American readers.    ',
      chinese1: '这本小说在美国读者中赢得广泛的声望。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1244',
      word: 'extent',
      ciyi: '  n. 程度，限度；范围，长度，宽度   ',
      kaodian: '',
      liju1: ' Things are not yet carried to that extent.     ',
      chinese1: '事情还没有发展到那种程度。',
      liju2: ' This, it seems, was the extent of their multitasking.  ',
      chinese2: '这好像就是他们多任务的生活的范围。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1245',
      word: 'exterior',
      ciyi: '   a. 外部的，表面的n. 外部；外表   ',
      kaodian: '',
      liju1: '   The exterior walls were made of preformed concrete.    ',
      chinese1: '外墙是用预制混凝土建造的。',
      liju2: "' According to Mandy, Pat's tough exterior hides a shy and sensitive soul. '",
      chinese2: '据曼迪说，帕特坚强的外表下藏着一个害羞、敏感的灵魂。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1246',
      word: 'external ',
      ciyi: '  a. 外部的；表面的   ',
      kaodian: '',
      liju1: '   The factors that push you out of balance can be external or internal.    ',
      chinese1: '将你推出平衡之外的因素可以是外部的也可以是内部的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1247',
      word: 'extinct',
      ciyi: '   a. 灭绝的，绝种的；熄灭了的  ',
      kaodian: '',
      liju1: '   These animals have a distinct instinct of protecting themselves from being extinct.    ',
      chinese1: '这些动物有一种明显的本能,能保护自己不灭绝.',
      liju2: '  The extinct fire is still hissing. ',
      chinese2: ' 熄灭了的火仍在嘶嘶作响。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1248',
      word: 'extinguish',
      ciyi: '  vt. 熄灭；扑灭   ',
      kaodian: '',
      liju1: '   Look for and extinguish small fires. Eliminate fire hazards.    ',
      chinese1: '查找和扑灭小型火灾，以消除火灾危险。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1249',
      word: 'extract',
      ciyi: ' vt. 提取，取出；摘录n. 精华，榨出物；摘录   ',
      kaodian: ' ',
      liju1: '  Wood ashes are leached to extract lye.     ',
      chinese1: '木炭被滤过以提取碱液。',
      liju2: ' This material has been extracted from "Collins Good Wood Handbook." ',
      chinese2: '该资料摘自《柯林斯良木手册》。 ',
      liju3: '  Petroleum engineers plan and manage the extraction of oil.  ',
      chinese3: '石油工程师们规划并管理石油的提炼。',
      liju3: ' Language teachers often extract examples from grammar books.   ',
      chinese3: '语言教师常从语法书里摘录例子。'
}
    ,
    {
      id: '1250',
      word: 'extraordinary',
      ciyi: '  a. 非凡的；特别的；格外的   ',
      kaodian: '',
      liju1: '  The task requires extraordinary patience and endurance.   ',
      chinese1: '这项工作需要非凡的耐心和毅力。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1251',
      word: 'extravagant',
      ciyi: ' a. 奢侈的；浪费的；过分的；放肆的   ',
      kaodian: '',
      liju1: '  We are not extravagant; restaurant meals are a luxury and designer clothes are out.    ',
      chinese1: '我们并不浪费；餐馆用餐是一种奢侈，品牌服装也与我们无缘。',
      liju2: 'He was extravagant in his admiration of Hellas.  ',
      chinese2: ' 他对希腊的崇拜过了头。',
      liju3: ' Mr. Duncan was extravagant in conduct at party yesterday.  ',
      chinese3: '在昨晚的聚会上，邓肯先生的行为极为放肆。'
}
    ,
    {
      id: '1252',
      word: 'extreme ',
      ciyi: '  a. 极端的；极度的；尽头的n. 极端；最大程度   ',
      kaodian: '',
      liju1: '    There was extreme method in his madness.   ',
      chinese1: '在他的疯狂中有极端的方法。',
      liju2: ' The hunter lives at the extreme edge of the forest. ',
      chinese2: '猎人住在森林尽头。 ',
      liju3: '  He presents an extreme vision of the polis.   ',
      chinese3: '他呈现出一种极端版本的城邦。'
}
    ,
    {
      id: '1253',
      word: 'eyebrow',
      ciyi: '   n. 眉毛  ',
      kaodian: '',
      liju1: '  Her hair is white and shorn, and she has three silver rings in each eyebrow.     ',
      chinese1: '她的头发是白色的，箍在一起，眉毛旁边围绕着三个银饰。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1254',
      word: 'eyesight',
      ciyi: '   n. 视力  ',
      kaodian: '',
      liju1: "'  My grandfather's eyesight is going.'",
      chinese1: '我祖父的视力在减退。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1255',
      word: 'fable',
      ciyi: '  n. 寓言    ',
      kaodian: '',
      liju1: '  He had some motive in telling this fable.     ',
      chinese1: '他讲这寓言故事是有用意的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1256',
      word: 'fabric ',
      ciyi: '   n. 织物；组织；结构  ',
      kaodian: '',
      liju1: '   The fabric of society has been deeply damaged by the previous regime.   ',
      chinese1: '社会结构已被上届执政者严重地破坏了。',
      liju2: ' This was before the industrial revolution and so without all that spinning there would have been no fabric. ',
      chinese2: '这种状况发生在工业革命之前，因此，没有诸如此类的纺纱，就不会有织物。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1257',
      word: 'fabricate ',
      ciyi: '   vt. 制造；创造；编造（谎言、借口等），捏造   ',
      kaodian: '',
      liju1: '   The finest crafts people fabricated this golden ring.   ',
      chinese1: '这枚金戒指是由最优秀的工匠制作的。',
      liju2: ' It angers me that people would fabricate a story like that.   ',
      chinese2: '我十分气愤人们竟然这么会编造谎言。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1258',
      word: 'fabulous',
      ciyi: '  a. 极为巨大的，寓言式的，传奇式的；极好的   ',
      kaodian: '',
      liju1: '  Victor and Anna have a fabulous art collection.    ',
      chinese1: '维克多和安娜收藏了很多艺术品。',
      liju2: ' In their eyes, Benjamin is such kind of a fabulous hero. ',
      chinese2: ' 在他们的眼里，本杰明就是这种传奇式英雄人物。',
      liju3: ' I think it’s a fabulous question, and imagine she’s not the only one struggling with this issue.   ',
      chinese3: '我认为这是一个极好的问题，并且推断她不是唯一为此问题而烦恼的人。'
}
    ,
    {
      id: '1259',
      word: 'facilitate',
      ciyi: ' vt. 使便利；使容易    ',
      kaodian: '',
      liju1: '  Modern inventions facilitate housework.     ',
      chinese1: '许多现代发明便利了家务劳动。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1260',
      word: 'facility',
      ciyi: '  n. 设施，设备，便利条件；天赋，才能   ',
      kaodian: '',
      liju1: ' He and Marcia shared a facility for languages.    ',
      chinese1: '他和马西娅都具有语言天赋。',
      liju2: ' It describes completely the facility and its safety basis.    ',
      chinese2: ' 它完整的描述了设备,和它的安全基础。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1261',
      word: 'factor ',
      ciyi: '   n. 因素；要素  ',
      kaodian: '',
      liju1: '   Physical activity is an important factor in maintaining fitness.   ',
      chinese1: '体育活动是保持健康的一个重要因素。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1262',
      word: 'faculty',
      ciyi: '  n.全体教员；科，系；才能   ',
      kaodian: '',
      liju1: '   How can faculty improve their teaching so as to encourage creativity?   ',
      chinese1: '全体教员怎样才能改进教学以便激发创造力？',
      liju2: '  Jessica has a remarkable faculty for learning languages. ',
      chinese2: '杰西卡具有非凡的语言学习能力。 ',
      liju3: '  Jane is a member of the faculty at the university. ',
      chinese3: '简是这所大学的一名教员。'
}
    ,
    {
      id: '1263',
      word: 'fade',
      ciyi: '   v. 褪色；衰减，消失  ',
      kaodian: '',
      liju1: '  Beauty will fade, but not goodness.     ',
      chinese1: '美貌会凋谢，但美德不会。',
      liju2: ' The blue rug has faded over years.  ',
      chinese2: ' 蓝色的地毯多年后已经褪色了。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1264',
      word: 'failure',
      ciyi: '  n. 失败；故障；失败者；未能   ',
      kaodian: '',
      liju1: '  This policy is doomed to failure.    ',
      chinese1: '这项政策注定要失败。',
      liju2: 'There were also several accidents mainly caused by engine failures on take-off.  ',
      chinese2: '还有一些事故主要是由起飞时引擎故障导致的。 ',
      liju3: ' Elgar received many honours and much acclaim and yet he often considered himself a failure.  ',
      chinese3: '埃尔加获得了很多荣誉和欢呼，但是他常常把自己看成一个失败者。',
      liju3: 'Mary was very disappointed at Tom’s failure to keep his promise.  ',
      chinese3: '玛丽对汤姆未能遵守诺言而感到非常失望。'
}
    ,
    {
      id: '1265',
      word: 'fairy',
      ciyi: '   n. 仙女，小精灵  ',
      kaodian: '',
      liju1: '  The good fairy made Cinderella’s coach come by magic.   ',
      chinese1: '善良的仙女使用魔力赶来了灰姑娘的马车。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1266',
      word: 'faithful',
      ciyi: '    a. 守信的，忠诚的；如实的 ',
      kaodian: '',
      liju1: '  After a few years of faithful service, she rose to head nurse.      ',
      chinese1: '她忠实地工作了几年之后，升为护士长。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1267',
      word: 'faithfully',
      ciyi: '  ad. 忠实地；如实地   ',
      kaodian: '',
      liju1: '  He faithfully lived up to his promise.     ',
      chinese1: '他忠实地实践了他的诺言。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1268',
      word: 'fake',
      ciyi: '   n. 假货；骗子vt.伪造；伪装a. 伪造的  ',
      kaodian: '',
      liju1: '  That was not a real diamond necklace. It’s just a fake.    ',
      chinese1: '那不是真的钻石项链，不过是个假货而已。',
      liju2: "' I think Jack is a good man. He isn't a fake. '",
      chinese2: '我认为杰克是个好人。他不是一个骗子。 ',
      liju3: ' He tried to fake sincerity as he smiled at them.  ',
      chinese3: '当他朝他们笑的时候，他设法假装真诚。',
      liju4: "' The bank manager is said to have issued fake certificates. '",
      chinese4: '据说这个银行经理曾出具过伪造的假凭证。'
}
    ,
    {
      id: '1269',
      word: 'fame',
      ciyi: '  n. 名声，名望   ',
      kaodian: '',
      liju1: '  The scandal will not detract from her fame.     ',
      chinese1: '这件丑闻将无损于她的名声。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1270',
      word: 'famine',
      ciyi: '  n. 饥荒；饥饿   ',
      kaodian: '',
      liju1: ' Thousands of refugees are trapped by war, drought and famine.     ',
      chinese1: '成千上万的难民陷于战争、干旱和饥荒的困境。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1271',
      word: 'fancy',
      ciyi: '   n. 喜爱，爱好；设想，想像a. 异样的；奇特的vt.想象；设想  ',
      kaodian: '',
      liju1: '   I have a fancy for antique cars.    ',
      chinese1: '我很喜欢古董车。',
      liju2: ' It doesn’t require any fancy software or planning system.  ',
      chinese2: '它不需要任何的想象和软件或者计划系统。 ',
      liju3: ' The magazine was packaged in a fancy plastic case with attractive graphics.  ',
      chinese3: '这本杂志装在一个带有漂亮图纹的别致塑料盒子里。',
      liju4: "'  It is a common error for people to fancy others in their own situation. '",
      chinese4: '人们常犯的错误是从他们自己的角度去设想别人。'
}
    ,
    {
      id: '1272',
      word: 'fantastic(al)',
      ciyi: '  a. 奇异的；幻想的；异想天开的；极好的   ',
      kaodian: '',
      liju1: '   I have a fantastic social life.    ',
      chinese1: '我有着极好的社交生活。',
      liju2: '  The boy’s ideas were too fantastic at times. ',
      chinese2: '有时候，那个男孩的想法太异想天开了。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1273',
      word: 'fantasy ',
      ciyi: '  n. 幻想；想象；幻想的产物   ',
      kaodian: '',
      liju1: '  The film is more of an ironic fantasy than a horror story.    ',
      chinese1: '这部电影比较像是讽刺的幻想故事，而不是恐怖片。',
      liju2: ' The writer’s adventurous story is a fantasy. ',
      chinese2: ' 这位作家的冒险故事是幻想的产物。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1274',
      word: 'fare',
      ciyi: '  vi.进展；过活n. 费用；船费   ',
      kaodian: '',
      liju1: '  He fared well on his trip.     ',
      chinese1: '他旅途进展顺利。',
      liju2: ' He could barely afford the fare. ',
      chinese2: ' 他几乎付不起车费。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1275',
      word: 'farewell',
      ciyi: ' n. 告别，再见int. 别了！再会    ',
      kaodian: '',
      liju1: '  They said their farewells there at the cafe.    ',
      chinese1: '他们在咖啡馆那儿道了别。',
      liju2: ' Farewell，my dear friend. ',
      chinese2: '再见，我亲爱的朋友。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1276',
      word: 'fascinate',
      ciyi: '  vt. 使着迷，强烈吸引  ',
      kaodian: '',
      liju1: "'  Politics fascinated Franklin's father. '",
      chinese1: '政治让富兰克林的父亲着迷。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1277',
      word: 'fascinated',
      ciyi: '   a. 着迷的；兴奋的  ',
      kaodian: '',
      liju1: "'The actress's beauty fascinated everyone.'",
      chinese1: '女演员的美貌迷住了每一个人。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1278',
      word: 'fashion',
      ciyi: '   n. 时尚；风气；方式，样子  ',
      kaodian: '',
      liju1: '  You may focus on one aspect of fashion or every aspect.      ',
      chinese1: '你可以专注于时尚的某一方面或者方方面面。',
      liju2: 'Tom behaved in a very strange fashion today.  ',
      chinese2: '今天汤姆的举止很奇怪。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1279',
      word: 'fashionable',
      ciyi: ' a. 流行的；时髦的   ',
      kaodian: '',
      liju1: '    She wears a fashionable hair style prevailing in the city.    ',
      chinese1: '她的发型是这个城市流行的款式。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1280',
      word: 'fasten',
      ciyi: '  vt. 使固定；扎牢  ',
      kaodian: '',
      liju1: '   She got quickly into her Mini and fastened the seat-belt.    ',
      chinese1: '她迅速钻进她的迷你车并系好安全带。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1281',
      word: 'fatal ',
      ciyi: '  a. 致命的；毁灭性的  ',
      kaodian: '',
      liju1: '   This short-sighted policy led to fatal results.     ',
      chinese1: '这个目光短浅的政策导致了致命的后果。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1282',
      word: 'fate',
      ciyi: '   n. 命运  ',
      kaodian: '',
      liju1: '  I see no use arguing with fate.     ',
      chinese1: '我认为与命运抗争没有什么用。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1283',
      word: 'fatigue',
      ciyi: '  n. 疲劳，疲乏   ',
      kaodian: '',
      liju1: '  Your emotions overrule your stomach and fatigue.      ',
      chinese1: '你的情绪否决了你的肚子和疲劳。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1284',
      word: 'fatigued',
      ciyi: '  a. 疲乏的   ',
      kaodian: '',
      liju1: '   It also helps many moms when they are feeling fatigued or even nauseated.     ',
      chinese1: '在妈妈们感到疲乏或者恶心的时候，它也能帮上忙。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1285',
      word: 'faulty',
      ciyi: '  a. 有错误的；有缺点的   ',
      kaodian: '',
      liju1: '   Their interpretation was faulty —— they had misinterpreted things.   ',
      chinese1: '他们的解释是错误的——他们曲解了事物。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1286',
      word: 'favo(u)rable',
      ciyi: '  a. 有利的；良好的；赞许的   ',
      kaodian: '',
      liju1: '    These favorable anticipations have been realized.    ',
      chinese1: '这些有利的期望已被实现。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1287',
      word: 'favo(u)rite ',
      ciyi: '  n. 最喜欢的人或事物；特别喜欢的   ',
      kaodian: '',
      liju1: ' The park is a favorite spot for the students to romance their girl-friends.      ',
      chinese1: '公园是学生们最喜欢与女友谈情说爱的场所。',
      liju2: '  His favorite hobby was collecting photographs of cars. ',
      chinese2: '他特别喜欢的爱好是收集汽车照片。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1288',
      word: 'fearful',
      ciyi: '   a. 可怕的；担心的  ',
      kaodian: '',
      liju1: '   He felt like doing something fearful.     ',
      chinese1: '他想要做些可怕的事情。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1289',
      word: 'feasible',
      ciyi: '   a. 可行的  ',
      kaodian: '',
      liju1: '   We all think this proposal feasible.     ',
      chinese1: '大家认为这个建议是可行的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1290',
      word: 'feast',
      ciyi: '  n. 筵席，宴会；节日   ',
      kaodian: '',
      liju1: '  The fruit was often served at wedding feasts.    ',
      chinese1: '婚宴上常有水果供应。',
      liju2: ' The Jewish feast of Passover began last night. ',
      chinese2: '犹太人的宗教节日逾越节昨晚开始了。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1291',
      word: 'feat',
      ciyi: '   n. 功绩，壮举  ',
      kaodian: '',
      liju1: "'Man's first landing on the moon was a feat of great daring.     '",
      chinese1: '人类首次登月是一个勇敢的壮举。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1292',
      word: 'feature',
      ciyi: '  n. 特色，特征；特写；v. 以…为特色（或特征）   ',
      kaodian: '',
      liju1: '   Round-the-clock service features this store.    ',
      chinese1: '日夜服务是这家商店的特色。',
      liju2: ' The feature on the girl was pegged on her experiences.   ',
      chinese2: '有关这个女孩子的特写是依据她的经历写成的。 ',
      liju3: ' Patriotic songs have long been a feature of Kuwaiti life.  ',
      chinese3: '爱国歌曲长期以来一直是科威特人生活的一个特点。'
}
    ,
    {
      id: '1293',
      word: 'federal',
      ciyi: '   a. 联邦的  ',
      kaodian: '',
      liju1: '   The federal government controls just 6% of the education budget.   ',
      chinese1: '联邦政府只掌控教育预算的6％。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1294',
      word: 'fee',
      ciyi: '  n. 费用；酬金   ',
      kaodian: '',
      liju1: '  You pay one fee and then get all you want.      ',
      chinese1: '你付一次费用就可以得到所有你想要的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1295',
      word: 'feeble',
      ciyi: '   a. 无力的；虚弱的  ',
      kaodian: '',
      liju1: '   He told them he was old and feeble and was not able to walk so far.      ',
      chinese1: '他告诉他们自己年老体弱，不能走那么远。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1296',
      word: 'feedback',
      ciyi: '  n. 反馈；回复   ',
      kaodian: '',
      liju1: '  We want to share our feedback and discuss this in the working group.       ',
      chinese1: '我们希望在这个工作组的每位能分享我们的反馈和讨论。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1297',
      word: 'fell',
      ciyi: '  vt.砍伐；打倒；击倒  ',
      kaodian: '',
      liju1: '    We will fell these trees.       ',
      chinese1: '我们将砍伐这些树。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1298',
      word: 'fellowship ',
      ciyi: '  n. 友谊；团体   ',
      kaodian: '',
      liju1: '     Tom tried to promote good fellowship with Joanna.    ',
      chinese1: '汤姆努力增进与乔安娜的友谊。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1299',
      word: 'female',
      ciyi: '   a. 女性的；雌性的  ',
      kaodian: '',
      liju1: "'Don't let her join us, who will hex us as a female. '",
      chinese1: '别让她参加咱们的活动，女人会给咱们带来厄运的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1300',
      word: 'feminine',
      ciyi: '  a. 女性的；娇柔的  ',
      kaodian: '',
      liju1: "'I've always been attracted to very feminine women who are not overpowering.'",
      chinese1: '我总是被那些不强悍的女人味十足的女人所吸引。',
      liju2: ' Annie waved her hand in a feminine way to say goodbye.  ',
      chinese2: ' 安妮娇柔地挥了挥手说再见。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1301',
      word: 'ferry',
      ciyi: '  n. 渡船；渡口vt.（乘渡船）渡过；用渡船运送   ',
      kaodian: '',
      liju1: '  They had recrossed the River Gambia by ferry.       ',
      chinese1: '他们乘船又一次渡过了冈比亚河。',
      liju2: ' Every day, a plane arrives to ferry guests to and from Bird Island Lodge. ',
      chinese2: '每天，一架飞机到达以运送进出鸟岛宾馆的客人。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1302',
      word: 'fertile',
      ciyi: '  a. 富饶的，肥沃的；能繁殖的    ',
      kaodian: '',
      liju1: '     The plants luxuriated in the fertile soil.     ',
      chinese1: '植物在肥沃的土壤里茂盛生长。',
      liju2: ' The operation cannot be reversed to make her fertile again. ',
      chinese2: '手术不可逆转，无法使她重获生育能力。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1303',
      word: 'fertilizer/fertiliser',
      ciyi: '   n. 化肥  ',
      kaodian: '',
      liju1: '   That increase happened primarily through the use of artificial fertiliser in countries such as India and China.       ',
      chinese1: '粮食产量的增长主要是因为在印度和中国这样的国家使用了人造肥料。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1304',
      word: 'festival',
      ciyi: ' n. 节日，欢宴；音乐节，戏剧节   ',
      kaodian: '',
      liju1: '    Many towns hold their own summer festivals of music, theatre, and dance.     ',
      chinese1: '很多城市都举办自己的夏季音乐、戏剧和舞蹈节。',
      liju2: ' The attendants at the festival were averaged at about one hundred persons.  ',
      chinese2: '参加节庆的人大约有百人之众。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1305',
      word: 'feudal',
      ciyi: '  a. 封建的   ',
      kaodian: '',
      liju1: '  The information age, like the feudal age, began with a simple innovation.       ',
      chinese1: '信息时代和封建时代一样肇始于一个简单的创新。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1306',
      word: 'fibre/fiber',
      ciyi: '   n. 纤维；光纤  ',
      kaodian: '',
      liju1: '    While they bite into the fruit, they could savor the various blends of fiber and juices.     ',
      chinese1: '当他们咬一口水果，他们可以尝到各种水果纤维和汁液的混合。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1307',
      word: 'fiction',
      ciyi: '  n. 小说；虚构，编造   ',
      kaodian: '',
      liju1: '   Immigrant tales have always been popular themes in fiction.      ',
      chinese1: '移民故事一直是小说的流行主题。',
      liju2: ' Fact is inextricably commingled with fiction.  ',
      chinese2: '事实与虚构混杂难分。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1308',
      word: 'fierce',
      ciyi: '  a. 凶猛的，残忍的；激烈的，狂热的   ',
      kaodian: '',
      liju1: '   They look like the teeth of some fierce animal.      ',
      chinese1: '它们看上去像是某种猛兽的牙齿。',
      liju2: '  Some students riot in fierce argument.  ',
      chinese2: '有些学生热衷于激烈的辩论。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1309',
      word: 'file',
      ciyi: '  n. 文件；档案；锉刀vt. 锉；琢磨   ',
      kaodian: '',
      liju1: ' It is too much trouble to crunch a file unless you use it often.         ',
      chinese1: '除非经常用这些文件，不然压缩时很费事。',
      liju2: ' Jane used a file to smooth the rough places on the railing. ',
      chinese2: ' 简用锉刀把扶手上粗糙的地方给磨平了。',
      liju3: '  Manicurists are skilled at shaping and filing nails.  ',
      chinese3: '美甲师对修剪，锉光指甲很在行。'
}
    ,
    {
      id: '1310',
      word: 'filter ',
      ciyi: '   vi. 滤过；渗入n. 滤波器；过滤器；滤纸  ',
      kaodian: '',
      liju1: '   Filter out all the dirt before using the water.      ',
      chinese1: '在用这水之前先将其中所有污物滤去。',
      liju2: 'You might use a yellow filter to improve the clarity of a hazy horizon.  ',
      chinese2: '你可以用一个黄色滤光器来提高模糊的地平线的清晰度。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1311',
      word: 'finance',
      ciyi: '  n. 财政，金融vt.供给…经费   ',
      kaodian: '',
      liju1: ' The report recommends an overhaul of public finances.       ',
      chinese1: '这份报告建议对公共财政进行彻底检视。',
      liju2: ' The government financed our construction loan. ',
      chinese2: '政府为我们提供了建设贷款。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1312',
      word: 'financial',
      ciyi: '  a. 金融的；财政的   ',
      kaodian: '',
      liju1: '    The strength of our country bulwarked us through the financial crisis.      ',
      chinese1: '我国的实力使我们得以安然渡过这次金融危机。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1313',
      word: 'finding',
      ciyi: '  n. 发现；发现物；调查结果   ',
      kaodian: '',
      liju1: '  I found it difficult to understand him.      ',
      chinese1: '我发觉了解他是很难的。',
      liju2: ' One of the main findings of the survey was the confusion about the facilities already in place. ',
      chinese2: '该调查的主要发现之一是对已安装到位的设备的混淆。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1314',
      word: 'finite',
      ciyi: ' a. 有限的；限定的   ',
      kaodian: '',
      liju1: '   Natural resources are finite on the earth.      ',
      chinese1: '地球上的自然资源是有限的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1315',
      word: 'fireplace',
      ciyi: '   n. 壁炉  ',
      kaodian: '',
      liju1: '  He tapped his pipe out into the fireplace.        ',
      chinese1: '他把烟斗的烟灰敲到壁炉里。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1316',
      word: 'fiscal ',
      ciyi: '  a.财政的，国库的   ',
      kaodian: '',
      liju1: '   The accountants audited the company’s books at the end of the fiscal year.      ',
      chinese1: '财政年度结束时，会计师们审查公司的账册。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1317',
      word: 'fisherman',
      ciyi: ' n. 渔夫；渔人   ',
      kaodian: '',
      liju1: '   The Algarve is a paradise for fishermen whether river anglers or deep-sea fishermen.      ',
      chinese1: ' 阿尔加维对河边的垂钓者或深海的渔民都是一个天堂。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1318',
      word: 'fitting',
      ciyi: '  n. 配件，装置；安装a. 适合的，恰当的  ',
      kaodian: '',
      liju1: '    Mary is wrapped in a tight fitting evening dress.     ',
      chinese1: '玛丽穿了一件合体的紧身晚礼服。',
      liju2: ' The workers finished the gas fitting of the building. ',
      chinese2: '工人们完成了大楼的煤气安装。 ',
      liju3: '  The ship is like a furnace, and its brass fitting are too hot to touch.  ',
      chinese3: '这艘船像火炉一样，它的黄铜配件烫的让人没法去碰。'
}
    ,
    {
      id: '1319',
      word: 'fixture',
      ciyi: ' n. 固定；固定装置  ',
      kaodian: '',
      liju1: '  The highway is an important fixture in this region.       ',
      chinese1: '公路是该地区一项重要的固定设施。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1320',
      word: 'flame',
      ciyi: '  n. 火焰；热情；光辉v. 焚烧；燃烧 ',
      kaodian: '',
      liju1: '   The heat from the flames was so intense that roads melted.      ',
      chinese1: '火焰的热度如此高以至于路面融化了。',
      liju2: 'The flames of passion burned inside John when he saw his wife.  ',
      chinese2: ' 见到妻子时，约翰心中激情荡漾。',
      liju3: ' The moon’s flame brightened the vast expanse of snow.  ',
      chinese3: '月光照亮了广袤的雪原。'
}
    ,
    {
      id: '1321',
      word: 'flap',
      ciyi: '  n.垂下物；慌张，紧张v.拍打；扔 ',
      kaodian: '',
      liju1: '   I tied the tent flap close to keep out the rain.      ',
      chinese1: '我把帐篷檐系紧了以防雨水进入。',
      liju2: ' Nancy is in a bit of a flap over the wedding plans. ',
      chinese2: '南希对结婚计划有一点慌张。 ',
      liju3: '  The bird flapped its wings and flew away.  ',
      chinese3: '鸟儿拍打着翅膀飞走了。'
}
    ,
    {
      id: '1322',
      word: 'flare',
      ciyi: '  vt. 闪耀，闪烁；突然烧起来，突然发怒n. 闪光，闪耀 ',
      kaodian: '',
      liju1: '   Hundreds of stars flared in the night sky.      ',
      chinese1: '几百颗星星在夜空中闪烁。',
      liju2: "'Don't spill too much fat on the barbecue as it could flare up.  '",
      chinese2: '不要在烤肉上浇太多的油，因为它可能会突然烧起来。 ',
      liju3: ' The flare of a flashlight in the darkness gave them the hope to survive.  ',
      chinese3: '黑暗中闪耀的手电筒的光线给了他们生还的希望。'
}
    ,
    {
      id: '1323',
      word: 'flash',
      ciyi: ' vt. 闪现n. 闪光，闪现vi. 闪光，闪现 ',
      kaodian: '',
      liju1: ' The lighthouse flashes signal twice a minute.       ',
      chinese1: '灯塔一分钟发两次闪光信号。',
      liju2: '  Stopping to rest, Pete shut off the flash. ',
      chinese2: '停下来休息的时候，皮特关掉了手电筒。 ',
      liju3: '   The thought flashed through my mind that he could be lying. ',
      chinese3: '我心中闪过一个想法：他可能在撒谎。'
}
    ,
    {
      id: '1324',
      word: 'flatter',
      ciyi: '  vt. 奉承；使高兴 ',
      kaodian: '',
      liju1: '    Friends who flatter you to your face are not true friends.      ',
      chinese1: '凡是当面奉承你的朋友不是真朋友。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1325',
      word: 'flaw',
      ciyi: '  n. 瑕疵，缺陷；裂缝，裂纹 ',
      kaodian: '',
      liju1: '    The narrowness of the diamond is a flaw, but no system is without them.      ',
      chinese1: '钻石型中场的狭窄是个缺陷，但是不存在完美无缺的战术体系。',
      liju2: ' My mother found several flaws in the dish. ',
      chinese2: '我妈妈发现盘子上有几处裂缝。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1326',
      word: 'flee',
      ciyi: '  vi. 逃走，逃避；消失，消散 ',
      kaodian: '',
      liju1: '  He slammed the bedroom door behind him and fled.       ',
      chinese1: '他砰地关上卧室的门就逃走了。',
      liju2: '  The clouds are fleeting before wind. ',
      chinese2: '云在风前飞驰而过。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1327',
      word: 'fleet ',
      ciyi: '  n. 舰队，船队 ',
      kaodian: '',
      liju1: ' A fleet sailed for New South Wales to establish the first European settlement in Australia.       ',
      chinese1: '一支舰队驶向新南威尔士去建立欧洲在澳大利亚的第一个移民地。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1328',
      word: 'flesh',
      ciyi: ' n. 肉；肉体  ',
      kaodian: '',
      liju1: '     The flesh around the ankle had swollen up.     ',
      chinese1: '脚踝四周的皮肉肿起来了。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1329',
      word: 'flexible ',
      ciyi: '  a. 灵活的；柔韧的；易弯曲的；弹性的 ',
      kaodian: '',
      liju1: '     In this way, you can be flexible in understanding the binding requirements.    ',
      chinese1: '以这样的方式，在理解绑定需求的时候你可以很灵活。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1330',
      word: 'fling',
      ciyi: '  vt. 掷，抛，丢  ',
      kaodian: '',
      liju1: '   The woman flung the cup at him.      ',
      chinese1: '那女人使劲把杯子朝他扔过去。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1331',
      word: 'flock',
      ciyi: ' n. 群；大量；众多 vi. 聚集；成群而行  ',
      kaodian: '',
      liju1: '  A flock of sheep are ranging over the grassland.        ',
      chinese1: '一群羊在草原上来回走动。',
      liju2: ' These cases all attracted flocks of famous writers.  ',
      chinese2: '这些案例均吸引了大批知名作家。 ',
      liju3: '  The criticisms will not stop people flocking to see the film.  ',
      chinese3: '这些批评阻止不了涌向看这部影片的人潮。'
}
    ,
    {
      id: '1332',
      word: 'flour ',
      ciyi: '  n. 面粉 ',
      kaodian: '',
      liju1: '    He added some flour to thicken the soup.      ',
      chinese1: '他加了一些面粉使汤浓些。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1333',
      word: 'flourish',
      ciyi: '  vi. 繁荣，兴旺；茂盛 ',
      kaodian: '',
      liju1: '  Those plants you gave me are flourishing.       ',
      chinese1: '你给我的那些植物长得茂盛。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1334',
      word: 'flu ',
      ciyi: ' n. 流感  ',
      kaodian: '',
      liju1: '   Most of my colleagues have gone down with flu.      ',
      chinese1: '我的大多数同事因流感而病倒了。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1335',
      word: 'fluctuate',
      ciyi: '  vi. 波动；涨落；起伏 ',
      kaodian: '',
      liju1: '    The latest data continue to show that suicide statistics in the Army frequently fluctuate.      ',
      chinese1: '最近的数据进一步表明，军队中的自杀统计结果经常波动。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1336',
      word: 'fluent',
      ciyi: '  a. 流畅的，流利的 ',
      kaodian: '',
      liju1: '  Please use fluent English to encourage others!        ',
      chinese1: '请用流利的英语去鼓励别人',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1337',
      word: 'fluid',
      ciyi: '  a. 流动的；流畅的n. 流体；液体 ',
      kaodian: '',
      liju1: '  His painting became less illustrational and more fluid.      ',
      chinese1: '他的画变得更为流畅，没那么生硬了。',
      liju2: '  The blood vessels may leak fluid, which distorts vision. ',
      chinese2: '血管可能渗漏出液体，扰乱视觉。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1338',
      word: 'flush',
      ciyi: 'n.面红vt.脸红，使发亮；用水冲洗a. 同高的；齐平的  ',
      kaodian: '',
      liju1: '   She began to flush with excitement.       ',
      chinese1: '她由于激动脸开始发红。',
      liju2: '  He flushed when he saw her. ',
      chinese2: '他一看到她就脸发红。 ',
      liju3: '   The toilet flushed. ',
      chinese3: '抽水马桶放水冲洗。'
}
    ,
    {
      id: '1339',
      word: 'foam',
      ciyi: '  n. 泡沫；水沫vi. 起泡沫；吐白沫 ',
      kaodian: '',
      liju1: '   The water curved round the rocks in great bursts of foam.      ',
      chinese1: '水流卷绕着岩石产生大量的泡沫。',
      liju2: ' The ocean foamed like a roaring cataract towards the beach. ',
      chinese2: '大海吐着泡沫，想咆哮的大瀑布一般像海滩涌来。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1340',
      word: 'focus',
      ciyi: 'n. 焦点；中心；焦距vi. 集中；聚焦  ',
      kaodian: '',
      liju1: "'  The UN's role in promoting peace is increasingly the focus of international attention.'",
      chinese1: '联合国在促进和平方面的作用越来越成为国际关注的焦点。',
      liju2: ' All eyes were focused on him. ',
      chinese2: '所有的目光都集中在他身上。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1341',
      word: 'fog',
      ciyi: '  n. 雾；烟雾 ',
      kaodian: '',
      liju1: '   The crash happened in thick fog.      ',
      chinese1: '这次撞车发生在浓雾中。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1342',
      word: 'folk',
      ciyi: '  n. 民族；人们a. 民间的 ',
      kaodian: '',
      liju1: "'I've been avoiding my folks lately.       '",
      chinese1: '我最近一直在避开家人。',
      liju2: 'Folk art covers a wide range.   ',
      chinese2: '民间艺术包罗甚广。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1343',
      word: 'following',
      ciyi: '  a. 下面的；其次的，接着的 ',
      kaodian: '',
      liju1: '   We went to dinner the following Monday evening.     ',
      chinese1: '在接下来的那个周一晚上我们一起共进晚餐。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1344',
      word: 'footstep',
      ciyi: ' n. 脚步；脚步声；足迹  ',
      kaodian: '',
      liju1: ' I heard footsteps outside.       ',
      chinese1: '我听到外面的脚步声。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1345',
      word: 'forbid',
      ciyi: ' vt. 禁止；不许  ',
      kaodian: '',
      liju1: '   She was shut away and forbidden to read.      ',
      chinese1: '她被关起来不许读书。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1346',
      word: 'fore ',
      ciyi: '  a. 以前的；在前部的ad. 在前面；在船头 ',
      kaodian: '',
      liju1: '   There had been no direct damage in the fore part of the ship.      ',
      chinese1: '没有对船的前部造成直接损坏。',
      liju2: ' The captain went fore to check the direction. ',
      chinese2: '船长走到船头检查方法。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1347',
      word: 'forecast',
      ciyi: '  vt. 预报，预测 n. 预测，预报 ',
      kaodian: '',
      liju1: '  The teacher forecast that 15 of his pupils would pass the examination.      ',
      chinese1: '这位教师预测他的学生将有15名通过考试。',
      liju2: '  Sometimes the weather forecast is accurate, sometimes not.  ',
      chinese2: '天气预报有的时候准，有的时候不准。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1348',
      word: 'forehead ',
      ciyi: '  n. 额，前额 ',
      kaodian: '',
      liju1: '   Her forehead was flushed with fever.       ',
      chinese1: '她的前额由于发烧而发烫。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1349',
      word: 'foremost',
      ciyi: ' a. 最重要的；最先的ad. 首先；居于首位 地 ',
      kaodian: '',
      liju1: "'He was one of the world's foremost scholars of ancient Indian culture.'",
      chinese1: '他是世界上最优秀的古印度文化学者之一。',
      liju2: '  First and foremost, I’d like to thank John for his help. ',
      chinese2: '首先，我要感谢约翰的帮忙。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1350',
      word: 'foresee',
      ciyi: '  vt. 预见；预知 ',
      kaodian: '',
      liju1: ' It is difficult to foresee the consequences that may arise from this action.        ',
      chinese1: '预见这一行动可能产生的后果是困难的。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1351',
      word: 'forge ',
      ciyi: '  n.锻铁炉；锻工车间 vi.稳步前进vt.伪造；锻造 ',
      kaodian: '',
      liju1: '  The blacksmith placed the iron in the forge.       ',
      chinese1: '锻铁将铁放入熔炉。',
      liju2: '  Although the road was covered with snow, we forged ahead. ',
      chinese2: '尽管道路被雪覆盖了，我们仍然稳步前进。 ',
      liju3: '  The smith forged the horseshoe with great skill.  ',
      chinese3: '那铁匠非常熟练地锻造马蹄铁。'
}
    ,
    {
      id: '1352',
      word: 'formal',
      ciyi: '  a. 正式的；形式的 ',
      kaodian: '',
      liju1: ' He wrote a very formal letter of apology to Douglas.       ',
      chinese1: '他写了一封非常正式的道歉信给道格拉斯。',
      liju2: 'You arrived at your conclusion using the methods of formal logic.  ',
      chinese2: '你这个结论是按照形式逻辑的方法推论出来的。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1353',
      word: 'format',
      ciyi: 'n. 格式；版式 vt. 安排版式，格式化  ',
      kaodian: '',
      liju1: ' His latest album is available on all formats.       ',
      chinese1: '他的最新专辑有各种格式可以买到。',
      liju2: ' I really like the format.   ',
      chinese2: '我真的喜欢那样的版式。 ',
      liju3: ' When text is saved from a Web page, it is often very badly formatted with many short lines.  ',
      chinese3: '文本从网页上另存时版式通常会变乱，出现很多短行。'
}
    ,
    {
      id: '1354',
      word: 'formation',
      ciyi: '  n. 形成；构造 ',
      kaodian: '',
      liju1: '  These disks are the remnants of planetary formation.       ',
      chinese1: '这些圆盘是行星形成的剩余物质。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1355',
      word: 'former',
      ciyi: 'a. 从前的，前者的；前任的pron. 前者  ',
      kaodian: '',
      liju1: '  John chanced upon a former colleague of his at the airport.        ',
      chinese1: '约翰在机场偶然碰到一个以前的同事。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1356',
      word: 'formidable',
      ciyi: ' a. 强大的，难以应付；可怕的；令人敬畏的 ',
      kaodian: '',
      liju1: '   In debate he is a formidable opponent.      ',
      chinese1: '在辩论中他是位难以对付的对手。',
      liju2: ' The task of assembling information about these plants is both vital and formidable.  ',
      chinese2: ' 搜集这些植物的信息的任务是很重要的也是很可怕的。',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1357',
      word: 'formula ',
      ciyi: '  n.公式，准则 ',
      kaodian: '',
      liju1: '  He developed a mathematical formula describing the distances of the planets from the Sun.       ',
      chinese1: '他提出了一个描述各行星与太阳之间距离的数学公式。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1358',
      word: 'formulate',
      ciyi: '  vt.形成，构想；系统地阐述 ',
      kaodian: '',
      liju1: '   Little by little, he formulated his plan for escape.      ',
      chinese1: '他一点点地构想出了他的逃跑计划。',
      liju2: ' The scholars formulated possible solutions to the problem. ',
      chinese2: '学者们系统地阐述了几种有可能的解决这个问题的方案。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1359',
      word: 'forth',
      ciyi: '  ad. 向前，向外 ',
      kaodian: '',
      liju1: '    The soldiers marched forth into battle.     ',
      chinese1: ' 战士们向前行，投入战斗。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1360',
      word: 'forthcoming',
      ciyi: '  a. 即将来临的 ',
      kaodian: '',
      liju1: '   We are ready for the huge forthcoming challenge.      ',
      chinese1: '我们已经做好准备迎接即将到来的巨大挑战。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1361',
      word: 'fortnight ',
      ciyi: '  n. 两星期 ',
      kaodian: '',
      liju1: '    After a fortnight’s torture, the unfortunate man got an opportunity to escape the misfortune.     ',
      chinese1: '经过两星期的拷打后那个不幸的人得到了逃脱不幸的机会.',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''

}
    ,
    {
      id: '1362',
      word: 'forum',
      ciyi: '  n. 论坛，讨论会 ',
      kaodian: '',
      liju1: '  Join us in our Help Forum if you still have questions.        ',
      chinese1: '如果你还有问题，加入我们的帮助论坛吧。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1363',
      word: 'fossil',
      ciyi: '  n. 化石 ',
      kaodian: '',
      liju1: '  At this distance of time it is difficult to date the fossil.        ',
      chinese1: '时间隔得这么久了，很难确定这化石的年代。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1364',
      word: 'foster',
      ciyi: ' vt. 培养，养育；鼓励，促进；领养a. 收养的，养育的 ',
      kaodian: '',
      liju1: '  She has since gone on to find happiness by fostering more than 100 children.       ',
      chinese1: '她此后又通过收养一百多个孩子找到了快乐。',
      liju2: ' Foster an enterprise culture of safety and security.  ',
      chinese2: '培育一个安全和可靠的企业文化。 ',
      liju3: '  Frequent cultural exchange will certainly help foster friendly relations between our two countries. ',
      chinese3: '频繁的文化交流必定会帮助促进我们两国的友好关系。'
}
    ,
    {
      id: '1365',
      word: 'foul',
      ciyi: '  a.发臭的，难闻的；下流的，邪恶的；恶劣的，有暴风雨的v.对…犯规；弄脏n. 犯规 ',
      kaodian: '',
      liju1: ' The sewers have a foul smell.       ',
      chinese1: '下水道有一股很难闻的气味。',
      liju2: ' Tom is a disgusting man with foul language. ',
      chinese2: ' 汤姆总是用下流的话，令人讨厌。',
      liju3: ' No amount of foul weather, whether hail, wind, rain or snow, seems to deter them.  ',
      chinese3: '不管天气有多恶劣，哪怕是冰雹、大风、雨还是雪，似乎都阻止不了他们。'
}
    ,
    {
      id: '1366',
      word: 'foundation',
      ciyi: '  n. 基础；地基；基金会；创立 ',
      kaodian: '',
      liju1: '  The ground was excavated for a foundation.       ',
      chinese1: '地面被挖空作为地基。',
      liju2: ' Best friends are the foundation of my life. ',
      chinese2: ' 良友们是我生活的基础。',
      liju3: ' I have my foundation, I have my music school.   ',
      chinese3: '我有我的基金会，还有音乐学校。'
}
    ,
    {
      id: '1367',
      word: 'fraction',
      ciyi: '  n. 分数；一点儿，小部分 ',
      kaodian: '',
      liju1: '  Their economy is still a fraction of ours.       ',
      chinese1: '他们的经济仍然是我们的一部分。',
      liju2: ' The students had a grasp of decimals, percentages and fractions. ',
      chinese2: '学生们掌握了小数、百分数和分数。 ',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1368',
      word: 'fracture',
      ciyi: '  n. 破裂，断裂，裂缝；骨折vt.使破裂 ',
      kaodian: '',
      liju1: '   At least one-third of all women over ninety have sustained a hip fracture.      ',
      chinese1: ' 90岁以上的妇女中至少有1/3遭受过髋骨骨折。',
      liju2: ' Fracture toughness against pressurised thermal shock, do you know what a pressurised thermal shock is?   ',
      chinese2: '对抗高压热冲击的断裂韧性，你们知道什么是高压热？ ',
      liju3: ' One strut had fractured and been crudely repaired in several places.  ',
      chinese3: '一根支柱断裂了，好几处已做了粗略修补。'
}
    ,
    {
      id: '1369',
      word: 'fragile',
      ciyi: '   a. 脆的，易碎的；脆弱的，易受伤害的 ',
      kaodian: '',
      liju1: '  He leaned back in his fragile chair.     ',
      chinese1: ' 他向后靠在他那把不结实的椅子上。 ',
      liju2: 'The fragile economies of several southern African nations could be irreparably damaged.  ',
      chinese2: '几个南部非洲国家脆弱的经济可能会无可挽救地被摧垮。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1370',
      word: 'fragment',
      ciyi: '  n. 碎片；片断，小部分  ',
      kaodian: '',
      liju1: '   The only reminder of the shooting is a few fragments of metal in my shoulder.     ',
      chinese1: '惟一使我记起那次枪击的，是我肩膀里的一些金属碎片。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1371',
      word: 'fragrant',
      ciyi: '   a. 芳香的；香的 ',
      kaodian: '',
      liju1: '   Coffee is a fragrant beverage.      ',
      chinese1: ' 咖啡是一种香味浓郁的饮料。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1372',
      word: 'frame',
      ciyi: '  n. 框架；结构vt.表达；装框子  ',
      kaodian: '',
      liju1: '  He supplied housebuilders with modern timber frames.     ',
      chinese1: ' 他为建房者提供了现代化的木制构架。',
      liju2: '  He was wearing new glasses with gold wire frames. ',
      chinese2: '他戴着一副新的金丝框眼镜。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1373',
      word: 'framework',
      ciyi: '  n. 框架，结构，构架  ',
      kaodian: '',
      liju1: '   The erection of this framework took only a few minutes.      ',
      chinese1: '架设这个框架只需几分钟。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1374',
      word: 'franchise',
      ciyi: '  n. 特许权；选举权；经销权vt. 给…以特许  ',
      kaodian: '',
      liju1: '   The wine is brewed under franchise.     ',
      chinese1: '这种酒在特许经营下酿造的。 ',
      liju2: ' The history of this franchise, although essential to the workings of democracy and the protection of individual rights, is a story of constant conflict. ',
      chinese2: '选举权虽然对于实行民主和保护个人权利至关重要，但它的历史却是充满冲突的。 ',
      liju3: '  The have got their franchise in London and Paris. ',
      chinese3: '他们得到在伦敦和巴黎的经营权。'
}
    ,
    {
      id: '1375',
      word: 'frank ',
      ciyi: '  a. 坦白的，直率的  ',
      kaodian: '',
      liju1: '    I’m going to be frank and tell you that you need to lose weight.    ',
      chinese1: '  我打算跟你说实话，你需要减肥了。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1376',
      word: 'fraud',
      ciyi: '  n. 诈骗，欺骗；骗子  ',
      kaodian: '',
      liju1: '   He was jailed for two years for fraud and deception.     ',
      chinese1: '他因诈骗与欺诈被监禁了两年。 ',
      liju2: "' He's a fraud and a cheat.  '",
      chinese2: '他是一个骗子。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1377',
      word: 'freelance',
      ciyi: '  a. 自由投稿的，自由职业的  ',
      kaodian: '',
      liju1: '   She became a freelance journalist after ten years.     ',
      chinese1: '10年后她成为一名自由撰稿人。 ',
      liju2: 'Michael Cross is a freelance journalist.  ',
      chinese2: '迈克尔·克罗斯是一个自由新闻工作者。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1378',
      word: 'freight ',
      ciyi: ' n. 货运；运费；船货   ',
      kaodian: '',
      liju1: '  France derives 16% of revenue from air freight.      ',
      chinese1: ' 法国国家税收的16%来自于航空货运。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1379',
      word: 'frequency',
      ciyi: ' n. 频率；频繁；周率  ',
      kaodian: '',
      liju1: "'  The frequency of Kara's phone calls increased rapidly.     '",
      chinese1: '卡拉打电话的频率迅速增加。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1380',
      word: 'friction',
      ciyi: '  n. 摩擦；摩擦力  ',
      kaodian: '',
      liju1: '   Friction acts on moving bodies and brings them to a stop.       ',
      chinese1: '摩擦力作用于运动着的物体，并使其停止。 ',
      liju2: ' fridge ',
      chinese2: ' n. 电冰箱 ',
      liju3: 'Mike found a hunk of fresh meat in the fridge.  ',
      chinese3: '迈克在冰箱里找到了一大块鲜肉。'
}
    ,
    {
      id: '1381',
      word: 'fringe',
      ciyi: ' n. 边缘；须边vt. 成为…的边缘  ',
      kaodian: '',
      liju1: '  The bottom of the curtain was decorated with fringe.      ',
      chinese1: '窗帘的底部以流苏作装饰。 ',
      liju2: ' The river is fringed with trees. ',
      chinese2: '河两边种有树。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1382',
      word: 'frog',
      ciyi: '  n. 青蛙  ',
      kaodian: '',
      liju1: ' The tadpole has become a frog.       ',
      chinese1: ' 这个蝌蚪已长成青蛙。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1383',
      word: 'frontier',
      ciyi: '   n. 前沿；边界；国境；尖端；新领域 ',
      kaodian: '',
      liju1: "'It wasn't difficult then to cross the frontier. '",
      chinese1: ' 那时候穿越国界并不难。',
      liju2: ' The professors dedicated themselves to the research in frontiers of knowledge. ',
      chinese2: ' 教授们投身于知识新领域的研究。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1384',
      word: 'frost',
      ciyi: '  n. 霜；冰冻，严寒  ',
      kaodian: '',
      liju1: '   There is frost on the ground and snow is forecast.     ',
      chinese1: '地上有霜，预报有雪。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1385',
      word: 'frown',
      ciyi: '  vi. 皱眉；不同意  ',
      kaodian: '',
      liju1: '   She frowned down all her opponents.     ',
      chinese1: '她用皱眉使反对者缄口。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1386',
      word: 'fruitful',
      ciyi: '  a. 富有成效的；多产的，果实结得多的  ',
      kaodian: '',
      liju1: '    We had a long, happy, fruitful relationship.    ',
      chinese1: '我们曾有一段长久、愉快而富有成效的关系。 ',
      liju2: 'Fu indicated that China hopes the visit to achieve rich consensus and fruitful results.   ',
      chinese2: '傅莹表示，中方希望访问能够达成许多共识，取得丰硕成果。 ',
      liju3: '  ',
      chinese3: ''

}
    ,
    {
      id: '1387',
      word: 'frustrate',
      ciyi: '  vt. 挫败；阻挠；使感到灰心  ',
      kaodian: '',
      liju1: ' They made their preparations to frustrate the conspiracy.        ',
      chinese1: ' 他们作好准备挫败这个阴谋。',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1388',
      word: 'fry',
      ciyi: '  vt. 油炸，油煎  ',
      kaodian: '',
      liju1: '   I always fry potatoes in hot fat with a bit of onion.     ',
      chinese1: '我用热油炒土豆时总是加少些洋葱。 ',
      liju2: '  ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1389',
      word: 'fulfil(l)',
      ciyi: '  vt. 履行，实现；完成；符合  ',
      kaodian: '',
      liju1: "'It will be a great happiness to her to fulfill her father's desire.'",
      chinese1: '实现她父亲的愿望对她来说是最大的幸福。 ',
      liju2: '  ',
      chinese2: '',
      liju3: '   ',
      chinese3: ''
}
    ,
    {
      id: '1390',
      word: 'fume',
      ciyi: '  vi. 冒烟；发怒n. 烟；气  ',
      kaodian: '',
      liju1: '  The smouldering wreck fumed thick black smoke.      ',
      chinese1: '燃烧的残骸冒出浓烈的黑烟。 ',
      liju2: ' The fumes from the factory coated the nearby building with soot. ',
      chinese2: '工厂排出的烟给附近的建筑物蒙上了一层烟。'
}
    ,
    {
      id: '1391',
      word: 'function',
      ciyi: '  n. 功能，作用；函数；职责vi. 运行；起作用，行使职责  ',
      kaodian: '',
      liju1: '   The main function of the investment banks is to raise capital for industry.    ',
      chinese1: '各投资银行的主要作用是为产业筹集资金。 ',
      liju2: '  Her post should be determined only by her function in the company.  ',
      chinese2: '她的职位视其在公司的作用而定。 ',
      liju3: 'All you do is define a function for each method.   ',
      chinese3: '您所做的就是为每个方法定义一个函数。'
}
    ,
    {
      id: '1392',
      word: 'fund',
      ciyi: '  n. 基金，资金；存款vt.投资；资助  ',
      kaodian: '',
      liju1: '  They clubbed a fund of money for poor children.      ',
      chinese1: '他们为贫穷的孩子们募集了一笔资金。 ',
      liju2: ' The airport is being privately funded by a construction group. ',
      chinese2: ' 该机场正由一建筑集团私家资助。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1393',
      word: 'fundamental',
      ciyi: '   a. 基本的，根本的n. 基本原则，基本原理 ',
      kaodian: '',
      liju1: '  Our constitution embodies all the fundamental principles of democracy.      ',
      chinese1: '我们的宪法体现了民主的所有基本原则。 ',
      liju2: ' This decision represents the fundamental interests of the people.  ',
      chinese2: '这个决定反映了广大人民的根本利益。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1394',
      word: 'funeral',
      ciyi: '  n. 葬礼，丧礼  ',
      kaodian: '',
      liju1: ' The funeral will be held in Joplin, Missouri.     ',
      chinese1: '该葬礼将在密苏里州的乔普林市举行。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1395',
      word: 'fur',
      ciyi: '   n. 毛，毛皮 ',
      kaodian: '',
      liju1: '   She chattered on and on about her new fur coat.      ',
      chinese1: '提起她的新皮大衣，她就没完没了地絮叨起来。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1396',
      word: 'furious',
      ciyi: '   a. 激烈的；狂怒的；狂暴的 ',
      kaodian: '',
      liju1: '  He is furious at the way his wife has been treated.     ',
      chinese1: '他因妻子所受到的对待方式而狂怒不已。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1397',
      word: 'furnace',
      ciyi: ' n. 火炉，熔炉  ',
      kaodian: '',
      liju1: '  It is time he banked up the furnace.      ',
      chinese1: '他该把炉子封起来了。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1398',
      word: 'furnish',
      ciyi: ' vt. 提供，供应；装备，布置  ',
      kaodian: '',
      liju1: '  They will furnish food to him.     ',
      chinese1: '他们将会提供伙食给他。 ',
      liju2: '  The house is well furnished. ',
      chinese2: '这间房屋内布置得很好。 ',
      liju3: '  ',
      chinese3: ''
}

    ,
    {
      id: '1399',
      word: 'furthermore',
      ciyi: '  ad. 此外；而且  ',
      kaodian: '',
      liju1: '   Furthermore, they have different goals, and so they use what you have made in different modes.     ',
      chinese1: ' 此外，他们的目标不同，所以他们用不同的模式使用你的产品。',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1400',
      word: 'fuse ',
      ciyi: '  vi. 融合；熔化，熔融n. 保险丝，导火线  ',
      kaodian: '',
      liju1: '   Copper and zinc are fused to make brass.    ',
      chinese1: '铜与锌熔合后形成黄铜。 ',
      liju2: '  A bomb was deactivated at the last moment, after the fuse had been lit. ',
      chinese2: '一枚炸弹在导火线已被点燃后的最后一刻被解除。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1401',
      word: 'fuss',
      ciyi: '   vi. 忙乱，大惊小怪 n. 大惊小怪，忙乱 ',
      kaodian: '',
      liju1: '   Stop fussing and do your work!    ',
      chinese1: '别大惊小怪，干你的工作吧! ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1402',
      word: ' It created a big fuss and the fuss persists to this day. ',
      ciyi: '  它创造了一个大做文章，大惊小怪坚持到今天。 ',
      kaodian: '',
      liju1: '      ',
      chinese1: ' ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1403',
      word: 'futile',
      ciyi: '   a. 无用的，无效的，无意义的；没有出息的；琐细的 ',
      kaodian: '',
      liju1: '  We do not fight global warming because it is futile to do so.    ',
      chinese1: ' 我们不对付全球变暖的斗争，因为以这样做是徒劳的。',
      liju2: '  Jim is a futile man who does nothing but drink.  ',
      chinese2: '吉姆是一个只知道喝酒的废物。 ',
      liju3: '  We are waste us time on such futile matters. ',
      chinese3: '我们花费时间在琐碎的事情上。'
}
    ,
    {
      id: '1404',
      word: 'galaxy',
      ciyi: '  n.星系，银河系；一群显赫的人  ',
      kaodian: '',
      liju1: '   The Galaxy consists of 100 billion stars.    ',
      chinese1: '银河系由1千亿颗恒星组成。 ',
      liju2: ' A galaxy of beauties caught Jack’s eyes.  ',
      chinese2: '一群美女吸引了杰克的目光。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1405',
      word: 'gallery',
      ciyi: '  n. 画廊，走廊；美术馆  ',
      kaodian: '',
      liju1: '  The bright modern painting stares out at you in the otherwise conservative gallery.      ',
      chinese1: '有些古典派画廊也会陈列出明亮色彩的现代派绘画。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1406',
      word: 'gallon',
      ciyi: '  n. 加仑  ',
      kaodian: '',
      liju1: '   Four quarts constitute a gallon.     ',
      chinese1: ' 四夸脱构成一加仑。',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1407',
      word: 'gallop',
      ciyi: '   ',
      kaodian: 'n. 疾驰；飞奔vi. 飞跑，奔驰 ',
      liju1: '   Major Winston galloped into the distance.    ',
      chinese1: ' 温斯顿少校骑马疾驰远去。',
      liju2: '  The children galloped home from school.  ',
      chinese2: '孩子们从学校飞奔回家。 ',
      liju3: ' I was forced to attempt a gallop. ',
      chinese3: '我被迫尝试一次骑马疾驰。'
}
    ,
    {
      id: '1408',
      word: 'gamble ',
      ciyi: '  vt. 赌博；输光n. 赌博；冒险；打赌  ',
      kaodian: '',
      liju1: '  He lost his money gambling at cards.     ',
      chinese1: ' 他赌纸牌输掉了钱。',
      liju2: ' Yesterday, he named his cabinet and took a big gamble in the process.  ',
      chinese2: ' 昨天他冒了很大的风险任命了他的内阁。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1409',
      word: 'gang',
      ciyi: '   n. 群；一伙；一组 ',
      kaodian: '',
      liju1: '    During the fight with a rival gang he lashed out with his flick knife.   ',
      chinese1: '和对立帮派群殴时，他用弹簧刀猛烈攻击。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1410',
      word: 'gaol/jail',
      ciyi: '  n.监狱；拘留所vt.监禁某人  ',
      kaodian: '',
      liju1: '   They carted him off to jail.     ',
      chinese1: '他们把他押到监狱。 ',
      liju2: '  He was jailed for twenty years.  ',
      chinese2: ' 他被监禁了20年。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1411',
      word: 'gap',
      ciyi: '  n. 间隙，间隔；分歧，差距  ',
      kaodian: '',
      liju1: '  He pulled the thick curtains together, leaving just a narrow gap.     ',
      chinese1: '他把厚厚的窗帘拉到一起，只留了一条窄缝。 ',
      liju2: "'   America's trade gap widened. '",
      chinese2: ' 美国的贸易差额加大了。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1412',
      word: 'garbage',
      ciyi: '  n. 垃圾；废物  ',
      kaodian: '',
      liju1: '    That garbage can was belted with blue paint.    ',
      chinese1: ' 那只垃圾箱被漆上蓝色条纹标记。',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1413',
      word: 'garlic',
      ciyi: '  n. 大蒜；蒜头  ',
      kaodian: '',
      liju1: '  She revolts from eating garlic.     ',
      chinese1: '她讨厌吃蒜。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1414',
      word: 'garment ',
      ciyi: '  n. 衣服，服装  ',
      kaodian: '',
      liju1: '  China will host an exhibition of international garment machinery.      ',
      chinese1: ' 中国将主办国际服装机械展览会。',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1415',
      word: 'gas ',
      ciyi: '   n. 气体；煤气；汽油v. 加油 ',
      kaodian: '',
      liju1: '    Gas dilates the balloon.    ',
      chinese1: ' 气体使气球膨胀',
      liju2: ' Coal is actually cheaper than gas.  ',
      chinese2: '煤炭实际上比煤气便宜。 ',
      liju3: "' We'd better stop at a station soon and gas up. '",
      chinese3: '我们最好立即到加油站加油。'
}
    ,
    {
      id: '1416',
      word: 'gasoline/gasolene',
      ciyi: '  n. 汽油 ',
      kaodian: '',
      liju1: '  Gasoline cuts oil and grease.     ',
      chinese1: '汽油溶解油脂。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1417',
      word: 'gasp',
      ciyi: ' n. 喘息，气喘v.喘息；气喘吁吁地说  ',
      kaodian: '',
      liju1: '   After running threemiles, my breath came in short, quick gasps.   ',
      chinese1: '跑完三英里，我气喘吁吁，呼吸急促。 ',
      liju2: ' After running such a long way, the messenger was gasping for breath.  ',
      chinese2: '传令兵在跑了这么长一段路后，直喘粗气。 ',
      liju3: 'The messenger gasped out his story after running all the way from the battle. ',
      chinese3: '传令兵从战场上长途跑回来后，气喘吁吁地说出了战况。'
}
    ,
    {
      id: '1418',
      word: 'gauge/gage',
      ciyi: 'n. 计量器；标准尺寸；规格   ',
      kaodian: '',
      liju1: "'The index is the government's chief gauge of future economicactivity. '",
      chinese1: '这个指数是政府对未来经济活动的主要判断标准。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1419',
      word: 'gaze',
      ciyi: '  vi. 凝视；注视n. 凝视；注视  ',
      kaodian: '',
      liju1: '  Sitting in his wicker chair, he gazed reflectively at the fire.    ',
      chinese1: ' 坐在他的柳条椅中，他若有所思地凝视着火焰。',
      liju2: ' She lowered her head under his gaze.   ',
      chinese2: '在他的注视下她低下了头。  ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1420',
      word: 'gear ',
      ciyi: ' n. 齿轮；传动装置v.调整；使…适合  ',
      kaodian: '',
      liju1: 'Gear lubricants may congeal and channel in cold weather.        ',
      chinese1: '天冷时齿轮润滑油可能凝结并形成凹槽。 ',
      liju2: '   Colleges are not always geared to the needs of mature students. ',
      chinese2: ' 大学并不总是去适应成年学生的需要。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1421',
      word: 'gender',
      ciyi: '  n. 性；性别；性交 ',
      kaodian: '',
      liju1: '   Women are sometimes denied opportunities solely because of their gender.   ',
      chinese1: '女性有时仅仅因为她们的性别而被剥夺机会。 ',
      liju2: '   I was puzzled by the gender in French.',
      chinese2: '我被法语中的性搞晕了头。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1422',
      word: 'gene',
      ciyi: '  n. 基因，遗传因子 ',
      kaodian: '',
      liju1: '   We all know we are the product of ourgenes, what are all the steps from gene to us?     ',
      chinese1: '我们都知道基因决定了每个个体，但基因是如何使我们成为现在的我们的呢？ ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1423',
      word: 'generalize/generalise ',
      ciyi: ' v. 概括；归纳；普及，推广  ',
      kaodian: '',
      liju1: '   Critics love to generalize, to formulate trends into which all new work must be fitted, however contradictory.    ',
      chinese1: '评论家喜欢概括，归纳出所有新作品都必须符合的趋势，不管它们是如何地不符。 ',
      liju2: '  The scientist generalized the use of a new insecticide. ',
      chinese2: '该科学家推广使用一种新型杀虫剂。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1424',
      word: 'generate',
      ciyi: ' a. 慷慨的，大方的；宽宏大量的  ',
      kaodian: '',
      liju1: '    Dietler is generous with his time and money.   ',
      chinese1: '迪特勒在他的时间和金钱方面慷慨大方。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1425',
      word: 'genetic',
      ciyi: ' a. 遗传的；基因的；起源的   ',
      kaodian: '',
      liju1: '   Students are flocking to such fields as genetics and molecular biology.   ',
      chinese1: '大学生正在大量从事诸如遗传学和分子生物学等领域的研究。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1426',
      word: 'genius',
      ciyi: '   n. 天才，天赋；创造力 ',
      kaodian: '',
      liju1: '  The man had genius and had made his mark in the aviation world.    ',
      chinese1: '那位男士拥有天赋，而且在航空界已经成名。 ',
      liju2: ' Chaplin was not just a genius, and he was among the most influential figures in film history.  ',
      chinese2: '卓别林不仅是个天才，还是电影史上最有影响的人物之一。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1427',
      word: 'genre',
      ciyi: '  n. 类型；种类；体裁  ',
      kaodian: '',
      liju1: '   Decide the length and genre of the movie you want to write.     ',
      chinese1: '确定你要写作的电影剧本长度和类型。 ',
      liju2: ' The genre for me is quite unique.    ',
      chinese2: ' 这种体裁对我来说很独特。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1428',
      word: 'gently',
      ciyi: ' ad. 轻轻地，温和地；文雅的；有礼貌的  ',
      kaodian: '',
      liju1: '  She fingered the silk gently.     ',
      chinese1: ' 她轻轻地触摸丝绸。',
      liju2: '    My sister gently gave the guest a cup of coffee.',
      chinese2: ' 我妹妹很有礼貌的给客人送上一杯咖啡。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1429',
      word: 'genuine',
      ciyi: '   a. 真实的，真正的，名副其实的 ',
      kaodian: '',
      liju1: '    If this offer is genuine, I will gladly accept it.   ',
      chinese1: ' 如果这份帮助是诚恳的，我将愉快地接受它。',
      liju2: '  The only moral tenet governing the conduct of business in the shop was that the goods should be genuine and the price fair.  ',
      chinese2: '货真价实，是商店唯一的道德。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1430',
      word: 'geology',
      ciyi: '   n. 地质学；地质情况',
      kaodian: '',
      liju1: '  He was visiting professor of geology at the University of Georgia.    ',
      chinese1: '他曾是佐治亚大学的地质学客座教授。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1431',
      word: 'geometry',
      ciyi: '  n. 几何（学）；几何结构 ',
      kaodian: '',
      liju1: '  The math of the time could deal with a changeless, ideal world — consider the principles of geometry — but not with motion.      ',
      chinese1: ' 当时的数学可以对付一个一成不变的理想世界——想想几何原理，但没有考虑运动。',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1432',
      word: 'germ',
      ciyi: '    n. 微生物；细菌',
      kaodian: '',
      liju1: '  This germ is found on things used by the patients.     ',
      chinese1: '这种细菌附着在病人使用过的东西上。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1433',
      word: 'gesture',
      ciyi: '  n. 姿态；手势vi. 作手势；用动作示意  ',
      kaodian: '',
      liju1: '     Her refusal was merely a deliberate gesture.  ',
      chinese1: '她的拒绝只是故作姿态。 ',
      liju2: '    I gestured toward the boathouse, and he looked inside.',
      chinese2: ' 我朝停船小屋打手势，他在里面看了看。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1434',
      word: 'ghost',
      ciyi: '  n. 鬼，幽灵 ',
      kaodian: '',
      liju1: '  The boy contended that he saw a ghost.     ',
      chinese1: '这个男孩硬说他看见了鬼。 ',
      liju2: '    ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1435',
      word: 'giant ',
      ciyi: ' n. 巨人；伟人；巨大的动物a. 巨大的  ',
      kaodian: '',
      liju1: '  China is like a giant awakening from a heavy sleep.     ',
      chinese1: '中国像一个从沉睡中觉醒的巨人。 ',
      liju2: "' We don't have giant erasers to erase the bad circumstances we all go through.'",
      chinese2: '我们没有巨大的橡皮擦，大的足于擦去经历过的所有坏的经历。 ',
      liju3: ' ',
      chinese3: ''
}
    ,
    {
      id: '1436',
      word: 'gigantic ',
      ciyi: '  a. 巨大的，庞大的 ',
      kaodian: '',
      liju1: '    Looking from a distance like a gigantic arch, it is a continuous loop, a kind of square doughnut.     ',
      chinese1: '从远处看像一座巨大的拱门，实际上它是一个连续的环，有点像方形面包圈。 ',
      liju2: ' ',
      chinese2: '  ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1437',
      word: 'giggle',
      ciyi: ' n/vi. 傻笑；咯咯地笑   ',
      kaodian: '',
      liju1: ' She gave a little giggle.  ',
      chinese1: '她咯咯地笑了一下。 ',
      liju2: ' Both girls began to giggle.  ',
      chinese2: ' 两个女孩都咯咯地笑起来。',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1438',
      word: 'glacier',
      ciyi: '  n. 冰河，冰川  ',
      kaodian: '',
      liju1: '  The glacier dislocated great stones.     ',
      chinese1: '冰川使许多大石块移位了。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1439',
      word: 'glamour',
      ciyi: '  n. 魅力，诱惑力，魔力  ',
      kaodian: '',
      liju1: '   This beauty gave a tinge of nobility and glamour to even the most pedestrian kind of homesickness.    ',
      chinese1: '哪怕是最平庸的思乡病也会为了这种美丽平添一种高贵和魅力。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1440',
      word: 'glare',
      ciyi: '  n/vi.怒视，瞪眼；闪耀；闪光  ',
      kaodian: '',
      liju1: '   His glasses magnified his irritable glare.    ',
      chinese1: '他的眼镜使他怒视的目光显得更凶了。 ',
      liju2: '  This happens because of the glare caused by a cataract.    ',
      chinese2: ' 这是由于白内障引起的眩光所造成的。',
      liju3: ' The whole class glared at the teacher when he told them their punishment.  ',
      chinese3: '在老师向全班宣布处罚时，全班同学气愤地怒视着他。'
}
    ,
    {
      id: '1441',
      word: 'glide',
      ciyi: '  n. 滑翔；滑行vi. 使滑行；使滑动  ',
      kaodian: '',
      liju1: ' Do you think we can glide down this glacier?      ',
      chinese1: '你觉得我们可以从冰河上滑行下去吗？ ',
      liju2: ' The bird glided to the ground.  ',
      chinese2: '鸟向地面滑行。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1442',
      word: 'glimpse',
      ciyi: ' n/vt. 一瞥，瞥见   ',
      kaodian: '',
      liju1: '   He caught a glimpse of his former lover in the theatre last night.     ',
      chinese1: '昨晚他在剧院里瞥见了他以前的情人。 ',
      liju2: '  He glimpsed at the book.  ',
      chinese2: '他看了书一眼。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1443',
      word: 'glitter',
      ciyi: '  vi. 闪光；闪烁n.灿烂；光辉  ',
      kaodian: '',
      liju1: '   The bay glittered in the sunshine.    ',
      chinese1: '海湾在阳光下闪闪发光。 ',
      liju2: ' Beneath its surface glitter, the fashion industry is a tough place to work in.  ',
      chinese2: '时尚业表面上风光，其实是一个艰苦的行业。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1444',
      word: 'global',
      ciyi: '  a. 全球的，世界的；总体的  ',
      kaodian: '',
      liju1: '   We do not fight global warming because it is futile to do so.    ',
      chinese1: '我们不对付全球变暖的斗争，因为以这样做是徒劳的。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1445',
      word: 'globe',
      ciyi: '  n. 地球，世界；地球仪；球体  ',
      kaodian: '',
      liju1: '  Three large globes stand on the floor.     ',
      chinese1: '地板上立着三个大地球仪。 ',
      liju2: '  We directed radio waves around the globe.   ',
      chinese2: '我们向全世界发射无线电波。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1446',
      word: 'gloomy',
      ciyi: ' a. 黑暗的；沮丧的；阴暗的；阴沉的   ',
      kaodian: '',
      liju1: "'Inside it's gloomy after all that sunshine.    '",
      chinese1: '明媚的阳光过后，里面一片阴暗。 ',
      liju2: '  Miller is gloomy about the fate of the serious playwright in America.  ',
      chinese2: '米勒对这位严肃的美国剧作家的命运感到忧伤。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1447',
      word: 'glorious',
      ciyi: '   a. 光荣的；壮丽的，辉煌的 ',
      kaodian: '',
      liju1: '  Harrison had a glorious career spanning more than six decades.     ',
      chinese1: '哈里森有过一段长达六十余年的辉煌的职业生涯。 ',
      liju2: '  She is always bucking about her glorious past.  ',
      chinese2: '她老是吹嘘她的光荣的过去。 ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1448',
      word: 'glory',
      ciyi: '  n. 光荣，荣誉   ',
      kaodian: '',
      liju1: '  Thine is the power and the glory.',
      chinese1: '权力与光荣属于你。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
}
    ,
    {
      id: '1449',
      word: 'glove',
      ciyi: '  n. 手套 ',
      kaodian: '',
      liju1: '   He stuck his gloves in his pocket.    ',
      chinese1: '他把手套塞进了口袋里。 ',
      liju2: '   ',
      chinese2: ' ',
      liju3: '  ',
      chinese3: ''
        },
        
      ]
}
return arr
}

