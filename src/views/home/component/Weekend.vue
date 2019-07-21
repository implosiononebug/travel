<template>
  <div class="Weekend-container">
    <div class="Weekend-title">周末去哪儿</div>
    <div class="Weekend-box" v-for="item of List" :key="item.id">
      <div class="rec-img">
        <img :src="item.imgUrl" />
      </div>
      <div class="rec-info">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    List: Array
  },
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
  .Weekend-title {
    margin-top:.5em;
    text-indent:1em;
    text-align:left;
    padding-top:.5em;
    padding-bottom:.5em;
    background:#eee;
  }
  .Weekend-box {
    overflow:hidden;
    border-bottom: 1px solid #eee;
  }
  .rec-img > img {
    padding-top: .5rem;
    width: 100%;
  }
  .rec-img {
    padding:.5rem;
  }
  .rec-info {
    padding-top:.5rem;
    text-align:left;
  }
  .rec-info > p {
    padding:0 0 .5rem 0;
    overflow: hidden;
    text-indent: .5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .rec-info > p:first-child {
    font-weight: bold;
  }
  .rec-info > p:nth-child(2) {
    color:#999;
    font-size:.9rem;
  }
  .rec-info > button {
    background:coral;
    color: white;
    border:0;
    padding:.6rem;
    margin:.5rem .5rem 0 0;
    border-radius: 5px;
  }
</style>
