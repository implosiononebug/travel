<template>
  <div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-list" ref="search" v-show="keyword">
        <ul>
          <li v-for="item in list" :key="item.id" class="list-item">
            {{item.name}}
          </li>
          <li class="list-item" v-if="hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Bsroll from 'better-scroll'
import { clearTimeout, setTimeout } from 'timers'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {

  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if(this.timer) {
        clearTimeout(this.timer)
      }
      if(!this.keyword) {
        this.list = [];
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.cities) {
          this.cities[i].forEach((value) => {
            if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 10)
    }
  },
  mounted: function () {
    this.scroll = new Bsroll(this.$refs.search)
  }
}
</script>

<style scoped>
  .search-input {
    width:97%;
    font-size: .9rem;
    border:0;
    height:10%;
    padding: .5rem;
    text-align: center;
    box-sizing:border-box;
  }
  .search-list {
    z-index:1 !important;
    background: white;
    position: absolute;
    top:5.5em;
    left:0;
    right:0;
    overflow: hidden;
    bottom:0;
  }
  .list-item {
      text-align: left;
      padding:.7rem 0 .6rem .9rem;
      border-bottom: 1px solid #ccc;
    }
</style>

