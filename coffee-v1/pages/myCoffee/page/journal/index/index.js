// pages/myCoffee/page/journal/index/index.js
import {
	ArticleModel
} from '../../../../../api/journal.js'

let articleModel = new ArticleModel();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		type: 1,
		total: 10,
		listQuery: {
			limit: 10,
			page: 1
		},
		isloadding: false,
		imgUrls: [
			'https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg',
			'https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg',
			'https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg'
		],
		articleList: [{
			'id': 9,
			'create_time': '2020-06-06',
			'view': 0,
			'like': 0,
			'imgUrl': [{
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}]
		}, {
			'id': 9,
			'create_time': '2020-06-06',
			'view': 0,
			'like': 0,
			'imgUrl': [{
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}]
		}, {
			'id': 9,
			'create_time': '2020-06-06',
			'view': 0,
			'like': 0,
			'imgUrl': [{
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}]
		}],
		showActions:false,
		shaixuanList:[
			{
				'name':'年份',
				'checkId':1,
				'data':[
					{
						'id':1,
						'txt':'2015',
						'isselect':false
					},
					{
						'id':2,
						'txt':'2014',
						'isselect':true
					}
				]
			},{
				'name':'月份',
				'checkId':3,
				'data':[
					{
						'id':3,
						'txt':'12',
						'isselect':false
					},
					{
						'id':4,
						'txt':'11',
						'isselect':true
					},	{
						'id':9,
						'txt':'10',
						'isselect':false
					},
					{
						'id':10,
						'txt':'9',
						'isselect':true
					},	{
						'id':11,
						'txt':'8',
						'isselect':false
					},
					{
						'id':12,
						'txt':'7',
						'isselect':true
					},	{
						'id':13,
						'txt':'6',
						'isselect':false
					},
					{
						'id':14,
						'txt':'5',
						'isselect':true
					}
				]
			},{
				'name':'类型',
				'checkId':6,
				'data':[
					{
						'id':6,
						'txt':'风味雷达图',
						'isselect':false
					},
					{
						'id':5,
						'txt':'趣味金杯计算',
						'isselect':true
					}
					
				]
			}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},
	showAction(event){
	   let isshow = event.currentTarget.dataset.isshow
	   if(isshow == 'true'){
	     isshow = true
	   }else{
	    isshow = false
	   }
	  this.setData({
	    showActions:isshow
	  });
	},
	showPopup() {
		console.log('xx')
		this.setData({
			show: true
		});
	},

	onClose() {
		this.setData({
			show: false
		});
	},
	select(event){
		let data = this.data.shaixuanList
		data[event.target.dataset.idx].checkId =  event.target.dataset.id
		// console.log(data)
		this.setData({
			shaixuanList: data
		})
	},
	getList(event) {
		//todo，获取不同的接口数据
		this.setData({
			type: event.target.dataset.type
		})

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {
		let _this = this
		let page = 1
		page += _this.data.listQuery.page
		console.log(_this.data.total)
		if (page <= 3) {
			wx.showNavigationBarLoading()
			articleModel.GetDataByArticle(_this.data.listQuery, res => {
				_this.setData({
					isloadding: true,
					listQuery: {
						limit: 10,
						page: page
					},
					articleList: _this.data.articleList.concat(res.data)
				})
			})
			console.log(page)
		} else {
			wx.hideNavigationBarLoading()
			this.setData({
				isloadding: false
			});
		}

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
