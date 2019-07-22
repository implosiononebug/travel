<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="box-list">
          <div class="list-title">
              当前城市
          </div>
          <div class="button-wrapper">
            <button class="button">
              合肥
            </button>
          </div>
      </div>
      <div class="box-list">
          <div class="list-title">
              热门城市
          </div>
          <div class="button-wrapper">
            <button class="button">
              合肥
            </button>
          </div>
          <div class="button-wrapper">
            <button class="button">
              南京
            </button>
          </div>
          <div class="button-wrapper">
            <button class="button">
              北京
            </button>
          </div>
          <div class="button-wrapper">
            <button class="button">
              西安
            </button>
          </div>
          <div class="button-wrapper">
            <button class="button">
              重庆
            </button>
          </div>
          <div class="button-wrapper">
            <button class="button">
              成都
            </button>
          </div>
          <div class="button-wrapper">
            <button class="button">
              武汉
            </button>
          </div>
      </div>
      <div class="box-list">
        <div class="list-title">
          A
        </div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
      </div>
      <div class="box-list">
        <div class="list-title">
          A
        </div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
      </div>
      <div class="box-list">
        <div class="list-title">
          A
        </div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
        <div class="list-item"><span>阿拉尔</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped>
    .list {
      position: absolute;
      top:5.5rem;
      left:0;
      right:0;
      bottom:0;
      overflow: hidden;
    }
    .box-list {
      overflow: hidden;
    }
    .list-title {
      text-align: left;
      background: #eee;
      padding: .25rem 0 .25rem .9rem;
      font-size: .9rem;
    }
    .button-wrapper {
      float:left;
      width: 26.03%;
      margin: 0.5rem .2rem .5rem .9rem;
    }
    .button {
      background: white;
      border: 1px solid #ccc;
      border-radius: .2rem;
      padding:.2rem;
      width: 100%;
      font-size:.9rem;
    }
    .list-item {
      text-align: left;
      padding:.7rem 0 .6rem .9rem;
      border-bottom: 1px solid #ccc;
    }
</style>



