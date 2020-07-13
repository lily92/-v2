// pages/myCoffee/page/brewing/scanBrewing/score/score.js
import Card from '../../../../../../palette/contrast';
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {

		template: {},
		showShareImg:false
	},
	onClickHide() {
    this.setData({ showShareImg: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('把上一页面的曲线的img临时路径传进来')
    this.showShare()
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