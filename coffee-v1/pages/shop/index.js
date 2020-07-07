// pages/goods/goods.js
import Toast from '../../vant-weapp/dist/toast/toast';

import {
  ShopModel
} from '../../api/shop.js'

let shopmodel = new ShopModel();

import {
  CommonModel
} from '../../api/common.js'

let commonModel = new CommonModel();
let app=getApp();
Page({
  data: {
    goods: [],
    myList: [],
    totalCount: 0,

    imgUrls: [
    
    ],
    shop_id:0,
    shopinfo:{},
    shop_logo: './../../../static/images/shop-logo-1.png',
    shop_name: '极客清晖园星巴克店',
    shop_distance: '2.4',
    sukindex: 0, //所选商品
    goods_index: 0, //所选分类
    cheindex: 0, //所选suk
    suk_id: 2,
    suk_price: undefined, //所选suk价格
    count: 0,
    suk_name: '',
    goodsinfo: {}, //选择规格商品
    c: false,
    toView: '0',
    scrollTop: 100,
    foodCounts: 0,
    totalPrice: 0, // 总价格
    totalCount: 0, // 总商品数
    carArray: [],
    minPrice: 20, //起送價格
    payDesc: '',
    collectionText:'收藏店铺',
    deliveryPrice: 4, //配送費
    fold: true,
    selectFoods: [{
      price: 20,
      count: 2
    }],
    cartShow: 'none',
    status: 0,
    action: 0,
    scene:0,
  },


  collection(){
    var that=this;
    let temp={
      user_id: app.globalData.user_id,
      shop_id: this.data.shop_id,
      type:1
    }
    commonModel.PostCollection(temp,res=>{
      if(res.code==200){
        that.setData({
          collectionText:'取消收藏',
        })
      }else{
        that.setData({
          collectionText: '收藏店铺',
        })
      }
    })
    console.log(temp)
  },

  selectMenu: function(e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString(),
      action: index
    })
    console.log(this.data.toView);
  },
  //移除商品
  decreaseCart: function(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var cheindex = this.data.cheindex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    var cou = this.data.goods[parentIndex].foods[index].suk[cheindex].Count;
    if (isNaN(cou)) {
      this.data.goods[parentIndex].foods[index].suk[cheindex].Count = 0;
    }
    this.data.goods[parentIndex].foods[index].suk[cheindex].Count--;
    var mark = 'a' + this.data.goods[parentIndex].foods[index].id + 'b' + this.data.goods[parentIndex].foods[index].suk[cheindex].id
    var suk_id = this.data.suk_id
    var suk_name = this.data.suk_name
    var price = parseFloat(this.data.goods[parentIndex].foods[index].suk[cheindex].price);
    var num = this.data.goods[parentIndex].foods[index].suk[cheindex].Count;
    var images_url = this.data.goods[parentIndex].foods[index].suk[cheindex].price
    var goods_id = this.data.goods[parentIndex].foods[index].id
    var integral = this.data.goods[parentIndex].foods[index].integral
    if (isNaN(num)) {
      num = 1;
    }

    if (isNaN(price)) {
      price = 1;
    }
    var name = this.data.goods[parentIndex].foods[index].name;
    var shop_id=this.data.shopinfo.id
    var obj = {
      price: price,
      num: num,
      name: name,
      goods_id: goods_id,
      suk_id,
      suk_name,
      shop_id,
      images_url: images_url,
      integral: integral,
      mark: mark
    };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj)
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice();
    let goodsinfo = this.data.goodsinfo
    goodsinfo.Count = num
    this.setData({

      goodsinfo,
    })
    //关闭弹起
    var count1 = 0
    for (let i = 0; i < carArray1.length; i++) {
      if (carArray1[i].num == 0) {
        count1++;
        carArray1.splice(i, 1) //当等于0时移除数据
      }
    }
    if (count1 == carArray1.length) {
      if (num == 0) {
        this.setData({
          cartShow: 'none'
        })
      }
    }
  },
  decreaseShopCart: function(e) {
    this.decreaseCart(e);
  },
  addSuk(e) {
    let {
      itemIndex,
      parentindex,
      index
    } = e.currentTarget.dataset
    let goodsinfo = this.data.goods[parentindex].foods[itemIndex]

    if (goodsinfo.suk == null) {
      console.log('商品没有suk')
      return;
    }

    let suk_id = goodsinfo.suk[0].id
    let suk_name = goodsinfo.suk[0].name
    this.setData({
      tarnShow: true,
      goodsinfo,
      suk_price: goodsinfo.suk[0].price,
      goods_index: itemIndex,
      sukindex: parentindex,
      cheindex: 0,
      suk_id,
      suk_name
    })
  },
  onClose() {
    this.setData({
      tarnShow: false,
    })
  },
  handelsuk(e) {
    var that = this;
    var {
      id,
      name,
      index
    } = e.currentTarget.dataset
    var goods_index = this.data.goods_index
    var sukindex = this.data.sukindex
    var cou = this.data.goods[sukindex].foods[goods_index].suk[index].Count;

    var price = this.data.goods[sukindex].foods[goods_index].suk[index].price;
    if (isNaN(cou)) {
      this.data.goods[sukindex].foods[goods_index].suk[index].Count = 0;
    }
    let goodsinfo = that.data.goodsinfo
    goodsinfo.images_url = this.data.goods[sukindex].foods[goods_index].suk[index].images_url
    goodsinfo.Count = cou;
    that.setData({
      suk_id: id,
      suk_name: name,
      cheindex: index,
      suk_price: price,
      goodsinfo,
    })

  },
  add(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var cheindex = this.data.cheindex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    var cou = this.data.goods[parentIndex].foods[index].suk[cheindex].Count;
    var goodscount = this.data.goods[parentIndex].foods[index].Count
    if (isNaN(cou)) {
      this.data.goods[parentIndex].foods[index].suk[cheindex].Count = 0;
    }
    if (isNaN(goodscount)) {
      this.data.goods[parentIndex].foods[index].Count = 0;
    }
    this.data.goods[parentIndex].foods[index].Count++
      this.data.goods[parentIndex].foods[index].suk[cheindex].Count++;
    var mark = 'a' + this.data.goods[parentIndex].foods[index].id + 'b' + this.data.goods[parentIndex].foods[index].suk[cheindex].id
    var suk_id = this.data.suk_id
    var suk_name = this.data.suk_name
    var price = parseFloat(this.data.goods[parentIndex].foods[index].suk[cheindex].price);
    var images_url = this.data.goods[parentIndex].foods[index].suk[cheindex].images_url

    var num = this.data.goods[parentIndex].foods[index].suk[cheindex].Count;
    var goods_id = this.data.goods[parentIndex].foods[index].id
    var integral = this.data.goods[parentIndex].foods[index].integral
    if (isNaN(num)) {
      num = 1;
    }

    if (isNaN(price)) {
      price = 1;
    }
    var name = this.data.goods[parentIndex].foods[index].name;
    var obj = {
      price: price,
      num: num,
      name: name,
      goods_id: goods_id,
      suk_id,
      suk_name,
      images_url: images_url,
      integral: integral
    };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj)
    this.setData({
      // carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice();
    let goodsinfo = this.data.goodsinfo
    goodsinfo.Count = num
    this.setData({

      goodsinfo,
    })
  },
  //添加到购物车
  addCart(e) {

    var index = e.currentTarget.dataset.itemIndex;
    var cheindex = this.data.cheindex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    var cou = this.data.goods[parentIndex].foods[index].suk[cheindex].Count;
    var goodscount = this.data.goods[parentIndex].foods[index].Count
    if (isNaN(cou)) {
      Toast('最少添加一个商品进入购物车');
      return
      this.data.goods[parentIndex].foods[index].suk[cheindex].Count = 0;
    }
    if (cou = 0) {
      Toast('最少添加一个商品进入购物车');
      return
    }
    if (isNaN(goodscount)) {
      this.data.goods[parentIndex].foods[index].Count = 0;
    }
    // this.data.goods[parentIndex].foods[index].suk[cheindex].Count++;
    var mark = 'a' + this.data.goods[parentIndex].foods[index].id + 'b' + this.data.goods[parentIndex].foods[index].suk[cheindex].id + 'c' + this.data.goods[parentIndex].foods[index].shop_id
    var suk_id = this.data.suk_id
    var suk_name = this.data.suk_name
    var price = parseFloat(this.data.goods[parentIndex].foods[index].suk[cheindex].price);
    var images_url = this.data.goods[parentIndex].foods[index].suk[cheindex].images_url

    var num = this.data.goods[parentIndex].foods[index].suk[cheindex].Count;
    var goods_id = this.data.goods[parentIndex].foods[index].id

    var integral = this.data.goods[parentIndex].foods[index].integral
    if (isNaN(num)) {
      num = 1;
    }
    Toast('已添加购物车');
    this.onClose();
    if (isNaN(price)) {
      price = 1;
    }
    var name = this.data.goods[parentIndex].foods[index].name;
    var shop_id = this.data.shopinfo.id

    /**
     * 商品信息
     */
    var obj = {
      price: price,
      num: num,
      name: name,
      goods_id: goods_id,
      suk_id,
      suk_name,
      shop_id,
      images_url: images_url,
      mark: mark,
      integral: integral
    };

    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    
    carArray1.push(obj)
    wx.setStorageSync('cart', carArray1)
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
    })
    this.calTotalPrice();
    let goodsinfo = this.data.goodsinfo
    goodsinfo.Count = num
    this.setData({
      goodsinfo,
    })
  },
  addShopCart: function(e) {
    this.addCart(e);

  },
  //计算总价
  calTotalPrice: function() {


    var carArray = this.data.carArray;

    if (carArray.length < 1) {
      carArray = wx.getStorageSync('cart')
    }
    if (carArray.length < 1) {
      carArray = []
    }
    var totalPrice = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalCount += carArray[i].num
    }
    this.setData({
      totalPrice: totalPrice,
      totalCount: totalCount,
      carArray

      //payDesc: this.payDesc()
    });
  },
  //差几元起送

  //結算
  pay() {
    // window.alert('支付' + this.totalPrice + '元');
    //确认支付逻辑
    let cart = wx.getStorageSync('cart');
    if (cart.length < 1) {
      Toast('请先选择商品');
      return;
    }
    var resultType = "success";
    wx.redirectTo({
      url: '/pages/shop/pay/index?type=cart'
    })
  },
  /**
   * 去购物车
   */
  ToCart() {
    wx.navigateTo({
      url: '/pages/cart/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //彈起購物車
  toggleList: function() {
    if (!this.data.totalCount) {
      return;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold
    //console.log(this.data.fold);
    this.cartShow(fold)
  },
  cartShow: function(fold) {
    console.log(fold);
    if (fold == false) {
      this.setData({
        cartShow: 'block',
      })
    } else {
      this.setData({
        cartShow: 'none',
      })
    }
    console.log(this.data.cartShow);
  },
  tabChange: function(e) {
    var showtype = e.target.dataset.type;
    this.setData({
      status: showtype,
    });
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    // var id = options.id
    var id = 0
    var scene = decodeURIComponent(options.scene)
    if (options.scene!=undefined) {
      app.globalData.shop_id = scene
    }else{
      scene=0;
    }
 
    shopmodel.GetShopGoodsByList(id, res => {
      console.log(res)
      if(res.length<1){
        wx.showToast({
          title: '当前店铺没有商品',
          icon:'none'
        })
      }

      var goods = [];
      for(let i=0;i<res.length;i++){
        console.log(res[i])
        if (res[i].foods.length>0){
            goods.push(res[i])
        }
      }
      console.log('goods')
      console.log(goods)
      that.setData({
        goods,
        shop_id:id,
        scene,
      })
    })
    var temb={
      shop_id:id,
      user_id: app.globalData.user_id,
      type:1,
    }
    commonModel.GetBannerByList(temb, res => {
      if(res.goods===0){
        wx.showToast({
          title: '该店铺尚未上架商品',
          icon:'none'
        })
      }
      that.setData({
        imgUrls: res.banner,
        shopinfo:res.shop,
        shop_name:res.shop.name,
        logo: res.shop.logo,
        collectionText:res.text
      })
      
    })

  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    this.calTotalPrice();

    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  toGoods(e) {
    console.log(e)
    wx.navigateTo({

      url: '/pages/goods/index?id=' + e.currentTarget.dataset.id
    })
  }
})