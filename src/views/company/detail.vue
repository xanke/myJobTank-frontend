<template>
  <div class="container">
    <transition name="fade">
      <div class="modal" v-show="showNumber">
        <a class="close" @click="showNumber = false">
          <Icon type="ios-close-empty"></Icon>
        </a>
        <div class="container">
          <div class="number-detail">
            <div class="detail-top">
              <h3 class="title">Resume</h3>
              <a class="download">Download PDF<Icon type="wl-download"></Icon></a>
            </div>
            <div class="detail-body">
              <div class="number-first">
                <div class="btn-nav btn-left">
                  <Icon type="chevron-left"></Icon>
                </div>
                <div class="btn-nav btn-right">
                  <Icon type="chevron-right"></Icon>
                </div>
                <div class="number-info">


                  <h3 class="name">JOHN B. ABOLARIN</h3>
                  <p class="s_title">Machine Learning Engineer</p>
                  <p class="desc">+1 2174111001</p>
                  <p class="desc">jabolarin@comcast.net</p>


                  <div class="number-info-action">

                    <div class="btn-action btn-left">
                      <Icon type="star"></Icon>
                    </div>
                    <div class="btn-action btn-right">
                      <Icon type="thumbsdown"></Icon>
                    </div>
                  </div>


                </div>
              </div>
              <div class="number-body">

                <Row :gutter="32">
                  <Col span="16">
                    <div class="number-desc-wrap">

                      <Icon class="title-icon" type="wl-clock"></Icon>
                      <h3 class="title">Experience</h3>
                      <div class="desc-group">
                        <p>Oct 2015 to Date</p>
                        <p class="em">Boeing Company, Everett, WA</p>
                        <p class="strong p_bottom">Sr. Business Operations Manager New Airplane Development for the final 787 Market Launch</p>
                        <p>Manage and Support the Services executive leadership as the Sr. Business Operations Manager leading projects and efforts requiring collaboration across the 787 Program Life Cycle Product Engineering Development Teams and Commercial Aviation ( words limit: 680 )</p>
                      </div>

                      <div class="desc-group">
                        <p>Oct 2015 to Date</p>
                        <p class="em">Boeing Company, Everett, WA</p>
                        <p class="strong p_bottom">Sr. Business Operations Manager New Airplane Development for the final 787 Market Launch</p>
                        <p>Manage and Support the Services executive leadership as the Sr. Business Operations Manager leading projects and efforts requiring collaboration across the 787 Program Life Cycle Product Engineering Development Teams and Commercial Aviation ( words limit: 680 )</p>
                      </div>
                    </div>
                  </Col>
                  <Col span="8">

                    <div class="number-desc-wrap">
                      <Icon class="title-icon" type="wl-clock"></Icon>
                      <h3 class="title">Summary</h3>
                        <p class="em">Technology lover with more then 15 years in variety of positions, technical through IT architect to leadership, Identify business requirement, examine technology innovation and lead groups to deliver new and complex high quality solutions, utilize in-depth knowledge of leading-edge products and technology in conjunction with industry and business needs</p>
                    </div>

                    <div class="number-desc-wrap">

                      <Icon class="title-icon" type="wl-light"></Icon>
                      <h3 class="title">Skill</h3>
                      <p class="em"></p>
                      <div class="tags-wrap">
                        <div class="tag">Python</div>
                        <div class="tag">C++</div>
                        <div class="tag">Java</div>
                      </div>
                    </div>

                    <div class="number-desc-wrap">
                      <Icon class="title-icon" type="wl-studio"></Icon>
                      <h3 class="title">Education</h3>
                        <p class="em">Technology lover with more then 15 years in variety of positions, technical through IT architect to leadership, Identify business requirement, examine technology innovation and lead groups to deliver new and complex high quality solutions, utilize in-depth knowledge of leading-edge products and technology in conjunction with industry and business needs</p>
                    </div>

                  </Col>
                </Row>

              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="main-top">
      <a class="back">
        <router-link to="/company">
          < Positions
        </router-link>
      </a>
      <Page class="top-page" :total="40" size="small"></Page>
    </div>

    <Row :gutter="32">
      <Col span="16">
        <div class="company-detail panel">
          <div class="company-first">
            <div class="logo">
              <div  class="company-logo"></div>
            </div>
            <div class="company-name">
              <h3 class="s_title">Company Name</h3>
              <h3 class="title">Machine Learning Engineer</h3>
              <p class="desc">0-2 years experience</p>
              <p class="desc">Bachelor’s degree</p>
            </div>
          </div>
          <div class="company-desc-wrap">
            <h3 class="title">About</h3>
            <p>Starbucks Corporation is an American coffee company and coffeehouse chain. Starbucks was founded in Seattle, Washington in 1971. As of November 2016, it operates 23,768 locations worldwide.</p>
            <p>Starbucks is considered the main representative of "second wave coffee", initially distinguishing itself from other coffee-serving venues in the US by taste, quality, and customer experience while popularizing darkly roasted coffee.Β] Since the 2000s, third wave coffee makers have targeted quality-minded coffee drinkers with hand-made coffee based on lighter roasts, while Starbucks nowadays uses automated espresso machines for efficiency and safety reasons.</p>
          </div>

          <div class="company-desc-wrap">
            <h3 class="title">Summary and Mission</h3>
            <p>Starbucks Corporation is an American coffee company and coffeehouse chain. Starbucks was founded in Seattle, Washington in 1971. As of November 2016, it operates 23,768 locations worldwide.</p>
            <p>Starbucks is considered the main representative of "second wave coffee", initially distinguishing itself from other coffee-serving venues in the US by taste, quality, and customer experience while popularizing darkly roasted coffee.Β] Since the 2000s, third wave coffee makers have targeted quality-minded coffee drinkers with hand-made coffee based on lighter roasts, while Starbucks nowadays uses automated espresso machines for efficiency and safety reasons.</p>
          </div>

          <div class="company-desc-wrap">
            <h3 class="title">Key Responsibilities </h3>
            <p>1.  Knowledge of data structures, algorithms and computer science concepts relative to the platform.</p>
            <p>2.  Proficiency in development languages, tools, frameworks, utilities and technical dependencies. </p>
            <p>3.  Ability to write and value high quality, reusable software with minimal defects. Ability to learn and incorporate new technologies, concepts and development languages. </p>
            <p>4.  Ability to absorb new concepts and technical implementation of application architecture, infrastructure and security. </p>
          </div>
        </div>
      </Col>
      <Col span="8">
        <div class="number-list-wrap">
          <div @click="openNumber">
            <number-item :key="index" v-for="(index, item) in [1,2,3,4,5,6,7,8,9,10]"></number-item>
          </div>
        </div>

      </Col>
    </Row>

  </div>
</template>

<script type="text-/ecmascript-6">
import numberItem from "@/components/company/numberItem"

export default {
  props: {},
  data() {
    return {
      showNumber: false
    }
  },
  mounted() {

  },
  computed: {},
  components: {
    numberItem
  },
  filters: {},
  methods: {
    openNumber() {
      console.log('1')
      this.showNumber = true
    }

  },
  created() {}
}
</script>

<style lang="stylus">
@import '../../assets/stylus/base.styl';


.number-desc-wrap
  padding-left: 30px
  position: relative
  margin-bottom: 24px
  .title-icon
    position: absolute
    vertical-align: top
    left 0px
    font-size 20px
    color #101010
  .title
    color #101010
    font-weight 300
    font-size 18px
    line-height: 20px
    vertical-align: top
    margin-bottom: 16px
  .desc-group
    margin-bottom: 32px
  .em
    color #666
  .strong
    font-weight: 700
  .p_bottom
    margin-bottom: 8px
  p
    color #101010


.number-detail
  .tags-wrap
    .tag
      margin-right: 8px
      background #DDD
      color #101010
      font-size 14px
      display inline-block
      line-height: 18px
      padding 10px 15px
      border-radius 30px
  .number-body
    border-top 1px solid #E9E9E9
    padding-top 20px
    margin-top 10px
  .number-first
    padding 30px 0
    position: relative
    max-width 600px
    margin 0 auto
    >.btn-nav
      width 64px
      height 64px
      display inline-block
      position: absolute
      border-radius 100%
      text-align: center
      line-height: 64px
      font-size 30px
      color #CCC
      margin-top: -32px
      top 50%
      z-index:  100
      &.btn-right
        right 0px

    .number-info
      margin 0 auto
      width 250px
      text-align: center
      position: relative

      .avatar
        display inline-block
        width 96px
        height 96px
        border-radius 100%
        margin-bottom: 16px
        background #EEE
      .name
        font-size 26px
        color #101010
        font-weight 500
      .s_title
        margin-bottom: 10px
        color #666
      .desc
        color #101010

      &-action
        display flex
        margin-top 10px
        justify-content center
        .btn-action
          margin 0 10px
          border 1px solid color-main
          width 32px
          height 32px
          color color-main
          text-align: center
          line-height 32px
          border-radius 100%


  .detail-top
    margin-top: 50px
    border-bottom: 1px solid #E9E9E9
    overflow: hidden
    .title
      font-size 24px
      color #101010
      font-wieght blod
      float left
    .download
      float right
      color #101010
      font-size 14px
      line-height 20px
      .ivu-icon
        vertical-align: top
        color color-main
        font-size 20px
        margin-left: 15px

.modal
  position: fixed
  left 0px
  top 0px
  right 0px
  bottom 0px
  z-index: 1111
  background rgba(246, 248, 246, 1)

  .close
    width 48px
    height 48px
    color #999
    position: absolute
    right 15px
    top 15px
    font-size 40px

.company-detail
  margin-bottom: 50px
  padding 40px
  padding-right: 70px
  .company-first
    margin-bottom: 30px
    .s_title
      font-size 20px
      color #999
      font-weight 500
    .title
      color #101010
      font-size 20px
      margin-bottom: 8px
    .desc
      font-size 14px
      margin-bottom: 5px
    .logo
      display inline-block
      float left
      margin-right: 32px
      height 100px
      .company-logo
        width 64px
        height 64px
        background #999
        border-radius 100%

  .company-desc-wrap
    margin-bottom: 32px
    .title
      font-size 16px
      margin-bottom: 8px
    p
      color #666
      font-size 12px
      line-height: 18px

.main-top
  padding 50px 0
  .back
    font-size 24px
    color #666
    font-weight blod

  .top-page
    float: right

</style>