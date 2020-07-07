import { HTTP } from '../utils/http.js'

class IntOrderModel extends HTTP {
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
      url: 'IntOrder/PostOrderByData',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  PostDataByEva(data, res) {
    var params = {
      url: 'IntOrder/PostDataByEva',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }



  //获取用户订单列表
  GetUserByOrder(data, res) {
    var params = {
      url: 'IntOrder/GetUserByOrder',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  //获取订单详情
  GetOrderIdByFind(id, res) {
    var params = {
      url: 'IntOrder/GetOrderIdByFind',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { id }
    }
    this.request(params)
  }

  //取消订单
  GetIdByCancel(temp, res) {
    var params = {
      url: 'IntOrder/GetIdByCancel',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }






}
export { IntOrderModel }