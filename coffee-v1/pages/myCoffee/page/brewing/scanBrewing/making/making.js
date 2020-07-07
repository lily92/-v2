import * as echarts from '../../../../../../ec-canvas/echarts';
import * as dark from '../../../../../../ec-canvas/dark';
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
var data2 = [
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
	const chart = echarts.init(canvas, 'dark', {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);


	var option = {
		title: {
			text: ''
		},
		legend: {
			data: ['完整曲线', '冲泡中']
		},
		tooltip: {
			triggerOn: 'none',
			formatter: function(params) {
				return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
			}
		},
		grid: {},
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
				animationDelay: function(idx) {
					return idx * 10;
				},
				data: data
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

function updatePosition() {
	chart.setOption({
		graphic: echarts.util.map(data, function(item, dataIndex) {
			return {
				position: chart.convertToPixel('grid', item)
			};
		})
	});
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
		iscomplete: false
	},

	onReady() {},
	closeTip() {
		app.globalData.Network = false
		console.log('app.globalData.noNetwork:', app.globalData.Network)
		this.setData({
			nonetWork: true
		})
	}
});
