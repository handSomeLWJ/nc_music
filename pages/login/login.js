import {reqLogin} from '../../network/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phone: '',
        password: '',
    },

    /* 监听输入框数据 */
    changeInput(e) {
        const { type } = e.currentTarget.dataset;
        if (type === 'phone') {
            // 手机号
            this.setData({ phone: e.detail.value })
        } else {
            //密码
            this.setData({ password: e.detail.value })
        }
    },

    /* 点击登录 */
    async clickLogin() {
      const {phone,password} = this.data
      if(phone.trim().length <= 0 || password.trim().length <= 0) return wx.showToast({
        title: '手机号或者密码不能为空',
        icon:'none'
      })
      let reg = /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/;
      if(!reg.test(phone)) return wx.showToast({
        title: '手机号格式不正确，请输入正确的手机号',
        icon:'none'
      })
      const {profile} = await reqLogin({phone,password,isLogin:true})
      wx.setStorageSync('userInfo', profile)
      // wx.switchTab({
      //   url: '../personal/personal',
      // })
      wx.navigateBack({
        delta: 1,
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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