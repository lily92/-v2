import { HTTP } from '../utils/http.js'
class PayModel extends HTTP {
  constructor() {
    super()
  }
  //注册用户
  toPay(data, res) {
    var params = {
      url: 'toPay',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }

}
export { PayModel }