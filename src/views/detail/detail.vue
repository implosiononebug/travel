<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '../detail/component/banner'
import DetailHeader from '../detail/component/header'
import DetailList from '../detail/component/list'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [{
        title: '旺季全天成人票',
        children: [{
          title: '【全天旺季票】融创水乐园亲子票（1大1小）（暑期特惠）',
          children: [{
            title: '融创水乐园全天亲子票（1大1小）(7.1-8.31特惠)'
          },{
            title: '合肥融创水世界全天门票亲子票（1大1小）(7.1-8.31特惠-专享分销)'
          }]
        },{
          title: '【旺季全天票】融创水乐园成人票（7.1-8.30）',
          children: [{
            title: '【旺季全天票】融创水乐园成人票（暑期/节假日）'
          },{
            title: '合肥融创水世界全天门票成人票(当天可订/随买随用-专享分销,旺季)'
          },{
            title: '合肥融创水世界全天门票成人票(旺季-专享分销)'
          }]
        }
        ]
      },{
        title: '旺季全天优待票',
        children: [{
          title: '【旺季全天票】融创水乐园优惠人群票（儿童/学生/老人）',
          children: [{
            title: '【旺季全天票】融创水乐园优待票（儿童/学生/老人）'
          },{
            title: '合肥融创水世界全天门票优待票(儿童/老人/军人/学生/残疾票)(官方/当天可订/随买随用-专享分销,旺季)'
          },{
            title: '合肥融创水世界全天门票优待票(儿童/老人/军人/学生/残疾票)(旺季-专享分销)'
          }]
        },{
          title: '【旺季全天票】融创水乐园优待票（儿童/学生/老人）（随订随进）',
          children: [{
            title: '【旺季全天票】融创水乐园优待票（儿童/学生/老人（随订随进）'
          }]
        }]
      },{
        title: '暑期夜场票',
        children: [{
          title: '【夜场票】融创水乐园成人票',
          children: [{
            title:'合肥融创水世界夜场门票成人票(7.1-8.31每周一至周四)'
          },{
            title:'【 官方电子票、入园快捷】合肥融创水乐园夜场成人票'
          },{
            title:'合肥融创水世界夜场门票成人票(7.1-8.31每周一至周四-专享分销)'
          }]
        } ]
      },{
        title: '暑期热销联票',
        children: [{
          title: '【全天旺季票】融创水乐园+融创乐园成人联票（暑期特惠）',
          children: [{
            title: '【全天旺季票】融创水乐园+融创乐园成人联票（暑期特惠）'
          }]
        },{
          title: '【全天旺季票】融创水乐园+融创乐园+飞越安徽成人联票',
          children: [{
            title: '【全天旺季票】融创水乐园+融创乐园+飞越安徽成人联票'
          }]
        }]
      }]
    }
  }
}
</script>

<style scoped>
  .content {
    height: 50rem;
  }
</style>


