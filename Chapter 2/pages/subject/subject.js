Page({
  data:{
    indicatorDots:true,
    imgUrls:[
      '/pages/images/haibao/haibao-1.jpg',
      '/pages/images/haibao/haibao-2.jpg',
      '/pages/images/haibao/haibao-3.jpg',
      '/pages/images/haibao/haibao-4.jpg',
      '/pages/images/haibao/haibao-5.jpg'
    ]
  },
  seeDetail:function(e){
    var id = e.currentTarget.id;
    wx.navigateTo({
      url:'../subjectDetail/subjectDetail?id='+id
    })
  }
})