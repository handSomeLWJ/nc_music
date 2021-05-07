import { reqBanners,reqRecommend,reqTop } from '../../network/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
      bannerList:[],//banner数据
      recommendList:[],//推荐歌曲数据
      topList:[],//排行榜数据
    },
    /* 获取banner数据 */
    async getBanner() {
        const {banners:bannerList} = await reqBanners(1)
        this.setData({bannerList})
    },
    /* 获取推荐歌曲数据 */
    async getRecommend() {
        const {result:recommendList} = await reqRecommend(10)
        this.setData({recommendList})
    },
    /* 获取前三项排行榜 */
    async getTop(){
        let dataTop = []
        for(let i = 0; i < 3; i++){
        const {playlist} = await reqTop(i)
        let {name,id,tracks} = playlist
        tracks = tracks.slice(0,3)
        dataTop.push({name,id,tracks})
        this.setData({topList:dataTop})
    }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getBanner()
        this.getRecommend()
        this.getTop()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})