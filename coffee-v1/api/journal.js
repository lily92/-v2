import { HTTP } from '../utils/http.js'
class ArticleModel extends HTTP {
  constructor() {
    super()
  }

  //提交订单
  GetDataByArticle(data, res) {
    var params = {
      url: 'Article/GetDataByArticle',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

/**
 * 文章评价
 */
  PostDataByEav(data, res) {
    var params = {
      url: 'Article/PostDataByEav',//接口路径
      method: 'post', //请求方式
      success: res,
      data
    }
    this.request(params)
  }

  


  //查看文章详细
  GetDataByDetailed(temp, res) {
    var params = {
      url: 'Article/GetDataByDetailed',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }

  //获取文章列表
  GetIdByEav(id, res) {
    var params = {
      url: 'Article/GetIdByEav',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { id }
    }
    this.request(params)
  }


  //评论点赞
  GetEavIdByLike(id, res) {
    var params = {
      url: 'Article/GetEavIdByLike',//接口路径
      method: 'get', //请求方式
      success: res,
      data: { id }
    }
    this.request(params)
  }
/**
 * 文章点赞
 */
  GetArticleIdByLike(temp, res) {
    var params = {
      url: 'Article/GetArticleIdByLike',//接口路径
      method: 'get', //请求方式
      success: res,
      data: temp
    }
    this.request(params)
  }

  
  


  


}
export { ArticleModel }