// pages/reads/list/index.js
Component({
  options:{
    styleIsolation: 'apply-shared'
  },

  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type:Array
    },
	types:{
		 type:String
	}
  },

  /**
   * 组件的初始数据
   */
  data: {
	  isLike:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
	  // showAction(event){
		//      console.log(event)
		// 	 this.triggerEvent("showAction", event.currentTarget.dataset.id)
	  // },
    goDetail(event) {
      console.log(event)
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: './list-detail/index?id='+id,
      })
    },
    onClose(event) {
      const { position, instance } = event.detail;
      switch (position) {
        case 'right':
          // Dialog.confirm({
          //   message: '确定删除吗？',
          // }).then(() => {
          //   instance.close();
          // });
        console.log('确定删除吗')
          break;
      }
    },
	like(event){
		let id = event.currentTarget.dataset.id
		console.log('根据id请求接口点赞',id)
		this.setData({
			'isLike':true
		})
		
	}
  }
})
