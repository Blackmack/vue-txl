/**
 * Created by Administrator on 2018/9/7.
 */
const express = require('express');
const router = express.Router();
const util=require('../util/util')

router.get('/getCaptcha',(req,res)=>{
   let code=util.generatorCaptcha(req,res);
    res.send({
      img: code.data
    });
})
module.exports = router;
