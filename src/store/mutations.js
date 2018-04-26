/**
 * Created by Administrator on 2018/3/22.
 */
import * as types from './mutation-types'
const mutations = {
  [types.LOGIN](state,data) {
      state.user = data;
  }
}
export default mutations
