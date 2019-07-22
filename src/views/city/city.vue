<template>
  <div>
    <div class="header-container">
      <city-header></city-header>
      <city-search></city-search>
    </div>
    <city-list></city-list>
    <alphabet></alphabet>
  </div>
</template>

<script>
import CityHeader from './component/cityheader'
import CitySearch from './component/citysearch'
import CityList from './component/citylist'
import Alphabet from './component/cityalpha'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet
  }
}
</script>

<style scoped>
  .header-container {
    height: 5.5rem;
    background: #6fe4f1;
    position: relative;
  }
</style>
