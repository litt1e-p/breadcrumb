import Vue from 'vue'
import App from './sample/App.vue'
import Router from './sample/router'
import Breadcrumb from './index'

Vue.use(Breadcrumb, {routable: 'true'})

new Vue({
  el: '#app',
  router: Router,
  components: { App },
  template: '<App/>'
})

