
<template>
	<div class="main">
		<div class="container inner">
			<Steps class="update-step" :current="step">
				<Step title="Upload"></Step>
				<Step title="Analyze & Review"></Step>
				<Step title="Submit"></Step>
			</Steps>
      <!-- 第一步开始 -->
			<div class="step-form" v-if="step == 0">
				<Form ref="formUpdate" :model="formUpdate" :rules="ruleUpdate" label-position="top">
          <Row :gutter="20" style="display:flex;justify-content:left;">
            <Col span="8">
              <Upload
                multiple
                type="drag"
                class="upload-avatar ivu-upload-avatar"
                icon="wl-user"
                action="//jsonplaceholder.typicode.com/posts/">
                <div slot="content">
                  <p class="desc">Upload</p>
                  <p class="desc">Profile Image</p>
                </div>
                <div slot="content-top">
                  <p class="desc">Upload</p>
                  <p class="desc">Profile Image</p>
                </div>
                <div slot="content-error">
                  <p class="desc">Upload</p>
                  <p class="desc">Profile Image</p>
                </div>
              </Upload>
            </Col>
            <Col span="16">
                <Row :gutter="20">
                  <Col span="12">
                    <FormItem label="Name" prop="Name">
                      <Input v-model="formUpdate.Name" placeholder="Name"></Input>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="Email" prop="Mail">
                      <Input v-model="formUpdate.Mail" placeholder="Email"></Input>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="Phone Number" prop="Mobile">
                      <Input v-model="formUpdate.Mobile"  placeholder="Phone Number"></Input>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="Salary Range" prop="SalaryRange">
                      <Select v-model="formUpdate.SalaryRange">
                        <Option :value="item" :key="index" v-for="(item, index) in selectName.salary_range_name">{{item}}</Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="Status" prop="Status">
                      <Select v-model="formUpdate.Status">
                        <Option :value="item" :key="index" v-for="(item, index) in selectName.update_status_name">{{item}}</Option>
                      </Select>
                    </FormItem>
                  </Col>
                  <Col span="12">
                    <FormItem label="Preferred Location" prop="PreferredLocation">
                      <AutoComplete
                        v-model="formUpdate.PreferredLocation"
                        :data="selectName.city_arr"
                        :filter-method="autoComplete"
                        placeholder="Preferred Location"
                        >
                      </AutoComplete>
                    </FormItem>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <CheckboxGroup>
                  <Checkbox v-model="formUpdate.AcceptRelocation">
                    <span>Accept Relocation</span>
                  </Checkbox>
                  <Checkbox v-model="formUpdate.WillingToTravel">
                    <span>Willing to Travel</span>
                  </Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
          </Row>
					<FormItem>
						<Upload
              class="ivu-upload-ht"
							multiple
              :on-success="uploadSuccess"
							type="drag"
							:action="updateUrl">
							<div slot="content">
								<p class="desc">Drag and Drop Resume to Upload</p>
								<p class="tips">PDF/ Doc./ Docx/ Text</p>
							</div>
              <div slot="content-top">
								<p class="desc">Drag and Drop Resume to Upload</p>
								<p class="tips">PDF/ Doc./ Docx/ Text</p>
							</div>

              <div slot="content-error">
                <h2 class="title">Upload failed, Please check your document type</h2>
								<p class="desc">Drag and Drop Resume to Upload</p>
								<p class="tips">PDF/ Doc./ Docx/ Text</p>
							</div>

						</Upload>
					</FormItem>

					<FormItem class="form-step-footer">
						<Row :gutter="20">
							<Col span="16">
								<span class="step-desc">
									<Icon class="icon-form-help" type="help" size="14"></Icon>Why s2ubmit your resume to us?
									<p class="desc">
										•   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By submitting your resume to us, you create a profile in our database. Our recruiters will come across your resume during their search and offer possible internal referral job opportunities in well-known companies.
										<br />•   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By submitting your resume to us, you will get a free one time resume enhancement session to help you create a perfect resume and land your dream job.
									</p>
								</span>
							</Col>
							<Col span="8">
								<Button @click="handleUpdate" class="step-btn" type="primary" shape="circle" size="large" :disabled="!isUpdate">Analyze</Button>
							</Col>
						</Row>
					</FormItem>
				</Form>
			</div>
      <!-- 第二步开始 -->
			<div class="step-form" v-if="step == 1">
				<Form>
          <!-- 基本资料开始 -->
					<div class="form-group">
						<p class="group-title">Personal Information</p>
						<Row :gutter="65">
							<Col span="8">
								<FormItem :cube-input="true" label="Name">
									<Input v-model="formUpdate.Name" placeholder="Name"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Mothertongue">
                  <AutoComplete
                    v-model="formUpdate.Mothertongue"
                    :data="selectName.language_arr"
                    :filter-method="autoComplete"
                    placeholder="Mothertongue"
                    >
                  </AutoComplete>
								</FormItem>
							</Col>
              <Col span="8">
                <FormItem :cube-input="true" label="Phone Number" prop="Mobile">
                  <Input v-model="formUpdate.Mobile"  placeholder="Phone Number"></Input>
                </FormItem>
              </Col>
              <Col span="8">
                <FormItem :cube-input="true" label="Email" prop="Mail">
                  <Input v-model="formUpdate.Mail" placeholder="Email"></Input>
                </FormItem>
              </Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Nationality">
                  <AutoComplete
                    v-model="formUpdate.Nationality"
                    :data="selectName.country_arr"
                    :filter-method="autoComplete"
                    placeholder="Nationality"
                    >
                  </AutoComplete>

								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="DOB">
                  <Input type="birthday" formatView="MM/DD/YYYY"  v-model="formUpdate.DOB" placeholder="MM/DD/YYYY"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Current Location">
                  <AutoComplete
                    v-model="formUpdate.PreferredLocation"
                    :data="selectName.city_arr"
                    :filter-method="autoComplete"
                    placeholder="Preferred Location"
                    >
                  </AutoComplete>
                </FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true">
									<Select v-model="formUpdate.Gender" placeholder="Gender">
										<Option :value="item" :key="index" v-for="(item, index) in selectName.gender_arr">{{item}}</Option>
									</Select>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true"  >
									<Select v-model="formUpdate.Visa" placeholder="Visa">
										<Option :value="item" :key="index" v-for="(item, index) in selectName.visa_arr">{{item}}</Option>
									</Select>
								</FormItem>
							</Col>
						</Row>
					</div>
          <!-- 教育信息开始 -->
					<div class="form-group">
						<p class="group-title">Education</p>
						<div class="form-group-child">
							<div class="group-item" >
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form" :key="index" v-for="(item, index) in formUpdate.Education">
											<Row :gutter="65">
												<Col span="12">
													<FormItem :cube-input="true" label="Institution">
														<Input :clear-btn="true" v-model="item.Institution" placeholder="Institution"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Major">
                            <AutoComplete
                              :clear-btn="true"
                              v-model="item.Major"
                              :data="selectName.major_arr"
                              :filter-method="autoComplete"
                              placeholder="Major"
                              >
                            </AutoComplete>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Degree">
                            <AutoComplete
                              v-model="item.Degree"
                              :data="selectName.degree_arr"
                              :filter-method="autoComplete"
                              placeholder="Degree"
                              >
                            </AutoComplete>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Gratuation Year">
                            <Input type="birthday" formatView="YYYY" :clear-btn="true" v-model="item.Date" placeholder="YYYY"></Input>
													</FormItem>
												</Col>
											</Row>
										</div>
									</Col>
									<Col span="8" class="item-btn">
										<div >
											<a class="btn-add-item" @click="addAttribute('Education')">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
          <!-- 工作信息开始 -->
					<div class="form-group">
						<p class="group-title">Employment History</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form" :key="index" v-for="(item, index) in formUpdate.Employment">
											<Row :gutter="65">
												<Col span="12">
													<FormItem :cube-input="true" label="Employer">
														<Input :clear-btn="true" v-model="item.Employer" placeholder="Employer"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" >
                            <Select placeholder="Length" v-model="item.Length">
                              <Option :value="item" :key="index" v-for="(item, index) in selectName.year_length_name">{{item}}</Option>
														</Select>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Job Position">
														<Input :clear-btn="true" v-model="item.Position" placeholder="Job Position"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Startdate">
                            <Input type="birthday" formatView="MM/YYYY"  v-model="item.Startdate" placeholder="MM/YYYY"></Input>
													</FormItem>
												</Col>
											</Row>
										</div>
									</Col>
									<Col span="8" class="item-btn">
										<div>
											<a class="btn-add-item" @click="addAttribute('Employment')">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>

					<div class="form-group">
						<p class="group-title">Key Skills <span class="desc">Please add your skill set, as many as possible.</span></p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<Row :gutter="65">
											<Col span="12" :key="index" v-for="(item, index) in formUpdate.skills">
												<div :cube-input="true" class="skill-item">
                          <div class="skill_hd">
                            <span class="name">
                              {{item.name}}
                            </span>
                            <span class="del" @click="removeItem('skills', index)">
                            <Icon type="wl-close"></Icon>
                            </span>
                          </div>
													<Rate :circle="true" :count="10" v-model="item.rank"></Rate>
												</div>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</div>
						<div class="form-group-split">
              <FormItem :cube-input="true">
                <AutoComplete
                  v-model="addTag.skills"
                  :data="selectName.skill_arr"
                  :filter-method="autoComplete"
                  placeholder="Add Skills"
                  style="width:200px">
                </AutoComplete>
                <Button type="primary" @click="handleAddTags('skills')">Add</Button>
              </FormItem>
						</div>
					</div>

					<div class="form-group">
						<p class="group-title">Language</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<Row :gutter="65">
											<Col span="12" :key="index" v-for="(item, index) in formUpdate.language">
												<div class="skill-item">
                          <div class="skill_hd">
                            <span class="name">
                              {{item.name}}
                            </span>
                            <span class="del" @click="removeItem('language', index)">
                            <Icon type="wl-close"></Icon>
                            </span>
                          </div>
													<Rate :circle="true" :count="10" v-model="item.rank"></Rate>
												</div>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</div>
						<div class="form-group-split">
              <FormItem :cube-input="true">
                <AutoComplete
                  v-model="addTag.language"
                  :data="selectName.language_arr"
                  :filter-method="autoComplete"
                  placeholder="Add Language"
                  style="width:200px">
                </AutoComplete>
                <Button type="primary" @click="handleAddTags('language')">Add</Button>
              </FormItem>
						</div>
					</div>
          <!-- 工作经历开始 -->
					<div class="form-group">
						<p class="group-title">Employment History</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="65">
									<Col span="8">
										<FormItem>
                      <Select placeholder="Salary Range" v-model="formUpdate.salaryRange">
                        <Option :value="item" :key="index" v-for="(item, index) in selectName.salary_range_name">{{item}}</Option>
                      </Select>
										</FormItem>
										<FormItem>
                      <AutoComplete
                        v-model="formUpdate.preferredLocation"
                        :data="selectName.city_arr"
                        placeholder="Preferred Location"
                      >
                      </AutoComplete>
										</FormItem>
										<FormItem>
                      <Select placeholder="status" v-model="formUpdate.status">
                        <Option :value="item" :key="index" v-for="(item, index) in selectName.update_status_name">{{item}}</Option>
                      </Select>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem>
											<Checkbox>
												<span>Accept Relocation</span>
											</Checkbox>
										</FormItem>
										<FormItem>
											<Checkbox>
												<span>Willing to Travel</span>
											</Checkbox>
										</FormItem>
									</Col>
								</Row>
							</div>
						</div>
					</div>
          <!-- 附加项开始 -->
					<div class="form-group">
						<p class="group-title">Patent</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form" :key="index" v-for="(item, index) in formUpdate.Patent">
											<FormItem :cube-input="true" label="Patent Name">
												<Input :clear-btn="true" v-model="item.name" placeholder="Patent Name"></Input>
											</FormItem>
											<FormItem :cube-input="true" label="Date">
												<Input type="birthday" formatView="MM/DD/YYYY" :clear-btn="true" v-model="item.date" placeholder="MM/DD/YYYY"></Input>
											</FormItem>
										</div>
									</Col>
									<Col span="8" class="item-btn">
										<div>
											<a class="btn-add-item" @click="addAttribute('Patent')">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
					<div class="form-group">
						<p class="group-title">Publication</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form" :key="index" v-for="(item, index) in formUpdate.Publication">
											<FormItem :cube-input="true" label="Conference / Journal Name">
												<Input :clear-btn="true" v-model="item.name" placeholder="Conference / Journal Name"></Input>
											</FormItem>
											<FormItem :cube-input="true" label="Date">
												<Input type="birthday" formatView="MM/DD/YYYY" :clear-btn="true" v-model="item.date" placeholder="MM/DD/YYYY"></Input>
											</FormItem>
										</div>
									</Col>
									<Col span="8"  class="item-btn">
										<div>
											<a class="btn-add-item" @click="addAttribute('Publication')">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
					<div class="form-group">
						<p class="group-title">License and Certification</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form" :key="index" v-for="(item, index) in formUpdate.License">
											<FormItem :cube-input="true" label="Name">
												<Input :clear-btn="true" v-model="item.name" placeholder="Name"></Input>
											</FormItem>
											<FormItem :cube-input="true" label="Date">
												<Input type="birthday" formatView="MM/DD/YYYY" :clear-btn="true" v-model="item.date" placeholder="MM/DD/YYYY"></Input>
											</FormItem>
										</div>
									</Col>
									<Col span="8"  class="item-btn">
										<div>
											<a class="btn-add-item" @click="addAttribute('License')">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
					<FormItem class="form-step-footer">
						<Button class="step-btn" type="primary" shape="circle" size="large" >Submit</Button>
					</FormItem>
				</Form>
			</div>
			<!-- 第二步结束 -->
			<div class="step-form" v-if="step == 2">
				<div class="step-finish">
					<i class="icon-finish ivu-icon ivu-icon-wl-check-big"></i>
			 		<p class="desc">Your Resume Was Successfully Upload!</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import vueBirthdayInput from 'vue-birthday-input'
import { selectName } from '@/libs/const'
import { getUpdateUrl, resumeUpload } from '@/libs/api'
export default {
  name: 'home',
  components: {
    vueBirthdayInput
  },
  data() {
    return {
      newTag: '',
      selectName,
      updateUrl: '',
      isUpdate: false,
      count: ['Algorithms', 'LaTeX', 'Anti-Fraud'],

      // formUpdate: {
      //   Name: 'kong fanbo',
      //   Mail: 'xank@qq.com',
      //   Mobile: '13811112222',
      //   SalaryRange: '5000 - 10000',
      //   PreferredLocation: 'Shanghai.China',
      //   Status: 'Full-time',
      //   AcceptRelocation: true,
      //   WillingToTravel: false,
      //   FileId: ''
      // },

      formUpdate: {
        Name: '',
        Mail: '',
        Mobile: '',
        SalaryRange: '',
        PreferredLocation: '',
        Status: '',
        AcceptRelocation: false,
        WillingToTravel: false,
        FileId: '',
        Education: [
          {
            Institution: '',
            Major: '',
            Degree: '',
            Date: ''
          }
        ],
        Employment: [
          {
            Employer: '',
            Length: '',
            Position: '',
            Startdate: ''
          }
        ],
        skills: [
          {
            name: 'Python',
            rank: 1
          },
          {
            name: 'Java',
            rank: 1
          }
        ],
        language: [
          {
            name: 'English',
            rank: 1
          },
          {
            name: 'Spanish',
            rank: 1
          }
        ],
        Patent: [
          {
            name: '',
            date: ''
          }
        ],
        Publication: [
          {
            name: '',
            date: ''
          }
        ],
        License: [
          {
            name: '',
            date: ''
          }
        ]
      },

      //验证
      ruleUpdate: {
        Name: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        Mail: [
          {
            required: true,
            message: 'Mailbox cannot be empty',
            trigger: 'blur'
          },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        Mobile: [
          {
            required: true,
            message: 'Phone Number cannot be empty',
            trigger: 'blur'
          }
        ],
        PreferredLocation: [
          {
            required: true,
            message: 'Preferred Location cannot be empty',
            trigger: 'change'
          }
        ],
        SalaryRange: [
          {
            required: true,
            message: 'Salary Range cannot be empty',
            trigger: 'change'
          }
        ],
        Status: [
          {
            required: true,
            message: 'Status cannot be empty',
            trigger: 'change'
          }
        ]
      },
      addTag: {
        skills: '',
        language: ''
      },
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  },
  computed: {
    step() {
      return this.$route.params.step - 1
    }
  },
  watch: {
    'formUpdate.Mobile': function(val) {
      setTimeout(() => {
        this.formUpdate.Mobile = val.replace(/[^\d^\+]/g, '')
      }, 0)
    },
    'formUpdate.Name': function(val) {
      setTimeout(() => {
        this.formUpdate.Name = val.replace(/[\d]/g, '')
      }, 0)
    }
  },
  created() {
    getUpdateUrl().then(
      res => {
        let { Data } = res.data
        this.updateUrl = Data.url
        this.formUpdate.FileId = Data.fileId
      },
      err => {
        this.$Message.error('Network error')
      }
    )
  },
  methods: {
    removeItem(type, index){
      this.formUpdate[type].splice(index, 1)
    },
    autoComplete(value, option) {
      let arr = option.toUpperCase().indexOf(value.toUpperCase()) !== -1
      return arr
    },
    addAttribute(type) {
      if (type === 'Education') {
        this.formUpdate.Education.push({
          Institution: '',
          Major: '',
          Degree: '',
          Date: ''
        })
      } else if (type === 'Employment') {
        this.formUpdate.Employment.push({
          Employer: '',
          Length: '',
          Position: '',
          Startdate: ''
        })
      } else {
        this.formUpdate[type].push({
          name:'',
          date:''
        })
      }
    },

    uploadSuccess() {
      this.isUpdate = true
    },
    handleAddTags(type) {
        this.formUpdate[type].push({
          name: this.addTag[type],
          rank: 1
        })
    },
    handleUpdate() {
      this.$refs.formUpdate.validate(valid => {
        if (valid) {
          let form = this.formUpdate
          let salaryRange = form.SalaryRange.split(' - ').map(parseFloat)

          this.$Spin.show()
          form.SalaryRangeStart = salaryRange[0]
          form.SalaryRangeEnd = salaryRange[1]
          resumeUpload(form).then(
            res => {
              this.$Spin.hide()
              let { Data, ErrCode } = res.data
              if (ErrCode === 2000) {
                this.$router.push({
                  path: '/update/2'
                })
              }
            },
            err => {
              console.log(err)
              this.$Spin.hide()
              this.$Message.error('Network error')
            }
          )
        }
      })
    }
  }
}
</script>

<style lang="stylus">

// Color
primary-color = #E36D01; // #2d8cf0;

.update-step {
  margin-top: 48px;
  padding-bottom: 48px;
  margin-bottom: 48px;
  border-bottom: 1px solid #E9E9E9;
}

.form-step-footer {
  margin-top: 32px;
  border-top: 1px solid #E9E9E9;
  padding-top: 45px;
  padding-bottom: 45px;
  margin-bottom: 0px;

  .step-desc {
    line-height: 24px;

    .desc {
      color: #000;
      margin-top: 10px;
      line-height: 1.5;
    }
  }

  .step-btn {
    width: 180px;
    float: right;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }

  .icon-form-help {
    margin-top: 2px;
    border: 1px solid #BBB;
    color: #BBB;
    border-radius: 100%;
    line-height: 20px !important;
    width: 20px;
    height: 20px;
    text-align: center;
    margin-right: 10px;
  }
}

.form-group {
  margin-bottom: 30px;

  .group-title {
    font-size: 20px;
    font-weight: bold;
    color: #666;
    margin-bottom: 30px;

    .desc {
      color: #999;
      font-size: 14px;
      margin-left: 20px;
    }
  }

  .form-group-child {
    margin-bottom: 30px;

    .group-item {
      position: relative;
      // &:

      .item-form {
        padding: 24px;
        border: 1px dashed #CCCCCC;
        margin-bottom: 24px;
      }

      .item-btn {
        text-align: center;
        height: 100%;
        position: initial;
        // display: table-cell;
        // vertical-align: middle;
      }

      .btn-add-item {
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
    }
  }
}

.step-finish {
  text-align: center;
  padding-bottom: 100px;

  .icon-finish {
    display: inline-block;
    background: #FFFFFF;
    box-shadow: 0 0 16px 0 #EEEEEE;
    width: 230px;
    height: 230px;
    border-radius: 100%;
    text-align: center;
    font-size: 150px;
    line-height: 230px;
    background-image: -webkit-gradient(linear, 10 50, 0 bottom, from(#FF9900), to(#EE0808));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .desc {
    margin-top: 40px;
    font-size: 16px;
    color: primary-color;
  }
}

.skill-item {
  position: relative;
  .del{
    position: absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
    color #999;
    &:hover{
      color: #333;
    }
    .ivu-icon{
      font-size: 12px;
    }
  }
  .skill_hd{
    border-bottom: 1px solid #EEE;
    padding-bottom: 8px;
    .title{
      color: #999;
    }
  }
  .ivu-rate {
    margin-top: 15px;
  }
}
</style>
