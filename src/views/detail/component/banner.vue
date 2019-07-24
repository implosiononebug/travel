<template>
  <div class="banner">
      <img class="banner-img" src="https://img1.qunarzz.com/p/tts0/1806/b6/3a08046d6c19c002.jpg_r_640x420x90_7bcc3095.jpg" />
      <div class="banner-info">
        <div class="banner-title">三亚亚龙湾红树林</div>
        <div class="banner-number">
            <span class="iconfont banner-icon">&#xe64e;6</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
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

