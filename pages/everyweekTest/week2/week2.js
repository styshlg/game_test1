// pages/test/test.js
var Bmob = require('../../../utils/Bmob-1.6.2.min.js');
//var Bmob = require('../../src/lib/app.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    da1: "",
    da2: "",
    da3: "",
    da4: "",
    result: "",
    daan: false,
    showDaan: false,
    complete: false,
    data_length: 0,
    true_num: 0,
    score: 0,
    currentTab: 0,
    friendsData: [],
    globalData: [],
    loadNumber: 0,  //全球排名数据加载次数
    history: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var count = options.title_id
    // this.search()
    wx.setStorage({
      key: 'test',
      data: count,
    })
    // app.appData.fromClickId = options.currentClickId
    // app.upDateUser_networkFromClickId = require('../../utils/upDateUser_networkFromClickId.js').upDateUser_networkFromClickId
    // wx.showShareMenu({
    //   withShareTicket: true

    // })
    // app.pageGetUserInfo(this, this.getScore)
    this.searchSqlEnglish_1()


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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  last() {
    if (this.data.true_num > 0) {
      this.setData({ showDaan: false })
      this.setData({ true_num: this.data.true_num - 1 })
      wx.setStorageSync('cihuiyufa_2ndday_num', this.data.true_num)
      console.log(wx.getStorageSync('cihuiyufa_2ndday_num'))
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


  choice(e) {
    const query = Bmob.Query("cihuiyufa_2ndday");
    query.equalTo("ID", "==", this.data.true_num + 1);
    query.find().then(res => {
      console.log(res)
      console.log(res[0].objectId)
      console.log(res[0].button)
      if (res[0].button == '4') {
        this.setData({ showDaan: true })
      }
    });
    console.log(e)
    if (e.currentTarget.id === this.data.true_word) {
      this.setData({ daan: true, true_num: this.data.true_num + 1 })
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = 'http://media-audio1.qiniu.baydn.com/us/n/ni/nice_v3.mp3'
      innerAudioContext.onPlay(() => {
      })
    }
    else {
      this.setData({ daan: false })
      this.setData({ complete: true })
      const innerAudioContext = wx.createInnerAudioContext()
      innerAudioContext.autoplay = true
      innerAudioContext.src = 'https://media-audio1.baydn.com/us%2Fs%2Fsa%2Fsad_v4.mp3'
      innerAudioContext.onPlay(() => {
      })
      if (this.data.true_num > this.data.score) {
        this.set_score(this.data.true_num)
        this.setData({ history: this.data.true_num })
      } else {
        this.setData({ history: this.data.score })
      }

      app.pageGetUserInfo(this, this.getScore)
      wx.showShareMenu({
        withShareTicket: true
      })
      app.pageGetUserInfo(this)
      this.getRankGlobalData();
    }
    this.setData({ showDaan: true })
  },

  searchSqlEnglish_1: function () {
    if (wx.getStorageSync('cihuiyufa_2ndday_num') != 0) {
      this.setData({
        true_num: wx.getStorageSync('cihuiyufa_2ndday_num')
      })
    }
    console.log(this.data.true_num)
    var that = this
    try {
      // 此处是可能产生例外的语句
      const query1 = Bmob.Query("cihuiyufa_2ndday");
      const query = Bmob.Query("cihuiyufa_2ndday");
      // query1.count().then(res => {
      //   console.log(res)
      //   wx.setStorageSync('cihuiyufa_2ndday_length', res)
      // });
      query.equalTo("ID", "==", that.data.true_num + 1);
      query1.count().then(res => {
        console.log(res)
        that.setData({
          data_length: res //这个border跟上面data里面的border是对应的。
        })
        wx.setStorageSync('cihuiyufa_2ndday_length', res)
      });
      query.equalTo("ID", "==", that.data.true_num + 1);
      query.find().then(res => {

        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].timu)
        console.log(res.length)
        if (that.data.true_num + 1 <= wx.getStorageSync('cihuiyufa_2ndday_length')) {
          if (res[0].str != '') {
            that.setData({
              title: res[0].str //这个border跟上面data里面的border是对应的。
            })
            that.setData({
              da1: res[0].arr,
            })
          }
        }
        else {
          wx.showToast({
            title: '最后一个词组了',
            icon: 'loading',
            duration: 1000
          })
        }
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
  change: function () {
    this.setData({ showDaan: true })

  },
  next: function () {
    if (this.data.true_num + 1 < this.data.data_length) {
      this.setData({ showDaan: true })

      setTimeout(function () {
        //要延时执行的代码
      }, 4000)
      this.setData({ showDaan: false })
      this.setData({ true_num: this.data.true_num + 1 })
      wx.setStorageSync('cihuiyufa_2ndday_num', this.data.true_num)
      console.log(wx.getStorageSync('cihuiyufa_2ndday_num'))
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
  complete() {
    wx.showToast({
      title: '回答错误',
      icon: 'loading',
      duration: 1000
    })
  },
  again() {
    this.setData({
      showDaan: false,
      complete: false,
      num: 1,
      true_num: 0
    })
    this.search()
  },
})

