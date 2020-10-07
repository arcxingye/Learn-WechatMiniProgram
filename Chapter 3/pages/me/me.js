var app = getApp();
Page({
  data:{
    userInfo:{}
  },
  onLoad:function(){
    var page = this;
    app.getUserInfo(function(userInfo){
      page.setData({ userInfo: userInfo});
    });
  },
  setup:function(){
    wx.navigateTo({
      url: '../setup/setup',
    })
  }

})