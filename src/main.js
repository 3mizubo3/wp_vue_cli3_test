import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router: router, // この行を追加
  components: { App },
  template: '<App/>'
})
