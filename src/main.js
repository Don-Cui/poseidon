// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../router/index.js'
import Axios from 'axios'

Vue.config.productionTip = false
Axios.defaults.baseURL = '/api'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  } else if (from.meta.title) {
    document.title = from.meta.title
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
