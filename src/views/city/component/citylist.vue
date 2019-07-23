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
          <div class="button-wrapper" v-for="item of hotcitieslist" :key="item.id">
            <button class="button">
              {{item.name}}
            </button>
          </div>
      </div>
      <div :ref="key" class="box-list" v-for="(item, key) of cities" :key="key">
        <div class="list-title">
          {{key}}
        </div>
        <div class="list-item" v-for="innerItem of item" :key="innerItem.id">
          <span>{{innerItem.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hotcitieslist: Array,
    cities: Object,
    letter: String
  },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter() {
      if(this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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



