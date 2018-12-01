Page({

  data: {

    imgs: [

      "https://pic.yupoo.com/styshlg/1c8fbd6a/32a2e1e4.jpg",

      "https://pic.yupoo.com/styshlg/1f176b2e/6429c2d3.jpg",

      "https://pic.yupoo.com/styshlg/8d1c6ffc/76b01634.jpg",
    ],
    current:0
  },
  start() {
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
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              // wx.startRecord()
            }
          })
        }
      }
    })
    wx.switchTab({
      url: '/pages/Page_test/Page_test'
    })
    
  },
  onLoad: function (options)
   {
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
      // wx.switchTab({
      //   url: '/pages/Page_test/Page_test'
      // })
    }
  },

})