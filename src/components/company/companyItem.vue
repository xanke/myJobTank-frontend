<template>
  <div class="panel panel-company-item">
    <a href="#/dashboard/joborder/1" target="blank" class="panel-body">
      <div class="company-logo">
        <img src="" alt="" class="logo">
      </div>
      <div class="company-name">
        Machine Learning Engineer<span class="tag">Tech</span>
      </div>
      <div class="company-desc">
        <p class="desc-h1">Google</p>
        <p class="desc-h2">San Francisco</p>
      </div>
    </a>
    <div class="panel-footer">
      <p class="desc">16M ago</p>
      <div class="btn-group">

        <a href="" class="btn-action">
          <Icon class="btn-icon" type="edit"></Icon>
        </a>
        <a href="" class="btn-action">
          <Icon class="btn-icon"  type="trash-b"></Icon>
        </a>

      </div>
    </div>
  </div>
</template>

<script type="text-/ecmascript-6">
export default {
  props: {},
  data() {
    return {}
  },
  mounted() {},
  computed: {},
  components: {},
  filters: {},
  methods: {},
  created() {}
}
</script>

<style lang="stylus">
@import '../../assets/stylus/base.styl';





.panel-company-item
  margin-bottom 20px
  padding 30px
  padding-bottom 20px
  padding-right: 20px

  .btn-group
    text-align: right
    .btn-action
      color #BBB
      width 24px
      height 24px
      text-align: center
      line-height 24px
      font-size 16px
      display inline-block
      &:hover
        color color-main
  .company-logo
    width 64px
    height 64px
    border-radius 100%
    background #CCC
    margin-bottom 12px
  .company-name
    color #000000
    font-size 24px
    line-height 32px
    margin-bottom 16px
    .tag
      color color-main
      background rgba(color-main, .1)
      font-size 12px
      font-weight 600
      padding 5px
      margin-left 5px
      vertical-align top
  .company-desc
    color #666666
    .desc-h1
      font-size 18px
      margin-bottom 5px
    .desc-h1
      font-size 14px
  .panel-footer
    padding-top 25px
    .desc
      color #666666
      font-size 14px
      float left


</style>