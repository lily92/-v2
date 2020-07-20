// pages/myCoffee/components/screen/screen.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shaixuanList:{
      type:Array
    },
    show:{
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
    select(event){
      let data = this.data.shaixuanList
      data[event.target.dataset.idx].checkId =  event.target.dataset.id
      // console.log(data)
      this.setData({
        shaixuanList: data
      })
    },
    onClose() {
      this.setData({
        show: false
      });
    },
    reset(){
      console.log('reset')
      this.triggerEvent('reset')
    },
    confrim(){
      console.log('confrim')
      this.triggerEvent('confrim')
    },
  }
})
