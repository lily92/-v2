// pages/myCoffee/page/case/curveDesign/step1/step1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 10,
    stepDesc: {
      "num": 1,
      'title': "设置调整冲泡总时长",
      "desc": "拖动上图“小圆点”调整冲泡总时间（冲泡总时长包含预浸及预浸等待时长）"
    }
  },
  next() {
    let that = this
    wx.redirectTo({
      url: '../step2/step2?time=' + that.data.time,
    })
    wx.setStorage({
      data: [this.data.time],
      key: 'lineArray',
    })
  },
  ChangeSlider(event) {
    this.setData({
      time: event.detail
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