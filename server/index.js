/**
 * Created by huangchuang on 2018/3/21 0021.
 */
const fs  = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const user = require('./api/user')

app.get('/',function (req, res) {
  res.send('h')
})
app.use('/api/user',user)

app.listen(3000,()=>{
  console.log('server is start')
});