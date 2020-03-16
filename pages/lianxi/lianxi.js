// pages/lianxi/lianxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      latitude: 23.135395,
      longitude: 113.383392,
      width: 50,
      height: 50,
      title: '广州市天河区棠安路146号金豪商务大厦'
    }],
    polyline: [{
      points: [{
        longitude: 113.383392,
        latitude: 23.135395
      }],
    }],
    callout:[{
      content:'广州市天河区棠安路146号金豪商务大厦',
      bgColor:'#fff',
      display:'ALWAYS'
    }] 
    },
  callphone() {
    wx.makePhoneCall({
      phoneNumber: '18929579937',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '在线联系'
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

  }
})