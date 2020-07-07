// pages/indexPack/page/recommendStore/recommendStore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 fileList:[],
 isboder:false,
 itxt:'选择您的身份',
 identity: ['游客', '咖啡师', '服务员', '老板']
 
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  uploadImg(){
	wx.chooseImage({
	  success (res) {
	    const tempFilePaths = res.tempFilePaths
	    wx.uploadFile({
	      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
	      filePath: tempFilePaths[0],
	      name: 'file',
	      formData: {
	        'user': 'test'
	      },
	      success (res){
	        const data = res.data
	        //do something
	      }
	    })
	  }
	})
  },
  bindPickerChange(e){
	    console.log('picker发送选择改变，携带值为', e.detail.value)
		let that = this
	      this.setData({
	        index: e.detail.value,
			itxt:that.data.identity[e.detail.value]
	      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})