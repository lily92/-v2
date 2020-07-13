import * as echarts from '../../../../ec-canvas/echarts';
import Card from '../../../../../../palette/qx';
const app = getApp();

var symbolSize = 20;
var data = [
	[0, 4],
	[10, 6],
	[15, 4],
	[20, 7],
	[30, 0],
	[35, 0],
	[50, 6],
	[60, 0]
];

function initChart(canvas, width, height, dpr) {
	const chart = echarts.init(canvas, null, {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);


	var option = {
		backgroundColor:'#2a2a2a',
		title: {
			text: ''
		},
		tooltip: {
			triggerOn: 'none',
			formatter: function(params) {
				return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
			}
		},
		grid: {
			y:25,
			y2:25
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
			// symbolSize: symbolSize,
			symbolSize: 8,   //折线点的大小
			data: data,
			itemStyle: {
				normal: {
					color: "#adb8c6",//折线点的颜色
					lineStyle: {
					color: "#adb8c6"//折线的颜色
				 }
			 }
		}
		}]
	};


	chart.setOption(option);
	setTimeout(function() {
		// Add shadow circles (which is not visible) to enable drag.
		chart.setOption({
			graphic: echarts.util.map(data, function(item, dataIndex) {
				return {
					type: 'circle',
					position: chart.convertToPixel('grid', item),
					shape: {
						cx: 0,
						cy: 0,
						r: symbolSize / 2
					},
					invisible: true,
					draggable: true,
					z: 100
				};
			})
		});
	}, 0);
	return chart;
}


Page({
	onShareAppMessage: function(res) {
		return {
			title: '分享标题',
			path: '/',
			success: function() {},
			fail: function() {}
		}
	},
	data: {
		show:true,
		showShareImg:false,
		ec: {
			onInit: initChart
		},
		date: '请选择日期', 
		title:'',
		subTitle:'',
		fileImg:''
	},
	setTitle(){
		wx.navigateTo({
			url: '../setTitle/setTitle',
			events: {
				// 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
				acceptDataFromOpenedPage: function(data) {
					console.log(data)
				},
				someEvent: function(data) {
					console.log(data)
				}
			},
			success: function(res) {
				// 通过eventChannel向被打开页面传送数据
				res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
			}
		})
	},
	onLoad(options){
		console.log(options.title)
		console.log(options.subTitle)
		console.log(options.file)
		this.setData({
			title:options.title,
			subTitle:options.subTitle,
			fileImg:options.file
		})

	},
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
	onReady() {},
  //点击分享按钮生成图片
  showShare(){
    let that = this
    this.saveCanvasImg(function(){
      wx.showLoading({
        title: '图片正在生成……'
      })
       let template =  new Card().palette()
       //改变模板的值,生成不同的背景颜色
      //  template.views[0].css.color = that.data.bgcolor
      //  template.views[1].css.color = that.data.bgcolor
      //  template.views[2].css.color = that.data.bgcolor
      //  template.views[4].url = that.data.file //图表img
      //  template.views[3].text = '标题-自定义'
      //  template.views[5].text= '分享标题花要追溯到二战时期，那时意式\n咖啡逐渐进入了人们的视线，被很多人拥簇。'
       let view =template.views
      //  console.log(that.data.type)
      //  if(that.data.type == '3'){
      //    console.log('3')
      //    view = view.map(i => {
      //     if(i.url == 'https://gdhflw.com/public/partime/coffeeImg/star1.png'){
      //       i.url = 'https://gdhflw.com/public/partime/coffeeImg/star0.png'
      //     }
      //    return i
      //  })
      //  }
       template.views = view
       console.log(template)
       that.setData({
        template: template,
        showShareImg:true,
        show:false
      });
      console.log(that.data.template)
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
    const ecComponent = this.selectComponent('#mychart-dom-line');
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
	onImgOK(e) {
    this.imagePath = e.detail.path;
    this.setData({
      image: this.imagePath
    })
    if (this.isSave) {
      this.saveImage(this.imagePath);
    }
  }, 


});
