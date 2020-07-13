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
    },
    Pindex:{
      type:Number|| String
    },
    pressureLine:{
      type:Array
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    yLineNum:[
      '（Bar）',1,2,3,4,5,6,7,8,9,10
    ],
    valuetop:'50%'
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    slider1change: function (e) {
      console.log("change：",e)
      this.triggerEvent('sliderChange',e.detail)
      let top = 10-e.detail
      this.setData({
        valuetop:top+'%'
      })
    },
    slider1changing: function (e) {
      // console.log("changing：",e)
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
