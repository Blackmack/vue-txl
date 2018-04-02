<template>
  <div>
    <ul class="top-user">
      <li><router-link to="login">登录</router-link></li>
      <li><a href="">注册</a></li>
    </ul>
    <div class="top-nav-wrap">
      <nav class="top-nav">
        <ul>
          <li class="active"><a href="">首页</a></li>
          <li><a href="">动态</a></li>
          <li><a href="">我的家乡</a></li>
        </ul>
      </nav>
    </div>
  </div>

</template>
<style>
  .top-user{
    height:30px;
    line-height:30px;
    background-color:#606266;
    font-size:14px;
    padding-right:30px;
  }
  .top-user li{
    float: right;
    margin-left:10px;
  }
  .top-user li a{
    color:#fff;
  }
  .top-nav-wrap{
    border-bottom:1px solid #ccc;
  }
  .top-nav{
    width:1205px;
    margin:0 auto;
    height:100px;
    line-height:100px;
  }
  .top-nav li{
    float:left;
    width:80px;
    height:100%;
    margin-left:60px;
    text-align: center;
  }
  .top-nav li a{
      color:#000;
  }
  .top-nav li a:hover{
     text-decoration: none;
  }
  .top-nav li:hover,.top-nav li.active{
    border-bottom:2px solid #d6623d;
  }
</style>
