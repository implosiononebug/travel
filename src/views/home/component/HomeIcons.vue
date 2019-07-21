<template>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icons">
            <div class="icon" v-for="item of page" :key="item.id">
              <div class="icon-img">
                  <img class="icon-img-content" :src="item.imgUrl" />
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
        </div>
      </swiper-slide>
    </swiper>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    List: Array
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages: function () {
      const pages = [];
      this.List.forEach((item,index) => {
        const page = Math.floor(index/8)
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
  .icons {
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height:0;
    padding-bottom: 25%;
  }
  .icon-img {
    position: absolute;
    top:0;
    left:0;
    padding-top:10px;
    width: 100%;
  }
  .icon-img-content {
    width:60%;
  }
  .icon-desc {
    position:absolute;
    color:#333;
    bottom:7px;
    left:0;
    right:0;

  }
</style>
