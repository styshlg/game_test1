const app = getApp()
var Bmob = require('../../utils/Bmob-1.6.2.min.js');
Bmob.initialize("7fa2bb4379cc0f8fc3ffeaeac878b848", "821887fa22b643a48a21b6af476cc0a1");// pages/Login/Login.js
Page({
  data:
  {
    list: [],
    phone: '',
    password: '',
    name1: '',
    password1: '',
    ID: '',
    nickname: '',
    test: '',
    imgsrc1: 'https://pic.yupoo.com/styshlg/368ec2e7/2bd8d4ec.gif',
  },
  searchID() {
    wx.request({
      url: 'https://www.dinosaurenglish.com//test.php', //服务器地址
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        ID: 1//请求参数
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  start: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    console.log(e.detail.userInfo.nickName)
    wx.getUserInfo
    ({
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
    try {
      var myDate = new Date();
      const query = Bmob.Query('login_User');
      query.set("Time", myDate.toLocaleTimeString())
      query.set("Date", myDate.toLocaleDateString())
      query.set("nickName", e.detail.userInfo.nickName)
      query.set("sex", e.detail.userInfo.gender)
      query.set("city", e.detail.userInfo.city)
      query.set("province", e.detail.userInfo.province)
      query.set("country", e.detail.userInfo.country)
      query.set("city", e.detail.userInfo.city)
      let data = {
        mobilePhoneNumber: this.data.phone
      }
      console.log(this.data.phone)
      query.set("Phone", this.data.phone)
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
    }
    catch (e) {
      console.log(e.toString())
    }
    wx.switchTab({
      url: '/pages/Page_test/Page_test',
    })
  },
  loadData(e) {
    this.data.loading = true;
    wx.request({
      url: 'https://www.dinosaurenglish.com//index.php',
      data: {

        p: this.data.page,
        type: this.data.currentType
      },
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        var list1 = res.data.girls;
        wx.setStorage({
          key: 'nick',
          data: JSON.stringify(this.data.list1[0].phone),
        })
        console.log(list1[0])
        if (list1.length === 0) {
          that.hasMore = false;
          return;
        }
      }
    });
  },
  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  onLogin: function (e) {
    wx.setStorage({
      key: 'telephone',
      data: this.data.phone,
    })
    wx.switchTab({
      url: '../Page_test/Page_test',
    });
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)


    if (this.data.ID.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      var mypassword = this.data.password
      var myname = this.data.phone
      var myID = this.data.ID
      this.search(myID)
      console.log(this.data.nickname)
    }

  },
  IDInput: function (e) {
    this.setData({
      ID: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

  },
  try2: function () {
    wx.switchTab({

      url: '../Page_test/Page_test',
    });
  },
  try1: function () {
    wx.login({
      success: function (res) {
        // console.log(res.code)
        //发送请求
        wx.request({
          url: 'https://konglongenglish-admin.hk01.bdysite.com/test.php', //接口地址
          data: { code: res.code },
          header: {
            'content-type': 'application/json' //默认值
          },
          success: function (res) {
            console.log(res.data)
            console.log(res.data.openid)
            wx.setStorage({
              key: 'openid',
              data: res.data.openid,
            })
            const query = Bmob.Query("test");
            query.equalTo("telephone", "==", "13524621810");
            query.find().then(res => {
              wx.switchTab({
                url: '../Page_test/Page_test',
              });
              if (res[0].openId = '') {
                console.log(res[0].telephone)
              }
              console.log(res[0].openId)
            });
          }
        })
      }
    })
  },
  try: function () {

    wx.navigateTo({
      url: '../try/index',
    });
  },
  //SMS_Message 验证登录服务
  sms_test: function (e) {
    // this.try1();
    let smsCode = this.data.smsCode
    let data = {
      mobilePhoneNumber: this.data.phone
    }
    Bmob.verifySmsCode(smsCode, data).then
      (function (response) {
        console.log(response);
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        })
        try 
        {
          var myDate = new Date();
          const query = Bmob.Query('login_User');
          query.set("Time", myDate.toLocaleTimeString())
          query.set("Date", myDate.toLocaleDateString())
          query.set("nickName", e.detail.userInfo.nickName)
          query.set("sex", e.detail.userInfo.gender)
          query.set("city", e.detail.userInfo.city)
          query.set("province", e.detail.userInfo.province)
          query.set("country", e.detail.userInfo.country)
          query.set("city", e.detail.userInfo.city)
          console.log(wx.getStorageSync('telephone'))
          query.set("Phone", wx.getStorageSync('telephone'))
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
        }
        catch (e) {
          console.log(e.toString())
        }
        wx.switchTab({
          url: '/pages/Page_test/Page_test',
        })
        if (!wx.getStorageSync('user_Phone_Record')) 
        {
          wx.setStorage({
            key: 'user_Phone_Record',
            data: 'true',
          })
        }
        else
         {
              wx.setStorage
              ({
                key: 'user_Phone_Record',
                data: 'true',
              })
          }
      })
      .catch(function (error) {
        console.log(error);
        wx.showToast({
          title: '登录失败',
          icon: 'loading',
          duration: 2000
        })
      });
  },
  //发送手机号码
  sms_send: function (e) 
  {
    wx.setStorage({
      key: 'telephone',
      data: this.data.phone,
    })
    let params =
    {
      mobilePhoneNumber: this.data.phone //string

    }
    Bmob.requestSmsCode(params).then(function (response) {
      console.log(response);
      wx.showToast({
        title: '获取验证码成功',
        icon: 'success',
        duration: 2000
      })
    })
   .catch(function (error) 
   {
        console.log(error);
        wx.showToast({
          title: '获取验证码失败',
          icon: 'loading',
          duration: 2000
        })
      });
  },
  //获取手机号码
  userPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  //获取验证码
  smsCodeInput: function (e) {
    var val = e.detail.value;
    this.setData({
      smsCode: val
    });
  },
})