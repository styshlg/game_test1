var Bmob = require('../../utils/Bmob-1.6.2.min.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");
var timestamp = Date.parse(new Date());
timestamp = timestamp / 1000;
//当前时间戳为：1403149534
console.log("当前时间戳为：" + timestamp);
var myDate = new Date();
//myDate.toLocaleDateString(); //可以获取当前日期
//myDate.toLocaleTimeString(); //可以获取当前时间
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleDateString())
Page({
  data: {
    time: "",
    cpt: "",
    liju1: "",
    liju2: "",
    liju3: "",
    chinese1: "",
    chinese2: "",
    chinese3: "",
    counter: 0,
    dis: false,
    id1: "我看到这个单词觉得很有趣，一起来学习吧！",
    id2: "我完成了今天的所有单词！",
    id3: 3,
    id4: 4,
    today_num: 0,
    word_now: 0,
    kaoyan_word_count: 0,
    true_num: 0
  },

  onLoad: function (options) {
    this.setData({ showNot: false })
    const query1 = Bmob.Query('kaoyan');
    query1.count().then(res => {
      console.log(res)
      wx.setStorageSync('kaoyan_length_1', res)
    });
    if (!wx.getStorageSync('kaoyan_data_test')) {
      wx.setStorage({
        key: 'kaoyan_data_test',
        data: 0,
      })
    }
    this.searchSqlEnglish_1()

  },
  searchSqlEnglish_1: function () {
    //保存数量
    if (wx.getStorageSync('kaoyan_length_1')) {
      this.setData({
        kaoyan_word_count: wx.getStorageSync('kaoyan_length_1')
      })
    }
    else {
      wx.setStorage({
        key: 'kaoyan_length_1',
        data: 100,
      })
    }
    console.log(this.kaoyan_word_count)
    var that = this
    try {
      const query = Bmob.Query("kaoyan");
      const query1 = Bmob.Query('kaoyan');
      query1.count().then(res => {
        console.log(res)
        wx.setStorageSync('kaoyan_length_1', res)
      });
      that.data.true_num = wx.getStorageSync('kaoyan_data_test')
      query.equalTo("id", "==", that.data.true_num);
      query.find().then(res => {
        console.log(res)
        console.log(res[0].word)
        that.setData({ content: res[0].word })
        wx.request
          ({
            url: 'https://api.shanbay.com/bdc/search/?word=' + res[0].word,
            data: {},
            method: 'GET',
            success: function (res) {
              console.log(res)
              that.setData
                ({
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
              that.liju_find(that.data.true_num )
              if (wx.getStorageSync('word_kaoyan_collect')) {
                var word_collect = wx.getStorageSync('word_kaoyan_collect')
              }
              else {
                var word_collect = []
              }
              word_collect.push([that.data.counter, that.data.content, that.data.pron, that.data.pron_audio, that.data.defen, that.data.definition
              ])
            }
          });
      });
    }
    catch (error) {
      wx.showToast({
        title: '数据读取失败',
        icon: 'loading',
        duration: 2000
      })
    }
    finally {

    }
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
    // today_task.push(this.data.counter)
    // today_task.splice(length / 2, 0, this.data.counter)
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
    if (this.data.true_num >= 0) {
      this.setData({ showDaan: false })
      this.setData({ true_num: this.data.true_num - 1 })
      wx.setStorageSync('kaoyan_data_test', this.data.true_num)
      console.log(wx.getStorageSync('kaoyan_data_test'))
      this.searchSqlEnglish_1()
    }
    else {
      wx.showToast({
        title: '到头了',
        icon: 'loading',
        duration: 1000
      })
    }
  },

  next: function (e) {
    this.setData({ showNot: false })
    if (this.data.true_num + 1 <= wx.getStorageSync('kaoyan_length_1')) {
      this.setData({ showDaan: false })
      this.setData({ true_num: this.data.true_num + 1 })
      wx.setStorageSync('kaoyan_data_test', this.data.true_num)
      console.log(wx.getStorageSync('kaoyan_data_test'))
      this.searchSqlEnglish_1()
    }
    else {
      wx.showToast({

        title: '到头了',
        icon: 'loading',
        duration: 1000
      })
    }
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
  liju_find(id) {
    try {
      const query = Bmob.Query("kaoyan");
      const query1 = Bmob.Query('kaoyan');
      query1.count().then(res => {
        console.log(res)
        wx.setStorageSync('kaoyan_length_1', res)
      });
      query.equalTo("id", "==", this.data.true_num );
      query.find().then(res => {
        console.log(res)
      });
      query.equalTo("id", "==", this.data.true_num);
      query.find().then(res => {
        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].word)
        console.log(res[0].Chinese_Meaning)
        console.log(res[0].chinese1)
        console.log(res.length)
        this.setData
          ({
            liju1: res[0].liju1,
            chinese1: res[0].chinese1,
            liju2: res[0].liju2,
            chinese2: res[0].chinese2,
            liju3: res[0].liju3,
            chinese3: res[0].chinese3,
          })
      });
    }
    catch (error) {
      wx.showToast({
        title: '数据读取失败',
        icon: 'loading',
        duration: 2000
      })
    }
    finally {
      // 此处是出口语句
    }
  },
  liju(id, myword, n) {
    var book1 = wx.getStorageSync('book')
    if (book1 == 'cet6') {
      var fileData1 = require('../../liju1.js')
      var fileData2 = require('../../liju3.js')
      var that = this
      console.log(fileData1.searchmtdata(n))
      console.log(fileData1.searchchinese1(n))
      console.log(fileData1.searchliju1(n))
      console.log(fileData1.searchliju2(n))
      if (n < 726) {
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
      if (n >= 1450 && n < 2117) {
        this.setData
          ({
            liju1: fileData2.searchliju1(n - 726),
            chinese1: fileData2.searchchinese1(n),
            liju2: fileData2.searchliju2(n),
            chinese2: fileData2.searchchinese2(n),
            liju3: fileData1.searchliju3(n),
            chinese3: fileData1.searchchinese3(n),
          })
      }
    }
    else {
      var that = this
      wx.request({
        url: 'https://api.shanbay.com/bdc/example/?vocabulary_id=' + id,
        data: {},
        method: 'GET',
        success: function (res) {
          console.log(res)
          that.setData({
            defen: [res.data.data[0], res.data.data[1], res.data.data[3], res.data.data[4]]

          })
        },
        fail: function () {
        },
        complete: function () {
        }
      })
    }

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