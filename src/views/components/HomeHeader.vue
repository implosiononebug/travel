<template>
  <div class="homeheader">
      <div class="homeheader-left">
        <span class="iconfont">&#xe60e;</span>

      </div>
      <div class="homeheader-input">
        <span class="iconfont">&#xe627;</span>
        搜索
      </div>
      <div class="homeheader-right">
        <span class="iconfont">城市&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
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
  }
  .homeheader-input {
    width:100px;
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
    width: 60px;
  }
</style>

