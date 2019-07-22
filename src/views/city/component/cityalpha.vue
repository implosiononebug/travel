<template>
  <ul class="list">
    <li class="item" v-for="(item, key) of cities">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped>
  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 4rem;
    right:0;
    bottom:0;
    width:1.5rem;
  }
  .item {
    padding: .1rem 0 .1rem 0;
    color: #6fbdf1;
  }
</style>


