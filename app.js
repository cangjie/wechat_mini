//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    /*
    wx.login({
      complete: (res) => {
        this.globalData.code = res.code
        wx.request({
          url: 'https://mini.luqinwenda.com/api/get_login_info.aspx?code=' + res.code,
          data:{},
          success:(res) => {
            this.globalData.session_key = res.data.session_key
            this.globalData.open_id = res.data.openid
            this.globalData.union_id = res.data.unionid
          }
        })
        wx.getUserInfo({
          complete: (res) => {
            this.globalData.userInfo = res.userInfo
          },
        })
      },
    })*/
  },
  globalData: {
    userInfo: null,
    code:'',
    cell:'',
    open_id:'',
    union_id:'',
    session_key:''
  }
})