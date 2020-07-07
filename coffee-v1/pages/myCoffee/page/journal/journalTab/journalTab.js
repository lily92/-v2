// pages/myCoffee/journal/journalTab/journalTab.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		active: 1,
		list:[
			{
				'id':1,
				'title':'点赞',
				'types':1,//1点赞
				'listCon':[
					{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					},{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					},{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					}
				]
				
			},	{
				'id':2,
				'types':2,//1转发
				'title':'转发',
				'listCon':[
					{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					},{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					},{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					}
				]
				
			},	{
				'id':3,
				'title':'评论',
				'types':3,//3评论
				'listCon':[
					{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					},{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
					},{
						'name':'地球',
						'imgUrl':'',
						'userIcon':''
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
	onChange(event) {

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

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
