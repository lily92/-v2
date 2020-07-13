// components/shareImgBtn/shareImgBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isshow:{
      type:Boolean,
      defalut:true
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
    closeShareImg(){
      this.triggerEvent('closeShareImg')
    },
    saveImage(){
      this.triggerEvent('saveImage')
    }
  }
})
