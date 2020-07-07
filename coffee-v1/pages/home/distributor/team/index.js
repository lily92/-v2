// pages/home/distributor/team/index.js
import {
  DistModel
} from './../../../../api/dist.js'

let distModel = new DistModel();
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teamList:[
      {
        id:'1',
        member_avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        member:'我就是狗剩先生啊',   //团队成员名称
        join_time:'2019-06-15',   //注册时间
        extend:'90',     //推广人数
        consume:'999.00',  //消费金额
        order_amount:'2' //订单数
      },
      {
        id: '2',
        member_avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        member: 'chmee',   //团队成员名称
        join_time: '2019-06-15',   //注册时间
        extend: '10',     //推广人数
        consume: '2000.00',  //消费金额
        order_amount: '100' //订单数
      },
      {
        id: '3',
        member_avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        member: '小李先生',   //团队成员名称
        join_time: '2019-06-15',   //注册时间
        extend: '0',     //推广人数
        consume: '2000.00',  //消费金额
        order_amount: '2' //订单数
      },
      {
        id: '4',
        member_avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568441257&di=51141b3beb9703bba100f9cbb63439e4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2019-01-31%2F214531458.png',
        member: '我就是狗剩先生啊',   //团队成员名称
        join_time: '2019-06-15',   //注册时间
        extend: '200',     //推广人数
        consume: '200.00',  //消费金额
        order_amount: '99' //订单数
      }
    ]
  },
  onShow(){
    var temp={
      user_id: app.globalData.user_id

    }
    distModel.GetUserByTeam(temp,res=>{
        this.setData({
          teamList:res
        })
    })
  },
  clickToOrder () {
    wx.navigateTo({
      url: './../order/index',
    })
  }
})