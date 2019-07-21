import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
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
  render: h => h(App)
}).$mount('#app')
