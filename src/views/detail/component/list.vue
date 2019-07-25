<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <h3 class="item-title">
        <span class="title-icon"></span>
        {{ item.title }}
      </h3>
      <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props:{
    list: Array
  }
}
</script>

<style scoped>
  .item-title {
    padding: .6rem 0;
    text-align: left;
    text-indent: 1rem;
    line-height: 1.1rem;
    border-bottom: 1px solid #eee;
  }
  .title-icon {
    display: inline-block;
    width: .6rem;
    height: .6rem;
    background: #6fe4f1;
    margin-right: .1rem;
    margin-bottom: .1em;
    border-radius: .4rem;
    background-size: .4rem 3rem;
  }
  .item-children {
    padding:0 .6rem;
  }
</style>

