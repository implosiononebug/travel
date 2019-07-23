<template>
    <div class="city-header">
        <router-link to="/">
          <span class="iconfont city-back">&#xe60e;</span>
        </router-link>
        <p class="city-choose">城市选择</p>
    </div>
</template>

<script>
export default {
  name:'CityHeader'
}
</script>

<style scoped>
  .city-header {
    height: 3rem;
    background: #6fe4f1;
    position: relative;
  }
  .city-choose {
    color: white;
    line-height: 3rem;
  }
  .city-back {
    color: white;
    position: absolute;
    left: .2rem;
    top: .9rem;
  }
</style>
