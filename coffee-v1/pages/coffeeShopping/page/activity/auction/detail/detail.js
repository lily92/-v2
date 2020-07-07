// pages/coffeeShopping/page/activity/auction/detail/detail.js
var WxParse = require('../../../../../../wxParse/wxParse.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		swiperImg: [{
			'url': 'https://gdhflw.com/public/partime/coffeeImg/product-detail.jpg'
		}, {
			'url': 'https://gdhflw.com/public/partime/coffeeImg/product-detail.jpg'
		}, {
			'url': 'https://gdhflw.com/public/partime/coffeeImg/product-detail.jpg'
		}],
		productD: "XX产品详情",
		show: false,
		showPrice:false,
		checked: false,
		price:1000,
		radioAddess:1,
		addressList:[
			{
				'name':'林莉莉',
				'phone':'13719150456',
				'address':'北京丰台白云区南航传媒有限公司',
				'expressFee':6,
				'id':1
			},
			{
				'name':'XXXX',
				'phone':'13719150456',
				'address':'广东省广州市白云区南航传媒有限公司',
				'expressFee':6,
				'id':2
			},
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let _this = this
		WxParse.wxParse('article', 'html', _this.data.productD, _this, 5);
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
	onReachBottom: function() {

	},
	showPopup() {
		this.setData({
			show: true
		});
	},
	
	showPopupPrice(){
		this.setData({
			show:false,
			showPrice: true
			
		});
	},
	onClose() {
		this.setData({
			show: false,
			showPrice:false
		});
	},
	onChange(event) {
		this.setData({
			checked: event.detail,
		});
	},
	onChangeChujia(event){
		
		  this.setData({
		  	price: event.detail,
		  });
	},
	givePrice(){
		wx.navigateTo(
		  {
				url:'../results/results?type=0'//0 失败，1成功
			}
		)
	},
	onChangeAdd(event){
		this.setData({
		      radioAddess: event.detail,
		    });
	},
	showModal(){
		wx.showModal({
		  content: '疑问neirong?',
		  showCancel:false,
		  success (res) {
		    if (res.confirm) {
		      console.log('用户点击确定')
		    } 
		  }
		})
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
