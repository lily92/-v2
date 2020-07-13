// pages/myCoffee/page/case/curveDesign/setTitle/setTitle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    title:'',
    subTitle:''
    
  },
  afterRead(event) {
    let that = this
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
      fail(){
        that.setData({ 
          fileList:[{
            "url":"https://gdhflw.com/public/partime/coffeeImg/cBanner.jpg"
          }]
         });
      }
    });
  },
  save(){
    let that = this
    let title = that.data.title
    let subTitle = that.data.subTitle
    console.log(that.data.title)
    wx.navigateTo({
      url: '../step12/step12?title='+title+'&subTitle='+subTitle+'&file='+that.data.fileList[0].url,
    })
  },
  confirmTitle(event){
    console.log(event)
    this.setData({
      'title': event.detail.value
    })
  },
  confirmSubTitle(event){
    this.setData({
      'subTitle': event.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option){
    // console.log(option.query)
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on('acceptDataFromOpenerPage', function(data) {
    //   console.log(data)
    // })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})