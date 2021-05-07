export default (url,data={},method="get") => {
  const BASEURL = "http://localhost:3000";
  return new Promise((resolve,reject) => {
    wx.request({
      url: BASEURL+url,
      data,
      method,
      success:(data) => {
        resolve(data.data)
      },
      fail:(err) => {
        reject(err)
      }
    })
  })
}