<template>
  <div>
    <div class="top-nav-wrap">
      <nav class="top-nav clearfix">
        <ul class="clearfix fl">
          <li class="active"><router-link to="/">首页</router-link></li>
          <li><router-link to="/DT">动态</router-link></li>
          <li><router-link to="/DZ">段子</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
  import raside from '../components/aside.vue'
  export default {
    components: {
      'r-aside':raside
    }
  }
</script>
<style>
  /*******导航样式start******/
  .top-user{
    height:30px;
    line-height:30px;
    background-color:#f5f5f5;
    font-size:14px;
    padding-right:30px;
  }
  .top-user li{
    float: right;
    margin-left:10px;
  }
  .top-user li a{
    color:#6c6c6c;
  }
  .top-nav-wrap{
    border-bottom:1px solid #f1f1f1;
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
    box-sizing: border-box;
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
  /*******导航样式end******/

  /*******内容容器样式start*********/
  .main{
    background-color:#f8f8f8;
    width:1205px;
    margin:0 auto;
    margin-top: 2px;
  }
  .content-wrap{
    width:800px;
    height:100%;
    float: left;
    background-color: #fff;
    padding:0 40px 40px 0;
  }
  /*******内容容器样式end*********/
</style>
