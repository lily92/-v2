const app = getApp();

import {
  CommonModel
} from '../../../../api/common.js'

let commonModel = new CommonModel();


import {
  OrderModel
} from '../../../../api/order.js'

let orderModel = new OrderModel();
Page({
  data: {
    staticImg: app.globalData.staticImg,
    current: 0,
    attitude: true,
    time: true,
    efficiency: true,
    environment: true,
    professional: true,
    score: 0,
    content: '',
    // textarea
    min: 5, //最少字数
    max: 300, //最多字数 (根据自己需求改变) 
    pics: [],
    order_id:0,
    goods_id:0,
	scoreList:[
		{
			'name':'商品评价',
			'score':1
		},{
			'name':'描述相符',
			'score':2
		},{
			'name':'物流服务',
			'score':3
		},{
			'name':'服务态度',
			'score':5
		}
	]
  },
  // 星星点击事件
  onChange(event) {
	  console.log(event)
    this.setData({
      score: event.detail
    });
  },
  postData() {
    var that = this.data;
    var temp = {
      temp: {
        score: that.score,
        content: that.content,
        goods_id: that.goods_id,
        order_id: that.order_id,
        user_id:app.globalData.user_id
      },
      pics: that.pics
    }
    orderModel.PostDataByEva(temp,res=>{
      wx.navigateBack({
        delta: 1
      })
    })
    console.log(temp)
  },
  // 留言
  //字数限制  
  inputs: function(e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len, //当前字数  
      content: value
    });
  },
  // 图片
  choose: function(e) { //这里是选取图片的方法
    var that = this;
    var pics = that.data.pics;

    wx.chooseImage({
      count: 5 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        var imgsrc = res.tempFilePaths;
        for (let i = 0; i < imgsrc.length; i++) {
          wx.uploadFile({
            url: app.globalData.base_url + 'upload',
            filePath: imgsrc[i],
            name: 'file',
            header: {
              "Content-Type": "multipart/form-data"
            },
            success(res) {
              var pics = that.data.pics;

              pics.push(res.data);
              that.setData({
                pics: pics,
              });
            }
          })
        }

        // console.log(imgsrc);

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },
  uploadimg: function() { //这里触发图片上传的方法
    var pics = this.data.pics;

    wx.uploadFile({
      url: app.globalData.base_url,
      filePath: res.tempImagePath,
      name: 'file',
      header: {
        "Content-Type": "multipart/form-data"
      },
      success(res) {
        console.log(res)
      }
    })

    // app.uploadimg({
    //   url: 'https://........',//这里是你图片上传的接口
    //   path: pics//这里是选取的图片的地址数组
    // });

  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      goods_id: options.goods_id,
      order_id: options.order_id,
    })
  },
  // 删除图片
  deleteImg: function(e) {
    var pics = this.data.pics;
    var index = e.currentTarget.dataset.index;
    pics.splice(index, 1);
    this.setData({
      pics: pics
    });
  },
  // 预览图片
  previewImg: function(e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var pics = this.data.pics;
    wx.previewImage({
      //当前显示图片
      current: pics[index],
      //所有图片
      urls: pics
    })
  },
})