// pages/myCoffee/components/curve/curve.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDetail:{
      type:Boolean
    },
    selectList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    result:['a','b']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCloseDetail() {
      this.setData({
        showDetail: false
      }); 
    },
    comfrim(){
       console.log('执行 确认按钮操作')
      this.triggerEvent('comfrim','xxxx')
    },
    onChangeCheckbox(event) {
      this.setData({
        result: event.detail,
      });
      console.log(this.data.result.length)
    },
  }
})
