// pages/myCoffee/page/journal/journalEdit/journalEdit.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		fileList: [],
		editList:[
			{
				name:'曲线设计',
				active:true,
				fileList:[],
				uploadIcon:"http://jikelianmeng.tanghan.cn/static/images/edit-icon2.png"
				
			},{
				name:'风味雷达',
				active:false,
				fileList:[],
				uploadIcon:"http://jikelianmeng.tanghan.cn/static/images/edit-icon2.png"
				
			},{
				name:'金杯计算',
				active:false,
				fileList:[],
				uploadIcon:"http://jikelianmeng.tanghan.cn/static/images/edit-icon2.png"
			},{
				name:'曲线对比',
				active:false,
				fileList:[],
				uploadIcon:"http://jikelianmeng.tanghan.cn/static/images/edit-icon2.png"
			}
		]
	},
	showDetail(event){
		let that = this
		let index = event.currentTarget.dataset.index
		let isActive = this.data.editList[index].active
		let data = this.data.editList
		for(let i = 0 ;i< that.data.editList.length; i ++ ){
			data[i].active = false
		}
		data[index].active =  !isActive
		this.setData({
			editList:data
		})
		
	},
	afterRead(event) {
		let that = this
		const {
			file
		} = event.detail;
		// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
		wx.uploadFile({
			url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
			filePath: file.path,
			name: 'file',
			formData: {
				user: 'test'
			},
			success(res) {
				// 上传完成需要更新 fileList
				const {
					fileList = []
				} = this.data;
				fileList.push({ ...file,
					url: res.data
				});
				this.setData({
					fileList
				});
			},
			fail(res){
				that.setData({
					fileList:[
						{
							"url":file.path
						}
					]
				});
			}
		});
	},
	send(){
		wx.showToast({
		  title: '曲线设计，风味雷达，金杯计算，曲线对比必须添加有图才能发布',
		  icon: 'none',
		  duration: 2000
		})
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

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
