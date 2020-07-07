// pages/home/address/index.js
import Toast from './../../../vant-weapp/dist/toast/toast';
import Dialog from './../../../vant-weapp/dist/dialog/dialog';


const app = getApp();


import {
  AddressModel
} from '../../../api/address.js'

let addressModel = new AddressModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    defaultAddress: '1', //默认地址
    addrList: [{
        id: '1',
        nickname: '我就是狗剩啊',
        phone: '15226530478',
        addr: '广东省广州市白云区九龙花园5栋301',
        is_default: 1
      },
      {
        id: '2',
        nickname: '我就是狗剩啊',
        phone: '15226530478',
        addr: '广东省广州市白云区九龙花园5栋301',
        is_default: 2
      }
    ]
  },
  
  // 修改默认地址
  onChangeDefault(event) {
    var that=this;
    var id = event.currentTarget.dataset.id
    var temp={
      user_id: app.globalData.user_id,
      id
    }
    addressModel.getDefaultAddress(temp,res=>{
      that.onLoad();
    })
  },
  onLoad() {
    this.onShow();
  },
  onShow(){
    var that = this;
    addressModel.GetNewsByItems(app.globalData.user_id, res => {
      that.setData({
        addrList: res.data
      })
      console.log(res + '哈哈哈')
    })
    
  },
  // 编辑
  onEdit(e) {
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/component/edit/index?addrData=' + JSON.stringify(this.data.addrList[id - 1])
    })
  },
  // 删除
  onDel(e) {
    var that=this;
    let id = e.currentTarget.dataset.id
    Dialog.confirm({
      title: '确定要删除吗？',
      message: '此操作会删除此条地址--' + id
    }).then(() => {
      addressModel.GetDataByDelete(id,res=>{
        that.onLoad();
      })
      // on confirm
    }).catch(() => {
      // on cancel
    });
  },
  addMoreAddress() {
    wx.navigateTo({
      url: '/pages/component/new/index',
    })
  }
})