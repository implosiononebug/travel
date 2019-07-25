<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
      <span class="iconfont">&#xe60e;</span>
    </router-link>
    <div class="header-fixed"
         v-show="showAbsBack"
         :style="opacityStyle"
    >
      <router-link tag="div" to="/" class="header-abs-back">
        <span class=" iconfont">&#xe60e;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  computed: {
    showAbsBack: function () {
      return !this.showAbs
    }
  },
  methods: {
    handelScroll() {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if(top > 40) {
        let opacity = (top-30) / 120
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      }
      else {
        this.showAbs = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handelScroll)
  },
  deactivated () {
    window.removeEventListener('scroll' , this.handelScroll)
  }
}
</script>
<style scoped>
  .header-abs {
    position: absolute;
    color:white;
    left: .2rem;
    top: .5rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0,.8)
  }
  .header-fixed{
    height: 3rem;
    background: #6fe4f1;
    line-height: 3rem;
    color:  white;
    position: fixed;
    top: 0;
    left:0;
    right:0;
  }
  .header-abs-back {
    color: #fff;
    position: absolute;
    left: .2rem;
    top: .5rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

