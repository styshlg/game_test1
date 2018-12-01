
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data:
    {
      time: ""
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = this.set_time(new Date())
    this.setData({
      have_done: wx.getStorageSync('have_done'),
      time: time,
      day_num: parseInt(Number(wx.getStorageSync('word_count')) / Number(wx.getStorageSync('day_task')))
    })
    if (time === wx.getStorageSync('day')) {

    }
    else {
      wx.setStorage({
        key: "day",
        data: time
      })
      wx.setStorage({
        key: time,
        data: 0
      })
      if (wx.getStorageSync('have_done')) {
        var num = wx.getStorageSync('word_num')
        var day_task = wx.getStorageSync('day_task')
        var task = wx.getStorageSync("task")
        var count=wx.getStorageSync("word_count")
        var length = task.length
        if (length < day_task) {
          for (var i = num; i <= num + (day_task - length) - 1; i++) {
            task.push(i)
          }
          wx.setStorage({
            key: "task",
            data: task
          })
          wx.setStorage({
            key: "word_num",
            data: num + day_task - length
          })
        }
      }
    }
    if (wx.getStorageSync('word_count')) {
      this.setData
        ({
          lest_word: wx.getStorageSync('word_count')
        })
    }
    else {
      this.setData
        ({
          lest_word: 0
        })
    }
    this.setData({
      today_word: wx.getStorageSync('day_task'),
    })
    this.data.total = 4063 - Number(wx.getStorageSync('word_count')) ,
    this.setData({
        new_word: this.data.total,
      })
    this.data.total2 = Number(this.data.today_word) - Number(this.data.lest_word),
      this.setData({
        my_word: this.data.total2,
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.data.total = 4063 - Number(wx.getStorageSync('word_collect_length')),
      this.setData({
        new_word: this.data.total,
      })
    if (wx.getStorageSync('word_count')) {
      this.setData
      ({
        lest_word: wx.getStorageSync('word_count')
      })
    }
    else {
      this.setData
        ({
          lest_word: 0
        })
    }
    this.setData({ have_done: wx.getStorageSync('have_done') })
    this.setData({
      today_word: wx.getStorageSync('day_task'),
   
      day_num: parseInt(Number(wx.getStorageSync('word_count')) / Number(wx.getStorageSync('day_task')))
    })
    this.data.total2 = Number(this.data.today_word) - Number(this.data.lest_word),
      this.setData({
        my_word: this.data.total2,
      })
  },

  onGotUserInfo: function (e) {
    // console.log(e.detail.errMsg)
    // console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  star_study: function () {

    wx.navigateTo({
      url: '../../packageA/pages/study/study'
    })
  },
  star_CET4: function () {

    wx.navigateTo({
      url: '/pages/CET4/study'
    })
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
  choice123() {
    wx.navigateTo({
      url: '../choice/choice'
    })
  },
  num_data: function (e) {
    var start_date = new Date(this.data.start_date.replace(/-/g, "/"));
    var end_date = new Date(this.data.end_date.replace(/-/g, "/"));
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    if (day > 0) {
      this.setData({
        num: day
      })
    } else {
      wx.showToast({
        // image: '/image/false.png',
        title: '日期有误',
      })
      this.onShow()
    }
  },
  test1_card() {
    wx.navigateTo({
        url: '../data/data'
      })
  },
  test2_card() {
    var num = wx.getStorageSync('word_num');
    wx.switchTab({
      url: '../test/test',
    })
  },
  test3_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.navigateTo({
        url: '../collect_card/collect_card',
      })
  },
  test4_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.navigateTo({
      url: '../collect_phrase/collect_card',
      })
  },
  test5_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.navigateTo({
        url: '../danci/collect_card',
      })
  },
  test6_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.navigateTo({
        url: '../citiao/collect_card',
      })
  },
    test7_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.switchTab({
        url: '../yufa_test/yufa_test',
      })
  },
    test8_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.navigateTo({
      url: '../everyweekWork/English_1_list',
      })
  }
})