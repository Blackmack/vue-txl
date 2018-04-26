/**
 * Created by huangchuang on 2018/3/22 0022.
 */
const mysql = require('mysql')
const $conf = require('../../config/db')
const $sql = require('../map/userMap')
const $util = require('../../util/util')

const  pool = mysql.createPool($conf.mysql)

module.exports = {
  user: {
    login: (req, res, next) => {
      pool.getConnection((err,connection) => {
        let  param=req.query
        connection.query($sql.user.login,[param.username,param.password],(err,result) => {
          $util.closeConnection(res,result,connection)
          // if(result.length!=0){
          //   if(result[0].Status!=-2){
          //
          //   }
          // }
        })
      })
    }
  }
}
