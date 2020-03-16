
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
    // itemStyle: Object,
    params: Object,
    dataList: Object,
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    // 点击查看更多
    newmore:function(e){
      wx.navigateTo({
        url: '/pages/allist/allist?article_lx=' + e.currentTarget.dataset.lx
      });
    },
    /**
     * 跳转文章详情页
     */
    onTargetDetail(e) {
      // 跳转到新闻
      if (e.currentTarget.dataset.lx==10002){
        wx.navigateTo({
          url: '/pages/newsxq/newsxq?article_id=' + e.currentTarget.dataset.id
        });
      }
      // 跳转案例中心
      else if (e.currentTarget.dataset.lx == 10001){
        wx.navigateTo({
          url: '/pages/anlixq/anlixq?article_id=' + e.currentTarget.dataset.id
        });
      }
    },

  }

})