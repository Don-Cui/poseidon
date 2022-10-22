import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  // 去掉url上的#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/home/index'], resolve)
    },
    {
      path: '/home/index',
      name: 'home',
      component: resolve => require(['@/home/index'], resolve),
      children: [{
        path: '/home/index',
        name: 'home',
        component: resolve => require(['@/home/index'], resolve)
      }
      ]
    }]
})
