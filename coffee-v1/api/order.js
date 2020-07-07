import { HTTP } from '../utils/http.js'

class OrderModel extends HTTP {
  constructor() {
    super()
  }
  //获取地址列表
  GetNewsByItems(user_id, res) {
    var params = {
      url: 'address/getAddressByItems',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { user_id }

    }
    this.request(params)
  }

  //提交订单
  PostOrderByData(data, res) {
    var params = {
      url: 'order/PostOrderByData',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  //提交退款
  GetIdByRefund(data, res) {
    var params = {
      url: 'order/GetIdByRefund',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }


  PostDataByEva(data, res) {
    var params = {
      url: 'order/PostDataByEva',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  

  //获取订单
  GetUserByOrder(data, res) {
    var params = {
      url: 'order/GetUserByOrder',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  //获取订单详情
  GetOrderIdByFind(id, res) {
    var params = {
      url: 'order/GetOrderIdByFind',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { id }
    }
    this.request(params)
  }
  /**
   * 删除订单
   */
  GetIdByDelete(id, res) {
    var params = {
      url: 'order/GetIdByDelete',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { id }
    }
    this.request(params)
  }

  

  //取消订单
  GetIdByCancel(temp, res) {
    var params = {
      url: 'order/GetIdByCancel',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }


  



}
export { OrderModel }