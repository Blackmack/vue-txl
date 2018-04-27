<template>
  <div class="main">
    <el-row :gutter="10">
      <el-col :span="4" class="user_nav">
        <el-menu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">我的动态</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="user_content">
          <router-view/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .user_nav{
    min-height: 720px;
    height: 720px;
  }
  .el-menu{
    height:100%;
    border:1px solid #eee;
  }
  .user_content{
    background-color: #fff;
    height: 720px;
    border:1px solid #eee
  }
</style>

