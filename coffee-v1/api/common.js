import { HTTP } from '../utils/http.js'
class CommonModel extends HTTP {
  constructor() {
    super()
  }

  //提交评论
  PostEvalByData(data, res) {
    var params = {
      url: 'upload',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }
//获取轮播图
  GetBannerByList(data, res) {
    var params = {
      url: 'GetBannerByList',//接口路径
      method: 'get', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  getPlat( res) {
    var params = {
      url: 'getPlat',//接口路径
      method: 'get', //请求方式
      success: res,
    }
    this.request(params)
  }

  cheDist(user_id,res) {
    var params = {
      url: 'cheDist',//接口路径
      method: 'get', //请求方式
      data: { user_id },
      success: res,
    }
    this.request(params)
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


  
  

  
  
  


}
export { CommonModel }