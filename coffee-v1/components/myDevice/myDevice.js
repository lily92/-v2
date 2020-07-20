// components/myDevice/myDevice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    deviceList: {
      type: Array
    },
    showKl:{
      type: Boolean
    }
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
    goCoffee() {
      wx.switchTab({
        url: '/pages/tarBar/mycoffee/mycoffee',
      })
    },
    showPopup() {
      console.log('xx')
      this.setData({
        showKl: true
      });
    },

    onClose() {
      this.setData({
        showKl: false
      });
    },
  }
})