// pages/home/ticket/myTicket/index.js
let app=getApp();
import {
  CouponsModel
} from '../../../../api/coupons.js';

let couponsModel = new CouponsModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketList: [ // 优惠券列表
      {
        id: '1',
        isp: '2019.5.23', // 优惠券开始时间
        exp: '2019.6.30', // 优惠券过期时间
        discount: '500', //优惠金额
        condition: '2500', // 满足条件使用(满2500元使用)

        // code
      },
      {
        id: '2',
        isp: '2019.3.2', // 优惠券开始时间
        exp: '2020.6.1', // 优惠券过期时间
        discount: '100', //优惠金额
        condition: '500', // 满足条件使用(满500元使用)
        // code
      }
    ],

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that=this;
      let temp={
        user_id: app.globalData.user_id
      }

    couponsModel.GetUserByCoupons(temp,res=>{
      that.setData({
        ticketList: res.data
      })
    })
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

  
})