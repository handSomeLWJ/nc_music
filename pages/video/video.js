import {reqVideoNavList,reqVideoGroup} from '../../network/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoNavList:[],//视频标签列表
    currentNavId:'',//当前点中的导航栏id
    videoList:{},//视频ground
    currentVideoVid:'',//当前播放视频vid
    isNew:false,//视频刷新标志
  },
  /* 请求导航栏数据 */
async getVideoNavList(){
  const {data} = await reqVideoNavList()
  this.setData({videoNavList:data.slice(0,14),currentNavId:data[0].id})
  //获取到navid后调取视频group
  this.getVideoGroup()
},
/* 点击每一项导航栏 */
clickNavItem(e){
  this.setData({currentNavId:e.currentTarget.dataset.id,videoList:{}})
  this.getVideoGroup()
},
/* 获取视频组 */
async getVideoGroup(){
  const res = await reqVideoGroup(this.data.currentNavId)
  if(res.code !== 200) return wx.navigateTo({
    url: '/pages/login/login',
  })
  console.log(res);

let videoList = res.datas.map((item, index) => {
  item.id = index
  return item
})
this.setData({ videoList,isNew:false})
console.log(this.data.videoList);
},

/* 点击图片播放视频 */
videoPlay(e){
  this.setData({currentVideoVid:e.currentTarget.dataset.vid})
},
/* 下拉刷新视频 */
bindrefresherrefresh(){
  this.getVideoGroup()
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoNavList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})