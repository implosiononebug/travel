<template>
  <div>
  <div class="banner" @click="handelClickShow">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1609/f1/f10a167617911cb6a3.water.jpg_600x330_e5534717.jpg" />
      <div class="banner-info">
        <div class="banner-title">合肥融创水世界</div>
        <div class="banner-number">
            <span class="iconfont banner-icon">&#xe64e;{{this.imgs.length}}</span>
        </div>
      </div>
  </div>
    <common-gallary
       @close="handelCloseGallary"
       v-show="showGallary"
       :imgs="imgs"
    >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data() {
    return {
        showGallary: false,
        imgs:['http://img1.qunarzz.com/sight/p0/1609/f1/f10a167617911cb6a3.water.jpg_350x240_dea36938.jpg',
        'http://img1.qunarzz.com/sight/p0/1609/e9/e9bfd34301c98ca9a3.water.jpg_350x240_9866d3bb.jpg',
        'http://img1.qunarzz.com/sight/p0/1609/98/9838672ef2100b9ba3.water.jpg_350x240_e80b7395.jpg',
        'http://img1.qunarzz.com/sight/p0/1606/32/3292cea0f4188d74e2.water.jpg_350x240_ada117be.jpg']
    }
  },
  methods: {
    handelClickShow: function () {
      this.showGallary = true
    },
    handelCloseGallary: function () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style scoped>
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
  }
  .banner-img {
    width: 100%;
  }
  .banner-info {
    position: absolute;
    left: 0;
    right:0;
    bottom :0;
    display: flex;
    background-image: linear-gradient(left top, rgba(0,0,0,0,) ,rgba(0,0,0,0.8))
  }
  .banner-title {
    flex: 1;
    color: white;
    text-align: left;
    font-size:1.1rem;
    text-indent: .6rem;
    padding-bottom: .2rem;
  }
  .banner-number {
    padding: 0 1.3rem;
    line-height: 0.6rem;
    height: .82rem;
    border-radius: 1.4rem;
    font-size: 1rem !important;
    color: white;
    margin:.2rem .4rem 0 0;
    background: rgba(0,0,0,.8)
  }
  .banner-icon{
    font-size: .7rem;
  }
</style>

