<template>
  <div id="ServiceDetail">
    <!--    <div class="banner container-fuild text-center">品牌故事</div>-->
    <div class="container">
      <div class="row">
        <div class="floor-nav" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block hidden-xs" id="myNav">
            <!--            <p>品牌服务</p>-->
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <!--              <a :href="'#'+item.id">{{item.title}}</a>-->
              <a :href="'#'+item.id">
                <span class="point"><!--<img class="nav-img" src="../assets/img/nav_point.png">--></span>
                <div class="line"></div>
              </a>
            </li>
          </ul>
        </div>
        <div class="load" v-loading='loading' v-show="loading" element-loading-text="拼命加载中"></div>
        <div class="content" v-show="!loading">
          <div :id=item.id class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <!-- <h2 :id="item.id">
             {{item.title}}
             <small>/ {{item.eng_title}}</small>
           </h2>
             <div v-html="item.content"></div>-->
            <!--            <img src="../assets/img/bg_sec1_1.jpg">-->

            <img src="../assets/img/de/_sec3_2_01.gif" alt="梦妆花园" class="img-bg img-responsive">
            <img src="../assets/img/de/_sec3_6_02.jpg" alt="梦妆花园" class="img-bg img-responsive">
            <img src="../assets/img/de/_sec3_6_03.jpg" alt="梦妆花园" class="img-bg img-responsive" @load="imageLoaded">
            <div class="con">
              <div class="tit tit01"><img src="../assets/img/de/tit_section3.png" alt="5大原料故事" class="img-responsive"></div>
              <div class="tit tit02 over"><img src="../assets/img/de/tit_sec3_6_161222.png" alt="05 莲花" class="img-responsive"></div>
              <div class="img img01"><img src="../assets/img/de/img_sec3_6_01.jpg" alt="梦妆花园" class="img-responsive"></div>
              <div class="img img02 reveal-top"><img src="../assets/img/de/img_sec3_6_02.jpg" alt="梦妆花园" class="img-responsive"></div>
              <div class="img img03 reveal-img"><img src="../assets/img/de/img_sec3_6_03.jpg" alt="梦妆花园" class="img-responsive"></div>
              <div class="img img04"><img src="../assets/img/de/pdt_sec3_9.jpg" alt="梦妆花园" class="img-responsive"></div>
              <div class="txt txt03 reveal-top" style="color: white">
<!--                <img src="../assets/img/de/txt_sec3_6_03.png">-->
                永远清新的安神颗粒的哈桑领导看哈斯卡拉的撒好看的的撒开了好多和克拉斯DHL卡手了肯定打算看来回答客户收到货雷克萨打算考虑到了贺卡收到
              </div>
            </div>
            <div class="txt txt04 reveal-top"><img
              src="../assets/img/de/txt_sec3_6_04.png" class="img-responsive"></div>
            <div class="txt txt05"><img
              src="../assets/img/de/txt_sec3_6_05.png" class="img-responsive"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { WOW } from 'wowjs'
  import scrollReveal from 'scrollreveal'

  export default {
    name: 'ServiceDetail',
    data () {
      return {
        loading: true,
        scrollReveal: scrollReveal(),
        id: 'section-1',
        serviceNavList: [
          {
            id: 'section-1',
            title: '品牌含义',
          },
          {
            id: 'section-2',
            title: 'MYD理念',
          },
          {
            id: 'section-3',
            title: '品牌历程',
          },
          {
            id: 'section-4',
            title: 'XXX',
          },
        ],
        serviceContentList: [
          {
            id: 'section-1',
            title: '品牌含义',
            eng_title: 'Brand meaning',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-2',
            title: 'MYD理念',
            eng_title: 'MYD Mind',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-3',
            title: '品牌历程',
            eng_title: 'Brand Road',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-4',
            title: 'XXX',
            eng_title: 'XXX',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
        ],
      }
    },
    mounted () {
      /*this.id = this.$route.params.id
      var top = document.getElementById(this.id).offsetTop
      $(window).scrollTop(top + 300)
      $('#myNav').affix({
        offset: {
          top: 300,
        },
      })*/
      var wow = new WOW({
          // animateClass: 'infinite'
        },
      )
      wow.init()

      // window.scrollReveal = new scrollReveal({reset:true})

      this.scrollReveal.reveal('.reveal-top', {
        // 动画的时长
        duration: 500,
        // 延迟时间
        delay: 300,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '100px',
        // 其他可用的动画效果
        opacity: 1,
        easing: 'ease-in-out',
        scale: 0.9,
      })

      this.scrollReveal.reveal('.reveal-img', {
        // 动画的时长
        duration: 500,
        // 延迟时间
        delay: 300,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '100px',
        // 其他可用的动画效果
        opacity: 1,
        // easing: 'linear',
        easing: 'ease-in-out',
        scale: 0.9,
        viewFactor: 0.5,
      })

      var newImg = new Image()
      newImg.src = '../assets/img/de/_sec3_6_02.jpg'
    },
    methods: {
      imageLoaded () {
        this.loading = false
      },
    },
  }
</script>
<style scoped>
  .container {
    width: 100%;
    /*position: relative;*/
  }

  .banner {
    /*color: #fff;*/
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    /*background-image: url("../assets/img/banner_2.jpg");*/
    background-image: url("../assets/img/bg_sec1_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
  }

  ul.nav-tabs {
    width: 50px;
    margin-top: 38px;
    border: 0;
    /*border-radius: 4px;*/
    /*background: #fff;*/
    z-index: 99999;
    /*border: 1px solid #474747;*/
    /*box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);*/
  }

  ul.nav-tabs li {
    text-align: center;
    margin: 0;
    height: 100px;
    /*border-top: 1px solid #474747;*/
  }

  ul.nav-tabs p {
    /*color: #fff;*/
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    /*background: #474747;*/
    margin: 0;
    padding: 10px 0;
  }

  ul.nav-tabs li:first-child {
    /*border-top: none;*/
  }

  ul.nav-tabs li a {
    margin: 0;
    padding: 8px 16px;
    /*border-radius: 0;*/
    border: 0;
    width: 56px;
    height: 60px;
    background: rgba(0, 0, 0, 0);
    background-image: url("../assets/img/icon_01.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px 50px;
  }

  ul.nav-tabs li.active a,
  ul.nav-tabs li.active a:hover {
    /*color: #fff;*/
    /*background: #474747;*/
    /*border: 1px solid #474747;*/
    border: 0;
    background: rgba(0, 0, 0, 0);
    background-image: url("../assets/img/icon_01_on.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50px 50px;
  }

  ul.nav-tabs li:first-child a {
    /*border-radius: 4px 4px 0 0;*/
  }

  ul.nav-tabs li:last-child a {
    /*border-radius: 0 0 4px 4px;*/
  }

  ul.nav-tabs.affix {
    top: 30px;
  }

  .content-block {
    /*width: 200px;*/
    /*margin: 50px auto;*/
    margin: 0 40px;
    min-height: 800px;
    text-align: center;
    /*background:url("../assets/img/bg_sec1_1.jpg");*/
    /*color: #FFF;*/
    /*background-color: #404040;*/
    position: relative;
  }

  .content-block img {
    /*width: 100%;*/
    /*height: 100%;*/
  }

  .img-bg {
    /*margin: auto;*/
    /*width: 100%;*/
    /*height: 100%;*/
  }

  .content-block > h2 {
    padding: 20px 0;
    /*border-bottom: 1px solid #ccc;*/
  }

  .floor-nav {
    position: fixed;
    z-index: 100;
    /* top: 200px; */
    /* left: 50px; */
    top: 19%;
    right: 2.5%;
  }

  .line {
    position: absolute;
    left: 50%;
    top: 53px;
    width: 1px;
    height: 50px;
    background-color: #b7b7b7;
  }

  .nav-img {
    margin: 0 auto;
  }

  .tit {
    position: absolute;
    left: 50%;
  }

  .tit01 {
    /*position: absolute;*/
    top: 5.7%;
    /*left: 50%;*/
    width: 6.3%;
  }

  .tit02 {
    /*position: absolute;*/
    /*left: 50%;*/
    top: 9.6%;
    width: 7.4%;
    margin-left: -1%;
  }

  .img01 {
    position: absolute;
    left: 50%;
    top: 22%;
    width: 29%;
    margin-left: -13%;
  }

  .img02 {
    position: absolute;
    left: 25%;
    top: 60%;
    width: 17%;
  }

  .img03 {
    position: absolute;
    left: 43%;
    top: 70%;
    width: 21.8%;
    /*margin-left: -13%;*/
  }

  .img04 {
    position: absolute;
    left: 65.6%;
    top: 70%;
    width: 12.6%;
  }

  .txt03 {
    position: absolute;
    left: 78.6%;
    top: 58%;
    width: 17%;
  }

  .txt04 {
    position: absolute;
    left: 25%;
    top: 70%;
    width: 17%;
  }

  .txt05 {
    position: absolute;
    left: 65.6%;
    top: 80%;
    width: 17%;
  }

  .load {
    width: 100%;
    height: 500px;
  }
</style>
