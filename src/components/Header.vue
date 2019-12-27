<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild fixDiv2">

    <!-- start preloader -->
    <div class="preloader">
      <div class="sk-spinner sk-spinner-rotating-plane"></div>
    </div>
    <!-- end preloader -->

    <!-- 电脑导航 -->
    <div class="header-nav hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logo.svg">
      </div>
      <!-- 导航内容 -->
        <ul class="header-nav-wrapper">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            class="my-font"
            @click="navClick(index,item.name)"
          >
            <router-link :to="item.path">
              {{item.name}}
<!--              <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>-->
              <i class="underline"></i>
            </router-link>
            <!--<dl v-if="item.children.length>0">
              <dt v-for="(i,n) in item.children" :key="n">
                <router-link :to="i.path" style="font-weight: initial">{{i.name}}</router-link>
                              <router-view></router-view>
              </dt>
            </dl>-->
          </li>
        </ul>
      <div class="header-language">
        <a href="https://mydydhw.tmall.com/shop/view_shop.htm?tracelog=twddp&user_number_id=3335031321" target="_blank"><img src="/static/img/天猫.png" style="height: 45px;display: inline;;margin-right: 8px"></a>
        <a href="https://weibo.com/p/1006067030184028/home?from=page_100606&mod=TAB&is_hot=1#place" target="_blank"><img src="/static/img/微博.png" style="height: 45px;display: inline;margin-right: 8px"></a>
        <el-dropdown @command="changeLanguage" class="lang-dropdown my-font">
          <span class="el-dropdown-link ">
<!--          {{$t('nav.language')}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <img :src="langUrl" style="height: 45px;display: inline">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in options" :key="item.value" :command="item.value">{{item.label}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--        <a href="http://weixin.com"><img src="@/assets/img/tianmao.jpg" style="height: 30px;width: 30px;float: right">天猫</a>-->
        <!--        <a href="http://weibo.com">&lt;!&ndash;<img src="@/assets/img/weibo.png">&ndash;&gt;微博</a>-->
      </div>

    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <!--        <img class="center-block" src="@/assets/img/logo_black.png" alt="logo">-->
        <img src="@/assets/img/logo.svg">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        navBarFixed:false,
        navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
        menuName: '首页',
        menuClass: 'glyphicon glyphicon-menu-down',
        options: [
          {
            value: 'zh-cn',
            label: '简体中文',
          }, {
            value: 'zh-hk',
            label: '繁體中文',
          }, {
            value: 'en',
            label: 'English',
          }],
        value: '',
        langUrl:'/static/img/简.png'
      }
    },
    computed: {
      navList () {
        return [
          {
            name: this.$t('nav.home'),
            path: '/',
            children: [],
          },
          {
            name: this.$t('nav.dessertStation'),
            path: '/dessertStation2',
            children: [],
          },
          {
            name: this.$t('nav.brandStory'),
            path: '/brand',
            children: [],
          },
          {
            name: this.$t('nav.live'),
            path: '/live',
            children: [
              /*{
                name: this.$t('nav.latest'),
                path: '/live/latest',
              },
              {
                name: this.$t('nav.news'),
                path: '/live/news',
              },*/
            ],
          },
          {
            name: this.$t('nav.contactus'),
            path: '/contactus',
            children: [],
          },
        ]
      },

    },
    mounted() {
      $('.preloader').fadeOut(1500)
      /*$(function(){
        var banOffTop=$("#header").offset().top;//获取到距离顶部的垂直距离
        var scTop=0;//初始化垂直滚动的距离
        $(document).scroll(function(){
          scTop=$(this).scrollTop();//获取到滚动条拉动的距离
          //console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
          if(scTop>=banOffTop){
            //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
            $("#header").addClass("fixDiv");
          }else{
            $("#header").removeClass("fixDiv");
          }
        })
      })*/
      // 事件监听滚动条
      window.addEventListener('scroll', this.watchScroll)
    },
    methods: {
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 50 时，实现吸顶效果
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
      },
      navClick (index, name) {
        this.navIndex = index
        sessionStorage.setItem('navIndex', index)
        this.menuName = name
        console.log(index+ " " + name)
      },
      menuClick () {
        if (this.menuClass == 'glyphicon glyphicon-menu-down') {
          this.menuClass = 'glyphicon glyphicon-menu-up'
        } else {
          this.menuClass = 'glyphicon glyphicon-menu-down'
        }
      },
      changeLanguage (language) {
        this.$i18n.locale = language
        //更换字体
        /*if (language == 'zh-hk') {
          $("#header .header-nav .header-nav-wrapper > li").addClass("hk-font")
          $(".lang-dropdown").addClass("hk-font")
        } else {
          $("#header .header-nav .header-nav-wrapper > li").removeClass("hk-font")
          $(".lang-dropdown").removeClass("hk-font")
        }*/

        //切换图标
        if (language == 'zh-cn') {
          this.langUrl = '/static/img/简.png'
        } else if (language == 'zh-hk') {
          this.langUrl = '/static/img/繁.png'
        }
        else if (language == 'en') {
          this.langUrl = '/static/img/English.png'
        }

      },
      handleCommand (command) {
        this.$message('click on item ' + command)
      },
    },
  }
</script>
<style scoped>
  /* 顶部 */
  #header {
    background: #FFFFFF;
    transition: all ease 0.6s;
    border-bottom: 1px solid #e4e7ed;
  }

  /* PC导航栏 */
  @media screen and (min-width: 768px){
    /* 固定导航栏&覆盖 */
    .fixDiv{
      position:fixed;
      z-index: 999;
      width: 100%;
      top:0;
      left:0;
      background: rgba(255,255,255,1) ;
      /*box-shadow: 0 1px 20px #888;*/
    }

    /*固定导航栏&不覆盖*/
    .fixDiv2 {
      position: fixed;
      width: 100%;
      z-index: 999;
      top: 0;
    }
  }


  #header .header-top {
    height: 50px;
    color: #fff;
    font-size: 12px;
    line-height: 50px;
    background: #7fcff0;
  }

  /* 顶部的图标 */
  #header .header-top span {
    margin: 0 8px;
  }

  /* 导航栏 */
  #header .header-nav {
    /*height: 8rem;*/
    height: 11vh;
    margin: 0 2rem 0.5rem;
    /*width: 80%;*/
    /*margin: auto;*/
  }

  /* 导航栏logo */
  #header .header-nav .header-nav-logo {
    width: 100px;
    height: 100%;
    float: left;
    position: relative;
  }

  /* 导航栏logo图片 */
  #header .header-nav .header-nav-logo img {
    width: 7rem;
    height: 8rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 导航栏 导航容器 */
  #header .header-nav-fixed .header-nav-wrapper {
    line-height: 50px;
  }

  #header .header-nav .header-nav-wrapper {
    line-height: 110px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
  }

  /* 导航栏 每个导航 */
  #header .header-nav .header-nav-wrapper > li {
    float: left;
    margin: 0 3rem -1rem;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav .header-nav-wrapper > li > a {
    color: #000;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 自定义字体*/
  .my-font {
    /*font-family: XinQingNian;*/
    font-family: PingFangSC-Ultralight, sans-serif;
  }

  .hk-font {
    font-family:none;
    font-weight: bold;
  }

  /* 导航栏 每个导航下面的 a 链接的下划线 */
  #header .header-nav .header-nav-wrapper > li > a > i {
    display: block;
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    opacity: 0;
    transition: all 0.6s ease;
    background-color: #7fcff0;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 12px;
    transition: transform ease 0.5s;
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
  #header .header-nav .header-nav-wrapper > li > a:hover {
    color: #7fcff0;
    text-decoration: none;
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
  #header .header-nav .header-nav-wrapper > li > a:hover .underline {
    opacity: 1;
    width: 100%;
    left: 0;
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
  #header .header-nav .header-nav-wrapper > li > a:hover span {
    transform: rotate(180deg);
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
  #header .header-nav .header-nav-wrapper > li.active > a {
    color: #7fcff0;
    text-decoration: none;
    border-bottom: 2px solid #7fcff0;
  }

  /* 导航栏 每个导航下面的二级导航容器 */
  #header .header-nav .header-nav-wrapper > li > dl {
    display: none;
    position: absolute;
    width: 168px;
    top: 80%;
    left: 0;
    z-index: 999999;
    box-shadow: 0 0 3px 1px #ccc;
    background: #fff;
  }

  /* 导航栏 每个导航下面的二级导航容器的每个导航 */
  #header .header-nav .header-nav-wrapper > li > dl > dt {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
  #header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
    text-decoration: none;
  }

  /* 导航栏 滑上一级导航显示二级导航 */
  #header .header-nav .header-nav-wrapper > li:hover dl {
    display: block;
  }

  #header .header-nav .header-nav-wrapper > li > dl > dt:hover {
    cursor: pointer;
    background: #ccc;
  }

  /* 切换语言 */
  .header-language {
    float: right;
    /*line-height: 110px;*/
    margin-top: 30px;
  }

  /* 切换语言下拉框样式 */
  .lang-dropdown {
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
  }

  /*app*/
  @media screen and (max-width: 997px) {
    #header .header-nav-m {
      position: relative;
    }

    /* 导航栏logo容器 */
    #header .header-nav-m .header-nav-m-logo {
      height: 80px;
      position: relative;
    }

    /* 导航栏logo图片 */
    #header .header-nav-m .header-nav-m-logo img {
      width: 95px;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    /* 导航栏  菜单容器 */
    #header .header-nav-m .header-nav-m-menu {
      color: #fff;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      background: #7fcff0;
      position: relative;
    }

    /* 导航栏 菜单图标 */
    #header .header-nav-m .header-nav-m-menu-wrapper {
      position: absolute;
      top: 50%;
      right: 20px;
      margin-top: -20px;
      width: 50px;
      height: 40px;
      color: #fff;
      z-index: 999999;
      font-size: 12px;
    }

    /* 导航栏 */
    #header .header-nav-m .header-nav-m-wrapper {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      background: white;
      z-index: 9999999;
    }

    /* 导航栏 每个导航 */
    #header .header-nav-m .header-nav-m-wrapper > li {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
    }

    /* 导航栏 每个导航下面的 a 链接 */
    #header .header-nav-m .header-nav-m-wrapper > li > a {
      color: black;
      font-size: 15px;
      font-weight: bold;
      padding: 15px 0;
      position: relative;
    }

    /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
    #header .header-nav .header-nav-wrapper > li > a > span {
      font-size: 10px;
    }

    .el-dropdown-link {
      cursor: pointer;
      color: #fffdfd;
    }

    .el-icon-arrow-down {
      font-size: 12px;
    }

    .link {
      display: inline-block;
      /*background: url('../assets/img/weibo2.jpg');*/
      /*background: black;*/
    }
  }

  /*平板*/
  @media screen and (min-width: 768px) and (max-width: 1265px) {
    /* 导航栏 每个导航 */
    #header .header-nav .header-nav-wrapper > li {
      float: left;
      margin: 0 1rem -1rem;
      position: relative;
    }
  }

</style>
