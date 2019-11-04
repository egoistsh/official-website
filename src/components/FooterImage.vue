<template>
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
    height: 830px;
    /*height: 100%;*/
    color: #fff;
    overflow: hidden;
    text-align: center;
    background-image: url("/static/img/尾部.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  .aboutUs {
    margin:200px auto 0;
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
    position: relative;
    top: 115px;
    color: black;
  }

  .wechat {
    position: relative;
    top: 290px;
    right: 212px;
  }

  .redbook {
    position: relative;
    top: 259px;
    right: 3px;
  }

  .more {
    position: relative;
    top: 228px;
    right: -190px;
  }

  .more2 {
    position: relative;
    top: 218px;
    right: -190px;
  }

  p {
    color: black;
  }
</style>
<style>

</style>

