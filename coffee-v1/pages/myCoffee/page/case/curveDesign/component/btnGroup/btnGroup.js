// pages/myCoffee/page/case/curveDesign/component/btnGroup/btnGroup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isFrist:{
      type:Boolean
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
    next(){
      console.log('next')
      this.triggerEvent('next')
    },
    prev(){
      console.log('prev')
      this.triggerEvent('prev')
    }
  }
})
