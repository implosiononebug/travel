<template>
  <div class="home">
    <home-header></home-header>
    <home-Swiper></home-Swiper>
    <div>text</div>
  </div>
</template>


<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/swiper.vue'

export default {
  name: 'home',
  data: function () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
