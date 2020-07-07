// pages/home/distributor/order/index.js
import {
  DistModel
} from './../../../../api/dist.js'

let distModel = new DistModel();
let app=getApp();

Page({

  /**
   * 页面的初始数据
   * @status: 1已完成，2未结算，3已结算
   */
  data: {
    active: 0,
    detailList:[    ]
  },
  onChangeTabs(event) {
    console.log(event)
    var temp = {
      user_id: app.globalData.user_id,
      status: event.detail.index
    }
    if (temp.status==1){
      temp.status=2
    }
    else if(temp.status===2){
      temp.status = 1
    }
    distModel.GetUserByDist(temp, res => {
      this.setData({
        detailList: res
      })
    })
  },
  onShow(){
    var temp={
      user_id: app.globalData.user_id
    }
    distModel.GetUserByDist(temp,res=>{
      this.setData({
        detailList:res
      })
    })
  }
})