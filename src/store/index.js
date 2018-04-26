/**
 * Created by Administrator on 2018/3/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
const  state = {
  user:{}
}
const store = new Vuex.Store({
    state,
  actions,
  mutations
})
export default store
