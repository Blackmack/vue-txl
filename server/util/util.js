/**
 * Created by huangchuang on 2018/3/22 0022.
 * 辅助工具
 */
const util = {
  //输出返回的数据,封装数据格式为json
  jsonResponse: function(res,result) {
    if(typeof result ==='undefined') {
      res.json({
        code: -1,
        data:result,
        msg: '操作失败'
      })
    }
    else {
      res.json({
        code: 200,
        data: result,
        msg: '操作成功'
      })
    }
  },
  //断开数据库链接，并且返回执行结果
  closeConnection: function(res,result,connection) {
    //返回数据
    this.jsonResponse(res,result);
    //释放数据库链接
    connection.release();
  }
}
module.exports = util
