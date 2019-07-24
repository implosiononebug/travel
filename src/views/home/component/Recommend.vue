<template>
  <div class="recommend-container">
    <div class="recommend-title">热销推荐</div>
    <router-link
      tag="div"
      class="recommend-box"
      v-for="item of List"
      :key="item.id"
      to='detail/item.id'
    >
      <div class="rec-img">
        <img :src="item.imgUrl" />
      </div>
      <div class="rec-info">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
        <button>查看详情</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
  .recommend-title {
    margin-top:.5em;
    text-indent:1em;
    text-align:left;
    padding-top:.5em;
    padding-bottom:.5em;
    background:#eee;
  }
  .recommend-box {
    overflow:hidden;
  }
  .rec-img > img {
    width: 11rem;
    height: 7rem;
  }
  .rec-img {
    float:left;
    padding:.5rem;
  }
  .rec-info {
    padding-top:.5rem;
    text-align:left;
  }
  .rec-info > p {
    padding:.5rem 0 .5rem 0;
    overflow: hidden;
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
