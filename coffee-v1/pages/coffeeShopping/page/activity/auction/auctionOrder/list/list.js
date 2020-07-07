// pages/component/order/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
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
    // 评价晒单
    clickToRate(e) {
      wx.navigateTo({
        url: '/pages/home/order/evaluate/index?order_id=' + e.currentTarget.dataset.order_id + '&goods_id=' + e.currentTarget.dataset.goods_id,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
        console.log(e)
    },
    // 再次购买
    clickToBuy() {

    },
    // 查看物流
    clickToCheckDeliver() {

    },
    // 申请退款
    clickToRefund() {

    },
    // 确认收货
    clickToConfirm(e) {
      console.log(e)
      this.triggerEvent("clickToConfirm", e.currentTarget.dataset.id)
    },
    // 取消订单
    clickToCancel(e) {
      this.triggerEvent("clickToCancel", e.currentTarget.dataset.id)
    },
    // 去支付
    clickToPay() {
      console.log(1)
      this.triggerEvent("traCheckedNum", 11)
    },
    goOrderDetail(e){
		console.log('aa')
      // wx.navigateTo({
      //   url: '/pages/home/order/detail/index?id=' + e.currentTarget.dataset.id,
      // })
    }
  }
})
