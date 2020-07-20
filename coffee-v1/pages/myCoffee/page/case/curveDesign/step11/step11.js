// pages/myCoffee/page/case/curveDesign/step1/step1.js
import * as echarts from '../../../../ec-canvas/echarts';
var data = [
  [0, 4],
  [10, 4],
  [20, 0],
  [20, 7],
  [30, 7],
  [30, 0],
  [45, 5],
  [60, 4]
];

function setOption(chart) {
  var option = {
    backgroundColor: "transparent",
    color: ["#37A2DA", "#FF9F7F"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
          name: '香气',
          max: 500
        },
        {
          name: '风味',
          max: 500
        },
        {
          name: '酸质',
          max: 500
        },
        {
          name: '平衡度',
          max: 500
        },
        {
          name: '口感',
          max: 500
        },
        {
          name: '回甘',
          max: 500
        }
      ],
      name: {
        textStyle: {
          color: '#fff'
        }
      },
      nameGap: 3
    },
    series: [{
      name: '',
      type: 'radar',
      data: [{
        value: [430, 340, 500, 300, 490, 400],
        name: '预算',
        areaStyle: {
          color: 'rgba(255, 155, 68, 0.5)'
        },
        lineStyle: {
          color: 'rgba(255, 155, 68, 0.5)'
        },
      }]
    }]
  };
  chart.setOption(option);
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isBar: true,
    time: 20,
    timeLine: [],
    pressureLine: [],
    stepDesc: {
      "num": 11,
      'title': "根据液压惯性修正",
      "desc": "上下坡斜率暂时按85*和-85*"
    },
    Pindex: 4,
    ec: {
      // 将 lazyLoad 设为 true 后，需要手动初始化图表
      lazyLoad: true
    },
    isLoaded: false,
    isDisposed: false,
    file: '',
    customActionStyle: {
      border: {
        borderColor: '#1A7AF8',
      },
      scale: {
        textIcon: '/palette/switch.png',
        imageIcon: '/palette/scale.png'
      },
      delete: {
        icon: '/palette/close.png'
      }
    },
    bgcolor: "#535c46",
    option: {
      backgroundColor: '#000',
      title: {
        text: ''
      },
      legend: {
        data: ['完整曲线']
      },
      tooltip: {
        triggerOn: 'none',
        formatter: function (params) {
          return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
      },
      grid: {
        y: 25,
        y2: 25
      },
      xAxis: {
        min: 5,
        max: 60,
        type: 'value',
        axisLine: {
          onZero: false
        },
        minInterval: 0,
        interval: 5, //每次增加几个
        axisLabel: {
          color: '#ccc'
        }
      },
      yAxis: {
        min: 0,
        max: 10,
        minInterval: 1,
        axisLabel: {
          color: '#ccc'
        },
        type: 'value',
        axisLine: {
          onZero: false
        },
        minInterval: 1,
        interval: 1 //每次增加几个

      },
      series: [{
        id: 'a',
        type: 'line',
        // smooth: true,
        animationDelay: function (idx) {
          return idx * 10;
        },
        data: data,
        symbolSize: 4, //折线点的大小
        itemStyle: {
          normal: {
            color: "#adb8c6", //折线点的颜色
            lineStyle: {
              width: 3,
              color: "#adb8c6" //折线的颜色
            }
          }
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    }
  },
  // 获取数据后初始化图表
  init() {
    let that = this
    this.ecComponent.init((canvas, width, height, dpr) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      chart.setOption(that.data.option);
      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;
      this.setData({
        isLoaded: true,
        isDisposed: false
      });

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
  },
  next() {
    let that = this
    wx.redirectTo({
      url: '../step12/step12',
    })
    wx.setStorage({
      data: that.data.timeLine.concat(that.data.time),
      key: 'lineArray',
    })
  },
  prev() {
    wx.redirectTo({
      url: '../step10/step10',
    })
  },
  sliderChange(event) {
    let that = this
    console.log('页面监听到改变后的值：', event.detail.value)
    let pressureLine = that.data.pressureLine
    pressureLine.map((item, idx) => {
      if (idx == that.data.Pindex) {
        pressureLine[idx] = event.detail.value
      }
      return idx
    })
    that.setData({
      pressureLine: pressureLine
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
      if (idx == that.data.Pindex && pressureLine[idx] <= 10) {
        pressureLine[idx] = pressureLine[idx] + 1
      }
      return idx
    })
    that.setData({
      pressureLine: pressureLine
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
      if (idx == that.data.Pindex && pressureLine[idx] > 1) {
        pressureLine[idx] = pressureLine[idx] - 1
      }
      return idx
    })
    that.setData({
      pressureLine: pressureLine
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
    let pressureLine = [7, 5, 5, 5]
    try {
      var value = wx.getStorageSync('pressureLine')
      if (value == '' || value == null || value == undefined) {
        wx.setStorage({
          data: [7, 5, 5, 5],
          key: 'pressureLine',
          success() {
            pressureLine = [7, 5, 5, 5]
          }
        })
      } else {
        pressureLine = value
      }

    } catch (e) {
      pressureLine = [7, 5, 5, 5]
    }
    that.setData({
      pressureLine: pressureLine
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取组件
    this.ecComponent = this.selectComponent('#mychart-dom-graph');
    this.init();

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