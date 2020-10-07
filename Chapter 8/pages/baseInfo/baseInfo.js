Page({
  data:{
    array:['男','女'],
    index:0,
    date:'2016-09-01'
  },
  bindDateChange:function(e){
    var date = e.detail.value;
    this.setData({ date: date});
  },
  bindPickerChange:function(e){
    var index = e.detail.value;
    this.setData({ index: index});
  }
})