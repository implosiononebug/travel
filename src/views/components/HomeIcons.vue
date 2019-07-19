<template>
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icons">
            <div class="icon" v-for="item of page" :key="item.id">
              <div class="icon-img">
                  <img class="icon-img-content" :src="item.imgUrl" />
              </div>
              <p class="icon-desc">{{item.desc}}</p>
            </div>
        </div>
      </swiper-slide>
    </swiper>
</template>

<script>
export default {
  name: 'HomeIcon',
  data: function () {
    return {
      iconList: [
          {id: '001', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '景点门票'},
          {id: '002', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png', desc: '火车票'},
          {id: '003', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png', desc: '度假'},
          {id: '004', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png', desc: '机票'},
          {id: '005', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '酒店'},
          {id: '006', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', desc: '景点门票'},
          {id: '007', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png', desc: '火车票'},
          {id: '008', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png', desc: '度假'},
          {id: '009', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png', desc: '机票'},
          {id: '010', imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', desc: '酒店'}
        ]
    }
  },
  computed: {
    pages: function () {
      const pages = [];
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index/8)
        if(!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      });
      return pages
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
    padding-top:10px;
    width: 100%;
  }
  .icon-img-content {
    width:60%;
  }
  .icon-desc {
    position:absolute;
    color:#333;
    bottom:7px;
    left:0;
    right:0;

  }
</style>
