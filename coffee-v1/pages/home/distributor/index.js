// pages/home/distributor/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';
import {
  DistModel
} from './../../../api/dist.js'

let distModel = new DistModel();
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    distributor: true, //是否为经销商
    showBanner: false, 
    userinfo:{},
    integral:{},
  },
  onClose(){
    this.setData({
      show:false,
    })
  },
  // 立即加入
  clickToJoin () {
    Toast('体验版暂无法使用')
    return;
    wx.navigateTo({
      url: './apply/index',
    })
  },
  onShow(){
    let userinfo = wx.getStorageSync('userinfo')
    this.setData({
      userinfo
    })
    var tmep={
      user_id: app.globalData.user_id
    }
    distModel.GetUserByIntegral(tmep,res=>{
      this.setData({
        integral:res
      })
    })
  },
  previewImg: function (e) {
    var imgArr =[this.data.userinfo.bg];
    wx.previewImage({
      current: imgArr[0],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 提现明细
  clickToBill() {
    wx.navigateTo({
      url: '/pages/home/score/detail/index',
    })
  },
  // 分销订单
  clickToOrder() {
    wx.navigateTo({
      url: './order/index'
    })
  },
  // 我的团队
  clickToTeam() {
    wx.navigateTo({
      url: './team/index',
    })
  },
  //  显示/隐藏海报
  onToggleMask () {
    this.setData({
      show: true
    })
  },
  // 长按海报
  onClickPic() {
    Toast('体验版暂无法使用')
    return;
    console.log(2)
  }
})