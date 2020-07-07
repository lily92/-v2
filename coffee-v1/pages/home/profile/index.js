// pages/home/profile/index.js
let app=getApp();

import {
  UserModel
} from './../../../api/user.js'

let userModel = new UserModel();

import Dialog from './../../../vant-weapp/dist/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    role: '',
    temp: '',
    title: '',
    userInfo: {
     
    }
  },
  onShow(){
    let that=this;
    if (app.globalData.isLogin===false){
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }
    userModel.GetUserByInfo(app.globalData.user_id,res=>{
      that.setData({
        userInfo:res
      })
    })
    console.log(this.data.userInfo)
  },
  onToggleDialog(e) {
    this.setData({
      show: !this.data.show,
      role: e.currentTarget.dataset.title
    })
    switch (this.data.role) {
      // case 'name':
      //   this.setData({
      //     title: '修改名字'
      //   })
      //   break
      case 'phone':
        this.setData({
          title: '修改手机号码'
        })
        break
      case 'email':
        this.setData({
          title: '修改邮箱'
        })
        break
      case 'address':
        this.setData({
          title: '修改地址'
        })
        break
      case 'sex':
        this.setData({
          title: '修改性别'
        })
        break
    }
    userModel.PostUserByData(this.data.userInfo,res=>{
      this.onShow();
    })
    
  },
  // onChangename(event) {
  //   let temp = "userInfo.name"
  //   this.setData({
  //     [temp]: event.detail
  //   })
  // },
  onChangephone(event) {
    let temp = "userInfo.phone"
    this.setData({
      [temp]: event.detail
    })
  },
  onChangeemail(event) {
    let email = "userInfo.email"
    this.setData({
      [email]: event.detail
    })

  },
  onChangeaddress(event) {
    let address = "userInfo.address"
    
    this.setData({
      [address]: event.detail
    })
  },
  onChangesex(event) {
    let temp = "userInfo.sex"
    this.setData({
      [temp]: event.detail
    })
  }
})