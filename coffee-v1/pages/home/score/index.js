// pages/home/score/instruction/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';
let app = getApp();

import {
  UserModel
} from './../../../api/user.js';

let userModel = new UserModel();

import {
  IntGoodsModel
} from '../../../api/IntGoods.js';

let intGoodsModel = new IntGoodsModel();


import {
  DistModel
} from '../../../api/dist.js';

let distModel = new DistModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listQuery: {
    },
    integral: 0,
    signIn: false,
    // mall:[]
    userinfo: {},
    mall: []
  },
  handelDe(e) {
    var data = e.currentTarget.dataset.info
    if (this.data.integral < data.integral){
      Toast('兑换该商品积分不足');
        return ;
    }
    wx.setStorageSync('score', data)
    wx.navigateTo({
      url: '/pages/home/score/pay/index',
    })
  },
  onShow() {
    var that = this;
    distModel.GetUserDistLog(app.globalData.user_id, res => {
      if (res.count > 0) {
        that.setData({
          signIn: true
        })
      }
      that.setData({
        integral: res.integral
      })
    })
    userModel.GetUserByInfo(app.globalData.user_id, res => {
      that.setData({
        userinfo: res
      })
    })
    intGoodsModel.GetIntegralByGoods(that.data.listQuery, res => {
      console.log(res)
      that.setData({
        mall: res
      })
    })
  },
  signIn() {
    var that = this;
    var temp = {
      type: 1,
      integral: app.globalData.integral,
      user_id: app.globalData.user_id,
      title: '签到',
    }
    distModel.PostUserByIntegral(temp, res => {
      console.log(res)
      that.setData({
        signIn: true
      })
      Toast('签到成功');
    })
    // if (!this.data.signIn) {
    //   Toast('签到成功，积分+1');
    //   this.setData({
    //     signIn: true
    //   })
    // } else {
    //   Toast('今天已经签到过啦！明天再来把～');
    // }
  }
})