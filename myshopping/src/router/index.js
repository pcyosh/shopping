import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import nav2 from '../components/nav2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/nav2',
      name: 'nav2',
      component: nav2,
    }
  ]
})
