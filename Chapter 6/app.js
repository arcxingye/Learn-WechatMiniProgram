//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var songs = wx.getStorageSync('songs');
    if (!songs) {
      songs = this.loadSongs();
      wx.setStorageSync('songs', songs);
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  },
  loadSongs: function () {
    var songs = new Array();
    var song = new Object();
    song.id = 1;
    song.name = "微微一笑很倾城";
    song.singer = "杨洋";
    song.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000003RxTdZ0sJLwo.jpg"
    song.url = "http://stream.qqmusic.tc.qq.com/137903929.mp3";
    song.type = "2";
    songs.push(song);

    var song2 = new Object();
    song2.id = 2;
    song2.name = "你还要我怎样";
    song2.singer = "薛之谦";
    song2.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000000aWdOx24i3dG.jpg"
    song2.url = "http://stream.qqmusic.tc.qq.com/138549169.mp3";
    song2.type = "1";
    songs.push(song2);

    var song3 = new Object();
    song3.id = 3;
    song3.name = "演员";
    song3.singer = "薛之谦";
    song3.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000003y8dsH2wBHlo.jpg"
    song3.url = "http://stream.qqmusic.tc.qq.com/132636799.mp3";
    song3.type = "1";
    songs.push(song3);

    var song4 = new Object();
    song4.id = 4;
    song4.name = "此时此刻";
    song4.singer = "许巍";
    song4.img = "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000"
    song4.url = "http://stream.qqmusic.tc.qq.com/132636799.mp3";
    song4.type = "1";
    songs.push(song4);

    var song5 = new Object();
    song5.id = 5;
    song5.name = "告白气球";
    song5.singer = "周杰伦";
    song5.img = "http://y.gtimg.cn/music/photo_new/T002R90x90M000003RMaRI1iFoYd.jpg";
    song5.url = "http://stream.qqmusic.tc.qq.com/137192078.mp3";
    song5.type = "1";
    songs.push(song5);

    return songs;

  }
})