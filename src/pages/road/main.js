import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/reset.styl'
import '@/plugins/element.js'
import '@/assets/styles/element.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
