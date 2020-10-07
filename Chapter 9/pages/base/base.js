Page({
  data:{
    currentTab:1
  },
  changeContent:function(e){
    console.log(e);
     var current = e.detail.current;
     this.setData({ currentTab: current+1});
  }
})