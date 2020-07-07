// pages/home/distributor/buffer/index.js


import {
  CommonModel
} from '../../../../api/common.js'

let commonModel = new CommonModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  triggerApply(){
    wx.navigateTo({
      url: '../../distributor/apply/index',
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
      let user=wx.getStorageSync('user')
      var that=this;
    commonModel.cheDist(user.id,res=>{
      console.log(res)
      if(res===0){
        that.setData({
          show:false,
        })
      }else{
        that.setData({
          show: true,
        })
      }
    })
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