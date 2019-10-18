<template>
  <div id="HomePage">
    <!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <a :href="item.url" target="_blank"><img class="swiper-lazy" :data-src="item.imageUrl"></a>
            <div class="swiper-lazy-preloader"></div>
            <!--<div class="swiper-slide-title">
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
            </div>-->
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <!-- 大数据管理系统 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
<!--          <a href="#"><img class="img-responsive" src="@/assets/img/sch-banner.jpg" alt="banner"></a>-->
          <a :href="left.url" v-if="left"><img class="img-responsive" :src="left.imageUrl"></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <video width="100%" height="auto" controls>
            <source src="@/assets/img/homeVideo.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    <!-- 您身边的IT专家 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>Title</h1>
        <h3>SubTitle</h3>
        <button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >联系我们
        </button>
        <div class="contactUs-contactWay">
          <a href="http://weixin.com"><span></span></a>
          <a href="http://weibo.com"><span></span></a>
          <a href="http://taobao.com"><span></span></a>
        </div>
      </div>
    </div>
    <!-- 客户评价 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <p class="customer-title text-center">Title</p>
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item,index) in customerList"
              :key="index"
            >
              <div class="customer-logo">
                <img class="center-block" :src="item.logo" alt="logo">
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao.png" alt="引号">
              </div>
              <div class="customer-content1">
                <small>{{item.content}}</small>
              </div>
              <div class="customer-content2">{{item.title}}</div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="row visible-xs customer-block">
          <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
            <div class="customer-logo">
              <img class="center-block" :src="item.logo" alt="logo">
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号">
            </div>
            <div class="customer-content1">
              <small>{{item.content}}</small>
            </div>
            <div class="customer-content2">
              <small>{{item.title}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 为什么选择我们 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p>为什么选择我们</p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-3 server-wrapper"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import { WOW } from 'wowjs'
  import {listArticle,listPictureConfigs} from '@/api/portal.js'

  export default {
    name: 'HomePage',
    data () {
      return {
        swiperList: [],
        customerList: [
          {
            logo: require('@/assets/img/logo_hp.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_kk.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_toyota.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_kk.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_hp.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_toyota.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_kk.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          },
          {
            logo: require('@/assets/img/logo_hp.png'),
            title:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
            content:
              '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素。',
          }
        ],
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
        left:undefined
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
      }
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
    height: 600px;
  }

  #swiper .banner-swiper {
    width: 100%;
    height: 100%;
  }

  #swiper .banner-swiper .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  #swiper .banner-swiper .swiper-slide {
    position: relative;
  }

  #swiper .banner-swiper .swiper-slide-title {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(51, 51, 51, 0.534);
    text-align: center;
    line-height: 80px;
  }

  #swiper .banner-swiper .swiper-slide-title > h1 {
    font-size: 50px;
    margin-top: 12%;
  }

  #swiper .banner-swiper .swiper-slide-title > p {
    font-size: 20px;
    margin-top: 1%;
    font-weight: 700;
  }

  /* 大数据管理系统 */
  #bigData {
    padding: 100px;
    transition: all ease 0.6s;
    box-sizing: border-box;
  }

  #bigData .bigData-title {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  #bigData p {
    font-size: 14px;
    color: #333;
    line-height: 2rem;
  }

  #bigData .bigData-device {
    margin: 50px 0 20px;
  }

  /* 您身边的IT专家 */
  #contactUs {
    color: #fff;
    height: 400px;
    background: url("../assets/img/contact_us_bg.jpg") 0 0 no-repeat;
    background-size: 100% 100%;
    transition: all ease 0.6s;
  }

  #contactUs .contactUs-container {
    padding-top: 50px;
  }

  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 40px;
  }

  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 48px;
    height: 48px;
    margin: 30px;
  }

  #contactUs .contactUs-container .contactUs-contactWay a:nth-of-type(1) span {
    background: url("../assets/img/weixin.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }

  #contactUs .contactUs-container .contactUs-contactWay a:nth-of-type(2) span {
    background: url("../assets/img/weibo.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }

  #contactUs .contactUs-container .contactUs-contactWay a:nth-of-type(3) span {
    background: url("../assets/img/twitter.png") 0 0 no-repeat;
    background-size: 100% 100%;
  }

  /* 客户评价 */
  #customer {
    padding: 50px 0;
    box-sizing: border-box;
    background: #efefef;
    transition: all ease 0.6s;
  }

  #customer .customer-title {
    font-size: 30px;
    color: rgb(102, 102, 102);
    margin: 0 0 30px;
  }

  #customer .customer-block {
    background: #fff;
    padding: 30px;
  }

  #customer .customer-logo img {
    width: 94px;
    height: 94px;
    border: 1px solid #ccc;
  }

  #customer .customer-yh img {
    width: 34px;
    height: 34px;
  }

  #customer .customer-content1 {
    padding-bottom: 20px;
    border-bottom: 1px solid #0ce9f1;
  }

  #customer .customer-content2 {
    padding-top: 20px;
  }

  /* 为什么选择我们 */
  #whyChooseUs {
    padding: 100px;
  }

  #whyChooseUs .whyChooseUs-title {
    margin-bottom: 50px;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 25px;
    font-weight: 500;
  }

  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 14px;
  }

  #whyChooseUs .server-block {
    padding: 50px 20px;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }

  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }

  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }

  #whyChooseUs .server-block > div {
    color: #ccc;
  }

  /* 媒体查询（手机） */
  @media screen and (max-width: 768px) {
    #swiper {
      height: 200px;
    }

    #bigData {
      padding: 30px;
    }

    #bigData .bigData-title {
      font-size: 20px;
    }

    #bigData .bigData-device {
      font-size: 20px;
      margin: 10px 0 10px;
    }

    #contactUs {
      height: 200px;
      transition: all ease 0.6s;
    }

    #contactUs .contactUs-container {
      padding-top: 0;
    }

    #contactUs .contactUs-container h1 {
      font-size: 25px;
    }

    #contactUs .contactUs-container h3 {
      font-size: 18px;
    }

    #contactUs .contactUs-container button {
      width: 200px;
      height: 30px;
      margin-top: 20px;
    }

    #contactUs .contactUs-container .contactUs-contactWay span {
      display: inline-block;
      width: 28px;
      height: 28px;
      margin: 10px;
    }

    #customer {
      padding: 30px 0;
      box-sizing: border-box;
      background: #fff;
    }

    #customer .customer-title {
      font-size: 16px;
      font-weight: bold;
    }

    #customer .customer-logo img {
      width: 48px;
      height: 48px;
    }

    #customer .customer-block {
      padding: 30px;
    }

    #customer .customer-block > div {
      padding: 30px 0;
    }

    #whyChooseUs {
      padding: 20px 0;
      transition: all ease 0.6s;
    }

    #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
      font-size: 20px;
      font-weight: 700;
    }

    #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
      font-size: 12px;
    }

    #whyChooseUs .server-block {
      padding: 50px 0;
      border: 1px solid #ccc;
      border-bottom: 5px solid #ccc;
    }

    #whyChooseUs .server-block img {
      width: 48px;
      height: 48px;
    }

    #whyChooseUs .server-block > p {
      font-size: 20px;
      margin: 30px 0;
    }

    #whyChooseUs .server-block > div {
      color: #ccc;
    }
  }

  /* 媒体查询（平板） */
  @media screen and (min-width: 768px) and (max-width: 996px) {
    #swiper {
      height: 400px;
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

    #contactUs {
      height: 300px;
    }

    #contactUs .contactUs-container {
      padding-top: 50px;
    }

    #contactUs .contactUs-container h1 {
      font-size: 30px;
    }

    #contactUs .contactUs-container h3 {
      font-size: 20px;
    }

    #contactUs .contactUs-container button {
      width: 300px;
      height: 50px;
      margin-top: 30px;
    }

    #contactUs .contactUs-container .contactUs-contactWay span {
      display: inline-block;
      width: 32px;
      height: 32px;
      margin: 15px;
    }

    #customer .customer-title {
      font-size: 24px;
    }

    #whyChooseUs {
      padding: 20px 0;
    }

    video {
      /*object-fit: fill;*/
    }

    .loading {
      color: #1b6d85;
    }
  }
</style>

