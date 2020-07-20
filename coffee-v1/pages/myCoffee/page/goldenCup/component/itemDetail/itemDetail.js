// pages/myCoffee/page/goldenCup/component/item-detail/itemDetail.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    descContent:{
      type:Object
    },
    descList:{
      type:Array
    },
    bgcolor:{
      type:String
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
    bindDateChange: function (e) {
      let that = this
      console.log('picker发送选择改变，携带值为', e.detail.value)
      let  descContent = that.data.descContent
      descContent.date= e.detail.value
      this.setData({
        descContent:descContent
      })
    },
  }
})
