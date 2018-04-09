<template>
  <div>
    <ul class="top-user">
      <li><a href="/login">登录</a></li>
      <li><a href="">注册</a></li>
    </ul>
     <nav-header></nav-header>
     <f-foot></f-foot>
  </div>
</template>
<script>
  import navheader from '../components/navheader'
  import foot from '../components/foot'
  export default {
    components: {
      'nav-header':navheader,
      'f-foot':foot
    }
  }
</script>
