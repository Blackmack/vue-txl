<template>
  <div id="app">
    <div class="process" v-show="isshow"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
          isshow:true
      }
  },
  mounted(){
  }
}
</script>

<style lang="scss">
  @import './style/common.scss';
  @keyframes progress_bar {
    0%  {width: 0%}
    100%  {width:100%}
  }
  .process{
    position: absolute;
    top:0;
    height: 2px;
    background-color: #d6623d;
    animation: progress_bar 2s;
  }

</style>
