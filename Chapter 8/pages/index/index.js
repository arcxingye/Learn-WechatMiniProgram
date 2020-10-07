Page({
  data:{
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      '/images/haibao/1.jpg',
      '/images/haibao/2.jpg',
      '/images/haibao/3.jpg'
    ],
    jobs:[]
  },
  onLoad:function(){
    var jobs = wx.getStorageSync("jobs");
    this.setData({jobs:jobs});
  }
})