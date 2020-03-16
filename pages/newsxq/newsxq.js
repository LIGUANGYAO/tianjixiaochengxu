const App = getApp();
const wxParse = require("../../wxParse/wxParse.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 文章详情
    detail: {},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this;
    // 获取文章详情
    this.getArticleDetail(options.article_id);
    wx.setNavigationBarTitle({
      title: '新闻详情'
    })

    App._get('article/erkai_tuijian', {
      category_id:10002
    }, function (result) {
      // console.log(tjdata)
      let tjdata = result.data.list.data
      // console.log(tjdata.data)
      that.setData({
        tjdata
      })
    });

  },
  onTargetDetail:function(e){
    var that=this;
    // console.log()
    that.getArticleDetail(e.currentTarget.dataset.id)
  },
  /**
   * 获取文章详情
   */
  getArticleDetail(article_id) {
    let _this = this;
    App._get('article/detail', {
      article_id
    }, function (result) {
      let detail = result.data.detail;
      
      // 富文本转码
      if (detail.article_content.length > 0) {
        wxParse.wxParse('content', 'html', detail.article_content, _this, 0);
      }
      _this.setData({
        detail
      });
    });
  },

  /**
   * 分享当前页面
   */
  onShareAppMessage() {
    // 构建页面参数
    let params = App.getShareUrlParams({
      'article_id': this.data.detail.article_id
    });
    return {
      title: this.data.detail.article_title,
      path: "/pages/article/detail/index?" + params
    };
  },

})