import * as echarts from '../../../../../ec-canvas/echarts';
import Card from '../../../../../palette/cup';
const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  var option = {
    backgroundColor: "#535c46",
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
    nameGap:3
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [430, 340, 500, 300, 490, 400],
        name: '预算',
        areaStyle: {
          color: 'rgba(255, 155, 68, 0.5)'
      },
      lineStyle: {
        color:'rgba(255, 155, 68, 0.5)'
       },
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    src: '' ,
    showShareImg:false,
    ec: {
      onInit: initChart
    },
    file:'',
    show:true,
    rateList:[
      {
        'name':'香气',
        'value':5,
        'score':10
      }, {
        'name':'风味',
        'value':4,
        'score':8
      }, {
        'name':'回甘',
        'value':3,
        'score':6
      }, {
        'name':'口感',
        'value':5,
        'score':10
      }, {
        'name':'平衡度',
        'value':4,
        'score':8
      }
    ],
    descList:[
      {
        'key':'烘焙时间',
        'value':'2020.3.12'
      }, {
        'key':'处理方式',
        'value':'水洗'
      }, {
        'key':'天气',
        'value':'晴朗'
      }, {
        'key':'粉量',
        'value':'阿拉比卡'
      }, {
        'key':'咖啡豆',
        'value':'猫屎咖啡豆'
      }, {
        'key':'研磨度',
        'value':'埃塞俄比亚'
      }, {
        'key':'种类',
        'value':'2020.3.12'
      }, {
        'key':'水粉比',
        'value':'300～400'
      }, {
        'key':'产地',
        'value':'埃塞俄比亚'
      }, {
        'key':'温度',
        'value':'40°'
      }, {
        'key':'海拔高度：',
        'value':'1320km'
      }
    ],
    template: {},
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
    }
  },

  onImgOK(e) {
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
    if (this.isSave) {
      this.saveImage(this.imagePath);
    }
  },

  onRevert() {
    const pre = this.history.pop()
    if (!pre) {
      return
    }
    const needRefresh = pre.index && pre.index >= 0 && pre.index <= this.data.template.views.length
    if (needRefresh) {
      if (this.data.template.views[pre.index].id === pre.view.id) {
        this.data.template.views.splice(pre.index, 1)
      } else {
        this.data.template.views.splice(pre.index, 0, pre.view)
      }
      this.future.push(pre)
    } else {
      for (let i in this.data.template.views) {
        if (this.data.template.views[i].id === pre.view.id) {
          this.future.push({ view: this.data.template.views[i] })
          this.data.template.views[i] = pre.view
          break
        }
      }
    }
    const props = {
      paintPallette: this.data.template,
    }
    if (needRefresh) {
      props.template = this.data.template
    } else {
      props.action = pre
    }
    this.setData(props)
  },

  onRecover() {
    const fut = this.future.pop()
    if (!fut) {
      return
    }
    const needRefresh = fut.index && fut.index >= 0 && fut.index <= this.data.template.views.length
    if (needRefresh) {
      if (this.data.template.views[fut.index].id === fut.view.id) {
        this.data.template.views.splice(fut.index, 1)
      } else {
        this.data.template.views.splice(fut.index, 0, fut.view)
      }
      this.history.push(fut)
    } else {
      for (let i in this.data.template.views) {
        if (this.data.template.views[i].id === fut.view.id) {
          this.history.push({ view: this.data.template.views[i] })
          this.data.template.views[i] = fut.view
          break
        }
      }
    }
    const props = {
      paintPallette: this.data.template,
    }
    if (needRefresh) {
      props.template = this.data.template
    } else {
      props.action = fut
    }
    this.setData(props)
  },

  saveImage(imagePath = '') {
    wx.showLoading({
      title: '请稍后',
    })
    if (!this.isSave) {
      this.isSave = true;
      this.setData({
        paintPallette: this.data.template,
      });
    } else if (imagePath) {
      this.isSave = false;
      wx.saveImageToPhotosAlbum({
        filePath: imagePath,
      });
    }
    wx.hideLoading({
      complete: (res) => {},
    })
  },

  touchEnd({ detail }) {
    let needRefresh = detail.index >= 0 && detail.index <= this.data.template.views.length
    if (needRefresh) {
      this.history.push({
        ...detail
      })
      if (this.data.template.views[detail.index].id === detail.view.id) {
        this.data.template.views.splice(detail.index, 1)
      } else {
        this.data.template.views.splice(detail.index, 0, detail.view)
      }
    } else {
      for (let view of this.data.template.views) {
        if (view.id === detail.view.id) {
          this.history.push({
            view: {
              ...detail.view,
              ...view
            }
          })
          view.css = detail.view.css
          break
        }
      }
    }
    this.future.length = 0
    const props = {
      paintPallette: this.data.template,
    }
    if (needRefresh) {
      props.template = this.data.template
    }
    this.setData(props);
  },
  showShare(){
    let that = this
    this.saveCanvasImg(function(){
      wx.showLoading({
        title: '图片正在生成……'
      })
      
       let template =  new Card().palette()
       template.views[3].url = that.data.file
       that.setData({
        template: template,
        showShareImg:true,
        show:false
      });
      wx.hideLoading({
        complete: (res) => {},
      })
    });
  },
  closeShareImg(){
    this.setData({
      showShareImg:false,
      show:true
    })
  },
  //保存canvas-成为图片
  saveCanvasImg(callback){
    wx.showLoading({
      title: '正在加载'
    })
    let that = this
    const ecComponent = this.selectComponent('#mychart-dom-graph');
    ecComponent.canvasToTempFilePath({
      x: 0,
      y: 0,
      width:596,
      height: 552,
      destWidth: 298,
      destHeight: 276,
      success(res) {
        console.log(res.tempFilePath)
        that.setData({
          file:res.tempFilePath,
          show:false
        })
        callback()
        wx.hideLoading({
          complete: (res) => {
            console.log('success')
          },
        })
      },
      fail(res){
        console.log('fail')
        console.log(res)
      },
      complete(res){
        console.log('complete')
        console.log(res)
      }
    })
  },
  save(){
    console.log('save')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
     let that = this
    //  that.saveImg();
    // that.saveCanvasImg()
    // let template =  new Card().palette()
    // this.setData({
    //   template: template
    // });
  },
});
