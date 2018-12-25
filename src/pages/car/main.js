import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/assets/iconfont/iconfont.css'
import '@/plugins/element.js'
import '@/assets/styles/common.styl'
import '@/assets/styles/reset.styl'
import '@/assets/styles/element.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
