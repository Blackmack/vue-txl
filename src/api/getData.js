/**
 * Created by Administrator on 2018/3/23.
 * 发起请求
 */
import axios from '../config/axios'
//登录
export const sysLogin = (payload)=>axios.post('api/user/login',payload)
//获取图片验证码
export const getCaptcha = (payload)=>axios.get('api/common/getCaptcha',{params:payload})
