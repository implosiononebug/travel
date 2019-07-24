<template>
  <div class="home">
    <home-header></home-header>
    <home-Swiper :List="swiperList"></home-Swiper>
    <home-icon :List="iconList"></home-icon>
    <home-recommend :List="recommendList"></home-recommend>
    <home-weekend :List="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/HomeHeader.vue'
import HomeSwiper from './component/HomeSwipers.vue'
import HomeIcon from './component/HomeIcons.vue'
import HomeRecommend from './component/Recommend.vue'
import HomeWeekend from './component/Weekend.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  data: function () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
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
      this.axios.get('/static/mock/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
        res = res.data
        if(res.ret && res.data) {
          const data = res.data
          this.swiperList = data.SwiperList
          this.iconList =  data.IconList
          this.recommendList = data.RecommendList
          this.weekendList = data.WeekendList
        }
    }
  },
  mounted: function () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated: function () {
    if(this.lastCity !== this.city ) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
