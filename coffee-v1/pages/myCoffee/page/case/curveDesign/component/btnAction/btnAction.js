// pages/myCoffee/page/case/curveDesign/component/btnAction/btnAction.js
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
    add(){
      console.log('add')
      this.triggerEvent('add')
    },
    reduce(){
      console.log('reduce')
      this.triggerEvent('reduce')
    }
  }
})
