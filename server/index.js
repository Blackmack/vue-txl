/**
 * Created by huangchuang on 2018/3/21 0021.
 */
const fs  = require('fs');
const path = require('path');
const express = require('express');
const bodyParser=require('body-parser')
const app = express();
const user = require('./api/user')
const common = require('./api/common')
app.use(bodyParser.json());

app.use('/user',user)
app.use('/common',common)
app.listen(3002,()=>{
  console.log('server is start')
});
