var app = getApp()
Page({
  data: {
    indicatorDots: false,
    autoplay: true,
    interval:5000,
    duration:1000,
    imgUrls:[
      "/images/haibao/haibao-1.jpg",
      "/images/haibao/haibao-2.jpg"
    ],
    goods:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.loadGoods();
  },
  loadGoods:function(){
    var goods = wx.getStorageSync('goods');
    var result = [];
    for(var i=0;i<goods.length;i++){
        var good = goods[i];
        var type = good.type;
        if(type.indexOf('milk')>-1){
           result.push(good);
        }
    }
    this.setData({goods:result});
  },
  addGoods:function(e){
     var goods = wx.getStorageSync('goods');
     var id = e.currentTarget.id;
     var good = {};
     for(var i=0;i<goods.length;i++){
       var oldGood = goods[i];
         if(oldGood.id==id){
             good = oldGood;
             break;
         }
     }
     var orders = wx.getStorageSync('orders');
     var addOrders = new Array();
     var add = true;
     for(var i=0;i<orders.length;i++){
        var order = orders[i];
        if(order.id == good.id){
            var count = order.count;
            order.count = count + 1 ;
            add = false;
        }
        addOrders[i] = order;
     }
    var len = orders.length;
    if(add){
       good.count = 1;
       addOrders[len] = good;
    }
    wx.setStorageSync('orders', addOrders);
    wx.showToast({
      title:'添加成功',
      icon:'success',
      duration:1000
    });
  }
})
