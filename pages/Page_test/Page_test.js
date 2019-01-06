var Bmob = require('../../utils/Bmob-1.6.2.min.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");
Page({
  data: {
    swiperCurrent:0,
    imgUrls: [
      {
        link: '/pages/test/test',
        url:  'https://pic.yupoo.com/styshlg/a69efa27/c77f07c4.jpg'
      }, {
        link: '/pages/yufa_test/yufa_test',
        url:  'https://pic.yupoo.com/styshlg/1c438670/349d5535.jpg'
      }, {
        link: '/packageA/pages/study/study',
        url: 'https://pic.yupoo.com/styshlg/95419e57/99a4b91b.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    userInfo: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getUserInfo({
    //   success: function (res) {
    //     var userInfo = res.userInfo //用户基本信息
    //     var nickName = userInfo.nickName //用户名
    //     var avatarUrl = userInfo.avatarUrl //头像链接
    //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //     var province = userInfo.province //所在省
    //     var city = userInfo.city //所在市
    //     var country = userInfo.country //所在国家
    //   }
    // })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)    //  手机型号
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
        console.log(res.system) //  操作系统版本
      }
    })  
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登陆接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  user_login: function (e) 
  {
    wx.navigateTo({
      url: '/pages/Welcome/Welcome',
    })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })
    wx.authorize({ scope: "scope.userLocation" })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
   
  },
  //轮播图点击事件
  swipclick: function (e) {
    console.log(this.data.swiperCurrent)
    if (this.data.swiperCurrent== 0) {
      wx.switchTab({
        url: '../test/test',
      })
    }
    if (this.data.swiperCurrent== 1) {
      wx.switchTab({
        url: '../yufa_test/yufa_test',
      })
    }
  },
  choice123() {
    wx.navigateTo({
      url: '../choice/choice'
    })
  },
  click_swiper:function(e)
   {
    this.setData
    {
      swiperCurrent: e.detail.current+1
    }
    //var index = parseInt(e.detail.current + 1)
    //console.log(index)
    // if(index==1)
    // {
    //   wx.switchTab({
    //     url: '../test/test',
    //   })
    // }
    // if (index == 2) 
    // {
    //   wx.switchTab({
    //     url: '../yufa_test/yufa_test',
    //   })
    // }
  },

  imageclick: function (e) {
    console.log(this.data.swiperCurrent)
  },

  star_study: function () {
    wx.navigateTo({
      url: '/packageA/pages/study/study'
    })
  },
  star_CET4: function () {

    wx.navigateTo({
      url: '/pages/CET4/study'
    })
  },
  choice123() {
    wx.navigateTo({
      url: '../choice/choice'
    })
  },
  test1_card() {
    wx.navigateTo({
      url: '../data/data'
    })
  },
  test2_card() {
    wx.switchTab({
      url: '../test/test',
    })
  },
  test3_card() {
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
      wx.switchTab({
        url: '../yufa_test/yufa_test',
      })
  },
  kaoyan_card() {
    wx.navigateTo({
      url: '../kaoyan/study',
    })
  },
  test8_card() {
    var num = wx.getStorageSync('word_num');
    console.log(num),
      wx.navigateTo({
        url: '../everyweekWork/English_1_list',
      })
  },
  about() 
  {
      wx.navigateTo({
        url: '../about/about',
      })
  },
 reference_Book() {
      wx.navigateTo({
      url: '../reference_Book/reference_Book',
      })
  },
  progress_Bar() {
    wx.navigateTo({
      url: '../progress_Bar/progress_Bar',
    })
  },
})