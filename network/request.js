export default (url,data={},method="get") => {
  const BASEURL = "http://localhost:3000";
  return new Promise((resolve,reject) => {
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    wx.request({
      url: BASEURL+url,
      data,
      method,
      header:{
        cookie:wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').find(item => item.indexOf('MUSIC_U' )!= -1) : ''
      },
      success:(res) => {
        if(data.isLogin) wx.setStorageSync('cookies', res.cookies)
        resolve(res.data)
        wx.hideLoading()
      },
      fail:(err) => {
        reject(err)
      }
    })
  })
}