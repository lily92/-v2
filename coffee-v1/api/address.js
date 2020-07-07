import { HTTP } from '../utils/http.js'

class AddressModel extends HTTP {
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

  //添加地址
  postAddress(data, res) {
    var params = {
      url: 'address/postAddress',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  //修改默认地址
  getDefaultAddress(data, res) {
    var params = {
      url: 'address/getDefaultAddress',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  //获取用户地址数量
  getUserAddressCount(user_id, res) {
    var params = {
      url: 'address/getUserAddressCount',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { user_id }
    }
    this.request(params)
  }

  //删除地址
  GetDataByDelete(id, res) {
    var params = {
      url: 'address/GetDataByDelete',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { id }
    }
    this.request(params)
  }

  


}
export { AddressModel }