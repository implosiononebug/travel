<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="box-list">
          <div class="list-title">
              当前城市
          </div>
          <div class="button-wrapper">
            <button class="button">
              {{this.currentCity}}
            </button>
          </div>
      </div>
      <div  class="box-list">
          <div class="list-title" >
              热门城市
          </div>
          <div @click="handelCityClick(item.name)"  class="button-wrapper" v-for="item of hotcitieslist" :key="item.id">
            <button class="button">
              {{item.name}}
            </button>
          </div>
      </div>
      <div :ref="key" class="box-list" v-for="(item, key) of cities" :key="key">
        <div class="list-title">
          {{key}}
        </div>
        <div class="item-list">
          <div
            class="item"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handelCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotcitieslist: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handelCityClick: function (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter() {
      if(this.letter) {
        console.log(this.letter)
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted: function () {
    const options = {
      click: true,
      tap: true
    }
    this.scroll = new BScroll(this.$refs.wrapper, options)
  },

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
    .box-list:after, .box-list:before {
      content:'';
      clear:both;
      display:block
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
    .item {
      text-align: left;
      padding:.7rem 0 .6rem .9rem;
      border-bottom: 1px solid #ccc;
    }
</style>



