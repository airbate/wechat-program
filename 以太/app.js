// 小程序入口文件
App({
  onLaunch(options) {
    // 初始化云开发
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'math-practice-env', // 云环境ID
        traceUser: true
      })
    }
    // 小程序初始化时执行
    console.log('小程序初始化', options)
  },
  onShow(options) {
    // 小程序启动或从后台进入前台时触发
    console.log('小程序显示', options)
  },
  onHide() {
    // 小程序从前台进入后台时触发
    console.log('小程序隐藏')
  },
  onError(error) {
    // 小程序发生脚本错误时触发
    console.error('小程序错误:', error)
  },
  globalData: {
    // 全局数据
    userInfo: null
  }
})
