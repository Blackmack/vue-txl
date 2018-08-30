/**
 * Created by Administrator on 2018/3/22.
 */
import * as types from './mutation-types'
import {sysLogin} from '../api/getData'

const actions = {
  async Login({commit,state},payload){
    let res = await sysLogin(payload)
    commit(types.LOGIN,res.data)
    return res.data
  }
}
export default actions
