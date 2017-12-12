<template>
  <div class="panel panel-number-item">
    <div class="number-match">
      99%
    </div>
    <div class="number-body">
      <p class="name">NICOLAS GERMANN</p>
      <p class="desc">+989 506-1878</p>
      <p class="desc">aaron.hugenot@gmail.com</p>
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
@import '../../assets/stylus/base.styl'
.panel-number-item
  cursor: pointer
  padding 24px
  margin-bottom: 16px
  .number-match
    color #7CC633
    font-size 44px
    font-weight 700
    float left
    height 100px
    margin-right: 24px
  .number-body
    .name
      font-weight 700

</style>