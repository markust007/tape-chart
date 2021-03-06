import Vue from 'vue'
import Router from 'vue-router'

import TapeChart from './containers/TapeChart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/tape-chart/',
  // base: '/',
  routes: [
    {
      path: '/',
      name: 'TapeChart',
      component: TapeChart,
    }
  ]
})
