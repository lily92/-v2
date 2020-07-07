// pages/home/distributor/apply/index.js
import Toast from './../../../../vant-weapp/dist/toast/toast';
let  app=getApp();

import {
  UserModel
} from './../../../../api/user.js'

let userModel = new UserModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ruleChecked: false,
    invitor: '平台(请核对)',
    username: '',
    phone: '',
    userinfo:{}
  },

  onShow () {
    let userinfo = wx.getStorageSync('userinfo')
    this.setData({
      userinfo
    })
  },
  // 是否确认阅读协议
  onChange(event) {
    this.setData({
      ruleChecked: event.detail
    });
  },
  // 邀请人输入框
  onChangeUser (event) {
    this.setData({
      invitor: event.detail
    });
    console.log(event.detail)
  },
  // 用户名输入框
  onChangeUser(event) {
    this.setData({
      username: event.detail
    });
    console.log(event.detail)
  },
  // 手机号码输入框
  onChangePhone(event){
    this.setData({
      phone: event.detail
    });
    console.log(event.detail)
  },
  // 申请成为经销商
  onApply () {
    var that=this;
    let data = {
      ruleChecked: this.data.ruleChecked,
      invitor: this.data.invitor,
    }
    if(data.ruleChecked===true){
      var temp={
        user_id: app.globalData.user_id,
        username: this.data.username,
        phone: this.data.phone
      } 
      userModel.PostDataByDist(temp,res=>{
        console.log(res)
        if(res.code!==200){
          Toast(res.message)
        }
        if (res.code === 200) {
          Toast("提交成功，请等待平台审核")
          wx.switchTab({
            url: '/pages/home/index',
          })
        }
      })
    }else{
      Toast("请先阅读分销商申请协议")
    }
  }
})