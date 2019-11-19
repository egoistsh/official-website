<template>
  <div>
    <Header></Header>
    <full-page :options="options">
      <div class="section">
        <el-image src="/static/img/images/甜品站_02.jpg"></el-image>
      </div>
      <div class="section">
        <!--    快速跳转模块-->
        <div class="quick-jump">
          <div class="quick-jump-img">
            <p style="text-align: center">
              <el-image src="/static/img/bigLogo.jpg" style="height: 20rem;width: 20rem"></el-image>
            </p>
          </div>
          <div class="quick-jump-font">
            <p style="text-align: center">
              <span v-for="i in 4">
                <a :href="'#'+'page'+i">{{$t('ds.backpack.'+i)}}</a>
                <span v-if="i!=4">/</span>
              </span><br>
              <span v-for="i in 5"><a :href="'#'+'page'+(i+4)">{{$t('ds.backpack.'+(i+4))}}</a>
              <span v-if="i!=5">/</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="section page-left" :style="{'background-image':'url('+ item.bgImg + ')'}"
           v-for="(item,index) in list">
        <div :class="index%2==0?'name-span':'name-span-right'"><span>{{item.nameSpan}}</span></div>
        <div :class="index%2==0?'en-name-span':'en-name-span-right'"><span>{{item.enNameSpan}}</span></div>
        <div :class="index%2==0?'title-span':'title-span-right'"><span>{{$t('ds.title')}}</span></div>
        <el-image :src="item.floatImg" :class="index%2==0?'float-img':'float-img-right'"></el-image>
        <el-button plain :class="index%2==0?'learn-more-btn':'learn-more-btn-right'"> {{$t('ds.learnMore')}}</el-button>
        <el-button plain :class="index%2==0?'to-storm-btn':'to-storm-btn-right'" v-show="index==0">
          {{$t('ds.goToStorm')}}
        </el-button>
      </div>
      <div class="section">
        <FooterImage></FooterImage>
      </div>
    </full-page>
    <FooterImage></FooterImage>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        /*options: {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          afterLoad: this.afterLoad,
          scrollOverflow: false,
          scrollBar: false,
          // menu: '#menu',
          navigation: true,
          navigationPosition:'right',
          slidesNavigation:true,
          // anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }*/
        options: {
          // afterLoad: this.afterLoad,
          navigation: true,
          anchors: [
            'top',
            'second',
            'page1',
            'page2',
            'page3',
            'page4',
            'page5',
            'page6',
            'page7',
            'page8',
            'page9',
            'page10',
            'page11',
            'page12',
            'page13'],
          /*sectionsColor: [
            '#41b883',
            '#ff5f45',
            '#0798ec',
            '#fec401',
            '#1bcee6',
            '#ee1a59',
            '#2c3e4f',
            '#ba5be9',
            '#b4b8ab'],*/
        },
        /*list:[
          {
            bgImg:'/static/img/images/甜品站_04.jpg',
            floatImg:'/static/img/images/冰淇淋-浮动.png',
            nameSpan:'冰淇淋系列',
            enNameSpan:'ICE CREAM'
          },
          {
            bgImg:'/static/img/images/甜品站_05.jpg',
            floatImg:'/static/img/images/松饼-浮动.png',
            nameSpan:'松饼系列',
            enNameSpan:'MUFFIN'

          },
          {
            bgImg:'/static/img/images/甜品站_06.jpg',
            floatImg:'/static/img/images/香蕉船-浮动.png',
            nameSpan:'香蕉船系列',
            enNameSpan:'BANANA SPLIT'
          },
          {
            bgImg:'/static/img/images/甜品站_07.jpg',
            floatImg:'/static/img/images/布丁-浮动.png',
            nameSpan:'布丁系列',
            enNameSpan:'PUDDING'
          },
          {
            bgImg:'/static/img/images/甜品站_08.jpg',
            floatImg:'/static/img/images/奶茶-浮动.png',
            nameSpan:'奶茶系列',
            enNameSpan:'MILKY TEA'
          },
          {
            bgImg:'/static/img/images/甜品站_09.jpg',
            floatImg:'/static/img/images/香蕉船-浮动.png',
            nameSpan:'香蕉船系列',
            enNameSpan:'BANANA SPLIT'
          },
          {
            bgImg:'/static/img/images/甜品站_10.jpg',
            floatImg:'/static/img/images/杯子蛋糕-浮动.png',
            nameSpan:'杯子蛋糕系列',
            enNameSpan:'CUP CAKE'
          },
          {
            bgImg:'/static/img/images/甜品站_11.jpg',
            floatImg:'/static/img/images/吐司-浮动.png',
            nameSpan:'吐司迷你系列',
            enNameSpan:'TOAST MINI'
          },
          {
            bgImg:'/static/img/images/甜品站_12.jpg',
            floatImg:'/static/img/images/班戟-浮动.png',
            nameSpan:'班戟系列',
            enNameSpan:'CUP CAKE'
          }
        ]*/
      }
    },
    computed: {
      list () {
        return [
          {
            bgImg: '/static/img/images/甜品站_04.jpg',
            floatImg: '/static/img/images/冰淇淋-浮动.png',
            nameSpan: this.$t('ds.list.1'),
            enNameSpan: 'ICE CREAM',
          },
          {
            bgImg: '/static/img/images/甜品站_05.jpg',
            floatImg: '/static/img/images/松饼-浮动.png',
            nameSpan: this.$t('ds.list.2'),
            enNameSpan: 'MUFFIN',

          },
          {
            bgImg: '/static/img/images/甜品站_06.jpg',
            floatImg: '/static/img/images/香蕉船-浮动.png',
            nameSpan: this.$t('ds.list.3'),
            enNameSpan: 'BANANA SPLIT',
          },
          {
            bgImg: '/static/img/images/甜品站_07.jpg',
            floatImg: '/static/img/images/布丁-浮动.png',
            nameSpan: this.$t('ds.list.4'),
            enNameSpan: 'PUDDING',
          },
          {
            bgImg: '/static/img/images/甜品站_08.jpg',
            floatImg: '/static/img/images/奶茶-浮动.png',
            nameSpan: this.$t('ds.list.5'),
            enNameSpan: 'MILKY TEA',
          },
          {
            bgImg: '/static/img/images/甜品站_09.jpg',
            floatImg: '/static/img/images/杯子蛋糕-浮动.png',
            nameSpan: this.$t('ds.list.6'),
            enNameSpan: 'CUP CAKE',
          },
          {
            bgImg: '/static/img/images/甜品站_10.jpg',
            floatImg: '/static/img/images/吐司-浮动.png',
            nameSpan: this.$t('ds.list.7'),
            enNameSpan: 'TOAST MINI',
          },
          {
            bgImg: '/static/img/images/甜品站_11.jpg',
            floatImg: '/static/img/images/班戟-浮动.png',
            nameSpan: this.$t('ds.list.8'),
            enNameSpan: 'BENJI',
          },
          {
            bgImg: '/static/img/images/甜品站_12.jpg',
            floatImg: '/static/img/images/薄饼-浮动.png',
            nameSpan: this.$t('ds.list.9'),
            enNameSpan: 'PIZZA',
          },
        ]
      },
    },
  }
</script>

<style scoped>
  /* quick-jump快速跳转模块*/
  .quick-jump {
    background: white;
  }

  .quick-jump-font {
    font-size: 1rem;
    margin-bottom: 5rem;
    /*font-family: FZ;*/
    font-family: PingFangSC-Ultralight, sans-serif;
  }

  .quick-jump-font a {
    color: black;
    margin: 0 2rem;
  }

  /*  end*/


  /* 左边样式*/
  .page-left {
    /*background-image: url("/static/img/images/甜品站_04.jpg");*/
    position: relative;
  }

  .float-img {
    top: 37%;
    left: 12%;
    position: absolute;
  }

  .name-span {
    color: white;
    font-size: 4rem;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 20%;
    left: 12.3%;
  }

  .en-name-span {
    color: white;
    font-size: 2rem;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 20%;
    left: 12.3%;
  }

  .title-span {
    color: white;
    font-size: 1.8rem;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 24%;
    left: 12.3%;
  }

  .learn-more-btn {
    position: absolute;
    top: 70%;
    left: 12.3%;
    width: 14rem;
    height: 4rem;
    background: #9d9c7e;
    color: white;
    border: none;
    border-radius: 0;
  }

  .learn-more-btn:hover, .learn-more-btn:focus {
    background: #9d9c7e;
    color: white;
    border: none;
  }

  .to-storm-btn {
    position: absolute;
    top: 70%;
    left: 22%;
    width: 14rem;
    height: 4rem;
    background: white;
    color: #9d9c7e;
    border: none;
    border-radius: 0;
  }

  .to-storm-btn:hover, .to-storm-btn:focus {
    background: white;
    color: #9d9c7e;
    border: none;
  }

  /*end*/

  /* 右边样式*/
  .page-right {
    background-image: url("/static/img/images/甜品站_05.jpg");
    position: relative;
  }

  .float-img-right {
    top: 37%;
    right: 12%;
    position: absolute;
  }

  .name-span-right {
    color: #9d9c7e;
    font-size: 4rem;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 20%;
    left: 69%;

    width: 30rem;
    text-align: right;
  }

  .en-name-span-right {
    color: #9d9c7e;
    font-size: 2rem;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 20%;
    left: 78%;

    width: 15rem;
    text-align: right;
  }

  .title-span-right {
    color: #9d9c7e;
    font-size: 1.8rem;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 24%;
    left: 71.2%;

    width: 26rem;
    text-align: right;
  }

  .learn-more-btn-right {
    position: absolute;
    top: 70%;
    left: 79%;
    width: 14rem;
    height: 4rem;
    background: #9d9c7e;
    color: white;
    border: none;
    border-radius: 0;
  }

  .learn-more-btn-right:hover, .learn-more-btn-right:focus {
    background: #9d9c7e;
    color: white;
    border: none;
  }

  .to-storm-btn-right {
    position: absolute;
    top: 70%;
    left: 68%;
    width: 14rem;
    height: 4rem;
    background: white;
    color: #9d9c7e;
    border: none;
    border-radius: 0;
  }

  .to-storm-btn-right:hover, .to-storm-btn-right:focus {
    background: white;
    color: #9d9c7e;
    border: none;
  }

</style>
