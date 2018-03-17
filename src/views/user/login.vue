<style lang='stylus' scoped>
    label.ivu-form-item-label {
      color: #373A3C !important;
    }
.login-wrap {
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 320px;
  height: 360px;
  max-width: 360px;
  background: #FFF;
  border-radius: 12px;
  box-shadow: 0 0 14px 0 #CCC;
  padding: 48px 32px;

  .login__title {
    margin-bottom: 32px;
    font-size: 20px;
    color: #373A3C;
    font-weight: 600;
  }

  .login__form-item {

    .ivu-input {
      border-radius: 4px !important;
    }
  }

  .login__btn {
    margin-top 10px;
    line-height: 38px;
    background-color: #5CC414;
    padding: 0px;
    border: none;

    span {
      font-size: 22px !important;
    }

    &:hover {
      background-color: darken(#5CC414, 0.1);
    }
  }
}
</style>
<template>
  <div class="main">
    <div class="container inner">

      <div class="login-wrap">
        <h1 class="login__title">Login MYJOBTANK</h1>

        <Form :rules="ruleUpdate" label-position="top">
          <FormItem class="login" label="Email"  prop="username">
            <Input placeholder="Your enterprise Email" v-model="form.username"></Input>
          </FormItem>
          <FormItem class="login" label="Password"  prop="pwd">
            <Input placeholder="A combination of 8-16 characters" v-model="form.pwd"></Input>
          </FormItem>
          <FormItem>
            <Button class="login__btn" size="large" type="primary" long>Login</Button>
          </FormItem>
        </Form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
  },

  data() {
    return {
      form: {
        username: '',
        pwd: ''
      },

      //验证
      ruleUpdate: {
        username: [
          {
            required: true,
            message: 'Your enterprise Email',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            message: 'Invalid Number',
            trigger: 'blur'
          }
        ]
      }

    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>