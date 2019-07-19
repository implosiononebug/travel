<template>
  <div class="home">
    <home-header></home-header>
    <home-Swiper></home-Swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
  </div>
</template>


<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwipers.vue'
import HomeIcon from './components/HomeIcons.vue'
import HomeRecommend from './components/Recommend.vue'

export default {
  name: 'home',
  data: function () {
    return {

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend
  }
}
</script>
