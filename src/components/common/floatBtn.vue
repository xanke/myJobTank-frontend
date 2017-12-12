<template>
  <a class="btn-float">
    <Icon type="ios-plus-empty"></Icon>
  </a>
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

  .btn-float
    width 45px
    height 45px
    line-height 45px
    position absolute
    text-align center
    border-radius 100%
    background color-main
    color #FFF
    font-size 35px
    &:hover
      color #FFF

</style>