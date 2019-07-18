<template>
  <div class="icons">
      <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" />
        </div>
        <p class="icon-desc">热门景点 </p>
      </div>
      <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" />
        </div>
        <p class="icon-desc">热门景点 </p>
      </div>
      <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" />
        </div>
        <p class="icon-desc">热门景点 </p>
      </div>
      <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" />
        </div>
        <p class="icon-desc">热门景点 </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data: function () {
    return {
      List: [{id: '001', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', imgDesc: '景点门票'}]
    }
  }
}
</script>

<style scoped>
  .icons {
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
  }
  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height:0;
    padding-bottom: 25%;
  }
  .icon-img {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
  }
  .icon-img-content {
    width:70%;
  }
  .icon-desc {
    position:absolute;
    color:#333;
    bottom:7px;
    left:0;
    right:0;

  }
</style>
