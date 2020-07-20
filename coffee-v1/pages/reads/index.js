// pages/reads/index.js

import { ArticleModel } from '../../api/article.js'

let articleModel = new ArticleModel();


Page({
  /**
   * 页面的初始数据
   */
  data: {
	total:10,
    listQuery:{
      limit:10,
      page:1
    },
	isloadding:false,
    imgUrls: [
      'http://jikelianmeng.tanghan.cn/static/images/blog-img.jpg',
      'http://jikelianmeng.tanghan.cn/static/images/blog-img.jpg',
      'http://jikelianmeng.tanghan.cn/static/images/blog-img.jpg'
    ],
    articleList:[
     
    ]
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
  
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
  	let _this = this
  	let page = 1
  	page += _this.data.listQuery.page 
	console.log(_this.data.total)
  	if(page<=3){
  		wx.showNavigationBarLoading()
		articleModel.GetDataByArticle(_this.data.listQuery,res=>{
		  _this.setData({
			  isloadding:true,
			  listQuery:{
			    limit:10,
			    page:page
			  },
		    articleList:_this.data.articleList.concat(res.data)
		  })
		})
		console.log(page)
  	}else{
  		wx.hideNavigationBarLoading()
  		this.setData({
  			isloadding:false
  		});
  	}
  
  },
  
  onShow(){
    var that=this;
    var im = wx.getStorageSync('arbaner')

    articleModel.GetDataByArticle(that.data.listQuery,res=>{
      console.log(res)
	  let total = parseInt((res.total)/(that.data.listQuery['limit']))
	  if(total==0){
		  total = 1
	  }
      that.setData({
        articleList:res.data,
        imgUrls:im,
        logo:wx.getStorageSync('logo'),
		total:total
      })
    })
  }

})