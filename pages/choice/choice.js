// pages/choice/choice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   cihui:false,
   tianshu:false,
   id1:"kaoyan",
   id2:"suiji",
   id3:"cet4",
   id4:"cet6",
   id11:"kaoyan_import",
   id12:"cet4_import",
   id13:"cet6_import",
   id14:"zy8",
   id5:20,
   id6: 60,
   id7: 80,
   id8: 100,
   id9: 120,
   id10:160,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var cet4= require('../../data/cet4.js') 
    var cet4_import = require('../../data/cet4_import.js') 
    var cet6 = require('../../data/cet6.js')
    var cet6_import = require('../../data/cet6_import.js') 
    var kaoyan = require('../../data/kaoyan.js')
    var kaoyan_import = require('../../data/kaoyan_import.js') 
    var suiji = require('../../data/vocabulary.js')
    var zy8= require('../../data/zy8.js') 
    wx.setStorage({
      key: "cet4",
      data: cet4.wordList
    })
    wx.setStorage({
      key: "cet4_import",
      data: cet4_import.wordList
    })
    wx.setStorage({
      key: "cet6",
      data: cet6.wordList
    })
    wx.setStorage({
      key: "cet6_import",
      data: cet6_import.wordList
    })
    wx.setStorage({
      key: "kaoyan",
      data: kaoyan.wordList
    })
    wx.setStorage({
      key: "kaoyan_import",
      data: kaoyan_import.wordList
    })
    wx.setStorage({
      key: "suiji",
      data: suiji.wordList
    })
    wx.setStorage({
      key: "zy8",
      data: zy8.wordList
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
  choice_book(e)
  {
     this.setData({
       cihui:true
     })
     wx.setStorage({
       key: "book",
       data: e.currentTarget.id
     })
     wx.setStorage({
       key: 'day_num',
       data: 0
     })
  },
  day_num(e){
    wx.setStorage({
      key: "day_task",
      data: e.currentTarget.id-0
    })
    wx.setStorage({
      key: "word_num",
      data: e.currentTarget.id-0
    })
    var task=[]
    for (var i = 0; i <e.currentTarget.id; i++) {
      task.push(i)
    }
    wx.setStorage({
      key: "task",
      data: task
    })
    this.setData({
      tianshu:true
    })
    wx.setStorage({
      key: "word_count",
      data:0
    })
    wx.setStorage({
      key: "day_num",
      data: 0
    })
    wx.setStorage({
      key: "word_collect_length",
      data: 0
    })
    wx.setStorage({
      key: "word_collect",
      data:''
    })
    wx.setStorage({
      key: "collect",
      data: ''
    })
    wx.setStorage({
      key: "word_ci_collect",
      data: ''
    })
    wx.setStorage({
      key: "collect_phrase",
      data: ''
    })
    wx.setStorage({
      key: "yufa_data_test",
      data: 0
    })
    wx.setStorage({
      key: "yufa_data",
      data: 0
    })
    wx.setStorage({
      key: "test",
      data: 0
    })

    wx.setStorage({
      key: "cu",
      data: 0
    })
  },
  back(){
    wx.setStorage({
      key: "have_done",
      data:true
    })
    wx.setStorage({
      key: "finish_count",
      data: true
    })
    wx.switchTab({
      url: '../../pages/Page_test/Page_test',
    })({

    })
  }

})