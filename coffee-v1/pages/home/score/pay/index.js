// pages/pay/index.js
import Toast from './../../../../vant-weapp/dist/toast/toast.js';

import { CouponsModel } from './../../../../api/coupons.js'
import Dialog from './../../../../vant-weapp/dist/dialog/dialog';

let couponsModel = new CouponsModel();


import { ShopModel } from './../../../../api/shop.js'

let shopmodel = new ShopModel();


import { IntOrderModel } from './../../../../api/IntOrder.js'

let ordermodel = new IntOrderModel();


let app=getApp();


import {
  AddressModel
} from './../../../../api/address.js'

let addressModel = new AddressModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    user_id: 1,
    showAddress: false,  //显示/隐藏地址弹出层
    showTicket: false,   //显示/隐藏优惠券弹出层
    showTax: false,       //显示/隐藏发票弹出层
    taxList: ['不开具发票','开具发票'], // 选择是否开具发票
    taxResult: '不开具发票',  //是否开具发票的默认选择结果
    invList: ['个人', '单位'],  // 发票抬头
    invResult:'个人',   //发票抬头默认结果
    phone:'',   // 收票人手机
    email:'',   // 收票人邮箱
    info:['明细'],   //发票明细
    taxer:'', //单位名称
    taxNum:'',  // 纳税人识别号
    active: 0,  // 新增收货地址弹出层默认选项卡
    addressRadio: 99999999,  //送货上门默认选择结果(用户选择之后则为选择结果)
    addressRadioList: [     // 送货上门地址
    ],  
    selfRadio:99999999,     // 门店自取默认选择结果 (用户选择之后则为选择结果)
    selfRadioList: [  // 门店自取地址
    ], 
    totalPrice:0,//总价
    ticketList: [     // 优惠券列表
    ],
    ticketRadio:undefined,  //优惠券默认结果
    coun:{
      isShow:false
    },//选择的优惠卷
    goods:[],
    iscoun:false,//是否使用优惠卷
    temp:{
      unit:'',//单位
      tax:'',//纳税号
      phone:'',//手机号码
      email:'',
    },
    goodsinfo:{},
    isadd:0,//选择收货地址
    shop_id:0,//选择的店铺
    address_id:0,//选择的地址
    coupons_id:0,//选择的优惠卷
    totalPrice:'',//总价
  },

  onLoad(e){
  
    var that=this;
    var score = wx.getStorageSync('score')
   
    addressModel.GetNewsByItems(app.globalData.user_id,res=>{
      that.setData({
        goodsinfo: score,
        addressRadioList:res.data
      })
    })

    var loca = wx.getStorageSync('loca')
    shopmodel.GetShopByList(loca, res => {
      that.setData({
        selfRadioList: res.data
      })
    })
   
   
  },
  // 显示隐藏优惠券弹出层
 
  // 显示/隐藏发票弹出层
  
  // 显示/隐藏地址弹出层
  onToggleAddress () {
    this.setData({
      showAddress: !this.data.showAddress
    })
  },
  
  // 选择送货上门地址
  onChoiseAddress(event) {
    console.log(event.detail)

    var that=this;
    var index=10;
    var data = that.data.addressRadioList;
    for (let i = 0; i < data.length;i++){
      if (data[i].id === parseInt(event.detail)){
        index=i;
        break;
      }
    }
    console.log(data[index])
    this.setData({
      addressRadio: index,
      showAddress: !this.data.showAddress,
      selfRadio:'',
      address_id: event.detail,
      isadd:1,
    });
  },
  // 门店自取
  onSelfChange(event) {
    this.setData({
      showAddress: !this.data.showAddress,
      selfRadio: event.detail,
      addressRadio:'',
      isadd: 2,
    });
  },
  onSelfClick(event) {
    const { name, index } = event.currentTarget.dataset;
    this.setData({
      showAddress: !this.data.showAddress,
      selfRadio: index+1,
      addressRadio: '',
      shop_id:name,
      isadd: 2,
    });
  },
  /**
   * 支付
   */
  onPay(){
    var that=this;
    if(that.data.isadd===0){
      Toast('请先选择收货方式');
      return ;
    }
    var temp={
      goods: that.data.goodsinfo,//当前购买商品
      order:{},//订单基本信息
    }
    if (that.data.isadd === 1) {
      temp.order.isadd = 1
      temp.order.address_id = that.data.address_id
    }
    if (that.data.isadd === 2) {
      temp.order.isadd = 2
      temp.order.shop_id = that.data.shop_id
    }
    temp.order.user_id=app.globalData.user_id,
    temp.goods_id=that.data.goodsinfo.id
    temp.goods_id = that.data.goodsinfo.id
    temp.order.shop_goods_id=that.data.goodsinfo.shop_id
    ordermodel.PostOrderByData(temp,res=>{
      wx.redirectTo({
        url: '/pages/home/score/exchange/index',
      })
    })
  },
  

})