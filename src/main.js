import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import iView from '@/iview'

import store from './store'
import VueRouter from 'vue-router'
import Lockr from 'lockr'
import moment from 'moment'
import { router } from './router/index'
import accounting from 'accounting'

import VueI18n from 'vue-i18n'

import './iview/styles/index.less'

import VueResource from 'vue-resource'
import locale from 'iview/dist/locale/en-US'

Vue.use(iView, { locale })

Vue.use(VueI18n)
Vue.use(iView)

Vue.use(VueResource)
// Vue.use(VueRouter)

//router.afterEach(transition => {
//NProgress.done();
//});

 

new Vue({
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

