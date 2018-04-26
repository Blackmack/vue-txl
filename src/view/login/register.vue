<template>
  <div>
    <el-form :model="registerModel" status-icon ref="ruleForm2" label-width="100px">
      <el-form-item label="用户名" prop="FName" :rules="[ { required: true, message: '请输入用户名', trigger: 'blur' }]">
        <el-input type="text" prop="registerModel.FName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="FPwd" :rules="[ { required: true, message: '请输入密码', trigger: 'blur' }]">
        <el-input type="password" v-model="registerModel.FPwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="FTel">
        <el-input v-model.number="registerModel.FTel"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="Fqq">
        <el-input v-model.number="registerModel.Fqq"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="Fwx">
        <el-input v-model.number="registerModel.Fwx"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
      data(){
          return {
              registerModel:{
                  FName:'',
                  FPwd:'',
                  FTel:'',
                  Fqq:'',
                  Fwx:''
              }
          }
      }
  }
</script>
