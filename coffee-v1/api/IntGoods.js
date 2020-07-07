import { HTTP } from '../utils/http.js'
class IntGoodsModel extends HTTP {
  constructor() {
    super()
  }
  //获取基本
  GetIntegralByGoods(data, res) {
    var params = {
      url: 'IntGoods/GetIntegralByGoods',//接口路径
      method: 'post', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  //首页轮播图
  GetShopGoodsByList(shop_id, res) {
    var params = {
      url: 'shop/GetShopGoodsByList',//接口路径
      method: 'get', //请求方式
      data: { shop_id },
      success: res
    }
    this.request(params)
  }

  GetIdGoodsByInfo(id, res) {
    var params = {
      url: 'shop/GetIdGoodsByInfo',//接口路径
      method: 'get', //请求方式
      data: { id },
      success: res
    }
    this.request(params)
  }





}
export { IntGoodsModel }