<template>
  <div id="ServiceDetail">
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="floor-nav" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block hidden-xs" id="myNav">
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serialList"
              :key="index">
              <a :href="'#'+item.id">
                <div class="line"></div>
              </a>
            </li>
            <li>
              <a href="#" @click="GoTop" id="to-top">
              </a>
            </li>
          </ul>
        </div>
        <div class="load" v-loading='loading' v-show="loading" element-loading-text="拼命加载中"></div>
        <div class="content" v-show="!loading">
          <div>
            <img src="/static/img/甜品站-1.jpg" class="img-responsive">
            <img src="/static/img/甜品站-2.jpg" class="img-responsive">
            <img src="/static/img/甜品-3.jpg" class="img-responsive">

          </div>
          <div :id=item.id class="content-block" v-for="(item,index) in serialList" :key="index">
            <img src="../assets/img/de/产品系列-底图.png" alt="产品系列" class="img-bg img-responsive">
            <img :src="item.bgImg" alt="梦妆花园" class="img-bg img-responsive">
            <img :src="item.bgImg2" alt="梦妆花园" class="img-bg img-responsive" @load="imageLoaded">
            <div class="con">
              <!--              <div class="tit tit01"><img src="../assets/img/de/产品系列-底图.png" alt="5大原料故事" class="img-responsive"></div>-->
              <div class="tit tit02 wow bounceInUp"><img :src="item.serialImg" alt="05 莲花" class="img-responsive"></div>
              <div class="img img01"><img src="../assets/img/de/img_sec3_6_01.jpg" alt="梦妆花园" class="img-responsive">
              </div>
              <div class="img img02 reveal-top"><img src="../assets/img/de/img_sec3_6_02.jpg" alt="梦妆花园"
                                                     class="img-responsive"></div>
              <div class="img img03 reveal-img"><img src="../assets/img/de/img_sec3_6_03.jpg" alt="梦妆花园"
                                                     class="img-responsive"></div>
              <div class="img img04"><img src="../assets/img/de/pdt_sec3_9.jpg" alt="梦妆花园" class="img-responsive"></div>
              <div class="txt txt03 reveal-top" style="color: white">
                                <img src="../assets/img/de/txt_sec3_6_03.png" class="img-responsive">
<!--                永远清新的安神颗粒的哈桑领导看哈斯卡拉的撒好看的的撒开了好多和克拉斯DHL卡手了肯定打算看来回答客户收到货雷克萨打算考虑到了贺卡收到-->
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
    //在模板渲染成html或者模板编译进路有前调用created（）
    created(){
      //创建时执行跳转锚点位置
      this.$nextTick(() => {this.getlocal()})
    },
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
        serialList: [
          {
            id: 'section-1',
            serialImg: '/static/img/松饼系列.png',
            bgImg: '/static/img/松饼系列1.jpg',
            bgImg2: '/static/img/松饼系列2.jpg',
            title: '品牌含义',
            eng_title: 'Brand meaning',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-2',
            serialImg: '/static/img/冰淇淋系列.png',
            bgImg: '/static/img/冰淇淋-1.jpg',
            bgImg2: '/static/img/冰淇淋-2.jpg',
            title: 'MYD理念',
            eng_title: 'MYD Mind',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-3',
            serialImg: '/static/img/布丁系列.png',
            bgImg: '/static/img/布丁-1.jpg',
            bgImg2: '/static/img/布丁-2.jpg',
            title: '品牌历程',
            eng_title: 'Brand Road',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-4',
            serialImg: '/static/img/香蕉船系列.png',
            bgImg: '/static/img/香蕉船-1.jpg',
            bgImg2: '/static/img/香蕉船-2.jpg',
            title: 'XXX',
            eng_title: 'XXX',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-5',
            serialImg: '/static/img/奶茶系列.png',
            bgImg: '/static/img/奶茶-1.jpg',
            bgImg2: '/static/img/奶茶-2.jpg',
            title: 'XXX',
            eng_title: 'XXX',
            content:
              '<h3>这是标题1</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p><h3>这是标题2</h3><p>这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。这里是内容，请根据实际需要修改。</p>',
          },
          {
            id: 'section-6',
            serialImg: '/static/img/吐司系列.png',
            bgImg: '/static/img/吐司-1.jpg',
            bgImg2: '/static/img/吐司-2.jpg',
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
          live: false,
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
        distance: '2rem',
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
        distance: '2rem',
        // 其他可用的动画效果
        opacity: 1,
        // easing: 'linear',
        easing: 'ease-in-out',
        scale: 0.9,
        viewFactor: 0.5,
      })

    },
    methods: {
      imageLoaded () {
        this.loading = false
      },
      GoTop () {
        (function smoothscroll () {
          var currentScroll =
            document.documentElement.scrollTop || document.body.scrollTop
          if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll)
            window.scrollTo(0, currentScroll - currentScroll / 10)
          }
        })()
      },
      //从我本地找到id
      getlocal(){
        //找到锚点id
        let selectId = localStorage.getItem("told");
        let toElement = document.getElementById(selectId);
        console.log("test"+toElement)
        //如果对应id存在，就跳转
        if(selectId){
          // toElement.scrollIntoView()
          console.log("success")
        }
      }
    },
    //离开页面进行对localStorage  id销毁，避免其他入口进来有锚点问题(监听销毁事件)
    /*destroyed(){
      localStorage.setItem("toId",'')
    }*/
  }
</script>
<style scoped>
  .container {
    width: 90%;
    /*position: relative;*/
  }

  ul.nav-tabs {
    width: 5rem;
    margin-top: 4rem;
    border: 0;
    z-index: 99999;
  }

  ul.nav-tabs li {
    text-align: center;
    margin: 0;
    height: 10rem;
  }

  ul.nav-tabs li a {
    margin: 0;
    width: 5rem;
    height: 5rem;
    background: rgba(0, 0, 0, 0);
    background-image: url("../assets/img/icon_01.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 5rem 5rem;
    border-radius: 50%;
    border-width: 0.1rem;
    border-color: gray;
  }

  ul.nav-tabs li.active a,
  ul.nav-tabs li.active a:hover {
    border: 0;
    background: rgba(0, 0, 0, 0);
    background-image: url("../assets/img/icon_01_on.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 5rem 5rem;
    border-radius: 50%;
  }

  #to-top {
    border: 0;
    background: rgba(0, 0, 0, 0);
    background-image: url("../assets/img/goTop.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 5rem 5rem;
    border-radius: 50%;
  }

  .content-block {
    min-height: 8rem;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .floor-nav {
    position: fixed;
    z-index: 100;
    top: 10%;
    right: 1%;
  }

  .line {
    position: absolute;
    left: 50%;
    top: 5rem;
    width: 0.1rem;
    height: 5rem;
    background-color: #b7b7b7;
  }

  .tit {
    position: absolute;
  }

  .tit01 {
    top: 5.7%;
    width: 6.3%;
  }

  .tit02 {
    left: 0.1rem;
    top: 0.1rem;
    z-index: 10;
    /*animation:blink 1s infinite;
    -webkit-animation:blink 1s infinite;*/ /*Safari and Chrome*/
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }

  .img01 {
    position: absolute;
    left: 50%;
    top: 19%;
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
    height: 5rem;
  }
</style>
