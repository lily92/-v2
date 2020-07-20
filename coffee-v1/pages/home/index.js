// pages/home/index.js
let app = getApp();
import Toast from './../../vant-weapp/dist/toast/toast';


import {
  UserModel
} from '../../api/user.js'

let userModel = new UserModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow() {
    let userinfo = wx.getStorageSync('userinfo')
    this.setData({
      userinfo
    })
  },
  goCoffee(){
    wx.switchTab({
			url: '/pages/tarBar/mycoffee/mycoffee',
		})
  },
  // 前往我的积分
  goIntegral() {
    wx.navigateTo({
      url: './score/index',
    })
  },
  // 前往分销中心
  goRetail() {
    let user_id = app.globalData.user_id
    userModel.GetUserByInfo(user_id, res => {
      console.log(res)
      if (res.isdist === 2) {
        wx.navigateTo({
          url: './distributor/buffer/index',
        })
      } else {
        wx.navigateTo({
          url: './distributor/index',
        })
      }
    })
  },
  // 前往个人资料
  goProfile() {
    wx.navigateTo({
      url: './profile/index'
    })
  },
  // 前往会员特权
  goVip() {
    wx.navigateTo({
      url: './vip/index'
    })
  },
  // 前往我的订单
  goMyOrder(e) {
    let index = e.currentTarget.dataset.index
    wx.navigateTo({
      url: './order/index?index=' + index
    })
  },
  // 前往我的地址
  goMyAddress() {
    wx.navigateTo({
      url: './address/index'
    })
  },
  // 前往领券中心
  goGetTicket() {

    wx.navigateTo({
      url: './ticket/index'
    })
  },
  goShare(){
    wx.navigateTo({
      url: "/pages/my/share/index",
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 我的优惠券
  goMyTicket() {
    wx.navigateTo({
      url: './ticket/myTicket/index'
    })
  },
  goMyCollect () {
    wx.navigateTo({
      url: './collect/index'
    })
  }
})