<template>
  <div>
    <div id="footer" class="container-fluid">
      <!--    <img src="/static/img/A首页.png" class="img-responsive">-->
      <div class="aboutUs">
        <h2 class="title">{{$t('home.footer.title')}}</h2>
        <span class="txt">{{$t('home.footer.span')}}</span><br/>
        <span class="txt">{{$t('home.footer.span2')}}</span><br>
        <span class="txt">{{$t('home.footer.span3')}}</span>
      </div>

      <el-button round plain class="learn-more">{{$t('home.footer.learnMore')}}</el-button>
      <div class="link">
        <div class="">
          <el-image src="/static/img/footer/wechat.png"></el-image>
          <p>{{$t('home.footer.wechat')}}</p>
        </div>
        <div class="">
          <el-image src="/static/img/footer/redbook.png"></el-image>
          <p>{{$t('home.footer.redbook')}}</p>
        </div>
        <div class="">
          <el-image src="/static/img/footer/MYD.png"></el-image>
          <p>{{$t('home.footer.more')}}</p>
          <p>{{$t('home.footer.more2')}}</p>
        </div>
      </div>
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
    height: 835px;
    color: #fff;
    /*overflow: hidden;*/
    text-align: center;
    background-image: url("/static/img/footer/footer.png");
    background-repeat: no-repeat;
    /*background-position: center;*/
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
    top: 75.5%;
    left: 50%;
    transform: translate(-50%,0);
    color: black;
  }

  p {
    color: black;
  }

  .link {
    position: absolute;
    top: 81%;
    left: 50%;
    transform: translate(-51%,0);
  }

  .link div{
    float: left;
    margin: 0 3rem;
  }
</style>
<style>

</style>

