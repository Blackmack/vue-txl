/**
 * Created by huangchuang on 2018/3/22 0022.
 * 辅助工具
 */
const svgCaptcha = require('svg-captcha');
const router = require('express').Router();
const util = {
  //输出返回的数据,封装数据格式为json
  jsonResponse: function(res,result) {
    console.log(result.length)
    if(!result.length) {
      res.json({
        code: -1,
        data:result.data,
        msg: result.msg
      })
    }
    else {
      res.json({
        code: 1,
        data: result[0],
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
  },
  //生成图片验证码
  generatorCaptcha(req,res){
    var option = req.query;
    console.log(option)
    // 验证码，有两个属性，text是字符，data是svg代码
    var code = svgCaptcha.create(option);
    // 保存到session,忽略大小写
    console.log(req)
    // req.session["randomcode"] = code.text.toLowerCase();
    return code
  }
}
module.exports = util
