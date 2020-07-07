// pages/indexPack/about/about.js
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  desc:"坐落于中国家电产业集群地广东顺德。有员工300多人，其中技术开发人员40多人。集自主品牌、产品研发、生产、销售于一体产销工厂。产品研发、生产、销售于一体产销工厂。是国内生产商用半自动咖啡机、商用咖啡机配套设备工厂。同时开发近百款配套家用咖啡电器、咖啡配套电器。目前远销全球二十多个国家或地区。自主拥有近百项核心专利技术，所有产品均取得了中国、欧盟、美国、日本等国家或地区的安全、环保、质量体系认证。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  let _this = this
	  console.log(_this.data.desc)
      WxParse.wxParse('article', 'html', _this.data.desc, _this, 5);
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