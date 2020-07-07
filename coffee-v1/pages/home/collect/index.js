// pages/home/collect/index.js

import Toast from './../../../vant-weapp/dist/toast/toast';
import { CollModel} from './../../../api/coll.js'
 let collModel=new CollModel();
 let app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: 0,
    tabItem: ['店铺', '专题'],
    tabData: [
      
    ],
    topic: [
      
    ],
    goods: [
    ]
  },
  onShow(){
    var that=this;
    var user=wx.getStorageSync('userinfo');
    var loc=wx.getStorageSync('loca');

    var temp={
      user_id:user.id,
      latitude: loc.latitude,
      longitude: loc.longitude
    }
    collModel.GetCollGoods(temp,res=>{
      that.setData({
        goods:res.shop,
        topic: res.article
      })
    })
  },
  clickTab(e) {
    let that = this
    let tab = e.currentTarget.dataset.tab_index
    that.setData({
      isActive: tab
    })
  },
  // 切换收藏状态
  toggleLike(e) {
    let that = this
    let id = e.detail.item_id
    let isActive = that.data.isActive
    let goods = that.data.goods
    let topic = that.data.topic
    let newGoods = []
    let newTopic = []
    var user = wx.getStorageSync('userinfo');
    if (isActive === 0) {
      goods.map((item, idx) => {
        if (id !== item.id) {
          newGoods.push(item)
        }
      })
      
      that.setData({
        goods: newGoods
      })

      var temp = {
        shop_id: id,
        user_id: user.id,
        type: 1,
      }
      collModel.PostCollection(temp, res => {
        console.log(res)
      })
      setTimeout(() => {
        Toast('已取消关注');
      }, 1000)
     
    } else if (isActive === 1) {
      topic.map((item, idx) => {
        if (id !== item.id) {
          newTopic.push(item)
        }
      })
      that.setData({
        topic: newTopic
      })
      var temp = {
        article_id: id,
        user_id: user.id,
        type: 3,
      }
      collModel.PostCollection(temp, res => {
        console.log(res)
      })
    
      setTimeout(()=>{
        Toast('已取消关注');
      },1000)
      
    }
  }
})