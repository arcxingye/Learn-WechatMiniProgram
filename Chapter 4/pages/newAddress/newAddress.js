// pages/newAddress/newAddress.js
Page({
  data: {
    cities: [
      '北京市',
      '上海市',
      '天津市',
      '成都市',
      '重庆市'
    ],
    index:0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  bindPickerChange:function(e){
     this.setData({index:e.detail.value});
  },
  formSubmit:function(e){
    var address = e.detail.value;
    var cityNum = address.city;
    var cities = this.data.cities;
    address.city = cities[cityNum];
    var addresses = wx.getStorageSync('addresses');
    if(!addresses){
       addresses = new Array();
    } 
    addresses.push(address);
    wx.setStorageSync('addresses', addresses);
    wx.redirectTo({
      url: '../address/address'
    })
  }
})