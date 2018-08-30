<template>
  <div class="process"></div>
</template>
<style>
  .process{
    height: 2px;
    width: 0;
    background-color:#ffff00;
    animation: process 1s;
  }
  @keyframes progress {
    0%{width: 0}
    100%{width: 100%;}
  }
</style>
