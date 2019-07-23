<template>
  <div>
    <div class="header-container">
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
    </div>
    <city-list :letter="letters" :hotcitieslist="hotcities" :cities="cities"></city-list>
    <alphabet @change="handelGetLetters" :cities="cities"></alphabet>
  </div>
</template>

<script>
import CityHeader from './component/cityheader'
import CitySearch from './component/citysearch'
import CityList from './component/citylist'
import Alphabet from './component/cityalpha'

export default {
  name: 'city',
  data: function () {
    return {
      cities: {},
      hotcities: [],
      letters: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  },
  methods: {
    getCityinfo: function () {
      this.axios.get('/static/mock/city.json').then(this.getCityinfoSucc)
    },
    getCityinfoSucc: function (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotcities = data.hotCities
      }
    },
    handelGetLetters: function (e) {
        this.letters = e
    }
  },
  mounted: function () {
    this.getCityinfo()
  }
}
</script>

<style scoped>
  .header-container {
    height: 5.5rem;
    background: #6fe4f1;
  }
</style>
