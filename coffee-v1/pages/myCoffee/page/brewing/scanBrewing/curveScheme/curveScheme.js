import * as echarts from '../../../../ec-canvas/echarts';

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
					// ondrag: echarts.util.curry(onPointDragging, dataIndex),
					// onmousemove: echarts.util.curry(showTooltip, dataIndex),
					// onmouseout: echarts.util.curry(hideTooltip, dataIndex),
					z: 100
				};
			})
		});
	}, 0);
	//把方法放到initChart方法内部
	function onPointDragging(dataIndex, dx, dy) {
		data[dataIndex] = chart.convertFromPixel('grid', this.position);
		chart.setOption({
			series: [{
				id: 'a',
				data: data
			}]
		});
		// Update data
	}

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
		ec: {
			onInit: initChart
		},
		caseDescList: [{
				'name': '烘培师',
				'desc': '阿拉姆',
				'dataKey':'baker'
			},
			{
				'name': '工坊：',
				'desc': '萃取精灵',
				'dataKey':'gongfang'
			}, {
				'name': '设计日期：',
				'desc': '2020-2-21',
				'dataKey':'date'
			},
			{
				'name': '豆种',
				'desc': '旧街场白咖啡',
				'dataKey':'type'
			},
			{
				'name': '处理方式：',
				'desc': '水洗',
				'dataKey':'deal'
			},
			{
				'name': '产地：',
				'desc': '阿拉比卡种',
				'dataKey':'placeOrigin'
			}
		]

	},

	onReady() {},
	closeTip() {
		app.globalData.Network = false
		console.log('app.globalData.noNetwork:', app.globalData.Network)
		this.setData({
		 nonetWork:true
		})
	},
	making(){
		wx.navigateTo({
			url: '../findMachine/findMachine',
		})
	},
	bindDateChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		let that = this
		let caseDescList = that.data.caseDescList
		caseDescList[2].desc = e.detail.value
    this.setData({
      caseDescList: caseDescList
    })
  },
});
