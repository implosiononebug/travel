<template>
  <ul class="list">
    <li
      class="item"
      @click="handelClickLetter"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handelTouchStart"
      @touchmove="handelTouchMove"
      @touchend="handelTouchEnd"
      >{{item}}</li>
  </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data:function () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters() {
      const letters = [];
      for(let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handelClickLetter: function (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handelTouchStart: function () {
      this.touchStatus = true
    },
    handelTouchMove: function (e) {
      if(this.touchStatus) {
        //  函数节流
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 88
          const index = Math.floor((touchY - this.startY) / 19.2)
          this.$emit('change', this.letters[index])
          console.log(index)
        },16)

      }
    },
    handelTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped>
  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 5.5rem;
    right:0;
    bottom:0;
    width:1.5rem;
  }
  .item {
    padding: .1rem 0 .1rem 0;
    color: #6fbdf1;
  }
</style>
