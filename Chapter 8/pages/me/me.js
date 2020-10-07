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
  finishResume:function(){
    wx.navigateTo({
      url: '../resume/resume'
    })
  }
})