// components/myOrder/myOrder.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goCoffee(){
      wx.switchTab({
        url: '/pages/tarBar/mycoffee/mycoffee',
      })
    },
    // 前往我的积分
    goIntegral() {
      wx.navigateTo({
        url: '/pages/home/score/index',
      })
    },
    // 前往分销中心
    goRetail() {
      let user_id = app.globalData.user_id
      userModel.GetUserByInfo(user_id, res => {
        console.log(res)
        if (res.isdist === 2) {
          wx.navigateTo({
            url: '/pages/home/distributor/buffer/index',
          })
        } else {
          wx.navigateTo({
            url: '/pages/home/distributor/index',
          })
        }
      })
    },
    // 前往个人资料
    goProfile() {
      wx.navigateTo({
        url: '/pages/home/profile/index'
      })
    },
    // 前往会员特权
    goVip() {
      wx.navigateTo({
        url: '/pages/home/vip/index'
      })
    },
    // 前往我的订单
    goMyOrder(e) {
      let index = e.currentTarget.dataset.index
      wx.navigateTo({
        url: '/pages/home/order/index?index=' + index
      })
    },
    // 前往我的地址
    goMyAddress() {
      wx.navigateTo({
        url: '/pages/home/address/index'
      })
    },
    // 前往领券中心
    goGetTicket() {
  
      wx.navigateTo({
        url: '/pages/home/ticket/index'
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
        url: '/pages/home/ticket/myTicket/index'
      })
    },
    goMyCollect () {
      wx.navigateTo({
        url: '/pages/home/collect/index'
      })
    }
  }
})
