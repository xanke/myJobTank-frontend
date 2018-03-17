
<template>
  <div class="main">
    <div class="main-header">
      <div class="container">
        <div class="header__logo">
          <img class="logo-text" src="../images/logo-text.png">
          <!-- <span class="logo-text">MY JOB TANK, INC.</span> -->
        </div>

        <div class="header__user">
          <Dropdown>
            <a href="javascript:void(0)">
              <img class="avatar" src="../images/avatar.png" alt="">
              <Icon type="chevron-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>
                <Icon type="wl-logout"></Icon>Login out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
    init() { }
  },
  watch: {},
  mounted() { },
  created() { }
}
</script>

<style lang="stylus">

.bg-gray {
  background-color: rgb(246, 248, 246);
}

.panel {
  background: #FFFFFF;
  box-shadow: 0 0 16px 0 #EEEEEE;
}

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
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  background: #FFF;

  .container {
    padding: 0 15px;
  }

  .header__user {
    float: right;
    margin-top: 15px;
    color: #D8D8D8;

    .avatar {
      width: 38px;
      height: 38px;
    }

    a .ivu-icon {
      color: #D8D8D8;
      font-size: 14px;
      margin-left: 30px;
      float: right;
      line-height: 38px;
    }

    .ivu-select-dropdown {
      border-radius: 4px;
    }

    .ivu-dropdown-item {
      font-weight: 600;
      padding: 0px;
      line-height: 48px;
      padding: 0 16px;

      .ivu-icon {
        line-height: 48px;
        font-size: 20px;
        margin-right: 10px;
        float: left;
      }
    }
  }

  .header__logo {
    display: inline-block;

    .logo-img {
      width: 45px;
      height: 48px;
    }

    .logo-text {
      // width: 45px;
      height: 48px;
    }

    .logo-text {
      font-family: 'logo_font';
      font-size: 24px;
      vertical-align: top;
      margin-top: 12px;
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
  background: rgb(246, 248, 246);

  .inner {
    padding: 0 15px;
  }

  input, .ivu-select-selection {
    background: rgba(0, 0, 0, 0);
  }
}
</style>
