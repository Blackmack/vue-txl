<template>
  <div class="login-main clearfix">
    <div class="left-img"></div>
    <div class="login-content">
      <h2 class="form-title">REGISTER|注册</h2>
      <el-form :model="rulesForm" status-icon :rules="rules" ref="rulesForm" class="login-form">
        <el-form-item prop="username">
          <i class="icon-user"></i>
          <el-input placeholder="用户名" type="text" v-model="rulesForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i class="icon-pwd"></i>
          <el-input placeholder="密码" type="password" v-model="rulesForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <i class="icon-pwd"></i>
          <el-input placeholder="再次输入密码" type="password" v-model="rulesForm.password2" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="imgCode">
          <el-input placeholder="验证码" type="text" v-model="rulesForm.imgCode" auto-complete="off"></el-input>
          <div class="captcha" id="captcha" @click="getImageCode"></div>
        </el-form-item>
        <el-form-item>
          <el-button plain class="login-submit" @click="submitForm('rulesForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data() {
      return {
        rulesForm: {
          username: '',
          password: '',
          password2:''
        },
        rules: {
          username:[
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
          password2:[
            { required: true, message: '请再次输入密码', trigger: 'blur' }
          ],
          imgCode:[
            { required: true, message: '请再次输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    mounted(){
        this.getImageCode();
    },
    methods: {
      ...mapActions(['Login','getCaptchaCode']),
      getImageCode(){
          let param={
            size: 4,  //验证码长度
            width: 120,
            height: 38,
            ignoreChars:'0o1i',
            noise: 5,
            background: "#fff",//干扰线条数
            fontSize: 40,
            color: true // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
          }
          this.getCaptchaCode(param).then((data)=>{
              console.log(data)
              let captchaDom = document.getElementById('captcha')
              captchaDom.innerHTML=data.img
          })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.Login(this.rulesForm).then((data) => {
              if (data.code == 1) {
                location.href = '/userCenter'
              }
              else {
                this.$message.error(data.msg);
              }
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

  #app {
    height: 100%;
  }

  .login-main {
    height: 100%;

  .left-img {
    width: 30%;
    height: 100%;
    float: left;
    text-align: center;
    vertical-align: middle;
    background: url("../../assets/banner4.jpg") no-repeat center;
  }

  .login-content {
    width: 60%;
    height: 100%;
    float: left;
    position: relative;
    border-style: solid;
    border-width: 0 0 0 1px;
    border-color: #ccc;
    padding:10% 0;
    box-sizing:border-box;
  .form-title {
    text-align: center;
    width: 500px;
    margin: 0 auto;
    font-size: 24px;
  }

  .login-form {
    width: 450px;
    margin: 0 auto;

      input {
        border-radius: 0;
        border-width: 0 0 1px 0;
        padding-left: 40px;
      }

      .icon-user {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 8px;
        top: 10px;
        background: url("../../assets/icon/icon-user.png") no-repeat center;
        z-index: 1;
      }

      .icon-pwd {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        left: 8px;
        top: 10px;
        background: url("../../assets/icon/icon-pwd.png") no-repeat center;
        z-index: 1;
      }

      .login-submit {
        width: 100%;
        margin-top: 30px;
      }
      .captcha{
        width: 120px;
        position: absolute;
        right: 0;
        top:0;
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
