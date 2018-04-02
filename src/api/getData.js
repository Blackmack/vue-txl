/**
 * Created by Administrator on 2018/3/23.
 * 发起请求
 */
export axios from '../config/axios'

export const Login = (payload)=>axios.get('/api/user/login', payload)
