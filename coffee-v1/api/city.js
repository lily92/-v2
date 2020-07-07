import { HTTP } from '../utils/http.js'
class CityModel extends HTTP {
  constructor() {
    super()
  }
  //获取省份
  getProvinces( res) {
    var params = {
      url: 'city/getProvinces',//接口路径
      method: 'get', //请求方式
      success: res
    }
    this.request(params)
  }
  //获取城市
  getCity(index, res) {
    var params = {
      url: 'city/getCity',//接口路径
      method: 'get', //请求方式
      data: { index },
      success: res
    }
    this.request(params)
  }

  //获取城市
  getArea(index, res) {
    var params = {
      url: 'city/getArea',//接口路径
      method: 'get', //请求方式
      data: { index },
      success: res
    }
    this.request(params)
  }





}
export { CityModel }