/**
 * Created by huangchuang on 2018/3/23 0023.
 */
import {Login} from '../../api/getData'

const actions = {
   login({commit,state},payload) {
     let res= Login(payload);

     return res;
   }
}
export default actions
