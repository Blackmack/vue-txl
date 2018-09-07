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
        let  param=req.body
        connection.query($sql.user.login,[param.username,param.password],(err,result) => {
          let resultStr=JSON.stringify(result)
          let resData=JSON.parse(resultStr)
          if(!resData.length){
            resData.msg='用户或密码错误'
          }
          $util.closeConnection(res,resData,connection)
        })
      })
    }
  }
}
