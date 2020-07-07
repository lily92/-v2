const App = getApp();
import Util from '../../utils/util.js';

// 工具类
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品列表
    goods_list: [],

    // 当前动作
    action: 'complete',

    // 选择的商品
    checkedData: [],

    // 是否全选
    checkedAll: false,

    // 商品总价格
    cartTotalPrice: '0.00'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let _this = this;
    // 获取购物车列表
    _this.getCartList();
  },

  /**
   * 获取购物车列表
   */
  getCartList() {
    let _this = this;
    let data = wx.getStorageSync('cart')
    _this._initGoodsChecked(data)
    // App._get('cart/lists', {}, result => {
    //   _this._initGoodsChecked(result.data);
    // });
  },

  /**
   * 初始化商品选中状态
   */
  _initGoodsChecked(data) {
    let _this = this;
    let checkedData = _this.getCheckedData();
    // 将商品设置选中
    data.forEach(item => {
      item.checked = Util.inArray(`${item.goods_id}_${item.suk_id}`, checkedData);
    });
    console.log(data)
    _this.setData({
      goods_list: data,
      order_total_price: data.order_total_price,
      action: 'complete',
      checkedAll: checkedData.length == data.length,
    });
    // 更新购物车已选商品总价格
    _this.updateTotalPrice();
  },

  /**
   * 选择框选中
   */
  onChecked(e) {
    let _this = this,
      index = e.currentTarget.dataset.index,
      goods = _this.data.goods_list[index],
      checked = !goods.checked;
    // 选中状态
    _this.data.goods_list[index].checked = checked
    _this.setData({
      goods_list: _this.data.goods_list
    })
    wx.setStorageSync('cart', _this.data.goods_list )
    // 更新选中记录
    _this.onUpdateChecked();
    // 更新购物车已选商品总价格
    _this.updateTotalPrice();
    // 更新全选状态
    _this.setData({
      checkedAll: _this.getCheckedData().length == _this.data.goods_list.length
    });
  },

  /**
   * 获取选中的商品
   */
  getCheckedData() {
    let checkedData = wx.getStorageSync('checkedData');
    return checkedData ? checkedData : [];
  },

  /**
   * 选择框全选
   */
  onCheckedAll(e) {
    let _this = this,
      goodsList = _this.data.goods_list;
    // 更新商品选中记录
    goodsList.forEach(item => {
      item.checked = !_this.data.checkedAll;
    });
    _this.setData({
      goods_list: goodsList,
      checkedAll: !_this.data.checkedAll
    });
    // 更新购物车已选商品总价格
    _this.updateTotalPrice();
    // 更新选中记录
    _this.onUpdateChecked();
  },

  /**
   * 更新商品选中记录
   */
  onUpdateChecked() {
    let _this = this,
      checkedData = [];
    _this.data.goods_list.forEach(item => {
      if (item.checked == true) {
        checkedData.push(`${item.goods_id}_${item.suk_id}`);
      }
    });
    _this.setData({
      goods_list: _this.data.goods_list
    })
    wx.setStorageSync('cart', _this.data.goods_list)
    wx.setStorageSync('checkedData', checkedData);
  },

  /**
   * 切换编辑/完成
   */
  switchAction(e) {
    let _this = this;
    _this.setData({
      action: e.currentTarget.dataset.action
    });
  },

  /**
   * 删除商品
   */
  onDelete() {
    let _this = this,
      cartIds = _this.getCheckedIds();
    if (!cartIds.length) {
      App.showError('您还没有选择商品');
      return false;
    }
    console.log(cartIds);
    wx.showModal({
      title: "提示",
      content: "您确定要移除选择的商品吗?",
      success(e) {
        _this.onDeleteEvent(cartIds);

      }
    });
  },

  /**
   * 商品删除事件
   */
  onDeleteEvent(cartIds) {
    let _this = this;
    cartIds.forEach((cartIndex) => {
      _this.data.goods_list.forEach((item, goodsIndex) => {
        console.log(cartIndex)
        console.log(`${item.goods_id}_${item.suk_id}`)
        if (cartIndex == `${item.goods_id}_${item.suk_id}`) {
          _this.data.goods_list.splice(goodsIndex, 1);
        }
        console.log(_this.data.goods_list)
      });
    });
    // 更新选中记录
    _this.onUpdateChecked();
    return true;
  },

  /**
   * 获取已选中的商品
   */
  getCheckedIds() {
    let _this = this;
    let arrIds = [];
    _this.data.goods_list.forEach(item => {
      if (item.checked === true) {
        arrIds.push(`${item.goods_id}_${item.suk_id}`);
      }
    });
    return arrIds;
  },

  /**
   * 更新购物车已选商品总价格
   */
  updateTotalPrice() {
    let _this = this;
    let cartTotalPrice = 0;
    _this.data.goods_list.forEach(item => {
      if (item.checked === true) {
        cartTotalPrice = _this.mathadd(cartTotalPrice, item.price*item.num);
      }
    });
    _this.setData({
      cartTotalPrice: Number(cartTotalPrice).toFixed(2)
    });
  },

  /**
   * 递增指定的商品数量
   */
  onAddCount(e) {
    let _this = this,
      index = e.currentTarget.dataset.index,
      goodsSkuId = e.currentTarget.dataset.skuId;
    _this.data.goods_list[index].num++;
    _this.setData({
      goods_list: _this.data.goods_list
    })
    wx.setStorageSync('cart', _this.data.goods_list)
    _this.updateTotalPrice();
  },

  /**
   * 递减指定的商品数量
   */
  onSubCount(e) {
    let _this = this,
      index = e.currentTarget.dataset.index,
      goodsSkuId = e.currentTarget.dataset.skuId;
    _this.data.goods_list[index].num--;
     
    _this.setData({
      goods_list: _this.data.goods_list
    })
    _this.updateTotalPrice();
    wx.setStorageSync('cart', _this.data.goods_list)
  },

  /**
   * 购物车结算
   */
  submit() {
    let _this = this,
      cartIds = _this.getCheckedIds();
    if (!cartIds.length) {
      App.showError('您还没有选择商品');
      return false;
    }
    wx.redirectTo({
      url: '/pages/shop/pay/index?type=cart'
    })
  },

  /**
   * 加法
   */
  mathadd(arg1, arg2) {
    return (Number(arg1) + Number(arg2)).toFixed(2);
  },

  /**
   * 减法
   */
  mathsub(arg1, arg2) {
    return (Number(arg1) - Number(arg2)).toFixed(2);
  },

  /**
   * 去购物
   */
  goShopping() {
    wx.switchTab({
      url: '/pages/tarBar/shop/index/index',
    });
  },

})