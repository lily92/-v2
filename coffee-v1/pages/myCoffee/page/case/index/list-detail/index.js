// pages/reads/list-detail/index.js
// pages/reads/index.js
let app = getApp();
import {
  ArticleModel
} from '../../../../../../api/journal.js'

let articleModel = new ArticleModel();
var WxParse = require('../../../../../../wxParse/wxParse.js');



import {
  CommonModel
} from '../../../../../../api/common.js'

let commonModel = new CommonModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Detailed: {},
    user_id: 0,
    article_id: 0,
    eav: [],
    value:'',
    text: '收藏',
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    var that = this;
    var id = options.id
    this.setData({
      article_id: options.id
    })
    var temp={
      id,
      user_id:app.globalData.user_id
    }
    articleModel.GetDataByDetailed(temp, res => {
      that.setData({
        Detailed: res.data,
        text:res.text
      })
      that.geteav();
      WxParse.wxParse('article', 'html', res.data.content, that, 5);
    })
  },
  /**
   * 提交评论
   */
  postsend(e) {
    var that = this;
    let user=wx.getStorageSync('user');
    if (app.globalData.isLogin===false){
      wx.navigateTo({
        url: '/pages/login/index',
      })
      return;
    }
    var temp = {
      user_id: app.globalData.user_id,
      article_id: that.data.article_id,
      content: e.detail.value
    }
    articleModel.PostDataByEav(temp, res => {
      that.geteav();
      wx.showToast({
        title: '评论成功'
      })
      that.setData({ value:''})
    })
  },


  collection() {
    var that = this;
    let temp = {
      user_id: app.globalData.user_id,
      article_id: that.data.article_id,
      type: 3
    }
    commonModel.PostCollection(temp, res => {
      if (res.code == 200) {
        that.setData({
          text: '取消',
        })
      } else {
        that.setData({
          text: '收藏',
        })
      }
    })
    console.log(temp)
  },

  /**
   * 文章点赞
   */
  userEav(e) {
    if (app.globalData.isLogin === false) {
      wx.navigateTo({
        url: '/pages/login/index',
      })
      return;
    }
    articleModel.GetEavIdByLike(e.currentTarget.dataset.id, res => {
      this.geteav();
    })
  },
  /**
   * 获取评价列表
   */
  geteav() {
    var that = this;
    articleModel.GetIdByEav(that.data.article_id, res => {
      console.log(res)
      that.setData({
        eav: res
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  ArticleLike() {
    var that=this;
    if (app.globalData.isLogin === false) {
      wx.navigateTo({
        url: '/pages/login/index',
      })
      return;
    }
    var temp={
      id: this.data.Detailed.id,
      user_id: app.globalData.user_id
    }
    articleModel.GetArticleIdByLike(temp, res => {
      let data=that.data.Detailed;
      data.like = data.like+1;
      console.log(data.like)
      that.setData({
        Detailed:data
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})