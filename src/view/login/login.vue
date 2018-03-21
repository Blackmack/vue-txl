<template>
  <div class="login-content">
    <el-form :model="rulesForm" status-icon :rules="rules" ref="rulesForm" label-width="100px" class="login-form">
      <el-form-item label="用户名" prop="userName">
        <el-input type="text"  v-model="rulesForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="rulesForm.pwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="imgCode">
        <el-input type="text" v-model="rulesForm.imgCode" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-submit" @click="submitForm('rulesForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
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
      var validatePass3 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        }
        else {
          callback();
        }
      }
      return {
        rulesForm: {
          userName: '',
          pwd: '',
          imgCode: ''
        },
        rules: {
          userName: [
            {validator: validatePass1, trigger: 'blur'}
          ],
          pwd: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          imgCode: [
            {validator: validatePass3, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss">
  .login-content {
    width: 800px;
    margin: 0 auto;
    position: relative;
    .login-form {
      width: 400px;
      li {
        margin: 10px 0;
        input {
          border-radius: 0;
          border-width: 0 0 1px 0;
        }
      }
      .login-submit {
        width: 100%;
      }
    }
  }

</style>
