<template>
  <div class="recommend-container">
    <div class="recommend-title">热销推荐</div>
    <div class="recommend-box" v-for="item of recommendList" :key="item.id">
      <div class="rec-img">
        <img :src="item.imgUrl" />
      </div>
      <div class="rec-info">
        <p>{{item.title}}</p>
        <p>{{item.desc}}</p>
        <button>查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data: function () {
    return {
      recommendList:[
        { id: '001', imgUrl: 'http://imgs.qunarzz.com/p/tts5/1808/81/915df9066af34302.jpg_r_480x320x90_c5c046f5.jpg' ,
          title:'北京-广州 跟5天团游',
          desc:'广州+珠海双长隆+珠江夜游5日+升级两晚国际五星+观港珠澳大桥+寻味顺德水乡'
        },
        { id: '002',
          imgUrl: 'http://imgs.qunarzz.com/vs_ceph_vs_tts/8bf89971-047d-416c-941c-123eb57914f3.jpg_r_480x320x90_08a97eb1.jpg' ,
          title:'北京-北戴河 2天跟团游',
          desc:'<山海关+北戴河2日>一价全含 碧螺塔篝火狂欢+鸽子窝赶海+帆船出海+山海关'
        },
        { id: '003',
          imgUrl: 'http://imgs.qunarzz.com/p/tts5/1804/ba/fcf263e7f3c55502.jpg_r_480x320x90_97d7f882.jpg' ,
          title:'北京-青岛 5天跟团游',
          desc:'【青岛高铁五日游】海上第一名山-崂山+逢莱八仙过海+威海定远舰，舒适商务酒店'
        },
        { id: '004',
          imgUrl: 'http://imgs.qunarzz.com/p/tts3/1810/6a/d375424459abba02.jpg_r_480x320x90_2281ec8e.jpg' ,
          title:'北京-土耳其 11天跟团游',
          desc:'暑期预售>温泉酒店+海边酒店+爱琴海>土耳其+卡帕+伊斯坦堡10-13天'
        },

      ]
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
