<template>
  <div class="home">
    <home-header></home-header>
    <home-Swiper></home-Swiper>
    <home-icon></home-icon>
  </div>
</template>


<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/HomeIcons.vue'

export default {
  name: 'home',
  data: function () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>
