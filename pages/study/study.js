var Bmob = require('../../utils/Bmob-1.6.2.min.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");
Page({
  data: {
    time: "",
    cpt:"",
    counter: 0,
    dis: false,
    id1: "我看到这个单词觉得很有趣，一起来学习吧！",
    id2: "我完成了今天的所有单词！",
    id3: 3,
    id4: 4,
    today_num: 0
  },
  onLoad: function (options) {
    this.setData({
      day_num:100,
      book: 'cet6',
    })
    if (!wx.getStorageSync('word_count'))
    {
        wx.setStorage({
          key: 'word_count',
          data: 0,
        })
    }
    var task = []
    for (var i = wx.getStorageSync('word_count'); i < wx.getStorageSync('word_count')+100; i++) {
      task.push(i)
    }
    console.log(wx.getStorageSync('word_count')+1)
    wx.setStorage({
      key: "task",
      data: task
    })
    var c_num = wx.getStorageSync('citiao_num')
    var today_task = wx.getStorageSync('task')

      // var n = today_task.shift()
      this.setData({ showNot: false })
      // this.setData({ counter: n })
    this.search(wx.getStorageSync('word_count'))
  

  },
  show: function () {
    this.setData({
      showNot: true,
      more: false
    })
    if (wx.getStorageSync('collect')) {
      var collect = wx.getStorageSync('collect')
    }
    else {
      var collect = []
    }
    collect.push([this.data.counter, this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition])
    wx.setStorage({
      key: "collect",
      data: collect
    })
    wx.showToast({ title: '保存成功' })
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    wx.setStorage({
      key: "task",
      data: today_task
    })
  },
  show_next: function () {
    this.setData({
      showNot: true,
      more: false
    })
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    wx.setStorage({
      key: "task",
      data: today_task
    })
  },
  onShareAppMessage: function (options) {
    return {
      title: options.target.id,
      path: '/pages/job/job',
      success: function (res) {
        console.log(res)
      }
    }

  },
  last: function (e) {
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    var n = wx.getStorageSync('word_count') - 1
    if (n > 0) {
      this.setData({ showNot: false })
      this.setData({ counter: n })
      wx.setStorage({
        key: "task",
        data: today_task
      })
      this.search(n)
      wx.setStorage({
        key: 'word_count',
        data: n,
      })
      console.log("shuliang" + wx.getStorageSync('word_collect_length'))
    }
    if (n == 0)
    {
       wx.showToast({
        title: '到头了',
        icon: 'success',
        duration: 1000
       })
    }
    else {
      // this.complete()
    }

  },

  next: function (e) {
    var today_task = wx.getStorageSync('task')
    var length = today_task.length
    if (length > 0) {
      var n = wx.getStorageSync('word_count') + 1
      this.setData({ showNot: false })
      this.setData({ counter: n })
      wx.setStorage({
        key: "task",
        data: today_task
      })
      this.search(n)
      wx.setStorage({
        key: 'word_count',
        data: n,
      })
      
      console.log("shuliang"+wx.getStorageSync('word_collect_length'))
    }
    else {
      this.complete()
    }
    
  },

  search: function (n) {
    //var word = wx.getStorageSync(this.data.book)[n]
    var fileData1 = require('../../liju1.js')
    var fileData2 = require('../../liju3.js')
    var fileData3 = require('../../liju4.js')
    if (n < 726) {
      var myword = fileData1.searchword(n)
      this.setData({ content: myword, })
    }
    else if (n >= 726 && n < 1450) {
      var myword = fileData2.searchword(n)
      this.setData({ content: myword, })
      console.log(myword)
    }
    else if (n >= 1450 && n < 2166) {
      var myword = fileData3.searchword(n)
      this.setData({ content: myword, })
      console.log(myword)
    }
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + myword,
      data: {},
      method: 'GET',
      success: function (res)
       {
        console.log(res)
        that.setData({
          pron: res.data.data.pronunciations,
          pron_audio: res.data.data.audio_addresses,
          definition: res.data.data.definition,
        })
        const innerAudioContext = wx.createInnerAudioContext()
        innerAudioContext.autoplay = true
        innerAudioContext.src = res.data.data.audio_addresses.uk[0]
        innerAudioContext.onPlay(() => {
        })
        var id = res.data.data.conent_id
        that.liju(id, myword, n)
        if (wx.getStorageSync('word_collect')) {
          var word_collect = wx.getStorageSync('word_collect')
        }
        else {
          var word_collect = []
        }
        word_collect.push([that.data.counter, that.data.content, that.data.pron, that.data.pron_audio, that.data.defen, that.data.definition])
        wx.setStorage({
          key: "word_collect",
          data: word_collect
        })
        wx.setStorage({
          key: "word_collect_length",
          data: word_collect.length
        })
      },
      fail: function () 
      {

      },
      complete: function ()
       {   
      }
    })
  },
  read: function (e) {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = e.target.id
    innerAudioContext.onPlay(() => {
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  moredefen: function () {
    this.setData({ more: true })

  },
  set_time: function (date) {
    var month = date.getMonth() + 1
    var day = date.getDate()
    var year = date.getFullYear()
    const formatNumber = n => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    return [year, month, day].map(formatNumber).join('/')

  },

  complete() 
  {
    wx.showToast({
      title: '一天完成了',
      icon: 'success',
      duration: 1000
    })
    var task = wx.getStorageSync('task')
    var task_num = wx.getStorageSync('word_collect_length')
    var today_num = wx.getStorageSync('day_task')
      for (var i =task_num; i <=task_num+today_num-1; i++)
       {
        task.push(i)
      }
      wx.setStorage
      ({
        key: "task",
        data: task
      })
   
    this.next()
    wx.setStorage
    ({
      key: 'day_num',
      data: wx.getStorageSync('day_num') + 1
    })
  },
  savelist() {
    if (wx.getStorageSync('word_collect')) {
      var word_collect = wx.getStorageSync('word_collect')
    }
    else {
      var word_collect = []
    }
    word_collect.push([this.data.counter, this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition])
    wx.setStorage({
      key: "word_collect",
      data: word_collect
    })
    wx.setStorage({
      key: "word_collect_length",
      data: word_collect.length
    })
    //wx.showToast({ title: '收藏成功' })
  },

  handleSaveTap() {
    if (wx.getStorageSync('collect')) {
      var collect = wx.getStorageSync('collect')
    }
    else {
      var collect = []
    }
    collect.push([this.data.counter, this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition])
    wx.setStorage({
      key: "collect",
      data: collect
    })
    wx.showToast({ title: '收藏成功' })
  },

  liju(id, myword, n) {
    var book1 = wx.getStorageSync('book')
    // if (book1 == 'cet6') {
      var fileData1 = require('../../liju1.js')
      var fileData2 = require('../../liju3.js')
      var that = this
      console.log(fileData1.searchmtdata(n))
      console.log(fileData1.searchchinese1(n))
      console.log(fileData1.searchliju1(n))
      console.log(fileData1.searchliju2(n))
      //console.log(word)
      //console.log(n)
      if (n < 1450) {
        this.setData
          ({
            liju1: fileData1.searchliju1(n),
            chinese1: fileData1.searchchinese1(n),
            liju2: fileData1.searchliju2(n),
            chinese2: fileData1.searchchinese2(n),
            liju3: fileData1.searchliju3(n),
            chinese3: fileData1.searchchinese3(n),

          })
      }
    //   if (n >= 1450 && n < 2117) {
    //     this.setData
    //       ({
    //         liju1: fileData2.searchliju1(n-726),
    //         chinese1: fileData2.searchchinese1(n),
    //         liju2: fileData2.searchliju2(n),
    //         chinese2: fileData2.searchchinese2(n),
    //         liju3: fileData1.searchliju3(n),
    //         chinese3: fileData1.searchchinese3(n),
    //       })
    //   }
    //   // that.setData({
    //   //  // defen[0].translation = fileData.searchchinese(1)
    //   //   //  
    //   //   defen: [id, fileData.searchchinese(1), fileData.searchchinese(1), fileData.searchchinese(1)]
    //   //  defen: fileData.mtData().list, 
    //   //})
    // }
    // else {
    //   var that = this
    //   wx.request({
    //     url: 'https://api.shanbay.com/bdc/example/?vocabulary_id=' + id,
    //     data: {},
    //     method: 'GET',
    //     success: function (res) {
    //       console.log(res)
    //       that.setData({
    //         defen: [res.data.data[0], res.data.data[1], res.data.data[3], res.data.data[4]]

    //       })
    //     },
    //     fail: function () {
    //     },
    //     complete: function () {
    //     }
    //   })
    // }

  },
  test() {
    wx.switchTab({
      url: '/pages/job/job',
    })({
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  goback() {
    wx.navigateTo({
      url: '/pages/job/job',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})