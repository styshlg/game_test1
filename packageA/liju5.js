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
        id: '3425',
        word: ' troop',
		ciyi:'n. 群；军队，部队',
        kaodian: '',
        liju1: 'The whole troop of men and women wore their hair fairly short. ',
        chinese1: '那一整群男女都留着相当短的头发。',
        liju2: 'The troop trotted the hills and valleys. ',
        chinese2: '这支部队快步翻山越谷。',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3426',
        word: ' tropic',
		ciyi:' n. 热带；回归线',
        kaodian: '',
        liju1: ' The tropic sun glared down on us all day. ',
        chinese1: '热带的太阳整日灼晒着我们。',
        liju2: "It was at the heart of the controversy over Lady Chatterley's Lover, and it helped get Tropic of Cancer banned.",
        chinese2: '它是《查泰莱夫人的情人》一书中争论的核心和有助于使得北回归线被禁。',
		liju3:'',
         chinese3:''		 
		 	}, 
      
      {
        id: '3427',
        word: ' tropical',
		ciyi:' a. 热带的；热情的',
        kaodian: '',
        liju1: ' The drummers beat out their tropical music, and the women danced. ',
        chinese1: '鼓手们敲奏出热带地区风格的曲调，妇女们跳起舞来。',
        liju2: '',
        chinese2: '',
		    liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3428',
        word: ' trumpet',
		ciyi:' n. 喇叭；喇叭声',
        kaodian: '',
        liju1: 'Life is something like a trumpet.  ',
        chinese1: '生活有点像一个喇叭。',
        liju2: '',
        chinese2: '',
		    liju3:'',
         chinese3:''
    }, 
      
      {
        id: '3429',
        word: ' trunk',
		ciyi:' n. 树干；躯干；皮箱；汽车车尾的行李箱',
        kaodian: '',
        liju1: 'The bark was riven off from the trunk.  ',
        chinese1: '树皮从树干上被扯了下来。',
        liju2: 'Maloney unlocked his trunk and took out some coveralls.',
        chinese2: '马洛尼把他的大箱子的锁打开了，拿出了一些工作服。',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3430',
        word: ' tub',
		ciyi:' n. 浴盆；桶 ',
        kaodian: '',
        liju1: ' This tub has not sanitated. ',
        chinese1: '这个浴盆还未消过毒。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3431',
        word: 'tube  ',
		ciyi:' n. 管；电子管；电视机；地铁 ',
        kaodian: '',
        liju1: ' He is fed by a tube that enters his nose. ',
        chinese1: '他通过一根插入鼻子的管子进食。',
        liju2: 'The only baseball he saw was on the tube.',
        chinese2: '他只在电视上看过棒球比赛。',
		liju3:'The tube crash brought great chaos to London.',
         chinese3:'那次地铁相撞事件给伦敦造成了巨大的混乱。'
		   }, 
      
      {
        id: '3432',
        word: ' tuck',
		ciyi:' vt. 卷起；挤进',
        kaodian: '',
        liju1: 'He tried to tuck his flapping shirt inside his trousers. ',
        chinese1: '他试图把飘动的衬衫塞进他的裤子里。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3433',
        word: 'tug ',
	    	ciyi:' n. 拖船；猛拉；拽vt. 用力拉',
        kaodian: '',
        liju1: ' I felt a tug at my sleeve. ',
        chinese1: '我感觉我的袖子被拽了一下。',
        liju2: 'The ship steamed athwart the tug. ',
        chinese2: '船朝着那条拖船横向驶去。',
		     liju3:"She tugged at her friend's arm.",
         chinese3:'她用力拉朋友的胳臂。'
	 }, 
      
      {
        id: '3434',
        word: ' tuition',
		    ciyi:'n. 学费 ',
        kaodian: '',
        liju1: "Angela's $7,000 tuition at university this year will be paid for with scholarships.",
        chinese1: '安吉拉今年$7000的大学学费将用奖学金来支付。',
        liju2: '',
        chinese2: '',
	     	liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3435',
        word: 'tumble ',
		    ciyi:'vi. 摔倒；打滚n. 跌倒；摔倒',
        kaodian: '',
        liju1: ' She tumbled off her bicycle. ',
        chinese1: '她从自行车上摔了下来。',
        liju2: 'The patient tumbled restlessly in his bed.',
        chinese2: '病人焦躁不安地在床上翻来滚去。',
		    liju3:'Martin almost went for a tumble when he climbed the stairs.',
         chinese3:'马丁上楼时差点摔一跤。'
		   }, 
      
      {
        id: '3436',
        word: ' tumo(u)r',
		    ciyi:'n. 肿瘤；肿块 ',
        kaodian: '',
        liju1: 'The tumor will soon be resolved.  ',
        chinese1: '这个肿瘤很快就会消掉的。',
        liju2: '',
        chinese2: '',
	     	liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3437',
        word: 'tune ',
		ciyi:' n. 曲调；调子vt. 调整；调音；调节',
        kaodian: '',
        liju1: 'She was humming a merry little tune. ',
        chinese1: '她正哼着一曲欢快的小调。',
        liju2: 'She found it difficult to tune herself to a busy life.',
        chinese2: '她发觉很难调整到忙碌的生活中去。',
	   	liju3:'Others were quietly tuning up their instruments.',
         chinese3:'其他人正安静地为他们的乐器调音。'
		   }, 
      
      {
        id: '3438',
        word: ' tunnel',
		ciyi:'n. 隧道；洞穴通道',
        kaodian: '',
        liju1: 'Boston drivers love the tunnel. ',
        chinese1: '波士顿的司机们喜欢那条隧道。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''		 
		 	}, 
      
      {
        id: '3439',
        word: ' turbine',
		ciyi:'n. 涡轮机；汽轮机',
        kaodian: '',
        liju1: 'Then the steam passes into the turbine.  ',
        chinese1: '然后蒸气进入汽轮机。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''   
		 }, 
      
      {
        id: '3440',
        word: 'turbulent  ',
		ciyi:'a.动乱的；无秩序的；汹涌的；吵闹的',
        kaodian: '',
        liju1: ' The ship breasted the turbulent seas.  ',
        chinese1: '船顶着汹涌的海浪前进。',
        liju2: 'They had been together for five or six turbulent years of break-ups and reconciliations.',
        chinese2: '他们在一起度过了分分合合动荡不定的五六年。',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3441',
        word: ' turkey ',
		ciyi:' n. 火鸡 ',
        kaodian: '',
        liju1: ' They simply demolished the turkey. ',
        chinese1: '他们全吃光了那只火鸡。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3442',
        word: ' turmoil',
		ciyi:' n. 混乱，骚动',
        kaodian: '',
        liju1: 'She lived through the turmoil of the French Revolution. ',
        chinese1: '她经历过法国大革命的混乱之后仍旧活着。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3443',
        word: 'turnover  ',
		ciyi:'n.营业额；人员调整；周转；翻倒',
        kaodian: '',
        liju1: ' The company had a turnover of $3.8 million.',
        chinese1: '那个公司拥有380万美元的营业额。',
        liju2: 'Short-term contracts increase staff turnover.',
        chinese2: '短期合同会增加员工的流动率。',
		liju3:'The store greatly reduced the prices to make a quick turnover. ',
         chinese3:'这家商店实行大减价以迅速周转资金。',
		 liju4:'The turnover of the cup looked like a bell.',
         chinese4:'那个茶杯翻倒过来像一个铃铛。'
		 
		   }, 
      
      {
        id: '3444',
        word: 'tutor ',
		ciyi:'vt. 辅导；个别指导n. 导师；家庭教师',
        kaodian: '',
        liju1: ' Most parents have no time to tutor their children.',
        chinese1: '大部分家长没有时间辅导孩子。',
        liju2: 'She is a Spanish tutor.',
        chinese2: '她是一位西班牙语家庭教师。',
		liju3:'',
         chinese3:''
        }, 
      
      {
        id: '3445',
        word: ' twinkle ',
		ciyi:' vi. 闪烁；发亮n. 闪烁',
        kaodian: '',
        liju1: 'We could see the lights on the distant boats twinkling. ',
        chinese1: '我们能看到远处的船上灯火闪烁。',
        liju2: 'A kindly twinkle came into her eyes.',
        chinese2: '她的眼睛里闪烁着亲切的光芒。',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3446',
        word: ' twist',
		ciyi:' vt.歪曲；扭伤 n.拧；窍门vi. 捻，搓，扭曲',
        kaodian: '',
        liju1: ' The newspaper report twisted what the pop singer had said.',
        chinese1: '报纸上的报道歪曲了这名流行歌手说的话。',
        liju2: 'A twist in the hose kept the water from flowing.',
        chinese2: '在软管上打个结，水就不会流下来。',
		liju3:'The question demands special twists of thinking.',
         chinese3:'要解答这个问题需要特别的窍门。',	
         liju4:'The wire twists easily.',
         chinese4:'这种金属丝容易扭弯。'		 
		 	}, 
      
      {
        id: '3447',
        word: ' typewriter',
		ciyi:' n. 打字机',
        kaodian: '',
        liju1: ' She tapped out a letter on the typewriter.',
        chinese1: '她用打字机打出了一封信。',
        liju2: 'typhoon ',
        chinese2: 'n. 台风 ',
		liju3:'The typhoon had spent its fury. ',
         chinese3:'台风的势头已经减弱了。'
		   }, 
      
      {
        id: '3448',
        word: ' typical',
		ciyi:'a. 典型的；象征性的 ',
        kaodian: '',
        liju1: ' This reluctance to move toward a democratic state is typical of totalitarian regimes.',
        chinese1: '这种不愿向民主国家迈进的态度是极权主义政体的典型特征。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''		 
		 	}, 
      
      {
        id: '3449',
        word: 'typist ',
		ciyi:' n. 打字员，打字者 ',
        kaodian: '',
        liju1: ' Kitty was down on the junior typist. ',
        chinese1: '基蒂仇视那个年轻的打字员。',
        liju2: '',
        chinese2: '',
		liju3:'',
         chinese3:''
        }, 
      
      {
        id: '3450',
        word: 'ultimate ',
		ciyi:'a. 最终的；极限的；根本的 ',
        kaodian: '',
        liju1: ' He said it is still not possible to predict the ultimate outcome.',
        chinese1: '他说现在还不可能预测最终的结果。',
        liju2: 'Hard work is the ultimate source of success.',
        chinese2: '努力工作是成功之母。',
		liju3:'',
         chinese3:''
		   }, 
      
      {
        id: '3451',
        word: ' ultraviolet',
		ciyi:'a.紫外线的n. 紫外线 ',
        kaodian: '',
        liju1: "The sun's ultraviolet rays are responsible for both tanning and burning.",
        chinese1: '太阳的紫外线是皮肤晒黑和晒伤的原因。',
        liju2: 'This sunblock protects your skin from ultraviolet.',
        chinese2: '这种防晒霜可以保护你的皮肤受紫外线的伤害。',
		liju3:'',
         chinese3:''		 
       }
      ,
       {
         id: '3452',
         word: 'unanimous  ',
		 ciyi : '  a. 全体一致的；意见一致的 ',
		 kaodian: '',
         liju1: ' Editors were unanimous in their condemnation of the proposals.',
		 chinese1: '编辑们一致谴责这些提议。', 		
		 liju2: '',
         chinese2: '',         
         liju3:'',
         choinese3:''
       }
	  ,
       {
         id: '3453',
         word: ' uncover',
		 ciyi : 'vt. 发现；揭开；揭露  ',
		 kaodian: '',
         liju1: 'When the seedlings sprout, uncover the tray',
         chinese1: '幼苗发芽后，揭开盘上的遮盖物。',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	
       }
      ,
       {
         id: '3454',
         word: ' underestimate ',
		    ciyi : '  vt. 低估；看轻 ',
		   kaodian: '',
         liju1: ' I think a lot of people still underestimate him.',
         chinese1: '我认为许多人仍然低估了他。',
         liju2: '',
         chinese2: '',
		     liju3:'',
         chinese3:''	
       }
      ,
       {
         id: '3455',
         word: 'undergo ',
		     ciyi : ' vt. 经历，经受；接受 ', 
		     kaodian: '',
         liju1: 'New recruits have been undergoing training in recent weeks.',
         chinese1: '新兵们最近几周一直在接受训练。',
         liju2: '',
         chinese2: '',
		      liju3:'',
         chinese3:''	
       }
      ,
       {
         id: '3456',
         word: 'undergraduate ',
		 ciyi : ' n. 大学生；大学肄业生  ', 
		 kaodian: '',
         liju1: 'Economics undergraduates are probably the brightest in the university.',
         chinese1: '经济学本科生很可能是该大学里最聪明的学生。',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	
       }
	   ,
       {
         id: '3457',
         word: 'underground  ',
		 ciyi : '  ad. 在地下a. 秘密的；地下的n. 地铁', 
		 kaodian: '',
         liju1: ' Solid low-level waste will be disposed of deep underground.',
         chinese1: '低放射性固体废物将被弃置在地下深处。',
         liju2: 'The underground Kashmir Liberation Front.',
         chinese2: '秘密的克什米尔解放阵线。',
         liju3:"I don't travel on the underground late at night.",
         choinese3:'我深夜不坐地铁。'
       }
	   ,
       {
         id: '3458',
         word: ' underlie',
		    ciyi : 'vt. 成为……的基础；位于……之下 ',
		     kaodian: '',
         liju1: 'Its ideas of harmony with nature underlie many aspects of Chinese culture, from calligraphy and painting to architecture and medicine. ',
         chinese1: '其自然和谐的思想是中国文化多方面的基础，从书法，绘画到建筑和医术。',
         liju2: 'The skin was underlain by the muscle.',
         chinese2: '皮肤下面是肌肉。',
         liju3:'',
         choinese3:''   
       }
	   ,
       {		 
      
         id: '3459',
         word: 'underline ',
		     ciyi : ' vt. 强调；在…下面划线',
         liju1: 'In his speech he underlined several points.',
	        kaodian: '',	 
         chinese1: '在他讲话中他强调了几点。',
         liju2: 'Underline the following that apply to you.',
         chinese2: '在以下适用于你的部分下面划线。',
         liju3:'',
         choinese3:''
       }
	   ,
       {
         id: '3460',
         word: 'underlying ',
		 ciyi : '  a. 潜在的；根本的；在下面的',
		 kaodian: '', 
         liju1: 'To stop a problem you have to understand its underlying causes.',
         chinese1: '要解决问题，你得了解其潜在原因。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
		  }
      ,
       {
         id: '3461',
         word: ' undermine ',
         liju1: ' vt. 暗中破坏，逐渐削弱',
		 kaodian: '', 
		 ciyi : ' ',
         chinese1: 'His enemies are spreading rumours to undermine his authority.',
         liju2: '他的敌人在散布谣言来暗中破坏他的威信。',
         chinese2: '',
         liju3:'',
         choinese3:''
       }
	  ,
       {
         id: '3462',
         word: 'underneath ',
		 ciyi : '  prep. 在…的下面ad. 在下面；在底下',
		 kaodian: '', 
         liju1: 'A cat was sleeping underneath the table.',
         chinese1: '一只猫在桌子下面睡觉。',
         liju2: 'Check the actual construction of the chair by looking underneath.',
         chinese2: '看一下椅子的底部来检查它的实际结构。',
		 liju3:'',
         chinese3:''	
       }
      ,
       {
         id: '3463',
         word: 'undertake ',
		 ciyi : 'vt. 承担，从事；保证；同意 ',
		 kaodian: '', 
         liju1: 'She undertook the task of monitoring the elections.',
         chinese1: '她承担了监督选举的任务。',
         liju2: 'We could undertake the work for the time being.',
         chinese2: '我们可以暂时从事这项工作。',
		 liju3:'We cannot undertake that we shall finish the work in a week.',
         chinese3:'我们不能保证一周内完成这项工作。'	
       }
      ,
       {
         id: '3464',
         word: 'undesirable ',
		 ciyi : '  a. 不受欢迎的；不合需要的',
		 kaodian: '', 
         liju1: 'He will mention the relevant laws that fence out undesirable immigrants. ',
         chinese1: '他将提及有关禁止不受欢迎的移民入境的法律。',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	
       }
      ,
       {
         id: '3465',
         word: ' undo ',
		 ciyi : ' vt.解开；破坏；松开',
		 kaodian: ' He undid his belt because it was too tight.', 
         liju1: '他解开了他的腰带，因为它太紧了。',
         chinese1: '',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	
		  }
      ,
       {
         id: '3466',
         word: 'uneasy ',         
		 ciyi : ' a.心神不安的；不稳定的；紧张的 ',
		 kaodian: '', 
         chinese1: 'He looked uneasy and refused to answer questions.',
		 liju1: '他看起来心神不安，并且拒绝回答问题。',
		 chinese2: 'There is an uneasy relationship between us and the politicians.',
         liju2: '我们与政客之间有种不稳定的关系。',        
         liju3:'',
         choinese3:''
		   }
      ,
       {
         id: '3467',
         word: ' unemployment',
		 ciyi : 'n. 失业；失业率；失业人数 ',
		 kaodian: '', 
         liju1: 'We are battling against inflation and unemployment. ',
         chinese1: '我们正与通货膨胀和失业做斗争。',
         liju2: 'The unemployment remained stubbornly high.',
         chinese2: '失业人数一直居高不下。',
		 liju3:'',
         chinese3:''	
		  }
      ,
       {
         id: '3468',
         word: ' unexpected',         
		 ciyi : ' a. 意外的，想不到的',
		 kaodian: '', 
		 liju1: 'His death was totally unexpected.',
         chinese1: '他的死完全出人意料。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
		   }
      ,
       {
         id: '3469',
         word: 'unfold ',
		 ciyi : 'v. 打开；呈现；展开；显露 ',
		 kaodian: '', 
         liju1: 'The enchanting scenery of the West Lake unfolds before our eyes.',
         chinese1: '西湖美景在眼前展开。',
         liju2: 'The beautiful landscapes unfolded absolutely before us as we drove up the slope.',
         chinese2: '当我们驶上山坡时，眼前的美景一览无余。',
		 liju3:'',
         chinese3:''	
		
  }
      ,
       {
         id: '3470',
         word: 'unfortunately  ',
		 ciyi : 'ad. 不幸地；可惜地 ',         		 
		 kaodian: '', 
		 liju1: ' Unfortunately, I was one of them. ',
         chinese1: '不幸的是，我就是其中之一。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		   }
      ,
       {
         id: '3471',
         word: ' unify',
		 ciyi : ' vt. 统一；使相同，使一致',
		 kaodian: '', 
         liju1: "He pledged to unify the city's political factions.",
         chinese1: '他保证要统一全市的政治小集团。',
         liju2: 'The colonies unified to from a sovereign nation.',
         chinese2: '殖民地统一成了一个独立主权的国家。',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3472',
         word: ' union ',
		 ciyi : 'n. 工会；协会；联合；一致 ',         		 
		 kaodian: '', 
		 liju1: 'Do all teachers have a right to join a union?',
         chinese1: '所有的教师都有权利加入工会吗？',
         liju2: 'Tanzania is a union of the states of Tanganyika and Zanzibar.',
         chinese2: '坦桑尼亚是坦噶尼喀州和桑给巴尔州的联合。',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3473',
         word: '  unique ',
		 ciyi : ' a. 独特的；独一无二的',         		 
		 kaodian: '', 
		 liju1: "Each person's signature is unique.",
         chinese1: '每个人的签名是独一无二的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3474',
         word: 'unity  ',
		 ciyi : ' n. 团结；一致；联合；统一体，整体 ',         		 
		 kaodian: '', 
		 liju1: 'Speakers at the rally expressed sentiments of unity.',
         chinese1: '集会上的发言者们表达了团结的观点。',
         liju2: 'We have to act to preserve the unity of this nation.',
         chinese2: '我们必须行动起来以维护这个国家的统一。',
         liju3:'',
         choinese3:''		
  }
      ,
       {
         id: '3475',
         word: '  universal',
		 ciyi : '  a. 宇宙的；普遍的；通用的',         		 
		 kaodian: '', 
		 liju1: 'Social development suggests universal exploration.',
         chinese1: '社会的进步促使人类做出对宇宙空间的探索。',
         liju2: 'The law of action and reaction is universal. ',
         chinese2: '作用和反作用的定律是通用的。',
         liju3:'',
         choinese3:''		
		   }
      ,
       {
         id: '3476',
         word: ' universe ',
		 ciyi : ' n. 宇宙；世界 ',
		 kaodian: '', 
         liju1: "Einstein's equations showed the universe to be expanding.",
         chinese1: '爱因斯坦的方程式表明宇宙正在扩大。',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3477',
         word: ' unlikely',
		 ciyi : ' a. 不太可能的；未必的',         		 
		 kaodian: '', 
		 liju1: 'As with many technological revolutions, you are unlikely to be aware of it.',
         chinese1: '正如很多技术革命一样，你不太可能意识到它。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3478',
         word: ' unload',
		 ciyi : ' vi. 卸货；退子弹',         		 
		 kaodian: '', 
		 liju1: ' They unloaded the books from the truck.',
         chinese1: '他们把书从卡车上卸下来。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3479',
         word: 'update ',
		 ciyi : ' vt. 使现代化；校正，更新 ',         		 
		 kaodian: '', 
		 liju1: 'Many old houses have been updated with modern facilities.',
         chinese1: '许多老房子都添设了现代设备而变成很入时的了。',
         liju2: 'He was back in the office, updating the work schedule on the computer.',
         chinese2: '他回到办公室，在计算机上更新了工作日程。',
         liju3:'',
         choinese3:''		
        }
      ,
       {
         id: '3480',
         word: ' upgrade ',
		 ciyi : 'vt. 使升级；提升；改良品种 ',         		 
		 kaodian: '', 
		 liju1: 'You have to upgrade your computer. ',
         chinese1: '你的计算机需要升级。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		   }
      ,
       {
         id: '3481',
         word: ' uphold ',
		 ciyi : ' vt. 支撑；维持；赞成',
		 kaodian: '', 
         liju1: "Four large columns upheld the building's heavy roof.",
         chinese1: '四根大柱子支撑着这座建筑物的沉重屋顶。',
         liju2: "The high court upheld the lower court's decision.",
         chinese2: '高级法院维持低级法院的判决。',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3482',
         word: ' upper',
		 ciyi : ' a. 上面的，上部的；较高的',         		 
		 kaodian: '', 
		 liju1: 'There is a good restaurant on the upper floor.',
         chinese1: '楼上有一家很好的餐馆。',
         liju2: 'This block is where the upper class lives.',
         chinese2: '这个街区住的都是上等阶级。',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3483',
         word: 'upright ',
		 ciyi : 'a. 正直的，诚实的；垂直的ad. 竖立着 ',         		 
		 kaodian: '', 
		 liju1: 'In the film she was cast as a hardworking upright middleaged woman.',
         chinese1: '她在这部影片中扮演了一个勤劳正直的中年妇女。',
         liju2: 'Anything in a leaning position is not upright. ',
         chinese2: '偏置的任何物体都不是垂直的。',
         liju3:'The pet dog can stand upright with its tail dragging on the floor.',
         choinese3:'这只宠物狗可以尾巴竖直地站起来。'	
       }
      ,
       {
         id: '3484',
         word: 'uproar  ',
		 ciyi : 'n. 骚动；喧嚣 ',         		 
		 kaodian: '', 
		 liju1: ' The announcement caused uproar in the crowd.',
         chinese1: '公告在人群中引起了一阵骚动。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
  }
      ,
       {
         id: '3485',
         word: 'upset ',
		 ciyi : ' vt. 使心烦；扰乱；推翻n. 混乱；翻倒 ',         		 
		 kaodian: '', 
		 liju1: ' Losing the ring upset her very much.',
         chinese1: '指环的遗失使她很心烦意乱。',
         liju2: "I've upset a cup of coffee on my shirt.",
         chinese2: '我打翻了一杯咖啡，洒在我的衬衫上了。',
         liju3:'Markets are very sensitive to any upsets in the Japanese economic machine.',
         choinese3:'市场对日本经济机器里的任何混乱都是非常敏感的。'		
		   }
      ,
       {
         id: '3486',
         word: ' up-to-date',
		 ciyi : ' a. 最新的；新式的 ',
		 kaodian: '', 
         liju1: 'Web services are always up-to-date and available.',
         chinese1: '网络服务总是最新的且随时可用。',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3487',
         word: ' upward',
		 ciyi : ' a. 向上的；上升的ad. 向上；往上',         		 
		 kaodian: '', 
		 liju1: 'She started once again on the steep upward climb.',
         chinese1: '她再次沿着峭壁开始向上攀爬。',
         liju2: 'They climbed upward along the steep cliffs surrounding the village.',
         chinese2: '他们沿着环绕村庄的陡峭悬崖向上爬。',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3488',
         word: '  urban',
		 ciyi : 'a. 城市的；住在都市的 ',         		 
		 kaodian: '', 
		 liju1: 'The directions of urban development have been marked out.  ',
         chinese1: '城市发展的规划已制定出来了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3489',
         word: ' urge ',
		 ciyi : 'vt.力劝，催促；强烈希望；鼓励n. 强烈的欲望 ',         		 
		 kaodian: '', 
		 liju1: ' They urged Congress to approve plans for their reform programme.',
         chinese1: '他们敦促国会批准他们有关改革项目的计划。',
         liju2: 'He had an urge to open a shop of his own.',
         chinese2: '他强烈希望想开一家自己的商店。',
         liju3:'He could no longer resist the urge to go and see Nancy.',
         choinese3:'他再也抑制不住去见南希的强烈愿望。'		
  }
      ,
       {
         id: '3490',
         word: ' urgent  ',
		 ciyi : '  a. 紧急的；急迫的',         		 
		 kaodian: '', 
		 liju1: 'His voice was low and urgent.',
         chinese1: '他的声音低沉而急切。',
         liju2: 'Some urgent business took me away from Shanghai.',
         chinese2: '有些紧急事务使我离开上海。',
         liju3:'',
         choinese3:''		
		   }
      ,
       {
         id: '3491',
         word: ' usage ',
		 ciyi : ' n. 使用；用法；惯例',
		 kaodian: '', 
         liju1: 'He was a stickler for the correct usage of English.',
         chinese1: '他是一个坚持英语的正确使用的人。',
         liju2: 'The usage is now firmly established.',
         chinese2: '这种用法现已得到确认。',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3492',
         word: 'utilise/utilize  ',
		 ciyi : 'vt. 利用 ',         		 
		 kaodian: '', 
		 liju1: 'Sound engineers utilize a range of techniques to enhance the quality of the recordings.',
         chinese1: '音响工程师利用一系列的技术来提高录音质量。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3493',
         word: ' utmost ',
		 ciyi : '  n. 极限；最大可能a. 极度的；最远的',         		 
		 kaodian: '', 
		 liju1: 'He would have done his utmost to help her.',
         chinese1: '他本来会尽最大努力帮助她。',
         liju2: 'In a diplomatic conversation, the choice of words is of the utmost importance.',
         chinese2: '在外交会谈中，措辞极为重要。',
         liju3:'This star is the utmost known planet in the solar system.',
         choinese3:'这颗星星是太阳系已知行星中最远的一颗。'	
       }
      ,
       {
         id: '3494',
         word: 'utter  ',
		 ciyi : 'vt. 发出，表达a. 完全的；彻底的 ',         		 
		 kaodian: '', 
		 liju1: ' He uttered a cry of pain.',
         chinese1: '他发出一声疼痛的叫喊。',
         liju2: 'The utter naturalness of my partner at once set me at ease.',
         chinese2: '搭档十分自然的状态让我立刻自在了起来。',
         liju3:'',
         choinese3:''		
  }
      ,
       {
         id: '3495',
         word: ' vacant',
		 ciyi : 'a. 空的；空闲的 ',         		 
		 kaodian: '', 
		 liju1: 'Halfway down the bus was a vacant seat.',
         chinese1: '这辆公共汽车中部有个空座。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		   }
      ,
       {
         id: '3496',
         word: 'vaccine  ',
		 ciyi : ' n. 疫苗  ',
		 kaodian: '', 
         liju1: 'Anti-malarial vaccines are now undergoing trials.',
         chinese1: '抗疟疾疫苗现在正处于试验阶段。',
         liju2: '',
         chinese2: '',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3497',
         word: '  vacuum',
		 ciyi : 'n. 真空；真空吸尘器vt. 收集 ',         		 
		 kaodian: '', 
		 liju1: 'On Saturdays we dust and vacuum. ',
         chinese1: '每星期六我们扫除灰尘并用真空吸尘器打扫。',
         liju2: 'The information firm was busy vacuuming up data from the far corners of the world.',
         chinese2: '信息公司忙于收集来自世界各地的数据。',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3498',
         word: '  vagu',
		 ciyi : 'a.含糊的；不明确的；暧昧的 ',         		 
		 kaodian: '', 
		 liju1: 'The description was pretty vague.',
         chinese1: '这项描述是相当含糊的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3499',
         word: ' vain',
		 ciyi : 'a. 徒劳的；自负的；无用的n. 徒劳，自费 ',         		 
		 kaodian: '', 
		 liju1: 'The drafting committee worked through the night in a vain attempt to finish on schedule.',
         chinese1: '起草委员会徒劳的通宵工作想按期完成工作。',
         liju2: 'Mrs. Elton was a vain woman who only satisfied with herself.',
         chinese2: '埃尔顿太太是个自负的女人，只对自己满足。',
         liju3:'The police searched in vain for the missing child.',
         choinese3:'警方没有找到走失的孩子。'
       }
      ,
       {		 
       
         id: '3500',
         word: ' valid',
		 ciyi : 'a. 有效的；有根据的；合法的  ',         		 
		 kaodian: '', 
		 liju1: 'They put forward many valid reasons for not exporting.',
         chinese1: '他们提出了许多有根据的理由来反对出口。',
         liju2: 'All tickets are valid for two months.',
         chinese2: '所有的票在两个月内有效。',
         liju3:'',
         choinese3:''		
		   }
      ,
       {
         id: '3501',
         word: ' valve',
		 ciyi : '  n. 阀；真空管；电子管',
		 kaodian: '', 
         liju1: 'The fireman opens the valve, sending out a huge flume of water towards the file.',
         chinese1: '消防员打开阀门让大股的水柱喷向火苗。',
         liju2: 'The valve in this stereo set is broken.',
         chinese2: '这套音响设备的电子管坏了。',
		 liju3:'',
         chinese3:''	  
       }
      ,
       {
         id: '3502',
         word: ' van',
		 ciyi : ' n. 大篷车；厢式货车 ',         		 
		 kaodian: '', 
		 liju1: 'The coffin was loaded into the van of the train.',
         chinese1: '棺材被装进了火车的行李车厢内。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
	   }
      ,
       {
         id: '3503',
         word: '  vanish',
		 ciyi : '  vi. 消失；突然不见；消散',         		 
		 kaodian: '', 
		 liju1: 'The mysterious woman passenger vanished.',
         chinese1: '这位神秘的女乘客突然不见了。',
         liju2: 'Our hopes have vanished.',
         chinese2: '我们的希望已烟消云散。',
         liju3:'',
         choinese3:''	
      
       }
      ,
       {
         id: '3504',
         word: ' vanity',
		 ciyi : ' n. 虚荣心；浮华',         		 
		 kaodian: '', 
		 liju1: 'Her sarcasm wounded his vanity. Her sarcasm wounded his vanity. ',
         chinese1: '她挖苦的语言刺伤了他的虚荣心。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3505',
         word: 'vapor ',
		 ciyi : ' n. 蒸汽；烟雾 ',         		 
		 kaodian: '', 
		 liju1: 'If you start with sodium vapor and chlorine gas, electron transfer will occur. ',
         chinese1: '如果从以钠蒸汽和氯气开始，电子传递就会发生了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3506',
         word: 'variable ',
		 ciyi : 'a. 多变的；可变的；变异的n. 变量 ',         		 
		 kaodian: '', 
		 liju1: 'The potassium content of foodstuffs is very variable.',
         chinese1: '食品中钾的含量是多变的。',
         liju2: 'The total costs of our company include variable costs.',
         chinese2: '我们公司的成本中包括可变成本。',
         liju3:'He missed a variable so you got a wrong answer.',
         choinese3:'他漏掉了一个变量，所以得出错误的答案。'		
       }
      ,
       {
         id: '3507',
         word: 'variation ',
		 ciyi : ' n. 变化；变异，变种 ',         		 
		 kaodian: '', 
		 liju1: 'This delicious variation on an omelette is quick and easy to prepare.',
         chinese1: '这种略有变化的美味煎蛋饼做起来又快又容易。',
         liju2: 'This variation is not all due to censorship. ',
         chinese2: '这种变异并非仅仅是由于审查。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3508',
         word: ' variety',
		 ciyi : ' n. 多种多样；种类；品种',         		 
		 kaodian: '', 
		 liju1: "Susan's idea of freedom was to have variety in her life style.",
         chinese1: '苏珊对自由的理解就是拥有生活方式的多样化。',
         liju2: "I'm always pleased to try out a new variety.",
         chinese2: '我一直乐于尝试新的品种。',
         liju3:'',
         choinese3:''		 
		  }
      ,
       {
         id: '3509',
         word: ' vary',
		 ciyi : 'vi. 变化；改变；使多样化 ',         		 
		 kaodian: '', 
		 liju1: 'The demand varies with the season.',
         chinese1: '需求随季节而变化。',
         liju2: 'I can vary the speed at will.',
         chinese2: '我可以随意改变速度。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3510',
         word: ' vast ',
		 ciyi : ' a. 辽阔的；巨大的；大量的；巨额的',         		 
		 kaodian: '', 
		 liju1: ' Vast meadows stretch to the east. ',
         chinese1: '辽阔的草场向东伸展。',
         liju2: 'The actors were brought from Paris to London at vast expense.',
         chinese2: '这些演员是花巨资从巴黎请到伦敦的。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3511',
         word: ' vegetarian',
		 ciyi : 'n. 素食者；食草动物 ',         		 
		 kaodian: '', 
		 liju1: 'You absolutely do not have to be a vegetarian to simplify your meals.',
         chinese1: '你绝对不需要成为一个素食主义者来精简用餐。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3512',
         word: 'vegetation ',
		 ciyi : ' n. 植被；植物，草木',         		 
		 kaodian: '', 
		 liju1: 'The inn has a garden of semi-tropical vegetation.',
         chinese1: '这家小旅馆拥有一个亚热带植物园。',
         liju2: 'Some parts of the country are almost bare of vegetation. ',
         chinese2: '该国有些地方几乎是草木不生。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3513',
         word: 'vehicle ',
		 ciyi : 'n.车辆；交通工具；媒介 ',         		 
		 kaodian: '', 
		 liju1:  '  The red traffic light indicates that every person and vehicle must stop.',
         chinese1: '红色信号灯表示人和车辆不能通行。',
         liju2: 'Her art became a vehicle for her political beliefs.',
         chinese2: '她的艺术成了她政治信仰的媒介。',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3514',
         word: 'veil ',
		 ciyi : ' n. 面纱；遮蔽物vt. 用面纱掩盖；掩饰 ',         		 
		 kaodian: '', 
		 liju1: "She's got long fair hair but she's got a veil over it.",
         chinese1: '她有长长的金发，却把面纱罩于其上。',
         liju2: 'She veiled her face when she went out into the street.',
         chinese2: '她上街时用面纱蒙着脸。',
         liju3:'The misleading report veiled the facts.',
         choinese3:'骗人的报告掩盖了事实真相。'		
       }
      ,
       {
         id: '3515',
         word: 'vein ',
		 ciyi : ' n. 血管；叶脉；纹理；风格；性情',         		 
		 kaodian: '', 
		 liju1: 'Blue blood flowed in the vein. ',
         chinese1: '她的血管里流着贵族的血。',
         liju2: 'Many veins are found just under the skin.',
         chinese2: '许多静脉就在皮肤下面。',
         liju3:'It is one of his finest works in a lighter vein.',
         choinese3:'这是他使用了较为轻盈的风格的最佳作品之一。'	
       }
      ,
       {
         id: '3516',
         word: ' velocity ',
		 ciyi : 'n.速率；速度 ',         		 
		 kaodian: '', 
		 liju1: 'You have a certain velocity.  ',
         chinese1: '你拥有一定的速度。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3517',
         word: 'velvet ',
		 ciyi : ' n. 天鹅绒，丝绒a. 天鹅绒的；柔软的 ',         		 
		 kaodian: '', 
		 liju1: ' The King was enrobed in velvet. ',
         chinese1: '国王穿着丝绒长袍。',
         liju2: 'Mr. Geller was wearing an ancient velvet tuxedo.',
         chinese2: '盖勒先生穿着一件仿古的丝绒无尾晚礼服。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3518',
         word: ' ventilate',
		 ciyi : ' vt.使通风；给…装通风设备；宣布 ',         		 
		 kaodian: '', 
		 liju1: 'Open the window and ventilate the room.',
         chinese1: '打开窗户，让房间空气流通。',
         liju2: 'The workers spent a week ventilating the factory.',
         chinese2: '这些工人花了一个星期的时间为工厂安装通风设备。',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3519',
         word: 'venture ',
		 ciyi : ' vt. 冒险 vi. 敢于n. 企业；冒险；商业冒险',         		 
		 kaodian: '', 
		 liju1: "Don't venture into the jungle without a guide.",
         chinese1: '没有向导，不要冒险进入丛林中。',
         liju2: 'He ventured all his money on the final try.',
         chinese2: '他以他所有的钱做最后的孤注一掷。',
         liju3:'The insecurity of the venture kept investors away. ',
         choinese3:'这种冒险事业的不安全性使投资者望而却步。'		
       }
      ,
       {
         id: '3520',
         word: 'verbal ',
		 ciyi : ' a. 口头的；文字的；动词的 ',         		 
		 kaodian: '', 
		 liju1: 'Choose one thing each from your first list, and make a verbal agreement to continue to do it.',
         chinese1: '从你们的第一张表里选择一件事，达成口头的协定继续这样做下去。',
         liju2: 'The test has scores for verbal skills, mathematical skills, and abstract reasoning skills.',
         chinese2: '该项测试对文字表达技能、数学技能和抽象推理技能进行记分。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3521',
         word: ' verdict ',
		 ciyi : ' n. 结论；裁定；判断；意见 ',         		 
		 kaodian: '', 
		 liju1: 'The jury returned a unanimous guilty verdict.',
         chinese1: '该陪审团作出了一份一致通过的有罪裁决。',
         liju2: 'John made me taste his soup and then awaited my verdict.',
         chinese2: '约翰让我尝尝他做的汤，然后等待我的评价。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3522',
         word: ' verge',
		 ciyi : '  vi. 濒临，接近；处在边缘n. 边缘',         		 
		 kaodian: '', 
		 liju1: 'He had taken over an old company verging on liquidation.',
         chinese1: '他接办了一家行将破产的老公司。',
         liju2: 'Albania was on the verge of turning into another Cuba or North Korea.  ',
         chinese2: '阿尔巴尼亚处于转变成另一个古巴或北朝鲜的边缘。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3523',
         word: 'verify  ',
		 ciyi : ' vt. 核实；查证',         		 
		 kaodian: '', 
		 liju1: 'I verified the source from which I had that information.',
         chinese1: '我核实了我获知那条信息的来源。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3524',
         word: 'versatile ',
		 ciyi : ' a. 多才多艺的；通用的，万能的  ',         		 
		 kaodian: '', 
		 liju1: 'He is a nimble and versatile wit. ',
         chinese1: '他是一个机敏而又多才多艺的才子。',
         liju2: 'My versatile jackknife can also be used as a can opener.',
         chinese2: '我那把多功能折叠刀还可以用来开罐头。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3525',
         word: ' verse',
		 ciyi : '  n. 诗；韵文；诗节；诗句',         		 
		 kaodian: '', 
		 liju1: 'I have been moved to write a few lines of verse.',
         chinese1: '我曾经被感动得写了几行诗。',
         liju2: 'Please turn this piece of prose into verse. ',
         chinese2: '请把这段散文改写成诗歌。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3526',
         word: ' version',
		 ciyi : 'n. 版本；译文；倒转术；说法 ',         		 
		 kaodian: '', 
		 liju1: 'The distributors will probably bump up the price of the software when the next version is released. ',
         chinese1: '当下一个软件版本公开发行时销售商可能将提高软件的价格。',
         liju2: 'Peter had a comparison of the original text with the English version.',
         chinese2: '彼得把原文和译文作了比较。',
         liju3:'Bob gave his version of the accident in a statement to the police.',
         choinese3:'鲍勃在给警方的陈述中从自己的角度描述了这次事故。'		
       }
      ,
       {
         id: '3527',
         word: 'versus/vs ',
		 ciyi : 'prep. 对；以…为对手；与...相对 ',         		 
		 kaodian: '', 
		 liju1: "Today's football match is France versus Brazil.",
         chinese1: '今天的足球赛是法国队对巴西队。',
         liju2: 'Italy versus Japan is turning out to be a surprisingly well matched competition.',
         chinese2: '意大利对日本队的比赛结果是一场出人意料地势均力敌的比赛。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3528',
         word: 'vertical ',
		 ciyi : '  a. 垂直的，直立的n. 垂直线',         		 
		 kaodian: '', 
		 liju1: 'The climber inched up a vertical wall of rock.',
         chinese1: '那名登山者一点点爬上了一处垂直的岩石峭壁。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3529',
         word: 'vessel ',
		 ciyi : 'n. 船，血管；容器，器皿 ',         		 
		 kaodian: '', 
		 liju1: 'The vessel is fully loaded with cargo for Shanghai. ',
         chinese1: '这艘船满载货物驶往上海。',
         liju2: 'He burst a blood-vessel in a fit of coughing. ',
         chinese2: '他一阵咳嗽咳破了一根血管。',
         liju3:'My heart could not yet hold any anger because it was a broken vessel. ',
         choinese3:'我的内心装不下任何的怒气，因为这是一只破旧的器皿。'		
       }
      ,
       {
         id: '3530',
         word: 'vest ',
		 ciyi : 'n. 背心；汗衫；内衣 ',         		 
		 kaodian: '', 
		 liju1: 'He put on a pair of boxer shorts and a vest.',
         chinese1: '他穿上一条平腿的短裤和一件背心。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3531',
         word: 'veteran ',
		 ciyi : 'n. 老兵；老手 a. 经验丰富的 ',         		 
		 kaodian: '', 
		 liju1: 'They approved a $1.1 billion package of pay increases for the veterans of the Persian Gulf War.',
         chinese1: '他们批准了为参加过波斯湾战争的退伍军人增付11亿美元的一揽子计划。',
         liju2: 'It is not strange that veteran drivers would commit some mistakes.',
         chinese2: '即使经验丰富的司机也会犯错，这并不奇怪。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3532',
         word: 'veto ',
		 ciyi : 'vt. 否决；禁止n. 否决权 ',         		 
		 kaodian: '', 
		 liju1: 'They need 12 votes to override his veto.',
         chinese1: '他们需要12票来推翻他的否决。',
         liju2: "The chairman has the right to veto any of the board's proposals.",
         chinese2: '董事长有权否决董事会的任何建议。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3533',
         word: 'via  ',
		 ciyi : '  prep. 渠道，通过；经由',         		 
		 kaodian: '', 
		 liju1: 'The news reached us via a friend of mine.',
         chinese1: '这个消息是通过我的一个朋友传到我们这里。',
         liju2: 'We drove via Lovech to the old Danube town of Ruse.',
         chinese2: '我们驱车经由洛维奇去了多瑙河畔的古城鲁塞。',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3534',
         word: ' vibrate ',
		 ciyi : 'vt. 使振动；使颤动 ',         		 
		 kaodian: '', 
		 liju1: 'The different notes of a stringed musical instrument are made by vibrating the strings.',
         chinese1: '弦乐器的不同音调是使琴弦颤动而产生的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3535',
         word: 'vice ',
		 ciyi : ' n. 恶习；邪恶 a. 副的；代替的 ',         		 
		 kaodian: '', 
		 liju1: 'His only vice is to get drunk on champagne after concluding a successful piece of business.',
         chinese1: '他惟一的不良习惯就是在成功做成一笔生意之后喝香槟酒至大醉。',
         liju2: 'The man’s life was deeply stained with crimes and vices.',
         chinese2: '这个人的一生被罪行和坏事深深的玷污了。',
         liju3:'The chairman has deputed his voting power to the vice-chairman.  ',
         choinese3:'主席已委托副主席代(理)行(使)投票权。'	
       }
      ,
       {
         id: '3536',
         word: ' vicinity ',
		 ciyi : ' n. 邻近，附近；近处  ',         		 
		 kaodian: '', 
		 liju1: 'There were a hundred or so hotels in the vicinity of the station.',
         chinese1: '在车站附近有大约一百家左右的旅馆。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3537',
         word: 'vicious ',
		 ciyi : ' a. 恶毒的；恶意的；凶残的',         		 
		 kaodian: '', 
		 liju1: "It is a deliberate, nasty and vicious attack on a young man's character.",
         chinese1: '这是对一位青年的人格蓄意的、下流的和恶毒的攻击。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3538',
         word: 'victim ',
		 ciyi : ' n. 受害人；牺牲品；牺牲者',         		 
		 kaodian: '', 
		 liju1: ' He was a victim of racial prejudice.',
         chinese1: '他是种族偏见的一个牺牲品。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3539',
         word: ' video',
		 ciyi : 'n. 录像；电视a. 视频的；电视的；录像的 ',         		 
		 kaodian: '', 
		 liju1: 'She has watched the race on video.',
         chinese1: '她已观看了比赛的录像。',
         liju2: 'The children are addicted to video games. ',
         chinese2: '孩子们醉心于电视游戏。',
         liju3:'Ben’s wife was a video camera so I could record my wedding.',
         choinese3:'本的妻子是电视评论员。',		
		  liju4:'I bought a video camera so I could record my wedding.',
         choinese4:'我买了一台摄像机，这样我就可以把自己的婚礼拍下来。'	
       }
      ,
       {
         id: '3540',
         word: 'view ',
		 ciyi : 'n. 风景；见解 ，观察，视野vt. 观察；考虑；看待 ',         		 
		 kaodian: '', 
		 liju1: 'The view from our window was one of beautiful green countryside.',
         chinese1: '从我们窗口可以看到一片绿色乡村的美景。',
         liju2: 'The major presented his views on urban construction at the meeting.',
         chinese2: '市长在这次会议上就城市建设问题发表了见解。',
         liju3:'I looked over my shoulder for one last view of my house.',
         choinese3:'我转过头来，看了我的房子最后一眼。',	
		 liju4: 'Mary jumps into view wearing a pink dress.',
         chinese4: '玛丽穿着红色礼服跃入大家的眼帘。',
		 iju5: 'We will go and view the house before we buy it.',
         chinese5: '在买房前我们先去看一看房子。',
         liju6:'It’s an issue that can be viewed from his apartment window.',
         choinese6:'这个问题可以从不同角度来看待。'	
       }
      ,
       {
         id: '3541',
         word: ' viewpoint ',
		 ciyi : 'n. 观点，看法 ',         		 
		 kaodian: '', 
		 liju1: ' He iterated his viewpoint. ',
         chinese1: '他重复了他的观点。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3542',
         word: ' vigorous',
		 ciyi : ' a. 有力的；精力充沛的',         		 
		 kaodian: '', 
		 liju1: 'Theodore Roosevelt was a strong and vigorous politician.',
         chinese1: '西奥多·罗斯福是一位身体强壮、精力充沛的政治家。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3543',
         word: ' vinegar',
		 ciyi : ' n. 醋',         		 
		 kaodian: '', 
		 liju1: ' The sugared vinegar is refined from the sugarcane and pine. ',
         chinese1: '加糖的醋是从甘蔗和松木中精炼出来的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3544',
         word: ' violate ',
		 ciyi : 'vt. 违反；侵犯 ',         		 
		 kaodian: '', 
		 liju1: 'She violated the terms of the contract repeatedly.',
         chinese1: '她三番五次地违反合同条款。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3545',
         word: ' violence ',
		 ciyi : '  n. 暴力；暴行；激烈',         		 
		 kaodian: '', 
		 liju1: 'Twenty people were killed in the violence.',
         chinese1: '有20人在这起暴力事件中被杀害。',
         liju2: 'The violence in her tone gave Tyler a shock.',
         chinese2: '她语气激烈，使泰勒大为震惊。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3546',
         word: ' violent',
		 ciyi : ' a. 暴力的；猛烈的；强暴的 ',         		 
		 kaodian: '', 
		 liju1: 'A quarter of current inmates have committed violent crimes.',
         chinese1: '四分之一的在押囚犯实施过暴力犯罪。',
         liju2: 'A violent impact hurtled her forward.',
         chinese2: '一股剧烈的冲击力将她猛地向前抛了出去。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3547',
         word: ' violet',
		 ciyi : ' n. 紫罗兰；紫色；羞怯的人 ',         		 
		 kaodian: '', 
		 liju1: 'The ceiling was richly gilt and picked out in violet. ',
         chinese1: '天花板金碧辉煌，衬托着紫蓝色。',
         liju2: 'The light was beginning to drain from a violet sky.',
         chinese2: '光线正开始从紫罗兰色的天空中渐渐消失。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3548',
         word: ' violin',
		 ciyi : ' n. 小提琴；小提琴手 ',         		 
		 kaodian: '', 
		 liju1: 'Lizzie used to play the violin.',
         chinese1: '莉齐过去常拉小提琴。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3549',
         word: ' virgin',
		 ciyi : ' a.未经使用的，未经开发的 n. 处女',         		 
		 kaodian: '', 
		 liju1: 'The longers could not cut the virgin forest in the national park.',
         chinese1: '伐木工们不能砍伐国家公园中这片未经开发的森林。',
         liju2: 'I was a virgin until I was thirty years old.',
         chinese2: '我到30岁时还是个处女。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3550',
         word: ' virtual ',
		 ciyi : 'a. 虚拟的；实质上的，事实上的 ',         		 
		 kaodian: '', 
		 liju1: 'Up to four players can compete in a virtual world of role playing.',
         chinese1: '最多能有4个人可以在虚拟世界中扮演角色进行角逐。',
         liju2: 'Argentina came to a virtual standstill while the game was being played.',
         chinese2: '阿根廷在比赛进行期间全国上下事实上进入了停顿状态。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3551',
         word: ' virtue ',
		 ciyi : 'n. 美德；优点；贞操；长处 ',         		 
		 kaodian: '', 
		 liju1: ' His virtue is patience.',
         chinese1: '他的美德就是耐心。',
         liju2: 'A virtue of fluorescent lamps is to save electricity.',
         chinese2: '日光灯的一个优点就是省电。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3552',
         word: ' virus',
		 ciyi : ' n. 病毒；恶毒；有害影响',         		 
		 kaodian: '', 
		 liju1: ' There are many different strains of flu virus.',
         chinese1: '有许多不同类型的流感病毒。',
         liju2: 'Bob and Henry wanted to remove the virus of prejudice against each other.',
         chinese2: '鲍勃和亨利想消除彼此之间不好的偏见。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3553',
         word: 'visa ',
		 ciyi : 'n. 签证 ',         		 
		 kaodian: '', 
		 liju1: " His visitor's visa expired.",
         chinese1: '他的访问签证过期了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3554',
         word: 'visible ',
		 ciyi : ' a.看得见的；明显的',         		 
		 kaodian: '', 
		 liju1: 'The warning lights were clearly visible.',
         chinese1: '警示灯清晰可见。',
         liju2: 'The most visible sign of the intensity of the crisis is unemployment.',
         chinese2: '危机加剧的最明显迹象是失业情况。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3555',
         word: 'vision ',
		 ciyi : ' n. 视力；眼光；幻象；洞察力',         		 
		 kaodian: '', 
		 liju1: 'It causes blindness or serious loss of vision.',
         chinese1: '这会引起失明或严重的视力衰退。',
         liju2: 'They acted so as to realize their dreams through their vision and goals. ',
         chinese2: '他们作出行动以便于从眼光和目标中实现自己的梦想。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3556',
         word: 'visual ',
		 ciyi : ' a. 视觉的，看的；栩栩如生的 ',         		 
		 kaodian: '', 
		 liju1: 'This region processes information both from visual cues and from the motion of our eyes. ',
         chinese1: '这个部分处理来自视觉的信号和以及我们眼睛的运动信号。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3557',
         word: 'vital ',
		 ciyi : '  a. 至关重要的；生死攸关的；生命的',         		 
		 kaodian: '', 
		 liju1: 'It is vital that parents give children clear and consistent messages about drugs.',
         chinese1: '至关重要的是，父母们给子女提供关于毒品明确一致的观点。',
         liju2: 'I breathed, and felt my vital energy return.',
         chinese2: '我吸了口气，觉得自己又恢复了活力。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3558',
         word: ' vitamin',
		 ciyi : ' n. 维生素；维他命',         		 
		 kaodian: '', 
		 liju1: ' Vitamin C is destroyed when overheated. ',
         chinese1: '维生素C受热过度就会被破坏。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3559',
         word: 'vivid  ',
		 ciyi : ' a. 生动的；鲜明的；鲜艳的 ',         		 
		 kaodian: '', 
		 liju1: 'He sketched the situation in a few vivid words. ',
         chinese1: '他用几句生动的语言简述了局势。',
         liju2: 'The walls of my room should be painted in vivid green.',
         chinese2: '我房间的墙壁上应涂成鲜绿色。',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3560',
         word: 'vocabulary ',
		 ciyi : '  n. 词汇；词汇量；词汇表',         		 
		 kaodian: '', 
		 liju1: 'His speech is immature, his vocabulary limited.',
         chinese1: '他讲话不成熟，词汇量也有限。',
         liju2: 'The textbook includes an 800-word vocabulary.',
         chinese2: '这本教材包括了八百个单词的词汇表。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3561',
         word: ' vocal',
		 ciyi : '  a. 直言不讳；声音的，发声的n. 声乐作品',         		 
		 kaodian: '', 
		 liju1: ' He has been very vocal in his displeasure over the results.',
         chinese1: '他直言不讳地说出了对结果的不满。',
         liju2: 'Mario’s vocal exercise usually bothered Meg.',
         chinese2: '马里奥的发声练习经常让梅格心烦意乱。',
         liju3:'Mr. Williams will give with the vocals tonight.',
         choinese3:'威廉斯先生今晚要表演声乐节目。'		
       }
      ,
       {
         id: '3562',
         word: ' vocation',
		 ciyi : '  n. 职业；天职；行业',         		 
		 kaodian: '', 
		 liju1: 'Her vocation is her work as an actress.',
         chinese1: '她适合的职业就是当演员。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3563',
         word: ' void ',
		 ciyi : 'a. 无效的；缺乏的；空的 ',         		 
		 kaodian: '', 
		 liju1: ' We can do this because of the void response for both the requestor and provider. ',
         chinese1: '我们可以这样做是因为请求者和提供者中的响应都是无效的。',
         liju2: 'The boring speech was void of novel ideas.',
         chinese2: '这次枯燥的演讲缺乏新意。',
         liju3:'He stared into the dark void where the battle had been fought.',
         choinese3:'他凝望着那一大片黑洞洞的空地，那里曾是战斗的地方。'		
		  }
      ,
       {
         id: '3564',
         word: ' volcano',
		 ciyi : ' n. 火山',         		 
		 kaodian: '', 
		 liju1: 'The volcano erupted last year killing about 600 people.',
         chinese1: '去年那座火山喷发导致大约六百人丧生。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3565',
         word: ' volt',
		 ciyi : 'n. 伏特； ',         		 
		 kaodian: '', 
		 liju1: 'What is the unit of potential difference? Volt.',
         chinese1: '势能差的单位是什么，伏特。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3566',
         word: 'voltage ',
		 ciyi : 'n. 电压 ',         		 
		 kaodian: '', 
		 liju1: ' The systems are getting smaller and using lower voltages.',
         chinese1: '这些系统正变得更小而且使用更低的电压。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3567',
         word: ' volume',
		 ciyi : ' n. 大量；体积；音量；响度；卷',         		 
		 kaodian: '', 
		 liju1: 'When egg whites are beaten they can rise to seven or eight times their original volume.',
         chinese1: '打过的蛋清，体积可以涨到原来的七八倍。',
         liju2: 'He turned down the volume.',
         chinese2: '他调低了音量。',
         liju3:'We then attach each volume group to its primary server.  ',
         choinese3:'然后，我们将每个卷组挂到了其主服务器上。'	
        }
      ,
       {
         id: '3568',
         word: ' voluntary',
		 ciyi : ' a. 自愿的；志愿的',         		 
		 kaodian: '', 
		 liju1: 'Participation in the program would be voluntary and participants could prepay the government loan at any time.  ',
         chinese1: '参加这以项目是自愿的，参与者可以在任何时间将贷款预付给政府。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3569',
         word: 'volunteer  ',
		 ciyi : ' n. 志愿者；志愿兵a. 志愿的vt. 自愿',         		 
		 kaodian: '', 
		 liju1: ' She now helps in a local school as a volunteer three days a week.',
         chinese1: '她现在作为一名志愿者每周3天在当地一所学校帮忙。',
         liju2: 'Those guys are unlikely to go to the church to do volunteer work.',
         chinese2: '那帮家伙不可能去教堂做义工。',
         liju3:'She volunteered for a dangerous mission.',
         choinese3:'她自愿参加一项危险的任务。'		
       }
      ,
       {
         id: '3570',
         word: ' vote ',
		 ciyi : ' n. 投票，选举；选票；得票数 ',         		 
		 kaodian: '', 
		 liju1: 'He walked to the local polling place to cast his vote.',
         chinese1: '他走到当地的投票点去投票。',
         liju2: 'Had Paul received six more votes in the last election, he would be our chairman now.',
         chinese2: '如果保罗在上次选举中多得六票，那他现在就是我们的主席了。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3571',
         word: ' vowel',
		 ciyi : ' n. 元音；母音',         		 
		 kaodian: '', 
		 liju1: 'Always end the name of your child with a vowel, so that when you yell the name will carry. ',
         chinese1: '一定让孩子的名字以元音结尾，这样当你喊叫时，这样的名字会助你一臂之力。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3572',
         word: ' vulgar ',
		 ciyi : ' a. 庸俗的；粗野的；普通的',         		 
		 kaodian: '', 
		 liju1: ' He’s got to pander to the vulgar and stupid audiences. ',
         chinese1: '他不得不去迎合那些庸俗愚昧的观众。',
         liju2: 'Martin noticed a girl screaming vulgar language at her boyfriend to get out of the car.',
         chinese2: '马丁注意到一个女孩很粗野的喊她男朋友下车。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3573',
         word: ' vulnerable',
		 ciyi : 'a. 易受攻击的，易受…的攻击 ',         		 
		 kaodian: '', 
		 liju1: 'Old people are particularly vulnerable members of our society.',
         chinese1: '老人是我们社会中特别容易受到伤害的成员。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
		  }
      ,
       {
         id: '3574',
         word: 'wagon  ',
		 ciyi : ' n. 货车，敞篷车箱',         		 
		 kaodian: '', 
		 liju1: 'Merrick was standing unsteadily in the wagon and taking with others.',
         chinese1: '梅里克摇摇晃晃地站在敞篷车厢里，与别人聊着天。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3575',
         word: ' wage ',
		 ciyi : ' n. 工资；报酬vt.进行；开展 ',         		 
		 kaodian: '', 
		 liju1: 'His wages have gone up.',
         chinese1: '他的工资涨了。',
         liju2: 'The government, along with the three factions that had been waging a civil war, signed a peace agreement.',
         chinese2: '政府和发动了内战的3方一起签订了1份和平协议。',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3576',
         word: 'waken ',
		 ciyi : 'v. 唤醒；使觉醒 ',         		 
		 kaodian: '', 
		 liju1: 'I was wakened from sleep by the earthquake last night.',
         chinese1: '我昨晚被地震惊醒。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3577',
         word: ' wander',
		 ciyi : ' vi. 徘徊；漫步；迷路；离题',         		 
		 kaodian: '', 
		 liju1: ' He had nothing to do but wander in the streets all day.',
         chinese1: '他无事可做，整天在街上游荡。',
         liju2: 'The stranger wandered off the road into the forest.',
         chinese2: '陌生人迷了路误入森林。',
         liju3:"You might wander from the subject if you don't pay close attention.",
         choinese3:'如果你不认真的话，会离题的。'	
        }
      ,
       {
         id: '3578',
         word: ' ward',
		 ciyi : ' n. 病房；行政区；受监护人vt. 保卫；守护',         		 
		 kaodian: '', 
		 liju1: 'They transferred her to the psychiatric ward.',
         chinese1: '他们把她转移到了精神病病房。',
         liju2: 'The country is divided into 50 wards.',
         chinese2: '该国被规划分成50个行政区。',
         liju3:'The courts made him a ward of his uncle.',
         choinese3:'法院指定叔叔为他的监护人。',	
		liju4:'Mary kinds of plant produce chemicals that help to ward off the invaders.',
         choinese4:'很多植物分泌化学物质来帮助自己抵御入侵者。'		
       } 
      ,
       {
         id: '3579',
         word: ' wardrobe',
		 ciyi : 'n. 衣厨；行头；全部服装 ',         		 
		 kaodian: '', 
		 liju1: ' Her wardrobe consists primarily of huge cashmere sweaters and tiny Italian sandals.',
         chinese1: '她的衣服主要是宽大的开司米毛衣和纤小的意大利凉鞋。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3580',
         word: ' warehouse',
		 ciyi : ' n. 仓库；货栈  ',         		 
		 kaodian: '', 
		 liju1: 'I stored up the old furniture in the warehouse. ',
         chinese1: '我把旧家具存放在了仓库里。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
       }
      ,
       {
         id: '3581',
         word: ' warfare',
		 ciyi : '  n. 战争；冲突',         		 
		 kaodian: '', 
		 liju1: 'Much of the violence is related to drugs and gang warfare.',
         chinese1: '很多暴力行为都与毒品和帮派冲突有关。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''		
       }
      ,
       {
         id: '3582',
         word: ' warmth',
		 ciyi : 'n. 温暖；激动；热心；热情  ',         		 
		 kaodian: '', 
		 liju1: ' She went further into the room, drawn by the warmth of the fire.',
         chinese1: '她被火的温暖吸引着，走进了房间。',
         liju2: 'The warmth of the doctor made the patient feel assured.',
         chinese2: '医生的热情让病人感到踏实。',
         liju3:'',
         choinese3:''	
        }
      ,
       {
         id: '3583',
         word: 'warrant ',
		 ciyi : 'n. 许可证；正当理由vt. 保证；担保 ',         		 
		 kaodian: '', 
		 liju1: 'You can’t arrest me without a warrant of arrest.',
         chinese1: '没有追捕令，你就不能逮捕我。',
         liju2: 'The manufacturers warrant that all machines they supply are properly tested.',
         chinese2: '生产厂家保证他们生产的所有机器都经过严格检验。',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3584',
         word: 'waterfall ',
		 ciyi : ' n. 瀑布；瀑布似的东西 ',         		 
		 kaodian: '', 
		 liju1: 'There is a bridge below the waterfall. ',
         chinese1: '在瀑布下游有一座桥。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3585',
         word: 'waterproof ',
		 ciyi : ' a. 防水的，不透水的  ',         		 
		 kaodian: '', 
		 liju1: 'The eyeliner should be waterproof, as well as hypoallergenic if you have sensitive skin. ',
         chinese1: '眼线应该是防水的，如果你是敏感肌肤还应选用低过敏材质的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3586',
         word: 'watt ',
		 ciyi : ' n. 瓦特 ',         		 
		 kaodian: '', 
		 liju1: ' Use a 3 amp fuse for equipment up to 720 watts.',
         chinese1: '在达到720瓦特的设备上要用3安培的保险丝。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3587',
         word: ' wax',
		 ciyi : 'n. 蜡；蜡状物vt. 给…上蜡 ',         		 
		 kaodian: '', 
		 liju1: ' There were coloured candles which had spread pools of wax on the furniture.',
         chinese1: '彩色蜡烛在家具上留下了一摊摊的蜡油。',
         liju2: 'Tom swept, mopped, and then waxed the floor.',
         chinese2: '汤姆扫了地，拖了地，还给地板上了蜡。',
         liju3:'',
         choinese3:''
	 }
      ,
       {
         id: '3588',
         word: ' wealthy',
		 ciyi : ' a. 富有的；充分的；丰裕的 ',         		 
		 kaodian: '', 
		 liju1: 'Some people suppose me to be wealthy. ',
         chinese1: '有些人认为我是富有的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3589',
         word: 'weary ',
		 ciyi : '  a. 疲倦的；厌烦的；令人厌烦的vt. 使疲倦；使厌烦',         		 
		 kaodian: '', 
		 liju1: 'After the rehearsal, the weary mechanic repaired the gears with shears and spear. ',
         chinese1: '排练完后，疲倦的机修工用 剪刀和矛修理了齿轮装置.',
         liju2: 'I grew weary of the noises made by that naughty boy.',
         chinese2: '我对那个淘气的孩子弄出的噪音感到厌烦。',
         liju3:"They're getting awfully weary of this silly war.",
         choinese3:'他们对这场愚蠢的战争感到极其厌倦。'	 
	    }
      ,
       {
         id: '3590',
         word: ' weave ',
		 ciyi : '  vt. 编织；编排',         		 
		 kaodian: '', 
		 liju1: ' Jenny weaves baskets from willow she grows herself.',
         chinese1: '珍妮用自己栽种的柳树的枝条编织篮子。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3591',
         word: 'wedge ',
		 ciyi : 'n. 楔子；楔形物vt. 楔入；楔住 ',         		 
		 kaodian: '', 
		 liju1: 'Serve with a wedge of lime.',
         chinese1: '和一块楔形酸橙一起端上桌。',
         liju2: 'Please wedge this cabinet to keep it from tipping.',
         chinese2: '请在橱底楔入楔子以防它倾斜。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3592',
         word: 'weed ',
		 ciyi : 'v. 除草n. 杂草，野草 ',         		 
		 kaodian: '', 
		 liju1: 'They were weeding under the scorching sun at this time yesterday.。',
         chinese1: '昨天的这个时候他们正在烈日下除草。',
         liju2: 'With repeated applications of weedkiller, the weeds were overcome.',
         chinese2: '反复的施除草剂后，杂草终于被消灭了。',
         liju3:'',
         choinese3:''
 }
      ,
       {
         id: '3593',
         word: 'weep  ',
		 ciyi : 'vt. 哭泣；流泪 n. 哭泣；悲哀  ',         		 
		 kaodian: '', 
		 liju1: 'The weeping family hugged and comforted each other.',
         chinese1: '一家人相拥而泣，互相安慰着。',
         liju2: 'He turned to leave, whereat she began to weep.',
         chinese2: '他转身离去，于是她哭了起来。',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3594',
         word: ' weird',
		 ciyi : 'a. 古怪的；离奇的；神秘的  ',         		 
		 kaodian: '', 
		 liju1: ' Drugs can make you do all kinds of weird things.',
         chinese1: '毒品可以让你做出各种各样奇怪的事情来。',
         liju2: 'We started out talking about weird stuff, which lead to talk of ghosts and the like.',
         chinese2: '我们开始是讲一些怪异的事情，渐渐话题就转到了鬼怪之类的东西。',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3595',
         word: 'weld ',
		 ciyi : ' n. 焊接；焊接点vt. 焊接；使结合',         		 
		 kaodian: '', 
		 liju1: 'Where did you learn to weld?',
         chinese1: '你在哪里学会的焊接技术？',
         liju2: 'Working together for two months welded them into a group.',
         chinese2: '在一起工作两个月使他们形成了一个团体。',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3596',
         word: ' welfare',
		 ciyi : ' n. 福利；幸福；安宁',         		 
		 kaodian: '', 
		 liju1: "I do not think he is considering Emma's welfare.",
         chinese1: "I do not think he is considering Emma's welfare.",
         liju2: 'The subject touches our welfare. ',
         chinese2: '这题目关系到我们的福利。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3597',
         word: ' whale',
		 ciyi : ' 鲸；巨大的东西',         		 
		 kaodian: '', 
		 liju1: 'The receding tide stranded the whale.',
         chinese1: '退潮把鲸鱼搁浅在海滩上。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
       }
      ,
       {
         id: '3598',
         word: ' whatsoever',
		 ciyi : ' pron. 无论什么；任何 ',         		 
		 kaodian: '', 
		 liju1: 'My school did nothing whatsoever in the way of athletics.',
         chinese1: '我的学校就体育运动而言没有任何作为。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3599',
         word: 'whereas ',
		 ciyi : ' conj. 然而；鉴于；反之',         		 
		 kaodian: '', 
		 liju1: 'He had never done anything for them, whereas they had done everything for him. ',
         chinese1: '他从未为他们做过任何事，反之他们却为他做了所有事。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3600',
         word: ' whip ',
		 ciyi : ' vt. 抽打；搅打n. 鞭子；抽打',         		 
		 kaodian: '', 
		 liju1: 'The cowboy was whipping (up) his horse.',
         chinese1: '牛仔在抽打他的马。',
         liju2: 'Whip the eggs, oils and honey together.',
         chinese2: '将鸡蛋、油和蜂蜜搅打在一起。',
         liju3:'The dog groveled before his master when he saw the whip.  ',
         choinese3:'狗看到主人的鞭子就匍匐在主人面前。'			 
	   }
      ,
       {
         id: '3601',
         word: 'whirl ',
		 ciyi : 'n. 旋转，回旋vi. 旋转，回旋 ',         		 
		 kaodian: '', 
		 liju1: ' A whirl of sparkles leaped up the flue.',
         chinese1: '旋转的火花窜出烟堆。',
         liju2: 'The leaves whirled in the wind.',
         chinese2: '树叶在风中旋转。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3602',
         word: ' whisk(e)y',
		 ciyi : ' n. 威士忌酒',         		 
		 kaodian: '', 
		 liju1: 'We drink whisky mixed with beer. ',
         chinese1: '我们喝掺有啤酒的威士忌。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
        }
      ,
       {
         id: '3603',
         word: 'whistle ',
		 ciyi : ' n. 口哨；汽笛；口哨声vt. 吹口哨；鸣汽笛',         		 
		 kaodian: '', 
		 liju1: 'Jackson gave a low whistle.',
         chinese1: '杰克逊低声地吹了一下口哨。',
         liju2: "The ship's whistle kept hooting.",
         chinese2: '轮船上的汽笛呜呜叫。',
         liju3:'The policeman whistled them to stop.',
         choinese3:'警察吹哨制止了他们。'	
		 }
      ,
       {
         id: '3604',
         word: ' wholesome',
		 ciyi : 'a. 有益健康的；健康的；卫生的 ',         		 
		 kaodian: '', 
		 liju1: 'Water is a wholesome drink.  ',
         chinese1: '水是有益健康的饮料。',
         liju2: "For the town's residents, he prescribed square dances and other wholesome forms of entertainment.",
         chinese2: '他还为镇里的居民规定了广场舞蹈和其他一些健康的娱乐形式。',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3605',
         word: ' wholly',
		 ciyi : 'ad. 完全地；全部 ',         		 
		 kaodian: '', 
		 liju1: 'They contract work out wholly. ',
         chinese1: '他们把工作全部包了出去。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3606',
         word: 'wicked ',
		 ciyi : 'a. 邪恶的；恶劣的；恶意的 ',         		 
		 kaodian: '', 
		 liju1: ' She described the shooting as a wicked attack.',
         chinese1: '她把那次射击描述成一次邪恶的攻击。',
         liju2: 'The man in darkness smiled a wicked smile.',
         chinese2: '在黑暗里，那个人不怀好意。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3607',
         word: 'widespread  ',
		 ciyi : ' a. 普遍的；广泛的',         		 
		 kaodian: '', 
		 liju1: 'There is widespread support for the new proposals.',
         chinese1: '这些新提案得到广泛的支持。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
        }
      ,
       {
         id: '3608',
         word: ' widow',
		 ciyi : 'n. 寡妇；孀妇 ',         		 
		 kaodian: '', 
		 liju1: 'She became a widow a year ago.',
         chinese1: '她一年前成了寡妇。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3609',
         word: 'width ',
		 ciyi : ' n. 宽度；广度；宽阔 ',         		 
		 kaodian: '', 
		 liju1: 'Measure the full width of the window.',
         chinese1: '测量一下窗户的总宽度。',
         liju2: 'We admired our professor’s width of knowledge.',
         chinese2: '我们对教授的博学广识表示钦佩。',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3610',
         word: ' wink',
		 ciyi : '  vi. 眨眼；闪烁n. 眨眼；使眼色',         		 
		 kaodian: '', 
		 liju1: ' The strong wind made me wink.',
         chinese1: '大风吹得我直眨眼。',
         liju2: 'Brian winked at his bride-to-be.',
         chinese2: '布赖恩向他的准新娘眨眼示意。',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3611',
         word: ' wisdom',
		 ciyi : ' n. 智慧，才智；格言；至理名言 ',         		 
		 kaodian: '', 
		 liju1: 'It is an anthology that crackles with wit and wisdom. ',
         chinese1: '这是一本妙语连珠篇篇充满智慧的文集。',
         liju2: 'The wisdom passed down from generation to generation.',
         chinese2: '这一格言代代相传。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3612',
         word: ' wit ',
		 ciyi : ' n. 智慧；才智 ',         		 
		 kaodian: '', 
		 liju1: 'She has used her wits to progress to the position she holds today.',
         chinese1: '她用她的机智攀升到今天的这个位置。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
       }
      ,
       {
         id: '3613',
         word: 'witch ',
		 ciyi : ' n. 巫婆，女巫vt. 迷惑；施巫术 ',         		 
		 kaodian: '', 
		 liju1: ' She was swindled out of ￡ 1,000 by a witch.',
         chinese1: '她被一个女巫骗了一千英镑。',
         liju2: 'The princess was witched by the evil queen.',
         chinese2: '公主被邪恶的王后施了巫术。',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3614',
         word: 'withdraw ',
		 ciyi : ' vt. 撤退；缩回；拉开；提取',         		 
		 kaodian: '', 
		 liju1: 'He stated that all foreign forces would withdraw as soon as the crisis ended.',
         chinese1: '他声明危机一结束所有外国军队就会撤退。',
         liju2: 'American TV industry has withdrawn to its domestic market.',
         chinese2: '美国电视产业已经退回到它的国内市场。',
         liju3:"The credit card enables its owner to withdraw as much money from the bank as he has in the bank.",
         chinese3:'信用卡能够让持卡人提取其在银行里的所有钱。'	 
	    }
      ,
       {
         id: '3615',
         word: ' withhold ',
		 ciyi : ' vt. 抑制；阻挡；不给；隐瞒',         		 
		 kaodian: '', 
		 liju1: 'The dam can withhold the pressure of the water.',
         chinese1: '大坝可以阻挡水的压力。',
         liju2: "Police withheld the dead boy's name yesterday until relatives could be told.",
         chinese2: '警察昨天在通知亲属前隐瞒死去男孩的名字。',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3616',
         word: 'withstand ',
		 ciyi : 'vt. 抵挡；禁得起；经受住 ',         		 
		 kaodian: '', 
		 liju1: ' As a politician, he is able to withstand public criticism.',
         chinese1: '作为一名政治家，他经得住公众批评。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3617',
         word: 'witness ',
		 ciyi : ' n.目击者；证据vt. 目击；证明；为…作证 ',         		 
		 kaodian: '', 
		 liju1: 'Witnesses to the crash say they saw an explosion just before the disaster.',
         chinese1: '这起坠机事故的目击者说, 在灾难发生之前他们看到了爆炸。',
         liju2: 'I think she will witness against him. ',
         chinese2: '我认为她会证明他有罪。',
         liju3:'Mary witnesses a storm of wind during her trip.',
         choinese3:'玛丽在旅途中目睹了一场风暴。',
		  liju4:'None could witness the suspect was present at that time.',
         choinese4:'没有证据可以证明嫌疑人当时在场。'	
       }
      ,
       {
         id: '3618',
         word: ' workshop',
		 ciyi : '  n. 研讨会；车间；工场',         		 
		 kaodian: '', 
		 liju1: 'Trumpeter Marcus Belgrave ran a jazz workshop for young artists.',
         chinese1: '鼓手马库斯马贝尔格瑞夫为年轻艺术家们举办了一场爵士乐研讨会。',
         liju2: 'Please take this study material with you to the workshop. ',
         chinese2: '你顺便把这份学习材料带到车间去吧。',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3619',
         word: 'worldwide ',
		 ciyi : '  a. 全世界的ad. 在世界各地',         		 
		 kaodian: '', 
		 liju1: 'Today, doctors are fears a worldwide epidemic.',
         chinese1: '如今，医生们在担心一次世界性的流行。',
         liju2: 'His books have sold more than 20 million copies worldwide.',
         chinese2: '他的书在全世界卖出了两千多万本。',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3620',
         word: ' worship ',
		 ciyi : ' n.礼拜；崇拜 vt. 崇拜；尊敬；做礼拜',         		 
		 kaodian: '', 
		 liju1: ' What day did they worship on? ',
         chinese1: '他们在什么日子做礼拜？',
         liju2: 'Whatever is at the center of your life is what you worship. ',
         chinese2: '你的生活中心无论是什么都是你所崇拜的那个。',
         liju3:'Most Americans worship variety and individuality.',
         choinese3:'大多数美国人都崇尚多样化和个性化。'	, 	
         liju4:'Anna worships at the church down the street.',
         choinese4:'安娜在沿街的那座教堂做礼拜。'			 
	   }
      ,
       {
         id: '3621',
		 word: 'worthwhile ',
		 ciyi : 'a. 值得做的  ',         		 
		 kaodian: '', 
		 liju1: "The president's trip to Washington this week seems to have been worthwhile.",
         chinese1: '该总统本周的华盛顿之行似乎是值得的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3622',
         word: ' worthy ',
		 ciyi : ' a. 值得的；有价值的；配得上的  ',         		 
		 kaodian: '', 
		 liju1: ' You are worthy of all life has to offer. ',
         chinese1: '你人生中的每次付出都是值得的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
 }
      ,
       {
         id: '3623',
         word: ' He wants to say that individual rights are worthy of special respect.',
		 ciyi : '他想说明个人权利,值得特别的尊重。 ',         		 
		 kaodian: '', 
		 liju1: '',
         chinese1: '',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3624',
         word: ' wrap',
		 ciyi : ' vt. 包；缠n. 外套；围巾 ',         		 
		 kaodian: '', 
		 liju1: 'Use a cloth to wrap up the wound.',
         chinese1: '用布把伤口包起来。',
         liju2: 'Mary covered her face with her wrap to protect it from the wind.',
         chinese2: '玛丽用围巾裹住脸，不让风吹到。',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3625',
         word: ' wreath',
		 ciyi : ' n. 花冠；圈状物',         		 
		 kaodian: '', 
		 liju1: 'Both her veil and wreath are white.  ',
         chinese1: '她的面纱和花环都是白色的。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3626',
         word: ' wreck',
		 ciyi : 'n. 残骸；失事 vt. 破坏；使失事；拆毁 ',         		 
		 kaodian: '', 
		 liju1: 'The smouldering wreck fumed thick black smoke. ',
         chinese1: '燃烧的残骸冒出浓烈的黑烟。',
         liju2: 'A lot of us saw this train wreck coming. ',
         chinese2: '我们很多人都看到了这火车即将来临的失事。',
         liju3:'The ship was wrecked on the rocks.',
         choinese3:'那艘船触礁失事了。'	,
		 liju4:'My car was completely wrecked in the accident.',
         choinese4:'我的车在这次车祸中彻底毁了。' 
		  }
      ,
       {
         id: '3627',
         word: ' wrench ',
		 ciyi : 'n. 扳手；痛苦 vt. 猛拉；挣脱；使扭伤 ',         		 
		 kaodian: '', 
		 liju1: 'I had to run around to several shops to get that wrench.  ',
         chinese1: '我跑了好几家商店，才找到那种扳手。',
         liju2: 'Every farewell returned a more wrench.',
         chinese2: '每一次的离别都会带来更多的痛苦。',
         liju3:'He felt two men wrench the suitcase from his hand.',
         choinese3:'他感觉有两个人在猛拽他手里的手提箱。',
		 liju5: 'She wrenched herself from his grasp.',
         chinese5: '她挣脱了他的把持。',
         liju6:'He wrenched his back in wrestling.',
         choinese6:'他在摔跤中扭伤了背。'	
 }
      ,
       {
         id: '3628',
         word: 'wrinkle  ',
		 ciyi : ' n. 皱纹vt. 使起皱纹',         		 
		 kaodian: '', 
		 liju1: 'His face was covered with wrinkles.',
         chinese1: '他的脸布满了皱纹。',
         liju2: 'Her stockings wrinkled at the ankles.',
         chinese2: '她的长袜在脚踝处起皱褶了。',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3629',
         word: ' wrist',
		 ciyi : ' n. 手腕；腕关节',         		 
		 kaodian: '', 
		 liju1: 'He broke his wrist climbing rocks for a cigarette ad.',
         chinese1: '他为了一个香烟广告攀岩折断了手腕。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3630',
         word: ' X-ray ',
		 ciyi : ' n. 射线；射线照',         		 
		 kaodian: '', 
		 liju1: 'She was advised to have an abdominal X-ray.',
         chinese1: '她被建议拍个腹部X光片。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3631',
         word: ' yawn ',
		 ciyi : ' n. 哈欠vi. 打呵欠；裂开',         		 
		 kaodian: '', 
		 liju1: 'Rosanna stifled a huge yawn.',
         chinese1: '罗莎娜忍住了一个大哈欠。',
         liju2: 'She yawned during his lecture.',
         chinese2: '她在他的课上不停地打呵欠。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3632',
         word: ' yell',
		 ciyi : ' vi. 大叫，叫喊',         		 
		 kaodian: '', 
		 liju1: "I'm sorry I yelled at you last night.",
         chinese1: '很抱歉我昨晚对你大喊大叫了。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''
 }
      ,
       {
         id: '3633',
         word: 'yield ',
		 ciyi : ' vt. 出产vi. 屈服，投降n. 产量；收益',         		 
		 kaodian: '', 
		 liju1: 'Last year 400,000 acres of land yielded a crop worth $1.75 billion.',
         chinese1: '去年40万英亩的土地出产了价值17.5亿美元的粮食。',
         liju2: 'Our army refused to yield.',
         chinese2: '我军拒绝投降。',
         liju3:'The yield of rice will rise to 700 kilograms per mu. ',
         choinese3:'水稻的产量将上升到每亩700公斤。'	
		 }
      ,
       {
         id: '3634',
         word: 'youngster  ',
		 ciyi : ' n. 年轻人；少年',         		 
		 kaodian: '', 
		 liju1: ' Other youngsters are not so lucky.',
         chinese1: '其他的年轻人没有这么幸运。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3635',
         word: 'zeal ',
		 ciyi : 'n. 热情；热心 ',         		 
		 kaodian: '', 
		 liju1: 'They were animated by religious zeal. ',
         chinese1: '他们被宗教热情所驱使。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3636',
         word: ' zebra',
		 ciyi : ' n. 斑马a. 有斑纹的 ',         		 
		 kaodian: '', 
		 liju1: 'The neck of the zebra was nipped by a lion. ',
         chinese1: '狮子咬断了那头斑马的脖子。',
         liju2: 'Those combinations are as unique to each zebra as fingerprints are to humans. ',
         chinese2: '每一匹斑马的条纹线组合都是独一无二的，就像人类的指纹一样。',
         liju3:'',
         choinese3:''	
		  }
      ,
       {
         id: '3637',
         word: 'zigzag ',
		 ciyi : ' a. 之字形的vt. 使成之字形；使曲折行进n. 之字形 ',         		 
		 kaodian: '', 
		 liju1: 'Logan led her down the zigzag corridor to a chamber.',
         chinese1: '洛根领着她沿着之字形的长廊走到一个房间。',
         liju2: 'I zigzagged down a labyrinth of alleys.',
         chinese2: '我在如迷宫般的小巷里拐来拐去。',
         liju3:'',
         choinese3:''
        }
      ,
       {
         id: '3638',
         word: 'zinc',
		 ciyi : ' n. 锌',         		 
		 kaodian: '', 
		 liju1: 'Copper and zinc are fused to make brass. ',
         chinese1: '铜与锌熔合后形成黄铜。',
         liju2: '',
         chinese2: '',
         liju3:'',
         choinese3:''	
		 }
      ,
       {
         id: '3639',
         word: 'zip ',
		 ciyi : ' n. 拉链 vt. 给...以速度；拉上或拉开拉链',         		 
		 kaodian: '', 
		 liju1: ' He pulled the zip of his leather jacket down slightly.',
         chinese1: '他稍稍拉下了他皮夹克的拉链。',
         liju2: 'She zipped her jeans.',
         chinese2: '她拉上了她的牛仔裤拉锁。',
         liju3:'',
         choinese3:''	 
	    }
      ,
       {
         id: '3640',
         word: ' zone ',
		 ciyi : ' n. 地区vt. 划分地带；环绕',         		 
		 kaodian: '', 
		 liju1: ' The area has been declared a disaster zone.',
         chinese1: '该地区已被宣布为灾难带。',
         liju2: 'The land was not zoned for commercial purposes.',
         chinese2: '这块地未被划为商业用地。',
         liju3:'',
         choinese3:''			 
	   }
      ,
       {
         id: '3641',
         word: 'zoom  ',
		 ciyi : 'n. 嗡嗡声vi. 急速上升；急速移动；猛升 ',         		 
		 kaodian: '', 
		 liju1: ' The zoom of flies annoyed us much.',
         chinese1: '苍蝇的嗡嗡声让我们非常烦躁。',
         liju2: 'The shuttle zoomed above the clouds and out of view.',
         chinese2: '航天飞机冲上云霄，消失在视野中。',
         liju3:'Some economists warned that oil prices would zoom.',
         choinese3:'一些经济学家警告说，油价可能上涨。'	
		  }
      ,

    ]
  }
  return arr
}
