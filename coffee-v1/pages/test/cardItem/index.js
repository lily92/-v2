// pages/card/index.js

import Toast from './../../../vant-weapp/dist/toast/toast';
Component({
  /**
   * 组件的属性列表
   */
  onLoad(options) {
    console.log()
  },
  properties: {
    show: {
      type: Boolean
    },
    list: {
      type: Array
    }
  },
  data: {
    currentIdx: '0',
    temper_type: '- -',
    amount: '1',
    price: '- -'
  },
  methods: {
    // 数量选择
    onChangeNum(event) {
      let val = event.detail
      if (this.data.price !== '- -') {
        this.setData({
          amount: val,
          price: this.data.list[0].price * val
        })
      }else { 
        this.setData({
          amount: '1'
        })
        wx.showToast({
          title: '请先选择商品属性',
          icon: 'none',
          duration: 1000
        })
      }
    },
    // 关闭按钮
    toggleShowCard() {
      let data = false
      this.triggerEvent('closeBtn', data)
    },
    // 选择商品属性
    chooseItem(e) {
      let idx = e.currentTarget.dataset.index
      let type = e.currentTarget.dataset.type
      this.setData({
        currentIdx: idx,
        temper_type: type,
        price: this.data.list[0].price * this.data.amount
      })
      console.log(this.data.currentIdx, this.data.list)
    },
    // 加入购物袋
    clickToAdd() {
      let data = {
        currentIdx: this.data.currentIdx,
        temper_type: this.data.temper_type,
        amount: this.data.amount,
        price: this.data.price
      }
      if (data.temper_type !== '- -') {
        console.log(data)
      } else {
        console.log(1)
        wx.showToast({
          title: '还没选择商品属性呢！',
          icon: 'none',
          duration: 1000
        })
      }
    }
  },

})