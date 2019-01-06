const app = getApp()

var Bmob = require('../../utils/Bmob-1.6.2.min.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");
Page({
  data: {
    imgs: [
      // "https://pic.yupoo.com/styshlg/1c8fbd6a/32a2e1e4.jpg",
      // "https://pic.yupoo.com/styshlg/1f176b2e/6429c2d3.jpg",
      "https://pic.yupoo.com/styshlg/011227c3/109773f2.gif",
    ],
    current:0,
    userid:''
  },
  start:function(e)
  {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    console.log(e.detail.userInfo.nickName)
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo //用户基本信息
        var nickName = userInfo.nickName //用户名
        app.globalData.nickname = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl //头像链接
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province //所在省
        var city = userInfo.city //所在市
        var country = userInfo.country //所在国家
      }
    })  
      try
    {
      var myDate = new Date(); 
      const query = Bmob.Query('login_Record');
      query.set("Time", myDate.toLocaleTimeString())
      query.set("Date", myDate.toLocaleDateString())
   
      query.set("sex", e.detail.userInfo.gender)
      query.set("city", e.detail.userInfo.city)
        if (wx.getStorageSync('telephone'))
        {
          query.set("Phone", wx.getStorageSync('telephone'))
        }
        else
        {
          query.set("Phone",'00000000')
        }
      query.set("province", e.detail.userInfo.province)
      query.set("country", e.detail.userInfo.country)
      query.set("city", e.detail.userInfo.city)
      wx.getSystemInfo({
        success: function (res) {
          console.log(res.model)    //  手机型号
          query.set("phone_model", res.model)
          console.log(res.pixelRatio)
          console.log(res.windowWidth)
          console.log(res.windowHeight)
          console.log(res.language)
          console.log(res.version)
          console.log(res.platform)
          console.log(res.system) //  操作系统版本
          query.set("phone_system", res.system)
        }
      }) 
      query.set("login_Time", myDate.toString())
      var timestamp = Date.parse(new Date());
      timestamp = timestamp / 1000;
      query.set("NO", timestamp)
      query.save().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
        this.onGetOpenid();  
    }
    catch(e)
    {
       console.log(e.toString())
    }
    if (wx.getStorageSync('user_Phone_Record') == 'true')
   {
      wx.switchTab({
        url: '/pages/Page_test/Page_test',
      })
     
    }
    else
    {
      wx.navigateTo({
        url: '/pages/checkLogin/checkLogin',
      })
    }
    
  },
  save_userInfo:function(e)
  {
        try
        {
          var myDate = new Date();
          const query = Bmob.Query('user_Info');
          var timestamp = Date.parse(new Date());
          timestamp = timestamp / 1000;
          query.set("NO", timestamp)
          query.set("nickname", app.globalData.nickname)
          query.set("openid", app.globalData.openid)
          query.save().then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        }
        catch(e)
        {
          console.log(e.toString())
        }
  },
  onGetOpenid: function () {
    // 调用云函数
    var that=this
    wx.cloud.init()
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        this.save_userInfo();
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  onLoad: function (options)
   {
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo //用户基本信息
        var nickName = userInfo.nickName //用户名
        var avatarUrl = userInfo.avatarUrl //头像链接
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province //所在省
        var city = userInfo.city //所在市
        var country = userInfo.country //所在国家
      }
    })
    if (!wx.getStorageSync('user_load')) 
    {
      wx.setStorage({
        key: 'user_load',
        data: 'true',
      })
      this.setData({
        current: 0
      })
    }
    else if(wx.getStorageSync('user_load')=='true')
    { 
      this.setData({
        current: 2
      })
    }
  },

})