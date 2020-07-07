// pages/shop/item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array
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
     goGoods(e){
       let { id } = e.currentTarget.dataset
        wx.navigateTo({
          url: '/pages/goods/index?id='+id,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
     }

  }
})
