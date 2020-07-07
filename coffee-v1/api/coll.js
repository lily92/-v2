import { HTTP } from '../utils/http.js'
class CollModel extends HTTP {
  constructor() {
    super()
  }

  
  PostCollection(data, res) {
    var params = {
      url: 'PostCollection',//接口路径
      method: 'post', //请求方式
      data,
      success: res,
    }
    this.request(params)
  }


  GetCollGoods(data, res) {
    var params = {
      url: 'Coll/GetCollGoods',//接口路径
      method: 'post', //请求方式
      data,
      success: res,
    }
    this.request(params)
  }










}
export { CollModel }