// pages/settings/settings.js
Page({

  /**
   * Page initial data
   */
  data: {
    list: [{
      "pagePath": "/pages/real_index/real_index",
      "text": "对话",
      "iconPath": "/images/tabbar_icon_chat_default.png",
      "selectedIconPath": "/images/tabbar_icon_chat_active.png"
    },
    {
      "pagePath": "/pages/settings/settings",
      "text": "设置",
      "iconPath": "/images/tabbar_icon_setting_default.png",
      "selectedIconPath": "/images/tabbar_icon_setting_active.png"
    }]
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