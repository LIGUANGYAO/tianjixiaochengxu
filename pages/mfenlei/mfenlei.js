// pages/mfenlei/mfenlei.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchColor: "rgba(0,0,0,0.4)",
    searchSize: "15",
    searchName: "搜索产品名称",
    arr:[],
  },
  goshop:function(e){
    var that=this;
    wx.navigateTo({
      url: '/pages/goods/index?goods_id=' + e.currentTarget.dataset.id
    });
  },
  flmore:function(e){
    var that = this;
    wx.navigateTo({
      url: '/pages/list/list?categoryid=' + e.currentTarget.dataset.cid
    });
  },
  toliuyan:function(){
    wx.switchTab({
      url: '/pages/liuyan/liuyan',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr=[]
    var that=this;
    var len=''
    var i=''
    App._get('category/erkai_lists', {
    }, function (result) {
      // len = result.data.list.length;
      console.log(result.data.data)
      that.setData({
        arr: result.data.data,
         })
      // for (var i = 0; i < len;i++){
      //   i=i;
      //   App._get('goods/erkai_lists', {
      //     category_id: result.data.list[i].category_id,
      //     sortType:'all',
      //     // 分类数量
      //     listRows:4
      //   }, function (res) {
      //     console.log(res)
      //     arr.push(res.data)
      //     if (len == i ){
      //       that.setData({
      //         arr: arr,
      //       })
      //     }
         
      //   });
      // }
    });


    wx.setNavigationBarTitle({
      title: '产品分类'
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