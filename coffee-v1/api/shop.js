import { HTTP } from '../utils/http.js'
class ShopModel extends HTTP {
  constructor() {
    super()
  }
  //首页轮播图
  GetShopByList(data,res) {
    var params = {
      url: 'shop/GetShopByList',//接口路径
      method: 'post', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  

  GetShopGoodsByList(shop_id, res) {
    var params = {
      url: 'shop/GetShopGoodsByList',//接口路径
      method: 'get', //请求方式
      data: { shop_id },
      success: res
    }
    this.request(params)
  }

  //获取店铺所有的商品分类
  GetShopListGoodsByCategory(shop_id, res) {
    var params = {
      url: 'shop/GetShopListGoodsByCategory',//接口路径
      method: 'get', //请求方式
      data: { shop_id},
      success: res
    }
    this.request(params)
  }

  GetShopListGoodsByList(shop_id, res) {
    var params = {
      url: 'shop/GetShopListGoodsByList',//接口路径
      method: 'get', //请求方式
      data: { shop_id },
      success: res
    }
    this.request(params)
  }

  GetIdGoodsByInfo(data, res) {
    var params = {
      url: 'shop/GetIdGoodsByInfo',//接口路径
      method: 'get', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  
  
  

}
export { ShopModel }