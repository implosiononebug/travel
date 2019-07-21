<template>
  <div class="waper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="item of List" :key="item.id">
        <img class="swiper-silde-wd" :src="item.imgUrl" >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwipers',
  props: {
    List: Array
  },
  data: function () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination'
    }
    }
  }
}
</script>

<style scoped>
  .waper >>> .swiper-pagination-bullet-active {
    background: white !important;
  }
  .waper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31%;
    background-color:#eee;
  }
  .swiper-silde-wd {
    width:100%;
  }

</style>
