// pages/list/index.js
import Toast from '../../vant-weapp/dist/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    curId: '1',
    menu: [{
        id: '1',
        name: '一日1餐',
        anchor: 'device',
        items: [{
            id: '1',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 2,
            goods_num: 0
          },
          {
            id: '2',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0

          },
          {
            id: '3',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '4',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '5',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          }
        ]
      },
      {
        id: '2',
        name: '一日2餐',
        anchor: 'devicee',
        items: [{
            id: '6',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '7',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '8',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '9',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '10',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          }
        ]
      },
      {
        id: '3',
        name: '一日3餐',
        anchor: 'deviced',
        items: [{
            id: '11',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '12',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '13',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          }
        ]
      },
      {
        id: '4',
        name: '一日4餐',
        anchor: 'devicec',
        items: [{
          id: '14',
          title: '会员臻享-特质板烧鸡腿堡',
          price: '17.50',
          old_price: '24.50',
          desc: "无与伦比的终极享受",
          is_choose: 1,
          goods_num: 0
        }, ]
      },
      {
        id: '5',
        name: '一日5餐',
        anchor: 'devices',
        items: [{
            id: '14',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '15',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
        ]
      },
      {
        id: '6',
        name: '一日6餐',
        anchor: 'd',
        items: [{
            id: '16',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '17',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
        ]
      },
      {
        id: '7',
        name: '一日7餐',
        anchor: 'de',
        items: [{
            id: '18',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '19',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
        ]
      },
      {
        id: '8',
        name: '一日8餐',
        anchor: 'dev',
        items: [{
          id: '20',
          title: '会员臻享-特质板烧鸡腿堡',
          price: '17.50',
          old_price: '24.50',
          desc: "无与伦比的终极享受",
          is_choose: 1,
          goods_num: 0
        }]
      },
      {
        id: '9',
        name: '一日9餐',
        anchor: 'devi',
        items: [{
            id: '21',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '22',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          }
        ]
      },
      {
        id: '10',
        name: '一日10餐',
        anchor: 'devic',
        items: [{
            id: '23',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '24',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '25',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          },
          {
            id: '26',
            title: '会员臻享-特质板烧鸡腿堡',
            price: '17.50',
            old_price: '24.50',
            desc: "无与伦比的终极享受",
            is_choose: 1,
            goods_num: 0
          }
        ]
      },
    ],
    cate: 'device', // 初始view的位置
    heightArr: [],
    containerH: 0,
    curStep: '', // 当前右侧栏目
    curTab: '', // 当前左侧导航
    showPlus: false,
    total: {
      count: 0,
      money: 0
    },
    cartList: [], //购物车列表
    showCart: false,
    getCartAgain: true // 点击购物车时，是否重新获取数据
  },

  onReady: function() {
    // 左右导航栏联动
    let query = wx.createSelectorQuery()
    let heightArr = [];
    let s = 0;
    // console.log(query)
    query.selectAll('.right-item').boundingClientRect(rect => {
      // console.log(rect)
      rect.forEach(item => {
        s += item.height
        heightArr.push(s)
      })
      this.setData({
        heightArr
      })
      query.select('list-right').boundingClientRect(rect => {
        // console.log(rect)
        this.setData({
          containerH: rect.height
        })
      })
    }).exec()
  },
  // 阻止滑动冒泡
  preventPop() {
    return;
  },
  // 点击左侧导航栏
  clickToMenu(e) {
    let id = e.currentTarget.dataset.id
    this.setData({
      curId: id,
      cate: e.currentTarget.dataset.anchor
    })
  },
  // 滑动右侧导航栏
  scroll(e) {
    // console.log(e)
    let that = this
    let scrollTop = e.detail.scrollTop
    let scrollArr = that.data.heightArr
    let containerH = that.data.containerH
    // console.log(scrollTop,scrollArr, containerH)
    if (scrollTop >= scrollArr[scrollArr.length - 1] - containerH) {
      return;
    } else {
      for (let i = 0; i < scrollArr.length; i++) {
        if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
          that.setData({
            curId: "1"
          })
        } else if (scrollTop >= scrollArr[i - 1] && scrollTop < scrollArr[i]) {
          let id = i + 1
          that.setData({
            curId: String(id)
          })
        }
      }
    }
  },
  // 点击右侧计数器  
  onChange(e) {
    console.log(typeof Number(e.detail))
    let num = String(e.detail)
    if (num = '0') {
      this.setData({
        showPlus: false
      })
    }
  },
  // 查看商品详情
  clickToDetail(e) {
    console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../detail/index?id=' + id,
    })
  },
  // 显示计数器
  toggleStepper(e) {
    console.log(e.currentTarget.dataset.idx, e.currentTarget.dataset.index)
    let idx = e.currentTarget.dataset.idx
    let index = e.currentTarget.dataset.index
    this.setData({
      curTab: Number(index),
      curStep: Number(idx),
    })
  },
  // 
  add(e) {
    let that = this
    let {
      menu_id, //左侧导航栏ID
      list_id, //右侧内容所属栏目ID
      type //点击的是“-” 还是 “+”
    } = e.currentTarget.dataset
    let cartList = that.data.cartList
    let total = that.data.total
    let menu = that.data.menu
    // 找到当前点击商品所在的栏目
    let addList = menu.find(v => {
      return v.id === menu_id
    })
    // 找到当前点击的商品
    let item = addList.items.find(v => {
      return v.id === list_id
    })
    if (type === 'add') {
      item.goods_num += 1
      total.count += 1
      total.money += Number(item.price)
    } else if (type === 'minus') {
      item.goods_num -= 1
      total.count -= 1
      total.money -= Number(item.price)
    }
    // 更新menu数据
    that.setData({
      menu,
      total,
      cartList
    })
  },
  // 查看当前购物车内容
  getCart() {
    let that = this
    let menu = that.data.menu
    let cartList = []
    menu.forEach((item, index) => {
      item.items.forEach((list, index) => {
        if (list.goods_num !== 0) {
          cartList.push(item.items[index])
        }
      })
    })
    that.setData({
      cartList
    })
    console.log(cartList)
  },
  // 点击结算
  clickToPay() {
    let that = this
    that.getCart()
    let cartList = that.data.cartList
    let total = that.data.total
    if (cartList.length === 0) {
      Toast('罗建建，你还没有选择商品呢～');
      return;
    }
    let list = {
      cartList,
      total
    }
    wx.setStorageSync('list', list)
    wx.navigateTo({
      url: '../pay/index'
    })
  },
  // 打开购物车
  toggleCart() {
    this.getCart()
    if (this.data.cartList.length === 0) {
      Toast('罗建建，你还没有选择商品呢～');
      return
    }
    this.setData({
      showCart: !this.data.showCart
    })
  },
  // 清空购物车
  clearCart() {
    let that = this
    let menu = that.data.menu
    let cartList = []
    menu.forEach((item, index) => {
      item.items.forEach((list, index) => {
        if (list.goods_num !== 0) {
          list.goods_num = 0
        }
      })
    })
    that.setData({
      menu,
      showCart: !that.data.showCart,
      total: {
        count: 0,
        money:0
      }
    })
    that.getCart()
  }
})