<template>
  <div id="HomePage" class="flex-container">
<!--    <Header></Header>-->
    <!--    快速跳转模块-->
    <div class="quick-jump">
      <div class="quick-jump-img">
      </div>
    </div>

    <div class="container-fuild">
      <el-carousel :height="bannerHeight + 'px'" :interval=2500>
        <el-carousel-item v-for="(item,index) in swiperList" :key="index">
           <el-image class="swiper-lazy img-responsive" :src="item.imageUrl">
            <div slot="placeholder">
<!--              <el-image class="swiper-lazy img-responsive" src="/static/img/preBanner.jpg"></el-image>-->
              <el-image class="swiper-lazy img-responsive" src="https://kaze.oss-cn-shenzhen.aliyuncs.com/myd/preBanner.jpg"></el-image>
            </div>
          </el-image>
<!--          <img class="img-responsive" v-lazy="item.imageUrl"/>-->
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--<div class="container-fuild visible-xs">
      <el-carousel height="158">
        <el-carousel-item v-for="(item,index) in swiperList" :key="index">
          <el-image class="swiper-lazy img-responsive bannerImg" :src="item.imageUrl">
            <div slot="placeholder">
              <el-image class="swiper-lazy img-responsive" src="/static/img/preBarner.jpg"></el-image>
            </div>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>-->

    <div id="mydShow" class="container-fluid" :style="{'background-image':'url('+ mydShow.imageUrl + ')'}">
<!--    图片懒加载的形式-->
<!--    <div id="mydShow" class="container-fluid" v-lazy:background-image="{src: mydShow.imageUrl}">-->
      <div class="mydShow-font">
        <span>{{$t('home.video.span1')}}</span><br/>
        <span>{{$t('home.video.span2')}}</span><br/>
        <span>{{$t('home.video.span3')}}</span><br/>
        <span>{{$t('home.video.span4')}}</span>
      </div>
      <div class="wow zoomIn videoShow">
        <video width="100%" height="auto" controls
               poster="#">
          <source src="/static/品牌宣传片初版.mp4" type="video/mp4">
          <!--          <source src="http://myd-official.com/image/品牌宣传片初版.mp4" type="video/mp4">-->
        </video>
        <!--        <iframe height=498 width=510 src='http://player.youku.com/embed/XNDEyNDIxNDI2MA==' frameborder=0></iframe>-->
      </div>
    </div>
    <div id="ranking">
    </div>
    <div class="portfolio-items wow zoomIn animated">
      <figure class="image-Item" style="" v-for="(item,index) in mydShowList" :key="index">
<!--        <img src="/static/img/portfolio_1.jpg" alt="img25" style="width: 100%;height: auto">-->
        <img v-lazy="item.imageUrl" alt="img" style="width: 100%;height: auto">
        <figcaption>
          <h2 style="font-size: 27px;font-weight: 700;padding-top: 20px">{{item.title}}</h2>
          <p class="description">
            <!--Zoe never had the patience of her sisters. She deliberately punched the bear in his
            face.-->
            {{item.brief}}
          </p>
        </figcaption>
      </figure>
    </div>

    <div class="section-dark">
      <i class="fa fa-quote-left section-icon" aria-hidden="true"></i>
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
  import { WOW } from 'wowjs'
  import { listArticle, listPictureConfigs, count } from '@/api/portal.js'
  // import carousel from 'vue-owl-carousel'
  // import Slide from '../components/Slide'

  /**
   * 记录访问，只有页面刷新或者第一次加载才会记录
   */
  count().then(res => {})

  export default {
    name: 'HomePage',
    components: {
      // Slide,
      // carousel,
    },
    data () {
      return {
        bannerHeight: '',
        screenWidth: '',
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
        mydShow: {imageUrl: undefined},
        articles: undefined,
        carouselList: undefined,

        loading:true
      }
    },
    computed: {
      mydShowList() {
        return [
          {
            imageUrl:'http://myd-official.com/image/upimg_1574220542248231342.jpg',
            title:this.$t('home.mydShow.muffin.title'),
            brief:this.$t('home.mydShow.muffin.brief')
          },
          {
            imageUrl:'http://myd-official.com/image/upimg_1575012106408923969.jpg',
            title:this.$t('home.mydShow.milkyTea.title'),
            brief:this.$t('home.mydShow.milkyTea.brief')
          },
          {
            imageUrl:"http://myd-official.com/image/upimg_1574220620150754059.jpg",
            title:this.$t('home.mydShow.iceCream.title'),
            brief:this.$t('home.mydShow.iceCream.brief')
          },
          {
            imageUrl:"http://myd-official.com/image/upimg_1574220649386702210.png",
            title:this.$t('home.mydShow.toast.title'),
            brief:this.$t('home.mydShow.toast.brief')
          },
          {
            imageUrl:"http://myd-official.com/image/upimg_1575011593504171137.jpg",
            title:this.$t('home.mydShow.banana.title'),
            brief:this.$t('home.mydShow.banana.brief')
          },
          {
            imageUrl:"http://myd-official.com/image/upimg_1574220704271296935.jpg",
            title:this.$t('home.mydShow.cupCake.title'),
            brief:this.$t('home.mydShow.cupCake.brief')
          },
          {
            imageUrl:"http://myd-official.com/image/upimg_1575012122641605391.jpg",
            title:this.$t('home.mydShow.Benji.title'),
            brief:this.$t('home.mydShow.Benji.brief')
          },
          {
            imageUrl:"http://myd-official.com/image/upimg_1574220734154112098.jpg",
            title:this.$t('home.mydShow.Pudding.title'),
            brief:this.$t('home.mydShow.Pudding.brief')
          }
        ]
      }
    },
    mounted () {
      this.screenWidth = $(window).width();
      this.setSize();
      const that = this
      window.addEventListener('resize', function() {
        that.screenWidth = $(window).width();
        console.log(that.screenWidth)
        that.setSize();
      }, false);

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

    },
    methods: {
      setSize() {
        this.bannerHeight = 1100 / 2560 * this.screenWidth
        // if(this.bannerHeight > 740) this.bannerHeight = 740
        // if(this.bannerHeight < 360) this.bannerHeight = 360
      },
      listBannerConfigs () {
        const data = {
          params: {
            typeName: '首页banner',
            sort: 'showOrder,asc',
          },
        }
        listPictureConfigs(data).then((response) => {
          this.swiperList = response.data.content
          this.loading = false
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

          /*for (var i=0;i < this.articles.length;i++) {
            for (var j=0;j < this.mydShowList.length;j++) {
              if (this.articles[i].title === this.mydShowList[j].title) {
                this.mydShowList[j].imageUrl = this.articles[i].imageUrl
                break
              }
            }
          }*/
          for (var i=0 ;i<this.mydShowList.length;i++) {
            this.mydShowList[i].imageUrl = this.articles[i].imageUrl
          }
          console.log(this.mydShowList)

          /*this.carouselList = []
          var length = this.articles.length
          for (var i = 0; i < length / 3; i++) {
            var item = []
            item.push(this.articles[i])
            item.push(this.articles[i + 1])
            item.push(this.articles[i + 2])
            this.carouselList.push(item)
          }
          console.log('list:' + this.carouselList)*/
          // console.log(this.articles)
        }).catch((error) => {
          console.log(error)
        })
      },
      quickJump (page, id) {
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

  .bannerImg{
    width: 100%;
    height: inherit;
    min-height: 360px;
    min-width: 1400px;
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
    height: 20rem;
    /*width: 20rem;*/
    background-image: url("/static/img/bigLogo.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

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
    /*background-image: url("/static/img/mydShow.jpg");*/
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }

  .mydShow-font {
    width: fit-content;
    position: relative;
    top: 55%;
    left: 50%;
    transform: translate(-50%, 0);

    color: #dddddd;
    font-size: 1.8rem;
    font-family: PingFangSC-Ultralight, sans-serif;
    text-align: center;
    line-height: 2.5rem;
    /*text-shadow: -4px 3px 8px black;*/
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
    /*left: 15%;*/
    /*width: 27rem;*/
    width: 100%;
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
    /*font-family: DS;*/
    font-family: PingFangSC-Light, sans-serif;
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
      width: 45rem;
      position: relative;
      left: 50%;
      top: 41%;
      transform: translate(-50%, 0);
    }

    .videoShow video {
      width: 45rem;
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
      left: 43%;
    }
  }

  /* 媒体查询（平板） */
  @media screen and (min-width: 768px) and (max-width: 996px) {
    /*视频居中*/
    /*.videoShow {
      position: relative;
      left: 50%;
      top: 41%;
      transform: translate(-150%, 0);
    }*/
  }

/*  flex布局*/
  .flex-container {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
<style>
  /*修改element 轮播按钮样式*/
  .el-carousel__button {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
  }

  .el-carousel__indicator.is-active button {
    background:#007aff;
  }

  .el-carousel__arrow {
    color:#7fcff0;
    background-color: rgba(0,0,0,0);
  }

  .el-carousel__arrow:hover {
    color:#7fcff0;
    background-color: rgba(0,0,0,0);
  }

  /*[class*=" el-icon-"], [class^=el-icon-] {
    font-size: 60px;
  }*/

  .el-carousel__arrow--left,.el-carousel__arrow--right{
    font-size: 60px;
    /*margin: 0 35px;*/
    height: 80px;
    width: 80px;
  }

  @media screen and (max-width: 996px) {
    .el-carousel__container {
      height: 168px;
    }
  }

</style>

