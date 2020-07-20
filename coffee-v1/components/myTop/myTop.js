// components/myTop/myTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // userinfo:{
    //   type:Object
    // },
    active:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    userinfo: wx.getStorageSync('userinfo')
  },

  /**
   * 组件的方法列表
   */
  methods: {
  // 前往个人资料
  goProfile() {
    wx.navigateTo({
      url: '/pages/home/profile/index'
    })
  },
  link(e){
    this.triggerEvent('link',e.currentTarget.dataset.aid)
  },
  }
})
