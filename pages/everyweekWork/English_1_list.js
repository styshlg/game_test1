
Page
({

  /**
   * 页面的初始数据
   */
  data: {
   list:[
     { url: "https://200.cdn-vod.huaweicloud.com/asset/ddabfb8edebd60d48a91e81c2f88f077/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/780297c318c2e60a55bf357a318eff94/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/45333e66023e3565a8518d21cb357299/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/f34ce377bed10207368841603c47fb0e/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/72569fad5c1b3f5937bdd8bca675fd5f/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/1010de3f8a1e5fefc69cd7776de4e3aa/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/dbba8db3f06f70e71347f3db1746cbc5/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/4dcd6744673f64ad7c9cc49bcbdaa0c1/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/e143478c4a3f8716ddd7c5fdfabf1aa8/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/cad4be24cf2f979bbb02939b6c82fa5b/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/8ed2248ab902cf99acdc02bca47720f6/play_video/index.m3u8" },
     { url: "https://200.cdn-vod.huaweicloud.com/asset/8ed2248ab902cf99acdc02bca47720f6/play_video/index.m3u8" },
    

    ],
  },
  itemOnclick: function (e) {
    var index = e.currentTarget.dataset.id;
    //获取当前页面信息栈
    var pages = getCurrentPages();
    //获取上一个页面信息栈(add页面)
    // var prevPage = pages[pages.length - 2]
    //给上一个页面的address赋值
    console.log(index)
    wx.setStorage({
      key: 'English_1_1_id',
      data: index,
    })
    var url_text= '/pages/everyweekTest/week'
    var id_num =index+1
    var url=url_text+id_num+'/week'+id_num
    console.log(url)
    wx.redirectTo({
    
     url
   })
    //给上一个页面的address赋值

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
  
  }
})