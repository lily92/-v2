// pages/myCoffee/page/case/curveDesign/step1/step1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:20,
    timeLine:[],
    stepDesc:{
      "num":5,
      'title':"设置调整第三段冲泡时间",
      "desc":"拖动上图“小圆点”调整第三段冲泡时间"
    }
  },
  next(){
    let that = this
    console.log(that.data.timeLine.concat(this.data.time))
    wx.redirectTo({
      url: '../step6/step6',
    })
    wx.setStorage({
      data:that.data.timeLine.concat(that.data.time),
      key: 'lineArray',
    })
  },
  prev(){
    wx.redirectTo({
      url: '../step4/step4',
    })
  },
  ChangeSlider(event) {
    this.setData({
      time:event.detail
    })
  },
  add() {
    let time = this.data.time
    if (time < 100) {
      time += 1
    } else {
      time = 100
    }
    this.setData({
      time: time
    })
  },
  reduce() {
    let time = this.data.time
    if (time > 0) {
      time -= 1
    } else {
      time = 0
    }

    this.setData({
      time: time
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let timeLine = []
    wx.getStorage({
      key: 'lineArray',
      success (res) {
        timeLine = res.data
        that.setData({
          'timeLine':timeLine
        })
      }
    })
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