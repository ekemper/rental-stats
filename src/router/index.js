import Vue from 'vue'
import Router from 'vue-router'
import Stats from '@/components/stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
