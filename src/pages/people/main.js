import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import '@/plugins/element.js'
import '@/assets/styles/common.styl'
import '@/assets/styles/reset.styl'
import '@/assets/styles/element.styl'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
