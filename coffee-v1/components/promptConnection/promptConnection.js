// components/common/promptConnection/promptConnection.js
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
	  closeTip(){
		  app.globalData.Network = false
		  console.log('app.globalData.noNetwork:',app.globalData.Network)
		  // this.setData({
			 //  noNetwork:false
		  // })
	  }
  }
})
