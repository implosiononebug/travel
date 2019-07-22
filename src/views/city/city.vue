<template>
  <div class="header-container">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './component/cityheader'
import CitySearch from './component/citysearch'

export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
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
