
<template>
  <div class="main">
    <div class="main-header">
      <div class="container">
        <div class="header-logo">
          <img class="logo-img" src="../images/logo.png">
          <span class="logo-text">MY JOB TANK, INC.</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="main-footer">
      <div class="container inner">
        <p>© 2017 MyJobTank. All Rights Reserved. Please find the Terms of Service and Privacy and Security Statement regarding MyJobTank's services.</p>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
import util from '@/libs/util.js'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    init() {}
  },
  watch: {},
  mounted() {},
  created() {}
}
</script>

<style lang="stylus">

.bg-gray
  background-color rgb(246, 248, 246)

.panel
  background: #FFFFFF
  box-shadow: 0 0 16px 0 #EEEEEE

@font-face {
  font-family: logo_font;
  src: url('https://static.wixstatic.com/ufonts/ebfd9f_596b56a55832429faf9b0a587e6640c8/woff/file.woff') format('woff'), url('https://static.wixstatic.com/ufonts/ebfd9f_596b56a55832429faf9b0a587e6640c8/woff2/file.woff2') format('woff2'), url('https://static.wixstatic.com/ufonts/ebfd9f_596b56a55832429faf9b0a587e6640c8/ttf/file.ttf') format('ttf');
}

html, body {
  width: 100%;
  // height: 100%;
  background: #f0f0f0;
  // overflow: hidden;
}

.lock-screen-back {
  border-radius: 50%;
  z-index: -1;
  box-shadow: 0 0 0 0 #667aa6 inset;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 3s;
}

.main-header {
  height: 72px;
  box-shadow: 0 0 4px 0 #EEEEEE;

  .container {
    padding: 0 15px;
  }
  .header-logo {
    display: inline-block;
    margin-top: 12px;
    .logo-img {
      width: 45px;
      height: 48px;
    }
    .logo-text {
      font-family: 'logo_font';
      font-size: 24px;
      vertical-align: top;
      margin-top: 15px;
      display: inline-block;
    }
  }
}

.main-footer {
  background: #FBFBFB;
  height: 72px;

  p {
    font-style: 12px;
    line-height: 72px;
    color: #999;
  }
}

.container {
  max-width: 1170px;
  margin: 0 auto;
}

.main {
  width: 100%;
  height: 100%;
  background: #FFF;

  .inner {
    padding: 0 15px;
  }
}
</style>
 