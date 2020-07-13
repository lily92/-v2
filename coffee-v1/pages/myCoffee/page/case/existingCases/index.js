// pages/myCoffee/page/journal/index/index.js
import Toast from '../../../../../vant-weapp/dist/toast/toast';
import {
	ArticleModel
} from '../../../../../api/journal.js'

let articleModel = new ArticleModel();

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isUpload:false,
		show: false,
		UploadFinish:false,
		type: 1,
		total: 10,
		active: 0,
		showDetail: false,
		result: ['a', 'b'],
		selectNum:0,
		listQuery: {
			limit: 10,
			page: 1
		},
		isloadding: false,
		articleList: [{
			'type': 1,
			'id': 9,
			'create_time': '2020-06-06',
			'view': 0,
			'like': 0,
			'imgUrl': [{
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}]
		}, {
			'type': 2,
			'id': 9,
			'create_time': '2020-06-06',
			'view': 0,
			'like': 0,
			'imgUrl': [{
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}]
		}, {
			'type': 3,
			'id': 9,
			'create_time': '2020-06-06',
			'view': 0,
			'like': 0,
			'imgUrl': [{
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}, {
				'images_url': "https://gdhflw.com/public/partime/coffeeImg/blog-img.jpg"
			}]
		}],
		selectList: [{
			value: 1
		}, {
			value: 2
		}, {
			value: 3
		}]
	},
	onChangeCheckbox(event) {
		this.setData({
      result: event.detail,
		});
		console.log(this.data.result.length)
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let isDownLoad = options.isDownLoad
		console.log('isDownLoad',isDownLoad)
		this.loading('downLoad')
	},
	loading(loadingType,callback) {
		let message=''
		switch (loadingType) {
			case 'downLoad':
				message= '下载中'
				break;
				case 'upLoad':
					message= '上传中'
					break;
			default:
				message= '处理中'
				break;
		}
		const toast = Toast.loading({
			duration: 0, // 持续展示 toast
			forbidClick: true, // 禁用背景点击
			message: message+'10%',
			loadingType: 'spinner',
			selector: '#custom-selector',
			mask: true,
			onClose: () => {
				if(typeof callback == 'function'){
					callback()
				}else{
					console.log('不存在回调')
				}
			  
			},
		});

		let precent = 10;
		const timer = setInterval(() => {
			precent += 10;
			if (precent < 100) {
				toast.setData({
					message: message +` ${precent} %`,
				});
			} else {
				clearInterval(timer);
				Toast.clear();
				wx.setNavigationBarTitle({
					title: '已有方案',
				})
			}
		}, 1000);
 
	},
	showPopup() {
		this.setData({
			show: true
		});
	},
	showDetailbox() {
		this.setData({
			showDetail: true
		});
	},
	onCloseDetail() {
		this.setData({
			showDetail: false
		}); 
	},
	comfrim(){
		 console.log('执行 确认按钮操作')
		 let that = this
		 this.setData({
			showDetail: false,
			isUpload:true,
			selectNum:that.data.result.length
		});
		// this.loading('upLoad')
	},
	comfrimUpload(){
		let that = this
		this.setData({
			isUpload:false,
		})
		this.loading('upLoad',function(){
			that.setData({
				UploadFinish:1 //1成功，-1 失败
			})
		})
	},
	colseTip(){
		this.setData({
			UploadFinish:false 
		})
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		// this.loading('downLoad')

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {
		let _this = this
		let page = 1
		page += _this.data.listQuery.page
		console.log(_this.data.total)
		if (page <= 3) {
			wx.showNavigationBarLoading()
			articleModel.GetDataByArticle(_this.data.listQuery, res => {
				_this.setData({
					isloadding: true,
					listQuery: {
						limit: 10,
						page: page
					},
					articleList: _this.data.articleList.concat(res.data)
				})
			})
			console.log(page)
		} else {
			wx.hideNavigationBarLoading()
			this.setData({
				isloadding: false
			});
		}

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
