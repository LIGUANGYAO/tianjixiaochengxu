// pages/allist/allist.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      stitle:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onTargetDetail(e) {

    // 跳转到新闻
    if (e.currentTarget.dataset.lx == 10002) {
      wx.navigateTo({
        url: '/pages/newsxq/newsxq?article_id=' + e.currentTarget.dataset.id + '&index=' + e.currentTarget.dataset.index
      });
    }
    // 跳转案例中心
    else if (e.currentTarget.dataset.lx == 10001) {
      wx.navigateTo({
        url: '/pages/anlixq/anlixq?article_id=' + e.currentTarget.dataset.id + '&index=' + e.currentTarget.dataset.index
      });
    }
  },
  onLoad: function (options) {
    var that=this;
    var news = options.article_lx;
    App._get('article/lists', {
      category_id:options.article_lx
    }, function (result) {
      console.log(result.data.list.data)
        that.setData({
          allist: result.data.list.data,
          stitle: result.data.list.data[0].category.name
        })
      wx.setNavigationBarTitle({
        title: that.data.stitle
      })
    });
    

    
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