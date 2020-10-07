Page({
  data:{
    name:'立即登录'
  },
  onLoad:function(){
    var user = wx.getStorageSync("user");
    if(user){
      this.setData({name:user.name});
    }
  }, 
  login:function(){
    wx.navigateTo({
      url: '../login/login'
    })
  }
})