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
              <company-item></company-item>
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

      <Row :gutter="20">
        <Col span="6">

              <Upload
                multiple
                type="drag"
                class="upload-avatar ivu-upload-avatar upload-compony-logo"

                action="//jsonplaceholder.typicode.com/posts/">
                <div slot="content">
                  <p class="desc">Upload Logo</p>
                </div>
                <div slot="content-top">
                  <p class="desc">Upload Logo</p>
                </div>
                <div slot="content-error">
                  <p class="desc">Upload Logo</p>
                </div>
              </Upload>

        </Col>
        <Col span="18">
          <Form  label-position="top" class="input-cube">

            <FormItem label="Company Name">
              <Input v-model="form.Name" placeholder="Company Name"></Input>
            </FormItem>
            <FormItem label="Job Position">
              <Input v-model="form.Position" placeholder="Job Position"></Input>
            </FormItem>
            <FormItem label="Company Size">
              <Input v-model="form.CompanySize" placeholder="Company Size"></Input>
            </FormItem>
            <FormItem label="Employment Type">
              <Select placeholder="Employment Type" v-model="form.EmploymentType">
                <Option :value="item" :key="index" v-for="(item, index) in selectName.employment_type">{{item}}</Option>
              </Select>
            </FormItem>
            <FormItem label="Work Experience">
              <Select v-model="form.WorkExperience" placeholder="Work Experience">
                <Option :value="item" :key="index" v-for="(item, index) in selectName.year_length_name">{{item}}</Option>
              </Select>
            </FormItem>
            <FormItem label="Location">
              <AutoComplete
                v-model="form.Location"
                :data="selectName.city_arr"
                :filter-method="autoComplete"
                placeholder="Preferred Location"
                >
              </AutoComplete>
            </FormItem>

            <FormItem>
              <Checkbox v-model="form.WillingToTravel">
                <span>Travel Requirement</span>
              </Checkbox>
            </FormItem>

            <FormItem label="Summary">
              <Input v-model="form.Summary" type="textarea" placeholder="Summary"></Input>
            </FormItem>


            <FormItem label="Education">
              <Select placeholder="Education" v-model="form.Education ">
                <Option :value="item" :key="index" v-for="(item, index) in selectName.education_arr">{{item}}</Option>
              </Select>
            </FormItem>

            <FormItem label="Base Salary Range">
              <Select v-model="form.SalaryRange">
                <Option :value="item" :key="index" v-for="(item, index) in selectName.salary_range_name">{{item}}</Option>
              </Select>
            </FormItem>

            <FormItem label="Language">
              <Tag v-for="(item, index) in form.Language" :key="item" :name="item" closable @on-close="removeItem('Language', index)">{{item}}</Tag>
              <AutoComplete
                v-model="addTag.Language"
                :data="selectName.language_arr"
                :filter-method="autoComplete"
                placeholder="Add Language"
                style="width:200px; margin-right:20px"
                >
              </AutoComplete>
              <a class="btn-add-item"  type="dashed" @click="handleAddTags('Language')">+ Add Languages</a>
            </FormItem>

            <FormItem label="Require Skills">
              <Tag v-for="(item, index) in form.Skills" :key="item" :name="item" closable @on-close="removeItem('Skills', index)">{{item}}</Tag>
              <AutoComplete
                v-model="addTag.Skills"
                :data="selectName.skill_arr"
                :filter-method="autoComplete"
                placeholder="Require Skills"
                style="width:200px; margin-right:20px"
                >
              </AutoComplete>
              <a class="btn-add-item" icon="ios-plus-empty" type="dashed" @click="handleAddTags('Skills')">+ Add Skills
              </a>
            </FormItem>

            <FormItem label="Compesnsation">
              <Checkbox style="margin-bottom:10px" v-model="form.Option">
                <span>Option</span>
              </Checkbox>
              <Checkbox style="margin-bottom:10px" v-model="form.Commissions">
                <span>Commissions</span>
              </Checkbox>
              <Checkbox style="margin-bottom:10px" v-model="form.Overtime">
                <span>Overtime Pay</span>
              </Checkbox>
              <br />
              <Checkbox style="margin-bottom:10px" v-model="form.Bonuses">
                <span>Bonuses</span>
              </Checkbox>
              <Checkbox style="margin-bottom:10px" v-model="form.Allowance">
                <span>Travel / Meal /Housing Allowance</span>
              </Checkbox>
              <Checkbox style="margin-bottom:10px" v-model="form.Health">
                <span>Health</span>
              </Checkbox>
              <Checkbox style="margin-bottom:10px" v-model="form.Welness">
                <span>Welness</span>
              </Checkbox>
            </FormItem>

            <FormItem label="Salary Range">
              <Select placeholder="Salary Range" v-model="form.salaryRange">
                <Option :value="item" :key="index" v-for="(item, index) in selectName.salary_range_name">{{item}}</Option>
              </Select>
            </FormItem>

            <!-- <FormItem label="Compensation / Package">
              <Select placeholder="Compensation / Package" v-model="form.CompensationPackage">
                <Option :value="item" :key="index" v-for="(item, index) in selectName.compensation_arr">{{item}}</Option>
              </Select>
            </FormItem> -->


          </Form>
        </Col>
      </Row>
    </Modal>
  </div>
</template>

<script type="text-/ecmascript-6">
import companyItem from '@/components/company/companyItem'
import floatBtn from '@/components/common/floatBtn'
import { selectName } from '@/libs/const'
export default {
  props: {},
  data() {
    return {
      selectName,
      addCompany: false,
      form: {
        Name: '',
        CompanySize: '',
        Skills: ['Python'],
        Language: ['Englist']
      },
      addTag: {
        Skills: '',
        Language: ''
      }
    }
  },
  mounted() {},
  computed: {},
  components: { companyItem, floatBtn },
  watch: {
    'form.CompanySize': function(val) {
      setTimeout(() => {
        this.form.CompanySize = val.replace(/[^\d^\+]/g, '')
      }, 0)
    },
    'form.Name': function(val) {
      setTimeout(() => {
        this.form.Name = val.replace(/[\d]/g, '')
      }, 0)
    }
  },

  methods: {
    handleAddTags(type) {
      this.form[type].push(this.addTag[type])
    },
    openAddCompany() {
      this.addCompany = true
    },
    removeItem(type, index) {
      this.form[type].splice(index, 1)
    },
    autoComplete(value, option) {
      let arr = option.toUpperCase().indexOf(value.toUpperCase()) !== -1
      return arr
    }
  },

  created() {}
}
</script>

<style lang="stylus">
@import '../../assets/stylus/base.styl';
.ivu-modal
  .ivu-select-dropdown
    top: 32px !important

.btn-add-item {
  font-style: italic;
  font-weight: bold;
  color: #999;
  position: absolute;
  line-height: 24px;
  margin-top: -12px;
  top: 50%;
  transition: 0.5s;


  &:hover {
    color: primary-color;
  }
}

.upload-compony-logo
  .ivu-upload-content
    padding-top: 0px
    display flex
    justify-content center
    align-items center
    .icon-upload
      display: none
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
  .ivu-select-selection
    border-radius 0px !important
    .ivu-select-arrow
      right 15px
    .ivu-select-placeholder
      padding-left 10px
      padding-right 0px
  .ivu-select-dropdown
    border-radius 0px !important

.add-company-btn
  top 60px
  right -100px
  z-index 900

.model-company
  .ivu-btn.ivu-btn-text.ivu-btn-large
    display: none

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
