// pages/home/ticket/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';
let app=getApp();
import {
  CouponsModel
} from '../../../api/coupons.js';

let couponsModel = new CouponsModel();

import {
  UserModel
} from '../../../api/user.js';

let userModel = new UserModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketList: [ // 优惠券列表
    ],

  },
  onShow(){
    let that=this;
    couponsModel.GetCounpn(app.globalData.user_id,res=>{
        that.setData({
          ticketList:res
        })
    })
  },

  // 立即领取按钮
  getTicket(e) {
    /**
     * 这里有个问题：前端页面 “立刻领取” 按钮的颜色状态是
     * 根据字段“isActive” 的true/fasle 控制的;但是考虑
     * 到点击之后,  只是单纯修改本地的“isActice” 状态,并没有修改到
     * 后端的数据。 所以这里剩下的操作由你发挥了。
     */
    let id = e.currentTarget.dataset.id   // 所点击优惠券的id
    let status = e.currentTarget.dataset.status // 所点击优惠券的状态
    var temp={
      coupon_id:id,
      user_id:app.globalData.user_id,
    }
    couponsModel.PostUserCoupon(temp,res=>{
      Toast(res.message)
    })
    setTimeout(()=>{
      this.onShow();
    },400)
    // Todo
  }
})