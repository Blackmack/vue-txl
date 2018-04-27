<template>
  <div>
    <ul class="top-user">
      <li><a href="/login">登录</a></li>
      <li><a href="/register">注册</a></li>
    </ul>
     <nav-header></nav-header>
    <div class="main clearfix">
      <div class="content-wrap">
        <div class="list-item">
          <div class="item-title">
            <h2>我为什么要建这个站点</h2>
            <div class="time">2018.04.07&nbsp;&nbsp;<span class="yuan">原创</span>&nbsp;
              <span class="zan">hot</span>
            </div>
          </div>
          <div class="item-desc">因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，</div>
        </div>
        <div class="list-item">
          <div class="item-title">
            <h2>我为什么要建这个站点</h2>
            <div class="time">2018.04.07&nbsp;&nbsp;<span class="yuan">原创</span>&nbsp;
              <span class="zan">hot</span>
            </div>
          </div>
          <div class="item-desc">因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，</div>
        </div>
        <div class="list-item">
          <div class="item-title">
            <h2>我为什么要建这个站点</h2>
            <div class="time">2018.04.07&nbsp;&nbsp;<span class="yuan">原创</span>&nbsp;
              <span class="zan">hot</span>
            </div>
          </div>
          <div class="item-desc">因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，</div>
        </div>
        <div class="list-item">
          <div class="item-title">
            <h2>我为什么要建这个站点</h2>
            <div class="time">2018.04.07&nbsp;&nbsp;<span class="yuan">原创</span>&nbsp;
              <span class="zan">hot</span>
            </div>
          </div>
          <div class="item-desc">因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，</div>
        </div>
        <div class="list-item">
          <div class="item-title">
            <h2>我为什么要建这个站点</h2>
            <div class="time">2018.04.07&nbsp;&nbsp;<span class="yuan">原创</span>&nbsp;
              <span class="zan">hot</span>
            </div>
          </div>
          <div class="item-desc">因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，因为我想建就建，</div>
        </div>
        <router-view/>
      </div>
      <r-aside></r-aside>
    </div>
     <f-foot></f-foot>
  </div>
</template>
<script>
  import navheader from '../components/navheader'
  import raside from '@/components/aside'
  import foot from '../components/foot'
  export default {
    components: {
      'nav-header':navheader,
      'f-foot':foot,
      'r-aside':raside
    }
  }
</script>
