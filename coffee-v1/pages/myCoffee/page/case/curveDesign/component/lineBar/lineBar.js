// pages/myCoffee/page/case/curveDesign/component/lineBar/lineBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time:{
      type:Number|| String
    },
    timeLine:{
      type:Array
    },
    isStep:{
      type:Number|| String
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    yLineNum:[
      '（Bar）',1,2,3,4,5,6,7,8,9,10
    ],
    // timeLine:[
    //   30,60,40,20,15
    // ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeSlider(event) {
      this.setData({
        time:event.detail
      })
      this.triggerEvent('ChangeSlider',event.detail)
    },
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
