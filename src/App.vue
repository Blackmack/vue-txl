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
    setTimeout(()=>{
        this.isshow=false
    },2010)
  }
}
</script>

<style lang="scss">
  @import './style/common';
  @keyframes progress {
    0%{width: 0}
    100%{width: 100%;}
  }
  .process{
    height: 2px;
    width: 0;
    background-color: #d6623d;
    animation: progress 2s;
  }

</style>
