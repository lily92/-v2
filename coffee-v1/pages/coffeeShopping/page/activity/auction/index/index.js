// pages/coffeeShopping/page/activity/crowdFunding/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		pageIndex:1,
		isloadding:false,
		list: [{
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}],
		loadData: [{
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, {
			time: 30 * 60 * 60 * 1000
		}, ]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
		console.log('到底了,加载更多')
		let _this = this
		let pageIndex = 1
		pageIndex += _this.data.pageIndex 
		if(pageIndex<=5){
			wx.showNavigationBarLoading()
			this.setData({
				isloadding:true,
				pageIndex:_this.data.pageIndex +1,
				list:_this.data.list.concat(_this.data.loadData)
				
			});
		}else{
			wx.hideNavigationBarLoading()
			this.setData({
				isloadding:false
			});
		}
	
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
