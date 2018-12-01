var Bmob = require('../../utils/Bmob-1.6.2.min.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");// pages/Login/Login.js
const app = getApp();

Page({
    data: {
    da1: "",
    da2: "",
    da3: "",
    da4: "",
    result:"",
    daan: false,
    showDaan: false,
    complete: false,
    data_length:0,
    true_num: 0,
    score: 0,
    currentTab: 0,
    friendsData: [],
    globalData: [],
    loadNumber: 0,  //全球排名数据加载次数
    history: 0
  },
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
  timu_choice4(e) 
  {
    console.log(e)
    console.log(e.target)
    console.log(e.target.dataset.productid);
    console.log(this.data.true_num)
    try {
      // 此处是可能产生例外的语句
      const query = Bmob.Query("test321");
      query.equalTo("ID", "==", this.data.true_num+1);
      query.find().then(res => 
      {
        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].button)
        if (res[0].button == '4') {
          this.setData({ showDaan: true })
          this.setData({ daan: true })
          this.setData({ result: res[0].result })
        }
        else {
          this.setData({ showDaan: true })
          this.setData({ daan: false })
          this.setData({result:res[0].result})
          wx.showToast({
            title: '回答错误',
            icon: 'loading',
            duration: 1000
          })
        }
      });
    }
    catch (error) {
      wx.showToast({
        title: '用户没有权限',
        icon: 'loading',
        duration: 2000
      })
    }
    finally {
      // 此处是出口语句
    }
  },
  timu_choice3(e) 
  {
    console.log(e)
    console.log(e.target)
    console.log(e.target.dataset.productid);
    console.log(this.data.true_num)
    try {
      // 此处是可能产生例外的语句
      const query = Bmob.Query("test321");
      query.equalTo("ID", "==", this.data.true_num + 1);
      query.find().then(res => {
        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].button)
        if (res[0].button == '3') {
          this.setData({ showDaan: true })
          this.setData({ daan: true })
          this.setData({ result: res[0].result })
        }
        else {
          this.setData({ showDaan: true })
          this.setData({ daan: false })
          this.setData({ result: res[0].result })
          wx.showToast({
            title: '回答错误',
            icon: 'loading',
            duration: 1000
          })
        }
      });
    }
    catch (error) {
      wx.showToast({
        title: '用户没有权限',
        icon: 'loading',
        duration: 2000
      })
    }
    finally {
      // 此处是出口语句
    }
  },
  timu_choice2(e) 
  {
    console.log(e)
    console.log(e.target)
    console.log(e.target.dataset.productid);
    console.log(this.data.true_num)
    try {
      // 此处是可能产生例外的语句
      const query = Bmob.Query("test321");
      query.equalTo("ID", "==", this.data.true_num + 1);
      query.find().then(res => {
        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].button)
        if (res[0].button == '2') {
          this.setData({ showDaan: true })
          this.setData({ daan: true })
          this.setData({ result: res[0].result })
        }
        else {
          this.setData({ showDaan: true })
          this.setData({ daan: false })
          this.setData({ result: res[0].result })
          wx.showToast({
            title: '回答错误',
            icon: 'loading',
            duration: 1000
          })
        }
      });
    }
    catch (error) {
      wx.showToast({
        title: '用户没有权限',
        icon: 'loading',
        duration: 2000
      })
    }
    finally {
      // 此处是出口语句
    }
  },
  timu_choice1(e)
  {
    console.log(e)
    console.log(e.target)
    console.log(e.target.dataset.productid);
    console.log(this.data.true_num)
    try {
      // 此处是可能产生例外的语句
      const query = Bmob.Query("test321");
      query.equalTo("ID", "==", this.data.true_num + 1);
      query.find().then(res => {
        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].button)
        if (res[0].button == '1') {
          this.setData({ showDaan: true })
          this.setData({ daan: true })
          this.setData({ result: res[0].result })
        }
        else {
          this.setData({ showDaan: true })
          this.setData({ daan: false })
          this.setData({ result: res[0].result })
          wx.showToast({
            title: '回答错误',
            icon: 'loading',
            duration: 1000
          })
        }
      });
    }
    catch (error) {
      wx.showToast({
        title: '用户没有权限',
        icon: 'loading',
        duration: 2000
      })
    }
    finally {
    }
  },
  choice(e) {
    const query = Bmob.Query("test321");
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
    if (wx.getStorageSync('yufa_data') != 0) {
      this.setData({
        true_num: wx.getStorageSync('yufa_data')
      })
    }
    console.log(this.data.true_num)
    var that = this
    try {
      // 此处是可能产生例外的语句
      // const query1 = Bmob.Query("test321");

      // const query1 = Bmob.Query("test321");
      // query1.find().then(res => {
      //   console.log(res)
      // });
      const query = Bmob.Query("test321");

      // query.find().then(res => {
      //   console.log(res)
      //   that.setData({
      //     data_length: res.length //这个border跟上面data里面的border是对应的。
      //   })
      //   console.log(res.length)
      // });
      const query1 = Bmob.Query('test321');
      query1.count().then(res => {
        console.log(res)
        wx.setStorageSync('yufa_length', res)
      });
      query.equalTo("ID", "==", that.data.true_num + 1);
      query.find().then(res => {
        console.log(res)
      });
      query.equalTo("ID", "==", that.data.true_num + 1);
      query.find().then(res => {
        console.log(res)
        console.log(res[0].objectId)
        console.log(res[0].timu)
        console.log(res.length)
        if (that.data.true_num + 1 < wx.getStorageSync('yufa_length')) {
          if (res[0].timu != '') {
            that.setData({
              title: res[0].timu //这个border跟上面data里面的border是对应的。
            })
            that.setData({
              da1: res[0].choice1,
              da2: res[0].choice2,
              da3: res[0].choice3,
              da4: res[0].choice4,
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
  previous() {
    if (this.data.true_num + 1 < wx.getStorageSync('yufa_length') && this.data.true_num > 0) {
      this.setData({ showDaan: false })
      this.setData({ true_num: this.data.true_num - 1 })
      wx.setStorageSync('yufa_data', this.data.true_num)
      console.log(wx.getStorageSync('yufa_data'))
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
  next() {
    if (this.data.true_num + 1 < wx.getStorageSync('yufa_length')) {
      this.setData({ showDaan: false })
      this.setData({ true_num: this.data.true_num + 1 })
      wx.setStorageSync('yufa_data', this.data.true_num)
      console.log(wx.getStorageSync('yufa_data'))
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
  search() {
    var idx = Math.floor((Math.random() * 1000)) + 1
    console.log(idx);
    var cet6 = require('../../data/cet6.js')
    // var word = wx.getStorage('cet6')[idx];
    var word = cet6.wordList[idx];
    console.log(word);
    var that = this

    wx.request({
      url: 'https://api.shanbay.com/bdc/search/?word=' + word,
      data: {},
      method: 'GET',
      success: function (res) {
        that.setData({
          title: res.data.data.definition.split(",")[0].split("\n")[0],
          title2: [res.data.data[0], res.data.data[4]],
          true_word: word
        })
        // var num=num+1
        var num = Math.floor(Math.random() * 400) + 1
        if (num < 100) {
          that.setData({
            da1: res.data.data.content,
            da2: cet6.wordList[Math.floor(Math.random() * 100) + 1],
            da3: cet6.wordList[Math.floor(Math.random() * 110) + 1],
            da4: cet6.wordList[Math.floor(Math.random() * 120) + 1],
          })
        }
        if (100 < num && num < 200) {
          that.setData({
            da1: res.data.data.content,
            da2: cet6.wordList[Math.floor(Math.random() * 200) + 1],
            da3: cet6.wordList[Math.floor(Math.random() * 100) + 1],
            da4: cet6.wordList[Math.floor(Math.random() * 110) + 1],
          })
        }
        if (num < 300 && num > 200) {
          that.setData({
            da1: res.data.data.content,
            da2: cet6.wordList[Math.floor(Math.random() * 200) + 1],
            da3: cet6.wordList[Math.floor(Math.random() * 100) + 1],
            da4: cet6.wordList[Math.floor(Math.random() * 120) + 1],
          })
        }
        if (num > 300) {
          that.setData({
            da1: res.data.data.content,
            da2: cet6.wordList[Math.floor(Math.random() * 200) + 1],
            da3: cet6.wordList[Math.floor(Math.random() * 130) + 1],
            da4: cet6.wordList[Math.floor(Math.random() * 140) + 1],
          })
        }
      }
    })
  },
  
})

