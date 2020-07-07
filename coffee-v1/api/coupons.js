import {
  HTTP
} from '../utils/http.js'
class CouponsModel extends HTTP {
  constructor() {
    super()
  }
  //提交优惠卷
  PostUserCoupon(data, res) {
    var params = {
      url: 'coupons/PostUserCoupon', //接口路径
      method: 'post', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  //获取用户优惠卷
  GetUserByCoupons(data, res) {
    var params = {
      url: 'coupons/GetUserByCoupons', //接口路径
      method: 'get', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  //获取用户优惠卷
  GetCounpn(user_id, res) {
    var params = {
      url: 'coupons/GetCounpn', //接口路径
      method: 'get', //请求方式
      data: {
        user_id
      },
      success: res
    }
    this.request(params)
  }





}


export {
  CouponsModel
}