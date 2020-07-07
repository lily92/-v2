// pages/login/index.js
const app = getApp();
import Toast from './../../vant-weapp/dist/toast/toast.js'

import {
  UserModel
} from '../../api/user.js'

let usermodel = new UserModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    isPhoneLogin: 1, // 切换成手机验证码登录
    isGetCode: "1", //  是否点击了获取验证码按钮，如果不是，值为1，否则为2
    downNum: 20, // 初始倒计时秒数
    timer: '', //  倒计时定时器
    doClear: false, //  清除定时器
    waitToGetCode: 1, // 设置倒计时内点击“获取验证码”不触发定时器
    clickTime: 1
  },
  onLoad() {
    wx.getLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  handlePhoneLogin() {
    this.setData({
      isPhoneLogin: 2
    })
  },
  countDown() {
    let that = this
    let temp = that.data.downNum
    temp--
    that.setData({
      downNum: temp
    });
    if (temp <= 0) {
      clearInterval(that.data.timer)
      that.setData({
        isGetCode: "1",
        downNum: 20,
        timer: ''
      })

    }
  },
  // 输入框绑定值 
  bindKeyInput(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取验证码
  getCode() {
    let that = this
    if (that.data.phone === '') {
      Toast.fail('输入手机号码')
    } else {
      that.setData({
        isGetCode: "2",
      })
      if (that.data.timer === '') {
        that.data.timer = setInterval(that.countDown, 1000)
      } else {
        Toast.fail('别急嘛～')
      }
    }

  },
  onwxLogin() {
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        wx.login({
          success(lores) {
            var temp={
              code: lores.code,
              temp: userInfo
            }
            usermodel.postRegistered(temp,reres=>{
                wx.setStorageSync('user', reres)
              wx.setStorageSync('userinfo', reres)
              app.globalData.isLogin=true
              app.globalData.user_id = reres.id
              wx.navigateBack({
                delta: 1,
              })
            })
          }
        })
      },
     
    })
  }
})