// pages/anlixq/anlixq.js
const App = getApp();
const wxParse = require("../../wxParse/wxParse.js");
var article_id, index
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文章详情
    detail: {},
    prev:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticleDetail(options.article_id);
    article_id = options.article_id
    index = options.index;
    wx.setNavigationBarTitle({
      title: '案例详情'
    })
  },
  getArticleDetail(article_id) {
    let _this = this;
    App._get('article/erkai_detail', {
      article_id
    }, function (result) {
      
      let detail = result.data.detail;
      // let prev=
      let prev = result.data.change.prev;
      let next = result.data.change.next;
      console.log(result)
      // 富文本转码
      if (detail.article_content.length > 0) {
        wxParse.wxParse('content', 'html', detail.article_content, _this, 0);
      }
      _this.setData({
        detail,
        prev: prev,
        next: next
      });
    });
  },
  prev:function(){
    var that=this;
    if (that.data.prev.id!=''){
      that.getArticleDetail(that.data.prev.id)
    }
    else{
      that.setData({
        
      })
      wx.showToast({

        title: '已经是第一篇文章',
        duration: 2000

      })
    }
  },
  next: function () {
    var that = this;
    if (that.data.next.id != '') {
      that.getArticleDetail(that.data.next.id)
    }
    else {
      wx.showToast({

        title: '已经是最后一篇文章',
        duration: 2000

      })
    }
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