const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[]
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
}),

Component({
  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    itemIndex: String,
    itemStyle: Object,
    params: Object,
    dataList: Object,
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    flmore:function(e){
      var that = this;
      wx.navigateTo({
        url: '/pages/list/list?categoryid=' + e.currentTarget.dataset.cid
      });
    },
    /**
     * 跳转商品详情页
     */
    _onTargetGoods(e) {
      // 记录formid
      App.saveFormId(e.detail.formId);
      wx.navigateTo({
        url: '/pages/goods/index?goods_id=' + e.detail.target.dataset.id,
      });
    },
  }

})