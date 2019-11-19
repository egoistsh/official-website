<template>
  <div>
    <div id="footer" class="container-fluid hidden-xs">
      <!--    <img src="/static/img/A首页.png" class="img-responsive">-->
      <div class="aboutUs">
        <h2 class="title">{{$t('home.footer.title')}}</h2>
        <span class="txt">{{$t('home.footer.span')}}</span><br/>
        <span class="txt">{{$t('home.footer.span2')}}</span><br>
        <span class="txt">{{$t('home.footer.span3')}}</span>
      </div>

      <el-button type="text" class="learn-more">{{$t('home.footer.learnMore')}}</el-button>
      <p class="wechat">{{$t('home.footer.wechat')}}</p>
      <p class="redbook">{{$t('home.footer.redbook')}}</p>
      <p class="more">{{$t('home.footer.more')}}</p>
      <p class="more2">{{$t('home.footer.more2')}}</p>

    </div>
    <div id="footer-m" class="container-fluid visible-xs">
      <div class="wechat-m"></div>
      <span class="wechat-span">公众号</span>
      <div class="redbook-m"></div>
      <span class="redbook-span">小红书</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'FooterImage',
    data () {
      return {}
    },
  }
</script>
<style scoped>
  #footer {
    width: 100%;
    height: 785px;
    color: #fff;
    /*overflow: hidden;*/
    text-align: center;
    background-image: url("/static/img/images/甜品站_13.jpg");
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
  }

  .aboutUs {
    margin: 150px auto 0;
    width: 450px;
    height: 240px;
  }

  .title {
    height: 30px;
    line-height: 30px;
    color: #6c6d6c;
    font-size: 22px;
    letter-spacing: 2px;
    margin-bottom: 40px;
    text-align: center;
  }

  .txt {
    color: #747574;
    line-height: 30px;
    text-indent: 24px;
    font-size: 14px;
    text-align: center;
  }

  .learn-more {
    position: absolute;
    top: 71.5%;
    left: 48.3%;
    color: black;
  }

  .wechat {
    position: absolute;
    top: 98%;
    left: 35.5%;
    width: 10rem;
  }

  .redbook {
    position: absolute;
    top: 98%;
    left: 47%;
    width: 10rem;
  }

  .more {
    position: absolute;
    top: 98%;
    left: 57.5%;
    width: 10rem;
  }

  .more2 {
    position: absolute;
    top: 100%;
    left: 57.5%;
    width: 10rem;
  }

  p {
    color: black;
  }

/*  app端footer*/
  #footer-m {
    width: 100%;
    height: 30rem;
    /*height: 100%;*/
    color: #fff;
    overflow: hidden;
    text-align: center;
    background-image: url("/static/img/images/甜品站_13.jpg");
    background-repeat: no-repeat;
    background-position: -19rem,0rem;
  }

  .wechat-m {
    width: 9rem;
    height: 9rem;
    background-image: url("/static/img/尾部.png");
    background-position:101rem 78rem;
    margin: 2rem auto 0;
  }

  .redbook-m {
    width: 9rem;
    height: 9rem;
    background-image: url("/static/img/尾部.png");
    background-position:83.4rem 78rem;
    margin: 2rem auto 0;
  }

  .wechat-span {
    color: black;
    font-weight: bold;
  }

  .redbook-span {
    color: black;
    font-weight: bold;
  }
</style>
<style>

</style>

