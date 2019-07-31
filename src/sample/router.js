import Vue from 'vue'
import Router from 'vue-router'
import Layout from './pages/layout'
import ModuleA from './pages/moduleA'
import Index from './pages/index'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/moduleA',
    component: Layout,
    meta: {
      label: 'Layout'
    },
    children: [
      {
        path: '/moduleA',
        name: 'moduleA',
        redirect: '/moduleA/index',
        component: ModuleA,
        meta: {
          label: 'Module'
        },
        children: [
          {
            name: 'index',
            path: '/moduleA/index',
            component: Index,
            meta: {
              label: 'Index'
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
