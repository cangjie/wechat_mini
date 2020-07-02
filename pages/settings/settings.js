// pages/settings/settings.js
var app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    session_ok: false,
    cell: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    wx.checkSession({
      success: (res) => {
        var cell = app.globalData.cell.trim()
        this.setData({
          session_ok: true,
          cell: cell
        })
      },
      fail: (res) => {
        wx.login({
          complete: (res) => {
            this.globalData.code = res.code
            wx.request({
              url: 'https://mini.luqinwenda.com/api/get_login_info.aspx?code=' + res.code,
              data:{},
              success:(res) => {
                /*
                this.globalData.session_key = res.data.session_key
                this.globalData.open_id = res.data.openid
                this.globalData.union_id = res.data.unionid
                */
              }
            })
            wx.getUserInfo({
              complete: (res) => {
                //this.globalData.userInfo = res.userInfo
              },
            })
          }
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  tabChange(e) {
    console.log('tab change', e)
  }
})