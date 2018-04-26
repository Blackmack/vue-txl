<template>
  <div class="login-main clearfix">
    <div class="left-img">
    </div>
    <div class="login-content">
      <h2 class="form-title">LOGIN</h2>
      <el-form :model="rulesForm" status-icon :rules="rules" ref="rulesForm" class="login-form">
        <el-form-item  prop="username">
          <i class="icon-user"></i>
          <el-input placeholder="用户名" type="text" v-model="rulesForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="icon-pwd"></i>
          <el-input placeholder="密码" type="password" v-model="rulesForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <!--<el-form-item  prop="imgCode">-->
          <!--<el-input placeholder="验证码" type="text" v-model="rulesForm.imgCode" auto-complete="off"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item>
          <el-button plain class="login-submit" @click="submitForm('rulesForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data() {
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      }
//      var validatePass3 = (rule, value, callback) => {
//        if (value === '') {
//          callback(new Error('请输入验证码'));
//        }
//        else {
//          callback();
//        }
//      }
      return {
        rulesForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: validatePass1, trigger: 'blur'}
          ],
          password: [
            {validator: validatePass2, trigger: 'blur'}
          ]
//          ,
//          imgCode: [
//            {validator: validatePass3, trigger: 'blur'}
//          ]
        }
      }
    },
    methods: {
      ...mapActions(['Login']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.Login(this.rulesForm).then((data)=>{
                console.log(data);
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
  }
  #app{
    height:100%;
  }
  .login-main {
    height: 100%;
    .left-img {
      width: 39%;
      height: 99%;
      float: left;
      text-align:center;
      vertical-align:middle;
      background:url("../../assets/banner4.jpg") no-repeat center;
    }
    .login-content {
      width: 60%;
      height: 100%;
      float: left;
      position: relative;
      border-style:solid;
      border-width:0 0 0 1px;
      border-color:#ccc;
      .form-title {
        text-align: center;
        width: 500px;
        margin:0 auto;
        padding:20% 0 32px;
        font-size:24px;
      }
      .login-form {
        width: 450px;
        margin:0 auto;
        input {
          border-radius: 0;
          border-width: 0 0 1px 0;
          padding-left:40px;
        }
        .icon-user{
          display:block;
          width:20px;
          height:20px;
          position: absolute;
          left:8px;
          top:10px;
          background:url("../../assets/icon/icon-user.png") no-repeat center;
          z-index:1;
        }
        .icon-pwd{
          display:block;
          width:20px;
          height:20px;
          position: absolute;
          left:8px;
          top:10px;
          background:url("../../assets/icon/icon-pwd.png") no-repeat center;
          z-index:1;
        }
        .login-submit {
          width: 100%;
          margin-top:30px;
        }
      }
    }
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
