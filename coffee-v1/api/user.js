import { HTTP } from '../utils/http.js'
class UserModel extends HTTP {
  constructor() {
    super()
  }
  //注册用户
  postRegistered(data,res) {
    var params = {
      url: 'user/postUserByRegistered',//接口路径
      method: 'post', //请求方式
      data:data,
      success: res
    }
    this.request(params)
  }

  PostDataByDist(data, res) {
    var params = {
      url: 'user/PostDataByDist',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }

  PostUserByData(data, res) {
    var params = {
      url: 'user/PostUserByData',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }
  
  //房源列表数据(根据所属城市id获取)
  GetUserByOenid(temp, res) {
    var params = {
      url: 'GetUserByOenid',//接口路径
      method: 'get', //请求方式
      data: temp,
      success: res
    }
    this.request(params)
  }

//实名认证
  PostDataByReal(data, res) {
    var params = {
      url: 'realname/PostDataByReal',//接口路径
      method: 'post', //请求方式
      data: data,
      success: res
    }
    this.request(params)
  }


  GetUserByInfo(id, res) {
    var params = {
      url: 'user/GetUserByInfo',//接口路径
      method: 'get', //请求方式
      data: {id},
      success: res
    }
    this.request(params)
  }
}
export { UserModel }