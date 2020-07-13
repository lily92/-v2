// pages/myCoffee/page/goldenCup/component/btnGroup/btnGroup.js
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
    // 分享
    showShare(e) {
      console.log(e)
      this.triggerEvent("share")
    },
    //save保存
    save(e) {
      console.log(e)
      this.triggerEvent("save")
    },
  }
})
