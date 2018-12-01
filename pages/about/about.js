// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgalist: ['https://pic.yupoo.com/styshlg/c1a11f50/8703303b.jpg'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接   
      urls: this.data.imgalist // 需要预览的图片http链接列表   
    })
    wx.getImageInfo({// 获取图片信息（此处可不要）
      src: 'https://pic.yupoo.com/styshlg/c1a11f50/8703303b.jpg',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
      }
    })
  }
})