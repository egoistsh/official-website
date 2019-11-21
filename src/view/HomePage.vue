<template>
  <div id="HomePage">
    <Header></Header>
    <!-- start preloader -->
    <div class="preloader">
      <div class="sk-spinner sk-spinner-rotating-plane"></div>
    </div>
    <!-- end preloader -->

    <!--    快速跳转模块-->
    <div class="quick-jump">
      <div class="quick-jump-img">
        <p style="text-align: center">
          <el-image src="/static/img/bigLogo.jpg" style="height: 20rem;width: 20rem"></el-image>
        </p>
      </div>
      <div class="quick-jump-font">
        <!--<router-link to="/dessertStation#section-3">Ice-Cream Backpack</router-link>
        <router-link to="/dessertStation#section-3">Muffin Backpack</router-link>
        <router-link to="/dessertStation#section-3">Pizza Backpack</router-link>
        <router-link to="/dessertStation#section-3">Banana split Backpack</router-link>-->
        <p style="text-align: center">
          <a href="#" @click="quickJump('dessertStation','section-3')">Ice-Cream Backpack</a>/
          <a href="#" @click="quickJump('dessertStation','section-3')">Muffin Backpack</a>/
          <a href="#" @click="quickJump('dessertStation','section-3')">Pizza Backpack</a>/
          <a href="#" @click="quickJump('dessertStation','section-3')">Banana split Backpack</a>
        </p>
      </div>
    </div>

    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper wow zoomIn">
        <header></header>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <!--            <a :href="item.url" target="_blank"><img class="swiper-lazy" :data-src="item.imageUrl"></a>-->
            <img class="swiper-lazy img-responsive" :data-src="item.imageUrl">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" ></div>
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
    <!--<div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <a :href="left.url" v-if="left"><img class="img-responsive" :src="left.imageUrl"></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <video width="100%" height="auto" controls poster="https://bk.image.styleweb.com.cn/%E5%8F%91%E5%B8%83%E7%BD%91%E7%AB%99%E7%9A%84%E5%89%AF%E6%9C%AC.mp4?vframe/jpg/offset/3">
            <source src="@/assets/img/homeVideo.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>-->
    <div id="mydShow" class="container-fluid" :style="{'background-image':'url('+ mydShow.imageUrl + ')'}">
      <div class="mydShow-font">
        <span>{{$t('home.video.span1')}}</span><br/>
        <span>{{$t('home.video.span2')}}</span><br/>
        <span>{{$t('home.video.span3')}}</span><br/>
        <span>{{$t('home.video.span4')}}</span>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-3 wow zoomIn videoShow">
        <video width="100%" height="auto" controls
               poster="https://bk.image.styleweb.com.cn/%E5%8F%91%E5%B8%83%E7%BD%91%E7%AB%99%E7%9A%84%E5%89%AF%E6%9C%AC.mp4?vframe/jpg/offset/3">
          <source src="/static/品牌宣传片初版.mp4" type="video/mp4">
          <!--          <source src="http://myd-official.com/image/品牌宣传片初版.mp4" type="video/mp4">-->
        </video>
        <!--        <iframe height=498 width=510 src='http://player.youku.com/embed/XNDEyNDIxNDI2MA==' frameborder=0></iframe>-->
      </div>
    </div>
    <div id="ranking">
      <!--      <p class="customer-title text-center">{{$t('home.ranking')}}</p>-->

      <!--      轮播--终极-->
      <!--      <Slide></Slide>-->

      <!-- <ul>
         <carousel :autoplay="true" :nav = "false" :margin="20" :responsive="{300:{items:2},600:{items:1,}}">
           <li v-for="item in articles">
             <img class="img-owl" v-bind:src="item.imageUrl" />
           </li>
         </carousel>
       </ul>-->
      <!--      走马灯图片轮询-->
      <!--<div class="hidden-xs">
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
      </div>-->
    </div>
    <!--<div id="mydImage">
      <figure></figure>
    </div>-->
    <div class="portfolio-items wow zoomIn animated">
      <figure class="image-Item" style="" v-for="item in articles">
<!--        <img src="/static/img/portfolio_1.jpg" alt="img25" style="width: 100%;height: auto">-->
        <img :src="item.imageUrl" alt="img25" style="width: 100%;height: auto">
        <figcaption>
          <h2 style="font-size: 27px;font-weight: 700">{{item.title}}</h2>
          <p class="description">
            <!--Zoe never had the patience of her sisters. She deliberately punched the bear in his
            face.-->
            {{item.brief}}
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="section-dark">
      <i class="fas fa-quote-left section-icon"></i>
      <div class="section-contain">
        <span>MAKE</span><br/>
        <span>YOU</span><br/>
        <span>DIFFERENT</span>
      </div>
    </div>
    <!--<div class="test">
      <div class="containTest">
        <h1>test</h1>
      </div>
        <div class="containBg-img"></div>
    </div>-->
    <GoTop></GoTop>
    <FooterImage></FooterImage>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import { WOW } from 'wowjs'
  import { listArticle, listPictureConfigs, count } from '@/api/portal.js'
  import carousel from 'vue-owl-carousel'
  import Slide from '../components/Slide'

  /**
   * 记录访问，只有页面刷新或者第一次加载才会记录
   */
  count().then(res => {})

  export default {
    name: 'HomePage',
    components: {
      Slide,
      carousel,
    },
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
        swiper: undefined,
        mydShow: {imageUrl: undefined},
        articles: undefined,
        carouselList: undefined,
      }
    },
    mounted () {

      /* customer-swiper */
      new Swiper('.customer-swiper', {
        // lazyLoading:true,
        // preloadImages:false,
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
        // 延迟加载
        lazy: {
          loadPrevNext: true,
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
        live: false,
      })
      wow.init()

      this.listBannerConfigs()
      this.listMydShowConfigs()

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
          params: {
            typeName: '首页banner',
            sort: 'showOrder,asc',
          },
        }
        listPictureConfigs(data).then((response) => {
          this.swiperList = response.data.content
          $('.preloader').fadeOut(1000)
          this.$nextTick(() => {//下一个UI帧再初始化swiper
            this.initSwiper()
          })

        }).catch((error) => {
          console.log(error)
        })
      },
      listMydShowConfigs () {
        const data = {
          params: {
            typeName: '首页视频背景',
            sort: 'showOrder,asc',
          },
        }
        listPictureConfigs(data).then((response) => {
          console.log(response.data.content[0])
          this.mydShow = response.data.content[0]
        }).catch((error) => {
          console.log(error)
        })
      },
      initSwiper () {
        /* banner-swiper */
        if (this.swiper != null) return
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
          },
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
        })
      },
      listArticle () {
        const data = {
          params: {
            featureId: '1189714214260969472',
            size: 8,
            // pubTime:moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
            enabled: 1,
            sort: 'pubTime,desc',
            // sort:'showOrder,asc'
          },
        }
        listArticle(data).then((response) => {
          this.articles = response.data.content
          this.carouselList = []
          var length = this.articles.length
          for (var i = 0; i < length / 3; i++) {
            var item = []
            item.push(this.articles[i])
            item.push(this.articles[i + 1])
            item.push(this.articles[i + 2])
            this.carouselList.push(item)
          }
          console.log('list:' + this.carouselList)
          // console.log(this.articles)
        }).catch((error) => {
          console.log(error)
        })
      },
      quickJump (page, id) {
        localStorage.setItem('told', id)
        this.$router.push('/' + page)
      },
    },
  }
</script>
<style scoped>

  /* 整体盒子 */
  #HomePage {
    width: 100%;
  }

  /* 轮播图 */
  #swiper {
    width: 100%;
    margin: 0 auto;
    /*height: 78rem;*/
  }

  /*轮播图上一页按钮颜色修改*/
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%237fcff0'%2F%3E%3C%2Fsvg%3E")  !important;
  }

  /*轮播图下一页按钮颜色修改*/
  .swiper-button-next{
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%237fcff0'%2F%3E%3C%2Fsvg%3E")  !important;
    transform:rotate(180deg)
  }

  .banner-swiper {
    width: 100%;
    height: 100%;
  }

  .banner-swiper .swiper-slide img {
    /*width: 100%;*/
    /*height: auto;*/
    /*margin: auto;*/
  }

  .banner-swiper .swiper-slide {
    position: relative;
  }

  /* quick-jump快速跳转模块*/
  .quick-jump {
    /*margin-top: 10rem;*/
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

  .quick-jump-img {
  }

  /* 大数据管理系统 */
  #bigData {
    width: 90%;
    margin: 2rem auto;
    transition: all ease 0.6s;
    box-sizing: border-box;
  }

  /* mydShow */
  #mydShow {
    /*width: 90%;*/
    width: 100%;
    height: 80rem;
    margin: 2rem auto;
    transition: all ease 0.6s;
    box-sizing: border-box;
    /*position: relative;*/
    background-image: url("/static/img/mydShow.jpg");
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  .mydShow-font {
    width: 70rem;
    position: relative;
    top: 55%;
    left: 28%;

    color: #dddddd;
    font-size: 1.8rem;
    font-family: PingFangSC-Ultralight, sans-serif;
    text-align: center;
    line-height: 3rem;
    text-shadow: -4px 3px 8px black;
    letter-spacing: 5px;
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
    /*clear: both;*/
    overflow: hidden;
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

  #header {
    /*background: rgba(255, 255, 255, .4);*/
  }

  .portfolio-items {
    /*visibility: visible;*/
    animation-name: zoomIn;
    /*position: relative;*/
    /*height: 1169.81px;*/
    overflow: hidden;
  }

  .image-Item {
    position: relative;
    float: left;
    width: 25%;
    text-align: center;
  }

  .image-Item:hover .description {
    opacity: 1;
  }

  .image-Item:hover figcaption {
    /*opacity: 1;*/
    /*top: 64.5%;*/
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  figcaption {
    position: absolute;
    /*top: 77%;*/
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    /*padding: 1em;*/
    height: 70px;
    /*opacity: 0;*/
    background: #fff;
    color: #3c4a50;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  .description {
    position: absolute;
    bottom: 15rem;
    /*top: 50%;*/
    left: 15%;
    width: 27rem;
    /*padding: 0 2em;*/
    color: #fff;
    text-transform: none;
    font-size: 1.8rem;
    line-height: 2rem;
    opacity: 0;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
  }

  .section-dark {
    /*position: relative;*/
    height: 340px;
    background: black;
    color: #fff;
    padding: 30px 0;
    /*padding: 150px 0;*/
    border-top: 1px solid grey;
  }

  .section-contain {
    /*position: absolute;*/
    /*left: 42.5%;*/
    text-align: center;
    font-family: DS;
    font-size: 55px;

  }

  .section-icon {
    position: relative;
    left: 50%;
    margin-bottom: 25px;
  }

  /* PC */
  @media screen and (min-width: 768px) {
    #swiper {
      /*height: 78rem;*/
    }

    /*导航栏与banner融合*/
    /*#header {
      position: absolute;
      z-index: 999;
      width: 100%;
      background: rgba(255, 255, 255, .4) !important;
      box-shadow: 0 1px 20px #888;
    }*/
    /*视频居中*/
    .videoShow {
      position: relative;
      left: 36%;
      top: 41%;
    }

    .videoShow video {
      width: 42rem;
      /*height: 40rem;*/
      outline: none;
    }
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

    /*视频居中*/
    .videoShow {
      top: 54%;
    }

    .mydShow-font {
      width: 100%;
      top: 64%;
      left: 0;
      /*font-size: 1rem;*/
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

  /*test*/
  /*.test {
    position: relative;
    z-index: 0;
    min-height: 100vh!important;
  }

  .containTest {
    z-index: 0;
  }

  .containBg-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;

    background-image: url(/static/img/A首页.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }*/
</style>

