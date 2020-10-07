//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var jobs = wx.getStorageSync('jobs');
    if (!jobs) {
      jobs = this.loadJobs();
      wx.setStorageSync('jobs', jobs);
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
  loadJobs: function () {
    var jobs = new Array();
    var job = new Object();
    job.id = "1";
    job.pic = "/images/icon/qunar.jpg";
    job.name = "Java";
    job.company = "去哪网儿";
    job.province = "北京";
    job.address = "苏州街";
    job.year = "3-5年";
    job.education = "本科";
    job.salary = "15k-25k";
    job.companyType = "上市公司";
    job.person = "2000人以上";
    job.business = "移动互联网";
    job.date = "02月07日";
    jobs.push(job);

    var job1 = new Object();
    job1.id = "2";
    job1.pic = "/images/icon/alibaba.jpg";
    job1.name = "高级Java工程师";
    job1.company = "阿里巴巴集团";
    job1.province = "北京";
    job1.address = "大望路";
    job1.year = "3-5年";
    job1.education = "本科";
    job1.salary = "20k以上";
    job1.companyType = "上市公司";
    job1.person = "2000人以上";
    job1.business = "移动互联网、电子商务";
    job1.date = "02月14日";
    jobs.push(job1);

    var job2 = new Object();
    job2.id = "3";
    job2.pic = "/images/icon/yonghong.jpg";
    job2.name = "高级Java工程师";
    job2.company = "永洪科技";
    job2.province = "北京";
    job2.address = "朝阳区";
    job2.year = "3-5年";
    job2.education = "本科";
    job2.salary = "15k-25k";
    job2.companyType = "C轮";
    job2.person = "150-500人";
    job2.business = "企业服务、数据服务";
    job2.date = "03月22日";
    jobs.push(job2);

    var job3 = new Object();
    job3.id = "4";
    job3.pic = "/images/icon/baoku.jpg";
    job3.name = "Java";
    job3.company = "宝库在线";
    job3.province = "北京";
    job3.address = "酒仙桥";
    job3.year = "3-5年";
    job3.education = "本科";
    job3.salary = "15k-20k";
    job3.companyType = "A轮";
    job3.person = "150-500人";
    job3.business = "移动互联网、电子商务";
    job3.date = "03月21日";
    jobs.push(job3);

    var job4 = new Object();
    job4.id = "5";
    job4.pic = "/images/icon/xmjr.jpg";
    job4.name = "Java高级工程师";
    job4.company = "小马金融";
    job4.province = "北京";
    job4.address = "魏公村";
    job4.year = "3-5年";
    job4.education = "本科";
    job4.salary = "15k-25k";
    job4.companyType = "未融资";
    job4.person = "150-500人";
    job4.business = "金融";
    job4.date = "03月21日";
    jobs.push(job4);

    var job5 = new Object();
    job5.id = "6";
    job5.pic = "/images/icon/honghua.jpg";
    job5.name = "Java";
    job5.company = "泓华国际医疗";
    job5.province = "北京";
    job5.address = "亚运村";
    job5.year = "3-5年";
    job5.education = "本科";
    job5.salary = "15k-25k";
    job5.companyType = "未融资";
    job5.person = "150-500人";
    job5.business = "医疗健康";
    job5.date = "03月21日";
    jobs.push(job5);

    var job6 = new Object();
    job6.id = "7";
    job6.pic = "/images/icon/bdrk.jpg";
    job6.name = "Java开发工程师";
    job6.company = "博大融科";
    job6.province = "北京";
    job6.address = "苏州街";
    job6.year = "3-5年";
    job6.education = "本科";
    job6.salary = "12k-24k";
    job6.companyType = "未融资";
    job6.person = "15-50人";
    job6.business = "移动互联网、社交网络";
    job6.date = "03月20日";
    jobs.push(job6);
    return jobs;
  }
})