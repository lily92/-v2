// pages/home/collect/goods/index.js

import Dialog from './../../../../vant-weapp/dist/dialog/dialog';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    goshop(e){
      wx.navigateTo({
        url: '/pages/shop/index?id=' + e.currentTarget.dataset.id,
      })
    },
    cancelLike(e) {
      let that = this
      let id = e.currentTarget.dataset.id
      console.log('item_id' + id)
      Dialog.confirm({
          message: '是否取消关注',
          asyncClose: true
        })
        .then(() => {
          this.triggerEvent('goodsEvent', {
            item_id: id,
            show: true
          })
          
          setTimeout(() => {
            Dialog.close();
          }, 1000);
          
        })
        .catch(() => {
          Dialog.close();
        });
    }
  }
})