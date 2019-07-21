<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-Swiper></home-Swiper>
    <home-icon></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/HomeSwipers.vue'
import HomeIcon from './components/HomeIcons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
export default {
  name: 'home',
  data: function () {
    return {
      city: ''

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo: function () {
      this.axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      console.log(res)
    }
  },
  mounted: function () {
    this.getHomeInfo()
  }
}
</script>
