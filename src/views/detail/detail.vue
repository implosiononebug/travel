<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '../detail/component/banner'
import DetailHeader from '../detail/component/header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style scoped>
  .content {
    height: 50rem;
  }
</style>


