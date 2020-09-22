import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import BusinessMetrics from '../views/dashboard/BusinessMetrics.vue'
import ModelPerformance from '../views/dashboard/ModelPerformance.vue'

import ApiDocs from '../views/ApiDocs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/business-metrics',
    name: 'BusinessMetrics',
    component: BusinessMetrics
  },
  {
    path: '/dashboard/model-performance',
    name: 'ModelPerformance',
    component: ModelPerformance
  },
  {
    path: '/apidocs',
    name: 'ApiDocs',
    component: ApiDocs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
