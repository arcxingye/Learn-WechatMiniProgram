Page({
  data:{
    orders:[],
    selected:true,
    selectedAll:true,
    totalPrice:0
  },
  onLoad:function(){
    this.loadOrders();
  },
  loadOrders:function(){//加载购物车商品订单信息
    var orders = wx.getStorageSync('orders');
    this.setData({orders:orders});
    var totalPrice=0;
    for(var i=0;i<orders.length;i++){
       var order = orders[i];
       totalPrice += order.price * order.count;
    }
    this.setData({totalPrice:totalPrice});
  },
  checkboxChange:function(e){//商品行内复选框
  console.log(e);
     var ids = e.detail.value;
     if(ids.length==0){
        this.setData({selectedAll:false});
     }else{
       this.setData({selectedAll:true});
     }
     var orders = wx.getStorageSync('orders');
     var totalPrice=0;
     for(var i=0;i<orders.length;i++){
      var order = orders[i];
      for(var j=0;j<ids.length;j++){
        if(order.id == ids[j]){
           totalPrice += order.price * order.count
        }
      }
     }
     this.setData({totalPrice:totalPrice});
  },
  checkAll:function(e){//全选复选框
     var selected = this.data.selected;
     var result = selected==true?false:true;
     this.setData({selected:result});
     if(result == false){
         this.setData({totalPrice:0});
         this.setData({selectedAll:false});
     }else{
        this.loadOrders();
        this.setData({selectedAll:true});
     }

  },
  addGoods:function(e){//添加商品
     var goods = wx.getStorageSync('goods');
     var id = e.currentTarget.id;
     var good = {};
     for(var i=0;i<goods.length;i++){
        var oldGood = goods[i];
        if(id==oldGood.id){
           good = oldGood;
           break;
        }
     }
     console.log(good);
     var orders = wx.getStorageSync('orders');
     var addOrders = new Array();
     var add = true;
     for(var i=0;i<orders.length;i++){
        var order = orders[i];
        if(order.id == good.id){
          var count = order.count;
          order.count = count +1;
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
     this.loadOrders();
  },
  minusGoods:function(e){//减少商品
     var goods = wx.getStorageSync('goods');
     var id = e.currentTarget.id;
     var good = {};
     for(var i=0;i<goods.length;i++){
        var oldGood = goods[i];
        if(id==oldGood.id){
           good = oldGood;
           break;
        }
     }
     console.log(good);
     var orders = wx.getStorageSync('orders');
     var addOrders = new Array();
     var add = true;
     for(var i=0;i<orders.length;i++){
        var order = orders[i];
        if(order.id == good.id){
          var count = order.count;
          if(count >=2){
             order.count = count - 1;
          }
        }
        addOrders[i] = order;
     }
     
     wx.setStorageSync('orders', addOrders);
     this.loadOrders();
  },
  selectAddress:function(){//选择收货地址
     wx.navigateTo({
       url: '../address/address'
     })
  }

})