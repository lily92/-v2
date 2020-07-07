// component/new/index.js
import areaList from './../../area.js'

const app = getApp();

import {
  CityModel
} from '../../../api/city.js'

let citymodel = new CityModel();

import {
  AddressModel
} from '../../../api/address.js'

let addressModel = new AddressModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showArea: false,
    areaList: areaList,
    picker: '',
    areaMsg: '',
    userName: '',
    phone: '',
    posterAddr: '',
    is_default: false,
    city_list: [],
    provinces: '',
    city: '',
    area: '',
    city_code: '',
    area_code: '',
    special_city: false
  },
  onLoad() {
    var that = this;
    citymodel.getProvinces(res => {
      that.setData({
        city_list: res
      })
    })
  },
  //  显示/隐藏地址弹出层
  areaToggle() {
    this.setData({
      showArea: !this.data.showArea
    });
  },
  // 选择省市区
  onSelect(val) {
    let value = val.detail.values
    console.log(value)
    let text = []
    // value[item].name
    for (let item in value) {
      let name = value[item].name
      text[item] = name
    }
    console.log(text) //["天津市", "天津市", "河东区"]
    this.setData({
      areaMsg: text.join('-'),
      showArea: false,
    })
  },
  // 用户名输入
  changeUserName(event) {
    this.setData({
      userName: event.detail
    });
    console.log(event.detail)
  },
  // 手机输入
  changePhone(event) {
    this.setData({
      phone: event.detail
    });
    console.log(event.detail)
  },
  // 详细地址输入
  changePosterAddr(event) {
    this.setData({
      posterAddr: event.detail
    });
  },
  // 默认地址
  onChangeDefault(event) {
    this.setData({
      is_default: event.detail
    });
  },
  // 保存
  onSave() {
    let data = this.data
    let dataset = {
      id: data.id,
      areaMsg: data.areaMsg,
      posterAddr: data.posterAddr,
      userName: data.userName,
      phone: data.phone,
      is_default: data.is_default,
      area_code: data.city_code,
      user_id: app.globalData.user_id
    }
    addressModel.postAddress(dataset, res => {
      console.log(res)
    })
    wx.navigateBack({
      delta: 1
    })
  },

  handelProvinces(e) {
    var that = this;
    var level = e.currentTarget.dataset.level
    if (level == 1) {
      that.getCity(e);
    }
    if (level == 2) {
      that.getArea(e);
      // 执行 getArea() 方法中，给this.data.city赋值需要一点时间
      // 所以需要setTimeout
      setTimeout(() => {
        if (that.data.city === '东莞市' || that.data.city === '中山市' || that.data.city === '儋州市') {
          that.setData({
            showArea: false,
            areaMsg: that.data.provinces + '-' + that.data.city,
            special_city: true
          })
        }
      }, 200)
    }
    if (level == 3) {
      that.setData({
        area: e.currentTarget.dataset.name,
        city_list: [],
        isArea: true,
        showArea: false,
        areaMsg: that.data.provinces + '-' + that.data.city + '-' + e.currentTarget.dataset.name
      })
    }

  },

  // 点击省份
  handeProvince() {
    var that = this
    citymodel.getProvinces(res => {
      that.setData({
        city_list: res,
        provinces: '请选择',
        city: '',
        area: ''
      })
    })
  },
  //点击城市
  handeCity() {
    var that = this;
    citymodel.getCity(that.data.pr_code, res => {
      that.setData({
        city_list: res,
        city: '请选择',
        area: ''
      })
    })
  },
  handelDuf(e) {
    console.log(e)
  },
  //点击区域。
  handeArea() {
    var that = this;
    citymodel.getArea(that.data.city_code, res => {
      that.setData({
        city_list: res,
        area: '请选择',
      })
    })
  },

  getCity(e) {
    var that = this;
    var area_code = e.currentTarget.dataset.area_code
    citymodel.getCity(area_code, res => {
      that.setData({
        provinces: e.currentTarget.dataset.name,
        city_list: res,
        pr_code: area_code
      })
    })
  },

  getArea(e) {
    var that = this;
    var area_code = e.currentTarget.dataset.area_code
    citymodel.getArea(area_code, res => {
      that.setData({
        city: e.currentTarget.dataset.name,
        city_list: res,
        city_code: area_code,
      })
      // console.log(this.data.city, this.data.city_code, area_code, '123124')
    })

  }
})