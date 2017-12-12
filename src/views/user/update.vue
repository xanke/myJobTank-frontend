
<template>
	<div class="main">
		<div class="container inner">
			<Steps class="update-step" :current="step">
				<Step title="Upload"></Step>
				<Step title="Analyze & Review"></Step>
				<Step title="Submit"></Step>
			</Steps>

			<div class="step-form" v-if="step == 0">
				<Form :model="formItem"  label-position="top">
					<FormItem>
						<Row :gutter="20">
							<Col span="8">
								<FormItem label="Name">
									<Input v-model="value" placeholder="Name"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem label="Email">
									<Input v-model="value" placeholder="Email"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem label="Phone Number">
									<Input v-model="value" placeholder="Phone Number"></Input>
								</FormItem>
							</Col>
						</Row>
					</FormItem>
					<FormItem>
						<Row :gutter="20">
							<Col span="8">
								<FormItem label="Salary Range">
									<Select v-model="formItem.select">
										<Option value="beijing">New York</Option>
										<Option value="shanghai">London</Option>
										<Option value="shenzhen">Sydney</Option>
									</Select>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem label="Preferred Location">
									<Select v-model="formItem.select">
										<Option value="beijing">New York</Option>
										<Option value="shanghai">London</Option>
										<Option value="shenzhen">Sydney</Option>
									</Select>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem label="Status">
									<Select v-model="formItem.select">
										<Option value="beijing">New York</Option>
										<Option value="shanghai">London</Option>
										<Option value="shenzhen">Sydney</Option>
									</Select>
								</FormItem>
							</Col>
						</Row>
					</FormItem>
					<FormItem>
						<CheckboxGroup v-model="social">
							<Checkbox>
								<span>Accept Relocation</span>
							</Checkbox>
							<Checkbox>
								<span>Willing to Travel</span>
							</Checkbox>
						</CheckboxGroup>
					</FormItem>
					<FormItem>
						<Upload
							multiple
							type="drag"
							action="//jsonplaceholder.typicode.com/posts/">
							<div style="padding: 20px 0">
								<Icon class="icon-upload" type="wl-upload"></Icon>
								<p class="desc">Drag and Drop Resume to Upload</p>
								<p class="tips">PDF/ Doc./ Docx/ Text</p>
							</div>
						</Upload>
					</FormItem>

					<FormItem class="form-step-footer">
						<Row :gutter="20">
							<Col span="16">
								<span class="step-desc">
									<Icon class="icon-form-help" type="help" size="14"></Icon>Why submit your resume to us?  
									<p class="desc">     
										•   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By submitting your resume to us, you create a profile in our database. Our recruiters will come across your resume during their search and offer possible internal referral job opportunities in well-known companies.
										<br />•   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By submitting your resume to us, you will get a free one time resume enhancement session to help you create a perfect resume and land your dream job.
									</p>
								</span>
							</Col>
							<Col span="8">
								<Button class="step-btn" type="primary" shape="circle" size="large">Analyze</Button>
							</Col>
						</Row>
					</FormItem>
				</Form>
			</div>

			<div class="step-form" v-if="step == 1">
				<Form>
					<div class="form-group">
						<p class="group-title">Personal Information</p>
						<Row :gutter="65">
							<Col span="8">
								<FormItem :cube-input="true" label="Name">
									<Input :clear-btn="true" v-model="value" placeholder="Name"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Mothertongue">
									<Input :clear-btn="true" v-model="value" placeholder="Mothertongue"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Nationality">
									<Input :clear-btn="true" v-model="value" placeholder="Nationality"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Gender">
									<Input :clear-btn="true" v-model="value" placeholder="Gender"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Visa">
									<Input :clear-btn="true" v-model="value" placeholder="Visa"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="DOB">
									<Input :clear-btn="true" v-model="value" placeholder="DOB"></Input>
								</FormItem>
							</Col>
							<Col span="8">
								<FormItem :cube-input="true" label="Current Location">
									<Input :clear-btn="true" v-model="value" placeholder="Current Location"></Input>
								</FormItem>
							</Col>
						</Row>
					</div>

					<div class="form-group">
						<p class="group-title">Education</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form">
											<Row :gutter="65">
												<Col span="12">
													<FormItem :cube-input="true" label="Institution">
														<Input :clear-btn="true" v-model="value" placeholder="Institution"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Major">
														<Input :clear-btn="true" v-model="value" placeholder="Major"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Degree">
														<Input :clear-btn="true" v-model="value" placeholder="Degree"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Gratuation Year">
														<Input :clear-btn="true" v-model="value" placeholder="Gratuation Year"></Input>
													</FormItem>
												</Col>
											</Row>
										</div>
									</Col>
									<Col span="8" class="item-btn">
										<div >
											<a class="btn-add-item">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>

					<div class="form-group">
						<p class="group-title">Employment History</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form">
											<Row :gutter="65">
												<Col span="12">
													<FormItem :cube-input="true" label="Employer">
														<Input :clear-btn="true" v-model="value" placeholder="Employer"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Length">
														<Input :clear-btn="true" v-model="value" placeholder="Length"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Job Position">
														<Input :clear-btn="true" v-model="value" placeholder="Job Position"></Input>
													</FormItem>
												</Col>
												<Col span="12">
													<FormItem :cube-input="true" label="Startdate">
														<Input :clear-btn="true" v-model="value" placeholder="Startdate"></Input>
													</FormItem>
												</Col>
											</Row>
										</div>
									</Col>
									<Col span="8"  class="item-btn">
										<div>
											<a class="btn-add-item">+ Add Attribute</a>
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
											<Col span="12">
												<FormItem :cube-input="true" label="Python" class="skill-item">
													<Input :clear-btn="true" v-model="value"></Input>
													<Rate :circle="true" :count="10" v-model="value"></Rate>
												</FormItem>
											</Col>
											<Col span="12">
												<FormItem :cube-input="true" label="Java" class="skill-item">
													<Input :clear-btn="true" v-model="value"></Input>
													<Rate :circle="true" :count="10" v-model="value"></Rate>
												</FormItem>
											</Col>
										</Row>
									</Col>
									<Col span="8">
										<div class="item-btn">
											<a class="btn-add-item">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
						<div class="form-group-split">
							 <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">{{item}}</Tag>
  							<Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">Add Tags</Button>
						</div>
					</div>

					<div class="form-group">
						<p class="group-title">Language</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<Row :gutter="65">
											<Col span="12">
												<FormItem :cube-input="true" label="English" class="skill-item">
													<Input :clear-btn="true" v-model="value"></Input>
													<Rate :circle="true" :count="10" v-model="value"></Rate>
												</FormItem>
											</Col>
											<Col span="12">
												<FormItem :cube-input="true" label="Spanish" class="skill-item">
													<Input :clear-btn="true" v-model="value"></Input>
													<Rate :circle="true" :count="10" v-model="value"></Rate>
												</FormItem>
											</Col>
										</Row>
									</Col>
									<Col span="8">
										<div class="item-btn">
											<a class="btn-add-item">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>

					<div class="form-group">
						<p class="group-title">Employment History</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="65">
									<Col span="8">
										<FormItem :cube-input="true" label="Salary Range">
											<Input :clear-btn="true" v-model="value" placeholder="Salary Range"></Input>
										</FormItem>
										<FormItem :cube-input="true" label="Preferred Location">
											<Input :clear-btn="true" v-model="value" placeholder="Preferred Location"></Input>
										</FormItem>
										<FormItem :cube-input="true" label="Status">
											<Input :clear-btn="true" v-model="value" placeholder="Status"></Input>
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

					<div class="form-group">
						<p class="group-title">Patent</p>
						<div class="form-group-child">
							<div class="group-item">
								<Row :gutter="0">
									<Col span="16">
										<div class="item-form">
											<FormItem :cube-input="true" label="Patent Name">
												<Input :clear-btn="true" v-model="value" placeholder="Patent Name"></Input>
											</FormItem>
											<FormItem :cube-input="true" label="MM-DD-YY">
												<Input :clear-btn="true" v-model="value" placeholder="MM-DD-YY"></Input>
											</FormItem>
										</div>
									</Col>
									<Col span="8"  class="item-btn">
										<div>
											<a class="btn-add-item">+ Add Attribute</a>
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
										<div class="item-form">
											<FormItem :cube-input="true" label="Conference / Journal Name">
												<Input :clear-btn="true" v-model="value" placeholder="Conference / Journal Name"></Input>
											</FormItem>
											<FormItem :cube-input="true" label="MM-DD-YY">
												<Input :clear-btn="true" v-model="value" placeholder="MM-DD-YY"></Input>
											</FormItem>
										</div>
									</Col>
									<Col span="8"  class="item-btn">
										<div>
											<a class="btn-add-item">+ Add Attribute</a>
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
										<div class="item-form">
											<FormItem :cube-input="true" label="Name">
												<Input :clear-btn="true" v-model="value" placeholder="Name"></Input>
											</FormItem>
											<FormItem :cube-input="true" label="MM-DD-YY">
												<Input :clear-btn="true" v-model="value" placeholder="MM-DD-YY"></Input>
											</FormItem>
										</div>
									</Col>
									<Col span="8"  class="item-btn">
										<div>
											<a class="btn-add-item">+ Add Attribute</a>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
					<FormItem class="form-step-footer">
						<Button class="step-btn" type="primary" shape="circle" size="large">Submit</Button>
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
export default {
  name: 'home',
  components: {},
  data() {
    return {
      count: ['Algorithms', 'LaTeX', 'Anti-Fraud'],
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
  methods: {}
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

      .item-form {
        padding: 24px;
        border: 1px dashed #CCCCCC;
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
  .ivu-rate {
    margin-top: 15px;
  }
}
</style>
