<template>
  <div class="bg-gray">
    <div class="container container-dash">
      <div class="panel-dashboard panel">
        <div class="dash-list">
          <div class="dash-item">
            <p class="title">Tatal Positions</p>
            <span class="num">120</span>
          </div>
          <div class="dash-item">
            <p class="title">Opening</p>
            <span class="num">84</span>
          </div>
          <div class="dash-item">
            <p class="title">Closed</p>
            <span class="num">36</span>
          </div>
          <div class="dash-item highlight">
            <p class="title">New</p>
            <span class="num">16</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container container-dash">
      <div class="company-list-wrap">
        <div @click="openAddCompany">
          <float-btn class="add-company-btn"></float-btn>
        </div>
        <div class="list-tool">
          <p class="title">Opening</p>
          <span class="eq-tool">
          </span>
        </div>
        <Row :gutter="18" class="company-list">
          <Col :span="6" :key="index" v-for="(item, index) in [1,2,3,4,5,6]">
            <router-link to="company/1">
              <company-item></company-item>
            </router-link>
          </Col>
        </Row>
        <div class="page-wrap">
          <Page :total="40" size="small"></Page>
        </div>
      </div>
    </div>
    <Modal
      class="model-company"
      v-model="addCompany"
      :width="1000"
      ok-text="Add"
      :mask-closable="false">
<!--       <Row>
        <Col span="6">col-12</Col>
        <Col span="18">
           <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
        </Col>
      </Row>
 -->
      <Row :gutter="20">
        <Col span="6">
    <Upload
        multiple
        type="drag"
        class="upload-compony-logo"
        action="//jsonplaceholder.typicode.com/posts/">
        <div>
            <p>Upload Logo</p>
        </div>
    </Upload>
        </Col>
        <Col span="18">
          <Form  label-position="top" class="input-cube">

            <FormItem label="Summary">
              <Input v-model="value" type="textarea" placeholder="Summary"></Input>
            </FormItem>

            <FormItem label="Company Name">
              <Input v-model="value" placeholder="Company Name"></Input>
            </FormItem>

            <FormItem label="Job Position">
              <Input v-model="value" placeholder="Job Position"></Input>
            </FormItem>
            <FormItem label="Company Size">
              <Input v-model="value" placeholder="Company Size"></Input>
            </FormItem>
            <FormItem label="Employment Type">
              <Input v-model="value" placeholder="Employment Type"></Input>
            </FormItem>
            <FormItem label="Salary Range">
              <Input v-model="value" placeholder="Salary Range"></Input>
            </FormItem>
            <FormItem label="Location">
              <Input v-model="value" placeholder="Location"></Input>
            </FormItem>
            <FormItem label="Travel">
              <Input v-model="value" placeholder="Travel"></Input>
            </FormItem>

            <FormItem label="Shift Pattern">
              <Tag v-for="item in ['Englisth']" :key="item" :name="Language" closable @on-close="handleClose2">{{item}}</Tag>
              <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">Add Language</Button>
            </FormItem>

            <FormItem label="Required Skills">
              <Tag v-for="item in ['Englisth']" :key="item" :name="Language" closable @on-close="handleClose2">{{item}}</Tag>
              <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">Add Skills</Button>
            </FormItem>

            <FormItem label="Education">
              <Tag v-for="item in ['Englisth']" :key="item" :name="Language" closable @on-close="handleClose2">{{item}}</Tag>
              <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">Add Skills</Button>
            </FormItem>

            <FormItem label="Compensation / Package">
              <Input v-model="value" placeholder="Compensation / Package"></Input>
            </FormItem>



          </Form>
        </Col>
      </Row>
    </Modal>
  </div>
</template>

<script type="text-/ecmascript-6">
import companyItem from "@/components/company/companyItem"
import floatBtn from "@/components/common/floatBtn"
export default {
  props: {},
  data() {
    return {
      addCompany:false
    }
  },
  mounted() {},
  computed: {},
  components: {companyItem, floatBtn},
  filters: {},
  methods: {
    openAddCompany() {
      this.addCompany = true
    }
  },

  created() {}
}
</script>

<style lang="stylus">
@import '../../assets/stylus/base.styl';

.upload-compony-logo
  .ivu-upload-drag
    width 125px
    height 125px
    display inline-block
    border-radius 100%
    p
      line-height 125px
      color color-main
      font-size 16px

.input-cube
  input, textarea
    padding 10px
    border-radius 0px !important

.add-company-btn
  top 60px
  right -100px
  z-index 900

.model-company
  .ivu-modal-body
    padding: 60px 80px
  .ivu-modal-close
    // position: fixed
    width 45px
    height 45px
    line-height 45px
    text-align center
    border-radius 100%
    background color-main
    font-size 35px
    right -80px
    top 0px
    .ivu-icon-ios-close-empty
      color #FFF
    &:hover
      color #FFF
  .ivu-btn-primary
    width 200px

.page-wrap
  margin-top 150px
  margin-bottom 50px
  text-align center

.company-list-wrap
  position relative
  .list-tool
    border-bottom: 1px solid #e9e9e9
    margin-bottom 25px
    padding-bottom 5px
    .title
      font-size: 24px;
      color #666666
      line-height 30px
      font-weight: 600;

.container-dash
  padding 15px
  padding-top: 32px;

.panel-dashboard
  padding: 35px;
  margin-bottom 0px
  .dash-list
    overflow: hidden;
    .dash-item
      display: inline;
      float: left;
      margin-right: 80px;
      .title
        color: #666666;
        font-size: 20px;
        margin-bottom: 16px;
      .num
        color: #110011;
        font-size: 48px;
        line-height: 1;
      &.highlight
        .num
          color: color-main
</style>