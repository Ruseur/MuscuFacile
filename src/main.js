import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'fa'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
