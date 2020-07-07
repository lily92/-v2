// pages/myCoffee/page/brewing/scanBrewing/selectMachine/selectMachine.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		radio: '1',
		mList: [{
			'name': '1'
		}, {
			'name': '2'
		}, {
			'name': '3'
		}, {
			'name': '4'
		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},
	confirm(){
		wx.navigateTo({
			url: '/pages/myCoffee/page/brewing/scanBrewing/inputPassword/inputPassword',
		})
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},
	onChange(event) {
		this.setData({
			radio: event.detail,
		});
	},

	onClick(event) {
		const {
			name
		} = event.currentTarget.dataset;
		this.setData({
			radio: name,
		});
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

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
