<template>
  <div class="homeheader">
      <div class="homeheader-left">
        <span class="iconfont">&#xe60e;</span>
      </div>
      <div class="homeheader-input">
        <span class="iconfont">&#xe627;</span>
        搜索
      </div>
      <router-link
       to='/city'
      >
        <div class="homeheader-right">
          <span class="iconfont">{{this.currentCity}}&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    }),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style scoped>
  .homeheader {
    display: flex;
    background-color: #6fe4f1;
    line-height: 50px;
    color:white;
  }
  .homeheader-left {
    float:left;
    width: 50px;
    text-align: left;
    margin: -.1rem 0 0 .2rem;
  }
  .homeheader-input {
    height: 35px;
    line-height:38px;
    margin-top:7px;
    padding-left:7px;
    background:white;
    border-radius: 5px;
    flex: 1;
    text-align:left;
    color:#e6e6e6;
  }
  .homeheader-right {
    float:right;
    min-width: 100px;
  }
  .iconfont {
    color:white;
  }
</style>

