/**
 * Created by Administrator on 2018/3/23.
 * 发起请求
 */
import axios from '../config/axios'

export const sysLogin = (payload)=>axios.post('api/user/login',payload)
