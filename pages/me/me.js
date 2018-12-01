

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  getUserInfo: function () {
    var that = this
    _getUserInfo();
    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var time = this.set_time(new Date())
      this.setData({
        have_done: wx.getStorageSync('word_count'),
        word_num: 4063,
        day_task: wx.getStorageSync('day_task'),
        //userInfo: wx.getStorageSync('user_info_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A')
       userInfo:wx.getUserInfo.name
      })


  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
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
 
  update(data) {
    data = data || this.data
    this.setData(data)

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
  my_collect(){
    wx.navigateTo({
      url: '../collect_card/collect_card',
    })
  },
  choice_book(){
    this.setData({
      yes:true
    })
  },
  choice(){
    this.setData({yes:false})
    wx.navigateTo({
      url: '../choice/choice',
    })
  },
  test_card(){
    wx.switchTab({
      url: '../test/test',
    })
  },
  test_card2() {
    wx.switchTab({
      url: '../yufa_test/yufa_test',
    })
  },
  test_card3() {
    wx.navigateTo({
      url: '../everyweekWork/English_1_list',
    })
  },

  cancle(){
    this.setData({
      yes:false
    })
  },
  my_cizu(){
    wx.navigateTo({
      url: '../data/data'
    })
  },
  word_test() {
    wx.switchTab({
      url: '',
    })({
      url: '../test/test',
    })
  },
  suggestion(){
    wx.navigateTo({
      url: '../suggestion/suggestion',
    })
  },
  page_test() {
    wx.navigateTo({
      url: '../Page_test/Page_test',
    })
  },
})