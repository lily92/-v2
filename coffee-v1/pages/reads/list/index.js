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
	imgUrls:{
		type:Array
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
    goDetail(event) {
      console.log(event)
      let id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: './list-detail/index?id='+id,
      })
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
