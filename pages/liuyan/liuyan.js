// pages/liuyan/liuyan.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    array: ['商城小程序', '营销型网站', '响应式网站', '手机网站'],
    ysdata:'',
    mc:'',
    ck:'',
    txt:'',
    // 选中状态
    pick:"#ccc"
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      ysdata:this.data.array[e.detail.value],
      pick:'#414141'

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  thisinput:function(){

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '留言中心'
    })
    this.setData({
      name: '',
      tel: '',
      array: ['商城小程序', '营销型网站', '响应式网站', '手机网站'],
      ysdata: '',
      mc: '',
      ck: '',
      txt: ''
    })
  },

  getname: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  getphone: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },

  getmc: function (e) {
    this.setData({
      mc: e.detail.value
    })
  },

  getck: function (e) {
    this.setData({
      ck: e.detail.value
    })
  },

  gettxt: function (e) {
    this.setData({
      txt: e.detail.value
    })
  },


  sub: function () {
    var that = this;
    var name = that.data.name;
    var tel = that.data.tel;
    if (name.length == 0 || tel.length != 11) {
      wx.showModal({
        title: '提示',
        content: '请填写昵称和联系电话',
        success: function (res) {
          if (res.confirm) {
            console.log('弹框后点取消')
          } else {
            console.log('弹框后点取消')
          }
        }
      })
      return false
    }

    // 提交数据
    app._post_form('message/index', {
      name: that.data.name,
      tel: that.data.tel,
      gid: that.data.ysdata,
      company_name: that.data.mc,
      website: that.data.ck,
      describe: that.data.txt,
    }, function (result) {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000,
        success: function () {
          that.onLoad();
        }
      })
      

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