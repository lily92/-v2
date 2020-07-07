import { HTTP } from '../utils/http.js'
class DistModel extends HTTP {
  constructor() {
    super()
  }
  //获取积分列表
  GetUserDistLog(user_id, res) {
    var params = {
      url: 'dist/GetUserDistLog',//接口路径
      method: 'get', //请求方式
      data:{user_id},
      success: res
    }
    this.request(params)
  }

  PostUserByIntegral(data, res) {
    var params = {
      url: 'dist/PostUserByIntegral',//接口路径
      method: 'post', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  

//获取积分列表
  GetUserByDist(data, res) {
  var params = {
    url: 'dist/GetUserByDist',//接口路径
    method: 'get', //请求方式
    data,
    success: res
  }
  this.request(params)
}

  GetUserByTeam(data, res) {
    var params = {
      url: 'dist/GetUserByTeam',//接口路径
      method: 'get', //请求方式
      data,
      success: res
    }
    this.request(params)
  }

  GetUserByIntegral(data, res) {
    var params = {
      url: 'dist/GetUserByIntegral',//接口路径
      method: 'get', //请求方式
      data,
      success: res
    }
    this.request(params)
  }



  

}
export { DistModel }