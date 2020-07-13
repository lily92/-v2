// pages/myCoffee/page/case/curveDesign/step1/step1.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isBar:true,
    time:20,
    timeLine:[],
    pressureLine:[],
    stepDesc:{
      "num":8,
      'title':"设置第二段压力值",
      "desc":"拖动上图“长条方块”调整第二段压力"
    },
    Pindex:1
  },
  next(){
    let that = this
    wx.redirectTo({
      url: '../step9/step9',
    })
    wx.setStorage({
      data:that.data.timeLine.concat(that.data.time),
      key: 'lineArray',
    })
  },
  prev(){
    wx.redirectTo({
      url: '../step7/step7',
    })
  },
  sliderChange(event) {
    let that = this
    console.log('页面监听到改变后的值：',event.detail.value)
    let pressureLine = that.data.pressureLine
    pressureLine.map((item, idx) => {
      if(idx == that.data.Pindex){
       pressureLine[idx] = event.detail.value
      }
     return idx
    })
    that.setData({
      pressureLine:pressureLine
    })
    wx.setStorage({
      data: that.data.pressureLine,
      key: 'pressureLine',
    })
    // console.log(that.data.pressureLine)
    
  },
  add() {
    let that = this
    let pressureLine = that.data.pressureLine

    pressureLine.map((item, idx) => {
      if(idx == that.data.Pindex && pressureLine[idx]<=10){
        pressureLine[idx]= pressureLine[idx]+1
      }
     return idx
    })
    that.setData({
      pressureLine :pressureLine
    })
    wx.setStorage({
      data: pressureLine,
      key: 'pressureLine',
    })
  },
  reduce() {
    let that = this
    let pressureLine = that.data.pressureLine
    pressureLine.map((item, idx) => {
      if(idx == that.data.Pindex && pressureLine[idx]> 1 ){
        pressureLine[idx] = pressureLine[idx] -1
      }
     return idx
    })
    that.setData({
      pressureLine :pressureLine
    })
    console.log(pressureLine)
    wx.setStorage({
      data: pressureLine,
      key: 'pressureLine',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let pressureLine = [7,5,5,5]
    try {
      var value = wx.getStorageSync('pressureLine')
      if (value =='' || value ==null || value ==undefined) {
        wx.setStorage({
          data: [7,5,5,5],
          key: 'pressureLine',
          success(){ 
            pressureLine = [7,5,5,5]
          }
        })
      }else{
        pressureLine = value
      }
      
    } catch (e) {
      pressureLine = [7,5,5,5]
    }
    that.setData({
      pressureLine:pressureLine
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