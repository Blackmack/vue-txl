/**
 * Created by huangchuang on 2018/3/22 0022.
 */
const express = require('express');
const router = express.Router();
const mysql= require('mysql')
const $sql= require('../dao/impl/userMapImpl')

router.get('/', (req,res,next) => {
  res.json({a:1})
})
router.post('/login', (req,res,next) => {
   $sql.user.login(req,res,next)
})

module.exports = router;
