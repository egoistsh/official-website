<template>
  <div id="HomePage">
    <!-- start preloader -->
    <div class="preloader">
      <div class="sk-spinner sk-spinner-rotating-plane"></div>
    </div>
    <!-- end preloader -->
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper wow zoomIn">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <a :href="item.url" target="_blank"><img class="swiper-lazy" :data-src="item.imageUrl"></a>
            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!-- 手机轮播图 -->
    <!--<div id="swiper-app" class="container-fuild visible-xs">
      <div class="swiper-container banner-swiper wow zoomIn">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <a :href="item.url" target="_blank"><img class="swiper-lazy img-responsive" :data-src="item.imageUrl"></a>
            <div class="swiper-lazy-preloader"></div>
            &lt;!&ndash;<div class="swiper-slide-title">
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
            </div>&ndash;&gt;
          </div>
        </div>
        &lt;!&ndash; 如果需要分页器 &ndash;&gt;
        <div class="swiper-pagination"></div>

        &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>-->
    <!-- 大数据管理系统 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <a :href="left.url" v-if="left"><img class="img-responsive" :src="left.imageUrl"></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <video width="100%" height="auto" controls>
            <source src="@/assets/img/homeVideo.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    <div id="ranking">
      <p class="customer-title text-center">{{$t('home.ranking')}}</p>
      <div class="hidden-xs">
        <el-carousel :interval="4000" height="31rem" arrow="always">
          <el-carousel-item v-for="list in carouselList" :key="list.id">
            <div class="ranking-content">
              <div class="ranking-block" v-for="item in list">
                <a :href="'#/productDetail/'+item.id" target="_blank"><el-image :src="item.imageUrl" fit="cover" style="height: 23rem;width: 23rem" >
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image></a>
                <div class="item-title"><span>{{item.title}}</span></div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="visible-xs">
        <el-carousel :interval="4000" height="12rem" arrow="always">
          <el-carousel-item v-for="list in carouselList" :key="list.id">
            <div class="ranking-content">
              <div class="ranking-block" v-for="item in list">
                <a :href="'#/productDetail/'+item.id" target="_blank"><el-image :src="item.imageUrl" fit="cover" style="width: 9rem;height: 9rem">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image></a>
                <div class="item-title"><span>{{item.title}}</span></div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <FooterImage></FooterImage>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import { WOW } from 'wowjs'
  import {listArticle,listPictureConfigs,count} from '@/api/portal.js'

  /**
   * 记录访问，只有页面刷新或者第一次加载才会记录
   */
  count().then(res => {})

  export default {
    name: 'HomePage',
    data () {
      return {
        swiperList: [],
        serverList: [
          {
            logo: require('@/assets/img/tel.png'),
            title: 'XXX',
            content: '<p>XXX</p>XXX',
          },
          {
            logo: require('@/assets/img/computer.png'),
            title: 'XXX',
            content: '<p>XXX</p>XXX',
          },
          {
            logo: require('@/assets/img/qq.png'),
            title: 'XXX',
            content: '<p>XXX</p>XXX',
          },
          {
            logo: require('@/assets/img/skill.png'),
            title: 'XXX4',
            content: '<p>XXX</p>XXX',
          },
        ],
        swiper:undefined,
        left:undefined,
        articles:undefined,
        carouselList:undefined
      }
    },
    mounted () {

      /* customer-swiper */
      new Swiper('.customer-swiper', {
        loop: true, // 循环模式选项
        slidesPerView: 3,
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      })
      /* wowjs动画 */
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
      })
      wow.init()

      this.listBannerConfigs()
      this.listLeftConfigs()

      this.listArticle()

      //图片无线滚动
      /*window.onload = function(){
        var scroll = document.getElementById("scroll");
        var ul = scroll.children[0];//孩子都要加[0]无论几个孩子,因为得到的是数组
        var num = 0;//控制左侧值left
        var timer = null;	//声明定时器
        timer = setInterval(autoPlay,5);
        function autoPlay(){
          num--;
          num <=-1500 ? num = 0 : num;	//一张图宽300，四张1200，左为负
          ul.style.left = num+"px";
        }
        scroll.onmouseover = function(){
          clearInterval(timer);
        }
        scroll.onmouseout = function(){
          timer = setInterval(autoPlay,5);
        }
      }*/

    },
    methods: {
      listBannerConfigs () {
        const data = {
          params:{
            typeName:'首页banner',
            sort:'showOrder,asc'
          }
        }
        listPictureConfigs(data).then((response) => {
          this.swiperList = response.data.content
          this.$nextTick(()=>{//下一个UI帧再初始化swiper
            this.initSwiper()
          })
          $('.preloader').fadeOut(1000);
        }).catch((error) => {
          console.log(error)
        })
      },
      listLeftConfigs () {
        const data = {
          params:{
            typeName:'首页左图片',
            sort:'showOrder,asc'
          }
        }
        listPictureConfigs(data).then((response) => {
          console.log(response.data.content[0])
          this.left = response.data.content[0]
        }).catch((error) => {
          console.log(error)
        })
      },
      initSwiper(){
        /* banner-swiper */
        if (this.swiper != null) return;
        this.swiper = new Swiper('.banner-swiper', {
          loop: true, // 循环模式选项
          effect: 'fade',
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          // 延迟加载
          lazy: {
            loadPrevNext: true,
            // preloaderClass:'swiper-lazy-preloader',
          },
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
        })
      },
      listArticle () {
        const data = {
          params:{
            featureId:'1189714214260969472',
            size:10,
            // pubTime:moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
            enabled:1,
            sort:'viewCount,desc'
            // sort:'showOrder,asc'
          }
        }
        listArticle(data).then((response) => {
          this.articles = response.data.content
          this.carouselList = []
          var length = this.articles.length
          for (var i=0;i<length/3;i++) {
            var item = []
            item.push(this.articles[i])
            item.push(this.articles[i+1])
            item.push(this.articles[i+2])
            this.carouselList.push(item)
          }
          console.log("list:"+this.carouselList)
          // console.log(this.articles)
        }).catch((error) => {
          console.log(error)
        })
      },
    }
  }
</script>
<style scoped>
  /* 整体盒子 */
  #HomePage {
    width: 100%;
  }

  /* 轮播图 */
  #swiper {
    width: 90%;
    margin: 0 auto;
  }

  .banner-swiper {
    width: 100%;
    height: 100%;
  }

  .banner-swiper .swiper-slide img {
    width: 100%;
    height: auto;
    margin: auto;
  }

  .banner-swiper .swiper-slide {
    position: relative;
  }

  /* 大数据管理系统 */
  #bigData {
    width: 90%;
    margin: 2rem auto;
    transition: all ease 0.6s;
    box-sizing: border-box;
  }

  /* 产品排行榜 */
  #ranking {
    width: 90%;
    margin: auto;
  }

  #ranking .customer-title {
    font-size: 3rem;
    color: rgb(102, 102, 102);
    margin: 0 0 3rem;
  }

  /* 走马灯图片适配 */
  #ranking img {
    /*width: 100%;*/
    /*height: inherit;*/
  }

  .ranking-content {
    width: 100%;
    margin: 4rem auto;
    text-align: center;
  }

  .ranking-block {
    float: left;
    width: 33%;
    /*height: 300px;*/
  }

  .ranking-block .item-title {
    font-size: 1.5rem;
    color: grey;
    font-weight: bold;
  }

  /* 媒体查询（手机） */
  @media screen and (max-width: 768px) {
   /* #swiper {
      !*height: 200px;*!
      !*margin: 0 30px;*!
    }*/

    /*#bigData {
      padding: 30px;
    }*/

    .ranking-content {
      width: 100%;
      margin: auto;
      text-align: center;
    }
  }

  /* 媒体查询（平板） */
  @media screen and (min-width: 768px) and (max-width: 996px) {
    #swiper {
      /*height: 400px;*/
      margin: 0 57px;
    }

    #bigData {
      padding: 60px;
    }

    #bigData .bigData-title {
      font-size: 30px;
    }

    #bigData .bigData-device {
      font-size: 30px;
      margin: 30px 0 15px;
    }

  }
</style>
<style>
  /*.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }*/


  /* 无限滚动 */
  /*img{vertical-align: top;} !*去掉上下两张图片之间的默认间隙距离*!*/
 /* .box{
    !*width: 600px;*!
    height: 400px;
    margin: auto;
    background-color: pink;
    overflow: hidden;
    position: relative;
  }
  .box ul li{
    float: left;
  }
  .box ul{
    width: 500%;	!*四张图片就是百分之四百*!
    position: absolute;!*大盒子做动画，就给大盒子定位*!
    left: 0;
    top: 0;
  }

  .box img {
    !*height: 100px;*!
    width: 300px;
    height: 400px;
  }*/

</style>

