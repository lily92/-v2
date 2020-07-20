// pages/myCoffee/page/brewing/scanBrewing/score/score.js
import * as echarts from '../../../../ec-canvas/echarts';
import Card from '../../../../../../palette/score';
const app = getApp();

var symbolSize = 20;
var data = [
	[0, 4],
	[1, 6],
	[2, 4],
	[3, 7],
	[4, 0],
	[5, 0],
	[7, 6],
	[7, 0]
];
var data2 = [
	[0, 4],
	[1, 6],
	[2, 4],
	[3, 7],
	[4, 0],
	[5, 0],
	[6, 6],
	[7, 0]
];


function initChart(canvas, width, height, dpr) {
	const chart = echarts.init(canvas, 'dark', {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);


	var option = {
		backgroundColor: "#000",
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
			x:40,
			y:20,
			x2:40,
			y2:20
		},
		xAxis: {
			max: 5,
			type: 'value',
			axisLine: {
				onZero: false
			},
			minInterval: 0,
			interval: 1, //每次增加几个
			axisLabel: {
				color: '#ccc'
			},
			splitLine:{
				show:false
		}
		},
		yAxis: {
			min: 0,
			max: 10,
			splitLine:{
				show:false
		},
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
				animationDelay: function(idx) {
					return idx * 10;
				},
				data: data,
				itemStyle: {
					normal: {
						// color: '#ff9b44', //改变折线点的颜色
						lineStyle: {
							color: '#adb8c6' //改变折线颜色
						}
					}
				},
			},
			{
				id: 'b',
				type: 'line',
				smooth: true,
				animationDelay: function(idx) {
					return idx * 10 + 100;
				},
				data: data2,
				animationDelay: function(idx) {
					return idx * 10 + 100;
				},
				itemStyle: {
					normal: {
						// color: '#adb8c6', //改变折线点的颜色
						lineStyle: {
							color: '#ff9b44' //改变折线颜色
						}
					}
				}
			}
		],
		animationEasing: 'elasticOut',
		animationDelayUpdate: function(idx) {
			return idx * 5;
		}
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
					// draggable: true,
					// ondrag: echarts.util.curry(onPointDragging, dataIndex),
					// onmousemove: echarts.util.curry(showTooltip, dataIndex),
					// onmouseout: echarts.util.curry(hideTooltip, dataIndex),
					z: 100
				};
			})
		});
	}, 0);
	return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
	  ec: {
	  	onInit: initChart
	  },
	  moodList:[
		  {
			  'icon':"http://jikelianmeng.tanghan.cn/static/images/s-1.png",
			  'name':'槽糕'
		  }, {
			  'icon':"http://jikelianmeng.tanghan.cn/static/images/s-2.png",
			  'name':'一般'
		  }, {
			  'icon':"http://jikelianmeng.tanghan.cn/static/images/s-3.png",
			  'name':'良好'
		  }, {
			  'icon':"http://jikelianmeng.tanghan.cn/static/images/s-4.png",
			  'name':'满意'
		  }, {
			  'icon':"http://jikelianmeng.tanghan.cn/static/images/s-5.png",
			  'name':'极好'
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
		},
		showShareImg:false
	},
	onClickHide() {
    this.setData({ showShareImg: false });
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
    wx.showLoading({
      title: '图片正在生成，请稍后',
    })
     let that = this
     let template =  new Card().palette()
     console.log(template)
     that.setData({
      template: template,
      showShareImg:true,
		})
    wx.hideLoading({
      complete: (res) => {},
    })
  },
  closeShareImg(){
    this.setData({
      showShareImg:false,
      show:true
    })
  }
})