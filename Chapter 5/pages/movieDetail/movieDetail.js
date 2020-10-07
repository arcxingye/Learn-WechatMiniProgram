Page({
  data:{
    movie:{}
  },
  onLoad:function(e){
    this.loadMovieDetail(e);
  },
  loadMovieDetail:function(e){
     var page = this;
     wx.request({
       url: 'https://api.douban.com/v2/movie/subject/'+e.id,
       header:{
         'Content-Type':'json'
       },
       success:function(res){
          var subject = res.data;
          var movie = new Object();
          //电影名称
          movie.name = subject.title;

          //电影海报图片
          movie.pic = subject.images.medium;

          //导演
          var directors = subject.directors;
          var dir = '';
          for (var j = 0; j < directors.length; j++) {
            dir += directors[j].name + ' ';
          }
          movie.dir = dir;

          //主演
          var casts = subject.casts;
          var cast = '';
          for (var j = 0; j < casts.length; j++) {
            cast += casts[j].name + ' ';
          }
          movie.cast = cast;
          movie.id = subject.id;
          movie.year = subject.year;
          //影片类型
          var genres = subject.genres;
          var gen = '';
          for (var j = 0; j < genres.length; j++) {
            gen += genres[j] + ' ';
          }
          movie.type = gen;
          movie.summary = subject.summary;
          movie.country = subject.countries[0];
          page.setData({movie:movie});
          wx.setNavigationBarTitle({
            title: movie.name
          })
       }
     })
  }
})