<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>


<script>
import HomeHeader from './components/HomeHeader.vue'
export default {
  name: 'home',
  data: function () {
    return {
      msg: 'welcome to vue app'
    }
  },
  components: {
    HomeHeader
  }
}
</script>
