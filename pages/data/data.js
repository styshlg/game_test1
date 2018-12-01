const app = getApp()
var extraLine = [];
Page({
  data: {
    time: "",
    cpt: false,
    counter: 0,
    dis: false,
    id3: 3,
    id4: 4,
    today_num: 0,
    n:0,
  },
  onLoad: function (options) 
  {
    if(wx.getStorageSync('citiao_num'))
    {
      if (wx.getStorageSync('citiao_num') < 2046 && wx.getStorageSync('citiao_num') >= 0) 
      {
        wx.setStorage({
          key: 'citiao_num',
          data: wx.getStorageSync('citiao_num')+1,
        })
        this.search(wx.getStorageSync('citiao_num'))
      }
    }
    else
    {
      wx.setStorage({
        key: 'citiao_num',
        data: 0,
      }) 
      if (wx.getStorageSync('citiao_num') < 2046 && wx.getStorageSync('citiao_num') >= 0) 
      {
        wx.setStorage({
          key: 'citiao_num',
          data: wx.getStorageSync('citiao_num') + 1,
        })
        this.search(wx.getStorageSync('citiao_num'))
      }
    }
  },
  show: function () {
    this.setData({
      showNot: true,
      more: false
    })
    if (wx.getStorageSync('collect_phrase')) 
    {
      var collect_phrase = wx.getStorageSync('collect_phrase')
    }
    else {
      var collect_phrase = []
    }
    collect_phrase.push([this.data.counter, this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition, this.data.liju1, this.data.chinese1])
    wx.setStorage({
      key: "collect_phrase",
      data: collect_phrase
    })
    wx.showToast({ title: '保存成功' })
  },
  show_next: function () {
    this.setData({
      showNot: true,
      more: false
    })
    console.log('wetest'+wx.getStorageSync('citiao_num'))
  },
  last: function (e)
   {
    var c_num = wx.getStorageSync('citiao_num')
    c_num = c_num -1
    console.log(c_num)
    wx.setStorage({
      key: 'citiao_num',
      data: c_num,
    })
    if (c_num < 2046 && c_num >= 0) {
      this.setData({ showNot: false })
      this.setData({ counter: c_num })
      wx.setStorage({
        key: "phrase_count",
        data: c_num
      })
      this.search(c_num)
    }
    else {
      wx.showToast({
        title: '到头了',
        icon: 'success',
        duration: 1000
      })
    }
  },
  next: function () 
  {
    console.log(wx.getStorageSync('citiao_num'))
    this.data.c_num=wx.getStorageSync('citiao_num')
    if (this.data.c_num < 2046 && this.data.c_num>=0) 
    {
      this.data.c_num++
      this.setData({ showNot: false })
      // this.setData({ counter: this.data.c_num})
      // wx.setStorage({
      //   key: "phrase_count",
      //   data: this.data.c_num
      // })
      wx.setStorage({
        key: 'citiao_num',
        data: this.data.c_num,
      })
      this.search(this.data.c_num)
      console.log(wx.getStorageSync('citiao_num'))
    }
    else {
      wx.showToast({
        title: '到头了',
        icon: 'success',
        duration: 1000
      })
    }

  },
  search: function (n) {
    var fileData = require('../../data/cizu.js')
    var myword = fileData.searchword(n)
    var myliju = fileData.searchliju1(n)
    this.setData({ content: myword })
    this.setData({ liju: myliju })
    var that = this;
    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + myword,
      data: {},
      method: 'GET',
      success: function (res) {
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
        // that.liju(id, myword, n)
        that.setData({
          chinese1: fileData.searchchinese1(n),
        })
      },
      fail: function () {
      },
      complete: function () {
      }
    })

  },
  moredefen: function () {
    this.setData({ more: true })
  },
  complete() {
    // this.setData({ cpt: true })
    wx.showToast({
      title: '一天完成了',
      icon: 'success',
      duration: 1000
    })
    var task = wx.getStorageSync('task')
    var task_num = wx.getStorageSync('word_ci_collect_length')
    var today_num = wx.getStorageSync('day_task')
    for (var i = task_num; i <= task_num + today_num; i++) {
      task.push(i)
    }
    wx.setStorage
      ({
        key: "task",
        data: task
      })
    this.next()
    savelist() 
      if (wx.getStorageSync('word_ci_collect')) {
        var word_ci_collect = wx.getStorageSync('word_ci_collect')
      }
      else {
        var word_ci_collect = []
      }
      word_ci_collect.push([this.data.counter, this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition,this.data.liju1,this.data.chinese1])
      wx.setStorage({
        key: "word_ci_collect",
        data: word_ci_collect
      })
      wx.setStorage({
        key: "word_ci_collect_length",
        data: word_ci_collect.length
      })
    wx.setStorage({
      key: 'day_ci_num',
      data: wx.getStorageSync('day_ci_num') + 1
    })
  },

  savelist() {
    if (wx.getStorageSync('word_ci_collect')) {
      var word_ci_collect = wx.getStorageSync('word_ci_collect')
    }
    else {
      var word_ci_collect = []
    }
    word_ci_collect.push([this.data.counter, this.data.content, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition, this.data.liju1, this.data.chinese1])
    wx.setStorage({
      key: "word_ci_collect",
      data: word_ci_collect
    })
    wx.setStorage({
      key: "word_ci_collect_length",
      data: word_ci_collect.length
    })
  },
})