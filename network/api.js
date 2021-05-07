import request from './request'

/* 请求轮播图数据  接口地址 :  /banner  get  type 1:Android */
export const reqBanners = (type) => request('/banner',{type})

/* 推荐歌曲   /personalized  get   limit  max:30 */
export const reqRecommend = (limit) => request('/personalized',{limit})

/* 排行榜  /top/list  get idx:20中类型排行榜  */
export const reqTop = (idx) => request('/top/list',{idx})

/* 登录    /login/cellphone  get */
export const reqLogin = ({phone,password,isLogin}) => request('/login/cellphone',{phone,password,isLogin})

/* 获取视频导航栏标签列表 接口地址: /video/group/list get */
export const reqVideoNavList = () => request('/video/group/list')

/* 获取视频标签下对应的视频数据    接口地址: /video/group   get  标签id */
export const reqVideoGroup = (id) => request('/video/group',{id})


