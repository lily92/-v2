// component/item/index.js
import areaList from './../../area.js'



import {
  CityModel
} from '../../../api/city.js'

let citymodel = new CityModel();



import {
  AddressModel
} from '../../../api/address.js'

let addressModel = new AddressModel();




Page({
  
  onLoad(opt) {
    var that=this;
    console.log(opt)
    let data = JSON.parse(opt.addrData)
    console.log(data)
    var is_default=true;
    if (data.is_default!==1){
      is_default=false
    }
    this.setData({
      areaMsg: data.areaMsg,
      posterAddr: data.posterAddr,
      userName: data.userName,
      phone: data.phone,
      is_default: 1,//1默认 2不启用
      id: data.id,   
      area_code: data.area_code ,
      is_default: is_default
    })

    citymodel.getProvinces(res => {
      that.setData({
        city_list: res
      })
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    showArea: false, // 显示/隐藏省市区模块
    areaList: areaList, //地区模块数据
    areaMsg: '',  //省市区
    userName: '',  //用户名
    phone: '',    //手机
    posterAddr: '', // 详细地址
    is_default: '',   //是否默认地址
    id:'',
    provinces: '',
    city: '',
    area: '',
    area_code: ''
  },
  // 显示/隐藏省市区模块
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
      areaMsg: text.join(''),
      showArea: false,
    })
  },
  // 用户名输入
  changeUserName (event) {
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
    console.log(event.detail)
  },

  // 是否默认地址
  onChangeDefault (event) {
    console.log(event)
    var that=this.data;
    this.setData({
      is_default: event.detail
    });
  },
  // 保存
  onSave () {
    let data = this.data
    let dataset = {
      id: data.id,
      areaMsg: data.areaMsg,
      posterAddr: data.posterAddr,
      userName: data.userName,
      phone: data.phone,
      is_default: data.is_default,
      area_code: data.area_code
    }
    addressModel.postAddress(dataset,res=>{
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
    }
    if (level == 3) {
      that.setData({
        area: e.currentTarget.dataset.name,
        city_list: [],
        isArea: true,
        showArea: false,
        areaMsg: that.data.provinces +'-'+ that.data.city + '-'+e.currentTarget.dataset.name
      })
    }
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
  handelDuf(e){
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
  getArea(e) {
    var that = this;
    var area_code = e.currentTarget.dataset.area_code
    citymodel.getArea(area_code, res => {
      that.setData({
        city: e.currentTarget.dataset.name,
        city_list: res,
        city_code: area_code,
      })
    })
  },
  

})