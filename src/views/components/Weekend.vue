<template>
  <div class="Weekend-container">
    <div class="Weekend-title">周末去哪儿</div>
    <div class="Weekend-box" v-for="item of WeekendList" :key="item.id">
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
  data: function () {
    return {
      WeekendList: [
        { id: '001',
          imgUrl: '//imgs.qunarzz.com/p/tts6/1709/ee/45f3c09504f42d02.jpg_256x144_73f57dfa.jpg',
          title: '黄山出发一日游',
          desc: '新安江山水画廊+徽州古城+雄村一日游 （纯玩零购物，上门接）'
        },
        { id: '002',
          imgUrl: '//imgs.qunarzz.com/p/tts6/1902/d3/d7d19b131375b702.jpg_256x144_c61e377b.jpg',
          title: '黄山出发一日游',
          desc: '【黄山出发、品质纯玩】宏村+西递一日游（赠中餐）'
        },
        { id: '003',
          imgUrl: '//imgs.qunarzz.com/p/tts3/1906/64/c2243508a590b202.jpg_256x144_a80b1d43.jpg',
          title: '合肥出发一日游',
          desc: '霍山大峡谷漂流一日游【白云峡瀑布群+玻璃桥 赠打水仗道具 】'
        },
        { id: '004',
          imgUrl: '//imgs.qunarzz.com/p/tts9/1902/95/885440113ebd0f02.png_256x144_53e4eef4.png',
          title: '黄山出发一日游',
          desc: '安徽黄山宏村景区+西递一日游【夹溪河漂流·纯玩·上门接送】'
        }
      ]
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
