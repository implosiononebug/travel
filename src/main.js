import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
