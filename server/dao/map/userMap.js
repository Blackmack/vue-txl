/**
 * Created by huangchuang on 2018/3/22 0022.
 */
const userSqlMap = {
  user:{
    //登录
    login: 'select * from t_user where FuserName=? and Fpassword=?'
  }
}
module.exports = userSqlMap
