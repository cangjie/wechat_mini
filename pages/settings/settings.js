// pages/settings/settings.js
var app = getApp()

function getUserInfo(currentPage) {
  wx.getUserInfo({
    success: res => {
      app.globalData.userInfo = res.userInfo
      currentPage.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
    }
  })
}

function getSessionKey(app) {
  wx.login({
    complete: (res) => {
      app.globalData.code = res.code
      wx.request({
        url: 'https://mini.luqinwenda.com/api/get_login_info.aspx?code=' + res.code,
        data:{},
        success:(res) => {
          app.globalData.session_key = res.data.session_key
          app.globalData.open_id = res.data.openid
          app.globalData.union_id = res.data.unionid
        }
      })
    }
  })
}

function login(currentPage) {
  if (app.globalData.session_key == '') {
    getSessionKey(app)
  }
  wx.checkSession({
    success: (res) => {
      currentPage.setData({
        sessionOK: true,
        sessionKey: app.globalData.session_key
      }) 
      getUserInfo(currentPage)
    },
    fail: (res) => {
      getSessionKey(app)
      currentPage.setData({
        sessionOK: true,
        sessionKey: app.globalData.session_key
      }) 
      getUserInfo(currentPage)
    }
  })
}

Page({

  /**
   * Page initial data
   */
  data: {
    session_ok: false,
    sessionKey:'',
    cell: "",
    hasUserInfo:false,
    userInfo:{},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    login(this)
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
    login(this)
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
  },

  getPhoneNumber(e) {
    var sessionKey = app.globalData.session_key.trim()
    var data = e.detail.encryptedData.trim()
    var iv = e.detail.iv.trim()
    var url = 'https://mini.luqinwenda.com/api/decode_encrypted_data.aspx'
    wx.request({
      url: url,
      data:{
        sessionkey: sessionKey,
        encdata: data,
        iv: iv
      },
      success:(res)=>{
        app.globalData.cell = res.data.purePhoneNumber
        this.setData({
          cell: res.data.purePhoneNumber
        })
      }
    })
  }
})