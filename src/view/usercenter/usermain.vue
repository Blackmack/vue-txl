<template>
  <div>
    <nav-header></nav-header>
    <user-main></user-main>
    <f-foot></f-foot>
  </div>
</template>
<script>
  import navheader from '@/components/navheader'
  import foot from '@/components/foot'
  import usermain from '@/components/usercenter_leftnav'
  export default {
    components: {
      'nav-header':navheader,
      'user-main':usermain,
      'f-foot':foot
    }
  }
</script>
<style>
  .el-row{
    margin: 1px 0 0 0;
  }
  /*******内容容器样式start*********/
  .main{
    width:1205px;
    margin:0 auto;
    margin-top: 2px;
  }
</style>
