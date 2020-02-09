<template>
  <div>
<!--    <Header></Header>-->
    <full-page :options="options">
      <div class="section ds-header">
<!--        <el-image src="/static/img/images/dsHeader.jpg" @load="quickJump"></el-image>-->
        <div class="quick-jump-font">
          <p style="text-align: center;line-height: 3rem">
              <span v-for="i in 4" >
                <a :href="'#'+i" >{{$t('ds.backpack.'+i)}}</a>
<!--                <a @click="handleItem(i)">{{$t('ds.backpack.'+i)}}</a>-->
                <span v-if="i!=4">/</span>
              </span><br>
            <span v-for="i in 5"><a :href="'#'+(i+4)">{{$t('ds.backpack.'+(i+4))}}</a>
              <span v-if="i!=5">/</span>
              </span>
          </p>
        </div>
      </div>
      <!--<div class="section">
        &lt;!&ndash;    快速跳转模块&ndash;&gt;
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
      </div>-->
      <!--<div class="section page-left" :style="{'background-image':'url('+ item.bgImg + ')'}"
           v-for="(item,index) in list">-->
      <div class="section page-left" v-lazy:background-image="{src: item.bgImg}"
           v-for="(item,index) in list">
        <div :class="[index%2==0?'name-span':'name-span-right',index==0||index==2?'temp':'']"><span>{{item.nameSpan}}</span></div>
        <div :class="[index%2==0?'title-span':'title-span-right',index==0||index==2?'temp':'']"><span>{{$t('ds.title')}}</span></div>
        <el-image :src="item.floatImg" :class="index%2==0?'float-img':'float-img-right'" fit="contain"></el-image>
        <!--<el-button plain :class="index%2==0?'learn-more-btn':'learn-more-btn-right'"> {{$t('ds.learnMore')}}</el-button>
        <el-button plain :class="index%2==0?'to-storm-btn':'to-storm-btn-right'" v-show="index==0">
          {{$t('ds.goToStorm')}}
        </el-button>-->
      </div>
      <!--<div class="section">
        <FooterImage></FooterImage>
      </div>-->
    </full-page>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        options: {
          // afterLoad: this.afterLoad,
          navigation: true,
          anchors: [
            'top',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            'end'],
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
        quickJumpFlag:false
      }
    },
    computed: {
      list () {
        return [
          {
            bgImg: '/static/img/images/甜品站_04.jpg',
            floatImg: '/static/img/images/冰淇淋-浮动.png',
            nameSpan: this.$t('ds.list.1'),
            id: 'run1'
          },
          {
            bgImg: '/static/img/images/甜品站_05.jpg',
            floatImg: '/static/img/images/松饼-浮动.png',
            nameSpan: this.$t('ds.list.2'),
            id: 'run2'

          },
          {
            bgImg: '/static/img/images/甜品站_06.jpg',
            floatImg: '/static/img/images/香蕉船-浮动.png',
            nameSpan: this.$t('ds.list.3'),
            id: 'run3'
          },
          {
            bgImg: '/static/img/images/甜品站_07.jpg',
            floatImg: '/static/img/images/布丁-浮动.png',
            nameSpan: this.$t('ds.list.4'),
          },
          {
            bgImg: '/static/img/images/甜品站_08.jpg',
            floatImg: '/static/img/images/奶茶-浮动.png',
            nameSpan: this.$t('ds.list.5'),
          },
          {
            bgImg: '/static/img/images/甜品站_09.jpg',
            floatImg: '/static/img/images/杯子蛋糕-浮动.png',
            nameSpan: this.$t('ds.list.6'),
          },
          {
            bgImg: '/static/img/images/甜品站_10.jpg',
            floatImg: '/static/img/images/吐司-浮动.png',
            nameSpan: this.$t('ds.list.7'),
          },
          {
            bgImg: '/static/img/images/甜品站_11.jpg',
            floatImg: '/static/img/images/班戟-浮动.png',
            nameSpan: this.$t('ds.list.8'),
          },
          {
            bgImg: '/static/img/images/甜品站_12.jpg',
            floatImg: '/static/img/images/薄饼-浮动.png',
            nameSpan: this.$t('ds.list.9'),
          },
        ]
      },
    },
    methods:{
      quickJump() {
        this.quickJumpFlag = true
      }
    }
  }
</script>

<style scoped>
  .ds-header {
    /*background-image: url("/static/img/images/dsHeader.jpg");*/
    background-image: url("https://kaze.oss-cn-shenzhen.aliyuncs.com/myd/dsHeader.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
  }

  /* quick-jump快速跳转模块*/
  .quick-jump {
    background: white;
  }

  .quick-jump-font {
    font-size: 1rem;
    /*font-family: FZ;*/
    font-family: PingFangSC-Ultralight, sans-serif;
    letter-spacing: 2px;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%,0);

  }

  .quick-jump-font a {
    color: black;
    margin: 0 1.5rem;
  }

  /*  end*/


  /* 左边样式*/
  .page-left {
    /*background-image: url("/static/img/images/甜品站_04.jpg");*/
    position: relative;
    /*background-repeat: round;*/
    background-size: cover;
    background-position: center center;
  }

  .float-img {
    top: 37%;
    left: 12%;
    position: absolute;
    /*width: 51rem;*/
    /*width: 28.5%;*/
    width: 52vh;
  }

  .name-span {
    color: #9d9c7e;
    /*font-size: 4rem;*/
    font-size: 4vh;
    /*font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;*/
    font-family: DS;
    position: relative;
    top: 28%;
    left: 13%;
  }

  .title-span {
    color: #9d9c7e;
    /*font-size: 1.8rem;*/
    font-size: 1.8vh;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 28%;
    left: 13%;
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
    /*width: 51rem;*/
    /*width: 28.5%;*/
    width: 52vh;
  }

  .name-span-right {
    color: #9d9c7e;
    /*font-size: 4rem;*/
    font-size: 4vh;
    /*font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;*/
    font-family: DS;
    position: relative;
    top: 28%;
    /*left: 69%;*/

    /*width: 30rem;*/
    /*width: 17%;*/
    margin-right: 12%;
    text-align: right;
  }

  .title-span-right {
    color: #9d9c7e;
    /*font-size: 1.8rem;*/
    font-size: 1.8vh;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    position: relative;
    top: 28%;
    /*left: 71.5%;*/

    /*width: 26rem;*/
    /*width: 14%;*/
    margin-right: 12%;
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

  /*temp*/
  .temp {
    color: white;
  }


  @media screen and (max-width: 600px) {

  }

</style>
