var config = require('./config.js');
var MD5G = require('./md5utf-8.js');
module.exports = {
  //排序的函数
  objKeySort:function (arys) { 
    var newkey = Object.keys(arys).sort();
    var newObj = {}; 
    for (var i = 0; i < newkey.length; i++) {
      newObj[newkey[i]] = arys[newkey[i]];
    }
    return newObj; //返回排好序的新对象
  },
  //转换为json字符串
  Jsonstr: function (data){
    var obj = {};
    for (var key in data) {
      obj[key] = data[key]
    }
    return JSON.stringify(obj);
  },
  saveUser: function (userInfo,uid){
    var params = {};
    wx.login({
      success: function (res) {
        if (res.code) {
          //获取openId
          wx.request({
            url: config.API_URL + 'api/My/getopenid',
            data: {
              appid: config.AppID,
              secret: config.AppSecret,
              grant_type: 'authorization_code',
              js_code: res.code
            },
            method: 'GET',
            header: { 'content-type': 'application/json' },
            success: function (openIdRes) {
              params.open_id = openIdRes.data.openid;
              // 判断openId是否获取成功
              if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
                    params.uid = uid;
                    params.avatar = userInfo.avatarUrl;
                    params.city = userInfo.city;
                    params.country = userInfo.country;
                    params.nick = userInfo.nickName;
                    params.province = userInfo.province;
                    params.language = userInfo.language;
                    params.sex = userInfo.gender;
                    module.exports.WxOauthLogin(params);
              } else {
                console.info("获取用户openId失败");
              }
            },
            fail: function (error) {
              console.info("获取用户openId失败");
            }
          })
        }
      }
    });

  },
  WxOauthLogin: function (params) {
    wx.request({
      url: config.API_URL + 'api/My/saveUser',
      data: params,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json',
      }, // 设置请求的 header
      dataType: "json",
      success: function (result) {
        wx.setStorageSync("user", result.data);
    
      },
      fail: function () {

      },
      complete: function () {

      }
    })
  },




 
}