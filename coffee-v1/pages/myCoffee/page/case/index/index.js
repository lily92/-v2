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
		active: 0,
		number:5,
		showStep:false,
		showDetail:false,
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
		typeList: [{
			'name': '个人',
			'id': 0
		}, {
			'name': '收藏',
			'id': 1
		}],
		articleList: [{
			'type':1,
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
			'type':2,
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
			'type':3,
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
		showActions: false,
		shaixuanList: [{
			'name': '年份',
			'checkId': 1,
			'data': [{
					'id': 1,
					'txt': '2015',
					'isselect': false
				},
				{
					'id': 2,
					'txt': '2014',
					'isselect': true
				}
			]
		}, {
			'name': '月份',
			'checkId': 3,
			'data': [{
					'id': 3,
					'txt': '1月',
					'isselect': false
				},
				{
					'id': 4,
					'txt': '2月',
					'isselect': true
				}, {
					'id': 9,
					'txt': '3月',
					'isselect': false
				},
				{
					'id': 10,
					'txt': '4月',
					'isselect': true
				}, {
					'id': 11,
					'txt': '5月',
					'isselect': false
				},
				{
					'id': 12,
					'txt': '6月',
					'isselect': true
				}, {
					'id': 13,
					'txt': '7月',
					'isselect': false
				},
				{
					'id': 14,
					'txt': '8月',
					'isselect': true
				}
			]
		}, {
			'name': '类型',
			'checkId': 6,
			'data': [{
					'id': 6,
					'txt': '茶',
					'isselect': false
				},
				{
					'id': 5,
					'txt': '意式',
					'isselect': true
				},
				{
					'id': 110,
					'txt': '单品',
					'isselect': true
				}

			]
		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},
	showPopup() {
		this.setData({
			show: true
		});
	},
	showStepbox(){
		this.setData({
			showStep: true
		});
	},	
	onCloseStep(){
		this.setData({
			showStep: false
		});
	},
	showDetailbox(){
		this.setData({
			showDetail: true
		});
	},
	onCloseDetail(){
		this.setData({
			showDetail: false
		});
	},
	onChange(event) {
		console.log(event)
		wx.showToast({
			title: `切换到标签 ${event.detail.title}`,
			icon: 'none',
		});
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
